import type { APIRoute } from 'astro';
import { getPublicCanonicalPaths } from '../lib/product/site-routes';

export const GET: APIRoute = async ({ site }) => {
  const paths = site ? await getPublicCanonicalPaths() : [];
  const urls = site ? paths.map((path) => `  <url><loc>${escapeXml(new URL(path, site).toString())}</loc></url>`).join('\n') : '';
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}${urls ? '\n' : ''}</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

function escapeXml(value: string): string {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
}
