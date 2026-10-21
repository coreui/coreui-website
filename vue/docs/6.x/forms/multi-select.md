# Vue Multi Select

> Customize the native <select>s with a powerful Vue Multi Select component that changes the element’s initial appearance and brings some new functionalities.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=vue&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Basic example

A clear demonstration of implementing a basic Vue Multi Select dropdown, highlighting essential options and configurations.

```html
<template>
  <CMultiSelect
    label="Framework"
    :options="options"
    text="Please select your framework."
    search
    :default-value="[2, 3, 5]"
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

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<template>
  <CFormField>
    <CFormLabel for="multiSelectField">Technologies</CFormLabel>
    <CMultiSelect
      id="multiSelectField"
      name="stack"
      :options="[
        { value: 0, label: 'Angular' },
        { value: 1, label: 'Bootstrap' },
        { value: 2, label: 'React.js' },
        { value: 3, label: 'Vue.js' },
      ]"
    />
    <CFormText>Pick every technology you work with.</CFormText>
  </CFormField>
</template>

<script setup>
import { CFormField, CFormLabel, CFormText } from '@coreui/vue'
import { CMultiSelect } from '@coreui/vue-pro'
</script>
```

## Search

You can configure the search functionality within the component. The `search` property determines how the search input element is enabled and behaves. It accepts multiple types to provide flexibility in configuring search behavior. By default is set to `true`.

### Disabled search

To disable the default search input element, please set `search` property to `false` like in the example below:

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

### Where typing goes

Typing reaches the search box from anywhere in the component — the control, the options panel, the select all button — so it never depends on where the focus happens to be.

Set `:global-search="false"` to keep typing local. The search box then filters only while it has the focus, and a keystroke over the options list jumps to the first option starting with it. With `search="external"` the list holds only the last results, so that keystroke does nothing.

```html
<template>
  <CMultiSelect :options="options" :global-search="false" />
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

Users can present selected items in a variety of ways by using the Vue Multi Select component. Selected things can be shown to users as chips, a counter, or a list of values separated by commas.

Use the `selectionType` property to set the presentation type to alter how the selected items are displayed.

### Chips

By default, the `selectionType` property is set to `"chips"`, which renders selected options as removable [chips](https://coreui.io/vue/docs/components/chip/). Users can remove a selected option with its remove button, named by `ariaChipRemoveLabel`. `"tags"`, the v5 name of this mode, renders the same and is deprecated.

```html
<template>
  <CMultiSelect :options="options2" selection-type="chips" />
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

### Counter

The items from the list that are chosen for the example below are counted and shown as a counter. Set the `selectionType` property to "counter" in order to use this option.

The `selectedLabel` property builds the counter's whole text: pass a function `(count, total) => string`, or a string in which `{count}` and `{total}` are replaced. `total` is the number of options in the list, disabled ones, the ones inside a group and the ones the user created included, so a disabled option shows that not everything is selected, plus any selected value the options lack, so it never falls below `count`. Pass `total` to put a number of your own in `{total}`, such as the records a search on your server can reach, when the list holds only one page of them.

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

With the default `indicator="checkbox"` the button shows a tri-state marker that mirrors the overall selection — `none` when nothing is selected, `all` when everything is, and `indeterminate` in between. `indicator="none"` drops the marker from the whole list, the button included.

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
    theme="warning"
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

Enable `optionsGroupsSelectable` to turn each group label into its own tri-state checkbox that toggles the group's visible options. Because the indicator is rendered with CSS, it supports a third, `indeterminate` state — shown when only some of a group's options are selected — without any real `<input>` element. One property decides the marker for the whole list: `indicator` (`'checkbox'` by default) reaches the options, the group labels and the select-all button alike, and every one of them requires `multiple`.

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
      <div class="d-flex flex-wrap gap-3">
        <CButton
          size="sm"
          theme="primary"
          :disabled="state.selected >= state.total"
          @click="actions.selectAll()"
        >
          Select all ({{ state.total }})
        </CButton>
        <CButton
          size="sm"
          theme="secondary"
          :disabled="state.filtered === state.filteredSelected"
          @click="actions.selectFiltered()"
        >
          Select filtered ({{ state.filtered }})
        </CButton>
        <CButton
          size="sm"
          theme="secondary"
          variant="outline"
          :disabled="state.filteredSelected === 0"
          @click="actions.deselectFiltered()"
        >
          Deselect filtered ({{ state.filteredSelected }})
        </CButton>
        <CButton
          size="sm"
          theme="danger"
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
            <CIcon class="me-4" :icon="flags[option.value]" size="xl" /> {{ option.label }}
          </div>
        </template>
      </CMultiSelect>
    </CCol>
    <CCol :md="6">
      <CMultiSelect label="Select city" :options="cities">
        <template #options-groups="{ option }">
          <div class="d-flex align-items-center">
            <CIcon class="me-4" :icon="flags[option.code]" size="xl" /> {{ option.label }}
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
            <CIcon class="me-4" :icon="flags[option.value]" size="xl" /> {{ option.label }}
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

## Validation

The component shows its validation state on the frame and on the element that takes the focus, and stops the form from being submitted while it is invalid.

```html
<template>
  <CForm class="row g-4" novalidate validate>
    <div class="col-md-6">
      <CMultiSelect
        feedback-invalid="Pick at least one framework."
        label="Frameworks"
        :options="options"
        required
      />
    </div>
    <div class="col-md-6">
      <CMultiSelect
        v-model:validation-state="planState"
        :default-value="[0]"
        feedback="Angular is not available in this plan."
        label="Plan frameworks"
        :options="options"
      />
    </div>
    <div class="col-12">
      <CButton color="primary" type="submit">Submit</CButton>
    </div>
  </CForm>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CForm, CMultiSelect } from '@coreui/vue-pro'

const planState = ref('invalid')

const options = [
  { value: 0, label: 'Angular' },
  { value: 1, label: 'Bootstrap' },
  { value: 2, label: 'React.js' },
  { value: 3, label: 'Vue.js' },
]
</script>
```

The state comes from three places, in this order:

- `validationState`: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`; `invalid` and `valid` still work as aliases. While it is set, the component draws it instead of what the browser reports. While it is `'invalid'`, the native select blocks the submit with the text of the linked message, or `Invalid value.` when there is none, unless the component is `disabled`; a custom validity you set on the native select yourself stays as it is.
- A validation that reports the native select invalid: a submit, `checkValidity()` or `reportValidity()`, which [`CForm`](https://coreui.io/vue/docs/forms/validation/) and the stepper call as well. From then on the frame and the control show it invalid whenever its selection is invalid, until the form is reset, and the message after the frame shows.
- In a form with `validate`, the `:user-invalid` state of the native select, and with `validate="valid"` also its `:user-valid` state.

A state you give is a verdict on the selection it was given for. When the user changes the selection, or the form is reset, the component emits `update:validationState` with `undefined`; bind it with `v-model:validation-state` to drop the state, as the second field above does. A change your code makes through `value` keeps it, and so does an action that leaves the selection as it is. A reset emits once it has run, so a state you set from a `reset` listener on the form gets the same event, and your handler decides whether to drop it. An `aria-invalid` attribute on the component is not read; set the state with `validationState`. A native reset of the form puts back the selection given by `defaultValue` or the options' `selected` and emits `change` when that changes the selection; with `value` it asks through `change` for the `value` the component started with.

## Disabled

Add the `disabled` boolean property to give it a grayed out appearance, remove pointer events, and prevent focusing. A group given with `disabled: true` disables every option in it; a plain string option inside it reaches your slots and events as `{ label, value, disabled: true }`.

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

## Floating labels

Set `floatingLabel` and the component renders the label itself — no wrapper markup needed — and the text also becomes the field's accessible name; it has no input to report emptiness, so the label floats on focus and on the first selection, and the component's `placeholder` is hidden while the label rests inside the field.

```html
<template>
  <CMultiSelect
    id="floatingMultiSelect"
    floating-label="Frameworks"
    :options="[
      { label: 'Angular', value: 1 },
      { label: 'Bootstrap', value: 2 },
      { label: 'React.js', value: 3 },
      { label: 'Vue.js', value: 4 },
    ]"
  />
</template>
```

Set `floatingLabelAlways` to keep the label [always floating](https://coreui.io/vue/docs/forms/floating-labels/#always-floating) with the placeholder showing.

## Sizing

You may also choose from small and large multi selects to match our similarly sized text inputs.

```html
<template>
  <CRow>
    <CCol :md="6" class="mb-4">
      <CMultiSelect :options="options" selection-type="counter" size="lg" />
    </CCol>
    <CCol :md="6" class="mb-4">
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
    search="external"
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

## Selection and panel

_Added in 6.0.0._

The selection and the dropdown panel are independent — each has its own starting value, its own way of handing control to the parent, and its own change event.

| | seeds the start | hands control to the parent | change event |
| --- | --- | --- | --- |
| Selection | `defaultValue` | `value` | `@change` |
| Panel | `show` | `v-model:show` | `@update:show` |

The events fire either way — `@change` with the selected options, `@update:show` whenever the panel requests an open-state change (a dismiss gesture like Escape or an outside click, or any internal toggle) — so you can watch either state without taking it over. The deprecated `visible` prop keeps its old behavior and is ignored when `show` is set.

### Selection

`defaultValue` seeds the uncontrolled selection — matched against the option values — and the select manages it from there. The per-option `selected` flags are the same seed in another spelling, read from the options the component starts with and ignored entirely when `defaultValue` or `value` is set. Options that arrive later, such as an answer to an external search, never change what the user picked, whatever they are marked; a `defaultValue` value they bring is still taken, and `resetSelectionOnOptionsChange` starts from the marked options when the values change.

```vue
<template>
  <CMultiSelect :default-value="[1, 2]" :options="options" />
</template>
```

Pass `value` and the selection is fully controlled: it renders exactly what you pass, a pick only fires `@change`, and nothing moves until you feed the change back. `resetSelectionOnOptionsChange` and a native reset of the form follow the same contract — in controlled mode they only request the empty selection, or the first `value`, through `@change`. A selection you give never emits `change`: `value`, `defaultValue` and options marked `selected`, also when the options it names arrive later, unless `resetSelectionOnOptionsChange` puts it in place of the selection. Check **Ignore picks** below and select something to watch a dropped change revert.

```html
<template>
  <CFormField class="mb-4">
    <CCheckbox
      id="multiSelectControlledValueIgnore"
      v-model="ignorePicks"
      label="Ignore picks (watch them revert)"
    />
  </CFormField>
  <CMultiSelect label="Frameworks" :options="options" :value="value" @change="handleChange" />
</template>

<script setup>
import { ref } from 'vue'
import { CCheckbox, CFormField } from '@coreui/vue'
import { CMultiSelect } from '@coreui/vue-pro'

const ignorePicks = ref(false)
const value = ref([1, 2])

const options = [
  { value: 0, label: 'Angular' },
  { value: 1, label: 'Bootstrap' },
  { value: 2, label: 'React.js' },
  { value: 3, label: 'Vue.js' },
]

const handleChange = (selected) => {
  if (!ignorePicks.value) {
    value.value = selected.map((option) => option.value)
  }
}
</script>
```

### Panel

Without a binding the select manages the panel itself. Pass `show` to seed it open on mount.

```vue
<template>
  <CMultiSelect show :options="options" />
</template>
```

Pass `show` and the panel renders what you pass — dismiss gestures only emit `@update:show`, so feed the change back, or nothing closes. That includes a pick: in single selection a pick that would normally close the panel only requests the close through `@update:show`. The `v-model:show` binding is that loop in one attribute. Here a checkbox pins the panel open, and a dismiss gesture unchecks it.

```html
<template>
  <CFormField class="mb-4">
    <CCheckbox id="multiSelectControlledShow" v-model="show" label="Keep the panel open" />
  </CFormField>
  <CMultiSelect v-model:show="show" label="Framework" :multiple="false" :options="options" />
</template>

<script setup>
import { ref } from 'vue'
import { CCheckbox, CFormField } from '@coreui/vue'
import { CMultiSelect } from '@coreui/vue-pro'

const show = ref(false)

const options = [
  { value: 0, label: 'Angular' },
  { value: 1, label: 'Bootstrap' },
  { value: 2, label: 'React.js' },
  { value: 3, label: 'Vue.js' },
]
</script>
```

Use it when the open state belongs to something else — a route, a tour step, or a control outside the select like the checkbox above.

## Accessibility

The CoreUI Vue Multi Select component is designed with accessibility in mind and follows WAI-ARIA guidelines to ensure it works well with assistive technologies like screen readers.

### Built-in Accessibility Features

The Multi Select component includes several accessibility features out of the box:

- **ARIA Roles**: A `combobox` control opening a `dialog` panel, with a `listbox` inside it
- **ARIA States**: Dynamic `aria-expanded`, `aria-selected`, and `aria-disabled` attributes
- **Keyboard Navigation**: Full keyboard support with arrow keys, Enter, Space, and Escape
- **Focus Management**: The focus moves into the panel while it is open and returns to the control when it closes
- **Screen Reader Labels**: Descriptive labels for interactive elements

### Customizing Accessibility Labels

You can customize the accessibility labels for better user experience:

```vue
<CMultiSelect
  :options="options"
  aria-cleaner-label="Clear all selected items"
  aria-picker-label="Open options menu"
  placeholder="Choose your options..."
/>
```

### ARIA Attributes

The component automatically handles these ARIA attributes:

- `aria-expanded`: Indicates whether the dropdown is open or closed
- `aria-haspopup="dialog"`: Tells screen readers that the control opens a dialog
- `aria-labelledby`: Names the control and the panel after the label (`label`, `floatingLabel`, or a `<label>` pointing at the component's `id`, read when the component mounts or its `id` changes); an `aria-labelledby` or `aria-label` given to the component takes precedence. A `<label>` wrapping the component is left out, because its text would take in the control's own content and selection. The search box keeps a name of its own, `ariaSearchLabel`
- `aria-required`: Marks the focused control, the search box when `search` is on, as required when `required` is set or an `aria-required` is given to the component
- `aria-multiselectable="true"`: Indicates multiple selections are allowed
- `aria-selected`: Shows which options are currently selected
- `aria-disabled`: Identifies disabled options
- `aria-controls`: Points the control at the dropdown dialog and the search input at the list of options while the dropdown is open

### Keyboard Navigation

The options panel is a dialog named like the control. Opening it moves the focus inside — onto the search box when `search` is on, otherwise onto the option the list points at, which is the selection the user left or the first option. The options are focusable one at a time, so the arrows move the focus itself.

| Key | Action |
| --- | --- |
| <kbd>Tab</kbd> | Move between the search box, the select all button and the options list; the focus stays in the open panel |
| <kbd>Enter/Space</kbd> | Open the panel from the control, or select the focused option; <kbd>Enter</kbd> in the search box takes the option the list points at |
| <kbd>Arrow Up/Down</kbd> | Move through the options, or enter the list from the search box |
| <kbd>Shift</kbd> + <kbd>Arrow Up/Down</kbd> | Extend the selection while moving (multiple selection) |
| <kbd>Home/End</kbd> | Focus the first/last option (not while typing in the search box), or the first/last chip from a chip |
| <kbd>Ctrl/Cmd</kbd> + <kbd>A</kbd> | Select every option the list shows, from the options list (multiple selection) |
| <kbd>Escape</kbd> | Close the panel and return the focus to the control |
| <kbd>Backspace/Delete</kbd> | In the empty search box, focus the last chip; on a chip, remove it and move the focus to the next chip, else the previous one, else the search box, or the field when there is none. Entering the chips closes an open panel. A single select and the `counter` and `text` selections remove the last selected item at once |
| <kbd>Arrow Left/Arrow Right</kbd> | From the start of the search box, focus the last chip; between the chips, move the focus; past the last chip, return to the search box (mirrored in right-to-left) |

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
  :validation-state="hasError ? 'invalid' : undefined"
  feedback="Please select at least one language"
/>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CMultiSelect /&gt;](./api/#cmultiselect)
