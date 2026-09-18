---
name: supply-chain-security
description: Secure the software supply chain. Use when assessing build,
  artifact, and release integrity.
metadata:
  tags: supply, chain, security
---

# Supply Chain Security

## Use this skill when
- Securing CI/CD pipelines from tampering
- Signing artifacts and verifying dependencies
- Provenance and SBOM requirements

## Do not use this skill when
- Runtime app security
- Dependency vulnerability scanning alone (use dependency-security)

## Instructions
1. Lock dependencies (lockfiles, digests) and pin tool versions.
2. Require signed commits/artifacts with verified provenance.
3. Protect CI: least-privilege tokens, no secret shell access, pinned runners.
4. Generate and publish SBOMs for artifacts.
5. Enforce review and approval gates on privileged pipelines.
6. Scan for typosquat and permission-abuse packages.
7. Have an incident path for compromised dependencies.

## Checklist
- Artifacts signed
- SBOMs produced
- CI least-privilege

## Output Format
- Asset | integrity control | gaps | remediation

## Common Mistakes
- Trusting unpinned CI dependencies
- No signing anywhere
- SBOMs only in name
