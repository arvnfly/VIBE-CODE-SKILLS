---
name: accessibility-a11y
description: "Accessible web engineering, ARIA role mapping, keyboard navigation focus traps, and WCAG 2.2 AA/AAA compliance."
---

# Web Accessibility (A11y) & WCAG 2.2 Protocol

Enforce inclusive, accessible user experiences across all interactive components.

---

## 1. Keyboard Navigation & Focus Management

1. **Interactive Elements**:
   - Every clickable action must use a native button or anchor element with visible focus-visible styling.
   - Never use non-interactive elements without explicit role, tabindex, and keydown (Enter / Space) handlers.
2. **Modal Dialog Focus Trap**:
   - When a modal opens: Focus the first interactive element. Trap Tab/Shift-Tab navigation inside the dialog.
   - Pressing Escape must close the modal and return focus to the trigger element.

---

## 2. Semantic ARIA Standards

1. Use semantic HTML first: nav, main, aside, header, footer.
2. Do not replicate native semantics with ARIA (e.g. avoid button role='button').
3. For custom components (accordions, tabs, comboboxes), implement appropriate aria-expanded, aria-selected, and aria-controls.
4. All images must have an alt attribute (empty alt="" for purely decorative assets).
