---
name: promql-grafana-dashboards
description: "PromQL query authoring, rate/irate calculations, histogram quantiles, and alerting thresholds."
---

# PromQL & Metrics Authoring Protocol

1. Calculate error rates: sum(rate(http_requests_total{status=~"5.."}[5m])) / sum(rate(http_requests_total[5m])).
2. Calculate p99 latency with histogram_quantile(0.99, sum(rate(http_duration_bucket[5m])) by (le)).
3. Use irate for fast-changing graphs and rate for alerting.
