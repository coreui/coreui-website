# React Number Input Component

> A React number field with accessible increment and decrement buttons, with min, max and step handled by the browser.

## Example

`` is a number field with a stepper you can actually hit. The browser's own spinner is tiny, appears only on hover in some engines and does not exist at all on iOS, so the component replaces it with two buttons sized like every other adornment in a form control group. You write neither the frame, the buttons nor their icons.

```html
import React from 'react'
import { CNumberInput } from '@coreui/react-pro'

export const NumberInputExample = () => {
  return <CNumberInput aria-label="Quantity" defaultValue={3} />
}
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/react/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
import React from 'react'
import { CFormField, CFormLabel, CFormText } from '@coreui/react'
import { CNumberInput } from '@coreui/react-pro'

export const NumberInputFormFieldExample = () => {
  return (
    <CFormField>
      <CFormLabel htmlFor="numberInputField">Quantity</CFormLabel>
      <CNumberInput id="numberInputField" defaultValue={3} />
      <CFormText>Up to ten items per order.</CFormText>
    </CFormField>
  )
}
```

## Min, max and step

`min`, `max` and `step` are the native attributes — the component does not reimplement them, it calls the browser's own stepping. **A button that cannot move the value any further is disabled**, so the bound is visible rather than just unresponsive.

When the field is empty, a button steps from zero, and the result stays within `min` and `max` and on the `step` grid.

```html
import React from 'react'
import { CForm } from '@coreui/react'
import { CNumberInput } from '@coreui/react-pro'

export const NumberInputBoundsExample = () => {
  return (
    <CForm>
      <div className="mb-4">
        <CNumberInput defaultValue={10} label="Quantity" max={10} min={0} />
      </div>
      <div>
        <CNumberInput defaultValue={2} label="Amount" step={0.5} />
      </div>
    </CForm>
  )
}
```

## Sizing

Use the `size` prop to control the height and padding of the field. Sizing belongs to the frame rather than to the control inside it, so the component puts the class on the group it builds.

```html
import React from 'react'
import { CForm } from '@coreui/react'
import { CNumberInput } from '@coreui/react-pro'

export const NumberInputSizingExample = () => {
  return (
    <CForm>
      <div className="mb-4">
        <CNumberInput aria-label="Quantity" defaultValue={3} size="sm" />
      </div>
      <div>
        <CNumberInput aria-label="Quantity" defaultValue={3} size="lg" />
      </div>
    </CForm>
  )
}
```

## Controlled value

Pair `value` with `onChange` to own the value yourself. Stepping reports through the same `onChange` typing does, so there is one path to handle.

```html
import React, { useState } from 'react'
import { CNumberInput } from '@coreui/react-pro'

export const NumberInputControlledExample = () => {
  const [value, setValue] = useState('3')

  return (
    <>
      <CNumberInput
        label="Quantity"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <div className="mt-3 fg-2">Value: {value === '' ? '—' : value}</div>
    </>
  )
}
```

## Disabled and read-only

```html
import React from 'react'
import { CForm } from '@coreui/react'
import { CNumberInput } from '@coreui/react-pro'

export const NumberInputDisabledExample = () => {
  return (
    <CForm>
      <div className="mb-4">
        <CNumberInput defaultValue={3} disabled label="Disabled" />
      </div>
      <div>
        <CNumberInput defaultValue={3} label="Read-only" readOnly />
      </div>
    </CForm>
  )
}
```

Both buttons are disabled while the field is disabled or read-only.

## Holding a button

Holding a button repeats the step after a short delay, and releasing it does not add a step. Set `repeat={false}` to require a click per step.

## Floating labels

Set `floatingLabel` and the component renders the label itself — no wrapper markup needed — and the text also becomes the field's accessible name; the stepper buttons ride along with the field.

```html
import React from 'react'
import { CNumberInput } from '@coreui/react-pro'

export const NumberInputFloatingLabelExample = () => (
  <CNumberInput defaultValue={42} floatingLabel="Quantity" id="floatingNumberInput" />
)
```

Set `floatingLabelAlways` to keep the label [always floating](https://coreui.io/react/docs/forms/floating-labels/#always-floating).

## Accessibility

The buttons carry labels (`Increase` / `Decrease` by default, both configurable through `ariaIncrementLabel` and `ariaDecrementLabel`) but are **kept out of the tab order**: a number field already steps with <kbd>↑</kbd> and <kbd>↓</kbd>, so putting them in would add two tab stops per field for something the keyboard already reaches. A mouse press on a button, enabled or not, puts the focus in the field rather than on the button, so typing and the arrow keys act on the field you just stepped. Give the field a `label` or an `aria-label` as you would any other control.

> **Decimal separators.** `` accepts the dot as the decimal separator regardless of locale, and a value the browser rejects is reported as an empty string — the field cannot tell you what was typed. If you need locale-aware separators, currency or grouping, that is a formatted-input problem rather than a stepper one, and `type="number"` is the wrong base for it.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CNumberInput /&gt;](./api/#cnumberinput)
