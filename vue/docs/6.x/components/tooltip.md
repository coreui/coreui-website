# Vue Tooltip Component and Directive

> Documentation and examples for adding Vue Tooltips.

## Examples

### Tooltips on links

Hover over the links below to see tooltips:

```html
<template>
  <p class="fg-2">
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

Hover over the buttons below to see the four directions: `top`, `end`, `bottom` and `start`.

```html
<template>
  <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="top">
    <template #toggler="{ id, on }">
      <CButton theme="secondary" :aria-describedby="id" v-on="on">Tooltip on top</CButton>
    </template>
  </CTooltip>
  <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="end">
    <template #toggler="{ id, on }">
      <CButton theme="secondary" :aria-describedby="id" v-on="on">Tooltip at the end</CButton>
    </template>
  </CTooltip>
  <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="bottom">
    <template #toggler="{ id, on }">
      <CButton theme="secondary" :aria-describedby="id" v-on="on">Tooltip on bottom</CButton>
    </template>
  </CTooltip>
  <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="start">
    <template #toggler="{ id, on }">
      <CButton theme="secondary" :aria-describedby="id" v-on="on">Tooltip at the start</CButton>
    </template>
  </CTooltip>
</template>

<script setup>
import { CTooltip, CButton } from '@coreui/vue'
</script>
```

`start` and `end` are logical: they follow the reading direction, so `end` is the right side in LTR and the left side in RTL.

#### Deprecated physical names

_Deprecated in 6.0.0._

`left` and `right` still work and behave exactly like `start` and `end` — they have always mirrored in RTL, so `right` never meant "the right side" there either. The logical names say that plainly; the physical ones are removed in v7.

```html
<template>
  <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="right">
    <template #toggler="{ id, on }">
      <CButton theme="secondary" :aria-describedby="id" v-on="on">Tooltip on right</CButton>
    </template>
  </CTooltip>
  <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus" placement="left">
    <template #toggler="{ id, on }">
      <CButton theme="secondary" :aria-describedby="id" v-on="on">Tooltip on left</CButton>
    </template>
  </CTooltip>
</template>
```

### Directive

```html
<template>
  <CButton
    v-c-tooltip="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'top',
    }"
    theme="secondary"
    >Tooltip on top</CButton
  >
  <CButton
    v-c-tooltip="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'right',
    }"
    theme="secondary"
    >Tooltip on right</CButton
  >
  <CButton
    v-c-tooltip="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'bottom',
    }"
    theme="secondary"
    >Tooltip on bottom</CButton
  >
  <CButton
    v-c-tooltip="{
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      placement: 'left',
    }"
    theme="secondary"
    >Tooltip on left</CButton
  >
</template>

<script setup>
import { CButton, vctooltip as vCTooltip } from '@coreui/vue'
</script>
```

### Custom tooltips

You can customize the appearance of tooltips using [CSS variables](https://coreui.io/vue/docs/components/tooltip/styling/#css-variables). We set a custom `style` to scope our custom appearance and use it to override some of the local CSS variables.

```html
<template>
  <CTooltip
    content="This top tooltip is themed via CSS variables."
    placement="top"
    :style="customTooltipStyle"
  >
    <template #toggler="{ id, on }">
      <CButton theme="secondary" :aria-describedby="id" v-on="on">Custom tooltip</CButton>
    </template>
  </CTooltip>
</template>

<script setup>
import { CTooltip, CButton } from '@coreui/vue'
const customTooltipStyle = {
  '--cui-tooltip-bg': 'var(--cui-primary-base)',
}
</script>
```

### Theme variants

A tooltip reads the `.theme-{color}` slots, so a [theme class](https://coreui.io/vue/docs/customize/components/#theme-variants) on the tip colors its surface and picks the contrasting text. Pass it through `class`; without one the tip keeps its default look, the page's foreground color.

```html
<template>
  <CTooltip class="theme-primary" content="Primary tooltip">
    <template #toggler="{ id, on }">
      <CButton variant="outline" :aria-describedby="id" v-on="on">Primary</CButton>
    </template>
  </CTooltip>
  <CTooltip class="theme-secondary" content="Secondary tooltip">
    <template #toggler="{ id, on }">
      <CButton variant="outline" :aria-describedby="id" v-on="on">Secondary</CButton>
    </template>
  </CTooltip>
  <CTooltip class="theme-success" content="Success tooltip">
    <template #toggler="{ id, on }">
      <CButton variant="outline" :aria-describedby="id" v-on="on">Success</CButton>
    </template>
  </CTooltip>
  <CTooltip class="theme-danger" content="Danger tooltip">
    <template #toggler="{ id, on }">
      <CButton variant="outline" :aria-describedby="id" v-on="on">Danger</CButton>
    </template>
  </CTooltip>
</template>

<script setup>
import { CButton, CTooltip } from '@coreui/vue'
</script>
```

### Responsive placement

Breakpoint prefixes make a placement responsive: `top md:end` reads as top below `md` and end from `md` up. The breakpoints are the Sass ones — `sm` 576px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px. A bare placement with no prefix applies below the smallest one listed.

```html
<template>
  <CTooltip content="Top below md, right from md up." placement="top md:right">
    <template #toggler="{ id, on }">
      <CButton :aria-describedby="id" theme="secondary" v-on="on">Responsive placement</CButton>
    </template>
  </CTooltip>
</template>

<script setup>
import { CButton, CTooltip } from '@coreui/vue'
</script>
```

## Usage

A shown tooltip can be dismissed by pressing the <kbd>Escape</kbd> key, helping satisfy the [WCAG 1.4.13 "Content on Hover or Focus"](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html) success criterion. A focus-triggered `<CTooltip>` also stays open after a press inside it, for example to select its text, and hides on the next click outside or when focus moves elsewhere.

### Disabled elements

Elements with the disabled attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from a wrapper `<div>` or `<span>`, ideally made keyboard-focusable using `tabindex="0"`.

```html
<template>
  <CTooltip content="Disabled tooltip">
    <template #toggler="{ id, on }">
      <span class="d-inline-block" :tabindex="0" :aria-describedby="id" v-on="on">
        <CButton theme="primary" disabled>Disabled button</CButton>
      </span>
    </template>
  </CTooltip>
</template>

<script setup>
import { CTooltip, CButton } from '@coreui/vue'
</script>
```

## Usage with v-model

_Added in 6.0.0._

Pass `show` and the tooltip renders what you pass — trigger gestures only emit `update:show` (the `delay` still applies as presentation). That is what a **pinned** tooltip needs: while the checkbox holds `show` true, hovering away only requests a change the page does not grant.

```html
<template>
  <CFormField class="mb-4">
    <CCheckbox id="tooltipPinned" v-model="pinned" label="Pin the tooltip" />
  </CFormField>
  <CTooltip
    content="Pinned tooltips stay put."
    :show="pinned || hovered"
    @update:show="(value) => (hovered = value)"
  >
    <template #toggler="{ id, on }">
      <CButton theme="secondary" :aria-describedby="id" v-on="on">Hover me</CButton>
    </template>
  </CTooltip>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CCheckbox, CFormField, CTooltip } from '@coreui/vue'

const pinned = ref(true)
const hovered = ref(false)
</script>
```

Use it when the visibility belongs to something else — an onboarding step, a validation hint that must stay put — and feed `update:show` back for the parts you still want the gestures to drive, as the example does while unpinned.

### Initial visibility

Without a binding the trigger gestures manage the tooltip. Pass `show` to seed it visible on mount, and the gestures take over from there.

```vue
<CTooltip content="Shown on load" show>
```

`update:show` fires either way whenever the tooltip requests a visibility change — a trigger gesture (hover, focus, click), the Escape key or any internal toggle. The deprecated `visible` prop keeps its old behavior and is ignored when `show` is set.

`update:show` is a request, not a report. To follow what is on screen, `show` and `hide` fire when the tooltip starts showing or hiding (after `delay`, and only when the visibility actually changes), and `shown` and `hidden` once the transition has finished.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CTooltip /&gt;](./api/#ctooltip)
