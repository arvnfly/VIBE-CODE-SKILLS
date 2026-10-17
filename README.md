# vibe-code skills

100% Agent Skills, rule configurations, and workflow directives for LLM coding agents.

Compatible across Antigravity, Claude Code, Oh My Pi, OpenAI Codex, Cursor, Windsurf, Gemini CLI, Aider, and GitHub Copilot.

---

## Overview

Coding agents frequently fail due to three structural problems:
1. **Unscoped Execution**: Agents act on ambiguous prompts without verifying constraints or clarifying assumptions.
2. **Context Pollution**: Agents load entire project histories into the context window for micro-tasks that require only isolated inspection.
3. **Premature Completion**: Agents assert success based on conversational assumptions rather than exit codes and compiler/test outputs.

`vibe-code skills` solves this natively through standardized Agent Skills (`SKILL.md`) and project instructions without requiring external CLI binaries or third-party dependencies:
- **Council**: Two-phase multi-lens review for prompt validation (pre-execution) and diff auditing (post-execution).
- **Helper**: Scoped execution patterns for read-only exploration, isolated test reproduction, and mechanical edits.
- **Subagent-Driven Development (SDD)**: Task dispatch patterns with fresh context and review barriers.
- **Verification Gates**: Standardized rule constraints requiring command execution evidence (exit code 0) before closing.
- **Systematic Debugging**: 4-phase root cause resolution before touching application code.

---

## Agent Integration Mapping

| Agent / Client | Config Path | How It Works |
| :--- | :--- | :--- |
| **Antigravity** | `AGENTS.md`, `.agent/skills/` | Loaded via Antigravity skill system and agent rules |
| **Claude Code** | `CLAUDE.md`, `.claude/commands/`, `.claude/skills/` | Custom commands (`/council`, `/helper`) and project guidelines |
| **Oh My Pi (omp)** | `PI.md`, `.omp/skills/`, `.omp/commands/` | Native CLI commands and skill parser |
| **OpenAI Codex** | `CODEX.md`, `.codex-plugin/plugin.json` | Project instructions and plugin metadata |
| **Cursor** | `.cursorrules`, `.cursor/rules/council.mdc` | Always-applied workspace rules and MDC instructions |
| **Windsurf** | `.windsurfrules` | Global memory and behavioral constraints |
| **Gemini CLI** | `GEMINI.md`, `gemini-extension.json` | Extension definition and bootstrap instructions |
| **Aider** | `.aider.conf.yml`, `.aider/CONVENTIONS.md` | Auto-loaded configuration and coding conventions |
| **GitHub Copilot** | `.github/copilot-instructions.md` | Workspace custom instructions |

---

## Core Skills

### 1. `subagent-council`
Path: `skills/subagent-council/SKILL.md`

- **Mode 1: Review Prompt (Pre-Execution)**:
  - *Clarifier*: Detect ambiguous adjectives, missing acceptance criteria, and unstated assumptions.
  - *Skeptic*: Identify failure modes, edge cases, data destruction risks, and boundary limits.
  - *Minimalist*: Enforce YAGNI, reject premature abstractions, require native/stdlib solutions.
- **Mode 2: Review Project (Post-Execution)**:
  - *Correctness*: Verify test outputs and exit codes.
  - *Security*: Check input sanitization, path traversal, injection, credential exposure.
  - *Architecture*: Identify dead code, unused dependencies, and diff pollution.

### 2. `subagent-helper`
Path: `skills/subagent-helper/SKILL.md`

- **Exploration**: Read-only codebase mapping and symbol resolution.
- **Isolated Test Generation**: Self-contained regression or reproduction test scripts.
- **Mechanical Refactoring**: Repetitive formatting or schema migrations without logic modification.

### 3. `subagent-driven-development`
Path: `skills/subagent-driven-development/SKILL.md`

- Dispatches fresh, isolated subagents per task to eliminate context bloat.
- Applies review gates between tasks before moving forward.
- Enforces continuous execution without pausing for trivial confirmations.

### 4. `verification-before-completion`
Path: `skills/verification-before-completion/SKILL.md`

- Strictly forbids claiming task completion without terminal command evidence.
- Requires exit code 0 and non-empty output logs.

### 5. `systematic-debugging`
Path: `skills/systematic-debugging/SKILL.md`

- 4-phase root cause resolution: Reproduce, Trace, Hypothesize, Minimal Fix.
- Prohibits speculative guessing or error swallowing.

---

## Installation

### Copy into an Existing Project
Copy the platform configuration folder to your project root:
- For Antigravity: copy `.agent/` and `AGENTS.md`
- For Claude Code: copy `.claude/` and `CLAUDE.md`
- For Oh My Pi: copy `.omp/` and `PI.md`
- For Cursor: copy `.cursorrules` and `.cursor/`
- For Windsurf: copy `.windsurfrules`
- For Codex / Gemini: copy `CODEX.md` / `GEMINI.md`

### Automated Script

#### Linux / macOS:
```bash
./install.sh /path/to/target-project
```

#### Windows (PowerShell):
```powershell
.\install.ps1 -Destination "C:\path\to\target-project"
```

---

## License

MIT. See [LICENSE](LICENSE).