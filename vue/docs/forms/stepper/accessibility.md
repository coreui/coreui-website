# Vue Stepper Component Accessibility

> Detailed overview of the accessibility features implemented in CoreUI Vue Stepper, ensuring compliance with WAI-ARIA guidelines.

## Accessibility (A11Y)

The Vue Stepper component is fully accessible out of the box:

- Step buttons use `role="tab"` and related ARIA attributes (`aria-selected`, `aria-controls`, `tabindex`)
- Step content areas are labeled with `role="tabpanel"` and properly linked
- Screen readers are notified of changes with `aria-live="polite"`
- Full keyboard support is included

### Keyboard support

The Stepper component supports comprehensive keyboard navigation out of the box:

<div class="table-api table-responsive border rounded mb-3">
  <table class="table mb-0">
    <thead>
      <tr>
        <th>Key</th>
        <th>Function</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><kbd>ArrowLeft</kbd> / <kbd>ArrowUp</kbd></td>
        <td>Moves focus to previous step.</td>
      </tr>
      <tr>
        <td><kbd>ArrowRight</kbd> / <kbd>ArrowDown</kbd></td>
        <td>Moves focus to next step.</td>
      </tr>
      <tr>
        <td class="border-0"><kbd>Home</kbd> / <kbd>End</kbd></td>
        <td class="border-0">Jumps focus to first or last step</td>
      </tr>
    </tbody>
  </table>
</div>
