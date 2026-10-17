# Claude Code Project Rules

@base-rules.md

## Custom Commands & Skills
- `/council [prompt|project]`: Run multi-lens evaluation (`subagent-council`).
- `/helper [explore|test|refactor]`: Offload micro-tasks to an isolated subagent (`subagent-helper`).
- Skill `subagent-driven-development`: Execute multi-task plans continuously with review gates.
- Skill `verification-before-completion`: Verify real command evidence before asserting task completion.
- Skill `systematic-debugging`: 4-phase root-cause investigation before writing fixes.