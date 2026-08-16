# Vue Floating labels

> Vue floating label component. Create beautifully simple form labels that float over your input fields.

## Example
Use `floatingLabel` property on `<CFormInput>`, `<CFormSelect>` or `<CFormTextarea>` to enable floating labels with textual form fields. A `placeholder` is required on each `<CFormInput>`, `<CFormSelect>` and `<CFormTextarea>` as our method of CSS-only floating labels uses the `:placeholder-shown` pseudo-element.

```html
<template>
  <CFormInput
    id="floatingInput"
    class="mb-3"
    type="email"
    floating-label="Email address"
    placeholder="name@example.com"
  />
  <CFormInput
    id="floatingPassword"
    type="password"
    floating-label="Password"
    placeholder="Password"
  />
</template>

<script setup>
import { CFormInput } from '@coreui/vue'
</script>
```

You can create the same form control by wrapping a pair of `<CFormInput>` and `<CFormLabel>` elements in `<CFormFloating>` to enable floating labels with textual form fields. A `placeholder` is required on each `<CFormInput>` as our method of CSS-only floating labels uses the `:placeholder-shown` pseudo-element. Also, note that the `<CFormInput>` must come first so we can utilize a sibling selector (e.g., `~`).

```vue
<CFormFloating class="mb-3">
  <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
  <CFormLabel for="floatingInput">Email address</CFormLabel>
</CFormFloating>
<CFormFloating>
  <CFormInput type="password" id="floatingPassword" placeholder="Password" />
  <CFormLabel for="exampleFormControlPassword">Password</CFormLabel>
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
    class="mb-3"
    type="email"
    floating-label="Email addresss"
    placeholder="name@example.com"
    valid
    value="test@example.com"
  />
  <CFormInput
    id="floatingInputInvalid"
    type="email"
    invalid
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

## Layout

When working with the CoreUI for Bootstrap grid system, be sure to place form elements within column classes.

```html
<template>
  <CRow :xs="{ gutter: 2 }">
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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CFormFloating /&gt;](./api/#cformfloating)
