# Bootstrap 5 Multi Select

> Customize the native `<select>`s with a powerful Bootstrap Multi-Select component that changes the element's initial appearance and brings some new functionalities.

## Basic example

A straightforward demonstration of how to implement a basic Bootstrap Multi Select dropdown, highlighting essential attributes and configurations.

```html
<select id="ms1" data-coreui-multi-select multiple data-coreui-search="global">
  <option value="0">Angular</option>
  <option value="1">Bootstrap</option>
  <option value="2">React.js</option>
  <option value="3">Vue.js</option>
  <optgroup label="backend">
    <option value="4">Django</option>
    <option value="5">Laravel</option>
    <option value="6">Node.js</option>
  </optgroup>
</select>
```

```html
<select data-coreui-multi-select multiple data-coreui-search="true">
  <option value="0">Angular</option>
  <option value="1" disabled>Bootstrap</option>
  <option value="2">React.js</option>
  <option value="3">Vue.js</option>
  <optgroup label="backend">
    <option value="4" disabled>Django</option>
    <option value="5">Laravel</option>
    <option value="6">Node.js</option>
  </optgroup>
</select>
```

## Data source

Learn how to populate the multi-select component with data from various sources, including arrays and objects, for dynamic content integration.

### Option elements

If you want to create a multi-select dropdown with predefined options, use the `<option>` elements inside the `<select>` tag.

```html
<select data-coreui-multi-select multiple data-coreui-search="true">
  <option value="0" selected>Angular</option>
  <option value="1">Bootstrap</option>
  <option value="2">React.js</option>
  <option value="3">Vue.js</option>
  <optgroup label="backend">
    <option value="4">Django</option>
    <option value="5" selected>Laravel</option>
    <option value="6">Node.js</option>
  </optgroup>
</select>
```

### Array data

To dynamically populate a multi-select dropdown with options from an array, start with an empty `<select>` element. Use JavaScript to add options programmatically. This allows for more flexible and dynamic content management.

```html
<select id="multiSelect" name="multiSelect"></select>
```

We use the following JavaScript to set up our multi-select:

```js
const myMultiSelect = document.getElementById('multiSelect')

new coreui.MultiSelect(myMultiSelect, {
  name: 'multiSelect',
  options: [
    {
      label: 'frontend',
      options: [
        {
          value: 0,
          text: 'Angular'
        },
        {
          value: 1,
          text: 'Bootstrap',
          selected: true
        },
        {
          value: 2,
          text: 'React.js',
          selected: true
        },
        {
          value: 3,
          text: 'Vue.js'
        }
      ]
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          text: 'Django'
        },
        {
          value: 5,
          text: 'Laravel'
        },
        {
          value: 6,
          text: 'Node.js',
          selected: true
        }
      ]
    }
  ],
  search: true
})
```

## Search

You can configure the search functionality within the component. The `data-coreui-search` option determines how the search input element is enabled and behaves. It accepts multiple types to provide flexibility in configuring search behavior. By default is set to `false`.

```html
<select data-coreui-multi-select multiple>
  <option value="0">Angular</option>
  <option value="1">Bootstrap</option>
  <option value="2">React.js</option>
  <option value="3">Vue.js</option>
  <optgroup label="backend">
    <option value="4">Django</option>
    <option value="5">Laravel</option>
    <option value="6">Node.js</option>
  </optgroup>
</select>
```

### Standard search

To enable the default search input element with standard behavior, please add `data-coreui-search="true"` like in the example below:

```html
<select data-coreui-multi-select multiple data-coreui-search="true">
  <option value="0">Angular</option>
  <option value="1">Bootstrap</option>
  <option value="2">React.js</option>
  <option value="3">Vue.js</option>
  <optgroup label="backend">
    <option value="4">Django</option>
    <option value="5">Laravel</option>
    <option value="6">Node.js</option>
  </optgroup>
</select>
```

### Global search

_Added in 5.6.0._

To enable the global search functionality within the Multi Select component, please add `data-coreui-search="global"`. When `data-coreui-search` is set to `'global'`, the user can perform searches across the entire component, regardless of where their focus is within the component. This allows for a more flexible and intuitive search experience, ensuring the search input is recognized from any point within the component.

```html
<select data-coreui-multi-select multiple data-coreui-search="global">
  <option value="0">Angular</option>
  <option value="1">Bootstrap</option>
  <option value="2">React.js</option>
  <option value="3">Vue.js</option>
  <optgroup label="backend">
    <option value="4">Django</option>
    <option value="5">Laravel</option>
    <option value="6">Node.js</option>
  </optgroup>
</select>
```

## Selection types

Explore different selection modes, including single and multiple selections, allowing customization based on user requirements.

### Text

If you want to enable users to select multiple options as text entries, add the `data-coreui-selection-type="text"`. This configuration includes search functionality, making it easier to filter options by typing.

```html
<select id="multiple-select-text" data-coreui-multi-select multiple data-coreui-selection-type="text" data-coreui-search="true">
  <option value="0">Angular</option>
  <option value="1">Bootstrap</option>
  <option value="2">React.js</option>
  <option value="3">Vue.js</option>
  <optgroup label="backend">
    <option value="4">Django</option>
    <option value="5">Laravel</option>
    <option value="6">Node.js</option>
  </optgroup>
</select>
```

### Tag

If you want to display selected options as tags, add the `data-coreui-selection-type="tags"`. This mode is useful for visually grouping selected items. The search functionality is also enabled for better user experience.

```html
<select id="multiple-select-tag" data-coreui-multi-select multiple data-coreui-selection-type="tags" data-coreui-search="true">
  <option value="0">Angular</option>
  <option value="1">Bootstrap</option>
  <option value="2">React.js</option>
  <option value="3">Vue.js</option>
  <optgroup label="backend">
    <option value="4">Django</option>
    <option value="5">Laravel</option>
    <option value="6">Node.js</option>
  </optgroup>
</select>
```

### Counter

If you prefer to show a counter indicating the number of selected options, add the `data-coreui-selection-type="counter"`. This helps users keep track of their selections and includes search functionality for filtering options.

```html
<select id="multiple-select-counter" data-coreui-multi-select multiple data-coreui-selection-type="counter" data-coreui-search="true">
  <option value="0">Angular</option>
  <option value="1">Bootstrap</option>
  <option value="2">React.js</option>
  <option value="3">Vue.js</option>
  <optgroup label="backend">
    <option value="4">Django</option>
    <option value="5">Laravel</option>
    <option value="6">Node.js</option>
  </optgroup>
</select>
```

## Select all

_Added in 5.26.0._

When `multiple` is enabled, a **select all** button is rendered in the dropdown header (toggle it with the `selectAll` option, on by default). The button works as a toggle: it selects every option and its label switches to `deselectAllLabel`, then deselects everything on the next click.

With the default `selectAllStyle: 'checkbox'` the button shows a tri-state indicator that mirrors the overall selection — `none` when nothing is selected, `all` when everything is, and `indeterminate` in between. Set `selectAllStyle: 'text'` for a plain text toggle instead.

```html
<select id="multiSelectSelectAll" data-coreui-multi-select multiple data-coreui-search="true">
  <option value="0">Angular</option>
  <option value="1">Bootstrap</option>
  <option value="2">React.js</option>
  <option value="3">Vue.js</option>
  <optgroup label="backend">
    <option value="4">Django</option>
    <option value="5">Laravel</option>
    <option value="6">Node.js</option>
  </optgroup>
</select>
```

### How it interacts with other features

- **[Selection limit](#selection-limit):** with `selectionLimit` set, select all selects options only up to the limit (firing the `selectionLimit` event) and then toggles to deselect all.
- **[Selectable groups](#selectable-groups):** with `optionsGroupsSelectable`, each group label becomes its own tri-state checkbox that toggles just that group, while the header select all reflects the whole list.
- **Search:** by default (`selectAllMode: 'all'`) the header button acts on the full list, ignoring the current filter. Set `selectAllMode: 'filtered'` to make it act on the search-filtered options instead (see below).

### Acting on filtered options

Set `selectAllMode: 'filtered'` to scope the built-in select all button to the options currently matched by the search filter. The button's label and checkbox then answer "are all *filtered* options selected?". With no active filter, every option matches, so this behaves exactly like `'all'`.

To avoid a misleading "Select all" while a filter is active, the label switches to `selectFilteredLabel` / `deselectFilteredLabel` (default `Select filtered` / `Deselect filtered`) whenever the filter actually narrows the list — and falls back to `selectAllLabel` / `deselectAllLabel` when nothing is hidden.

Type into the search box below, then use select all — only the matching options are selected.

```html
<select id="multiSelectSelectAllMode" data-coreui-multi-select multiple data-coreui-search="true" data-coreui-select-all-mode="filtered">
  <option value="0">Angular</option>
  <option value="1">Bootstrap</option>
  <option value="2">React.js</option>
  <option value="3">Vue.js</option>
  <optgroup label="backend">
    <option value="4">Django</option>
    <option value="5">Laravel</option>
    <option value="6">Node.js</option>
  </optgroup>
</select>
```

Because the scope follows the filter, a side effect is worth knowing: if you select all options while a filter is active (so the checkbox shows `all`) and then clear the search, the checkbox drops to `indeterminate` — the previously hidden, unselected options are now back in the list, so not everything in view is selected anymore.

The same scoping is available programmatically through `selectFiltered` / `deselectFiltered`, regardless of `selectAllMode`:

```js
const multiSelect = coreui.MultiSelect.getInstance(document.getElementById('myMultiSelect'))

multiSelect.selectFiltered() // select only the search-filtered options
multiSelect.deselectFiltered() // deselect only the search-filtered options
```

To surface these as buttons inside the dropdown, render them through the [custom dropdown header](#custom-dropdown-header) `actions`.

### Hiding select all when search has no results

_Added in 5.27.0._

When `search` is enabled and the user types a query that matches no options, there is nothing left to select — so leaving the **select all** button visible above the empty "No results found" message is misleading. By default (`hideSelectAllOnSearchNoResults: true`) the component hides the whole dropdown header in that case, and brings it back as soon as the search matches at least one option again.

Type a query that matches nothing (for example `xyz`) into the example below — the select all button disappears together with the options, then returns when you clear or change the search.

```html
<select id="multiSelectHideSelectAll" data-coreui-multi-select multiple data-coreui-search="true">
  <option value="0">Angular</option>
  <option value="1">Bootstrap</option>
  <option value="2">React.js</option>
  <option value="3">Vue.js</option>
  <optgroup label="backend">
    <option value="4">Django</option>
    <option value="5">Laravel</option>
    <option value="6">Node.js</option>
  </optgroup>
</select>
```

Set `hideSelectAllOnSearchNoResults: false` to keep the header (and the select all button) visible even when the search returns no results.

```html
<select id="multiSelectKeepSelectAll" data-coreui-multi-select multiple data-coreui-search="true" data-coreui-hide-select-all-on-search-no-results="false">
  <option value="0">Angular</option>
  <option value="1">Bootstrap</option>
  <option value="2">React.js</option>
  <option value="3">Vue.js</option>
  <optgroup label="backend">
    <option value="4">Django</option>
    <option value="5">Laravel</option>
    <option value="6">Node.js</option>
  </optgroup>
</select>
```

This option only affects the built-in select all button. A [custom dropdown header](#custom-dropdown-header) is always rendered, since it may contain controls unrelated to the options list.

## Selection limit

_Added in 5.26.0._

Use `data-coreui-selection-limit` to limit how many options can be selected. The select all button stays enabled and selects options up to the limit, then toggles to deselect all once the limit is reached. The `selectionLimit.coreui.multi-select` event can be used to show feedback when a user tries to select more options than allowed.

```html
<select id="multiSelectSelectionLimit" data-coreui-multi-select multiple data-coreui-search="true" data-coreui-selection-limit="3">
  <option value="0">Angular</option>
  <option value="1">Bootstrap</option>
  <option value="2">React.js</option>
  <option value="3">Vue.js</option>
  <optgroup label="backend">
    <option value="4">Django</option>
    <option value="5">Laravel</option>
    <option value="6">Node.js</option>
  </optgroup>
</select>
```

We use the following JavaScript to show a toast when the selection limit is reached. The toast container is created on demand and appended to `<body>`, so it floats above the page instead of being constrained by the example:

```js
const getMultiSelectSelectionLimitToastContainer = () => {
  let container = document.getElementById('multiSelectSelectionLimitToastContainer')

  if (!container) {
    container = document.createElement('div')
    container.id = 'multiSelectSelectionLimitToastContainer'
    container.className = 'toast-container position-fixed bottom-0 end-0 p-3'
    container.setAttribute('aria-live', 'polite')
    container.setAttribute('aria-atomic', 'true')
    document.body.append(container)
  }

  return container
}

const showMultiSelectSelectionLimitToast = message => {
  const toast = document.createElement('div')
  toast.classList.add('toast')
  toast.setAttribute('role', 'alert')
  toast.setAttribute('aria-live', 'assertive')
  toast.setAttribute('aria-atomic', 'true')
  toast.innerHTML = [
    '<div class="toast-header">',
    '  <strong class="me-auto">Selection limit</strong>',
    '  <button type="button" class="btn-close" data-coreui-dismiss="toast" aria-label="Close"></button>',
    '</div>',
    `<div class="toast-body">${message}</div>`
  ].join('')

  getMultiSelectSelectionLimitToastContainer().append(toast)

  toast.addEventListener('hidden.coreui.toast', () => {
    toast.remove()
  })

  coreui.Toast.getOrCreateInstance(toast).show()
}

document.addEventListener('selectionLimit.coreui.multi-select', event => {
  if (event.target.id !== 'multiSelectSelectionLimit') {
    return
  }

  showMultiSelectSelectionLimitToast(`You can select up to ${event.selectionLimit} options.`)
})
```

## Single Select

Add the `data-coreui-multiple="false"` boolean attribute to implement single-selection mode, enabling users to select only one option from the dropdown at a time.

```html
<select id="single-select-example" data-coreui-multi-select data-coreui-multiple="false">
  <option value="0">Angular</option>
  <option value="1">Bootstrap</option>
  <option value="2">React.js</option>
  <option value="3">Vue.js</option>
  <optgroup label="backend">
    <option value="4">Django</option>
    <option value="5">Laravel</option>
    <option value="6">Node.js</option>
  </optgroup>
</select>
```

## Disabled

Add the `data-coreui-disabled="true"` boolean attribute to give it a grayed out appearance, remove pointer events, and prevent focusing.

```html
<select id="ms1-disabled" data-coreui-multi-select multiple data-coreui-search="true"  data-coreui-disabled="true">
  <option value="0">Angular</option>
  <option value="1">Bootstrap</option>
  <option value="2">React.js</option>
  <option value="3">Vue.js</option>
  <optgroup label="backend">
    <option value="4">Django</option>
    <option value="5">Laravel</option>
    <option value="6">Node.js</option>
  </optgroup>
</select>
```

## Custom templates

The CoreUI Bootstrap Multi Select Component provides the flexibility to personalize options and group labels by utilizing custom templates. You can easily customize the options using the `optionsTemplate`, and for groups, you can use `optionsGroupsTemplate`, as demonstrated in the examples below:

```html
<div class="row">
  <div class="col-md-6">
    <select id="myMultiSelectCountries" data-coreui-multi-select></select>
  </div>
  <div class="col-md-6">
    <select id="myMultiSelectCountriesAndCities" data-coreui-multi-select></select>
  </div>
</div>
```

We use the following JavaScript to set up our multi-select:

```js
const myMultiSelectCountries = document.getElementById('myMultiSelectCountries')
const myMultiSelectCountriesAndCities = document.getElementById('myMultiSelectCountriesAndCities')

const countries = [
  {
    value: 'pl',
    text: 'Poland',
    flag: '🇵🇱'
  },
  {
    value: 'de',
    text: 'Germany',
    flag: '🇩🇪'
  },
  {
    value: 'us',
    text: 'United States',
    flag: '🇺🇸'
  },
  {
    value: 'es',
    text: 'Spain',
    flag: '🇪🇸'
  },
  {
    value: 'gb',
    text: 'United Kingdom',
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
        text: 'Austin'
      },
      {
        value: 'ch',
        text: 'Chicago'
      },
      {
        value: 'la',
        text: 'Los Angeles'
      },
      {
        value: 'ny',
        text: 'New York'
      },
      {
        value: 'sa',
        text: 'San Jose'
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
        text: 'Liverpool'
      },
      {
        value: 'lo',
        text: 'London'
      },
      {
        value: 'ma',
        text: 'Manchester'
      }
    ]
  }
]

new coreui.MultiSelect(myMultiSelectCountries, {
  cleaner: true,
  multiple: true,
  options: countries,
  optionsTemplate(option) {
    return `<div class="d-flex align-items-center gap-2"><span class="fs-5">${option.flag}</span><span>${option.text}</span></div>`
  },
  placeholder: 'Select countries',
  search: true,
  selectAllLabel: 'Select all countries',
  deselectAllLabel: 'Deselect all countries',
  selectionType: 'tags'
})

new coreui.MultiSelect(myMultiSelectCountriesAndCities, {
  cleaner: true,
  multiple: true,
  options: cities,
  optionsGroupsTemplate(optionGroup) {
    return `<div class="d-flex align-items-center gap-2"><span class="text-body fs-5">${optionGroup.flag}</span><span>${optionGroup.label}</span></div>`
  },
  placeholder: 'Select cities',
  search: true,
  selectAllLabel: 'Select all cities',
  deselectAllLabel: 'Deselect all cities',
  selectionType: 'tags'
})
```

## Custom dropdown header

_Added in 5.26.0._

Use the `headerTemplate` option to fully customize the dropdown header — the area above the options list — including rendering several action buttons. It renders independently of `selectAll`. The template function receives a `state` object (`{ selected, total, filtered, filteredSelected }`) and an `actions` object with bound component methods (`selectAll`, `selectFiltered`, `deselectFiltered`, `deselectAll`). Return an `HTMLElement` and wire your own listeners to the `actions`, or return an HTML string (sanitized) for simple custom content. The header re-renders on every selection change and search filter, so labels and `disabled` states stay up to date.

```html
<select id="myMultiSelectHeader" data-coreui-multi-select></select>
```

We use the following JavaScript to set up our multi-select:

```js
const myMultiSelectHeader = document.getElementById('myMultiSelectHeader')

new coreui.MultiSelect(myMultiSelectHeader, {
  multiple: true,
  options: [
    { value: 'angular', text: 'Angular' },
    { value: 'bootstrap', text: 'Bootstrap' },
    { value: 'react', text: 'React.js' },
    { value: 'vue', text: 'Vue.js' },
    { value: 'django', text: 'Django' },
    { value: 'laravel', text: 'Laravel' },
    { value: 'node', text: 'Node.js' }
  ],
  placeholder: 'Select frameworks',
  search: true,
  selectionType: 'tags',
  headerTemplate(state, actions) {
    const wrapper = document.createElement('div')
    wrapper.className = 'd-flex flex-wrap gap-2'

    const selectAll = document.createElement('button')
    selectAll.type = 'button'
    selectAll.className = 'btn btn-sm btn-primary'
    selectAll.textContent = `Select all (${state.total})`
    selectAll.disabled = state.selected >= state.total
    selectAll.addEventListener('click', () => actions.selectAll())

    const selectFiltered = document.createElement('button')
    selectFiltered.type = 'button'
    selectFiltered.className = 'btn btn-sm btn-secondary'
    selectFiltered.textContent = `Select filtered (${state.filtered})`
    selectFiltered.disabled = state.filtered === state.filteredSelected
    selectFiltered.addEventListener('click', () => actions.selectFiltered())

    const deselectFiltered = document.createElement('button')
    deselectFiltered.type = 'button'
    deselectFiltered.className = 'btn btn-sm btn-outline-secondary'
    deselectFiltered.textContent = `Deselect filtered (${state.filteredSelected})`
    deselectFiltered.disabled = state.filteredSelected === 0
    deselectFiltered.addEventListener('click', () => actions.deselectFiltered())

    const deselectAll = document.createElement('button')
    deselectAll.type = 'button'
    deselectAll.className = 'btn btn-sm btn-outline-danger'
    deselectAll.textContent = `Deselect all (${state.selected})`
    deselectAll.disabled = state.selected === 0
    deselectAll.addEventListener('click', () => actions.deselectAll())

    wrapper.append(selectAll, selectFiltered, deselectFiltered, deselectAll)
    return wrapper
  }
})
```

## Selectable groups

_Added in 5.26.0._

Enable `optionsGroupsSelectable` to turn each group label into its own tri-state checkbox that toggles the whole group. Because the indicator is rendered with CSS, it supports a third, `indeterminate` state — shown when only some of a group's options are selected — without any real `<input />` element. The same tri-state logic drives the header [select all](#select-all) button when `selectAllStyle: 'checkbox'`. Each section's indicator follows its own `*Style` option (`optionsStyle`, `optionsGroupsStyle`, `selectAllStyle`, all defaulting to `'checkbox'`) and requires `multiple`.

```html
<select id="myMultiSelectIndeterminate" data-coreui-multi-select></select>
```

We use the following JavaScript to set up our multi-select:

```js
const myMultiSelectIndeterminate = document.getElementById('myMultiSelectIndeterminate')

new coreui.MultiSelect(myMultiSelectIndeterminate, {
  multiple: true,
  optionsGroupsSelectable: true,
  options: [
    {
      label: 'Frontend',
      options: [
        { value: 'angular', text: 'Angular' },
        { value: 'react', text: 'React.js' },
        { value: 'vue', text: 'Vue.js' }
      ]
    },
    {
      label: 'Backend',
      options: [
        { value: 'django', text: 'Django' },
        { value: 'laravel', text: 'Laravel' },
        { value: 'node', text: 'Node.js' }
      ]
    }
  ],
  placeholder: 'Select frameworks',
  search: true,
  selectAllStyle: 'checkbox',
  selectionType: 'counter'
})
```

## Sizing

You may also choose from small and large multi selects to match our similarly sized text inputs.

```html
<div class="row">
  <div class="col-md-6">
    <select id="multiple-select-counter-lg" class="form-multi-select-lg mb-3" data-coreui-multi-select data-coreui-selection-type="counter" data-coreui-search="true">
      <option value="0">Angular</option>
      <option value="1">Bootstrap</option>
      <option value="2">React.js</option>
      <option value="3">Vue.js</option>
      <optgroup label="backend">
        <option value="4">Django</option>
        <option value="5">Laravel</option>
        <option value="6">Node.js</option>
      </optgroup>
    </select>
    <select id="multiple-select-counter-sm" class="form-multi-select-sm" data-coreui-multi-select data-coreui-selection-type="counter" data-coreui-search="true">
      <option value="0">Angular</option>
      <option value="1">Bootstrap</option>
      <option value="2">React.js</option>
      <option value="3">Vue.js</option>
      <optgroup label="backend">
        <option value="4">Django</option>
        <option value="5">Laravel</option>
        <option value="6">Node.js</option>
      </optgroup>
    </select>
  </div>
  <div class="col-md-6">
    <select id="multiple-select-tags-lg" class="form-multi-select-lg mb-3" data-coreui-multi-select data-coreui-selection-type="tags" data-coreui-search="true">
      <option value="0">Angular</option>
      <option value="1">Bootstrap</option>
      <option value="2">React.js</option>
      <option value="3">Vue.js</option>
      <optgroup label="backend">
        <option value="4">Django</option>
        <option value="5">Laravel</option>
        <option value="6">Node.js</option>
      </optgroup>
    </select>
    <select id="multiple-select-tags-sm" class="form-multi-select-sm" data-coreui-multi-select data-coreui-selection-type="tags" data-coreui-search="true">
      <option value="0">Angular</option>
      <option value="1">Bootstrap</option>
      <option value="2">React.js</option>
      <option value="3">Vue.js</option>
      <optgroup label="backend">
        <option value="4">Django</option>
        <option value="5">Laravel</option>
        <option value="6">Node.js</option>
      </optgroup>
    </select>
  </div>
</div>
```

## Usage

### Via data attributes

Add the `data-coreui-multi-select` attribute to a `select` element.

```html
<select id="ms1" data-coreui-multi-select multiple data-coreui-search="true">
  <option value="0">Angular</option>
  <option value="1">Bootstrap</option>
  <option value="2">React.js</option>
  <option value="3">Vue.js</option>
  <optgroup label="backend">
    <option value="4">Django</option>
    <option value="5">Laravel</option>
    <option value="6">Node.js</option>
  </optgroup>
</select>
```

### Via JavaScript

Call the multi select via JavaScript:

```html
<select data-coreui-multi-select></select>
```

```js
const mulitSelectElementList = Array.prototype.slice.call(document.querySelectorAll('[data-coreui-multi-select]'))
const mulitSelectList = mulitSelectElementList.map(mulitSelectEl => {
  return new coreui.MultiSelect(mulitSelectEl, {
    // options
  })
})
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-animation="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-custom-class="beautifier"` rather than `data-coreui-customClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | `DefaultAllowlist` | Object containing allowed tags and attributes for HTML sanitization when using custom templates. |
| `ariaCleanerLabel`| string | `Clear all selections` | A string that provides an accessible label for the cleaner button. This label is read by screen readers to describe the action associated with the button. |
| `ariaSearchLabel`| string | `Search` | Accessible label for the search input (when `search` is enabled). |
| `ariaTagDeleteLabel`| string | `Remove` | Accessible label prefix for a tag's delete button (selection type `tags`). The selected option's text is appended, so screen readers announce e.g. "Remove Angular". |
| `cleaner`| boolean | `true` | Enables selection cleaner element. |
| `clearSearchOnSelect`| boolean | `false` | Clear current search on selecting an item. |
| `container` | string, element, false | `false` | Appends the dropdown to a specific element. Example: `container: 'body'`. |
| `deselectAllLabel` | string | `'Deselect all'` | Sets the select all button label shown once everything is selected. See `selectAllLabel`. |
| `deselectFilteredLabel` | string | `'Deselect filtered'` | Label shown instead of `deselectAllLabel` when `selectAllMode: 'filtered'` and a search filter narrows the list. See `selectFilteredLabel`. |
| `disabled` | boolean | `false` | Toggle the disabled state for the component. |
| `headerTemplate` | function, null | `null` | Custom template function for rendering the dropdown header (the area above the options list). Renders independently of `selectAll`. Receives a `state` object (`{ selected, total, filtered, filteredSelected }`) and an `actions` object (`{ selectAll, deselectAll, selectFiltered, deselectFiltered }`) with bound component methods. Return an `HTMLElement` (wire your own listeners using `actions`, supports multiple controls) or an HTML string (sanitized, no actions wired). Re-renders on every selection change and search filter. |
| `hideSelectAllOnSearchNoResults` | boolean | `true` | Hides the dropdown header with the built-in select all button when a search filter leaves no matching options. Set to `false` to keep the select all button visible even when there are no results. |
| `invalid` | boolean | `false` | Toggle the invalid state for the component. |
| `multiple` | boolean | `true` | It specifies that multiple options can be selected at once. |
| `name` | string, null | `null` | Set the name attribute for the native select element. |
| `options` | boolean, array | `false` | List of option elements. |
| `optionsGroupsSelectable` | boolean | `false` | When enabled (with `optionsGroupsStyle: 'checkbox'` and `multiple`), each option group label becomes a tri-state checkbox: clicking it toggles the whole group, and it reflects `none` / `all` / `indeterminate` based on the group's selected options. |
| `optionsGroupsStyle` | string | `'checkbox'` | Sets the option group label style: `'checkbox'` or `'text'`. Controls the checkbox appearance used by `optionsGroupsSelectable`. |
| `optionsGroupsTemplate` | function, null | `null` | Custom template function for rendering option group labels. Receives the group object as parameter. |
| `optionsMaxHeight` | number, string | `'auto'` | Sets `max-height` of options list.	 |
| `optionsStyle` | string | `'checkbox'` | Sets the option style: `'checkbox'` or `'text'`. |
| `optionsTemplate` | function, null | `null` | Custom template function for rendering individual options. Receives the option object as parameter. |
| `placeholder` | string | `'Select...'` | Specifies a short hint that is visible in the input. |
| `required` | boolean | `false` | Makes the input field required for form validation. |
| `sanitize` | boolean | `true` | Enables HTML sanitization for custom templates to prevent XSS attacks. |
| `sanitizeFn` | function, null | `null` | Custom sanitization function. If provided, it will be used instead of the built-in sanitizer. |
| `search` | boolean, string | `false` | Enables search input element. When set to `'global'`, the user can perform searches across the entire component, regardless of where their focus is within the component. |
| `searchNoResultsLabel` | string | `'No results found'` | Sets the label for no results when filtering.	|
| `selectAll` | boolean | `true` | Enables select all button.|
| `selectAllLabel` | string | `'Select all'` | Sets the select all button label shown until everything is selected. The button is a toggle: it shows `selectAllLabel` (and selects all) until everything is selected, then shows `deselectAllLabel` (and deselects all). |
| `selectAllMode` | string | `'all'` | Scope of the built-in select all button: `'all'` toggles every option (ignoring the search filter), `'filtered'` toggles only the search-filtered options. With no active filter both behave the same. |
| `selectAllStyle` | string | `'checkbox'` | Sets the select all button style: `'checkbox'` or `'text'`. With `'checkbox'` (and `multiple`), the built-in select all button shows a tri-state checkbox indicator (`none` / `all` / `indeterminate`) reflecting the overall selection, and clicking it toggles between selecting and deselecting all. |
| `selectionLimit` | number, null | `null` | Sets the maximum number of selectable options. The select all button stays enabled and selects up to the limit (firing the `selectionLimit` event), then toggles to deselect all once the limit is reached. |
| `selectFilteredLabel` | string | `'Select filtered'` | Label shown instead of `selectAllLabel` when `selectAllMode: 'filtered'` and a search filter narrows the list, so the button reads as acting on the filtered options rather than the whole list. |
| `selectionType` | string | `'tag'` | Sets the selection style.	 |
| `selectionTypeCounterText` | string | `'item(s) selected'` | Sets the counter selection label.	|
| `valid` | boolean | `false` | Toggle the valid state for the component. |
| `value` | boolean | `null` | Sets the initially selected values for the multi-select component. |

### Methods

| Method | Description |
| --- | --- |
| `show` | Shows the multi select's options. |
| `hide` | Hides the multi select's options. |
| `update` | Updates the configuration of multi select. |
| `selectAll` | Select all options. |
| `selectFiltered` | Select only the currently filtered (search-matched) options. |
| `deselectFiltered` | Deselect only the currently filtered (search-matched) options. |
| `deselectAll` | Deselect all options. |
| `dispose` | Destroys an element's multi select. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the multi select instance associated with a DOM element. |
| `getValue` | Returns the array with selected elements. |

### Events

Multi Select component exposes a few events for hooking into multi select functionality.

| Method | Description |
| --- | --- |
| `changed.coreui.multi-select` | Fires immediately when an option is selected or deselected. |
| `selectionLimit.coreui.multi-select` | Fires when selecting an option is blocked because the selection limit has been reached. |
| `show.coreui.multi-select` | Fires immediately when the show instance method is called. |
| `shown.coreui.multi-select` | Fired when the multi select options have been made visible to the user and CSS transitions have completed. |
| `hide.coreui.multi-select` | Fires immediately when the hide instance method has been called. |
| `hidden.coreui.multi-select` | Fired when the multi select options have finished being hidden from the user and CSS transitions have completed. |

```js
const myMutliSelect = document.getElementById('myMutliSelect')
myMutliSelect.addEventListener('changed.coreui.multi-select', event => {
  // Get the list of selected options.
  const selected = event.value
})
```

## Accessibility

### Keyboard shortcuts

| Key | Action |
| --- | --- |
| <kbd>Tab</kbd> | Navigate to/from the component |
| <kbd>Enter</kbd>/<kbd>Space</kbd> | Open dropdown or select focused option |
| <kbd>Arrow Up</kbd>/<kbd>Arrow Down</kbd> | Navigate through options |
| <kbd>Home</kbd> | Focus the first option |
| <kbd>End</kbd> | Focus the last option |
| <kbd>Escape</kbd> | Close the dropdown |
| <kbd>Backspace</kbd>/<kbd>Delete</kbd> | Remove last selected item (when search is empty) |

## Customizing

### CSS variables

MultiSelects use local CSS variables on `.multi-select` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-form-multi-select-zindex: #{$form-multi-select-zindex};
--cui-form-multi-select-font-family: #{$form-multi-select-font-family};
--cui-form-multi-select-font-size: #{$form-multi-select-font-size};
--cui-form-multi-select-font-weight: #{$form-multi-select-font-weight};
--cui-form-multi-select-line-height: #{$form-multi-select-line-height};
--cui-form-multi-select-color: #{$form-multi-select-color};
--cui-form-multi-select-bg: #{$form-multi-select-bg};
--cui-form-multi-select-box-shadow: #{$form-multi-select-box-shadow};
--cui-form-multi-select-border-width: #{$form-multi-select-border-width};
--cui-form-multi-select-border-color: #{$form-multi-select-border-color};
--cui-form-multi-select-border-radius: #{$form-multi-select-border-radius};
--cui-form-multi-select-disabled-color: #{$form-multi-select-disabled-color};
--cui-form-multi-select-disabled-bg: #{$form-multi-select-disabled-bg};
--cui-form-multi-select-disabled-border-color: #{$form-multi-select-disabled-border-color};
--cui-form-multi-select-focus-color: #{$form-multi-select-focus-color};
--cui-form-multi-select-focus-bg: #{$form-multi-select-focus-bg};
--cui-form-multi-select-focus-border-color: #{$form-multi-select-focus-border-color};
--cui-form-multi-select-focus-box-shadow: #{$form-multi-select-focus-box-shadow};
--cui-form-multi-select-placeholder-color: #{$form-multi-select-placeholder-color};
--cui-form-multi-select-selection-padding-y: #{$form-multi-select-selection-padding-y};
--cui-form-multi-select-selection-padding-x: #{$form-multi-select-selection-padding-x};
--cui-form-multi-select-cleaner-width: #{$form-multi-select-cleaner-width};
--cui-form-multi-select-cleaner-height: #{$form-multi-select-cleaner-height};
--cui-form-multi-select-cleaner-padding-y: #{$form-multi-select-cleaner-padding-y};
--cui-form-multi-select-cleaner-padding-x: #{$form-multi-select-cleaner-padding-x};
--cui-form-multi-select-cleaner-icon: #{escape-svg($form-multi-select-cleaner-icon)};
--cui-form-multi-select-cleaner-icon-color: #{$form-multi-select-cleaner-icon-color};
--cui-form-multi-select-cleaner-icon-hover-color: #{$form-multi-select-cleaner-icon-hover-color};
--cui-form-multi-select-cleaner-icon-size: #{$form-multi-select-cleaner-icon-size};
--cui-form-multi-select-indicator-width: #{$form-multi-select-indicator-width};
--cui-form-multi-select-indicator-height: #{$form-multi-select-indicator-height};
--cui-form-multi-select-indicator-padding-y: #{$form-multi-select-indicator-padding-y};
--cui-form-multi-select-indicator-padding-x: #{$form-multi-select-indicator-padding-x};
--cui-form-multi-select-indicator-icon: #{escape-svg($form-multi-select-indicator-icon)};
--cui-form-multi-select-indicator-icon-color: #{$form-multi-select-indicator-icon-color};
--cui-form-multi-select-indicator-icon-hover-color: #{$form-multi-select-indicator-icon-hover-color};
--cui-form-multi-select-indicator-icon-size: #{$form-multi-select-indicator-icon-size};
--cui-form-multi-select-select-all-padding-y: #{$form-multi-select-select-all-padding-y};
--cui-form-multi-select-select-all-padding-x: #{$form-multi-select-select-all-padding-x};
--cui-form-multi-select-select-all-color: #{$form-multi-select-select-all-color};
--cui-form-multi-select-select-all-bg: #{$form-multi-select-select-all-bg};
--cui-form-multi-select-select-all-border-width: #{$form-multi-select-select-all-border-width};
--cui-form-multi-select-select-all-border-color: #{$form-multi-select-select-all-border-color};
--cui-form-multi-select-select-all-border-radius: #{$form-multi-select-select-all-border-radius};
--cui-form-multi-select-select-all-hover-color: #{$form-multi-select-select-all-hover-color};
--cui-form-multi-select-select-all-hover-bg: #{$form-multi-select-select-all-hover-bg};
--cui-form-multi-select-dropdown-header-padding-y: #{$form-multi-select-dropdown-header-padding-y};
--cui-form-multi-select-dropdown-header-padding-x: #{$form-multi-select-dropdown-header-padding-x};
--cui-form-multi-select-dropdown-header-border-width: #{$form-multi-select-dropdown-header-border-width};
--cui-form-multi-select-dropdown-header-border-color: #{$form-multi-select-dropdown-header-border-color};
--cui-form-multi-select-dropdown-min-width: #{$form-multi-select-dropdown-min-width};
--cui-form-multi-select-dropdown-bg: #{$form-multi-select-dropdown-bg};
--cui-form-multi-select-dropdown-border-width: #{$form-multi-select-dropdown-border-width};
--cui-form-multi-select-dropdown-border-color: #{$form-multi-select-dropdown-border-color};
--cui-form-multi-select-dropdown-border-radius: #{$form-multi-select-dropdown-border-radius};
--cui-form-multi-select-dropdown-box-shadow: #{$form-multi-select-dropdown-box-shadow};
--cui-form-multi-select-options-gap: #{$form-multi-select-options-gap};
--cui-form-multi-select-options-padding-y: #{$form-multi-select-options-padding-y};
--cui-form-multi-select-options-padding-x: #{$form-multi-select-options-padding-x};
--cui-form-multi-select-options-font-size: #{$form-multi-select-options-font-size};
--cui-form-multi-select-options-font-weight: #{$form-multi-select-options-font-weight};
--cui-form-multi-select-options-color: #{$form-multi-select-options-color};
--cui-form-multi-select-optgroup-label-padding-y: #{$form-multi-select-optgroup-label-padding-y};
--cui-form-multi-select-optgroup-label-padding-x: #{$form-multi-select-optgroup-label-padding-x};
--cui-form-multi-select-optgroup-label-border-radius: #{$form-multi-select-optgroup-label-border-radius};
--cui-form-multi-select-optgroup-label-font-size: #{$form-multi-select-optgroup-label-font-size};
--cui-form-multi-select-optgroup-label-font-weight: #{$form-multi-select-optgroup-label-font-weight};
--cui-form-multi-select-optgroup-label-color: #{$form-multi-select-optgroup-label-color};
--cui-form-multi-select-optgroup-label-text-transform: #{$form-multi-select-optgroup-label-text-transform};
--cui-form-multi-select-option-padding-y: #{$form-multi-select-option-padding-y};
--cui-form-multi-select-option-padding-x: #{$form-multi-select-option-padding-x};
--cui-form-multi-select-option-margin-y: #{$form-multi-select-option-margin-y};
--cui-form-multi-select-option-margin-x: #{$form-multi-select-option-margin-x};
--cui-form-multi-select-option-border-width: #{$form-multi-select-option-border-width};
--cui-form-multi-select-option-border-color: #{$form-multi-select-option-border-color};
--cui-form-multi-select-option-border-radius: #{$form-multi-select-option-border-radius};
--cui-form-multi-select-option-box-shadow: #{$form-multi-select-option-box-shadow};
--cui-form-multi-select-option-hover-color: #{$form-multi-select-option-hover-color};
--cui-form-multi-select-option-hover-bg: #{$form-multi-select-option-hover-bg};
--cui-form-multi-select-option-focus-box-shadow: #{$form-multi-select-option-focus-box-shadow};
--cui-form-multi-select-option-disabled-color: #{$form-multi-select-option-disabled-color};
--cui-form-multi-select-option-indicator-width: #{$form-multi-select-option-indicator-width};
--cui-form-multi-select-option-indicator-bg: #{$form-multi-select-option-indicator-bg};
--cui-form-multi-select-option-indicator-border: #{$form-multi-select-option-indicator-border};
--cui-form-multi-select-option-indicator-border-radius: #{$form-multi-select-option-indicator-border-radius};
--cui-form-multi-select-option-selected-bg: #{$form-multi-select-option-selected-bg};
--cui-form-multi-select-option-selected-indicator-bg: #{$form-multi-select-option-selected-indicator-bg};
--cui-form-multi-select-option-selected-indicator-bg-image: #{escape-svg($form-multi-select-option-selected-indicator-bg-image)};
--cui-form-multi-select-option-selected-indicator-border-color: #{$form-multi-select-option-selected-indicator-border-color};
--cui-form-multi-select-option-indeterminate-indicator-bg: #{$form-multi-select-option-indeterminate-indicator-bg};
--cui-form-multi-select-option-indeterminate-indicator-bg-image: #{escape-svg($form-multi-select-option-indeterminate-indicator-bg-image)};
--cui-form-multi-select-option-indeterminate-indicator-border-color: #{$form-multi-select-option-indeterminate-indicator-border-color};
--cui-form-multi-select-tag-padding-y: #{$form-multi-select-tag-padding-y};
--cui-form-multi-select-tag-padding-x: #{$form-multi-select-tag-padding-x};
--cui-form-multi-select-tag-bg: #{$form-multi-select-tag-bg};
--cui-form-multi-select-tag-border-width: #{$form-multi-select-tag-border-width};
--cui-form-multi-select-tag-border-color: #{$form-multi-select-tag-border-color};
--cui-form-multi-select-tag-border-radius: #{$form-multi-select-tag-border-radius};
--cui-form-multi-select-tag-delete-width: #{$form-multi-select-tag-delete-width};
--cui-form-multi-select-tag-delete-height: #{$form-multi-select-tag-delete-height};
--cui-form-multi-select-tag-delete-icon: #{escape-svg($form-multi-select-tag-delete-icon)};
--cui-form-multi-select-tag-delete-icon-color: #{$form-multi-select-tag-delete-icon-color};
--cui-form-multi-select-tag-delete-icon-hover-color: #{$form-multi-select-tag-delete-icon-hover-color};
--cui-form-multi-select-tag-delete-icon-size: #{$form-multi-select-tag-delete-icon-size};
--cui-form-multi-select-selection-tags-gap: #{$form-multi-select-selection-tags-gap};
--cui-form-multi-select-selection-tags-padding-y: #{$form-multi-select-selection-tags-padding-y};
--cui-form-multi-select-selection-tags-padding-x: #{$form-multi-select-selection-tags-padding-x};
```

### SASS variables

```scss
$form-multi-select-zindex:                    1000 !default;
$form-multi-select-font-family:               $input-font-family !default;
$form-multi-select-font-size:                 $input-font-size !default;
$form-multi-select-font-weight:               $input-font-weight !default;
$form-multi-select-line-height:               $input-line-height !default;
$form-multi-select-color:                     $input-color !default;
$form-multi-select-bg:                        $input-bg !default;
$form-multi-select-box-shadow:                $box-shadow-inset !default;

$form-multi-select-border-width:              $input-border-width !default;
$form-multi-select-border-color:              $input-border-color !default;
$form-multi-select-border-radius:             $input-border-radius !default;
$form-multi-select-border-radius-sm:          $input-border-radius-sm !default;
$form-multi-select-border-radius-lg:          $input-border-radius-lg !default;

$form-multi-select-disabled-color:            $input-disabled-color !default;
$form-multi-select-disabled-bg:               $input-disabled-bg !default;
$form-multi-select-disabled-border-color:     $input-disabled-border-color !default;

$form-multi-select-focus-color:               $input-focus-color !default;
$form-multi-select-focus-bg:                  $input-focus-bg !default;
$form-multi-select-focus-border-color:        $input-focus-border-color !default;
$form-multi-select-focus-box-shadow:          $input-btn-focus-box-shadow !default;

$form-multi-select-invalid-border-color:      $form-invalid-border-color !default;
$form-multi-select-valid-border-color:        $form-valid-border-color !default;

$form-multi-select-placeholder-color:         var(--cui-secondary-color) !default;

$form-multi-select-selection-padding-y:       $input-padding-y !default;
$form-multi-select-selection-padding-x:       $input-padding-x !default;
$form-multi-select-selection-tags-gap:        .25rem !default;
$form-multi-select-selection-tags-padding-y:  .25rem !default;
$form-multi-select-selection-tags-padding-x:  .25rem !default;

$form-multi-select-tag-bg:                    var(--cui-secondary-bg) !default;
$form-multi-select-tag-border-width:          var(--cui-border-width) !default;
$form-multi-select-tag-border-color:          var(--cui-border-color) !default;
$form-multi-select-tag-border-radius:         .25rem !default;
$form-multi-select-tag-border-radius-sm:      .125rem !default;
$form-multi-select-tag-border-radius-lg:      .375rem !default;
$form-multi-select-tag-padding-y:             .0625rem !default;
$form-multi-select-tag-padding-x:             .5rem !default;

$form-multi-select-tag-delete-width:             .75rem !default;
$form-multi-select-tag-delete-height:            .75rem !default;
$form-multi-select-tag-delete-icon:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#000'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>") !default;
$form-multi-select-tag-delete-icon-color:        var(--cui-secondary-color) !default;
$form-multi-select-tag-delete-icon-hover-color:  var(--cui-body-color) !default;
$form-multi-select-tag-delete-icon-size:         .5rem !default;

$form-multi-select-cleaner-width:             1.5rem !default;
$form-multi-select-cleaner-height:            1.5rem !default;
$form-multi-select-cleaner-padding-x:         0 !default;
$form-multi-select-cleaner-padding-y:         0 !default;
$form-multi-select-cleaner-icon:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#000'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>") !default;
$form-multi-select-cleaner-icon-color:        var(--cui-tertiary-color) !default;
$form-multi-select-cleaner-icon-hover-color:  var(--cui-body-color) !default;
$form-multi-select-cleaner-icon-size:         .625rem !default;

$form-multi-select-indicator-width:             1.5rem !default;
$form-multi-select-indicator-height:            1.5rem !default;
$form-multi-select-indicator-padding-x:         0 !default;
$form-multi-select-indicator-padding-y:         0 !default;
$form-multi-select-indicator-icon:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='#000'><path d='M256.045 416.136.717 160.807l29.579-29.579 225.749 225.748 225.749-225.748 29.579 29.579-255.328 255.329z'/></svg>") !default;
$form-multi-select-indicator-icon-color:        var(--cui-tertiary-color) !default;
$form-multi-select-indicator-icon-hover-color:  var(--cui-body-color) !default;
$form-multi-select-indicator-icon-size:         .75rem !default;

$form-multi-select-dropdown-min-width:        100% !default;
$form-multi-select-dropdown-bg:               var(--cui-body-bg) !default;
$form-multi-select-dropdown-border-color:     var(--cui-border-color) !default;
$form-multi-select-dropdown-border-width:     var(--cui-border-width) !default;
$form-multi-select-dropdown-border-radius:    var(--cui-border-radius) !default;
$form-multi-select-dropdown-box-shadow:       var(--cui-box-shadow) !default;

$form-multi-select-select-all-padding-y:      .5rem !default;
$form-multi-select-select-all-padding-x:      .75rem !default;
$form-multi-select-select-all-color:          var(--cui-body-secondary-color) !default;
$form-multi-select-select-all-bg:             transparent !default;
$form-multi-select-select-all-hover-color:    var(--cui-body-color) !default;
$form-multi-select-select-all-hover-bg:       var(--cui-tertiary-bg) !default;
$form-multi-select-select-all-border-width:   0 !default;
$form-multi-select-select-all-border-color:   transparent !default;
$form-multi-select-select-all-border-radius:  var(--cui-border-radius) !default;

$form-multi-select-dropdown-header-padding-y:    .375rem !default;
$form-multi-select-dropdown-header-padding-x:    .375rem !default;
$form-multi-select-dropdown-header-border-width: var(--cui-border-width) !default;
$form-multi-select-dropdown-header-border-color: var(--cui-border-color) !default;

$form-multi-select-options-gap:               .125rem !default;
$form-multi-select-options-padding-y:         .375rem !default;
$form-multi-select-options-padding-x:         .375rem !default;
$form-multi-select-options-font-size:         $font-size-base !default;
$form-multi-select-options-font-weight:       $font-weight-normal !default;
$form-multi-select-options-color:             var(--cui-body-color) !default;

$form-multi-select-optgroup-label-padding-y:       .5rem !default;
$form-multi-select-optgroup-label-padding-x:       .625rem !default;
$form-multi-select-optgroup-label-border-radius:   var(--cui-border-radius) !default;
$form-multi-select-optgroup-label-font-size:       80% !default;
$form-multi-select-optgroup-label-font-weight:     $font-weight-bold !default;
$form-multi-select-optgroup-label-color:           var(--cui-tertiary-color) !default;
$form-multi-select-optgroup-label-text-transform:  uppercase !default;

$form-multi-select-option-padding-y:               .5rem !default;
$form-multi-select-option-padding-x:               1.25rem !default;
$form-multi-select-option-margin-y:                0 !default;
$form-multi-select-option-margin-x:                0 !default;
$form-multi-select-option-border-width:            $input-border-width !default;
$form-multi-select-option-border-color:            transparent !default;
$form-multi-select-option-border-radius:           var(--cui-border-radius) !default;
$form-multi-select-option-box-shadow:              $box-shadow-inset !default;

$form-multi-select-option-hover-color:             var(--cui-body-color) !default;
$form-multi-select-option-hover-bg:                var(--cui-tertiary-bg) !default;

$form-multi-select-option-focus-box-shadow:        $input-btn-focus-box-shadow !default;

$form-multi-select-option-indicator-width:          1em !default;
$form-multi-select-option-indicator-bg:             $form-check-input-bg !default;
$form-multi-select-option-indicator-border:         $form-check-input-border !default;
$form-multi-select-option-indicator-border-radius:  .25em !default;

$form-multi-select-option-selected-bg:                      var(--cui-secondary-bg) !default;
$form-multi-select-option-selected-indicator-bg:            $form-check-input-checked-bg-color !default;
$form-multi-select-option-selected-indicator-bg-image:      $form-check-input-checked-bg-image !default;
$form-multi-select-option-selected-indicator-border-color:  $form-multi-select-option-selected-indicator-bg !default;

$form-multi-select-option-indeterminate-indicator-bg:           $form-check-input-indeterminate-bg-color !default;
$form-multi-select-option-indeterminate-indicator-bg-image:     $form-check-input-indeterminate-bg-image !default;
$form-multi-select-option-indeterminate-indicator-border-color: $form-multi-select-option-indeterminate-indicator-bg !default;

$form-multi-select-option-disabled-color:        var(--cui-secondary-color) !default;

$form-multi-select-font-size-lg:                 $input-font-size-lg !default;
$form-multi-select-selection-padding-y-lg:       $input-padding-y-lg !default;
$form-multi-select-selection-padding-x-lg:       $input-padding-x-lg !default;
$form-multi-select-selection-tags-gap-lg:        .25rem !default;
$form-multi-select-selection-tags-padding-y-lg:  .25rem !default;
$form-multi-select-selection-tags-padding-x-lg:  .25rem !default;
$form-multi-select-tag-padding-y-lg:             .175rem !default;
$form-multi-select-tag-padding-x-lg:             .5rem !default;

$form-multi-select-font-size-sm:                 $input-font-size-sm !default;
$form-multi-select-selection-padding-y-sm:       $input-padding-y-sm !default;
$form-multi-select-selection-padding-x-sm:       $input-padding-x-sm !default;
$form-multi-select-selection-tags-gap-sm:        .125rem !default;
$form-multi-select-selection-tags-padding-y-sm:  .0625rem !default;
$form-multi-select-selection-tags-padding-x-sm:  .125rem !default;
$form-multi-select-tag-padding-y-sm:             .075rem !default;
$form-multi-select-tag-padding-x-sm:             .5rem !default;
```
