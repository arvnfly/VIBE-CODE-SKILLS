---
name: kubernetes-manifest
description: "Production Kubernetes manifests, resource limits and requests, Pod Disruption Budgets, and health probes."
---

# Kubernetes Production Manifest Protocol

Author production-ready Kubernetes resource specifications.

---

## 1. Health Probes Configuration

Every pod must define explicit health probes:
1. **Liveness Probe**: Determines if the container needs a restart.
2. **Readiness Probe**: Determines if the pod is ready to accept user traffic.
3. Avoid placing heavy database checks inside liveness probes (causes cascade restarts during DB latency).

---

## 2. Resource Requests & Limits

1. Always set explicit requests and limits for CPU and memory.
2. Set memory requests equal to memory limits to prevent unexpected out-of-memory container termination.
3. Define PodDisruptionBudgets to ensure high availability during node upgrades.
