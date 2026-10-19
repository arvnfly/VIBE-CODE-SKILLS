---
name: supply-chain-security
description: "Software supply chain security, Software Bill of Materials (SBOM), dependency provenance, and lockfile integrity."
---

# Supply Chain Security Protocol

1. Commit exact lockfiles (package-lock.json, poetry.lock) to git.
2. Generate SBOMs (SPDX/CycloneDX) during container builds.
3. Scan dependencies for known CVEs on every build.
