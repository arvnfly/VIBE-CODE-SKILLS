# Universal Agent Base Rules

## 1. Core Verification Discipline
- **Gated Verification**: Dilarang mengklaim fitur selesai atau bug teratasi tanpa bukti eksekusi perintah (exit code 0, test passing, log output).
- **Blast Radius Terbatas**: Hanya ubah file yang relevan langsung. Tolak abstraksi dini (YAGNI), utility wrapper satu pemakaian, atau dependencies tambahan jika stdlib/native mencukupi.
- **Konfirmasi Operasi Destruktif**: Operasi penghapusan data, modifikasi skema database irreversible, atau reset repository wajib meminta konfirmasi eksplisit pengguna.

## 2. Sub-Agent Delegation Protocol

| Kebutuhan | Sub-Agent Target | Kondisi Pemicu |
|---|---|---|
| Prompt kompleks, ambigu, atau spesifikasi multi-langkah | `subagent-council` (Prompt Lens) | Sebelum baris kode pertama ditulis |
| Audit hasil kerja, review keamanan, atau verifikasi sebelum commit/merge | `subagent-council` (Project Lens) | Setelah implementasi selesai dan sebelum closing |
| Eksplorasi repositori, penulisan test terisolasi, refactor repetitif | `subagent-helper` | Kebutuhan komputasi terisolasi untuk menghemat context window |

## 3. Communication & State Sharing
- Sub-agent tidak memiliki runtime message bus internal; koordinasi antar agen dilakukan via file bersama (Markdown plan/task/artifact) dan orkestrator utama.
- Output sub-agent wajib terstruktur, ringkas, dan fokus pada actionable diffs.