# React Range Component

> React range component. Use our custom range inputs for consistent cross-browser styling and built-in customization.

## Overview

Create custom `<input type="range">` controls with `<CFormRange>`. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only Edge Legacy and Firefox supports "filling" their track from the left or right of the thumb as a means to visually indicate progress, we do not currently support it.

```html
import React from 'react'
import { CFormRange } from '@coreui/react'

export const FormRangeExample = () => {
  return <CFormRange id="customRange1" label="Example range" />
}
```

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

```html
import React from 'react'
import { CFormRange } from '@coreui/react'

export const FormRangeDisabledExample = () => {
  return <CFormRange id="disabledRange" label="Disabled range" disabled />
}
```

## Min and max

Range inputs have implicit values for `min` and `max`—`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

```html
import React from 'react'
import { CFormRange } from '@coreui/react'

export const FormRangeMinAndMaxExample = () => {
  return <CFormRange min={0} max={5} label="Example range" defaultValue="3" />
}
```

## Steps

By default, range inputs "snap" to integer values. To change this, you can specify a `step` value. In the example below, we double the number of steps by using `step={0.5}`.

```html
import React from 'react'
import { CFormRange } from '@coreui/react'

export const FormRangeStepsExample = () => {
  return <CFormRange min={0} max={5} step={0.5} label="Example range" defaultValue="3" />
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CFormRange /&gt;](./api/#cformrange)
