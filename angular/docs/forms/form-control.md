# Angular Form Control Components

> Angular input and textarea components. Give textual form controls like input and textarea an upgrade with custom styles, sizing, focus states, and more.

## Example

### Sizing
Set heights using `size` property like `sizing="lg"` and `sizing="sm"`.

### Disabled
Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

### Readonly
Add the `readonly` boolean attribute on an input to prevent modification of the input's value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.

### Readonly plain text
If you want to have `input readonly` elements in your form styled as plain text, use the `plaintext` boolean property to remove the default form field styling and preserve the correct margin and padding.

### File input

### Color

## API reference

### Form Module

### cFormControl
_directive_

Works with `input` and `textarea` html tags.

```jsx
import { FormControlDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `plaintext` | `boolean` | `false` | Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use alongside `readonly` |
| `sizing` | `'' \| 'sm' \| 'lg'` | `undefined` | Size the component small or large. |
| `type` | `Omit<InputType, 'checkbox' \| 'radio'>` | `'text'` | Specifies the type of input element. |
| `valid` | `boolean` | `undefined` | Set component validation state to valid. |

### cLabel
_directive_

```jsx
import { FormLabelDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cLabel` | `'' \| 'col'` | `''` | For horizontal forms set labels to 'col' and make them vertically centered with their associated form controls. |
| `sizing` | `'' \| 'sm' \| 'lg'` | `undefined` | Size the label small or large. |
