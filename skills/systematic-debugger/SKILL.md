---
name: systematic-debugger
description: Debug issues systematically. Use when investigating a bug from
  symptoms to root cause.
metadata:
  tags: systematic, debugger
---

# Systematic Debugging

## Use this skill when
- Investigating hard-to-reproduce bugs
- Finding root causes from symptoms and logs
- Confirming fixes actually resolve the cause

## Do not use this skill when
- Simple obvious one-liner fixes
- Performance tuning (use performance skills)

## Instructions
1. Get precise facts: reproduce, gather logs, isolate the trigger.
2. State hypotheses; test the cheapest discriminating experiment.
3. Bisect: narrow the change, request, or data that triggers it.
4. Check the boundary: input data, environment, state, time.
5. Look at the actual code path, not the assumed one.
6. Confirm root cause with a targeted observation before fixing.
7. Write a regression test that fails on the bug.
8. Verify the fix and clean up scaffolding experiments.

## Checklist
- Root cause proven, not guessed
- Regression test added
- Related failure modes considered

## Output Format
- Repro | hypotheses | evidence | root cause | fix | regression test

## Common Mistakes
- Fixing symptoms with workarounds
- Guessing without running anything
- No regression test for the cause
