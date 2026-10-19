---
name: penetration-tester
description: "Application security testing, SAST/DAST vulnerability auditing, dependency CVE scans, and offensive exploit prevention."
---

# Penetration Testing & Vulnerability Audit Protocol

Audit codebases proactively for exploitable vulnerabilities before deployment.

---

## 1. Automated Dependency Audits

1. Run automated dependency vulnerability checks in CI:
   - npm audit --audit-level=high
   - pip-audit or safety check
   - cargo audit
2. Disallow any critical/high severity vulnerabilities from entering production branches.

---

## 2. Offensive Vulnerability Audit Checklist

- **Broken Object Level Authorization (BOLA/IDOR)**:
  Verify whether modifying an ID parameter allows accessing another user's data.
- **Mass Assignment Vulnerabilities**:
  Verify whether submitting unlisted fields (e.g. {"isAdmin": true}) binds to the database model.
- **Rate Limiting & Brute Force**:
  Verify that login, password reset, and OTP endpoints enforce IP-based and user-based throttling.
