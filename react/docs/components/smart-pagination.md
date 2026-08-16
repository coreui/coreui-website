# React Smart Pagination Component

> Documentation and examples for showing smart pagination to indicate a series of related content exists across multiple pages.

## Overview

React smart pagination component consists of button-like styled links, that are arranged side by side in a horizontal list.

We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. SmartPagination is built with list HTML elements so screen readers can announce the number of available links. SmartPagination also use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

In addition, as pages likely have more than one such navigation section, SmartPagination provide a descriptive `aria-label` for the `<nav>` to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be `aria-label="Search results pages"`.

```html
import React, { useState } from 'react'
import { CSmartPagination } from '@coreui/react-pro'

export const SmartPaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <CSmartPagination activePage={currentPage} pages={10} onActivePageChange={setCurrentPage} />
  )
}
```

## Features

- Determine behavior, style and functionality of pagination
- Smart automatic items generation

## Working with icons

Looking to use an icon or symbol in place of text for some pagination links? SmartPagination will provide screen reader support for 'firstButton', 'previousButton', 'nextButton' and 'lastButton'.

## Sizing

Fancy larger or smaller pagination? Add `size="lg"` or `size="sm"` for additional sizes.

```html
import React, { useState } from 'react'
import { CSmartPagination } from '@coreui/react-pro'

export const SmartPaginationSizingLargeExample = () => {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <CSmartPagination
      size="lg"
      activePage={currentPage}
      pages={10}
      onActivePageChange={setCurrentPage}
    />
  )
}
```

```html
import React, { useState } from 'react'
import { CSmartPagination } from '@coreui/react-pro'

export const SmartPaginationSizingSmallExample = () => {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <CSmartPagination
      size="sm"
      activePage={currentPage}
      pages={10}
      onActivePageChange={setCurrentPage}
    />
  )
}
```

## Alignment

Change the alignment of pagination components with `align="start"`, `align="center"` or `align="end"`.

```html
import React, { useState } from 'react'
import { CSmartPagination } from '@coreui/react-pro'

export const SmartPaginationAlignmentCenterExample = () => {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <CSmartPagination
      align="center"
      activePage={currentPage}
      pages={10}
      onActivePageChange={setCurrentPage}
    />
  )
}
```

```html
import React, { useState } from 'react'
import { CSmartPagination } from '@coreui/react-pro'

export const SmartPaginationAlignmentEndExample = () => {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <CSmartPagination
      align="end"
      activePage={currentPage}
      pages={10}
      onActivePageChange={setCurrentPage}
    />
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CSmartPagination /&gt;](./api/#csmartpagination)
