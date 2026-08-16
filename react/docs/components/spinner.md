# React Spinner Component

> Indicate the loading state of a component or page with CoreUI spinners, built entirely with HTML, CSS, and no JavaScript.

## About

CoreUI "spinners" can be used to show the loading state in your projects. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.

For accessibility purposes, each loader here includes `role="status"` and a nested `<span className="visually-hidden">Loading...</span>`.

## Border spinner

Use the border spinners for a lightweight loading indicator.

```html
import React from 'react'
import { CSpinner } from '@coreui/react'

export const SpinnerBorderExample = () => {
  return <CSpinner />
}
```

### Colors

The border spinner uses `currentColor` for its `border-color`. You can use any of our text color utilities on the standard spinner.

```html
import React from 'react'
import { CSpinner } from '@coreui/react'

export const SpinnerBorderColorsExample = () => {
  return (
    <>
      <CSpinner color="primary" />
      <CSpinner color="secondary" />
      <CSpinner color="success" />
      <CSpinner color="danger" />
      <CSpinner color="warning" />
      <CSpinner color="info" />
      <CSpinner color="light" />
      <CSpinner color="dark" />
    </>
  )
}
```

## Growing spinner

If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow!

```html
import React from 'react'
import { CSpinner } from '@coreui/react'

export const SpinnerGrowExample = () => {
  return <CSpinner variant="grow" />
}
```

Once again, this spinner is built with `currentColor`, so you can easily change its appearance. Here it is in blue, along with the supported variants.

```html
import React from 'react'
import { CSpinner } from '@coreui/react'

export const SpinnerGrowColorsExample = () => {
  return (
    <>
      <CSpinner color="primary" variant="grow" />
      <CSpinner color="secondary" variant="grow" />
      <CSpinner color="success" variant="grow" />
      <CSpinner color="danger" variant="grow" />
      <CSpinner color="warning" variant="grow" />
      <CSpinner color="info" variant="grow" />
      <CSpinner color="light" variant="grow" />
      <CSpinner color="dark" variant="grow" />
    </>
  )
}
```

## Alignment

CoreUI React spinners are built with `rems`, `currentColor`, and `display: inline-flex`. This means they can easily be resized, recolored, and quickly aligned.

### Margin

Use [margin utilities](https://coreui.io/bootstrap/docs/utilities/spacing/#margin-and-padding) like `.m-5` for easy spacing.

```html
import React from 'react'
import { CSpinner } from '@coreui/react'

export const SpinnerBorderMarginExample = () => {
  return <CSpinner className="m-5" />
}
```

### Placement

Use [flexbox utilities](https://coreui.io/bootstrap/docs/utilities/flex/), [float utilities](https://coreui.io/bootstrap/docs/utilities/float/), or [text alignment](https://coreui.io/bootstrap/docs/utilities/text/) utilities to place spinners exactly where you need them in any situation.

#### Flex

```html
import React from 'react'
import { CSpinner } from '@coreui/react'

export const SpinnerBorderPlacementFlexExample = () => {
  return (
    <div className="d-flex justify-content-center">
      <CSpinner />
    </div>
  )
}
```

```html
import React from 'react'
import { CSpinner } from '@coreui/react'

export const SpinnerBorderPlacementFlex2Example = () => {
  return (
    <div className="d-flex align-items-center">
      <strong role="status">Loading...</strong>
      <CSpinner className="ms-auto" />
    </div>
  )
}
```

#### Floats

```html
import React from 'react'
import { CSpinner } from '@coreui/react'

export const SpinnerBorderPlacementFloatsExample = () => {
  return (
    <div className="clearfix">
      <CSpinner className="float-end" />
    </div>
  )
}
```

#### Text align

```html
import React from 'react'
import { CSpinner } from '@coreui/react'

export const SpinnerBorderPlacementTextAlignExample = () => {
  return (
    <div className="text-center">
      <CSpinner />
    </div>
  )
}
```

## Size

Add `size="sm"` property to make a smaller spinner that can quickly be used within other components.

```html
import React from 'react'
import { CSpinner } from '@coreui/react'

export const SpinnerSizeSmallExample = () => {
  return (
    <>
      <CSpinner size="sm" />
      <CSpinner size="sm" variant="grow" />
    </>
  )
}
```

Or, use custom CSS or inline styles to change the dimensions as needed.

```html
import React from 'react'
import { CSpinner } from '@coreui/react'

export const SpinnerSizeCustomExample = () => {
  return (
    <>
      <CSpinner style={{ width: '3rem', height: '3rem' }} />
      <CSpinner variant="grow" style={{ width: '3rem', height: '3rem' }} />
    </>
  )
}
```

## Buttons

Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.

```html
import React from 'react'
import { CButton, CSpinner } from '@coreui/react'

export const SpinnerButtonsExample = () => {
  return (
    <>
      <CButton color="primary" disabled>
        <CSpinner as="span" size="sm" aria-hidden="true" />
        <span className="visually-hidden" role="status">
          Loading...
        </span>
      </CButton>
      <CButton color="primary" disabled>
        <CSpinner as="span" className="me-2" size="sm" aria-hidden="true" />
        <span role="status">Loading...</span>
      </CButton>
    </>
  )
}
```

```html
import React from 'react'
import { CButton, CSpinner } from '@coreui/react'

export const SpinnerButtons2Example = () => {
  return (
    <>
      <CButton color="primary" disabled>
        <CSpinner as="span" size="sm" variant="grow" aria-hidden="true" />
        <span className="visually-hidden" role="status">
          Loading...
        </span>
      </CButton>
      <CButton color="primary" disabled>
        <CSpinner as="span" className="me-2" size="sm" variant="grow" aria-hidden="true" />
        <span role="status">Loading...</span>
      </CButton>
    </>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CSpinner /&gt;](./api/#cspinner)
