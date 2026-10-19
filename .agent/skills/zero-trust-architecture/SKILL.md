---
name: zero-trust-architecture
description: "Zero-trust networking, service-to-service mutual TLS (mTLS), SPIFFE/SPIRE identity, and network policies."
---

# Zero Trust Architecture Protocol

1. Assume the perimeter is breached; verify every connection explicitly.
2. Issue cryptographic identities to workloads using SPIFFE/SPIRE.
3. Enforce default-deny Kubernetes NetworkPolicies.
