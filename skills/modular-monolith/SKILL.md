---
name: modular-monolith
description: Design and refactor toward a modular monolith. Use when you need
  order without microservice complexity.
metadata:
  tags: modular, monolith
---

# Modular Monolith

## Use this skill when
- Modularizing a monolith for maintainability
- Evaluating whether a modular monolith suits the scale
- Preparing a codebase for a future split into services

## Do not use this skill when
- The organization urgently needs independent scaling (use microservices)
- Changes are small enough that modules add overhead

## Instructions
1. Define modules by domain capability with a single owner.
2. Give each module a public API and hide internals.
3. Enforce boundaries in code: no cross-module imports except via the API.
4. Keep shared code in sanctioned shared modules.
5. Push boundaries into the database schema (no shared tables).
6. Set up module-level tests and ownership.

## Output Format
- Module | Responsibilities | Public API | Owned data | Dependencies

## Common Mistakes
- Modules that just reorganize folders without boundaries
- Skipping enforcement and relying on discipline
- Premature extraction into microservices
