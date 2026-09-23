# Curated P3 content

This directory holds accepted replacement/additional content when a raw source field is missing, corrupt, incomplete, or deliberately adapted.

Use stable public-slug-based paths so filenames are portable across operating systems:

```text
statements/bw-2019-16.md
solutions/bw-2019-16/solution-1.md
assets/bw-2019-16/<descriptive-file>.<ext>
```

Do not use internal IDs containing `:` as filenames. Every curated artifact must be selected by `content-selections.jsonl` or `asset-bindings.jsonl` and carry evidence through its `CuratedFileRef`.
