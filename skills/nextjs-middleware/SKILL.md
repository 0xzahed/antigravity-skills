---
name: nextjs-middleware
description: Use Next.js middleware for lightweight edge routing and guards. Use
  when protecting routes at the edge.
metadata:
  tags: nextjs, middleware
---

# Next.js Middleware

## Use this skill when
- Route-level redirects and rewrites
- Edge auth checks (cookie/header level only)
- A/B and experimentation routing

## Do not use this skill when
- Data access (edge has no DB)
- Heavy computation (keep middleware fast)

## Instructions
1. Keep middleware minimal: it runs on every request.
2. Only use it for cookie/header checks, not DB.",
3. Do heavy checks in Server Components, not middleware.
4. Avoid large dependencies in middleware; keep it edge-compatible.
5. Match precise matchers to limit scope.
6. Return NextResponse with proper redirects.

## Checklist
- Matchers scoped
- No heavy logic
- Edge-compatible code only

## Output Format
- Middleware routes | logic | matchers

## Common Mistakes
- DB calls in middleware
- Unscoped matcher slowing everything
- Client secrets in middleware
