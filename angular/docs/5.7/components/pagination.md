# Angular Pagination Component

> Documentation and examples for showing Angular pagination to indicate a series of related content exists across multiple pages.

## Overview

We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive `aria-label` for the `<nav>` to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be `aria-label="Search results pages"`.

## Working with icons

Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with `aria` attributes.

## Disabled and active states

Pagination links are customizable for different circumstances. Use `disabled` for links that appear un-clickable and `.active` to indicate the current page.

While the `disabled` prop uses `pointer-events: none` to _try_ to disable the link functionality of `<a>`s, that CSS property is not yet standardized and doesn't account for keyboard navigation. As such, we always add `tabindex="-1"` on disabled links and use custom JavaScript to fully disable their functionality.

You can optionally swap out active or disabled anchors for `<span>`, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.

## Sizing

Fancy larger or smaller pagination? Add `size="lg"` or `size="sm"` for additional sizes.

## Alignment

Change the alignment of pagination components with [flexbox utilities](https://coreui.io/docs/utilities/flex/).

## API

### Pagination Module

```typescript
import { PaginationModule } from '@coreui/angular';

@NgModule({
  imports: [PaginationModule,]
})
export class AppModule(){}
```

### c-pagination
_component_

| name | description | type | default |
| ---- | ----------- | ---- | ------- |
| `align` | Set the alignment of pagination components. | ``""`` \| ``"start"`` \| ``"end"`` \| ``"center"`` | `''` |
| `role` | Default role for pagination. | `string` | `'navigation'` |
| `size` | Size the component small or large. | ``"sm"`` \| ``"lg"`` |  |

### c-page-item
_component_

### cPageItem
_directive_

```jsx
import { PageItemDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | - | Toggle the active state for the component. |
| `disabled` | `boolean` | `false` | Toggle the disabled state for the component. |

### c-page-link
_directive_
