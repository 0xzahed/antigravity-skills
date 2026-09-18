---
name: openid-connect
description: Implement OpenID Connect identity. Use when your app needs
  standardized identity, profile, or SSO.
metadata:
  tags: openid, connect
---

# OpenID Connect

## Use this skill when
- Adding SSO via OIDC providers
- Validating ID tokens and userinfo
- Implementing the discovery and PKCE flows

## Do not use this skill when
- Pure authorization (use oauth2-engineering)
- Building your own user store from scratch

## Instructions
1. Use the provider discovery document (.well-known) for config.
2. Validate ID tokens: signature, iss, aud, exp, nonce.
3. Fetch profile from userinfo; prefer standard claims.
4. Implement the authorization code + PKCE flow.
5. Handle logout (RP-initiated) and session management.
6. Map provider identity to your own user/roles carefully.
7. Keep client secrets server-side; never expose them in SPAs.

## Checklist
- Nonce validated
- Iss/aud/exp enforced
- Client secret not in browser

## Output Format
- Provider | scopes | claim mapping | logout handling

## Common Mistakes
- Trusting ID tokens without signature checks
- Exposing client secrets in the frontend
- Overly broad scopes
