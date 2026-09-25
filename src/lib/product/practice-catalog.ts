import { createHash } from 'node:crypto';
import { getProductCatalog } from './catalog';
import { loadPublicCanonicalState } from '../corpus/load';
import type { Domain } from '../problems/types';

export type PracticeCollection = 'contest' | 'shortlist';
export type PracticeExercise = {
  id: string;
  route: string;
  collection: PracticeCollection;
  year: number;
  numberOrSlug: string;
  domain: Domain;
  subtopicIds: string[];
  solutionAvailable: boolean;
  randomEligible: boolean;
  trainingEligible: boolean;
};
export type PracticeTopic = { id: string; label: string; domain: Domain };
export type PracticeCatalog = {
  exercises: PracticeExercise[];
  contest: PracticeExercise[];
  shortlist: PracticeExercise[];
  topics: PracticeTopic[];
  fingerprint: string;
  publicSetFingerprint: string;
};

let cached: Promise<PracticeCatalog> | null = null;
export function getPracticeCatalog(root = process.cwd()): Promise<PracticeCatalog> {
  if (root !== process.cwd()) return build(root);
  cached ??= build(root);
  return cached;
}

async function build(root: string): Promise<PracticeCatalog> {
  const [catalog, state] = await Promise.all([getProductCatalog(root), loadPublicCanonicalState(root)]);
  const exercises: PracticeExercise[] = catalog.allExercises.map((problem) => ({
    id: problem.key,
    route: problem.kind === 'final' ? `/problems/${problem.year}/${Number(problem.number)}/` : `/shortlist/${problem.year}/${problem.slug}/`,
    collection: problem.kind === 'final' ? 'contest' : 'shortlist',
    year: problem.year,
    numberOrSlug: problem.kind === 'final' ? String(Number(problem.number)) : problem.slug,
    domain: problem.domain,
    subtopicIds: [...problem.subtopicIds].sort(),
    solutionAvailable: problem.solutionsStatus === 'verified' && problem.solutions.length > 0,
    randomEligible: problem.randomEligible,
    trainingEligible: problem.trainingEligible,
  }));
  const topics: PracticeTopic[] = state.taxonomy.subtopics.map((topic: { id: string; label: string; domain: Domain }) => ({ id: topic.id, label: topic.label, domain: topic.domain }));
  const normalizedSelection = exercises.map((exercise) => ({
    id: exercise.id,
    route: exercise.route,
    collection: exercise.collection,
    year: exercise.year,
    domain: exercise.domain,
    subtopicIds: [...exercise.subtopicIds].sort(),
    solutionAvailable: exercise.solutionAvailable,
    randomEligible: exercise.randomEligible,
    trainingEligible: exercise.trainingEligible,
  })).sort((a, b) => a.id.localeCompare(b.id));
  const publicSet = exercises.map((exercise) => ({ id: exercise.id, route: exercise.route })).sort((a, b) => a.id.localeCompare(b.id));
  const fingerprint = sha256(JSON.stringify(normalizedSelection));
  const publicSetFingerprint = sha256(JSON.stringify(publicSet));
  const contest = exercises.filter((exercise) => exercise.collection === 'contest');
  const shortlist = exercises.filter((exercise) => exercise.collection === 'shortlist');
  return { exercises, contest, shortlist, topics, fingerprint, publicSetFingerprint };
}

function sha256(value: string): string {
  return createHash('sha256').update(value).digest('hex');
}
