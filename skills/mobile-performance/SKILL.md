---
name: mobile-performance
description: Optimize mobile app performance. Use when improving startup,
  rendering, and memory.
metadata:
  tags: mobile, performance
---

# Mobile Performance

## Use this skill when
- Optimizing launch time and jank
- Reducing memory and battery use
- Sizing assets and payloads

## Do not use this skill when
- Backend performance
- Web performance (use frontend-performance)

## Instructions
1. Measure startup: cold start timeline with profiling.
2. Avoid main-thread work; profile jank with a frame profiler.
3. Cache and compress assets; lazy-load images.
4. Watch memory: leaks, image caches, binding cleanup.
5. Reduce payloads on the wire.
6. Use background work with OS constraints in mind.
7. Keep a perf budget and test on device profiles.

## Checklist
- Cold start measured
- No main-thread starvation
- Memory stable over usage

## Output Format
- Baseline | bottlenecks | fixes | device matrix

## Common Mistakes
- Optimizing on emulator only
- Ignoring battery drain
- Caching unbounded
