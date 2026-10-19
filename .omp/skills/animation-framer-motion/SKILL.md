---
name: animation-framer-motion
description: "Performant web animations, spring physics, layout animations, and accessibility prefers-reduced-motion."
---

# Web Animations & Motion Design Protocol

Craft delightful, accessible micro-interactions and transitions.

---

## 1. Reduced Motion Accessibility

Always check `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

---

## 2. Hardware Acceleration

Animate exclusively composite-friendly properties: `transform` (translate, scale, rotate) and `opacity`.
