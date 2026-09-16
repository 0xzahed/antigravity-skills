---
name: component-architecture
description: Design scalable component architecture. Use when planning or
  refactoring a component tree.
metadata:
  tags: component, architecture
---

# Component Architecture

## Use this skill when
- Designing a component hierarchy (layout/page/feature/ui)
- Establishing a component API contract
- Refactoring a flat component tree into a hierarchy
- Creating a shared component library

## Do not use this skill when
- A small app with few components
- Working on server-side logic

## Instructions
1. Define layers: layout, page, feature, UI primitives.
2. Communicate via props down / events up; avoid prop drilling.
3. Give components stable, predictable APIs and default props.
4. Compose with children/slots/render props instead of deep wrappers.
5. Lazy-load route-level and heavy components.
6. Document component props and usage examples.
7. Keep presentational components free of data-fetching.

## Output Format
- Component tree | responsibility matrix | API contract | lazy-loading plan

## Common Mistakes
- God components that do everything
- Prop drilling more than two levels
- Containers that fetch data deep in the tree
