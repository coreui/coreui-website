# Vue Bootstrap Accordion Component

> Learn how to use CoreUI’s Vue Accordion component with Bootstrap styles for flexible, framework-consistent UI.

## Examples

Click the accordions below to expand/collapse the accordion content.

```html
<template>
  <CAccordion>
    <CAccordionItem :item-key="1">
      <CAccordionHeader> Accordion Item #1 </CAccordionHeader>
      <CAccordionBody>
        <strong>This is the first item's accordion body.</strong> It is hidden by default, until the
        collapse plugin adds the appropriate classes that we use to style each element. These
        classes control the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding our default variables.
        It's also worth noting that just about any HTML can go within the
        <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionItem>
    <CAccordionItem :item-key="2">
      <CAccordionHeader> Accordion Item #2 </CAccordionHeader>
      <CAccordionBody>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until
        the collapse plugin adds the appropriate classes that we use to style each element. These
        classes control the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding our default variables.
        It's also worth noting that just about any HTML can go within the
        <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionItem>
    <CAccordionItem :item-key="3">
      <CAccordionHeader> Accordion Item #3 </CAccordionHeader>
      <CAccordionBody>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
        collapse plugin adds the appropriate classes that we use to style each element. These
        classes control the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding our default variables.
        It's also worth noting that just about any HTML can go within the
        <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionItem>
  </CAccordion>
</template>

<script setup>
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/vue'
</script>
```

### Flush

Add `flush` to remove the default `background-color`, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.

```html
<template>
  <CAccordion flush>
    <CAccordionItem>
      <CAccordionHeader> Accordion Item #1 </CAccordionHeader>
      <CAccordionBody>
        <strong>This is the first item's accordion body.</strong> It is hidden by default, until the
        collapse plugin adds the appropriate classes that we use to style each element. These
        classes control the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding our default variables.
        It's also worth noting that just about any HTML can go within the
        <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionItem>
    <CAccordionItem>
      <CAccordionHeader> Accordion Item #2 </CAccordionHeader>
      <CAccordionBody>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until
        the collapse plugin adds the appropriate classes that we use to style each element. These
        classes control the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding our default variables.
        It's also worth noting that just about any HTML can go within the
        <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionItem>
    <CAccordionItem>
      <CAccordionHeader> Accordion Item #3 </CAccordionHeader>
      <CAccordionBody>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
        collapse plugin adds the appropriate classes that we use to style each element. These
        classes control the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding our default variables.
        It's also worth noting that just about any HTML can go within the
        <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionItem>
  </CAccordion>
</template>

<script setup>
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/vue'
</script>
```

### Always open

Add `always-open` property to make accordion items stay open when another item is opened.

```html
<template>
  <CAccordion :active-item-key="2" always-open>
    <CAccordionItem :item-key="1">
      <CAccordionHeader> Accordion Item #1 </CAccordionHeader>
      <CAccordionBody>
        <strong>This is the first item's accordion body.</strong> It is hidden by default, until the
        collapse plugin adds the appropriate classes that we use to style each element. These
        classes control the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding our default variables.
        It's also worth noting that just about any HTML can go within the
        <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionItem>
    <CAccordionItem :item-key="2">
      <CAccordionHeader> Accordion Item #2 </CAccordionHeader>
      <CAccordionBody>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until
        the collapse plugin adds the appropriate classes that we use to style each element. These
        classes control the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding our default variables.
        It's also worth noting that just about any HTML can go within the
        <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionItem>
    <CAccordionItem :item-key="3">
      <CAccordionHeader> Accordion Item #3 </CAccordionHeader>
      <CAccordionBody>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
        collapse plugin adds the appropriate classes that we use to style each element. These
        classes control the overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding our default variables.
        It's also worth noting that just about any HTML can go within the
        <code>.accordion-body</code>, though the transition does limit overflow.
      </CAccordionBody>
    </CAccordionItem>
  </CAccordion>
</template>

<script setup>
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/vue'
</script>
```
