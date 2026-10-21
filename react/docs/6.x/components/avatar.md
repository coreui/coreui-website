# React Avatar Component

> The React Avatar component is used to display circular user profile pictures. React avatars can portray people or objects and support images, icons, or letters.

## Image avatars

Showcase React avatars using images. These avatars are typically circular and can display user profile pictures.

```html
import React from 'react'
import { CAvatar } from '@coreui/react'

export const AvatarImage = () => {
  return (
    <>
      <CAvatar src={'/assets/img/avatars/1.jpg'} />
      <CAvatar src={'/assets/img/avatars/2.jpg'} />
      <CAvatar src={'/assets/img/avatars/3.jpg'} />
    </>
  )
}
```

## Letter avatars

Use letters inside avatars to represent users or objects when images are not available. This can be useful for displaying initials.

An avatar without a `color` stays neutral; with one, the background takes the theme color and the letters take the color that reads on it.

```html
import React from 'react'
import { CAvatar } from '@coreui/react'

export const AvatarLetter = () => {
  return (
    <>
      <CAvatar>CUI</CAvatar>
      <CAvatar theme="primary">CUI</CAvatar>
      <CAvatar theme="secondary">CUI</CAvatar>
      <CAvatar theme="warning">CUI</CAvatar>
    </>
  )
}
```

## Subtle avatars

_Added in 6.0.0._

Use `variant="subtle"` for a tinted avatar that keeps the theme color in the text rather than the background.

```html
import React from 'react'
import { CAvatar } from '@coreui/react'

export const AvatarSubtle = () => {
  return (
    <>
      <CAvatar theme="primary" variant="subtle">
        CUI
      </CAvatar>
      <CAvatar theme="secondary" variant="subtle">
        CUI
      </CAvatar>
      <CAvatar theme="success" variant="subtle">
        CUI
      </CAvatar>
      <CAvatar theme="danger" variant="subtle">
        CUI
      </CAvatar>
      <CAvatar theme="warning" variant="subtle">
        CUI
      </CAvatar>
      <CAvatar theme="info" variant="subtle">
        CUI
      </CAvatar>
    </>
  )
}
```

## Icons avatars

Incorporate icons within React avatars, allowing for a visual representation using scalable vector graphics (SVG).

```html
import React from 'react'
import { CAvatar } from '@coreui/react'

export const AvatarIcon = () => {
  return (
    <>
      <CAvatar theme="info">
        <svg id="cib-coreui-c" className="icon" viewBox="0 0 32 32">
          <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
          <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
        </svg>
      </CAvatar>
      <CAvatar theme="success">
        <svg id="cib-coreui-c" className="icon" viewBox="0 0 32 32">
          <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
          <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
        </svg>
      </CAvatar>
      <CAvatar theme="danger">
        <svg id="cib-coreui-c" className="icon" viewBox="0 0 32 32">
          <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
          <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
        </svg>
      </CAvatar>
    </>
  )
}
```

## Rounded avatars

Use the `shape="rounded"` prop to make React avatars squared with rounded corners.

```html
import React from 'react'
import { CAvatar } from '@coreui/react'

export const AvatarRounded = () => {
  return (
    <>
      <CAvatar theme="primary" shape="rounded">
        CUI
      </CAvatar>
      <CAvatar theme="secondary" shape="rounded">
        CUI
      </CAvatar>
      <CAvatar theme="warning" shape="rounded">
        CUI
      </CAvatar>
    </>
  )
}
```

## Square avatars

Use the `shape="rounded-0"` prop to make React avatars squared.

```html
import React from 'react'
import { CAvatar } from '@coreui/react'

export const AvatarSquare = () => {
  return (
    <>
      <CAvatar theme="primary" shape="rounded-0">
        CUI
      </CAvatar>
      <CAvatar theme="secondary" shape="rounded-0">
        CUI
      </CAvatar>
      <CAvatar theme="warning" shape="rounded-0">
        CUI
      </CAvatar>
    </>
  )
}
```

## Sizes

Fancy larger or smaller React avatar component? Add `size="xl"`, `size="lg"`, `size="md"`, `size="sm"` or `size="xs"` for additional sizes. The status indicator scales with the avatar, so it stays proportional at every size.

```html
import React from 'react'
import { CAvatar } from '@coreui/react'

export const AvatarSizes = () => {
  return (
    <>
      <CAvatar theme="secondary" size="xl">
        CUI
      </CAvatar>
      <CAvatar theme="secondary" size="lg">
        CUI
      </CAvatar>
      <CAvatar theme="secondary" size="md">
        CUI
      </CAvatar>
      <CAvatar theme="secondary">CUI</CAvatar>
      <CAvatar theme="secondary" size="sm">
        CUI
      </CAvatar>
    </>
  )
}
```

## Stacked avatars

Display multiple avatars in a stack to represent a group of users or items, with an additional count if there are more avatars than can be displayed. Each avatar in a stack wears a ring in the page background color, so overlapping photos stay separated in both color schemes.

```html
import React from 'react'
import { CAvatar, CAvatarStack } from '@coreui/react'

export const AvatarStack = () => {
  return (
    <CAvatarStack>
      <CAvatar src="/assets/img/avatars/1.jpg" />
      <CAvatar src="/assets/img/avatars/2.jpg" />
      <CAvatar src="/assets/img/avatars/3.jpg" />
      <CAvatar>+2</CAvatar>
    </CAvatarStack>
  )
}
```

Size the whole stack at once with the `size` property on `<CAvatarStack>`, and tune the overlap with `--cui-avatar-stack-spacing` — the fraction of the avatar size each one is pulled over its neighbour:

```html
import React from 'react'
import { CAvatar, CAvatarStack } from '@coreui/react'

export const AvatarStackSizing = () => {
  return (
    <CAvatarStack size="lg" style={{ '--cui-avatar-stack-spacing': -0.25 } as React.CSSProperties}>
      <CAvatar src="/assets/img/avatars/1.jpg" />
      <CAvatar src="/assets/img/avatars/2.jpg" />
      <CAvatar src="/assets/img/avatars/3.jpg" />
    </CAvatarStack>
  )
}
```

## Avatars with status

Add a status indicator with the `status` property to show presence. The indicator takes its color from the matching `theme-*` class; `status="secondary"` reads as offline.

```html
import React from 'react'
import { CAvatar } from '@coreui/react'

export const AvatarWithStatus = () => {
  return (
    <div className="d-flex gap-4">
      <CAvatar src="/assets/img/avatars/1.jpg" status="success" ariaStatusLabel="Online" />
      <CAvatar status="warning" ariaStatusLabel="Away">
        CUI
      </CAvatar>
      <CAvatar status="danger" ariaStatusLabel="Busy">
        CUI
      </CAvatar>
      <CAvatar status="secondary" ariaStatusLabel="Offline">
        CUI
      </CAvatar>
    </div>
  )
}
```

The indicator is a few pixels of color and nothing else, so color is the only thing separating one state from another — not enough on its own, and at this size a different shape would not help either. Where the state means something rather than decorates, name it with `ariaStatusLabel`:

```jsx
<CAvatar status="danger" ariaStatusLabel="Busy">CUI</CAvatar>
```

That renders `role="img"` alongside the label, which is what makes the name stick: `aria-label` on a bare `<span>` has no role to attach to, and assistive technology is free to ignore it. Without the property the indicator stays decorative.

The ring around the indicator follows the page background through `--cui-avatar-status-border-color`, so it stays correct in dark mode.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CAvatar /&gt;](./api/#cavatar)
