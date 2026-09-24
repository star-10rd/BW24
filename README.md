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
- `src/lib/problems/` — canonical display model and safe Markdown/math rendering
- `src/fixtures/` — P2 renderer fixtures; replaced by generated canonical corpus data later
- `src/i18n/` — English and Estonian UI text
- `src/styles/` — design tokens, shell, mathematics, and problem styling
- `scripts/` — build-time validation utilities
- `public/` — files copied directly into the static build

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

Schema v4 keeps the P3C identity graph unchanged and adds a first-class public classification registry plus locally curated publication content. The P3D publication layer now selects 769 of the 786 public statements, resolves every required local statement-figure dependency, selects reviewed local solution material for 564 public Versions, and freezes primary-domain plus controlled subtopic classifications for all 786 public Versions. Publication completeness is intentionally not claimed: the remaining 17 statement-source gaps and 222 unresolved solution states are frozen under `data/corpus/research/p3d/` rather than filled speculatively.

## v3 packaging fix

This revision canonicalizes classifications.jsonl to the repository formatter byte order before packaging; corpus content/counts are unchanged from v2.
