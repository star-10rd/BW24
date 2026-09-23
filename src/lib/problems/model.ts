import { domains, type ProblemAppearance, type ProblemDocument } from './types';

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function validateProblemDocument(problem: ProblemDocument): void {
  if (!slugPattern.test(problem.id)) {
    throw new Error(`Problem id must be a lowercase URL slug: ${problem.id}`);
  }

  if (!domains.includes(problem.domain)) {
    throw new Error(`Problem ${problem.id} has an invalid domain: ${problem.domain}`);
  }

  if (problem.statement.language !== 'en' || !problem.statement.markdown.trim()) {
    throw new Error(`Problem ${problem.id} must have a non-empty English statement.`);
  }

  if (problem.appearances.length === 0) {
    throw new Error(`Problem ${problem.id} must have at least one BW/BW-SL appearance.`);
  }

  const appearanceKeys = new Set<string>();
  for (const appearance of problem.appearances) {
    if (!Number.isInteger(appearance.year) || appearance.year < 1980 || appearance.year > 2100) {
      throw new Error(`Problem ${problem.id} has an invalid appearance year: ${appearance.year}`);
    }
    if (!appearance.number.trim()) {
      throw new Error(`Problem ${problem.id} has an appearance with an empty number.`);
    }
    const key = `${appearance.series}:${appearance.year}:${appearance.number}`;
    if (appearanceKeys.has(key)) {
      throw new Error(`Problem ${problem.id} repeats appearance ${key}.`);
    }
    appearanceKeys.add(key);
  }

  const assetKeys = new Set<string>();
  for (const asset of problem.assets) {
    if (assetKeys.has(asset.key)) {
      throw new Error(`Problem ${problem.id} repeats asset key ${asset.key}.`);
    }
    assetKeys.add(asset.key);

    if (!asset.key.trim() || !asset.src.startsWith('/problem-assets/')) {
      throw new Error(`Problem ${problem.id} has an invalid asset mapping for ${asset.key}.`);
    }
    if (!asset.alt.trim()) {
      throw new Error(`Problem ${problem.id} asset ${asset.key} requires alt text.`);
    }
    if (!Number.isInteger(asset.width) || asset.width <= 0 || !Number.isInteger(asset.height) || asset.height <= 0) {
      throw new Error(`Problem ${problem.id} asset ${asset.key} requires positive integer dimensions.`);
    }
  }

  const solutionIds = new Set<string>();
  for (const solution of problem.solutions) {
    if (!slugPattern.test(solution.id) || solutionIds.has(solution.id)) {
      throw new Error(`Problem ${problem.id} has an invalid or repeated solution id: ${solution.id}`);
    }
    solutionIds.add(solution.id);
    if (solution.language !== 'en' || !solution.markdown.trim()) {
      throw new Error(`Problem ${problem.id} solution ${solution.id} must be non-empty English Markdown.`);
    }
  }
}

export function getPrimaryAppearance(problem: ProblemDocument): ProblemAppearance {
  const bw = problem.appearances.find((appearance) => appearance.series === 'BW');
  return bw ?? problem.appearances[0]!;
}

export function getSecondaryAppearances(problem: ProblemDocument): ProblemAppearance[] {
  const primary = getPrimaryAppearance(problem);
  return problem.appearances.filter((appearance) => appearance !== primary);
}

export function formatAppearance(appearance: ProblemAppearance): string {
  return `${appearance.series} ${appearance.year} · ${appearance.number}`;
}
