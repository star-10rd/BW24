import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { assertBw26RepoRoot, p3Paths, readJson } from '../io';
import { MathNetLockSchema } from '../schema';

async function sha256(path: string): Promise<string> {
  return await new Promise((resolveDigest, reject) => {
    const hash = createHash('sha256');
    const stream = createReadStream(path);
    stream.on('error', reject);
    stream.on('data', (chunk) => hash.update(chunk));
    stream.on('end', () => resolveDigest(hash.digest('hex')));
  });
}

const root = process.cwd();
await assertBw26RepoRoot(root);
const lock = MathNetLockSchema.parse(await readJson(resolve(root, p3Paths.mathnetLock)));
const sourceDir = process.env.BW26_MATHNET_V0_DIR
  ? resolve(process.env.BW26_MATHNET_V0_DIR)
  : resolve(root, '.cache/p3/sources/mathnet-v0');

for (const file of lock.files) {
  const path = resolve(sourceDir, file.name);
  await access(path);
  const actual = await sha256(path);
  if (actual !== file.sha256) {
    throw new Error(`${file.name}: SHA-256 mismatch\nexpected ${file.sha256}\nactual   ${actual}`);
  }
  console.log(`verified ${file.name} (${file.rows} census rows, ${actual.slice(0, 12)}...)`);
}

console.log(`MathNet v0 byte identity verified for the pinned ${lock.rows}-row census input.`);
console.log('Row counts and schema are locked census facts; P3B will add the actual Parquet reader.');
