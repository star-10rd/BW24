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
npm run build
# or both:
npm run verify
```

`npm run build` writes the static site to `dist/`.

## Structure

- `src/pages/` — routes
- `src/layouts/` — page/document layouts
- `src/components/` — reusable interface components
- `src/i18n/` — English and Estonian UI text
- `src/styles/` — shared design tokens and shell styling
- `public/` — files copied directly into the static build
