# React Range Slider Component

> Enhance your forms with our customizable React Range Slider component for advanced range selection.

## Overview

The **React Range Slider** component allows users to select a value or range of values within a predefined range. Unlike the standard `<input type="range">`, the Range Slider offers enhanced customization options, including multiple handles, labels, tooltips, and vertical orientation. It ensures consistent styling across browsers and provides a rich set of features for advanced use cases.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderExample = () => {
  return <CRangeSlider value={[25, 75]} labels={['Low', 'Medium', 'High']} />
}
```

## Features

- **Multiple Handles:** Select single or multiple values within the range.
- **Custom Labels:** Display labels at specific points on the slider.
- **Tooltips:** Show dynamic tooltips displaying current values.
- **Vertical Orientation:** Rotate the slider for vertical layouts.
- **Clickable Labels:** Enable users to click on labels to set slider values.
- **Disabled State:** Disable the slider to prevent user interaction.

## Basic React Range Slider

Create a simple range slider with default settings.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderBasicExample = () => {
  return <CRangeSlider value={50} />
}
```

## Multiple handles

Enable multiple handles to allow the selection of a range or/and multiple values.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderMultipleHandlesExample = () => {
  return (
    <>
      <CRangeSlider className="mb-3" value={[20, 40]} />
      <CRangeSlider className="mb-3" value={[20, 40, 60]} />
      <CRangeSlider value={[20, 40, 60, 80]} />
    </>
  )
}
```

## Vertical Range Slider

Rotate the slider to a vertical orientation.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderVerticalExample = () => {
  return (
    <div className="d-flex">
      <CRangeSlider className="me-3" value={20} vertical />
      <CRangeSlider className="me-3" value={[20, 80]} vertical />
      <CRangeSlider value={[20, 80, 100]} vertical />
    </div>
  )
}
```

## Disabled

Disable the slider to prevent user interaction.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderDisabledExample = () => {
  return (
    <>
      <CRangeSlider className="mb-3" value={50} disabled />
      <CRangeSlider value={[50, 75]} disabled />
    </>
  )
}
```

## Min and max

React Range Slider component has implicit values for `min` and `max`—`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderMinAndMaxExample = () => {
  return (
    <>
      <CRangeSlider className="mb-3" min={-50} max={150} value={50} />
      <CRangeSlider min={-50} max={150} value={[50, 75]} />
    </>
  )
}
```

## Steps

Range Slider inputs automatically "snap" to whole numbers. To modify this behavior, set a `step` value. In the example below, we increase the number of steps by specifying `step="0.25"`.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderStepsExample = () => {
  return (
    <>
      <CRangeSlider className="mb-3" step={0.25} value={50} />
      <CRangeSlider step={0.25} value={[50, 75]} />
    </>
  )
}
```

## Distance

Sets the minimum distance between multiple slider handles by setting `distance` and ensures that the handles do not overlap or get too close.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderDistanceExample = () => {
  return <CRangeSlider distance={10} value={[50, 75]} />
}
```

## Labels

Add labels to specific points on the slider for better context. If you provide an array of strings, as in the example below, then labels will be spaced at equal distances from the beginning to the end of the slider.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderLabelsExample = () => {
  return <CRangeSlider labels={['Start', 'Middle', 'End']} value={[30, 70]} />
}
```

### Labels customization

Labels can be configured as an array of strings or objects. When using objects, you can specify additional properties like `value`, `label`, `className`, and `style`.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderLabelsCustomizationExample = () => {
  return (
    <CRangeSlider
      min={-50}
      max={100}
      labels={[
        {
          value: -50,
          label: '-50°C',
          className: 'text-info',
        },
        {
          value: 0,
          label: '0°C',
          style: {
            fontWeight: 'bold',
          },
        },
        {
          value: 20,
          label: '20°C',
          className: ['text-warning'],
        },
        {
          value: 100,
          label: '100°C',
          className: 'text-danger',
        },
      ]}
      tooltipsFormat={(value) => `${value}°C`}
      value={[-10, 40]}
    />
  )
}
```

### Clickable labels

By default, users can click on labels to set the slider to specific values. You can disable this feature by setting `clickableLabels` to `false`.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderLabelsClickableExample = () => {
  return (
    <CRangeSlider clickableLabels={false} labels={['Low', 'Medium', 'High']} value={[20, 80]} />
  )
}
```

## Tooltips

By default, tooltips display the current value of each handle. You can disable tooltips by setting `tooltips` to `false`

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderTooltipsExample = () => {
  return <CRangeSlider tooltips={false} value={[40, 60]} />
}
```

### Tooltips formatting

Customize the content of tooltips using the `tooltipsFormat` option. This can be a function that formats the tooltip text based on the current value.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderTooltipsFormatingExample = () => {
  return (
    <CRangeSlider
      max={1000}
      labels={[
        {
          value: 0,
          label: '$0',
        },
        {
          value: 250,
          label: '$250',
        },
        {
          value: 500,
          label: '$500',
        },
        {
          value: 1000,
          label: '$1000',
        },
      ]}
      tooltipsFormat={(value) => `$${value}`}
      value={[100, 350]}
    />
  )
}
```

## Track

The `track` property allows you to customize how the slider's track is displayed. By default, the `track` property is set to `'fill'` enabling dynamic filling of the track based on the slider's current value(s). This means the filled portion of the track will adjust automatically as the slider handle(s) move, offering a responsive visual representation of the selected range.

### Disable filling

If you set `track` to `false`, the slider's track will not display any fill. Only the default track background will be visible, which can be useful for minimalist designs or when you use more then two handles.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderTrackExample = () => {
  return (
    <>
      <CRangeSlider className="mb-3" track={false} value={50} />
      <CRangeSlider className="mb-3" track={false} value={[50, 75]} />
      <CRangeSlider track={false} value={[25, 50, 75]} />
    </>
  )
}
```

## Accessibility

The React.js Range Slider component is built with accessibility in mind. Each slider handle includes the following ARIA attributes:

- `role="slider"`
- `aria-valuemin`: Minimum value
- `aria-valuemax`: Maximum value
- `aria-valuenow`: Current value
- `aria-orientation`: horizontal or vertical

Additionally, ensure that labels and tooltips are clear and descriptive to provide the best experience for all users.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CRangeSlider /&gt;](./api/#crangeslider)
