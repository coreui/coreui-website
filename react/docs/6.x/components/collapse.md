# React Collapse Component

> React collapse component toggles the visibility of content across your project with a few classes and some scripts. Useful for a large amount of content.

## How it works

The collapse component is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element animates the `height` from its current value to `0`. Given how CSS handles animations, you cannot use `padding` on a `.collapse` element. Instead, use the class as an independent wrapping element.

The stylesheet owns the animation where the browser can interpolate a size to `auto`; elsewhere the component measures the two sizes and the stylesheet still times the move between them. Either way the duration and easing come from `--cui-transition-collapse-duration` and `--cui-transition-collapse-timing`, so changing them changes both paths.

## Example

You can use a link or a button component.

```html
import React, { useState } from 'react'
import { CButton, CCollapse, CCard, CCardBody } from '@coreui/react'

export const CollapseExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton
        theme="primary"
        href="#"
        onClick={(event) => {
          event.preventDefault()
          setVisible(!visible)
        }}
      >
        Link
      </CButton>
      <CButton theme="primary" onClick={() => setVisible(!visible)}>
        Button
      </CButton>
      <CCollapse show={visible}>
        <CCard className="mt-4">
          <CCardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident.
          </CCardBody>
        </CCard>
      </CCollapse>
    </>
  )
}
```

## Horizontal

The collapse plugin also supports horizontal collapsing. Add the `horizontal` property to transition the `width` instead of `height` and set a `width` on the immediate child element.

```html
import React, { useState } from 'react'
import { CButton, CCollapse, CCard, CCardBody } from '@coreui/react'

export const CollapseHorizontalExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton
        theme="primary"
        className="mb-4"
        onClick={() => setVisible(!visible)}
        aria-expanded={visible}
        aria-controls="collapseWidthExample"
      >
        Button
      </CButton>
      <div style={{ minHeight: '120px' }}>
        <CCollapse id="collapseWidthExample" horizontal show={visible}>
          <CCard style={{ width: '300px' }}>
            <CCardBody>
              This is some placeholder content for a horizontal collapse. It's hidden by default and
              shown when triggered.
            </CCardBody>
          </CCard>
        </CCollapse>
      </div>
    </>
  )
}
```

## Multiple toggles and targets

A `<CButton>` can show and hide multiple elements. Conversely, several buttons can show and hide the same element if they each drive its `visible` property.

```html
import React, { useState } from 'react'
import { CButton, CCollapse, CCard, CCardBody, CCol, CRow } from '@coreui/react'

export const CollapseMultipleTargetsExample = () => {
  const [visibleA, setVisibleA] = useState(false)
  const [visibleB, setVisibleB] = useState(false)
  return (
    <>
      <CButton theme="primary" onClick={() => setVisibleA(!visibleA)}>
        Toggle first element
      </CButton>
      <CButton theme="primary" onClick={() => setVisibleB(!visibleB)}>
        Toggle second element
      </CButton>
      <CButton
        theme="primary"
        onClick={() => {
          setVisibleA(!visibleA)
          setVisibleB(!visibleB)
        }}
      >
        Toggle both elements
      </CButton>
      <CRow>
        <CCol xs={6}>
          <CCollapse show={visibleA}>
            <CCard className="mt-4">
              <CCardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                cred nesciunt sapiente ea proident.
              </CCardBody>
            </CCard>
          </CCollapse>
        </CCol>
        <CCol xs={6}>
          <CCollapse show={visibleB}>
            <CCard className="mt-4">
              <CCardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                cred nesciunt sapiente ea proident.
              </CCardBody>
            </CCard>
          </CCollapse>
        </CCol>
      </CRow>
    </>
  )
}
```

## Findable when collapsed

_Added in 6.0.0._

By default a collapsed area is removed from the layout, which also removes it from what the browser's find-in-page can search. Add `hiddenUntilFound` to hide it with [`hidden="until-found"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden) instead: the content stays laid out but invisible, so searching the page finds it, and the browser expands the area to show the match.

The browser reveals the content on its own, so `onShow` fires to let the declared state catch up — set `visible` from it, or the stylesheet hides the content the reader was just sent to.

```html
import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCollapse } from '@coreui/react'

export const CollapseFindableExample = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <CButton theme="primary" onClick={() => setVisible(!visible)}>
        Toggle findable content
      </CButton>
      <CCollapse hiddenUntilFound show={visible} onShow={() => setVisible(true)}>
        <CCard className="mt-4">
          <CCardBody>
            Search this page for <strong>capybara</strong> with your browser's find-in-page and this
            panel opens on its own.
          </CCardBody>
        </CCard>
      </CCollapse>
    </>
  )
}
```

Requires Chrome 102, Firefox 148 or Safari 26.2. Below those the attribute is left off, and the content is simply not findable — exactly as without the property.

## Accessibility

`<CCollapse>` doesn't touch your trigger element, so be sure to add `aria-expanded` to the control yourself. This attribute explicitly sends the current state of the collapsible element connected to the control to screen readers and related assistive technologies. Bind it to the same state you pass to the `visible` prop — `aria-expanded={visible}` — so it reads `false` while the collapsible element is closed and `true` while it is open, whichever control toggled it. If the control element's HTML element is not a button (e.g., an `<a>` or `<div>`), the attribute `role="button"` should be added to the element.

If your control element is targeting a single collapsible element, you should also add the `aria-controls` attribute to the control, containing the `id` of the collapsible element (set the `id` on `<CCollapse>`). Modern screen readers and related assistive technologies address this attribute to provide users with extra shortcuts to navigate directly to the collapsible element itself.

Note that CoreUI's current implementation does not cover the various *optional* keyboard interactions described in the [WAI-ARIA Authoring Practices 1.1 accordion pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) — you will need to include these yourself with custom JavaScript.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CCollapse /&gt;](./api/#ccollapse)
