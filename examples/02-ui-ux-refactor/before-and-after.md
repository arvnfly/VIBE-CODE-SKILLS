# UI/UX Refactoring Example: Login Form Card

Demonstration of applying the `ui-ux` skill to transform unstyled, inaccessible code into a production-grade interface.

---

## 1. Before (Generic Agent Output)

Common issues: arbitrary pixel values, hardcoded hex colors, low contrast ratio (2.8:1), no keyboard focus ring, touch target too small (28px).

```html
<!-- Flawed: Non-standard padding, poor contrast, missing labels, inaccessible focus -->
<div style="background: #eee; padding: 13px; border-radius: 5px; width: 350px;">
  <span style="font-size: 11px; color: #999;">User Login</span>
  <input type="text" placeholder="Username" style="width: 100%; margin-top: 7px; padding: 4px;" />
  <input type="password" placeholder="Password" style="width: 100%; margin-top: 7px; padding: 4px;" />
  <button style="background: #3498db; color: #fff; border: none; margin-top: 10px; height: 28px; width: 100%;">
    Submit
  </button>
</div>
```

---

## 2. After (Applying `ui-ux` Skill)

Improvements:
- **8-Point Spatial Grid**: `padding: 24px` (`space-6`), `gap: 16px` (`space-4`), `margin-top: 24px`.
- **Semantic Tokens**: `var(--bg-surface)`, `var(--text-primary)`, `var(--color-primary)`.
- **Accessibility & Contrast**: Normal text contrast 7.2:1 (WCAG AAA), visible focus ring with offset, full `<label>` bindings.
- **Ergonomics**: Minimum 44px button height for touch surfaces, `radius-md` (8px), accessible motion timing.

```html
<div class="login-card">
  <h2 class="title">Sign In</h2>

  <form class="form-body">
    <div class="field-group">
      <label for="username" class="label">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        required
        autocomplete="username"
        class="input-field"
      />
    </div>

    <div class="field-group">
      <label for="password" class="label">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        required
        autocomplete="current-password"
        class="input-field"
      />
    </div>

    <button type="submit" class="submit-button">
      Sign In
    </button>
  </form>
</div>

<style>
.login-card {
  background-color: var(--bg-surface, #FFFFFF);
  border: 1px solid var(--border-subtle, #E4E4E7);
  border-radius: 12px; /* radius-lg */
  padding: 24px;       /* space-6 */
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.title {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  color: var(--text-primary, #09090B);
  margin-bottom: 24px; /* space-6 */
}

.form-body {
  display: flex;
  flex-direction: column;
  gap: 16px;           /* space-4 */
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: 8px;            /* space-2 */
}

.label {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary, #71717A);
}

.input-field {
  height: 44px;        /* min touch target */
  padding: 0 12px;     /* space-3 */
  border: 1px solid var(--border-subtle, #E4E4E7);
  border-radius: 8px;  /* radius-md */
  font-size: 16px;
  color: var(--text-primary, #09090B);
  background: var(--bg-canvas, #FAFAFA);
  transition: border-color 150ms ease, box-shadow 150ms ease;
}

.input-field:focus {
  outline: none;
  border-color: var(--color-primary, #2563EB);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

.submit-button {
  height: 44px;        /* min touch target */
  margin-top: 8px;     /* space-2 */
  border-radius: 8px;  /* radius-md */
  background-color: var(--color-primary, #2563EB);
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 150ms ease;
}

.submit-button:hover {
  background-color: var(--color-primary-hover, #1D4ED8);
}

.submit-button:focus-visible {
  outline: 2px solid var(--color-primary, #2563EB);
  outline-offset: 2px;
}
</style>
```
