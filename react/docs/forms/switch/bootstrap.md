# React Bootstrap Switch Component

> Learn how to create responsive toggle switches using CoreUI’s React component styled to match Bootstrap form elements.

## How to use React Bootstrap Switch component

Use CoreUI’s `<CFormSwitch>` to create cross-browser, Bootstrap-styled toggle switches that represent binary states such as on/off, enabled/disabled, or true/false.

### Basic usage

A standard switch uses the `type="switch"` option on the `<CFormSwitch>` component.

```html
import React from 'react'
import { CFormSwitch } from '@coreui/react'

export const FormSwitchExample = () => {
  return (
    <>
      <CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault" />
      <CFormSwitch
        label="Checked switch checkbox input"
        id="formSwitchCheckChecked"
        defaultChecked
      />
      <CFormSwitch label="Disabled switch checkbox input" id="formSwitchCheckDisabled" disabled />
      <CFormSwitch
        label="Disabled checked switch checkbox input"
        id="formSwitchCheckCheckedDisabled"
        defaultChecked
        disabled
      />
    </>
  )
}
```

### Sizing

Use the `size` prop to adjust the visual scale of the switch. Available sizes include `"lg"` and `"xl"`.

```html
import React from 'react'
import { CFormSwitch } from '@coreui/react'

export const FormSwitchSizingExample = () => {
  return (
    <>
      <CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefaultNormal" />
      <CFormSwitch size="lg" label="Large switch checkbox input" id="formSwitchCheckDefaultLg" />
      <CFormSwitch
        size="xl"
        label="Extra large switch checkbox input"
        id="formSwitchCheckDefaultXL"
      />
    </>
  )
}
```

### Reverse layout

Add the `reverse` prop to place the switch control after the label.

```html
import React from 'react'
import { CFormSwitch } from '@coreui/react'

export const FormSwitchReverseExample = () => {
  return (
    <>
      <CFormSwitch reverse type="radio" id="reverseFormSwitch1" label="Reverse switch" />
      <CFormSwitch
        reverse
        type="radio"
        id="reverseFormSwitch2"
        label="Disabled reverse switch"
        disabled
      />
    </>
  )
}
```

## API reference

Refer to the API documentation below for a complete list of available props for the React Bootstrap Switch component.

- [&lt;CFormSwitch /&gt;](../api/#cformswitch)
