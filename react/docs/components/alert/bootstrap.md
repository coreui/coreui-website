# React Bootstrap Alert Component

> Learn how to use CoreUI’s React Alert component styled with Bootstrap for contextual feedback messages and dismissible UI alerts.

## How to use React Bootstrap Alert component

CoreUI’s React Bootstrap Alerts provide contextual feedback messages for typical user interactions. Each alert supports Bootstrap-based colors and can include additional content and dismiss functionality.

```html
import React from 'react'
import { CAlert } from '@coreui/react'

export const AlertExample = () => {
  return (
    <>
      <CAlert color="primary">A simple primary alert—check it out!</CAlert>
      <CAlert color="secondary">A simple secondary alert—check it out!</CAlert>
      <CAlert color="success">A simple success alert—check it out!</CAlert>
      <CAlert color="danger">A simple danger alert—check it out!</CAlert>
      <CAlert color="warning">A simple warning alert—check it out!</CAlert>
      <CAlert color="info">A simple info alert—check it out!</CAlert>
      <CAlert color="light">A simple light alert—check it out!</CAlert>
      <CAlert color="dark">A simple dark alert—check it out!</CAlert>
    </>
  )
}
```

> ### Live example
> 
> Click the button below to display an alert (initially hidden), then dismiss it using the built-in close button — styled the Bootstrap way.
> 
> ```html
import React, { useState } from 'react'
import { CAlert, CButton } from '@coreui/react'

export const AlertLiveExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CAlert color="primary" dismissible visible={visible} onClose={() => setVisible(false)}>
        A simple primary alert—check it out!
      </CAlert>
      <CButton color="primary" onClick={() => setVisible(true)}>
        Show live alert
      </CButton>
    </>
  )
}
```
> 
> ### Link color
> 
> To include links inside your alert, use the `` component — it automatically adopts the contextual Bootstrap color of the parent alert.
> 
> ```html
import React from 'react'
import { CAlert, CAlertLink } from '@coreui/react'

export const AlertLinkColorExample = () => {
  return (
    <>
      <CAlert color="primary">
        A simple primary alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a
        click if you like.
      </CAlert>
      <CAlert color="secondary">
        A simple secondary alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a
        click if you like.
      </CAlert>
      <CAlert color="success">
        A simple success alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a
        click if you like.
      </CAlert>
      <CAlert color="danger">
        A simple danger alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a
        click if you like.
      </CAlert>
      <CAlert color="warning">
        A simple warning alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a
        click if you like.
      </CAlert>
      <CAlert color="info">
        A simple info alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click
        if you like.
      </CAlert>
      <CAlert color="light">
        A simple light alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click
        if you like.
      </CAlert>
      <CAlert color="dark">
        A simple dark alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click
        if you like.
      </CAlert>
    </>
  )
}
```
> 
> ### Additional content
> 
> React Bootstrap Alerts can include extra structured content such as headings, paragraphs, and horizontal rules for enhanced readability.
> 
> ```html
import React from 'react'
import { CAlert, CAlertHeading } from '@coreui/react'

export const AlertAdditionalContentExample = () => {
  return (
    <CAlert color="success">
      <CAlertHeading as="h4">Well done!</CAlertHeading>
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to
        run a bit longer so that you can see how spacing within an alert works with this kind of
        content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
      </p>
    </CAlert>
  )
}
```
> 
> ### Icons
> 
> Use CoreUI Icons and flexbox utilities to add icons to your alerts. Combine them with spacing utilities for precise layout control.
> 
> ```html
import React from 'react'
import { CAlert } from '@coreui/react'

export const AlertIcons1Example = () => {
  return (
    <CAlert color="primary" className="d-flex align-items-center">
      <svg className="flex-shrink-0 me-2" width="24" height="24" viewBox="0 0 512 512">
        <rect
          width="32"
          height="176"
          x="240"
          y="176"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        ></rect>
        <rect
          width="32"
          height="32"
          x="240"
          y="384"
          fill="var(--ci-primary-color, currentColor)"
          className="ci-primary"
        ></rect>
        <path
          fill="var(--ci-primary-color, currentColor)"
          d="M274.014,16H237.986L16,445.174V496H496V445.174ZM464,464H48V452.959L256,50.826,464,452.959Z"
          className="ci-primary"
        ></path>
      </svg>
      <div>An example alert with an icon</div>
    </CAlert>
  )
}
```
> 
> Need more than one icon in your alert? CoreUI Icons can be stacked or arranged using flex utilities.
> 
> ```html
import React from 'react'
import { CAlert } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBurn, cilCheckCircle, cilInfo, cilWarning } from '@coreui/icons'

export const AlertIcons2Example = () => {
  return (
    <>
      <CAlert color="primary" className="d-flex align-items-center">
        <CIcon icon={cilInfo} className="flex-shrink-0 me-2" width={24} height={24} />
        <div>An example alert with an icon</div>
      </CAlert>
      <CAlert color="success" className="d-flex align-items-center">
        <CIcon icon={cilCheckCircle} className="flex-shrink-0 me-2" width={24} height={24} />
        <div>An example success alert with an icon</div>
      </CAlert>
      <CAlert color="warning" className="d-flex align-items-center">
        <CIcon icon={cilWarning} className="flex-shrink-0 me-2" width={24} height={24} />
        <div>An example warning alert with an icon</div>
      </CAlert>
      <CAlert color="danger" className="d-flex align-items-center">
        <CIcon icon={cilBurn} className="flex-shrink-0 me-2" width={24} height={24} />
        <div>An example danger alert with an icon</div>
      </CAlert>
    </>
  )
}
```
> 
> ### Solid style
> 
> Add `variant="solid"` to give the alert a solid background color, in line with Bootstrap’s solid alert variants.
> 
> ```html
import React from 'react'
import { CAlert } from '@coreui/react'

export const AlertSolidExample = () => {
  return (
    <>
      <CAlert color="primary" variant="solid">
        A simple solid primary alert—check it out!
      </CAlert>
      <CAlert color="secondary" variant="solid">
        A simple solid secondary alert—check it out!
      </CAlert>
      <CAlert color="success" variant="solid">
        A simple solid success alert—check it out!
      </CAlert>
      <CAlert color="danger" variant="solid">
        A simple solid danger alert—check it out!
      </CAlert>
      <CAlert color="warning" variant="solid">
        A simple solid warning alert—check it out!
      </CAlert>
      <CAlert color="info" variant="solid">
        A simple solid info alert—check it out!
      </CAlert>
      <CAlert color="light" variant="solid" className="text-high-emphasis">
        A simple solid light alert—check it out!
      </CAlert>
      <CAlert color="dark" variant="solid">
        A simple solid dark alert—check it out!
      </CAlert>
    </>
  )
}
```
> 
> ### Dismissing
> 
> Use the `dismissible` prop to allow users to close the alert. This will completely remove it from the DOM.
> 
> ```html
import React from 'react'
import { CAlert } from '@coreui/react'

export const AlertDismissingExample = () => {
  return (
    <CAlert
      color="warning"
      dismissible
      onClose={() => {
        alert('👋 Well, hi there! Thanks for dismissing me.')
      }}
    >
      <strong>Go right ahead</strong> and click that dismiss over there on the right.
    </CAlert>
  )
}
```
> 
> 
> When an alert is dismissed, the element is completely removed from the page structure. If a
> keyboard user dismisses the alert using the close button, their focus will suddenly be lost and,
> depending on the browser, reset to the start of the page/document.

## API reference

Review the API documentation for detailed information about the props available in the Bootstrap-styled React Alert component.

- [&lt;CAlert /&gt;](../api/#calert)
- [&lt;CAlertHeading /&gt;](../api/#calertheading)
- [&lt;CAlertLink /&gt;](../api/#calertlink)
