---
name: session-management
description: Manage server-side sessions securely. Use when implementing or
  hardening session state.
metadata:
  tags: session, management
---

# Session Management

## Use this skill when
- Storing sessions in cookies or server stores
- Expiry, idle timeout, and revocation
- Protecting against fixation and theft

## Do not use this skill when
- Stateless token auth (jwt-engineering)
- Device-level concepts

## Instructions
1. Generate high-entropy session IDs; never client-controlled values.
2. Bind sessions to user, IP hints, and user-agent fingerprint.
3. Regenerate the session ID on privilege change (fixation).
4. Set idle and absolute timeouts.
5. Support server-side revocation: denylist or session lookup.
6. Store sessions in a fast store with TTL.
7. Log session lifecycle: create, refresh, destroy.

## Checklist
- Session regeneration on login/role change
- Revocation path exists
- Cookies are httpOnly+Secure+SameSite

## Output Format
- Session store | lifecycle | timeout policy | revocation

## Common Mistakes
- Session IDs embeddable/predictable
- Never expiring sessions
- No revocation on logout
