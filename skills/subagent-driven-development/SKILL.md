---
name: subagent-driven-development
description: Execute implementation plans by dispatching fresh task-isolated subagents with council review gates
tools: Read, Write, Edit, Glob, Grep, Bash
model: inherit
---


# Subagent-Driven Development (SDD)

SDD mengeksekusi rencana kerja dengan mendelegasikan setiap tugas ke sub-agent baru yang terisolasi. Ini mencegah context bloat pada sesi utama dan memastikan setiap tugas diaudit sebelum lanjut.

## Siklus Inti SDD

```
[Plan Task] ──> [Fresh Subagent / Helper] ──> [Council Task Review] ──> [Next Task]
                                                      │
                                           (Failed? Loop Fix)
                                                      │
[All Complete] ───────────────────────────> [Final Council Audit] ──> [Complete]
```

## 1. Aturan Delegasi & Isolasi
- **Konteks Murni (Fresh Context)**: Jangan wariskan seluruh riwayat percakapan ke sub-agent. Berikan hanya:
  1. Spesifikasi tugas saat ini.
  2. Lokasi file target.
  3. Acceptance criteria terukur.
- **Continuous Execution**: Jangan berhenti untuk menanyakan hal sepele ke pengguna di tengah rencana. Putuskan berdasarkan spesifikasi yang disepakati.

## 2. Review Gate Antar-Tugas
Setiap sub-agent menyelesaikan tugasnya, panggil `subagent-council`:
1. **Spec Compliance**: Apakah kode memenuhi acceptance criteria tugas ini?
2. **Quality & Invariants**: Apakah ada broken syntax, regression, atau unnecessary complexity?
3. **Evidence**: Apakah command verifikasi mengembalikan exit code 0?

## 3. Whole-Branch Final Review
Setelah semua tugas rencana selesai, jalankan audit menyeluruh:
- Run full test suite.
- Audit diff menyeluruh (`git diff` atau review file).
- Bersihkan file scratch / sementara.