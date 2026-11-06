// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the production domain once it exists.
  // Canonical URLs, OpenGraph URLs and the JSON-LD `url` are all derived from this.
  site: 'https://mireiaacss.github.io',

  // Native i18n routing: English at /, Spanish at /es/, Catalan at /ca/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ca'],
    routing: { prefixDefaultLocale: false },
  },

  // Self-hosted at build time: no runtime request to Google, no layout shift.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Newsreader',
      cssVariable: '--font-newsreader',
      weights: ['300 600'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Geist',
      cssVariable: '--font-geist',
      weights: ['400 600'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Geist Mono',
      cssVariable: '--font-geist-mono',
      weights: ['400 500'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
