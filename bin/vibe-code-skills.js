#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const targetDir = process.argv[2] ? path.resolve(process.cwd(), process.argv[2]) : process.cwd();
const rootDir = path.resolve(__dirname, '..');

console.log(`==> Installing vibe-code skills to: ${targetDir}`);

const dirs = [
  path.join(targetDir, '.agent', 'skills'),
  path.join(targetDir, '.agent', 'rules'),
  path.join(targetDir, '.claude', 'skills'),
  path.join(targetDir, '.claude', 'commands'),
  path.join(targetDir, '.omp', 'skills'),
  path.join(targetDir, '.omp', 'commands'),
  path.join(targetDir, '.cursor', 'rules'),
  path.join(targetDir, '.aider'),
  path.join(targetDir, '.github'),
  path.join(targetDir, 'skills')
];

dirs.forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(item => {
      copyRecursive(path.join(src, item), path.join(dest, item));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Root config files
const rootFiles = [
  'base-rules.md', 'AGENTS.md', 'CLAUDE.md', 'PI.md',
  'CODEX.md', 'GEMINI.md', '.cursorrules', '.windsurfrules',
  '.aider.conf.yml'
];

rootFiles.forEach(f => {
  const src = path.join(rootDir, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(targetDir, f));
  }
});

// Copy skills to all target locations
['skills', '.agent/skills', '.claude/skills', '.omp/skills'].forEach(destRel => {
  copyRecursive(path.join(rootDir, 'skills'), path.join(targetDir, destRel));
});

// Specific rules & commands
copyRecursive(path.join(rootDir, '.agent', 'rules', 'base-rules.md'), path.join(targetDir, '.agent', 'rules', 'base-rules.md'));
copyRecursive(path.join(rootDir, '.claude', 'commands'), path.join(targetDir, '.claude', 'commands'));
copyRecursive(path.join(rootDir, '.omp', 'commands'), path.join(targetDir, '.omp', 'commands'));
copyRecursive(path.join(rootDir, '.cursor', 'rules', 'council.mdc'), path.join(targetDir, '.cursor', 'rules', 'council.mdc'));
copyRecursive(path.join(rootDir, '.aider', 'CONVENTIONS.md'), path.join(targetDir, '.aider', 'CONVENTIONS.md'));
copyRecursive(path.join(rootDir, '.github', 'copilot-instructions.md'), path.join(targetDir, '.github', 'copilot-instructions.md'));

console.log('==> vibe-code skills installed successfully!');
