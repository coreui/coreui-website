# Angular Smart Pagination Component

> Documentation and examples for showing Angular smart pagination to indicate a series of related content exists across multiple pages.

## Overview

Angular smart pagination component consists of button-like styled links, that are arranged side by side in a
horizontal list.

We use a large block of connected links for our pagination, making links hard to miss and easily scalable — all while
providing large hit areas. SmartPagination is built with list HTML elements so screen readers can announce the
number of available links. SmartPagination also role="navigation" to identify it as a navigation section
to screen readers and other assistive technologies.

In addition, as pages likely have more than one such navigation section, SmartPagination provide a descriptive
aria-label.

## Features

- Determine behavior, style and functionality of pagination
- Smart automatic items generation

## Examples

### Working with icons

Looking to use an icon or symbol in place of text for some pagination links? SmartPagination will provide screen
reader support for 'firstButton', 'previousButton', 'nextButton' and 'lastButton'.

### Sizing

Fancy larger or smaller pagination? Add <code>size="lg"</code> or <code>size="sm"</code> for additional sizes.

### Alignment

Change the alignment of pagination components with <code>align="start"</code>, <code>align="center"</code> or <code>align="end"</code> [flexbox utilities](https://coreui.io/docs/utilities/flex/).

## API

### SmartPagination Module

```typescript
import { SmartPaginationModule } from '@coreui/angular';

@NgModule({
        imports: [SmartPaginationModule,]
})
export class AppModule() { }
```

### c-smart-pagination
_component_

```jsx
import { SmartPaginationComponent } from '@coreui/angular-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activePage` | `number` | `1` | Current page number. |
| `align` | `'' \| 'start' \| 'center' \| 'end'` | `'start'` | Set the alignment of pagination components. |
| `arrows` | `boolean` | `true` | Show/hide arrows |
| `dots` | `boolean` | `true` | Show/hide dots. |
| `doubleArrows` | `boolean` | `true` | Show double arrows buttons |
| `firstButton` | `string \| TemplateRef<any>` | `'«'` | The content of 'firstButton' button. |
| `lastButton` | `string \| TemplateRef<any>` | `'»'` | The content of 'lastButton' button. |
| `limit` | `number` | `5` | Maximum items number. |
| `nextButton` | `string \| TemplateRef<any>` | `'›'` | The content of 'nextButton' button. |
| `pages` | `number` | `1` | Number of pages. |
| `previousButton` | `string \| TemplateRef<any>` | `'‹'` | The content of 'previousButton' button. |
| `role` | `string` | `'navigation'` | Default role for pagination. |
| `size` | `'' \| 'sm' \| 'lg'` | - | Size the component small or large. |

### Events

| Name | Description |
| --- | --- |
| `activePageChange` | Event triggered on activePage change. |
