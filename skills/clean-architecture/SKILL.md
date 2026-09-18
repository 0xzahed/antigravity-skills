---
name: clean-architecture
description: "Structure code with clean architecture: inner business layers
  independent of frameworks. Use when organizing application code by layers."
metadata:
  tags: clean, architecture
---

# Clean Architecture

## Use this skill when
- Organizing application code with stable business rules in the center
- Making the app testable and independent of UI/DB/framework
- Refactoring a codebase with tangled layers

## Do not use this skill when
- The cost of layering outweighs the benefit (small CRUD apps)
- You are doing service boundaries (use service-boundaries)

## Instructions
1. Define entities and use cases as plain, framework-free code.
2. Define repositories/presenters as interfaces in the inner ring.
3. Implement adapters for DB, HTTP, and UI in the outer ring.
4. Enforce the dependency rule: nothing inner may import outer.
5. Use dependency injection at composition edges.
6. Test the business rules without any framework.

## Output Format
- Layer | Responsibilities | Dependencies

## Common Mistakes
- Round-tripping boilerplate with no real decoupling
- Putting framework annotations deep inside entities
- Treating clean architecture as a microservice requirement
