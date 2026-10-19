---
name: helm-package-manager
description: "Kubernetes Helm charts, values.yaml overrides, templating best practices, and chart versioning."
---

# Helm Package Management Protocol

1. Maintain values.yaml as the single source of configuration truth.
2. Follow semantic versioning strictly in Chart.yaml.
3. Run helm lint and helm template in CI before deployments.
