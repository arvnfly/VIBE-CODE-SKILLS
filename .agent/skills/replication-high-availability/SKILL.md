---
name: replication-high-availability
description: "Primary-replica database replication, read replica routing, replication lag handling, and failover automation."
---

# Replication & High Availability Protocol

1. Route read-only queries to replica nodes and mutations to primary.
2. Mitigate read-after-write lag by pinning client sessions to primary immediately following a mutation.
3. Configure automated failover with consensus (Patroni, Orchestrator).
