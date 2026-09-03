# Angular Toast Component

> Push notifications to your visitors with an Angular toast, a lightweight and easily customizable alert message.

## Overview

Angular toasts are lightweight notifications designed to mimic the push notifications that have been popularized by
mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position.

Things to know when using the toast plugin:

- Toasts are opt-in for performance reasons, so you must initialize them yourself.
- Toasts will automatically hide if you do not specify `autohide: false`.

## Examples

### Basic toast

To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use `display: flex`,
allowing easy alignment of content thanks to our margin and flexbox utilities.

Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to
contain your "toasted" content and strongly encourage a dismiss button.

### Translucent

Toasts are slightly translucent to blend in with what's below them.

### Stacking

You can stack toasts by wrapping them in a `c-toaster` container, which will vertically add some spacing.

### Custom content

Customize your toasts by removing sub-components, tweaking them with utilities, or by adding your own markup. Here
we've created a simpler toast by removing the default `c-toast-header`, adding a `cButtonClose`, and
using some flexbox utilities to adjust the layout.

Alternatively, you can also add additional controls and components to toasts.

### Color schemes

Building on the above example, you can create different toast color schemes with our color and background utilities.
Here we've set `color="primary"` and added `.text-white` class to the `c-toast`, and then set white property to our
close
button. For a crisp edge, we remove the default border with `.border-0`.

### Placement

Place toasts where need them to show. The top right or top middle is often used for notifications.

## API reference

### Toast Module

```typescript
import { ToastModule } from '@coreui/angular';

@NgModule({
    imports: [ToastModule,]
})
export class AppModule() { }
```

### c-toast
_component_

`exportAs: cToast`

```jsx
import { ToastComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autohide` | `boolean` | `true` | Auto hide the toast. |
| `color` | `string` | `''` | Sets the color context of the component to one of CoreUI’s themed colors. |
| `delay` | `number` | `5000` | Delay hiding the toast (ms). |
| `dynamic` | `boolean` | - | Marks the toast as dynamically created by `ToasterService`, rather than declared in the template. |
| `fade` | `boolean` | `true` | Apply fade transition to the toast. |
| `placement` | `string` | `undefined` | Placement of the toast within its toaster, set by `ToasterComponent`. |
| `role` | `string` | `'alert'` | ARIA role attribute. |
| `visible` | `boolean` | `false` | Toggle the visibility of component. |

### Events

| Name | Description |
| --- | --- |
| `timer` | Event emitted on timer tick |
| `visibleChange` | Event emitted on visibility change |

### c-toast-body
_component_

`exportAs: cToastBody`

```jsx
import { ToastBodyComponent } from '@coreui/angular'
```

### c-toast-content
_component_

```jsx
import { ToastContentComponent } from '@coreui/angular'
```

### c-toast-header
_component_

`exportAs: cToastHeader`

```jsx
import { ToastHeaderComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `closeButton` | `boolean` | `true` | Add close button to a toast header |

### c-toaster
_component_

`exportAs: cToaster`

```jsx
import { ToasterComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `placement` | `string` | `ToasterPlacement.TopEnd` | Toaster placement |
| `position` | `string` | `'absolute'` | Toaster position |

### cToastClose
_directive_

`exportAs: cToastClose`

```jsx
import { ToastCloseDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cToastClose` | `ToastComponent` | - | Toast to close. |
