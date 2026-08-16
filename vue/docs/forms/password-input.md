# Vue Password Input Component

> A fully featured Vue password input component with Bootstrap styling. Includes show/hide visibility toggle, validation states, sizing, and full accessibility support.

## Example

The `` is a fully customizable **Vue password input field** designed for security-focused forms. It includes a **toggle to show or hide password visibility**, Bootstrap-based **sizing options**, and full support for `v-model`, validation, `readonly`, and `disabled` states. Ideal for login forms, registration pages, and secure input screens in Vue 3 apps.

```html
<template>
  <CForm>
    <div class="mb-3">
      <CPasswordInput label="Password" placeholder="Enter your password" />
    </div>
    <div class="mb-3">
      <CPasswordInput
        label="Password with value"
        placeholder="Enter your password"
        value="Top secret"
      />
    </div>
    <div>
      <CPasswordInput
        v-model="password"
        label="Password with v-model value"
        placeholder="Enter your password"
      />
    </div>
  </CForm>
</template>

<script setup>
import { CForm } from '@coreui/vue'
import { CPasswordInput } from '@coreui/vue-pro'
import { ref } from 'vue'
const password = ref('Top secret')
</script>
```

## Sizing

Use the `size` prop to adjust the height and padding of the password input. Supports Bootstrap’s sizing classes:

* `size="sm"` – small input
* `size="lg"` – large input

```html
<template>
  <CPasswordInput size="lg" placeholder="Large password input" aria-label="Large input" />
  <CPasswordInput placeholder="Default password input" aria-label="Default input" />
  <CPasswordInput size="sm" placeholder="Small password input" aria-label="Small input" />
</template>

<script setup>
import { CPasswordInput } from '@coreui/vue-pro'
</script>
```

## Disabled

To disable editing, add the `disabled` prop. The field becomes inactive and is visually dimmed.

```html
<template>
  <CPasswordInput placeholder="Disabled input" aria-label="Disabled input example" disabled />
  <CPasswordInput
    placeholder="Disabled readonly input"
    aria-label="Disabled readonly input example"
    disabled
    read-only
  />
</template>

<script setup>
import { CPasswordInput } from '@coreui/vue-pro'
</script>
```

## Readonly

Use the `readOnly` prop to make the password field non-editable, while still allowing users to select and copy the value.

```html
<template>
  <CPasswordInput
    placeholder="Readonly input"
    aria-label="Readonly input example"
    value="You can copy this"
    read-only
  />
</template>

<script setup>
import { CPasswordInput } from '@coreui/vue-pro'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CPasswordInput /&gt;](./api/#cpasswordinput)
