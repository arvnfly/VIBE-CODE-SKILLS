---
name: event-driven-architecture
description: "Event-driven architecture, event schemas, idempotent consumers, Kafka/RabbitMQ messaging, and event versioning."
---

# Event-Driven Architecture Protocol

1. Define event schemas with strict semver versioning.
2. Ensure consumers are strictly idempotent to tolerate message redelivery.
3. Publish events asynchronously using the Transactional Outbox pattern.
