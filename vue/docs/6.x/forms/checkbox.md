# Vue Checkbox Components

> Create consistent cross-browser and cross-device checkboxes with our Vue checkbox components.

## Approach

`<CCheckbox>` renders the `<input type="checkbox">`. That is the whole control — no wrapper, no extra element. Checkboxes are for selecting one or several options in a list; for one option out of many, reach for a [radio](https://coreui.io/vue/docs/forms/radio/).

The `label` property renders a sibling `<label>` already wired to the input with `for`, so the label can be styled from the input's state (`:checked`, `:disabled`). Wrap the pair in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) when you want the label, a description and validation feedback laid out for you.

The check and indeterminate marks are drawn with a CSS mask on the input's own `::before`, which is why their color is a token (`--cui-check-mark-color`) rather than a value baked into an SVG.

## Basic checkbox

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

## Indeterminate

Checkboxes can use the `:indeterminate` pseudo-class when it is set from JavaScript — there is no HTML attribute for it, so `<CCheckbox>` sets it through the `indeterminate` property.

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

## Disabled

Add the `disabled` attribute; the associated `<label>` is styled to match, in a lighter color, to indicate the state.

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

## Stacked

Any number of checkboxes that are immediate siblings stack vertically and are spaced by their `<CFormField>` wrappers.

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

## Inline

There is no inline property: the control is an inline element, so a row is a flex container with a gap.

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

## Sizing

`size="sm"` and `size="lg"` size the whole row — the box, its label, and the space they sit in. Each sets one font size: the box is `1em`, so it follows, and so does the alignment margin, which is computed from the line. Nothing needs re-tuning per size, and a size of your own is one custom property.

```html
<template>
  <div class="d-flex align-items-start gap-4">
    <CFormField>
      <CCheckbox id="checkSm" size="sm" label="Small" checked />
    </CFormField>
    <CFormField>
      <CCheckbox id="checkMd" label="Default" checked />
    </CFormField>
    <CFormField>
      <CCheckbox id="checkLg" size="lg" label="Large" checked />
    </CFormField>
  </div>
</template>

<script setup>
import { CCheckbox, CFormField } from '@coreui/vue'
</script>
```

Any other size is one custom property, and the alignment follows it:

```vue
<CCheckbox :style="{ '--cui-check-size': '2em' }" aria-label="..." />
```

## Without a label

A checkbox with no label text is the input on its own. Give it an accessible name some other way — `aria-label`, for instance. The name says what the checkbox does, like `aria-label="Select all rows"`, and replaces the `...` placeholder in the example below. See the [forms overview](https://coreui.io/vue/docs/forms/overview/#accessibility) for details.

```html
<template>
  <CCheckbox id="checkboxNoLabel" value="" aria-label="..." />
</template>

<script setup>
import { CCheckbox } from '@coreui/vue'
</script>
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

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

## Checkbox toggle buttons

Create button-like checkboxes and radio buttons by using `button` boolean property on the `<CFormCheck>` component. These toggle buttons can further be grouped in a button group if needed. Toggle buttons use the deprecated `<CFormCheck>`'s button mode — it has no `<CCheckbox>` counterpart.

```html
<template>
  <CFormCheck
    id="btn-check"
    :button="{ color: 'primary' }"
    autocomplete="off"
    label="Single toggle"
  />
  <CFormCheck
    id="btn-check-2"
    :button="{ color: 'primary' }"
    autocomplete="off"
    label="Checked"
    checked
  />
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
  <CFormCheck
    id="btn-check-3-outlined"
    :button="{ color: 'success', variant: 'outline' }"
    autocomplete="off"
    label="Checked success"
    checked
  />
</template>

<script setup>
import { CFormCheck } from '@coreui/vue'
</script>
```

## Theme variants

Modify the appearance of checked checkboxes with the [`theme`](https://coreui.io/vue/docs/customize/components/#theme-variants) property — it sets the checked background and border color to the theme color.

```html
<template>
  <div class="d-flex flex-column gap-3">
    <CFormField>
      <CCheckbox id="checkThemePrimary" theme="primary" label="Primary checkbox" checked />
    </CFormField>
    <CFormField>
      <CCheckbox id="checkThemeSecondary" theme="secondary" label="Secondary checkbox" checked />
    </CFormField>
    <CFormField>
      <CCheckbox id="checkThemeSuccess" theme="success" label="Success checkbox" checked />
    </CFormField>
    <CFormField>
      <CCheckbox id="checkThemeDanger" theme="danger" label="Danger checkbox" checked />
    </CFormField>
    <CFormField>
      <CCheckbox id="checkThemeWarning" theme="warning" label="Warning checkbox" checked />
    </CFormField>
    <CFormField>
      <CCheckbox id="checkThemeInfo" theme="info" label="Info checkbox" checked />
    </CFormField>
  </div>
</template>

<script setup>
import { CCheckbox, CFormField } from '@coreui/vue'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CCheckbox /&gt;](./api/#ccheckbox)
- [&lt;CFormCheck /&gt;](./api/#cformcheck)
