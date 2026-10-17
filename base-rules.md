# Universal Agent Base Rules (Vibe Code Core)

## 1. Disiplin Verifikasi & Anti-Slop
- **Evidence Before Assertion**: Jangan pernah menyatakan kode berhasil, bug selesai, atau fitur siap tanpa menjalankan verifikasi nyata (exit code 0).
- **Blast Radius Terbatas**: Ubah hanya baris/file yang diminta. Jangan merefaktor kode yang tidak diminta atau menambahkan dependensi jika stdlib/native mencukupi.
- **Konfirmasi Operasi Destruktif**: Operasi penghapusan data, reset repository, atau manipulasi file kritis wajib meminta konfirmasi eksplisit pengguna.
- **Continuous Execution**: Jalankan seluruh langkah yang telah disepakati tanpa jeda pertanyaan sepele. Ambil keputusan teknis mandiri berdasarkan acceptance criteria.

## 2. Matriks Delegasi Sub-Agent

| Skenario | Sub-Agent Target | Mode / Peran |
|---|---|---|
| Prompt kompleks / ambigu / fitur baru | `subagent-council` | Mode 1: Prompt Review |
| Review hasil kerja task / pre-commit | `subagent-council` | Mode 2: Project Review |
| Eksplorasi repositori / symbol tracing | `subagent-helper` | Mode 1: Exploration (Read-Only) |
| Pembuatan test reproduksi bug | `subagent-helper` | Mode 2: Test Generation |
| Formatting massal / migrasi format | `subagent-helper` | Mode 3: Mechanical Refactor |
| Implementasi rencana multi-task | `subagent-driven-development` | Orchestrator (Fresh Subagent per Task) |

## 3. Komunikasi & Berbagi State
- Sesi sub-agent menerima konteks minimal (fresh context) dan mengembalikan laporan terstruktur ke agen utama.
- File koordinasi bersama (`task.md` atau `plan.md`) menjadi acuan progres tunggal.