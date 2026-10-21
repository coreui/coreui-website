# Vue Bootstrap Switch Component

> Learn how to create responsive toggle switches using CoreUI’s Vue component styled to match Bootstrap form elements.

## How to use Vue Bootstrap Switch component

Use CoreUI’s `<CSwitch>` to create cross-browser, Bootstrap-styled toggle switches that represent binary states such as on/off, enabled/disabled, or true/false.

### Basic usage

A standard switch is a `<CSwitch>` — it renders `role="switch"` itself.

```html
<template>
  <CFormField>
    <CSwitch id="flexSwitchCheckDefault" label="Default switch checkbox input" />
  </CFormField>
  <CFormField>
    <CSwitch id="flexSwitchCheckChecked" label="Checked switch checkbox input" checked />
  </CFormField>
</template>

<script setup>
import { CFormField, CSwitch } from '@coreui/vue'
</script>
```

### Sizing

Use the `size` prop to adjust the visual scale of the switch. Available sizes include `"lg"` and `"xl"`.

```html
<template>
  <CFormField>
    <CSwitch id="flexSwitchCheckSizeSm" size="sm" label="Small switch checkbox input" checked />
  </CFormField>
  <CFormField>
    <CSwitch id="flexSwitchCheckSizeDefault" label="Default switch checkbox input" checked />
  </CFormField>
  <CFormField>
    <CSwitch id="flexSwitchCheckSizeLg" size="lg" label="Large switch checkbox input" checked />
  </CFormField>
  <CFormField>
    <CSwitch
      id="flexSwitchCheckSizeXl"
      size="xl"
      label="Extra large switch checkbox input"
      checked
    />
  </CFormField>
</template>

<script setup>
import { CFormField, CSwitch } from '@coreui/vue'
</script>
```

### Reverse layout

The reverse layout exists only on the deprecated `<CFormSwitch>` — its `reverse` property places the control after the label.

```html
<template>
  <CFormSwitch id="reverseFormSwitch1" reverse label="Reverse switch" />
  <CFormSwitch id="reverseFormSwitch2" reverse label="Disabled reverse switch" disabled />
</template>

<script setup>
import { CFormSwitch } from '@coreui/vue'
</script>
```

## API reference

Refer to the API documentation below for a complete list of available props for the Vue Bootstrap Switch component.

- [&lt;CSwitch /&gt;](../api/#cswitch)
- [&lt;CFormSwitch /&gt;](../api/#cformswitch)
