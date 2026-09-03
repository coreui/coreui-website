# Angular Loading Button Component

> Angular Buttons with built-in loading indicators. Indicate the loading state of the button bridging the gap between action and feedback.

## Examples

Cancellable on click by default.

### Border (default spinner)

### Grow

### Disabled on loading

Non cancellable on click.

## API reference

### LoadingButton Module

```typescript
import { LoadingButtonModule } from '@coreui/angular';

@NgModule({
  imports: [LoadingButtonModule,]
})
export class AppModule() { }
```

### cLoadingButton
_component_

```jsx
import { LoadingButtonComponent } from '@coreui/angular-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | `false` | Toggle the active state for the component |
| `color` | `string` | `'primary'` | Sets the color context of the component to one of CoreUI’s themed colors |
| `disabled` | `boolean` | `false` | Toggle the disabled state for the component. |
| `disabledOnLoading` | `boolean` | `false` | Makes a button disabled when loading. |
| `loading` | `boolean` | `false` | Loading state (set to true to start animation). |
| `shape` | `string` | - | Select the shape of the component. |
| `size` | `'' \| 'sm' \| 'lg'` | `''` | Size the component small or large. |
| `spinnerType` | `'border' \| 'grow'` | `'border'` | Sets a type of spinner. |
| `tabindex` | `number` | `undefined` | The tabindex attribute specifies the tab order of an element (when the "tab" button is used for navigating). |
| `type` | `ButtonType` | `'button'` | Specifies the type of button. Always specify the type attribute for the `<button>` element. Different browsers may use different default types for the `<button>` element. |
| `variant` | `'ghost' \| 'outline'` | - | Set the button variant to an outlined button or a ghost button. |

### Events

| Name | Description |
| --- | --- |
| `loadingChange` | Event emitted on loading change |
