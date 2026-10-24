# React Tooltip Component

> Documentation and examples for adding React Tooltips.

## Overview

Things to keep in mind when using the tooltip component:

- Tooltips with empty `content` render an empty box, so always provide content.
- Tooltips are appended to `document.body` by default. Use the `container` prop to append them to a different element when a parent's styles interfere with the tooltip (like in our input groups, button groups, etc.).
- Tooltips cannot be triggered on hidden elements.
- Tooltips for disabled elements need to be activated on a wrapper element.
- When triggered by hyperlinks that span multiple lines, tooltips will be centered. Use `.text-nowrap` on your `<a>` elements to avoid this behavior.

Got all that? Great, let's see how they work with some examples.

## Examples

### Tooltips on links

Hover over the links below to see tooltips:

```html
import React from 'react'
import { CLink, CTooltip } from '@coreui/react'

export const TooltipOnLinksExample = () => {
  return (
    <p className="fg-2">
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
    '--cui-tooltip-bg': 'var(--cui-primary-base)',
  } as React.CSSProperties

  return (
    <CTooltip
      content="This top tooltip is themed via CSS variables."
      placement="top"
      style={customTooltipStyle}
    >
      <CButton theme="secondary">Custom tooltip</CButton>
    </CTooltip>
  )
}
```

### Theme variants

A tooltip reads the `.theme-{color}` slots, so a [theme class](https://coreui.io/react/docs/customize/components/#theme-variants) on the tip colors its surface and picks the contrasting text. Pass it through `className`; without one the tip keeps its default look, the page's foreground color.

```html
import React from 'react'
import { CButton, CTooltip } from '@coreui/react'

export const TooltipThemeVariantsExample = () => {
  return (
    <>
      <CTooltip className="theme-primary" content="Primary tooltip">
        <CButton variant="outline">Primary</CButton>
      </CTooltip>
      <CTooltip className="theme-secondary" content="Secondary tooltip">
        <CButton variant="outline">Secondary</CButton>
      </CTooltip>
      <CTooltip className="theme-success" content="Success tooltip">
        <CButton variant="outline">Success</CButton>
      </CTooltip>
      <CTooltip className="theme-danger" content="Danger tooltip">
        <CButton variant="outline">Danger</CButton>
      </CTooltip>
    </>
  )
}
```

### Directions

Hover over the buttons below to see the four directions: `top`, `end`, `bottom` and `start`.

```html
import React from 'react'
import { CButton, CTooltip } from '@coreui/react'

export const TooltipDirectionsExample = () => {
  return (
    <>
      <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="top">
        <CButton theme="secondary">Tooltip on top</CButton>
      </CTooltip>
      <CTooltip content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." placement="end">
        <CButton theme="secondary">Tooltip at the end</CButton>
      </CTooltip>
      <CTooltip
        content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        placement="bottom"
      >
        <CButton theme="secondary">Tooltip on bottom</CButton>
      </CTooltip>
      <CTooltip
        content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        placement="start"
      >
        <CButton theme="secondary">Tooltip at the start</CButton>
      </CTooltip>
    </>
  )
}
```

`start` and `end` are logical: they follow the reading direction, so `end` is the right side in LTR and the left side in RTL.

#### Deprecated physical names

_Deprecated in 6.0.0._

`left` and `right` still work and behave exactly like `start` and `end` — they have always mirrored in RTL, so `right` never meant "the right side" there either. The logical names say that plainly; the physical ones are removed in v7.

```html
import React from 'react'
import { CButton, CTooltip } from '@coreui/react'

export const TooltipDeprecatedDirectionsExample = () => {
  return (
    <>
      <CTooltip
        content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        placement="right"
      >
        <CButton theme="secondary">Tooltip on right</CButton>
      </CTooltip>
      <CTooltip
        content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        placement="left"
      >
        <CButton theme="secondary">Tooltip on left</CButton>
      </CTooltip>
    </>
  )
}
```

### Responsive placement

Breakpoint prefixes make a placement responsive: `top md:end` reads as top below `md` and end from `md` up. The breakpoints are the Sass ones — `sm` 576px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px. A bare placement with no prefix applies below the smallest one listed.

```html
import React from 'react'
import { CButton, CTooltip } from '@coreui/react'

export const TooltipResponsivePlacementExample = () => {
  return (
    <CTooltip content="Top below md, right from md up." placement="top md:right">
      <CButton theme="secondary">Responsive placement</CButton>
    </CTooltip>
  )
}
```

### Tooltips with HTML content

The `content` prop accepts any valid React node, so you can insert styled elements like `<em>`, `<strong>`, or `<u>` directly inside the tooltip. This is useful when you want to emphasize certain words, add inline formatting, or even insert icons.

```html
import React from 'react'
import { CButton, CTooltip } from '@coreui/react'

export const TooltipHtmlExample = () => {
  return (
    <CTooltip
      content={
        <>
          <em>Tooltip</em> <u>with</u> <b>HTML</b>
        </>
      }
    >
      <CButton theme="secondary">Tooltip with HTML</CButton>
    </CTooltip>
  )
}
```

### Tooltips on SVG elements

SVG elements do not support the `title` attribute the way HTML elements do, but `<CTooltip>` doesn't need it — wrap the SVG (or a link containing it) in the component like any other trigger. Since tooltips are appended to `document.body` by default, positioning stays correct even when SVGs are nested inside complex layouts.

Using tooltips with SVGs is a great way to enhance accessibility and interactivity for icon-based UIs or data visualizations without modifying the structure of your SVGs.

## Usage

A shown tooltip can be dismissed by pressing the <kbd>Escape</kbd> key, and a hover- or focus-triggered tooltip stays open while the pointer or focus is over the trigger or the tip itself — so users can reach interactive content inside it. It hides when the pointer leaves both. A focus-triggered tooltip also stays open after a press inside it, for example to select its text, and hides on the next click outside or when focus moves elsewhere. Together these satisfy the [WCAG 1.4.13 "Content on Hover or Focus"](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html) success criterion (dismissable, hoverable, persistent).

### Disabled elements

Elements with the disabled attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from a wrapper `<div>` or `<span>`, ideally made keyboard-focusable using `tabindex="0"`.

```html
import React from 'react'
import { CButton, CTooltip } from '@coreui/react'

export const TooltipDisabledElementsExample = () => {
  return (
    <CTooltip content="Disabled tooltip" trigger={['hover', 'focus']}>
      <span className="d-inline-block" tabIndex={0}>
        <CButton theme="primary" disabled>
          Disabled button
        </CButton>
      </span>
    </CTooltip>
  )
}
```

## Controlled and uncontrolled

_Added in 6.0.0._

The tooltip works either way, and the prop you reach for is what picks the mode.

| | prop | who owns the visibility |
| --- | --- | --- |
| Uncontrolled | `defaultShow` | the tooltip, from that starting point |
| Controlled | `show` | your component |

`onShowChange` fires in **both** modes whenever the tooltip requests a visibility change — a trigger gesture (hover, focus, click), the Escape key or, in uncontrolled mode, any internal toggle. The deprecated `visible` prop keeps its old behavior and is ignored when `defaultShow` or `show` is set.

`onShowChange` is a request, not a report. To follow what is on screen, `onShow` and `onHide` fire when the tooltip starts showing or hiding (after `delay`, and only when the visibility actually changes), and `onShown` and `onHidden` once the transition has finished.

### Uncontrolled

Every example above is uncontrolled — the trigger gestures manage the tooltip. `defaultShow` seeds it visible on mount, and the gestures take over from there.

```jsx
<CTooltip content="Shown on load" defaultShow>
```

### Controlled

Pass `show` and the tooltip renders what you pass — trigger gestures only call `onShowChange` (the `delay` still applies as presentation). That is what a **pinned** tooltip needs: while the checkbox holds `show` true, hovering away only requests a change the page does not grant.

```html
import React, { useState } from 'react'
import { CButton, CCheckbox, CFormField, CTooltip } from '@coreui/react'

export const TooltipControlledExample = () => {
  const [pinned, setPinned] = useState(true)
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <CFormField className="mb-4">
        <CCheckbox
          checked={pinned}
          id="tooltipPinned"
          label="Pin the tooltip"
          onChange={(event) => setPinned(event.target.checked)}
        />
      </CFormField>
      <CTooltip
        content="Pinned tooltips stay put."
        show={pinned || hovered}
        onShowChange={setHovered}
      >
        <CButton theme="secondary">Hover me</CButton>
      </CTooltip>
    </>
  )
}
```

Use it when the visibility belongs to something else — an onboarding step, a validation hint that must stay put — and feed `onShowChange` back for the parts you still want the gestures to drive, as the example does while unpinned.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CTooltip /&gt;](./api/#ctooltip)
