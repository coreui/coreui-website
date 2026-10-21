# React Bootstrap Radio Component

> Learn how to build consistent, accessible, and customizable radio buttons using CoreUI’s React components styled with Bootstrap.

## How to use React Bootstrap Radio component

Use CoreUI’s `<CRadio>` component to create Bootstrap-styled radio buttons for selecting one option from many. These components are built to be accessible, customizable, and responsive.

### Default stacked radios

By default, multiple radio buttons rendered as siblings will be stacked vertically with proper spacing.

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

### Disabled state

Add the `disabled` prop to disable a radio button. The associated label will also receive a muted style to reflect its state.

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

### Inline radios

Display radio buttons in a horizontal row with a flex utility wrapper.

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

### Reverse layout

The reverse layout exists only on the deprecated `<CFormCheck>` — its `reverse` property places the control after the label.

```html
import React from 'react'
import { CFormCheck } from '@coreui/react'

export const RadioReverseExample = () => {
  return (
    <>
      <CFormCheck reverse type="radio" id="reverseOption1" value="option1" label="Reverse radio" />
      <CFormCheck
        reverse
        type="radio"
        id="reverseOption2"
        value="option2"
        label="Disabled reverse radio"
        disabled
      />
    </>
  )
}
```

### Radios without labels

You can omit visual labels, but make sure to provide accessible names using `aria-label` for screen readers.

```html
import React from 'react'
import { CRadio } from '@coreui/react'

export const RadioWithoutLabelsExample = () => {
  return <CRadio name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." />
}
```

### Radio toggle buttons

Turn your radios into button-like toggles using the `button` prop. These can also be grouped using a button group component.

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

#### Outlined toggle styles

You can apply outlined styles to toggle radios using Bootstrap's button variant system.

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

## API reference

Refer to the API documentation below for a complete list of props supported by the React Bootstrap radio component.

- [&lt;CRadio /&gt;](../api/#cradio)
- [&lt;CFormCheck /&gt;](../api/#cformcheck)
