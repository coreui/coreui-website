# Vue Placeholder Component

> Use loading Vue placeholders for your components or pages to indicate something may still be loading.

## About

Placeholders can be used to enhance the experience of your application. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.

## Example

In the example below, we take a typical card component and recreate it with placeholders applied to create a "loading card". Size and proportions are the same between the two.

In the example below, we take a typical card component and recreate it with placeholders applied to create a "loading card". Size and proportions are the same between the two.

```html
<template>
  <div class="d-flex justify-content-around">
    <CCard style="width: 18rem">
      <CCardImage orientation="top" src="/assets/img/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CCardText>
        <CButton color="primary" href="#">Go somewhere</CButton>
      </CCardBody>
    </CCard>
    <CCard style="width: 18rem">
      <CCardImage
        as="svg"
        orientation="top"
        width="100%"
        height="162"
        role="img"
        aria-label="Placeholder"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect>
      </CCardImage>
      <CCardBody>
        <CCardTitle v-c-placeholder="{ animation: 'glow', xs: 7 }">
          <CPlaceholder :xs="6" />
        </CCardTitle>
        <CCardText v-c-placeholder="{ animation: 'glow' }">
          <CPlaceholder :xs="7" />
          <CPlaceholder :xs="4" />
          <CPlaceholder :xs="4" />
          <CPlaceholder :xs="6" />
          <CPlaceholder :xs="8" />
        </CCardText>
        <CButton
          v-c-placeholder="{ xs: 6 }"
          color="primary"
          aria-hidden="true"
          disabled
          href="#"
          tabindex="-1"
        ></CButton>
      </CCardBody>
    </CCard>
  </div>
</template>

<script setup>
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CPlaceholder,
} from '@coreui/vue'
</script>
```

## How it works

Create placeholders with the `<CPlaceholder>` component and a grid column propx (e.g., `:xs="6"`) to set the `width`. They can replace the text inside an element or be added as a modifier class to an existing component.

We apply additional styling to `CButton`s via `::before` to ensure the `height` is respected. You may extend this pattern for other situations as needed, or add a `&nbsp;` within the element to reflect the height when actual text is rendered in its place.

```html
<template>
  <p aria-hidden="true">
    <CPlaceholder :xs="6" />
  </p>
  <CButton
    v-c-placeholder="{ xs: 4 }"
    color="primary"
    aria-hidden="true"
    disabled
    href="#"
    tabindex="-1"
  ></CButton>
</template>

<script setup>
import { CPlaceholder, CButton } from '@coreui/vue'
</script>
```

> The use of aria-hidden="true" only indicates that the element should be hidden to screen readers. The loading behavior of the placeholder depends on how authors will actually use the placeholder styles, how they plan to update things, etc. Some JavaScript code may be needed to *swap* the state of the placeholder and inform AT users of the update.

### Width

You can change the `width` through grid column classes, width utilities, or inline styles.

```html
<template>
  <CPlaceholder :xs="6" />
  <CPlaceholder class="w-75" />
  <CPlaceholder style="width: 30%" />
</template>

<script setup>
import { CPlaceholder } from '@coreui/vue'
</script>
```

### Color

By default, the `<CPlaceholder>` uses `currentColor`. This can be overridden with a custom color or utility class.

```html
<template>
  <CPlaceholder :xs="12" />

  <CPlaceholder color="primary" :xs="12" />
  <CPlaceholder color="secondary" :xs="12" />
  <CPlaceholder color="success" :xs="12" />
  <CPlaceholder color="danger" :xs="12" />
  <CPlaceholder color="warning" :xs="12" />
  <CPlaceholder color="info" :xs="12" />
  <CPlaceholder color="light" :xs="12" />
  <CPlaceholder color="dark" :xs="12" />
</template>

<script setup>
import { CPlaceholder } from '@coreui/vue'
</script>
```

### Sizing

The size of `<CPlaceholder>`s are based on the typographic style of the parent element. Customize them with `size` prop: `lg`, `sm`, or `xs`.

```html
<template>
  <CPlaceholder :xs="12" size="lg" />
  <CPlaceholder :xs="12" />
  <CPlaceholder :xs="12" size="sm" />
  <CPlaceholder :xs="12" size="xs" />
</template>

<script setup>
import { CPlaceholder } from '@coreui/vue'
</script>
```

### Animation

Animate placeholders with `animation="glow"` or `animation="wave"` to better convey the perception of something being _actively_ loaded.

```html
<template>
  <CPlaceholder as="p" animation="glow">
    <CPlaceholder :xs="12" />
  </CPlaceholder>
  <CPlaceholder as="p" animation="wave">
    <CPlaceholder :xs="12" />
  </CPlaceholder>
</template>

<script setup>
import { CPlaceholder } from '@coreui/vue'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CPlaceholder /&gt;](./api/#cplaceholder)
