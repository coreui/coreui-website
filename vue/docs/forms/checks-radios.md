# Vue Radio Component

> Create consistent cross-browser and cross-device radios with our Vue radio component.

## Approach

Browser default checkboxes and radios are replaced with the help of `<CFormCheck>`. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

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

## Switches

A switch has the markup of a custom checkbox but uses the `switch` boolean properly to render a toggle switch. Switches also support the `disabled` attribute.

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

### Sizes

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

## Default (stacked)

By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced.

```html
<template>
  <CFormCheck id="defaultCheck1" label="Default checkbox" />
  <CFormCheck id="defaultCheck2" label="Disabled checkbox" disabled />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

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

Group checkboxes or radios on the same horizontal row by adding `inline` boolean property to any `<CFormCheck>`.

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

## Without labels

Remember to still provide some form of accessible name for assistive technologies (for instance, using `aria-label`).

```html
<template>
  <div>
    <CFormCheck id="checkboxNoLabel" value="" aria-label="..." />
  </div>
  <div>
    <CFormCheck id="radioNoLabel" type="radio" name="radioNoLabel" value="" aria-label="..." />
  </div>
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

## Toggle buttons

Create button-like checkboxes and radio buttons by using `button` boolean property on the `<CFormCheck>` component. These toggle buttons can further be grouped in a button group if needed.

### Checkbox toggle buttons

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

### Radio toggle buttons

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
  <div>
    <CFormCheck
      id="btn-check-outlined"
      :button="{ color: 'primary', variant: 'outline' }"
      autocomplete="off"
      label="Single toggle"
    />
  </div>
  <div>
    <CFormCheck
      id="btn-check-2-outlined"
      :button="{ color: 'secondary', variant: 'outline' }"
      autocomplete="off"
      label="Checked"
      checked
    />
  </div>
  <div>
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
  </div>
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```
