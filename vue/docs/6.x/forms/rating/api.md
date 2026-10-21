# Vue Rating Component API

> Explore the API reference for the Vue Rating component and discover how to effectively utilize its props for customization.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=vue&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## CRating

```jsx
import { CRating } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowClear` | `boolean` | - | Enables the clearing upon clicking the selected item again. |
| `ariaLabel` | `(value: number, itemCount: number) => string` | `(value: number, itemCount: number) => `${value} of ${itemCount}`` | A function that returns the accessible label (`aria-label`) for each rating item's radio input. Receives the item's value and the total item count. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `highlightOnlySelected` | `boolean` | - | If enabled, only the currently selected icon will be visibly highlighted. |
| `itemCount` | `number` | `5` | Specifies the total number of stars to be displayed in the star rating component. This property determines the scale of the rating, such as out of 5 stars, 10 stars, etc. |
| `modelValue` | `number` | - | The rating's value, bound with `v-model`. |
| `name` | `string` | - | Name shared by the radio inputs. Radios need one name to work as a single group, so the component generates one when you leave it out, and the value then reaches the form under a generated key that is different on every render. Name it to decide that key yourself, and give each rating on the page its own name: two ratings sharing one become a single group, so picking a star in one clears the other and the form carries a single value. A rating with nothing selected submits nothing either way, and a read-only one uses only the name you give it, so without one it submits nothing. |
| `precision` | `number` | `1` | Minimum increment value change allowed. |
| `readOnly` | `boolean` | - | Makes the rating read-only: the value cannot be changed and only the checked star takes focus, or the first star while no star is checked. The value is submitted under `name`, and not at all without one. |
| `required` | `boolean` | - | Makes every radio required, so the form is not submitted while no star is picked, and sets `aria-required` on the rating. A read-only rating is never required. |
| `size` | `string` | - | Size the component small, large, or custom if you define custom icons with custom height. |
| `tooltips` | `boolean \| string[]` | - | Enable tooltips with default values or set specific labels for each icon. A read-only rating shows none. |
| `validationState` | `string` | - | The validation state, rendered as the `is-{state}` class on the rating; `'invalid'` also sets `aria-invalid` on the rating and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next pick of a star emits `update:validationState` with `undefined`. |
| `value` | `number` | - | The rating's value when `modelValue` isn't set — tracked reactively until a click or `modelValue` takes over. |

### Events

| Name | Description |
| --- | --- |
| `change` | Execute a function when a user changes the selected element. |
| `hover` | Execute a function when a user hover the element. |
| `update:modelValue` | Emit the new value whenever there’s a change event. |
| `update:validationState` | Event occurs with `undefined` when the user picks or clears a star, or the form is reset, while `validationState` is set. A given state is a verdict on the value it was given for; bind it with `v-model:validation-state` to drop it and let the state the browser reports for a required rating show again. |
