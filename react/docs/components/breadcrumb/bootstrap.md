# React Bootstrap Breadcrumb Component

> Learn how to use CoreUI’s React Breadcrumb component styled with Bootstrap to indicate navigation hierarchy and enhance user orientation within your app or website.

## How to use React Bootstrap Breadcrumb component

The React Bootstrap Breadcrumb navigation component shows users where they are in the application hierarchy. It automatically inserts visual separators via CSS, so you don’t have to manually include them.

```html
import React from 'react'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

export const BreadcrumbExample = () => {
  return (
    <>
      <CBreadcrumb>
        <CBreadcrumbItem active>Home</CBreadcrumbItem>
      </CBreadcrumb>

      <CBreadcrumb>
        <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
        <CBreadcrumbItem active>Library</CBreadcrumbItem>
      </CBreadcrumb>

      <CBreadcrumb>
        <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
        <CBreadcrumbItem href="#">Library</CBreadcrumbItem>
        <CBreadcrumbItem active>Data</CBreadcrumbItem>
      </CBreadcrumb>
    </>
  )
}
```

## Custom dividers

Separators between breadcrumb items are automatically inserted using CSS via [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and the [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content) property.

You can customize the divider using the CSS variable `--cui-breadcrumb-divider` or the Sass variable `$breadcrumb-divider`. For RTL support, there’s also `$breadcrumb-divider-flipped`.

```html
import React from 'react'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

export const BreadcrumbDividersExample = () => {
  return (
    <CBreadcrumb style={{ '--cui-breadcrumb-divider': '">"' } as React.CSSProperties}>
      <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
      <CBreadcrumbItem active>Library</CBreadcrumbItem>
    </CBreadcrumb>
  )
}
```

To change the divider in Sass, use the `quote` function. For example, to use a `>` character:

```scss
$breadcrumb-divider: quote('>');
```

It’s also possible to use an **embedded SVG icon** as a divider by assigning it to the custom property or Sass variable:

```html
import React from 'react'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

export const BreadcrumbDividers2Example = () => {
  return (
    <CBreadcrumb
      style={
        {
          '--cui-breadcrumb-divider': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`,
        } as React.CSSProperties
      }
    >
      <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
      <CBreadcrumbItem active>Library</CBreadcrumbItem>
    </CBreadcrumb>
  )
}
```

```scss
$breadcrumb-divider: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' 
width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E");
```

To remove dividers entirely, set the CSS custom property to an empty string or the Sass variable to `none`.

```html
import React from 'react'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

export const BreadcrumbDividers3Example = () => {
  return (
    <CBreadcrumb style={{ '--cui-breadcrumb-divider': '""' } as React.CSSProperties}>
      <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
      <CBreadcrumbItem active>Library</CBreadcrumbItem>
    </CBreadcrumb>
  )
}
```

```scss
$breadcrumb-divider: none;
```

## Accessibility

React Bootstrap Breadcrumbs are accessible by default. CoreUI adds `aria-label="breadcrumb"` to the navigation container and `aria-current="page"` to the active item to ensure proper screen reader behavior.

For best practices, refer to the [WAI-ARIA Authoring Practices: Breadcrumb Pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).

## API reference

Check the API reference below for full details on all available props for the Bootstrap-styled React Breadcrumb component.

- [&lt;CBreadcrumb /&gt;](../api/#cbreadcrumb)
- [&lt;CBreadcrumbItem /&gt;](../api/#cbreadcrumbitem)
