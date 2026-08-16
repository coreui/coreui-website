# Vue Grid Component API

> Explore the API reference for the Vue Grid component and discover how to effectively utilize its props for customization.

## CContainer

```jsx
import { CContainer } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fluid` | `boolean` | - | Set container 100% wide, spanning the entire width of the viewport. |
| `lg` | `boolean` | - | Set container 100% wide until large breakpoint. |
| `md` | `boolean` | - | Set container 100% wide until medium breakpoint. |
| `sm` | `boolean` | - | Set container 100% wide until small breakpoint. |
| `xl` | `boolean` | - | Set container 100% wide until X-large breakpoint. |
| `xxl` | `boolean` | - | Set container 100% wide until XX-large breakpoint. |

## CRow

```jsx
import { CRow } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `lg` | `Object as () => BPObject` | - | The number of columns/offset/order on large devices (<1200px). |
| `md` | `Object as () => BPObject` | - | The number of columns/offset/order on medium devices (<992px). |
| `sm` | `Object as () => BPObject` | - | The number of columns/offset/order on small devices (<768px). |
| `xl` | `Object as () => BPObject` | - | The number of columns/offset/order on X-Large devices (<1400px). |
| `xs` | `Object as () => BPObject` | - | The number of columns/offset/order on extra small devices (<576px). |
| `xxl` | `Object as () => BPObject` | - | The number of columns/offset/order on XX-Large devices (≥1400px). |

## CCol

```jsx
import { CCol } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `lg` | `Col` | - | The number of columns/offset/order on large devices (<1200px). |
| `md` | `Col` | - | The number of columns/offset/order on medium devices (<992px). |
| `sm` | `Col` | - | The number of columns/offset/order on small devices (<768px). |
| `xl` | `Col` | - | The number of columns/offset/order on X-Large devices (<1400px). |
| `xs` | `Col` | - | The number of columns/offset/order on extra small devices (<576px). |
| `xxl` | `Col` | - | The number of columns/offset/order on XX-Large devices (≥1400px). |
