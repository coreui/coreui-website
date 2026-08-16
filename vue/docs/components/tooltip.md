# Vue Tooltip Component and Directive

> Documentation and examples for adding Vue Tooltips.

## Examples

### Tooltips on links

Hover over the links below to see tooltips:

```html
<template>
  <p class="text-body-secondary">
    Tight pants next level keffiyeh
    <CLink v-c-tooltip="'Tooltip text'"> you&nbsp;probably </CLink>
    haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown.
    Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel
    <CLink v-c-tooltip="'Tooltip text'"> have&nbsp;a </CLink>
    terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu
    biodiesel williamsburg marfa, four loko mcsweeney''s cleanse vegan chambray. A really ironic
    artisan
    <CLink v-c-tooltip="'Tooltip text'"> whatever&nbsp;keytar </CLink>
    scenester farm-to-table banksy Austin
    <CLink v-c-tooltip="'Tooltip text'"> twitter&nbsp;handle </CLink>
    freegan cred raw denim single-origin coffee viral.
  </p>
</template>

<script setup>
import { CLink, vctooltip as vCTooltip } from '@coreui/vue'
</script>
```

### Component

Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. Directions are mirrored when using CoreUI in RTL.

```html
<template>
  <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="top">
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Tooltip on top</CButton>
    </template>
  </CTooltip>
  <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="right">
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Tooltip on right</CButton>
    </template>
  </CTooltip>
  <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="bottom">
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Tooltip on bottom</CButton>
    </template>
  </CTooltip>
  <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="left">
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Tooltip on left</CButton>
    </template>
  </CTooltip>
</template>

<script setup>
import { CTooltip, CButton } from '@coreui/vue'
</script>
```

### Directive

```html
<template>
  <CButton
    v-c-tooltip="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'top',
    }"
    color="secondary"
    >Tooltip on top</CButton
  >
  <CButton
    v-c-tooltip="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'right',
    }"
    color="secondary"
    >Tooltip on right</CButton
  >
  <CButton
    v-c-tooltip="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'bottom',
    }"
    color="secondary"
    >Tooltip on bottom</CButton
  >
  <CButton
    v-c-tooltip="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'left',
    }"
    color="secondary"
    >Tooltip on left</CButton
  >
</template>

<script setup>
import { CButton, vctooltip as vCTooltip } from '@coreui/vue'
</script>
```

### Custom tooltips

You can customize the appearance of tooltips using [CSS variables](#css-variables). We set a custom `style` to scope our custom appearance and use it to override some of the local CSS variables.

```html
<template>
  <CTooltip
    content="This top tooltip is themed via CSS variables."
    placement="top"
    :style="customTooltipStyle"
  >
    <template #toggler="{ id, on }">
      <CButton color="secondary" :aria-describedby="id" v-on="on">Custom tooltip</CButton>
    </template>
  </CTooltip>
</template>

<script setup>
import { CTooltip, CButton } from '@coreui/vue'
const customTooltipStyle = {
  '--cui-tooltip-bg': 'var(--cui-primary)',
}
</script>
```

## Usage

A shown tooltip can be dismissed by pressing the <kbd>Escape</kbd> key, helping satisfy the [WCAG 1.4.13 "Content on Hover or Focus"](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html) success criterion.

### Disabled elements

Elements with the disabled attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from a wrapper `<div>` or `<span>`, ideally made keyboard-focusable using `tabindex="0"`.

```html
<template>
  <CTooltip content="Disabled tooltip">
    <template #toggler="{ id, on }">
      <span class="d-inline-block" :tabindex="0" :aria-describedby="id" v-on="on">
        <CButton color="primary" disabled>Disabled button</CButton>
      </span>
    </template>
  </CTooltip>
</template>

<script setup>
import { CTooltip, CButton } from '@coreui/vue'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CTooltip /&gt;](./api/#ctooltip)
