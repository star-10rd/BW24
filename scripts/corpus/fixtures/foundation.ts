import assert from 'node:assert/strict';
import type { CanonicalState } from '../validation';
import { validateCanonicalState } from '../validation';

const official = (label: string) => ({
  source: { sourceId: 'fixture-official', locator: label },
  kind: 'official-number' as const,
});
const match = (item: string) => ({
  source: { sourceId: 'mathnet-v0', item },
  kind: 'statement-match' as const,
});

function baseState(): CanonicalState {
  return {
    schemaVersion: { schema: 'bw26-corpus', schemaVersion: 5 },
    sources: [
      {
        id: 'mathnet-v0',
        title: 'Fixture MathNet v0',
        kind: 'dataset',
        roles: ['content-source', 'enrichment-source'],
      },
      {
        id: 'fixture-official',
        title: 'Fixture official source',
        kind: 'booklet',
        roles: ['identity-authority', 'content-source'],
      },
    ],
    mathnetLock: {
      sourceSnapshot: 'mathnet-v0', format: 'parquet', totalRows: 853, reader: 'bw26-mathnet-parquet-v1',
      shards: [
        { index: 0, rows: 427, sha256: 'a4bbb1becd33c028272ae39eed33913f7142dfcd540b864620dcbba36e15763f' },
        { index: 1, rows: 426, sha256: 'affe4a1ceeb931d4fe8c968f8023f222c8933c732f2631a578c6af3c85b3e4da' },
      ],
    },
    finalYearPolicies: [2096, 2097, 2098, 2099].map((year) => ({
      year,
      numbering: { kind: 'range', from: 1, to: 1 },
      domains: { kind: 'explicit-per-appearance' },
      acceptance: 'frozen',
      evidence: [official(`${year} final`)],
    })),
    candidateSets: [
      {
        id: 'bw-candset:2099:fixture-shortlist',
        year: 2099,
        stage: 'shortlist',
        evidenceConfidence: 'high',
        historicalTitle: 'Fixture shortlist',
        acceptance: 'frozen',
        evidence: [official('2099 shortlist')],
      },
    ],
    candidateYearCoverage: Array.from({ length: 36 }, (_, index) => ({
      year: 1990 + index,
      candidateCorpusStatus: 'unrecovered' as const,
      historicalCompleteness: 'not-established' as const,
      notes: [],
      acceptance: 'frozen' as const,
      evidence: [],
    })),
    candidateSelection: [
      {
        appearanceId: 'bw-cand:2099:a1',
        outcome: 'selected',
        finalAppearanceId: 'bw:2099:01',
        versionRelation: 'revised-into',
        basis: 'frozen-p3b-related-version',
        acceptance: 'frozen',
        evidence: [official('2099 shortlist A1 selected/revised into final')],
      },
    ],
    publicShortlistOnly: [],
    appearances: [
      { id: 'bw:2096:01', series: 'BW', year: 2096, number: '1', domain: 'A', acceptance: 'frozen', evidence: [official('2096 problem 1')] },
      { id: 'bw:2097:01', series: 'BW', year: 2097, number: '1', domain: 'N', acceptance: 'frozen', evidence: [official('2097 problem 1')] },
      { id: 'bw:2098:01', series: 'BW', year: 2098, number: '1', domain: 'G', acceptance: 'frozen', evidence: [official('2098 problem 1')] },
      { id: 'bw:2099:01', series: 'BW', year: 2099, number: '1', domain: 'A', acceptance: 'frozen', evidence: [official('2099 problem 1')] },
      { id: 'bw-cand:2099:a1', series: 'BW-CAND', year: 2099, number: 'a1', candidateSetId: 'bw-candset:2099:fixture-shortlist', nativeLabel: 'A1', acceptance: 'frozen', evidence: [{ source: { sourceId: 'fixture-official', locator: '2099 shortlist A1' }, kind: 'explicit-label' }] },
    ],
    versions: [
      { id: 'v:bw:2096:01', publicId: 'fixture-normal', primaryAppearanceId: 'bw:2096:01', appearanceIds: ['bw:2096:01'], acceptance: 'frozen', evidence: [] },
      { id: 'v:bw:2097:01', publicId: 'fixture-duplicate', primaryAppearanceId: 'bw:2097:01', appearanceIds: ['bw:2097:01'], acceptance: 'frozen', evidence: [] },
      { id: 'v:bw:2098:01', publicId: 'fixture-corrupt', primaryAppearanceId: 'bw:2098:01', appearanceIds: ['bw:2098:01'], acceptance: 'frozen', evidence: [] },
      { id: 'v:bw-cand:2099:a1', publicId: 'fixture-shortlist-revision', primaryAppearanceId: 'bw-cand:2099:a1', appearanceIds: ['bw-cand:2099:a1'], acceptance: 'frozen', evidence: [] },
      { id: 'v:bw:2099:01', publicId: 'fixture-final-revision', primaryAppearanceId: 'bw:2099:01', appearanceIds: ['bw:2099:01'], acceptance: 'frozen', evidence: [] },
    ],
    versionRelations: [
      { fromVersionId: 'v:bw-cand:2099:a1', toVersionId: 'v:bw:2099:01', kind: 'revised-into', acceptance: 'frozen', evidence: [{ source: { sourceId: 'fixture-official', locator: 'revision note' }, kind: 'independent-cross-check' }] },
    ],
    sourceLinks: [
      { source: { sourceId: 'mathnet-v0', item: 'normal' }, versionId: 'v:bw:2096:01', relation: 'same-version', statementFidelity: 'exact', metadata: 'consistent', acceptance: 'frozen', evidence: [match('normal')] },
      { source: { sourceId: 'mathnet-v0', item: 'dup-primary' }, versionId: 'v:bw:2097:01', relation: 'same-version', statementFidelity: 'exact', metadata: 'consistent', acceptance: 'frozen', evidence: [match('dup-primary')] },
      { source: { sourceId: 'mathnet-v0', item: 'dup-wrong-year' }, versionId: 'v:bw:2097:01', relation: 'same-version', statementFidelity: 'exact', metadata: 'misattributed', duplicateOf: { sourceId: 'mathnet-v0', item: 'dup-primary' }, acceptance: 'frozen', evidence: [match('dup-wrong-year')] },
      { source: { sourceId: 'mathnet-v0', item: 'corrupt' }, versionId: 'v:bw:2098:01', relation: 'same-version', statementFidelity: 'corrupt', metadata: 'consistent', acceptance: 'frozen', evidence: [match('corrupt')] },
      { source: { sourceId: 'mathnet-v0', item: 'shortlist' }, versionId: 'v:bw-cand:2099:a1', relation: 'same-version', statementFidelity: 'exact', metadata: 'consistent', acceptance: 'frozen', evidence: [match('shortlist')] },
      { source: { sourceId: 'mathnet-v0', item: 'final' }, versionId: 'v:bw:2099:01', relation: 'same-version', statementFidelity: 'exact', metadata: 'consistent', acceptance: 'frozen', evidence: [match('final')] },
    ],
    contentSelections: [
      {
        versionId: 'v:bw:2096:01',
        statement: { language: 'en', ref: { kind: 'source-field', ref: { source: { sourceId: 'mathnet-v0', item: 'normal' }, field: 'problem_markdown' } }, acceptance: 'frozen' },
        solutions: { status: 'verified', items: [{ id: 'solution-1', language: 'en', ref: { kind: 'source-field', ref: { source: { sourceId: 'mathnet-v0', item: 'normal' }, field: 'solutions_markdown', index: 0 } }, compatibility: 'native', acceptance: 'frozen' }] },
      },
      {
        versionId: 'v:bw:2097:01',
        statement: { language: 'en', ref: { kind: 'source-field', ref: { source: { sourceId: 'mathnet-v0', item: 'dup-primary' }, field: 'problem_markdown' } }, acceptance: 'frozen' },
        solutions: { status: 'unavailable', items: [], reason: 'Fixture source intentionally unavailable.', evidence: [official('fixture unavailable solution')] },
      },
      {
        versionId: 'v:bw:2098:01',
        statement: { language: 'en', ref: { kind: 'curated-file', path: 'data/corpus/curation/curated/statements/fixture-corrupt.md', evidence: [{ source: { sourceId: 'fixture-official', locator: '2098 problem 1' }, kind: 'transcription-check' }] }, acceptance: 'frozen' },
        solutions: { status: 'unavailable', items: [], reason: 'Fixture source intentionally unavailable.', evidence: [official('fixture unavailable solution')] },
      },
      {
        versionId: 'v:bw:2099:01',
        statement: { language: 'en', ref: { kind: 'source-field', ref: { source: { sourceId: 'mathnet-v0', item: 'final' }, field: 'problem_markdown' } }, acceptance: 'frozen' },
        solutions: { status: 'verified', items: [{ id: 'solution-1', language: 'en', ref: { kind: 'source-field', ref: { source: { sourceId: 'mathnet-v0', item: 'shortlist' }, field: 'solutions_markdown', index: 0 } }, compatibility: 'verified-compatible', acceptance: 'frozen' }] },
      },
    ],
    taxonomy: {
      schema: 'bw26-topic-taxonomy', version: 1,
      domains: [
        { id: 'A', label: 'Algebra' }, { id: 'C', label: 'Combinatorics' },
        { id: 'G', label: 'Geometry' }, { id: 'N', label: 'Number Theory' },
      ],
      subtopics: [
        { id: 'algebraic-manipulation', label: 'Algebraic manipulation', domain: 'A' },
        { id: 'divisibility-and-factorization', label: 'Divisibility and factorization', domain: 'N' },
        { id: 'triangles-and-centers', label: 'Triangles and centers', domain: 'G' },
      ],
    },
    classifications: [
      { versionId: 'v:bw:2096:01', primaryDomain: 'A', subtopics: ['algebraic-manipulation'], acceptance: 'frozen', evidence: [{ source: { sourceId: 'fixture-official', locator: '2096 problem 1' }, kind: 'curated-classification' }] },
      { versionId: 'v:bw:2097:01', primaryDomain: 'N', subtopics: ['divisibility-and-factorization'], acceptance: 'frozen', evidence: [{ source: { sourceId: 'fixture-official', locator: '2097 problem 1' }, kind: 'curated-classification' }] },
      { versionId: 'v:bw:2098:01', primaryDomain: 'G', subtopics: ['triangles-and-centers'], acceptance: 'frozen', evidence: [{ source: { sourceId: 'fixture-official', locator: '2098 problem 1' }, kind: 'curated-classification' }] },
      { versionId: 'v:bw:2099:01', primaryDomain: 'A', subtopics: ['algebraic-manipulation'], acceptance: 'frozen', evidence: [{ source: { sourceId: 'fixture-official', locator: '2099 problem 1' }, kind: 'curated-classification' }] },
    ],
    assetBindings: [
      {
        versionId: 'v:bw:2096:01',
        owner: { kind: 'statement' },
        sourceKey: 'attached_image_1.png',
        source: { kind: 'source-image', ref: { source: { sourceId: 'mathnet-v0', item: 'normal' }, field: 'images', index: 0 } },
        alt: 'Fixture mathematical diagram',
        presentation: 'diagram',
        acceptance: 'frozen',
      },
    ],
    reviews: [],
  };
}

export async function runFoundationStressTests(): Promise<void> {
  const valid = baseState();
  await validateCanonicalState(valid, { checkCuratedFiles: false, enforceFinalPolicyCompleteness: true, enforcePublicCorpusCompleteness: false });

  const invalidCorrupt = structuredClone(valid);
  const selection = (invalidCorrupt.contentSelections as Array<Record<string, unknown>>).find((entry) => entry.versionId === 'v:bw:2098:01')!;
  selection.statement = {
    language: 'en',
    ref: { kind: 'source-field', ref: { source: { sourceId: 'mathnet-v0', item: 'corrupt' }, field: 'problem_markdown' } },
    acceptance: 'frozen',
  };
  await assert.rejects(
    () => validateCanonicalState(invalidCorrupt, { checkCuratedFiles: false, enforceFinalPolicyCompleteness: true, enforcePublicCorpusCompleteness: false }),
    /corrupt source statement cannot be selected directly/,
  );

  const invalidMerge = structuredClone(valid);
  const version = (invalidMerge.versions as Array<Record<string, unknown>>).find((entry) => entry.id === 'v:bw:2099:01')!;
  version.appearanceIds = ['bw:2099:01', 'bw-cand:2099:a1'];
  version.evidence = [{ source: { sourceId: 'fixture-official', locator: 'same-version claim' }, kind: 'statement-match' }];
  await assert.rejects(
    () => validateCanonicalState(invalidMerge, { checkCuratedFiles: false, enforceFinalPolicyCompleteness: true, enforcePublicCorpusCompleteness: false }),
    /appearance belongs to both|appearances disagree on domain/,
  );
}
