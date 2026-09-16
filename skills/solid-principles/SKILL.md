---
name: solid-principles
description: Apply SOLID principles for maintainable object-oriented design. Use
  when reviewing or designing class structure.
metadata:
  tags: solid, principles
---

# SOLID Principles

## Use this skill when
- Designing class abstractions
- Reviewing APIs and inheritance hierarchies
- Refactoring toward loosely coupled modules

## Do not use this skill when
- You are working in functional code without classes
- The abstraction is trivial

## Instructions
1. Apply SRP: one reason to change per unit.
2. Design for extension without modification (OCP).
3. Ensure substitutability for LSP.
4. Split fat interfaces for ISP.
5. Depend on abstractions for DIP (dependency inversion).
6. Identify and flag violations with concrete causes.
7. Provide concrete refactorings for each violation.

## Output Format
- Violation | Principle | Location | Recommendation

## Common Mistakes
- Dogmatically applying principles when a simpler design works
- Confusing DIP with dependency injection
