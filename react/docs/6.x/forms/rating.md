# React Rating Component

> A React star rating component allows users to rate and provide feedback on content or products by selecting a specified number of stars, typically ranging from one to five, representing their level of satisfaction or preference.

## How to use React Rating Component.

Embed the Rating component in your React application like this:

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'

export const RatingExample = () => {
  return <CRating defaultValue={3} />
}
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/react/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
import React from 'react'
import { CFormField, CFormText } from '@coreui/react'
import { CRating } from '@coreui/react-pro'

export const RatingFormFieldExample = () => {
  return (
    <CFormField>
      <span className="form-label" id="ratingFieldLabel">
        Overall rating
      </span>
      <CRating aria-labelledby="ratingFieldLabel" defaultValue={3} name="score" />
      <CFormText>Tell us how the delivery went.</CFormText>
    </CFormField>
  )
}
```

Inside a `<form>`, an uncontrolled rating follows a form reset: it goes back to its `defaultValue`, or to no rating when it has none, and calls `onChange` when that differs from the current value. A controlled rating (`value`) asks for the value it started with through `onChange` and keeps the stars on your `value` until you take it, and a reset that a listener cancels changes nothing.

## Allow clear

Enable users to clear their selected rating by clicking on the current rating again. This functionality is activated by setting `allowClear` boolean property.

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'

export const RatingAllowClearExample = () => {
  return <CRating allowClear defaultValue={3} />
}
```

This allows the selected rating to be deselected, effectively resetting the rating to a state where no value is selected.

## Resettable

Our React Rating component allows users to assign and reset a star rating within a user interface. In the example below, we use the `CButton` component to clear the selected value by passing `null`.

```html
import React, { useState } from 'react'
import { CButton } from '@coreui/react'
import { CRating } from '@coreui/react-pro'

export const RatingResettableExample = () => {
  const [currentValue, setCurrentValue] = useState<number | null>(3)

  return (
    <div className="d-flex align-items-center">
      <CRating onChange={(value) => setCurrentValue(value)} value={currentValue} />
      <CButton className="ms-4" theme="primary" onClick={() => setCurrentValue(null)}>
        reset
      </CButton>
    </div>
  )
}
```

## Read only

Set the React rating component to read-only by adding `readOnly` property. The value cannot be changed with the mouse or the keyboard, only the checked star takes focus (the first star while no star is checked), and the group carries `aria-readonly="true"`. Give the rating a `name` to submit its value with the form; without one it only shows the score.

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'

export const RatingReadOnlyExample = () => {
  return <CRating readOnly defaultValue={3} />
}
```

## Disabled

Add the `disabled` boolean property to give it a grayed out appearance, remove pointer events, and prevent focusing.

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'

export const RatingDisabledExample = () => {
  return <CRating disabled defaultValue={3} />
}
```

## Validation

_Added in 6.0.0._

A rating can be required, and it takes a validation state from the page.

- `required` makes every radio required, so the browser stops the submit while no star is picked, and gives the rating `aria-required="true"`. A read-only rating is never required.
- Give a state with `validationState`. It shows on the rating: it colours the focus ring, the stars keep their colours, and `'invalid'` sets `aria-invalid` on the rating and adds the invalid feedback that follows it, or the one named in its `data-coreui-invalid-feedback`, to the `aria-describedby` of every star.
- `'invalid'` blocks the submit through the checked star, or the first one when none is picked, with the text of the feedback as the message the browser shows, or `Invalid value.` without one. `'valid'` and a custom state do not block, and neither does a disabled or read-only rating.
- When the user picks or clears a star, or the form is reset, the rating calls `onValidationStateChange(undefined)` before it reports the change; pass your state setter there to drop the state. A change of `value` from your code keeps it.
- A required rating without a value shows `'invalid'` once a validation reports it, and a given state shows over it.

```html
import React, { useState } from 'react'
import { CButton, CForm, CFormFeedback, CFormField } from '@coreui/react'
import { CRating } from '@coreui/react-pro'

export const RatingValidationExample = () => {
  const [deliveryState, setDeliveryState] = useState<string | undefined>('invalid')

  return (
    <CForm className="row g-4" noValidate validate>
      <CFormField className="col-12">
        <span className="form-label" id="deliveryRatingLabel">
          Delivery
        </span>
        <CRating
          aria-labelledby="deliveryRatingLabel"
          name="deliveryRating"
          onValidationStateChange={setDeliveryState}
          required
          validationState={deliveryState}
        />
        <CFormFeedback validationState="invalid">
          Rate the delivery before you send the review.
        </CFormFeedback>
      </CFormField>
      <div className="col-12">
        <CButton color="primary" type="submit">
          Send
        </CButton>
      </div>
    </CForm>
  )
}
```

## Tooltips

Enable descriptive text on hover by adding `tooltips` prop. This provides immediate feedback or guidance as the user interacts with the rating items.

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'

export const RatingTooltipsExample = () => {
  return <CRating tooltips defaultValue={3} />
}
```

For custom messages, provide an array of labels corresponding to each rating value to enhance the user's understanding of each rating level.

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'

export const RatingTooltips2Example = () => {
  return <CRating tooltips={['Very bad', 'Bad', 'Meh', 'Good', 'Very good']} defaultValue={3} />
}
```

## Sizes

Larger or smaller React rating component? Add `size="lg"` or `size="sm"` for additional sizes.

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'

export const RatingSizesExample = () => {
  return (
    <>
      <CRating size="sm" defaultValue={3} />
      <CRating defaultValue={3} />
      <CRating size="lg" defaultValue={3} />
    </>
  )
}
```

## Precision

Adjust the granularity of the Rating component by setting `precision` prop. This attribute allows for fractional ratings, such as quarter values, to provide more precise feedback.

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'

export const RatingPrecisionExample = () => {
  return <CRating precision={0.25} defaultValue={3} />
}
```

## Number of items

Control the total number of rating items displayed by using `itemCount` property. You can create a React rating component with a custom scale, be it larger for detailed assessments or smaller for simplicity.

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'

export const RatingNumberOfItemsExample = () => {
  return (
    <>
      <CRating itemCount={20} defaultValue={5} />
      <CRating itemCount={3} defaultValue={1} />
    </>
  )
}
```

## Theme variants

Colour the active items with a [`.theme-*` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) on the rating.

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'

export const RatingThemeVariantsExample = () => {
  return <CRating className="theme-danger" defaultValue={3} />
}
```

## Custom icons

Customize the React rating component with your choice of SVG icons by assigning new values to the `activeIcon` and `icon` properties in the JavaScript options. This allows for a unique look tailored to the design language of your site or application.

The Rating component can be customized with either SVG or font icons, allowing for visual alignment with your application's design. You can specify different icons for each rating value to enhance user interaction.

In the example below, we demonstrate how to set custom icons using SVG, allowing for detailed customization of the visual elements within the Rating component.

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilStar } from '@coreui/icons'
import { cisStar } from '@coreui/icons-pro'

export const RatingCustomIconsExample = () => {
  return (
    <CRating
      activeIcon={<CIcon icon={cisStar} customClassName=" " />}
      icon={<CIcon icon={cilStar} customClassName=" " />}
      defaultValue={3}
    />
  )
}
```

In the example below, we use font icons from the CoreUI Icons set. In the `activeIcon` configuration, we also apply the utility class `fg-danger` to change the icon's color to red when it is active.

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilHeart } from '@coreui/icons'

export const RatingCustomIcons2Example = () => {
  return (
    <CRating
      activeIcon={<CIcon icon={cilHeart} customClassName="fg-danger" />}
      icon={<CIcon icon={cilHeart} customClassName=" " />}
      defaultValue={3}
    />
  )
}
```

For a more dynamic experience, define different icons for each rating value, enhancing the visual feedback:

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilMeh, cilMoodBad, cilMoodGood, cilMoodVeryBad, cilMoodVeryGood } from '@coreui/icons'

export const RatingCustomIcons3Example = () => {
  const icons = {
    1: <CIcon icon={cilMoodVeryBad} customClassName=" " />,
    2: <CIcon icon={cilMoodBad} customClassName=" " />,
    3: <CIcon icon={cilMeh} customClassName=" " />,
    4: <CIcon icon={cilMoodGood} customClassName=" " />,
    5: <CIcon icon={cilMoodVeryGood} customClassName=" " />,
  }

  const activeIcons = {
    1: <CIcon icon={cilMoodVeryBad} customClassName="fg-emphasis-danger" />,
    2: <CIcon icon={cilMoodBad} customClassName="fg-danger" />,
    3: <CIcon icon={cilMeh} customClassName="fg-warning" />,
    4: <CIcon icon={cilMoodGood} customClassName="fg-success" />,
    5: <CIcon icon={cilMoodVeryGood} customClassName="fg-emphasis-success" />,
  }

  return (
    <CRating
      activeIcon={activeIcons}
      highlightOnlySelected
      icon={icons}
      tooltips={['Very bad', 'Bad', 'Meh', 'Good', 'Very good']}
      defaultValue={3}
    />
  )
}
```

## Custom feedback

The React Rating component integrates interactive star ratings with dynamic textual feedback using other components from CoreUI. It enables users to select a rating that updates the display and label in real-time, enhancing the interactive experience. Hover effects provide immediate feedback on potential ratings before selection, ensuring an intuitive user interface.

```html
import React, { useState } from 'react'
import { CBadge } from '@coreui/react'
import { CRating } from '@coreui/react-pro'

export const RatingCustomFeedbackExample = () => {
  const RATING_LABELS: string[] = ['Very bad', 'Bad', 'Meh', 'Good', 'Very good']
  const [currentValue, setCurrentValue] = useState<number>(3)
  const [label, setLabel] = useState<string>(RATING_LABELS[currentValue - 1])

  const handleChange = (value: number | null) => {
    if (value) {
      setCurrentValue(value)
      setLabel(RATING_LABELS[value - 1])
    }
  }

  const handleHover = (value: number | null) => {
    if (value) {
      setLabel(RATING_LABELS[value - 1])
    } else {
      setLabel(RATING_LABELS[currentValue - 1])
    }
  }

  return (
    <div className="d-flex align-items-center">
      <div className="fg-2 me-4">{currentValue} / 5</div>
      <CRating
        className="d-inline-flex"
        onChange={handleChange}
        onHover={handleHover}
        value={currentValue}
      />
      {label && (
        <CBadge className="ms-4" theme="inverse">
          {label}
        </CBadge>
      )}
    </div>
  )
}
```

## Controlled and uncontrolled

_Added in 6.0.0._

The rating works either way, and the prop you reach for is what picks the mode.

| | prop | who owns the value |
| --- | --- | --- |
| Uncontrolled | `defaultValue` | the rating, from that starting point |
| Controlled | `value` | your component |

`onChange` fires in **both** modes with the new value — so you can watch the state without taking it over.

### Uncontrolled

Give the rating a starting point and let it manage itself.

```jsx
<CRating defaultValue={3} />
```

### Controlled

Pass `value` and the rating renders exactly what you pass — a click only fires `onChange`, and nothing moves until you feed the change back.

```html
import React, { useState } from 'react'
import { CButton, CRating } from '@coreui/react-pro'

export const RatingControlledExample = () => {
  const [value, setValue] = useState<number | null>(3)

  return (
    <>
      <CRating onChange={setValue} value={value} />
      <div className="mt-4 d-flex align-items-center gap-4">
        <CButton theme="secondary" onClick={() => setValue(null)}>
          Clear
        </CButton>
        <span>Current value: {value ?? 'none'}</span>
      </div>
    </>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CRating /&gt;](./api/#crating)
