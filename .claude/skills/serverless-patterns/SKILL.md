---
name: serverless-patterns
description: "Serverless architecture patterns, ephemeral compute, cold-start mitigation, and event fan-out."
---

# Serverless Architecture Protocol

1. Design functions to be stateless and ephemeral.
2. Fan out heavy workloads using SNS/EventBridge topics to multiple parallel workers.
3. Cache reusable clients (DB pools, HTTP agents) outside the handler closure.
