# Oh My Pi Project Rules

Include base rules:
<!-- include: base-rules.md -->

## Sub-Agents & Workflows
- `council`: Prompt review (lensa Clarifier, Skeptic, Minimalist) & Project review (lensa Correctness, Security, Architecture).
- `helper`: Worker terisolasi untuk eksplorasi kode, pembuatan test, dan refactor mekanikal.
- `subagent-driven-development`: Eksekusi sekuensial dengan task review gate.
- `verification-before-completion`: Gated command verification sebelum closing.