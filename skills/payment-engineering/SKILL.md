---
name: payment-engineering
description: Build secure and correct payment flows. Use when designing
  checkout, reconciliation, and money flows.
metadata:
  tags: payment, engineering
---

# Payment Engineering

## Use this skill when
- Designing checkout and payment flows
- Handling webhooks and idempotency
- Reconciliation and refunds
- Money correctness (decimal, fees, tax)

## Do not use this skill when
- General e-commerce CRUD
- Specific provider APIs (they have own docs/skills)

## Instructions
1. Treat money as integers/minor units; never float.
2. Make every mutating endpoint idempotent server-side.
3. Verify provider webhook signatures and reconcile with your records.
4. Design the double-entry ledger from the start.
5. Handle declined, retried, expired, and disputed payments explicitly.
6. Never trust client-submitted amounts or fees.
7. Log and alert on reconciliation drift.

## Checklist
- Idempotency keys everywhere
- Webhook signatures verified
- Ledger reconciles

## Output Format
- Flow map | money model | idempotency | webhook handling | reconciliation

## Common Mistakes
- Float money arithmetic
- Idempotency ignored
- Trusting client amounts
- Blindly trusting provider callbacks
