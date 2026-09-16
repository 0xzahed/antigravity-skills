---
name: push-notifications
description: Implement reliable push notifications. Use when sending or handling
  notifications in apps.
metadata:
  tags: push, notifications
---

# Push Notifications

## Use this skill when
- Registering devices and sending pushes
- Handling permissions and deep links
- Delivery logging and troubleshooting

## Do not use this skill when
- In-app messaging UI
- Email/SMS

## Instructions
1. Design permission and opt-in flows honestly.
2. Uniquely and securely identify devices (token per install).
3. Handle token refresh and invalidation.
4. Include deep-link context but guard against hijacking.
5. Segment and throttle to avoid noise and churn.
6. Log send/confirm/fail and token health.
7. Respect quiet hours and rate policies.

## Checklist
- Tokens kept fresh
- Failures surfaced/metrics
- Deep links validated

## Output Format
- Token lifecycle | sending | segmentation | metrics

## Common Mistakes
- Pushing without auth/consent care
- Silent send failures
- Unvalidated deep links
