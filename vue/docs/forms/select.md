# Vue Select Component

> Vue select component. Customize the native `<select>`s with custom CSS that changes the element's initial appearance.

## Default

```html
<template>
  <CFormSelect
    aria-label="Default select example"
    :options="[
      'Open this select menu',
      { label: 'One', value: '1' },
      { label: 'Two', value: '2' },
      { label: 'Three', value: '3', disabled: true },
    ]"
  ></CFormSelect>
</template>

<script setup>
import { CFormSelect } from '@coreui/vue'
</script>
```

## Sizing

You may also choose from small and large custom selects to match our similarly sized text inputs.

```html
<template>
  <CFormSelect size="lg" class="mb-3" aria-label="Large select example">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </CFormSelect>
  <CFormSelect size="sm" class="mb-3" aria-label="Small select example">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </CFormSelect>
</template>

<script setup>
import { CFormSelect } from '@coreui/vue'
</script>
```

The `multiple` attribute is also supported:

```html
<template>
  <CFormSelect size="lg" multiple aria-label="Multiple select example">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </CFormSelect>
</template>

<script setup>
import { CFormSelect } from '@coreui/vue'
</script>
```

As is the `html-size` property:

```html
<template>
  <CFormSelect :html-size="3" multiple aria-label="size 3 select example">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </CFormSelect>
</template>

<script setup>
import { CFormSelect } from '@coreui/vue'
</script>
```

## Disabled

Add the `disabled` boolean attribute on a select to give it a grayed out appearance and remove pointer events.

```html
<template>
  <CFormSelect aria-label="Disabled select example" disabled>
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </CFormSelect>
</template>

<script setup>
import { CFormSelect } from '@coreui/vue'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CFormSelect /&gt;](./api/#cformselect)
- [&lt;CFormFeedback /&gt;](./api/#cformfeedback)
- [&lt;CFormLabel /&gt;](./api/#cformlabel)
- [&lt;CFormText /&gt;](./api/#cformtext)
