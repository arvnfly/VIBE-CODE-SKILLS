# vibe-code skills Installer (Windows PowerShell)
param (
    [string]$Destination = "."
)

$ErrorActionPreference = "Stop"

Write-Host "==> Installing vibe-code skills to: $Destination" -ForegroundColor Cyan

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# Required directory hierarchy
$dirs = @(
    "$Destination\.agent\skills",
    "$Destination\.agent\rules",
    "$Destination\.claude\skills",
    "$Destination\.claude\commands",
    "$Destination\.omp\skills",
    "$Destination\.omp\commands",
    "$Destination\.cursor\rules",
    "$Destination\.aider",
    "$Destination\.github",
    "$Destination\skills"
)

foreach ($d in $dirs) {
    if (-not (Test-Path $d)) {
        New-Item -ItemType Directory -Path $d -Force | Out-Null
    }
}

# Root rule & guideline files
$rootFiles = @(
    "base-rules.md", "AGENTS.md", "CLAUDE.md", "PI.md",
    "CODEX.md", "GEMINI.md", ".cursorrules", ".windsurfrules",
    ".aider.conf.yml"
)

foreach ($f in $rootFiles) {
    if (Test-Path "$ScriptDir\$f") {
        Copy-Item "$ScriptDir\$f" -Destination "$Destination\" -Force
    }
}

# Copy skills to all target directories
$skillDirs = @(
    "$Destination\skills",
    "$Destination\.agent\skills",
    "$Destination\.claude\skills",
    "$Destination\.omp\skills"
)

foreach ($target in $skillDirs) {
    Copy-Item "$ScriptDir\skills\*" -Destination $target -Recurse -Force
}

# Copy agent-specific rules and commands
if (Test-Path "$ScriptDir\.agent\rules\base-rules.md") {
    Copy-Item "$ScriptDir\.agent\rules\base-rules.md" -Destination "$Destination\.agent\rules\" -Force
}

if (Test-Path "$ScriptDir\.claude\commands") {
    Copy-Item "$ScriptDir\.claude\commands\*" -Destination "$Destination\.claude\commands\" -Recurse -Force
}

if (Test-Path "$ScriptDir\.omp\commands") {
    Copy-Item "$ScriptDir\.omp\commands\*" -Destination "$Destination\.omp\commands\" -Recurse -Force
}

if (Test-Path "$ScriptDir\.cursor\rules\council.mdc") {
    Copy-Item "$ScriptDir\.cursor\rules\council.mdc" -Destination "$Destination\.cursor\rules\" -Force
}

if (Test-Path "$ScriptDir\.aider\CONVENTIONS.md") {
    Copy-Item "$ScriptDir\.aider\CONVENTIONS.md" -Destination "$Destination\.aider\" -Force
}

if (Test-Path "$ScriptDir\.github\copilot-instructions.md") {
    Copy-Item "$ScriptDir\.github\copilot-instructions.md" -Destination "$Destination\.github\" -Force
}

Write-Host "==> vibe-code skills installed successfully!" -ForegroundColor Green