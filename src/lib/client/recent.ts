import type { PracticeCollection } from '../product/practice-catalog';
import type { Domain } from '../problems/types';

export const RECENT_STORAGE_KEY = 'bw26.practice.recent.v1';
export const RECENT_SCHEMA = 1 as const;
export const RECENT_LIMIT = 40;

export type RecentEntry = {
  id: string;
  route: string;
  collection: PracticeCollection;
  year: number;
  numberOrSlug: string;
  domain: Domain;
  source: 'random' | 'training';
  seenAt: number;
};
export type RecentStateV1 = { schema: 1; publicSetFingerprint: string; entries: RecentEntry[] };

export function emptyRecentState(publicSetFingerprint: string): RecentStateV1 {
  return { schema: RECENT_SCHEMA, publicSetFingerprint, entries: [] };
}

export function sanitizeRecent(value: unknown, publicSetFingerprint: string, allowedIds?: ReadonlySet<string>): RecentStateV1 {
  if (!value || typeof value !== 'object') return emptyRecentState(publicSetFingerprint);
  const state = value as Partial<RecentStateV1>;
  if (state.schema !== RECENT_SCHEMA || state.publicSetFingerprint !== publicSetFingerprint || !Array.isArray(state.entries)) return emptyRecentState(publicSetFingerprint);
  const entries: RecentEntry[] = [];
  const seen = new Set<string>();
  for (const raw of state.entries) {
    const entry = parseEntry(raw);
    if (!entry || seen.has(entry.id) || (allowedIds && !allowedIds.has(entry.id))) continue;
    seen.add(entry.id);
    entries.push(entry);
    if (entries.length >= RECENT_LIMIT) break;
  }
  entries.sort((a, b) => b.seenAt - a.seenAt);
  return { schema: RECENT_SCHEMA, publicSetFingerprint, entries: entries.slice(0, RECENT_LIMIT) };
}

export function addRecent(state: RecentStateV1, entry: RecentEntry): RecentStateV1 {
  const parsed = parseEntry(entry);
  if (!parsed) return state;
  return { ...state, entries: [parsed, ...state.entries.filter((item) => item.id !== parsed.id)].slice(0, RECENT_LIMIT) };
}

function parseEntry(value: unknown): RecentEntry | null {
  if (!value || typeof value !== 'object') return null;
  const entry = value as Partial<RecentEntry>;
  if (typeof entry.id !== 'string' || entry.id.length > 120 || typeof entry.route !== 'string' || !entry.route.startsWith('/')) return null;
  if (entry.collection !== 'contest' && entry.collection !== 'shortlist') return null;
  if (!Number.isInteger(entry.year) || entry.year! < 1900 || entry.year! > 2200) return null;
  if (typeof entry.numberOrSlug !== 'string' || entry.numberOrSlug.length > 80) return null;
  if (!['A', 'C', 'G', 'N'].includes(entry.domain ?? '')) return null;
  if (entry.source !== 'random' && entry.source !== 'training') return null;
  if (!Number.isFinite(entry.seenAt)) return null;
  return entry as RecentEntry;
}
