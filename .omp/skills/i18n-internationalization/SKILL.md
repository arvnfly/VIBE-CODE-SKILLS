---
name: i18n-internationalization
description: "Internationalization (i18n), localized number/date formatting (Intl), RTL layout support, and translation catalogs."
---

# Internationalization (i18n) & Localization Protocol

Build globally accessible applications supporting multilingual locales and RTL scripts.

---

## 1. Native Intl Formatting

1. Use browser native `Intl.DateTimeFormat` and `Intl.NumberFormat` for currency and timestamps.
2. Never hardcode currency symbols or date delimiters.

---

## 2. Bidirectional & RTL Layouts

- Use logical CSS properties: `margin-inline-start`, `padding-inline-end`, `inset-inline` instead of `left` and `right`.
- Respect `dir="rtl"` on the document root.
