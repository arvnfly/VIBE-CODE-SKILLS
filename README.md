<div align="center">

# VIBE-CODE SKILLS

**Standardized Multi-Agent Protocols & Skills for Autonomous AI Coding Agents**

[![CI & Skills Verification](https://github.com/arvnfly/VIBE-CODE-SKILLS/actions/workflows/ci.yml/badge.svg)](https://github.com/arvnfly/VIBE-CODE-SKILLS/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/arvnfly/VIBE-CODE-SKILLS/pulls)
[![Compatible With](https://img.shields.io/badge/Agents-Antigravity%20%7C%20Claude%20%7C%20Cursor%20%7C%20Codex%20%7C%20Windsurf%20%7C%20Copilot-orange.svg)](#supported-agents)

*Zero external binaries. 100% portable markdown instructions, multi-lens review gates, and subagent isolation protocols.*

---

[Quickstart](#quickstart) • [Why Vibe-Code?](#why-vibe-code-skills) • [Architecture](#architecture) • [Core Skills](#core-skills) • [Supported Agents](#supported-agents) • [Verification](#verification--testing)

</div>

---

## Why VIBE-CODE Skills?

Autonomous coding agents (Claude Code, Cursor, Antigravity, OpenAI Codex, Windsurf) fail predictably due to three structural pitfalls:

| Common Failure Mode | Without Vibe-Code | With VIBE-CODE Skills |
| :--- | :--- | :--- |
| **Unscoped Execution** | Rushes into code blindly; breaks working modules with speculative abstractions. | **Pre-Execution Council**: Clarifier, Skeptic, and Minimalist lenses define binary acceptance criteria upfront. |
| **Context Pollution** | Reads entire codebase histories into the main context; hallucinations spike. | **Subagent Helpers**: Spawns isolated workers for read-only exploration and reproduction tests. |
| **Premature Completion** | Claims *"I fixed the bug!"* based on conversational optimism without proof. | **Gated Verification**: Strict protocol forbidding task closure without terminal evidence (`exit code 0`). |
| **Guesswork Debugging** | Applies random patches or wraps errors in empty `try/catch` blocks. | **Systematic Debugging**: Enforces a strict 4-phase root-cause investigation cycle before touching code. |

---

## Architecture

```
                                  [ USER REQUEST ]
                                         │
                                         ▼
                     ┌───────────────────────────────────────┐
                     │     PRE-EXECUTION COUNCIL GATE        │
                     │  • Clarifier: Binary Criteria (Pass)  │
                     │  • Skeptic: Edge Cases & Blast Radius │
                     │  • Minimalist: YAGNI / Stdlib First   │
                     └───────────────────┬───────────────────┘
                                         │
                                         ▼
                       ┌───────────────────────────────────┐
                       │ SUBAGENT-DRIVEN DEVELOPMENT (SDD) │
                       │    (Sequential Fresh Subagents)   │
                       └─────────────────┬─────────────────┘
                                         │
                     ┌───────────────────┴───────────────────┐
                     │                                       │
                     ▼                                       ▼
       ┌───────────────────────────┐           ┌───────────────────────────┐
       │   SUBAGENT-HELPER WORKER  │           │   SYSTEMATIC DEBUGGING    │
       │  • Read-Only Symbol Map   │           │  1. Reproduce (100%)      │
       │  • Isolated Test Scripts  │           │  2. Trace to Origin       │
       │  • Mechanical Refactors   │           │  3. Form Hypothesis       │
       └─────────────┬─────────────┘           │  4. Minimal Targeted Patch│
                     │                         └─────────────┬─────────────┘
                     └───────────────────┬───────────────────┘
                                         │
                                         ▼
                     ┌───────────────────────────────────────┐
                     │       GATED VERIFICATION BARRIER      │
                     │  • Real terminal execution required   │
                     │  • Exit code MUST be 0                │
                     │  • Evidence logged before completion  │
                     └───────────────────┬───────────────────┘
                                         │
                                         ▼
                     ┌───────────────────────────────────────┐
                     │    POST-EXECUTION COUNCIL AUDIT       │
                     │  • Correctness: Criteria verified     │
                     │  • Security: Sanitization & leaks     │
                     │  • Architecture: Diff hygiene         │
                     └───────────────────┬───────────────────┘
                                         │
                                         ▼
                             [ VERIFIED DELIVERABLE ]
```

---

## Quickstart

Install VIBE-CODE Skills into any existing project in 3 seconds:

### One-Line Installers

#### Linux / macOS:
```bash
curl -fsSL https://raw.githubusercontent.com/arvnfly/VIBE-CODE-SKILLS/main/install.sh | bash
```

#### Windows (PowerShell):
```powershell
irm https://raw.githubusercontent.com/arvnfly/VIBE-CODE-SKILLS/main/install.ps1 | iex
```

### Manual Install / Git Clone:
```bash
# Clone the repository
git clone https://github.com/arvnfly/VIBE-CODE-SKILLS.git

# Install into your target project
./VIBE-CODE-SKILLS/install.sh /path/to/your/project
# Or on Windows:
.\VIBE-CODE-SKILLS\install.ps1 -Destination "C:\path\to\your\project"
```

---

## Core Skills

All skills adhere to the standard open Agent Skill format (`SKILL.md`) with YAML frontmatter.

### 1. `subagent-council`
*Location: `skills/subagent-council/SKILL.md`*
- **Mode 1: Prompt Review (Pre-Execution Gate)**: Dissects complex instructions into measurable acceptance criteria using **Clarifier**, **Skeptic**, and **Minimalist** lenses.
- **Mode 2: Project Review (Post-Execution Audit)**: Audits resulting code diffs against **Correctness**, **Security**, and **Architecture** before work is closed.

### 2. `subagent-helper`
*Location: `skills/subagent-helper/SKILL.md`*
- **Exploration (Read-Only)**: Offloads symbol lookup and file inspection to keep the main agent's context clean.
- **Isolated Test Generation**: Writes standalone reproduction test scripts without modifying production code.
- **Mechanical Refactoring**: Executes repetitive batch formatting, schema renaming, or migrations.

### 3. `subagent-driven-development`
*Location: `skills/subagent-driven-development/SKILL.md`*
- Dispatches fresh, isolated subagents per task to eliminate context degradation.
- Enforces council review gates between individual tasks.
- Promotes continuous autonomous execution without trivial interruptions.

### 4. `verification-before-completion`
*Location: `skills/verification-before-completion/SKILL.md`*
- **Absolute Rule**: Evidence before assertions.
- Requires literal terminal command logs with `exit code 0` (compiler, test suite, or linter).
- Zero tolerance for conversational claims of success without verifiable proof.

### 5. `systematic-debugging`
*Location: `skills/systematic-debugging/SKILL.md`*
- 4-phase investigation protocol: **Reproduce** &rarr; **Trace** &rarr; **Hypothesize** &rarr; **Minimal Fix**.
- Strictly prohibits speculative guessing or suppressing exceptions.

---

## Supported Agents

VIBE-CODE Skills automatically maps to every major coding agent:

| Agent / Client | Config Path | Integration Method |
| :--- | :--- | :--- |
| **Google Antigravity** | `AGENTS.md`, `.agent/skills/` | Native Antigravity skill system and agent rules |
| **Claude Code** | `CLAUDE.md`, `.claude/commands/`, `.claude/skills/` | Slash commands (`/council`, `/helper`) and project guidelines |
| **Cursor** | `.cursorrules`, `.cursor/rules/council.mdc` | Project rules and MDC always-apply instructions |
| **Windsurf** | `.windsurfrules` | Workspace rules and memory directives |
| **OpenAI Codex** | `CODEX.md`, `.codex-plugin/plugin.json` | Project instructions and plugin metadata |
| **Oh My Pi (omp)** | `PI.md`, `.omp/skills/`, `.omp/commands/` | Native CLI commands and skill engine |
| **Gemini CLI** | `GEMINI.md`, `gemini-extension.json` | Extension manifest and context rules |
| **Aider** | `.aider.conf.yml`, `.aider/CONVENTIONS.md` | Auto-loaded configuration and conventions |
| **GitHub Copilot** | `.github/copilot-instructions.md` | Repository-wide custom instructions |

---

## Anti-Slop Principles

1. **YAGNI & Stdlib First**: No factories for single products, no unrequested abstractions, and no third-party libraries for what standard libraries can do.
2. **Minimal Blast Radius**: Touch only lines and files directly required to fulfill the user request.
3. **Explicit Confirmation**: Never execute destructive operations (database drops, disk wipes, git resets) without explicit user sign-off.
4. **Clean Diff Hygiene**: Eliminate debug logs, temporary scratch files, and dead code before committing.

---

## Verification & Testing

This repository includes continuous automated verification for all schemas, skills, and installers:

```bash
# Run local validation suite
npm test
```

Expected output:
```
--- 1. Validating JSON Manifests ---
PASS: package.json is valid JSON
PASS: gemini-extension.json is valid JSON
PASS: .antigravity-plugin/plugin.json is valid JSON
PASS: .claude-plugin/plugin.json is valid JSON
PASS: .codex-plugin/plugin.json is valid JSON
PASS: .cursor-plugin/plugin.json is valid JSON
PASS: .omp/plugin.json is valid JSON

--- 2. Validating Platform Entrypoints & Root Files ---
PASS: All platform rules and entrypoints exist

--- 3. Validating Core Skills Structure & Frontmatter ---
PASS: All 5 skills verified across all client directories

--- 4. Checking Clean Universal English ---
PASS: All content verified for universal English language

All checks passed! Repository is 100% valid and verified.
```

---

## Contributing

Contributions are welcome:
1. Fork the repository.
2. Ensure any new skill includes a valid `SKILL.md` with YAML frontmatter.
3. Run `npm test` to verify all checks pass.
4. Submit a pull request.

---

## License

[MIT](LICENSE) (c) [rayz](https://github.com/arvnfly)