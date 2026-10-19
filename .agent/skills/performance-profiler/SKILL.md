---
name: performance-profiler
description: "Universal standards for Core Web Vitals optimization (LCP, INP, CLS), memory leak diagnostics, CPU profiling, and caching architecture."
---

# Performance Profiling & Optimization Protocol

When optimizing runtime performance, diagnosing memory bottlenecks, or auditing latency, enforce these engineering standards.

---

## 1. Core Web Vitals (CWV) Targets

Frontend web applications must achieve these performance budgets:

| Metric | Target (Good) | Needs Work | Poor | Key Optimization Tactic |
| :--- | :--- | :--- | :--- | :--- |
| **Largest Contentful Paint (LCP)** | `<= 2.5s` | `2.5s - 4.0s` | `> 4.0s` | Preload critical hero images, eliminate render-blocking JS/CSS, enable edge CDN caching. |
| **Interaction to Next Paint (INP)** | `<= 200ms` | `200ms - 500ms` | `> 500ms` | Yield to main thread using `scheduler.yield()` or `requestIdleCallback()`, break long tasks (`> 50ms`). |
| **Cumulative Layout Shift (CLS)** | `<= 0.1` | `0.1 - 0.25` | `> 0.25` | Set explicit `width` and `height` on images and iframes, reserve space for dynamic ads/widgets with `aspect-ratio`. |

---

## 2. Memory Leak Diagnostic Protocol

When diagnosing high memory consumption or Out-Of-Memory (OOM) crashes:

1. **Take Baseline Heap Snapshot**:
   - Capture heap state immediately after application initialization.
2. **Execute Repetitive Workload**:
   - Trigger 100 consecutive requests or component mount/unmount cycles.
3. **Take Comparison Snapshot & Filter**:
   - Filter objects allocated between snapshot 1 and 2 that were not garbage collected.
4. **Identify Primary Culprits**:
   - Detached DOM nodes retained in closures.
   - Event listeners not unregistered (`removeEventListener`, socket disconnects).
   - Global unbounded caches (`Map`, `Array`) lacking Maximum Size / TTL eviction policies.
   - Unclosed streams, intervals (`setInterval`), or unresolved promises.

---

## 3. Multi-Tiered Caching Architecture

1. **Cache Hierarchy**:
   - **L1 In-Memory Cache** (e.g. LRU memory store): sub-millisecond access for hot configuration and static keys. Always set hard max-item limits.
   - **L2 Distributed Cache** (e.g. Redis): 1-5ms access for shared user sessions and pre-computed projections. Always set explicit TTLs.
   - **L3 Persistent Storage** (Database): Authoritative source of truth.
2. **Cache Stampede Prevention**:
   - Implement mutex locks or Probabilistic Early Expiration (XFetch algorithm) on expensive cache computations to prevent database collapse when keys expire.
3. **Stale-While-Revalidate**:
   - For read-heavy web APIs, return cached data immediately while fetching fresh data asynchronously in the background:
     `Cache-Control: public, max-age=60, stale-while-revalidate=600`

---

## 4. Bundle & Payload Optimization

1. **Tree-Shaking Hygiene**:
   - Avoid importing entire monolithic libraries when only sub-functions are used:
     - Bad: `import _ from 'lodash';`
     - Good: `import debounce from 'lodash/debounce';`
2. **Code Splitting & Dynamic Imports**:
   - Defer loading non-critical administrative screens, modal dialogs, and heavy chart libraries until requested:
     `const AnalyticsChart = lazy(() => import('./AnalyticsChart'));`
3. **Compress Assets**:
   - Serve modern image formats (AVIF / WebP) with responsive `srcset` resolutions.
   - Enforce Brotli (`br`) or Gzip compression for all text-based responses (`HTML`, `CSS`, `JS`, `JSON`).
