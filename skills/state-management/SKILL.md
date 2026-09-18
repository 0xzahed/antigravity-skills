---
name: state-management
description: Choose and apply frontend state management. Use when deciding how
  to manage client vs server state.
metadata:
  tags: state, management
---

# State Management

## Use this skill when
- Choosing between local, global, server, and URL state
- Refactoring messy state logic
- Integrating a state library into an existing app

## Do not use this skill when
- State is trivial (useState suffices)
- The current approach is working well

## Instructions
1. Classify state: server cache, client/UI, forms, URL.
2. Treat server data as a cache (React Query/SWR) — never sync it manually.
3. Keep global state minimal and shared only where needed.
4. Use URL state for shareable/filterable views.
5. Model complex transitions as reducers or state machines.
6. Normalize nested data before storing.
7. Choose the library that matches the app scale, not the hype.

## Output Format
- State inventory | ownership map | recommended library | migration steps

## Common Mistakes
- Putting all server data into a global store
- Storing derived state instead of computing it
- Multiple sources of truth for the same data
