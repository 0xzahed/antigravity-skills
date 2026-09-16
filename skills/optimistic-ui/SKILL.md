---
name: optimistic-ui
description: Implement optimistic UI updates safely. Use when you want instant
  feedback for actions.
metadata:
  tags: optimistic, ui
---

# Optimistic UI

## Use this skill when
- Updating the UI before the server responds
- Supporting quick toggles, likes, and reordering
- Building collaborative edits with rollback

## Do not use this skill when
- The action is destructive with irreversible side effects
- The success of the action cannot be rolled back

## Instructions
1. Apply the optimistic value locally, then issue the request.
2. On success, reconcile with the canonical server response.
3. On failure, roll back and surface a clear error with retry.
4. Use a stable temporary ID so the optimistic node can be found.
5. Keep optimistic logic small and testable.
6. Handle concurrent updates from multiple sources.

## Output Format
- Optimistic paths | rollback strategy | failure UX

## Common Mistakes
- Applying optimistic updates to destructive actions
- Failing to roll back on errors
- Conflicting optimistic and server data
