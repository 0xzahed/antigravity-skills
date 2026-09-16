---
name: distributed-systems
description: Design and reason about distributed systems. Use when dealing with
  multiple nodes, consistency, and failure handling.
metadata:
  tags: distributed, systems
---

# Distributed Systems

## Use this skill when
- Reasoning about consistency, partitioning, and availability trade-offs
- Handling failures across network boundaries
- Designing idempotency, retries, and timeouts
- Implementing distributed data, locks, and coordination

## Do not use this skill when
- A single process/database is sufficient
- You need framework-specific implementation

## Instructions
1. State the consistency model each component requires.
2. Design for failures: retries, timeouts, circuit breakers, backoff.
3. Make every operation idempotent or deduplicated.
4. Choose coordination: distributed locks, leases, leader election.
5. Handle clock/ordering issues explicitly.
6. Plan observability across nodes.
7. Document partitions, network faults, and their handling.

## Output Format
- Operation | Consistency | Failure handling | Idempotency mechanism

## Common Mistakes
- Assuming the network is reliable
- Believing “exactly once” is default
- Ignoring clock skew and time ordering
