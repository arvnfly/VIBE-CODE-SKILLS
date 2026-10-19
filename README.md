<div align="center">

<img src=".github/assets/banner.svg" alt="VIBE-CODE SKILLS Banner" width="100%">

<br>

**Standardized Multi-Agent Protocols & Skills for Autonomous AI Coding Agents**

[![CI & Skills Verification](https://github.com/arvnfly/VIBE-CODE-SKILLS/actions/workflows/ci.yml/badge.svg)](https://github.com/arvnfly/VIBE-CODE-SKILLS/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/arvnfly/VIBE-CODE-SKILLS/pulls)
[![Compatible With](https://img.shields.io/badge/Agents-Antigravity%20%7C%20Claude%20%7C%20Cursor%20%7C%20Codex%20%7C%20Windsurf%20%7C%20Copilot-orange.svg)](#supported-agents)

*Zero external binaries. 100% portable markdown instructions, multi-lens review gates, design intelligence, and subagent isolation protocols.*

---

[Quickstart](#quickstart) • [Why Vibe-Code?](#why-vibe-code-skills) • [Architecture](#architecture) • [Core Skills](#core-skills) • [Examples](#examples--artifacts) • [Supported Agents](#supported-agents) • [Verification](#verification--testing)

</div>

---

## Why VIBE-CODE Skills?

Autonomous coding agents (Claude Code, Cursor, Antigravity, OpenAI Codex, Windsurf) fail predictably due to four structural pitfalls:

| Common Failure Mode | Without Vibe-Code | With VIBE-CODE Skills |
| :--- | :--- | :--- |
| **Unscoped Execution** | Rushes into code blindly; breaks working modules with speculative abstractions. | **Pre-Execution Council**: Clarifier, Skeptic, and Minimalist lenses define binary acceptance criteria upfront. |
| **Context Pollution** | Reads entire codebase histories into the main context; hallucinations spike. | **Subagent Helpers**: Spawns isolated workers for read-only exploration and reproduction tests. |
| **Premature Completion** | Claims *"I fixed the bug!"* based on conversational optimism without proof. | **Gated Verification**: Strict protocol forbidding task closure without terminal evidence (`exit code 0`). |
| **Guesswork Debugging** | Applies random patches or wraps errors in empty `try/catch` blocks. | **Systematic Debugging**: Enforces a strict 4-phase root-cause investigation cycle before touching code. |
| **Unstyled / Inaccessible UI** | Generates generic, inconsistent CSS with arbitrary spacing, unreadable contrast, and zero accessibility. | **UI/UX Design Engine**: Enforces design systems, 8pt spatial grid, 60-30-10 palettes, fluid typography, and WCAG AA audits. |

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
                         ┌───────────────────┼───────────────────┐
                         │                   │                   │
                         ▼                   ▼                   ▼
           ┌───────────────────────────┐   ┌───────────────────────────┐   ┌───────────────────────────┐
           │   SUBAGENT-HELPER WORKER  │   │   SYSTEMATIC DEBUGGING    │   │    UI/UX DESIGN ENGINE    │
           │  • Read-Only Symbol Map   │   │  1. Reproduce (100%)      │   │  • Design Systems & Tokens│
           │  • Isolated Test Scripts  │   │  2. Trace to Origin       │   │  • Responsive Layouts     │
           │  • Mechanical Refactors   │   │  3. Form Hypothesis       │   │  • WCAG 2.2 AA Audits     │
           │                           │   │  4. Minimal Targeted Patch│   │  • Micro-Interactions     │
           └─────────────┬─────────────┘   └─────────────┬─────────────┘   └─────────────┬─────────────┘
                         │                               │                               │
                         └───────────────────────────────┼───────────────────────────────┘
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

### Via NPX (Direct from GitHub or NPM)

Run instantly without cloning or local installation:

```bash
# Run directly from GitHub repository (no npm registry wait)
npx github:arvnfly/VIBE-CODE-SKILLS

# Or via npm package (once published):
npx vibe-code-skills
```

### CLI Commands & Advanced Flags

The native zero-dependency CLI includes workspace auto-detection, client filtering, diagnostic health checks, and dry-run safety:

```bash
# Universal install into current project (auto-detects active agents)
npx github:arvnfly/VIBE-CODE-SKILLS install

# Install into a specific directory
npx github:arvnfly/VIBE-CODE-SKILLS install /path/to/project

# Filter installation to a specific AI agent:
# Options: antigravity, claude, cursor, codex, windsurf, omp, gemini, aider, copilot
npx github:arvnfly/VIBE-CODE-SKILLS install ./my-project --client=cursor

# Preview file operations without modifying disk
npx github:arvnfly/VIBE-CODE-SKILLS install ./my-project --dry-run

# Create a timestamped backup before overwriting files
npx github:arvnfly/VIBE-CODE-SKILLS install ./my-project --backup

# Audit project configuration and verify skill health
npx github:arvnfly/VIBE-CODE-SKILLS doctor ./my-project

# Run multi-agent contract verification test suite
npx github:arvnfly/VIBE-CODE-SKILLS verify

# List all core skills and supported AI agent platforms
npx github:arvnfly/VIBE-CODE-SKILLS list

# Safely remove vibe-code skills without touching user code
npx github:arvnfly/VIBE-CODE-SKILLS uninstall ./my-project
```

### One-Line Shell Installers

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

## All-in-One Skills Suite (32 Specialized Subagent Skills)

All 32 skills adhere to the standard open Agent Skill format (`SKILL.md`) with YAML frontmatter, organized across eight specialized engineering pillars:

| Pillar | Subagent Skill | Location | Core Function |
| :--- | :--- | :--- | :--- |
| **1. Multi-Agent Process** | `subagent-council` | `skills/subagent-council/` | Pre-execution gate (Mode 1) & post-execution diff audit (Mode 2) |
| | `subagent-helper` | `skills/subagent-helper/` | Isolated workers for read-only symbol exploration & test generation |
| | `subagent-driven-development` | `skills/subagent-driven-development/` | Sequential fresh subagents with review gates between tasks |
| | `verification-before-completion` | `skills/verification-before-completion/` | Terminal evidence barrier requiring literal `exit code 0` proof |
| **2. Architecture & Design** | `system-architect` | `skills/system-architect/` | High-level system design, DDD bounded contexts, C4 models, and ADRs |
| | `api-design` | `skills/api-design/` | RESTful standards, RFC 7807 error envelopes, cursor pagination, idempotency |
| | `database-architect` | `skills/database-architect/` | Zero-downtime migrations, composite index ordering, and ACID transactions |
| | `microservices-orchestrator` | `skills/microservices-orchestrator/` | Event-driven architecture, distributed sagas, outbox pattern, and DLQs |
| **3. Frontend & UI** | `ui-ux` | `skills/ui-ux/` | Design intelligence engine (8pt grid, 60-30-10 palette, WCAG AA audits) |
| | `accessibility-a11y` | `skills/accessibility-a11y/` | Web accessibility, ARIA role mapping, focus traps, and WCAG 2.2 AA/AAA |
| | `css-architect` | `skills/css-architect/` | Maintainable CSS, container queries, fluid tokens, and layout shift (CLS) prevention |
| | `state-management` | `skills/state-management/` | Client-side state, normalized stores, selector memoization, and race prevention |
| **4. Diagnostics & Reliability** | `systematic-debugging` | `skills/systematic-debugging/` | 4-phase root cause investigation (Reproduce > Trace > Hypothesize > Fix) |
| | `performance-profiler` | `skills/performance-profiler/` | Core Web Vitals (LCP, INP, CLS), heap memory diagnostics, multi-tier caching |
| | `incident-commander` | `skills/incident-commander/` | Production incident triage, severity assessment, and blameless post-mortems |
| | `chaos-engineering` | `skills/chaos-engineering/` | Resilience engineering, circuit breakers, retry with backoff & jitter |
| **5. Security & Compliance** | `security-hardener` | `skills/security-hardener/` | OWASP Top 10 defense, zero secret leakage, timing-safe crypto, SSRF/CSRF |
| | `auth-security` | `skills/auth-security/` | JWT lifecycle, OAuth 2.1 / OIDC flows, PKCE, and RBAC/ABAC authorization |
| | `penetration-tester` | `skills/penetration-tester/` | Security testing, SAST/DAST audits, CVE scans, and offensive exploit prevention |
| | `data-privacy-compliance` | `skills/data-privacy-compliance/` | GDPR/CCPA PII handling, data sanitization, and immutable audit logs |
| **6. QA & Testing** | `test-driven-development` | `skills/test-driven-development/` | TDD cycle (Red-Green-Refactor), test isolation, and behavioral assertion |
| | `e2e-playwright` | `skills/e2e-playwright/` | End-to-end browser automation with Playwright and accessible locators |
| | `mocking-strategy` | `skills/mocking-strategy/` | In-memory fakes, Mock Service Worker (MSW), and preventing mock drift |
| | `mutation-testing` | `skills/mutation-testing/` | Mutation testing protocols, mutant survival analysis, and killing false-positives |
| **7. DevOps & CI/CD** | `git-workflow` | `skills/git-workflow/` | Atomic commits, Conventional Commits formatting, linear rebase, PR hygiene |
| | `docker-optimizer` | `skills/docker-optimizer/` | Multi-stage Docker builds, minimal non-root packaging, and layer caching |
| | `ci-cd-pipeline` | `skills/ci-cd-pipeline/` | CI/CD pipeline architecture, matrix builds, automated gates, and rollbacks |
| | `kubernetes-manifest` | `skills/kubernetes-manifest/` | Production K8s manifests, resource limits/requests, PDBs, and health probes |
| **8. Data & Observability** | `observability-telemetry` | `skills/observability-telemetry/` | Structured JSON logging, OpenTelemetry distributed tracing, Prometheus metrics |
| | `cache-architect` | `skills/cache-architect/` | Redis architectural patterns, cache-aside, and cache stampede prevention (XFetch) |
| | `documentation-architect` | `skills/documentation-architect/` | Technical documentation architecture, the Diataxis framework, runnable snippets |
| | `code-refactoring` | `skills/code-refactoring/` | Martin Fowler refactoring catalog, cyclomatic complexity reduction, boy scout rule |

---

## Examples & Artifacts

Real-world artifacts demonstrating how skills operate during development tasks:

| Example | Domain | Covered Skills | Description |
| :--- | :--- | :--- | :--- |
| [01-full-stack-task](examples/01-full-stack-task/) | Full-Stack Auth | `subagent-driven-development`, `subagent-council`, `verification-before-completion` | Multi-phase checklist tracker ([task.md](examples/01-full-stack-task/task.md)) and pre/post-execution review artifacts ([council-review.md](examples/01-full-stack-task/council-review.md)). |
| [02-ui-ux-refactor](examples/02-ui-ux-refactor/) | Design System Refactor | `ui-ux` | Direct before-and-after code transformation ([before-and-after.md](examples/02-ui-ux-refactor/before-and-after.md)) applying the 8pt grid, semantic color tokens, and WCAG AA contrast. |
| [03-systematic-debugging](examples/03-systematic-debugging/) | Root Cause Analysis | `systematic-debugging` | 4-phase investigation report ([investigation-report.md](examples/03-systematic-debugging/investigation-report.md)) diagnosing and resolving a token expiration race condition. |

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
...

--- 2. Validating Platform Entrypoints & Root Files ---
PASS: All platform rules and entrypoints exist

--- 2b. Validating Concrete Walkthrough Examples ---
PASS: All example artifacts verified

--- 3. Validating Core Skills Structure & Frontmatter ---
PASS: All 32 skills verified across all client directories (128 skill manifests)

--- 4. Checking Clean Universal English ---
PASS: All content verified for universal English language

All checks passed! Repository is 100% valid and verified.

=== Running Multi-Agent Contract Simulation Tests ===
PASS: Council Mode 1 sample conforms to pre-execution gate schema
PASS: Council Mode 2 sample conforms to post-execution audit schema
PASS: Valid terminal verification report passes gate
PASS: Primary text contrast 18.33:1 exceeds WCAG AAA standard (7:1)
PASS: Muted text contrast 7.48:1 meets WCAG AA standard (4.5:1)
PASS: All spatial scale tokens strictly adhere to 8pt/4pt subgrid cadence
PASS: Systematic debugging report conforms to 4-phase contract

All agent contract simulation tests passed cleanly!
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