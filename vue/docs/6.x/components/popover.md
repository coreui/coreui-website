# Vue Popover Component and Directive

> Documentation and examples for adding Vue popovers, like those found in iOS, to any element on your site.

## Overview

Things to know when using the popover component:

- Zero-length `title` and `content` values render an empty popover, so always provide content.
- Popovers are appended to `document.body` by default. Use the `container` prop to append them to a different element when a parent's styles interfere with the popover (like in our input groups, button groups, etc).
- Triggering popovers on hidden elements will not work.
- Popovers for disabled elements must be triggered on a wrapper element.
- When triggered from anchors that wrap across multiple lines, popovers will be centered between the anchors' overall width. Use `.text-nowrap` on your `<a>`s to avoid this behavior.

Keep reading to see how popovers work with some examples.

## Example

### Component

```html
<template>
  <CPopover
    title="Popover title"
    content="And here\’s some amazing content. It’s very engaging. Right?"
    placement="right"
  >
    <template #toggler="{ id, on }">
      <CButton theme="danger" size="lg" :aria-describedby="id" v-on="on"
        >Click to toggle popover</CButton
      >
    </template>
  </CPopover>
</template>

<script setup>
import { CPopover, CButton } from '@coreui/vue'
</script>
```

### Directive

```html
<template>
  <CButton
    v-c-popover="{
      header: 'Popover title',
      content: 'And here\’s some amazing content. It’s very engaging. Right?',
      placement: 'right',
    }"
    theme="danger"
    size="lg"
    >Click to toggle popover</CButton
  >
</template>

<script setup>
import { CButton, vcpopover as vCPopover } from '@coreui/vue'
</script>
```

### Four directions

Four options are available: `top`, `end`, `bottom` and `start`.

#### Component

```html
<template>
  <CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="top">
    <template #toggler="{ id, on }">
      <CButton theme="secondary" :aria-describedby="id" v-on="on">Popover on top</CButton>
    </template>
  </CPopover>
  <CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="end">
    <template #toggler="{ id, on }">
      <CButton theme="secondary" :aria-describedby="id" v-on="on">Popover at the end</CButton>
    </template>
  </CPopover>
  <CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="bottom">
    <template #toggler="{ id, on }">
      <CButton theme="secondary" :aria-describedby="id" v-on="on">Popover on bottom</CButton>
    </template>
  </CPopover>
  <CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="start">
    <template #toggler="{ id, on }">
      <CButton theme="secondary" :aria-describedby="id" v-on="on">Popover at the start</CButton>
    </template>
  </CPopover>
</template>

<script setup>
import { CPopover, CButton } from '@coreui/vue'
</script>
```

`start` and `end` are logical: they follow the reading direction, so `end` is the right side in LTR and the left side in RTL.

#### Deprecated physical names

_Deprecated in 6.0.0._

`left` and `right` still work and behave exactly like `start` and `end` — they have always mirrored in RTL, so `right` never meant "the right side" there either. The logical names say that plainly; the physical ones are removed in v7.

#### Directive

```html
<template>
  <CButton
    v-c-popover="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'top',
    }"
    theme="secondary"
    >Popover on top</CButton
  >
  <CButton
    v-c-popover="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'right',
    }"
    theme="secondary"
    >Popover on right</CButton
  >
  <CButton
    v-c-popover="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'bottom',
    }"
    theme="secondary"
    >Popover on bottom</CButton
  >
  <CButton
    v-c-popover="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'left',
    }"
    theme="secondary"
    >Popover on left</CButton
  >
</template>

<script setup>
import { CButton, vcpopover as vCPopover } from '@coreui/vue'
</script>
```

### Dismiss on next click

Use the `focus` trigger to dismiss popovers on the user's next click of a different element than the toggle element. A press inside a `<CPopover>` itself does not dismiss it, so users can select its text or use the controls in it. A shown popover is also dismissed by pressing the <kbd>Escape</kbd> key.

```html
<template>
  <CPopover
    content="And here's some amazing content. It's very engaging. Right?"
    placement="right"
    title="Dismissible popover"
    trigger="focus"
  >
    <CButton theme="danger">Dismissible popover</CButton>
  </CPopover>
</template>

<script setup>
import { CButton, CPopover } from '@coreui/vue'
</script>
```

### Responsive placement

Breakpoint prefixes make a placement responsive: `top md:end` reads as top below `md` and end from `md` up. The breakpoints are the Sass ones — `sm` 576px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px. A bare placement with no prefix applies below the smallest one listed.

```html
<template>
  <CPopover
    content="Top below md, right from md up."
    placement="top md:right"
    title="Responsive placement"
  >
    <template #toggler="{ id, on }">
      <CButton :aria-describedby="id" theme="secondary" v-on="on">Responsive placement</CButton>
    </template>
  </CPopover>
</template>

<script setup>
import { CButton, CPopover } from '@coreui/vue'
</script>
```

### Custom popovers

You can customize the appearance of popovers using [CSS variables](https://coreui.io/vue/docs/components/popover/styling/#css-variables). We set a custom `style` to scope our custom appearance and use it to override some of the local CSS variables.

```html
<template>
  <CPopover
    content="This popover is themed via CSS variables."
    placement="right"
    title="Custom popover"
    :style="customPopoverStyle"
  >
    <template #toggler="{ id, on }">
      <CButton theme="secondary" :aria-describedby="id" v-on="on">Custom popover</CButton>
    </template>
  </CPopover>
</template>

<script setup>
import { CPopover, CButton } from '@coreui/vue'
const customPopoverStyle = {
  '--cui-popover-max-width': '200px',
  '--cui-popover-border-color': 'var(--cui-primary-base)',
  '--cui-popover-header-bg': 'var(--cui-primary-base)',
  '--cui-popover-header-color': 'var(--cui-white)',
  '--cui-popover-body-padding-x': '1rem',
  '--cui-popover-body-padding-y': '.5rem',
}
</script>
```

## Usage

A shown popover can also be dismissed by pressing the <kbd>Escape</kbd> key. As with dropdown menus, a popover shown inside a dialog is dismissed on its own: the first <kbd>Escape</kbd> closes the popover and a subsequent one closes the dialog.

### Making popovers work for keyboard and assistive technology users

To allow keyboard users to activate your popovers, you should only add them to HTML elements that are traditionally keyboard-focusable and interactive (such as links or form controls). Although arbitrary HTML elements (such as `<span>`s) can be made focusable by adding the `tabindex="0"` attribute, this will add potentially annoying and confusing tab stops on non-interactive elements for keyboard users, and most assistive technologies currently do not announce the popover's content in this situation. Additionally, do not rely solely on `hover` as the trigger for your popovers, as this will make them impossible to trigger for keyboard users.

While you can insert rich, structured content with the `content` prop, we strongly recommend that you avoid adding an excessive amount of it. The way popovers currently work is that, once displayed, their content is tied to the trigger element with the `aria-describedby` attribute. As a result, the entirety of the popover's content will be announced to assistive technology users as one long, uninterrupted stream.

Additionally, while it is possible to also include interactive controls (such as form elements or links) in your popover, be aware that currently the popover does not manage keyboard focus order. When a keyboard user opens a popover, focus remains on the triggering element, and as the popover usually does not immediately follow the trigger in the document's structure, there is no guarantee that moving forward/pressing <kbd>TAB</kbd> will move a keyboard user into the popover itself. In short, simply adding interactive controls to a popover is likely to make these controls unreachable/unusable for keyboard users and users of assistive technologies, or at the very least make for an illogical overall focus order. In these cases, consider using a modal dialog instead.

### Disabled elements

Elements with the disabled attribute aren't interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you'll want to trigger the popover from a wrapper `<div>` or `<span>`, ideally made keyboard-focusable using `tabindex="0"`.

For disabled popover triggers, you may also prefer `:trigger="['hover', 'focus']"` so that the popover appears as immediate visual feedback to your users as they may not expect to click on a disabled element.

```html
<template>
  <CPopover content="Disabled popover" placement="right" :trigger="['hover', 'focus']">
    <template #toggler="{ id, on }">
      <span class="d-inline-block" :tabindex="0" :aria-describedby="id" v-on="on">
        <CButton theme="primary" disabled>Disabled button</CButton>
      </span>
    </template>
  </CPopover>
</template>

<script setup>
import { CPopover, CButton } from '@coreui/vue'
</script>
```

## Usage with v-model

_Added in 6.0.0._

Pass `show` and the popover renders what you pass — trigger gestures only emit `update:show`. That is what a **pinned** popover needs: while the checkbox holds `show` true, clicking away only requests a change the page does not grant.

```html
<template>
  <CFormField class="mb-4">
    <CCheckbox id="popoverPinned" v-model="pinned" label="Pin the popover" />
  </CFormField>
  <CPopover
    title="Pinned popover"
    content="While pinned, clicks and Escape only request a change — the page keeps it open."
    :show="pinned || open"
    @update:show="(value) => (open = value)"
  >
    <template #toggler="{ id, on }">
      <CButton theme="secondary" :aria-describedby="id" v-on="on">Click me</CButton>
    </template>
  </CPopover>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CCheckbox, CFormField, CPopover } from '@coreui/vue'

const pinned = ref(true)
const open = ref(false)
</script>
```

Use it when the visibility belongs to something else — an onboarding step, a hint anchored to a control — and feed `update:show` back for the parts you still want the gestures to drive, as the example does while unpinned.

### Initial visibility

Without a binding the trigger gestures manage the popover. Pass `show` to seed it visible on mount, and the gestures take over from there.

```vue
<CPopover title="Popover" content="Shown on load" show>
```

`update:show` fires either way whenever the popover requests a visibility change — a trigger gesture, the Escape key or any internal toggle. The deprecated `visible` prop keeps its old behavior and is ignored when `show` is set.

`update:show` is a request, not a report. To follow what is on screen, `show` and `hide` fire when the popover starts showing or hiding (after `delay`, and only when the visibility actually changes), and `shown` and `hidden` once the transition has finished.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CPopover /&gt;](./api/#cpopover)
