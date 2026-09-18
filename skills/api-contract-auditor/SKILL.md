---
name: api-contract-auditor
description: Audit API contracts for correctness and consistency. Use when
  reviewing endpoint specs and implementations.
metadata:
  tags: api, contract, auditor
---

# API Contract Auditing

## Use this skill when
- Reviewing OpenAPI specs vs implementation
- Checking status/error/pagination/versioning consistency
- Detecting breaking changes

## Do not use this skill when
- Designing new APIs (use api-contracts)
- Code review of non-API logic

## Instructions
1. Load the spec; compare each endpoint to the implementation.
2. Check naming, schemas, status codes, and error shapes.
3. Verify pagination/filter/sort conventions hold everywhere.
4. Check versioning and deprecation markers.
5. Look for undocumented behavior and leaks (IDs, internals).
6. Flag breaking changes with consumers in mind.
7. Provide per-endpoint findings with spec fixes.

## Checklist
- Spec matches implementation
- Error handling uniform
- No undocumented endpoints

## Output Format
- Endpoint | issue | severity | spec fix | implementation fix

## Common Mistakes
- Auditing the spec in a vacuum
- Missing implementation-vs-spec drift
- Ignoring consumer impact

## References
- `references/http-status-contract.md` – Uniform error body, status-code contract, and conventions to check against
