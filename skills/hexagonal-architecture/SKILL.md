---
name: hexagonal-architecture
description: Design applications with ports and adapters. Use when the domain
  must be independent of external systems.
metadata:
  tags: hexagonal, architecture
---

# Hexagonal Architecture

## Use this skill when
- Isolating the domain from databases, services, and UI
- Swapping external systems without touching business logic
- Making the domain testable with fake ports

## Do not use this skill when
- The application is a thin CRUD layer
- External systems are permanent and stable

## Instructions
1. Model the domain core without external imports.
2. Define ports (interfaces) for what the core needs: repositories, notifiers, time.
3. Implement adapters for each port (Postgres, HTTP, SQS, etc.).
4. Inject adapters at the composition root.
5. Test the core with in-memory adapters.
6. Keep protocol details (HTTP, SQL) out of the domain.

## Output Format
- Port | Required operations | Production adapter | Test adapter

## Common Mistakes
- Defining ports with no swappable adapters in practice
- Letting framework types leak through ports
- Over-abstracting single-implementation systems
