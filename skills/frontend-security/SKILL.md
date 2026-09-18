---
name: frontend-security
description: Secure the frontend against XSS, CSRF, and data leaks. Use when
  reviewing or hardening client-side code.
metadata:
  tags: frontend, security
---

# Frontend Security

## Use this skill when
- Sanitizing/escaping user content rendered in the DOM
- Configuring CSP and security headers
- Storing tokens safely
- Reviewing frontend for data exposure

## Do not use this skill when
- Server-side security is the concern (the frontend is not a security boundary)

## Instructions
1. Treat the frontend as untrusted: never enforce authorization client-side.
2. Escape or sanitize all user-provided text (DOMPurify) before rendering HTML.
3. Avoid dangerouslySetInnerHTML/v-html unless sanitized.
4. Store tokens in httpOnly SameSite cookies, not localStorage.
5. Set CSP, X-Frame-Options/CSP frame-ancestors, HSTS, X-Content-Type-Options.
6. Don’t put secrets in client bundles or localStorage.
7. Validate and normalize URLs before navigation (open-redirect).
8. Remember: CSRF protection matters for cookie-based auth.

## Checklist
- No secrets in client bundles
- CSP blocks inline scripts or is properly relaxed
- User HTML is sanitized

## Output Format
- Exposure list | header config | specific fixes

## Common Mistakes
- Enforcing authorization in the UI only
- Storing JWTs in localStorage
- Trusting the client for price/role/permission decisions
