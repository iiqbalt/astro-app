// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
      server: {
        proxy: {
            '/api/quote': {
            target: 'https://api.quotable.io',
            changeOrigin: true,
            secure: false, // ⚠️ abaikan SSL error
            rewrite: (path) => path.replace(/^\/api\/quote/, '/random'),
            },
        },
    },
  },

  integrations: [svelte()],
});