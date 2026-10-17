---
name: systematic-debugging
description: 4-phase root-cause investigation protocol before proposing or writing fixes
tools: Read, Grep, Glob, Bash
model: inherit
---

# Systematic Debugging

Core Rule: **Never speculate or apply speculative patches before uncovering proven root causes.**

```
[1. Reproduce] ──> [2. Trace Root Cause] ──> [3. Form Hypothesis] ──> [4. Minimal Fix & Verify]
```

## 4-Phase Investigation Protocol

### Phase 1: Reproduce (Consistent Reproduction)
- Build an isolated test case or record the exact command sequence that triggers the bug.
- Verify that the failure reproduces deterministically (100% reproducible).

### Phase 2: Trace (Trace to Origin)
- Trace the call stack to the first line where state or values diverge from expectation.
- Distinguish between symptoms and the underlying root cause.
- Never wrap errors in empty `try/catch` or `try/except: pass` blocks to suppress symptoms.

### Phase 3: Hypothesize (Formulate Hypothesis)
- Express the root cause in one clear sentence: *"The bug occurs because X causes Y under condition Z."*
- Test and confirm the hypothesis by inspecting code paths or variable states.

### Phase 4: Minimal Fix & Verify
- Implement the smallest targeted patch that resolves the root cause (minimal blast radius).
- Re-run the verification command from Phase 1 to prove the fix passes cleanly.