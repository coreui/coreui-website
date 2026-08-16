# React Radio Components

> Create consistent cross-browser and cross-device radios with our React radio component.

## Approach

Browser default radios are replaced with the help of `<CFormCheck type="radio">`. Radios are for selecting one option from many.

## Radios

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

### Disabled

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input's state.

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

## Default (stacked)

By default, any number of radios that are immediate sibling will be vertically stacked and appropriately spaced.

```html
import React from 'react'
import { CFormCheck } from '@coreui/react'

export const RadioStackedExample = () => {
  return (
    <>
      <CFormCheck
        type="radio"
        name="exampleRadios"
        id="exampleRadios1"
        value="option1"
        label="Default radio"
        defaultChecked
      />
      <CFormCheck
        type="radio"
        name="exampleRadios"
        id="exampleRadios2"
        value="option2"
        label="Second default radio"
      />
      <CFormCheck
        type="radio"
        name="exampleRadios"
        id="exampleRadios3"
        value="option3"
        label="Disabled radio"
        disabled
      />
    </>
  )
}
```

## Inline

Group radios on the same horizontal row by adding `inline` boolean property to any `<CFormCheck radio>`.

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

## Reverse 

Put your radios on the opposite side by adding `reverse` boolean property.

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

## Without labels

Remember to still provide some form of accessible name for assistive technologies (for instance, using `aria-label`).

```html
import React from 'react'
import { CFormCheck } from '@coreui/react'

export const RadioWithoutLabelsExample = () => {
  return <CFormCheck type="radio" name="radioNoLabel" id="radioNoLabel" value="" aria-label="..." />
}
```

## Radio toggle buttons

Create button-like radio buttons by using `button` boolean property on the `<CFormCheck radio>` component. These toggle buttons can further be grouped in a button group if needed.

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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CFormCheck /&gt;](./api/#cformcheck)
