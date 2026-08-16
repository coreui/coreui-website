# Vue Multi Select

> Customize the native <select>s with a powerful Vue Multi Select component that changes the element’s initial appearance and brings some new functionalities.

## Examples

A clear demonstration of implementing a basic Vue Multi Select dropdown, highlighting essential options and configurations.

```html
<template>
  <CMultiSelect
    label="Framework"
    :options="options"
    text="Please select your framework."
    search="global"
    :value="[2, 3, 5]"
  />
</template>

<script setup>
import { CMultiSelect } from '@coreui/vue-pro'
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
</script>
```

## Search

You can configure the search functionality within the component. The `search` property determines how the search input element is enabled and behaves. It accepts multiple types to provide flexibility in configuring search behavior. By default is set to `true`.

### Disable search

```html
<template>
  <CMultiSelect :options="options2" />
</template>

<script setup>
import { CMultiSelect } from '@coreui/vue-pro'
const options2 = [
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
</script>
```

### Global search

_Added in 5.7.0._

To enable the global search functionality within the Vue Multi Select component, please set `search` property to `'global'`. When global search is turned on, the user can perform searches across the entire component, regardless of where their focus is within the component. This allows for a more flexible and intuitive search experience, ensuring the search input is recognized from any point within the component.

```html
<template>
  <CMultiSelect :options="options" search="global" />
</template>

<script setup>
import { CMultiSelect } from '@coreui/vue-pro'
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
</script>
```

### External search

When external search is enabled (`search="external"`), the component delegates search operations to an external API. This setup is ideal for scenarios where third-party services or custom backend implementations power search capabilities. 

```vue
<CMultiSelect :options=[...] search="external" @filter-change="..." />
```

If you want to enable both external (API-handled) and global search:

```vue
<CMultiSelect :options=[...] :search="{ external: true, global: true }" @filter-change="..." />
```

Please check the [External Data](#external-data) section to check a working example of how to handle external data.

## Modes

### Allow create options

Users can create new options as well as choose from a list of pre-existing options by using the `allowCreateOptions` property in the Vue Multi Select component.

If this propety is set to `true`, the user can enter a new option in the multiselect component's search input field, and if it doesn't already exist in the list, it will be created and added there. This can be useful when the list of available options is not comprehensive or when the user needs to select an option that is not already available.

```html
<template>
  <CMultiSelect allow-create-options :options="options" />
</template>

<script setup>
import { CMultiSelect } from '@coreui/vue-pro'
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
</script>
```

### Clear search on select

The `clearSearchOnSelect` property is a Boolean attribute that can be used with the MultiSelect component in the CoreUI Vue library.

The MultiSelect component's search input field will be cleared as soon as the user chooses an item from the dropdown list if the property `clearSearchOnSelect` is set to `true`. This indicates that the user can instantly begin a fresh search after the search query is reset.

By default, the search input field will keep the user's search query even after an option has been picked because the value of the `clearSearchOnSelect` property is set to `false`. When a user must choose from a dropdown list several items that all match the same search term, this can be helpful.

You only need to specify the `clearSearchOnSelect` property to 'true' or 'false' as necessary in your code to use the MultiSelect component of the CoreUI Vue package. For example:

```html
<template>
  <CMultiSelect clear-search-on-select :options="options" />
</template>

<script setup>
import { CMultiSelect } from '@coreui/vue-pro'
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
</script>
```

In this example, the `clearSearchOnSelect` property is set to `true`, which means that the search input field will be cleared as soon as the user selects an option from the dropdown list.

## Selection types

Users can present selected items in a variety of ways by using the Vue Multi Select component. Selected things can be shown to users as a counter, tags, or a list of values separated by commas.

Use the `selectionType` property to set the presentation type to alter how the selected items are displayed.

### Counter

The items from the list that are chosen for the example below are counted and shown as a counter. Set the `selectionType` property to "counter" in order to use this option.

The `selectionTypeCounterText` property lets you set the text that appears after the counter, allowing for even more customization of the counter.

```html
<template>
  <CMultiSelect :options="options2" selection-type="counter" />
</template>

<script setup>
import { CMultiSelect } from '@coreui/vue-pro'
const options2 = [
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
</script>
```

### Tags

The `selectionType` property is set to 'tags' by default, which causes the selected options to be shown as tags. The "X" button can be used to delete a selected option.

```html
<template>
  <CMultiSelect :options="options2" selection-type="tags" />
</template>

<script setup>
import { CMultiSelect } from '@coreui/vue-pro'
const options2 = [
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
</script>
```

### Text

Set the `selectionType` property to '"text"' to show the list of selected options as comma-separated text values.

```html
<template>
  <CMultiSelect :options="options2" selection-type="text" />
</template>

<script setup>
import { CMultiSelect } from '@coreui/vue-pro'
const options2 = [
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
</script>
```

## Select all

_Added in 5.19.0._

When `multiple` is enabled, a **select all** button is rendered in the dropdown header (toggle it with the `selectAll` property, on by default). The button works as a toggle: it selects every option and its label switches to `deselectAllLabel`, then deselects everything on the next click.

With the default `selectAllStyle="checkbox"` the button shows a tri-state indicator that mirrors the overall selection — `none` when nothing is selected, `all` when everything is, and `indeterminate` in between. Set `selectAllStyle="text"` for a plain text toggle instead.

```html
<template>
  <CMultiSelect :options="options" search />
</template>

<script setup>
import { CMultiSelect } from '@coreui/vue-pro'
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
</script>
```

### Acting on filtered options

By default (`selectAllMode="all"`) the header button acts on the full list, ignoring the current filter. Set `selectAllMode="filtered"` to scope the button to the options currently matched by the search filter. The button's label and checkbox then answer "are all *filtered* options selected?". With no active filter, every option matches, so this behaves exactly like `"all"`.

To avoid a misleading "Select all" while a filter is active, the label switches to `selectFilteredLabel` / `deselectFilteredLabel` (default `Select filtered` / `Deselect filtered`) whenever the filter actually narrows the list — and falls back to `selectAllLabel` / `deselectAllLabel` when nothing is hidden.

Type into the search box below, then use select all — only the matching options are selected.

```html
<template>
  <CMultiSelect :options="options" search select-all-mode="filtered" />
</template>

<script setup>
import { CMultiSelect } from '@coreui/vue-pro'
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
</script>
```

### Hiding select all when search has no results

_Added in 5.20.0._

When `search` is enabled and the user types a query that matches no options, there is nothing left to select — so leaving the **select all** button visible above the empty "No results found" message is misleading. By default (`hideSelectAllOnSearchNoResults` is `true`) the component hides the whole dropdown header in that case, and brings it back as soon as the search matches at least one option again.

Type a query that matches nothing (for example `xyz`) into the example below — the select all button disappears together with the options, then returns when you clear or change the search.

```html
<template>
  <CMultiSelect :options="options" search />
</template>

<script setup>
import { CMultiSelect } from '@coreui/vue-pro'
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
</script>
```

Set `:hide-select-all-on-search-no-results="false"` to keep the header (and the select all button) visible even when the search returns no results.

```html
<template>
  <CMultiSelect :options="options" search :hide-select-all-on-search-no-results="false" />
</template>

<script setup>
import { CMultiSelect } from '@coreui/vue-pro'
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
</script>
```

This option only affects the built-in select all button. A [custom dropdown header](#custom-dropdown-header) is always rendered, since it may contain controls unrelated to the options list.

## Selection limit

_Added in 5.19.0._

Use the `selectionLimit` property to limit how many options can be selected. The select all button stays enabled and selects options up to the limit, then toggles to deselect all once the limit is reached. The `selection-limit` event fires when a user tries to select more options than allowed — use it to show feedback.

```html
<template>
  <CAlert
    v-if="limitReached"
    color="warning"
    dismissible
    @close="
      () => {
        limitReached = false
      }
    "
  >
    You can select up to 3 options.
  </CAlert>
  <CMultiSelect
    :options="options"
    search
    :selection-limit="3"
    @selection-limit="
      () => {
        limitReached = true
      }
    "
  />
</template>

<script setup>
import { ref } from 'vue'
import { CAlert } from '@coreui/vue'
import { CMultiSelect } from '@coreui/vue-pro'

const limitReached = ref(false)

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
</script>
```

## Selectable groups

_Added in 5.19.0._

Enable `optionsGroupsSelectable` to turn each group label into its own tri-state checkbox that toggles the whole group. Because the indicator is rendered with CSS, it supports a third, `indeterminate` state — shown when only some of a group's options are selected — without any real `<input>` element. Each section's indicator follows its own `*Style` property (`optionsStyle`, `optionsGroupsStyle`, `selectAllStyle`, all defaulting to `'checkbox'`) and requires `multiple`.

```html
<template>
  <CMultiSelect :options="options" search options-groups-selectable />
</template>

<script setup>
import { CMultiSelect } from '@coreui/vue-pro'

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
</script>
```

## Custom dropdown header

_Added in 5.19.0._

Use the `header` scoped slot to fully customize the dropdown header — the area above the options list — including rendering several action buttons. It replaces the built-in select all button and renders independently of `selectAll`. The slot exposes a `state` object (`{ selected, total, filtered, filteredSelected }`) and an `actions` object (`{ selectAll, deselectAll, selectFiltered, deselectFiltered }`) with the component's selection methods, so you can wire your own controls. It re-renders on every selection change and search filter, so labels and `disabled` states stay up to date.

```html
<template>
  <CMultiSelect :options="options" placeholder="Select frameworks" search>
    <template #header="{ state, actions }">
      <div class="d-flex flex-wrap gap-2">
        <CButton
          size="sm"
          color="primary"
          :disabled="state.selected >= state.total"
          @click="actions.selectAll()"
        >
          Select all ({{ state.total }})
        </CButton>
        <CButton
          size="sm"
          color="secondary"
          :disabled="state.filtered === state.filteredSelected"
          @click="actions.selectFiltered()"
        >
          Select filtered ({{ state.filtered }})
        </CButton>
        <CButton
          size="sm"
          color="secondary"
          variant="outline"
          :disabled="state.filteredSelected === 0"
          @click="actions.deselectFiltered()"
        >
          Deselect filtered ({{ state.filteredSelected }})
        </CButton>
        <CButton
          size="sm"
          color="danger"
          variant="outline"
          :disabled="state.selected === 0"
          @click="actions.deselectAll()"
        >
          Deselect all ({{ state.selected }})
        </CButton>
      </div>
    </template>
  </CMultiSelect>
</template>

<script setup>
import { CButton } from '@coreui/vue'
import { CMultiSelect } from '@coreui/vue-pro'

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
</script>
```

## Single Selection

Set the `multiple` boolean property to `false` and allow select only one element.

```html
<template>
  <CMultiSelect :multiple="false" :options="options" />
</template>

<script setup>
import { CMultiSelect } from '@coreui/vue-pro'
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
</script>
```

## Custom options and options group labels

The CoreUI Vue Multi Select component provides the flexibility to personalize options and group labels by utilizing custom templates. You can easily customize the options using the `<template #options="{ option }">...</template>`, and for groups, you can use `<template #options-groups="{ option }">...</template>`, as demonstrated in the examples below:

By using custom templates, the CoreUI Vue Multi Select component gives users the freedom to customize the options and group labels. The `<template #options="{ option }">...</template>` allows for customization of options and `<template #options-groups="{ option }">...</template>` for groups, as shown in the following examples:

```html
<template>
  <CRow>
    <CCol :md="6">
      <CMultiSelect label="Select country" :options="countries" options-style="text">
        <template #options="{ option }">
          <div class="d-flex">
            <CIcon class="me-3" :icon="flags[option.value]" size="xl" /> {{ option.label }}
          </div>
        </template>
      </CMultiSelect>
    </CCol>
    <CCol :md="6">
      <CMultiSelect label="Select city" :options="cities">
        <template #options-groups="{ option }">
          <div class="d-flex align-items-center">
            <CIcon class="me-3" :icon="flags[option.code]" size="xl" /> {{ option.label }}
          </div>
        </template>
      </CMultiSelect>
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol } from '@coreui/vue'
import { CMultiSelect } from '@coreui/vue-pro'
import { cifPl, cifDe, cifUs, cifEs, cifGb } from '@coreui/icons'
import CIcon from '@coreui/icons-vue'
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
const flags = {
  de: cifDe,
  es: cifEs,
  gb: cifGb,
  pl: cifPl,
  us: cifUs,
}
</script>
```

## Coordinated selection

The selection of Vue select components can be coordinated by dynamically updating city options based on the selected country. Use the `resetSelectionOnOptionsChange` prop on the city select component to reset the selected city whenever the country changes, ensuring synchronized selections.

```html
<template>
  <CRow>
    <CCol :md="6">
      <CMultiSelect
        label="Select country"
        :multiple="false"
        :options="countries2"
        options-style="text"
        @change="(country) => setCities(country.length ? country[0].cities : [])"
      >
        <template #options="{ option }">
          <div class="d-flex">
            <CIcon class="me-3" :icon="flags[option.value]" size="xl" /> {{ option.label }}
          </div>
        </template>
      </CMultiSelect>
    </CCol>
    <CCol :md="6">
      <CMultiSelect
        label="Select city"
        :multiple="false"
        :options="availableCities"
        options-style="text"
        reset-selection-on-options-change
      />
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol } from '@coreui/vue'
import { CMultiSelect } from '@coreui/vue-pro'
import { ref } from 'vue'
import { cifPl, cifDe, cifUs, cifEs, cifGb } from '@coreui/icons'
import CIcon from '@coreui/icons-vue'
const availableCities = ref([])
const flags = {
  de: cifDe,
  es: cifEs,
  gb: cifGb,
  pl: cifPl,
  us: cifUs,
}
const countries2 = [
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
const setCities = (cities) => {
  availableCities.value = cities
}
</script>
```

## Disabled

Add the `disabled` boolean property to give it a grayed out appearance, remove pointer events, and prevent focusing.

```html
<template>
  <CMultiSelect :options="options2" disabled />
</template>

<script setup>
import { CMultiSelect } from '@coreui/vue-pro'
const options2 = [
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
</script>
```

## Sizing

You may also choose from small and large multi selects to match our similarly sized text inputs.

```html
<template>
  <CRow>
    <CCol :md="6" class="mb-3">
      <CMultiSelect :options="options" selection-type="counter" size="lg" />
    </CCol>
    <CCol :md="6" class="mb-3">
      <CMultiSelect :options="options" size="lg" />
    </CCol>
    <CCol :md="6">
      <CMultiSelect :options="options" selection-type="counter" size="sm" />
    </CCol>
    <CCol :md="6">
      <CMultiSelect :options="options" size="sm" />
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol } from '@coreui/vue'
import { CMultiSelect } from '@coreui/vue-pro'
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
</script>
```

## Virtual Scroller (1000 records)

To enhance performance and manage large amounts of data in Vue Multi Select, you can generate a list of options using ``. This component renders only the items currently visible on the screen, and as the user scrolls, new items are dynamically loaded and added to the view. This helps to reduce the data load and processing time, resulting in a more responsive UI.

To enable Virtual Scroller, simply set the `virtualScroller` boolean property to `true`, as shown in the example below.

```html
<template>
  <CMultiSelect :options="options" :search="false" />
</template>

<script setup>
import { CMultiSelect } from '@coreui/vue-pro'
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
</script>
```

## External Data

One of the key features of Vue Multi Select component is the ability to load data from an external source, such as an API or a server-side script. This can be useful if you have a large amount of data that you don't want to load all at once. To load external data into a Vue MultiSelect, you can use the Fetch API to the data source.

Here is an example of how you might use Vue Multi Select with external data:

```html
<template>
  <CMultiSelect
    label="Users"
    :loading="loading"
    :options="users"
    :search="{
      external: true,
      global: true,
    }"
    text="Please select your user."
    virtual-scroller
    @show="() => getUsers()"
    @filter-change="(value) => getUsers(value)"
  />
</template>

<script setup>
import { CMultiSelect } from '@coreui/vue-pro'
import { ref } from 'vue'
const loading = ref(false)
const users = ref([])
const getUsers = async (name = '') => {
  loading.value = true
  fetch(`https://apitest.coreui.io/demos/users?first_name=${name}`)
    .then((response) => response.json())
    .then((result) => {
      loading.value = false
      users.value = result.records.map((record) => ({
        value: record.id,
        label: record.first_name,
      }))
    })
}
</script>
```

## Accessibility

The CoreUI Vue Multi Select component is designed with accessibility in mind and follows WAI-ARIA guidelines to ensure it works well with assistive technologies like screen readers.

### Built-in Accessibility Features

The Multi Select component includes several accessibility features out of the box:

- **ARIA Roles**: Proper `combobox` and `listbox` roles for screen reader compatibility
- **ARIA States**: Dynamic `aria-expanded`, `aria-selected`, and `aria-disabled` attributes
- **Keyboard Navigation**: Full keyboard support with arrow keys, Enter, Space, and Escape
- **Focus Management**: Proper focus handling when opening/closing the dropdown
- **Screen Reader Labels**: Descriptive labels for interactive elements

### Customizing Accessibility Labels

You can customize the accessibility labels for better user experience:

```vue
<CMultiSelect
  :options="options"
  aria-cleaner-label="Clear all selected items"
  aria-indicator-label="Open options menu"
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
| <kbd>Escape</kbd> | Close the dropdown |
| <kbd>Backspace/Delete</kbd> | Remove last selected item (when search is empty) |

### Best Practices

For optimal accessibility, consider these recommendations:

1. **Always provide a label**: Use the `label` prop or associate with a `<label>` element
2. **Use descriptive placeholder text**: Help users understand what to select
3. **Provide clear option labels**: Ensure option text is descriptive and unique
4. **Consider color contrast**: Ensure sufficient contrast for visual indicators
5. **Test with screen readers**: Verify the component works with assistive technologies

```vue
<CMultiSelect
  label="Select your preferred programming languages"
  placeholder="Choose languages..."
  :options="[
    { value: 'js', label: 'JavaScript' },
    { value: 'ts', label: 'TypeScript' },
    { value: 'py', label: 'Python' }
  ]"
  :invalid="hasError"
  feedback="Please select at least one language"
/>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CMultiSelect /&gt;](./api/#cmultiselect)
