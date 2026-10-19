---
name: vector-embeddings-search
description: "Text and multimodal embeddings, dimensionality reduction, cosine similarity, and embedding model selection."
---

# Vector Embeddings Protocol

1. Select embedding models matched to domain (text-embedding-3-small, BGE-large).
2. Normalize vector lengths before computing cosine similarity via dot product.
3. Cache frequent query embeddings in Redis to eliminate redundant API latency.
