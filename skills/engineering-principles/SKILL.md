---
name: engineering-principles
description: Apply DRY, KISS, YAGNI, and separation of concerns. Use when
  reviewing code quality and architecture decisions.
metadata:
  tags: engineering, principles
---

# Engineering Principles

## Use this skill when
- Writing or reviewing code for maintainability
- Deciding whether to abstract, duplicate, or simplify
- Refactoring

## Do not use this skill when
- Designing a large architecture (use software-architecture)
- The decision concerns performance or security

## Instructions
1. Evaluate each abstraction against YAGNI: are you using it now?
2. Prefer a simple, obvious solution over a clever one (KISS).
3. Duplicate when the abstraction costs more than the duplication (DRY).
4. Keep each module focused on one concern (SoC).
5. Flag and explain violations rather than reciting terms.
6. Recommend the minimal change that improves maintainability.

## Output Format
- Decision | Principle | Rationale | Trade-off

## Common Mistakes
- Treating DRY as “no duplication ever”
- Invoking YAGNI to avoid necessary abstraction
- Over-simplifying without considering maintainability
