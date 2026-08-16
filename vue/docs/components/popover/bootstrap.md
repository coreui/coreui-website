# Vue Bootstrap Popover Component

> Learn how to use CoreUI’s Vue Popover component with Bootstrap styles for flexible, framework-consistent UI.

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
      <CButton color="danger" size="lg" :aria-describedby="id" v-on="on"
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
    color="danger"
    size="lg"
    >Click to toggle popover</CButton
  >
</template>

<script setup>
import { CButton, vcpopover as vCPopover } from '@coreui/vue'
</script>
```

### Four directions

Four options are available: top, right, bottom, and left aligned. Directions are mirrored when using CoreUI for Vue in RTL.

#### Component

```html
<template>
  <CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="top">
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Popover on top</CButton>
    </template>
  </CPopover>
  <CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="right">
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Popover on right</CButton>
    </template>
  </CPopover>
  <CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="bottom">
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Popover on bottom</CButton>
    </template>
  </CPopover>
  <CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="left">
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Popover on left</CButton>
    </template>
  </CPopover>
</template>

<script setup>
import { CPopover, CButton } from '@coreui/vue'
</script>
```

#### Directive

```html
<template>
  <CButton
    v-c-popover="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'top',
    }"
    color="secondary"
    >Popover on top</CButton
  >
  <CButton
    v-c-popover="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'right',
    }"
    color="secondary"
    >Popover on right</CButton
  >
  <CButton
    v-c-popover="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'bottom',
    }"
    color="secondary"
    >Popover on bottom</CButton
  >
  <CButton
    v-c-popover="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'left',
    }"
    color="secondary"
    >Popover on left</CButton
  >
</template>

<script setup>
import { CButton, vcpopover as vCPopover } from '@coreui/vue'
</script>
```

### Custom popovers

You can customize the appearance of popovers using [CSS variables](#css-variables). We set a custom `style` to scope our custom appearance and use it to override some of the local CSS variables.

```html
<template>
  <CPopover
    content="This popover is themed via CSS variables."
    placement="right"
    title="Custom popover"
    :style="customPopoverStyle"
  >
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Custom popover</CButton>
    </template>
  </CPopover>
</template>

<script setup>
import { CPopover, CButton } from '@coreui/vue'
const customPopoverStyle = {
  '--cui-popover-max-width': '200px',
  '--cui-popover-border-color': 'var(--cui-primary)',
  '--cui-popover-header-bg': 'var(--cui-primary)',
  '--cui-popover-header-color': 'var(--cui-white)',
  '--cui-popover-body-padding-x': '1rem',
  '--cui-popover-body-padding-y': '.5rem',
}
</script>
```

## Usage

### Disabled elements

Elements with the disabled attribute aren't interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you'll want to trigger the popover from a wrapper `<div>` or `<span>`, ideally made keyboard-focusable using `tabindex="0"`.

For disabled popover triggers, you may also prefer `:trigger="['hover', 'focus']"` so that the popover appears as immediate visual feedback to your users as they may not expect to click on a disabled element.

```html
<template>
  <CPopover content="Disabled popover" placement="right" :trigger="['hover', 'focus']">
    <template #toggler="{ id, on }">
      <span class="d-inline-block" :tabindex="0" :aria-describedby="id" v-on="on">
        <CButton color="primary" disabled>Disabled button</CButton>
      </span>
    </template>
  </CPopover>
</template>

<script setup>
import { CPopover, CButton } from '@coreui/vue'
</script>
```
