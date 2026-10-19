#!/usr/bin/env node

/**
 * VIBE-CODE SKILLS - Universal Multi-Agent CLI
 * Standardized Multi-Agent Protocols & Skills for AI Coding Agents
 * License: MIT
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const pkgPath = path.join(rootDir, 'package.json');
const pkg = fs.existsSync(pkgPath) ? JSON.parse(fs.readFileSync(pkgPath, 'utf8')) : { version: '1.0.0' };

// ANSI Color Helpers (Zero External Dependencies)
const useColor = !process.env.NO_COLOR && process.stdout.isTTY;
const c = {
  reset: useColor ? '\x1b[0m' : '',
  bold: useColor ? '\x1b[1m' : '',
  dim: useColor ? '\x1b[2m' : '',
  cyan: useColor ? '\x1b[36m' : '',
  green: useColor ? '\x1b[32m' : '',
  yellow: useColor ? '\x1b[33m' : '',
  red: useColor ? '\x1b[31m' : '',
  blue: useColor ? '\x1b[34m' : '',
  magenta: useColor ? '\x1b[35m' : ''
};

// Supported AI Agents Specification
const CLIENTS = {
  antigravity: {
    name: 'Google Antigravity',
    detect: (dir) => fs.existsSync(path.join(dir, '.agent')) || fs.existsSync(path.join(dir, 'AGENTS.md')),
    files: [
      { src: 'AGENTS.md', dest: 'AGENTS.md' },
      { src: 'base-rules.md', dest: 'base-rules.md' },
      { src: path.join('.agent', 'rules', 'base-rules.md'), dest: path.join('.agent', 'rules', 'base-rules.md') }
    ],
    skillsDir: path.join('.agent', 'skills')
  },
  claude: {
    name: 'Claude Code',
    detect: (dir) => fs.existsSync(path.join(dir, '.claude')) || fs.existsSync(path.join(dir, 'CLAUDE.md')),
    files: [
      { src: 'CLAUDE.md', dest: 'CLAUDE.md' },
      { src: path.join('.claude', 'commands'), dest: path.join('.claude', 'commands'), isDir: true }
    ],
    skillsDir: path.join('.claude', 'skills')
  },
  cursor: {
    name: 'Cursor',
    detect: (dir) => fs.existsSync(path.join(dir, '.cursor')) || fs.existsSync(path.join(dir, '.cursorrules')),
    files: [
      { src: '.cursorrules', dest: '.cursorrules' },
      { src: path.join('.cursor', 'rules', 'council.mdc'), dest: path.join('.cursor', 'rules', 'council.mdc') }
    ],
    skillsDir: null
  },
  windsurf: {
    name: 'Windsurf',
    detect: (dir) => fs.existsSync(path.join(dir, '.windsurfrules')),
    files: [
      { src: '.windsurfrules', dest: '.windsurfrules' }
    ],
    skillsDir: null
  },
  codex: {
    name: 'OpenAI Codex',
    detect: (dir) => fs.existsSync(path.join(dir, 'CODEX.md')) || fs.existsSync(path.join(dir, '.codex-plugin')),
    files: [
      { src: 'CODEX.md', dest: 'CODEX.md' }
    ],
    skillsDir: null
  },
  omp: {
    name: 'Oh My Pi (omp)',
    detect: (dir) => fs.existsSync(path.join(dir, '.omp')) || fs.existsSync(path.join(dir, 'PI.md')),
    files: [
      { src: 'PI.md', dest: 'PI.md' },
      { src: path.join('.omp', 'commands'), dest: path.join('.omp', 'commands'), isDir: true }
    ],
    skillsDir: path.join('.omp', 'skills')
  },
  gemini: {
    name: 'Gemini CLI',
    detect: (dir) => fs.existsSync(path.join(dir, 'GEMINI.md')) || fs.existsSync(path.join(dir, 'gemini-extension.json')),
    files: [
      { src: 'GEMINI.md', dest: 'GEMINI.md' }
    ],
    skillsDir: null
  },
  aider: {
    name: 'Aider',
    detect: (dir) => fs.existsSync(path.join(dir, '.aider.conf.yml')) || fs.existsSync(path.join(dir, '.aider')),
    files: [
      { src: '.aider.conf.yml', dest: '.aider.conf.yml' },
      { src: path.join('.aider', 'CONVENTIONS.md'), dest: path.join('.aider', 'CONVENTIONS.md') }
    ],
    skillsDir: null
  },
  copilot: {
    name: 'GitHub Copilot',
    detect: (dir) => fs.existsSync(path.join(dir, '.github', 'copilot-instructions.md')),
    files: [
      { src: path.join('.github', 'copilot-instructions.md'), dest: path.join('.github', 'copilot-instructions.md') }
    ],
    skillsDir: null
  }
};

const CORE_SKILLS = [
  // Pillar 1: Multi-Agent Orchestration & Process
  { name: 'subagent-council', desc: 'Pre-execution gate (Mode 1) & post-execution audit (Mode 2)' },
  { name: 'subagent-helper', desc: 'Isolated worker protocols for read-only symbol map and reproduction tests' },
  { name: 'subagent-driven-development', desc: 'Sequential isolated subagents with review gates' },
  { name: 'verification-before-completion', desc: 'Evidence barrier requiring terminal execution with exit code 0' },
  
  // Pillar 2: Architecture & System Design
  { name: 'system-architect', desc: 'High-level system design, DDD boundaries, C4 models, and ADR records' },
  { name: 'api-design', desc: 'Standards for RESTful APIs, RFC 7807 error details, pagination, and schema contracts' },
  { name: 'database-architect', desc: 'Schema modeling, zero-downtime migrations, composite index ordering, and ACID transactions' },
  { name: 'microservices-orchestrator', desc: 'Event-driven architecture, distributed sagas, outbox pattern, and DLQs' },

  // Pillar 3: Frontend & User Interface
  { name: 'ui-ux', desc: 'Design intelligence engine (8pt grid, 60-30-10 palette, WCAG AA audits)' },
  { name: 'accessibility-a11y', desc: 'Web accessibility, ARIA role mapping, focus traps, and WCAG 2.2 AA/AAA' },
  { name: 'css-architect', desc: 'Maintainable CSS, container queries, fluid tokens, and layout shift prevention' },
  { name: 'state-management', desc: 'Client-side state, normalized stores, selector memoization, and race condition prevention' },

  // Pillar 4: Diagnostics & Reliability
  { name: 'systematic-debugging', desc: '4-phase root cause investigation protocol (Reproduce > Trace > Hypothesize > Fix)' },
  { name: 'performance-profiler', desc: 'Core Web Vitals (LCP, INP, CLS), memory leak diagnostics, and caching' },
  { name: 'incident-commander', desc: 'Production incident triage, severity assessment, and blameless post-mortems' },
  { name: 'chaos-engineering', desc: 'Resilience engineering, circuit breakers, and graceful degradation' },

  // Pillar 5: Security & Compliance
  { name: 'security-hardener', desc: 'OWASP Top 10 defense, zero secret leakage, timing-safe crypto, and SSRF/CSRF mitigation' },
  { name: 'auth-security', desc: 'JWT lifecycle, OAuth 2.1 / OIDC flows, PKCE, and RBAC/ABAC authorization' },
  { name: 'penetration-tester', desc: 'Security testing, SAST/DAST audits, CVE scans, and offensive exploit prevention' },
  { name: 'data-privacy-compliance', desc: 'GDPR/CCPA PII handling, data sanitization, and immutable audit logs' },

  // Pillar 6: Quality Assurance & Testing
  { name: 'test-driven-development', desc: 'TDD cycle (Red-Green-Refactor), test isolation, and behavioral assertion' },
  { name: 'e2e-playwright', desc: 'End-to-end browser automation with Playwright and accessible locators' },
  { name: 'mocking-strategy', desc: 'In-memory fakes, Mock Service Worker (MSW), and preventing mock drift' },
  { name: 'mutation-testing', desc: 'Mutation testing protocols, mutant survival analysis, and killing false-positives' },

  // Pillar 7: DevOps, CI/CD & Containers
  { name: 'git-workflow', desc: 'Atomic commits, Conventional Commits formatting, linear rebase, and PR hygiene' },
  { name: 'docker-optimizer', desc: 'Multi-stage Docker builds, minimal non-root packaging, and layer caching' },
  { name: 'ci-cd-pipeline', desc: 'CI/CD pipeline architecture, matrix builds, automated gates, and rollback triggers' },
  { name: 'kubernetes-manifest', desc: 'Production K8s manifests, resource limits/requests, PDBs, and health probes' },

  // Pillar 8: Data Engineering & Observability
  { name: 'observability-telemetry', desc: 'Structured JSON logging, OpenTelemetry distributed tracing, and Prometheus metrics' },
  { name: 'cache-architect', desc: 'Redis architectural patterns, cache-aside, and cache stampede prevention (XFetch)' },
  { name: 'documentation-architect', desc: 'Technical documentation architecture, the Diataxis framework, and runnable snippets' },
  { name: 'code-refactoring', desc: 'Martin Fowler refactoring catalog, cyclomatic complexity reduction, and boy scout rule' }
];

// File Utility Helpers
function ensureDir(dirPath, dryRun = false) {
  if (!fs.existsSync(dirPath)) {
    if (!dryRun) fs.mkdirSync(dirPath, { recursive: true });
    return true;
  }
  return false;
}

function copyFileSafe(src, dest, dryRun = false) {
  if (!fs.existsSync(src)) return false;
  ensureDir(path.dirname(dest), dryRun);
  if (!dryRun) {
    fs.copyFileSync(src, dest);
  }
  return true;
}

function copyDirRecursive(src, dest, dryRun = false) {
  if (!fs.existsSync(src)) return 0;
  let count = 0;
  ensureDir(dest, dryRun);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      count += copyDirRecursive(srcPath, destPath, dryRun);
    } else {
      if (!dryRun) fs.copyFileSync(srcPath, destPath);
      count++;
    }
  }
  return count;
}

// Banner Printer
function printBanner() {
  console.log(`${c.cyan}${c.bold}======================================================${c.reset}`);
  console.log(`${c.cyan}${c.bold}  VIBE-CODE SKILLS CLI v${pkg.version}${c.reset}`);
  console.log(`${c.dim}  Standardized Multi-Agent Protocols & Skills${c.reset}`);
  console.log(`${c.cyan}${c.bold}======================================================${c.reset}\n`);
}

// Help Manual
function printHelp() {
  printBanner();
  console.log(`${c.bold}USAGE:${c.reset}`);
  console.log(`  npx vibe-code-skills [command] [targetDir] [options]`);
  console.log(`  vibe-code-skills [command] [targetDir] [options]\n`);

  console.log(`${c.bold}COMMANDS:${c.reset}`);
  console.log(`  ${c.green}install${c.reset} [dir]     Install skills and platform rules into target project (default)`);
  console.log(`  ${c.green}doctor${c.reset} [dir]      Analyze project, detect active agents, and audit skills health`);
  console.log(`  ${c.green}verify${c.reset}            Run multi-agent test and simulation suites`);
  console.log(`  ${c.green}list${c.reset}              List all core skills and supported AI agent platforms`);
  console.log(`  ${c.green}uninstall${c.reset} [dir]   Remove vibe-code skill configs safely from project\n`);

  console.log(`${c.bold}OPTIONS:${c.reset}`);
  console.log(`  ${c.cyan}--client=<name>${c.reset}   Filter installation to a specific client:`);
  console.log(`                    all, antigravity, claude, cursor, codex,`);
  console.log(`                    windsurf, omp, gemini, aider, copilot (default: all)`);
  console.log(`  ${c.cyan}--dry-run${c.reset}         Simulate file operations without modifying disk`);
  console.log(`  ${c.cyan}--backup${c.reset}          Create timestamped backup before overwriting files`);
  console.log(`  ${c.cyan}--force${c.reset}           Bypass warnings and prompts`);
  console.log(`  ${c.cyan}-v, --version${c.reset}     Show current version`);
  console.log(`  ${c.cyan}-h, --help${c.reset}        Show this manual\n`);

  console.log(`${c.bold}EXAMPLES:${c.reset}`);
  console.log(`  npx vibe-code-skills`);
  console.log(`  npx vibe-code-skills install ./my-project`);
  console.log(`  npx vibe-code-skills install ./my-project --client=cursor`);
  console.log(`  npx vibe-code-skills doctor ./my-project`);
  console.log(`  npx vibe-code-skills verify\n`);
}

// Command: Install
function runInstall(targetDir, options) {
  printBanner();
  console.log(`[*] Target directory: ${c.bold}${targetDir}${c.reset}`);
  if (options.dryRun) {
    console.log(`${c.yellow}[!] Running in DRY-RUN mode. No files will be written.${c.reset}`);
  }

  // Detect active agents in target project
  const detectedClients = [];
  for (const [key, client] of Object.entries(CLIENTS)) {
    if (client.detect(targetDir)) {
      detectedClients.push(client.name);
    }
  }

  if (detectedClients.length > 0) {
    console.log(`[+] Detected active agent environments in project: ${c.green}${detectedClients.join(', ')}${c.reset}`);
  } else {
    console.log(`[i] No existing agent configuration detected. Preparing universal configuration.`);
  }

  // Backup existing files if requested
  if (options.backup && !options.dryRun && fs.existsSync(targetDir)) {
    const backupDir = path.join(targetDir, `.vibe-code-backup-${Date.now()}`);
    console.log(`[*] Creating backup at: ${backupDir}`);
    // Only backup files that match our clients
    for (const client of Object.values(CLIENTS)) {
      for (const f of client.files) {
        const dest = path.join(targetDir, f.dest);
        if (fs.existsSync(dest)) {
          const bkpDest = path.join(backupDir, f.dest);
          if (f.isDir) copyDirRecursive(dest, bkpDest);
          else copyFileSafe(dest, bkpDest);
        }
      }
    }
    console.log(`[OK] Backup completed.`);
  }

  console.log(`\n--- Deploying VIBE-CODE Skills & Rules ---`);
  let deployedFiles = 0;

  // 1. Deploy universal skills to root skills/ directory
  const rootSkillsSrc = path.join(rootDir, 'skills');
  const rootSkillsDest = path.join(targetDir, 'skills');
  if (fs.existsSync(rootSkillsSrc)) {
    const count = copyDirRecursive(rootSkillsSrc, rootSkillsDest, options.dryRun);
    deployedFiles += count;
    console.log(`[OK] Deployed open skills to ${c.bold}skills/${c.reset} (${count} files)`);
  }

  // 2. Deploy platform-specific files and skills directories
  const targetClients = options.client === 'all'
    ? Object.entries(CLIENTS)
    : Object.entries(CLIENTS).filter(([k]) => k.toLowerCase() === options.client.toLowerCase());

  if (targetClients.length === 0) {
    console.error(`${c.red}[FAIL] Unknown client '${options.client}'. Run with --help to see supported clients.${c.reset}`);
    process.exit(1);
  }

  for (const [key, client] of targetClients) {
    // Copy client rule/instruction files
    for (const f of client.files) {
      const src = path.join(rootDir, f.src);
      const dest = path.join(targetDir, f.dest);
      if (fs.existsSync(src)) {
        if (f.isDir) {
          deployedFiles += copyDirRecursive(src, dest, options.dryRun);
        } else {
          if (copyFileSafe(src, dest, options.dryRun)) deployedFiles++;
        }
      }
    }

    // Copy skills to client-specific skill directory if applicable
    if (client.skillsDir && fs.existsSync(rootSkillsSrc)) {
      const destSkillDir = path.join(targetDir, client.skillsDir);
      deployedFiles += copyDirRecursive(rootSkillsSrc, destSkillDir, options.dryRun);
    }

    console.log(`[OK] Configured ${client.name} rules & integrations`);
  }

  console.log(`\n${c.green}${c.bold}[SUCCESS] vibe-code skills installation finished! (${deployedFiles} files processed)${c.reset}`);
  console.log(`[i] Run ${c.cyan}npx vibe-code-skills doctor${c.reset} anytime to audit skill health.\n`);
}

// Command: Doctor (Health & Diagnostic Audit)
function runDoctor(targetDir) {
  printBanner();
  console.log(`[*] Auditing project at: ${c.bold}${targetDir}${c.reset}\n`);

  let issues = 0;

  console.log(`${c.bold}1. Core Skills Audit:${c.reset}`);
  const skillsDir = path.join(targetDir, 'skills');
  if (!fs.existsSync(skillsDir)) {
    console.log(`  ${c.red}[FAIL] Root skills/ directory not found.${c.reset}`);
    issues++;
  } else {
    for (const skill of CORE_SKILLS) {
      const skillFile = path.join(skillsDir, skill.name, 'SKILL.md');
      if (!fs.existsSync(skillFile)) {
        console.log(`  ${c.red}[FAIL] Missing skill: ${skill.name}${c.reset}`);
        issues++;
      } else {
        const content = fs.readFileSync(skillFile, 'utf8');
        const hasFrontmatter = content.includes(`name: ${skill.name}`) && content.includes('description:');
        if (hasFrontmatter) {
          console.log(`  ${c.green}[OK]   ${skill.name}${c.reset} - Frontmatter valid`);
        } else {
          console.log(`  ${c.yellow}[WARN] ${skill.name}${c.reset} - Missing valid frontmatter`);
          issues++;
        }
      }
    }
  }

  console.log(`\n${c.bold}2. Agent Environment Integrations:${c.reset}`);
  for (const [key, client] of Object.entries(CLIENTS)) {
    const isDetected = client.detect(targetDir);
    let rulesExist = true;
    for (const f of client.files) {
      if (!fs.existsSync(path.join(targetDir, f.dest))) {
        rulesExist = false;
        break;
      }
    }

    if (rulesExist) {
      console.log(`  ${c.green}[OK]   ${client.name}${c.reset}: Configured`);
    } else if (isDetected) {
      console.log(`  ${c.yellow}[WARN] ${client.name}${c.reset}: Workspace detected, but some rules are missing`);
    } else {
      console.log(`  ${c.dim}[--]   ${client.name}: Not configured${c.reset}`);
    }
  }

  console.log(`\n======================================================`);
  if (issues > 0) {
    console.log(`${c.yellow}[!] Doctor found ${issues} issue(s). Run 'vibe-code-skills install' to fix.${c.reset}\n`);
    process.exit(1);
  } else {
    console.log(`${c.green}[OK] All audited skills and contracts are healthy!${c.reset}\n`);
  }
}

// Command: List
function runList() {
  printBanner();
  console.log(`${c.bold}Available Core Skills (${CORE_SKILLS.length}):${c.reset}`);
  CORE_SKILLS.forEach((s, idx) => {
    console.log(`  ${idx + 1}. ${c.green}${c.bold}${s.name}${c.reset}`);
    console.log(`     ${c.dim}${s.desc}${c.reset}`);
  });

  console.log(`\n${c.bold}Supported AI Agents (9):${c.reset}`);
  Object.values(CLIENTS).forEach((cItem, idx) => {
    console.log(`  ${idx + 1}. ${c.cyan}${c.bold}${cItem.name}${c.reset}`);
    const files = cItem.files.map(f => f.dest).join(', ');
    console.log(`     Files: ${c.dim}${files}${c.reset}`);
    if (cItem.skillsDir) {
      console.log(`     Skills Dir: ${c.dim}${cItem.skillsDir}${c.reset}`);
    }
  });
  console.log('');
}

// Command: Verify
function runVerify() {
  printBanner();
  console.log(`[*] Running local validation and simulation test suite...\n`);
  try {
    const validateScript = path.join(rootDir, 'test', 'validate.js');
    const simulateScript = path.join(rootDir, 'test', 'simulate-agent.js');

    execSync(`node "${validateScript}"`, { stdio: 'inherit' });
    execSync(`node "${simulateScript}"`, { stdio: 'inherit' });

    console.log(`\n${c.green}[OK] All verification and agent contract suites passed with exit code 0.${c.reset}\n`);
  } catch (err) {
    console.error(`\n${c.red}[FAIL] Verification failed.${c.reset}\n`);
    process.exit(1);
  }
}

// Command: Uninstall
function runUninstall(targetDir) {
  printBanner();
  console.log(`[*] Removing vibe-code skills from: ${c.bold}${targetDir}${c.reset}`);

  let removedCount = 0;

  // Remove root skills folder if created by us
  const rootSkills = path.join(targetDir, 'skills');
  if (fs.existsSync(rootSkills)) {
    fs.rmSync(rootSkills, { recursive: true, force: true });
    console.log(`[OK] Removed ${c.bold}skills/${c.reset}`);
    removedCount++;
  }

  // Remove client rules
  for (const client of Object.values(CLIENTS)) {
    for (const f of client.files) {
      const dest = path.join(targetDir, f.dest);
      if (fs.existsSync(dest)) {
        if (f.isDir) {
          fs.rmSync(dest, { recursive: true, force: true });
        } else {
          fs.unlinkSync(dest);
        }
        console.log(`[OK] Removed ${f.dest}`);
        removedCount++;
      }
    }
    if (client.skillsDir) {
      const cSkills = path.join(targetDir, client.skillsDir);
      if (fs.existsSync(cSkills)) {
        fs.rmSync(cSkills, { recursive: true, force: true });
        console.log(`[OK] Removed ${client.skillsDir}`);
        removedCount++;
      }
    }
  }

  console.log(`\n${c.green}[SUCCESS] VIBE-CODE Skills uninstalled cleanly (${removedCount} items removed).${c.reset}\n`);
}

// CLI Argument Parser & Dispatcher
function main() {
  const rawArgs = process.argv.slice(2);

  // Flags parsing
  let command = null;
  let targetDir = null;
  const options = {
    client: 'all',
    dryRun: false,
    backup: false,
    force: false
  };

  const KNOWN_COMMANDS = ['install', 'doctor', 'list', 'verify', 'uninstall'];

  for (const arg of rawArgs) {
    if (arg === '-h' || arg === '--help' || arg === 'help') {
      printHelp();
      return;
    }
    if (arg === '-v' || arg === '--version' || arg === 'version') {
      console.log(`vibe-code-skills v${pkg.version}`);
      return;
    }
    if (arg === '--dry-run') {
      options.dryRun = true;
      continue;
    }
    if (arg === '--backup') {
      options.backup = true;
      continue;
    }
    if (arg === '--force') {
      options.force = true;
      continue;
    }
    if (arg.startsWith('--client=')) {
      options.client = arg.split('=')[1];
      continue;
    }

    // Positional arguments
    if (!command && KNOWN_COMMANDS.includes(arg)) {
      command = arg;
    } else if (!targetDir && !arg.startsWith('-')) {
      targetDir = arg;
    }
  }

  // Fallback defaults
  if (!command) {
    command = 'install';
  }

  targetDir = targetDir ? path.resolve(process.cwd(), targetDir) : process.cwd();

  switch (command) {
    case 'install':
      runInstall(targetDir, options);
      break;
    case 'doctor':
      runDoctor(targetDir);
      break;
    case 'list':
      runList();
      break;
    case 'verify':
      runVerify();
      break;
    case 'uninstall':
      runUninstall(targetDir);
      break;
    default:
      printHelp();
      break;
  }
}

main();
