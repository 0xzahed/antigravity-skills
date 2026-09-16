---
name: api-versioning
description: Version APIs safely. Use when evolving an API that has consumers.
metadata:
  tags: api, versioning
---

# API Versioning

## Use this skill when
- Choosing a versioning strategy (URI, header, content)
- Deprecating old versions
- Migrating consumers

## Do not use this skill when
- Private internal-only endpoints
- Greenfield pre-release APIs

## Instructions
1. Prefer additive and backward-compatible changes first.
2. Choose versioning: URI for visibility, header/accept for precision, never query param.
3. Version breaking changes explicitly and document them.
4. Deprecate with warnings (headers, docs) and a sunset date.
5. Keep older versions alive long enough for consumers to migrate.
6. Support unknown fields tolerance to soften evolution.
7. Track which versions are in production use.

## Checklist
- Deprecation policy is documented
- No undocumented breaking changes

## Output Format
- Version | change log | deprecation date | consumer migration status

## Common Mistakes
- Breaking changes silently shipped
- Unversioned breaking change at a shared type
- Multiplied maintenance of never-used versions
