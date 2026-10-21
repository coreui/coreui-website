# Bootstrap 6 Multi Select

> Customize the native `<select>`s with a powerful Bootstrap Multi-Select component that changes the element's initial appearance and brings some new functionalities.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=bootstrap&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Basic example

A straightforward demonstration of how to implement a basic Bootstrap Multi Select dropdown, highlighting essential attributes and configurations.

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

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <label for="multiSelectField" class="form-label">Technologies</label>
  <select id="multiSelectField" name="stack" data-coreui-multi-select multiple>
    <option value="0">Angular</option>
    <option value="1">Bootstrap</option>
    <option value="2">React.js</option>
    <option value="3">Vue.js</option>
  </select>
  <div class="form-text">Pick every technology you work with.</div>
</div>
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

`setOptions(options)` swaps the options later without rebuilding the control, and the selection stays as it is. A multi select whose options depend on another field, such as the cities of the chosen country, sets `resetSelectionOnOptionsChange: true`: when the values of the new options differ, `setOptions()` empties the selection and takes the options marked `selected`, so the cities of the previous country never travel on. The same values in any order keep the selection. Leave it off with `search: 'external'`, where every answer brings different values and would drop the picks.

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

### Where typing goes

Typing reaches the search box from anywhere in the component — the control, the options panel, the select all button — so it never depends on where the focus happens to be. That is how `data-coreui-search="true"` behaves on its own.

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

Add `data-coreui-global-search="false"` to keep typing local. The search box then filters only while it has the focus, and a keystroke over the options list jumps to the first option starting with it.

```html
<select data-coreui-multi-select multiple data-coreui-search="true" data-coreui-global-search="false">
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

### External search

With `search: 'external'` the search box filters nothing. Every change of its text, a paste included, fires `search.coreui.multi-select` with the `query`, and you answer with `setOptions()`: the list shows what you hand it, and the selection stays as it is, so a selected option the new results lack keeps its chip, counts against `selectionLimit` and is still sent with the form, unless it is disabled. The clear button and `deselectAll()` drop it like any other, while pressing a pressed select all button deselects only the listed options, and a form reset brings the initial selection back even when the current results lack it, start values from `value` that an answer delivered later included. A selected option that comes back disabled stays selected and, as in a native `<select>`, is not sent. The counter's `{total}` counts the options you handed over, so give the `total` option the number of records your data source holds and update it with `setTotal()` when it changes: the call redraws the counter and leaves the search box, the panel and the focus alone. Debounce the request and put `setLoading()` around it; while it waits the list shows a loading row below the options, and the options it shows can still be picked. With `globalSearch: false` a keystroke over the options list does nothing, since the list holds only the last results.

```html
<select id="multiSelectExternalSearch" name="users" multiple></select>
```

```js
const element = document.getElementById('multiSelectExternalSearch')
const multiSelect = new coreui.MultiSelect(element, {
  placeholder: 'Search users',
  search: 'external'
})

let latest = 0

const loadUsers = async (query = '') => {
  latest += 1
  const request = latest
  multiSelect.setLoading(true)

  try {
    const response = await fetch(`https://apitest.coreui.io/demos/users?first_name=${encodeURIComponent(query)}&limit=10`)
    const { records } = await response.json()

    if (request === latest) {
      multiSelect.setOptions(records.map(user => ({
        value: String(user.id),
        text: `${user.first_name} ${user.last_name}`
      })))
    }
  } catch (error) {
    console.error('Error fetching users:', error)

    if (request === latest) {
      multiSelect.setOptions([])
    }
  } finally {
    if (request === latest) {
      multiSelect.setLoading(false)
    }
  }
}

let debounceTimer = null

element.addEventListener('search.coreui.multi-select', event => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => loadUsers(event.query), 200)
})

loadUsers()
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

### Chips

Selected options render as [Chip](https://coreui.io/bootstrap/docs/components/chip/) components by default (`data-coreui-selection-type="chips"`). Each selection is a real chip with the standard chip styling and a remove button named by `ariaChipRemoveLabel`, which keeps the selected items grouped and easy to drop. `tags`, the v5 name of this mode, renders the same and is deprecated.

```html
<select id="multiple-select-chips" data-coreui-multi-select multiple data-coreui-selection-type="chips" data-coreui-search="true">
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

With the default `indicator: 'checkbox'` the button shows the same tri-state indicator as the options and mirrors the overall selection — `none` when nothing is selected, `all` when everything is, and `indeterminate` in between; `aria-pressed` carries the same three states. With `indicator: 'none'` the button is a plain text toggle. It sits in the panel header, outside the options list, so <kbd>Tab</kbd> reaches it — the arrows stay on the options.

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
    container.className = 'toast-container position-fixed bottom-0 end-0 p-4'
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

## Validation

The control shows its validation state on the frame and on the element that takes the focus, and links the message that follows it, the way the [form plugin](https://coreui.io/bootstrap/docs/forms/validation/) does for a native field.

```html
<form class="row g-4" data-coreui-validate novalidate>
  <div class="col-12">
    <select id="ms-validation" data-coreui-multi-select multiple data-coreui-required="true" aria-label="Frameworks">
      <option value="0">Angular</option>
      <option value="1">Bootstrap</option>
      <option value="2">React.js</option>
      <option value="3">Vue.js</option>
    </select>
    <div class="invalid-feedback">Pick at least one framework.</div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit</button>
  </div>
</form>
```

The state comes from four places, in this order:

- The `validationState` option: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`. The `invalid` and `valid` options still work as aliases; `invalid` wins when both are set, and both are ignored once `validationState` is set.
- An `.is-invalid` or `.is-valid` class written on the select in the markup, for example by a server that has already checked the value. It is read once, when the component starts, and moves to the frame.
- A validation that reports the select invalid: a submit, `checkValidity()` or `reportValidity()`, which the form plugin and the [stepper](https://coreui.io/bootstrap/docs/forms/stepper/) call as well. From then on the control shows it invalid whenever its selection is invalid, until a native reset of the form.
- In a form with `data-coreui-validate`, the `:user-invalid` state of the select, and with `data-coreui-validate="valid"` also its `:user-valid` state.

A state you give, with the option or with the class, is a verdict on the selection it was given for, so the next change of the selection the user makes drops it: a pick in the list, a removed chip, the cleaner, select all, <kbd>Backspace</kbd> that removes a value, or an action of a [custom header](#custom-dropdown-header). An action that leaves the selection as it is, such as picking the option a single select already holds, keeps it. One action drops the state once, at its first change, so a state you give from a `change.coreui.multi-select`, `input` or `change` listener while the action runs stays. A change your own code makes, with the selection methods or `setValue()`, keeps it. To set it again, from a `change.coreui.multi-select` or `input` listener or after a server response, call `setValidationState()`. It updates the state without rebuilding the control and replaces a class written on the select, so `setValidationState(null)` withdraws that class. A class or an `aria-invalid` written on the select after the component starts is not read. While the given state is `'invalid'`, the select blocks the submit like any invalid field, with the text of the linked message, or `Invalid value.` when there is none; a custom validity you set on the select yourself stays as it is, and a disabled control does not block. A native reset of the form puts back the selection the control started with and drops a state given before it; a state you give from a `reset` listener on the form, or right after `form.reset()`, stays.

```html
<select id="ms-validation-server" class="is-invalid" data-coreui-multi-select multiple aria-label="Frameworks">
  <option value="0" selected>Angular</option>
  <option value="1">Bootstrap</option>
  <option value="2">React.js</option>
  <option value="3">Vue.js</option>
</select>
<div class="invalid-feedback">Angular is not available in this plan.</div>
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
    return `<div class="d-flex align-items-center gap-3"><span class="fs-5">${option.flag}</span><span>${option.text}</span></div>`
  },
  placeholder: 'Select countries',
  search: true,
  selectAllLabel: 'Select all countries',
  deselectAllLabel: 'Deselect all countries',
  selectionType: 'chips'
})

new coreui.MultiSelect(myMultiSelectCountriesAndCities, {
  cleaner: true,
  multiple: true,
  options: cities,
  optionsGroupsTemplate(optionGroup) {
    return `<div class="d-flex align-items-center gap-3"><span class="fg-body fs-5">${optionGroup.flag}</span><span>${optionGroup.label}</span></div>`
  },
  placeholder: 'Select cities',
  search: true,
  selectAllLabel: 'Select all cities',
  deselectAllLabel: 'Deselect all cities',
  selectionType: 'chips'
})
```

## Custom dropdown header

_Added in 5.26.0._

Use the `headerTemplate` option to fully customize the dropdown header — the area above the options list — including rendering several action buttons. It replaces the built-in select all button and renders independently of `selectAll`. The template function receives a `state` object (`{ selected, total, filtered, filteredSelected }`) and an `actions` object (`selectAll`, `selectFiltered`, `deselectFiltered`, `deselectAll`) whose functions change the selection for the user, so a call drops a given [validation state](#validation) like a pick in the list. Return an `HTMLElement` and wire your own listeners to the `actions`, or return an HTML string for simple custom content. A string goes through the sanitizer, which drops interactive elements such as `<button>`, and nothing wires the `actions` to it, so controls belong on the `HTMLElement` path. The header re-renders on every selection change and search filter, so labels and `disabled` states stay up to date.

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
  selectionType: 'chips',
  headerTemplate(state, actions) {
    const wrapper = document.createElement('div')
    wrapper.className = 'd-flex flex-wrap gap-3'

    const selectAll = document.createElement('button')
    selectAll.type = 'button'
    selectAll.className = 'btn-solid theme-primary btn-sm'
    selectAll.textContent = `Select all (${state.total})`
    selectAll.disabled = state.selected >= state.total
    selectAll.addEventListener('click', () => actions.selectAll())

    const selectFiltered = document.createElement('button')
    selectFiltered.type = 'button'
    selectFiltered.className = 'btn-solid theme-secondary btn-sm'
    selectFiltered.textContent = `Select filtered (${state.filtered})`
    selectFiltered.disabled = state.filtered === state.filteredSelected
    selectFiltered.addEventListener('click', () => actions.selectFiltered())

    const deselectFiltered = document.createElement('button')
    deselectFiltered.type = 'button'
    deselectFiltered.className = 'btn-outline theme-secondary btn-sm'
    deselectFiltered.textContent = `Deselect filtered (${state.filteredSelected})`
    deselectFiltered.disabled = state.filteredSelected === 0
    deselectFiltered.addEventListener('click', () => actions.deselectFiltered())

    const deselectAll = document.createElement('button')
    deselectAll.type = 'button'
    deselectAll.className = 'btn-outline theme-danger btn-sm'
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

Enable `optionsGroupsSelectable` to turn each group label into its own tri-state button (`aria-pressed` `false` / `mixed` / `true`) that toggles the group's visible options. Because the indicator is rendered with CSS, it supports a third, `indeterminate` state — shown when only some of a group's options are selected — without any real `<input />` element. The same tri-state logic drives the header [select all](#select-all) button. Group labels join the arrow-key order, and the indicator on options, groups and select all follows the one `indicator` option; the whole feature requires `multiple`.

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
  selectionType: 'counter'
})
```

## Floating labels

Multi Select supports [floating labels](https://coreui.io/bootstrap/docs/forms/floating-labels/). Wrap the component in `.form-floating` and put a `<label>` beside it. It has no input to report emptiness, so the label floats on focus and on the first selection, and the component's `placeholder` is hidden while the label rests inside the field.

```html
<div class="form-floating">
  <label for="floatingMultiSelect">Frameworks</label>
  <select id="floatingMultiSelect" data-coreui-multi-select multiple>
    <option value="0">Angular</option>
    <option value="1">Bootstrap</option>
    <option value="2">React.js</option>
    <option value="3">Vue.js</option>
  </select>
</div>
```

Add `.form-floating-always` to the wrapper, or to any ancestor, to keep the label [always floating](https://coreui.io/bootstrap/docs/forms/floating-labels/#always-floating) with the placeholder showing.

## Sizing

The frame carries the size. Add `.form-control-sm` or `.form-control-lg` to the `<select>` — the component copies the element's classes onto the `.form-control-group` it builds, so the field matches our similarly sized text inputs. The whole selection follows: the chips, the counter text and the cleaner and toggle icons all scale with the frame.

```html
<div class="row">
  <div class="col-md-6">
    <select id="multiple-select-counter-lg" class="form-control-lg mb-4" data-coreui-multi-select data-coreui-selection-type="counter" data-coreui-search="true">
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
    <select id="multiple-select-counter-sm" class="form-control-sm" data-coreui-multi-select data-coreui-selection-type="counter" data-coreui-search="true">
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
    <select id="multiple-select-chips-lg" class="form-control-lg mb-4" data-coreui-multi-select data-coreui-selection-type="chips" data-coreui-search="true">
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
    <select id="multiple-select-chips-sm" class="form-control-sm" data-coreui-multi-select data-coreui-selection-type="chips" data-coreui-search="true">
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
<select id="ms1" name="stack" multiple data-coreui-multi-select data-coreui-search="true">
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
| `ariaChipRemoveLabel` | string \| function | `'Remove'` | Names a chip's remove button with the selected option's text: a string has `{label}` replaced by it, or gets it appended when there is no `{label}` ("Remove Angular"); a function receives the text and returns the whole name. |
| `ariaCleanerLabel`| string | `Clear all selections` | A string that provides an accessible label for the cleaner button. This label is read by screen readers to describe the action associated with the button. |
| `ariaPickerLabel` | string | `'Toggle options list'` | Accessible label of the picker button. |
| `ariaRemovedAnnouncement` | string \| function | `'removed'` | Announced after a value is removed through its chip, <kbd>Backspace</kbd> or the cleaner. A string follows the removed labels (`Angular removed`); a function receives them and returns the whole message. A pick in the list is not announced, since the option says it is selected. |
| `ariaSearchLabel`| string | `Search` | Accessible label for the search input (when `search` is enabled). |
| `ariaTagDeleteLabel` | string \| null | `null` | Deprecated, use `ariaChipRemoveLabel`. While it is set, it takes precedence over `ariaChipRemoveLabel`. |
| `cleaner`| boolean | `true` | Enables selection cleaner element. |
| `clearSearchOnSelect`| boolean | `false` | Clear current search on selecting an item. |
| `container` | string, element, false | `false` | Appends the dropdown to a specific element. Example: `container: 'body'`. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `deselectAllLabel` | string | `'Deselect all'` | Sets the select all button label shown once everything is selected. See `selectAllLabel`. |
| `deselectFilteredLabel` | string | `'Deselect filtered'` | Label shown instead of `deselectAllLabel` when `selectAllMode: 'filtered'` and a search filter narrows the list. See `selectFilteredLabel`. |
| `disabled` | boolean | `false` | Toggle the disabled state for the component. |
| `globalSearch` | boolean | `true` | Routes typing to the search box from anywhere in the component, so a keystroke never depends on where the focus sits. Set to `false` to keep it local: the search box then filters only while it has the focus, and typing over the options list jumps to the first option that starts with what was typed, except with `search: 'external'`, where the list holds only the last results. Needs `search`. |
| `headerTemplate` | function, null | `null` | Custom template function for rendering the dropdown header (the area above the options list). Replaces the built-in select all button and renders independently of `selectAll`. Receives a `state` object (`{ selected, total, filtered, filteredSelected }`), where `selected` counts every selected value, disabled ones and ones the current options lack included, and the other three count options in the list, and an `actions` object (`{ selectAll, deselectAll, selectFiltered, deselectFiltered }`) whose functions act for the user and drop a given validation state. Return an `HTMLElement` (wire your own listeners using `actions`, supports multiple controls) or an HTML string (sanitized, no actions wired). Re-renders on every selection change and search filter. |
| `hideSelectAllOnSearchNoResults` | boolean | `true` | Hides the dropdown header with the built-in select all button when a search filter leaves no matching options. Set to `false` to keep the select all button visible even when there are no results. |
| `id` | string, null | `null` | Id of the native select and the base of the ids the component builds (`-listbox`, `-label`, `search-`). Without it the select keeps its own `id`, or gets a generated one. |
| `indicator` | string | `'checkbox'` | Sets the marker used by the options, the selectable group labels and the select all button: `'checkbox'` or `'none'`. |
| `invalid` | boolean | `false` | Deprecated alias of `validationState: 'invalid'`, ignored once `validationState` is set. |
| `loadingLabel` | string | `'Loading…'` | Text of the row below the options while the list loads, announced to screen readers when the open panel starts waiting or opens on a wait. |
| `multiple` | boolean | `true` | It specifies that multiple options can be selected at once. |
| `name` | string, null | `null` | Name of the native select the selection is submitted under. A `name` written on the `<select>` itself is honoured too, and this option wins over it. With neither the selection is not submitted with the form. |
| `options` | boolean, array | `false` | List of option elements. A group with `disabled: true` disables every option in it. A selected disabled option stays selected and, like in a native select, is not sent with the form. |
| `optionsGroupsSelectable` | boolean | `false` | When enabled (with `multiple`), each option group label becomes a tri-state button: clicking it toggles the group's visible options, and it reflects `none` / `all` / `indeterminate` based on the group's selected options. |
| `optionsGroupsTemplate` | function, null | `null` | Custom template function for rendering option group labels. Receives the group object as parameter. |
| `optionsMaxHeight` | number, string | `'auto'` | Sets `max-height` of options list.	 |
| `optionsTemplate` | function, null | `null` | Custom template function for rendering individual options. Receives the option object as parameter. |
| `pickerIcon` | string, boolean | `true` | The button that toggles the options list: `true` for the built-in icon, an inline SVG string for your own (sanitized), `false` for no button. Clicking the control only opens the list, so without the button a pointer closes it by clicking away. |
| `placeholder` | string | `'Select...'` | Specifies a short hint that is visible in the input. |
| `required` | boolean | `false` | Makes the input field required for form validation. |
| `resetSelectionOnOptionsChange` | boolean | `false` | Empties the selection when `setOptions()` brings options with different values, then takes the options marked `selected`. For options that depend on another field. |
| `sanitize` | boolean | `true` | Enables HTML sanitization for custom templates to prevent XSS attacks. |
| `sanitizeFn` | function, null | `null` | Custom sanitization function. If provided, it will be used instead of the built-in sanitizer. |
| `search` | boolean, string | `false` | Renders a search box in the control. `true` filters the options as the user types; `'external'` filters nothing and fires `search.coreui.multi-select`, which you answer with `setOptions()`. Any other string throws a `TypeError`. The box takes the focus when the panel opens, and typing anywhere in the component reaches it unless `globalSearch` is off. |
| `searchNoResultsLabel` | string | `'No results found'` | Sets the label for no results when filtering.	|
| `selectAll` | boolean | `true` | Enables select all button.|
| `selectAllLabel` | string | `'Select all'` | Sets the select all button label shown until everything is selected. The button is a toggle: it shows `selectAllLabel` (and selects all) until everything is selected, then shows `deselectAllLabel` (and deselects all). |
| `selectAllMode` | string | `'all'` | Scope of the built-in select all button: `'all'` toggles every option (ignoring the search filter), `'filtered'` toggles only the search-filtered options. With no active filter both behave the same. |
| `selectedLabel` | string, function | `` (count) => `${count} item(s) selected` `` | The counter selection label. A function `(count, total) => string`, or a string in which `{count}` and `{total}` are replaced; `total` is the number of options in the list, disabled ones and the ones inside a group included, so a disabled option shows that not everything is selected, plus any selected value the current options lack, so it never falls below `count`, unless the `total` option gives a number of its own. |
| `selectFilteredLabel` | string | `'Select filtered'` | Label shown instead of `selectAllLabel` when `selectAllMode: 'filtered'` and a search filter narrows the list, so the button reads as acting on the filtered options rather than the whole list. |
| `selectionLimit` | number, null | `null` | Sets the maximum number of selectable options. The select all button stays enabled and selects up to the limit (firing the `selectionLimit` event), then toggles to deselect all once the limit is reached. |
| `selectionType` | string | `'chips'` | Sets the selection style: `'chips'`, `'counter'` or `'text'`. `'chips'` renders the selection as [Chip](https://coreui.io/bootstrap/docs/components/chip/) components. `'tags'` is a deprecated name for `'chips'`. |
| `total` | number, null | `null` | The `{total}` of `selectedLabel`. Leave it `null` to count the options in the list; with `search: 'external'` give the number of records your data source holds, which the component cannot see. |
| `valid` | boolean | `false` | Deprecated alias of `validationState: 'valid'`, ignored once `validationState` is set. |
| `validationState` | string, null | `null` | The validation state the control shows: `'valid'`, `'invalid'` or a state of `$form-validation-states`. `'invalid'` also blocks the submit. The next change of the selection by the user clears it, see [Validation](#validation). |
| `value` | string, number, array, null | `null` | Sets the initially selected values for the multi-select component; a string may list several values separated by commas. Given values win over options marked `selected`, in the markup or in `options`, and apply when the component starts or when `setValue()` gives them; `[]` selects nothing, and a value the options lack waits for them: options that `setOptions()` brings later for the first time are selected when the last given value lists them. Options shown before keep their state. A single select whose selection is empty holds its `value=""` placeholder option, or no option. |

### Methods

| Method | Description |
| --- | --- |
| `deselectAll` | Deselects every selected option that is not disabled, including selected values the current options lack. Pass an array of options to deselect only those. |
| `deselectFiltered` | Deselect only the currently filtered (search-matched) options. |
| `dispose` | Destroys an element's multi select, removes the wrapper and panel it built, and gives the native select back the options it had before the component started, when the component replaced them. The native select stays hidden with the attributes the component wrote; a new instance writes them again from its options. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the multi select instance associated with a DOM element. |
| `getValue` | Returns the array with selected elements. |
| `hide` | Hides the multi select's options. |
| `selectAll` | Select all options. |
| `selectFiltered` | Select only the currently filtered (search-matched) options. |
| `setLoading` | Marks the list busy while you wait for options, for example with `search: 'external'`: a row with `loadingLabel` shows below the options and is announced, and the options it shows can still be picked. |
| `setOptions` | Replaces the options without rebuilding the control: the selection, an open panel and the search box keep their state, and the focus stays where it was unless the element holding it goes. A selected option the new list lacks stays selected and is still sent with the form unless it is disabled; `selected` flags in the new options are ignored unless `resetSelectionOnOptionsChange` empties the selection first. |
| `disable()` | Disables the select. |
| `enable()` | Enables the select. |
| `setTotal(total)` | Sets the number of all results an external search has, for the counter. |
| `setValidationState(state)` | Gives the select a validation state (`'valid'`, `'invalid'` or a state added to `$form-validation-states`), or drops it with `null`. The value stays. See [Validation](#validation). |
| `setValue(value)` | Selects the options with the given values without firing a change event. |
| `show` | Shows the multi select's options. |

### Events

Multi Select component exposes a few events for hooking into multi select functionality.

| Event | Description |
| --- | --- |
| `change.coreui.multi-select` | Fires, with the native `input` and `change` of the select, once for every change of the selection the user or the component makes: a pick, `selectAll()`, `deselectAll()`, `setOptions()` emptying the selection for `resetSelectionOnOptionsChange`, and a native reset of the form that brings the initial selection back. It fires after the native select holds the new value; `event.value` is the selection. An action that selects or deselects several options sends one event, and an action that changes nothing sends none. A selection you give sends nothing: the start, `setValue()`, and a given `value` that options from `setOptions()` bring later, unless `resetSelectionOnOptionsChange` puts it in place of the selection. |
| `hidden.coreui.multi-select` | Fired when the multi select options have finished being hidden from the user and CSS transitions have completed. |
| `hide.coreui.multi-select` | Fires immediately when the hide instance method has been called. Call `event.preventDefault()` to keep the menu open. |
| `search.coreui.multi-select` | Fires when the text of the search box changes, a paste included, and when `search()` gets a different text; `event.query` is the text. A key that leaves the text alone and opening or closing the panel over an empty box send nothing; closing the panel clears a filled box, which reports an empty `query`. With `search: 'external'` nothing is filtered, so answer with `setOptions()`. |
| `selectionLimit.coreui.multi-select` | Fires when selecting an option is blocked because the selection limit has been reached. |
| `show.coreui.multi-select` | Fires immediately when the show instance method is called. Call `event.preventDefault()` to keep the menu closed. |
| `shown.coreui.multi-select` | Fired when the multi select options have been made visible to the user and CSS transitions have completed. |

```js
const myMutliSelect = document.getElementById('myMutliSelect')
myMutliSelect.addEventListener('change.coreui.multi-select', event => {
  // Get the list of selected options.
  const selected = event.value
})
```

## Accessibility

The control takes its name from the select's `aria-labelledby`, then its `aria-label`, then a `<label>` pointing at the select. A `<label>` that wraps the select is left out, because its text would take in the control's own content and selection, so point the label at the select's `id` instead. The search box keeps a name of its own, `ariaSearchLabel`. When `required` is set, the control that takes the focus, the search box when `search` is on, carries `aria-required`; an `aria-required` on the select does not mark it. The native select itself is hidden from assistive technology.

The options panel is a dialog named like the control. Opening it moves the focus inside — onto the search box when `search` is on, otherwise onto the option the list points at, which is the selection the user left or the first option. The options are focusable one at a time: the arrows move the focus itself rather than a highlight read through `aria-activedescendant`. <kbd>Tab</kbd> cycles through what the panel offers and the search box in the control, and reaches nothing outside them until the panel closes, which <kbd>Escape</kbd> does, returning the focus to the control.

The select stays in the page as an invisible overlay for form validation and is hidden from screen readers, so the control speaks for it. The `aria-describedby` the select has when the component starts goes on the control, the search box when `search` is on, and while the state is invalid the control carries `aria-invalid` and is described by the message that follows it as well. Focus that reaches the select, from validation or from its label, goes on to the control. A change of selection fires `input` and `change` on the select, as a native list does, so a script that clears a field's error on input sees it.

### Keyboard shortcuts

| Key | Action |
| --- | --- |
| <kbd>Tab</kbd> | Move between the search box, the select all button and the options list; the focus stays in the open panel |
| <kbd>Enter</kbd>/<kbd>Space</kbd> | Open the panel from the control, or select the focused option; <kbd>Enter</kbd> in the search box takes the option the list points at |
| <kbd>Arrow Up</kbd>/<kbd>Arrow Down</kbd> | Move through the options (and the selectable group labels), or enter the list from the search box |
| <kbd>Shift</kbd> + <kbd>Arrow Up</kbd>/<kbd>Arrow Down</kbd> | Extend the selection while moving (multiple selection) |
| <kbd>Home</kbd>/<kbd>End</kbd> | Focus the first/last option (not while typing in the search box), or the first/last chip from a chip |
| <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd> | Select every option the list shows, from the options list (multiple selection) |
| <kbd>Escape</kbd> | Close the panel and return the focus to the control |
| <kbd>Backspace</kbd>/<kbd>Delete</kbd> | In the empty search box, focus the last chip; on a chip, remove it and move the focus to the next chip, else the previous one, else the search box, or the field when there is none. Entering the chips closes an open panel. A single select and the `counter` and `text` selections remove the last selected item at once |
| <kbd>Arrow Left</kbd>/<kbd>Arrow Right</kbd> | From the start of the search box, focus the last chip; between the chips, move the focus; past the last chip, return to the search box (mirrored in right-to-left) |

## Customizing

### CSS variables

The field is a [`.form-control-group`](https://coreui.io/bootstrap/docs/forms/form-control-group/#css-variables), so its frame, the cleaner and the toggle read the `--cui-control-*` and `--cui-control-group-*` tokens. The plugin renders that frame as a `.multi-select` element around your `<select>`: set the tokens with a rule on `.multi-select`, because a `style` attribute on the `<select>` does not reach the frame. The selected chips add two of their own:

```scss
$multi-select-tokens: defaults(
  (
    --cui-multi-select-selection-chips-gap: .25rem,
    --cui-multi-select-selection-chips-padding-y: .25rem,
  ),
  $multi-select-tokens
);
```

The options panel is the shared combobox surface, which only sizes itself:

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

Everything inside it — options, section labels, checkbox indicators and the select all button — is a [List box](https://coreui.io/bootstrap/docs/components/list-box/) and takes its `--cui-list-box-*` variables. `.list-box` declares them itself, so a value set on `.combobox-popup` or on `:root` does not reach it: set them with a rule on `.combobox-popup .list-box`, which covers the panels of Combobox, Autocomplete and Multi Select alike.
