# React Bootstrap Range Component

> Learn how to create customizable and consistent cross-browser range sliders using CoreUI’s React components styled with Bootstrap.

## How to use React Bootstrap Range component

Use CoreUI’s `<CFormRange>` component to create custom range inputs with Bootstrap styling. It provides consistent appearance and behavior across modern browsers and supports customization via standard props.

### Basic example

The `<CFormRange>` component renders a stylized `<input type="range">` element.

```html
import React from 'react'
import { CFormRange } from '@coreui/react'

export const FormRangeExample = () => {
  return <CFormRange id="customRange1" label="Example range" />
}
```

### Disabled state

Add the `disabled` prop to visually gray out the slider and disable interaction.

```html
import React from 'react'
import { CFormRange } from '@coreui/react'

export const FormRangeDisabledExample = () => {
  return <CFormRange id="disabledRange" label="Disabled range" disabled />
}
```

### Minimum and maximum values

Customize the slider’s value range using the `min` and `max` props.

```html
import React from 'react'
import { CFormRange } from '@coreui/react'

export const FormRangeMinAndMaxExample = () => {
  return <CFormRange min={0} max={5} label="Example range" defaultValue="3" />
}
```

### Custom step values

Set a custom `step` size to control the interval between selectable values.

```html
import React from 'react'
import { CFormRange } from '@coreui/react'

export const FormRangeStepsExample = () => {
  return <CFormRange min={0} max={5} step={0.5} label="Example range" defaultValue="3" />
}
```

## API reference

Refer to the API documentation below for detailed descriptions of all available props.

- [&lt;CFormRange /&gt;](../api/#cformrange)
