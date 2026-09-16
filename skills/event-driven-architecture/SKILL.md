---
name: event-driven-architecture
description: Design event-driven systems with producers, consumers, and broker
  infrastructure. Use when decoupling components via events.
metadata:
  tags: event, driven, architecture
---

# Event-Driven Architecture

## Use this skill when
- Decoupling components by emitting and consuming events
- Designing event schemas and evolution policies
- Guaranteeing delivery, ordering, and idempotency
- Building event-sourced or choreographed flows

## Do not use this skill when
- A synchronous request/response call would be simpler and fine
- Consumers always need full state at call time

## Instructions
1. Model events as facts: past tense, immutable, versioned.
2. Choose the broker: Kafka, RabbitMQ, SNS/SQS, EventBridge.
3. Define delivery semantics: at-most/at-least/exactly-once, ordering.
4. Make consumers idempotent.
5. Plan schema evolution and consumer compatibility.
6. Handle poison messages and dead-letter flows.
7. Map the event flow so failures and dependencies are visible.

## Output Format
- Event | Producer | Consumers | Delivery semantics | Schema version

## Common Mistakes
- Expecting exactly-once without idempotency
- Designing events as commands to one consumer
- Ignoring replay and re-processing needs
