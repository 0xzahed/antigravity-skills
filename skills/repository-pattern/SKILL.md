---
name: repository-pattern
description: Abstract data access behind the repository pattern. Use when
  isolating persistence from domain logic.
metadata:
  tags: repository
---

# Repository Pattern

## Use this skill when
- Abstracting data access for domain logic
- Centralizing queries and making persistence swappable
- Making domain code testable with fake data stores

## Do not use this skill when
- Simple apps where an ORM query directly is fine
- There is no domain layer to protect

## Instructions
1. Define repository interfaces in domain terms (findByOrderId, not queryWhere).
2. Return domain models, not row/ORM types.
3. Keep queries inside repositories, not services.
4. Use composition for complex queries.
5. Provide a fake/in-memory implementation for tests.
6. Respect aggregate boundaries: one repository per aggregate.

## Output Format
- Repository | Methods | Returns | Used by

## Common Mistakes
- Leaking ORM entities through the interface
- Repositories that expose every query as a method
- Adding the pattern without a domain layer
