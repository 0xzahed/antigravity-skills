# Performance Audit Reference

## Method
1. Define the observed symptom and the target SLO (P95 latency, throughput, error budget).
2. Measure before touching anything:
   - Network/CDN timing (RUM, server timing).
   - App layer: request traces, profiles (CPU, heap), middleware timing.
   - Data layer: slow-query log, plan analysis, connection pool.
3. Locate where time actually goes with a distributed trace.
4. Form a bottleneck hypothesis; verify with a targeted experiment.
5. Apply the minimal fix; re-measure. Rinse; keep a change log.

## Layering cheat-sheet
| Layer | What to measure | Typical bottleneck |
| --- | --- | --- |
| CDN/network | TTFB, payload size, cache hit rate | large assets, no caching |
| App server | CPU profile, event loop, GC | sync work in async path, N+1 |
| Data | query latency, lock waits, IOPS | missing index, contention |
| Queues | lag, consume rate | burst, small worker pool |
| External | upstream latency | no timeout/backoff |

## Golden signals (always in the report)
- Latency (P50/P95/P99)
- Throughput (RPS)
- Error rate
- Saturation (CPU, memory, IO, queue depth)

## Before/after discipline
- Record a baseline for every metric before each change.
- Assert the improvement against the SLO, not "feels faster".
- Roll back changes that fail the measurement.

## Anti-patterns
- Optimizing by intuition without measurement.
- Tuning constants while ignoring complexity (N vs N²).
- Reporting median only and hiding the P99.