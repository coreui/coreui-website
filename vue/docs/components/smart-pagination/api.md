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
| `firstButton` | `string` | `'&laquo;'` | The content of 'firstButton' button |
| `lastButton` | `string` | `'&raquo;'` | The content of 'lastButton' button |
| `limit` | `number` | `5` | Maximum items number |
| `nextButton` | `string` | `'&rsaquo;'` | The content of 'nextButton' button |
| `pages` | `number` | `1000` | Number of pages |
| `previousButton` | `string` | `'&lsaquo;'` | The content of 'previousButton' button |
| `size` | `string` | `undefined` | Size of pagination, valid values: 'sm', 'lg' |

### Events

| Name | Description |
| --- | --- |
| `activePageChange` | On active page change callback. |
