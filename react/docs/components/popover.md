# React Popover Component

> Documentation and examples for adding React popovers, like those found in iOS, to any element on your site.

## Examples

### Live demo

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

Four options are available: top, right, bottom, and left aligned. Directions are mirrored when using CoreUI for React in RTL.

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

You can customize the appearance of popovers using [CSS variables](./styling/#css-variables). We set a custom `style` to scope our custom appearance and use it to override some of the local CSS variables.

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

Use the `focus` trigger to dismiss popovers on the user's next click of a different element than the toggle element.

A shown popover can also be dismissed by pressing the <kbd>Escape</kbd> key. As with dropdown menus, a popover shown inside a dialog is dismissed on its own: the first <kbd>Escape</kbd> closes the popover and a subsequent one closes the dialog.

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

## Usage

### Disabled elements

Elements with the disabled attribute aren't interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you'll want to trigger the popover from a wrapper `<div>` or `<span>`, ideally made keyboard-focusable using `tabindex="0"`.

For disabled popover triggers, you may also prefer `trigger={['hover', 'focus']}` so that the popover appears as immediate visual feedback to your users as they may not expect to click on a disabled element.

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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CPopover /&gt;](./api/#cpopover)
