---
name: background-job-workers
description: "Background job queues (BullMQ, Celery, Sidekiq), concurrency tuning, idempotent jobs, and priority queues."
---

# Background Workers & Queues Protocol

Process asynchronous jobs reliably without dropping tasks.

---

## 1. Job Idempotency

Ensure executing a job multiple times produces the identical outcome without duplicate side effects.

---

## 2. Priority & Concurrency Tuning

Separate high-priority user-facing jobs (transaction emails) from low-priority background sweeps (data sync).
