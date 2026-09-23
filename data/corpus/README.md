# BW26 corpus

This directory is the durable offline corpus layer between external olympiad sources and the P2 `ProblemDocument` renderer.

- `sources/`: source registry, immutable locks, and compact reproducible source indexes.
- `identity/`: frozen official final appearances and mathematical Versions.
- `curation/`: accepted same-Version source links and later public content selections.
- `research/`: official final targets, reconciliation evidence, related-version findings, shortlist handoff, and review records.
- `generated/`: disposable/reproducible outputs only.

The public website must never compile directly from `research/` or infer canonical identity from fuzzy matches. Final-corpus reconciliation freezes 719 official fixed mathematical final appearances for 1990-2025 and reconciles them globally against all 853 rows of the pinned MathNet-v0 snapshot.
