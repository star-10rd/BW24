# Baltic Way historical result snapshots

Purpose: enrich final-contest problem pages with factual historical context about how teams scored **in that particular contest**. These records are not difficulty ratings and must never be used to rank problems or select Daily/Random/Training problems.

## Coverage and provenance

BW26 stores one normalized team × problem matrix for every Baltic Way contest with official results, **1992–2025 (34 years)**. The official Baltic Way archive is the authority. MOResults mirrors that archive and its public `moresults-data` repository provides a useful reproducible raw → parsed → unified data pipeline.

The local matrices in this package were normalized from the official result tables and contain **362 team participations**, matching MOResults' current Baltic Way coverage count. The registry records the corresponding MOResults competition page and expected parsed GitHub path for every year. `mirrorRepositoryRef` and `mirrorSnapshotSha256` remain null until a byte-level checkout/snapshot of the GitHub repository is available for a final provenance pin; this does **not** block use of the verified numerical matrices.

There are intentionally no 1990 or 1991 result files because the official archive states results are available since 1992.

## Canonical BW26 year-file shape

```json
{
  "schema": "bw26-balticway-results",
  "version": 2,
  "year": 2025,
  "source": {
    "authoritativeProvider": "Baltic Way official archive",
    "officialResultsUrl": "...",
    "mirrorProvider": "MOResults",
    "mirrorPageUrl": "...",
    "mirrorRepository": "https://github.com/matholympiadresults/moresults-data",
    "mirrorParsedPath": "data/balticway/parsed/2025/scoreboard.json"
  },
  "maxProblemScore": 5,
  "problemCount": 20,
  "teams": [
    {
      "rank": 1,
      "teamName": "Germany",
      "countryCode": "DE",
      "scores": [5, 5, 2, 5, 0, 2, 5, 5, 0, 5, 3, 0, 5, 5, 5, 1, 5, 5, 5, 5],
      "total": 73
    }
  ]
}
```

`countryCode` is nullable because some historical entrants are teams such as St. Petersburg rather than sovereign states. Tied ranks are valid.

Historical `-` score cells are normalized to **0 points only**. BW26 must not reinterpret that as “did not attempt” or any other behavioral claim.

## Derive, do not duplicate

The raw matrix is the durable record. P3E derives per-problem context when rendering:

- team count;
- mean score (display to one decimal place);
- exact 0/1/2/3/4/5-point distribution;
- 5-point count;
- 4-or-5-point count;
- Estonia's score when present;
- optional collapsed list of all team scores.

Do **not** persist these projections in the year files. Do not initially expose standard deviation, correlations, country-history analytics, or any difficulty label.

## Review-context rule

Solutions, Results, and AoPS should share one P3E visibility decision:

- current Daily: hidden;
- past Daily: available only in deliberate review context;
- Random/Training: hidden before review, available after review;
- direct archive: available but collapsed/visually secondary.

The results registry therefore records data/provenance, while `src/lib/product/review-context.ts` should own spoiler visibility.
