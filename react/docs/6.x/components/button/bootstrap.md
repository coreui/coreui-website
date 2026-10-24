# React Bootstrap Button Component

> Learn how to use CoreUI’s React Button component with Bootstrap styling to build interactive, accessible, and responsive buttons for forms, tables, modals, and more.

## How to use React Bootstrap Button component

CoreUI provides a set of prebuilt React Button components styled with Bootstrap. Buttons signal actions to users and can initiate events both in the UI and behind the scenes.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonExample = () => {
  return (
    <>
      <CButton theme="primary">Primary</CButton>
      <CButton theme="secondary">Secondary</CButton>
      <CButton theme="success">Success</CButton>
      <CButton theme="info">Info</CButton>
      <CButton theme="warning">Warning</CButton>
      <CButton theme="danger">Danger</CButton>
      <CButton theme="inverse">Inverse</CButton>
      <CButton link>Link</CButton>
    </>
  )
}
```

> ## Disable text wrapping
> 
> To prevent text wrapping inside a button, apply the `.text-nowrap` class to the ``. Alternatively, set `$btn-white-space: nowrap` in Sass to apply it globally.
> 
> ## Button components
> 
> The `` component can render as a ``, ``, or `` element. When using it as an anchor for functionality (like toggles), add `role="button"` for accessibility.
> 
> ```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonComponentsExample = () => {
  return (
    <>
      <CButton as="a" theme="primary" href="#" role="button">
        Link
      </CButton>
      <CButton type="submit" theme="primary">
        Button
      </CButton>
      <CButton as="input" type="button" theme="primary" value="Input" />
      <CButton as="input" type="submit" theme="primary" value="Submit" />
      <CButton as="input" type="reset" theme="primary" value="Reset" />
    </>
  )
}
```
> 
> ## Outline buttons
> 
> Use `variant="outline"` to create buttons with a transparent background and colored border — a more subtle alternative to standard buttons.
> 
> ```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonOutlineExample = () => {
  return (
    <>
      <CButton theme="primary" variant="outline">
        Primary
      </CButton>
      <CButton theme="secondary" variant="outline">
        Secondary
      </CButton>
      <CButton theme="success" variant="outline">
        Success
      </CButton>
      <CButton theme="info" variant="outline">
        Info
      </CButton>
      <CButton theme="warning" variant="outline">
        Warning
      </CButton>
      <CButton theme="danger" variant="outline">
        Danger
      </CButton>
      <CButton theme="inverse" variant="outline">
        Inverse
      </CButton>
    </>
  )
}
```
> 
> ## Ghost buttons
> 
> For minimal buttons with no background or border, use `variant="ghost"`. These are great for secondary actions.
> 
> ```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonGhostExample = () => {
  return (
    <>
      <CButton theme="primary" variant="ghost">
        Primary
      </CButton>
      <CButton theme="secondary" variant="ghost">
        Secondary
      </CButton>
      <CButton theme="success" variant="ghost">
        Success
      </CButton>
      <CButton theme="info" variant="ghost">
        Info
      </CButton>
      <CButton theme="warning" variant="ghost">
        Warning
      </CButton>
      <CButton theme="danger" variant="ghost">
        Danger
      </CButton>
      <CButton theme="inverse" variant="ghost">
        Inverse
      </CButton>
    </>
  )
}
```
> 
> 
> Some button styles use light text colors and should be placed on dark backgrounds to maintain contrast.

## Sizes

Create large or small buttons with the `size="lg"` or `size="sm"` props.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonSizesExample = () => {
  return (
    <>
      <CButton theme="primary" size="lg">
        Large button
      </CButton>
      <CButton theme="secondary" size="lg">
        Large button
      </CButton>
    </>
  )
}
```

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonSizes2Example = () => {
  return (
    <>
      <CButton theme="primary" size="sm">
        Small button
      </CButton>
      <CButton theme="secondary" size="sm">
        Small button
      </CButton>
    </>
  )
}
```

You can also use CSS variables for fully custom sizes.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonSizes3Example = () => {
  const customVars = {
    '--cui-btn-padding-y': '.25rem',
    '--cui-btn-padding-x': '.5rem',
    '--cui-btn-font-size': '.75rem',
  } as React.CSSProperties

  return (
    <CButton theme="primary" size="sm" style={customVars}>
      Custom button
    </CButton>
  )
}
```

## Shapes

### Pill buttons

Use pill-shaped buttons for a soft, rounded appearance.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonShapePillExample = () => {
  return (
    <>
      <CButton theme="primary" className="rounded-pill">
        Primary
      </CButton>
      <CButton theme="secondary" className="rounded-pill">
        Secondary
      </CButton>
      <CButton theme="success" className="rounded-pill">
        Success
      </CButton>
      <CButton theme="danger" className="rounded-pill">
        Danger
      </CButton>
      <CButton theme="warning" className="rounded-pill">
        Warning
      </CButton>
      <CButton theme="info" className="rounded-pill">
        Info
      </CButton>
      <CButton theme="secondary" className="rounded-pill">
        Light
      </CButton>
      <CButton theme="inverse" className="rounded-pill">
        Dark
      </CButton>
      <CButton link className="rounded-pill">
        Link
      </CButton>
    </>
  )
}
```

### Square buttons

Use square-shaped buttons for compact, uniform interactions.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonShapeSquareExample = () => {
  return (
    <>
      <CButton theme="primary" className="rounded-0">
        Primary
      </CButton>
      <CButton theme="secondary" className="rounded-0">
        Secondary
      </CButton>
      <CButton theme="success" className="rounded-0">
        Success
      </CButton>
      <CButton theme="danger" className="rounded-0">
        Danger
      </CButton>
      <CButton theme="warning" className="rounded-0">
        Warning
      </CButton>
      <CButton theme="info" className="rounded-0">
        Info
      </CButton>
      <CButton theme="secondary" className="rounded-0">
        Light
      </CButton>
      <CButton theme="inverse" className="rounded-0">
        Dark
      </CButton>
      <CButton link className="rounded-0">
        Link
      </CButton>
    </>
  )
}
```

## Disabled

Disable any `<CButton>` by passing the `disabled` prop. This applies `pointer-events: none` and dims the button.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonDisabledExample = () => {
  return (
    <>
      <CButton theme="primary" disabled>
        Primary button
      </CButton>
      <CButton theme="secondary" disabled>
        Button
      </CButton>
      <CButton theme="primary" variant="outline" disabled>
        Primary button
      </CButton>
      <CButton theme="secondary" variant="outline" disabled>
        Button
      </CButton>
    </>
  )
}
```

Disabling anchor elements (`<a>`) requires additional steps: CoreUI applies the `.disabled` class, adds `aria-disabled="true"`, and sets `tabindex="-1"`.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonDisabled2Example = () => {
  return (
    <>
      <CButton as="a" href="#" theme="primary" disabled>
        Primary link
      </CButton>
      <CButton as="a" href="#" theme="secondary" disabled>
        Link
      </CButton>
    </>
  )
}
```

These steps prevent users from interacting with disabled links via keyboard or mouse.

## Block buttons

To make buttons span the full width of their container, use Bootstrap's layout utilities like `.d-grid`, `.w-100`, and `.col-*`.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonBlockExample = () => {
  return (
    <div className="d-grid gap-3">
      <CButton theme="primary">Button</CButton>
      <CButton theme="primary">Button</CButton>
    </div>
  )
}
```

Responsive layout: vertically stacked until the `md` breakpoint, where `.d-md-block` reverts to inline.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonBlock2Example = () => {
  return (
    <div className="d-grid gap-3 d-md-block">
      <CButton theme="primary">Button</CButton> <CButton theme="primary">Button</CButton>
    </div>
  )
}
```

You can also create column-based buttons using `.col-6` and center them with `.mx-auto`.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonBlock3Example = () => {
  return (
    <div className="d-grid gap-3 col-6 mx-auto">
      <CButton theme="primary">Button</CButton>
      <CButton theme="primary">Button</CButton>
    </div>
  )
}
```

Use flex utilities and margin helpers to align buttons horizontally when they're no longer stacked.

```html
import React from 'react'
import { CButton } from '@coreui/react'

export const ButtonBlock4Example = () => {
  return (
    <div className="d-grid gap-3 d-md-flex justify-content-md-end">
      <CButton theme="primary" className="me-md-3">
        Button
      </CButton>
      <CButton theme="primary">Button</CButton>
    </div>
  )
}
```

## API reference

See the full API reference for all available props in the Bootstrap-styled React Button component.

- [&lt;CButton /&gt;](../api/#cbutton)
