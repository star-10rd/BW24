# MathNet v0 source input

P3A pins the exact two MathNet Baltic Way v0 Parquet shards by filename, census row count, schema, and SHA-256.

The raw Parquet files are **not** committed by P3A. Put exact copies at:

```text
.cache/p3/sources/mathnet-v0/
  train-00000-of-00002.parquet
  train-00001-of-00002.parquet
```

or point `BW26_MATHNET_V0_DIR` at a directory containing those filenames.

Run `npm run p3:source:verify` before research/import operations. Normal site validation does not require the external Parquet files.
