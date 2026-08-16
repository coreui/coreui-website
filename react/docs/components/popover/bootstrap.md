# React Bootstrap Popover Component

> Learn how to use the React Bootstrap Popover component from CoreUI to create interactive overlays for additional information, tooltips, or custom content.

## React Bootstrap Popover examples

The React Bootstrap Popover component lets you display small overlay content on hover, click, or focus. Use it for tooltips, inline help, or contextual info without cluttering the UI.

### Live demo

Trigger the React Bootstrap Popover on click.

```html
import React from 'react'
import { CButton, CPopover } from '@coreui/react'

export const PopoverLiveExample = () => {
  return (
    <CPopover
      title="Popover title"
      content="And here’s some amazing content. It’s very engaging. Right?"
      placement="right"
    >
      <CButton color="danger" size="lg">
        Click to toggle popover
      </CButton>
    </CPopover>
  )
}
```

### Four directions

React Bootstrap Popovers support top, right, bottom, and left placement. Direction is automatically mirrored in RTL layouts.

```html
import React from 'react'
import { CButton, CPopover } from '@coreui/react'

export const PopoverFourDirectionsExample = () => {
  return (
    <>
      <CPopover content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="top">
        <CButton color="secondary">Popover on top</CButton>
      </CPopover>
      <CPopover
        content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        placement="right"
      >
        <CButton color="secondary">Popover on right</CButton>
      </CPopover>
      <CPopover
        content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        placement="bottom"
      >
        <CButton color="secondary">Popover on bottom</CButton>
      </CPopover>
      <CPopover
        content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        placement="left"
      >
        <CButton color="secondary">Popover on left</CButton>
      </CPopover>
    </>
  )
}
```

### Custom popovers

Use inline `style` or CSS variables to override the popover's appearance.

```html
import React from 'react'
import { CButton, CPopover } from '@coreui/react'

export const PopoverCustomPopoversExample = () => {
  const customPopoverStyle = {
    '--cui-popover-max-width': '200px',
    '--cui-popover-border-color': 'var(--cui-primary)',
    '--cui-popover-header-bg': 'var(--cui-primary)',
    '--cui-popover-header-color': 'var(--cui-white)',
    '--cui-popover-body-padding-x': '1rem',
    '--cui-popover-body-padding-y': '.5rem',
  } as React.CSSProperties

  return (
    <CPopover
      content="This popover is themed via CSS variables."
      placement="right"
      title="Custom popover"
      style={customPopoverStyle}
    >
      <CButton color="secondary">Custom popover</CButton>
    </CPopover>
  )
}
```

### Dismiss on next click

Use `trigger="focus"` to automatically hide the popover when clicking outside the element.

```html
import React from 'react'
import { CButton, CPopover } from '@coreui/react'

export const PopoverDismissExample = () => {
  return (
    <CPopover
      content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      placement="right"
      title="Dismissible popover"
      trigger="focus"
    >
      <CButton color="danger">Dismissible popover</CButton>
    </CPopover>
  )
}
```

## Usage details

### Popovers on disabled elements

HTML elements with the `disabled` attribute cannot trigger popovers. Wrap them in a `<span>` or `<div>` and use `tabIndex="0"` to keep the element accessible. You can also use `trigger={['hover', 'focus']}` to ensure visual feedback.

```html
import React from 'react'
import { CButton, CPopover } from '@coreui/react'

export const PopoverDisabledElementsExample = () => {
  return (
    <CPopover content="Disabled popover" placement="right" trigger={['hover', 'focus']}>
      <span className="d-inline-block" tabIndex={0}>
        <CButton color="primary" disabled>
          Disabled button
        </CButton>
      </span>
    </CPopover>
  )
}
```

## API reference

Explore the full API for the React Bootstrap Popover component:

- [&lt;CPopover /&gt;](../api/#cpopover)
