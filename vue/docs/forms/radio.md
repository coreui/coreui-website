# Vue Checkbox & Radio Components

> Create consistent cross-browser and cross-device checkboxes and radios with our Vue checkbox, radio, and switch components.

## Approach

Browser default radios are replaced with the help of `<CFormCheck radio>`. Radios are for selecting one option from many.

## Radios

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input's state.

```html
<template>
  <CFormCheck id="flexRadioDefault1" type="radio" name="flexRadioDefault" label="Default radio" />
  <CFormCheck
    id="flexRadioDefault2"
    type="radio"
    name="flexRadioDefault"
    label="Checked radio"
    checked
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

### vModel

```html
<template>
  <CFormCheck id="flexRadioVModel1" v-model="picked" type="radio" inline label="One" value="One" />
  <CFormCheck id="flexRadioVModel2" v-model="picked" type="radio" inline label="Two" value="Two" />
  <CFormCheck
    id="flexRadioVModel3"
    v-model="picked"
    type="radio"
    inline
    label="Three"
    value="Three"
  />
  <CFormCheck
    id="flexRadioVModel4"
    v-model="picked"
    type="radio"
    inline
    label="Four"
    value="Four"
  />
  <CFormCheck
    id="flexRadioVModel5"
    v-model="picked"
    type="radio"
    inline
    label="Five"
    value="Five"
  />
  <div>Picked: {{ picked }}</div>
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
import { ref } from 'vue'
const picked = ref('Four')
</script>
```

### Disabled

```html
<template>
  <CFormCheck
    id="flexRadioDisabled"
    type="radio"
    name="flexRadioDisabled"
    label="Disabled radio"
    disabled
  />
  <CFormCheck
    id="flexRadioCheckedDisabled"
    type="radio"
    name="flexRadioDisabled"
    label="Disabled checked radio"
    checked
    disabled
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

## Default (stacked)

By default, any number of radios that are immediate sibling will be vertically stacked and appropriately spaced.

```html
<template>
  <CFormCheck
    id="exampleRadios1"
    type="radio"
    name="exampleRadios"
    value="option1"
    label="Default radio"
    checked
  />
  <CFormCheck
    id="exampleRadios2"
    type="radio"
    name="exampleRadios"
    value="option2"
    label="Second default radio"
  />
  <CFormCheck
    id="exampleRadios3"
    type="radio"
    name="exampleRadios"
    value="option3"
    label="Disabled radio"
    disabled
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

## Inline

Group radios on the same horizontal row by adding `inline` boolean property to any `<CFormCheck>`.

```html
<template>
  <CFormCheck
    id="inlineCheckbox1"
    inline
    type="radio"
    name="inlineRadioOptions"
    value="option1"
    label="1"
  />
  <CFormCheck
    id="inlineCheckbox2"
    inline
    type="radio"
    name="inlineRadioOptions"
    value="option2"
    label="2"
  />
  <CFormCheck
    id="inlineCheckbox3"
    inline
    type="radio"
    name="inlineRadioOptions"
    value="option3"
    label="3 (disabled)"
    disabled
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

## Reverse 

Put your radios on the opposite side by adding `reverse` boolean property.

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

## Without labels

Remember to still provide some form of accessible name for assistive technologies (for instance, using `aria-label`).

```html
<template>
  <CFormCheck id="radioNoLabel" type="radio" name="radioNoLabel" value="" aria-label="..." />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

## Toggle buttons

Create button-like radio buttons by using `button` boolean property on the `<CFormCheck>` component. These toggle buttons can further be grouped in a button group if needed.

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

### Outlined styles

Different variants of button, such at the various outlined styles, are supported.

```html
<template>
  <CFormCheck
    id="success-outlined"
    :button="{ color: 'success', variant: 'outline' }"
    type="radio"
    name="options-outlined"
    autocomplete="off"
    label="Radio"
    checked
  />
  <CFormCheck
    id="danger-outlined"
    :button="{ color: 'danger', variant: 'outline' }"
    type="radio"
    name="options-outlined"
    autocomplete="off"
    label="Radio"
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CFormCheck /&gt;](./api/#cformcheck)
