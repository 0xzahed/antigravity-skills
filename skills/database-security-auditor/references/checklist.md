# Database Security Audit Reference

## Access
- [ ] Map every account/service to the DB; who has what grants?
- [ ] No shared "app" superuser used for everything; separate least-privilege roles per service.
- [ ] Default accounts (postgres/sa/root) not exposed or password-protected.
- [ ] Credentials: never in code/config/logs; rotated; vault-managed.
- [ ] Privileged and DDL changes audited.

## Encryption
- [ ] TLS enforced for all client connections; certificates validated.
- [ ] At-rest encryption enabled; keys protected and backed up separately.
- [ ] Backups encrypted; off-site copies protected from ransomware.

## Data protection
- [ ] Sensitive columns (PII, credentials) identified; masked/redacted in exports and logs.
- [ ] No sensitive data in error messages.
- [ ] Retention and purge policy for personal data.

## Exposure
- [ ] DB not publicly reachable; firewalled to app servers/jump hosts only.
- [ ] Admin ports (5432/3306/etc.) not exposed.
- [ ] Replica/snapshot copies inheriting the same protections.

## Operations
- [ ] Audit logging enabled for sensitive operations; logs secure.
- [ ] Secrets rotation tested; access revoked on offboarding.