---
name: infrastructure-security
description: Harden cloud and server infrastructure. Use when reviewing or
  configuring deployment security.
metadata:
  tags: infrastructure, security
---

# Infrastructure Security

## Use this skill when
- Reviewing cloud accounts, network, and compute security
- Applying least privilege to roles and groups
- Encrypting data and securing access paths

## Do not use this skill when
- Container/runtime hardening (use container-security)
- Application code vulnerabilities

## Instructions
1. Adopt least privilege for IAM: use roles, deny-unless-needed.
2. Restrict network exposure: minimal open ports, security groups, private subnets.
3. Encrypt data at rest and in transit everywhere.
4. Enable and review audit logs for control-plane activity.
5. Secure the management plane: SSO + MFA, short-lived credentials.
6. Patch images and OS; automate updates.
7. Segment environments (dev/prod) and blast-radius.
8. Disable access keys where roles work; rotate what remains.

## Checklist
- No public S3/backets with sensitive data
- IAM is least privilege
- Audit logging on

## Output Format
- Asset | exposure | control | finding | fix

## Common Mistakes
- One admin key for everything
- All ports open “to be safe”
- Prod and dev sharing everything
