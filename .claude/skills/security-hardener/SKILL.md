---
name: security-hardener
description: "Universal security guardrails for OWASP Top 10 defense, zero secret leakage, timing-safe cryptographic comparisons, SSRF/CSRF mitigation, and least privilege auth."
---

# Security Hardening & Zero-Leak Protocol

When writing code, configuring servers, or evaluating architecture, enforce these security defenses unconditionally.

---

## 1. Zero Secret Leakage Guard

1. **Pre-Commit Secret Scanning**:
   - Never commit API keys, private certificates, database credentials, or access tokens to git history.
   - Guard against patterns:
     - `ghp_[a-zA-Z0-9]{36}` (GitHub Personal Access Tokens)
     - `sk_live_[a-zA-Z0-9]{24,}` (Stripe Live Secret Keys)
     - `AKIA[0-9A-Z]{16}` (AWS Access Key ID)
     - `-----BEGIN PRIVATE KEY-----` (RSA/ECDSA private keys)
2. **Environment Variable Ingestion**:
   - Load secrets exclusively via environment variables (`process.env.SECRET_KEY`, `os.environ["SECRET_KEY"]`).
   - Validate presence on application boot and crash immediately if required secrets are missing.
   - Redact secrets from terminal logs, telemetry, and error stack traces.

---

## 2. Injection Defense (SQL, NoSQL, Command)

1. **Parameterised Queries Always**:
   - Never concatenate raw strings or template literals into SQL statements:
     ```javascript
     // Safe: Parameterised bindings
     db.query('SELECT * FROM users WHERE email = $1', [email]);
     ```
2. **Command Injection Prevention**:
   - Avoid executing arbitrary shell commands with user inputs (`child_process.exec`). Use argument array methods (`child_process.execFile` or `spawn`) without shell invocation.

---

## 3. Cryptographic Discipline & Timing Attack Defense

1. **Constant-Time String Comparison**:
   - For all security-sensitive tokens, signatures, and hashes, never use standard equality (`===` or `==`).
   - Always use constant-time comparisons:
     ```javascript
     const crypto = require('crypto');
     const isValid = crypto.timingSafeEqual(
       Buffer.from(providedSignature),
       Buffer.from(expectedSignature)
     );
     ```
2. **Secure Password Hashing**:
   - Never use SHA-256 or MD5 for password storage. Use adaptive key derivation algorithms: Argon2id (preferred), bcrypt (work factor >= 12), or PBKDF2.

---

## 4. SSRF & CSRF Mitigation

1. **Server-Side Request Forgery (SSRF) Defense**:
   - When fetching URLs provided by users, validate destination IP addresses against a denylist of private/loopback ranges:
     - `127.0.0.0/8`, `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`, `169.254.169.254` (cloud metadata service).
   - Only allow `http:` and `https:` protocols (deny `file:`, `gopher:`, `ftp:`).
2. **Cross-Site Request Forgery (CSRF) Defense**:
   - Set all state-changing cookies with `SameSite=Lax` or `SameSite=Strict` and `Secure; HttpOnly`.
   - Validate CSRF anti-forgery tokens on all state-changing requests (`POST`, `PUT`, `DELETE`, `PATCH`).

---

## 5. Security Headers Pre-Flight Checklist

Ensure web responses include core defense headers:
- `Content-Security-Policy`: Restricts allowed sources of scripts, styles, and frames.
- `Strict-Transport-Security`: Enforces HTTPS (`max-age=63072000; includeSubDomains; preload`).
- `X-Content-Type-Options`: Prevents MIME-sniffing (`nosniff`).
- `X-Frame-Options`: Denies embedding in iframes (`DENY` or `SAMEORIGIN`).
- `Referrer-Policy`: Controls referrer leakage (`strict-origin-when-cross-origin`).
