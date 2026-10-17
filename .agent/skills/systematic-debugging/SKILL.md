---
name: systematic-debugging
description: 4-phase root-cause investigation protocol before proposing or writing fixes (inspired by obra/superpowers)
tools: Read, Grep, Glob, Bash
model: inherit
---


# Systematic Debugging

Aturan Utama: **Jangan menebak fix sebelum menemukan akar penyebab yang terbukti.**

```
[1. Reproduce] ──> [2. Trace Root Cause] ──> [3. Form Hypothesis] ──> [4. Minimal Fix & Verify]
```

## 4 Fase Investigasi

### Fase 1: Reproduce (Reproduksi Konsisten)
- Buat test case terisolasi atau catat command exact yang memicu bug.
- Verifikasi bahwa kegagalan dapat direproduksi 100%.

### Fase 2: Trace (Lacak Akar Masalah)
- Lacak jejak panggilan (call stack) ke baris pertama kegagalan nilai/keadaan.
- Bedakan gejala (symptom) dari penyebab utama (root cause).
- Dilarang membungkus error dengan `try/except: pass` untuk menyembunyikan gejala.

### Fase 3: Hypothesize (Formulasi Hipotesis)
- Nyatakan dalam 1 kalimat: *"Bug terjadi karena X menyebabkan Y pada kondisi Z."*
- Uji hipotesis dengan membaca kode terkait atau memeriksa state variabel.

### Fase 4: Minimal Fix & Verify
- Buat perbaikan terkecil yang memperbaiki akar masalah (minimal blast radius).
- Jalankan kembali perintah verifikasi dari Fase 1 untuk membuktikan fix berhasil.