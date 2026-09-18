---
name: api-testing
description: Test APIs end-to-end. Use when verifying contracts, behavior, and
  resilience at the API level.
metadata:
  tags: api, testing
---

# API Testing

## Use this skill when
- Writing contract and integration tests for endpoints
- Testing authentication, validation, and error paths
- Automating against a running API

## Do not use this skill when
- UI testing
- Pure unit testing of internal logic (use its own skill)

## Instructions
1. Test at the HTTP boundary: status codes, headers, error bodies.
2. Cover success, validation failures, auth failures, and 404/405.
3. Keep tests independent with isolated test data.
4. Run against a real server/runtime, not mocked handlers alone.
5. Use schema validation in assertions against the contract.
6. Seed minimal fixtures, not the whole database.
7. Track coverage of the endpoint/error matrix.

## Output Format
- Endpoint matrix | test inventory | fixture strategy

## Common Mistakes
- Testing only the happy path
- Coupling tests to implementation details
- Mocking the entire app you are testing
