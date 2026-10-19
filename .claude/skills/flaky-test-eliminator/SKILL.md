---
name: flaky-test-eliminator
description: "Detecting and fixing flaky tests, eliminating race conditions, deterministic clocks, and test isolation."
---

# Flaky Test Elimination Protocol

1. Eliminate race conditions by replacing sleeps with state assertions.
2. Mock the system clock using vi.useFakeTimers() for time-dependent logic.
3. Ensure zero shared mutable state between tests.
