---
name: distributed-locking
description: Implement distributed locks safely. Use when coordinating access
  across processes or instances.
metadata:
  tags: distributed, locking
---

# Distributed Locking

## Use this skill when
- Guarding a resource across multiple instances
- Implementing leader election and job fencing
- Choosing Redis/ZooKeeper/DB-based locks

## Do not use this skill when
- Single-node apps (an in-process lock is enough)
- Where eventual semantics suffice

## Instructions
1. Prefer idempotent design over locking where possible.
2. If you must lock, use TTL-based leases with renewal.
3. Include fencing tokens so stale lock holders cannot act.
4. Handle lock expiry: fail safe, never assume the lock is held.
5. Choose the store by correctness needs (DB for strong, Redis for speed).
6. Make lock acquisition idempotent and reentrant-aware.
7. Detect and alert on lock contention and abandoned locks.

## Checklist
- Locks have TTL + fencing
- No unbounded lock hold times

## Output Format
- Resource | lock strategy | store | fencing token | contention signals

## Common Mistakes
- Locks without expiry (permanent deadlock)
- Relying on lock TTL as the safety net
- Holding locks across slow external calls
