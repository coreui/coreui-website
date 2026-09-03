# Angular Select Component

> Angular Select directive. Customize the native select with custom CSS that changes initial element appearance.

## Examples

### Sizing
You may also choose from small and large custom selects to match our similarly sized text inputs.

### Select Multiple
The `multiple` attribute is also supported:

### Html Size
As is the html `size` property:

### Disabled
Add the `disabled` boolean attribute on a `select` to give it a grayed out appearance and remove pointer events.

## API reference
### Form Module

### cSelect
_directive_

```jsx
import { FormSelectDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `sizing` | `'' \| 'sm' \| 'lg'` | `undefined` | Size the component small or large. |
| `valid` | `boolean` | `undefined` | Set component validation state to valid. |
