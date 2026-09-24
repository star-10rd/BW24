# BW26 P3D canonical-content specification v1

Base: `1b6c9f8a6f14939f08e733b8c319ddf9b3ab2172` (`candidate corpus`).

This specification is the implementation contract for the next large P3D repository deliveries. P3C remains the identity authority; P3D only chooses and curates content attached to already-frozen mathematical Versions.

## 1. Public target universe

Publication scope is derived, never manually enumerated in product code:

- every `BW` final Version: 719;
- every Version named by `identity/public-shortlist-only.jsonl`: 67;
- total public Versions: 786.

The 253 selection-unresolved candidate-only Versions and 26 revised candidate Versions remain research/history data and are outside required public-content completeness.

## 2. Separation of canonical layers

- **Identity layer:** appearances, Versions, candidate selection, revision relations. Frozen by P3C.
- **Source layer:** official PDFs/pages, MathNet, AI-MO, secondary historical sources. Evidence only.
- **Curation layer:** selected publication statements, solutions, assets and classification.
- **Presentation layer:** “Final” / “Shortlist” labels, pages, filters and rendering. It must not invent new identity semantics.

`BW-SL` must not return as a canonical series. “Shortlist” is a presentation of the strict P3C public projection.

## 3. Statement canonicalization

A public Version has exactly one selected English statement.

Final publication selections use local curated Markdown copied from the frozen P3B/P3C official transcription. The frozen text is the semantic baseline. Mechanical normalization is allowed for whitespace, Markdown, LaTeX and logical asset keys. Any wording edit capable of changing mathematical meaning requires explicit review evidence.

Shortlist-only MathNet statements are eligible only where P3C froze a same-Version source link with exact/equivalent fidelity. The 17 2015/2017 secondary geometry statements require local materialization before publication; no automated paraphrase substitutes for the source statement.

All final website selections should be `curated-file`, not runtime reads from research files, Parquet shards, source caches or remote URLs.

## 4. Statement assets

Markdown refers to logical keys such as `figure:1`. A selected statement with such a key is publishable only when an `asset-binding` resolves it to a local curated asset.

P3D-1 has a finite statement-asset queue: 17 logical asset occurrences across 16 public Versions. Official final figure evidence exists for the 15 final figure occurrences; two shortlist statements have one logical figure each after source-key normalization. Required-for-meaning final figures are hard gates.

A binding must record Version, owner=`statement`, source key, local curated path, provenance, alt text, presentation mode and acceptance. Low-quality upstream rasters may be replaced by faithful redraws, but the redraw provenance must cite the original figure.

## 5. Solution canonicalization

A public Version has an independent solution state:

- `verified`: one or more reviewed selected solutions;
- `unresolved`: source/review work remains;
- `unavailable`: a positive reviewed conclusion that no publishable solution is available under project policy.

P3D-1 may freeze statements while keeping solutions unresolved. P3D-2 targets one reviewed primary solution per public Version where defensibly obtainable.

For finals, official Baltic Way solution material is the authority. MathNet and AI-MO are transcription/cross-check sources. Raw solution existence never implies verification. Review covers correctness, completeness, exact Version compatibility, notation, adaptations and image dependencies.

For the 67 public shortlist-only Versions, 50 currently have local MathNet solution candidates; the 17 secondary geometry items have no known local/authoritative solution source in this freeze and remain genuine targeted research cases.

## 6. Production self-containment

Normal `npm run verify`, Astro builds and deployed pages must not require:

- `data/corpus/research/**` content at runtime;
- downloaded Parquet shards;
- MathNet raw caches;
- network requests to source sites.

Those sources remain reproducibility/provenance inputs. Selected content is copied/adapted into `data/corpus/curation/curated/**` and linked by canonical curation records.

## 7. Classification and proposed schema v4

P3D-1 can remain schema v3 because the existing content-selection and asset-binding shapes are sufficient for statements.

For P3D-2, a schema-v4 migration is justified if classification becomes first-class. Preferred shape:

- `data/corpus/curation/taxonomy.json`: controlled domain/subtopic registry;
- `data/corpus/curation/classifications.jsonl`: one classification per public Version with `versionId`, primary domain (`A/C/G/N`), controlled subtopics, acceptance and evidence;
- deprecate free-form `ContentSelectionRecord.topics` for canonical classification rather than filling it with arbitrary upstream strings.

Raw MathNet topic strings are never accepted wholesale as the public taxonomy. For public Versions whose P3C appearances already carry a canonical domain, P3D classification must match it. For the 50 MathNet-backed shortlist-only public Versions where P3C intentionally has no appearance domain, P3D freezes only the primary A/C/G/N publication domain from the leading MathNet topic family, records that derivation explicitly, and does not mutate P3C identity.

## 8. P3D-1 installer contract

One substantial installer from the exact clean P3C commit should install:

- reviewed curated statements for the public target set;
- content selections pointing only to local curated statement files;
- all statement-owned assets/bindings needed for those statements;
- P3D research/audit ledgers and completeness reporting;
- validator rules that derive the 786 public target set from identity data.

Clean target: 786/786 selected statements, zero dangling statement files, zero dangling logical asset keys, zero research/runtime content dependencies.

The current freeze has 769 local statement candidates and 17 exact materialization gaps, so those 17 are the only statement-source work blocking the clean 786/786 P3D-1 target.

## 9. P3D-2 installer contract

The second substantial installer should install:

- reviewed primary solutions and justified alternatives;
- solution-owned assets/bindings;
- statement asset refinements if necessary;
- controlled taxonomy + 786 classifications;
- content completeness/audit reports;
- schema v4 only if the first-class classification shape above is adopted.

The 591 local MathNet solution files are a triage queue, not a payload to publish blindly. Structural preflight currently finds 92 files with image dependencies and 8 files shorter than 120 bytes; these receive priority review. There are no cross-Version duplicate solution hashes in the local candidate set.

## 10. Mandatory transactional gates

Both installers should follow the successful P3C discipline:

1. exact base commit and clean worktree;
2. embedded payload/manifests verified before mutation;
3. independent graph/content count gate before mutation;
4. TypeScript syntax gate;
5. mutate only allowed paths;
6. corpus format/validate/report;
7. content-specific completeness/provenance/asset gates;
8. source reproduction checks where applicable;
9. full `npm run verify` / Astro build;
10. `git diff --check`;
11. allowed-path and final-manifest audit;
12. automatic rollback to the exact clean base after any post-mutation failure;
13. success leaves one coherent uncommitted diff for inspection.
