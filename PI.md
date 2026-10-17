# Oh My Pi Project Rules

Include base rules:
<!-- include: base-rules.md -->

## Sub-Agents & Workflows
- `council`: Prompt review (Clarifier, Skeptic, Minimalist lenses) & Project review (Correctness, Security, Architecture lenses).
- `helper`: Isolated worker for code exploration, test generation, and mechanical refactoring.
- `subagent-driven-development`: Sequential task execution with inter-task review gates.
- `verification-before-completion`: Gated command verification prior to task closure.
- `systematic-debugging`: 4-phase root-cause investigation prior to modifications.
- `ui-ux`: Design intelligence, styling systems, responsive layouts, and accessibility audits.