# Vue Password Input Component

> A fully featured Vue password input component with Bootstrap styling. Includes show/hide visibility toggle, validation states, sizing, and full accessibility support.

## Example

The `` is a fully customizable **Vue password input field** designed for security-focused forms. It includes a **toggle to show or hide password visibility**, Bootstrap-based **sizing options**, and full support for `v-model`, validation, `readonly`, and `disabled` states. Ideal for login forms, registration pages, and secure input screens in Vue 3 apps.

```html
<template>
  <CForm>
    <div class="mb-4">
      <CPasswordInput label="Password" placeholder="Enter your password" />
    </div>
    <div class="mb-4">
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

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<template>
  <CFormField>
    <CFormLabel for="passwordInputField">Password</CFormLabel>
    <CPasswordInput id="passwordInputField" placeholder="Enter your password" />
    <CFormText>At least 12 characters.</CFormText>
  </CFormField>
</template>

<script setup>
import { CFormField, CFormLabel, CFormText } from '@coreui/vue'
import { CPasswordInput } from '@coreui/vue-pro'
</script>
```

## Floating labels

Set `floatingLabel` and the component renders the label itself — no wrapper markup needed — and the text also becomes the field's accessible name; the toggle button rides along with the field, and the placeholder stays hidden until the label floats.

```html
<template>
  <CPasswordInput id="floatingPasswordInput" floating-label="Password" />
</template>
```

Set `floatingLabelAlways` to keep the label [always floating](https://coreui.io/vue/docs/forms/floating-labels/#always-floating) with the placeholder showing.

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

To disable editing, add the `disabled` prop. The field becomes inactive and is visually dimmed. The visibility toggle is disabled with it and leaves the tab order, so it can't change what a disabled field shows: a password revealed before stays visible, and can be hidden once the field is enabled again.

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

## Usage with v-model

_Added in 6.0.0._

Bind `v-model:show-password` and the visibility toggle keeps the value in step with your state — the toggle button only emits `@update:show-password`, so the binding feeds the change back. Passed one-way, `show-password` seeds the toggle, and the input manages it from there.

```vue
<CPasswordInput v-model:show-password="visible" label="Password" />
<CPasswordInput show-password label="Password, revealed on mount" />
```

## Icons

The component renders the toggle icon and swaps it when the password becomes visible. Replace either state's artwork with the `showIcon` and `hideIcon` slots:

```vue
<CPasswordInput label="Password">
  <template #showIcon><CIcon icon="cilLowVision" /></template>
  <template #hideIcon><CIcon icon="cilEye" /></template>
</CPasswordInput>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CPasswordInput /&gt;](./api/#cpasswordinput)
