---
name: vector-database-rag
description: "Vector database operations (Pinecone, Qdrant, Milvus, pgvector), similarity metrics, and hybrid search."
---

# Vector Database & RAG Protocol

1. Choose appropriate distance metrics: Cosine for normalized text, Dot Product for unnormalized, L2 for spatial.
2. Implement hybrid search combining dense vector embeddings with sparse BM25 lexical search.
3. Filter by metadata payload before vector similarity indexing to reduce search candidate pools.
