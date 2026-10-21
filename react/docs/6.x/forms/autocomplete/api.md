# React Autocomplete Component API

> Explore the API reference for the React Autocomplete component and discover how to effectively utilize its props for customization.

## CAutocomplete

```jsx
import { CAutocomplete } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowOnlyDefinedOptions` | `boolean` | `false` | Only allow selection of predefined options. When `true`, users cannot enter custom values that are not in the options list. When `false`, users can enter and select custom values. |
| `ariaCleanerLabel` | `string` | `Clear selection` | Sets the accessible label (`aria-label`) for the cleaner button, describing its action for screen readers. |
| `ariaPickerLabel` | `string` | `Toggle options list` | Sets the accessible label (`aria-label`) for the indicator button that toggles the options list. |
| `className` | `string` | - | A string of all className you want applied to the base component. These classes will be merged with the default React autocomplete classes. |
| `cleaner` | `boolean` | `false` | Enables the cleaner: a button that empties the field, the selection and the text. It shows when an option is selected and, unless `allowOnlyDefinedOptions` is set, when the field holds text, never while the component is disabled or read-only. With `value` set, the field empties once you take the `null` it reports. It stays out of the Tab order and gives the focus back to the field. |
| `clearSearchOnSelect` | `boolean` | `true` | Whether a pick, or <kbd>Enter</kbd> on text that names no option, empties the search the options are filtered by, so the list opens in full next time. The field shows the picked option's label either way. |
| `container` | `Element \| DocumentFragment \| (() => Element \| DocumentFragment \| null) \| null` | - | The element the dropdown is rendered into instead of `document.body`. Implies `portal`. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `defaultInputValue` | `string` | - | The text the field starts with and goes back to on a form reset, for example a value the user typed earlier without picking an option. It filters the options like typed text, without a hint. A selected option writes its label over it. Ignored when `inputValue` is set. |
| `defaultShow` | `boolean` | - | The initial open state of the uncontrolled dropdown panel — read once on mount. |
| `defaultValue` | `string \| number` | - | The initial selection for the uncontrolled mode: the value of the option to select, compared as text, so `1` and `'1'` select the same option. It is applied as soon as the options contain it, unless the user has picked, typed or cleared by then. Ignored when `value` is set. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. When `true`, the React.js autocomplete is non-interactive and appears visually disabled. Users cannot type, select options, or trigger the dropdown. |
| `feedback` | `ReactNode` | - | Feedback for the current `validationState` — rendered only while the state is set, and styled after it. For the client-side mode, where the browser owns the state, use `feedbackValid` and `feedbackInvalid` instead. |
| `feedbackInvalid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is invalid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `feedbackValid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is valid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `floatingLabel` | `ReactNode` | - | Provide a floating label for the component — the text rests inside the field and floats once it has focus or a value. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `globalSearch` | `boolean` | `true` | Routes typing to the field from anywhere in the component, so a keystroke never depends on where the focus sits. Set to `false` to keep it local: a keystroke then counts only while the field has the focus. |
| `highlightOptionsOnSearch` | `boolean` | `false` | Highlight options that match the search criteria. When `true`, matching portions of option labels are visually highlighted based on the current search input value. |
| `id` | `string` | - | Set the id attribute for the native input element. This id is used for accessibility purposes and form associations. If not provided, a unique id may be generated automatically. |
| `inputValue` | `string` | - | The controlled text of the field. The field shows this text and nothing else: typing, a pick and the cleaner ask for a new text through `onInputChange`, so update `inputValue` there. A text that is not the selected option's label filters the options like typed text. When `value` is set as well, a `value` you change leaves the text alone: set both. |
| `invalid` | `boolean` | - | Mark the control invalid. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `loading` | `boolean` | - | When set, the options list is marked busy and shows a row with a spinner and `loadingLabel` below its options while you fetch them; the options it shows can still be picked. |
| `loadingLabel` | `string` | `Loading…` | Text of the loading row below the options, announced to screen readers when the shown list starts loading or the list shows up loading. |
| `name` | `string` | - | Name of the text input the form posts. That input holds what the user sees, the selected option's label or their own text when `allowOnlyDefinedOptions` is off, so `{ value: 'ng', label: 'Angular' }` posts `Angular`, not `ng`. Without a name the autocomplete is not submitted with the form. |
| `onChange` | `((option: Option \| null) => void)` | - | Execute a function when the selected option changes. Called with the option, or `null` when the selection is cleared. Text the user types without picking an option is not a selection: read it from `onInputChange`. |
| `onHide` | `(() => void)` | - | The callback is fired when the dropdown requests to be hidden. Called when the dropdown closes due to user interaction, clicks outside, escape key, or programmatic changes. |
| `onInput` | `((value: string) => void)` | - | Execute a function when the search changes, the text the options are filtered by: as the user types, and with an empty string when the autocomplete empties it, for example after a pick or with the cleaner. Use it for external search; the text of the field comes through `onInputChange`. |
| `onInputChange` | `((value: string) => void)` | - | Execute a function when the text of the field changes: as the user types, after a pick (the option's label), with the cleaner, on a form reset, and when the selection changes from outside. Pair it with `inputValue`. |
| `onShow` | `(() => void)` | - | The callback is fired when the dropdown requests to be shown. Called when the dropdown opens due to user interaction, focus, or programmatic changes. |
| `onShowChange` | `((show: boolean) => void)` | - | Callback fired when the dropdown panel requests an open-state change — a dismiss gesture (Escape, outside click, option pick) or, in uncontrolled mode, any internal toggle. In controlled mode update `show` yourself, or the panel stays as it is. |
| `onValidationStateChange` | `((validationState: ValidationState \| undefined) => void)` | - | Callback fired with `undefined` when the user changes the text of the field, or the form is reset, while `validationState` (or `invalid`/`valid`) is set. A given state is a verdict on the value it was given for; clear it here to let the browser's own validation show again. |
| `options` | `(Option \| OptionsGroup)[]` | - | List of option elements. Can contain Option objects, OptionsGroup objects, or plain strings. Plain strings are converted to simple Option objects internally. This is a required prop - the React autocomplete needs options to function. |
| `optionsGroupsTemplate` | `((option: OptionsGroup) => ReactNode)` | - | Custom template for rendering option groups. Allows customization of how option group headers appear in the dropdown. The function receives an OptionsGroup object and should return a ReactNode. |
| `optionsMaxHeight` | `string \| number` | `auto` | Sets maxHeight of options list. Controls the maximum height of the dropdown options container. Can be a number (pixels) or a CSS length string (e.g., '200px', '10rem'). When content exceeds this height, a scrollbar will appear. |
| `optionsTemplate` | `((option: Option) => ReactNode)` | - | Custom template for rendering individual options. Allows complete customization of how each option appears in the dropdown. The function receives an Option object and should return a ReactNode. |
| `pickerIcon` | `ReactNode` | `false` | The button that opens the options menu: `true` for the built-in icon, a node for your own, `false` for no button. When `true`, displays a dropdown arrow button that can be clicked to manually show or hide the options dropdown. |
| `placeholder` | `string` | - | Specifies a short hint that is visible in the search input. Displayed when the input is empty to guide user interaction. Standard HTML input placeholder behavior. |
| `portal` | `boolean` | `false` | Renders the autocomplete dropdown in a React portal, allowing it to escape the parent container's styling constraints (like overflow, z-index, or positioning). When enabled, the dropdown is rendered into the open `<dialog>` the field sits in, otherwise into `document.body`, so it appears above other page elements and isn't clipped by parent containers. |
| `readOnly` | `boolean` | - | Toggle the readonly state for the component. When `true`, users can view and interact with the dropdown but cannot type in the search input or modify the selection through typing. Selection via clicking options may still be possible. |
| `required` | `boolean` | - | When it is present, it indicates that the user must choose a value before submitting the form. Adds HTML5 form validation requirement. The form will not submit until a valid selection is made. |
| `resetSelectionOnOptionsChange` | `boolean` | `false` | Determines whether the selected options should be cleared when the options list is updated. When `true`, any previously selected options will be reset whenever the options list undergoes a change. This ensures that outdated selections are not retained when new options are provided. |
| `search` | `"external"` | - | `'external'` hands the filtering to your code: the component shows the options you pass and reports what the user types through `onInput`. |
| `searchNoResultsLabel` | `ReactNode` | `false` | Sets the label for no results when filtering. - `false`: Don't show any message when no results found - `true`: Show default "No results found" message - `string`: Show custom text message - `ReactNode`: Show custom component/element |
| `show` | `boolean` | - | Control the open state of the dropdown panel. When set, the panel renders what `show` says and dismiss gestures only call `onShowChange` — nothing closes until the parent flips the prop. |
| `showHints` | `boolean` | `false` | Show hint options based on the current input value. When `true`, displays a preview/hint of the first matching option as semi-transparent text in the input field, similar to browser autocomplete. Only text the user types gets a hint. |
| `size` | `"sm" \| "lg"` | - | Size the component small or large. - `'sm'`: Small size variant - `'lg'`: Large size variant - `undefined`: Default/medium size |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean` | - | Mark the control valid. |
| `validationState` | `'valid' \| 'invalid' \| string` | - | The validation state, rendered as the `is-{state}` class on the frame; `'invalid'` also sets `aria-invalid` on the input and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. The user's next change of the text asks to drop it through `onValidationStateChange`. |
| `value` | `string \| number \| null` | - | The controlled selection: the value of the selected option, or `null` (an empty string too) for none. It is matched against the option values compared as text, so `1` and `'1'` select the same option, and the field keeps the label of a selected option that leaves `options`. Pair it with `onChange`; for the uncontrolled mode use `defaultValue` instead. |
| `virtualScroller` | `boolean` | `false` | Enable virtual scroller for the options list. When `true`, only visible options are rendered in the DOM for better performance with large option lists. Works in conjunction with `visibleItems` prop. |
| `visible` | `boolean` | - | Toggle the visibility of autocomplete dropdown. Controls whether the dropdown is initially visible. The dropdown visibility can still be toggled through user interaction. |
| `visibleItems` | `number` | `10` | Amount of visible items when virtualScroller is enabled. Determines how many option items are rendered at once when virtual scrolling is active. Higher values show more items but use more memory. Lower values improve performance. |
