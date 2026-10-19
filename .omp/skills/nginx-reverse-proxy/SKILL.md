---
name: nginx-reverse-proxy
description: "Nginx configuration, upstream load balancing, SSL termination, rate limiting, and gzip compression."
---

# Nginx Reverse Proxy Protocol

1. Configure keepalive connections to upstream backends.
2. Terminate SSL with modern TLS 1.3 ciphers.
3. Set client_max_body_size and buffer sizes explicitly to protect memory.
