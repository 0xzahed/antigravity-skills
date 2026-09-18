---
name: fastapi-development
description: Build high-quality APIs with FastAPI. Use when developing or
  reviewing FastAPI projects.
metadata:
  tags: fastapi, development
---

# FastAPI Development

## Use this skill when
- Designing endpoints with Pydantic models
- Structuring routers and dependencies
- Handling auth, background tasks, and async
- Writing OpenAPI docs and tests

## Do not use this skill when
- Non-Python backends
- Advanced FastAPI patterns already covered by fastapi-pro

## Instructions
1. Define Pydantic schemas for request/response and reuse for validation.
2. Organize routers per resource; declare shared dependencies cleanly.
3. Use FastAPI dependency injection for auth, DB sessions, and config.
4. Keep handlers thin: validate → call service → return schema.
5. Prefer async endpoints for I/O-heavy work; avoid blocking calls in async paths.
6. Let FastAPI generate OpenAPI; refine with examples and response models.
7. Raise HTTPException or custom handlers for error contracts.

## Checklist
- Response models are explicit (not bare dicts)
- DB sessions and auth are DI-managed

## Output Format
- Schema/model map | router layout | dependency graph | error contract

## Common Mistakes
- Returning ORM objects directly to the client
- Blocking the event loop with sync I/O
- Skipping response models and losing docs
