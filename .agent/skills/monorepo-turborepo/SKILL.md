---
name: monorepo-turborepo
description: "Monorepo architecture with Turborepo/Nx, workspace package dependency graph, and remote pipeline caching."
---

# Monorepo (Turborepo) Protocol

1. Declare pipeline task dependencies in turbo.json with explicit inputs and outputs.
2. Share internal packages via npm workspaces without building intermediate bundles.
3. Enable remote caching in CI for instant build replays.
