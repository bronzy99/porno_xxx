// functions/api/views.ts
// Cloudflare Pages Function — handles GET and POST for video view counts
// Stored in Cloudflare KV under the binding name "VIEWS_KV"
//
// GET  /api/views?slug=video-slug  → { views: number }
// POST /api/views?slug=video-slug  → { views: number }  (increments by 1)

interface Env {
  VIEWS_KV: KVNamespace;
}

const CORS_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Cache-Control': 'no-store',
};

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: CORS_HEADERS,
  });
}

function getSlug(url: URL): string | null {
  const slug = url.searchParams.get('slug');
  if (!slug || slug.length > 200) return null;
  // Sanitize: only allow URL-safe characters
  if (!/^[\w-]+$/.test(slug)) return null;
  return slug;
}

// ── GET — read current view counts (single, batch, or all) ──
export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const url   = new URL(request.url);
  const slug  = getSlug(url);
  const slugs = url.searchParams.get('slugs');
  const isAll = url.searchParams.get('all') === '1' || url.searchParams.get('all') === 'true' || (!slug && !slugs);

  if (!env.VIEWS_KV) {
    if (slug) return jsonResponse({ views: 0, slug });
    return jsonResponse({ views: {} });
  }

  // Single slug query: /api/views?slug=xyz
  if (slug) {
    const raw   = await env.VIEWS_KV.get(`views:${slug}`);
    const views = raw ? parseInt(raw, 10) : 0;
    return jsonResponse({ views, slug });
  }

  // Batch slug query: /api/views?slugs=slug1,slug2,slug3
  if (slugs) {
    const list = slugs.split(',').map(s => s.trim()).filter(s => /^[\w-]+$/.test(s)).slice(0, 50);
    const results: Record<string, number> = {};
    await Promise.all(
      list.map(async (s) => {
        const raw = await env.VIEWS_KV.get(`views:${s}`);
        results[s] = raw ? parseInt(raw, 10) : 0;
      })
    );
    return jsonResponse({ views: results });
  }

  // All views query: /api/views?all=1
  try {
    const list = await env.VIEWS_KV.list({ prefix: 'views:', limit: 100 });
    const results: Record<string, number> = {};
    await Promise.all(
      list.keys.map(async (k) => {
        const raw = await env.VIEWS_KV.get(k.name);
        const itemSlug = k.name.replace(/^views:/, '');
        results[itemSlug] = raw ? parseInt(raw, 10) : 0;
      })
    );
    return jsonResponse({ views: results });
  } catch {
    return jsonResponse({ views: {} });
  }
};

// ── POST — increment view count by 1 ──────────────────────
export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const url  = new URL(request.url);
  const slug = getSlug(url);

  if (!slug) return jsonResponse({ views: 0 });
  if (!env.VIEWS_KV) return jsonResponse({ views: 0 });

  const raw     = await env.VIEWS_KV.get(`views:${slug}`);
  const current = raw ? parseInt(raw, 10) : 0;
  const next    = current + 1;

  await env.VIEWS_KV.put(`views:${slug}`, String(next));

  return jsonResponse({ views: next });
};

// ── OPTIONS — CORS preflight ───────────────────────────────
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin':  '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
