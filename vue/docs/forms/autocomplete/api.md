# Vue Autocomplete Component API

> Explore the API reference for the Vue Autocomplete component and discover how to effectively utilize its props for customization.

## CAutocomplete

```jsx
import { CAutocomplete } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowOnlyDefinedOptions` | `boolean` | `false` | Only allow selection of predefined options. When `true`, users cannot enter custom values that are not in the options list. When `false`, users can enter and select custom values. |
| `ariaCleanerLabel` | `string` | `'Clear selection'` | Sets the accessible label (`aria-label`) for the cleaner button, describing its action for screen readers. |
| `ariaIndicatorLabel` | `string` | `'Toggle visibility of options menu'` | Sets the accessible label (`aria-label`) for the indicator button that toggles the options menu. |
| `cleaner` | `boolean` | `false` | Enables selection cleaner element. When `true`, displays a clear button that allows users to reset the selection. The cleaner button is only shown when there is a selection and the component is not disabled or read-only. |
| `clearSearchOnSelect` | `boolean` | `true` | Whether to clear the internal search state after selecting an option. When set to `true`, the internal search value used for filtering options is cleared after a selection is made. This affects only the component's internal logic. Note: This does **not** clear the visible input field if the component is using external search or is controlled via the `search-value` prop. In such cases, clearing must be handled externally. |
| `container` | `HTMLElement \| (() => HTMLElement) \| string` | `'body'` | Specifies the container element for positioning the dropdown. - `HTMLElement`: Direct reference to a DOM element - `Function`: Function that returns a DOM element - `string`: CSS selector string to identify the container element Used in conjunction with the teleport prop to control dropdown positioning. |
| `disabled` | `boolean` | `false` | Toggle the disabled state for the component. When `true`, the Vue.js autocomplete is non-interactive and appears visually disabled. Users cannot type, select options, or trigger the dropdown. |
| `feedback` | `string` | - | Provide valuable, actionable feedback to your users with HTML5 form validation feedback. |
| `feedbackInvalid` | `string` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied `invalid` prop. |
| `feedbackValid` | `string` | - | Provide valuable, actionable valid feedback when using standard HTML form validation which applied `valid` prop. |
| `highlightOptionsOnSearch` | `boolean` | `false` | Highlight options that match the search criteria. When `true`, matching portions of option labels are visually highlighted based on the current search input value. |
| `id` | `string` | - | Set the id attribute for the native input element. This id is used for accessibility purposes and form associations. If not provided, a unique id may be generated automatically. |
| `indicator` | `boolean` | - | Show dropdown indicator/arrow button. When `true`, displays a dropdown arrow button that can be clicked to manually show or hide the options dropdown. |
| `invalid` | `boolean` | - | Set component validation state to invalid. |
| `label` | `string` | - | Add a caption for a component. |
| `loading` | `boolean` | - | When set, the options list will have a loading style: loading spinner and reduced opacity. Use this to indicate that options are being fetched asynchronously. The dropdown remains functional but shows visual loading indicators. |
| `modelValue` | - | - | The model value for v-model support. Can be a string (matched against option labels) or number (matched against option values). Used for two-way data binding with v-model. |
| `name` | `string` | - | The name attribute for the input element. Used for form submission and identification in form data. Important for proper form handling and accessibility. |
| `options` | `(Option \| OptionsGroup \| string)[]` | - | List of option elements. Can contain Option objects, OptionsGroup objects, or plain strings. Plain strings are converted to simple Option objects internally. This is a required prop - the Vue.js autocomplete needs options to function. |
| `optionsMaxHeight` | `number \| string` | `'auto'` | Sets maxHeight of options list. Controls the maximum height of the dropdown options container. Can be a number (pixels) or a CSS length string (e.g., '200px', '10rem'). When content exceeds this height, a scrollbar will appear. |
| `placeholder` | `string` | - | Specifies a short hint that is visible in the search input. Displayed when the input is empty to guide user interaction. Standard HTML input placeholder behavior. |
| `readOnly` | `boolean` | `false` | Toggle the readonly state for the component. When `true`, users can view and interact with the dropdown but cannot type in the search input or modify the selection through typing. Selection via clicking options may still be possible. |
| `required` | `boolean` | `false` | When it is present, it indicates that the user must choose a value before submitting the form. Adds HTML5 form validation requirement. The form will not submit until a valid selection is made. |
| `resetSelectionOnOptionsChange` | `boolean` | `false` | Determines whether the selected options should be cleared when the options list is updated. When `true`, any previously selected options will be reset whenever the options list undergoes a change. This ensures that outdated selections are not retained when new options are provided. |
| `search` | - | - | Enables and configures search functionality. - `'external'`: Search is handled externally, filtering is not applied internally - `'global'`: Enables global keyboard search when dropdown is closed - Object with `external` and `global` boolean properties for fine-grained control |
| `searchNoResultsLabel` | `boolean \| string` | `false` | Sets the label for no results when filtering. - `false`: Don't show any message when no results found - `true`: Show default "No results found" message - `string`: Show custom text message |
| `showHints` | `boolean` | `false` | Show hint options based on the current input value. When `true`, displays a preview/hint of the first matching option as semi-transparent text in the input field, similar to browser autocomplete. |
| `size` | `string` | - | Size the component small or large. - `'sm'`: Small size variant - `'lg'`: Large size variant - `undefined`: Default/medium size |
| `teleport` | `boolean` | `false` | Enable teleportation of the dropdown to a different container. When `true`, the dropdown is rendered in the container specified by the `container` prop instead of being rendered inline. This is useful for avoiding z-index issues and positioning problems when the autocomplete is inside elements with overflow constraints. |
| `text` | `string` | - | Add helper text to a form control. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean` | - | Set component validation state to valid. |
| `value` | - | - | Sets the initially selected value for the Vue.js autocomplete component. Can be a string (matched against option labels) or number (matched against option values). The component will attempt to find and select the matching option on mount. |
| `virtualScroller` | `boolean` | `false` | Enable virtual scroller for the options list. When `true`, only visible options are rendered in the DOM for better performance with large option lists. Works in conjunction with `visible-items` prop. |
| `visible` | `boolean` | `false` | Toggle the visibility of autocomplete dropdown. Controls whether the dropdown is initially visible. The dropdown visibility can still be toggled through user interaction. |
| `visibleItems` | `number` | `10` | Amount of visible items when virtualScroller is enabled. Determines how many option items are rendered at once when virtual scrolling is active. Higher values show more items but use more memory. Lower values improve performance. |

### Events

| Name | Description |
| --- | --- |
| `change` | Execute a function when a user changes the selected option. Called with the selected option object or `null` when cleared. |
| `input` | Execute a function when the filter/search value changes. Called whenever the user types in the search input. |
| `hide` | The callback is fired when the dropdown requests to be hidden. Called when the dropdown closes due to user interaction, clicks outside, escape key, or programmatic changes. |
| `show` | The callback is fired when the dropdown requests to be shown. Called when the dropdown opens due to user interaction, focus, or programmatic changes. |
| `update:modelValue` | Update the model value for v-model support. Emitted when the selected value changes to support two-way data binding. |
