# Vue Focus Trap Accessibility

> Learn how to implement WCAG 2.1 compliant focus management with the Vue Focus Trap component for better accessibility.

## WCAG 2.1 Compliance

The Vue Focus Trap component helps achieve WCAG 2.1 compliance by implementing proper focus management patterns required for accessible web applications. Focus traps are essential for meeting several WCAG success criteria:

### Success Criteria Met

- **2.1.2 No Keyboard Trap (Level A)**: Ensures users can navigate away from trapped content using standard keyboard commands
- **2.4.3 Focus Order (Level A)**: Maintains logical focus order within the trapped area
- **2.4.7 Focus Visible (Level AA)**: Preserves focus indicators within the trap
- **3.2.1 On Focus (Level A)**: Prevents unexpected context changes when focus moves

## Keyboard Navigation

### Tab and Shift+Tab Cycling

When a focus trap is active, the Tab and Shift+Tab keys cycle through focusable elements within the trapped container:

1. **Tab**: Moves focus to the next focusable element
2. **Shift+Tab**: Moves focus to the previous focusable element
3. **Wrapping**: When reaching the last element, Tab wraps to the first element
4. **Reverse Wrapping**: When reaching the first element, Shift+Tab wraps to the last element

### Escape Key Handling

While Vue Focus Trap doesn't handle the Escape key directly, it's recommended to implement Escape key handling in your application:

```vue
<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const trapActive = ref(false)

const handleEscape = (event) => {
  if (event.key === 'Escape' && trapActive.value) {
    trapActive.value = false
  }
}

onMounted(() => document.addEventListener('keydown', handleEscape))
onBeforeUnmount(() => document.removeEventListener('keydown', handleEscape))
</script>
```

## Screen Reader Support

### Focus Management

Vue Focus Trap works seamlessly with screen readers by:

- **Maintaining Focus Flow**: Screen readers follow the trapped focus order
- **Preserving Announcements**: Focus changes trigger appropriate screen reader announcements
- **Supporting Navigation**: Screen reader navigation commands work within the trapped area

### ARIA Implementation

When using Vue Focus Trap, ensure proper ARIA attributes on the container:

```vue
<template>
  <!-- Modal Dialog -->
  <CFocusTrap :active="isModalOpen" restore-focus>
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <h2 id="modal-title">Dialog Title</h2>
      <p id="modal-description">Dialog description</p>
      <!-- Modal content -->
    </div>
  </CFocusTrap>

  <!-- Menu -->
  <CFocusTrap :active="isMenuOpen" focus-first-element>
    <div role="menu" aria-orientation="vertical">
      <button role="menuitem">Option 1</button>
      <button role="menuitem">Option 2</button>
    </div>
  </CFocusTrap>
</template>
```

## Best Practices

### When to Use Focus Traps

✅ **Always Use For:**
- Modal dialogs and overlays
- Dropdown and popup menus
- Temporary slide-out panels
- Multi-step wizards or forms

❌ **Avoid Using For:**
- Main page content
- Persistent navigation elements
- Non-interactive content areas

### Focus Restoration

Always use `restore-focus` for temporary UI elements:

```vue
<template>
  <!-- ✅ Good - Temporary overlay -->
  <CFocusTrap :active="showModal" restore-focus>
    <div role="dialog">Modal content</div>
  </CFocusTrap>

  <!-- ⚠️ Consider carefully - Navigation change -->
  <CFocusTrap :active="showSidebar" :restore-focus="false">
    <nav>Permanent navigation</nav>
  </CFocusTrap>
</template>
```

### Initial Focus Strategies

Choose the appropriate `focus-first-element` setting:

- **`focus-first-element`**: For forms, menus, and interactive content
- **`:focus-first-element="false"`**: For containers, scrollable regions, or when the container itself should receive focus

### Container Requirements

Ensure your container meets accessibility requirements:

```vue
<template>
  <!-- ✅ Proper container setup -->
  <CFocusTrap active>
    <div
      :tabindex="-1"
      role="dialog"
      aria-label="Settings"
    >
      <!-- Focusable content -->
    </div>
  </CFocusTrap>
</template>
```

`tabindex="-1"` makes the container focusable, `role` gives it the right semantics and `aria-label` its accessible name.

## Testing Guidelines

### Manual Testing

1. **Keyboard Navigation Test**:
   - Use only Tab and Shift+Tab to navigate
   - Verify focus stays within the trapped area
   - Test focus wrapping (first ↔ last element)

2. **Screen Reader Test**:
   - Test with NVDA, JAWS, or VoiceOver
   - Verify proper announcements
   - Check element labels and descriptions

3. **Focus Restoration Test**:
   - Activate trap from different starting elements
   - Verify focus returns to the correct element
   - Test with keyboard and mouse activation

### Automated Testing

```js
import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { CFocusTrap } from '@coreui/vue'

test('focus trap moves focus to the first element', async () => {
  const wrapper = mount(CFocusTrap, {
    attachTo: document.body,
    props: { active: true, focusFirstElement: true },
    slots: {
      default: () =>
        h('div', [
          h('button', { 'data-test': 'first' }, 'First'),
          h('button', { 'data-test': 'second' }, 'Second'),
        ]),
    },
  })

  await nextTick()

  expect(document.activeElement).toBe(wrapper.find('[data-test="first"]').element)
})
```

`attachTo: document.body` is required — a trap reads and moves `document.activeElement`, which only exists for a mounted tree.

## Common Accessibility Issues

### Issue 1: Missing Focus Indicators

**Problem**: Focus indicators are removed or unclear within the trap.

```css
/* ❌ Bad - Removes focus indicators */
.focus-trap *:focus {
  outline: none;
}

/* ✅ Good - Maintains or improves focus indicators */
.focus-trap *:focus {
  outline: 2px solid #0d6efd;
  outline-offset: 2px;
}
```

### Issue 2: Inaccessible Elements

**Problem**: Elements within the trap cannot receive focus.

```vue
<template>
  <!-- ❌ Bad - Button cannot receive focus -->
  <button :tabindex="-1" disabled>Inaccessible</button>

  <!-- ✅ Good - Properly focusable elements -->
  <button type="button">Accessible Button</button>
  <input type="text" aria-label="Search" />
</template>
```

### Issue 3: Missing Labels

**Problem**: Focusable elements lack accessible names.

```vue
<template>
  <!-- ❌ Bad - No accessible name -->
  <button @click="close">×</button>

  <!-- ✅ Good - Clear accessible name -->
  <button aria-label="Close dialog" @click="close">×</button>
</template>
```

## Integration with Other Accessibility Tools

### axe-core

Test focus traps with automated accessibility testing:

```js
import axe from 'axe-core'
import { mount } from '@vue/test-utils'

test('focus trap has no accessibility violations', async () => {
  const wrapper = mount(FocusTrapComponent, { attachTo: document.body })

  const results = await axe.run(wrapper.element)

  expect(results.violations).toEqual([])
})
```

## Resources

- [ARIA Authoring Practices Guide - Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/)
- [WebAIM - Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
