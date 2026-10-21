# Vue Bootstrap Radio Component

> Learn how to build consistent, accessible, and customizable radio buttons using CoreUI’s Vue components styled with Bootstrap.

## How to use Vue Bootstrap Radio component

Use CoreUI’s `<CRadio>` component to create Bootstrap-styled radio buttons for selecting one option from many. These components are built to be accessible, customizable, and responsive.

### Default stacked radios

By default, multiple radio buttons rendered as siblings will be stacked vertically with proper spacing.

```html
<template>
  <CFormField>
    <CRadio id="flexRadioDefault1" name="flexRadioDefault" label="Default radio" />
  </CFormField>
  <CFormField>
    <CRadio id="flexRadioDefault2" name="flexRadioDefault" label="Default checked radio" checked />
  </CFormField>
</template>

<script setup>
import { CFormField, CRadio } from '@coreui/vue'
</script>
```

### Disabled state

Add the `disabled` prop to disable a radio button. The associated label will also receive a muted style to reflect its state.

```html
<template>
  <CFormField>
    <CRadio id="flexRadioDisabled" name="flexRadioDisabled" label="Disabled radio" disabled />
  </CFormField>
  <CFormField>
    <CRadio
      id="flexRadioCheckedDisabled"
      name="flexRadioDisabled"
      label="Disabled checked radio"
      checked
      disabled
    />
  </CFormField>
</template>

<script setup>
import { CFormField, CRadio } from '@coreui/vue'
</script>
```

### Inline radios

Display radio buttons in a horizontal row with a flex utility wrapper.

```html
<template>
  <div class="d-flex gap-4">
    <CFormField>
      <CRadio id="inlineRadio1" name="inlineRadioOptions" value="option1" label="1" />
    </CFormField>
    <CFormField>
      <CRadio id="inlineRadio2" name="inlineRadioOptions" value="option2" label="2" />
    </CFormField>
    <CFormField>
      <CRadio
        id="inlineRadio3"
        name="inlineRadioOptions"
        value="option3"
        label="3 (disabled)"
        disabled
      />
    </CFormField>
  </div>
</template>

<script setup>
import { CFormField, CRadio } from '@coreui/vue'
</script>
```

### Reverse layout

The reverse layout exists only on the deprecated `<CFormCheck>` — its `reverse` property places the control after the label.

```html
<template>
  <CFormCheck id="reverseOption1" reverse type="radio" value="option1" label="Reverse radio" />
  <CFormCheck
    id="reverseOption2"
    reverse
    type="radio"
    value="option2"
    label="Disabled reverse radio"
    disabled
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

### Radios without labels

You can omit visual labels, but make sure to provide accessible names using `aria-label` for screen readers.

```html
<template>
  <CRadio id="radioNoLabel1" name="radioNoLabel" value="" aria-label="..." />
</template>

<script setup>
import { CRadio } from '@coreui/vue'
</script>
```

### Radio toggle buttons

Turn your radios into button-like toggles using the `button` prop. These can also be grouped using a button group component.

```html
<template>
  <CFormCheck id="radioNoLabel" type="radio" name="radioNoLabel" value="" aria-label="..." />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

#### Outlined toggle styles

You can apply outlined styles to toggle radios using Bootstrap's button variant system.

```html
<template>
  <CFormCheck
    id="option1"
    :button="{ color: 'secondary' }"
    type="radio"
    name="options"
    autocomplete="off"
    label="Checked"
    checked
  />
  <CFormCheck
    id="option2"
    :button="{ color: 'secondary' }"
    type="radio"
    name="options"
    autocomplete="off"
    label="Radio"
  />
  <CFormCheck
    id="option3"
    :button="{ color: 'secondary' }"
    type="radio"
    name="options"
    autocomplete="off"
    label="Radio"
    disabled
  />
  <CFormCheck
    id="option4"
    :button="{ color: 'secondary' }"
    type="radio"
    name="options"
    autocomplete="off"
    label="Radio"
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

## API reference

Refer to the API documentation below for a complete list of props supported by the Vue Bootstrap radio component.

- [&lt;CRadio /&gt;](../api/#cradio)
- [&lt;CFormCheck /&gt;](../api/#cformcheck)
