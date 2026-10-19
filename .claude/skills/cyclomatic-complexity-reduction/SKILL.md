---
name: cyclomatic-complexity-reduction
description: "Techniques for flattening deeply nested conditionals, pyramids of doom, and reducing cyclomatic complexity."
---

# Cyclomatic Complexity Reduction Protocol

Keep function execution graphs linear and understandable.

---

## 1. Guard Clauses Over Nested Pyramids

Return early to eliminate nested if/else blocks:
- Bad: `if (a) { if (b) { if (c) { doWork(); } } }`
- Good:
  ```javascript
  if (!a) return;
  if (!b) return;
  if (!c) return;
  doWork();
  ```

---

## 2. Table-Driven & Lookup Mapping

Replace sprawling 20-case `switch` statements with lookup objects or maps:
```javascript
const STATUS_HANDLERS = {
  pending: handlePending,
  active: handleActive,
  cancelled: handleCancelled
};
const handler = STATUS_HANDLERS[status] || handleDefault;
handler(order);
```
