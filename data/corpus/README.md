# BW26 corpus

This directory is the durable offline corpus layer between external olympiad sources and the P2 `ProblemDocument` renderer.

- `sources/`: source registry, immutable locks, and compact reproducible source indexes.
- `identity/`: frozen official final appearances and mathematical Versions.
- `curation/`: accepted same-Version source links and later public content selections.
- `research/`: official final targets, reconciliation evidence, related-version findings, shortlist handoff, and review records.
- `generated/`: disposable/reproducible outputs only.

The public website must never compile directly from `research/` or infer canonical identity from fuzzy matches. Final-corpus reconciliation freezes 719 official fixed mathematical final appearances for 1990-2025 and reconciles them globally against all 853 rows of the pinned MathNet-v0 snapshot.

## P3C candidate-selection layer

Schema v3 adds a recoverable pre-contest candidate layer (`BW-CAND`). It preserves 719 final appearances unchanged while recording 543 documented candidate appearances across 13 recovered candidate sets. Historical coverage is explicitly incomplete: 253 candidate selection outcomes remain unresolved and are not projected into the public shortlist-only set. The strict public projection currently contains 67 candidates with frozen not-selected evidence.

Candidate identity lives under `identity/candidate-sets.jsonl`, `candidate-selection.jsonl`, `candidate-year-coverage.json`, and `public-shortlist-only.jsonl`. The website must not infer additional public shortlist problems from research rows or from absence of a final match.

<!-- BW26-P3D -->
## P3D publication layer

Schema v5 preserves the P3C identity model while completing the P3D publication-state contract. Every one of the 786 public Versions has a resolved statement and solution state. Selected publication content points only to local curated files; historically unrecovered content is represented explicitly as `unavailable` with source evidence rather than guessed or left unresolved. The website must not read remote sources or `research/` paths at runtime. Publication completeness means every public content state is resolved, not that every historical statement or solution source was recoverable.
