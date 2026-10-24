# React Range Slider Component

> Enhance your forms with our customizable React Range Slider component for advanced range selection.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=react&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Overview

The **React Range Slider** component allows users to select a value or range of values within a predefined range. It renders the markup of the [range](https://coreui.io/react/docs/forms/range/): a `<div class="form-range">` with one native `<input type="range">` per handle, so it looks like a range and reads its tokens, and adds what the range does not have: several handles on one track, `distance` between them, a press on the track that moves the nearest handle, clickable ticks and a vertical orientation. `className`, `style`, `theme`, `dir`, `hidden`, `role` and the `ref` land on the `.form-range`, which is a group named by `aria-label` or `aria-labelledby`; other input attributes, such as `id` (on the first handle) and `aria-describedby`, reach the handles.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderExample = () => {
  return (
    <CRangeSlider
      defaultValue={[25, 75]}
      ticks={['Low', 'Medium', 'High']}
      ariaLabel={['Minimum intensity', 'Maximum intensity']}
    />
  )
}
```

## Features

- **Multiple Handles:** Select single or multiple values within the range.
- **Ticks:** Draw ticks with labels at specific points on the slider.
- **Tooltips:** Show dynamic tooltips displaying current values.
- **Vertical Orientation:** Rotate the slider for vertical layouts.
- **Clickable Ticks:** Enable users to click on ticks to set slider values.
- **Disabled State:** Disable the slider to prevent user interaction.

## Basic React Range Slider

Create a simple range slider with default settings.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderBasicExample = () => {
  return <CRangeSlider defaultValue={50} ariaLabel={['Volume']} />
}
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/react/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place. Point `aria-labelledby` at the label and `aria-describedby` at the description: the slider is a group named by the label, "Budget" here, its handles carry their own names, "Minimum" and "Maximum", and the text below describes every handle (see [Accessibility](#accessibility)).

```html
import React from 'react'
import { CFormField, CFormText } from '@coreui/react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderFormFieldExample = () => {
  return (
    <CFormField>
      <span className="form-label" id="budgetLabel">
        Budget
      </span>
      <CRangeSlider
        aria-describedby="budgetHelp"
        aria-labelledby="budgetLabel"
        ariaLabel={['Minimum', 'Maximum']}
        defaultValue={[25, 75]}
        name={['budgetMin', 'budgetMax']}
      />
      <CFormText id="budgetHelp">Monthly spend, in thousands.</CFormText>
    </CFormField>
  )
}
```

## Multiple handles

Enable multiple handles to allow the selection of a range or/and multiple values. The handles share one track, the band runs from the lowest handle to the highest, and each handle is a native range input, so dragging, the keyboard, touch, form submission and form reset work as they do for one. The handles stay in order, a press on the track moves the nearest one and it follows the pointer until it is released, and when two of them meet the one that can still move stays on top.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderMultipleHandlesExample = () => {
  return (
    <>
      <CRangeSlider
        className="mb-4"
        defaultValue={[20, 40]}
        ariaLabel={['Minimum price', 'Maximum price']}
      />
      <CRangeSlider
        className="mb-4"
        defaultValue={[20, 40, 60]}
        ariaLabel={['Checkpoint 1', 'Checkpoint 2', 'Checkpoint 3']}
      />
      <CRangeSlider
        defaultValue={[20, 40, 60, 80]}
        ariaLabel={['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4']}
      />
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
      <CRangeSlider className="me-4" defaultValue={20} vertical ariaLabel={['Volume']} />
      <CRangeSlider
        className="me-4"
        defaultValue={[20, 80]}
        vertical
        ariaLabel={['Minimum temperature', 'Maximum temperature']}
      />
      <CRangeSlider
        defaultValue={[20, 80, 100]}
        vertical
        ariaLabel={['Level 1', 'Level 2', 'Level 3']}
      />
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
      <CRangeSlider className="mb-4" defaultValue={50} disabled ariaLabel={['Volume']} />
      <CRangeSlider
        defaultValue={[50, 75]}
        disabled
        ariaLabel={['Minimum price', 'Maximum price']}
      />
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
      <CRangeSlider
        className="mb-4"
        min={-50}
        max={150}
        defaultValue={50}
        ariaLabel={['Temperature']}
      />
      <CRangeSlider
        min={-50}
        max={150}
        defaultValue={[50, 75]}
        ariaLabel={['Minimum temperature', 'Maximum temperature']}
      />
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
      <CRangeSlider className="mb-4" step={0.25} defaultValue={50} ariaLabel={['Weight']} />
      <CRangeSlider
        step={0.25}
        defaultValue={[50, 75]}
        ariaLabel={['Minimum weight', 'Maximum weight']}
      />
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
  return (
    <CRangeSlider
      distance={10}
      defaultValue={[50, 75]}
      ariaLabel={['Minimum price', 'Maximum price']}
    />
  )
}
```

## Ticks

Add ticks to specific points on the slider for better context. If you provide an array of strings, as in the example below, then ticks will be spaced at equal distances from the beginning to the end of the slider, each labelled with its string.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderTicksExample = () => {
  return (
    <CRangeSlider
      ticks={['Start', 'Middle', 'End']}
      defaultValue={[30, 70]}
      ariaLabel={['Minimum progress', 'Maximum progress']}
    />
  )
}
```

### Ticks customization

Ticks can be configured as an array of strings, numbers or objects. A number is a bare tick at that value, with no text; with objects you can specify additional properties like `value`, `label`, `className`, and `style`.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderTicksCustomizationExample = () => {
  return (
    <CRangeSlider
      min={-50}
      max={100}
      ticks={[
        {
          value: -50,
          label: '-50°C',
          className: 'fg-info',
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
          className: ['fg-warning'],
        },
        {
          value: 100,
          label: '100°C',
          className: 'fg-danger',
        },
      ]}
      tooltipsFormat={(value) => `${value}°C`}
      defaultValue={[-10, 40]}
      ariaLabel={['Minimum temperature', 'Maximum temperature']}
    />
  )
}
```

### Tick marks

Every tick is taller when it has text, so bare numbers and labelled points mix in one `ticks` array. All of them are laid out on one grid, so unevenly spaced values stay aligned.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderTickMarksExample = () => {
  return (
    <CRangeSlider
      defaultValue={[25, 75]}
      ticks={[
        { value: 0, label: 'Cold' },
        25,
        { value: 50, label: 'Mild' },
        75,
        { value: 100, label: 'Hot' },
      ]}
      ariaLabel={['Minimum temperature', 'Maximum temperature']}
    />
  )
}
```

### Clickable ticks

By default, users can click on ticks to set the slider to specific values. You can disable this feature by setting `clickableTicks` to `false`.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderTicksClickableExample = () => {
  return (
    <CRangeSlider
      clickableTicks={false}
      ticks={['Low', 'Medium', 'High']}
      defaultValue={[20, 80]}
      ariaLabel={['Minimum level', 'Maximum level']}
    />
  )
}
```

## Tooltips

The value tooltip is the [Tooltip](https://coreui.io/react/docs/components/tooltip/) component's markup: the component renders `<div class="form-range-tooltip tooltip bs-tooltip-top">` with the tooltip's arrow and body, so it takes the tooltip's look and its `--cui-tooltip-*` tokens. It does not inherit the slider's `theme`; give it its own through `tooltipClassName`.

By default, tooltips show the current value of a handle while the pointer is over it, while it is held, and while it has a visible focus. Set `tooltips` to `"always"` to keep them visible at all times, or to `false` to turn them off.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderTooltipsExample = () => {
  return (
    <div className="d-flex flex-column gap-5 pt-5">
      <CRangeSlider
        tooltips="always"
        defaultValue={[40, 60]}
        ariaLabel={['Minimum price', 'Maximum price']}
      />
      <CRangeSlider
        tooltips={false}
        defaultValue={[40, 60]}
        ariaLabel={['Minimum price', 'Maximum price']}
      />
    </div>
  )
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
      ticks={[
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
      defaultValue={[100, 350]}
      ariaLabel={['Minimum price', 'Maximum price']}
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
      <CRangeSlider className="mb-4" track={false} defaultValue={50} ariaLabel={['Volume']} />
      <CRangeSlider
        className="mb-4"
        track={false}
        defaultValue={[50, 75]}
        ariaLabel={['Minimum price', 'Maximum price']}
      />
      <CRangeSlider
        track={false}
        defaultValue={[25, 50, 75]}
        ariaLabel={['Checkpoint 1', 'Checkpoint 2', 'Checkpoint 3']}
      />
    </>
  )
}
```

## Theme variants

Color the filled track and the handles with the [`theme`](https://coreui.io/react/docs/customize/components/#theme-variants) property.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderThemeColorsExample = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <CRangeSlider
        theme="primary"
        defaultValue={[25, 75]}
        ariaLabel={['Primary minimum', 'Primary maximum']}
      />
      <CRangeSlider
        theme="secondary"
        defaultValue={[25, 75]}
        ariaLabel={['Secondary minimum', 'Secondary maximum']}
      />
      <CRangeSlider
        theme="success"
        defaultValue={[25, 75]}
        ariaLabel={['Success minimum', 'Success maximum']}
      />
      <CRangeSlider
        theme="danger"
        defaultValue={[25, 75]}
        ariaLabel={['Danger minimum', 'Danger maximum']}
      />
      <CRangeSlider
        theme="warning"
        defaultValue={[25, 75]}
        ariaLabel={['Warning minimum', 'Warning maximum']}
      />
      <CRangeSlider
        theme="info"
        defaultValue={[25, 75]}
        ariaLabel={['Info minimum', 'Info maximum']}
      />
    </div>
  )
}
```

The `theme` colors the track and the handles; the tooltip keeps its default look. To theme the tooltip, pass a class through `tooltipClassName` — it lands on the tooltip only. `theme-secondary` gives a grey tooltip on the default slider; `theme-danger` makes the tooltip match a danger slider.

```html
import React from 'react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderTooltipClassNameExample = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <CRangeSlider
        defaultValue={[40]}
        tooltipClassName="theme-secondary"
        ariaLabel={['Secondary tooltip']}
      />
      <CRangeSlider
        theme="danger"
        defaultValue={[60]}
        tooltipClassName="theme-danger"
        ariaLabel={['Danger slider, danger tooltip']}
      />
    </div>
  )
}
```

## Validation

_Added in 6.0.0._

A range never fails the browser's own validation: a handle always holds a value between `min` and `max` on a step, and `required` does not apply to it. A state comes from the page, when the value breaks a rule the browser does not know, such as a budget below the minimum of a plan.

- Give it with `validationState`. The state shows on the slider and on its handles: `'invalid'` colours the thumbs, sets `aria-invalid` on every handle and adds the invalid feedback that follows the slider to their `aria-describedby`.
- `'invalid'` blocks the submit through the first handle, with the text of the feedback as the message the browser shows, or `Invalid value.` without one, and the browser moves the focus to that handle. `'valid'` and a custom state do not block, and neither does a disabled slider.
- When the user moves a handle, or the form is reset, the slider calls `onValidationStateChange(undefined)` before it reports the change; pass your state setter there to drop the state. A change of `value` from your code keeps it.
- A validity you set on a handle with `setCustomValidity()` shows on the slider once a validation reports it, and a given `'valid'` shows over it.

```html
import React, { useState } from 'react'
import { CButton, CForm, CFormFeedback, CFormField } from '@coreui/react'
import { CRangeSlider } from '@coreui/react-pro'

export const RangeSliderValidationExample = () => {
  const [budgetState, setBudgetState] = useState<string | undefined>('invalid')

  return (
    <CForm className="row g-4" noValidate validate>
      <CFormField className="col-12">
        <span className="form-label" id="planBudgetLabel">
          Budget
        </span>
        <CRangeSlider
          aria-labelledby="planBudgetLabel"
          ariaLabel={['Minimum', 'Maximum']}
          defaultValue={[5, 40]}
          name={['planBudgetMin', 'planBudgetMax']}
          onValidationStateChange={setBudgetState}
          validationState={budgetState}
        />
        <CFormFeedback validationState="invalid">
          The Team plan starts at 10 thousand a month.
        </CFormFeedback>
      </CFormField>
      <div className="col-12">
        <CButton color="primary" type="submit">
          Save
        </CButton>
      </div>
    </CForm>
  )
}
```

## Controlled and uncontrolled

_Added in 6.0.0._

The slider works either way, and the prop you reach for is what picks the mode.

| | prop | who owns the value |
| --- | --- | --- |
| Uncontrolled | `defaultValue` | the slider, from that starting point |
| Controlled | `value` | your component |

Both take a single number as well as an array of values, and `onChange` fires in **both** modes — so you can watch the state without taking it over. A native reset of the form puts back the values the slider started with and calls `onChange` when that moves a handle; a controlled slider only asks for its first `value` there.

### Uncontrolled

Give the slider a starting point and let it manage itself.

```jsx
<CRangeSlider defaultValue={[20, 80]} />
```

### Controlled

Pass `value` and the slider is fully controlled: it renders exactly what you pass, and dragging a handle only fires `onChange`. Feed the change back and the handle follows; ignore it and the handle stays on your value.

```html
import React, { useState } from 'react'
import { CButton, CRangeSlider } from '@coreui/react-pro'

export const RangeSliderControlledExample = () => {
  const [value, setValue] = useState<number[]>([25, 75])

  return (
    <>
      <CRangeSlider
        onChange={setValue}
        value={value}
        ariaLabel={['Minimum price', 'Maximum price']}
      />
      <div className="mt-4 d-flex align-items-center gap-4">
        <CButton theme="secondary" onClick={() => setValue([25, 75])}>
          Reset
        </CButton>
        <span>Current value: {value.join(' – ')}</span>
      </div>
    </>
  )
}
```

## Accessibility

Each handle is a native `<input type="range">`, so it is a slider with its value, minimum and maximum without any ARIA of its own, and the browser handles the keyboard: the arrow keys, <kbd>Page Up</kbd>, <kbd>Page Down</kbd>, <kbd>Home</kbd> and <kbd>End</kbd>. In a vertical slider the handles carry `aria-orientation="vertical"`, and <kbd>→</kbd> increases the value in every browser, as <kbd>↑</kbd> does.

The slider is a `group`. Give it the name of the field, with `aria-labelledby` pointing at a visible label or with `aria-label`: a screen reader announces the group, "Budget", when the focus enters it, and then each handle by its own name, so it can tell the handles of one slider from another's. A single handle repeats the name of the group, since it has none of its own. `aria-describedby` describes every handle. Name the handles themselves with `ariaLabel`: an array with one name per handle, or a function `(index, total) => string`. Without it, two handles are named "Minimum value" and "Maximum value" and more handles "Value 1", "Value 2" and so on. A single handle has no generated name: it takes the name of the group, followed by its `ariaLabel` when it has one, or a `<label>` for its `id`. A `role` you pass replaces `group` on the slider. While a handle sits on a tick labelled with text, its `aria-valuetext` adds the label to the value ("50, Medium", or the `tooltipsFormat` text followed by the label when they differ).

Tooltips and tick marks are hidden from assistive technology (`aria-hidden="true"`): a tooltip repeats the value the handle already announces, and a tick label reaches the handle through `aria-valuetext` while the handle sits on its tick.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CRangeSlider /&gt;](./api/#crangeslider)
