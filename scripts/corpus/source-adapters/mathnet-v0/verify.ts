import { mkdtemp, readdir, rm, readFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { assertBw26RepoRoot } from '../../io';

async function run(cmd: string, args: string[], env: NodeJS.ProcessEnv = {}) {
  await new Promise<void>((ok, bad) => {
    const p = spawn(cmd, args, { stdio: 'inherit', env: { ...process.env, ...env } });
    p.on('error', bad);
    p.on('exit', (code) => code === 0 ? ok() : bad(new Error(`${cmd} exited ${code}`)));
  });
}
async function sha(path: string) { return createHash('sha256').update(await readFile(path)).digest('hex'); }
function stable(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value as Record<string, unknown>).sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => [k, stable(v)]));
  return value;
}

const root = process.cwd();
await assertBw26RepoRoot(root);
const sourceDir = process.env.BW26_MATHNET_V0_DIR ? resolve(process.env.BW26_MATHNET_V0_DIR) : resolve(root, '.cache/corpus/sources/mathnet-v0');
const files = await readdir(sourceDir);
const expected = [
  'a4bbb1becd33c028272ae39eed33913f7142dfcd540b864620dcbba36e15763f',
  'affe4a1ceeb931d4fe8c968f8023f222c8933c732f2631a578c6af3c85b3e4da',
];
const shards: string[] = [];
for (const digest of expected) {
  let found = '';
  for (const file of files) {
    const path = resolve(sourceDir, file);
    try { if (await sha(path) === digest) { found = path; break; } } catch {}
  }
  if (!found) throw new Error(`Pinned MathNet shard ${digest.slice(0, 12)}... not found in ${sourceDir}`);
  shards.push(found);
}

const temp = await mkdtemp(resolve(tmpdir(), 'bw26-mathnet-'));
try {
  await run('python3', [resolve(root, 'scripts/corpus/source-adapters/mathnet-v0/build_mathnet_m1.py'), '--shard0', shards[0], '--shard1', shards[1], '--out', temp]);
  for (const name of ['items.jsonl', 'image-index.jsonl', 'solution-index.jsonl', 'inventory-summary.json']) {
    const actual = await sha(resolve(temp, 'm1', name));
    const tracked = await sha(resolve(root, 'data/corpus/sources/mathnet-v0', name));
    if (actual !== tracked) throw new Error(`${name}: regenerated index hash differs from tracked corpus index`);
  }
  const generatedLock = stable(JSON.parse(await readFile(resolve(temp, 'm1/lock.json'), 'utf8')));
  const trackedLock = stable(JSON.parse(await readFile(resolve(root, 'data/corpus/sources/mathnet-v0/lock.json'), 'utf8')));
  if (JSON.stringify(generatedLock) !== JSON.stringify(trackedLock)) throw new Error('lock.json: regenerated source lock differs semantically from tracked lock');
  console.log('MathNet-v0 source verification passed: pinned Parquets reproduce all tracked compact indexes and source lock.');
} finally {
  await rm(temp, { recursive: true, force: true });
}
