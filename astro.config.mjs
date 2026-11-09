// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Production domain (Vercel). Canonical, hreflang, OpenGraph, JSON-LD and the
  // sitemap are all derived from this single value.
  site: 'https://mireiacalvino.vercel.app',
  // Matches Vercel's default and the URLs getAbsoluteLocaleUrl() emits (/es/, /ca/).
  trailingSlash: 'always',

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

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es', ca: 'ca' },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
