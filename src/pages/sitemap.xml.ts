// src/pages/sitemap.xml.ts
// Generates /sitemap.xml at build time with all indexable static pages,
// video detail pages, category pages, genre pages, cast pages, and tag pages.

import type { APIRoute } from 'astro';
import {
  videos,
  SITE_CONFIG,
  slugify,
  getAllCategories,
  getAllGenres,
  getAllCast,
  getAllTags,
} from '../data/videos';

function xmlEscape(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

interface UrlEntry {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}

function buildSitemap(entries: UrlEntry[]): string {
  const base = SITE_CONFIG.siteUrl.replace(/\/$/, '');

  const urlTags = entries
    .map((e) => {
      const loc = xmlEscape(`${base}${e.loc}`);
      const parts = [`    <loc>${loc}</loc>`];
      if (e.lastmod) parts.push(`    <lastmod>${e.lastmod}</lastmod>`);
      if (e.changefreq) parts.push(`    <changefreq>${e.changefreq}</changefreq>`);
      if (e.priority) parts.push(`    <priority>${e.priority}</priority>`);
      return `  <url>\n${parts.join('\n')}\n  </url>`;
    })
    .join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlTags,
    '</urlset>',
  ].join('\n');
}

export const GET: APIRoute = () => {
  const today = new Date().toISOString().split('T')[0];
  const entries: UrlEntry[] = [];
  const seenLocs = new Set<string>();

  function addEntry(entry: UrlEntry) {
    if (!seenLocs.has(entry.loc)) {
      seenLocs.add(entry.loc);
      entries.push(entry);
    }
  }

  // ── Static pages (Indexable only; /search/ excluded due to noindex) ──
  const staticPages: UrlEntry[] = [
    { loc: '/',             changefreq: 'daily',   priority: '1.0', lastmod: today },
    { loc: '/categories/',  changefreq: 'weekly',  priority: '0.8', lastmod: today },
    { loc: '/about/',       changefreq: 'monthly', priority: '0.4', lastmod: today },
  ];
  staticPages.forEach(addEntry);

  // ── Video detail pages ──────────────────────────────────────
  for (const video of videos) {
    const slug = slugify(video.title);
    if (!slug) continue;
    addEntry({
      loc: `/videos/${slug}/`,
      lastmod: video.date ?? today,
      changefreq: 'monthly',
      priority: '0.7',
    });
  }

  // ── Category pages ──────────────────────────────────────────
  const categories = getAllCategories();
  for (const cat of categories) {
    const slug = slugify(cat);
    if (!slug) continue;
    addEntry({
      loc: `/category/${slug}/`,
      lastmod: today,
      changefreq: 'daily',
      priority: '0.6',
    });
  }

  // ── Genre pages (Indexable taxonomy) ────────────────────────
  const genres = getAllGenres();
  for (const genre of genres) {
    const slug = slugify(genre);
    if (!slug) continue;
    addEntry({
      loc: `/genres/${slug}/`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.6',
    });
  }

  // ── Cast / Pornstar pages (Indexable taxonomy) ──────────────
  const cast = getAllCast();
  for (const actor of cast) {
    const slug = slugify(actor);
    if (!slug) continue;
    addEntry({
      loc: `/cast/${slug}/`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.6',
    });
  }

  // ── Tag pages ───────────────────────────────────────────────
  const tags = getAllTags();
  for (const tag of tags) {
    const slug = slugify(tag);
    if (!slug) continue;
    addEntry({
      loc: `/tags/${slug}/`,
      lastmod: today,
      changefreq: 'weekly',
      priority: '0.5',
    });
  }

  return new Response(buildSitemap(entries), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
