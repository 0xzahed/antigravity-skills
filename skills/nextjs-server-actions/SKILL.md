---
name: nextjs-server-actions
description: Implement mutations with Server Actions. Use when handling form
  submissions and data changes.
metadata:
  tags: nextjs, server, actions
---

# Next.js Server Actions

## Use this skill when
- Handling form submissions and mutations
- Enabling progressive enhancement
- Revalidating cache after changes

## Do not use this skill when
- Heavy processing that belongs in a dedicated worker
- Client streams that need WebSockets

## Instructions
1. Author actions in Server Components or “use server” files.
2. Validate input server-side; never trust the client.
3. Revalidate the affected cache paths after mutations.
4. Handle pending states and error states in the UI.
5. Guard actions with authorization at the server.
6. Use optimistic updates with careful rollback.

## Checklist
- Server-side validation present
- Auth checks inside actions
- Cache revalidation wired

## Output Format
- Action map | validation | revalidation | authz

## Common Mistakes
- Validating only client-side
- Actions mutating without revalidate
- Missing authz inside actions
