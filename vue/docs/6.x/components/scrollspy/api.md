# Vue Scrollspy Component API

> Explore the API reference for the Vue Scrollspy component and discover how to effectively utilize its props for customization.

## CScrollspy

```jsx
import { CScrollspy } from '@coreui/vue'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `container` | `HTMLElement \| null` | `null` | The scrollable element holding the sections. Bind a template ref; without it the viewport is the root. |
| `ids` | `string[]` | - | Ids of the sections to observe, in document order. |
| `rootMargin` | `string \| null` | `null` | Raw IntersectionObserver `rootMargin`. When set it takes precedence over `topMargin` and is passed straight to the observer. |
| `threshold` | `number[]` | `() => [0]` | Intersection observer thresholds. |
| `topMargin` | `string` | `'12%'` | Position of the activation line, measured from the top of the scroll root. The active section is the deepest one whose top has scrolled to or above it. Accepts a percentage (`12%`) or pixels (`96px`, e.g. below a sticky navbar). |

### Events

| Name | Description |
| --- | --- |
| `activate` | Callback fired when the active section changes. |
