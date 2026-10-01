import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';

export default defineConfig({
  output: 'static',
  build: {
    // generates /videos/my-title/index.html → clean URL /videos/my-title/
    format: 'directory',
  },
  compressHTML: true,
  vite: {
    plugins: [
      {
        name: 'local-admin-dev-only',
        // configureServer ONLY runs in "astro dev" (never during "astro build")
        configureServer(server) {
          // 1. Serve Graphical Admin Dashboard at /admin (local dev only)
          server.middlewares.use((req, res, next) => {
            const url = req.url.split('?')[0];
            if (url === '/admin' || url === '/admin/') {
              try {
                const adminHtmlPath = path.resolve(process.cwd(), 'admin/index.html');
                let html = fs.readFileSync(adminHtmlPath, 'utf8');

                const dataModulePath = path.resolve(process.cwd(), 'src/data/videos.ts');
                server.ssrLoadModule(dataModulePath).then((data) => {
                  const payload = JSON.stringify({
                    videos: data.videos || [],
                    categories: data.CATEGORIES || [],
                    allowedHosts: data.ALLOWED_EMBED_HOSTS || [],
                    siteConfig: data.SITE_CONFIG || {},
                  });
                  html = html.replace('__INJECTED_DATA__', payload);
                  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                  res.end(html);
                }).catch((err) => {
                  console.error('Error loading data module for admin:', err);
                  html = html.replace('__INJECTED_DATA__', '{}');
                  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                  res.end(html);
                });
                return;
              } catch (e) {
                next(e);
                return;
              }
            }
            next();
          });

          // 2. Handle /api/save-videos (local dev only)
          server.middlewares.use('/api/save-videos', (req, res) => {
            if (req.method === 'GET') {
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ active: true, localDev: true }));
              return;
            }

            if (req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk;
              });
              req.on('end', () => {
                try {
                  const data = JSON.parse(body);
                  if (!data.fileContent) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, error: 'Missing fileContent' }));
                    return;
                  }

                  const targetPath = path.resolve(process.cwd(), 'src/data/videos.ts');
                  fs.writeFileSync(targetPath, data.fileContent, 'utf8');

                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ success: true, message: 'Successfully updated src/data/videos.ts!' }));
                } catch (err) {
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ success: false, error: err.message }));
                }
              });
              return;
            }

            res.writeHead(405, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Method not allowed' }));
          });

          // 3. Handle /api/scrape-video (local dev only)
          server.middlewares.use('/api/scrape-video', async (req, res) => {
            if (req.method !== 'POST') {
              res.writeHead(405, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            let body = '';
            req.on('data', (chunk) => { body += chunk; });
            req.on('end', async () => {
              try {
                const { url } = JSON.parse(body || '{}');
                if (!url || typeof url !== 'string' || !url.trim().startsWith('http')) {
                  res.writeHead(400, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ success: false, error: 'A valid http(s) URL is required' }));
                  return;
                }

                const targetUrl = url.trim();

                // Helper: Node parser fallback
                const parseWithNode = async (target) => {
                  const resp = await fetch(target, {
                    headers: {
                      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                      'Accept-Language': 'en-US,en;q=0.9',
                    },
                    signal: AbortSignal.timeout(15000),
                  });
                  if (!resp.ok) throw new Error(`HTTP error ${resp.status} fetching video page`);
                  const html = await resp.text();

                  const decode = (s) => (s || '')
                    .replace(/&amp;/g, '&')
                    .replace(/&lt;/g, '<')
                    .replace(/&gt;/g, '>')
                    .replace(/&quot;/g, '"')
                    .replace(/&#039;/g, "'")
                    .replace(/&#39;/g, "'");

                  const data = {
                    id: '',
                    title: '',
                    thumbnail: '',
                    preview: '',
                    embedUrl: '',
                    category: '',
                    tags: [],
                    duration: '',
                    date: '',
                  };

                  const confMatch = html.match(/window\.xv\.conf\s*=\s*(\{.*?\});/s);
                  let xvConf = {};
                  if (confMatch) {
                    try { xvConf = JSON.parse(confMatch[1]); } catch {}
                  }
                  const dyn = xvConf.dyn || {};
                  const confData = xvConf.data || {};

                  let encodedId = confData.encoded_id_video || xvConf.encoded_id_video || '';
                  if (!encodedId) {
                    const m = target.match(/\/video\.?([a-zA-Z0-9]+)\//);
                    if (m) encodedId = m[1];
                  }
                  if (!encodedId) {
                    const m = html.match(/\/embedframe\/([a-zA-Z0-9]+)/);
                    if (m) encodedId = m[1];
                  }
                  if (encodedId) {
                    data.embedUrl = `https://www.xvideos.com/embedframe/${encodedId}`;
                  }

                  let rawTitle = dyn.video_title || '';
                  if (!rawTitle) {
                    const m = html.match(/<meta property=["']og:title["'] content=["'](.*?)["']/);
                    if (m) rawTitle = m[1];
                  }
                  data.title = decode(rawTitle.trim());

                  const rawTags = dyn.video_tags || confData.video_tags || [];
                  if (Array.isArray(rawTags)) {
                    data.tags = rawTags.map((t) => decode(String(t).trim())).filter(Boolean);
                  }

                  if (data.tags.length > 0) {
                    data.category = data.tags.length > 1 ? data.tags[data.tags.length - 2] : data.tags[0];
                  } else {
                    data.category = dyn.page_main_cat || 'General';
                  }

                  const thumbMatch = html.match(/html5player\.setThumbUrl\('([^']+)'\);/);
                  if (thumbMatch) {
                    data.thumbnail = thumbMatch[1];
                    const dir = thumbMatch[1].substring(0, thumbMatch[1].lastIndexOf('/'));
                    data.preview = `${dir}/preview.mp4`;
                  } else {
                    const ogImg = html.match(/<meta property=["']og:image["'] content=["']([^"']+)["']/);
                    if (ogImg) {
                      data.thumbnail = ogImg[1];
                      const dir = ogImg[1].substring(0, ogImg[1].lastIndexOf('/'));
                      data.preview = `${dir}/preview.mp4`;
                    }
                  }

                  const durMatch = html.match(/<meta property=["']og:duration["'] content=["'](\d+)["']/);
                  if (durMatch) {
                    const sec = parseInt(durMatch[1], 10);
                    const m = Math.floor(sec / 60);
                    const s = sec % 60;
                    data.duration = `${m}:${s < 10 ? '0' : ''}${s}`;
                  }

                  // Set current date instead of source upload date
                  data.date = new Date().toISOString().split('T')[0];

                  data.id = String(confData.id_video || dyn.id || (html.match(/id_video\s*:\s*(\d+)/) || [])[1] || '');

                  return data;
                };

                // Run Python scraper if script exists, with Node fallback
                const pythonScript = path.resolve(process.cwd(), 'admin/scraper.py');
                if (fs.existsSync(pythonScript)) {
                  const { execFile } = await import('node:child_process');
                  execFile('python', [pythonScript, targetUrl], { timeout: 15000 }, async (err, stdout) => {
                    if (!err && stdout && stdout.trim()) {
                      try {
                        const parsed = JSON.parse(stdout.trim());
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ success: true, data: parsed, engine: 'python' }));
                        return;
                      } catch {}
                    }
                    // Fallback to Node fetch if Python errored
                    try {
                      const parsed = await parseWithNode(targetUrl);
                      res.writeHead(200, { 'Content-Type': 'application/json' });
                      res.end(JSON.stringify({ success: true, data: parsed, engine: 'node' }));
                    } catch (nodeErr) {
                      res.writeHead(500, { 'Content-Type': 'application/json' });
                      res.end(JSON.stringify({ success: false, error: nodeErr.message }));
                    }
                  });
                } else {
                  // Direct Node fetch
                  try {
                    const parsed = await parseWithNode(targetUrl);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: true, data: parsed, engine: 'node' }));
                  } catch (nodeErr) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, error: nodeErr.message }));
                  }
                }
              } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: err.message }));
              }
            });
          });
        },
      },
    ],
  },
});
