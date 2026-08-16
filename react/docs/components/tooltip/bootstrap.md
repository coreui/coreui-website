# React Bootstrap Tooltip Component

> Learn how to add Bootstrap-style tooltips in your React app using CoreUI components styled to match Bootstrap.

## How to use React Bootstrap Tooltip component

Use CoreUI's React components styled with Bootstrap to show additional contextual information when users hover over elements, similar to native Bootstrap tooltips.

### Tooltips on links

Hover over the links below to see Bootstrap-style tooltips.

```html
import React from 'react'
import { CLink, CTooltip } from '@coreui/react'

export const TooltipOnLinksExample = () => {
  return (
    <p className="text-body-secondary">
      Tight pants next level keffiyeh
      <CTooltip content="Tooltip text">
        <CLink> you probably </CLink>
      </CTooltip>
      haven&#39;t heard of them. Photo booth beard raw denim letterpress vegan messenger bag
      stumptown. Farm-to-table seitan, mcsweeney&#39;s fixie sustainable quinoa 8-bit american
      apparel
      <CTooltip content="Tooltip text">
        <CLink> have a </CLink>
      </CTooltip>
      terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu
      biodiesel williamsburg marfa, four loko mcsweeney&#39;s cleanse vegan chambray. A really
      ironic artisan
      <CTooltip content="Tooltip text">
        <CLink> whatever keytar </CLink>
      </CTooltip>
      scenester farm-to-table banksy Austin
      <CTooltip content="Tooltip text">
        <CLink> twitter handle </CLink>
      </CTooltip>
      freegan cred raw denim single-origin coffee viral.
    </p>
  )
}
```

### Custom tooltips

You can customize the appearance of tooltips using [CSS variables](../styling/#css-variables). Below is an example with scoped overrides for a unique appearance.

```html
import React from 'react'
import { CButton, CTooltip } from '@coreui/react'

export const TooltipCustomExample = () => {
  const customTooltipStyle = {
    '--cui-tooltip-bg': 'var(--cui-primary)',
  } as React.CSSProperties

  return (
    <CTooltip
      content="This top tooltip is themed via CSS variables."
      placement="top"
      style={customTooltipStyle}
    >
      <CButton color="secondary">Custom tooltip</CButton>
    </CTooltip>
  )
}
```

### Tooltip directions

You can place tooltips on the top, right, bottom, or left of the element. Directions are automatically mirrored in RTL layouts.

```html
import React from 'react'
import { CButton, CTooltip } from '@coreui/react'

export const TooltipDirectionsExample = () => {
  return (
    <>
      <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="top">
        <CButton color="secondary">Tooltip on top</CButton>
      </CTooltip>
      <CTooltip
        content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        placement="right"
      >
        <CButton color="secondary">Tooltip on right</CButton>
      </CTooltip>
      <CTooltip
        content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        placement="bottom"
      >
        <CButton color="secondary">Tooltip on bottom</CButton>
      </CTooltip>
      <CTooltip
        content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        placement="left"
      >
        <CButton color="secondary">Tooltip on left</CButton>
      </CTooltip>
    </>
  )
}
```

### Disabled elements

Because disabled elements do not trigger events, wrap them in a `<span>` or `<div>` with `tabIndex="0"` to enable tooltip behavior.

```html
import React from 'react'
import { CButton, CTooltip } from '@coreui/react'

export const TooltipDisabledElementsExample = () => {
  return (
    <CTooltip content="Disabled tooltip" trigger={['hover', 'focus']}>
      <span className="d-inline-block" tabIndex={0}>
        <CButton color="primary" disabled>
          Disabled button
        </CButton>
      </span>
    </CTooltip>
  )
}
```

## API reference

Refer to the API documentation for detailed descriptions of all available props and customization options.

- [&lt;CTooltip /&gt;](../api/#ctooltip)
