# Vue Grid Component API

> Explore the API reference for the Vue Grid component and discover how to effectively utilize its props for customization.

## CContainer

```jsx
import { CContainer } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `2xl` | `boolean` | - | Set container 100% wide until XX-large breakpoint. Renamed from `xxl`. |
| `fluid` | `boolean` | - | Set container 100% wide, spanning the entire width of the viewport. |
| `lg` | `boolean` | - | Set container 100% wide until large breakpoint. |
| `md` | `boolean` | - | Set container 100% wide until medium breakpoint. |
| `sm` | `boolean` | - | Set container 100% wide until small breakpoint. |
| `xl` | `boolean` | - | Set container 100% wide until X-large breakpoint. |

## CRow

```jsx
import { CRow } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `2xl` | `Object as () => BPObject` | - | The number of columns/offset/order on XX-Large devices (≥1536px). Renamed from `xxl`. |
| `lg` | `Object as () => BPObject` | - | The number of columns/offset/order on large devices (<1280px). |
| `md` | `Object as () => BPObject` | - | The number of columns/offset/order on medium devices (<1024px). |
| `sm` | `Object as () => BPObject` | - | The number of columns/offset/order on small devices (<768px). |
| `xl` | `Object as () => BPObject` | - | The number of columns/offset/order on X-Large devices (<1536px). |
| `xs` | `Object as () => BPObject` | - | The number of columns/offset/order on extra small devices (<576px). |

## CCol

```jsx
import { CCol } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `2xl` | `Col` | - | The number of columns/offset/order on XX-Large devices (≥1536px). Renamed from `xxl`. |
| `lg` | `Col` | - | The number of columns/offset/order on large devices (<1280px). |
| `md` | `Col` | - | The number of columns/offset/order on medium devices (<1024px). |
| `sm` | `Col` | - | The number of columns/offset/order on small devices (<768px). |
| `xl` | `Col` | - | The number of columns/offset/order on X-Large devices (<1536px). |
| `xs` | `Col` | - | The number of columns/offset/order on extra small devices (<576px). |
