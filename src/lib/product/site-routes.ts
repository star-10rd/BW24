import { getProductCatalog, exerciseRoute } from './catalog';

const HUB_PATHS = ['/', '/daily/', '/practice/', '/search/', '/problems/', '/shortlist/'] as const;

export async function getPublicCanonicalPaths(root = process.cwd()): Promise<string[]> {
  const catalog = await getProductCatalog(root);
  const years = [...new Set(catalog.finals.map((problem) => problem.year))].sort((a, b) => a - b);
  const en = [
    ...HUB_PATHS,
    ...years.map((year) => `/problems/${year}/`),
    ...catalog.allExercises.map((problem) => exerciseRoute(problem)),
  ];
  const et = en.map((path) => path === '/' ? '/et/' : `/et${path}`);
  return [...new Set([...en, ...et])].sort();
}
