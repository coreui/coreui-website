# React Tooltip Component

> Documentation and examples for adding React Tooltips.

## Examples

### Tooltips on links

Hover over the links below to see tooltips:

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

You can customize the appearance of tooltips using [CSS variables](./styling/#css-variables). We set a custom `style` to scope our custom appearance and use it to override some of the local CSS variables.

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

### Directions

Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. Directions are mirrored when using CoreUI in RTL.

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

## Usage

A shown tooltip can be dismissed by pressing the <kbd>Escape</kbd> key, helping satisfy the [WCAG 1.4.13 "Content on Hover or Focus"](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html) success criterion.

### Disabled elements

Elements with the disabled attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from a wrapper `<div>` or `<span>`, ideally made keyboard-focusable using `tabindex="0"`.

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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CTooltip /&gt;](./api/#ctooltip)
