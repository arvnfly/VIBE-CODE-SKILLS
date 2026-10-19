---
name: test-driven-development
description: "Test-Driven Development cycle, red-green-refactor disciplines, unit vs integration boundaries, and test isolation."
---

# Test-Driven Development (TDD) Protocol

Before writing or refactoring production code, establish automated behavioral contracts.

---

## 1. The Red-Green-Refactor Cycle

1. **Red Phase**:
   - Write a focused test defining the expected behavior.
   - Run the test suite and confirm the test FAILS for the expected reason (not due to syntax error).
2. **Green Phase**:
   - Write the MINIMUM production code necessary to make the test pass.
   - Avoid speculative code or future-proofing.
3. **Refactor Phase**:
   - Clean up code structure, eliminate duplication, and enhance naming while keeping the test suite green.

---

## 2. Testing Philosophy: Behavior Over Implementation

1. Test public interfaces and returned values, never private methods or internal state variables.
2. Avoid asserting mock interaction counts unless checking side effects (e.g. sending an email or charging a card).
3. Tests must be deterministic: Zero flakiness, no dependency on system clock or execution order.
