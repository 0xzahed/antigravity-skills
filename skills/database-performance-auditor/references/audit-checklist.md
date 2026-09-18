# Database Performance Audit Reference

## Start with evidence
1. Enable/query the slow query log; rank by total time and frequency.
2. Run `EXPLAIN (ANALYZE, BUFFERS)` on the costliest queries.
3. Check connection pool health: active/idle/waiting, checkout timeouts, leaks.
4. Check contention: locks, wait events, blocking sessions.
5. Check bloat and statistics: index bloat, VACUUM/ANALYZE freshness, autovacuum lag.

## What to look for in plans
- Sequential scans on large tables with a filter → missing index.
- Estimated vs actual row counts diverging a lot → stale/incorrect statistics or predicates.
- Nested loop with many loops and repeated lookups → N+1 from the app.
- Sort/hash operations on large sets → missing supporting index or misordered predicates.

## Common quick wins
- Add a covering or composite index matching the query's equality-then-range predicates.
- Reduce rows processed: push filters into SQL, paginate.
- Preload relations (app side) to kill N+1.
- Rewrite `OR`/`IN` heavy predicates to `UNION` or indexed lookup form where the planner benefits.
- Trim data shipped: select only needed columns.

## Capacity signs to flag
- Connection count at/over the pool/Database limit under normal load.
- Disk IO consistently saturated; P99 latency climbing with traffic.
- Memory pressure / buffer cache misses rising.

## Verify
- Re-run the same measurements before and after each change.
- Keep a baseline table: query, P50/P95/P99, rows, bloat, index list.