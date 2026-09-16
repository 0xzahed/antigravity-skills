---
name: nextjs-performance
description: Optimize Next.js performance. Use when improving load, caching, and
  runtime in Next apps.
metadata:
  tags: nextjs, performance
---

# Next.js Performance

## Use this skill when
- Improving LCP and CLS
- Configuring caching and revalidation
- Right-sizing client JavaScript

## Do not use this skill when
- Generic web perf (use frontend-performance)
- Backend perf

## Instructions
1. Measure with Lighthouse and Vercel/Next analytics.
2. Leverage static generation + ISR where data allows.
3. Stream and suspense-split heavy sections.
4. Move code to the server (server components) to cut JS.
5. Configure image optimization for LCP images.
6. Minimize client bundle: dynamic import, hmr-only exports.

## Checklist
- Server components used where possible
- Images optimized
- Budgets set

## Output Format
- Baseline | bottlenecks | caching strategy | bundle audit

## Common Mistakes
- Client-heavy pages with server available
- Revalidating everything continuously
- Unoptimized LCP images
