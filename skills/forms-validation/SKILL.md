---
name: forms-validation
description: Build robust forms with validation in the frontend. Use when
  implementing forms and user input handling.
metadata:
  tags: forms, validation
---

# Forms & Validation

## Use this skill when
- Building complex or dynamic forms
- Implementing client-side validation with schemas
- Handling submission, errors, and retries
- Ensuring form accessibility

## Do not use this skill when
- Simple single-field inputs
- Server-side validation is the concern

## Instructions
1. Use a form library (React Hook Form, Formik, VeeValidate) for complex forms.
2. Define validation with a schema library (Zod, Yup) shared with the server when possible.
3. Validate on blur/submit; show inline field errors.
4. Debounce async validations (uniqueness checks).
5. Disable-as-you-submit to prevent double submission.
6. Wire labels, aria-describedby, and focus management.
7. Re-validate server errors on submission response.

## Checklist
- Submitting is idempotent or guarded
- Errors are announced for screen readers

## Output Format
- Form map | schema | error UX | submission flow

## Common Mistakes
- Validation only on the client
- No guard against double submission
- Error messages without context
