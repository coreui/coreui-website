# React Checkbox Components

> Create consistent cross-browser and cross-device checkboxes with our React checkbox components.

## Approach

`<CCheckbox>` renders the `<input type="checkbox">`. That is the whole control — no wrapper, no extra element. Checkboxes are for selecting one or several options in a list; for one option out of many, reach for a [radio](https://coreui.io/react/docs/forms/radio/).

The `label` property renders a sibling `<label>` already wired to the input with `htmlFor`, so the label can be styled from the input's state (`:checked`, `:disabled`). Wrap the pair in [`<CFormField>`](https://coreui.io/react/docs/forms/field/) when you want the label, a description and validation feedback laid out for you.

The check and indeterminate marks are drawn with a CSS mask on the input's own `::before`, which is why their color is a token (`--cui-check-mark-color`) rather than a value baked into an SVG.

## Basic checkbox

```html
import React from 'react'
import { CCheckbox, CFormField } from '@coreui/react'

export const CheckboxExample = () => {
  return (
    <>
      <CFormField>
        <CCheckbox id="checkDefault" label="Default checkbox" />
      </CFormField>
      <CFormField>
        <CCheckbox id="checkChecked" label="Checked checkbox" defaultChecked />
      </CFormField>
    </>
  )
}
```

## Indeterminate

Checkboxes can use the `:indeterminate` pseudo-class when it is set from JavaScript — there is no HTML attribute for it, so `<CCheckbox>` sets it through the `indeterminate` property.

```html
import React from 'react'
import { CCheckbox, CFormField } from '@coreui/react'

export const CheckboxIndeterminateExample = () => {
  return (
    <CFormField>
      <CCheckbox id="checkIndeterminate" label="Indeterminate checkbox" indeterminate />
    </CFormField>
  )
}
```

## Disabled

Add the `disabled` attribute; the associated `<label>` is styled to match, in a lighter color, to indicate the state.

```html
import React from 'react'
import { CCheckbox, CFormField } from '@coreui/react'

export const CheckboxDisabledExample = () => {
  return (
    <>
      <CFormField>
        <CCheckbox id="checkDisabled" label="Disabled checkbox" disabled />
      </CFormField>
      <CFormField>
        <CCheckbox
          id="checkCheckedDisabled"
          label="Disabled checked checkbox"
          defaultChecked
          disabled
        />
      </CFormField>
    </>
  )
}
```

## Stacked

Any number of checkboxes that are immediate siblings stack vertically and are spaced by their `<CFormField>` wrappers.

```html
import React from 'react'
import { CCheckbox, CFormField } from '@coreui/react'

export const CheckboxStackedExample = () => {
  return (
    <>
      <CFormField>
        <CCheckbox id="defaultCheck1" label="Default checkbox" />
      </CFormField>
      <CFormField>
        <CCheckbox id="defaultCheck2" label="Disabled checkbox" disabled />
      </CFormField>
    </>
  )
}
```

## Inline

There is no inline property: the control is an inline element, so a row is a flex container with a gap.

```html
import React from 'react'
import { CCheckbox, CFormField } from '@coreui/react'

export const CheckboxInlineExample = () => {
  return (
    <div className="d-flex gap-4">
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
  )
}
```

## Sizing

`size="sm"` and `size="lg"` size the whole row — the box, its label, and the space they sit in. Each sets one font size: the box is `1em`, so it follows, and so does the alignment margin, which is computed from the line. Nothing needs re-tuning per size, and a size of your own is one custom property.

```html
import React from 'react'
import { CCheckbox, CFormField } from '@coreui/react'

export const CheckboxSizingExample = () => {
  return (
    <div className="d-flex align-items-start gap-4">
      <CFormField>
        <CCheckbox size="sm" id="checkSm" label="Small" defaultChecked />
      </CFormField>
      <CFormField>
        <CCheckbox id="checkMd" label="Default" defaultChecked />
      </CFormField>
      <CFormField>
        <CCheckbox size="lg" id="checkLg" label="Large" defaultChecked />
      </CFormField>
    </div>
  )
}
```

Any other size is one custom property, and the alignment follows it:

```jsx
<CCheckbox style={{ '--cui-check-size': '2em' }} aria-label="..." />
```

## Without a label

A checkbox with no label text is the input on its own. Give it an accessible name some other way — `aria-label`, for instance. The name says what the checkbox does, like `aria-label="Select all rows"`, and replaces the `...` placeholder in the example below. See the [forms overview](https://coreui.io/react/docs/forms/overview/#accessibility) for details.

```html
import React from 'react'
import { CCheckbox } from '@coreui/react'

export const CheckboxWithoutLabelsExample = () => {
  return <CCheckbox id="checkboxNoLabel" value="" aria-label="..." />
}
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/react/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
import React from 'react'
import { CCheckbox, CFormField, CFormText } from '@coreui/react'

export const CheckboxFormFieldExample = () => {
  return (
    <CFormField>
      <CCheckbox id="fieldCheck" label="Subscribe to the newsletter" />
      <CFormText>We send one email a month, and never share your address.</CFormText>
    </CFormField>
  )
}
```

## Checkbox toggle buttons

Create button-like checkboxes and radio buttons by using `button` boolean property on the `<CFormCheck>` component. These toggle buttons can further be grouped in a button group if needed. Toggle buttons use the deprecated `<CFormCheck>`'s button mode — it has no `<CCheckbox>` counterpart.

```html
import React from 'react'
import { CFormCheck } from '@coreui/react'

export const CheckboxToggleButtonsExample = () => {
  return (
    <>
      <CFormCheck
        button={{ color: 'primary' }}
        id="btn-check"
        autoComplete="off"
        label="Single toggle"
      />
      <CFormCheck
        button={{ color: 'primary' }}
        id="btn-check-2"
        autoComplete="off"
        label="Checked"
        defaultChecked
      />
      <CFormCheck
        button={{ color: 'primary' }}
        id="btn-check-3"
        autoComplete="off"
        label="Disabled"
        disabled
      />
    </>
  )
}
```

### Outlined styles

Different variants of button, such at the various outlined styles, are supported.

```html
import React from 'react'
import { CFormCheck } from '@coreui/react'

export const CheckboxToggleButtonsOutlinedStylesExample = () => {
  return (
    <>
      <CFormCheck
        button={{ color: 'primary', variant: 'outline' }}
        id="btn-check-outlined"
        autoComplete="off"
        label="Single toggle"
      />
      <CFormCheck
        button={{ color: 'secondary', variant: 'outline' }}
        id="btn-check-2-outlined"
        autoComplete="off"
        label="Checked"
        defaultChecked
      />
      <CFormCheck
        button={{ color: 'success', variant: 'outline' }}
        id="btn-check-3-outlined"
        autoComplete="off"
        label="Checked success"
        defaultChecked
      />
    </>
  )
}
```

## Theme variants

Modify the appearance of checked checkboxes with the [`theme`](https://coreui.io/react/docs/customize/components/#theme-variants) property — it sets the checked background and border color to the theme color.

```html
import React from 'react'
import { CCheckbox, CFormField } from '@coreui/react'

export const CheckboxThemeColorsExample = () => {
  return (
    <div className="d-flex flex-column gap-3">
      <CFormField>
        <CCheckbox theme="primary" id="checkThemePrimary" label="Primary checkbox" defaultChecked />
      </CFormField>
      <CFormField>
        <CCheckbox
          theme="secondary"
          id="checkThemeSecondary"
          label="Secondary checkbox"
          defaultChecked
        />
      </CFormField>
      <CFormField>
        <CCheckbox theme="success" id="checkThemeSuccess" label="Success checkbox" defaultChecked />
      </CFormField>
      <CFormField>
        <CCheckbox theme="danger" id="checkThemeDanger" label="Danger checkbox" defaultChecked />
      </CFormField>
      <CFormField>
        <CCheckbox theme="warning" id="checkThemeWarning" label="Warning checkbox" defaultChecked />
      </CFormField>
      <CFormField>
        <CCheckbox theme="info" id="checkThemeInfo" label="Info checkbox" defaultChecked />
      </CFormField>
    </div>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CCheckbox /&gt;](./api/#ccheckbox)
- [&lt;CFormCheck /&gt;](./api/#cformcheck)
