import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { getPublicCanonicalPaths } from '../../src/lib/product/site-routes';

const root = process.cwd();
const srcRoot = resolve(root, 'src');
const distRoot = resolve(root, 'dist');
const paths = await getPublicCanonicalPaths(root);
const pathSet = new Set(paths);

assert(paths.length === pathSet.size, 'canonical site routes are unique');
for (const path of paths.filter((value) => !value.startsWith('/et/'))) {
  const counterpart = path === '/' ? '/et/' : `/et${path}`;
  assert(pathSet.has(counterpart), `missing ET counterpart for ${path}`);
}
assert(paths.every((path) => !/[?&]/.test(path)), 'canonical route list contains no query context');
assert(paths.every((path) => !/^\/problems\/(1999|200[0-9]|201[1-6])\//.test(path) && !/^\/et\/problems\/(1999|200[0-9]|201[1-6])\//.test(path)), 'hidden contest years absent from canonical route list');
assert(paths.length === 908, `canonical route baseline ${paths.length}/908`);
assert(pathSet.has('/practice/') && pathSet.has('/et/practice/'), 'Practice hubs are canonical');
assert(pathSet.has('/search/') && pathSet.has('/et/search/'), 'Search hubs are canonical');
for (const transient of ['/random/','/training/','/materials/','/et/random/','/et/training/','/et/materials/']) assert(!pathSet.has(transient), `${transient} stays out of the canonical sitemap model`);

const source = readTreeText(srcRoot);
assert(!/serviceWorker\s*\.\s*register|navigator\s*\.\s*serviceWorker/.test(source), 'no service-worker registration');
assert(!source.includes('class="mobile-nav"'), 'legacy fixed mobile navigation removed');
assert(source.includes('data-nav-route={item.id}') || source.includes('data-nav-route='), 'primary navigation remains machine-addressable');
assert(source.includes("current=\"practice\"") || source.includes("current='practice'"), 'Practice is the shared primary practice destination');

assert(existsSync(distRoot), 'dist exists; run after astro build');
const htmlFiles = walk(distRoot).filter((file) => file.endsWith('.html'));
assert(htmlFiles.length > 0, 'built HTML exists');
let checkedLinks = 0;
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  assert((html.match(/<main\b/g) ?? []).length === 1, `${relative(file)} has exactly one main landmark`);
  assert(html.includes('href="#main-content"'), `${relative(file)} contains skip link`);
  const rel = relative(file).replace(/^dist\//, '');
  const shouldNoIndex = rel === '404.html' || /^(?:et\/)?(?:random|training|materials)\/index\.html$/.test(rel) || rel.startsWith('_qa/');
  if (process.env.BW26_SITE_ORIGIN?.trim()) {
    if (shouldNoIndex) {
      assert(html.includes('name="robots" content="noindex,nofollow"'), `${relative(file)} remains noindex`);
      assert(!html.includes('rel="canonical"'), `${relative(file)} has no misleading canonical URL`);
    } else {
      assert(html.includes('name="robots" content="index,follow"'), `${relative(file)} is indexable with a public origin`);
      assert(html.includes('rel="canonical"'), `${relative(file)} has a canonical URL`);
    }
  } else {
    assert(html.includes('name="robots" content="noindex,nofollow"'), `${relative(file)} remains noindex before origin configuration`);
  }
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const raw = decodeEntities(match[1]!);
    if (!raw.startsWith('/') || raw.startsWith('//')) continue;
    const clean = raw.split('#')[0]!.split('?')[0]!;
    if (!clean) continue;
    checkedLinks++;
    assert(resolveBuiltTarget(clean), `${relative(file)} references missing local target ${clean}`);
  }
}

const robotsPath = resolve(distRoot, 'robots.txt');
assert(existsSync(robotsPath), 'robots.txt built');
const robots = readFileSync(robotsPath, 'utf8');
if (process.env.BW26_SITE_ORIGIN?.trim()) {
  assert(robots.includes('Allow: /'), 'public-origin build allows crawling');
  assert(robots.includes('Sitemap:'), 'public-origin build advertises sitemap');
} else {
  assert(robots.includes('Disallow: /'), 'prelaunch build remains crawler-blocked');
}
assert(existsSync(resolve(distRoot, 'sitemap.xml')), 'sitemap.xml built');

console.log('BW26 site verification passed.');
console.log(`  Canonical route model: ${paths.length}`);
console.log(`  Built HTML pages checked: ${htmlFiles.length}`);
console.log(`  Local href/src targets checked: ${checkedLinks}`);
console.log(`  Crawl mode: ${process.env.BW26_SITE_ORIGIN?.trim() ? 'public origin configured' : 'prelaunch / blocked'}`);
if (existsSync(resolve(root, 'public/CNAME'))) console.log(`  Preserved CNAME: ${readFileSync(resolve(root, 'public/CNAME'), 'utf8').trim() || '(empty)'}`);

function resolveBuiltTarget(urlPath: string): boolean {
  let pathname = urlPath;
  try { pathname = decodeURIComponent(pathname); } catch { /* keep raw */ }
  const direct = resolve(distRoot, `.${pathname}`);
  if (existsSync(direct) && statSync(direct).isFile()) return true;
  if (pathname.endsWith('/')) return existsSync(resolve(distRoot, `.${pathname}index.html`));
  return existsSync(resolve(distRoot, `.${pathname}/index.html`)) || existsSync(`${direct}.html`);
}

function walk(dir: string): string[] {
  const output: string[] = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) output.push(...walk(path));
    else output.push(path);
  }
  return output;
}

function readTreeText(dir: string): string {
  return walk(dir).filter((file) => /\.(astro|ts|js|mjs)$/.test(file)).map((file) => readFileSync(file, 'utf8')).join('\n');
}

function relative(file: string): string { return file.slice(root.length + 1); }
function decodeEntities(value: string): string { return value.replaceAll('&amp;', '&'); }
function assert(condition: unknown, message: string): asserts condition { if (!condition) throw new Error(`site:check: ${message}`); }
