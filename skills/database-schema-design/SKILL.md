---
name: database-schema-design
description: Design database schemas. Use when modeling data storage for a new
  feature or system.
metadata:
  tags: database, schema
---

# Database Schema Design

## Use this skill when
- Modeling tables, relationships, and constraints
- Choosing keys and indexes
- Designing for growth and migration

## Do not use this skill when
- Writing SQL migrations for existing schemas (use its own skill)
- Non-SQL modeling

## Instructions
1. Model relationships with clear FK constraints; justify denormalization explicitly.
2. Use surrogate vs natural keys deliberately; mind UUID import costs.
3. Add NOT NULL, defaults, and CHECK constraints at the schema level.
4. Index on query paths: join keys, filter columns, covering indexes.
5. Normalize to avoid update anomalies; denormalize for hot reads only.
6. Consider collation, charset, and timezone storage (store UTC).
7. Plan every column for evolution: types, nullability, defaults.
8. Design schema changes as additive migrations where possible.

## Checklist
- Every query path has an index
- Constraints enforced in DB, not only app
- Storage types sized for real usage

## Output Format
- Table | columns | constraints | indexes | relationships | rationale

## Common Mistakes
- Storing money as float
- Indexing everything or nothing
- No FKs “for performance”
- Dates stored without timezone
