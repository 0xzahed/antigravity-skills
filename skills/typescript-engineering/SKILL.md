---
name: typescript-engineering
description: Use TypeScript effectively for safety and maintainability. Use when
  writing or reviewing typed code.
metadata:
  tags: typescript, engineering
---

# TypeScript Engineering

## Use this skill when
- Modeling data with types and interfaces
- Writing robust generics and discriminated unions
- Configuring strict TS and project references
- Reviewing type safety in a codebase

## Do not use this skill when
- Plain JavaScript codebases
- Only fixing a runtime bug with no typing angle

## Instructions
1. Enable strict mode; treat `any` as a defect to be removed.
2. Model domain data with discriminated unions and branded types.
3. Prefer `unknown` over `any` at boundaries and narrow defensively.
4. Use generics to preserve type relationships, not to over-abstract.
5. Avoid `as` casts; prefer validation/narrowing.
6. Keep types near the data they describe; share via packages or barrels.
7. Type external boundaries (API responses, env vars) and validate at runtime.

## Checklist
- No bare `any` in new code
- API and env boundaries are runtime-validated

## Output Format
- Type model | hot spots | strictness gaps | recommendations

## Common Mistakes
- `any` to “move fast” and paying for it later
- Casts that lie about runtime data
- Over-generic helper types nobody understands
