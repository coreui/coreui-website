# Angular Offcanvas Component

> Angular Offcanvas component allows to build hidden sidebars into your project for navigation, shopping carts, etc.

## Examples

### Live demo

Use the buttons below to show and hide an offcanvas component.

### Placement

There's no default placement for offcanvas components, so you must add one of the modifier props below;
- `placement="start"` places offcanvas on the left of the viewport (shown above)
- `placement="end"` places offcanvas on the right of the viewport
- `placement="top"` places offcanvas on the top of the viewport
- `placement="bottom"` places offcanvas on the bottom of the viewport

### Backdrop and Scroll

Scrolling the `body` element is disabled when an offcanvas and its backdrop are visible. Use the `scroll` property to toggle body scrolling and `backdrop` to toggle the backdrop.

### Static Backdrop

With `backdrop` prop set to `static`, the offcanvas will not close when clicking outside of it nor pressing `Esc`.

### Responsive

Responsive offcanvas hides the content outside the viewport below the specified breakpoint. Above that breakpoint, the content is displayed as usual.

### Dark offcanvas

With `.text-bg-dark` utility class you can change the appearance of your offcanvas component.

## Accessibility

Since the offcanvas panel is conceptually a modal dialog, be sure to add `aria-labelledby="..."` —referencing the offcanvas title— to `c-offcanvas`>. Note that you don’t need to add `role="dialog"` since we already add it automatically.

## API reference

### Offcanvas Module

```typescript
import { OffcanvasModule } from '@coreui/angular';

@NgModule({
    imports: [OffcanvasModule,]
})
export class AppModule() { }
```

### c-offcanvas
_component_

```jsx
import { OffcanvasComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaModal` | `boolean` | `true` | Set aria-modal html attr for offcanvas |
| `backdrop` | `boolean \| 'static'` | `true` | Apply a backdrop on the body while offcanvas is open. |
| `dark` | `boolean` | `false` | Add darker controls, indicators, and captions. |
| `id` | `string` | ``offcanvas-${this.placement()}-${nextId++}`` | Html id attribute, required for programmatic visibility change. |
| `keyboard` | `boolean` | `true` | Closes the offcanvas when the escape key is pressed |
| `placement` | `string` | `'start'` | Component placement |
| `responsive` | `boolean \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | `true` | Responsive offcanvas property hides content outside the viewport from a specified breakpoint and down. |
| `role` | `string` | `'dialog'` | Default role for offcanvas |
| `scroll` | `boolean` | `false` | Allow body scrolling while offcanvas is visible. |
| `visible` | `boolean` | `false` | Toggle the visibility of offcanvas component. |

### Events

| Name | Description |
| --- | --- |
| `visibleChange` | Event triggered on visible change. |

### c-offcanvas-body
_component_

### c-offcanvas-header
_component_

### cOffcanvasTitle
_directive_

### cOffcanvasToggle
_directive_

```jsx
import { OffcanvasToggleDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cOffcanvasToggle` | `string` | `undefined` | Html id attr of offcanvas to toggle. |
