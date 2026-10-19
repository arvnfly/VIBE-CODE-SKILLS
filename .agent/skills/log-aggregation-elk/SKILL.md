---
name: log-aggregation-elk
description: "Centralized log aggregation with Elasticsearch, Logstash, Kibana, Filebeat, and structured field indexing."
---

# Centralized Logging Protocol

1. Ship logs via Filebeat as structured JSON.
2. Index critical query fields (userId, traceId, level, status).
3. Set index lifecycle policies (ILM) to roll over logs after 30 days.
