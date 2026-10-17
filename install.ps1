# vibe-code skills Installer (Windows PowerShell)
param (
    [string]$Destination = "."
)

$ErrorActionPreference = "Stop"
Write-Host "==> Installing vibe-code skills to: $Destination" -ForegroundColor Cyan

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

$dirs = @(
    "$Destination\.agent\skills",
    "$Destination\.claude\skills",
    "$Destination\.claude\commands",
    "$Destination\.omp\skills",
    "$Destination\.omp\commands",
    "$Destination\.cursor\rules"
)

foreach ($d in $dirs) {
    if (-not (Test-Path $d)) { New-Item -ItemType Directory -Path $d -Force | Out-Null }
}

$rootFiles = @(
    "base-rules.md", "AGENTS.md", "CLAUDE.md", "PI.md",
    "CODEX.md", "GEMINI.md", ".cursorrules", ".windsurfrules"
)

foreach ($f in $rootFiles) {
    Copy-Item "$ScriptDir\$f" -Destination "$Destination\" -Force
}

Copy-Item "$ScriptDir\skills\*" -Destination "$Destination\.agent\skills\" -Recurse -Force
Copy-Item "$ScriptDir\skills\*" -Destination "$Destination\.claude\skills\" -Recurse -Force
Copy-Item "$ScriptDir\skills\*" -Destination "$Destination\.omp\skills\" -Recurse -Force
Copy-Item "$ScriptDir\skills" -Destination "$Destination\" -Recurse -Force

Copy-Item "$ScriptDir\.claude\commands\*" -Destination "$Destination\.claude\commands\" -Recurse -Force
Copy-Item "$ScriptDir\.omp\commands\*" -Destination "$Destination\.omp\commands\" -Recurse -Force
Copy-Item "$ScriptDir\.cursor\rules\council.mdc" -Destination "$Destination\.cursor\rules\" -Force

Write-Host "==> vibe-code skills installed successfully!" -ForegroundColor Green