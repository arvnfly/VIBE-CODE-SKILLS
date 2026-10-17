#!/usr/bin/env bash
# vibe-code skills Installer (Linux / macOS)
set -e

DEST="${1:-.}"
echo "==> Installing vibe-code skills to: $DEST"

mkdir -p "$DEST/.agent/skills" "$DEST/.claude/skills" "$DEST/.claude/commands" "$DEST/.omp/skills" "$DEST/.omp/commands" "$DEST/.cursor/rules"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Copy base rules & entrypoints
cp "$SCRIPT_DIR/base-rules.md" "$DEST/"
cp "$SCRIPT_DIR/AGENTS.md" "$DEST/"
cp "$SCRIPT_DIR/CLAUDE.md" "$DEST/"
cp "$SCRIPT_DIR/PI.md" "$DEST/"
cp "$SCRIPT_DIR/CODEX.md" "$DEST/"
cp "$SCRIPT_DIR/GEMINI.md" "$DEST/"
cp "$SCRIPT_DIR/.cursorrules" "$DEST/"
cp "$SCRIPT_DIR/.windsurfrules" "$DEST/"

# Copy skills
cp -r "$SCRIPT_DIR/skills/"* "$DEST/.agent/skills/" 2>/dev/null || true
cp -r "$SCRIPT_DIR/skills/"* "$DEST/.claude/skills/" 2>/dev/null || true
cp -r "$SCRIPT_DIR/skills/"* "$DEST/.omp/skills/" 2>/dev/null || true
cp -r "$SCRIPT_DIR/skills" "$DEST/"

# Copy commands & rules
cp -r "$SCRIPT_DIR/.claude/commands/"* "$DEST/.claude/commands/" 2>/dev/null || true
cp -r "$SCRIPT_DIR/.omp/commands/"* "$DEST/.omp/commands/" 2>/dev/null || true
cp "$SCRIPT_DIR/.cursor/rules/council.mdc" "$DEST/.cursor/rules/" 2>/dev/null || true

echo "==> vibe-code skills installed successfully!"