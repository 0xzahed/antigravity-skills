---
name: systemd-services
description: Manage services with systemd. Use when writing or debugging unit
  files and service lifecycle.
metadata:
  tags: systemd, services
---

# systemd Services

## Use this skill when
- Writing unit files for apps
- Debugging why a service fails or restarts
- Enabling auto-start and dependencies

## Do not use this skill when
- Non-Linux orchestration
- Application code

## Instructions
1. Write units with correct ExecStart, User, WorkingDirectory, env.
2. Define dependencies (After/Wants) and restart policy deliberately.
3. Set Environment/EnvironmentFile for config, never secrets inline.
4. Use RuntimeDirectory/StateDirectory for runtime state.
5. Check status: systemctl status, journalctl -u, show -p for properties.
6. Reload daemon on unit changes (daemon-reload).
7. Enable services you need at boot explicitly.

## Checklist
- No Root service when not needed
- Restart policy sane (no crash loop)
- Logs are inspectable

## Output Format
- Unit design | restart policy | debugging evidence

## Common Mistakes
- Type=simple with long-running startup assumptions
- Services that depend on unmounted dirs
- No journal discipline
