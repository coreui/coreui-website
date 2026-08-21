# Angular Close Button Component

> A generic Angular close button directive for dismissing content like modals and alerts.

## Examples

### Basic
Provide an option to dismiss or close a component with `cCloseButton`. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default background-image.

### Disabled
Disabled close buttons change their `opacity`. We've also applied `pointer-events: none` and `user-select: none` to preventing hover and active states from triggering.

### White variant
Change the default `cCloseButton` to be white with the `white` boolean property.

### Sizing
Provide default, `lg` and `sm` size.

## API reference

### ButtonModule

```typescript
import { ButtonModule } from '@coreui/angular';

@NgModule({
    imports: [ButtonModule,]
})
export class AppModule() { }
```

### cButtonClose
_directive_

```jsx
import { ButtonCloseDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | `false` | Toggle the active state for the component |
| `color` | `string` | `'primary'` | Sets the color context of the component to one of CoreUI’s themed colors |
| `dark` | `boolean` | `false` | Add darker controls, indicators, and captions. |
| `disabled` | `boolean` | `false` | Toggle the disabled state for the component. |
| `shape` | `string` | - | Select the shape of the component. |
| `size` | `string` | `''` | Size the component small or large. |
| `tabindex` | `number` | `undefined` | The tabindex attribute specifies the tab order of an element (when the "tab" button is used for navigating). |
| `type` | `ButtonType` | `'button'` | Specifies the type of button. Always specify the type attribute for the `<button>` element. Different browsers may use different default types for the `<button>` element. |
| `variant` | `'ghost' \| 'outline'` | - | Set the button variant to an outlined button or a ghost button. |
| `white` | `boolean` | `false` | Change the default color to white. |
