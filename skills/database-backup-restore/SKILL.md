---
name: database-backup-restore
description: Design and test backup and restore. Use when planning disaster
  recovery for databases.
metadata:
  tags: database, backup, restore
---

# Database Backup & Restore

## Use this skill when
- Choosing backup strategy (full, incremental, PITR)
- Testing restore processes
- Setting retention and RTO/RPO targets

## Do not use this skill when
- Transient data stores (caches, queues)
- Application-level concerns

## Instructions
1. Define RPO (data loss) and RTO (recovery time) targets.
2. Back up incrementally with regular full backups; use PITR where available.
3. Encrypt backups and store off-site/away from the DB.
4. Test restores on a schedule; untested backups are fiction.
5. Document the restore runbook and run periodic drills.
6. Protect backup keys and access paths from ransomware.
7. Verify backup integrity with automated health checks.

## Checklist
- Restore is tested
- RPO/RTO documented and achievable
- Backups are encrypted and off-machine

## Output Format
- Backup scheme | RTO/RPO | restore runbook | drill schedule

## Common Mistakes
- “We have backups” but no restore practice
- Backups on the same disk as the DB
- No encryption on backups
