---
name: database-replication
description: Design and operate read replicas and replication. Use when scaling
  reads or adding redundancy.
metadata:
  tags: database, replication
---

# Database Replication

## Use this skill when
- Adding read replicas for scale
- Understanding lag and consistency implications
- Promoting/falling back replicas
- Multi-region replication

## Do not use this skill when
- Single-node apps
- Application-level caching decisions (use backend-caching)

## Instructions
1. Route reads that tolerate lag to replicas; keep writes and strict reads on primary.
2. Measure replication lag and alert on it.
3. Handle read-after-write consistency explicitly for user actions.
4. Plan replica promotion and failover with testable runbooks.
5. Consider logical vs physical replication trade-offs (rowsets, conflicts).
6. Document the consistency model consumers can rely on.

## Checklist
- Lag is monitored with thresholds
- Failover runbook is tested
- Read-where-it-matters goes to primary

## Output Format
- Topology | lag budget | routing rules | failover plan

## Common Mistakes
- Reading critical user state from replicas blindly
- Ignoring lag until staleness bugs surface
- Untested failover
