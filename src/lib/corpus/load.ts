import { loadCanonicalState } from '../../../scripts/corpus/state';
import { validateCanonicalState } from '../../../scripts/corpus/validation';
import type {
  AppearanceRecord,
  AssetBindingRecord,
  ClassificationRecord,
  ContentSelectionRecord,
  PublicShortlistRecord,
  TopicTaxonomy,
  VersionRecord,
} from '../../../scripts/corpus/schema';

export type PublicCanonicalState = {
  appearances: AppearanceRecord[];
  versions: VersionRecord[];
  publicShortlistOnly: PublicShortlistRecord[];
  contentSelections: ContentSelectionRecord[];
  assetBindings: AssetBindingRecord[];
  classifications: ClassificationRecord[];
  taxonomy: TopicTaxonomy;
};

let cached: Promise<PublicCanonicalState> | null = null;

export function loadPublicCanonicalState(root = process.cwd()): Promise<PublicCanonicalState> {
  if (root !== process.cwd()) return loadAt(root);
  cached ??= loadAt(root);
  return cached;
}

async function loadAt(root: string): Promise<PublicCanonicalState> {
  const state = await loadCanonicalState(root);
  await validateCanonicalState(state, {
    repoRoot: root,
    checkCuratedFiles: true,
    enforceFinalPolicyCompleteness: true,
    enforcePublicCorpusCompleteness: true,
  });
  return {
    appearances: state.appearances as AppearanceRecord[],
    versions: state.versions as VersionRecord[],
    publicShortlistOnly: state.publicShortlistOnly as PublicShortlistRecord[],
    contentSelections: state.contentSelections as ContentSelectionRecord[],
    assetBindings: state.assetBindings as AssetBindingRecord[],
    classifications: state.classifications as ClassificationRecord[],
    taxonomy: state.taxonomy as TopicTaxonomy,
  };
}
