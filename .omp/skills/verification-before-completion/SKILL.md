---
name: verification-before-completion
description: Strict gated verification protocol requiring command evidence before asserting task completion
tools: Read, Bash
model: inherit
---


# Verification Before Completion

Aturan mutlak: **Bukti mendahului klaim (Evidence before assertions).**

## Protokol Gated Verification

1. **Jalankan Perintah Verifikasi Nyata**:
   - Compiler/Linter (`cargo check`, `npm run lint`, `tsc`).
   - Test Suite (`cargo test`, `npm test`, `go test ./...`).
   - Assertion Script (`bash test.sh`).
2. **Periksa Exit Code & Output**:
   - Exit code wajib `0`.
   - Periksa output log untuk memastikan test tidak di-skip atau bernilai kosong palsu.
3. **Anti-Slop / Anti-Hallucination Checklist**:
   - [ ] Tidak mengklaim "sudah diperbaiki" sebelum melihat output terminal.
   - [ ] Tidak mengasumsikan command berhasil tanpa memeriksa return status.
   - [ ] Diff hanya menyentuh baris yang relevan dengan tugas.

## Format Laporan Verifikasi Wajib
```markdown
### [Verification Gate]
- Perintah: `<command line exact>`
- Exit Code: `0`
- Cuplikan Output:
  ```
  <output nyata dari terminal>
  ```
- Kesimpulan: Terverifikasi berfungsi sesuai spesifikasi.
```