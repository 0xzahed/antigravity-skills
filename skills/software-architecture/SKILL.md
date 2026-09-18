---
name: software-architecture
description: Design the overall architecture of a software system. Use when
  planning structure, boundaries, and key technical decisions.
metadata:
  tags: software, architecture
---

# Software Architecture

## Use this skill when
- Designing a new system or major subsystem
- Making technology or structure decisions that are hard to reverse
- Establishing quality attributes: performance, security, availability
- Reviewing whether the architecture matches the product roadmap

## Do not use this skill when
- Implementing a feature in an existing architecture (use the relevant domain skill)
- The architecture is already decided and documented

## Instructions
1. Clarify business goals, users, volumes, and constraints.
2. Define quality attributes with measurable targets.
3. Decompose the system into cohesive components with owned data.
4. Define interactions, contracts, and failure handling.
5. Choose technologies only after the design, with rationale.
6. Document the decision, trade-offs, and alternatives in an ADR.

## Checklist
- Quality attributes are measurable
- Component boundaries own their data
- Every choice has documented rationale

## Output Format
- Component diagram, data flow, decision log (ADR), risks

## Common Mistakes
- Choosing technologies before understanding requirements
- Over-engineering for scale that will not happen
- Skipping documentation
