# Claude Code Project Rules

@base-rules.md

## Custom Commands & Skills
- `/council [prompt|project]`: Jalankan evaluasi multi-lensa (`subagent-council`).
- `/helper [explore|test|refactor]`: Delegasikan micro-task ke subagent terisolasi (`subagent-helper`).
- Skill `subagent-driven-development`: Eksekusi rencana tugas demi tugas secara kontinu.
- Skill `verification-before-completion`: Verifikasi command nyata sebelum claim selesai.