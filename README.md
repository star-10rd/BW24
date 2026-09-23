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
