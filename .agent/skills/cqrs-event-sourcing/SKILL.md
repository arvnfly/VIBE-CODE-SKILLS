---
name: cqrs-event-sourcing
description: "Command Query Responsibility Segregation (CQRS), Event Sourcing, write models, and read projections."
---

# CQRS & Event Sourcing Protocol

1. Separate Command models (state mutations) from Query models (read projections).
2. Store state as an immutable append-only sequence of domain events.
3. Project read models asynchronously into denormalized query tables.
