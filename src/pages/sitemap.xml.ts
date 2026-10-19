import type { APIRoute } from 'astro';
import { execSync } from 'node:child_process';

// Generated at build time from src/pages, so new pages are picked up automatically.
const pages = import.meta.glob('./**/*.astro');

// Pages that should not be indexed (post-form-submission confirmation, etc.)
const EXCLUDE = new Set(['/thank-you/']);

function routeFor(file: string): string {
  const path = file.replace(/^\.\//, '').replace(/\.astro$/, '').replace(/(^|\/)index$/, '');
  return path ? `/${path}/` : '/';
}

function priorityFor(route: string): string {
  if (route === '/') return '1.0';
  if (route.startsWith('/blog/')) return '0.6';
  return '0.8';
}

function lastmodFor(file: string): string | undefined {
  try {
    const date = execSync(`git log -1 --format=%cs -- "src/pages/${file.replace(/^\.\//, '')}"`, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return date || undefined;
  } catch {
    return undefined;
  }
}

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://blackburnrealtygroup.com')).href.replace(/\/$/, '');

  const urls = Object.keys(pages)
    .map((file) => ({ file, route: routeFor(file) }))
    .filter(({ route }) => !EXCLUDE.has(route))
    .sort((a, b) => a.route.localeCompare(b.route))
    .map(({ file, route }) => {
      const lastmod = lastmodFor(file);
      return [
        '  <url>',
        `    <loc>${base}${route}</loc>`,
        lastmod && `    <lastmod>${lastmod}</lastmod>`,
        '    <changefreq>monthly</changefreq>',
        `    <priority>${priorityFor(route)}</priority>`,
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n');
    });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
