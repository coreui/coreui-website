# Vue Bootstrap Form input Component

> Learn how to use CoreUI’s Vue Form input component with Bootstrap styles for flexible, framework-consistent UI.

## Example

```html
<template>
  <CForm>
    <CFormInput
      id="exampleFormControlInput1"
      type="email"
      label="Email address"
      placeholder="name@example.com"
      text="Must be 8-20 characters long."
      aria-describedby="exampleFormControlInputHelpInline"
    />
  </CForm>
</template>

<script setup>
import { CForm, CFormInput } from '@coreui/vue'
</script>
```

If you need to add custom classs to form's components, or need to add some custom elements you can add each form component separately. Please check the example below.

```vue
<CForm>
  <CFormLabel for="exampleFormControlInput1">Email address</CFormLabel>
  <CFormInput type="email" id="exampleFormControlInput1" placeholder="name@example.com" aria-describedby="exampleFormControlInputHelpInline" />
  <CFormText as="span" id="exampleFormControlInputHelpInline">
    Must be 8-20 characters long.
  </CFormText>
</CForm>
```

You can also use slots.

```vue
<CFormInput
  type="email"
  id="exampleFormControlInput1"
  placeholder="name@example.com"
  aria-describedby="exampleFormControlInputHelpInline"
>
  <template #label>Email address</template>
  <template #text>Must be 8-20 characters long.</template>
</CFormInput>
```

## Sizing

Set heights using `size` property like `size="lg"` and `size="sm"`.

```html
<template>
  <CFormInput
    type="text"
    class="mb-3"
    size="lg"
    placeholder="Large input"
    aria-label="lg input example"
  />
  <CFormInput
    type="text"
    class="mb-3"
    placeholder="Default input"
    aria-label="default input example"
  />
  <CFormInput
    type="text"
    class="mb-3"
    size="sm"
    placeholder="Small input"
    aria-label="sm input example"
  />
</template>

<script setup>
import { CFormInput } from '@coreui/vue'
</script>
```

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

```html
<template>
  <CFormInput
    type="text"
    placeholder="Disabled input"
    aria-label="Disabled input example"
    disabled
  />
  <br />
  <CFormInput
    type="text"
    placeholder="Disabled readonly input"
    aria-label="Disabled input example"
    disabled
    readonly
  />
  <br />
</template>

<script setup>
import { CFormInput } from '@coreui/vue'
</script>
```

## Readonly

Add the `readonly` boolean attribute on an input to prevent modification of the input's value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.

```html
<template>
  <CFormInput
    type="text"
    placeholder="Readonly input here..."
    aria-label="readonly input example"
    readonly
  />
</template>

<script setup>
import { CFormInput } from '@coreui/vue'
</script>
```

## Readonly plain text

If you want to have `<input readonly>` elements in your form styled as plain text, use the `plain-text` boolean property to remove the default form field styling and preserve the correct margin and padding.

```html
<template>
  <CRow class="mb-3">
    <CFormLabel for="staticEmail" class="col-sm-2 col-form-label">Email</CFormLabel>
    <div class="col-sm-10">
      <CFormInput id="staticEmail" type="text" value="email@example.com" readonly plain-text />
    </div>
  </CRow>
  <CRow class="mb-3">
    <CFormLabel for="inputPassword" class="col-sm-2 col-form-label">Password</CFormLabel>
    <div class="col-sm-10">
      <CFormInput id="inputPassword" type="password" />
    </div>
  </CRow>
</template>

<script setup>
import { CRow, CFormLabel, CFormInput } from '@coreui/vue'
</script>
```

```html
<template>
  <CForm class="row g-3">
    <div class="col-auto">
      <CFormLabel for="staticEmail2" class="visually-hidden">Email</CFormLabel>
      <CFormInput id="staticEmail2" type="text" value="email@example.com" readonly plain-text />
    </div>
    <div class="col-auto">
      <CFormLabel for="inputPassword2" class="visually-hidden">Password</CFormLabel>
      <CFormInput id="inputPassword2" type="password" placeholder="Password" />
    </div>
    <div class="col-auto">
      <CButton type="submit" color="primary" class="mb-3">Confirm identity</CButton>
    </div>
  </CForm>
</template>

<script setup>
import { CForm, CFormLabel, CFormInput, CButton } from '@coreui/vue'
</script>
```

## File input

```html
<template>
  <div class="mb-3">
    <CFormInput id="formFile" type="file" label="Default file input example" />
  </div>
  <div class="mb-3">
    <CFormInput id="formFileMultiple" type="file" label="Multiple files input example" multiple />
  </div>
  <div class="mb-3">
    <CFormInput id="formFileDisabled" type="file" label="Disabled file input example" disabled />
  </div>
  <div class="mb-3">
    <CFormInput id="formFileSm" type="file" size="sm" label="Small file input example" />
  </div>
  <div>
    <CFormInput id="formFileLg" type="file" size="lg" label="Large file input example" />
  </div>
</template>

<script setup>
import { CFormInput } from '@coreui/vue'
</script>
```

## Color

```html
<template>
  <CFormInput
    id="exampleColorInput"
    type="color"
    label="Color picker"
    title="Choose your color"
    value="#563d7c"
  />
</template>

<script setup>
import { CFormInput } from '@coreui/vue'
</script>
```
