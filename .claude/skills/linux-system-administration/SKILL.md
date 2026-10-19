---
name: linux-system-administration
description: "Linux systems administration, systemd service units, resource limits (ulimits), and file permissions."
---

# Linux Systems Protocol

1. Run background daemons as dedicated systemd services with Restart=on-failure.
2. Adjust file descriptor limits in /etc/security/limits.conf for high-traffic servers.
3. Enforce strict chmod/chown file permissions.
