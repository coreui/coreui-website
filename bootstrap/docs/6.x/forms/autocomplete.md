# Bootstrap 6 Autocomplete

> Create intelligent, responsive input fields using the Bootstrap Autocomplete plugin. This component enhances user input with dynamic dropdown suggestions, flexible data providers, and callback support.

## Overview

The **Bootstrap Autocomplete Dropdown** component is a powerful autocomplete dropdown plugin that enhances form control usability by suggesting completions as the user types. Whether you're integrating with local JavaScript arrays or fetching live server responses via AJAX, this plugin enables rich, dynamic user interactions.

## Basic example

A straightforward demonstration of how to implement a basic Bootstrap Autocomplete input field, highlighting essential attributes and configurations.

```html
<div
  data-coreui-autocomplete
  data-coreui-cleaner="true"
  data-coreui-highlight-options-on-search="true"
  data-coreui-options="Angular, Bootstrap, React.js, Vue.js"
  data-coreui-picker-icon="true"
  data-coreui-placeholder="Search technologies..."
  data-coreui-search-no-results-label="No results found"
  data-coreui-show-hints="true"
  data-coreui-value="React.js"
></div>
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <label for="autocompleteField" class="form-label">Framework</label>
  <div
    data-coreui-autocomplete
    data-coreui-id="autocompleteField"
    data-coreui-name="framework"
    data-coreui-options="Angular, Bootstrap, React.js, Vue.js"
    data-coreui-placeholder="Search frameworks..."
  ></div>
  <div class="form-text">Start typing to filter the list.</div>
</div>
```

Inside a `<form>`, <kbd>Enter</kbd> with the list closed submits the form. A form reset brings the autocomplete back to the `value` it was created with, or to the first option marked `selected`, or to an empty field, and fires `change.coreui.autocomplete` when that differs from what the field held, typed text included. A reset that a listener cancels changes nothing.

## Data source

Learn how to populate the autocomplete component with data from various sources, including arrays and objects, for dynamic content integration.

### Array data

To dynamically populate an autocomplete input with suggestions from an array, use JavaScript to configure the component with predefined options.

```html
<div id="myAutoComplete"></div>
```

We use the following JavaScript to set up our autocomplete:

```js
const myAutoComplete = document.getElementById('myAutoComplete')

new coreui.Autocomplete(myAutoComplete, {
  name: 'autocomplete',
  options: [
    'Angular',
    'Bootstrap',
    {
      label: 'React.js',
      disabled: true
    },
    'Vue.js',
    {
      label: 'backend',
      options: ['Django', 'Laravel', 'Node.js']
    }
  ],
  value: 'Laravel'
})
```

### Object data with groups

You can organize suggestions into groups using optgroups for better categorization and user experience.

```html
<div id="myAutoCompleteGrouped"></div>
```

```js
const myAutoCompleteGrouped = document.getElementById('myAutoCompleteGrouped')

new coreui.Autocomplete(myAutoCompleteGrouped, {
  name: 'autocomplete-grouped',
  options: [
    'Angular',
    {
      label: 'Bootstrap',
      selected: true
    },
    {
      label: 'React.js',
      disabled: true
    },
    'Vue.js',
    {
      label: 'backend',
      options: ['Django', 'Laravel', 'Node.js']
    }
  ]
})
```

### Options with values

You can use values in your options array. This is particularly useful when working with database IDs, product codes, or any numeric identifiers. Note that the component internally converts number values to strings for consistency and DOM compatibility.

```html
<div id="myAutoCompleteValues"></div>
```

```js
const myAutoCompleteValues = document.getElementById('myAutoCompleteValues')

new coreui.Autocomplete(myAutoCompleteValues, {
  cleaner: true,
  name: 'autocomplete-option-values',
  options: [
    { label: 'Product A', value: 1 },
    { label: 'Product B', value: 2 },
    { label: 'Product C', value: 3.5 },
    { label: 'Product D', value: 42 },
    {
      label: 'Categories',
      options: [
        { label: 'Electronics', value: 100 },
        { label: 'Books', value: 200 },
        { label: 'Clothing', value: 300 }
      ]
    }
  ],
  pickerIcon: true,
  placeholder: 'Select product by ID...',
  value: 100
})

// Log the selected value to demonstrate that numbers are converted to strings
myAutoCompleteValues.addEventListener('change.coreui.autocomplete', event => {
  console.log('Selected value:', event.value.value)

  console.log('Selected label:', event.value.label)
})
```

> **Important:** While you can pass number values in your options, the component internally converts all values to strings using `String(value)`. When handling selection events, remember that `event.value.value` will always be a string representation of your original number.
> 
> For example:
> - Input: `{ label: 'Product A', value: 42 }`
> - Internal storage: `{ label: 'Product A', value: '42' }`
> - Event output: `event.value.value === '42'` (string)

### External data

You can configure CoreUI's AutoComplete component to fetch and display options dynamically from an external API. This is useful when you need to autocomplete data that changes frequently or is too large to preload. 

This example shows how to connect the AutoComplete to a remote API to search users by first name.

```html
<div id="myAutoCompleteExternalData"></div>
```

To fetch data from an external source, you must set the search option to `'external'`.
This disables internal filtering and allows you to provide custom data (e.g., from an API) based on user input.

## Search functionality

The field filters the options as the user types.

```html
<div data-coreui-autocomplete data-coreui-options="Angular, Bootstrap, React.js, Vue.js" data-coreui-placeholder="Search technologies..."></div>
```

### Where typing goes

Typing reaches the field from anywhere in the component — the picker button, the clear button, the options panel — so a keystroke never depends on where the focus happens to be. The space bar and keyboard shortcuts stay with whatever has the focus.

Add `data-coreui-global-search="false"` to keep typing local: a keystroke then counts only while the field has the focus.

```html
<div data-coreui-autocomplete data-coreui-global-search="false" data-coreui-options="Angular, Bootstrap, React.js, Vue.js" data-coreui-picker-icon="true" data-coreui-placeholder="Typing stays local..."></div>
```

### External search

Use external search mode to fetch data dynamically from a server or API. This disables internal filtering and delegates the search logic entirely to your application via JavaScript:

```html
<div id="myAutoCompleteExternalDataExample"></div>
```

```js
const autocomplete = new coreui.Autocomplete(myAutoCompleteExternalDataExample, {
  search: 'external', // Required for remote data sources
  options: [],
  placeholder: 'Search technologies...'
})

myAutoCompleteExternalDataExample.addEventListener('input.coreui.autocomplete', async event => {
  const query = event.value
  const response = await fetch(`https://example.com/api?q=${query}`)
  const results = await response.json()

  autocomplete.setOptions(results.map(item => ({
    value: item.id,
    label: item.name
  })))
})
```

> When `search: 'external'` is used, the component no longer filters options internally — you must handle all data fetching and filtering logic manually. It opens the panel for whatever options you set, whether or not they contain the typed text.

## Restricted selection

Restrict users to only select from predefined options by setting `data-coreui-allow-only-defined-options="true"`:

```html
<div data-coreui-autocomplete data-coreui-allow-only-defined-options="true" data-coreui-options="Angular, Bootstrap, React.js, Vue.js" data-coreui-placeholder="Only predefined options allowed..."></div>
```

Text that names no option a user can select is cleared when the field loses focus, unless it is the label of the current selection, and <kbd>Enter</kbd> does not submit the form while the field holds it.

## Hints and completion

Enable intelligent hints and auto-completion features to improve user experience.

### Show hints

Display completion hints as users type:

```html
<div data-coreui-autocomplete data-coreui-options="Angular, Bootstrap, React.js, Vue.js" data-coreui-placeholder="Type to see hints..." data-coreui-show-hints="true"></div>
```

### Highlight matching text

Highlight matching portions of suggestions during search:

```html
<div data-coreui-autocomplete data-coreui-highlight-options-on-search="true" data-coreui-options="Angular, Bootstrap, React.js, Vue.js" data-coreui-placeholder="Search with highlighting..."></div>
```

## Validation

The text input carries the value, so `required` blocks the submit of an empty field and the browser shows its message over the input. The state shows on the frame as `.is-{state}`, and while it is `'invalid'` the input carries `aria-invalid="true"` and is described by the message that follows the frame, the way the [form plugin](https://coreui.io/bootstrap/docs/forms/validation/) does for a native field.

```html
<form class="row g-4" data-coreui-validate novalidate>
  <div class="col-12">
    <label class="form-label" for="autocompleteValidationCountry">Country</label>
    <div data-coreui-autocomplete data-coreui-id="autocompleteValidationCountry" data-coreui-name="country" data-coreui-options="Germany, Poland, Spain" data-coreui-required="true"></div>
    <div class="invalid-feedback">Pick a country.</div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit</button>
  </div>
</form>
```

The state comes from four places, in this order:

- The `validationState` option: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`. The `invalid` and `valid` options still work as aliases; `invalid` wins when both are set, and both are ignored once `validationState` is set.
- An `.is-invalid` or `.is-valid` class written on the autocomplete in the markup, for example by a server that has already checked the value. It is read once, when the component starts.
- A validation that reports the input invalid: a submit, `checkValidity()` or `reportValidity()`, which the form plugin and the [stepper](https://coreui.io/bootstrap/docs/forms/stepper/) call as well. From then on the autocomplete shows it invalid whenever its value is invalid, until a native reset of the form.
- In a form with `data-coreui-validate`, the `:user-invalid` state of the input, and with `data-coreui-validate="valid"` also its `:user-valid` state.

```html
<label class="form-label" for="autocompleteServerCountry">Country</label>
<div class="is-invalid" data-coreui-autocomplete data-coreui-id="autocompleteServerCountry" data-coreui-name="country" data-coreui-options="Germany, Poland, Spain" data-coreui-value="Spain"></div>
<div class="invalid-feedback">We do not ship to Spain yet.</div>
```

A state you give, with the option or with the class, is a verdict on the value it was given for, so the next change of the value the user makes drops it: typing, a pick of a different option, the cleaner, <kbd>Backspace</kbd> or <kbd>Delete</kbd> on the selected option, and with `allowOnlyDefinedOptions` an <kbd>Escape</kbd>, a click outside or leaving the field that empties it. A pick of the option already selected keeps it. One action drops the state once, at its first change, so a state you give from a `change.coreui.autocomplete` listener while the action runs stays. A change your own code makes, with `clear()`, `deselectAll()`, `setValue()` or options that arrive later, keeps it. To set it again, call `setValidationState()`: it updates the state without rebuilding the field and replaces a class written on the autocomplete or a state given with `invalid` or `valid`, so `setValidationState(null)` withdraws them. The component never reads `aria-invalid` on the autocomplete, and a state class written after it started only paints the frame: the input gets no `aria-invalid` and the submit is not blocked, so change the state after start with `setValidationState()`. A message placed where the stylesheet does not show it for the autocomplete can be named in `data-coreui-invalid-feedback` on the autocomplete. While the given state is `'invalid'`, the input blocks the submit with the text of the linked message, or `Invalid value.` when there is none; a disabled autocomplete does not block. A native reset of the form puts back the selection the autocomplete started with and drops a state given before it; a state you give from a `reset` listener on the form, or right after `form.reset()`, stays.

## Disabled

Add the `data-coreui-disabled="true"` attribute to disable the component:

```html
<div data-coreui-autocomplete data-coreui-disabled="true" data-coreui-options="" data-coreui-placeholder="Disabled autocomplete..." ></div>
```

## Sizing

The frame carries the size. Add `.form-control-sm` or `.form-control-lg` to the element you initialize — it becomes the `.form-control-group`, so the field matches our similarly sized text inputs.

```html
<div 
  class="form-control-lg"
  data-coreui-cleaner="true"
  data-coreui-highlight-options-on-search="true"
  data-coreui-options="Angular, Bootstrap, React.js, Vue.js"
  data-coreui-picker-icon="true"
  data-coreui-placeholder="Large autocomplete..."
  data-coreui-show-hints="true"
  data-coreui-autocomplete
></div>
<div 
  data-coreui-cleaner="true"
  data-coreui-highlight-options-on-search="true"
  data-coreui-options="Angular, Bootstrap, React.js, Vue.js"
  data-coreui-picker-icon="true"
  data-coreui-placeholder="Normal autocomplete..."
  data-coreui-show-hints="true"
  data-coreui-autocomplete
></div>
<div 
  class="form-control-sm"
  data-coreui-cleaner="true"
  data-coreui-highlight-options-on-search="true"
  data-coreui-options="Angular, Bootstrap, React.js, Vue.js"
  data-coreui-picker-icon="true"
  data-coreui-placeholder="Small autocomplete..."
  data-coreui-show-hints="true"
  data-coreui-autocomplete
></div>
```

## Floating labels

Autocomplete supports [floating labels](https://coreui.io/bootstrap/docs/forms/floating-labels/). Wrap the component in `.form-floating` and put a `<label>` beside it. The component's own `placeholder` is hidden while the label rests inside the field, so the two never overlap.

```html
<div class="form-floating">
  <label for="floatingAutocomplete">Framework</label>
  <div
    data-coreui-autocomplete
    data-coreui-id="floatingAutocomplete"
    data-coreui-options="Angular, Bootstrap, React.js, Vue.js"
    data-coreui-placeholder="Search frameworks..."
  ></div>
</div>
```

Add `.form-floating-always` to the wrapper, or to any ancestor, to keep the label [always floating](https://coreui.io/bootstrap/docs/forms/floating-labels/#always-floating) with the placeholder showing.

## Cleaner functionality

Enable a cleaner button to quickly clear input element:

```html
<div data-coreui-autocomplete data-coreui-cleaner="true" data-coreui-options="Angular, Bootstrap, React.js, Vue.js" data-coreui-placeholder="With cleaner button..."></div>
```

## Custom templates

The CoreUI Bootstrap Autocomplete Component provides the flexibility to personalize options and group labels by utilizing custom templates. You can easily customize the options using the `optionsTemplate`, and for groups, you can use `optionsGroupsTemplate`, as demonstrated in the examples below:

```html
<div class="row">
  <div class="col-md-6">
    <div id="myAutocompleteCountries"></div>
  </div>
  <div class="col-md-6">
    <div id="myAutocompleteCountriesAndCities"></div>
  </div>
</div>
```

We use the following JavaScript to set up our autocomplete:

```js
const myAutocompleteCountries = document.getElementById('myAutocompleteCountries')
const myAutocompleteCountriesAndCities = document.getElementById('myAutocompleteCountriesAndCities')

const countries = [
  {
    value: 'pl',
    label: 'Poland',
    flag: '🇵🇱'
  },
  {
    value: 'de',
    label: 'Germany',
    flag: '🇩🇪'
  },
  {
    value: 'us',
    label: 'United States',
    flag: '🇺🇸'
  },
  {
    value: 'es',
    label: 'Spain',
    flag: '🇪🇸'
  },
  {
    value: 'gb',
    label: 'United Kingdom',
    flag: '🇬🇧'
  }
]

const cities = [
  {
    label: 'United States',
    code: 'us',
    flag: '🇺🇸',
    options: [
      {
        value: 'au',
        label: 'Austin'
      },
      {
        value: 'ch',
        label: 'Chicago'
      },
      {
        value: 'la',
        label: 'Los Angeles'
      },
      {
        value: 'ny',
        label: 'New York'
      },
      {
        value: 'sa',
        label: 'San Jose'
      }
    ]
  },
  {
    label: 'United Kingdom',
    code: 'gb',
    flag: '🇬🇧',
    options: [
      {
        value: 'li',
        label: 'Liverpool'
      },
      {
        value: 'lo',
        label: 'London'
      },
      {
        value: 'ma',
        label: 'Manchester'
      }
    ]
  }
]

new coreui.Autocomplete(myAutocompleteCountries, {
  cleaner: true,
  options: countries,
  optionsTemplate(option) {
    return `<div class="d-flex align-items-center gap-3"><span class="fs-5">${option.flag}</span><span>${option.label}</span></div>`
  },
  pickerIcon: true,
  placeholder: 'Select country',
  showHints: true
})

new coreui.Autocomplete(myAutocompleteCountriesAndCities, {
  cleaner: true,
  options: cities,
  optionsGroupsTemplate(optionGroup) {
    return `<div class="d-flex align-items-center gap-3"><span class="fg-body fs-5">${optionGroup.flag}</span><span>${optionGroup.label}</span></div>`
  },
  pickerIcon: true,
  placeholder: 'Select city',
  showHints: true
})
```

## Usage

### Via data attributes

Add the `data-coreui-autocomplete` attribute to a container element:

```html
<div data-coreui-autocomplete data-coreui-name="framework" data-coreui-options="JavaScript, TypeScript, React, Vue.js, Angular"></div>
```

### Via JavaScript

Initialize the autocomplete component via JavaScript:

```html
<div id="myAutocomplete"></div>
```

```js
const autoCompleteElement = document.getElementById('myAutocomplete')
const autoComplete = new coreui.Autocomplete(autoCompleteElement, {
  name: 'framework',
  options: [
    'JavaScript',
    'TypeScript',
    'React',
    'Vue.js',
    'Angular'
  ]
})
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-animation="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-custom-class="beautifier"` rather than `data-coreui-customClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | `DefaultAllowlist` | Object containing allowed tags and attributes for HTML sanitization when using custom templates. |
| `allowOnlyDefinedOptions` | boolean | `false` | Restricts selection to only predefined options when set to `true`. |
| `ariaCleanerLabel` | string | `'Clear selection'` | Accessible label for the cleaner button, read by screen readers. |
| `ariaPickerLabel` | string | `'Toggle options list'` | Accessible label for the picker button, read by screen readers. |
| `cleaner` | boolean | `false` | Enables the selection cleaner button. |
| `clearSearchOnSelect` | boolean | `true` | Clears the search input when an option is selected. |
| `container` | string, element, boolean | `false` | Where the panel is mounted while open. `true` means `<body>`; leave it alone and the panel goes next to the toggle unless an ancestor would clip it. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `disabled` | boolean | `false` | Disables the component when set to `true`. |
| `globalSearch` | boolean | `true` | Routes typing to the field from anywhere in the component, so a keystroke never depends on where the focus sits. Set to `false` to keep it local: a keystroke then counts only while the field has the focus. |
| `highlightOptionsOnSearch` | boolean | `false` | Highlights matching text in options during search. |
| `id` | string, null | `null` | Sets a custom ID for the component. If not provided, a unique ID is auto-generated. |
| `invalid` | boolean | `false` | Deprecated alias of `validationState: 'invalid'`, ignored once `validationState` is set. |
| `name` | string, null | `null` | Name of the text input the form posts. That input holds what the user sees — the selected option's label, or their own text when `allowOnlyDefinedOptions` is off — so `{ value: 'ng', label: 'Angular' }` posts `Angular`, not `ng`. Without a name the autocomplete is not submitted with the form. |
| `options` | array, string, null | `[]` | Array of options or option objects to populate the dropdown. An option marked `selected: true` is applied the first time it appears, and again after a form reset. It replaces the current selection and the field's text, a pick or typing of the user's included, and fires `change.coreui.autocomplete` only when it fills a field a form reset left empty. While `value` holds anything but `''` or `null`, the flags are ignored. A group with `disabled: true` disables every option in it. |
| `optionsGroupsTemplate` | function, null | `null` | Custom template function for rendering option group labels. Receives the group object as parameter. |
| `optionsMaxHeight` | number, string | `'auto'` | Sets the maximum height of the options dropdown. |
| `optionsTemplate` | function, null | `null` | Custom template function for rendering individual options. Receives the option object as parameter. |
| `pickerIcon` | string, boolean | `false` | The button that opens the options menu: `true` for the built-in icon, an inline SVG string for your own (sanitized), `false` for no button. |
| `placeholder` | string, null | `null` | Placeholder text displayed in the input field. |
| `required` | boolean | `false` | Makes the input field required for form validation. |
| `sanitize` | boolean | `true` | Enables HTML sanitization for custom templates to prevent XSS attacks. |
| `sanitizeFn` | function, null | `null` | Custom sanitization function. If provided, it will be used instead of the built-in sanitizer. |
| `search` | string, null | `null` | `'external'` hands the filtering to your code: the component shows the options you set and reports what the user types through `input.coreui.autocomplete`. |
| `searchNoResultsLabel` | boolean, string | `false` | Text displayed when no search results are found; `true` shows "No results found". |
| `showHints` | boolean | `false` | Shows completion hints as users type. |
| `valid` | boolean | `false` | Deprecated alias of `validationState: 'valid'`, ignored once `validationState` is set. |
| `validationState` | string, null | `null` | The state the autocomplete shows: `'valid'`, `'invalid'` or a state of `$form-validation-states`. `'invalid'` blocks the submit. The user's next change of the value drops it. See [Validation](#validation). |
| `value` | number, string, null | `null` | Sets the initial value of the component: the option whose value, compared as text, equals it, so `1` and `'1'` select the same option. It is applied once, as soon as the options contain it, unless the user picks, types or clears the field first; pass it to `setValue()` to select another option, or `null` to clear the field. |

### Methods

| Method | Description |
| --- | --- |
| `clear` | Deselects the option, a disabled one included, and empties the typed text. The cleaner, typing over the selection, <kbd>Backspace</kbd> or <kbd>Delete</kbd> on it and a native form reset back to no value drop a disabled option the same way. |
| `deselectAll` | Deselects all currently selected options. |
| `dispose` | Destroys the instance and removes the input, buttons and panel it created. An autocomplete disposed while open is closed first; the other classes it wrote on the host stay, and a new instance writes them again from its options. |
| `getInstance` | Static method to get the Bootstrap autocomplete instance associated with a DOM element. |
| `hide` | Hides the Bootstrap autocomplete dropdown options. |
| `search` | Performs a search with the provided text parameter. |
| `disable()` | Disables the field. |
| `enable()` | Enables the field. |
| `setOptions(options)` | Replaces the options, as an array or a comma-separated string. The value stays unless the new options mark another option `selected`, and a value `setValue()` gave that the earlier options lacked is picked without an event; a start value a form reset waits for is reported with `change` when the options bring it. A pick, typing or clearing ends the wait of either value. |
| `setValidationState(state)` | Gives the field a validation state (`'valid'`, `'invalid'` or a state added to `$form-validation-states`), or drops it with `null`. The value stays. See [Validation](#validation). |
| `setValue(value)` | Sets the value without firing a change event, also after a form reset; a value the options lack waits for `setOptions()` until the user picks, types or the field is cleared. It replaces the whole selection, a disabled option included, as a native select takes a value from a script. |
| `show` | Shows the Bootstrap autocomplete dropdown options. |
| `toggle` | Toggles the visibility of the dropdown options. |

### Events

The Autocomplete component exposes several events for integrating with application logic.

| Event | Description |
| --- | --- |
| `change.coreui.autocomplete` | Fires when the user selects an option, types over a selection or clears it, and when `clear()` empties a field that held a value or text. The initial `value`, a preselected option and a `setValue()` call do not fire it. |
| `hidden.coreui.autocomplete` | Fired when the dropdown has been hidden and CSS transitions completed. |
| `hide.coreui.autocomplete` | Event fires immediately when the hide method is called. Call `event.preventDefault()` to keep the menu open. |
| `input.coreui.autocomplete` | Fires when the search input value changes. |
| `show.coreui.autocomplete` | Event fires immediately when the show method is called. Call `event.preventDefault()` to keep the menu closed. |
| `shown.coreui.autocomplete` | Fired when the dropdown has been made visible and CSS transitions completed. |

```js
const myAutocomplete = document.getElementById('myAutocomplete')
myAutocomplete.addEventListener('change.coreui.autocomplete', event => {
  // Get the selected value
  const selectedValue = event.value
  // Your callback function to handle change
  // eslint-disable-next-line no-console
  console.log('Selected:', selectedValue)
})

myAutocomplete.addEventListener('input.coreui.autocomplete', event => {
  // Get the current input value
  const inputValue = event.value
  // Your callback function to handle input
  // eslint-disable-next-line no-console
  console.log('Input changed:', inputValue)
})
```

## Accessibility

The Autocomplete component includes several accessibility features:

- **ARIA attributes**: Proper `role`, `aria-expanded`, `aria-haspopup`, and `aria-autocomplete` attributes
- **Screen reader support**: Descriptive labels and announcements for state changes
- **Name**: `aria-label`, `aria-labelledby`, `aria-description`, `aria-details`, `aria-errormessage`, `aria-placeholder`, `aria-readonly` and `aria-required` on the autocomplete element move to the input, which is the combobox, and the element gets them back on dispose; attributes that apply to the whole control, such as `aria-hidden`, stay on the element. Without a name there, point a `<label>` at the input through `data-coreui-id`
- **Description**: an `aria-describedby` on the autocomplete element moves to the input, after the ids the input already has, and the element gets it back on dispose; while the state is `'invalid'` the error message follows it
- **Keyboard navigation**: Full keyboard support with arrow keys, Enter, Escape, and Tab
- **Focus management**: The focus never leaves the input — `aria-activedescendant` points at the highlighted option, so typing and choosing happen in one place. <kbd>Home</kbd>, <kbd>End</kbd> and the space bar stay with the text.
- **Semantic markup**: Uses appropriate HTML elements and structure

### Keyboard shortcuts

| Key | Action |
| --- | --- |
| <kbd>Arrow Down</kbd> | Highlight the next option or open dropdown |
| <kbd>Arrow Up</kbd> | Highlight the previous option |
| <kbd>Enter</kbd> | Select the highlighted option, or commit the typed text; with the list closed, also submit the form |
| <kbd>Escape</kbd> | Close the dropdown; the input keeps focus and the highlighted option clears |
| <kbd>Tab</kbd> | Accept hint completion (when hints are enabled) |
| <kbd>Backspace</kbd>/<kbd>Delete</kbd> | Delete one character and search with what's left; a held selection is deselected first |
| Any character, <kbd>Backspace</kbd>, <kbd>Delete</kbd> on the picker or clear button | Move the focus to the field and type there, unless `globalSearch` is `false` |

## Customizing

### CSS variables

Autocomplete has no variables of its own: the field is a [`.form-control-group`](https://coreui.io/bootstrap/docs/forms/form-control-group/) and takes the `--cui-control-*` properties, while the options panel is the shared combobox surface, which only sizes itself.

```scss
$combobox-tokens: defaults(
  (
    --cui-combobox-popup-min-width: 100%,
  ),
  $combobox-tokens
);
```

Its surface, border, shadow, stacking and fade come from the `.popup` tokens it shares with the pickers. `.popup` declares them itself, so set them on `.combobox-popup` or on `.popup`; a value set on an ancestor or on `:root` does not reach it.

```scss
$popup-tokens: () !default;
$popup-tokens: defaults(
  (
    --cui-popup-zindex: var(--cui-z-dropdown),
    --cui-popup-bg: var(--cui-bg-body),
    --cui-popup-border-width: var(--cui-border-width),
    --cui-popup-border-color: var(--cui-border-color),
    --cui-popup-border-radius: var(--cui-radius-7),
    --cui-popup-box-shadow: var(--cui-box-shadow),
    --cui-popup-transition-duration: .15s,
    --cui-popup-transition-timing: var(--cui-transition-timing-overlay),
  ),
  $popup-tokens
);
```

The options themselves are a [List box](https://coreui.io/bootstrap/docs/components/list-box/), so their padding, colors, indicator and section labels come from its `--cui-list-box-*` variables. `.list-box` declares them itself, so a value set on `.combobox-popup` or on `:root` does not reach it: set them with a rule on `.combobox-popup .list-box`, which covers the panels of Combobox, Autocomplete and Multi Select alike.
