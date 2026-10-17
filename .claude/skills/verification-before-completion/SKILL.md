---
name: verification-before-completion
description: Strict gated verification protocol requiring command evidence before asserting task completion
tools: Read, Bash
model: inherit
---

# Verification Before Completion

Absolute Rule: **Evidence before assertions. Never claim completion without proof.**

## Gated Verification Protocol

1. **Execute Concrete Verification Commands**:
   - Compiler / Type Checker (`cargo check`, `npm run lint`, `tsc --noEmit`).
   - Test Suite (`cargo test`, `npm test`, `pytest`, `go test ./...`).
   - Assertion Script (`bash test.sh` or local runner).
2. **Inspect Exit Code & Output**:
   - Exit code MUST be `0`.
   - Inspect output logs to ensure tests actually ran and were not skipped or empty.
3. **Anti-Slop / Anti-Hallucination Checklist**:
   - [ ] No claiming "fixed" or "working" before inspecting actual terminal output.
   - [ ] No assuming a command succeeded without checking return status.
   - [ ] Diff touches only lines and files relevant to the assigned task.

## Mandatory Verification Report Format
```markdown
### [Verification Gate]
- Command: `<exact command line>`
- Exit Code: `0`
- Output Snippet:
  ```
  <verbatim terminal output showing passing state>
  ```
- Conclusion: Verified functional according to specification.
```