# Ravneet Singh Pahwa — Portfolio

A single-page portfolio site (Home / About / Skills / Projects / Experience /
Certifications / Contact), built as plain HTML/CSS/JS so it deploys straight
to Netlify, Vercel, or GitHub Pages with no build step.

## Files
- `index.html` — all page content and structure
- `style.css` — design tokens (colors, type) and layout
- `script.js` — scroll progress trace, rotating job titles, mobile nav toggle
- `assets/` — put your photo, resume PDF, and project screenshots here

## Before you publish — replace these placeholders

1. **Résumé**: add your PDF at `assets/Ravneet_Singh_Pahwa_Resume.pdf`
   (or rename and update the two `href` references in `index.html`).
2. **Photo**: the hero currently uses a data-monitor illustration instead of
   a headshot. If you want your professional photo, add it to `assets/` and
   I can wire it into the hero layout — say the word.
3. **Email / LinkedIn / GitHub**: update the three links in the `#contact`
   section and the résumé button's `href`.
4. **Project screenshots**: each project card has a dashed placeholder box
   with a suggested filename (e.g. `executive-dashboard.png`). Drop images
   into `assets/` and swap the `<div class="proj-shot">` for an `<img>` tag.
5. **Experience timeline**: the three entries under "Experience" are
   placeholders — swap in your real employers, dates, and achievement
   bullets (the `[X]%` markers are meant to be filled with real numbers).
6. **Certifications**: keep only the certifications you've actually
   completed and delete the rest.

## Run locally
Just open `index.html` in a browser — no build tools required.

## Deploy to Netlify
1. Push this folder to a GitHub repository.
2. In Netlify: **Add new site → Import an existing project → connect the repo**.
3. Build command: leave blank. Publish directory: `/` (repo root).
4. Deploy — Netlify will give you a live URL, which you can later point a
   custom domain at.

## Design notes
- Palette: ink navy, paper white, clinical teal, signal amber, coral —
  chosen to read as clinical/dashboard rather than generic "startup."
- The hero's animated vital-sign monitor is the page's signature element,
  tying the "data" and "healthcare" halves of your title together. The
  thin line at the very top of the page echoes it as a scroll-progress
  indicator.
- Typefaces: Newsreader (headings), Inter (body), IBM Plex Mono (labels,
  stats, KPIs — reinforcing the "data" feel without overusing monospace).

## Adding more pages later
This is intentionally a single page for now, per your request. When you're
ready for a multi-page version (e.g. individual project detail pages),
I can split each project card into its own `projects/<slug>.html` page
linked from the Featured Projects section — just ask.
