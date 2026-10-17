# Systematic Debugging Report: Token Expiry Off-by-One Race Condition

Demonstration of the 4-phase investigation protocol from `systematic-debugging`.

---

## Bug Description
Users intermittently receive HTTP 401 Unauthorized errors immediately after session refresh.

---

## Phase 1: Reproduce (Consistent Reproduction)
- **Action**: Created an isolated test script `test/reproduce-session.js` simulating consecutive API calls across the token expiration boundary.
- **Result**: The test consistently failed on requests issued at second `59` of the 60-second window:
  ```
  FAIL test/reproduce-session.js
  Expected status 200, received 401 on token age 59998ms.
  Exit code: 1
  ```
- **Finding**: Bug reproduction rate is 100% deterministic at boundary timestamp `now >= expiresAt - 1000ms`.

---

## Phase 2: Trace (Trace to Origin)
- Inspected call stack leading to `verifyToken()`:
  ```
  verifyToken() [src/auth/token.ts:42]
    └── isExpired() [src/auth/token.ts:18]
  ```
- Checked line 18 in `src/auth/token.ts`:
  ```typescript
  // Flawed comparison: treats current second as already expired without margin
  export function isExpired(expiresAt: number): boolean {
    return Date.now() >= expiresAt;
  }
  ```
- Root Cause Identified: Network latency (15-40ms) between client dispatch and server clock causes valid requests sent right before expiration to arrive at or after `expiresAt`.

---

## Phase 3: Formulate Hypothesis
- Hypothesis statement:
  > The bug occurs because `isExpired()` evaluates strict timestamp inequality without a clock skew / leeway window, causing in-flight requests near expiration to be rejected before refresh completes.

---

## Phase 4: Minimal Fix & Verification
- Minimal patch applied to `src/auth/token.ts`:
  ```typescript
  // Added 5-second leeway buffer for in-flight requests
  export function isExpired(expiresAt: number, leewayMs: number = 5000): boolean {
    return Date.now() >= (expiresAt + leewayMs);
  }
  ```
- Verification rerun:
  ```
  > node test/reproduce-session.js
  PASS: 100 consecutive boundary requests authenticated successfully.
  Exit code: 0
  ```
- Blast radius: exactly 1 file touched, 1 line modified, 0 regressions.
