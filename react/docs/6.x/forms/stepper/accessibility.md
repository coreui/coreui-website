# React Stepper Component Accessibility

> Detailed overview of the accessibility features implemented in CoreUI React Stepper, ensuring compliance with WAI-ARIA guidelines.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=react&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Accessibility

The React Stepper component is fully accessible out of the box:

- Step buttons use `role="tab"` and related ARIA attributes (`aria-selected`, `aria-controls`, `tabindex`)
- Step content areas are labeled with `role="tabpanel"` and properly linked
- When the step changes while focus is inside the stepper, or the change takes focus away, focus moves to the new step's button, so screen readers read which step the user is on
- When a step whose form has `noValidate` fails validation, focus moves to the first invalid control, which is read with its message: the stepper adds the `.invalid-feedback` that follows the control, which covers `feedbackInvalid`, or the elements named in `data-coreui-invalid-feedback`, to its `aria-describedby`. The panes are not live regions
- Full keyboard support is included

### Keyboard support

The Stepper component supports comprehensive keyboard navigation out of the box:

| Key | Function |
| --- | --- |
| <kbd>ArrowLeft</kbd> / <kbd>ArrowUp</kbd> | Moves focus to previous step. |
| <kbd>ArrowRight</kbd> / <kbd>ArrowDown</kbd> | Moves focus to next step. |
| <kbd>Home</kbd> / <kbd>End</kbd> | Jumps focus to first or last step |
