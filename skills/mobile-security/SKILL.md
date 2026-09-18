---
name: mobile-security
description: Harden mobile apps. Use when auditing or securing mobile clients.
metadata:
  tags: mobile, security
---

# Mobile Security

## Use this skill when
- Protecting local data and traffic
- Mitigating reverse engineering
- Checking permissions and platform APIs

## Do not use this skill when
- Server-side security
- Web app security (use frontend-security)

## Instructions
1. Minimize permissions; request at point of use.
2. Encrypt local data; protect keys in secure storage.
3. Pin or verify TLS appropriately; avoid disabling cert checks.
4. Never trust client-side checks for server security.
5. Sanitize deep-link handling (URL schemes) against hijacking.
6. Protect against sensitive data in screenshots/clipboard.
7. Mind export compliance and platform review rules.

## Checklist
- Least permissions
- Deep links validated
- No insecure HTTP

## Output Format
- Threat list | permission map | mitigations

## Common Mistakes
- Gutting SSL for a “quick fix”
- Assessing client checks as security
- Sideloaded code paths
