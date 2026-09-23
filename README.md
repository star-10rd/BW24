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

<!-- BW26-P3A -->
## P3 curation foundation

P3 is the offline research/curation/compiler layer that will eventually replace the P2 fixtures with the canonical Baltic Way corpus. P3A establishes the data contracts and validation boundary; it does not yet compile public problem pages.

```bash
npm run p3:validate
npm run p3:format
npm run p3:report
```

The pinned MathNet Parquet inputs are external research inputs rather than runtime website dependencies. Put exact files in `.cache/p3/sources/mathnet-v0/` (or set `BW26_MATHNET_V0_DIR`) and verify them with:

```bash
npm run p3:source:verify
```

Canonical accepted data lives under `data/p3/identity/` and `data/p3/curation/`. Provisional checkpoints and unresolved work stay under `data/p3/research/` and never silently become public identity.
