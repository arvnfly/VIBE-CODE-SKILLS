---
name: integration-testing
description: "Integration testing with Testcontainers, real database fixtures, and API route contract validation."
---

# Integration Testing Protocol

1. Run real database instances in ephemeral Docker containers using Testcontainers.
2. Seed database fixtures freshly before each test suite.
3. Test full controller-to-database execution paths.
