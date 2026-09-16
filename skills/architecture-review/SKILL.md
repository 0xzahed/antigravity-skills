---
name: architecture-review
description: Review an existing architecture for risks and improvements. Use
  when evaluating a design or codebase at a structural level.
metadata:
  tags: architecture, review
---

# Architecture Review

## Use this skill when
- Evaluating the health of an existing architecture
- Identifying structural risks: coupling, god objects, boundary leaks
- Checking the architecture matches current and planned scale

## Do not use this skill when
- Reviewing a single PR (use senior-code-reviewer)
- Designing something new (use software-architecture)

## Instructions
1. Map the current architecture: components, dependencies, data flow.
2. Compare against the documented architecture and look for drift.
3. Identify risky coupling, boundary violations, and god components.
4. Check scalability, availability, and security posture.
5. Assess testability and deployability.
6. Recommend incremental, prioritized improvements.
7. Produce a review report with severity and rationale per finding.

## Checklist
- READ ONLY unless the user asks for changes
- Findings include file/location, impact, and recommendation

## Output Format
- Finding | Component | Impact | Severity | Recommendation

## Common Mistakes
- Proposing a rewrite as the default answer
- Reviewing without reading the code and docs
- Ignoring operational constraints
