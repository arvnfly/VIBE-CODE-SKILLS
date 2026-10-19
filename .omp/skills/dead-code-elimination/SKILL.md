---
name: dead-code-elimination
description: "Systematic removal of unused functions, unreachable branches, orphaned imports, and deprecated parameters."
---

# Dead Code Elimination Protocol

Maintain a minimal, lean codebase by ruthlessly pruning unused constructs.

---

## 1. Orphaned Imports & Exports

1. Remove any import not referenced in the file.
2. Unexport functions and types only consumed within the declaring module.
3. Use automated static analysis (ESLint `no-unused-vars`, TypeScript `noUnusedLocals`, `vulture` for Python) before committing.

---

## 2. Unreachable Logic & Ghost Flags

1. Delete conditional branches guarded by constants that never evaluate to true.
2. Remove completed feature-flag branches once 100% rollout is verified.
3. Purge orphaned files, unused asset images, and test fixtures not referenced by the test suite.
