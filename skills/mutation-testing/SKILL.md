---
name: mutation-testing
description: Use mutation testing to expose weak tests. Use when improving test
  strength beyond coverage.
metadata:
  tags: mutation, testing
---

# Mutation Testing

## Use this skill when
- Measuring how well tests detect faults
- Finding untested logic paths
- Prioritizing test gaps

## Do not use this skill when
- When tests are nonexistent (write tests first)
- Every single run (expensive)

## Instructions
1. Run a mutation tool (Stryker, PIT) on a meaningful module scope.
2. Inspect survived mutations: they reveal missing assertions.
3. Add tests that kill each meaningful survivor.
4. Green mutations (behavior preserved) may indicate dead code.
5. Set a mutation score goal for critical modules.
6. Keep runs time-boxed and in CI for hot scope only.

## Checklist
- Survivors are triaged
- Critical modules have a score target

## Output Format
- Mutation | status | test gap | fix

## Common Mistakes
- Chasing 100% that adds meaningless tests
- Interpreting survives as always a test gap
- Replacing coverage with mutation blindness
