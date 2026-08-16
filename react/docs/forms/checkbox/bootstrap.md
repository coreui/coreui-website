# React Bootstrap Checkbox Component

> Learn how to build accessible and consistent Bootstrap-style checkboxes in React using CoreUI components.

## How to use React Bootstrap Checkbox component

Use CoreUI’s `<CFormCheck>` to create cross-browser, accessible, and Bootstrap-styled checkboxes in React. Checkboxes are ideal for selecting one or more options from a list and can be styled, stacked, or grouped using layout utilities.

### Basic example

Use the `<CFormCheck>` component to render a standard Bootstrap-style checkbox.

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

### Indeterminate state

Set the `indeterminate` property to render a checkbox in an indeterminate state, commonly used to indicate partial selections.

```html
import React from 'react'
import { CFormCheck } from '@coreui/react'

export const CheckboxIndeterminateExample = () => {
  return <CFormCheck id="flexCheckIndeterminate" label="Indeterminate checkbox" indeterminate />
}
```

### Disabled state

Add the `disabled` prop to disable a checkbox and automatically style its label in a muted color, following Bootstrap conventions.

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

### Stacked layout (default)

By default, multiple checkboxes stack vertically and are spaced evenly.

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

### Inline checkboxes

Use the `inline` boolean prop to place multiple checkboxes on the same horizontal row.

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

### Reversed checkboxes

Use the `reverse` prop to position the checkbox on the opposite side of the label.

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

### Without labels

If omitting a label, remember to include `aria-label` for accessibility compliance.

```html
import React from 'react'
import { CFormCheck } from '@coreui/react'

export const CheckboxWithoutLabelsExample = () => {
  return <CFormCheck id="checkboxNoLabel" value="" aria-label="..." />
}
```

## Checkbox toggle buttons

Transform checkboxes into Bootstrap-style toggle buttons using the `button` prop. You can also group them with button groups.

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

### Outlined toggle styles

Use outlined button variants for a lighter, bordered appearance.

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

## API reference

Refer to the API documentation for detailed descriptions of all the available props and configuration options.

- [&lt;CFormCheck /&gt;](../api/#cformcheck)
