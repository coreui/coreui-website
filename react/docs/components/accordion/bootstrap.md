# React Bootstrap Accordion Component

> Learn how to create vertically collapsing Bootstrap-style accordions using CoreUI’s React components.

## How to use React Bootstrap Accordion component

Use CoreUI's React components styled with Bootstrap to build interactive and collapsible accordion sections.

```html
import React from 'react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'

export const AccordionExample = () => {
  return (
    <CAccordion activeItemKey={2}>
      <CAccordionItem itemKey={1}>
        <CAccordionHeader>Accordion Item #1</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the first item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={2}>
        <CAccordionHeader>Accordion Item #2</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the second item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={3}>
        <CAccordionHeader>Accordion Item #3</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the third item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  )
}
```

### Flush style

Add the `flush` prop to remove default borders, background colors, and border radius — making the accordion items align flush with their container, following Bootstrap’s visual style.

```html
import React from 'react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'

export const AccordionFlushExample = () => {
  return (
    <CAccordion flush>
      <CAccordionItem itemKey={1}>
        <CAccordionHeader>Accordion Item #1</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the first item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={2}>
        <CAccordionHeader>Accordion Item #2</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the second item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={3}>
        <CAccordionHeader>Accordion Item #3</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the third item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  )
}
```

### Always open behavior

Use the `alwaysOpen` property to keep multiple accordion items expanded at the same time, mimicking Bootstrap’s multiple-item open functionality.

```html
import React from 'react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'

export const AccordionAlwaysOpenExample = () => {
  return (
    <CAccordion alwaysOpen activeItemKey={2}>
      <CAccordionItem itemKey={1}>
        <CAccordionHeader>Accordion Item #1</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the first item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={2}>
        <CAccordionHeader>Accordion Item #2</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the second item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={3}>
        <CAccordionHeader>Accordion Item #3</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the second item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  )
}
```

## API reference

Refer to the API documentation for detailed descriptions of all the available props and components used to create Bootstrap-styled accordions in React.

- [&lt;CAccordion /&gt;](../api/#caccordion)
- [&lt;CAccordionBody /&gt;](../api/#caccordionbody)
- [&lt;CAccordionHeader /&gt;](../api/#caccordionheader)
- [&lt;CAccordionItem /&gt;](../api/#caccordionitem)
