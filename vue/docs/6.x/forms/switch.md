# Vue Switch Components

> Create consistent cross-browser and cross-device switch component.

## Approach

A switch is a [checkbox](https://coreui.io/vue/docs/forms/checkbox/) drawn as a track and a thumb: `<CSwitch>` renders the `<input type="checkbox">` styled that way. The thumb is the input's own `::before`, so its color is a token rather than a fill inside an SVG.

The component renders `role="switch"` to convey the nature of the control to assistive technologies that support the role. Older ones announce it as a plain checkbox, which is a fair fallback. Switches support `disabled` like any checkbox, and the `label` property renders a sibling `<label>` already wired to the input with `for`.

## Basic switch

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

## Disabled

```html
<template>
  <CFormField>
    <CSwitch id="flexSwitchCheckDisabled" label="Disabled switch checkbox input" disabled />
  </CFormField>
  <CFormField>
    <CSwitch
      id="flexSwitchCheckCheckedDisabled"
      label="Disabled checked switch checkbox input"
      checked
      disabled
    />
  </CFormField>
</template>

<script setup>
import { CFormField, CSwitch } from '@coreui/vue'
</script>
```

## Sizing

`size="sm"`, `size="lg"` and `size="xl"` size the whole row — the track, its thumb, and the label beside it — the way the [checkbox](https://coreui.io/vue/docs/forms/checkbox/#sizing) and [radio](https://coreui.io/vue/docs/forms/radio/#sizing) sizes do.

Each sets **one** custom property. The track's width follows its height through the aspect ratio, the thumb follows the height minus the padding, and the alignment margin is computed from the line — so nothing needs re-tuning per size.

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

Any other size is that one property:

```vue
<CSwitch :style="{ '--cui-switch-height': '2rem' }" aria-label="..." />
```

The proportion is a Sass variable, `$switch-aspect-ratio`, so a squarer or longer track is set once for every size.

## Without a label

A switch with no label text is the input on its own. Give it an accessible name some other way — `aria-label`, for instance. The name says what the switch turns on or off, like `aria-label="Email notifications"`, and replaces the `...` placeholder in the example below. See the [forms overview](https://coreui.io/vue/docs/forms/overview/#accessibility) for details.

```html
<template>
  <CSwitch id="switchNoLabel" aria-label="..." />
</template>

<script setup>
import { CSwitch } from '@coreui/vue'
</script>
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<template>
  <CFormField>
    <CSwitch id="fieldSwitch" label="Email notifications" />
    <CFormText>Turn this off and we will only contact you about your account.</CFormText>
  </CFormField>
</template>

<script setup>
import { CFormField, CFormText, CSwitch } from '@coreui/vue'
</script>
```

## Theme variants

Modify the appearance of checked switches with the [`theme`](https://coreui.io/vue/docs/customize/components/#theme-variants) property — it sets the checked background and border color to the theme color.

```html
<template>
  <div class="d-flex flex-column gap-3">
    <CFormField>
      <CSwitch id="switchThemePrimary" theme="primary" label="Primary switch" checked />
    </CFormField>
    <CFormField>
      <CSwitch id="switchThemeSecondary" theme="secondary" label="Secondary switch" checked />
    </CFormField>
    <CFormField>
      <CSwitch id="switchThemeSuccess" theme="success" label="Success switch" checked />
    </CFormField>
    <CFormField>
      <CSwitch id="switchThemeDanger" theme="danger" label="Danger switch" checked />
    </CFormField>
    <CFormField>
      <CSwitch id="switchThemeWarning" theme="warning" label="Warning switch" checked />
    </CFormField>
    <CFormField>
      <CSwitch id="switchThemeInfo" theme="info" label="Info switch" checked />
    </CFormField>
  </div>
</template>

<script setup>
import { CFormField, CSwitch } from '@coreui/vue'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CSwitch /&gt;](./api/#cswitch)
