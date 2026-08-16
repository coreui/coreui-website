# React Rating Component

> A React star rating component allows users to rate and provide feedback on content or products by selecting a specified number of stars, typically ranging from one to five, representing their level of satisfaction or preference.

## How to use React Rating Component.

Embed the Rating component in your React application like this:

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'

export const RatingExample = () => {
  return <CRating value={3} />
}
```

## Allow clear

Enable users to clear their selected rating by clicking on the current rating again. This functionality is activated by setting `allowClear` boolean property.

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'

export const RatingAllowClearExample = () => {
  return <CRating allowClear value={3} />
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
      <CButton className="ms-3" color="primary" onClick={() => setCurrentValue(null)}>
        reset
      </CButton>
    </div>
  )
}
```

## Read only

Set the React rating component to read-only by adding `readOnly` property. This disables interaction, preventing users from changing the displayed rating value.

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'

export const RatingReadOnlyExample = () => {
  return <CRating readOnly value={3} />
}
```

## Disabled

Add the `disabled` boolean property to give it a grayed out appearance, remove pointer events, and prevent focusing.

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'

export const RatingDisabledExample = () => {
  return <CRating disabled value={3} />
}
```

## Tooltips

Enable descriptive text on hover by adding `tooltips` prop. This provides immediate feedback or guidance as the user interacts with the rating items.

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'

export const RatingTooltipsExample = () => {
  return <CRating tooltips value={3} />
}
```

For custom messages, provide an array of labels corresponding to each rating value to enhance the user's understanding of each rating level.

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'

export const RatingTooltips2Example = () => {
  return <CRating tooltips={['Very bad', 'Bad', 'Meh', 'Good', 'Very good']} value={3} />
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
      <CRating size="sm" value={3} />
      <CRating value={3} />
      <CRating size="lg" value={3} />
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
  return <CRating precision={0.25} value={3} />
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
      <CRating itemCount={20} value={5} />
      <CRating itemCount={3} value={1} />
    </>
  )
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
      value={3}
    />
  )
}
```

In the example below, we use font icons from the CoreUI Icons set. In the `activeIcon` configuration, we also apply the utility class `text-danger` to change the icon's color to red when it is active.

```html
import React from 'react'
import { CRating } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilHeart } from '@coreui/icons'

export const RatingCustomIcons2Example = () => {
  return (
    <CRating
      activeIcon={<CIcon icon={cilHeart} customClassName="text-danger" />}
      icon={<CIcon icon={cilHeart} customClassName=" " />}
      value={3}
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
    1: <CIcon icon={cilMoodVeryBad} customClassName="text-danger-emphasis" />,
    2: <CIcon icon={cilMoodBad} customClassName="text-danger" />,
    3: <CIcon icon={cilMeh} customClassName="text-warning" />,
    4: <CIcon icon={cilMoodGood} customClassName="text-success" />,
    5: <CIcon icon={cilMoodVeryGood} customClassName="text-success-emphasis" />,
  }

  return (
    <CRating
      activeIcon={activeIcons}
      highlightOnlySelected
      icon={icons}
      tooltips={['Very bad', 'Bad', 'Meh', 'Good', 'Very good']}
      value={3}
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
      <div className="text-body-secondary me-3">{currentValue} / 5</div>
      <CRating
        className="d-inline-flex"
        onChange={handleChange}
        onHover={handleHover}
        value={currentValue}
      />
      {label && (
        <CBadge className="ms-3" color="dark">
          {label}
        </CBadge>
      )}
    </div>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CRating /&gt;](./api/#crating)
