---
name: contract-testing
description: Verify contracts between services and consumers. Use when services
  must evolve independently.
metadata:
  tags: contract, testing
---

# Contract Testing

## Use this skill when
- Pinning request/response contracts between services
- Enabling consumer-driven contract changes
- Catching breaking API changes in CI

## Do not use this skill when
- Sharp full-stack E2E
- Only internal same-team code

## Instructions
1. Define contracts from consumer needs (consumer-driven).
2. Validate providers against published contract stubs.
3. Run contract checks in CI on both sides.
4. Version contracts; communicate breaking changes.
5. Keep examples minimal and realistic.
6. Automate contract publishing and consumption.

## Checklist
- Provider CI validates contracts
- Breaking changes fail CI
- Contracts are versioned

## Output Format
- Contract | provider | consumers | status

## Common Mistakes
- Contracts that drift from reality
- Contract recorded after implementation
- Overly narrow examples
