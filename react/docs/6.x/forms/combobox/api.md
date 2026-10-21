# React Combobox Component API

> Explore the API reference for the React Combobox component to control its value, the panel, the search field and form submission.

## CCombobox

```jsx
import { CCombobox } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLabel` | `string` | - | Provides an accessible name for the options of the panel. |
| `ariaSearchLabel` | `string` | `Search options` | Provides an accessible name for the search field. |
| `caretIcon` | `ReactNode` | `( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"> <path d="M256 382.627 60.687 187.313l22.626-22.626L256 337.372l172.687-172.685 22.626 22.626z" /> </svg> )` | The caret drawn at the end of the toggle. Pass `false` to draw none. |
| `children` | `ReactNode` | - | The options, as `CListBoxOption` and `CListBoxSection` elements. Pass `items` instead to render them from data. |
| `className` | `string` | - | Adds custom classes to the React Combobox toggle. |
| `container` | `Element \| DocumentFragment \| (() => Element \| DocumentFragment \| null) \| null` | - | The element the panel is rendered into instead of `document.body`. Implies `portal`. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `defaultShow` | `boolean` | - | The initial open state of the uncontrolled panel — read once on mount. |
| `defaultValue` | `string \| string[] \| null` | - | The initial value for the uncontrolled mode. Ignored when `value` is set. |
| `disabled` | `boolean` | - | Turns the toggle off, so the panel cannot be opened. |
| `feedback` | `ReactNode` | - | Feedback for the current `validationState` — rendered only while the state is set, and styled after it. For the client-side mode, where the browser owns the state, use `feedbackValid` and `feedbackInvalid` instead. |
| `feedbackInvalid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is invalid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `feedbackValid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is valid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `floatingLabel` | `ReactNode` | - | Provide a floating label for the component — the text rests inside the field and floats once it has focus or a value. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `indicator` | `ListBoxIndicator` | `none` | Puts a mark in front of every option. `checkbox` renders the check the multi-value pickers use. |
| `items` | `ListBoxOption[]` | - | Renders the options from data instead of children. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `multiple` | `boolean` | `false` | Toggles options instead of replacing the selection, and keeps the panel open while the user picks. |
| `name` | `string` | - | Name of the hidden select the value is submitted under. With `multiple` it posts one key per value, as a `<select multiple>` does: `tags=a&tags=b&tags=c`. Without a name the combobox is not submitted with the form. |
| `onChange` | `((value: string \| string[] \| null) => void)` | - | Callback fired when the value changes. It reports an array in `multiple` mode, empty when nothing is selected; otherwise a string, or `null` once the single selection is cleared. |
| `onHide` | `(() => void)` | - | Callback fired when the panel closes. |
| `onSearch` | `((query: string) => void)` | - | Callback fired with the query of the search field, every time it changes. |
| `onSelectionLimit` | `((limit: number, value: string) => void)` | - | Callback fired when `selectionLimit` refuses a pick. It reports the limit and the value that did not fit. |
| `onShow` | `(() => void)` | - | Callback fired when the panel opens. |
| `onShowChange` | `((show: boolean) => void)` | - | Callback fired when a gesture asks the panel to open or to close. In controlled mode update `show` yourself, or the panel stays as it is. |
| `onValidationStateChange` | `((validationState: ValidationState \| undefined) => void)` | - | Callback fired with `undefined` when the user picks a different value, or the form is reset, while `validationState` is set. A given state is a verdict on the value it was given for; clear it here to let the browser's own validation show again. |
| `placeholder` | `ReactNode` | - | The text the toggle shows while nothing is selected. |
| `portal` | `boolean` | `false` | Renders the panel through a portal: into the open `<dialog>` the field sits in, otherwise into `document.body`. |
| `required` | `boolean` | - | Makes the hidden select that carries the value required, so an empty combobox blocks the submit. |
| `search` | `boolean \| "external"` | - | Puts a search field at the top of the panel and hides what does not match. `'external'` hides nothing and only reports the query through `onSearch`. |
| `searchNormalize` | `boolean` | - | Compares the query and the option labels without their diacritics, so `zoe` finds `Zoë`. |
| `searchPlaceholder` | `string` | `Search` | The placeholder of the search field. |
| `selectedLabel` | `CountLabel` | `'{count} selected'` | The text the toggle shows past one selected value in `multiple` mode. A function `(count, total) => string`, or a string in which `{count}` and `{total}` are replaced. |
| `selectionLimit` | `number` | - | The number of values `multiple` mode accepts. |
| `show` | `boolean` | - | The controlled open state of the panel. Pair it with `onShowChange`. |
| `size` | `"sm" \| "lg"` | - | Size the toggle small or large. |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `typeahead` | `boolean` | `true` | Move the highlight to the option matching what the user types. |
| `validationState` | `'valid' \| 'invalid' \| string` | - | The validation state, rendered as the `is-{state}` class on the toggle, with the matching feedback in the toggle's `aria-describedby`; `'invalid'` also blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. Picking a different value asks to drop it through `onValidationStateChange`. |
| `value` | `string \| string[] \| null` | - | The controlled value. Pair it with `onChange`; for the uncontrolled mode use `defaultValue` instead. |
