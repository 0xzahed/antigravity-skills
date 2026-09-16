---
name: merge-conflict-resolution
description: Resolve merge conflicts safely. Use when a merge or rebase produces conflicts.
metadata:
  tags: merge, conflict, resolution
---

# Merge Conflict Resolution

## Use this skill when
- Resolving conflicts surgically
- Reconciling divergent intent
- Avoiding destructive resolutions

## Do not use this skill when
- Throwing away the other side’s work
- Blame/large merges you cannot review

## Instructions
1. Understand both sides before editing the conflict.
2. Resolve intent, not just text (keep both behaviors when needed).
3. Use meld/diff tooling; build for the new combined state.
4. Test after resolving; do not commit blind.
5. For rebase, re-run the tests after each step.
6. If the conflict is huge, reconsider the branch strategy.

## Checklist
- Both sides understood
- Build+tests pass after resolution

## Output Format
- Conflict map | resolutions | verification

## Common Mistakes
- Picking one side wholesale
- Force-resolving with theirs/ours blindly
- Merging giant branches in one shot
