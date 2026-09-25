# BW26 product data

`data/corpus/` remains the canonical record of problem identity, publication content, taxonomy, and curated assets.

`data/product/` contains website/editorial projection and external enrichment. Product files must never rewrite canonical corpus facts.

## Files

- `problem-policy.json` - explicit website/mode publication policy. Website exclusions dominate mode eligibility.
- `daily-schedule.json` - deterministic, append-only Daily cycles. Epoch: 2026-09-25. Timezone: Europe/Tallinn.
- `references/aops-years.json` - year-level AoPS collections only. It records what reference exists, not when UI may expose it.
- `results/` - normalized official historical result matrices. Derived per-problem statistics are not persisted.

## Disclosure is code, not registry data

Solutions, fine subtopics, results and AoPS form Review context. Current Daily suppresses Review in the normal UI regardless of navigation path. Registry files record existence/provenance; `src/lib/product` decides exposure.

## Publication baseline

- website finals: 379 (1990-1998, 2010, 2017-2025)
- inactive canonical finals: 340
- readable shortlist-only exercises: 50
- Daily: 180 finals, 2017-2025, A45/C45/G45/N45
