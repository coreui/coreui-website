# React Bootstrap Image Component

> Learn how to use the React Bootstrap Image component from CoreUI to create responsive, aligned, and styled images using Bootstrap-friendly utilities and props.

## Responsive React Bootstrap Images

The React Bootstrap Image component supports responsive behavior using the `fluid` prop. This applies `max-width: 100%` and `height: auto` to ensure images scale with their parent container.

```html
import React from 'react'
import { CImage } from '@coreui/react'

export const ImageResponsiveExample = () => {
  return <CImage fluid src={'/assets/img/react.jpg'} />
}
```

## React Bootstrap Image thumbnails

Use the `thumbnail` prop to give an image a subtle border and padding, resulting in a thumbnail-style appearance. You can combine it with [border-radius utilities](https://coreui.io/bootstrap/docs/utilities/borders) for rounded corners.

```html
import React from 'react'
import { CImage } from '@coreui/react'

export const ImageThumbnailExample = () => {
  return <CImage rounded thumbnail src={'/assets/img/react400.jpg'} width={200} height={200} />
}
```

## Aligning React Bootstrap Images

Use the `align` prop to control image alignment within the container. This allows you to float images left, right, or center them using Bootstrap-aligned values.

```html
import React from 'react'
import { CImage } from '@coreui/react'

export const ImageAligningExample = () => {
  return (
    <div className="clearfix">
      <CImage align="start" rounded src={'/assets/img/react400.jpg'} width={200} height={200} />
      <CImage align="end" rounded src={'/assets/img/react400.jpg'} width={200} height={200} />
    </div>
  )
}
```

```html
import React from 'react'
import { CImage } from '@coreui/react'

export const ImageAligning2Example = () => {
  return (
    <div className="clearfix">
      <CImage align="center" rounded src={'/assets/img/react400.jpg'} width={200} height={200} />
    </div>
  )
}
```

```html
import React from 'react'
import { CImage } from '@coreui/react'

export const ImageAligning3Example = () => {
  return (
    <div className="text-center">
      <CImage rounded src={'/assets/img/react400.jpg'} width={200} height={200} />
    </div>
  )
}
```

## API reference

Explore all available props and customization options for the React Bootstrap Image component below:

- [&lt;CImage /&gt;](../api/#cimage)
