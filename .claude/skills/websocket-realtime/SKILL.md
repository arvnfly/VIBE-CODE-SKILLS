---
name: websocket-realtime
description: "WebSocket server architecture, connection heartbeat/ping-pong, horizontal pub/sub clustering, and reconnection backoff."
---

# WebSocket Real-Time Systems Protocol

Maintain resilient, high-concurrency real-time socket connections.

---

## 1. Heartbeats & Dead Connection Pruning

Implement ping/pong heartbeats every 30 seconds. Terminate sockets that miss 2 consecutive heartbeats.

---

## 2. Horizontal Scaling via Pub/Sub

Connect WebSocket server nodes to a distributed Redis or NATS pub/sub broker to broadcast events across server clusters.
