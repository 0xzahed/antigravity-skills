---
name: deep-linking
description: Implement safe deep linking. Use when opening app content from URLs
  or QR codes.
metadata:
  tags: deep, linking
---

# Deep Linking

## Use this skill when
- Registering URL schemes/universal links
- Resolving and validating incoming URLs
- Routing to destinations

## Do not use this skill when
- HTTP routing on the web

## Instructions
1. Use platform-native universal links/app links over custom schemes.
2. Validate the entire URL, not just host, against an allowlist.
3. Reject links carrying unexpected domains or schemes.
4. Sanitize any params before use in navigation.
5. Handle the app-not-installed and app-update cases.
6. Log failures for dead links.

## Checklist
- Allowlist enforced
- Params sanitized
- Fallback to store/web defined

## Output Format
- Link map | validation | fallback behavior

## Common Mistakes
- Wildcard hosts
- Trusting link params
- No fallback when app missing
