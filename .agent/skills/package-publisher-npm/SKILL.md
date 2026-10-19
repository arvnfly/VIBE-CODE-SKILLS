---
name: package-publisher-npm
description: "NPM package publishing, semantic versioning, exports field mapping (ESM/CJS), and provenance attestations."
---

# NPM Package Publishing Protocol

1. Configure package.json "exports" for modern dual ESM/CommonJS distribution.
2. Enforce provenance attestations via GitHub Actions publishing.
3. Maintain clean "files" whitelist to exclude internal test files and source maps.
