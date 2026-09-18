---
name: query-optimization
description: Optimize database queries. Use when analyzing or fixing slow queries.
metadata:
  tags: query, optimization
---

# Query Optimization

## Use this skill when
- Finding slow SQL via EXPLAIN analysis
- Fixing N+1 and full scans
- Tuning indexes
- Restructuring queries to reduce rows

## Do not use this skill when
- Schema design (use its own skill)
- Server/connection tuning (use its own skill)

## Instructions
1. Always measure and EXPLAIN before changing anything.
2. Read plans: seek vs scan, estimated vs actual rows, loops.
3. Remove N+1 via joins, batching, or preloading.
4. Index by predicate selectivity, not column order guesses.
5. Avoid functions on columns that defeat indexes.
6. Reduce data shipped: select needed columns, paginate.
7. Watch for parameter sniffing and stale statistics.
8. Re-test performance after the change; keep a before/after plan.

## Output Format
- Query | bottleneck | plan fix | before/after metrics

## Common Mistakes
- Adding indexes blindly
- Optimizing queries no user touches
- Ignoring planner statistics
