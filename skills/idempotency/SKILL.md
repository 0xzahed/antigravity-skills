---
name: idempotency
description: Make operations idempotent and safe to retry. Use when writing
  mutating endpoints or consumers.
metadata:
  tags: idempotency
---

# Idempotency & Retry Safety

## Use this skill when
- Making POST/PUT/PATCH operations retry-safe
- Handling duplicate webhooks and events
- Generating idempotency keys

## Do not use this skill when
- Read-only operations
- Where retries are not possible

## Instructions
1. Accept an idempotency key for mutating requests.
2. Store the key + first response and short-circuit duplicates.
3. Scope keys to client, endpoint, and intent.
4. Guard with unique constraints to avoid concurrent duplicates.
5. Make consumers apply operations at-most-once per event.
6. Define TTL for how long keys are honored.
7. Return the original response on replay.

## Checklist
- Retries cannot double-charge/double-apply
- Concurrent duplicate requests are safe

## Output Format
- Operation | key source | storage | replay behavior

## Common Mistakes
- Assuming dedupe at the transport level
- Idempotence keys stored in memory only
- Replaying a request changes state
