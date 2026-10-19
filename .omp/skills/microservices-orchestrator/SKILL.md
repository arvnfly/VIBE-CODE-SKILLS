---
name: microservices-orchestrator
description: "Event-driven architecture, distributed sagas, transactional outbox pattern, and Dead Letter Queue error recovery."
---

# Microservices & Distributed Systems Protocol

When building distributed or event-driven microservices, adhere to these fault-tolerant patterns.

---

## 1. Transactional Outbox Pattern

Never publish messages to a broker directly inside a database transaction:
1. Write the domain mutation and the event record to an outbox database table in a single local ACID transaction.
2. An asynchronous worker reads the outbox and dispatches events to the message broker (Kafka, RabbitMQ).
3. Guarantees at-least-once delivery without dual-write inconsistency.

---

## 2. Distributed Sagas & Compensations

For multi-service workflows without two-phase commit:
- Orchestration Sagas: A centralized coordinator issues commands and listens for replies.
- Choreography Sagas: Services emit events and react independently.
- Every state mutation MUST have an inverted compensating transaction (e.g. ChargePayment -> RefundPayment).

---

## 3. Dead Letter Queues (DLQ) & Retry Policy

1. Configure exponential backoff with jitter on failed message processing (e.g. 1s, 2s, 4s, 8s).
2. After 5 retries, divert poison messages to a DLQ for manual inspection and alerting.
3. Consumers must be strictly idempotent to handle message redelivery safely.
