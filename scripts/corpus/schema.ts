import { z } from 'zod';

export const DomainSchema = z.enum(['A', 'N', 'C', 'G']);
export type Domain = z.infer<typeof DomainSchema>;

export const AcceptanceSchema = z.enum(['verified', 'frozen']);
export type Acceptance = z.infer<typeof AcceptanceSchema>;

const SourceIdSchema = z.string().regex(/^[a-z0-9][a-z0-9._:-]*$/, 'invalid source id');
const PublicSlugSchema = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'invalid public slug');
const Sha256Schema = z.string().regex(/^[a-f0-9]{64}$/, 'invalid SHA-256');

export const SourceRefSchema = z.object({
  sourceId: SourceIdSchema,
  item: z.string().min(1).optional(),
  locator: z.string().min(1).optional(),
}).strict();
export type SourceRef = z.infer<typeof SourceRefSchema>;

export const EvidenceKindSchema = z.enum([
  'official-number',
  'candidate-set-membership',
  'source-label',
  'selection-outcome',
  'coverage-audit',
  'explicit-label',
  'section-order',
  'document-order',
  'statement-match',
  'transcription-check',
  'independent-cross-check',
  'curated-classification',
]);

export const EvidenceRefSchema = z.object({
  source: SourceRefSchema,
  kind: EvidenceKindSchema,
  note: z.string().min(1).optional(),
}).strict();
export type EvidenceRef = z.infer<typeof EvidenceRefSchema>;

export const SourceRegistryRecordSchema = z.object({
  id: SourceIdSchema,
  title: z.string().min(1),
  kind: z.enum(['dataset', 'pdf', 'web-page', 'repository', 'booklet', 'forum']),
  roles: z.array(z.enum([
    'identity-authority',
    'content-source',
    'transcription-aid',
    'cross-check',
    'enrichment-source',
  ])).min(1),
  url: z.url().optional(),
  sha256: Sha256Schema.optional(),
  rightsNote: z.string().min(1).optional(),
}).strict();
export type SourceRegistryRecord = z.infer<typeof SourceRegistryRecordSchema>;

export const FinalYearPolicySchema = z.object({
  year: z.number().int().min(1980).max(2100),
  numbering: z.discriminatedUnion('kind', [
    z.object({ kind: z.literal('range'), from: z.number().int().positive(), to: z.number().int().positive() }).strict(),
    z.object({ kind: z.literal('explicit'), values: z.array(z.string().min(1)).min(1) }).strict(),
  ]),
  domains: z.discriminatedUnion('kind', [
    z.object({ kind: z.literal('block-order'), order: z.array(DomainSchema).min(1), blockSize: z.number().int().positive() }).strict(),
    z.object({ kind: z.literal('explicit-per-appearance') }).strict(),
  ]),
  acceptance: AcceptanceSchema,
  evidence: z.array(EvidenceRefSchema).min(1),
}).strict();
export type FinalYearPolicy = z.infer<typeof FinalYearPolicySchema>;

export const CandidateStageSchema = z.enum(['proposal', 'candidate-set', 'longlist', 'shortlist']);
export type CandidateStage = z.infer<typeof CandidateStageSchema>;

export const CandidateSetRecordSchema = z.object({
  id: z.string().regex(/^bw-candset:[0-9]{4}:[a-z0-9-]+$/),
  year: z.number().int().min(1980).max(2100),
  stage: CandidateStageSchema,
  evidenceConfidence: z.enum(['high', 'medium', 'partial', 'secondary-only']),
  historicalTitle: z.string().min(1).nullable(),
  acceptance: AcceptanceSchema,
  evidence: z.array(EvidenceRefSchema).min(1),
  note: z.string().min(1).optional(),
}).strict();
export type CandidateSetRecord = z.infer<typeof CandidateSetRecordSchema>;

export const CandidateYearCoverageRecordSchema = z.object({
  year: z.number().int().min(1980).max(2100),
  candidateCorpusStatus: z.enum(['unrecovered','substantial-recovered','partial-recovered','geometry-only-secondary-recovered']),
  historicalCompleteness: z.enum(['not-established','not-proven-complete','known-or-likely-partial','partial','complete']),
  notes: z.array(z.string()),
  acceptance: AcceptanceSchema,
  evidence: z.array(EvidenceRefSchema),
}).strict();
export type CandidateYearCoverageRecord = z.infer<typeof CandidateYearCoverageRecordSchema>;

export const AppearanceRecordSchema = z.discriminatedUnion('series', [
  z.object({
    id: z.string().min(1), series: z.literal('BW'), year: z.number().int().min(1980).max(2100),
    number: z.string().min(1), domain: DomainSchema.optional(), acceptance: AcceptanceSchema, evidence: z.array(EvidenceRefSchema).min(1),
  }).strict(),
  z.object({
    id: z.string().min(1), series: z.literal('BW-CAND'), year: z.number().int().min(1980).max(2100),
    number: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/), candidateSetId: z.string().regex(/^bw-candset:[0-9]{4}:[a-z0-9-]+$/),
    nativeLabel: z.string().min(1).optional(), domain: DomainSchema.optional(), acceptance: AcceptanceSchema, evidence: z.array(EvidenceRefSchema).min(1),
  }).strict(),
]);
export type AppearanceRecord = z.infer<typeof AppearanceRecordSchema>;

export const CandidateSelectionRecordSchema = z.object({
  appearanceId: z.string().min(1),
  outcome: z.enum(['selected','not-selected','unresolved']),
  finalAppearanceId: z.string().min(1).optional(),
  versionRelation: z.enum(['same-version','revised-into']).optional(),
  basis: z.enum(['frozen-p3b-same-version','frozen-p3b-related-version','secondary-final-label-plus-statement-match','all-20-final-ancestors-recovered','secondary-final-marking-absence-with-complete-geometry-final-accounting','no-frozen-final-relation']),
  acceptance: AcceptanceSchema, evidence: z.array(EvidenceRefSchema).min(1), note: z.string().min(1).optional(),
}).strict().superRefine((value,ctx)=>{
  if(value.outcome==='selected' && (!value.finalAppearanceId || !value.versionRelation)) ctx.addIssue({code:'custom',message:'selected candidate requires finalAppearanceId and versionRelation'});
  if(value.outcome!=='selected' && (value.finalAppearanceId || value.versionRelation)) ctx.addIssue({code:'custom',message:'non-selected/unresolved candidate must not name a final relation'});
});
export type CandidateSelectionRecord = z.infer<typeof CandidateSelectionRecordSchema>;

export const PublicShortlistRecordSchema = z.object({
  appearanceId: z.string().min(1), versionId: z.string().min(1), basis: z.string().min(1), acceptance: AcceptanceSchema, evidence: z.array(EvidenceRefSchema).min(1),
}).strict();
export type PublicShortlistRecord = z.infer<typeof PublicShortlistRecordSchema>;

export const VersionRecordSchema = z.object({
  id: z.string().min(1),
  publicId: PublicSlugSchema,
  primaryAppearanceId: z.string().min(1),
  appearanceIds: z.array(z.string().min(1)).min(1),
  acceptance: AcceptanceSchema,
  evidence: z.array(EvidenceRefSchema),
}).strict();
export type VersionRecord = z.infer<typeof VersionRecordSchema>;

export const VersionRelationSchema = z.object({
  fromVersionId: z.string().min(1),
  toVersionId: z.string().min(1),
  kind: z.literal('revised-into'),
  acceptance: AcceptanceSchema,
  evidence: z.array(EvidenceRefSchema).min(1),
}).strict();
export type VersionRelation = z.infer<typeof VersionRelationSchema>;

export const SourceLinkRecordSchema = z.object({
  source: SourceRefSchema,
  versionId: z.string().min(1),
  relation: z.literal('same-version'),
  statementFidelity: z.enum(['exact', 'equivalent', 'repairable', 'incomplete', 'corrupt']),
  metadata: z.enum(['consistent', 'misattributed', 'partial', 'unknown']),
  duplicateOf: SourceRefSchema.optional(),
  acceptance: AcceptanceSchema,
  evidence: z.array(EvidenceRefSchema).min(1),
  note: z.string().min(1).optional(),
}).strict();
export type SourceLinkRecord = z.infer<typeof SourceLinkRecordSchema>;

export const SourceFieldRefSchema = z.object({
  source: SourceRefSchema,
  field: z.enum(['problem_markdown', 'solutions_markdown', 'topics_flat', 'images']),
  index: z.number().int().nonnegative().optional(),
}).strict().superRefine((value, ctx) => {
  const indexed = value.field === 'solutions_markdown' || value.field === 'images';
  if (indexed && value.index === undefined) {
    ctx.addIssue({ code: 'custom', message: `${value.field} requires index` });
  }
  if (!indexed && value.index !== undefined) {
    ctx.addIssue({ code: 'custom', message: `${value.field} must not specify index` });
  }
});
export type SourceFieldRef = z.infer<typeof SourceFieldRefSchema>;

export const CuratedFileRefSchema = z.object({
  kind: z.literal('curated-file'),
  path: z.string().min(1),
  evidence: z.array(EvidenceRefSchema).min(1),
}).strict();
export type CuratedFileRef = z.infer<typeof CuratedFileRefSchema>;

export const ContentRefSchema = z.union([
  z.object({ kind: z.literal('source-field'), ref: SourceFieldRefSchema }).strict(),
  CuratedFileRefSchema,
]);
export type ContentRef = z.infer<typeof ContentRefSchema>;

export const ContentSelectionRecordSchema = z.object({
  versionId: z.string().min(1),
  statement: z.object({
    language: z.literal('en'),
    ref: ContentRefSchema,
    acceptance: AcceptanceSchema,
  }).strict(),
  solutions: z.object({
    status: z.enum(['verified', 'unavailable', 'unresolved']),
    items: z.array(z.object({
      id: PublicSlugSchema,
      language: z.literal('en'),
      ref: ContentRefSchema,
      compatibility: z.enum(['native', 'verified-compatible', 'adapted']),
      acceptance: AcceptanceSchema,
    }).strict()),
  }).strict(),
  topics: z.union([
    z.object({ kind: z.literal('source'), ref: ContentRefSchema }).strict(),
    z.object({ kind: z.literal('values'), values: z.array(z.string().min(1)).min(1) }).strict(),
  ]).optional(),
}).strict().superRefine((value, ctx) => {
  if (value.solutions.status === 'verified' && value.solutions.items.length === 0) {
    ctx.addIssue({ code: 'custom', path: ['solutions', 'items'], message: 'verified solutions require at least one item' });
  }
  if (value.solutions.status !== 'verified' && value.solutions.items.length !== 0) {
    ctx.addIssue({ code: 'custom', path: ['solutions', 'items'], message: `${value.solutions.status} solutions must not contain selected items` });
  }
});
export type ContentSelectionRecord = z.infer<typeof ContentSelectionRecordSchema>;

export const ContentOwnerSchema = z.union([
  z.object({ kind: z.literal('statement') }).strict(),
  z.object({ kind: z.literal('solution'), id: PublicSlugSchema }).strict(),
]);
export type ContentOwner = z.infer<typeof ContentOwnerSchema>;

export const AssetBindingRecordSchema = z.object({
  versionId: z.string().min(1),
  owner: ContentOwnerSchema,
  sourceKey: z.string().min(1),
  source: z.union([
    z.object({
      kind: z.literal('source-image'),
      ref: z.object({
        source: SourceRefSchema,
        field: z.literal('images'),
        index: z.number().int().nonnegative(),
      }).strict(),
    }).strict(),
    CuratedFileRefSchema,
  ]),
  alt: z.string().min(1),
  presentation: z.enum(['diagram', 'image']),
  acceptance: AcceptanceSchema,
}).strict();
export type AssetBindingRecord = z.infer<typeof AssetBindingRecordSchema>;

export const ReviewSubjectSchema = z.union([
  z.object({ kind: z.literal('appearance'), id: z.string().min(1) }).strict(),
  z.object({ kind: z.literal('version'), id: z.string().min(1) }).strict(),
  z.object({ kind: z.literal('source'), ref: SourceRefSchema }).strict(),
  z.object({ kind: z.literal('statement'), versionId: z.string().min(1) }).strict(),
  z.object({ kind: z.literal('solution'), versionId: z.string().min(1), solutionId: PublicSlugSchema }).strict(),
  z.object({ kind: z.literal('asset'), versionId: z.string().min(1), owner: ContentOwnerSchema, sourceKey: z.string().min(1) }).strict(),
  z.object({ kind: z.literal('candidate'), label: z.string().min(1) }).strict(),
]);
export type ReviewSubject = z.infer<typeof ReviewSubjectSchema>;

export const ReviewRecordSchema = z.object({
  id: z.string().regex(/^review-[a-z0-9]+(?:-[a-z0-9]+)*$/),
  type: z.enum([
    'source-match',
    'appearance-identity',
    'version-equivalence',
    'version-revision',
    'domain',
    'statement-transcription',
    'solution-compatibility',
    'asset',
  ]),
  status: z.enum(['open', 'resolved']),
  blocking: z.boolean(),
  subjects: z.array(ReviewSubjectSchema).min(1),
  evidence: z.array(EvidenceRefSchema),
  question: z.string().min(1),
  resolution: z.string().min(1).optional(),
}).strict().superRefine((value, ctx) => {
  if (value.status === 'resolved' && !value.resolution) {
    ctx.addIssue({ code: 'custom', path: ['resolution'], message: 'resolved review requires resolution' });
  }
  if (value.status === 'open' && value.resolution) {
    ctx.addIssue({ code: 'custom', path: ['resolution'], message: 'open review must not contain resolution' });
  }
});
export type ReviewRecord = z.infer<typeof ReviewRecordSchema>;

export const SchemaVersionSchema = z.object({
  schema: z.literal('bw26-corpus'),
  schemaVersion: z.literal(3),
}).strict();
export type SchemaVersion = z.infer<typeof SchemaVersionSchema>;

export const MathNetLockSchema = z.object({
  sourceSnapshot: z.literal('mathnet-v0'),
  format: z.literal('parquet'),
  shards: z.array(z.object({ index: z.number().int().min(0).max(1), sha256: Sha256Schema, rows: z.number().int().positive() }).strict()).length(2),
  totalRows: z.literal(853),
  reader: z.literal('bw26-mathnet-parquet-v1'),
}).strict().superRefine((value, ctx) => { const total=value.shards.reduce((sum,s)=>sum+s.rows,0); if(total!==value.totalRows) ctx.addIssue({code:'custom',path:['shards'],message:`shard row counts sum to ${total}, expected ${value.totalRows}`}); });
export type MathNetLock = z.infer<typeof MathNetLockSchema>;
