# React Range Component

> React range component. Use our custom range inputs for consistent cross-browser styling and built-in customization.

## Overview

Create custom `<input type="range">` controls with `<CFormRange>`. The track (the background) and thumb (the value) are both styled to appear the same across browsers, and the track fills up to the thumb: the component renders the input inside a `.form-range` wrapper and writes the fill ratio to `--cui-range-fill`, which the CSS uses to draw the fill, the tooltip and the tick marks. The fill is a shade lighter than the thumb; `track={false}` leaves the track unfilled.

```html
import React from 'react'
import { CFormRange } from '@coreui/react'

export const FormRangeExample = () => {
  return <CFormRange id="customRange1" label="Example range" />
}
```

For several thumbs on one track, a vertical orientation or ticks that move a thumb when pressed, use [`<CRangeSlider>`](https://coreui.io/react/docs/forms/range-slider/), which renders this markup.

## Tooltip

Set `tooltips` to show a tooltip with the value that follows the thumb. It appears while the pointer is over the input, while the thumb is held, and while the input has focus; `tooltips="always"` keeps it visible at all times. The tooltip is the markup and the look of the [tooltip](https://coreui.io/react/docs/components/tooltip/) component, and `tooltipClassName` adds classes to it, for example a `theme-{color}`. `tooltipsFormat` formats the text, and a string it returns becomes the input's `aria-valuetext`.

```html
import React from 'react'
import { CFormRange } from '@coreui/react'

export const FormRangeTooltipExample = () => {
  return (
    <>
      <CFormRange id="rangeTooltip" label="Brightness" defaultValue={60} tooltips />
      <CFormRange
        className="mt-5"
        id="rangeTooltipAlways"
        label="Brightness"
        defaultValue={60}
        tooltips="always"
        tooltipsFormat={(value) => `${value}%`}
      />
    </>
  )
}
```

## Tick marks

Pass `ticks` and the component renders a tick mark for each entry. A number is a bare tick at that value, and an object sets `value`, `label`, `className` and `style`, so the ticks land on their values even when those are unevenly spaced. A labelled tick is drawn taller than an unlabelled one.

```html
import React from 'react'
import { CFormRange } from '@coreui/react'

export const FormRangeTicksExample = () => {
  return (
    <CFormRange
      id="rangeTicks"
      label="Temperature"
      min={0}
      max={100}
      step={25}
      defaultValue={50}
      ticks={[
        { value: 0, label: 'Cold' },
        25,
        { value: 50, label: 'Mild' },
        75,
        { value: 100, label: 'Hot' },
      ]}
    />
  )
}
```

A string, or an object without `value`, is a label placed by its position in the array, the first at `min` and the last at `max`. While the thumb sits on a tick labelled with text, its `aria-valuetext` adds the label to the value, so a screen reader announces "50, Medium"; with `tooltipsFormat` the label follows the formatted text when the two differ.

```html
import React from 'react'
import { CFormRange } from '@coreui/react'

export const FormRangeTickLabelsExample = () => {
  return <CFormRange id="rangePriority" label="Priority" ticks={['Low', 'Medium', 'High']} />
}
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/react/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
import React from 'react'
import { CFormField, CFormLabel, CFormRange, CFormText } from '@coreui/react'

export const FormRangeFormFieldExample = () => {
  return (
    <CFormField>
      <CFormLabel htmlFor="rangeField">Volume</CFormLabel>
      <CFormRange id="rangeField" />
      <CFormText>Applies to notification sounds only.</CFormText>
    </CFormField>
  )
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

Inside a `<form>`, a native reset puts the thumb back on the value the range started with and calls `onChange` when that moves it; with `value` set, `onChange` only asks for the first `value`.

## Theme variants

Color the thumb and the fill with the [`theme`](https://coreui.io/react/docs/customize/components/#theme-variants) property.

```html
import React from 'react'
import { CFormRange } from '@coreui/react'

export const RangeThemeColorsExample = () => {
  return (
    <div className="d-flex flex-column gap-3">
      <CFormRange theme="primary" id="rangeThemePrimary" label="Primary range" defaultValue="50" />
      <CFormRange
        theme="secondary"
        id="rangeThemeSecondary"
        label="Secondary range"
        defaultValue="50"
      />
      <CFormRange theme="success" id="rangeThemeSuccess" label="Success range" defaultValue="50" />
      <CFormRange theme="danger" id="rangeThemeDanger" label="Danger range" defaultValue="50" />
      <CFormRange theme="warning" id="rangeThemeWarning" label="Warning range" defaultValue="50" />
      <CFormRange theme="info" id="rangeThemeInfo" label="Info range" defaultValue="50" />
    </div>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CFormRange /&gt;](./api/#cformrange)
