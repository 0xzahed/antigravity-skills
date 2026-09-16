---
name: cqrs
description: Split reads and writes into separate models using CQRS. Use when
  read and write patterns diverge sharply.
metadata:
  tags: cqrs
---

# CQRS

## Use this skill when
- Separating read and write models when they diverge
- Scaling reads independently with read models
- Simplifying writes by removing read building from the write path
- Using event sourcing with projections

## Do not use this skill when
- Reads are the same shape as writes
- The added complexity is not justified

## Instructions
1. Model commands as intent, with validation and idempotency.
2. Model queries as purpose-built read models.
3. Choose storage per side: relational for commands, materialized for reads.
4. Synchronize read models via events or projections.
5. Handle consistency: define acceptable lag for reads.
6. Keep command handling transactional and auditable.

## Output Format
- Command | Write model | Query | Read model | Sync mechanism

## Common Mistakes
- Adding CQRS where one model works fine
- Forgetting the read side can lag or fail
- Making commands leak read requirements
