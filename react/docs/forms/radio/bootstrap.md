# React Bootstrap Radio Component

> Learn how to build consistent, accessible, and customizable radio buttons using CoreUI’s React components styled with Bootstrap.

## How to use React Bootstrap Radio component

Use CoreUI’s `<CFormCheck type="radio">` component to create Bootstrap-styled radio buttons for selecting one option from many. These components are built to be accessible, customizable, and responsive.

### Default stacked radios

By default, multiple radio buttons rendered as siblings will be stacked vertically with proper spacing.

```html
import React from 'react'
import { CFormCheck } from '@coreui/react'

export const RadioExample = () => {
  return (
    <>
      <CFormCheck
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
        label="Default radio"
      />
      <CFormCheck
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault2"
        label="Checked radio"
        defaultChecked
      />
    </>
  )
}
```

### Disabled state

Add the `disabled` prop to disable a radio button. The associated label will also receive a muted style to reflect its state.

```html
import React from 'react'
import { CFormCheck } from '@coreui/react'

export const RadioDisabledExample = () => {
  return (
    <>
      <CFormCheck
        type="radio"
        name="flexRadioDisabled"
        id="flexRadioDisabled"
        label="Disabled radio"
        disabled
      />
      <CFormCheck
        type="radio"
        name="flexRadioDisabled"
        id="flexRadioCheckedDisabled"
        label="Disabled checked radio"
        defaultChecked
        disabled
      />
    </>
  )
}
```

### Inline radios

Display radio buttons in a horizontal row by adding the `inline` prop to each `<CFormCheck type="radio">`.

```html
import React from 'react'
import { CFormCheck } from '@coreui/react'

export const RadioInlineExample = () => {
  return (
    <>
      <CFormCheck
        inline
        type="radio"
        name="inlineRadioOptions"
        id="inlineCheckbox1"
        value="option1"
        label="1"
      />
      <CFormCheck
        inline
        type="radio"
        name="inlineRadioOptions"
        id="inlineCheckbox2"
        value="option2"
        label="2"
      />
      <CFormCheck
        inline
        type="radio"
        name="inlineRadioOptions"
        id="inlineCheckbox3"
        value="option3"
        label="3 (disabled)"
        disabled
      />
    </>
  )
}
```

### Reverse layout

Use the `reverse` prop to position the label text on the opposite side of the radio input.

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
import { CFormCheck } from '@coreui/react'

export const RadioWithoutLabelsExample = () => {
  return <CFormCheck type="radio" name="radioNoLabel" id="radioNoLabel" value="" aria-label="..." />
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

- [&lt;CFormCheck /&gt;](../api/#cformcheck)
