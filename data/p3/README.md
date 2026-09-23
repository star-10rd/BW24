# BW26 P3 curation data

P3 is the research/curation/compiler layer between external olympiad sources and the existing P2 `ProblemDocument` renderer.

## Zones

- `sources/` — immutable-input registry and locks. Raw external payloads are not canonical identity.
- `identity/` — accepted official appearances, exact mathematical versions, and accepted revision relations.
- `curation/` — accepted source links and field-level content/asset selections.
- `research/` — provisional checkpoints and open review work. Production compilation must never infer identity from this directory.
- `generated/` — reproducible reports/indexes only; never the only home of a human decision.

## Acceptance

`verified` means an accepted curation fact suitable for research/development tooling.

`frozen` means an accepted fact eligible for later production compilation. Frozen facts can still be corrected when new evidence appears, but the change must be explicit and reviewable in Git/research records.

## Core rule

Research decides truth. The compiler consumes accepted truth. Historical matching, fuzzy similarity, source labels, and topic guesses never silently become canonical identity.
