---
name: domain-driven-design
description: "Apply DDD: ubiquitous language, tactical patterns, and bounded
  contexts. Use when modeling complex business logic."
metadata:
  tags: domain, driven
---

# Domain-Driven Design

## Use this skill when
- Modeling a complex business domain accurately
- Building a shared ubiquitous language with stakeholders
- Designing aggregates, value objects, and domain events
- Splitting large systems into bounded contexts

## Do not use this skill when
- The domain is simple CRUD
- The business model is not stable

## Instructions
1. Learn the domain by working with experts, not just requirements.
2. Establish the ubiquitous language and use it in code.
3. Identify entities, value objects, and aggregates.
4. Define repositories only for aggregates.
5. Root complex flows in domain events.
6. Map bounded contexts and their integration.
7. Keep infrastructure out of the domain model.

## Output Format
- Context map, aggregate model, language glossary, event list

## Common Mistakes
- Modeling database tables as entities
- Over-modeling with speculative abstractions
- Skipping the ubiquitous language
