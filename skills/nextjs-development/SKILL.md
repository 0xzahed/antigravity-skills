---
name: nextjs-development
description: Build applications with the Next.js App Router. Use when
  developing, reviewing, or migrating Next.js apps.
metadata:
  tags: nextjs, development
---

# Next.js Development

## Use this skill when
- Building new pages and features with the App Router
- Deciding between Server and Client Components
- Implementing Server Actions, route handlers, and middleware
- Optimizing caching, revalidation, and metadata

## Do not use this skill when
- Building a pure SPA with no server requirement (use react-development)
- Working on the deprecated Pages Router exclusively

## Instructions
1. Default to Server Components; use Client Components only for interactivity.
2. Fetch data in Server Components; pass props downward.
3. Use Server Actions for mutations with progressive enhancement.
4. Leverage the built-in fetch cache + revalidate for data freshness.
5. Add metadata APIs (generateMetadata) for SEO and social.
6. Use loading.tsx / error.tsx / not-found.tsx boundaries per route segment.
7. Keep middleware fast and edge-compatible.
8. Set the runtime (node/edge) explicitly per route where relevant.

## Checklist
- Every page has an error boundary
- Sensitive logic is never in Client Components

## Output Format
- Route map | Server vs Client split | data flow | cache strategy

## Common Mistakes
- Making everything a Client Component
- Fetching in Client Components when the server could do it
- Forgetting metadata and error boundaries
