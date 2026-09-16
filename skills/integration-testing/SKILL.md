---
name: integration-testing
description: Write integration tests across components. Use when verifying that
  modules work together.
metadata:
  tags: integration, testing
---

# Integration Testing

## Use this skill when
- Testing DB + app + external clients together
- Verifying contracts between layers
- Catching wiring, config, and transaction bugs

## Do not use this skill when
- Isolated unit behavior
- End-to-end UI flows (use e2e skills)

## Instructions
1. Use a real database (test schema), not full-mock layers.
2. Control external systems with test doubles or containers.
3. Reset state between tests deterministically.
4. Test the seams where config, auth, and data flow meet.
5. Include failure injection: timeouts, 500s, partial data.
6. Keep the suite worth its runtime; slice by speed.
7. Mirror production config as closely as practical.

## Checklist
- Real DB in the loop (or closest credible)
- Deterministic test isolation
- External failures tested

## Output Format
- Integration scope | seams tested | failure scenarios | runtime budge

## Common Mistakes
- Entirely mocked integration tests
- Shared state leaking between tests
- A suite so slow nobody runs it
