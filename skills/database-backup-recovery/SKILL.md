---
name: database-backup-recovery
description: "Point-in-Time Recovery (PITR), automated database snapshotting, backup encryption, and restore runbooks."
---

# Database Backup & PITR Protocol

1. Enable continuous WAL/binlog archiving alongside daily full snapshots.
2. Test automated backup restoration weekly in an isolated staging environment.
3. Encrypt backups at rest with KMS keys.
