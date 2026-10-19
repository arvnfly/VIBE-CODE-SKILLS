---
name: memory-leak-debugger
description: "Heap snapshot memory leak diagnostics, detached DOM tree detection, and V8 allocation profiling."
---

# Memory Leak Debugging Protocol

1. Capture baseline heap snapshot, trigger operation 50 times, capture comparison snapshot.
2. Inspect retaining paths of objects not garbage collected.
3. Remove detached event listeners and unbounded cache collections.
