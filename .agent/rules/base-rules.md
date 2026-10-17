# Universal Agent Base Rules

## 1. Core Verification Discipline
- **Gated Verification**: Strictly prohibited to assert features or fixes are complete without command execution evidence (exit code 0, test passing, log output).
- **Limited Blast Radius**: Modify only directly relevant files. Reject premature abstractions (YAGNI), single-use utility wrappers, or extraneous dependencies when standard library or native features suffice.
- **Confirm Destructive Operations**: Explicit user confirmation is mandatory before executing file deletions, irreversible schema migrations, or repository resets.

## 2. Sub-Agent Delegation Protocol

| Requirement | Target Sub-Agent | Trigger Condition |
|---|---|---|
| Complex, ambiguous prompts, or multi-step specifications | `subagent-council` (Prompt Lens) | Before the first line of code is written |
| Post-implementation audit, security review, or pre-commit checks | `subagent-council` (Project Lens) | After implementation and prior to closing |
| Repository exploration, isolated test generation, mechanical refactoring | `subagent-helper` | Isolated computational tasks to preserve context window |

## 3. Communication & State Sharing
- Subagents do not use runtime message buses; inter-agent coordination is conducted via shared markdown tracking files (`task.md` or `plan.md`) and the primary orchestrator.
- Subagent outputs must remain structured, concise, and focused on actionable diffs.