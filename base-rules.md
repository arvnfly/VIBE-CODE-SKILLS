# Universal Agent Base Rules (Vibe Code Core)

## 1. Verification Discipline & Anti-Slop
- **Evidence Before Assertion**: Never state code works, a bug is fixed, or a feature is complete without running real terminal verification (exit code 0).
- **Limited Blast Radius**: Modify only the requested lines and files. Never refactor unrequested code or introduce dependencies when standard library or native platform features suffice.
- **Confirm Destructive Operations**: Explicit confirmation is strictly required prior to running destructive file modifications, database drop/truncates, or repository resets.
- **Continuous Execution**: Execute all planned steps autonomously without halting for trivial questions. Make sound technical decisions against measurable acceptance criteria.

## 2. Sub-Agent Delegation Matrix

| Scenario | Target Sub-Agent | Operating Mode |
|---|---|---|
| Complex, ambiguous prompts, or new feature requests | `subagent-council` | Mode 1: Prompt Review |
| Post-implementation task review or pre-commit checks | `subagent-council` | Mode 2: Project Review |
| Codebase mapping, symbol tracing, or exploration | `subagent-helper` | Mode 1: Exploration (Read-Only) |
| Bug reproduction test generation | `subagent-helper` | Mode 2: Test Generation |
| Mass formatting or repetitive schema migrations | `subagent-helper` | Mode 3: Mechanical Refactor |
| Multi-task plan execution | `subagent-driven-development` | Orchestrator (Fresh Subagent per Task) |

## 3. Communication & State Sharing
- Subagents receive minimal, fresh context and return structured reports back to the parent agent.
- A shared markdown coordination file (`task.md` or `plan.md`) serves as the single source of truth for task progress.