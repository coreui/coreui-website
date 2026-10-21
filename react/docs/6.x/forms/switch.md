# React Switch Components

> Create consistent cross-browser and cross-device switch component.

## Approach

A switch is a [checkbox](https://coreui.io/react/docs/forms/checkbox/) drawn as a track and a thumb: `<CSwitch>` renders the `<input type="checkbox">` styled that way. The thumb is the input's own `::before`, so its color is a token rather than a fill inside an SVG.

The component renders `role="switch"` to convey the nature of the control to assistive technologies that support the role. Older ones announce it as a plain checkbox, which is a fair fallback. Switches support `disabled` like any checkbox, and the `label` property renders a sibling `<label>` already wired to the input with `htmlFor`.

## Basic switch

```html
import React from 'react'
import { CFormField, CSwitch } from '@coreui/react'

export const FormSwitchExample = () => {
  return (
    <>
      <CFormField>
        <CSwitch id="flexSwitchCheckDefault" label="Default switch checkbox input" />
      </CFormField>
      <CFormField>
        <CSwitch id="flexSwitchCheckChecked" label="Checked switch checkbox input" defaultChecked />
      </CFormField>
    </>
  )
}
```

## Disabled

```html
import React from 'react'
import { CFormField, CSwitch } from '@coreui/react'

export const FormSwitchDisabledExample = () => {
  return (
    <>
      <CFormField>
        <CSwitch id="flexSwitchCheckDisabled" label="Disabled switch checkbox input" disabled />
      </CFormField>
      <CFormField>
        <CSwitch
          id="flexSwitchCheckCheckedDisabled"
          label="Disabled checked switch checkbox input"
          defaultChecked
          disabled
        />
      </CFormField>
    </>
  )
}
```

## Sizing

`size="sm"`, `size="lg"` and `size="xl"` size the whole row — the track, its thumb, and the label beside it — the way the [checkbox](https://coreui.io/react/docs/forms/checkbox/#sizing) and [radio](https://coreui.io/react/docs/forms/radio/#sizing) sizes do.

Each sets **one** custom property. The track's width follows its height through the aspect ratio, the thumb follows the height minus the padding, and the alignment margin is computed from the line — so nothing needs re-tuning per size.

```html
import React from 'react'
import { CFormField, CSwitch } from '@coreui/react'

export const FormSwitchSizingExample = () => {
  return (
    <>
      <CFormField>
        <CSwitch
          size="sm"
          id="flexSwitchCheckSizeSm"
          label="Small switch checkbox input"
          defaultChecked
        />
      </CFormField>
      <CFormField>
        <CSwitch
          id="flexSwitchCheckSizeDefault"
          label="Default switch checkbox input"
          defaultChecked
        />
      </CFormField>
      <CFormField>
        <CSwitch
          size="lg"
          id="flexSwitchCheckSizeLg"
          label="Large switch checkbox input"
          defaultChecked
        />
      </CFormField>
      <CFormField>
        <CSwitch
          size="xl"
          id="flexSwitchCheckSizeXl"
          label="Extra large switch checkbox input"
          defaultChecked
        />
      </CFormField>
    </>
  )
}
```

Any other size is that one property:

```jsx
<CSwitch style={{ '--cui-switch-height': '2rem' }} aria-label="..." />
```

The proportion is a Sass variable, `$switch-aspect-ratio`, so a squarer or longer track is set once for every size.

## Without a label

A switch with no label text is the input on its own. Give it an accessible name some other way — `aria-label`, for instance. The name says what the switch turns on or off, like `aria-label="Email notifications"`, and replaces the `...` placeholder in the example below. See the [forms overview](https://coreui.io/react/docs/forms/overview/#accessibility) for details.

```html
import React from 'react'
import { CSwitch } from '@coreui/react'

export const SwitchWithoutLabelsExample = () => {
  return <CSwitch id="switchNoLabel" aria-label="..." />
}
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/react/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
import React from 'react'
import { CFormField, CFormText, CSwitch } from '@coreui/react'

export const FormSwitchFormFieldExample = () => {
  return (
    <CFormField>
      <CSwitch id="fieldSwitch" label="Email notifications" />
      <CFormText>Turn this off and we will only contact you about your account.</CFormText>
    </CFormField>
  )
}
```

## Theme variants

Modify the appearance of checked switches with the `theme` property — it sets the checked background and border color to the theme color.

```html
import React from 'react'
import { CFormField, CSwitch } from '@coreui/react'

export const SwitchThemeColorsExample = () => {
  return (
    <div className="d-flex flex-column gap-3">
      <CFormField>
        <CSwitch theme="primary" id="switchThemePrimary" label="Primary switch" defaultChecked />
      </CFormField>
      <CFormField>
        <CSwitch
          theme="secondary"
          id="switchThemeSecondary"
          label="Secondary switch"
          defaultChecked
        />
      </CFormField>
      <CFormField>
        <CSwitch theme="success" id="switchThemeSuccess" label="Success switch" defaultChecked />
      </CFormField>
      <CFormField>
        <CSwitch theme="danger" id="switchThemeDanger" label="Danger switch" defaultChecked />
      </CFormField>
      <CFormField>
        <CSwitch theme="warning" id="switchThemeWarning" label="Warning switch" defaultChecked />
      </CFormField>
      <CFormField>
        <CSwitch theme="info" id="switchThemeInfo" label="Info switch" defaultChecked />
      </CFormField>
    </div>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CSwitch /&gt;](./api/#cswitch)
