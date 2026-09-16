---
name: acceptance-criteria
description: Write and refine acceptance criteria for user stories. Use when
  turning stories into testable conditions.
metadata:
  tags: acceptance, criteria
---

# Acceptance Criteria

## Use this skill when
- Converting user stories into Given/When/Then criteria
- Verifying criteria cover happy path, edge cases, and failures
- Driving test creation and feature acceptance

## Do not use this skill when
- Requirements are not yet defined (use requirements-analysis)
- You need implementation guidance

## Instructions
1. Identify the actor, the action, and the expected outcome.
2. Write acceptance criteria using Given/When/Then syntax.
3. Cover the happy path, validation failures, authorization, and edge cases.
4. Include at least one negative and one error-path criterion.
5. Keep each criterion atomic and objectively pass/fail.
6. Output a table mapping scenario to Given/When/Then and pass criteria.

## Checklist
- Every criterion is independently testable
- Each story has at least one error-path criterion
- Criteria avoid implementation details

## Output Format
- Scenario | Given | When | Then | Pass criteria

## Common Mistakes
- Criteria that cannot be tested
- Mixing multiple behaviors into one criterion
- Describing implementation instead of behavior
