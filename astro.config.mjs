// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL ?? 'https://marcadigital.dev.br';

// https://astro.build/config
export default defineConfig({
  site,
  output: 'static',
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
