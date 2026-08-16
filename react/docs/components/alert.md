# React Alert Component

> React alert component gives contextual feedback information for common user operations. The alert component is delivered with a bunch of usable and adjustable alert messages.

## How to use React Alert Component.

React Alert is prepared for any length of text, as well as an optional close button. For a styling, use one of the **required** contextual `color` props (e.g., `primary`). For inline dismissal, use the [dismissing prop](#dismissing).

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
> Click the button below to show an alert (hidden with inline styles to start), then dismiss (and destroy) it with the built-in close button.
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
> Use the `` component to immediately give matching colored links inside any React alert component.
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
> React Alert can also incorporate supplementary components &amp; elements like heading, paragraph, and divider.
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
> Similarly, you can use [flexbox utilities](https://coreui.io/bootstrap/docs/utilities/flex) and [CoreUI Icons](https://coreui.io/icons/) to create React alerts with icons. Depending on your icons and content, you may want to add more utilities or custom styles.
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
> Need more than one icon for your React alerts? Consider using [CoreUI Icons](https://coreui.io/icons/).
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
> ### Solid
> 
> Use `variant="solid"` to change contextual colors to solid.
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
> React Alert component can also be easily dismissed. Just add the `dismissible` prop.
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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CAlert /&gt;](./api/#calert)
- [&lt;CAlertHeading /&gt;](./api/#calertheading)
- [&lt;CAlertLink /&gt;](./api/#calertlink)
