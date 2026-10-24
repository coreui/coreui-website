# React Radio Components

> Create consistent cross-browser and cross-device radios with our React radio component.

## Approach

`<CRadio>` renders the `<input type="radio">`. That is the whole control — no wrapper, no extra element. Radios are for selecting one option out of many; to select several, reach for a [checkbox](https://coreui.io/react/docs/forms/checkbox/).

The `label` property renders a sibling `<label>` already wired to the input with `htmlFor`, so the label can be styled from the input's state. Wrap the pair in [`<CFormField>`](https://coreui.io/react/docs/forms/field/) when you want the label, a description and validation feedback laid out for you. The dot is a CSS mask on the input's own `::before`, so its color is a token.

Radios in the same group share a `name` attribute; that is what makes them mutually exclusive.

## Basic radio

```html
import React from 'react'
import { CFormField, CRadio } from '@coreui/react'

export const RadioExample = () => {
  return (
    <>
      <CFormField>
        <CRadio name="flexRadioDefault" id="flexRadioDefault1" label="Default radio" />
      </CFormField>
      <CFormField>
        <CRadio
          name="flexRadioDefault"
          id="flexRadioDefault2"
          label="Default checked radio"
          defaultChecked
        />
      </CFormField>
    </>
  )
}
```

## Disabled

Add the `disabled` attribute; the associated `<label>` is styled to match, in a lighter color, to indicate the state.

```html
import React from 'react'
import { CFormField, CRadio } from '@coreui/react'

export const RadioDisabledExample = () => {
  return (
    <>
      <CFormField>
        <CRadio name="flexRadioDisabled" id="flexRadioDisabled" label="Disabled radio" disabled />
      </CFormField>
      <CFormField>
        <CRadio
          name="flexRadioDisabled"
          id="flexRadioCheckedDisabled"
          label="Disabled checked radio"
          defaultChecked
          disabled
        />
      </CFormField>
    </>
  )
}
```

## Stacked

Any number of radios that are immediate siblings stack vertically and are spaced by their `<CFormField>` wrappers.

```html
import React from 'react'
import { CFormField, CRadio } from '@coreui/react'

export const RadioStackedExample = () => {
  return (
    <>
      <CFormField>
        <CRadio
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          label="Default radio"
          defaultChecked
        />
      </CFormField>
      <CFormField>
        <CRadio
          name="exampleRadios"
          id="exampleRadios2"
          value="option2"
          label="Second default radio"
        />
      </CFormField>
      <CFormField>
        <CRadio
          name="exampleRadios"
          id="exampleRadios3"
          value="option3"
          label="Disabled radio"
          disabled
        />
      </CFormField>
    </>
  )
}
```

## Inline

There is no inline property: the control is an inline element, so a row is a flex container with a gap.

```html
import React from 'react'
import { CFormField, CRadio } from '@coreui/react'

export const RadioInlineExample = () => {
  return (
    <div className="d-flex gap-4">
      <CFormField>
        <CRadio name="inlineRadioOptions" id="inlineRadio1" value="option1" label="1" />
      </CFormField>
      <CFormField>
        <CRadio name="inlineRadioOptions" id="inlineRadio2" value="option2" label="2" />
      </CFormField>
      <CFormField>
        <CRadio
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="option3"
          label="3 (disabled)"
          disabled
        />
      </CFormField>
    </div>
  )
}
```

## Sizing

`size="sm"` and `size="lg"` size the whole row — the box, its label, and the space they sit in. Each sets one font size: the box is `1em`, so it follows, and so does the alignment margin, which is computed from the line. Nothing needs re-tuning per size, and a size of your own is one custom property.

```html
import React from 'react'
import { CFormField, CRadio } from '@coreui/react'

export const RadioSizingExample = () => {
  return (
    <div className="d-flex align-items-start gap-4">
      <CFormField>
        <CRadio size="sm" name="sizeRadio" id="radioSm" label="Small" defaultChecked />
      </CFormField>
      <CFormField>
        <CRadio name="sizeRadio" id="radioMd" label="Default" />
      </CFormField>
      <CFormField>
        <CRadio size="lg" name="sizeRadio" id="radioLg" label="Large" />
      </CFormField>
    </div>
  )
}
```

Any other size is one custom property, and the alignment follows it:

```jsx
<CRadio style={{ '--cui-radio-size': '2em' }} aria-label="..." />
```

## Without a label

A radio with no label text is the input on its own. Give it an accessible name some other way — `aria-label`, for instance. The name says what the option is, like `aria-label="Red"` in a color picker, and replaces the `...` placeholder in the example below. See the [forms overview](https://coreui.io/react/docs/forms/overview/#accessibility) for details.

```html
import React from 'react'
import { CRadio } from '@coreui/react'

export const RadioWithoutLabelsExample = () => {
  return <CRadio name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." />
}
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/react/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place. Nest one `<CFormField>` per radio inside an outer one to give the whole group a shared label.

```html
import React from 'react'
import { CFormField, CFormText, CRadio } from '@coreui/react'

export const RadioFormFieldExample = () => {
  return (
    <CFormField>
      <span className="form-label">Delivery</span>
      <CFormField>
        <CRadio name="fieldRadio" id="fieldRadio1" label="Standard" defaultChecked />
        <CFormText>Three to five working days.</CFormText>
      </CFormField>
      <CFormField>
        <CRadio name="fieldRadio" id="fieldRadio2" label="Express" />
        <CFormText>Next working day, where available.</CFormText>
      </CFormField>
    </CFormField>
  )
}
```

## Radio toggle buttons

Create button-like radio buttons by using `button` boolean property on the `<CFormCheck type="radio">` component. These toggle buttons can further be grouped in a button group if needed. Toggle buttons use the deprecated `<CFormCheck>`'s button mode — it has no `<CRadio>` counterpart.

```html
import React from 'react'
import { CFormCheck } from '@coreui/react'

export const RadioToggleButtonsExample = () => {
  return (
    <>
      <CFormCheck
        button={{ color: 'secondary' }}
        type="radio"
        name="options"
        id="option1"
        autoComplete="off"
        label="Checked"
        defaultChecked
      />
      <CFormCheck
        button={{ color: 'secondary' }}
        type="radio"
        name="options"
        id="option2"
        autoComplete="off"
        label="Radio"
      />
      <CFormCheck
        button={{ color: 'secondary' }}
        type="radio"
        name="options"
        id="option3"
        autoComplete="off"
        label="Radio"
        disabled
      />
      <CFormCheck
        button={{ color: 'secondary' }}
        type="radio"
        name="options"
        id="option4"
        autoComplete="off"
        label="Radio"
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

export const RadioToggleButtonsOutlinedStylesExample = () => {
  return (
    <>
      <CFormCheck
        button={{ color: 'success', variant: 'outline' }}
        type="radio"
        name="options-outlined"
        id="success-outlined"
        autoComplete="off"
        label="Radio"
        defaultChecked
      />
      <CFormCheck
        button={{ color: 'danger', variant: 'outline' }}
        type="radio"
        name="options-outlined"
        id="danger-outlined"
        autoComplete="off"
        label="Radio"
      />
    </>
  )
}
```

## Theme variants

Modify the appearance of checked radios with the [`theme`](https://coreui.io/react/docs/customize/components/#theme-variants) property — it sets the checked background and border color to the theme color.

```html
import React from 'react'
import { CFormField, CRadio } from '@coreui/react'

export const RadioThemeColorsExample = () => {
  return (
    <div className="d-flex flex-column gap-3">
      <CFormField>
        <CRadio
          theme="primary"
          name="radioThemePrimary"
          id="radioThemePrimary"
          label="Primary radio"
          defaultChecked
        />
      </CFormField>
      <CFormField>
        <CRadio
          theme="secondary"
          name="radioThemeSecondary"
          id="radioThemeSecondary"
          label="Secondary radio"
          defaultChecked
        />
      </CFormField>
      <CFormField>
        <CRadio
          theme="success"
          name="radioThemeSuccess"
          id="radioThemeSuccess"
          label="Success radio"
          defaultChecked
        />
      </CFormField>
      <CFormField>
        <CRadio
          theme="danger"
          name="radioThemeDanger"
          id="radioThemeDanger"
          label="Danger radio"
          defaultChecked
        />
      </CFormField>
      <CFormField>
        <CRadio
          theme="warning"
          name="radioThemeWarning"
          id="radioThemeWarning"
          label="Warning radio"
          defaultChecked
        />
      </CFormField>
      <CFormField>
        <CRadio
          theme="info"
          name="radioThemeInfo"
          id="radioThemeInfo"
          label="Info radio"
          defaultChecked
        />
      </CFormField>
    </div>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CRadio /&gt;](./api/#cradio)
- [&lt;CFormCheck /&gt;](./api/#cformcheck)
