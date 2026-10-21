# React Rating Component API

> Explore the API reference for the React Rating component and discover how to effectively utilize its props for customization.

## CRating

```jsx
import { CRating } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeIcon` | `string \| Element \| Icon` | - | The default icon to display when the item is selected. |
| `allowClear` | `boolean` | - | Enables the clearing upon clicking the selected item again. |
| `ariaLabel` | `((value: number, itemCount: number) => string)` | `(value, itemCount) => `${value} of ${itemCount}`` | A function that returns the accessible label (`aria-label`) for each rating item's radio input. Receives the item's value and the total item count. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `defaultValue` | `number` | - | The initial value of an uncontrolled rating — read once on mount. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `highlightOnlySelected` | `boolean` | - | If enabled, only the currently selected icon will be visibly highlighted. |
| `icon` | `string \| Element \| Icon` | - | The default icon to display when the item is not selected. |
| `itemCount` | `number` | `5` | Specifies the total number of stars to be displayed in the star rating component. This property determines the scale of the rating, such as out of 5 stars, 10 stars, etc. |
| `name` | `string` | - | Name shared by the radio inputs. Radios need one name to work as a single group, so the component generates one when you leave it out, and the value then reaches the form under a generated key that is different on every render. Name it to decide that key yourself, and give each rating on the page its own name: two ratings sharing one become a single group, so picking a star in one clears the other and the form carries a single value. A rating with nothing selected submits nothing either way, and a read-only one uses only the name you give it, so without one it submits nothing. |
| `onChange` | `((value: number \| null) => void)` | - | Execute a function when a user changes the selected element. |
| `onHover` | `((value: number \| null) => void)` | - | Execute a function when a user hover the element. |
| `onValidationStateChange` | `((validationState: ValidationState \| undefined) => void)` | - | Callback fired with `undefined` when the user picks or clears a star, or the form is reset, while `validationState` is set. A given state is a verdict on the value it was given for; clear it here to let the state the browser reports for a required rating show again. |
| `precision` | `number` | `1` | Minimum increment value change allowed. |
| `readOnly` | `boolean` | - | Makes the rating read-only: the value cannot be changed and only the checked star takes focus, or the first star while no star is checked. The value is submitted under `name`, and not at all without one. |
| `required` | `boolean` | - | Makes every radio required, so the form is not submitted while no star is picked, and sets `aria-required` on the rating. A read-only rating is never required. |
| `size` | `"sm" \| "lg" \| "custom"` | - | Size the component small, large, or custom if you define custom icons with custom height. |
| `tooltips` | `boolean \| string[]` | - | Enable tooltips with default values or set specific labels for each icon. A read-only rating shows none. |
| `validationState` | `'valid' \| 'invalid' \| string` | - | The validation state, rendered as the `is-{state}` class on the rating; `'invalid'` also sets `aria-invalid` on the rating and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next pick of a star asks to drop it through `onValidationStateChange`. |
| `value` | `number` | - | The `value` attribute of component. When set, the component operates in a controlled mode: update the value yourself from `onChange`, or the rendered rating stays as it is. |
