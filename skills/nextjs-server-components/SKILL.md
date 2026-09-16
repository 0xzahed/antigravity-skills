---
name: nextjs-server-components
description: Design Server vs Client Components in Next.js. Use when deciding
  where to render and fetch.
metadata:
  tags: nextjs, server, components
---

# Next.js Server Components

## Use this skill when
- Deciding Server vs Client for a component
- Fetching data in Server Components
- Streaming with Suspense boundaries

## Do not use this skill when
- Non-Next.js code
- Full App Router design (use nextjs-development)

## Instructions
1. Default to Server Components for data and static content.
2. Use Client Components only for interactivity and browser APIs.
3. Pass serializable props; avoid injecting functions where possible.
4. Nest interactive islands inside server-rendered shells.
5. Stream slow sections with Suspense and skeleton loaders.
6. Keep bundle small: server code never ships to the client.

## Checklist
- Only interactive/cached components are “use client”
- Server data flows downward

## Output Format
- Component classification | data fetch map | streaming plan

## Common Mistakes
- “use client” everywhere
- Fetching in client when server suffices
- Mixing non-serializable props
