# React Switch Components

> Create consistent cross-browser and cross-device switch component.

## About

React Switch Components are a type of UI component that allows users to toggle between two states, usually represented as "on" or "off", "enabled" or "disabled", or "checked" or "unchecked".

When a user interacts with the component by clicking or tapping on it, the switch toggles its state, triggering an action or changing the appearance of the component. This type of component is often used in forms, settings panels, and other places where users need to turn something on or off or choose between two options.

## Example

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

## Sizing

Larger or smaller React switches? Add `size="lg"` or `size="xl"` for additional sizes.

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

## Reverse 

Put your switches on the opposite side by adding `reverse` boolean property.

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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CFormSwitch /&gt;](./api/#cformswitch)
