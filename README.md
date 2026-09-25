# BW26

Baltic Way team training website.

## Requirements

- Node.js 22.12+ on a supported even-numbered release (the project currently targets Node 22)
- npm

## Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run check
npm run content:check
npm run build
# or all quality gates:
npm run verify
```

`npm run build` writes the static site to `dist/`.

## Structure

- `src/pages/` — static routes
- `src/components/` — reusable interface and problem presentation
- `src/lib/problems/` — safe Markdown/math rendering primitives
- `src/lib/corpus/` — typed application adapter over the frozen P3C/P3D corpus
- `src/lib/product/` — publication policy, public catalogues, Daily, results, references, and page models
- `src/fixtures/` — legacy renderer fixtures kept only for renderer/QA development; normal routes do not use them
- `src/i18n/` — English and Estonian UI/taxonomy display text
- `src/styles/` — design tokens, shell, mathematics, archive, Daily, QA, and problem styling
- `scripts/product/` — P3E publication, policy, Daily, enrichment, and asset verification
- `public/problem-assets/generated/` — generated, gitignored public projection of referenced canonical assets

<!-- BW26-CORPUS -->
## Corpus reconciliation layer

The offline corpus layer lives under `data/corpus/` with tooling under `scripts/corpus/`. It freezes 719 official fixed Baltic Way final appearances (1990-2025), 719 final mathematical Versions, and a reviewed global reconciliation against all 853 rows of the pinned MathNet-v0 snapshot.

```bash
npm run corpus:validate
npm run corpus:format
npm run corpus:report
npm run corpus:report -- --year 2021
```

The pinned MathNet Parquet shards remain external research inputs. Put the exact files in `.cache/corpus/sources/mathnet-v0/` (or set `BW26_MATHNET_V0_DIR`) and verify that they reproduce the tracked compact indexes with:

```bash
npm run corpus:source:verify
```

Canonical identity and accepted same-Version source links live under `data/corpus/identity/` and `data/corpus/curation/`. Research reconciliation evidence stays under `data/corpus/research/` and is never compiled directly into public problem pages. Public statement, solution, and image selection remains a later curation step.
<!-- BW26-P3C -->
## P3C candidate-selection corpus

Corpus schema v3 adds a recoverable Baltic Way pre-contest candidate layer without changing the frozen 719-final corpus. The installed identity graph contains 543 documented candidate appearances across 13 recovered candidate sets. It records 223 selected candidates, 67 candidates with frozen not-selected evidence, and 253 historically unresolved selection outcomes. The strict public shortlist-only projection contains only the 67 frozen not-selected candidates; absence of a final match is never treated by itself as proof of non-selection. Historical completeness is explicitly not claimed.

```bash
npm run corpus:validate
npm run corpus:report
npm run corpus:source:verify
```

P3D remains responsible for selecting public statements, solutions, topics, and assets.

<!-- BW26-P3D -->
## P3D publication curation

Schema v5 keeps the P3C identity graph unchanged and closes the P3D publication-state model. All 786 public Versions now have resolved statement and solution states: 769 statements are locally selected and 17 historically unrecovered shortlist statements are explicitly unavailable with evidence; 739 Versions have verified local solution material and 47 historically unrecovered solution states are explicitly unavailable with evidence. No public statement or solution remains unresolved. All required selected-content assets are local, and primary-domain plus controlled subtopic classifications remain complete for all 786 public Versions. P3D publication completeness is therefore claimed in the resolved-state sense: completeness never means inventing content that the historical source record does not supply.

<!-- BW26-P3E1 -->
## P3E-1 public product foundation

P3E-1 projects the frozen corpus into the current student-facing website without changing corpus identity. The initial website publishes 379 final contest problems (1990–1998, 2010, 2017–2025) plus 50 readable shortlist-only exercises. The remaining 340 finals stay canonical but are absent from normal routes and modes.

The product layer also includes a deterministic Tallinn-time Daily calendar (2017–2025 pool, one A/C/G/N problem per day), 36/36 AoPS year-collection references, and historical team-score matrices for all 34 result years 1992–2025. Fine subtopics, solutions, contest results, and external references belong to the Review context rather than the default solve surface.

Useful checks:

```bash
npm run publication:check
npm run product:validate
npm run product:report
npm run daily:check
npm run daily:status
npm run product:assets
npm run product:assets:check
npm run verify
```

`npm run verify` is deterministic and does not expire as calendar time passes. `npm run daily:status` is the operational schedule-horizon check. Set `BW26_QA=1` for the local-only `/_qa/` catalogue.
<!-- /BW26-P3E1 -->
