import { resolve } from 'node:path';
import { corpusPaths, readJson, readJsonl } from './io';
import type { CanonicalState } from './validation';

export async function loadCanonicalState(root = process.cwd()): Promise<CanonicalState> {
  const at = (path: string) => resolve(root, path);
  return {
    schemaVersion: await readJson(at(corpusPaths.schemaVersion)),
    sources: await readJsonl(at(corpusPaths.sourceRegistry)),
    mathnetLock: await readJson(at(corpusPaths.mathnetLock)),
    finalYearPolicies: await readJson(at(corpusPaths.finalYearPolicies)),
    candidateSets: await readJsonl(at(corpusPaths.candidateSets)),
    candidateYearCoverage: await readJson(at(corpusPaths.candidateYearCoverage)),
    candidateSelection: await readJsonl(at(corpusPaths.candidateSelection)),
    publicShortlistOnly: await readJsonl(at(corpusPaths.publicShortlistOnly)),
    appearances: await readJsonl(at(corpusPaths.appearances)),
    versions: await readJsonl(at(corpusPaths.versions)),
    versionRelations: await readJsonl(at(corpusPaths.versionRelations)),
    sourceLinks: await readJsonl(at(corpusPaths.sourceLinks)),
    contentSelections: await readJsonl(at(corpusPaths.contentSelections)),
    assetBindings: await readJsonl(at(corpusPaths.assetBindings)),
    taxonomy: await readJson(at(corpusPaths.taxonomy)),
    classifications: await readJsonl(at(corpusPaths.classifications)),
    reviews: await readJsonl(at(corpusPaths.reviews)),
  };
}
