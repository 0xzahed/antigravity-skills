---
name: git-history-analysis
description: Analyze git history for insights and forensics. Use when tracing
  when/what changed and why.
metadata:
  tags: git, history, analysis
---

# Git History Analysis

## Use this skill when
- Blaming code to the decisive commit
- Finding when behavior or config changed
- Auditing who changed what

## Do not use this skill when
- Code review of a diff
- Rebuilds

## Instructions
1. Use git log -S/-G to find when a string/pattern entered history.
2. Use git blame with ignore-revs for formatting commits.
3. Bisect to find the commit that introduced a regression.
4. Trace file renames with --follow.
5. Correlate commits to issues/releases and deploys.
6. Check for secret leakage across history when investigating.

## Checklist
- Findings grounded in commits
- Bisect range sane

## Output Format
- Question | method | commits | conclusions

## Common Mistakes
- Reading only the newest commit
- Ignoring merges when tracing
- Attributing blame to the wrong commit
