---
name: dependency-security
description: Audit and secure third-party dependencies. Use when checking
  package/library risk.
metadata:
  tags: dependency, security
---

# Dependency Security

## Use this skill when
- Scanning for known vulnerabilities in dependencies
- Triaging advisories and choosing remediation
- Keeping the supply chain clean (SBOM, lockfiles, signing)

## Do not use this skill when
- General dependency management (use dependency-management)
- Container/image scanning (use its own skill)

## Instructions
1. Scan with the ecosystem tool (npm audit, pip-audit, etc.) and a broader scanner.
2. Understand exposure before patching: reachable? attacker-controlled?
3. Upgrade to fixed versions; test between steps.
4. Replace abandoned/renamed packages with maintained alternatives.
5. Review lockfiles and SBOMs for unexpected packages.
6. Pin exact versions in production where appropriate.
7. Verify package integrity (signature/hash) where supported.

## Checklist
- Known criticals are patched or risk-accepted with a plan
- Lockfiles committed
- SBOM generated

## Output Format
- Advisory | severity | exposure | fix | test plan

## Common Mistakes
- Patching everything blindly and breaking builds
- Ignoring transitive deps
- No process for recurring scans
