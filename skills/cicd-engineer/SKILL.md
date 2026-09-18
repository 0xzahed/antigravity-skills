---
name: cicd-engineer
description: Design and maintain CI/CD pipelines. Use when building
  build/test/deploy automation.
metadata:
  tags: cicd, engineer
---

# CI/CD Engineering

## Use this skill when
- Designing pipelines for build, test, and deploy
- Adding quality and security gates
- Speeding up and stabilizing CI
- Managing pipeline configuration

## Do not use this skill when
- Tool-specific automation (use github-actions-engineering, gitlab-ci-engineering)
- General DevOps infra (use devops-engineer)

## Instructions
1. Design stages: build → unit → integration → env deploy → verify.
2. Fail fast: cheap checks (lint, type-check) before expensive ones.
3. Cache dependencies and build artifacts smartly.
4. Make pipelines hermetic and reproducible from git state.
5. Use parallel jobs with deterministic results.
6. Add gates: tests, coverage trends, security scans, dependency checks.
7. Manage secrets via the platform secret store, never inline.
8. Track pipeline duration and flakiness; fix the slow/frequent offenders.

## Checklist
- Pipeline passes deterministically
- Secrets in secret store
- Flaky steps are tracked

## Output Format
- Pipeline design | stages | gates | cache/parallelism | secret map

## Common Mistakes
- Giant monolith jobs
- Unstable test order poisoning CI
- Inline secrets in config
