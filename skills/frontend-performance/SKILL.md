---
name: frontend-performance
description: Optimize frontend performance. Use when improving load time,
  rendering, and runtime performance of web apps.
metadata:
  tags: frontend, performance
---

# Frontend Performance

## Use this skill when
- Improving Core Web Vitals (LCP, INP, CLS)
- Reducing bundle size and network payloads
- Fixing render jank and long tasks
- Setting performance budgets

## Do not use this skill when
- Backend/API performance is the issue (use backend performance skills)

## Instructions
1. Measure first: Lighthouse, web-vitals, DevTools performance panel.
2. Target LCP: preload critical assets, minimize blocking JS.
3. Reduce bundle: code splitting, tree shaking, remove duplicates.
4. Optimize images: modern formats, responsive sizes, lazy loading.
5. Minimize re-renders and layout thrashing.
6. Avoid CLS: reserve space for images/ads, use font-display.
7. Set budgets and alert on regressions in CI.

## Output Format
- Perf baseline | bottleneck list | recommendations with expected impact

## Common Mistakes
- Optimizing without measuring first
- Chasing metrics that do not map to user-perceived speed
- Adding complexity for marginal gains
