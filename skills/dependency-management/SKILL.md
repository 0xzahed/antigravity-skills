---
name: dependency-management
description: "Manage software dependencies: adding, auditing, upgrading, and
  staying secure. Use when working with package dependencies."
metadata:
  tags: dependency, management
---

# Dependency Management

## Use this skill when
- Evaluating whether to add a dependency
- Auditing existing dependencies for security and maintenance risk
- Planning upgrades and resolving conflicts

## Do not use this skill when
- Implementing application logic unrelated to dependencies
- You only need package-manager mechanics

## Instructions
1. Assess need, maintenance, license, and security before adding.
2. Keep the dependency graph small and recent.
3. Audit with lockfiles, SBOM, and vulnerability scanners.
4. Upgrade incrementally with tests between steps.
5. Document rationale for each significant dependency.

## Checklist
- Lockfiles are committed
- No dependency is pinned to a range in production without vetting
- Known vulnerabilities are triaged

## Output Format
- Dependency | Version | Why used | License | Security status | Renewal date

## Common Mistakes
- Upgrading everything blindly
- Ignoring license risks
- Adding utility deps that duplicate built-ins
