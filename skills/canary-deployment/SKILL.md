---
name: canary-deployment
description: Roll out changes gradually to small traffic. Use when you want
  progressive exposure with monitoring.
metadata:
  tags: canary, deployment
---

# Canary Deployment

## Use this skill when
- Shifting a small % of traffic to a new version
- Progressive rollbacks driven by metrics
- Validating releases in production on real traffic

## Do not use this skill when
- Full-atomic cutover is required (use blue-green-deployment)
- No monitoring to drive the canary

## Instructions
1. Start 1–5% of traffic; increase on stable metrics.
2. Define the metrics and SLO gates that decide promote vs rollback.
3. Automate promotion and rollback decisions.
4. Keep canary and baseline observable side-by-side.
5. Use a window long enough to catch slow-burn errors.
6. Handle session affinity and state consistency during canary.
7. Have a clean abort path at every step.

## Checklist
- Gates defined and measurable
- Automated rollback on breach
- Baseline vs canary comparison

## Output Format
- Traffic steps | metric gates | compare dashboard | abort path

## Common Mistakes
- Canary with no metrics
- 100% immediately because tests passed
- Ignoring data-writing skew between versions
