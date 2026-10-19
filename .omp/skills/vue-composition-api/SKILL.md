---
name: vue-composition-api
description: "Vue 3 Composition API, <script setup>, reactivity primitives (ref/reactive), and Pinia state stores."
---

# Vue 3 Composition API Protocol

Author scalable Vue applications using modern reactive primitives.

---

## 1. Script Setup & Reactivity

1. Use `<script setup lang="ts">` as standard.
2. Prefer `ref()` for primitives and objects for consistency over mixing `reactive()`.
3. Use `computed()` for all derived state; never mutate state inside computed getters.

---

## 2. Composables Architecture

- Prefix reusable logic functions with `use` (e.g. `useWindowSize`, `useUserSession`).
- Clean up side effects inside `onUnmounted` or `onScopeDispose`.
