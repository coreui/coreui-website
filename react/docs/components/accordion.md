# React Accordion Component

> Build vertically collapsing accordions in combination with our React Accordion component.

## How to use React Accordion component.

Click the accordions below to expand/collapse the accordion content.

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

### Flush

Add `flush` to remove the default `background-color`, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.

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

### Always open

Add `alwaysOpen` property to make React accordion items stay open when another item is opened.

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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CAccordion /&gt;](./api/#caccordion)
- [&lt;CAccordionBody /&gt;](./api/#caccordionbody)
- [&lt;CAccordionHeader /&gt;](./api/#caccordionheader)
- [&lt;CAccordionItem /&gt;](./api/#caccordionitem)
