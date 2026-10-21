# Vue Bootstrap Floating labels Component

> Learn how to use CoreUI’s Vue Floating labels component with Bootstrap styles for flexible, framework-consistent UI.

## Example
Use `floatingLabel` property on `<CFormInput>`, `<CFormSelect>` or `<CFormTextarea>` to enable floating labels with textual form fields. A `placeholder` is required on each `<CFormInput>`, `<CFormSelect>` and `<CFormTextarea>` as our method of CSS-only floating labels uses the `:placeholder-shown` pseudo-element. The placeholder stays hidden while the label rests in the field, and shows under the floated label once the field has focus.

```html
<template>
  <CFormInput
    id="floatingInput"
    class="mb-4"
    type="email"
    floating-label="Email address"
    placeholder="name@example.com"
  />
  <CFormInput
    id="floatingPassword"
    type="password"
    floating-label="Password"
    placeholder="••••••••"
  />
</template>

<script setup>
import { CFormInput } from '@coreui/vue'
</script>
```

You can create the same form control by wrapping a pair of `<CFormInput>` and `<CFormLabel>` elements in `<CFormFloating>` to enable floating labels with textual form fields. A `placeholder` is required on each `<CFormInput>` as our method of CSS-only floating labels uses the `:placeholder-shown` pseudo-element. Write the `<CFormLabel>` first, so a screen reader announces it before the field's value. The control-first order keeps working.

```vue
<CFormFloating class="mb-4">
  <CFormLabel for="floatingInput">Email address</CFormLabel>
  <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
</CFormFloating>
<CFormFloating>
  <CFormLabel for="floatingPassword">Password</CFormLabel>
  <CFormInput type="password" id="floatingPassword" placeholder="••••••••" />
</CFormFloating>
```

When there's a `value` already defined, `<CFormLabel>`s will automatically adjust to their floated position.

```html
<template>
  <CFormFloating>
    <CFormInput
      id="floatingInputValue"
      type="email"
      floating-label="Input with value"
      placeholder="name@example.com"
      value="test@example.com"
    />
  </CFormFloating>
</template>

<script setup>
import { CFormFloating, CFormInput } from '@coreui/vue'
</script>
```

Form validation styles also work as expected.

```html
<template>
  <CFormInput
    id="floatingInputInvalid"
    class="mb-4"
    type="email"
    floating-label="Email addresss"
    placeholder="name@example.com"
    validation-state="valid"
    value="test@example.com"
  />
  <CFormInput
    id="floatingInputInvalid"
    type="email"
    validation-state="invalid"
    floating-label="Email addresss"
    placeholder="name@example.com"
    value="test@example.com"
  />
</template>

<script setup>
import { CFormInput } from '@coreui/vue'
</script>
```

## Textareas

By default, `<CFormTextarea>`s will be the same height as `<CFormInput>`s.

```html
<template>
  <CFormFloating>
    <CFormTextarea
      id="floatingTextarea"
      floating-label="Comments"
      placeholder="Leave a comment here"
    ></CFormTextarea>
  </CFormFloating>
</template>

<script setup>
import { CFormFloating, CFormTextarea } from '@coreui/vue'
</script>
```

To set a custom height on your `<CFormTextarea>`, do not use the `rows` attribute. Instead, set an explicit `height` (either inline or via custom CSS).

```html
<template>
  <CFormFloating>
    <CFormTextarea
      id="floatingTextarea2"
      placeholder="Leave a comment here"
      floating-label="Comments"
      style="height: 100px"
    ></CFormTextarea>
  </CFormFloating>
</template>

<script setup>
import { CFormFloating, CFormTextarea } from '@coreui/vue'
</script>
```

## Selects

Other than `<CFormInput>`, floating labels are only available on `<CFormSelect>`s. They work in the same way, but unlike `<CFormInput>`s, they'll always show the `<CFormLabel>` in its floated state. **Selects with `size` and `multiple` are not supported.**

```html
<template>
  <CFormFloating>
    <CFormSelect
      id="floatingSelect"
      floating-label="Works with selects"
      aria-label="Floating label select example"
    >
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
  </CFormFloating>
</template>

<script setup>
import { CFormFloating, CFormSelect } from '@coreui/vue'
</script>
```

## Date and time

Date, time, datetime-local, month, and week inputs also always show the label in its floated state. These controls do not support placeholders the way textual inputs do, so a `placeholder` is not required (and is ignored by most browsers on these types). For a field that formats its value by locale, use the [Date Picker](https://coreui.io/vue/docs/forms/date-picker/#floating-labels) or the [Time Picker](https://coreui.io/vue/docs/forms/time-picker/#floating-labels) with the `floatingLabel` property.

```html
<template>
  <div class="mb-4">
    <CFormInput id="floatingDate" type="date" floating-label="Date" />
  </div>
  <CFormInput id="floatingTime" type="time" floating-label="Time" />
</template>

<script setup>
import { CFormInput } from '@coreui/vue'
</script>
```

## Always floating

Set `floatingLabelAlways` on the form control, or `always` on `<CFormFloating>`, to keep the label floated and show the placeholder.

```html
<template>
  <div class="mb-4">
    <CFormInput
      id="alwaysFloatingInput"
      type="email"
      floating-label="Email address"
      floating-label-always
      placeholder="name@example.com"
    />
  </div>
  <CFormFloating always>
    <CFormLabel for="alwaysFloatingPassword">Password</CFormLabel>
    <CFormInput id="alwaysFloatingPassword" type="password" placeholder="••••••••" />
  </CFormFloating>
</template>

<script setup>
import { CFormFloating, CFormInput, CFormLabel } from '@coreui/vue'
</script>
```

The date and time pickers take `floatingLabelAlways` as well.

```html
<template>
  <CDatePicker floating-label="Delivery date" floating-label-always locale="en-US" />
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

By default, placeholders stay transparent until the control is focused. With `floatingLabelAlways`, the placeholder stays visible in both states, so keep it short on a textarea, where the floated label covers its first line.

## Layout

When working with the CoreUI for Vue grid system, be sure to place form elements within column classes.

```html
<template>
  <CRow :xs="{ gutter: 3 }">
    <CCol md>
      <CFormFloating>
        <CFormInput
          id="floatingInputGrid"
          type="email"
          floating-label="Email address"
          placeholder="name@example.com"
          value="email@example.com"
        />
      </CFormFloating>
    </CCol>
    <CCol md>
      <CFormFloating>
        <CFormSelect
          id="floatingSelectGrid"
          floating-label="Works with selects"
          aria-label="Floating label select example"
        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
      </CFormFloating>
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol, CFormFloating, CFormInput, CFormSelect } from '@coreui/vue'
</script>
```
