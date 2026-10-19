---
name: distributed-tracing-jaeger
description: "Distributed tracing with Jaeger, span context propagation, trace sampling strategies, and latency waterfall analysis."
---

# Distributed Tracing Protocol

1. Propagate B3/W3C trace context headers on all inter-service HTTP and gRPC calls.
2. Configure adaptive sampling (e.g. 1% in production, 100% on errors).
3. Analyze trace waterfall graphs to locate high-latency spans.
