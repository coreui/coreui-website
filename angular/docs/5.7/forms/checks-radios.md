# Angular 'Checkbox, Radio & Switch Component

> Create consistent cross-browser and cross-device checkboxes and radios with our Angular checkbox, radio, and switch components.

## Approach
Browser default checkboxes and radios are replaced with the help of `c-form-check`. Checkboxes are for selecting one
or several options in a list, while radios are for selecting one option from many.

## Checkbox

### Indeterminate
Checkboxes can utilize the `:indeterminate` pseudo-class when manually set via `indeterminate` property.

### Disabled checkbox
Add the `disabled` attribute and the associated `cFormCheckLabel` is automatically styled to match with a lighter color
to help indicate the input's state.

## Radio button

### Radios in forms

### Disabled radio button
Add the `disabled` attribute and the associated `cFormCheckLabel` is automatically styled to match with a lighter
color to help indicate the input's state.

## Switch
A switch has the markup of a custom checkbox but uses the `switch` boolean properly to render a toggle switch.
Switches also support the `disabled` attribute.

### Switch size

### Switches in forms

## Layout
### Default (stacked)

### Inline
Group checkboxes or radios on the same horizontal row by adding `inline` boolean property to any c-form-check`.

### Without labels
Remember to still provide some form of accessible name for assistive technologies (for instance, using `aria-label`).

## Toggle buttons
Create button-like checkboxes and radio buttons by using button boolean property on the `c-form-check` component.
These toggle buttons can further be grouped in a button group if needed.
### Checkbox toggle buttons

### Radio toggle buttons

### Outlined styles
Different variants of button, such at the various outlined styles, are supported.

## API reference

### Form Module

### c-form-check
_component_

```jsx
import { FormCheckComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `inline` | `boolean` | `false` | Group checkboxes or radios on the same horizontal row. |
| `reverse` | `boolean` | `false` | Put checkboxes or radios on the opposite side. |
| `sizing` | `string` | `undefined` | Size the component large or extra large. Works only with `[switch]="true"` |
| `switch` | `boolean` | `false` | Render a toggle switch on for checkbox. |

### cFormCheckInput
_directive_

```jsx
import { FormCheckInputDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `indeterminate` | `boolean` | `false` | Set component indeterminate state. |
| `type` | `'checkbox' \| 'radio'` | `'checkbox'` | Specifies the type of component. |
| `valid` | `boolean` | `undefined` | Set component validation state to valid. |

### cFormCheckLabel
_directive_
