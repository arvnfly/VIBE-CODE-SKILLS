---
name: sql-injection-prevention
description: "SQL injection defense, AST query builders, stored procedure safety, and input sanitization."
---

# SQL Injection Prevention Protocol

1. Enforce 100% parameterised query bindings across all databases.
2. Ban string interpolation/concatenation in SQL query builders.
3. Apply automated SAST scanners (Semgrep, SonarQube) in pre-commit hooks.
