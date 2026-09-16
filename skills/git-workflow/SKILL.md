---
name: git-workflow
description: Use Git workflows effectively. Use when planning branching,
  history, and collaboration.
metadata:
  tags: git
---

# Git Workflow

## Use this skill when
- Designing branching and merging workflows
- Keeping history clean and reviewable
- Resolving cross-team collaboration patterns

## Do not use this skill when
- Single-command Git lookups
- Specific merge-conflict surgery (use its own skill)

## Instructions
1. Choose a model: trunk-based or GitFlow; apply consistently.
2. Keep branches short-lived with small PRs.
3. Use conventional commits for automated release notes.
4. Keep main always deployable.
5. Enforce history rules (squash vs merge) in policy, not habit.
6. Rebase feature branches onto the latest main before review.
7. Document rework policy (force-push rules).

## Checklist
- Small reviewable changes
- Main stays green
- Commit messages follow convention

## Output Format
- Workflow | branch model | history rules | conventions

## Common Mistakes
- Long-lived divergent branches
- Random history with no convention
- Force-pushing shared branches
