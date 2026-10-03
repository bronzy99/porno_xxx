// src/pages/sitemap.xml.ts
// Generates /sitemap.xml at build time with all static pages,
// video detail pages, category pages, and tag pages.

import type { APIRoute } from 'astro';
import {
  videos,
  SITE_CONFIG,
  slugify,
  getAllCategories,
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

  // ── Static pages ────────────────────────────────────────────
  const staticPages: UrlEntry[] = [
    { loc: '/',             changefreq: 'daily',   priority: '1.0', lastmod: today },
    { loc: '/categories/',  changefreq: 'weekly',  priority: '0.8', lastmod: today },
    { loc: '/search/',      changefreq: 'monthly', priority: '0.5', lastmod: today },
    { loc: '/about/',       changefreq: 'monthly', priority: '0.4', lastmod: today },
  ];
  entries.push(...staticPages);

  // ── Video pages ─────────────────────────────────────────────
  for (const video of videos) {
    entries.push({
      loc: `/videos/${slugify(video.title)}/`,
      lastmod: video.date ?? today,
      changefreq: 'monthly',
      priority: '0.7',
    });
  }

  // ── Category pages ───────────────────────────────────────────
  const categories = getAllCategories();
  for (const cat of categories) {
    entries.push({
      loc: `/category/${slugify(cat)}/`,
      lastmod: today,
      changefreq: 'daily',
      priority: '0.6',
    });
  }

  // ── Tag pages ────────────────────────────────────────────────
  const tags = getAllTags();
  for (const tag of tags) {
    entries.push({
      loc: `/tags/${slugify(tag)}/`,
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
