// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static site (no backend). Deploys to Vercel as static output.
// To switch to dynamic/SSR later (e.g. store leads in Supabase), add
// `@astrojs/vercel` and set `output: 'server'`. See README.
export default defineConfig({
  site: 'https://ypwsites.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
