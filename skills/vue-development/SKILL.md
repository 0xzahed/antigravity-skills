---
name: vue-development
description: Build Vue 3 applications with the Composition API. Use when
  developing or reviewing Vue projects.
metadata:
  tags: vue, development
---

# Vue Development

## Use this skill when
- Building components with Vue 3 Composition API
- Structuring state with Pinia
- Reviewing Vue performance and reactivity correctness
- Migrating Vue 2 to Vue 3

## Do not use this skill when
- Working on React, Angular, or non-Vue projects

## Instructions
1. Use <script setup> + Composition API for new components.
2. Prefer composables to extract and reuse logic.
3. Manage global state with Pinia; keep local state local.
4. Use computed for derived values, watch for side effects.
5. Virtualize long lists and lazy-import heavy routes/components.
6. Lock reactivity: reactive/ref consistently, avoid mutating props.
7. Use v-model with defineModel conventions for component APIs.

## Output Format
- Component map | state split | composable inventory | perf notes

## Common Mistakes
- Wrapping everything in reactive() including primitives
- Deep watchers on large objects
- Mutating props directly
