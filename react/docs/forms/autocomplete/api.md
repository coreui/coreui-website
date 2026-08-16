# React Autocomplete Component API

> Explore the API reference for the React Autocomplete component and discover how to effectively utilize its props for customization.

## CAutocomplete

```jsx
import { CAutocomplete } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowOnlyDefinedOptions` | `boolean \| undefined` | `false` | Only allow selection of predefined options. When `true`, users cannot enter custom values that are not in the options list. When `false`, users can enter and select custom values. |
| `ariaCleanerLabel` | `string \| undefined` | `Clear selection` | Sets the accessible label (`aria-label`) for the cleaner button, describing its action for screen readers. |
| `ariaIndicatorLabel` | `string \| undefined` | `Toggle visibility of options menu` | Sets the accessible label (`aria-label`) for the indicator button that toggles the options menu. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. These classes will be merged with the default React autocomplete classes. |
| `cleaner` | `boolean \| undefined` | `false` | Enables selection cleaner element. When `true`, displays a clear button that allows users to reset the selection. The cleaner button is only shown when there is a selection and the component is not disabled or read-only. |
| `clearSearchOnSelect` | `boolean \| undefined` | `true` | Whether to clear the internal search state after selecting an option. When set to `true`, the internal search value used for filtering options is cleared after a selection is made. This affects only the component's internal logic. Note: This does **not** clear the visible input field if the component is using external search or is controlled via the `searchValue` prop. In such cases, clearing must be handled externally. |
| `container` | `Element \| DocumentFragment \| (() => Element \| DocumentFragment \| null) \| null \| undefined` | - | Specifies the DOM element where the dropdown should be rendered when using portal mode. Can be a DOM element reference, DocumentFragment, function that returns an element or null, or null (renders to document body). Works in conjunction with the `portal` prop to control where the portal content is mounted in the DOM tree. |
| `disabled` | `boolean \| undefined` | - | Toggle the disabled state for the component. When `true`, the React.js autocomplete is non-interactive and appears visually disabled. Users cannot type, select options, or trigger the dropdown. |
| `feedback` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackInvalid` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackValid` | `ReactNode` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `highlightOptionsOnSearch` | `boolean \| undefined` | `false` | Highlight options that match the search criteria. When `true`, matching portions of option labels are visually highlighted based on the current search input value. |
| `id` | `string \| undefined` | - | Set the id attribute for the native input element. This id is used for accessibility purposes and form associations. If not provided, a unique id may be generated automatically. |
| `indicator` | `boolean \| undefined` | - | Show dropdown indicator/arrow button. When `true`, displays a dropdown arrow button that can be clicked to manually show or hide the options dropdown. |
| `invalid` | `boolean \| undefined` | - | Set component validation state to invalid. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `loading` | `boolean \| undefined` | - | When set, the options list will have a loading style: loading spinner and reduced opacity. Use this to indicate that options are being fetched asynchronously. The dropdown remains functional but shows visual loading indicators. |
| `name` | `string \| undefined` | - | The name attribute for the input element. Used for form submission and identification in form data. Important for proper form handling and accessibility. |
| `onChange` | `((option: Option \| null) => void) \| undefined` | - | Execute a function when a user changes the selected option. Called with the selected option object or `undefined` when cleared. This is the primary callback for handling selection changes. |
| `onHide` | `(() => void) \| undefined` | - | The callback is fired when the dropdown requests to be hidden. Called when the dropdown closes due to user interaction, clicks outside, escape key, or programmatic changes. |
| `onInput` | `((value: string) => void) \| undefined` | - | Execute a function when the filter/search value changes. Called whenever the user types in the search input. Useful for implementing external search functionality or analytics. |
| `onShow` | `(() => void) \| undefined` | - | The callback is fired when the dropdown requests to be shown. Called when the dropdown opens due to user interaction, focus, or programmatic changes. |
| `options` | `(Option \| OptionsGroup)[]` | - | List of option elements. Can contain Option objects, OptionsGroup objects, or plain strings. Plain strings are converted to simple Option objects internally. This is a required prop - the React autocomplete needs options to function. |
| `optionsGroupsTemplate` | `((option: OptionsGroup) => ReactNode) \| undefined` | - | Custom template for rendering option groups. Allows customization of how option group headers appear in the dropdown. The function receives an OptionsGroup object and should return a ReactNode. |
| `optionsMaxHeight` | `string \| number \| undefined` | `auto` | Sets maxHeight of options list. Controls the maximum height of the dropdown options container. Can be a number (pixels) or a CSS length string (e.g., '200px', '10rem'). When content exceeds this height, a scrollbar will appear. |
| `optionsTemplate` | `((option: Option) => ReactNode) \| undefined` | - | Custom template for rendering individual options. Allows complete customization of how each option appears in the dropdown. The function receives an Option object and should return a ReactNode. |
| `placeholder` | `string \| undefined` | - | Specifies a short hint that is visible in the search input. Displayed when the input is empty to guide user interaction. Standard HTML input placeholder behavior. |
| `portal` | `boolean \| undefined` | `false` | Renders the autocomplete dropdown in a React portal, allowing it to break out of its parent container's styling constraints (like overflow, z-index, or positioning). When enabled, the dropdown is rendered at the document root level, ensuring it appears above other page elements and isn't clipped by parent containers. |
| `readOnly` | `boolean \| undefined` | - | Toggle the readonly state for the component. When `true`, users can view and interact with the dropdown but cannot type in the search input or modify the selection through typing. Selection via clicking options may still be possible. |
| `required` | `boolean \| undefined` | - | When it is present, it indicates that the user must choose a value before submitting the form. Adds HTML5 form validation requirement. The form will not submit until a valid selection is made. |
| `resetSelectionOnOptionsChange` | `boolean \| undefined` | `false` | Determines whether the selected options should be cleared when the options list is updated. When `true`, any previously selected options will be reset whenever the options list undergoes a change. This ensures that outdated selections are not retained when new options are provided. |
| `search` | `Search \| undefined` | - | Enables and configures search functionality. - `'external'`: Search is handled externally, filtering is not applied internally - `'global'`: Enables global keyboard search when dropdown is closed - Object with `external` and `global` boolean properties for fine-grained control |
| `searchNoResultsLabel` | `ReactNode` | `false` | Sets the label for no results when filtering. - `false`: Don't show any message when no results found - `true`: Show default "No results found" message - `string`: Show custom text message - `ReactNode`: Show custom component/element |
| `showHints` | `boolean \| undefined` | `false` | Show hint options based on the current input value. When `true`, displays a preview/hint of the first matching option as semi-transparent text in the input field, similar to browser autocomplete. |
| `size` | `"sm" \| "lg" \| undefined` | - | Size the component small or large. - `'sm'`: Small size variant - `'lg'`: Large size variant - `undefined`: Default/medium size |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean \| undefined` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean \| undefined` | - | Set component validation state to valid. |
| `value` | `string \| number \| undefined` | - | Sets the initially selected value for the React.js autocomplete component. Can be a string (matched against option labels) or number (matched against option values). The component will attempt to find and select the matching option on mount. |
| `virtualScroller` | `boolean \| undefined` | `false` | Enable virtual scroller for the options list. When `true`, only visible options are rendered in the DOM for better performance with large option lists. Works in conjunction with `visibleItems` prop. |
| `visible` | `boolean \| undefined` | - | Toggle the visibility of autocomplete dropdown. Controls whether the dropdown is initially visible. The dropdown visibility can still be toggled through user interaction. |
| `visibleItems` | `number \| undefined` | `10` | Amount of visible items when virtualScroller is enabled. Determines how many option items are rendered at once when virtual scrolling is active. Higher values show more items but use more memory. Lower values improve performance. |
