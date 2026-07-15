# Ravneet Singh Pahwa — Portfolio (v2, multi-page)

A framework-free, multi-page portfolio site: Home / Projects / Stack / About / Contact,
each its own HTML file. No build step — deploys straight to Netlify or GitHub Pages.

## Files
- `index.html` — Home: hero, "What I Build" cards, CTA banner
- `projects.html` — 7 featured projects, expandable (click a card) instead of screenshots
- `stack.html` — Technical stack by category
- `about.html` — Bio, facts, experience timeline, certifications, education
- `contact.html` — Contact links
- `style.css` / `script.js` — shared across all pages
- `assets/` — put your résumé PDF here

## What's new vs. the single-page version
- **Multi-page structure** — separate URLs per section, matching the IA of multi-page sites like naveen-dataengineer.netlify.app, without needing a JS framework/build pipeline.
- **Command palette** — press `Cmd+K` / `Ctrl+K` anywhere (or click "Search" in the nav) to jump to any page or run a quick action (email, résumé, LinkedIn, GitHub).
- **Hero upgrades** — "open to roles" badge, direct GitHub/LinkedIn/Email buttons, four icon stat tiles.
- **"What I Build" cards + CTA banner** — new home page sections.
- **Projects without screenshots** — each project is a `<details>` accordion: KPI strip and one-line summary always visible, click to expand full problem/data/ETL/model/KPI/tech detail. No image files needed. Add real screenshots later by inserting `<img>` tags inside `.project-card__body` if you want.
- **Richer sharing** — Open Graph and Twitter Card meta tags on every page, so links shared on LinkedIn/Slack/etc. show a proper title and description.

## Before you publish
1. Add your résumé PDF at `assets/Ravneet_Singh_Pahwa_Resume.pdf`.
2. All contact links (email, LinkedIn, GitHub) are already set to your real details.
3. If you want your photo somewhere, let me know — currently the hero uses the illustrated "vital-sign monitor" instead of a headshot.
4. `og:image` isn't set yet (no image asset) — add one later at `assets/og-image.png` (1200×630) and link it in each page's `<meta property="og:image">` if you want rich link previews.

## Updating on GitHub
Every file here can be replaced individually via GitHub's "Add file → Upload files" —
no need to touch files that haven't changed. If it's your first time pushing this
version, upload all files at once (same process, just select multiple files).
