import { resolve } from 'node:path';
import { p3Paths, readJson, readJsonl } from './io';
import type { CanonicalState } from './validation';

export async function loadCanonicalState(root = process.cwd()): Promise<CanonicalState> {
  const at = (path: string) => resolve(root, path);
  return {
    schemaVersion: await readJson(at(p3Paths.schemaVersion)),
    sources: await readJsonl(at(p3Paths.sourceRegistry)),
    mathnetLock: await readJson(at(p3Paths.mathnetLock)),
    finalYearPolicies: await readJson(at(p3Paths.finalYearPolicies)),
    appearances: await readJsonl(at(p3Paths.appearances)),
    versions: await readJsonl(at(p3Paths.versions)),
    versionRelations: await readJsonl(at(p3Paths.versionRelations)),
    sourceLinks: await readJsonl(at(p3Paths.sourceLinks)),
    contentSelections: await readJsonl(at(p3Paths.contentSelections)),
    assetBindings: await readJsonl(at(p3Paths.assetBindings)),
    reviews: await readJsonl(at(p3Paths.reviews)),
  };
}
