# React Bootstrap Switch Component

> Learn how to create responsive toggle switches using CoreUI’s React component styled to match Bootstrap form elements.

## How to use React Bootstrap Switch component

Use CoreUI’s `<CSwitch>` to create cross-browser, Bootstrap-styled toggle switches that represent binary states such as on/off, enabled/disabled, or true/false.

### Basic usage

A standard switch is a `<CSwitch>` — it renders `role="switch"` itself.

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

### Sizing

Use the `size` prop to adjust the visual scale of the switch. Available sizes include `"lg"` and `"xl"`.

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

### Reverse layout

The reverse layout exists only on the deprecated `<CFormSwitch>` — its `reverse` property places the control after the label.

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

- [&lt;CSwitch /&gt;](../api/#cswitch)
- [&lt;CFormSwitch /&gt;](../api/#cformswitch)
