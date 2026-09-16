---
name: nextjs-authentication
description: Add authentication to Next.js apps. Use when wiring a session/login
  into App Router.
metadata:
  tags: nextjs, authentication
---

# Next.js Authentication

## Use this skill when
- Handling sessions and cookies in App Router
- Protecting pages, layouts, and server actions
- Secure routing after login

## Do not use this skill when
- Designing auth flows from scratch (use authentication-architecture)
- Non-Next.js apps

## Instructions
1. Use cookie-based HTTP-only sessions; avoid storing tokens in JS state.
2. Protect layouts/pages with server-side auth checks.
3. Guard server actions on the server too.
4. Redirect after login safely (no open redirect).
5. Handle signout and session expiry gracefully.
6. Use middleware for coarse guards and server checks for real security.

## Checklist
- Auth enforced server-side
- No tokens in localStorage
- Post-login redirect validated

## Output Format
- Session design | protection map | actions/auth guard

## Common Mistakes
- Client-only route guards
- Trusting middleware as the security boundary alone
- Open redirects
