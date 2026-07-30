# Ronald Vincent Bustillo — Portfolio

A modern, dark, fast portfolio for a back-end web developer. Built with
[Astro](https://astro.build) — ships as static HTML/CSS with a tiny sprinkle of
vanilla JS for the nav.

## Stack

- **Astro** — static site generator, zero JS by default
- Plain CSS (custom properties, mobile-first, responsive)
- Inline SVG icons (no icon-font CDN)
- Google Fonts: Inter + JetBrains Mono

## Develop

```bash
npm install
npm run dev
```

Then open http://localhost:4321/vinceportfolio/

## Build

```bash
npm run build      # outputs to ./dist
npm run preview    # preview the production build
```

## Editing content

All site content lives in **`src/data/portfolio.js`** — your profile, experience,
education, skills, projects, and interests are all structured data there. Edit
that one file; you never need to touch the markup.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
deploys to GitHub Pages automatically.

In your repo settings: **Settings → Pages → Source = GitHub Actions**.

The `base` path in `astro.config.mjs` is set to `/vinceportfolio` to match the
GitHub Pages URL. If you change the repo name, update that `base` too.
