---
name: microservices
description: Design and manage microservices architectures. Use when splitting a
  system into independently deployable services.
metadata:
  tags: microservices
---

# Microservices

## Use this skill when
- Splitting a system into independently deployable services
- Defining service communication: sync, async, events
- Handling distributed data, transactions, and consistency

## Do not use this skill when
- A monolith or modular monolith is sufficient
- You need code-level implementation (use backend skills)

## Instructions
1. Define services by business capability with data ownership.
2. Choose communication: REST, gRPC, or events, based on coupling needs.
3. Treat services as ADTs: hide internals behind contracts.
4. Handle distributed transactions with saga patterns.
5. Plan testing, observability, and deployments per service.
6. Define versioning and compatibility policies.
7. Document the service map and ownership.

## Output Format
- Service map, contracts, data ownership, saga flows, evolution plan

## Common Mistakes
- Creating a distributed monolith where services share a database
- Using microservices for a small team or small scale
- Ignoring network failure handling
