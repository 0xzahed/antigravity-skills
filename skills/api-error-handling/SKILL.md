---
name: api-error-handling
description: Design API error responses. Use when defining and implementing API errors.
metadata:
  tags: api, error, handling
---

# API Error Handling

## Use this skill when
- Defining a standard error contract
- Returning precise error codes and messages
- Adding error context without leaking internals

## Do not use this skill when
- Internal error logging (use backend-error-handling)

## Instructions
1. Return a structured error body: code, message, details/fields, traceId.
2. Include a stable, machine-readable error code per failure kind.
3. Provide field-level validation errors; mention constraints in the message.
4. Use 4xx for client errors and 5xx for server errors; never 200 for failures.
5. Correlate errors with request tracing.
6. Do not leak stack traces, SQL, or internal paths.
7. Document the error taxonomy in the API spec.

## Output Format
- Error schema | code taxonomy | per-endpoint error matrix

## Common Mistakes
- 200 with an error payload
- Free-text messages only
- Exposing stack traces to clients
