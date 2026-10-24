# Vue Alert Component

> Vue alert component gives contextual feedback information for common user operations. The alert component is delivered with a bunch of usable and adjustable alert messages.

## Default alert

Vue Alert is prepared for any length of text, as well as an optional close button. A bare `<CAlert>` is a neutral alert — a bordered surface that inherits the text color of its surroundings. For inline dismissal, use the [dismissing prop](#dismissing).

```html
<template>
  <CAlert>A simple alert—check it out!</CAlert>
</template>

<script setup>
import { CAlert } from '@coreui/vue'
</script>
```

## Theme variants

Set [`theme`](https://coreui.io/vue/docs/customize/components/#theme-variants) to color the alert. It renders a `.theme-*` class, so a theme class on any element above the alert colors it just the same.

```html
<template>
  <CAlert theme="primary">A simple primary alert—check it out!</CAlert>
  <CAlert theme="secondary">A simple secondary alert—check it out!</CAlert>
  <CAlert theme="success">A simple success alert—check it out!</CAlert>
  <CAlert theme="danger">A simple danger alert—check it out!</CAlert>
  <CAlert theme="warning">A simple warning alert—check it out!</CAlert>
  <CAlert theme="info">A simple info alert—check it out!</CAlert>
  <CAlert theme="secondary">A simple light alert—check it out!</CAlert>
  <CAlert theme="inverse">A simple dark alert—check it out!</CAlert>
</template>

<script setup>
import { CAlert } from '@coreui/vue'
</script>
```

> ## Live example
> 
> Click the button below to show an alert (hidden with inline styles to start), then dismiss (and destroy) it with the built-in close button.
> 
> ```html
<template>
  <CAlert v-model:show="show" theme="primary" dismissible>
    A simple primary alert—check it out!
  </CAlert>
  <CButton theme="primary" @click="show = true">Show live alert</CButton>
</template>

<script setup>
import { ref } from 'vue'
import { CAlert, CButton } from '@coreui/vue'

const show = ref(false)
</script>
```
> 
> ## Link color
> 
> Use the `` component to immediately give matching colored links inside any Vue alert component.
> 
> ```html
<template>
  <CAlert theme="primary">
    A simple primary alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click
    if you like.
  </CAlert>
  <CAlert theme="secondary">
    A simple secondary alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click
    if you like.
  </CAlert>
  <CAlert theme="success">
    A simple success alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click
    if you like.
  </CAlert>
  <CAlert theme="danger">
    A simple danger alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if
    you like.
  </CAlert>
  <CAlert theme="warning">
    A simple warning alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click
    if you like.
  </CAlert>
  <CAlert theme="info">
    A simple info alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if
    you like.
  </CAlert>
  <CAlert theme="secondary">
    A simple light alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if
    you like.
  </CAlert>
  <CAlert theme="inverse">
    A simple dark alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if
    you like.
  </CAlert>
</template>

<script setup>
import { CAlert, CAlertLink } from '@coreui/vue'
</script>
```
> 
> ## Additional content
> 
> Vue Alert can also incorporate supplementary components &amp; elements like heading, paragraph, and divider. The alert lays its children out in a row, so wrap them in a `.vstack` to keep them stacked.
> 
> ```html
<template>
  <CAlert theme="success">
    <div class="vstack">
      <CAlertHeading as="h4">Well done!</CAlertHeading>
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to
        run a bit longer so that you can see how spacing within an alert works with this kind of
        content.
      </p>
      <hr />
      <p class="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
      </p>
    </div>
  </CAlert>
</template>

<script setup>
import { CAlert, CAlertHeading } from '@coreui/vue'
</script>
```
> 
> ## Icons
> 
> Put an icon straight into the alert — it lays its children out in a row and spaces them with `--cui-alert-gap`, so no flexbox utilities are needed. Use [CoreUI Icons](https://coreui.io/icons/) or any inline SVG.
> 
> ```html
<template>
  <CAlert theme="primary">
    <svg class="flex-shrink-0" width="24" height="24" viewBox="0 0 512 512">
      <rect
        width="32"
        height="176"
        x="240"
        y="176"
        fill="var(--ci-primary-color, currentColor)"
        class="ci-primary"
      ></rect>
      <rect
        width="32"
        height="32"
        x="240"
        y="384"
        fill="var(--ci-primary-color, currentColor)"
        class="ci-primary"
      ></rect>
      <path
        fill="var(--ci-primary-color, currentColor)"
        d="M274.014,16H237.986L16,445.174V496H496V445.174ZM464,464H48V452.959L256,50.826,464,452.959Z"
        class="ci-primary"
      ></path>
    </svg>

    <div>An example alert with an icon</div>
  </CAlert>
</template>

<script setup>
import { CAlert } from '@coreui/vue'
</script>
```
> 
> Need more than one icon for your Vue alerts? Consider using [CoreUI Icons](https://coreui.io/icons/).
> 
> ```html
<template>
  <CAlert theme="primary">
    <CIcon :icon="cilInfo" class="flex-shrink-0" width="24" height="24" />

    <div>An example alert with an icon</div>
  </CAlert>
  <CAlert theme="success">
    <CIcon :icon="cilCheckCircle" class="flex-shrink-0" width="24" height="24" />
    <div>An example success alert with an icon</div>
  </CAlert>
  <CAlert theme="warning">
    <CIcon :icon="cilWarning" class="flex-shrink-0" width="24" height="24" />
    <div>An example warning alert with an icon</div>
  </CAlert>
  <CAlert theme="danger">
    <CIcon :icon="cilBurn" class="flex-shrink-0" width="24" height="24" />
    <div>An example danger alert with an icon</div>
  </CAlert>
</template>

<script setup>
import { CAlert } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilBurn, cilCheckCircle, cilInfo, cilWarning } from '@coreui/icons'
</script>
```
> 
> ## Solid
> 
> 
> 
> Use `variant="solid"` for a high-contrast alert. The background takes the theme color and the text takes the color that reads on it, so a yellow alert gets dark text and a dark one gets light text without you picking either.
> 
> ```html
<template>
  <CAlert theme="primary" variant="solid">A simple solid primary alert—check it out!</CAlert>
  <CAlert theme="secondary" variant="solid">A simple solid secondary alert—check it out!</CAlert>
  <CAlert theme="success" variant="solid">A simple solid success alert—check it out!</CAlert>
  <CAlert theme="danger" variant="solid">A simple solid danger alert—check it out!</CAlert>
  <CAlert theme="warning" variant="solid">A simple solid warning alert—check it out!</CAlert>
  <CAlert theme="info" variant="solid">A simple solid info alert—check it out!</CAlert>
  <CAlert theme="secondary" variant="solid">A simple solid light alert—check it out!</CAlert>
  <CAlert theme="inverse" variant="solid">A simple solid dark alert—check it out!</CAlert>
</template>

<script setup>
import { CAlert } from '@coreui/vue'
</script>
```
> 
> ## Dismissing
> 
> Vue Alert component can also be easily dismissed. Just add the `dismissible` prop.
> 
> ```html
<template>
  <CAlert theme="warning" dismissible @close="handleClose">
    <strong>Go right ahead</strong> and click that dismiss over there on the right.
  </CAlert>
</template>

<script setup>
import { CAlert } from '@coreui/vue'

const handleClose = () => {
  alert('👋 Well, hi there! Thanks for dismissing me.')
}
</script>
```
> 
> 
> 
> An alert also makes room for a `` you render as its direct child, so your own close
> button is positioned without the `dismissible` prop. It has to be a *direct* child to be pushed to
> the end of the alert — one nested in a wrapper is laid out by that wrapper like any other content.
> 
> An alert rendered with `transition` fades in when it is added to the page, not only out when it is
> dismissed.
> 
> 
> When an alert is dismissed, the element is completely removed from the page structure. If a
> keyboard user dismisses the alert using the close button, their focus will suddenly be lost and,
> depending on the browser, reset to the start of the page/document.

`:transition="false"` renders the alert with `.alert-instant`, so it is dismissed at once with no fade. The fade itself can be retimed with `--cui-alert-transition-duration` and `--cui-alert-transition-timing`.

### Collapse the box as well

_Added in 6.0.0._

`transition="size"` animates the alert's height, padding, borders and margin alongside the opacity, so the content below rises into its place instead of jumping once the alert is gone — and grows from nothing when the alert arrives. It takes [`interpolate-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size), so in a browser without it the alert fades in place as usual.

```html
<template>
  <CAlert v-model:show="show" theme="info" dismissible transition="size">
    This alert takes its box with it, so the button below moves with the animation.
  </CAlert>
  <CButton theme="primary" @click="show = true">Show the alert again</CButton>
</template>

<script setup>
import { ref } from 'vue'
import { CAlert, CButton } from '@coreui/vue'

const show = ref(true)
</script>
```

## Usage with v-model

_Added in 6.0.0._

Bind `v-model:show` and the alert renders exactly what your state says — the dismiss button only emits `@update:show`. Nothing closes until you flip the value. Because the state lives outside, a dismissed alert can come back.

```html
<template>
  <CAlert v-model:show="show" theme="primary" dismissible>
    A controlled alert — the open state lives outside, so it can come back.
  </CAlert>
  <CButton theme="primary" :disabled="show" @click="show = true">Restore the alert</CButton>
</template>

<script setup>
import { ref } from 'vue'
import { CAlert, CButton } from '@coreui/vue'

const show = ref(true)
</script>
```

Use it when the visibility belongs to something else: a validation result, a notification store, or a preference you persist.

### Initial visibility

An alert starts visible on its own, and a dismissed one removes itself — exactly as the examples above do. Pass `:show="false"` for one that appears later.

```vue
<CAlert theme="primary" dismissible :show="false">
```

`@update:show` fires either way whenever the alert requests a visibility change — the dismiss button or any internal toggle. The deprecated `visible` prop keeps its old behavior and is ignored when `show` is set.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CAlert /&gt;](./api/#calert)
- [&lt;CAlertHeading /&gt;](./api/#calertheading)
- [&lt;CAlertLink /&gt;](./api/#calertlink)
