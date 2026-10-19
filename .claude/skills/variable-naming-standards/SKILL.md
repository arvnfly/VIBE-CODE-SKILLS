---
name: variable-naming-standards
description: "Universal variable, function, and class naming conventions; eliminates single-letter variables and ambiguous acronyms."
---

# Variable & Symbol Naming Standards

Ensure immediate readability and cognitive clarity across all codebase identifiers.

---

## 1. Intent-Revealing Names

1. Avoid cryptic abbreviations: `usrLst` -> `activeUsers`, `chkAuth()` -> `isAuthenticated()`.
2. Prohibit single-letter variables outside of trivial iteration indices:
   - Bad: `const d = getDelivery(id);`
   - Good: `const delivery = getDelivery(id);`

---

## 2. Standardized Prefixes & Suffixes

- Boolean flags: `is`, `has`, `should`, `can` (e.g. `isVisible`, `hasPermission`).
- Handlers: `handle<Event>` (e.g. `handleSubmit`, `handleResize`).
- Factory/Builders: `create<Entity>` or `build<Model>`.
