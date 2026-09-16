---
name: background-jobs
description: Design and implement background jobs. Use when deferring work out
  of the request path.
metadata:
  tags: background, jobs
---

# Background Jobs

## Use this skill when
- Offloading slow work (email, reports, exports)
- Deferred execution with retries
- Scheduling recurring tasks

## Do not use this skill when
- Work must be synchronously acknowledged by the requester
- Sub-millisecond tasks

## Instructions
1. Keep jobs idempotent; retry-safe by design.
2. Design for at-least-once: dedupe or tolerate duplicates.
3. Set explicit retries, backoff, and timeouts.
4. Store job state so progress is observable.
5. Route jobs through a queue, not a fragile in-memory loop.
6. Handle dead-letter and permanently failing jobs distinctly.
7. Track job success/failure metrics for alerting.

## Checklist
- Every job is idempotent
- Failures produce alerts, not silence
- No unbounded queue growth

## Output Format
- Job | trigger | retry policy | failure handling | observability

## Common Mistakes
- Running blocking work synchronously to “keep it simple”
- Jobs that silently stop on transient errors
- Holding a DB connection across long jobs
