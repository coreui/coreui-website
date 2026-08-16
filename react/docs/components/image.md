# React Image Component

> React image component with responsive behavior (so it's never become larger than their parent element) and special styles.

## Responsive images

Images in CoreUI for React.js are made responsive with `fluid` property. This applies `max-width: 100%;` and `height: auto;` to the image so that it scales with the parent element.

```html
import React from 'react'
import { CImage } from '@coreui/react'

export const ImageResponsiveExample = () => {
  return <CImage fluid src={'/assets/img/react.jpg'} />
}
```

## Image thumbnails

In addition to our [border-radius utilities](https://coreui.io/bootstrap/docs/utilities/borders), you can use prop`thumbnail` to give an image a rounded 1px border appearance.

```html
import React from 'react'
import { CImage } from '@coreui/react'

export const ImageThumbnailExample = () => {
  return <CImage rounded thumbnail src={'/assets/img/react400.jpg'} width={200} height={200} />
}
```

## Aligning images

Align images with the `align` property.

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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CImage /&gt;](./api/#cimage)
