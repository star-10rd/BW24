import type { AppearanceRecord, FinalYearPolicy, SourceRef } from './schema';

export function makeAppearanceId(series: 'BW' | 'BW-SL', year: number, number: string): string {
  if (series === 'BW') {
    if (!/^\d+$/.test(number)) throw new Error(`BW number must be numeric: ${number}`);
    return `bw:${year}:${String(Number(number)).padStart(2, '0')}`;
  }

  const normalized = number.trim().toUpperCase();
  if (!/^[ANCG]\d+$/.test(normalized)) throw new Error(`BW-SL number must be A#/N#/C#/G#: ${number}`);
  return `bw-sl:${year}:${normalized.toLowerCase()}`;
}

export function makeVersionId(anchorAppearanceId: string): string {
  return `v:${anchorAppearanceId}`;
}

export function sourceRefKey(ref: SourceRef): string {
  return [ref.sourceId, ref.item ?? '', ref.locator ?? ''].join('|');
}

export function appearanceSortKey(appearance: AppearanceRecord): string {
  const seriesOrder = appearance.series === 'BW' ? '0' : '1';
  const number = appearance.series === 'BW'
    ? String(Number(appearance.number)).padStart(4, '0')
    : appearance.number.toUpperCase().replace(/^(.)/, '$1').replace(/(\d+)$/, (digits) => digits.padStart(4, '0'));
  return `${seriesOrder}:${String(appearance.year).padStart(4, '0')}:${number}`;
}

export function expectedFinalNumbers(policy: FinalYearPolicy): string[] {
  const numbering = policy.numbering;
  if (numbering.kind === 'explicit') return [...numbering.values];
  if (numbering.to < numbering.from) {
    throw new Error(`Final year ${policy.year} has inverted numbering range.`);
  }
  return Array.from(
    { length: numbering.to - numbering.from + 1 },
    (_, index) => String(numbering.from + index),
  );
}

export function resolveAppearanceDomain(
  appearance: AppearanceRecord,
  policies: readonly FinalYearPolicy[],
): 'A' | 'N' | 'C' | 'G' {
  if (appearance.series === 'BW-SL') {
    const code = appearance.number.trim().toUpperCase();
    if (!/^[ANCG]\d+$/.test(code)) throw new Error(`${appearance.id}: invalid BW-SL code ${appearance.number}`);
    return code[0] as 'A' | 'N' | 'C' | 'G';
  }

  const policy = policies.find((entry) => entry.year === appearance.year);
  if (!policy) throw new Error(`${appearance.id}: no final-year policy for ${appearance.year}`);

  if (policy.domains.kind === 'explicit-per-appearance') {
    if (!appearance.domain) throw new Error(`${appearance.id}: explicit domain is required by year policy`);
    return appearance.domain;
  }

  if (!/^\d+$/.test(appearance.number)) throw new Error(`${appearance.id}: BW number must be numeric`);
  const n = Number(appearance.number);
  const expected = expectedFinalNumbers(policy).map(Number);
  const start = Math.min(...expected);
  const offset = n - start;
  if (offset < 0 || offset >= expected.length) throw new Error(`${appearance.id}: number is outside year policy`);
  const blockIndex = Math.floor(offset / policy.domains.blockSize);
  const domain = policy.domains.order[blockIndex];
  if (!domain) throw new Error(`${appearance.id}: domain block order does not cover problem number`);
  return domain;
}
