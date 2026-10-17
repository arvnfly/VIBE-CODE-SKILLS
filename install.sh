#!/usr/bin/env bash
# vibe-code skills Installer (Linux / macOS)
set -e

DEST="${1:-.}"
echo "==> Installing vibe-code skills to: $DEST"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Required directory hierarchy
mkdir -p "$DEST/.agent/skills" \
         "$DEST/.agent/rules" \
         "$DEST/.claude/skills" \
         "$DEST/.claude/commands" \
         "$DEST/.omp/skills" \
         "$DEST/.omp/commands" \
         "$DEST/.cursor/rules" \
         "$DEST/.aider" \
         "$DEST/.github" \
         "$DEST/skills"

# Root rule & guideline files
root_files=(
  "base-rules.md" "AGENTS.md" "CLAUDE.md" "PI.md"
  "CODEX.md" "GEMINI.md" ".cursorrules" ".windsurfrules"
  ".aider.conf.yml"
)

for f in "${root_files[@]}"; do
  [ -f "$SCRIPT_DIR/$f" ] && cp "$SCRIPT_DIR/$f" "$DEST/"
done

# Copy skills
cp -r "$SCRIPT_DIR/skills/"* "$DEST/skills/" 2>/dev/null || true
cp -r "$SCRIPT_DIR/skills/"* "$DEST/.agent/skills/" 2>/dev/null || true
cp -r "$SCRIPT_DIR/skills/"* "$DEST/.claude/skills/" 2>/dev/null || true
cp -r "$SCRIPT_DIR/skills/"* "$DEST/.omp/skills/" 2>/dev/null || true

# Copy agent-specific rules and commands
[ -f "$SCRIPT_DIR/.agent/rules/base-rules.md" ] && cp "$SCRIPT_DIR/.agent/rules/base-rules.md" "$DEST/.agent/rules/"
[ -d "$SCRIPT_DIR/.claude/commands" ] && cp -r "$SCRIPT_DIR/.claude/commands/"* "$DEST/.claude/commands/" 2>/dev/null || true
[ -d "$SCRIPT_DIR/.omp/commands" ] && cp -r "$SCRIPT_DIR/.omp/commands/"* "$DEST/.omp/commands/" 2>/dev/null || true
[ -f "$SCRIPT_DIR/.cursor/rules/council.mdc" ] && cp "$SCRIPT_DIR/.cursor/rules/council.mdc" "$DEST/.cursor/rules/"
[ -f "$SCRIPT_DIR/.aider/CONVENTIONS.md" ] && cp "$SCRIPT_DIR/.aider/CONVENTIONS.md" "$DEST/.aider/"
[ -f "$SCRIPT_DIR/.github/copilot-instructions.md" ] && cp "$SCRIPT_DIR/.github/copilot-instructions.md" "$DEST/.github/"

echo "==> vibe-code skills installed successfully!"