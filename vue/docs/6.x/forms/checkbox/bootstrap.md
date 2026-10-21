# Vue Bootstrap Checkbox Component

> Learn how to build accessible and consistent Bootstrap-style checkboxes in Vue using CoreUI components.

## How to use Vue Bootstrap Checkbox component

Use CoreUI’s `<CCheckbox>` to create cross-browser, accessible, and Bootstrap-styled checkboxes in Vue. Checkboxes are ideal for selecting one or more options from a list and can be styled, stacked, or grouped using layout utilities.

### Basic example

Use the `<CCheckbox>` component to render a standard Bootstrap-style checkbox.

```html
<template>
  <CFormField>
    <CCheckbox id="checkDefault" label="Default checkbox" />
  </CFormField>
  <CFormField>
    <CCheckbox id="checkChecked" label="Checked checkbox" checked />
  </CFormField>
</template>

<script setup>
import { CCheckbox, CFormField } from '@coreui/vue'
</script>
```

### Indeterminate state

Set the `indeterminate` property to render a checkbox in an indeterminate state, commonly used to indicate partial selections.

```html
<template>
  <CFormField>
    <CCheckbox id="checkIndeterminate" label="Indeterminate checkbox" indeterminate />
  </CFormField>
</template>

<script setup>
import { CCheckbox, CFormField } from '@coreui/vue'
</script>
```

### Disabled state

Add the `disabled` prop to disable a checkbox and automatically style its label in a muted color, following Bootstrap conventions.

```html
<template>
  <CFormField>
    <CCheckbox id="checkDisabled" label="Disabled checkbox" disabled />
  </CFormField>
  <CFormField>
    <CCheckbox id="checkCheckedDisabled" label="Disabled checked checkbox" checked disabled />
  </CFormField>
</template>

<script setup>
import { CCheckbox, CFormField } from '@coreui/vue'
</script>
```

### Stacked layout (default)

By default, multiple checkboxes stack vertically and are spaced evenly.

```html
<template>
  <CFormField>
    <CCheckbox id="defaultCheck1" label="Default checkbox" />
  </CFormField>
  <CFormField>
    <CCheckbox id="defaultCheck2" label="Disabled checkbox" disabled />
  </CFormField>
</template>

<script setup>
import { CCheckbox, CFormField } from '@coreui/vue'
</script>
```

### Inline checkboxes

Place multiple checkboxes on the same horizontal row with a flex utility wrapper.

```html
<template>
  <div class="d-flex gap-4">
    <CFormField>
      <CCheckbox id="inlineCheckbox1" value="option1" label="1" />
    </CFormField>
    <CFormField>
      <CCheckbox id="inlineCheckbox2" value="option2" label="2" />
    </CFormField>
    <CFormField>
      <CCheckbox id="inlineCheckbox3" value="option3" label="3 (disabled)" disabled />
    </CFormField>
  </div>
</template>

<script setup>
import { CCheckbox, CFormField } from '@coreui/vue'
</script>
```

### Reversed checkboxes

The reverse layout exists only on the deprecated `<CFormCheck>` — its `reverse` property places the control after the label.

```html
<template>
  <CFormCheck id="reverseCheckbox1" reverse value="option1" label="Reverse checkbox" />
  <CFormCheck
    id="reverseCheckbox2"
    reverse
    value="option2"
    label="Disabled reverse checkbox"
    disabled
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

### Without labels

If omitting a label, remember to include `aria-label` for accessibility compliance.

```html
<template>
  <CCheckbox id="checkboxNoLabel" value="" aria-label="..." />
</template>

<script setup>
import { CCheckbox } from '@coreui/vue'
</script>
```

## Checkbox toggle buttons

Transform checkboxes into Bootstrap-style toggle buttons using the `button` prop. You can also group them with button groups.

```html
<template>
  <CFormCheck id="inlineCheckbox1" inline value="option1" label="1" />
  <CFormCheck id="inlineCheckbox2" inline value="option2" label="2" />
  <CFormCheck id="inlineCheckbox3" inline value="option3" label="3 (disabled)" disabled />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

### Outlined toggle styles

Use outlined button variants for a lighter, bordered appearance.

```html
<template>
  <CFormCheck id="reverseCheckbox1" reverse value="option1" label="Reverse checkbox" />
  <CFormCheck
    id="reverseCheckbox2"
    reverse
    value="option2"
    label="Disabled reverse checkbox"
    disabled
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

## API reference

Refer to the API documentation for detailed descriptions of all the available props and configuration options.

- [&lt;CCheckbox /&gt;](../api/#ccheckbox)
- [&lt;CFormCheck /&gt;](../api/#cformcheck)
