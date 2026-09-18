# Auth Checklist for Security Review

## Authentication

- [ ] Passwords hashed with Argon2id/bcrypt, never plaintext, never reversible
- [ ] Login rate-limited and brute-force defended
- [ ] MFA available for privileged accounts
- [ ] Sessions: high-entropy IDs, httpOnly+Secure+SameSite cookies, regeneration on privilege change
- [ ] Tokens (JWT): short expiry, refresh rotation, issuer/audience/exp/alg enforced, revocation path
- [ ] No account enumeration via differing error messages
- [ ] Password reset uses short-lived single-use tokens

## Authorization

- [ ] Every action authorized server-side (never rely on UI hiding)
- [ ] Ownership: resource scoped to the requesting user/tenant
- [ ] No IDOR: IDs checked, not trusted, from the client
- [ ] Admin operations require elevated checks (plus step-up where sensitive)

## Sessions & Devices

- [ ] Logout and password change invalidate sessions server-side
- [ ] Device list visible with revoke path
- [ ] Session expiration (idle + absolute)

## Secrets

- [ ] No API keys/tokens/passwords in repos, env dumps, or logs
- [ ] Runtime secrets in a vault or secret store
- [ ] Access keys scoped and rotation-capable