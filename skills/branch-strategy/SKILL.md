---
name: branch-strategy
description: Define and follow branch strategies for teams. Use when structuring
  branch naming, lifecycle, and protection.
metadata:
  tags: branch, strategy
---

# Branch Strategy

## Use this skill when
- Setting protected branches and rules
- Naming conventions for branches
- Managing release and hotfix branches

## Do not use this skill when
- Individual commit hygiene (use commit-quality)
- Git mechanics

## Instructions
1. Protect main: require reviews, green checks, no direct pushes.
2. Name branches by purpose: feature/xxx, fix/xxx, release/xx.
3. Keep releases traceable: tags and release branches defined.
4. Set CI on every PR branch.
5. Define merge rules: squash for feature, merge for release.
6. Clean up merged branches regularly.

## Checklist
- Main protected
- Branch naming consistent
- Release flow defined

## Output Format
- Branch model | naming | protection rules | merge policy

## Common Mistakes
- No protection on main
- Branch names without purpose
- Releases not tagged
