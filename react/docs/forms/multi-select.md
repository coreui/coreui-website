# React Multi Select Component

> Customize the native <select>s with a powerful React Multi Select component that changes the element’s initial appearance and brings some new functionalities.

## Basic example

A clear demonstration of implementing a basic React Multi Select dropdown, highlighting essential options and configurations.

```html
import React from 'react'
import { CMultiSelect } from '@coreui/react-pro'

export const MultiSelectExample = () => {
  const options = [
    {
      value: 0,
      label: 'Angular',
    },
    {
      value: 1,
      label: 'Bootstrap',
    },
    {
      value: 2,
      label: 'React.js',
    },
    {
      value: 3,
      label: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          label: 'Django',
        },
        {
          value: 5,
          label: 'Laravel',
        },
        {
          value: 6,
          label: 'Node.js',
        },
      ],
    },
  ]

  return (
    <CMultiSelect
      options={options}
      label="Framework"
      text="Please select your framework."
      search="global"
      value={[3, 4, 5]}
    />
  )
}
```

## Search

You can configure the search functionality within the component. The `search` property determines how the search input element is enabled and behaves. It accepts multiple types to provide flexibility in configuring search behavior. By default is set to `true`.

### Disabled search

To disable the default search input element, please set `search` property to `false` like in the example below:

```html
import React from 'react'
import { CMultiSelect } from '@coreui/react-pro'

export const MultiSelectSearchDisabledExample = () => {
  const options = [
    {
      value: 0,
      label: 'Angular',
    },
    {
      value: 1,
      label: 'Bootstrap',
    },
    {
      value: 2,
      label: 'React.js',
    },
    {
      value: 3,
      label: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          label: 'Django',
        },
        {
          value: 5,
          label: 'Laravel',
        },
        {
          value: 6,
          label: 'Node.js',
        },
      ],
    },
  ]

  return (
    <CMultiSelect
      options={options}
      label="Framework"
      text="Please select your framework."
      search={false}
    />
  )
}
```

### Global search

<small className="d-inline-flex mb-3 px-2 py-1 fw-semibold text-success bg-success bg-opacity-10 border border-success border-opacity-10 rounded-2">Added in v5.8.0</small>

To enable the global search functionality within the React Multi Select component, please set `search` property to `'global'`. When global search is turned on, the user can perform searches across the entire component, regardless of where their focus is within the component. This allows for a more flexible and intuitive search experience, ensuring the search input is recognized from any point within the component.

```html
import React from 'react'
import { CMultiSelect } from '@coreui/react-pro'

export const MultiSelectSearchGlobalExample = () => {
  const options = [
    {
      value: 0,
      label: 'Angular',
    },
    {
      value: 1,
      label: 'Bootstrap',
    },
    {
      value: 2,
      label: 'React.js',
    },
    {
      value: 3,
      label: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          label: 'Django',
        },
        {
          value: 5,
          label: 'Laravel',
        },
        {
          value: 6,
          label: 'Node.js',
        },
      ],
    },
  ]

  return (
    <CMultiSelect
      options={options}
      label="Framework"
      text="Please select your framework."
      search="global"
    />
  )
}
```

### External search

When external search is enabled (`search="external"`), the component delegates search operations to an external API. This setup is ideal for scenarios where third-party services or custom backend implementations power search capabilities. 

```jsx
<CMultiSelect options={...} onFilterChange={...} search="external" />
```

If you want to enable both external (API-handled) and global search:

```jsx
<CMultiSelect options={...} onFilterChange={...} search={{ external: true, global: true }} />
```

Please check the [External Data](#external-data) section to check a working example of how to handle external data.

## Modes

### Allow create options

The `allowCreateOptions` property in the `` component allows users to create new options in addition to selecting pre-existing ones from a list.

When this property is set to true, the user can type in a new option in the search input field of the multiselect component, and if the option does not already exist in the list, it will be created and added to the list of available options. This can be useful when the list of available options is not comprehensive or when the user needs to select an option that is not already available.

> It's worth noting that this feature may not always be appropriate, depending on the specific use case of the multiselect component. In some cases, it may be preferable to restrict the user to selecting only pre-existing options, while in other cases, allowing for the creation of new options may be essential. It's important to consider the specific requirements of your application when deciding whether to enable this feature.

```html
import React from 'react'
import { CMultiSelect } from '@coreui/react-pro'

export const MultiSelectAllowCreateOptionsExample = () => {
  const options = [
    {
      value: 0,
      label: 'Angular',
      selected: true,
    },
    {
      value: 1,
      label: 'Bootstrap',
      selected: true,
      disabled: true,
    },
    {
      value: 2,
      label: 'React.js',
    },
    {
      value: 3,
      label: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          label: 'Django',
        },
        {
          value: 5,
          label: 'Laravel',
          selected: true,
        },
        {
          value: 6,
          label: 'Node.js',
        },
      ],
    },
  ]

  return <CMultiSelect allowCreateOptions options={options} />
}
```

### Clear search on select

The `clearSearchOnSelect` property is a Boolean attribute that can be used with the MultiSelect component in the CoreUI React library.

When `clearSearchOnSelect` is set to `true`, the search input field in the MultiSelect component will be cleared as soon as the user selects an option from the dropdown list. This means that the search query will be reset and the user will be able to start a new search immediately.

By default, `clearSearchOnSelect` is set to `false`, which means that the search input field will retain the user's search query even after an option has been selected. This can be useful in situations where the user needs to select multiple options from the dropdown list that match the same search query.

To use the `clearSearchOnSelect` property with the MultiSelect component in the CoreUI React library, you simply need to set it to `true` or `false` as appropriate in your code. For example:

```html
import React from 'react'
import { CMultiSelect } from '@coreui/react-pro'

export const MultiSelectClearSearchOnSelectExample = () => {
  const options = [
    {
      value: 0,
      label: 'Angular',
      selected: true,
    },
    {
      value: 1,
      label: 'Bootstrap',
      selected: true,
      disabled: true,
    },
    {
      value: 2,
      label: 'React.js',
    },
    {
      value: 3,
      label: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          label: 'Django',
        },
        {
          value: 5,
          label: 'Laravel',
          selected: true,
        },
        {
          value: 6,
          label: 'Node.js',
        },
      ],
    },
  ]

  return <CMultiSelect clearSearchOnSelect options={options} />
}
```

In this example, the `clearSearchOnSelect` property is set to `true`, which means that the search input field will be cleared as soon as the user selects an option from the dropdown list.

## Selection types

The React Multi Select component enables users to present selected items in multiple ways. Users can choose to display selected items as a counter, tags, or a list of comma-separated values.

To change the way that selected items are displayed, you can use the `selectionType` property to set the presentation type.

### Tags

By default, the `selectionType` property is set to `"tags"`, which displays selected options as tags. Users can remove a selected option by pressing the "X" button.

```html
import React from 'react'
import { CMultiSelect } from '@coreui/react-pro'

export const MultiSelectSelectionTypesTagsExample = () => {
  const options = [
    {
      value: 0,
      label: 'Angular',
      selected: true,
    },
    {
      value: 1,
      label: 'Bootstrap',
      selected: true,
      disabled: true,
    },
    {
      value: 2,
      label: 'React.js',
    },
    {
      value: 3,
      label: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          label: 'Django',
        },
        {
          value: 5,
          label: 'Laravel',
          selected: true,
        },
        {
          value: 6,
          label: 'Node.js',
        },
      ],
    },
  ]

  return <CMultiSelect options={options} selectionType="tags" />
}
```

### Counter

In the example below, selected items from the list are counted and presented in the form of a counter. To use this option, set the `selectionType` to `"counter"`.

To further customize the counter, the `selectionTypeCounterText` property allows you to set the text that is displayed after the counter.

```html
import React from 'react'
import { CMultiSelect } from '@coreui/react-pro'

export const MultiSelectSelectionTypesCounterExample = () => {
  const options = [
    {
      value: 0,
      label: 'Angular',
      selected: true,
    },
    {
      value: 1,
      label: 'Bootstrap',
      selected: true,
      disabled: true,
    },
    {
      value: 2,
      label: 'React.js',
    },
    {
      value: 3,
      label: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          label: 'Django',
        },
        {
          value: 5,
          label: 'Laravel',
          selected: true,
        },
        {
          value: 6,
          label: 'Node.js',
        },
      ],
    },
  ]

  return <CMultiSelect options={options} selectionType="counter" />
}
```

### Text

To display the list of selected options as comma-separated text values, set the `selectionType` property to `"text"`.

```html
import React from 'react'
import { CMultiSelect } from '@coreui/react-pro'

export const MultiSelectSelectionTypesTextExample = () => {
  const options = [
    {
      value: 0,
      label: 'Angular',
      selected: true,
    },
    {
      value: 1,
      label: 'Bootstrap',
      selected: true,
      disabled: true,
    },
    {
      value: 2,
      label: 'React.js',
    },
    {
      value: 3,
      label: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          label: 'Django',
        },
        {
          value: 5,
          label: 'Laravel',
          selected: true,
        },
        {
          value: 6,
          label: 'Node.js',
        },
      ],
    },
  ]

  return <CMultiSelect options={options} selectionType="text" />
}
```

## Select all

_Added in 5.26.0._

When `multiple` is enabled, a **select all** button is rendered in the dropdown header (toggle it with the `selectAll` property, on by default). The button works as a toggle: it selects every option and its label switches to `deselectAllLabel`, then deselects everything on the next click.

With the default `selectAllStyle="checkbox"` the button shows a tri-state indicator that mirrors the overall selection — `none` when nothing is selected, `all` when everything is, and `indeterminate` in between. Set `selectAllStyle="text"` for a plain text toggle instead.

```html
import React from 'react'
import { CMultiSelect } from '@coreui/react-pro'

export const MultiSelectSelectAllExample = () => {
  const options = [
    {
      value: 0,
      label: 'Angular',
    },
    {
      value: 1,
      label: 'Bootstrap',
    },
    {
      value: 2,
      label: 'React.js',
    },
    {
      value: 3,
      label: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          label: 'Django',
        },
        {
          value: 5,
          label: 'Laravel',
        },
        {
          value: 6,
          label: 'Node.js',
        },
      ],
    },
  ]

  return <CMultiSelect options={options} search />
}
```

### Acting on filtered options

By default (`selectAllMode="all"`) the header button acts on the full list, ignoring the current filter. Set `selectAllMode="filtered"` to scope the button to the options currently matched by the search filter. The button's label and checkbox then answer "are all *filtered* options selected?". With no active filter, every option matches, so this behaves exactly like `"all"`.

To avoid a misleading "Select all" while a filter is active, the label switches to `selectFilteredLabel` / `deselectFilteredLabel` (default `Select filtered` / `Deselect filtered`) whenever the filter actually narrows the list — and falls back to `selectAllLabel` / `deselectAllLabel` when nothing is hidden.

Type into the search box below, then use select all — only the matching options are selected.

```html
import React from 'react'
import { CMultiSelect } from '@coreui/react-pro'

export const MultiSelectSelectAllModeExample = () => {
  const options = [
    {
      value: 0,
      label: 'Angular',
    },
    {
      value: 1,
      label: 'Bootstrap',
    },
    {
      value: 2,
      label: 'React.js',
    },
    {
      value: 3,
      label: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          label: 'Django',
        },
        {
          value: 5,
          label: 'Laravel',
        },
        {
          value: 6,
          label: 'Node.js',
        },
      ],
    },
  ]

  return <CMultiSelect options={options} search selectAllMode="filtered" />
}
```

Because the scope follows the filter, a side effect is worth knowing: if you select all options while a filter is active (so the checkbox shows `all`) and then clear the search, the checkbox drops to `indeterminate` — the previously hidden, unselected options are now back in the list, so not everything in view is selected anymore.

### Hiding select all when search has no results

_Added in 5.27.0._

When `search` is enabled and the user types a query that matches no options, there is nothing left to select — so leaving the **select all** button visible above the empty "No results found" message is misleading. By default (`hideSelectAllOnSearchNoResults={true}`) the component hides the whole dropdown header in that case, and brings it back as soon as the search matches at least one option again.

Type a query that matches nothing (for example `xyz`) into the example below — the select all button disappears together with the options, then returns when you clear or change the search.

```html
import React from 'react'
import { CMultiSelect } from '@coreui/react-pro'

export const MultiSelectHideSelectAllExample = () => {
  const options = [
    {
      value: 0,
      label: 'Angular',
    },
    {
      value: 1,
      label: 'Bootstrap',
    },
    {
      value: 2,
      label: 'React.js',
    },
    {
      value: 3,
      label: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          label: 'Django',
        },
        {
          value: 5,
          label: 'Laravel',
        },
        {
          value: 6,
          label: 'Node.js',
        },
      ],
    },
  ]

  return <CMultiSelect options={options} search />
}
```

Set `hideSelectAllOnSearchNoResults={false}` to keep the header (and the select all button) visible even when the search returns no results.

```html
import React from 'react'
import { CMultiSelect } from '@coreui/react-pro'

export const MultiSelectKeepSelectAllExample = () => {
  const options = [
    {
      value: 0,
      label: 'Angular',
    },
    {
      value: 1,
      label: 'Bootstrap',
    },
    {
      value: 2,
      label: 'React.js',
    },
    {
      value: 3,
      label: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          label: 'Django',
        },
        {
          value: 5,
          label: 'Laravel',
        },
        {
          value: 6,
          label: 'Node.js',
        },
      ],
    },
  ]

  return <CMultiSelect options={options} search hideSelectAllOnSearchNoResults={false} />
}
```

This option only affects the built-in select all button. A [custom dropdown header](#custom-dropdown-header) is always rendered, since it may contain controls unrelated to the options list.

## Selection limit

_Added in 5.26.0._

Use the `selectionLimit` property to limit how many options can be selected. The select all button stays enabled and selects options up to the limit, then toggles to deselect all once the limit is reached. The `onSelectionLimit` callback fires when a user tries to select more options than allowed — use it to show feedback.

```html
import React, { useState } from 'react'
import { CAlert } from '@coreui/react'
import { CMultiSelect } from '@coreui/react-pro'

export const MultiSelectSelectionLimitExample = () => {
  const [limitReached, setLimitReached] = useState(false)

  const options = [
    {
      value: 0,
      label: 'Angular',
    },
    {
      value: 1,
      label: 'Bootstrap',
    },
    {
      value: 2,
      label: 'React.js',
    },
    {
      value: 3,
      label: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          label: 'Django',
        },
        {
          value: 5,
          label: 'Laravel',
        },
        {
          value: 6,
          label: 'Node.js',
        },
      ],
    },
  ]

  return (
    <>
      {limitReached && (
        <CAlert color="warning" dismissible onClose={() => setLimitReached(false)}>
          You can select up to 3 options.
        </CAlert>
      )}
      <CMultiSelect
        options={options}
        search
        selectionLimit={3}
        onSelectionLimit={() => setLimitReached(true)}
      />
    </>
  )
}
```

## Selectable groups

_Added in 5.26.0._

Enable `optionsGroupsSelectable` to turn each group label into its own tri-state checkbox that toggles the whole group. Because the indicator is rendered with CSS, it supports a third, `indeterminate` state — shown when only some of a group's options are selected — without any real `<input>` element. Each section's indicator follows its own `*Style` property (`optionsStyle`, `optionsGroupsStyle`, `selectAllStyle`, all defaulting to `'checkbox'`) and requires `multiple`.

```html
import React from 'react'
import { CMultiSelect } from '@coreui/react-pro'

export const MultiSelectSelectableGroupsExample = () => {
  const options = [
    {
      label: 'Frontend',
      options: [
        {
          value: 0,
          label: 'Angular',
        },
        {
          value: 1,
          label: 'Bootstrap',
        },
        {
          value: 2,
          label: 'React.js',
        },
        {
          value: 3,
          label: 'Vue.js',
        },
      ],
    },
    {
      label: 'Backend',
      options: [
        {
          value: 4,
          label: 'Django',
        },
        {
          value: 5,
          label: 'Laravel',
        },
        {
          value: 6,
          label: 'Node.js',
        },
      ],
    },
  ]

  return <CMultiSelect options={options} search optionsGroupsSelectable />
}
```

## Custom dropdown header

_Added in 5.26.0._

Use the `headerTemplate` property to fully customize the dropdown header — the area above the options list — including rendering several action buttons. It replaces the built-in select all button and renders independently of `selectAll`. The render function receives a `state` object (`{ selected, total, filtered, filteredSelected }`) and an `actions` object (`{ selectAll, deselectAll, selectFiltered, deselectFiltered }`) with the component's selection methods, so you can wire your own controls. It re-renders on every selection change and search filter, so labels and `disabled` states stay up to date.

```html
import React from 'react'
import { CButton } from '@coreui/react'
import { CMultiSelect } from '@coreui/react-pro'

export const MultiSelectHeaderTemplateExample = () => {
  const options = [
    {
      value: 'angular',
      label: 'Angular',
    },
    {
      value: 'bootstrap',
      label: 'Bootstrap',
    },
    {
      value: 'react',
      label: 'React.js',
    },
    {
      value: 'vue',
      label: 'Vue.js',
    },
    {
      value: 'django',
      label: 'Django',
    },
    {
      value: 'laravel',
      label: 'Laravel',
    },
    {
      value: 'node',
      label: 'Node.js',
    },
  ]

  return (
    <CMultiSelect
      options={options}
      placeholder="Select frameworks"
      search
      headerTemplate={(state, actions) => (
        <div className="d-flex flex-wrap gap-2">
          <CButton
            size="sm"
            color="primary"
            disabled={state.selected >= state.total}
            onClick={() => actions.selectAll()}
          >
            Select all ({state.total})
          </CButton>
          <CButton
            size="sm"
            color="secondary"
            disabled={state.filtered === state.filteredSelected}
            onClick={() => actions.selectFiltered()}
          >
            Select filtered ({state.filtered})
          </CButton>
          <CButton
            size="sm"
            color="secondary"
            variant="outline"
            disabled={state.filteredSelected === 0}
            onClick={() => actions.deselectFiltered()}
          >
            Deselect filtered ({state.filteredSelected})
          </CButton>
          <CButton
            size="sm"
            color="danger"
            variant="outline"
            disabled={state.selected === 0}
            onClick={() => actions.deselectAll()}
          >
            Deselect all ({state.selected})
          </CButton>
        </div>
      )}
    />
  )
}
```

## Single Selection

Set the `multiple` boolean property to `false` and allow select only one element.

```html
import React from 'react'
import { CMultiSelect } from '@coreui/react-pro'

export const MultiSelectSingleSelectionExample = () => {
  const options = [
    {
      value: 0,
      label: 'Angular',
    },
    {
      value: 1,
      label: 'Bootstrap',
      disabled: true,
    },
    {
      value: 2,
      label: 'React.js',
    },
    {
      value: 3,
      label: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          label: 'Django',
        },
        {
          value: 5,
          label: 'Laravel',
        },
        {
          value: 6,
          label: 'Node.js',
        },
      ],
    },
  ]

  return <CMultiSelect multiple={false} options={options} value={5} />
}
```

## Custom options and options group labels

The CoreUI React Multi Select component provides the flexibility to personalize options and group labels by utilizing custom templates. You can easily customize the options using the `optionsTemplate`, and for groups, you can use `optionsGroupsTemplate`, as demonstrated in the examples below:

```html
import React from 'react'
import { cifPl, cifDe, cifUs, cifEs, cifGb } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCol, CRow } from '@coreui/react'
import { CMultiSelect } from '@coreui/react-pro'

type FlagsMap = {
  [key: string]: string[]
}

export const MultiSelectCustomOptionsExample = () => {
  const flags: FlagsMap = {
    de: cifDe,
    es: cifEs,
    gb: cifGb,
    pl: cifPl,
    us: cifUs,
  }

  const countries = [
    {
      value: 'pl',
      label: 'Poland',
    },
    {
      value: 'de',
      label: 'Germany',
    },
    {
      value: 'us',
      label: 'United States',
    },
    {
      value: 'es',
      label: 'Spain',
    },
    {
      value: 'gb',
      label: 'United Kingdom',
    },
  ]

  const cities = [
    {
      label: 'United States',
      code: 'us',
      options: [
        {
          value: 'au',
          label: 'Austin',
        },
        {
          value: 'ch',
          label: 'Chicago',
        },
        {
          value: 'la',
          label: 'Los Angeles',
        },
        {
          value: 'ny',
          label: 'New York',
        },
        {
          value: 'sa',
          label: 'San Jose',
        },
      ],
    },
    {
      label: 'United Kingdom',
      code: 'gb',
      options: [
        {
          value: 'li',
          label: 'Liverpool',
        },
        {
          value: 'lo',
          label: 'London',
        },
        {
          value: 'ma',
          label: 'Manchester',
        },
      ],
    },
  ]

  return (
    <CRow>
      <CCol md={6}>
        <CMultiSelect
          label="Select country"
          options={countries}
          optionsStyle="text"
          optionsTemplate={(option) => (
            <div className="d-flex">
              <CIcon className="me-3" icon={flags[option.value]} size="xl" /> {option.label}
            </div>
          )}
        />
      </CCol>
      <CCol md={6}>
        <CMultiSelect
          label="Select city"
          options={cities}
          optionsGroupsTemplate={(option) => (
            <div className="d-flex align-items-center">
              <CIcon className="me-3" icon={flags[option.code]} size="xl" /> {option.label}
            </div>
          )}
        />
      </CCol>
    </CRow>
  )
}
```

## Coordinated selection

The selection of React select components can be coordinated by dynamically updating city options based on the selected country. Use the `resetSelectionOnOptionsChange` prop on the city select component to reset the selected city whenever the country changes, ensuring synchronized selections.

```html
import React, { useState } from 'react'
import { cifPl, cifDe, cifUs, cifEs, cifGb } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCol, CRow } from '@coreui/react'
import { CMultiSelect } from '@coreui/react-pro'
import type { Option } from '@coreui/react-pro/src/components/multi-select/types'

type FlagsMap = {
  [key: string]: string[]
}

export const MultiSelectCoordinatedSelectionExample = () => {
  const [cities, setCities] = useState([])

  const countries = [
    {
      value: 'pl',
      label: 'Poland',
      cities: [
        { value: 'warszawa', label: 'Warszawa' },
        { value: 'krakow', label: 'Kraków' },
        { value: 'lodz', label: 'Łódź' },
        { value: 'wroclaw', label: 'Wrocław' },
        { value: 'poznan', label: 'Poznań' },
      ],
    },
    {
      value: 'de',
      label: 'Germany',
      cities: [
        { value: 'berlin', label: 'Berlin' },
        { value: 'hamburg', label: 'Hamburg' },
        { value: 'munich', label: 'Munich' },
        { value: 'cologne', label: 'Cologne' },
        { value: 'frankfurt', label: 'Frankfurt' },
      ],
    },
    {
      value: 'us',
      label: 'United States',
      cities: [
        { value: 'new_york', label: 'New York' },
        { value: 'los_angeles', label: 'Los Angeles' },
        { value: 'chicago', label: 'Chicago' },
        { value: 'houston', label: 'Houston' },
        { value: 'phoenix', label: 'Phoenix' },
      ],
    },
    {
      value: 'es',
      label: 'Spain',
      cities: [
        { value: 'madrid', label: 'Madrid' },
        { value: 'barcelona', label: 'Barcelona' },
        { value: 'valencia', label: 'Valencia' },
        { value: 'seville', label: 'Seville' },
        { value: 'zaragoza', label: 'Zaragoza' },
      ],
    },
    {
      value: 'gb',
      label: 'United Kingdom',
      cities: [
        { value: 'london', label: 'London' },
        { value: 'birmingham', label: 'Birmingham' },
        { value: 'manchester', label: 'Manchester' },
        { value: 'glasgow', label: 'Glasgow' },
        { value: 'liverpool', label: 'Liverpool' },
      ],
    },
  ]

  const flags: FlagsMap = {
    de: cifDe,
    es: cifEs,
    gb: cifGb,
    pl: cifPl,
    us: cifUs,
  }

  return (
    <CRow>
      <CCol md={6}>
        <CMultiSelect
          label="Select country"
          multiple={false}
          onChange={(country: Option[]) => {
            setCities(country.length > 0 ? country[0].cities : [])
          }}
          options={countries}
          optionsStyle="text"
          optionsTemplate={(option) => (
            <div className="d-flex">
              <CIcon className="me-3" icon={flags[option.value]} size="xl" /> {option.label}
            </div>
          )}
        />
      </CCol>
      <CCol md={6}>
        <CMultiSelect
          label="Select city"
          multiple={false}
          options={cities}
          optionsStyle="text"
          resetSelectionOnOptionsChange
        />
      </CCol>
    </CRow>
  )
}
```

## Disabled

Add the `disabled` boolean property to give it a grayed out appearance, remove pointer events, and prevent focusing.

```html
import React from 'react'
import { CMultiSelect } from '@coreui/react-pro'

export const MultiSelectDisabledExample = () => {
  const options = [
    {
      value: 0,
      label: 'Angular',
      selected: true,
    },
    {
      value: 1,
      label: 'Bootstrap',
      selected: true,
      disabled: true,
    },
    {
      value: 2,
      label: 'React.js',
    },
    {
      value: 3,
      label: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          label: 'Django',
        },
        {
          value: 5,
          label: 'Laravel',
          selected: true,
        },
        {
          value: 6,
          label: 'Node.js',
        },
      ],
    },
  ]

  return <CMultiSelect disabled options={options} />
}
```

## Sizing

You may also choose from small and large multi selects to match our similarly sized text inputs.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CMultiSelect } from '@coreui/react-pro'

export const MultiSelectSizingExample = () => {
  const options = [
    {
      value: 0,
      label: 'Angular',
      selected: true,
    },
    {
      value: 1,
      label: 'Bootstrap',
    },
    {
      value: 2,
      label: 'React.js',
    },
    {
      value: 3,
      label: 'Vue.js',
    },
    {
      label: 'backend',
      options: [
        {
          value: 4,
          label: 'Django',
        },
        {
          value: 5,
          label: 'Laravel',
        },
        {
          value: 6,
          label: 'Node.js',
        },
      ],
    },
  ]

  return (
    <CRow>
      <CCol md={6} className="mb-3">
        <CMultiSelect options={options} selectionType="counter" size="lg" />
      </CCol>
      <CCol md={6} className="mb-3">
        <CMultiSelect options={options} size="lg" />
      </CCol>
      <CCol md={6}>
        <CMultiSelect options={options} selectionType="counter" size="sm" />
      </CCol>
      <CCol md={6}>
        <CMultiSelect options={options} size="sm" />
      </CCol>
    </CRow>
  )
}
```

## Virtual Scroller (1000 records)

To enhance performance and manage large amounts of data in React Multi Select, you can generate a list of options using ``. This component renders only the items currently visible on the screen, and as the user scrolls, new items are dynamically loaded and added to the view. This helps to reduce the data load and processing time, resulting in a more responsive UI.

To enable Virtual Scroller, simply set the `virtualScroller` boolean property to `true`, as shown in the example below.

```html
import React from 'react'
import { CMultiSelect } from '@coreui/react-pro'

const users = [
  {
    value: '1',
    label: 'Nanon',
  },
  {
    value: '2',
    label: 'Uriel',
  },
  {
    value: '3',
    label: 'Gilbertine',
  },
  {
    value: '4',
    label: 'Flo',
  },
  {
    value: '5',
    label: 'Husein',
  },
  {
    value: '6',
    label: 'Laurence',
  },
  {
    value: '7',
    label: 'Roberta',
  },
  {
    value: '8',
    label: 'Anjela',
  },
  {
    value: '9',
    label: 'Averill',
  },
  {
    value: '10',
    label: 'Ashlin',
  },
  {
    value: '11',
    label: 'Vilma',
  },
  {
    value: '12',
    label: 'Marcello',
  },
  {
    value: '13',
    label: 'Zacharias',
  },
  {
    value: '14',
    label: 'Nancee',
  },
  {
    value: '15',
    label: 'Dannye',
  },
  {
    value: '16',
    label: 'Janaye',
  },
  {
    value: '17',
    label: 'Camel',
  },
  {
    value: '18',
    label: 'Abbott',
  },
  {
    value: '19',
    label: 'Jamima',
  },
  {
    value: '20',
    label: 'Rossy',
  },
  {
    value: '21',
    label: 'Vinson',
  },
  {
    value: '22',
    label: 'Rockwell',
  },
  {
    value: '23',
    label: 'Wyatt',
  },
  {
    value: '24',
    label: 'Berny',
  },
  {
    value: '25',
    label: 'Augustine',
  },
  {
    value: '26',
    label: 'Levon',
  },
  {
    value: '27',
    label: 'Angil',
  },
  {
    value: '28',
    label: 'Aubree',
  },
  {
    value: '29',
    label: 'Mona',
  },
  {
    value: '30',
    label: 'Alva',
  },
  {
    value: '31',
    label: 'Tessi',
  },
  {
    value: '32',
    label: 'Nico',
  },
  {
    value: '33',
    label: 'Cull',
  },
  {
    value: '34',
    label: 'Dexter',
  },
  {
    value: '35',
    label: 'Ethelin',
  },
  {
    value: '36',
    label: 'Sileas',
  },
  {
    value: '37',
    label: 'Jerrilee',
  },
  {
    value: '38',
    label: 'Esmaria',
  },
  {
    value: '39',
    label: 'Alys',
  },
  {
    value: '40',
    label: 'Milty',
  },
  {
    value: '41',
    label: 'Rodrick',
  },
  {
    value: '42',
    label: 'Lanae',
  },
  {
    value: '43',
    label: 'Gisele',
  },
  {
    value: '44',
    label: 'Guss',
  },
  {
    value: '45',
    label: 'Darbee',
  },
  {
    value: '46',
    label: 'Jaymie',
  },
  {
    value: '47',
    label: 'Mattias',
  },
  {
    value: '48',
    label: 'Lonna',
  },
  {
    value: '49',
    label: 'Emmanuel',
  },
  {
    value: '50',
    label: 'Leigh',
  },
  {
    value: '51',
    label: 'Devonna',
  },
  {
    value: '52',
    label: 'Timothea',
  },
  {
    value: '53',
    label: 'Aggi',
  },
  {
    value: '54',
    label: 'Simone',
  },
  {
    value: '55',
    label: 'Tiertza',
  },
  {
    value: '56',
    label: 'Gay',
  },
  {
    value: '57',
    label: 'Barbee',
  },
  {
    value: '58',
    label: 'Odetta',
  },
  {
    value: '59',
    label: 'Nelly',
  },
  {
    value: '60',
    label: 'Kendrick',
  },
  {
    value: '61',
    label: 'Ave',
  },
  {
    value: '62',
    label: 'Hedy',
  },
  {
    value: '63',
    label: 'Minny',
  },
  {
    value: '64',
    label: 'Read',
  },
  {
    value: '65',
    label: 'Dick',
  },
  {
    value: '66',
    label: 'De',
  },
  {
    value: '67',
    label: 'Nerita',
  },
  {
    value: '68',
    label: 'Ahmad',
  },
  {
    value: '69',
    label: 'Myrtie',
  },
  {
    value: '70',
    label: 'Alena',
  },
  {
    value: '71',
    label: 'Lin',
  },
  {
    value: '72',
    label: 'Lenard',
  },
  {
    value: '73',
    label: 'Sergei',
  },
  {
    value: '74',
    label: 'Gilda',
  },
  {
    value: '75',
    label: 'Minnaminnie',
  },
  {
    value: '76',
    label: 'Livvy',
  },
  {
    value: '77',
    label: 'Gaultiero',
  },
  {
    value: '78',
    label: 'Adolf',
  },
  {
    value: '79',
    label: 'Penrod',
  },
  {
    value: '80',
    label: 'Robb',
  },
  {
    value: '81',
    label: 'Cass',
  },
  {
    value: '82',
    label: 'Rivi',
  },
  {
    value: '83',
    label: 'Emmalyn',
  },
  {
    value: '84',
    label: 'Petronella',
  },
  {
    value: '85',
    label: 'Claiborn',
  },
  {
    value: '86',
    label: 'Torrey',
  },
  {
    value: '87',
    label: 'Leslie',
  },
  {
    value: '88',
    label: 'Ginelle',
  },
  {
    value: '89',
    label: 'Rosalie',
  },
  {
    value: '90',
    label: 'Farrel',
  },
  {
    value: '91',
    label: 'Adina',
  },
  {
    value: '92',
    label: 'Shandra',
  },
  {
    value: '93',
    label: 'Annice',
  },
  {
    value: '94',
    label: 'Carly',
  },
  {
    value: '95',
    label: 'Julius',
  },
  {
    value: '96',
    label: 'Ambrosi',
  },
  {
    value: '97',
    label: 'Deane',
  },
  {
    value: '98',
    label: 'Fritz',
  },
  {
    value: '99',
    label: 'Janella',
  },
  {
    value: '100',
    label: 'Mattie',
  },
  {
    value: '101',
    label: 'Catherin',
  },
  {
    value: '102',
    label: 'Anett',
  },
  {
    value: '103',
    label: 'Corenda',
  },
  {
    value: '104',
    label: 'Foster',
  },
  {
    value: '105',
    label: 'Clim',
  },
  {
    value: '106',
    label: 'Meghan',
  },
  {
    value: '107',
    label: 'Dalton',
  },
  {
    value: '108',
    label: 'Boris',
  },
  {
    value: '109',
    label: 'Salli',
  },
  {
    value: '110',
    label: 'Hailey',
  },
  {
    value: '111',
    label: 'Dalston',
  },
  {
    value: '112',
    label: 'Brittni',
  },
  {
    value: '113',
    label: 'Weston',
  },
  {
    value: '114',
    label: 'Dennie',
  },
  {
    value: '115',
    label: 'Michael',
  },
  {
    value: '116',
    label: 'Melli',
  },
  {
    value: '117',
    label: 'Cate',
  },
  {
    value: '118',
    label: 'Humfried',
  },
  {
    value: '119',
    label: 'Tomkin',
  },
  {
    value: '120',
    label: 'Lenna',
  },
  {
    value: '121',
    label: 'Margo',
  },
  {
    value: '122',
    label: 'Roxane',
  },
  {
    value: '123',
    label: 'Nichole',
  },
  {
    value: '124',
    label: 'Heriberto',
  },
  {
    value: '125',
    label: 'Jobey',
  },
  {
    value: '126',
    label: 'Warner',
  },
  {
    value: '127',
    label: 'Gabriellia',
  },
  {
    value: '128',
    label: 'Letta',
  },
  {
    value: '129',
    label: 'Sybyl',
  },
  {
    value: '130',
    label: 'Mathian',
  },
  {
    value: '131',
    label: 'Ange',
  },
  {
    value: '132',
    label: 'Millicent',
  },
  {
    value: '133',
    label: 'Katee',
  },
  {
    value: '134',
    label: 'Casar',
  },
  {
    value: '135',
    label: 'Marta',
  },
  {
    value: '136',
    label: 'Missy',
  },
  {
    value: '137',
    label: 'Rosemarie',
  },
  {
    value: '138',
    label: 'Valentia',
  },
  {
    value: '139',
    label: 'Sybilla',
  },
  {
    value: '140',
    label: 'Karole',
  },
  {
    value: '141',
    label: 'Pandora',
  },
  {
    value: '142',
    label: 'Gwenny',
  },
  {
    value: '143',
    label: 'Desmund',
  },
  {
    value: '144',
    label: 'Joseph',
  },
  {
    value: '145',
    label: 'Marna',
  },
  {
    value: '146',
    label: 'Siusan',
  },
  {
    value: '147',
    label: 'Corly',
  },
  {
    value: '148',
    label: 'Judye',
  },
  {
    value: '149',
    label: 'Velvet',
  },
  {
    value: '150',
    label: 'Phyllida',
  },
  {
    value: '151',
    label: 'Jeramey',
  },
  {
    value: '152',
    label: 'Kendra',
  },
  {
    value: '153',
    label: 'Cherida',
  },
  {
    value: '154',
    label: 'Dunn',
  },
  {
    value: '155',
    label: 'Jonie',
  },
  {
    value: '156',
    label: 'Archibold',
  },
  {
    value: '157',
    label: 'Monique',
  },
  {
    value: '158',
    label: 'Micky',
  },
  {
    value: '159',
    label: 'Chrysler',
  },
  {
    value: '160',
    label: 'Franchot',
  },
  {
    value: '161',
    label: 'Gaston',
  },
  {
    value: '162',
    label: 'Ajay',
  },
  {
    value: '163',
    label: 'Chet',
  },
  {
    value: '164',
    label: 'Huntington',
  },
  {
    value: '165',
    label: 'Gerald',
  },
  {
    value: '166',
    label: 'Janeta',
  },
  {
    value: '167',
    label: 'Helaina',
  },
  {
    value: '168',
    label: 'Morty',
  },
  {
    value: '169',
    label: 'Issie',
  },
  {
    value: '170',
    label: 'Lammond',
  },
  {
    value: '171',
    label: 'Izaak',
  },
  {
    value: '172',
    label: 'Tybi',
  },
  {
    value: '173',
    label: 'Phaedra',
  },
  {
    value: '174',
    label: 'Misha',
  },
  {
    value: '175',
    label: 'Merralee',
  },
  {
    value: '176',
    label: 'Arni',
  },
  {
    value: '177',
    label: 'Vassily',
  },
  {
    value: '178',
    label: 'Alvira',
  },
  {
    value: '179',
    label: 'Dani',
  },
  {
    value: '180',
    label: 'Joannes',
  },
  {
    value: '181',
    label: 'Jarib',
  },
  {
    value: '182',
    label: 'Virgie',
  },
  {
    value: '183',
    label: 'Pauly',
  },
  {
    value: '184',
    label: 'Chancey',
  },
  {
    value: '185',
    label: 'Deni',
  },
  {
    value: '186',
    label: 'Jaynell',
  },
  {
    value: '187',
    label: 'Mirabella',
  },
  {
    value: '188',
    label: 'Elizabet',
  },
  {
    value: '189',
    label: 'Clay',
  },
  {
    value: '190',
    label: 'Chastity',
  },
  {
    value: '191',
    label: 'Bethanne',
  },
  {
    value: '192',
    label: 'Gwenette',
  },
  {
    value: '193',
    label: 'Mommy',
  },
  {
    value: '194',
    label: 'Ferris',
  },
  {
    value: '195',
    label: 'Mahmud',
  },
  {
    value: '196',
    label: 'Tami',
  },
  {
    value: '197',
    label: 'Stirling',
  },
  {
    value: '198',
    label: 'Neron',
  },
  {
    value: '199',
    label: 'Basile',
  },
  {
    value: '200',
    label: 'Theadora',
  },
  {
    value: '201',
    label: 'Raffarty',
  },
  {
    value: '202',
    label: 'Kim',
  },
  {
    value: '203',
    label: 'Darren',
  },
  {
    value: '204',
    label: 'Sydney',
  },
  {
    value: '205',
    label: 'Bogey',
  },
  {
    value: '206',
    label: 'Guss',
  },
  {
    value: '207',
    label: 'Kristopher',
  },
  {
    value: '208',
    label: 'Jillie',
  },
  {
    value: '209',
    label: 'Sal',
  },
  {
    value: '210',
    label: 'Chad',
  },
  {
    value: '211',
    label: 'Martha',
  },
  {
    value: '212',
    label: 'Tommy',
  },
  {
    value: '213',
    label: 'Krispin',
  },
  {
    value: '214',
    label: 'Benson',
  },
  {
    value: '215',
    label: 'Trumaine',
  },
  {
    value: '216',
    label: 'Dulcia',
  },
  {
    value: '217',
    label: 'Esmaria',
  },
  {
    value: '218',
    label: 'Aldrich',
  },
  {
    value: '219',
    label: 'Rita',
  },
  {
    value: '220',
    label: 'Alikee',
  },
  {
    value: '221',
    label: 'Jackie',
  },
  {
    value: '222',
    label: 'Hynda',
  },
  {
    value: '223',
    label: 'Fayre',
  },
  {
    value: '224',
    label: 'Vale',
  },
  {
    value: '225',
    label: 'Melessa',
  },
  {
    value: '226',
    label: 'Duane',
  },
  {
    value: '227',
    label: 'Dee',
  },
  {
    value: '228',
    label: 'Lotta',
  },
  {
    value: '229',
    label: 'Piper',
  },
  {
    value: '230',
    label: 'Marieann',
  },
  {
    value: '231',
    label: 'Rodney',
  },
  {
    value: '232',
    label: 'Maurizia',
  },
  {
    value: '233',
    label: 'Abbey',
  },
  {
    value: '234',
    label: 'Joe',
  },
  {
    value: '235',
    label: 'Stanislas',
  },
  {
    value: '236',
    label: 'Thomasa',
  },
  {
    value: '237',
    label: 'Bridgette',
  },
  {
    value: '238',
    label: 'Jemmy',
  },
  {
    value: '239',
    label: 'Fan',
  },
  {
    value: '240',
    label: 'Archambault',
  },
  {
    value: '241',
    label: 'Elissa',
  },
  {
    value: '242',
    label: 'Lori',
  },
  {
    value: '243',
    label: 'Bron',
  },
  {
    value: '244',
    label: 'Jacquette',
  },
  {
    value: '245',
    label: 'Emelina',
  },
  {
    value: '246',
    label: 'Cindelyn',
  },
  {
    value: '247',
    label: 'Adriaens',
  },
  {
    value: '248',
    label: 'Lori',
  },
  {
    value: '249',
    label: 'Gabie',
  },
  {
    value: '250',
    label: 'Wallache',
  },
  {
    value: '251',
    label: 'Brit',
  },
  {
    value: '252',
    label: 'Tuck',
  },
  {
    value: '253',
    label: 'Doralin',
  },
  {
    value: '254',
    label: 'Kenny',
  },
  {
    value: '255',
    label: 'Mercedes',
  },
  {
    value: '256',
    label: 'Persis',
  },
  {
    value: '257',
    label: 'Imogen',
  },
  {
    value: '258',
    label: 'Clywd',
  },
  {
    value: '259',
    label: 'Rosaleen',
  },
  {
    value: '260',
    label: 'Penny',
  },
  {
    value: '261',
    label: 'Natalie',
  },
  {
    value: '262',
    label: 'Julietta',
  },
  {
    value: '263',
    label: 'Paola',
  },
  {
    value: '264',
    label: 'Corabella',
  },
  {
    value: '265',
    label: 'Paddie',
  },
  {
    value: '266',
    label: 'Miguela',
  },
  {
    value: '267',
    label: 'Liesa',
  },
  {
    value: '268',
    label: 'Juditha',
  },
  {
    value: '269',
    label: 'Cherlyn',
  },
  {
    value: '270',
    label: 'Alica',
  },
  {
    value: '271',
    label: 'Opalina',
  },
  {
    value: '272',
    label: 'Allegra',
  },
  {
    value: '273',
    label: 'Emmit',
  },
  {
    value: '274',
    label: 'Liesa',
  },
  {
    value: '275',
    label: 'Tommie',
  },
  {
    value: '276',
    label: 'Micky',
  },
  {
    value: '277',
    label: 'Ranee',
  },
  {
    value: '278',
    label: 'Paddie',
  },
  {
    value: '279',
    label: 'Heddie',
  },
  {
    value: '280',
    label: 'Ruperta',
  },
  {
    value: '281',
    label: 'Justinian',
  },
  {
    value: '282',
    label: 'Earvin',
  },
  {
    value: '283',
    label: 'Gayle',
  },
  {
    value: '284',
    label: 'Guinna',
  },
  {
    value: '285',
    label: 'Muffin',
  },
  {
    value: '286',
    label: 'Marsiella',
  },
  {
    value: '287',
    label: 'Sherye',
  },
  {
    value: '288',
    label: 'Deni',
  },
  {
    value: '289',
    label: 'Auria',
  },
  {
    value: '290',
    label: 'Marion',
  },
  {
    value: '291',
    label: 'Slade',
  },
  {
    value: '292',
    label: 'Bridget',
  },
  {
    value: '293',
    label: 'Rhys',
  },
  {
    value: '294',
    label: 'Abba',
  },
  {
    value: '295',
    label: 'Farlee',
  },
  {
    value: '296',
    label: 'Spenser',
  },
  {
    value: '297',
    label: 'Vicky',
  },
  {
    value: '298',
    label: 'Lory',
  },
  {
    value: '299',
    label: 'Cassaundra',
  },
  {
    value: '300',
    label: 'Bary',
  },
  {
    value: '301',
    label: 'Katie',
  },
  {
    value: '302',
    label: 'Nedi',
  },
  {
    value: '303',
    label: 'Laurena',
  },
  {
    value: '304',
    label: 'Vonnie',
  },
  {
    value: '305',
    label: 'Margo',
  },
  {
    value: '306',
    label: 'Donetta',
  },
  {
    value: '307',
    label: 'Aurelie',
  },
  {
    value: '308',
    label: 'Roby',
  },
  {
    value: '309',
    label: 'Cherie',
  },
  {
    value: '310',
    label: 'Bernita',
  },
  {
    value: '311',
    label: 'Shina',
  },
  {
    value: '312',
    label: 'Lenee',
  },
  {
    value: '313',
    label: 'Nester',
  },
  {
    value: '314',
    label: 'Udale',
  },
  {
    value: '315',
    label: 'Magdalena',
  },
  {
    value: '316',
    label: 'Jania',
  },
  {
    value: '317',
    label: 'Giustina',
  },
  {
    value: '318',
    label: 'Cobb',
  },
  {
    value: '319',
    label: 'Michelle',
  },
  {
    value: '320',
    label: 'Craggy',
  },
  {
    value: '321',
    label: 'Amitie',
  },
  {
    value: '322',
    label: 'Byrle',
  },
  {
    value: '323',
    label: 'Geri',
  },
  {
    value: '324',
    label: 'Eb',
  },
  {
    value: '325',
    label: 'Harlan',
  },
  {
    value: '326',
    label: 'Devy',
  },
  {
    value: '327',
    label: 'Rene',
  },
  {
    value: '328',
    label: 'Yance',
  },
  {
    value: '329',
    label: 'Olin',
  },
  {
    value: '330',
    label: 'Kit',
  },
  {
    value: '331',
    label: 'Alix',
  },
  {
    value: '332',
    label: 'Gerrie',
  },
  {
    value: '333',
    label: 'Katina',
  },
  {
    value: '334',
    label: 'Tedman',
  },
  {
    value: '335',
    label: 'Dev',
  },
  {
    value: '336',
    label: 'Kessiah',
  },
  {
    value: '337',
    label: 'Chester',
  },
  {
    value: '338',
    label: 'Jefferson',
  },
  {
    value: '339',
    label: 'Klement',
  },
  {
    value: '340',
    label: 'Cynde',
  },
  {
    value: '341',
    label: 'Eustace',
  },
  {
    value: '342',
    label: 'Alisha',
  },
  {
    value: '343',
    label: 'Vinnie',
  },
  {
    value: '344',
    label: 'Chaddie',
  },
  {
    value: '345',
    label: 'Evangelia',
  },
  {
    value: '346',
    label: 'Giorgi',
  },
  {
    value: '347',
    label: 'August',
  },
  {
    value: '348',
    label: 'Berthe',
  },
  {
    value: '349',
    label: 'Kendre',
  },
  {
    value: '350',
    label: 'Dorette',
  },
  {
    value: '351',
    label: 'Judie',
  },
  {
    value: '352',
    label: 'Dyanne',
  },
  {
    value: '353',
    label: 'Aksel',
  },
  {
    value: '354',
    label: 'Ardyth',
  },
  {
    value: '355',
    label: 'Langsdon',
  },
  {
    value: '356',
    label: 'Dianemarie',
  },
  {
    value: '357',
    label: 'Megen',
  },
  {
    value: '358',
    label: 'Shanna',
  },
  {
    value: '359',
    label: 'Janene',
  },
  {
    value: '360',
    label: 'Rodney',
  },
  {
    value: '361',
    label: 'Robb',
  },
  {
    value: '362',
    label: 'Meade',
  },
  {
    value: '363',
    label: 'Douglas',
  },
  {
    value: '364',
    label: 'Hazel',
  },
  {
    value: '365',
    label: 'Judie',
  },
  {
    value: '366',
    label: 'Paolina',
  },
  {
    value: '367',
    label: 'Edwina',
  },
  {
    value: '368',
    label: 'Shane',
  },
  {
    value: '369',
    label: 'Gordy',
  },
  {
    value: '370',
    label: 'Denise',
  },
  {
    value: '371',
    label: 'Stacee',
  },
  {
    value: '372',
    label: 'Fredelia',
  },
  {
    value: '373',
    label: 'Barbabra',
  },
  {
    value: '374',
    label: 'Jonas',
  },
  {
    value: '375',
    label: 'Ardyce',
  },
  {
    value: '376',
    label: 'Philippa',
  },
  {
    value: '377',
    label: 'Biddy',
  },
  {
    value: '378',
    label: 'Cy',
  },
  {
    value: '379',
    label: 'Branden',
  },
  {
    value: '380',
    label: 'Reuven',
  },
  {
    value: '381',
    label: 'Kris',
  },
  {
    value: '382',
    label: 'Bendicty',
  },
  {
    value: '383',
    label: 'Ardis',
  },
  {
    value: '384',
    label: 'Gigi',
  },
  {
    value: '385',
    label: 'Elvis',
  },
  {
    value: '386',
    label: 'Tamar',
  },
  {
    value: '387',
    label: 'Cacilie',
  },
  {
    value: '388',
    label: 'Farrell',
  },
  {
    value: '389',
    label: 'Giuseppe',
  },
  {
    value: '390',
    label: 'Clerkclaude',
  },
  {
    value: '391',
    label: 'Otha',
  },
  {
    value: '392',
    label: 'Idaline',
  },
  {
    value: '393',
    label: 'Lise',
  },
  {
    value: '394',
    label: 'Faye',
  },
  {
    value: '395',
    label: 'Staci',
  },
  {
    value: '396',
    label: 'Elfrida',
  },
  {
    value: '397',
    label: 'Angelico',
  },
  {
    value: '398',
    label: 'Bessie',
  },
  {
    value: '399',
    label: 'Appolonia',
  },
  {
    value: '400',
    label: 'Don',
  },
  {
    value: '401',
    label: 'Vivyan',
  },
  {
    value: '402',
    label: 'Kittie',
  },
  {
    value: '403',
    label: 'Joe',
  },
  {
    value: '404',
    label: 'Marve',
  },
  {
    value: '405',
    label: 'Rosaline',
  },
  {
    value: '406',
    label: 'Gabbi',
  },
  {
    value: '407',
    label: 'Davis',
  },
  {
    value: '408',
    label: 'Candis',
  },
  {
    value: '409',
    label: 'Xylia',
  },
  {
    value: '410',
    label: 'Delores',
  },
  {
    value: '411',
    label: 'Hymie',
  },
  {
    value: '412',
    label: 'Ronny',
  },
  {
    value: '413',
    label: 'Wilhelmine',
  },
  {
    value: '414',
    label: 'Gregg',
  },
  {
    value: '415',
    label: 'Cara',
  },
  {
    value: '416',
    label: 'Jenda',
  },
  {
    value: '417',
    label: 'Gusta',
  },
  {
    value: '418',
    label: 'Nester',
  },
  {
    value: '419',
    label: 'Noella',
  },
  {
    value: '420',
    label: 'Gayle',
  },
  {
    value: '421',
    label: 'Philippa',
  },
  {
    value: '422',
    label: 'Sylvester',
  },
  {
    value: '423',
    label: 'Hailey',
  },
  {
    value: '424',
    label: 'Gaylord',
  },
  {
    value: '425',
    label: 'Olive',
  },
  {
    value: '426',
    label: 'Annabelle',
  },
  {
    value: '427',
    label: 'Tabina',
  },
  {
    value: '428',
    label: 'Kali',
  },
  {
    value: '429',
    label: 'Ingemar',
  },
  {
    value: '430',
    label: 'Terra',
  },
  {
    value: '431',
    label: 'Mahala',
  },
  {
    value: '432',
    label: 'Arman',
  },
  {
    value: '433',
    label: 'Celestyn',
  },
  {
    value: '434',
    label: 'Kennith',
  },
  {
    value: '435',
    label: 'Ellary',
  },
  {
    value: '436',
    label: 'Fair',
  },
  {
    value: '437',
    label: 'Joann',
  },
  {
    value: '438',
    label: 'Norma',
  },
  {
    value: '439',
    label: 'Imojean',
  },
  {
    value: '440',
    label: 'Jessamyn',
  },
  {
    value: '441',
    label: 'Dulcie',
  },
  {
    value: '442',
    label: 'Odessa',
  },
  {
    value: '443',
    label: 'Gerek',
  },
  {
    value: '444',
    label: 'Sky',
  },
  {
    value: '445',
    label: 'Tarrance',
  },
  {
    value: '446',
    label: 'Paolina',
  },
  {
    value: '447',
    label: 'Emmye',
  },
  {
    value: '448',
    label: 'Mandi',
  },
  {
    value: '449',
    label: 'Harper',
  },
  {
    value: '450',
    label: 'Alain',
  },
  {
    value: '451',
    label: 'Iorgos',
  },
  {
    value: '452',
    label: 'Vivia',
  },
  {
    value: '453',
    label: 'Marijo',
  },
  {
    value: '454',
    label: 'Beauregard',
  },
  {
    value: '455',
    label: 'Addia',
  },
  {
    value: '456',
    label: 'Stephana',
  },
  {
    value: '457',
    label: 'Janot',
  },
  {
    value: '458',
    label: 'Krisha',
  },
  {
    value: '459',
    label: 'Arlette',
  },
  {
    value: '460',
    label: 'Illa',
  },
  {
    value: '461',
    label: 'Legra',
  },
  {
    value: '462',
    label: 'Valene',
  },
  {
    value: '463',
    label: 'Morena',
  },
  {
    value: '464',
    label: 'Chantal',
  },
  {
    value: '465',
    label: 'Elisa',
  },
  {
    value: '466',
    label: 'Rayna',
  },
  {
    value: '467',
    label: 'Kore',
  },
  {
    value: '468',
    label: 'Malina',
  },
  {
    value: '469',
    label: 'Leeanne',
  },
  {
    value: '470',
    label: 'Fanny',
  },
  {
    value: '471',
    label: 'Roslyn',
  },
  {
    value: '472',
    label: 'Brig',
  },
  {
    value: '473',
    label: 'Claudie',
  },
  {
    value: '474',
    label: 'Anthe',
  },
  {
    value: '475',
    label: 'Llywellyn',
  },
  {
    value: '476',
    label: 'Kimberli',
  },
  {
    value: '477',
    label: 'Adrianne',
  },
  {
    value: '478',
    label: 'Travers',
  },
  {
    value: '479',
    label: 'Edik',
  },
  {
    value: '480',
    label: 'Pinchas',
  },
  {
    value: '481',
    label: 'Lizbeth',
  },
  {
    value: '482',
    label: 'Muriel',
  },
  {
    value: '483',
    label: 'Wynn',
  },
  {
    value: '484',
    label: 'Tommy',
  },
  {
    value: '485',
    label: 'Angela',
  },
  {
    value: '486',
    label: 'Beth',
  },
  {
    value: '487',
    label: 'Delcine',
  },
  {
    value: '488',
    label: 'Ellynn',
  },
  {
    value: '489',
    label: 'Angil',
  },
  {
    value: '490',
    label: 'Nelly',
  },
  {
    value: '491',
    label: 'Wenonah',
  },
  {
    value: '492',
    label: 'Brinn',
  },
  {
    value: '493',
    label: 'Galen',
  },
  {
    value: '494',
    label: 'Bobbye',
  },
  {
    value: '495',
    label: 'Cammy',
  },
  {
    value: '496',
    label: 'Rowney',
  },
  {
    value: '497',
    label: 'Gerrard',
  },
  {
    value: '498',
    label: 'Salli',
  },
  {
    value: '499',
    label: 'Estele',
  },
  {
    value: '500',
    label: 'Kristofer',
  },
  {
    value: '501',
    label: 'Juliet',
  },
  {
    value: '502',
    label: 'Claybourne',
  },
  {
    value: '503',
    label: 'Dorie',
  },
  {
    value: '504',
    label: 'Halsy',
  },
  {
    value: '505',
    label: 'Annabell',
  },
  {
    value: '506',
    label: 'Claybourne',
  },
  {
    value: '507',
    label: 'Dave',
  },
  {
    value: '508',
    label: 'Marj',
  },
  {
    value: '509',
    label: 'Bethena',
  },
  {
    value: '510',
    label: 'Wandie',
  },
  {
    value: '511',
    label: 'Angelia',
  },
  {
    value: '512',
    label: 'Ede',
  },
  {
    value: '513',
    label: 'Roxie',
  },
  {
    value: '514',
    label: 'Franciskus',
  },
  {
    value: '515',
    label: 'Edouard',
  },
  {
    value: '516',
    label: 'Bernita',
  },
  {
    value: '517',
    label: 'Gardie',
  },
  {
    value: '518',
    label: 'Karil',
  },
  {
    value: '519',
    label: 'Margarita',
  },
  {
    value: '520',
    label: 'Nikos',
  },
  {
    value: '521',
    label: 'Della',
  },
  {
    value: '522',
    label: 'Isacco',
  },
  {
    value: '523',
    label: 'Odille',
  },
  {
    value: '524',
    label: 'Finn',
  },
  {
    value: '525',
    label: 'Wini',
  },
  {
    value: '526',
    label: 'Ricca',
  },
  {
    value: '527',
    label: 'Griff',
  },
  {
    value: '528',
    label: 'Eadmund',
  },
  {
    value: '529',
    label: 'Doti',
  },
  {
    value: '530',
    label: 'Barnebas',
  },
  {
    value: '531',
    label: 'Rube',
  },
  {
    value: '532',
    label: 'Aguie',
  },
  {
    value: '533',
    label: 'Finlay',
  },
  {
    value: '534',
    label: 'Dominique',
  },
  {
    value: '535',
    label: 'Scarlett',
  },
  {
    value: '536',
    label: 'Wenda',
  },
  {
    value: '537',
    label: 'Burgess',
  },
  {
    value: '538',
    label: 'Alexandra',
  },
  {
    value: '539',
    label: 'Cale',
  },
  {
    value: '540',
    label: 'Toddy',
  },
  {
    value: '541',
    label: 'Curtis',
  },
  {
    value: '542',
    label: 'Carlin',
  },
  {
    value: '543',
    label: 'Ric',
  },
  {
    value: '544',
    label: 'Rosene',
  },
  {
    value: '545',
    label: 'Susi',
  },
  {
    value: '546',
    label: 'Cilka',
  },
  {
    value: '547',
    label: 'Farrel',
  },
  {
    value: '548',
    label: 'Ema',
  },
  {
    value: '549',
    label: 'Kimmie',
  },
  {
    value: '550',
    label: 'Lydon',
  },
  {
    value: '551',
    label: 'Nolie',
  },
  {
    value: '552',
    label: 'Dian',
  },
  {
    value: '553',
    label: 'Nancee',
  },
  {
    value: '554',
    label: 'Josi',
  },
  {
    value: '555',
    label: 'Aguste',
  },
  {
    value: '556',
    label: 'Tedman',
  },
  {
    value: '557',
    label: 'Flossi',
  },
  {
    value: '558',
    label: 'Daffi',
  },
  {
    value: '559',
    label: 'Alair',
  },
  {
    value: '560',
    label: 'Hetty',
  },
  {
    value: '561',
    label: 'Liva',
  },
  {
    value: '562',
    label: 'Juliet',
  },
  {
    value: '563',
    label: 'Ainslie',
  },
  {
    value: '564',
    label: 'Ellie',
  },
  {
    value: '565',
    label: 'Hunfredo',
  },
  {
    value: '566',
    label: 'Eadmund',
  },
  {
    value: '567',
    label: 'Stephi',
  },
  {
    value: '568',
    label: 'Humfrid',
  },
  {
    value: '569',
    label: 'Lazare',
  },
  {
    value: '570',
    label: 'Conway',
  },
  {
    value: '571',
    label: 'Nichole',
  },
  {
    value: '572',
    label: 'Arch',
  },
  {
    value: '573',
    label: 'Anatola',
  },
  {
    value: '574',
    label: 'Janine',
  },
  {
    value: '575',
    label: 'Maribelle',
  },
  {
    value: '576',
    label: 'Joby',
  },
  {
    value: '577',
    label: 'Andonis',
  },
  {
    value: '578',
    label: 'Yurik',
  },
  {
    value: '579',
    label: 'Nanice',
  },
  {
    value: '580',
    label: 'Caron',
  },
  {
    value: '581',
    label: 'Glenine',
  },
  {
    value: '582',
    label: 'Delbert',
  },
  {
    value: '583',
    label: 'Odilia',
  },
  {
    value: '584',
    label: 'Agna',
  },
  {
    value: '585',
    label: 'Ashely',
  },
  {
    value: '586',
    label: 'Ruby',
  },
  {
    value: '587',
    label: 'Abigael',
  },
  {
    value: '588',
    label: 'Torey',
  },
  {
    value: '589',
    label: 'Elsey',
  },
  {
    value: '590',
    label: 'Jamie',
  },
  {
    value: '591',
    label: 'Hilarius',
  },
  {
    value: '592',
    label: 'Inge',
  },
  {
    value: '593',
    label: 'Justin',
  },
  {
    value: '594',
    label: 'Clarey',
  },
  {
    value: '595',
    label: 'Annabell',
  },
  {
    value: '596',
    label: 'Winny',
  },
  {
    value: '597',
    label: 'Hercules',
  },
  {
    value: '598',
    label: 'Clovis',
  },
  {
    value: '599',
    label: 'Pippo',
  },
  {
    value: '600',
    label: 'Eveleen',
  },
  {
    value: '601',
    label: 'Ingrim',
  },
  {
    value: '602',
    label: 'Nikolai',
  },
  {
    value: '603',
    label: 'Laryssa',
  },
  {
    value: '604',
    label: 'Cazzie',
  },
  {
    value: '605',
    label: 'Kristian',
  },
  {
    value: '606',
    label: 'Terry',
  },
  {
    value: '607',
    label: 'Gale',
  },
  {
    value: '608',
    label: 'Carlynn',
  },
  {
    value: '609',
    label: 'Linnet',
  },
  {
    value: '610',
    label: 'Jenine',
  },
  {
    value: '611',
    label: 'Cesaro',
  },
  {
    value: '612',
    label: 'Matilda',
  },
  {
    value: '613',
    label: 'Bernardine',
  },
  {
    value: '614',
    label: 'Conrado',
  },
  {
    value: '615',
    label: 'Debee',
  },
  {
    value: '616',
    label: 'Caryl',
  },
  {
    value: '617',
    label: 'Mureil',
  },
  {
    value: '618',
    label: 'Marissa',
  },
  {
    value: '619',
    label: 'Oates',
  },
  {
    value: '620',
    label: 'Ali',
  },
  {
    value: '621',
    label: 'Gayelord',
  },
  {
    value: '622',
    label: 'Noak',
  },
  {
    value: '623',
    label: 'Jarrod',
  },
  {
    value: '624',
    label: 'Euphemia',
  },
  {
    value: '625',
    label: 'Etti',
  },
  {
    value: '626',
    label: 'Audrye',
  },
  {
    value: '627',
    label: 'Shannon',
  },
  {
    value: '628',
    label: 'Gussi',
  },
  {
    value: '629',
    label: 'Annabelle',
  },
  {
    value: '630',
    label: 'Duncan',
  },
  {
    value: '631',
    label: 'Cherish',
  },
  {
    value: '632',
    label: 'Wade',
  },
  {
    value: '633',
    label: 'Ari',
  },
  {
    value: '634',
    label: 'Amii',
  },
  {
    value: '635',
    label: 'Mariska',
  },
  {
    value: '636',
    label: 'Paul',
  },
  {
    value: '637',
    label: 'Leicester',
  },
  {
    value: '638',
    label: 'Abbot',
  },
  {
    value: '639',
    label: 'Keven',
  },
  {
    value: '640',
    label: 'Raquela',
  },
  {
    value: '641',
    label: 'Isahella',
  },
  {
    value: '642',
    label: 'Randie',
  },
  {
    value: '643',
    label: 'Cherie',
  },
  {
    value: '644',
    label: 'Shandeigh',
  },
  {
    value: '645',
    label: 'Muriel',
  },
  {
    value: '646',
    label: 'Tad',
  },
  {
    value: '647',
    label: 'Giordano',
  },
  {
    value: '648',
    label: 'Monty',
  },
  {
    value: '649',
    label: 'Eyde',
  },
  {
    value: '650',
    label: 'Consuelo',
  },
  {
    value: '651',
    label: 'Mortimer',
  },
  {
    value: '652',
    label: 'Ina',
  },
  {
    value: '653',
    label: 'Suzanne',
  },
  {
    value: '654',
    label: 'Jolie',
  },
  {
    value: '655',
    label: 'Teresina',
  },
  {
    value: '656',
    label: 'Carlye',
  },
  {
    value: '657',
    label: 'Cassius',
  },
  {
    value: '658',
    label: 'Jada',
  },
  {
    value: '659',
    label: 'Ludvig',
  },
  {
    value: '660',
    label: 'Raffaello',
  },
  {
    value: '661',
    label: 'Alessandra',
  },
  {
    value: '662',
    label: 'Doe',
  },
  {
    value: '663',
    label: 'Jaynell',
  },
  {
    value: '664',
    label: 'Stern',
  },
  {
    value: '665',
    label: 'Wanda',
  },
  {
    value: '666',
    label: 'Tabor',
  },
  {
    value: '667',
    label: 'Nilson',
  },
  {
    value: '668',
    label: 'Dorris',
  },
  {
    value: '669',
    label: 'Teirtza',
  },
  {
    value: '670',
    label: 'Granger',
  },
  {
    value: '671',
    label: 'Berenice',
  },
  {
    value: '672',
    label: 'Rosella',
  },
  {
    value: '673',
    label: 'Estel',
  },
  {
    value: '674',
    label: 'Masha',
  },
  {
    value: '675',
    label: 'Beck',
  },
  {
    value: '676',
    label: 'Jessamyn',
  },
  {
    value: '677',
    label: 'Freeland',
  },
  {
    value: '678',
    label: 'Vally',
  },
  {
    value: '679',
    label: 'Niels',
  },
  {
    value: '680',
    label: 'Stearn',
  },
  {
    value: '681',
    label: 'Lianna',
  },
  {
    value: '682',
    label: 'Gallagher',
  },
  {
    value: '683',
    label: 'Adela',
  },
  {
    value: '684',
    label: 'Cass',
  },
  {
    value: '685',
    label: 'Kelsy',
  },
  {
    value: '686',
    label: 'Armin',
  },
  {
    value: '687',
    label: 'Davina',
  },
  {
    value: '688',
    label: 'Hersch',
  },
  {
    value: '689',
    label: 'Codee',
  },
  {
    value: '690',
    label: 'Gayle',
  },
  {
    value: '691',
    label: 'Dosi',
  },
  {
    value: '692',
    label: 'Lorry',
  },
  {
    value: '693',
    label: 'Archie',
  },
  {
    value: '694',
    label: 'Hallie',
  },
  {
    value: '695',
    label: 'Drew',
  },
  {
    value: '696',
    label: 'Marcus',
  },
  {
    value: '697',
    label: 'Gussie',
  },
  {
    value: '698',
    label: 'Geoffrey',
  },
  {
    value: '699',
    label: 'Margaux',
  },
  {
    value: '700',
    label: 'Sargent',
  },
  {
    value: '701',
    label: 'Roy',
  },
  {
    value: '702',
    label: 'Marcus',
  },
  {
    value: '703',
    label: 'Corny',
  },
  {
    value: '704',
    label: 'Charley',
  },
  {
    value: '705',
    label: 'Odelinda',
  },
  {
    value: '706',
    label: 'Durward',
  },
  {
    value: '707',
    label: 'Regina',
  },
  {
    value: '708',
    label: 'Nickey',
  },
  {
    value: '709',
    label: 'Bancroft',
  },
  {
    value: '710',
    label: 'Vin',
  },
  {
    value: '711',
    label: 'Emmy',
  },
  {
    value: '712',
    label: 'Barclay',
  },
  {
    value: '713',
    label: 'Brena',
  },
  {
    value: '714',
    label: 'Evie',
  },
  {
    value: '715',
    label: 'Erroll',
  },
  {
    value: '716',
    label: 'Adamo',
  },
  {
    value: '717',
    label: 'Basil',
  },
  {
    value: '718',
    label: 'Berke',
  },
  {
    value: '719',
    label: 'Otis',
  },
  {
    value: '720',
    label: 'Bary',
  },
  {
    value: '721',
    label: 'Lucretia',
  },
  {
    value: '722',
    label: 'Miran',
  },
  {
    value: '723',
    label: 'Ruthi',
  },
  {
    value: '724',
    label: 'Justinn',
  },
  {
    value: '725',
    label: 'Mavis',
  },
  {
    value: '726',
    label: 'Joell',
  },
  {
    value: '727',
    label: 'Maximilianus',
  },
  {
    value: '728',
    label: 'Wenonah',
  },
  {
    value: '729',
    label: 'Ken',
  },
  {
    value: '730',
    label: 'Earl',
  },
  {
    value: '731',
    label: 'Bartolomeo',
  },
  {
    value: '732',
    label: 'Woodman',
  },
  {
    value: '733',
    label: 'Silvia',
  },
  {
    value: '734',
    label: 'Guy',
  },
  {
    value: '735',
    label: 'Jeri',
  },
  {
    value: '736',
    label: 'Sumner',
  },
  {
    value: '737',
    label: 'Ethelind',
  },
  {
    value: '738',
    label: 'Dewitt',
  },
  {
    value: '739',
    label: 'Inger',
  },
  {
    value: '740',
    label: 'Tamqrah',
  },
  {
    value: '741',
    label: 'Melita',
  },
  {
    value: '742',
    label: 'Myrah',
  },
  {
    value: '743',
    label: 'Nikolai',
  },
  {
    value: '744',
    label: 'Courtnay',
  },
  {
    value: '745',
    label: 'Cassandra',
  },
  {
    value: '746',
    label: 'Maryanna',
  },
  {
    value: '747',
    label: 'Abeu',
  },
  {
    value: '748',
    label: 'Hermie',
  },
  {
    value: '749',
    label: 'Gussie',
  },
  {
    value: '750',
    label: 'Niall',
  },
  {
    value: '751',
    label: 'Lyssa',
  },
  {
    value: '752',
    label: 'Connie',
  },
  {
    value: '753',
    label: 'Matthaeus',
  },
  {
    value: '754',
    label: 'Kristan',
  },
  {
    value: '755',
    label: 'Chrisse',
  },
  {
    value: '756',
    label: 'Charla',
  },
  {
    value: '757',
    label: 'Waite',
  },
  {
    value: '758',
    label: 'Aleece',
  },
  {
    value: '759',
    label: 'Freeland',
  },
  {
    value: '760',
    label: 'Ashley',
  },
  {
    value: '761',
    label: 'Trever',
  },
  {
    value: '762',
    label: 'Gertrude',
  },
  {
    value: '763',
    label: 'Gunther',
  },
  {
    value: '764',
    label: 'Kandace',
  },
  {
    value: '765',
    label: 'Gui',
  },
  {
    value: '766',
    label: 'Averil',
  },
  {
    value: '767',
    label: 'Udell',
  },
  {
    value: '768',
    label: 'Dorri',
  },
  {
    value: '769',
    label: 'Kennan',
  },
  {
    value: '770',
    label: 'Petra',
  },
  {
    value: '771',
    label: 'Baudoin',
  },
  {
    value: '772',
    label: 'Shandee',
  },
  {
    value: '773',
    label: 'Jakie',
  },
  {
    value: '774',
    label: 'Ximenez',
  },
  {
    value: '775',
    label: 'Ringo',
  },
  {
    value: '776',
    label: 'Westbrooke',
  },
  {
    value: '777',
    label: 'Evy',
  },
  {
    value: '778',
    label: 'Janek',
  },
  {
    value: '779',
    label: 'Page',
  },
  {
    value: '780',
    label: 'Bronny',
  },
  {
    value: '781',
    label: 'Hailey',
  },
  {
    value: '782',
    label: 'Chase',
  },
  {
    value: '783',
    label: 'Wilt',
  },
  {
    value: '784',
    label: 'Taber',
  },
  {
    value: '785',
    label: 'Alexandre',
  },
  {
    value: '786',
    label: 'Helenelizabeth',
  },
  {
    value: '787',
    label: 'Hamel',
  },
  {
    value: '788',
    label: 'Doria',
  },
  {
    value: '789',
    label: 'Damita',
  },
  {
    value: '790',
    label: 'Cherianne',
  },
  {
    value: '791',
    label: 'Dianna',
  },
  {
    value: '792',
    label: 'Ermin',
  },
  {
    value: '793',
    label: 'Mollie',
  },
  {
    value: '794',
    label: 'Carroll',
  },
  {
    value: '795',
    label: 'Lee',
  },
  {
    value: '796',
    label: 'Timotheus',
  },
  {
    value: '797',
    label: 'Melinde',
  },
  {
    value: '798',
    label: 'Gavin',
  },
  {
    value: '799',
    label: 'Tirrell',
  },
  {
    value: '800',
    label: 'Abbe',
  },
  {
    value: '801',
    label: 'Casandra',
  },
  {
    value: '802',
    label: 'Harold',
  },
  {
    value: '803',
    label: 'Costanza',
  },
  {
    value: '804',
    label: 'Max',
  },
  {
    value: '805',
    label: 'Francyne',
  },
  {
    value: '806',
    label: 'Ransell',
  },
  {
    value: '807',
    label: 'Raquela',
  },
  {
    value: '808',
    label: 'Molli',
  },
  {
    value: '809',
    label: 'Dasi',
  },
  {
    value: '810',
    label: 'Ronna',
  },
  {
    value: '811',
    label: 'Aubrette',
  },
  {
    value: '812',
    label: 'Sherri',
  },
  {
    value: '813',
    label: 'Shelby',
  },
  {
    value: '814',
    label: 'Bartolemo',
  },
  {
    value: '815',
    label: 'Verile',
  },
  {
    value: '816',
    label: 'Park',
  },
  {
    value: '817',
    label: 'Rudolf',
  },
  {
    value: '818',
    label: 'Thatcher',
  },
  {
    value: '819',
    label: 'Tansy',
  },
  {
    value: '820',
    label: 'Lona',
  },
  {
    value: '821',
    label: 'Cairistiona',
  },
  {
    value: '822',
    label: 'Kerrie',
  },
  {
    value: '823',
    label: 'Darb',
  },
  {
    value: '824',
    label: 'Olivier',
  },
  {
    value: '825',
    label: 'Melamie',
  },
  {
    value: '826',
    label: 'Isabeau',
  },
  {
    value: '827',
    label: 'Tilda',
  },
  {
    value: '828',
    label: 'Kelley',
  },
  {
    value: '829',
    label: 'Vanna',
  },
  {
    value: '830',
    label: 'Konstance',
  },
  {
    value: '831',
    label: 'Jourdan',
  },
  {
    value: '832',
    label: 'Vale',
  },
  {
    value: '833',
    label: 'Sholom',
  },
  {
    value: '834',
    label: 'Lynelle',
  },
  {
    value: '835',
    label: 'Andras',
  },
  {
    value: '836',
    label: 'Jewelle',
  },
  {
    value: '837',
    label: 'Michele',
  },
  {
    value: '838',
    label: 'Raye',
  },
  {
    value: '839',
    label: 'Issiah',
  },
  {
    value: '840',
    label: 'Zandra',
  },
  {
    value: '841',
    label: 'Stephine',
  },
  {
    value: '842',
    label: 'Kare',
  },
  {
    value: '843',
    label: 'Clari',
  },
  {
    value: '844',
    label: 'Dory',
  },
  {
    value: '845',
    label: 'Jenifer',
  },
  {
    value: '846',
    label: 'Johnnie',
  },
  {
    value: '847',
    label: 'Denise',
  },
  {
    value: '848',
    label: 'Casper',
  },
  {
    value: '849',
    label: 'Barron',
  },
  {
    value: '850',
    label: 'Malissia',
  },
  {
    value: '851',
    label: 'Albert',
  },
  {
    value: '852',
    label: 'Viola',
  },
  {
    value: '853',
    label: 'Raoul',
  },
  {
    value: '854',
    label: 'Zarah',
  },
  {
    value: '855',
    label: 'Lyndell',
  },
  {
    value: '856',
    label: 'Morna',
  },
  {
    value: '857',
    label: 'Paule',
  },
  {
    value: '858',
    label: 'Randee',
  },
  {
    value: '859',
    label: 'Odille',
  },
  {
    value: '860',
    label: 'Elie',
  },
  {
    value: '861',
    label: 'Linea',
  },
  {
    value: '862',
    label: 'Andres',
  },
  {
    value: '863',
    label: 'Kahaleel',
  },
  {
    value: '864',
    label: 'Erick',
  },
  {
    value: '865',
    label: 'Flory',
  },
  {
    value: '866',
    label: 'Crystal',
  },
  {
    value: '867',
    label: 'Onfroi',
  },
  {
    value: '868',
    label: 'Zora',
  },
  {
    value: '869',
    label: 'Jenna',
  },
  {
    value: '870',
    label: 'Beilul',
  },
  {
    value: '871',
    label: 'Nickolas',
  },
  {
    value: '872',
    label: 'Billy',
  },
  {
    value: '873',
    label: 'Harman',
  },
  {
    value: '874',
    label: 'Gaspard',
  },
  {
    value: '875',
    label: 'Rosa',
  },
  {
    value: '876',
    label: 'Georgianna',
  },
  {
    value: '877',
    label: 'Bertrand',
  },
  {
    value: '878',
    label: 'Ignacius',
  },
  {
    value: '879',
    label: 'Trueman',
  },
  {
    value: '880',
    label: 'Herold',
  },
  {
    value: '881',
    label: 'Jarret',
  },
  {
    value: '882',
    label: 'Natalina',
  },
  {
    value: '883',
    label: 'Norah',
  },
  {
    value: '884',
    label: 'Pia',
  },
  {
    value: '885',
    label: 'Bradan',
  },
  {
    value: '886',
    label: 'Christen',
  },
  {
    value: '887',
    label: 'Bunny',
  },
  {
    value: '888',
    label: 'Hunter',
  },
  {
    value: '889',
    label: 'Patrizius',
  },
  {
    value: '890',
    label: 'Onofredo',
  },
  {
    value: '891',
    label: 'Lorilyn',
  },
  {
    value: '892',
    label: 'Aurea',
  },
  {
    value: '893',
    label: 'Brandise',
  },
  {
    value: '894',
    label: 'Jarad',
  },
  {
    value: '895',
    label: 'Emylee',
  },
  {
    value: '896',
    label: 'Genovera',
  },
  {
    value: '897',
    label: 'Harmon',
  },
  {
    value: '898',
    label: 'Benedetta',
  },
  {
    value: '899',
    label: 'Enos',
  },
  {
    value: '900',
    label: 'Warren',
  },
  {
    value: '901',
    label: 'Donella',
  },
  {
    value: '902',
    label: 'Avram',
  },
  {
    value: '903',
    label: 'Delaney',
  },
  {
    value: '904',
    label: 'Madeline',
  },
  {
    value: '905',
    label: 'George',
  },
  {
    value: '906',
    label: 'Carin',
  },
  {
    value: '907',
    label: 'Thane',
  },
  {
    value: '908',
    label: 'Lurleen',
  },
  {
    value: '909',
    label: 'Carolee',
  },
  {
    value: '910',
    label: 'Ninetta',
  },
  {
    value: '911',
    label: 'Rhys',
  },
  {
    value: '912',
    label: 'Gaspard',
  },
  {
    value: '913',
    label: 'Irvine',
  },
  {
    value: '914',
    label: 'Patsy',
  },
  {
    value: '915',
    label: 'Anthony',
  },
  {
    value: '916',
    label: 'Lari',
  },
  {
    value: '917',
    label: 'Sergei',
  },
  {
    value: '918',
    label: 'Marielle',
  },
  {
    value: '919',
    label: 'Cleve',
  },
  {
    value: '920',
    label: 'Sela',
  },
  {
    value: '921',
    label: 'Durant',
  },
  {
    value: '922',
    label: 'Tremayne',
  },
  {
    value: '923',
    label: 'Roby',
  },
  {
    value: '924',
    label: 'Aleda',
  },
  {
    value: '925',
    label: 'Hubey',
  },
  {
    value: '926',
    label: 'Ulberto',
  },
  {
    value: '927',
    label: 'Rodolfo',
  },
  {
    value: '928',
    label: 'Guillermo',
  },
  {
    value: '929',
    label: 'Smith',
  },
  {
    value: '930',
    label: 'Sigrid',
  },
  {
    value: '931',
    label: 'Kasper',
  },
  {
    value: '932',
    label: 'Quinton',
  },
  {
    value: '933',
    label: 'Gherardo',
  },
  {
    value: '934',
    label: 'Shea',
  },
  {
    value: '935',
    label: 'Aurel',
  },
  {
    value: '936',
    label: 'Emelyne',
  },
  {
    value: '937',
    label: 'Valida',
  },
  {
    value: '938',
    label: 'Sim',
  },
  {
    value: '939',
    label: 'Karel',
  },
  {
    value: '940',
    label: 'Margareta',
  },
  {
    value: '941',
    label: 'Matteo',
  },
  {
    value: '942',
    label: 'Ryley',
  },
  {
    value: '943',
    label: 'Hilliard',
  },
  {
    value: '944',
    label: 'Bondie',
  },
  {
    value: '945',
    label: 'Rebecka',
  },
  {
    value: '946',
    label: 'Miguel',
  },
  {
    value: '947',
    label: 'Mattias',
  },
  {
    value: '948',
    label: 'Aubert',
  },
  {
    value: '949',
    label: 'Malena',
  },
  {
    value: '950',
    label: 'Alley',
  },
  {
    value: '951',
    label: 'Scot',
  },
  {
    value: '952',
    label: 'Foster',
  },
  {
    value: '953',
    label: 'Cora',
  },
  {
    value: '954',
    label: 'Karolina',
  },
  {
    value: '955',
    label: 'Lindsay',
  },
  {
    value: '956',
    label: 'Erskine',
  },
  {
    value: '957',
    label: 'Alvinia',
  },
  {
    value: '958',
    label: 'Effie',
  },
  {
    value: '959',
    label: 'Bethina',
  },
  {
    value: '960',
    label: 'Bartholemy',
  },
  {
    value: '961',
    label: 'Giulio',
  },
  {
    value: '962',
    label: 'Christabel',
  },
  {
    value: '963',
    label: 'Ximenes',
  },
  {
    value: '964',
    label: 'Walliw',
  },
  {
    value: '965',
    label: 'Devi',
  },
  {
    value: '966',
    label: 'Clemmy',
  },
  {
    value: '967',
    label: 'Doralin',
  },
  {
    value: '968',
    label: 'Dominique',
  },
  {
    value: '969',
    label: 'Urbanus',
  },
  {
    value: '970',
    label: 'Nataline',
  },
  {
    value: '971',
    label: 'Reinhard',
  },
  {
    value: '972',
    label: 'Waiter',
  },
  {
    value: '973',
    label: 'Selle',
  },
  {
    value: '974',
    label: 'Magda',
  },
  {
    value: '975',
    label: 'Gilbertina',
  },
  {
    value: '976',
    label: 'Dav',
  },
  {
    value: '977',
    label: 'Katina',
  },
  {
    value: '978',
    label: 'Clarence',
  },
  {
    value: '979',
    label: 'Gareth',
  },
  {
    value: '980',
    label: 'Sherwin',
  },
  {
    value: '981',
    label: 'Noelle',
  },
  {
    value: '982',
    label: 'Nell',
  },
  {
    value: '983',
    label: 'Prisca',
  },
  {
    value: '984',
    label: 'Garald',
  },
  {
    value: '985',
    label: 'Bennie',
  },
  {
    value: '986',
    label: 'Marigold',
  },
  {
    value: '987',
    label: 'Karoly',
  },
  {
    value: '988',
    label: 'Mignon',
  },
  {
    value: '989',
    label: 'Laetitia',
  },
  {
    value: '990',
    label: 'Laura',
  },
  {
    value: '991',
    label: 'Inger',
  },
  {
    value: '992',
    label: 'Obadiah',
  },
  {
    value: '993',
    label: 'Farly',
  },
  {
    value: '994',
    label: 'Kristoffer',
  },
  {
    value: '995',
    label: 'Van',
  },
  {
    value: '996',
    label: 'Biddie',
  },
  {
    value: '997',
    label: 'Raimundo',
  },
  {
    value: '998',
    label: 'Claudette',
  },
  {
    value: '999',
    label: 'Jonell',
  },
  {
    value: '1000',
    label: 'Jasper',
  },
]

export const MultiSelectVirtualScrollerExample = () => {
  return (
    <CMultiSelect options={users} label="Users" text="Please select your user." virtualScroller />
  )
}
```

## External Data

One of the key features of React Multi Select component is the ability to load data from an external source, such as an API or a server-side script. This can be useful if you have a large amount of data that you don't want to load all at once. To load external data into a React MultiSelect, you can use the Fetch API to the data source.

Here is an example of how you might use React Multi Select with external data:

```html
import React, { useState } from 'react'
import { CMultiSelect, useDebouncedCallback } from '@coreui/react-pro'
import type { Option } from '@coreui/react-pro/src/components/multi-select/types'

export const MultiSelectExternalDataExample = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const getUsers = async (name = '') => {
    setLoading(true)
    try {
      const response = await fetch(`https://apitest.coreui.io/demos/users?first_name=${name}`)
      const result = await response.json()

      setUsers(
        result.records.map((record: Option) => ({
          value: record.id,
          label: record.first_name,
        }))
      )
    } catch (error) {
      console.error('Error fetching users:', error)
      setUsers([]) // Optionally handle an error state
    } finally {
      setLoading(false)
    }
  }

  // Use the debounced callback for API calls
  const debouncedGetUsers = useDebouncedCallback((value: string) => {
    getUsers(value)
  }, 300)

  return (
    <CMultiSelect
      label="Users"
      loading={loading}
      onFilterChange={debouncedGetUsers} // Debounce the actual API call
      // onFilterChange={(value) => getUsers(value)} // API call without debounce
      onShow={getUsers} // Triggers the getUsers function when the dropdown is shown
      options={users}
      text="Please select your user."
      search={{
        external: true,
        global: true,
      }}
      virtualScroller
    />
  )
}
```

This example requires the following import:

```jsx
import { useDebouncedCallback } from '@coreui/react-pro'
```

* `useDebouncedCallback` is a utility hook available in `@coreui/react-pro` that allows you to debounce a callback function, ensuring it is not called too frequently (e.g., when typing in a search field).
* In this case, it is used to debounce the API call made by `getUsers` to reduce the number of requests during rapid input changes.

To handle a large amount of data and improve performance, this example uses the `` component to show the options list.

## Accessibility

The CoreUI React Multi Select component is designed with accessibility in mind and follows WAI-ARIA guidelines to ensure it works well with assistive technologies like screen readers.

### Built-in Accessibility Features

The Multi Select component includes several accessibility features out of the box:

- **ARIA Roles**: Proper `combobox` and `listbox` roles for screen reader compatibility
- **ARIA States**: Dynamic `aria-expanded`, `aria-selected`, and `aria-disabled` attributes
- **Keyboard Navigation**: Full keyboard support with arrow keys, Enter, Space, and Escape
- **Focus Management**: Proper focus handling when opening/closing the dropdown
- **Screen Reader Labels**: Descriptive labels for interactive elements

### Customizing Accessibility Labels

You can customize the accessibility labels for better user experience:

```jsx
<CMultiSelect
  options={options}
  ariaCleanerLabel="Clear all selected items"
  ariaIndicatorLabel="Open options menu"
  placeholder="Choose your options..."
/>
```

### ARIA Attributes

The component automatically handles these ARIA attributes:

- `aria-expanded`: Indicates whether the dropdown is open or closed
- `aria-haspopup="listbox"`: Tells screen readers that the control opens a listbox
- `aria-multiselectable="true"`: Indicates multiple selections are allowed
- `aria-selected`: Shows which options are currently selected
- `aria-disabled`: Identifies disabled options
- `aria-owns`: Connects the input with the dropdown when using portal mode

### Keyboard Navigation

The Multi Select component supports full keyboard navigation:

| Key | Action |
| --- | --- |
| <kbd>Tab</kbd> | Navigate to/from the component |
| <kbd>Enter/Space</kbd> | Open dropdown or select focused option |
| <kbd>Arrow Up/Down</kbd> | Navigate through options |
| <kbd>Home</kbd> | Focus the first option |
| <kbd>End</kbd> | Focus the last option |
| <kbd>Escape</kbd> | Close the dropdown |
| <kbd>Backspace/Delete</kbd> | Remove last selected item (when search is empty) |

### Best Practices

For optimal accessibility, consider these recommendations:

1. **Always provide a label**: Use the `label` prop or associate with a `<label>` element
2. **Use descriptive placeholder text**: Help users understand what to select
3. **Provide clear option labels**: Ensure option text is descriptive and unique
4. **Consider color contrast**: Ensure sufficient contrast for visual indicators
5. **Test with screen readers**: Verify the component works with assistive technologies

```jsx
<CMultiSelect
  label="Select your preferred programming languages"
  placeholder="Choose languages..."
  options={[
    { value: 'js', label: 'JavaScript' },
    { value: 'ts', label: 'TypeScript' },
    { value: 'py', label: 'Python' }
  ]}
  invalid={hasError}
  feedback="Please select at least one language"
/>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CMultiSelect /&gt;](./api/#cmultiselect)
