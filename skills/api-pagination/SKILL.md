---
name: api-pagination
description: Implement consistent pagination. Use when returning lists from APIs.
metadata:
  tags: api, pagination
---

# API Pagination

## Use this skill when
- Choosing cursor vs offset pagination
- Implementing filters, sorting, and page size limits
- Handling large datasets efficiently

## Do not use this skill when
- Internal non-API data passing

## Instructions
1. Prefer cursor pagination for large and frequently-changing datasets.
2. Return a next/prev cursor and total only when cheap to compute.
3. Enforce a max page size and document defaults.
4. Keep ordering stable during pagination.
5. Delegate filtering/sorting to the query, not in-app.
6. Avoid infinite cursor loops with changing data.
7. Expose metadata: hasMore, nextCursor, returnedCount.

## Output Format
- Pagination scheme | params | response shape | limits

## Common Mistakes
- Offset pagination with deep offsets on big tables
- Unstable ordering while paging
- Computed totals on every page
