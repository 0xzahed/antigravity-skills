---
name: performance-analysis
description: Analyze performance from evidence. Use when profiling or
  investigating slowness.
metadata:
  tags: performance, analysis
---

# Performance Analysis

## Use this skill when
- Profiling CPU, memory, and I/O
- Identifying algorithmic or structural bottlenecks
- Setting up measurement before optimization

## Do not use this skill when
- Architecture/capacity design (use its own skills)
- Frontend-only perf (use frontend-performance)

## Instructions
1. Define the target: latency, throughput, memory, SLO.
2. Instrument and measure before changing anything.
3. Profile with the right tool: CPU, heap, flamegraph, traces.
4. Find the dominant cost: algorithm, lock, I/O, allocation.
5. Optimize the hot path; verify with before/after numbers.
6. Mind asymptotics: N-shape data and complexity.
7. Watch out for premature micro-optimizations.

## Checklist
- Baseline measured
- Optimization verified against SLO

## Output Format
- Holder/bottleneck | evidence | change | before/after

## Common Mistakes
- Optimizing without measurement
- Tweaking constants instead of complexity
- Ignoring memory and GC
