# React Bootstrap Pagination Component

> Learn how to use the React Bootstrap Pagination component from CoreUI to create accessible and responsive navigation between pages, including sizing, alignment, and icon support.

## Overview of React Bootstrap Pagination

The React Bootstrap Pagination component helps you build navigation for multi-page content, such as search results or article listings. It's based on semantic HTML with `<ul>` and `<li>` elements, ensuring accessibility and screen reader compatibility.

Wrap the component in a `<nav>` element and use a descriptive `aria-label` like `aria-label="Search results pages"` for clarity.

```html
import React from 'react'
import { CPagination, CPaginationItem } from '@coreui/react'

export const PaginationExample = () => {
  return (
    <CPagination aria-label="Page navigation example">
      <CPaginationItem>Previous</CPaginationItem>
      <CPaginationItem>1</CPaginationItem>
      <CPaginationItem>2</CPaginationItem>
      <CPaginationItem>3</CPaginationItem>
      <CPaginationItem>Next</CPaginationItem>
    </CPagination>
  )
}
```

## Using icons in pagination

You can replace text in pagination buttons with icons or symbols. Make sure to include proper `aria-labels` for accessibility.

```html
import React from 'react'
import { CPagination, CPaginationItem } from '@coreui/react'

export const PaginationWorkingWithIconsExample = () => {
  return (
    <CPagination aria-label="Page navigation example">
      <CPaginationItem aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </CPaginationItem>
      <CPaginationItem>1</CPaginationItem>
      <CPaginationItem>2</CPaginationItem>
      <CPaginationItem>3</CPaginationItem>
      <CPaginationItem aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </CPaginationItem>
    </CPagination>
  )
}
```

## Disabled and active pagination items

Use the `disabled` prop to indicate non-interactive items and the `.active` class to highlight the current page. CoreUI handles keyboard accessibility with `tabindex="-1"` and JS-based interaction disabling.

```html
import React from 'react'
import { CPagination, CPaginationItem } from '@coreui/react'

export const PaginationDisabledAndActiveExample = () => {
  return (
    <CPagination aria-label="Page navigation example">
      <CPaginationItem aria-label="Previous" disabled>
        <span aria-hidden="true">&laquo;</span>
      </CPaginationItem>
      <CPaginationItem active>1</CPaginationItem>
      <CPaginationItem>2</CPaginationItem>
      <CPaginationItem>3</CPaginationItem>
      <CPaginationItem aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </CPaginationItem>
    </CPagination>
  )
}
```

## Pagination sizing

Adjust the size of the React Bootstrap Pagination component with the `size` prop. Available values: `lg` (large), `sm` (small).

```html
import React from 'react'
import { CPagination, CPaginationItem } from '@coreui/react'

export const PaginationSizingLargeExample = () => {
  return (
    <CPagination size="lg" aria-label="Page navigation example">
      <CPaginationItem>Previous</CPaginationItem>
      <CPaginationItem>1</CPaginationItem>
      <CPaginationItem>2</CPaginationItem>
      <CPaginationItem>3</CPaginationItem>
      <CPaginationItem>Next</CPaginationItem>
    </CPagination>
  )
}
```
```html
import React from 'react'
import { CPagination, CPaginationItem } from '@coreui/react'

export const PaginationSizingSmallExample = () => {
  return (
    <CPagination size="sm" aria-label="Page navigation example">
      <CPaginationItem>Previous</CPaginationItem>
      <CPaginationItem>1</CPaginationItem>
      <CPaginationItem>2</CPaginationItem>
      <CPaginationItem>3</CPaginationItem>
      <CPaginationItem>Next</CPaginationItem>
    </CPagination>
  )
}
```

## Pagination alignment

Change pagination alignment using the `align` prop: `"start"`, `"center"`, or `"end"`.

```html
import React from 'react'
import { CPagination, CPaginationItem } from '@coreui/react'

export const PaginationAlignmentExample = () => {
  return (
    <CPagination align="center" aria-label="Page navigation example">
      <CPaginationItem disabled>Previous</CPaginationItem>
      <CPaginationItem>1</CPaginationItem>
      <CPaginationItem>2</CPaginationItem>
      <CPaginationItem>3</CPaginationItem>
      <CPaginationItem>Next</CPaginationItem>
    </CPagination>
  )
}
```
```html
import React from 'react'
import { CPagination, CPaginationItem } from '@coreui/react'

export const PaginationAlignment2Example = () => {
  return (
    <CPagination align="end" aria-label="Page navigation example">
      <CPaginationItem disabled>Previous</CPaginationItem>
      <CPaginationItem>1</CPaginationItem>
      <CPaginationItem>2</CPaginationItem>
      <CPaginationItem>3</CPaginationItem>
      <CPaginationItem>Next</CPaginationItem>
    </CPagination>
  )
}
```

## API reference

Here’s the API reference for the React Bootstrap Pagination component:

- [&lt;CPagination /&gt;](../api/#cpagination)
- [&lt;CPaginationItem /&gt;](../api/#cpaginationitem)
