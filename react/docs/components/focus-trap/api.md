# React Focus Trap Component API

> Explore the API reference for the React Focus Trap component and discover how to effectively utilize its props for accessibility compliance.

## CFocusTrap

```jsx
import { CFocusTrap } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | `true` | Controls whether the focus trap is active or inactive. When `true`, focus will be trapped within the child element. When `false`, normal focus behavior is restored. |
| `additionalContainer` | `RefObject<HTMLElement \| null>` | - | Additional container elements to include in the focus trap. Useful for floating elements like tooltips or popovers that are rendered outside the main container but should be part of the trap. |
| `children` | `ReactElement` | - | Single React element that renders a DOM node and forwards refs properly. The focus trap will be applied to this element and all its focusable descendants. Requirements: - Must be a single ReactElement (not an array or fragment) - Must forward the ref to a DOM element - Should contain focusable elements for proper trap behavior |
| `focusFirstElement` | `boolean` | `false` | Controls whether to focus the first selectable element or the container itself. When `true`, focuses the first tabbable element within the container. When `false`, focuses the container element directly. This is useful for containers that should receive focus themselves, such as scrollable regions or custom interactive components. |
| `onActivate` | `(() => void)` | - | Callback function invoked when the focus trap becomes active. Useful for triggering additional accessibility announcements or analytics. |
| `onDeactivate` | `(() => void)` | - | Callback function invoked when the focus trap is deactivated. Can be used for cleanup, analytics, or triggering state changes. |
| `restoreFocus` | `boolean` | `true` | Automatically restores focus to the previously focused element when the trap is deactivated. This is crucial for accessibility as it maintains the user's place in the document when returning from modal dialogs or overlay components. Recommended to be `true` for modal dialogs and popover components. |
