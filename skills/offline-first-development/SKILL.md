---
name: offline-first-development
description: Build apps that work offline. Use when designing offline caching and sync.
metadata:
  tags: offline, first, development
---

# Offline-First Development

## Use this skill when
- Caching data for offline use
- Queuing and syncing mutations
- Handling conflicts
- Managing background refresh

## Do not use this skill when
- Pure online-only apps

## Instructions
1. Write for the happy offline path, then sync on connect.
2. Cache reads with bounded size and eviction.
3. Queue writes locally with IDs for idempotent sync.
4. Define conflict resolution: last-write, version, or user merge.
5. Show sync/offline status honestly in the UI.
6. Reconcile device storage with server eventually.
7. Handle app updates changing the cache schema.

## Checklist
- Sync is idempotent
- Conflicts have a policy
- Cache size bounded

## Output Format
- Cache model | write queue | conflict rules | status UX

## Common Mistakes
- Ignoring conflicts until data loss
- Unbounded offline queues
- Hard-coding online assumptions
