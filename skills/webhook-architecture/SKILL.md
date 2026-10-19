---
name: webhook-architecture
description: "Webhook publishing and consuming, HMAC signature verification, delivery retries, and idempotency tracking."
---

# Webhook Publishing & Ingestion Protocol

Deliver and process third-party webhooks reliably.

---

## 1. HMAC Signature Verification

1. Verify the `X-Signature-SHA256` header using constant-time comparison before processing payload bytes.
2. Ingest the raw request body buffer before JSON parsing to preserve signature fidelity.

---

## 2. Fast Ingestion & Async Processing

Return `HTTP 200/202` within 500ms and enqueue the event to a background worker for processing.
