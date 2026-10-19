---
name: core-web-vitals-optimizer
description: "Core Web Vitals optimization techniques, image preloading, font fallbacks, and INP task splitting."
---

# Core Web Vitals Optimization Protocol

1. Preload LCP hero image with <link rel="preload" as="image">.
2. Split long tasks (> 50ms) using scheduler.yield() to maintain INP < 200ms.
3. Reserve layout dimensions with CSS aspect-ratio to keep CLS < 0.1.
