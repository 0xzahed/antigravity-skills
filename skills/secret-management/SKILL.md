---
name: secret-management
description: Keep secrets out of code and logs. Use when auditing credential handling.
metadata:
  tags: secret, management
---

# Secret Management

## Use this skill when
- Finding secrets in code, config, and history
- Moving secrets to a vault or environment secret store
- Rotating and revoking exposed credentials

## Do not use this skill when
- Building auth flows
- Infrastructure secrets provisioning at scale (use its own skill)

## Instructions
1. Scan the codebase and git history for API keys, tokens, and passwords.
2. Rotate any credential that touched a repo, log, or chat.
3. Move runtime secrets to a secret store or injected env vars.
4. Never hard-code defaults, test keys, or private keys in repos.
5. Set secret scanning in CI and pre-commit.
6. Audit logs and observability dashboards for secret leakage.
7. Scope secrets: per-environment, least privilege, with rotation.

## Checklist
- No secrets in the repo/history
- CI secret scanning enabled
- Exposed credentials rotated

## Output Format
- Secret | exposure | rotation status | storage location

## Common Mistakes
- “It’s just a dev key” in prod-adjacent code
- Forgetting git history when removing secrets
- Secrets in container images or env dumps
