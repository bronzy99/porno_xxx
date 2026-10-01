# Porno XXX – Astro Video Platform

A modern, fast, SEO-optimized adult video directory built with **Astro** (SSG) and deployed to **Cloudflare Pages** with real pageview counting via **Cloudflare KV**.

---

## Project Structure

```
/
├── src/
│   ├── data/
│   │   └── videos.ts         ⭐ ADD VIDEOS + CONFIG HERE
│   ├── styles/
│   │   └── global.css        All styles
│   ├── layouts/
│   │   └── BaseLayout.astro  Header, footer, age gate
│   ├── components/
│   │   └── VideoCard.astro   Reusable video card
│   └── pages/
│       ├── index.astro       Homepage
│       ├── categories.astro  Category browser
│       ├── search.astro      Search page
│       ├── about.astro       Terms / Privacy / DMCA
│       └── videos/
│           └── [slug].astro  Video watch page (slug URL)
├── functions/
│   └── api/
│       └── views.ts          Cloudflare Pages Function for KV view counting
├── public/                   Static assets (favicons, etc.)
├── astro.config.mjs
├── wrangler.toml
└── package.json
```

### URL Structure (SEO-friendly)

| Page | URL |
|---|---|
| Homepage | `/` |
| Category browser | `/categories/` |
| Search | `/search/?q=keyword` |
| About | `/about/` |
| Video watch | `/videos/gorgeous-amateur-couple-home-session/` |

Slugs are **auto-generated from video titles** — no manual URL management needed.

---

## 1. Quick Start

```bash
# Install dependencies
npm install

# Local dev server (no KV — views show 0)
npm run dev

# Build for production
npm run build

# Preview with Cloudflare KV (requires wrangler + KV setup)
npm run cf:preview
```

---

---

## 2. Graphical Admin Interface (Local Development Only)

> 🔒 **Security Notice:** The Admin Dashboard and all admin features are **strictly local development tools**. They are **completely excluded from production builds** (`dist/`), meaning zero admin files or public admin links are ever deployed to Cloudflare Pages.

To launch the Admin Dashboard locally:
```bash
npm run admin
```
This automatically starts your local environment and opens `http://localhost:4321/admin/` in your browser.

### Features in the Admin UI:
- **Interactive Form**: Inputs for Title, Embed URL, Thumbnail URL, Hover Preview URL, Category, Tags, Duration, and Publication Date.
- **Automatic Quality Tagging**: Click the `480p`, `720p`, `1080p`, or `4K` buttons to instantly tag your video with resolution.
- **Real-Time Live Preview**: Shows an instant visual preview of the card with the red quality badge, duration, and hover video loop before saving.
- **Embed Allowlist Checker**: Automatically checks if your embed host is in `ALLOWED_EMBED_HOSTS` and offers a 1-click button to allowlist it.
- **Direct Save to File**: Click **"💾 Save to videos.ts"** to write changes directly to `src/data/videos.ts` on your computer!
- **Catalog Management**: Search, edit existing videos, duplicate entries as templates, move videos to the top of the homepage, or delete.

---

## 3. Video Quality Badges (480p, 720p, 1080p, 4K)

To display a **bold red quality badge** (red background with white text) in the top-left corner of any video card:

Simply include the quality in the video's `tags` array or click the quality buttons in the Admin dashboard:
- `'720p'` or `'720'`
- `'1080p'` or `'1080'`
- `'480p'` or `'480'`
- `'4k'` or `'2160p'`

**Example:**
```ts
{
  id: '001',
  title: 'EvilAngel 26 09 27 Mya Quinn XXX',
  tags: ['720p', 'Mya', 'Quinn'], // ← '720p' triggers the red quality badge!
  ...
}
```

The badge will automatically render at top-left of the thumbnail with a red background and white text. It also displays on the video watch page!

---

## 3. How to Change the Site Name

In `src/data/videos.ts`:

```ts
export const SITE_CONFIG = {
  name: 'Your Site Name',   // ← Change this
  siteUrl: 'https://your-domain.com', // ← Set your real domain
  ...
};
```

---

## 4. How to Change the Accent Color

```ts
export const SITE_CONFIG = {
  accentColor: '#ff6b35',  // ← Any hex color
  ...
};
```

The color is applied as a CSS custom property (`--accent`) at runtime — all buttons, badges, tags, and highlights update automatically.

---

## 5. How to Add an Authorized Embed Provider

In `src/data/videos.ts`, add the hostname to `ALLOWED_EMBED_HOSTS`:

```ts
export const ALLOWED_EMBED_HOSTS: string[] = [
  'player.myprovider.com',   // ← Add here
  'embed.myprovider.com',
];
```

> **Security:** Only iframes whose hostname matches this allowlist will be rendered. Unmatched URLs show a safe error message instead.

---

## 6. Real Pageview Counting with Cloudflare KV

Views are tracked server-side in Cloudflare KV. Each video page:
1. POSTs to `/api/views?slug=video-slug` on first visit (session-deduplicated)
2. GETs the current count on repeat visits
3. Displays the live count in the UI

### Setup Steps

```bash
# Step 1 — Install Wrangler (if not already)
npm install -g wrangler
wrangler login

# Step 2 — Create KV namespaces
wrangler kv namespace create VIEWS_KV
wrangler kv namespace create VIEWS_KV --preview

# Step 3 — Paste the returned IDs into wrangler.toml
# Step 4 — In Cloudflare Pages dashboard:
#   Settings → Functions → KV namespace bindings
#   Add: Variable = VIEWS_KV, Namespace = (the one you created)
```

> **Without KV**: The site works fine — views just show `0` or `—` until KV is configured. No errors.

---

## 7. Deploy to Cloudflare Pages

### Method A — Git (recommended)

1. Push this project to **GitHub** or **GitLab**
2. In Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git**
3. Select your repo and configure:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy → every `git push` triggers automatic redeployment

### Method B — Manual Upload

```bash
npm run build
# Then drag-drop the /dist folder in Cloudflare Pages dashboard
```

---

## 8. Categories

Add, rename, or remove in `src/data/videos.ts`:

```ts
export const CATEGORIES = [
  'Latest', 'Popular', 'Trending',
  'Amateur', 'Couples', 'Solo', 'Compilation',
  'MyNewCategory',  // ← Add here
] as const;
```

Then use the exact string as a `category` in video entries.

---

## 9. SEO Notes

- Every video page has its own URL: `/videos/your-title/`
- `<title>`, `<meta description>`, Open Graph, and Twitter Card tags are set per-page
- All video cards are **pre-rendered as static HTML** at build time → Googlebot sees full content
- Set `SITE_CONFIG.siteUrl` to your real domain to enable canonical and OG URL tags
- Replace `https://YOUR-DOMAIN.com/` in all canonical tags before publishing

---

## Technology Stack

| Layer | Choice |
|---|---|
| Framework | Astro 4 (SSG) |
| Styles | CSS3 with custom properties |
| Fonts | Inter via Google Fonts |
| API | Cloudflare Pages Functions |
| Storage | Cloudflare KV (view counts) |
| Hosting | Cloudflare Pages |
| Backend | None |
| Database | Flat TypeScript array in `data/videos.ts` |
