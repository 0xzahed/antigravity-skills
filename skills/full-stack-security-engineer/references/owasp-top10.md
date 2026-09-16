# OWASP Top 10 (2021) – Quick Reference

Use this while auditing any web application. Every finding should map to one of these families.

1. **A01 Broken Access Control** – missing server-side authz, IDOR, path traversal, CORS misconfig.
2. **A02 Cryptographic Failures** – weak hash, cleartext, bad TLS, predictable tokens.
3. **A03 Injection** – SQL/NoSQL/OS/template/LDAP injection, usually from unsanitized input.
4. **A04 Insecure Design** – business logic flaws, missing threat modelling, trust boundaries crossed.
5. **A05 Security Misconfiguration** – defaults, verbose errors, missing headers, open cloud storage.
6. **A06 Vulnerable and Outdated Components** – known CVEs in direct and transitive deps.
7. **A07 Identification and Authentication Failures** – broken login, session, MFA bypass.
8. **A08 Software and Data Integrity Failures** – CI tampering, unsigned updates, deserialisation.
9. **A09 Logging and Monitoring Failures** – no security-relevant logging, silent incidents.
10. **A10 Server-Side Request Forgery** – user-supplied URLs fetched server-side without allowlists.

## Verification checklist

- [ ] Authorization checked server-side for every action, resource scoping by owner/tenant
- [ ] Sensitive data encrypted at rest and in transit; no PII in logs
- [ ] All external input validated and parameterized
- [ ] No default/admin credentials; secrets not in code or history
- [ ] Dependencies scanned; lockfiles committed
- [ ] Security-relevant events are logged
- [ ] SSRF-prone outbound fetches are restricted