import { defineConfig } from 'astro/config';

// GitHub Pages serves the site at /vinceportfolio/, so we set the base path.
// When running locally with `npm run dev` this is applied to asset URLs too,
// keeping local preview consistent with production.
export default defineConfig({
  site: 'https://vincesanityyy.github.io',
  base: '/vinceportfolio',
});
