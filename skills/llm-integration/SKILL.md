---
name: llm-integration
description: Integrate LLMs into applications. Use when calling models from product code.
metadata:
  tags: llm, integration
---

# LLM Integration

## Use this skill when
- Calling LLM APIs reliably
- Managing prompts, context, and streaming
- Cost, latency, and failure handling

## Do not use this skill when
- Training models
- UI for chatbots (use rag/its own)

## Instructions
1. Treat the cache as your friend: cache responses by prompt-hash.
2. Stream responses for UX; keep timeouts and retries.
3. Validate and structure output (schema-parse, retry on shape).
4. Keep prompts versioned with the code.
5. Budget tokens: trim context, use truncation policies.
6. Guard against prompt injection from user data.
7. Monitor cost, latency, and failure rates.

## Checklist
- Output validated
- Prompt injection guarded
- Cost/latency monitored

## Output Format
- Integration map | caching | guards | observability

## Common Mistakes
- Unstructured output parsing
- Passing raw user input into system prompts
- No cost controls
