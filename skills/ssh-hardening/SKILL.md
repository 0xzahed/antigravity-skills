---
name: ssh-hardening
description: Harden SSH access. Use when configuring or reviewing SSH server security.
metadata:
  tags: ssh, hardening
---

# SSH Hardening

## Use this skill when
- Disabling password and root login
- Managing keys and access
- Protecting against brute force

## Do not use this skill when
- Application-level access control
- Network firewalling (use its own skill)

## Instructions
1. Use key-based auth; disable PasswordAuthentication and root login.
2. Set AllowGroups/AllowUsers to restrict logins.
3. Limit login attempts (MaxAuthTries) and use fail2ban where useful.
4. Use a dedicated SSH key type (ed25519) with passphrase/agent.
5. Disable unused protocols/forwarding unless needed.
6. Keep sshd and OpenSSH patched.
7. Audit authorized_keys regularly.

## Checklist
- No password auth
- No root login
- Keys audited

## Output Format
- Convention | restrictions | audit cadence

## Common Mistakes
- Passwords on internet-facing SSH
- Compromised keys going undetected
- Broad forwarded agents
