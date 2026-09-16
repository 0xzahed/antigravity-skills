---
name: blue-green-deployment
description: Roll out releases with zero downtime using blue-green. Use when you
  need instant rollback and zero-downtime deploys.
metadata:
  tags: blue, green, deployment
---

# Blue-Green Deployment

## Use this skill when
- Deploying with a full parallel environment for rollback
- Zero-downtime releases of the same schema/service
- Canary-free when the app is simple to dual-run

## Do not use this skill when
- Schema migrations break the old version (use expansion pattern)
- You need gradual traffic shifts (use canary-deployment)

## Instructions
1. Maintain two identical environments: blue (live), green (new).
2. Deploy to inactive, verify gates, then switch traffic atomically.
3. Keep rollback as a pointer flip; verify both directions.
4. Handle data compatibility: old/new code sharing a schema.
5. Flip at a level that is safe (LB/router, DB read/write views).
6. Execute periodically to keep the inactive env current.

## Checklist
- Rollback = flip back
- Schema compat validated
- Switch is rehearsed

## Output Format
- Environments | switch mechanism | verification gates | rollback

## Common Mistakes
- Skipping schema compatibility checks
- Manual switches with no runbook
- Two envs that drifted
