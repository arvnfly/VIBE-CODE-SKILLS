---
name: rag-pipeline-architect
description: "Retrieval-Augmented Generation (RAG) architecture, semantic chunking, reranking models, and context compression."
---

# RAG Architecture Protocol

1. Chunk documents semantically with sliding window overlaps (e.g. 512 tokens with 64 token overlap).
2. Apply cross-encoder rerankers (Cohere Rerank, BGE) to score retrieved chunks before passing to LLM context.
3. Filter out irrelevant retrieved chunks to save tokens and prevent context hallucination.
