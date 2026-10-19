---
name: elasticsearch-search
description: "Elasticsearch index mappings, analyzers, query DSL, fuzzy search, and cluster shard sizing."
---

# Elasticsearch Search Protocol

1. Define explicit index mappings with custom tokenizers and analyzers.
2. Target shard sizes between 10GB and 50GB.
3. Use bool queries with filter context for unanalyzed terms to leverage query cache.
