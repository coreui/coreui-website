# Vue Bootstrap Switch Component

> Learn how to use CoreUI’s Vue Switch component with Bootstrap styles for flexible, framework-consistent UI.

## About

Vue Switch Components are a type of UI component that allows users to toggle between two states, usually represented as "on" or "off", "enabled" or "disabled", or "checked" or "unchecked".

When a user interacts with the component by clicking or tapping on it, the switch toggles its state, triggering an action or changing the appearance of the component. This type of component is often used in forms, settings panels, and other places where users need to turn something on or off or choose between two options.

## Example

```html
<template>
  <CFormSwitch id="formSwitchCheckDefault" label="Default switch checkbox input" />
  <CFormSwitch id="formSwitchCheckChecked" label="Checked switch checkbox input" checked />
  <CFormSwitch id="formSwitchCheckDisabled" label="Disabled switch checkbox input" disabled />
  <CFormSwitch
    id="formSwitchCheckCheckedDisabled"
    label="Disabled checked switch checkbox input"
    checked
    disabled
  />
</template>

<script setup>
import { CFormSwitch } from '@coreui/vue'
</script>
```

## Sizing

Larger or smaller Vue switches? Add `size="lg"` or `size="xl"` for additional sizes.

```html
<template>
  <CFormSwitch id="formSwitchCheckDefault" label="Default switch checkbox input" />
  <CFormSwitch id="formSwitchCheckDefaultLg" size="lg" label="Large switch checkbox input" />
  <CFormSwitch id="formSwitchCheckDefaultXL" size="xl" label="Extra large switch checkbox input" />
</template>

<script setup>
import { CFormSwitch } from '@coreui/vue'
</script>
```

## Reverse 

Put your switches on the opposite side by adding `reverse` boolean property.

```html
<template>
  <CFormSwitch id="reverseFormSwitch1" reverse type="radio" label="Reverse switch" />
  <CFormSwitch
    id="reverseFormSwitch2"
    reverse
    type="radio"
    label="Disabled reverse switch"
    disabled
  />
</template>

<script setup>
import { CFormSwitch } from '@coreui/vue'
</script>
```
