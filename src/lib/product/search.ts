import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';
import { getProductCatalog, readPublicationMarkdown, exerciseRoute } from './catalog';
import { loadPublicCanonicalState } from '../corpus/load';
import type { Domain } from '../problems/types';

export type PublicSearchRecord = {
  id: string;
  route: string;
  collection: 'contest' | 'shortlist';
  year: number;
  numberOrSlug: string;
  domain: Domain;
  statementText: string;
  topicIds: string[];
  topicLabels: string[];
};

let cached: Promise<PublicSearchRecord[]> | null = null;

export function getPublicSearchIndex(root = process.cwd()): Promise<PublicSearchRecord[]> {
  if (root !== process.cwd()) return build(root);
  cached ??= build(root);
  return cached;
}

async function build(root: string): Promise<PublicSearchRecord[]> {
  const [catalog, canonical] = await Promise.all([getProductCatalog(root), loadPublicCanonicalState(root)]);
  const topicLabel = new Map(canonical.taxonomy.subtopics.map((topic) => [topic.id, topic.label]));
  const records = await Promise.all(catalog.allExercises.map(async (problem): Promise<PublicSearchRecord> => ({
    id: problem.key,
    route: exerciseRoute(problem),
    collection: problem.kind === 'final' ? 'contest' : 'shortlist',
    year: problem.year,
    numberOrSlug: problem.kind === 'final' ? String(Number(problem.number)) : problem.slug,
    domain: problem.domain,
    statementText: markdownPlainText(await readPublicationMarkdown(problem.statementPath, root)),
    topicIds: [...problem.subtopicIds],
    topicLabels: problem.subtopicIds.map((id) => topicLabel.get(id) ?? id),
  })));
  records.sort((a, b) => b.year - a.year || a.collection.localeCompare(b.collection) || a.numberOrSlug.localeCompare(b.numberOrSlug, undefined, { numeric: true }));
  return records;
}

export function markdownPlainText(markdown: string): string {
  const tree = unified().use(remarkParse).parse(markdown);
  const parts: string[] = [];
  visit(tree, (node: { type?: string; value?: unknown; alt?: unknown }) => {
    if ((node.type === 'text' || node.type === 'inlineMath' || node.type === 'math') && typeof node.value === 'string') parts.push(node.value);
    if (node.type === 'image' && typeof node.alt === 'string' && node.alt.trim()) parts.push(node.alt);
  });
  return parts.join(' ').replace(/\s+/g, ' ').trim();
}
