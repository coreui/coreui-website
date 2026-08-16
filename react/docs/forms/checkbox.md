# React Checkbox Components

> Create consistent cross-browser and cross-device checkboxes with our React checkbox components.

## Approach

Browser default checkboxes and radios are replaced with the help of `<CFormCheck>`. Checkboxes are for selecting one or several options in a list.

## Checkboxes

```html
import React from 'react'
import { CFormCheck } from '@coreui/react'

export const CheckboxExample = () => {
  return (
    <>
      <CFormCheck id="flexCheckDefault" label="Default checkbox" />
      <CFormCheck id="flexCheckChecked" label="Checked checkbox" defaultChecked />
    </>
  )
}
```

### Indeterminate

Checkboxes can utilize the `:indeterminate` pseudo-class when manually set via `indeterminate` property.

```html
import React from 'react'
import { CFormCheck } from '@coreui/react'

export const CheckboxIndeterminateExample = () => {
  return <CFormCheck id="flexCheckIndeterminate" label="Indeterminate checkbox" indeterminate />
}
```

### Disabled

Add the `disabled` attribute and the associated `<label>`s are automatically styled to match with a lighter color to help indicate the input's state.

```html
import React from 'react'
import { CFormCheck } from '@coreui/react'

export const CheckboxDisabledExample = () => {
  return (
    <>
      <CFormCheck label="Disabled checkbox" disabled />
      <CFormCheck label="Disabled checked checkbox" defaultChecked disabled />
    </>
  )
}
```

## Default (stacked)

By default, any number of checkboxes that are immediate sibling will be vertically stacked and appropriately spaced.

```html
import React from 'react'
import { CFormCheck } from '@coreui/react'

export const CheckboxStackedExample = () => {
  return (
    <>
      <CFormCheck id="defaultCheck1" label="Default checkbox" />
      <CFormCheck id="defaultCheck2" label="Disabled checkbox" disabled />
    </>
  )
}
```

## Inline

Group checkboxes on the same horizontal row by adding `inline` boolean property to any `<CFormCheck>`.

```html
import React from 'react'
import { CFormCheck } from '@coreui/react'

export const CheckboxInlineExample = () => {
  return (
    <>
      <CFormCheck inline id="inlineCheckbox1" value="option1" label="1" />
      <CFormCheck inline id="inlineCheckbox2" value="option2" label="2" />
      <CFormCheck inline id="inlineCheckbox3" value="option3" label="3 (disabled)" disabled />
    </>
  )
}
```

## Reverse 

Put your checkboxes on the opposite side by adding `reverse` boolean property.

```html
import React from 'react'
import { CFormCheck } from '@coreui/react'

export const CheckboxReverseExample = () => {
  return (
    <>
      <CFormCheck reverse id="reverseCheckbox1" value="option1" label="Reverse checkbox" />
      <CFormCheck
        reverse
        id="reverseCheckbox2"
        value="option2"
        label="Disabled reverse checkbox"
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

export const CheckboxWithoutLabelsExample = () => {
  return <CFormCheck id="checkboxNoLabel" value="" aria-label="..." />
}
```

## Checkbox toggle buttons

Create button-like checkboxes and radio buttons by using `button` boolean property on the `<CFormCheck>` component. These toggle buttons can further be grouped in a button group if needed.

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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CFormCheck /&gt;](./api/#cformcheck)
