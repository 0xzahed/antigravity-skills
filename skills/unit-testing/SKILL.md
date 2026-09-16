---
name: unit-testing
description: Write effective unit tests. Use when testing functions and
  components in isolation.
metadata:
  tags: unit, testing
---

# Unit Testing

## Use this skill when
- Testing pure functions, services, and components in isolation
- Building a fast, reliable test suite
- Driving design through tests

## Do not use this skill when
- Integration/end-to-end verification (use its own skills)

## Instructions
1. Test one behavior per test with a clear name.
2. Test the public API, not private implementation.
3. Cover boundaries, error paths, and edge values.
4. Prefer real collaborators; fake only slow/unavailable I/O.
5. Assert on outcomes, not implementation calls.
6. Keep tests deterministic: isolate time, randomness, and state.
7. Make failures produce a clear diagnosis message.

## Checklist
- Tests are fast and deterministic
- No testing implementation details
- Edge cases receive tests

## Output Format
- Test matrix | coverage of behaviors | notes on boundaries

## Common Mistakes
- Testing mocks instead of behavior
- Brittle tests coupled to internals
- Ignoring error paths
