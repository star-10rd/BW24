import { access, readFile } from 'node:fs/promises';
import { isAbsolute, normalize, resolve } from 'node:path';
import {
  AppearanceRecordSchema,
  CandidateSetRecordSchema,
  CandidateYearCoverageRecordSchema,
  CandidateSelectionRecordSchema,
  PublicShortlistRecordSchema,
  AssetBindingRecordSchema,
  ContentSelectionRecordSchema,
  TopicTaxonomySchema,
  ClassificationRecordSchema,
  FinalYearPolicySchema,
  MathNetLockSchema,
  ReviewRecordSchema,
  SchemaVersionSchema,
  SourceLinkRecordSchema,
  SourceRegistryRecordSchema,
  VersionRecordSchema,
  VersionRelationSchema,
  type AppearanceRecord,
  type CandidateSetRecord,
  type CandidateYearCoverageRecord,
  type CandidateSelectionRecord,
  type PublicShortlistRecord,
  type AssetBindingRecord,
  type ContentRef,
  type ContentSelectionRecord,
  type TopicTaxonomy,
  type ClassificationRecord,
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
  candidateSets: unknown[];
  candidateYearCoverage: unknown[];
  candidateSelection: unknown[];
  publicShortlistOnly: unknown[];
  appearances: unknown[];
  versions: unknown[];
  versionRelations: unknown[];
  sourceLinks: unknown[];
  contentSelections: unknown[];
  assetBindings: unknown[];
  taxonomy: unknown;
  classifications: unknown[];
  reviews: unknown[];
};

export type ValidationOptions = {
  repoRoot?: string;
  checkCuratedFiles?: boolean;
  enforceFinalPolicyCompleteness?: boolean;
  enforcePublicCorpusCompleteness?: boolean;
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
    'data/corpus/curation/curated/statements/',
    'data/corpus/curation/curated/solutions/',
    'data/corpus/curation/curated/assets/',
  ];
  if (!prefixes.some((prefix) => normalized.startsWith(prefix))) {
    throw new Error(`${context}: curated path must live under data/corpus/curation/curated/: ${path}`);
  }
  await access(resolve(repoRoot, normalized));
}

async function validateCuratedMarkdownAssets(
  repoRoot: string,
  path: string,
  versionId: string,
  owner: { kind: 'statement' } | { kind: 'solution'; id: string },
  assetBindings: readonly AssetBindingRecord[],
): Promise<void> {
  const source = await readFile(resolve(repoRoot, path), 'utf8');
  const imagePattern = /!\[[^\]]*\]\(([^)]+)\)/g;
  for (const match of source.matchAll(imagePattern)) {
    const key = match[1]!.trim();
    if (/^(?:https?:|data:)/i.test(key)) throw new Error(`${versionId}: curated Markdown must not contain remote/embedded image ${key}`);
    const exists = assetBindings.some((binding) => binding.versionId === versionId
      && binding.sourceKey === key && JSON.stringify(binding.owner) === JSON.stringify(owner));
    if (!exists) throw new Error(`${versionId}: curated Markdown image ${key} has no asset binding for ${JSON.stringify(owner)}`);
  }
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
  const enforcePublicCorpusCompleteness = options.enforcePublicCorpusCompleteness ?? true;

  SchemaVersionSchema.parse(state.schemaVersion);
  MathNetLockSchema.parse(state.mathnetLock);

  const sources = parseArray('sources', state.sources, SourceRegistryRecordSchema);
  const policies = parseArray('finalYearPolicies', state.finalYearPolicies, FinalYearPolicySchema);
  const candidateSets = parseArray('candidateSets', state.candidateSets, CandidateSetRecordSchema);
  const candidateCoverage = parseArray('candidateYearCoverage', state.candidateYearCoverage, CandidateYearCoverageRecordSchema);
  const candidateSelection = parseArray('candidateSelection', state.candidateSelection, CandidateSelectionRecordSchema);
  const publicShortlist = parseArray('publicShortlistOnly', state.publicShortlistOnly, PublicShortlistRecordSchema);
  const appearances = parseArray('appearances', state.appearances, AppearanceRecordSchema);
  const versions = parseArray('versions', state.versions, VersionRecordSchema);
  const relations = parseArray('versionRelations', state.versionRelations, VersionRelationSchema);
  const sourceLinks = parseArray('sourceLinks', state.sourceLinks, SourceLinkRecordSchema);
  const selections = parseArray('contentSelections', state.contentSelections, ContentSelectionRecordSchema);
  const assetBindings = parseArray('assetBindings', state.assetBindings, AssetBindingRecordSchema);
  const taxonomy = TopicTaxonomySchema.parse(state.taxonomy);
  const classifications = parseArray('classifications', state.classifications, ClassificationRecordSchema);
  const reviews = parseArray('reviews', state.reviews, ReviewRecordSchema);

  ensureUnique(sources, (record) => record.id, 'source id');
  ensureUnique(policies, (record) => String(record.year), 'final-year policy');
  ensureUnique(candidateSets, (record) => record.id, 'candidate set id');
  ensureUnique(candidateCoverage, (record) => String(record.year), 'candidate year coverage');
  ensureUnique(candidateSelection, (record) => record.appearanceId, 'candidate selection record');
  ensureUnique(publicShortlist, (record) => record.appearanceId, 'public shortlist appearance');
  ensureUnique(appearances, (record) => record.id, 'appearance id');
  ensureUnique(appearances, (record) => `${record.series}:${record.year}:${record.number.toUpperCase()}`, 'official appearance');
  ensureUnique(versions, (record) => record.id, 'version id');
  ensureUnique(versions, (record) => record.publicId, 'public problem id');
  ensureUnique(relations, (record) => `${record.fromVersionId}|${record.toVersionId}|${record.kind}`, 'version relation');
  ensureUnique(sourceLinks, (record) => sourceRefKey(record.source), 'canonical source link');
  ensureUnique(selections, (record) => record.versionId, 'content selection');
  ensureUnique(assetBindings, (record) => `${record.versionId}|${JSON.stringify(record.owner)}|${record.sourceKey}`, 'asset binding');
  ensureUnique(classifications, (record) => record.versionId, 'classification version');
  ensureUnique(reviews, (record) => record.id, 'review id');

  const sourceIds = new Set(sources.map((record) => record.id));
  if (!sourceIds.has('mathnet-v0')) throw new Error('Source registry must contain mathnet-v0.');

  for (const source of sources) {
    if (source.sha256 && source.kind !== 'dataset' && source.kind !== 'pdf' && source.kind !== 'repository') {
      throw new Error(`${source.id}: SHA-256 is only meaningful for immutable file/repository-like sources`);
    }
  }

  for (const set of candidateSets) {
    validateEvidence(set.evidence, sourceIds, `candidate set ${set.id}`);
    if (set.year !== Number(set.id.split(':')[1])) throw new Error(`${set.id}: candidate set year mismatch`);
  }
  if (candidateCoverage.length !== 36 || candidateCoverage[0]?.year !== 1990 || candidateCoverage[candidateCoverage.length-1]?.year !== 2025) {
    throw new Error('candidate year coverage must contain 1990–2025 exactly');
  }
  for (const c of candidateCoverage) validateEvidence(c.evidence, sourceIds, `candidate coverage ${c.year}`);
  const candidateSetById = new Map(candidateSets.map((set) => [set.id, set]));

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
      const resolvedDomain = resolveAppearanceDomain(appearance, policies);
      if (appearance.domain && appearance.domain !== resolvedDomain) throw new Error(`${appearance.id}: stored domain ${appearance.domain} disagrees with resolved domain ${resolvedDomain}`);
    } else {
      const set = candidateSetById.get(appearance.candidateSetId);
      if (!set) throw new Error(`${appearance.id}: unknown candidate set ${appearance.candidateSetId}`);
      if (set.year !== appearance.year) throw new Error(`${appearance.id}: candidate set year mismatch`);
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
  const versionDomainById = new Map<string, string>();
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
      const domain = appearance.series === 'BW' ? resolveAppearanceDomain(appearance, policies) : appearance.domain;
      if (domain) {
        if (versionDomain && versionDomain !== domain) throw new Error(`${version.id}: appearances disagree on domain (${versionDomain} vs ${domain})`);
        versionDomain = domain;
      }
    }
    if (versionDomain) versionDomainById.set(version.id, versionDomain);
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

  const candidateAppearanceIds = new Set(appearances.filter((a) => a.series === 'BW-CAND').map((a) => a.id));
  if (candidateSelection.length !== candidateAppearanceIds.size) throw new Error('every candidate appearance must have exactly one selection record');
  const selectionByAppearance = new Map(candidateSelection.map((s) => [s.appearanceId, s]));
  for (const id of candidateAppearanceIds) if (!selectionByAppearance.has(id)) throw new Error(`${id}: missing candidate selection record`);
  for (const selection of candidateSelection) {
    if (!candidateAppearanceIds.has(selection.appearanceId)) throw new Error(`${selection.appearanceId}: selection record targets non-candidate appearance`);
    validateEvidence(selection.evidence, sourceIds, `candidate selection ${selection.appearanceId}`);
    if (selection.outcome === 'selected') {
      const final = appearanceById.get(selection.finalAppearanceId!);
      if (!final || final.series !== 'BW') throw new Error(`${selection.appearanceId}: selected final is not a BW appearance`);
      const ownerCandidate = appearanceOwners.get(selection.appearanceId);
      const ownerFinal = appearanceOwners.get(selection.finalAppearanceId!);
      if (selection.versionRelation === 'same-version' && ownerCandidate !== ownerFinal) throw new Error(`${selection.appearanceId}: same-version selection does not share final Version`);
      if (selection.versionRelation === 'revised-into' && !relations.some((r) => r.fromVersionId === ownerCandidate && r.toVersionId === ownerFinal)) throw new Error(`${selection.appearanceId}: revised selection lacks candidate→final Version relation`);
    }
  }
  const publicIds = new Set(publicShortlist.map((p) => p.appearanceId));
  for (const p of publicShortlist) {
    const s = selectionByAppearance.get(p.appearanceId);
    if (!s || s.outcome !== 'not-selected') throw new Error(`${p.appearanceId}: public shortlist entry must have frozen not-selected outcome`);
    if (appearanceOwners.get(p.appearanceId) !== p.versionId) throw new Error(`${p.appearanceId}: public shortlist version mismatch`);
    validateEvidence(p.evidence, sourceIds, `public shortlist ${p.appearanceId}`);
  }
  for (const s of candidateSelection) if (s.outcome === 'not-selected' && !publicIds.has(s.appearanceId)) throw new Error(`${s.appearanceId}: frozen not-selected candidate missing from public shortlist projection`);

  const taxonomyDomainIds = new Set(taxonomy.domains.map((item) => item.id));
  const taxonomySubtopics = new Map(taxonomy.subtopics.map((item) => [item.id, item]));
  if (taxonomyDomainIds.size !== 4) throw new Error('taxonomy must define exactly four primary domains');
  const finalVersionIds = new Set(versions.filter((version) => version.appearanceIds.some((id) => appearanceById.get(id)?.series === 'BW')).map((version) => version.id));
  const publicVersionIds = new Set([...finalVersionIds, ...publicShortlist.map((item) => item.versionId)]);
  if (enforcePublicCorpusCompleteness && publicVersionIds.size !== 786) throw new Error(`public Version universe must remain 786, got ${publicVersionIds.size}`);
  if (classifications.length !== publicVersionIds.size) throw new Error(`every public Version requires one classification (${classifications.length}/${publicVersionIds.size})`);
  for (const classification of classifications) {
    if (!publicVersionIds.has(classification.versionId)) throw new Error(`${classification.versionId}: classification targets non-public Version`);
    validateEvidence(classification.evidence, sourceIds, `classification ${classification.versionId}`);
    const canonicalDomain = versionDomainById.get(classification.versionId);
    // P3C deliberately leaves some shortlist-only candidate appearances without a domain.
    // When a P3C canonical domain exists, P3D must agree with it; otherwise the
    // first-class P3D classification supplies the publication domain without
    // mutating the frozen P3C identity graph.
    if (canonicalDomain && classification.primaryDomain !== canonicalDomain) throw new Error(`${classification.versionId}: classification domain ${classification.primaryDomain} disagrees with canonical domain ${canonicalDomain}`);
    if (classification.subtopics.length < 1 || classification.subtopics.length > 3) throw new Error(`${classification.versionId}: classification requires one to three reviewed subtopics`);
    if (new Set(classification.subtopics).size !== classification.subtopics.length) throw new Error(`${classification.versionId}: classification repeats a subtopic`);
    for (const subtopic of classification.subtopics) {
      const item = taxonomySubtopics.get(subtopic);
      if (!item) throw new Error(`${classification.versionId}: unknown subtopic ${subtopic}`);
      if (item.domain !== classification.primaryDomain) throw new Error(`${classification.versionId}: subtopic ${subtopic} belongs to ${item.domain}, not ${classification.primaryDomain}`);
    }
  }
  for (const id of publicVersionIds) if (!classifications.some((item) => item.versionId === id)) throw new Error(`${id}: missing public classification`);

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
      const statementPath = curatedPath(selection.statement.ref);
      if (statementPath) await validateCuratedMarkdownAssets(repoRoot, statementPath, selection.versionId, { kind: 'statement' }, assetBindings);
      for (const solution of selection.solutions.items) {
        const solutionPath = curatedPath(solution.ref);
        if (solutionPath) await validateCuratedMarkdownAssets(repoRoot, solutionPath, selection.versionId, { kind: 'solution', id: solution.id }, assetBindings);
      }
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
