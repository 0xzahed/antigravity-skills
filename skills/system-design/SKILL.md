---
name: system-design
description: Design end-to-end systems for real projects and interviews. Use
  when asked to architect a system from a prompt.
metadata:
  tags: system
---

# System Design

## Use this skill when
- Designing a large system from a functional prompt
- Sizing capacity and identifying scaling bottlenecks
- Walking through data flow, storage, and availability

## Do not use this skill when
- Implementing in a specific existing codebase
- The design is already frozen (use a domain skill instead)

## Instructions
1. Clarify requirements: functional, non-functional, scale, availability.
2. Estimate traffic: QPS, storage, bandwidth with explicit math.
3. Draft the high-level architecture and data flow.
4. Design the data model and storage choice.
5. Identify bottlenecks and failure modes.
6. Address scaling: cache, queues, replicas, sharding.
7. Summarize trade-offs and open decisions.

## Output Format
- Requirements, estimates, architecture diagram, data model, scaling plan, trade-offs

## Common Mistakes
- Jumping to technology names instead of reasoning
- Ignoring availability and failure modes
- Claiming numbers without showing math
