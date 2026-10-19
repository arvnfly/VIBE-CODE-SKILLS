---
name: error-handling-patterns
description: "Result types, custom error hierarchies, error boundaries, and eliminating silent exception swallowing."
---

# Error Handling & Result Pattern Protocol

Enforce predictable error boundaries without silent failures or uncaught rejections.

---

## 1. Never Swallow Exceptions Silently

- Strictly forbid empty `catch (e) {}` or `except: pass` blocks.
- If an exception cannot be handled locally, either rethrow or transform into a domain error with root cause attached.

---

## 2. The Result Object Pattern

For expected operational failures (validation, not found, business rule violations), prefer returning Result types over throwing exceptions:
```typescript
type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };
```
