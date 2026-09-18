---
name: rate-limiting
description: Implement rate limiting for APIs and services. Use when protecting
  resources from abuse or overload.
metadata:
  tags: rate, limiting
---

# Rate Limiting

## Use this skill when
- Limiting per-client request rates
- Choosing token bucket/fixed window strategies
- Returning proper 429 handling
- Rate limiting in distributed systems

## Do not use this skill when
- Exhaustive circuit breaking (see resilience skills)
- Client-side throttling

## Instructions
1. Pick a strategy: token bucket (burst), fixed window (simple), sliding (fairness).
2. Key limits by authenticated identity, then IP as fallback.
3. Return 429 with Retry-After and consistent headers.
4. Make limit decisions fast: in-memory, Redis, or gateway.
5. Store counters with TTL to bound memory.
6. Exempt health checks; apply to expensive/critical endpoints first.
7. Document limits for API consumers.

## Checklist
- 429s are surfaced and documented
- Limits survive restarts where it matters

## Output Format
- Endpoint | key | strategy | limits | enforcement layer

## Common Mistakes
- Limiting by IP only (NAT/users share IPs)
- No 429 contract for clients
- Limiting non-uniformly across instances without a shared store
