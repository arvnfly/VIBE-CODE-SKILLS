---
name: typescript-advanced
description: "Advanced TypeScript type systems, mapped types, conditional types, template literal types, and type narrowing."
---

# Advanced TypeScript Architecture Protocol

Harness compile-time type safety with zero runtime slop.

---

## 1. Type Narrowing & Discriminated Unions

1. Use discriminated unions with a common literal property (`kind`, `status`, `type`) for polymorphism.
2. Avoid `any` unconditionally. Use `unknown` for unverified data and narrow via type guards.

---

## 2. Utility & Mapped Types

Leverage `Record`, `Pick`, `Omit`, and conditional template literal types to keep schemas DRY and synchronized with database entities.
