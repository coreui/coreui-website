# React Bootstrap Placeholder Component

> Learn how to use the React Bootstrap Placeholder component from CoreUI to create animated loading placeholders that simulate content before it loads.

## About React Bootstrap Placeholder

The React Bootstrap Placeholder component lets you create skeleton loading effects using only HTML and CSS. It's useful for improving perceived performance while content is loading.

React placeholders are fully customizable using utility classes and support animations, sizing, colors, and layout variations.

## React Bootstrap Placeholder example

Here we simulate a "loading card" layout using placeholder elements. The dimensions match the final content layout for a seamless transition.

```html
import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CPlaceholder,
} from '@coreui/react'

export const PlaceholderExample = () => {
  return (
    <>
      <CCard style={{ width: '18rem' }}>
        <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </CCardText>
          <CButton color="primary" href="#">
            Go somewhere
          </CButton>
        </CCardBody>
      </CCard>
      <CCard style={{ width: '18rem' }}>
        <CCardImage
          as="svg"
          orientation="top"
          width="100%"
          height="162"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
        </CCardImage>
        <CCardBody>
          <CPlaceholder as={CCardTitle} animation="glow" xs={7}>
            <CPlaceholder xs={6} />
          </CPlaceholder>
          <CPlaceholder as={CCardText} animation="glow">
            <CPlaceholder xs={7} />
            <CPlaceholder xs={4} />
            <CPlaceholder xs={4} />
            <CPlaceholder xs={6} />
            <CPlaceholder xs={8} />
          </CPlaceholder>
          <CPlaceholder as={CButton} color="primary" disabled href="#" tabIndex={-1} xs={6} />
        </CCardBody>
      </CCard>
    </>
  )
}
```

## How React Bootstrap Placeholder works

Use the `<CPlaceholder>` component and specify width using grid props like `xs={6}` or utility classes. You can place it inside existing elements or use it standalone.

```html
import React from 'react'
import { CButton, CPlaceholder } from '@coreui/react'

export const Placeholder2Example = () => {
  return (
    <>
      <p aria-hidden="true">
        <CPlaceholder xs={6} />
      </p>
      <CPlaceholder
        as={CButton}
        color="primary"
        aria-hidden="true"
        disabled
        href="#"
        tabIndex={-1}
        xs={4}
      />
    </>
  )
}
```

> The use of aria-hidden="true" hides the placeholder from screen readers. You may need JavaScript to toggle content and notify assistive technologies of updates.

### Width

Set the width of placeholders with utility classes, inline styles, or grid props.

```html
import React from 'react'
import { CPlaceholder } from '@coreui/react'

export const PlaceholderWidthExample = () => {
  return (
    <>
      <CPlaceholder xs={6} />
      <CPlaceholder className="w-75" />
      <CPlaceholder style={{ width: '30%' }} />
    </>
  )
}
```

### Color

By default, placeholders use `currentColor`, but you can apply any color using Bootstrap utility classes.

```html
import React from 'react'
import { CPlaceholder } from '@coreui/react'

export const PlaceholderColorExample = () => {
  return (
    <>
      <CPlaceholder xs={12} />

      <CPlaceholder color="primary" xs={12} />
      <CPlaceholder color="secondary" xs={12} />
      <CPlaceholder color="success" xs={12} />
      <CPlaceholder color="danger" xs={12} />
      <CPlaceholder color="warning" xs={12} />
      <CPlaceholder color="info" xs={12} />
      <CPlaceholder color="light" xs={12} />
      <CPlaceholder color="dark" xs={12} />
    </>
  )
}
```

### Sizing

Use the `size` prop (`lg`, `sm`, or `xs`) to adjust the height and line spacing of placeholders to match the parent typography.

```html
import React from 'react'
import { CPlaceholder } from '@coreui/react'

export const PlaceholderSizingExample = () => {
  return (
    <>
      <CPlaceholder xs={12} size="lg" />
      <CPlaceholder xs={12} />
      <CPlaceholder xs={12} size="sm" />
      <CPlaceholder xs={12} size="xs" />
    </>
  )
}
```

### Animation

Make React Bootstrap Placeholder elements feel dynamic by using `animation="glow"` or `animation="wave"`.

```html
import React from 'react'
import { CPlaceholder } from '@coreui/react'

export const PlaceholderAnimationExample = () => {
  return (
    <>
      <CPlaceholder as="p" animation="glow">
        <CPlaceholder xs={12} />
      </CPlaceholder>
      <CPlaceholder as="p" animation="wave">
        <CPlaceholder xs={12} />
      </CPlaceholder>
    </>
  )
}
```

## API reference

Review the available props for the React Bootstrap Placeholder component:

- [&lt;CPlaceholder /&gt;](../api/#cplaceholder)
