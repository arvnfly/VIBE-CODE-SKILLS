---
name: prometheus-monitoring
description: "Prometheus metric types (Counter, Gauge, Histogram), alerting rules, and scrape configurations."
---

# Prometheus Monitoring Protocol

1. Use Counters for monotonic events, Gauges for current values, Histograms for latency.
2. Name metrics with unit suffixes (e.g. http_requests_duration_seconds).
3. Keep label cardinality strictly bounded.
