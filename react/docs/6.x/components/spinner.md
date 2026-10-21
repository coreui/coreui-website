# React Spinner Component

> Indicate the loading state of a component or page with CoreUI spinners, built entirely with HTML, CSS, and no JavaScript.

## About

CoreUI "spinners" can be used to show the loading state in your projects. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.

For accessibility purposes, each loader here includes `role="status"` and a nested `<span className="visually-hidden">Loading</span>`, whose text `ariaLoadingLabel` sets. When a spinner sits next to text that says what is loading, as in the [buttons](#buttons) below, pass `ariaLoadingLabel=""`, which hides the spinner from screen readers, and put `role="status"` on that text instead, so a screen reader reads the message once.

## Border spinner

Use the border spinners for a lightweight loading indicator.

```html
import React from 'react'
import { CSpinner } from '@coreui/react'

export const SpinnerBorderExample = () => {
  return <CSpinner />
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
      <CSpinner color="secondary" variant="grow" />
      <CSpinner color="inverse" variant="grow" />
    </>
  )
}
```

## Variants

Both spinners take their appearance from `currentColor`, so the `color` property — which renders one of our [text color utilities](https://coreui.io/react/docs/utilities/colors/) — recolors either of them.

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
      <CSpinner color="secondary" />
      <CSpinner color="inverse" />
    </>
  )
}
```

## Alignment

CoreUI React spinners are built with `rems`, `currentColor`, and `display: inline-flex`. This means they can easily be resized, recolored, and quickly aligned.

### Margin

Use [margin utilities](https://coreui.io/react/docs/utilities/margin/) like `.m-6` for easy spacing.

```html
import React from 'react'
import { CSpinner } from '@coreui/react'

export const SpinnerBorderMarginExample = () => {
  return <CSpinner className="m-6" />
}
```

### Placement

Use [flexbox utilities](https://coreui.io/react/docs/utilities/flex/), [float utilities](https://coreui.io/react/docs/utilities/float/), or [text alignment](https://coreui.io/react/docs/utilities/font-size/) utilities to place spinners exactly where you need them in any situation.

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

Spinners are `1em` square, so they match the font size of whatever they sit in — drop one into a heading or a button and it scales with the text. Add `size="sm"` to make it smaller still.

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

## Custom spinners

Add `.spinner-rotate` to any element to spin it at the same speed as the border spinner. Use it when you want your own artwork instead of a bordered circle.

```html
import React from 'react'

export const SpinnerCustomExample = () => {
  return (
    <svg
      className="spinner-rotate"
      width="2rem"
      height="2rem"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentcolor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M8 1V4" />
      <path opacity=".8" d="M3.05 3.05L5.17 5.17" />
      <path opacity=".6" d="M4 8L1 8" />
      <path opacity=".5" d="M5.17 10.83L3.05 12.95" />
      <path opacity=".4" d="M8 12V15" />
      <path opacity=".3" d="M10.83 10.83L12.95 12.95" />
      <path opacity=".2" d="M15 8L12 8" />
      <path opacity=".1" d="M12.95 3.05L10.83 5.17" />
    </svg>
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
      <CButton theme="primary" disabled>
        <CSpinner as="span" ariaLoadingLabel="" />
        <span className="visually-hidden" role="status">
          Loading...
        </span>
      </CButton>
      <CButton theme="primary" disabled>
        <CSpinner as="span" className="me-3" ariaLoadingLabel="" />
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
      <CButton theme="primary" disabled>
        <CSpinner as="span" variant="grow" ariaLoadingLabel="" />
        <span className="visually-hidden" role="status">
          Loading...
        </span>
      </CButton>
      <CButton theme="primary" disabled>
        <CSpinner as="span" className="me-3" variant="grow" ariaLoadingLabel="" />
        <span role="status">Loading...</span>
      </CButton>
    </>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CSpinner /&gt;](./api/#cspinner)
