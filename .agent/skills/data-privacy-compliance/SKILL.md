---
name: data-privacy-compliance
description: "Data privacy standards, GDPR and CCPA PII handling, data sanitization, cryptographic pseudonyms, and immutable audit logs."
---

# Data Privacy & Regulatory Compliance Protocol

Protect Personally Identifiable Information (PII) and ensure regulatory compliance.

---

## 1. PII Redaction & Storage Separation

1. Never log PII (passwords, social security numbers, credit card details, phone numbers, raw email addresses) in telemetry or debug logs.
2. Implement automated log redaction filters for common PII patterns.
3. Isolate sensitive user profile data from operational data stores when possible.

---

## 2. Right to Erasure

1. Design schemas with crypto-shredding or structured deletion workflows:
   - Soft-deleted records must be permanently purged or anonymized within the statutory window.
   - Anonymize user records by zeroing out name, email, IP, and address while retaining aggregated financial totals for accounting invariants.

---

## 3. Immutable Audit Trails

1. Log all administrative access and role escalations in append-only audit tables.
2. Audit records must include: timestamp, actor_id, action, resource_id, and ip_address.
