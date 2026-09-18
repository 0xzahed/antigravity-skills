---
name: backend-error-handling
description: Design consistent backend error handling. Use when shaping error
  responses and error propagation.
metadata:
  tags: backend, error, handling
---

# Backend Error Handling

## Use this skill when
- Defining a uniform error response contract
- Mapping exceptions to HTTP responses
- Logging errors with context while keeping responses safe

## Do not use this skill when
- General exception design patterns (use error-handling-patterns)
- Frontend error UX

## Instructions
1. Define a global error contract: code, message, detail, traceId.
2. Centralize error-to-response mapping (error middleware/advice/filters).
3. Log stack traces server-side; never return them or internals to clients.
4. Use consistent status codes: 400 validation, 401/403 auth, 404, 409 conflict, 422 state.
5. Attach a request trace ID to every error response and log.
6. Handle async/background errors explicitly.
7. Fail fast at boundaries; don’t swallow unknown errors.

## Checklist
- Clients can parse every error
- No secrets/internal paths in responses
- Every error has a trace ID

## Output Format
- Error contract | code table | mapping | tracing

## Common Mistakes
- Returning raw stack traces
- Inconsistent error shapes between endpoints
- Swallowing errors and returning 200
