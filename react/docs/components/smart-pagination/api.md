# React Smart Pagination Component API

> Explore the API reference for the React Smart Pagination component and discover how to effectively utilize its props for customization.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=react&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## CSmartPagination

```jsx
import { CSmartPagination } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activePage` | `number` | `1` | Current page number. |
| `align` | `"start" \| "center" \| "end"` | `start` | Horizontall align. |
| `arrows` | `boolean` | `true` | Show/hide arrows. |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `dots` | `boolean` | `true` | Show/hide dots. |
| `doubleArrows` | `boolean` | `true` | Show double arrows buttons. |
| `firstButton` | `ReactNode` | `<React.Fragment>&laquo;</React.Fragment>` | The content of `firstButton` button. |
| `lastButton` | `ReactNode` | `<React.Fragment>&raquo;</React.Fragment>` | The content of `lastButton` button. |
| `limit` | `number` | `5` | Maximum items number. |
| `nextButton` | `ReactNode` | `<React.Fragment>&rsaquo;</React.Fragment>` | The content of `nextButton` button. |
| `onActivePageChange` | `((activePage: number) => void)` | - | On active page change callback. |
| `pages` | `number` | - | Number of pages. |
| `previousButton` | `ReactNode` | `<React.Fragment>&lsaquo;</React.Fragment>` | The content of `previousButton` button. |
| `size` | `"sm" \| "lg"` | - | Size of pagination, valid values: 'sm', 'lg'. |
