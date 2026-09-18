---
name: linux-administration
description: Administer Linux servers. Use when managing processes, users,
  disks, and services.
metadata:
  tags: linux, administration
---

# Linux Administration

## Use this skill when
- Managing processes, users, permissions, and filesystems
- Debugging system issues: load, memory, disk, CPU
- Scheduling jobs and managing packages

## Do not use this skill when
- Application development
- Kubernetes-level concern (use kubernetes-engineering)

## Instructions
1. Inspect before acting: load average, memory, disk, I/O (top/vmstat/iostat).
2. Use journald/systemctl for service state and logs.
3. Manage users/groups with least privilege; use sudo purposefully.
4. Watch disk growth and inodes; set alerting.
5. Harden SSH: key-based auth, disable root login.
6. Keep packages patched; control uptime by maintenance policy.
7. Document runbooks for common ops.

## Checklist
- No runaway processes
- Disk and inode monitoring on
- SSH key-based only

## Output Format
- Diagnosis | actions | verification | runbook

## Common Mistakes
- Bonus: blind rm -rf or chmod -R
- Killing services without logs
- Ignoring I/O and memory counters
