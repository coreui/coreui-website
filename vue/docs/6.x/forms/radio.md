# Vue Radio Components

> Create consistent cross-browser and cross-device radios with our Vue radio component.

## Approach

`<CRadio>` renders the `<input type="radio">`. That is the whole control — no wrapper, no extra element. Radios are for selecting one option out of many; to select several, reach for a [checkbox](https://coreui.io/vue/docs/forms/checkbox/).

The `label` property renders a sibling `<label>` already wired to the input with `for`, so the label can be styled from the input's state. Wrap the pair in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) when you want the label, a description and validation feedback laid out for you. The dot is a CSS mask on the input's own `::before`, so its color is a token.

Radios in the same group share a `name` attribute; that is what makes them mutually exclusive.

## Basic radio

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

## Disabled

Add the `disabled` attribute; the associated `<label>` is styled to match, in a lighter color, to indicate the state.

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

## Stacked

Any number of radios that are immediate siblings stack vertically and are spaced by their `<CFormField>` wrappers.

```html
<template>
  <CFormField>
    <CRadio
      id="exampleRadios1"
      name="exampleRadios"
      value="option1"
      label="Default radio"
      checked
    />
  </CFormField>
  <CFormField>
    <CRadio id="exampleRadios2" name="exampleRadios" value="option2" label="Second default radio" />
  </CFormField>
  <CFormField>
    <CRadio
      id="exampleRadios3"
      name="exampleRadios"
      value="option3"
      label="Disabled radio"
      disabled
    />
  </CFormField>
</template>

<script setup>
import { CFormField, CRadio } from '@coreui/vue'
</script>
```

## Inline

There is no inline property: the control is an inline element, so a row is a flex container with a gap.

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

## Sizing

`size="sm"` and `size="lg"` size the whole row — the box, its label, and the space they sit in. Each sets one font size: the box is `1em`, so it follows, and so does the alignment margin, which is computed from the line. Nothing needs re-tuning per size, and a size of your own is one custom property.

```html
<template>
  <div class="d-flex align-items-start gap-4">
    <CFormField>
      <CRadio id="radioSm" size="sm" name="sizeRadio" label="Small" checked />
    </CFormField>
    <CFormField>
      <CRadio id="radioMd" name="sizeRadio" label="Default" />
    </CFormField>
    <CFormField>
      <CRadio id="radioLg" size="lg" name="sizeRadio" label="Large" />
    </CFormField>
  </div>
</template>

<script setup>
import { CFormField, CRadio } from '@coreui/vue'
</script>
```

Any other size is one custom property, and the alignment follows it:

```vue
<CRadio :style="{ '--cui-radio-size': '2em' }" aria-label="..." />
```

## Without a label

A radio with no label text is the input on its own. Give it an accessible name some other way — `aria-label`, for instance. The name says what the option is, like `aria-label="Red"` in a color picker, and replaces the `...` placeholder in the example below. See the [forms overview](https://coreui.io/vue/docs/forms/overview/#accessibility) for details.

```html
<template>
  <CRadio id="radioNoLabel1" name="radioNoLabel" value="" aria-label="..." />
</template>

<script setup>
import { CRadio } from '@coreui/vue'
</script>
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place. Nest one `<CFormField>` per radio inside an outer one to give the whole group a shared label.

```html
<template>
  <CFormField>
    <span class="form-label">Delivery</span>
    <CFormField>
      <CRadio id="fieldRadio1" name="fieldRadio" label="Standard" checked />
      <CFormText>Three to five working days.</CFormText>
    </CFormField>
    <CFormField>
      <CRadio id="fieldRadio2" name="fieldRadio" label="Express" />
      <CFormText>Next working day, where available.</CFormText>
    </CFormField>
  </CFormField>
</template>

<script setup>
import { CFormField, CFormText, CRadio } from '@coreui/vue'
</script>
```

## Radio toggle buttons

Create button-like radio buttons by using `button` boolean property on the `<CFormCheck type="radio">` component. These toggle buttons can further be grouped in a button group if needed. Toggle buttons use the deprecated `<CFormCheck>`'s button mode — it has no `<CRadio>` counterpart.

```html
<template>
  <CFormCheck id="radioNoLabel" type="radio" name="radioNoLabel" value="" aria-label="..." />
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

## Theme variants

Modify the appearance of checked radios with the `theme` property — it sets the checked background and border color to the theme color.

```html
<template>
  <div class="d-flex flex-column gap-3">
    <CFormField>
      <CRadio
        id="radioThemePrimary"
        theme="primary"
        name="radioThemePrimary"
        label="Primary radio"
        checked
      />
    </CFormField>
    <CFormField>
      <CRadio
        id="radioThemeSecondary"
        theme="secondary"
        name="radioThemeSecondary"
        label="Secondary radio"
        checked
      />
    </CFormField>
    <CFormField>
      <CRadio
        id="radioThemeSuccess"
        theme="success"
        name="radioThemeSuccess"
        label="Success radio"
        checked
      />
    </CFormField>
    <CFormField>
      <CRadio
        id="radioThemeDanger"
        theme="danger"
        name="radioThemeDanger"
        label="Danger radio"
        checked
      />
    </CFormField>
    <CFormField>
      <CRadio
        id="radioThemeWarning"
        theme="warning"
        name="radioThemeWarning"
        label="Warning radio"
        checked
      />
    </CFormField>
    <CFormField>
      <CRadio id="radioThemeInfo" theme="info" name="radioThemeInfo" label="Info radio" checked />
    </CFormField>
  </div>
</template>

<script setup>
import { CFormField, CRadio } from '@coreui/vue'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CRadio /&gt;](./api/#cradio)
- [&lt;CFormCheck /&gt;](./api/#cformcheck)
