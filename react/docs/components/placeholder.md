# React Placeholder Component

> Use loading React placeholders for your components or pages to indicate something may still be loading.

## About

Placeholders can be used to enhance the experience of your application. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.

## Example

In the example below, we take a typical card component and recreate it with placeholders applied to create a "loading card". Size and proportions are the same between the two.

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

## How it works

Create placeholders with the `<CPlaceholder>` component and a grid column propx (e.g., `xs={6}`) to set the `width`. They can replace the text inside an element or be added as a modifier class to an existing component.

We apply additional styling to `CButton`s via `::before` to ensure the `height` is respected. You may extend this pattern for other situations as needed, or add a `&nbsp;` within the element to reflect the height when actual text is rendered in its place.

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

> The use of aria-hidden="true" only indicates that the element should be hidden to
> screen readers. The loading behavior of the placeholder depends on how authors
> will actually use the placeholder styles, how they plan to update things, etc. Some JavaScript
> code may be needed to *swap* the state of the placeholder and inform AT users of the update.

### Width

You can change the `width` through grid column classes, width utilities, or inline styles.

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

By default, the `<CPlaceholder>` uses `currentColor`. This can be overridden with a custom color or utility class.

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

The size of `<CPlaceholder>`s are based on the typographic style of the parent element. Customize them with `size` prop: `lg`, `sm`, or `xs`.

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

Animate placeholders with `animation="glow"` or `animation="wave"` to better convey the perception of something being _actively_ loaded.

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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CPlaceholder /&gt;](./api/#cplaceholder)
