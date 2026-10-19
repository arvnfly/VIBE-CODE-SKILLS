---
name: clean-hexagonal-architecture
description: "Hexagonal / Clean / Onion architecture, ports and adapters, dependency inversion, and business logic isolation."
---

# Clean & Hexagonal Architecture Protocol

1. Core domain entities must have ZERO dependencies on external frameworks, ORMs, or databases.
2. Declare primary and secondary Ports as domain interfaces.
3. Implement Adapters (HTTP controllers, SQL repositories) in the outer infrastructure layer.
