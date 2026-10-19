---
name: clickhouse-analytics
description: "ClickHouse columnar database modeling, MergeTree engine family, partitioning keys, and OLAP query tuning."
---

# ClickHouse Columnar Protocol

1. Use ReplacingMergeTree or SummingMergeTree based on deduplication needs.
2. Partition by toYYYYMM(date) to keep partition counts under 1,000.
3. Optimize queries for columnar reads; never use SELECT *.
