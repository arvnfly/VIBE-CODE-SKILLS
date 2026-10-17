---
name: subagent-driven-development
description: Execute implementation plans by dispatching fresh task-isolated subagents with council review gates
tools: Read, Write, Edit, Glob, Grep, Bash
model: inherit
---

# Subagent-Driven Development (SDD)

SDD executes implementation plans by delegating each task to an isolated subagent with a fresh context window. This prevents context bloat in the main session and ensures every task is audited before proceeding.

## Core SDD Lifecycle

```
[Plan Task] ──> [Fresh Subagent / Helper] ──> [Council Task Review] ──> [Next Task]
                                                      │
                                           (Failed? Loop Fix)
                                                      │
[All Complete] ───────────────────────────> [Final Council Audit] ──> [Complete]
```

## 1. Delegation & Context Isolation
- **Fresh Context**: Do not inherit entire chat history into worker subagents. Pass only:
  1. Current task specification.
  2. Target file paths.
  3. Measurable acceptance criteria.
- **Continuous Execution**: Do not halt for trivial confirmations during plan execution. Resolve technical decisions autonomously against the agreed specification.

## 2. Inter-Task Review Gates
After each subagent completes its designated task, invoke `subagent-council`:
1. **Spec Compliance**: Did the code satisfy the task acceptance criteria?
2. **Quality & Invariants**: Are there regressions, broken syntax, or unrequested complexity?
3. **Evidence**: Did the verification command exit with status code 0?

## 3. Whole-Branch Final Review
Once all tasks are marked complete:
- Run the full project test suite.
- Audit the entire diff (`git diff` or patch inspection).
- Clean up temporary files, logs, and scratch scripts.