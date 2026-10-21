# React Scrollspy Component API

> Explore the API reference for the React Scrollspy component and discover how to effectively utilize its props for customization.

## CScrollspy

```jsx
import { CScrollspy } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode \| ((activeId: string \| null) => ReactNode)` | - | Render prop or plain children. The function form receives the id of the currently active section (without the `#`), or `null`. |
| `containerRef` | `RefObject<HTMLElement \| null>` | - | Ref to the scrollable container holding the sections. Defaults to the viewport. |
| `ids` | `string[]` | - | Ids of the sections to observe, in document order. |
| `onActivate` | `((id: string \| null) => void)` | - | Callback fired when the active section changes. |
| `rootMargin` | `string \| null` | - | Raw IntersectionObserver `rootMargin`. When set it takes precedence over `topMargin` and is passed straight to the observer. |
| `threshold` | `number[]` | `[0]` | Intersection observer thresholds. |
| `topMargin` | `string` | `12%` | Position of the activation line, measured from the top of the scroll root. The active section is the deepest one whose top has scrolled to or above it. Accepts a percentage (`12%`) or pixels (`96px`, e.g. below a sticky navbar). |
