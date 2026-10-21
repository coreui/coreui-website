# Vue Smart Pagination Component API

> Explore the API reference for the Vue Smart Pagination component and discover how to effectively utilize its props for customization.

## CSmartPagination

```jsx
import { CSmartPagination } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activePage` | `number` | `1` | Current page number |
| `align` | `string` | `'start'` | Horizontall align |
| `arrows` | `boolean` | `true` | Show/hide arrows |
| `dots` | `boolean` | `true` | Show/hide dots |
| `doubleArrows` | `boolean` | `true` | Show double arrows buttons |
| `firstButton` | `string \| VNode` | `'&laquo;'` | The content of the `firstButton` button. A string is rendered as HTML; pass a VNode to put an icon there instead. |
| `lastButton` | `string \| VNode` | `'&raquo;'` | The content of the `lastButton` button. A string is rendered as HTML; pass a VNode to put an icon there instead. |
| `limit` | `number` | `5` | Maximum items number |
| `nextButton` | `string \| VNode` | `'&rsaquo;'` | The content of the `nextButton` button. A string is rendered as HTML; pass a VNode to put an icon there instead. |
| `pages` | `number` | `1000` | Number of pages |
| `previousButton` | `string \| VNode` | `'&lsaquo;'` | The content of the `previousButton` button. A string is rendered as HTML; pass a VNode to put an icon there instead. |
| `size` | `string` | `undefined` | Size of pagination, valid values: 'sm', 'lg' |

### Events

| Name | Description |
| --- | --- |
| `activePageChange` | On active page change callback. |
