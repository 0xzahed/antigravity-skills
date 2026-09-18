---
name: database-security
description: Secure database access and data. Use when reviewing or hardening
  database setup.
metadata:
  tags: database, security
---

# Database Security

## Use this skill when
- Auditing DB access and privileges
- Encrypting data at rest and in transit
- Protecting credentials and auditing

## Do not use this skill when
- Application auth design (use auth skills)

## Instructions
1. Grant least privilege: per-service accounts, minimal grants.
2. Use connection encryption (TLS) and validate certs.
3. Encrypt at rest and protect key material.
4. Store secrets in a vault, not config files or env dumps.
5. Mask/redact sensitive columns in logs and exports.
6. Enable audit logging for privileged access and DDL.
7. Restrict network exposure; firewall and VPN/proxy only.
8. Review shared and default credentials; rotate regularly.

## Checklist
- No default credentials
- Privileged access is audited
- Encryption on at rest and in transit

## Output Format
- Access map | encryption status | credential handling | audit scope

## Common Mistakes
- One superuser for everything
- Certificates unsigned/untrusted
- Credentials in application logs
