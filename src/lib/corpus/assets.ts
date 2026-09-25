import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { extname, resolve } from 'node:path';
import type { AssetBindingRecord, ContentOwner } from '../../../scripts/corpus/schema';
import type { ProblemAsset } from '../problems/types';

export type ProjectableAsset = ProblemAsset & {
  sourcePath: string;
  sha256: string;
};

const metaCache = new Map<string, Promise<ProjectableAsset>>();

export function ownerKey(owner: ContentOwner): string {
  return owner.kind === 'statement' ? 'statement' : `solution:${owner.id}`;
}

export function bindingsForOwner(
  bindings: readonly AssetBindingRecord[],
  versionId: string,
  owner: ContentOwner,
): AssetBindingRecord[] {
  const expected = ownerKey(owner);
  return bindings.filter((binding) => binding.versionId === versionId && ownerKey(binding.owner) === expected);
}

export async function materializeProblemAsset(binding: AssetBindingRecord, root = process.cwd()): Promise<ProjectableAsset> {
  if (binding.source.kind !== 'curated-file') {
    throw new Error(`${binding.versionId}/${ownerKey(binding.owner)}/${binding.sourceKey}: publication assets must be curated files`);
  }
  const sourcePath = binding.source.path;
  const cacheKey = `${root}|${sourcePath}|${binding.sourceKey}|${binding.alt}|${binding.presentation}`;
  const existing = metaCache.get(cacheKey);
  if (existing) return existing;
  const promise = (async () => {
    const bytes = await readFile(resolve(root, sourcePath));
    const sha256 = createHash('sha256').update(bytes).digest('hex');
    const extension = extname(sourcePath).toLowerCase();
    if (!['.png', '.jpg', '.jpeg', '.svg', '.webp'].includes(extension)) {
      throw new Error(`${sourcePath}: unsupported publication asset extension ${extension}`);
    }
    const { width, height } = readImageDimensions(bytes, extension, sourcePath);
    const publicExt = extension === '.jpeg' ? '.jpg' : extension;
    return {
      key: binding.sourceKey,
      src: `/problem-assets/generated/${sha256}${publicExt}`,
      alt: binding.alt,
      width,
      height,
      presentation: binding.presentation,
      sourcePath,
      sha256,
    };
  })();
  metaCache.set(cacheKey, promise);
  return promise;
}

function readImageDimensions(bytes: Buffer, extension: string, sourcePath: string): { width: number; height: number } {
  if (extension === '.png') {
    if (bytes.length < 24 || bytes.subarray(1, 4).toString('ascii') !== 'PNG') throw new Error(`${sourcePath}: invalid PNG`);
    return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
  }
  if (extension === '.jpg' || extension === '.jpeg') return jpegDimensions(bytes, sourcePath);
  if (extension === '.webp') return webpDimensions(bytes, sourcePath);
  const text = bytes.toString('utf8', 0, Math.min(bytes.length, 65536));
  const width = text.match(/\bwidth=["']([0-9.]+)(?:px)?["']/i)?.[1];
  const height = text.match(/\bheight=["']([0-9.]+)(?:px)?["']/i)?.[1];
  if (width && height) return { width: Math.round(Number(width)), height: Math.round(Number(height)) };
  const viewBox = text.match(/\bviewBox=["']\s*[-0-9.]+\s+[-0-9.]+\s+([0-9.]+)\s+([0-9.]+)\s*["']/i);
  if (viewBox) return { width: Math.round(Number(viewBox[1])), height: Math.round(Number(viewBox[2])) };
  throw new Error(`${sourcePath}: SVG lacks usable width/height or viewBox`);
}

function jpegDimensions(bytes: Buffer, sourcePath: string): { width: number; height: number } {
  if (bytes.length < 4 || bytes[0] !== 0xff || bytes[1] !== 0xd8) throw new Error(`${sourcePath}: invalid JPEG`);
  let offset = 2;
  while (offset + 8 < bytes.length) {
    if (bytes[offset] !== 0xff) { offset += 1; continue; }
    const marker = bytes[offset + 1]!;
    offset += 2;
    if (marker === 0xd8 || marker === 0xd9) continue;
    const length = bytes.readUInt16BE(offset);
    if (length < 2 || offset + length > bytes.length) break;
    const isSof = [0xc0,0xc1,0xc2,0xc3,0xc5,0xc6,0xc7,0xc9,0xca,0xcb,0xcd,0xce,0xcf].includes(marker);
    if (isSof) return { height: bytes.readUInt16BE(offset + 3), width: bytes.readUInt16BE(offset + 5) };
    offset += length;
  }
  throw new Error(`${sourcePath}: JPEG dimensions not found`);
}

function webpDimensions(bytes: Buffer, sourcePath: string): { width: number; height: number } {
  if (bytes.length < 30 || bytes.toString('ascii', 0, 4) !== 'RIFF' || bytes.toString('ascii', 8, 12) !== 'WEBP') {
    throw new Error(`${sourcePath}: invalid WebP`);
  }
  const kind = bytes.toString('ascii', 12, 16);
  if (kind === 'VP8X') {
    const width = 1 + bytes.readUIntLE(24, 3);
    const height = 1 + bytes.readUIntLE(27, 3);
    return { width, height };
  }
  throw new Error(`${sourcePath}: unsupported WebP subtype ${kind}`);
}
