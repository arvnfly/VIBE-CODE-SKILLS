---
name: rate-limiting-throttling
description: "Rate limiting algorithms (Token Bucket, Sliding Window Counter), Redis storage, and HTTP 429 headers."
---

# Rate Limiting & Throttling Protocol

Protect APIs against abuse and brute-force traffic spikes.

---

## 1. Sliding Window Counter

Use Redis sliding window log or sorted set to evaluate exact request velocity across dynamic time windows.

---

## 2. Standard Rate Limit Headers

Return `RateLimit-Limit`, `RateLimit-Remaining`, and `RateLimit-Reset` headers on all responses. Return `HTTP 429 Too Many Requests` when exceeded.
