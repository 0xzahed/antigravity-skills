---
name: release-management
description: Manage software releases. Use when planning and cutting releases.
metadata:
  tags: release, management
---

# Release Management

## Use this skill when
- Planning release trains and versioning
- Curating changelogs and breaking-change notices
- Coordination cadence and rollback

## Do not use this skill when
- Automated versioning details (use its own skills)
- Deployment mechanics (use deployment skills)

## Instructions
1. Adopt semantic versioning and automated version derivation.
2. Classify changes: breaking, feature, fix; enforce changelog entries.
3. Enforce release gates (tests, security, docs) per release candidate.
4. Link releases to date, owner, and rollback policy.
5. Publish artifacts with hashes and provenance.
6. Track cross-service compatibility in a release matrix.
7. Rehearse the release and rollback in staging.

## Checklist
- Changelog complete
- Artifacts reproducible
- Rollback known in advance

## Output Format
- Release plan | versioning | changelog | gates | rollback

## Common Mistakes
- “Fix all” unmapped to versions
- Breaking changes without notices
- No rehearsal until prod
