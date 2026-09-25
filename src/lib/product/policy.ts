import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { z } from 'zod';

const IdList = z.array(z.string().regex(/^bw:\d{4}:\d{2}$/));
const PolicySchema = z.object({
  schema: z.literal('bw26-product-policy'),
  version: z.literal(1),
  contest: z.object({
    websiteYearRanges: z.array(z.tuple([z.number().int(), z.number().int()])),
    websiteInclude: IdList,
    websiteExclude: IdList,
    random: z.object({ inheritsWebsite: z.literal(true), exclude: IdList }),
    training: z.object({ inheritsWebsite: z.literal(true), exclude: IdList }),
    daily: z.object({ years: z.array(z.number().int()).nonempty(), exclude: IdList }),
  }),
  shortlistOnly: z.object({
    website: z.literal('statement-available'),
    random: z.boolean(),
    training: z.boolean(),
    daily: z.literal(false),
  }),
}).strict();

export type ProductPolicy = z.infer<typeof PolicySchema>;
let cached: Promise<ProductPolicy> | null = null;

export function loadProductPolicy(root = process.cwd()): Promise<ProductPolicy> {
  if (root !== process.cwd()) return loadAt(root);
  cached ??= loadAt(root);
  return cached;
}

async function loadAt(root: string): Promise<ProductPolicy> {
  const raw = JSON.parse(await readFile(resolve(root, 'data/product/problem-policy.json'), 'utf8'));
  const policy = PolicySchema.parse(raw);

  let previousRangeEnd: number | null = null;
  for (const [from, to] of policy.contest.websiteYearRanges) {
    if (from > to) throw new Error(`invalid website year range ${from}-${to}`);
    if (previousRangeEnd !== null && from <= previousRangeEnd) {
      throw new Error('website year ranges must be strictly increasing and non-overlapping');
    }
    previousRangeEnd = to;
  }

  const dailyYears = policy.contest.daily.years;
  if (new Set(dailyYears).size !== dailyYears.length) throw new Error('daily years must be unique');
  for (let i = 1; i < dailyYears.length; i += 1) {
    if (dailyYears[i] <= dailyYears[i - 1]) throw new Error('daily years must be strictly increasing');
  }

  const idLists: Array<[string, string[]]> = [
    ['websiteInclude', policy.contest.websiteInclude],
    ['websiteExclude', policy.contest.websiteExclude],
    ['random.exclude', policy.contest.random.exclude],
    ['training.exclude', policy.contest.training.exclude],
    ['daily.exclude', policy.contest.daily.exclude],
  ];
  for (const [label, ids] of idLists) {
    if (new Set(ids).size !== ids.length) throw new Error(`${label} must not contain duplicate IDs`);
  }

  return policy;
}


function stablePolicyJson(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(stablePolicyJson).join(',')}]`;
  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    return `{${Object.keys(record).sort().map((key) => `${JSON.stringify(key)}:${stablePolicyJson(record[key])}`).join(',')}}`;
  }
  return JSON.stringify(value);
}

export async function productPolicyFingerprint(root = process.cwd()): Promise<string> {
  const policy = await loadProductPolicy(root);
  return createHash('sha256').update(stablePolicyJson(policy)).digest('hex');
}

export function yearIsWebsitePublic(year: number, policy: ProductPolicy): boolean {
  return policy.contest.websiteYearRanges.some(([from, to]) => year >= from && year <= to);
}
