---
name: database-indexing
description: Design indexes for real workloads. Use when adding or reviewing indexes.
metadata:
  tags: database, indexing
---

# Database Indexing

## Use this skill when
- Choosing where indexes help
- Designing composite indexes from queries
- Reviewing index usage and bloat

## Do not use this skill when
- Tuning a single slow query (use query-optimization)
- Defining schema from scratch

## Instructions
1. Index from query workload evidence, not guesses.
2. Match composite index order to query predicates (equality, then range).
3. Use covering indexes for high-frequency reads.
4. Beware write amplification on frequently written tables.
5. Monitor index usage; drop unused and duplicate indexes.
6. Partial/functional indexes for filtered and expression queries.
7. Rebuild or reindex tactically; don’t bloat maintenance.

## Checklist
- Indexes map to real query patterns
- No redundant indexes on the same columns

## Output Format
- Query | index candidate | order | trade-off

## Common Mistakes
- Index on every column
- Leading columns with low selectivity
- Ignoring update cost
