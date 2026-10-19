---
name: xss-content-security-policy
description: "Cross-Site Scripting (XSS) defense, context-aware HTML escaping, and strict Content Security Policies (CSP)."
---

# XSS Defense & CSP Protocol

1. Sanitize all dynamic HTML using DOMPurify before DOM insertion.
2. Never use dangerouslySetInnerHTML or v-html without sanitization.
3. Deploy a strict Content Security Policy disabling unsafe-inline and unsafe-eval.
