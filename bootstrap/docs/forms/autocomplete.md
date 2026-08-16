# Bootstrap 5 Autocomplete

> Create intelligent, responsive input fields using the Bootstrap Autocomplete plugin. This component enhances user input with dynamic dropdown suggestions, flexible data providers, and callback support.

## Overview

The **Bootstrap Autocomplete Dropdown** component is a powerful autocomplete dropdown plugin that enhances form control usability by suggesting completions as the user types. Whether you're integrating with local JavaScript arrays or fetching live server responses via AJAX, this plugin enables rich, dynamic user interactions.

## Basic example

A straightforward demonstration of how to implement a basic Bootstrap Autocomplete input field, highlighting essential attributes and configurations.

```html
<div
  data-coreui-toggle="autocomplete"
  data-coreui-cleaner="true"
  data-coreui-highlight-options-on-search="true"
  data-coreui-indicator="true"
  data-coreui-options="Angular, Bootstrap, React.js, Vue.js"
  data-coreui-placeholder="Search technologies..."
  data-coreui-search="global"
  data-coreui-search-no-results-label="No results found"
  data-coreui-show-hints="true"
  data-coreui-value="React.js"
></div>
```

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
  indicator: true,
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
  placeholder: 'Select product by ID...',
  search: 'global',
  value: 100
})

// Log the selected value to demonstrate that numbers are converted to strings
myAutoCompleteValues.addEventListener('changed.coreui.autocomplete', event => {
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

To fetch data from an external source, you must set the search option to `'external'` or `['external', 'global']`.
This disables internal filtering and allows you to provide custom data (e.g., from an API) based on user input.

## Search functionality

Configure the search behavior within the component. The `data-coreui-search` option determines how the search input operates and provides different search modes.

By default, search applies only while the input field is focused:

```html
<div data-coreui-toggle="autocomplete" data-coreui-options="Angular, Bootstrap, React.js, Vue.js" data-coreui-placeholder="Search technologies..."></div>
```

### Global search

Enable global search functionality that works across the entire component, regardless of focus position:

```html
<div data-coreui-toggle="autocomplete" data-coreui-search="global" data-coreui-options="Angular, Bootstrap, React.js, Vue.js" data-coreui-placeholder="Global search enabled..."></div>
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

  autocomplete.update({
    options: results.map(item => ({
      value: item.id,
      label: item.name
    }))
  })
})
```

> When `search: 'external'` is used, the component no longer filters options internally — you must handle all data fetching and filtering logic manually.
> 
> You can combine it with `'global'` (e.g. search: `['external', 'global']`) to allow search input even when focus is not in the text field.

## Restricted selection

Restrict users to only select from predefined options by setting `data-coreui-allow-only-defined-options="true"`:

```html
<div data-coreui-toggle="autocomplete" data-coreui-allow-only-defined-options="true" data-coreui-options="Angular, Bootstrap, React.js, Vue.js" data-coreui-placeholder="Only predefined options allowed..."></div>
```

## Hints and completion

Enable intelligent hints and auto-completion features to improve user experience.

### Show hints

Display completion hints as users type:

```html
<div data-coreui-toggle="autocomplete" data-coreui-options="Angular, Bootstrap, React.js, Vue.js" data-coreui-placeholder="Type to see hints..." data-coreui-show-hints="true"></div>
```

### Highlight matching text

Highlight matching portions of suggestions during search:

```html
<div data-coreui-toggle="autocomplete" data-coreui-highlight-options-on-search="true" data-coreui-options="Angular, Bootstrap, React.js, Vue.js" data-coreui-placeholder="Search with highlighting..."></div>
```

## Validation states

Apply validation styling to indicate input validity.

```html
<div data-coreui-toggle="autocomplete" data-coreui-options="Angular, Bootstrap, React.js, Vue.js" data-coreui-placeholder="Valid autocomplete..." data-coreui-valid="true"></div>
```

```html
<div data-coreui-toggle="autocomplete" data-coreui-options="Angular, Bootstrap, React.js, Vue.js" data-coreui-placeholder="Invalid autocomplete..." data-coreui-invalid="true"></div>
```

## Disabled state

Add the `data-coreui-disabled="true"` attribute to disable the component:

```html
<div data-coreui-toggle="autocomplete" data-coreui-disabled="true" data-coreui-options="" data-coreui-placeholder="Disabled autocomplete..." ></div>
```

## Sizing

You may also choose from small and large auto completes to match our similarly sized text inputs.

```html
<div 
  class="autocomplete-lg"
  data-coreui-cleaner="true"
  data-coreui-highlight-options-on-search="true"
  data-coreui-indicator="true"
  data-coreui-options="Angular, Bootstrap, React.js, Vue.js"
  data-coreui-placeholder="Large autocomplete..."
  data-coreui-search="global"
  data-coreui-show-hints="true"
  data-coreui-toggle="autocomplete"
></div>
<div 
  data-coreui-cleaner="true"
  data-coreui-highlight-options-on-search="true"
  data-coreui-indicator="true"
  data-coreui-options="Angular, Bootstrap, React.js, Vue.js"
  data-coreui-placeholder="Normal autocomplete..."
  data-coreui-search="global"
  data-coreui-show-hints="true"
  data-coreui-toggle="autocomplete"
></div>
<div 
  class="autocomplete-sm"
  data-coreui-cleaner="true"
  data-coreui-highlight-options-on-search="true"
  data-coreui-indicator="true"
  data-coreui-options="Angular, Bootstrap, React.js, Vue.js"
  data-coreui-placeholder="Small autocomplete..."
  data-coreui-search="global"
  data-coreui-show-hints="true"
  data-coreui-toggle="autocomplete"
></div>
```

## Cleaner functionality

Enable a cleaner button to quickly clear input element:

```html
<div data-coreui-toggle="autocomplete" data-coreui-cleaner="true" data-coreui-options="Angular, Bootstrap, React.js, Vue.js" data-coreui-placeholder="With cleaner button..."></div>
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
  indicator: true,
  options: countries,
  optionsTemplate(option) {
    return `<div class="d-flex align-items-center gap-2"><span class="fs-5">${option.flag}</span><span>${option.label}</span></div>`
  },
  placeholder: 'Select country',
  showHints: true,
  search: 'global'
})

new coreui.Autocomplete(myAutocompleteCountriesAndCities, {
  cleaner: true,
  indicator: true,
  options: cities,
  optionsGroupsTemplate(optionGroup) {
    return `<div class="d-flex align-items-center gap-2"><span class="text-body fs-5">${optionGroup.flag}</span><span>${optionGroup.label}</span></div>`
  },
  placeholder: 'Select city',
  showHints: true,
  search: 'global'
})
```

## Usage

### Via data attributes

Add `autocomplete` class to a container element with an input field:

```html
<div data-coreui-toggle="autocomplete" data-coreui-search="true"></div>
```

### Via JavaScript

Initialize the autocomplete component via JavaScript:

```html
<div data-coreui-toggle="autocomplete"></div>
```

```js
const autoCompleteElementList = Array.prototype.slice.call(document.querySelectorAll('.autocomplete'))
const autoCompleteList = autoCompleteElementList.map(autoCompleteEl => {
  return new coreui.Autocomplete(autoCompleteEl, {
    options: [
      'JavaScript',
      'TypeScript',
      'React',
      'Vue.js',
      'Angular'
    ],
    search: 'global'
  })
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
| `ariaIndicatorLabel` | string | `'Toggle visibility of options menu'` | Accessible label for the indicator button, read by screen readers. |
| `cleaner` | boolean | `false` | Enables the selection cleaner button. |
| `clearSearchOnSelect` | boolean | `true` | Clears the search input when an option is selected. |
| `container` | string, element, boolean | `false` | Appends the dropdown to a specific element. Example: `container: 'body'`. |
| `disabled` | boolean | `false` | Disables the component when set to `true`. |
| `highlightOptionsOnSearch` | boolean | `false` | Highlights matching text in options during search. |
| `id` | string, null | `null` | Sets a custom ID for the component. If not provided, a unique ID is auto-generated. |
| `indicator` | boolean | `false` | Enables the selection indicator button. |
| `invalid` | boolean | `false` | Applies invalid styling to the component. |
| `name` | string, null | `null` | Sets the name attribute for the input element. |
| `options` | boolean, array | `false` | Array of options or option objects to populate the dropdown. |
| `optionsGroupsTemplate` | function, null | `null` | Custom template function for rendering option group labels. Receives the group object as parameter. |
| `optionsMaxHeight` | number, string | `'auto'` | Sets the maximum height of the options dropdown. |
| `optionsTemplate` | function, null | `null` | Custom template function for rendering individual options. Receives the option object as parameter. |
| `placeholder` | string, null | `null` | Placeholder text displayed in the input field. |
| `required` | boolean | `false` | Makes the input field required for form validation. |
| `sanitize` | boolean | `true` | Enables HTML sanitization for custom templates to prevent XSS attacks. |
| `sanitizeFn` | function, null | `null` | Custom sanitization function. If provided, it will be used instead of the built-in sanitizer. |
| `search` | array, string, null | `null` | Enables search functionality. Use `'global'` for global search across the component and `'external'` when options are provided from external sources. |
| `searchNoResultsLabel` | string | `false` | Text displayed when no search results are found. |
| `showHints` | boolean | `false` | Shows completion hints as users type. |
| `valid` | boolean | `false` | Applies valid styling to the component. |
| `value` | number, string, null | `null` | Sets the initial value of the component. |

### Methods

| Method | Description |
| --- | --- |
| `show` | Shows the Bootstrap autocomplete dropdown options. |
| `hide` | Hides the Bootstrap autocomplete dropdown options. |
| `toggle` | Toggles the visibility of the dropdown options. |
| `search` | Performs a search with the provided text parameter. |
| `update` | Updates the component configuration and rebuilds the interface. |
| `deselectAll` | Deselects all currently selected options. |
| `dispose` | Destroys the component instance and removes stored data. |
| `getInstance` | Static method to get the Bootstrap autocomplete instance associated with a DOM element. |

### Events

The Autocomplete component exposes several events for integrating with application logic.

| Event | Description |
| --- | --- |
| `changed.coreui.autocomplete` | Fires when an option is selected or the input value changes. |
| `show.coreui.autocomplete` | Event fires immediately when the show method is called. |
| `shown.coreui.autocomplete` | Fired when the dropdown has been made visible and CSS transitions completed. |
| `hide.coreui.autocomplete` | Event fires immediately when the hide method is called. |
| `hidden.coreui.autocomplete` | Fired when the dropdown has been hidden and CSS transitions completed. |
| `input.coreui.autocomplete` | Fires when the search input value changes. |

```js
const myAutocomplete = document.getElementById('myAutocomplete')
myAutocomplete.addEventListener('changed.coreui.autocomplete', event => {
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
- **Keyboard navigation**: Full keyboard support with arrow keys, Enter, Escape, and Tab
- **Focus management**: Proper focus handling and visual focus indicators
- **Semantic markup**: Uses appropriate HTML elements and structure

### Keyboard shortcuts

| Key | Action |
| --- | --- |
| <kbd>Arrow Down</kbd> | Navigate to the next option or open dropdown |
| <kbd>Arrow Up</kbd> | Navigate to the previous option |
| <kbd>Home</kbd> | Focus the first option |
| <kbd>End</kbd> | Focus the last option |
| <kbd>Enter</kbd> | Select the highlighted option |
| <kbd>Escape</kbd> | Close the dropdown and clear focus |
| <kbd>Tab</kbd> | Accept hint completion (when hints are enabled) |
| <kbd>Backspace</kbd>/<kbd>Delete</kbd> | Clear input and trigger search |

## Customizing

### CSS variables

Autocomplete components use local CSS variables on `.autocomplete` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported.

```scss
--cui-autocomplete-zindex: #{$autocomplete-zindex};
--cui-autocomplete-font-family: #{$autocomplete-font-family};
--cui-autocomplete-font-size: #{$autocomplete-font-size};
--cui-autocomplete-font-weight: #{$autocomplete-font-weight};
--cui-autocomplete-line-height: #{$autocomplete-line-height};
--cui-autocomplete-color: #{$autocomplete-color};
--cui-autocomplete-bg: #{$autocomplete-bg};
--cui-autocomplete-box-shadow: #{$autocomplete-box-shadow};
--cui-autocomplete-border-width: #{$autocomplete-border-width};
--cui-autocomplete-border-color: #{$autocomplete-border-color};
--cui-autocomplete-border-radius: #{$autocomplete-border-radius};
--cui-autocomplete-disabled-color: #{$autocomplete-disabled-color};
--cui-autocomplete-disabled-bg: #{$autocomplete-disabled-bg};
--cui-autocomplete-disabled-border-color: #{$autocomplete-disabled-border-color};
--cui-autocomplete-focus-color: #{$autocomplete-focus-color};
--cui-autocomplete-focus-bg: #{$autocomplete-focus-bg};
--cui-autocomplete-focus-border-color: #{$autocomplete-focus-border-color};
--cui-autocomplete-focus-box-shadow: #{$autocomplete-focus-box-shadow};
--cui-autocomplete-placeholder-color: #{$autocomplete-placeholder-color};
--cui-autocomplete-padding-y: #{$autocomplete-padding-y};
--cui-autocomplete-padding-x: #{$autocomplete-padding-x};
--cui-autocomplete-cleaner-width: #{$autocomplete-cleaner-width};
--cui-autocomplete-cleaner-height: #{$autocomplete-cleaner-height};
--cui-autocomplete-cleaner-padding-y: #{$autocomplete-cleaner-padding-y};
--cui-autocomplete-cleaner-padding-x: #{$autocomplete-cleaner-padding-x};
--cui-autocomplete-cleaner-icon: #{escape-svg($autocomplete-cleaner-icon)};
--cui-autocomplete-cleaner-icon-color: #{$autocomplete-cleaner-icon-color};
--cui-autocomplete-cleaner-icon-hover-color: #{$autocomplete-cleaner-icon-hover-color};
--cui-autocomplete-cleaner-icon-size: #{$autocomplete-cleaner-icon-size};
--cui-autocomplete-indicator-width: #{$autocomplete-indicator-width};
--cui-autocomplete-indicator-height: #{$autocomplete-indicator-height};
--cui-autocomplete-indicator-padding-y: #{$autocomplete-indicator-padding-y};
--cui-autocomplete-indicator-padding-x: #{$autocomplete-indicator-padding-x};
--cui-autocomplete-indicator-icon: #{escape-svg($autocomplete-indicator-icon)};
--cui-autocomplete-indicator-icon-color: #{$autocomplete-indicator-icon-color};
--cui-autocomplete-indicator-icon-hover-color: #{$autocomplete-indicator-icon-hover-color};
--cui-autocomplete-indicator-icon-size: #{$autocomplete-indicator-icon-size};
--cui-autocomplete-dropdown-min-width: #{$autocomplete-dropdown-min-width};
--cui-autocomplete-dropdown-bg: #{$autocomplete-dropdown-bg};
--cui-autocomplete-dropdown-border-width: #{$autocomplete-dropdown-border-width};
--cui-autocomplete-dropdown-border-color: #{$autocomplete-dropdown-border-color};
--cui-autocomplete-dropdown-border-radius: #{$autocomplete-dropdown-border-radius};
--cui-autocomplete-dropdown-box-shadow: #{$autocomplete-dropdown-box-shadow};
--cui-autocomplete-options-padding-y: #{$autocomplete-options-padding-y};
--cui-autocomplete-options-padding-x: #{$autocomplete-options-padding-x};
--cui-autocomplete-options-font-size: #{$autocomplete-options-font-size};
--cui-autocomplete-options-font-weight: #{$autocomplete-options-font-weight};
--cui-autocomplete-options-color: #{$autocomplete-options-color};
--cui-autocomplete-optgroup-label-padding-y: #{$autocomplete-optgroup-label-padding-y};
--cui-autocomplete-optgroup-label-padding-x: #{$autocomplete-optgroup-label-padding-x};
--cui-autocomplete-optgroup-label-font-size: #{$autocomplete-optgroup-label-font-size};
--cui-autocomplete-optgroup-label-font-weight: #{$autocomplete-optgroup-label-font-weight};
--cui-autocomplete-optgroup-label-color: #{$autocomplete-optgroup-label-color};
--cui-autocomplete-optgroup-label-text-transform: #{$autocomplete-optgroup-label-text-transform};
--cui-autocomplete-option-padding-y: #{$autocomplete-option-padding-y};
--cui-autocomplete-option-padding-x: #{$autocomplete-option-padding-x};
--cui-autocomplete-option-margin-y: #{$autocomplete-option-margin-y};
--cui-autocomplete-option-margin-x: #{$autocomplete-option-margin-x};
--cui-autocomplete-option-border-width: #{$autocomplete-option-border-width};
--cui-autocomplete-option-border-color: #{$autocomplete-option-border-color};
--cui-autocomplete-option-border-radius: #{$autocomplete-option-border-radius};
--cui-autocomplete-option-box-shadow: #{$autocomplete-option-box-shadow};
--cui-autocomplete-option-hover-color: #{$autocomplete-option-hover-color};
--cui-autocomplete-option-hover-bg: #{$autocomplete-option-hover-bg};
--cui-autocomplete-option-focus-box-shadow: #{$autocomplete-option-focus-box-shadow};
--cui-autocomplete-option-disabled-color: #{$autocomplete-option-disabled-color};
--cui-autocomplete-option-indicator-width: #{$autocomplete-option-indicator-width};
--cui-autocomplete-option-indicator-bg: #{$autocomplete-option-indicator-bg};
--cui-autocomplete-option-indicator-border: #{$autocomplete-option-indicator-border};
--cui-autocomplete-option-indicator-border-radius: #{$autocomplete-option-indicator-border-radius};
--cui-autocomplete-option-selected-bg: #{$autocomplete-option-selected-bg};
--cui-autocomplete-option-selected-indicator-bg: #{$autocomplete-option-selected-indicator-bg};
--cui-autocomplete-option-selected-indicator-bg-image: #{escape-svg($autocomplete-option-selected-indicator-bg-image)};
--cui-autocomplete-option-selected-indicator-border-color: #{$autocomplete-option-selected-indicator-border-color};
```

### SASS variables

```scss
$autocomplete-zindex:                    1000 !default;
$autocomplete-font-family:               $input-font-family !default;
$autocomplete-font-size:                 $input-font-size !default;
$autocomplete-font-weight:               $input-font-weight !default;
$autocomplete-line-height:               $input-line-height !default;
$autocomplete-padding-y:                 $input-padding-y !default;
$autocomplete-padding-x:                 $input-padding-x !default;
$autocomplete-color:                     $input-color !default;
$autocomplete-bg:                        $input-bg !default;
$autocomplete-box-shadow:                $box-shadow-inset !default;

$autocomplete-border-width:              $input-border-width !default;
$autocomplete-border-color:              $input-border-color !default;
$autocomplete-border-radius:             $input-border-radius !default;
$autocomplete-border-radius-sm:          $input-border-radius-sm !default;
$autocomplete-border-radius-lg:          $input-border-radius-lg !default;

$autocomplete-disabled-color:            $input-disabled-color !default;
$autocomplete-disabled-bg:               $input-disabled-bg !default;
$autocomplete-disabled-border-color:     $input-disabled-border-color !default;

$autocomplete-focus-color:               $input-focus-color !default;
$autocomplete-focus-bg:                  $input-focus-bg !default;
$autocomplete-focus-border-color:        $input-focus-border-color !default;
$autocomplete-focus-box-shadow:          $input-btn-focus-box-shadow !default;

$autocomplete-placeholder-color:         var(--cui-secondary-color) !default;

$autocomplete-invalid-border-color:      $form-invalid-border-color !default;
$autocomplete-valid-border-color:        $form-valid-border-color !default;

$autocomplete-cleaner-width:             1.5rem !default;
$autocomplete-cleaner-height:            1.5rem !default;
$autocomplete-cleaner-padding-x:         0 !default;
$autocomplete-cleaner-padding-y:         0 !default;
$autocomplete-cleaner-icon:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#000'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>") !default;
$autocomplete-cleaner-icon-color:        var(--cui-tertiary-color) !default;
$autocomplete-cleaner-icon-hover-color:  var(--cui-body-color) !default;
$autocomplete-cleaner-icon-size:         .625rem !default;

$autocomplete-indicator-width:             1.5rem !default;
$autocomplete-indicator-height:            1.5rem !default;
$autocomplete-indicator-padding-x:         0 !default;
$autocomplete-indicator-padding-y:         0 !default;
$autocomplete-indicator-icon:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='#000'><path d='M256.045 416.136.717 160.807l29.579-29.579 225.749 225.748 225.749-225.748 29.579 29.579-255.328 255.329z'/></svg>") !default;
$autocomplete-indicator-icon-color:        var(--cui-tertiary-color) !default;
$autocomplete-indicator-icon-hover-color:  var(--cui-body-color) !default;
$autocomplete-indicator-icon-size:         .75rem !default;

$autocomplete-dropdown-min-width:        100% !default;
$autocomplete-dropdown-bg:               var(--cui-body-bg) !default;
$autocomplete-dropdown-border-color:     var(--cui-border-color) !default;
$autocomplete-dropdown-border-width:     var(--cui-border-width) !default;
$autocomplete-dropdown-border-radius:    var(--cui-border-radius) !default;
$autocomplete-dropdown-box-shadow:       var(--cui-box-shadow) !default;

$autocomplete-options-padding-y:         .5rem !default;
$autocomplete-options-padding-x:         .5rem !default;
$autocomplete-options-font-size:         $font-size-base !default;
$autocomplete-options-font-weight:       $font-weight-normal !default;
$autocomplete-options-color:             var(--cui-body-color) !default;

$autocomplete-optgroup-label-padding-y:       .5rem !default;
$autocomplete-optgroup-label-padding-x:       .625rem !default;
$autocomplete-optgroup-label-font-size:       80% !default;
$autocomplete-optgroup-label-font-weight:     $font-weight-bold !default;
$autocomplete-optgroup-label-color:           var(--cui-tertiary-color) !default;
$autocomplete-optgroup-label-text-transform:  uppercase !default;

$autocomplete-option-padding-y:               .5rem !default;
$autocomplete-option-padding-x:               .75rem !default;
$autocomplete-option-margin-y:                1px !default;
$autocomplete-option-margin-x:                0 !default;
$autocomplete-option-border-width:            $input-border-width !default;
$autocomplete-option-border-color:            transparent !default;
$autocomplete-option-border-radius:           var(--cui-border-radius) !default;
$autocomplete-option-box-shadow:              $box-shadow-inset !default;

$autocomplete-option-hover-color:             var(--cui-body-color) !default;
$autocomplete-option-hover-bg:                var(--cui-tertiary-bg) !default;

$autocomplete-option-focus-box-shadow:        $input-btn-focus-box-shadow !default;

$autocomplete-option-indicator-width:          1em !default;
$autocomplete-option-indicator-bg:             $form-check-input-bg !default;
$autocomplete-option-indicator-border:         $form-check-input-border !default;
$autocomplete-option-indicator-border-radius:  .25em !default;

$autocomplete-option-selected-bg:                      var(--cui-secondary-bg) !default;
$autocomplete-option-selected-indicator-bg:            $form-check-input-checked-bg-color !default;
$autocomplete-option-selected-indicator-bg-image:      $form-check-input-checked-bg-image !default;
$autocomplete-option-selected-indicator-border-color:  $autocomplete-option-selected-indicator-bg !default;

$autocomplete-option-disabled-color:        var(--cui-secondary-color) !default;

$autocomplete-font-size-lg:                 $input-font-size-lg !default;
$autocomplete-padding-y-lg:                 $input-padding-y-lg !default;
$autocomplete-padding-x-lg:                 $input-padding-x-lg !default;

$autocomplete-font-size-sm:                 $input-font-size-sm !default;
$autocomplete-padding-y-sm:                 $input-padding-y-sm !default;
$autocomplete-padding-x-sm:                 $input-padding-x-sm !default;
```
