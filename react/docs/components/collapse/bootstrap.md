# React Bootstrap Collapse Component

> Learn how to use the React Bootstrap Collapse component from CoreUI to toggle visibility of content panels using animations and Bootstrap-compatible transitions.

## How the React Bootstrap Collapse component works

The React Bootstrap Collapse component allows you to toggle the visibility of content using animated height or width transitions. It’s perfect for creating expandable sections, FAQs, and collapsible panels with clean and accessible markup.

Triggers such as buttons or anchor elements are connected to collapsible targets. The collapse animation modifies the `height` or `width` property, so padding should not be applied directly to the `.collapse` element.

## React Bootstrap Collapse example

You can trigger collapsible content using a button or a link. Below is a simple example using CoreUI components styled with Bootstrap.

```html
import React, { useState } from 'react'
import { CButton, CCollapse, CCard, CCardBody } from '@coreui/react'

export const CollapseExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton
        color="primary"
        href="#"
        onClick={(event) => {
          event.preventDefault()
          setVisible(!visible)
        }}
      >
        Link
      </CButton>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Button
      </CButton>
      <CCollapse visible={visible}>
        <CCard className="mt-3">
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

## Horizontal React Bootstrap Collapse

Use the `horizontal` prop on the React Bootstrap Collapse component to transition the `width` instead of `height`. Don’t forget to apply a specific width to the immediate child of the collapse element.

```html
import React, { useState } from 'react'
import { CButton, CCollapse, CCard, CCardBody } from '@coreui/react'

export const CollapseHorizontalExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton
        color="primary"
        className="mb-3"
        onClick={() => setVisible(!visible)}
        aria-expanded={visible}
        aria-controls="collapseWidthExample"
      >
        Button
      </CButton>
      <div style={{ minHeight: '120px' }}>
        <CCollapse id="collapseWidthExample" horizontal visible={visible}>
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

## Multiple collapse targets

React Bootstrap Collapse supports multiple targets toggled by a single trigger. Use a `<CButton>` to show or hide more than one collapsible element at the same time.

```html
import React, { useState } from 'react'
import { CButton, CCollapse, CCard, CCardBody, CCol, CRow } from '@coreui/react'

export const CollapseMultipleTargetsExample = () => {
  const [visibleA, setVisibleA] = useState(false)
  const [visibleB, setVisibleB] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisibleA(!visibleA)}>
        Toggle first element
      </CButton>
      <CButton color="primary" onClick={() => setVisibleB(!visibleB)}>
        Toggle second element
      </CButton>
      <CButton
        color="primary"
        onClick={() => {
          setVisibleA(!visibleA)
          setVisibleB(!visibleB)
        }}
      >
        Toggle both elements
      </CButton>
      <CRow>
        <CCol xs={6}>
          <CCollapse visible={visibleA}>
            <CCard className="mt-3">
              <CCardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                cred nesciunt sapiente ea proident.
              </CCardBody>
            </CCard>
          </CCollapse>
        </CCol>
        <CCol xs={6}>
          <CCollapse visible={visibleB}>
            <CCard className="mt-3">
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

## API reference

Check the API documentation below to explore all available props for the React Bootstrap Collapse component:

- [&lt;CCollapse /&gt;](../api/#ccollapse)
