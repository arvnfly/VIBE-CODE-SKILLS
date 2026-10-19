---
name: function-calling-agent-design
description: "LLM function calling, tool definitions, structured JSON output extraction, and sandbox execution."
---

# Function Calling & Agent Tool Protocol

1. Define tool schemas with strict parameter descriptions and required fields.
2. Enforce structured JSON output matching validation schemas.
3. Execute untrusted agent tool calls inside isolated sandboxes with strict timeouts.
