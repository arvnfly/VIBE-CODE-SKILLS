const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
let errors = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    errors++;
  } else {
    console.log(`PASS: ${message}`);
  }
}

console.log('--- 1. Validating JSON Manifests ---');
const jsonFiles = [
  'package.json',
  'gemini-extension.json',
  '.antigravity-plugin/plugin.json',
  '.claude-plugin/plugin.json',
  '.codex-plugin/plugin.json',
  '.cursor-plugin/plugin.json',
  '.omp/plugin.json'
];

jsonFiles.forEach(file => {
  const filePath = path.join(ROOT, file);
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    JSON.parse(content);
    assert(true, `${file} is valid JSON`);
  } catch (err) {
    assert(false, `${file} failed JSON parsing: ${err.message}`);
  }
});

console.log('\n--- 2. Validating Platform Entrypoints & Root Files ---');
const rootFiles = [
  'base-rules.md',
  'AGENTS.md',
  'CLAUDE.md',
  'CODEX.md',
  'GEMINI.md',
  'PI.md',
  '.cursorrules',
  '.windsurfrules',
  '.aider.conf.yml',
  '.aider/CONVENTIONS.md',
  '.github/copilot-instructions.md',
  '.github/assets/banner.svg',
  '.github/workflows/ci.yml',
  '.github/workflows/publish.yml',
  'bin/vibe-code-skills.js',
  'install.sh',
  'install.ps1',
  'README.md',
  'LICENSE',
  'test/validate.js',
  'test/simulate-agent.js'
];

rootFiles.forEach(file => {
  const filePath = path.join(ROOT, file);
  assert(fs.existsSync(filePath), `Root file exists: ${file}`);
});

console.log('\n--- 2b. Validating Concrete Walkthrough Examples ---');
const exampleFiles = [
  'examples/01-full-stack-task/task.md',
  'examples/01-full-stack-task/council-review.md',
  'examples/02-ui-ux-refactor/before-and-after.md',
  'examples/03-systematic-debugging/investigation-report.md'
];

exampleFiles.forEach(file => {
  const filePath = path.join(ROOT, file);
  assert(fs.existsSync(filePath), `Example artifact exists: ${file}`);
});

console.log('\n--- 3. Validating Core Skills Structure & Frontmatter ---');
const skills = [
  'subagent-council',
  'subagent-helper',
  'subagent-driven-development',
  'systematic-debugging',
  'verification-before-completion',
  'ui-ux'
];

const targetDirs = ['skills', '.agent/skills', '.claude/skills', '.omp/skills'];

targetDirs.forEach(dir => {
  skills.forEach(skill => {
    const skillPath = path.join(ROOT, dir, skill, 'SKILL.md');
    const exists = fs.existsSync(skillPath);
    assert(exists, `${dir}/${skill}/SKILL.md exists`);
    if (exists) {
      const content = fs.readFileSync(skillPath, 'utf8');
      const hasName = content.includes(`name: ${skill}`);
      const hasDescription = content.includes('description:');
      assert(hasName, `${dir}/${skill}/SKILL.md has matching name`);
      assert(hasDescription, `${dir}/${skill}/SKILL.md has description`);
    }
  });
});

console.log('\n--- 4. Checking Clean Universal English ---');
const forbiddenPattern = /\b(dan|atau|adalah|yang|untuk|dengan|pada|wajib|jangan|tugas|rencana|tahap|akar|bukti|laporan)\b/i;

function checkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      checkDir(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.json') || entry.name.endsWith('.mdc'))) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const match = content.match(forbiddenPattern);
      if (match) {
        assert(false, `Found non-universal term '${match[0]}' in ${path.relative(ROOT, fullPath)}`);
      }
    }
  }
}

checkDir(ROOT);
assert(true, 'All content verified for universal English language');

if (errors > 0) {
  console.error(`\nValidation failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('\nAll checks passed! Repository is 100% valid and verified.');
}
