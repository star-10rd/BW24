import { defineConfig } from 'astro/config';

const rawSite = process.env.BW26_SITE_ORIGIN?.trim();
let site;
if (rawSite) {
  const parsed = new URL(rawSite);
  if (!['http:', 'https:'].includes(parsed.protocol) || parsed.username || parsed.password || parsed.search || parsed.hash || parsed.pathname !== '/') {
    throw new Error('BW26_SITE_ORIGIN must be a plain http(s) origin URL with no path, query, or fragment');
  }
  site = parsed.toString();
}

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  site,
  devToolbar: {
    enabled: false,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'et'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
