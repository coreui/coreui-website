# Vue Bootstrap Form Field Component

> Learn how to lay out Bootstrap-styled form controls with their labels and descriptions using CoreUI's Vue Form Field component.

## How to use Vue Bootstrap Form Field component

Use CoreUI's `<CFormField>` to stack a Bootstrap-styled control with its label and description in one consistent layout. The wrapper is a CSS grid: everything stacks in a single column, and a check control switches the field to a two-column layout with the control pinned beside its text.

```html
<template>
  <CFormField>
    <CFormLabel for="fieldText">Email address</CFormLabel>
    <CFormInput id="fieldText" type="email" placeholder="name@example.com" />
    <CFormText>We'll never share your email with anyone else.</CFormText>
  </CFormField>
</template>

<script setup>
import { CFormField, CFormInput, CFormLabel, CFormText } from '@coreui/vue'
</script>
```

### With a checkbox

```html
<template>
  <CFormField>
    <CCheckbox id="fieldCheck" label="Subscribe to the newsletter" />
    <CFormText>We send one email a month, and never share your address.</CFormText>
  </CFormField>
</template>

<script setup>
import { CCheckbox, CFormField, CFormText } from '@coreui/vue'
</script>
```
