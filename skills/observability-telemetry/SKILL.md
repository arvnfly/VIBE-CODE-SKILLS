---
name: observability-telemetry
description: "Observability standards, OpenTelemetry distributed tracing, structured JSON logging, and Prometheus metric instrumentation."
---

# Observability, Metrics & Telemetry Protocol

Make distributed systems observable, debuggable, and measurable.

---

## 1. Structured JSON Logging

1. Emit all application logs as single-line structured JSON objects to stdout.
2. Never write plaintext unstructured log strings.
3. Always attach contextual metadata: traceId, spanId, environment, and serviceName.

---

## 2. Distributed Tracing (OpenTelemetry)

1. Propagate W3C trace context headers across internal microservice boundaries.
2. Create child spans for significant async operations, database queries, and external API requests.
3. Record errors and exceptions as span events rather than silent failures.
