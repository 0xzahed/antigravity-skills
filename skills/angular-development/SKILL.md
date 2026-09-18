---
name: angular-development
description: Build Angular applications. Use when developing, reviewing, or
  migrating Angular projects.
metadata:
  tags: angular, development
---

# Angular Development

## Use this skill when
- Building components, services, and modules (standalone-first)
- Managing async state with RxJS and signals
- Reviewing change detection and performance
- Migrating AngularJS to modern Angular

## Do not use this skill when
- Working on React, Vue, or non-Angular projects

## Instructions
1. Prefer standalone components and inject() for new code.
2. Use signals for reactive state (Angular 16+); keep RxJS for event streams.
3. Use OnPush change detection and track component input immutability.
4. Subscribe in templates with async pipe or signals, avoid manual subscribe leaks.
5. Lazy-load feature routes.
6. Put HTTP and shared logic in services with proper typing.
7. Follow the Angular style guide (naming, folder structure).

## Checklist
- No memory leaks from unsubscribed observables

## Output Format
- Module/standalone structure | signal vs observable usage | perf review

## Common Mistakes
- Default change detection everywhere with mutable state
- Subscribing in components without cleanup
- Shared state in services stored reactively everywhere
