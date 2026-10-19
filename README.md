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

## All-in-One Skills Suite (150 Specialized Skills)

The repository provides an All-in-One catalog of **150 production-grade agent skills** formatted as standard `SKILL.md` manifests with valid YAML frontmatter. Every skill is token-optimized (30-50 lines of dense rules and patterns rather than bloated prose), mirrored across all agent environments (`skills/`, `.agent/skills/`, `.claude/skills/`, `.omp/skills/`).

### Highlight: Comment Minimizer (`comment-minimizer`)
Enforces self-documenting code by eliminating noise comments (`//`, `#`, `/* */`):
- **Banned**: Comments explaining *what* code does (`// set x to 1`, `# fetch user from db`, `// return result`).
- **Required**: Express intent through descriptive identifier naming and extraction into well-named functions.
- **Allowed Exception Only**: Non-obvious architectural rationale, upstream vendor bug workarounds, or complex math/regex formulas.

### 11 Engineering Pillars (150 Skills Breakdown)

| Domain | Skills Count | Key Skills Included |
| :--- | :--- | :--- |
| **1. Multi-Agent & Process** | 5 skills | `subagent-council`, `subagent-helper`, `subagent-driven-development`, `verification-before-completion`, `systematic-debugging` |
| **2. Code Hygiene & Minimizing** | 5 skills | `comment-minimizer`, `variable-naming-standards`, `dead-code-elimination`, `cyclomatic-complexity-reduction`, `error-handling-patterns` |
| **3. Frontend & UI Engineering** | 18 skills | `ui-ux`, `accessibility-a11y`, `accessibility-testing-axe`, `css-architect`, `state-management`, `react-expert`, `nextjs-app-router`, `vue-composition-api`, `nuxt-fullstack`, `svelte-runes`, `angular-signals`, `tailwind-v4`, `core-web-vitals-optimizer`, `responsive-design`, `animation-framer-motion`, `canvas-webgl`, `web-components`, `pwa-service-worker` |
| **4. Backend & Languages** | 20 skills | `nodejs-backend`, `python-fastapi`, `python-django`, `golang-concurrency`, `rust-memory-safety`, `java-spring-boot`, `csharp-dotnet-core`, `cplusplus-modern`, `php-laravel`, `ruby-on-rails`, `elixir-phoenix`, `bash-scripting`, `powershell-automation`, `typescript-advanced`, `graphql-api`, `grpc-protobuf`, `websocket-realtime`, `server-sent-events`, `webhook-architecture`, `background-job-workers` |
| **5. Databases & Storage** | 16 skills | `database-architect`, `postgresql-expert`, `mysql-optimization`, `sqlite-embedded`, `mongodb-modeling`, `clickhouse-analytics`, `redis-caching`, `elasticsearch-search`, `vector-database-rag`, `prisma-orm`, `drizzle-orm`, `sqlalchemy-patterns`, `typeorm-patterns`, `database-backup-recovery`, `replication-high-availability`, `database-sharding` |
| **6. Cloud, DevOps & Infra** | 16 skills | `ci-cd-pipeline`, `docker-optimizer`, `kubernetes-manifest`, `helm-package-manager`, `terraform-iac`, `ansible-automation`, `argocd-gitops`, `aws-serverless`, `gcp-cloud-run`, `azure-cloud-architecture`, `cloudflare-workers-edge`, `nginx-reverse-proxy`, `dns-routing-cdn`, `ssl-tls-certificates`, `git-workflow`, `git-hooks-husky` |
| **7. Security & Auth** | 12 skills | `security-hardener`, `auth-security`, `oauth2-oidc`, `jwt-management`, `penetration-tester`, `data-privacy-compliance`, `secret-management-vault`, `sql-injection-prevention`, `xss-content-security-policy`, `cors-csrf-defense`, `zero-trust-architecture`, `supply-chain-security` |
| **8. QA & Testing** | 14 skills | `test-driven-development`, `e2e-playwright`, `cypress-testing`, `unit-testing-jest-vitest`, `integration-testing`, `mocking-strategy`, `mutation-testing`, `contract-testing-pact`, `snapshot-testing`, `flaky-test-eliminator`, `load-testing-k6`, `fuzz-testing`, `incident-commander`, `chaos-engineering` |
| **9. Performance & Telemetry** | 10 skills | `performance-profiler`, `observability-telemetry`, `distributed-tracing-jaeger`, `prometheus-monitoring`, `promql-grafana-dashboards`, `grafana-dashboards`, `log-aggregation-elk`, `memory-leak-debugger`, `cpu-profiling-flamegraph`, `rate-limiting-throttling` |
| **10. Architecture & Systems** | 10 skills | `system-architect`, `api-design`, `clean-hexagonal-architecture`, `domain-driven-design`, `cqrs-event-sourcing`, `event-driven-architecture`, `microservices-orchestrator`, `serverless-patterns`, `design-patterns-gang-of-four`, `cache-architect` |
| **11. AI, LLM & Tooling** | 24 skills | `llm-prompt-engineer`, `rag-pipeline-architect`, `function-calling-agent-design`, `langchain-langgraph`, `evals-llm-benchmarking`, `vector-embeddings-search`, `model-quantization-serving`, `pytorch-deep-learning`, `data-pipeline-etl`, `pandas-numpy-data-wrangling`, `batch-processing`, `cdc-debezium`, `openapi-swagger-spec`, `sdk-generator`, `monorepo-turborepo`, `package-publisher-npm`, `linting-formatting-biome`, `conventional-changelog`, `readme-documentation-craft`, `documentation-architect`, `i18n-internationalization`, `code-refactoring` |

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
PASS: Repository contains at least 100 skills (Found: 150)
PASS: comment-minimizer skill exists
PASS: All 150 skills verified across all client directories (600 manifests)

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
PASS: Noisy redundant comment detected by heuristic filter
PASS: Clean self-documenting code passes filter
PASS: Non-obvious architectural rationale comment passes filter

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