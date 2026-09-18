---
name: devops-engineer
description: Design and operate deployment pipelines and infrastructure
  workflows. Use for platform-level engineering.
metadata:
  tags: devops, engineer
---

# DevOps Engineering

## Use this skill when
- Designing build/test/deploy pipelines
- Setting up environments and IaC
- Improving release velocity and reliability
- Debugging deployment issues

## Do not use this skill when
- Writing application code features
- Pure config for a single tool (use the tool-specific skill)

## Instructions
1. Model environments: dev/staging/prod with parity.
2. Make every deploy repeatable via pipelines and IaC, not snowflakes.
3. Add fast feedback: lint, tests, build, security gate in CI.
4. Use feature flags for safe rollouts where needed.
5. Apply least privilege to pipeline credentials.
6. Define rollbacks as first-class (revert, image pin, toggle).
7. Monitor the pipeline itself: failure rates and durations.
8. Author runbooks for the human ops paths.

## Checklist
- Deployments are reproducible
- Rollback path tested
- Pipeline has health metrics

## Output Format
- Pipeline map | env parity | gates | runbooks | rollback plan

## Common Mistakes
- Manual prod deploys
- Prod drift from IaC
- No rollback rehearsal
