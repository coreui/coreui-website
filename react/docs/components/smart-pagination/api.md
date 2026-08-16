# React Smart Pagination Component API

> Explore the API reference for the React Smart Pagination component and discover how to effectively utilize its props for customization.

## CSmartPagination

```jsx
import { CSmartPagination } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activePage` | `number \| undefined` | `1` | Current page number. |
| `align` | `"start" \| "center" \| "end" \| undefined` | `start` | Horizontall align. |
| `arrows` | `boolean \| undefined` | `true` | Show/hide arrows. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
| `dots` | `boolean \| undefined` | `true` | Show/hide dots. |
| `doubleArrows` | `boolean \| undefined` | `true` | Show double arrows buttons. |
| `firstButton` | `ReactNode` | `<React.Fragment>&laquo;</React.Fragment>` | The content of `firstButton` button. |
| `lastButton` | `ReactNode` | `<React.Fragment>&raquo;</React.Fragment>` | The content of `lastButton` button. |
| `limit` | `number \| undefined` | `5` | Maximum items number. |
| `nextButton` | `ReactNode` | `<React.Fragment>&rsaquo;</React.Fragment>` | The content of `nextButton` button. |
| `onActivePageChange` | `((activePage: number) => void) \| undefined` | - | On active page change callback. |
| `pages` | `number` | - | Number of pages. |
| `previousButton` | `ReactNode` | `<React.Fragment>&lsaquo;</React.Fragment>` | The content of `previousButton` button. |
| `size` | `"sm" \| "lg" \| undefined` | - | Size of pagination, valid values: 'sm', 'lg'. |
