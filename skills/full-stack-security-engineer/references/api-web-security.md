# API & Web Security Reference

## Injection & XSS

- Parameterize all queries; never string-concatenate user input, ORM or not.
- Escape on output; sanitize HTML with a battle-tested library before dangerouslySetInnerHTML/v-html.
- Treat the client as untrusted input for all parsing (headers, JSON, forms).

## Common API pitfalls to check

- `id` in URL vs server-derived ownership lookups → IDOR if not re-authorized.
- Mass assignment: extra fields in POST bodies silently binding to models.
- Page/limit params unbounded → request smuggling / DoS; clamp values.
- Unvalidated redirect: use server-controlled allowlist for post-login redirects.
- File upload: validate by content magic bytes, not extension/MIME; store outside webroot.

## Headers worth verifying

- `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options`/`frame-ancestors`, `Strict-Transport-Security`, `Referrer-Policy`.

## Rate limits & abuse

- 429s on auth, sensitive, and expensive endpoints with `Retry-After`.
- Body size, timeout, and max-connections limits configured.

## Data

- No secrets, PII, or internal stack traces in responses.
- Error messages do not reveal whether accounts exist.