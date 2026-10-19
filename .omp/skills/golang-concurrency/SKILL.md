---
name: golang-concurrency
description: "Go concurrency patterns, goroutines, channels, context cancellation, and sync.WaitGroup / Mutex safety."
---

# Go Concurrency & Idioms Protocol

Write idiomatic, thread-safe, and high-performance Go applications.

---

## 1. Context Propagation

1. Always pass `ctx context.Context` as the first parameter to functions performing I/O.
2. Respect context cancellation inside long loops or channel selects:
   ```go
   select {
   case <-ctx.Done():
       return ctx.Err()
   case res := <-ch:
       // process
   }
   ```

---

## 2. Goroutine Lifecycle & Leak Prevention

Never start a goroutine without knowing how and when it will exit.
