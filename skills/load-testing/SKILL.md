---
name: load-testing
description: Load and stress test systems. Use when verifying capacity and
  reliability under traffic.
metadata:
  tags: load, testing
---

# Load Testing

## Use this skill when
- Establishing baseline capacity and breakpoints
- Testing peak, burst, and steady-state load
- Finding bottlenecks (CPU, DB, memory, queue)

## Do not use this skill when
- Functional correctness testing
- Light traffic sanity checks only

## Instructions
1. Define realistic workload profiles from production traffic.
2. Run soak, spike, and capacity scenarios independently.
3. Use a dedicated environment; never the live prod DB.
4. Observe the whole stack: app, DB, cache, queues, network.
5. Identify the bottleneck under each profile (who exceeds SLO first).
6. Set and verify SLO targets (latency percentiles, error rate).
7. Re-run after every perf-related change; keep a baseline.

## Checklist
- Workload mimics production
- SLOs measured, not assumed
- Environment isolated

## Output Format
- Scenario | peak | SLOs | bottleneck | capacity estimate

## Common Mistakes
- Testing pre-production hardware only
- Ignoring caches warming effects
- Bottleneck analysis that stops at “CPU high”
