---
name: model-quantization-serving
description: "LLM model serving (vLLM, Ollama), quantization (GGUF, AWQ, FP8), and KV cache optimization."
---

# Model Quantization & Serving Protocol

1. Use 4-bit or 8-bit quantization (AWQ, GPTQ) to run models with 70% lower VRAM usage.
2. Serve with vLLM for PagedAttention continuous batching.
3. Monitor KV cache memory utilization to prevent out-of-memory under concurrent requests.
