# React Bootstrap Spinner Component

> Learn how to use the React Bootstrap Spinner component from CoreUI to show loading states in your app with animated indicators, color options, alignment, and sizing.

## React Bootstrap Spinner Component

The React Bootstrap Spinner component displays a visual loading indicator in your app. Use it to communicate that content is loading, such as form submissions, page data, or background processes.

All spinners are built with HTML and CSS—no JavaScript needed. You can easily customize appearance, color, size, and placement using utility classes.

## Border spinner

Use the border spinner as a lightweight, animated loading indicator.

```html
import React from 'react'
import { CSpinner } from '@coreui/react'

export const SpinnerBorderExample = () => {
  return <CSpinner />
}
```

### Spinner colors

The React Bootstrap Spinner uses `currentColor`, so you can customize it using any text color utility class.

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

## Grow spinner

An alternative to the border version is the grow spinner. It expands and fades instead of spinning.

```html
import React from 'react'
import { CSpinner } from '@coreui/react'

export const SpinnerGrowExample = () => {
  return <CSpinner variant="grow" />
}
```
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

## Spinner alignment

React Bootstrap Spinners use `inline-flex`, so they align well in many layout contexts.

### Margin utilities

Use Bootstrap spacing utilities for control over margin and spacing.

```html
import React from 'react'
import { CSpinner } from '@coreui/react'

export const SpinnerBorderMarginExample = () => {
  return <CSpinner className="m-5" />
}
```

### Flex alignment

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

### Float placement

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

### Text alignment

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

## Spinner size

Use the `size="sm"` prop for a compact spinner.

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

For full control, use inline styles or custom CSS:

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

## Spinners in buttons

Show React Bootstrap Spinners inside buttons to indicate loading states during form submissions or API requests.

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

## Accessibility

Each spinner includes `role="status"` and a visually hidden `<span>` with `"Loading..."` for screen readers. You can customize the text based on context.

## API reference

Explore the full API for the React Bootstrap Spinner component:

- [&lt;CSpinner /&gt;](../api/#cspinner)
