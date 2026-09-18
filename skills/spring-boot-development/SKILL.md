---
name: spring-boot-development
description: Develop REST services with Spring Boot. Use when building or
  reviewing Java/Kotlin Spring apps.
metadata:
  tags: spring, boot, development
---

# Spring Boot Development

## Use this skill when
- Building controllers, services, and repositories
- Managing beans, config, and profiles
- Implementing validation and exception handling
- Writing Spring tests

## Do not use this skill when
- Non-Spring backends

## Instructions
1. Prefer constructor injection over field injection.
2. Keep controllers thin; put business rules in services/domain.
3. Validate inputs with Jakarta Validation annotations and @Valid.
4. Define a global @ControllerAdvice for consistent error bodies.
5. Use records/DTOs for API contracts, map between layers.
6. Scope beans appropriately (singleton vs prototype); avoid stateful singletons.
7. Use @Transactional on services, not controllers; mind their scope.
8. Test services and controllers with @SpringBootTest slices where fast enough.

## Checklist
- Error response is uniform
- Transactions live at the service boundary

## Output Format
- Bean graph | controller/service/repo layout | exception mapping | test scope

## Common Mistakes
- Field injection making tests and wiring opaque
- Leaking entities as API responses
- Oversized @Transactional with slow work inside
