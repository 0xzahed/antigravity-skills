---
name: database-transactions
description: Handle database transactions correctly. Use when designing
  multi-step writes in a database.
metadata:
  tags: database, transactions
---

# Database Transactions

## Use this skill when
- Writing multi-statement transactions
- Choosing isolation levels
- Handling concurrency conflicts and retries
- Designing sagas for distributed writes

## Do not use this skill when
- Single-statement writes
- Schema design (use its own skill)

## Instructions
1. Keep transactions short; do slow I/O outside.
2. Choose isolation level for the conflict tolerance (READ COMMITTED vs SERIALIZABLE).
3. Guard against lost updates: version/row locks with retry on conflict.
4. Use optimistic concurrency where conflicts are rare.
5. Never hold transactions across network calls.
6. For cross-service writes, use saga patterns with compensating steps.
7. Set explicit timeouts and handle deadlock retries.

## Checklist
- No external calls inside transactions
- Conflicts have a retry strategy
- Isolation level justified by data

## Output Format
- Operation | isolation level | conflict handling | compensation plan

## Common Mistakes
- Serializable everywhere = performance death
- Holding transactions open across HTTP calls
- Ignoring lost-update scenarios
