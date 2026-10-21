# Vue Bootstrap Alert Component

> Learn how to use CoreUI’s Vue Alert component with Bootstrap styles for flexible, framework-consistent UI.

## Examples

Vue Alert is prepared for any length of text, as well as an optional close button. For a styling, use one of the **required** contextual `color` props (e.g., `primary`). For inline dismissal, use the [dismissing prop](#dismissing).

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

### Live example

Click the button below to show an alert (hidden with inline styles to start), then dismiss (and destroy) it with the built-in close button.

```html
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

### Link color

Use the `<CAlertLink>` component to immediately give matching colored links inside any alert.
```html
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

### Additional content

Alert can also incorporate supplementary HTML elements like heading, paragraph, and divider.

```html
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

### Icons

Similarly, you can use [flexbox utilities](https://coreui.io/vue/docs/utilities/flex/) and [CoreUI Icons](https://coreui.io/icons/) to create alerts with icons. Depending on your icons and content, you may want to add more utilities or custom styles.

```html
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

Need more than one icon for your alerts? Consider using [CoreUI Icons](https://coreui.io/icons/).

```html
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

### Solid

Use `variant="solid"` to change contextual colors to solid.

```html
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

### Dismissing

Alerts can also be easily dismissed. Just add the `dismissible` prop.

```html
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
