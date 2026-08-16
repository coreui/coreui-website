# Vue Form Controls

> Vue input and textarea components. Give textual form controls like `<input>`s and `<textarea>`s an upgrade with custom styles, sizing, focus states, and more.

## Example

```html
<template>
  <CForm>
    <div class="mb-3">
      <CFormLabel for="exampleFormControlInput1">Email address</CFormLabel>
      <CFormInput id="exampleFormControlInput1" type="email" placeholder="name@example.com" />
    </div>
    <div class="mb-3">
      <CFormLabel for="exampleFormControlTextarea1">Example textarea</CFormLabel>
      <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
    </div>
  </CForm>
</template>

<script setup>
import { CForm, CFormLabel, CFormInput, CFormTextarea } from '@coreui/vue'
</script>
```

## Sizing

Set heights using `size` property like `size="lg"` and `size="sm"`.

```html
<template>
  <CFormInput type="text" size="lg" placeholder="Large input" aria-label="lg input example" />
  <br />
  <CFormInput type="text" placeholder="Default input" aria-label="default input example" />
  <br />
  <CFormInput type="text" size="sm" placeholder="Small input" aria-label="sm input example" />
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
    <CFormLabel for="formFile">Default file input example</CFormLabel>
    <CFormInput id="formFile" type="file" />
  </div>
  <div class="mb-3">
    <CFormLabel for="formFileMultiple">Multiple files input example</CFormLabel>
    <CFormInput id="formFileMultiple" type="file" multiple />
  </div>
  <div class="mb-3">
    <CFormLabel for="formFileDisabled">Disabled file input example</CFormLabel>
    <CFormInput id="formFileDisabled" type="file" disabled />
  </div>
  <div class="mb-3">
    <CFormLabel for="formFileSm">Small file input example</CFormLabel>
    <CFormInput id="formFileSm" type="file" size="sm" />
  </div>
  <div>
    <CFormLabel for="formFileLg">Large file input example</CFormLabel>
    <CFormInput id="formFileLg" type="file" size="lg" />
  </div>
</template>

<script setup>
import { CFormLabel, CFormInput } from '@coreui/vue'
</script>
```

## Color

```html
<template>
  <CFormLabel for="exampleColorInput">Color picker</CFormLabel>
  <CFormInput id="exampleColorInput" type="color" value="#563d7c" title="Choose your color" />
</template>

<script setup>
import { CFormLabel, CFormInput } from '@coreui/vue'
</script>
```
