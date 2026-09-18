---
name: react-development
description: "Build React applications with modern patterns: hooks, composition,
  and performance. Use when developing or reviewing React code."
metadata:
  tags: react, development
---

# React Development

## Use this skill when
- Building or extending React applications
- Writing hooks-based component logic
- Reviewing React component architecture and performance
- Choosing between data-fetching and state libraries

## Do not use this skill when
- Working on Vue, Angular, Svelte, or non-React projects
- You only need a framework-migration plan

## Instructions
1. Default to functional components with hooks; avoid class components for new code.
2. Compose small, focused components instead of large god components.
3. Keep derived state in useMemo/useSelector, not in state.
4. Fetch server data with a caching client (React Query/SWR), not raw effects.
5. Split lazy-loaded routes and heavy components.
6. Memoize selectively: React.memo, useCallback, useMemo only where they help.
7. Render lists with stable keys and virtualization for long lists.
8. Follow React 18+ idioms: createRoot, transitions, automatic batching.

## Output Format
- Component inventory | data flow | performance notes | refactor recommendations

## Common Mistakes
- Large components that mix data, UI, and effects
- Overusing useEffect for derived state
- Premature memoization everywhere
