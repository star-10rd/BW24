import { access } from 'node:fs/promises';
import { isAbsolute, normalize, resolve } from 'node:path';
import {
  AppearanceRecordSchema,
  AssetBindingRecordSchema,
  ContentSelectionRecordSchema,
  FinalYearPolicySchema,
  MathNetLockSchema,
  ReviewRecordSchema,
  SchemaVersionSchema,
  SourceLinkRecordSchema,
  SourceRegistryRecordSchema,
  VersionRecordSchema,
  VersionRelationSchema,
  type AppearanceRecord,
  type AssetBindingRecord,
  type ContentRef,
  type ContentSelectionRecord,
  type EvidenceRef,
  type ReviewRecord,
  type SourceLinkRecord,
  type SourceRef,
  type VersionRecord,
  type VersionRelation,
} from './schema';
import { expectedFinalNumbers, makeAppearanceId, resolveAppearanceDomain, sourceRefKey } from './ids';

export type CanonicalState = {
  schemaVersion: unknown;
  sources: unknown[];
  mathnetLock: unknown;
  finalYearPolicies: unknown[];
  appearances: unknown[];
  versions: unknown[];
  versionRelations: unknown[];
  sourceLinks: unknown[];
  contentSelections: unknown[];
  assetBindings: unknown[];
  reviews: unknown[];
};

export type ValidationOptions = {
  repoRoot?: string;
  checkCuratedFiles?: boolean;
  enforceFinalPolicyCompleteness?: boolean;
};

function ensureUnique<T>(items: readonly T[], key: (item: T) => string, label: string): void {
  const seen = new Set<string>();
  for (const item of items) {
    const value = key(item);
    if (seen.has(value)) throw new Error(`Duplicate ${label}: ${value}`);
    seen.add(value);
  }
}

function parseArray<T>(name: string, values: unknown[], schema: { parse(value: unknown): T }): T[] {
  return values.map((value, index) => {
    try {
      return schema.parse(value);
    } catch (error) {
      const reason = error instanceof Error ? error.message : String(error);
      throw new Error(`${name}[${index}]: ${reason}`);
    }
  });
}

function validateEvidence(evidence: readonly EvidenceRef[], sourceIds: ReadonlySet<string>, context: string): void {
  for (const item of evidence) {
    if (!sourceIds.has(item.source.sourceId)) {
      throw new Error(`${context}: evidence references unknown source ${item.source.sourceId}`);
    }
  }
}

function validateSourceRef(ref: SourceRef, sourceIds: ReadonlySet<string>, context: string): void {
  if (!sourceIds.has(ref.sourceId)) throw new Error(`${context}: references unknown source ${ref.sourceId}`);
}

function curatedPath(ref: ContentRef): string | null {
  return ref.kind === 'curated-file' ? ref.path : null;
}

async function validateCuratedPath(repoRoot: string, path: string, context: string): Promise<void> {
  if (isAbsolute(path)) throw new Error(`${context}: curated path must be repository-relative: ${path}`);
  const normalized = normalize(path).replaceAll('\\', '/');
  if (normalized.startsWith('../') || normalized.includes('/../')) {
    throw new Error(`${context}: curated path must not escape repository: ${path}`);
  }
  const prefixes = [
    'data/p3/curation/curated/statements/',
    'data/p3/curation/curated/solutions/',
    'data/p3/curation/curated/assets/',
  ];
  if (!prefixes.some((prefix) => normalized.startsWith(prefix))) {
    throw new Error(`${context}: curated path must live under data/p3/curation/curated/: ${path}`);
  }
  await access(resolve(repoRoot, normalized));
}

function connectedByRevision(
  left: string,
  right: string,
  relations: readonly VersionRelation[],
): boolean {
  if (left === right) return true;
  const graph = new Map<string, Set<string>>();
  for (const relation of relations) {
    const a = graph.get(relation.fromVersionId) ?? new Set<string>();
    a.add(relation.toVersionId);
    graph.set(relation.fromVersionId, a);
    const b = graph.get(relation.toVersionId) ?? new Set<string>();
    b.add(relation.fromVersionId);
    graph.set(relation.toVersionId, b);
  }
  const queue = [left];
  const seen = new Set(queue);
  while (queue.length > 0) {
    const current = queue.shift()!;
    for (const next of graph.get(current) ?? []) {
      if (next === right) return true;
      if (!seen.has(next)) {
        seen.add(next);
        queue.push(next);
      }
    }
  }
  return false;
}

function assertAcyclic(relations: readonly VersionRelation[]): void {
  const adjacency = new Map<string, string[]>();
  for (const relation of relations) {
    const values = adjacency.get(relation.fromVersionId) ?? [];
    values.push(relation.toVersionId);
    adjacency.set(relation.fromVersionId, values);
  }
  const visiting = new Set<string>();
  const visited = new Set<string>();

  const visit = (id: string): void => {
    if (visiting.has(id)) throw new Error(`Version relation cycle detected at ${id}`);
    if (visited.has(id)) return;
    visiting.add(id);
    for (const next of adjacency.get(id) ?? []) visit(next);
    visiting.delete(id);
    visited.add(id);
  };

  for (const id of adjacency.keys()) visit(id);
}

function sourceLinksBySource(links: readonly SourceLinkRecord[]): Map<string, SourceLinkRecord[]> {
  const result = new Map<string, SourceLinkRecord[]>();
  for (const link of links) {
    const key = sourceRefKey(link.source);
    const values = result.get(key) ?? [];
    values.push(link);
    result.set(key, values);
  }
  return result;
}

function validateContentRefSource(
  ref: ContentRef,
  sourceIds: ReadonlySet<string>,
  context: string,
): void {
  if (ref.kind === 'source-field') validateSourceRef(ref.ref.source, sourceIds, context);
  else validateEvidence(ref.evidence, sourceIds, context);
}

function validateReviewSubjects(
  reviews: readonly ReviewRecord[],
  appearances: ReadonlyMap<string, AppearanceRecord>,
  versions: ReadonlyMap<string, VersionRecord>,
  selections: ReadonlyMap<string, ContentSelectionRecord>,
  sourceIds: ReadonlySet<string>,
  assetBindings: readonly AssetBindingRecord[],
): void {
  for (const review of reviews) {
    for (const subject of review.subjects) {
      switch (subject.kind) {
        case 'appearance':
          if (!appearances.has(subject.id)) throw new Error(`${review.id}: unknown appearance subject ${subject.id}`);
          break;
        case 'version':
          if (!versions.has(subject.id)) throw new Error(`${review.id}: unknown version subject ${subject.id}`);
          break;
        case 'source':
          validateSourceRef(subject.ref, sourceIds, `${review.id}: source subject`);
          break;
        case 'statement':
          if (!versions.has(subject.versionId)) throw new Error(`${review.id}: unknown statement version ${subject.versionId}`);
          break;
        case 'solution': {
          const selection = selections.get(subject.versionId);
          if (!selection?.solutions.items.some((item) => item.id === subject.solutionId)) {
            throw new Error(`${review.id}: unknown solution subject ${subject.versionId}/${subject.solutionId}`);
          }
          break;
        }
        case 'asset': {
          if (!versions.has(subject.versionId)) throw new Error(`${review.id}: unknown asset version ${subject.versionId}`);
          const exists = assetBindings.some((binding) =>
            binding.versionId === subject.versionId
            && binding.sourceKey === subject.sourceKey
            && JSON.stringify(binding.owner) === JSON.stringify(subject.owner));
          if (!exists) throw new Error(`${review.id}: unknown asset subject ${subject.versionId}/${subject.sourceKey}`);
          break;
        }
        case 'candidate':
          break;
      }
    }
  }
}

export async function validateCanonicalState(state: CanonicalState, options: ValidationOptions = {}): Promise<void> {
  const repoRoot = options.repoRoot ?? process.cwd();
  const checkCuratedFiles = options.checkCuratedFiles ?? true;
  const enforceFinalPolicyCompleteness = options.enforceFinalPolicyCompleteness ?? true;

  SchemaVersionSchema.parse(state.schemaVersion);
  MathNetLockSchema.parse(state.mathnetLock);

  const sources = parseArray('sources', state.sources, SourceRegistryRecordSchema);
  const policies = parseArray('finalYearPolicies', state.finalYearPolicies, FinalYearPolicySchema);
  const appearances = parseArray('appearances', state.appearances, AppearanceRecordSchema);
  const versions = parseArray('versions', state.versions, VersionRecordSchema);
  const relations = parseArray('versionRelations', state.versionRelations, VersionRelationSchema);
  const sourceLinks = parseArray('sourceLinks', state.sourceLinks, SourceLinkRecordSchema);
  const selections = parseArray('contentSelections', state.contentSelections, ContentSelectionRecordSchema);
  const assetBindings = parseArray('assetBindings', state.assetBindings, AssetBindingRecordSchema);
  const reviews = parseArray('reviews', state.reviews, ReviewRecordSchema);

  ensureUnique(sources, (record) => record.id, 'source id');
  ensureUnique(policies, (record) => String(record.year), 'final-year policy');
  ensureUnique(appearances, (record) => record.id, 'appearance id');
  ensureUnique(appearances, (record) => `${record.series}:${record.year}:${record.number.toUpperCase()}`, 'official appearance');
  ensureUnique(versions, (record) => record.id, 'version id');
  ensureUnique(versions, (record) => record.publicId, 'public problem id');
  ensureUnique(relations, (record) => `${record.fromVersionId}|${record.toVersionId}|${record.kind}`, 'version relation');
  ensureUnique(sourceLinks, (record) => sourceRefKey(record.source), 'canonical source link');
  ensureUnique(selections, (record) => record.versionId, 'content selection');
  ensureUnique(assetBindings, (record) => `${record.versionId}|${JSON.stringify(record.owner)}|${record.sourceKey}`, 'asset binding');
  ensureUnique(reviews, (record) => record.id, 'review id');

  const sourceIds = new Set(sources.map((record) => record.id));
  if (!sourceIds.has('mathnet-v0')) throw new Error('Source registry must contain mathnet-v0.');

  for (const source of sources) {
    if (source.sha256 && source.kind !== 'dataset' && source.kind !== 'pdf' && source.kind !== 'repository') {
      throw new Error(`${source.id}: SHA-256 is only meaningful for immutable file/repository-like sources`);
    }
  }

  for (const policy of policies) {
    validateEvidence(policy.evidence, sourceIds, `final-year policy ${policy.year}`);
    const expected = expectedFinalNumbers(policy);
    if (new Set(expected).size !== expected.length) throw new Error(`Final-year policy ${policy.year} repeats a problem number.`);
    if (policy.domains.kind === 'block-order') {
      if (policy.domains.order.length !== 4 || new Set(policy.domains.order).size !== 4) {
        throw new Error(`Final-year policy ${policy.year}: block-order must be a permutation of A/N/C/G.`);
      }
      if (expected.length !== policy.domains.order.length * policy.domains.blockSize) {
        throw new Error(`Final-year policy ${policy.year}: block-order does not cover exactly ${expected.length} problems.`);
      }
    }
  }

  const policyByYear = new Map(policies.map((policy) => [policy.year, policy]));
  const appearanceById = new Map(appearances.map((appearance) => [appearance.id, appearance]));

  for (const appearance of appearances) {
    const expectedId = makeAppearanceId(appearance.series, appearance.year, appearance.number);
    if (appearance.id !== expectedId) throw new Error(`${appearance.id}: expected deterministic appearance id ${expectedId}`);
    validateEvidence(appearance.evidence, sourceIds, appearance.id);

    if (appearance.series === 'BW') {
      const policy = policyByYear.get(appearance.year);
      if (!policy) throw new Error(`${appearance.id}: BW appearance has no final-year policy.`);
      if (!expectedFinalNumbers(policy).includes(String(Number(appearance.number)))) {
        throw new Error(`${appearance.id}: problem number is outside final-year policy.`);
      }
    }

    const resolvedDomain = resolveAppearanceDomain(appearance, policies);
    if (appearance.domain && appearance.domain !== resolvedDomain) {
      throw new Error(`${appearance.id}: stored domain ${appearance.domain} disagrees with resolved domain ${resolvedDomain}`);
    }
  }

  if (enforceFinalPolicyCompleteness) {
    for (const policy of policies) {
      for (const number of expectedFinalNumbers(policy)) {
        const id = makeAppearanceId('BW', policy.year, number);
        if (!appearanceById.has(id)) throw new Error(`Final-year policy ${policy.year} is missing required appearance ${id}`);
      }
    }
  }

  const versionById = new Map(versions.map((version) => [version.id, version]));
  const appearanceOwners = new Map<string, string>();
  for (const version of versions) {
    validateEvidence(version.evidence, sourceIds, version.id);
    if (version.appearanceIds.length > 1 && version.evidence.length === 0) {
      throw new Error(`${version.id}: multi-appearance version requires equivalence evidence`);
    }
    if (!version.id.startsWith('v:')) throw new Error(`${version.id}: version id must start with v:`);
    if (!version.appearanceIds.includes(version.primaryAppearanceId)) {
      throw new Error(`${version.id}: primary appearance must be included in appearanceIds`);
    }
    const anchor = version.id.slice(2);
    if (!version.appearanceIds.includes(anchor)) {
      throw new Error(`${version.id}: version anchor appearance ${anchor} must remain attached to the version`);
    }

    let versionDomain: string | undefined;
    for (const appearanceId of version.appearanceIds) {
      const appearance = appearanceById.get(appearanceId);
      if (!appearance) throw new Error(`${version.id}: unknown appearance ${appearanceId}`);
      const owner = appearanceOwners.get(appearanceId);
      if (owner) throw new Error(`${appearanceId}: appearance belongs to both ${owner} and ${version.id}`);
      appearanceOwners.set(appearanceId, version.id);
      const domain = resolveAppearanceDomain(appearance, policies);
      if (versionDomain && versionDomain !== domain) {
        throw new Error(`${version.id}: appearances disagree on domain (${versionDomain} vs ${domain})`);
      }
      versionDomain = domain;
    }
  }
  for (const appearance of appearances) {
    if (!appearanceOwners.has(appearance.id)) throw new Error(`${appearance.id}: accepted appearance is not attached to a version`);
  }

  for (const relation of relations) {
    if (!versionById.has(relation.fromVersionId) || !versionById.has(relation.toVersionId)) {
      throw new Error(`Version relation references unknown version: ${relation.fromVersionId} -> ${relation.toVersionId}`);
    }
    if (relation.fromVersionId === relation.toVersionId) throw new Error(`Version cannot revise into itself: ${relation.fromVersionId}`);
    validateEvidence(relation.evidence, sourceIds, `version relation ${relation.fromVersionId} -> ${relation.toVersionId}`);
  }
  assertAcyclic(relations);

  const linksBySource = sourceLinksBySource(sourceLinks);
  for (const link of sourceLinks) {
    validateSourceRef(link.source, sourceIds, `source link ${sourceRefKey(link.source)}`);
    if (!versionById.has(link.versionId)) throw new Error(`Source link ${sourceRefKey(link.source)} targets unknown version ${link.versionId}`);
    validateEvidence(link.evidence, sourceIds, `source link ${sourceRefKey(link.source)}`);
    if (link.duplicateOf) {
      validateSourceRef(link.duplicateOf, sourceIds, `source link ${sourceRefKey(link.source)} duplicateOf`);
      if (sourceRefKey(link.duplicateOf) === sourceRefKey(link.source)) throw new Error(`Source link cannot duplicate itself: ${sourceRefKey(link.source)}`);
    }
  }

  const selectionByVersion = new Map(selections.map((selection) => [selection.versionId, selection]));
  const safeStatementFidelity = new Set(['exact', 'equivalent']);

  for (const selection of selections) {
    if (!versionById.has(selection.versionId)) throw new Error(`${selection.versionId}: content selection targets unknown version`);
    validateContentRefSource(selection.statement.ref, sourceIds, `${selection.versionId}: statement`);

    if (selection.statement.ref.kind === 'source-field') {
      if (selection.statement.ref.ref.field !== 'problem_markdown') {
        throw new Error(`${selection.versionId}: statement source must select problem_markdown`);
      }
      const links = linksBySource.get(sourceRefKey(selection.statement.ref.ref.source)) ?? [];
      const link = links.find((item) => item.versionId === selection.versionId);
      if (!link) throw new Error(`${selection.versionId}: selected statement source is not linked to this version`);
      if (!safeStatementFidelity.has(link.statementFidelity)) {
        throw new Error(`${selection.versionId}: ${link.statementFidelity} source statement cannot be selected directly; use curated replacement`);
      }
    }

    const solutionIds = new Set<string>();
    for (const solution of selection.solutions.items) {
      if (solutionIds.has(solution.id)) throw new Error(`${selection.versionId}: repeated solution id ${solution.id}`);
      solutionIds.add(solution.id);
      validateContentRefSource(solution.ref, sourceIds, `${selection.versionId}/${solution.id}`);

      if (solution.compatibility === 'adapted' && solution.ref.kind !== 'curated-file') {
        throw new Error(`${selection.versionId}/${solution.id}: adapted solution must be a curated file`);
      }

      if (solution.ref.kind === 'source-field') {
        if (solution.ref.ref.field !== 'solutions_markdown') {
          throw new Error(`${selection.versionId}/${solution.id}: solution source must select solutions_markdown`);
        }
        const links = linksBySource.get(sourceRefKey(solution.ref.ref.source)) ?? [];
        const linkedVersions = links.map((link) => link.versionId);
        if (solution.compatibility === 'native') {
          if (!linkedVersions.includes(selection.versionId)) {
            throw new Error(`${selection.versionId}/${solution.id}: native solution source is not linked to this version`);
          }
        } else if (solution.compatibility === 'verified-compatible') {
          if (!linkedVersions.some((versionId) => connectedByRevision(versionId, selection.versionId, relations))) {
            throw new Error(`${selection.versionId}/${solution.id}: compatible solution source is not in the same revision lineage`);
          }
        }
      }
    }

    if (selection.topics?.kind === 'source') {
      validateContentRefSource(selection.topics.ref, sourceIds, `${selection.versionId}: topics`);
      if (selection.topics.ref.kind !== 'source-field' || selection.topics.ref.ref.field !== 'topics_flat') {
        throw new Error(`${selection.versionId}: topic source must select topics_flat`);
      }
    }

    if (checkCuratedFiles) {
      const paths = [curatedPath(selection.statement.ref)];
      for (const solution of selection.solutions.items) paths.push(curatedPath(solution.ref));
      if (selection.topics?.kind === 'source') paths.push(curatedPath(selection.topics.ref));
      for (const path of paths) if (path) await validateCuratedPath(repoRoot, path, selection.versionId);
    }
  }

  for (const binding of assetBindings) {
    if (!versionById.has(binding.versionId)) throw new Error(`${binding.versionId}: asset binding targets unknown version`);
    const selection = selectionByVersion.get(binding.versionId);
    if (!selection) throw new Error(`${binding.versionId}: asset binding requires content selection`);
    if (binding.owner.kind === 'solution') {
      const solutionId = binding.owner.id;
      if (!selection.solutions.items.some((item) => item.id === solutionId)) {
        throw new Error(`${binding.versionId}: asset owner references unknown solution ${solutionId}`);
      }
    }

    if (binding.source.kind === 'source-image') {
      validateSourceRef(binding.source.ref.source, sourceIds, `${binding.versionId}: asset ${binding.sourceKey}`);
    } else {
      validateEvidence(binding.source.evidence, sourceIds, `${binding.versionId}: asset ${binding.sourceKey}`);
      if (checkCuratedFiles) await validateCuratedPath(repoRoot, binding.source.path, `${binding.versionId}: asset ${binding.sourceKey}`);
    }
  }

  for (const review of reviews) validateEvidence(review.evidence, sourceIds, review.id);
  validateReviewSubjects(reviews, appearanceById, versionById, selectionByVersion, sourceIds, assetBindings);
}
