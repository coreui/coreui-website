# Vue Bootstrap Checkbox Component

> Learn how to use CoreUI’s Vue Checkbox component with Bootstrap styles for flexible, framework-consistent UI.

## Approach

Browser default checkboxes are replaced with the help of `<CFormCheck>`. Checkboxes are for selecting one or several options in a list.

## Checks

```html
<template>
  <CFormCheck id="flexCheckDefault" label="Default checkbox" />
  <CFormCheck id="flexCheckChecked" label="Checked checkbox" checked />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

### vModel

Single checkbox, boolean value.

```html
<template>
  <CFormCheck id="flexCheckDefaultVModel" v-model="checked" label="Default checkbox" />
  <div>Checked: {{ checked }}</div>
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const checked = ref(true)
</script>
```

We can also bind multiple checkboxes to the same array.

```html
<template>
  <CFormCheck id="lucas" v-model="checkedNames" value="Lucas" label="Lucas" />
  <CFormCheck id="andrew" v-model="checkedNames" value="Andrew" label="Andrew" />
  <CFormCheck id="anna" v-model="checkedNames" value="Anna" label="Anna" />
  <div>Checked names: {{ checkedNames }}</div>
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const checkedNames = ref(['Andrew'])
</script>
```

## Indeterminate

Checkboxes can utilize the `:indeterminate` pseudo-class when manually set via `indeterminate` property.

```html
<template>
  <CFormCheck id="flexCheckIndeterminate" label="Indeterminate checkbox" indeterminate />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

### Disabled

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input's state.

```html
<template>
  <CFormCheck label="Disabled checkbox" disabled />
  <CFormCheck label="Disabled checked checkbox" checked disabled />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

## Default (stacked)

By default, any number of checkboxes that are immediate sibling will be vertically stacked and appropriately spaced.

```html
<template>
  <CFormCheck id="defaultCheck1" label="Default checkbox" />
  <CFormCheck id="defaultCheck2" label="Disabled checkbox" disabled />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

## Inline

Group checkboxes on the same horizontal row by adding `inline` boolean property to any `<CFormCheck>`.

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

## Reverse 

Put your checkboxes on the opposite side by adding `reverse` boolean property.

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

## Without labels

Remember to still provide some form of accessible name for assistive technologies (for instance, using `aria-label`).

```html
<template>
  <CFormCheck id="checkboxNoLabel" value="" aria-label="..." />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

## Toggle buttons

Create button-like checkboxes buttons by using `button` boolean property on the `<CFormCheck>` component. These toggle buttons can further be grouped in a button group if needed.

```html
<template>
  <CFormCheck
    id="btn-check"
    :button="{ color: 'primary' }"
    autocomplete="off"
    label="Single toggle"
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

```html
<template>
  <CFormCheck
    id="btn-check-2"
    :button="{ color: 'primary' }"
    autocomplete="off"
    label="Checked"
    checked
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

```html
<template>
  <CFormCheck
    id="btn-check-3"
    :button="{ color: 'primary' }"
    autocomplete="off"
    label="Disabled"
    disabled
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

### Outlined styles

Different variants of button, such at the various outlined styles, are supported.

```html
<template>
  <CFormCheck
    id="btn-check-outlined"
    :button="{ color: 'primary', variant: 'outline' }"
    autocomplete="off"
    label="Single toggle"
  />
  <CFormCheck
    id="btn-check-2-outlined"
    :button="{ color: 'secondary', variant: 'outline' }"
    autocomplete="off"
    label="Checked"
    checked
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```
