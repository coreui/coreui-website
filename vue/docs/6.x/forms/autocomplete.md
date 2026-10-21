# Vue Autocomplete Component

> Build powerful Vue Autocomplete components with dynamic search, dropdown suggestions, and external data integration. The ultimate Vue.js Autocomplete solution for modern web applications.

## Overview

The Vue Autocomplete Component is a powerful, feature-rich autocomplete solution that enhances form usability by providing intelligent suggestions as users type. Whether you're building a Vue.js autocomplete with static array data, fetching data from APIs, or implementing complex search logic, this autocomplete component delivers a smooth, accessible user experience with extensive customization options.

Key features of this Vue Autocomplete include:
- Dynamic dropdown suggestions with real-time filtering
- External data integration with API support
- Customizable templates and custom styles
- Advanced search capabilities
- Performance optimization with virtual scrolling
- Accessibility-first design

## Basic example

A straightforward demonstration of how to implement a basic autocomplete input field, highlighting essential attributes and configurations.

```html
<template>
  <CAutocomplete
    cleaner
    highlight-options-on-search
    label="Framework"
    :options="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
    placeholder="Search technologies..."
    search-no-results-label="No results found"
    show-hints
    text="Start typing to search option or provide value"
    default-value="Bootstrap"
  />
</template>

<script setup>
import { CAutocomplete } from '@coreui/vue-pro'
</script>
```

You can also use objects with `value` and `label` properties for more structured data:

```html
<template>
  <CAutocomplete
    cleaner
    highlight-options-on-search
    label="Framework"
    :options="options"
    placeholder="Search technologies..."
    search-no-results-label="No results found"
    show-hints
    text="Start typing to search option or provide value"
    :default-value="4"
  />
</template>

<script setup>
import { CAutocomplete } from '@coreui/vue-pro'

const options = [
  { label: 'Angular', value: 1 },
  { label: 'Bootstrap', value: 2 },
  { label: 'Next.js', value: 3 },
  { label: 'React.js', value: 4 },
  { label: 'Vue.js', value: 5 },
]
</script>
```

For a minimal implementation without additional features:

```vue
<template>
  <CAutocomplete
    label="Framework"
    :options="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
    placeholder="Search technologies..."
    text="Start typing to search option or provide value"
  />
</template>
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<template>
  <CFormField>
    <CFormLabel for="autocompleteField">Framework</CFormLabel>
    <CAutocomplete
      id="autocompleteField"
      name="framework"
      :options="['Angular', 'Bootstrap', 'React.js', 'Vue.js']"
      placeholder="Search frameworks..."
    />
    <CFormText>Start typing to filter the list.</CFormText>
  </CFormField>
</template>

<script setup>
import { CFormField, CFormLabel, CFormText } from '@coreui/vue'
import { CAutocomplete } from '@coreui/vue-pro'
</script>
```

Inside a `<form>`, <kbd>Enter</kbd> with the list closed submits the form. A form reset brings an uncontrolled autocomplete back to its `defaultValue` or the first option marked `selected`, or to the text of `defaultInputValue` (an empty field without it), and emits `change` for a changed selection. A controlled autocomplete asks for the `value` it started with through `change` and shows the label of its current `value` until you take it, or the text of `defaultInputValue` when `value` selects nothing. A reset that a listener cancels changes nothing.

## Search functionality

The field filters the options as the user types.

```html
<template>
  <CAutocomplete
    :options="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
    placeholder="Search technologies..."
  />
</template>

<script setup>
import { CAutocomplete } from '@coreui/vue-pro'
</script>
```

### Where typing goes

Typing reaches the field from anywhere in the component — the picker button, the options panel — so a keystroke never depends on where the focus happens to be. The space bar and keyboard shortcuts stay with whatever has the focus.

Set `:global-search="false"` to keep typing local: a keystroke then counts only while the field has the focus.

```html
<template>
  <CAutocomplete
    :global-search="false"
    :options="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
    picker-icon
    placeholder="Typing stays local..."
  />
</template>

<script setup>
import { CAutocomplete } from '@coreui/vue-pro'
</script>
```

### External search

When external search is enabled (`search="external"`), the component delegates search operations to your custom logic or external API. This is perfect for server-side filtering, complex search algorithms, or third-party search services:

```vue
<template>
  <CAutocomplete 
    :options="filteredOptions" 
    search="external" 
    @input="handleSearch" 
  />
</template>
```

See the [External Data](#external-data) section for a complete working example.

## Restricted selection

Limit users to only select from the provided options by enabling `allow-only-defined-options`. This prevents custom value entry:

```html
<template>
  <CAutocomplete
    allow-only-defined-options
    label="Framework"
    :options="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
    placeholder="Only predefined options allowed..."
    text="Try typing a custom value - it won't be selectable"
  />
</template>

<script setup>
import { CAutocomplete } from '@coreui/vue-pro'
</script>
```

Text that names no option a user can select is cleared when the field loses focus, unless it is the label of the current selection, and <kbd>Enter</kbd> does not submit the form while the field holds it.

## User experience enhancements

Enable intelligent hints and auto-completion features to improve user experience.

### Show hints

Display intelligent completion hints that preview the first matching option as users type:

```html
<template>
  <CAutocomplete
    label="Framework"
    :options="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
    placeholder="Type to see hints..."
    show-hints
    text="Start typing to see preview hints"
  />
</template>

<script setup>
import { CAutocomplete } from '@coreui/vue-pro'
</script>
```

### Highlight matching text

Highlight matching portions of suggestions during search:

```html
<template>
  <CAutocomplete
    highlight-options-on-search
    label="Framework"
    :options="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
    placeholder="Type to see highlighted matches..."
    text="Search terms will be highlighted in the dropdown options"
  />
</template>

<script setup>
import { CAutocomplete } from '@coreui/vue-pro'
</script>
```

## Validation

The text input carries the value, so `required` blocks the submit of an empty field and the browser shows its message over the input. The state shows on the frame as the `.is-*` class, and while it is `'invalid'` the input carries `aria-invalid="true"` and is described by the message after the frame. The messages come from the `feedback`, `feedback-invalid` and `feedback-valid` props.

```html
<template>
  <CForm class="row g-4" novalidate validate>
    <div class="col-md-6">
      <CAutocomplete
        id="validationFramework"
        allow-only-defined-options
        feedback-invalid="Pick a framework from the list."
        label="Framework"
        name="framework"
        :options="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
        placeholder="Search frameworks..."
        required
      />
    </div>
    <div class="col-md-6">
      <CAutocomplete
        id="validationCountry"
        v-model:validation-state="countryState"
        default-value="Spain"
        feedback="We do not ship to Spain yet."
        label="Shipping country"
        name="country"
        :options="['Germany', 'Poland', 'Spain']"
      />
    </div>
    <div class="col-12">
      <CButton color="primary" type="submit">Submit</CButton>
    </div>
  </CForm>
</template>

<script setup>
import { ref } from 'vue'
import { CAutocomplete, CButton, CForm } from '@coreui/vue-pro'

const countryState = ref('invalid')
</script>
```

The state comes from three places, in this order:

- `validationState`: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`. The `invalid` and `valid` props still work as deprecated aliases; `invalid` wins when both are set, and both are ignored once `validationState` is set. While it is set, the component draws it instead of what the browser reports. While it is `'invalid'`, the input blocks the submit with the text of the linked message, or `Invalid value.` when there is none, unless the component is `disabled` or `readOnly`.
- A validation that reports the input invalid: a submit, `checkValidity()` or `reportValidity()`, which [`CForm`](https://coreui.io/vue/docs/forms/validation/) and the stepper call as well. From then on the frame and the input show it invalid whenever the value is invalid, until the form is reset, and the message after the frame shows.
- In a form with `validate`, the `:user-invalid` state of the input, and with `validate="valid"` also its `:user-valid` state.

A state you give is a verdict on the value it was given for. When the user changes the text, or the form is reset, the component emits `update:validationState` with `undefined`; bind it with `v-model:validation-state` to drop the state, as the second field above does. The text changes by typing, by a pick of an option whose label differs from the text, letter case included, by the cleaner, by <kbd>Backspace</kbd> or <kbd>Delete</kbd> that removes text from the selected option, and with `allow-only-defined-options` by leaving the field with text no option matches. One action emits once, before `change`, so a state you set from a `change` listener while the action runs stays. A change your code makes through `value` or `options` keeps the state, and so does an action that leaves the text as it was, such as picking an option whose label is exactly the text or <kbd>Enter</kbd> on text that names no option. While the field is invalid, the input is also described by an `.invalid-feedback` you render after it yourself. A reset emits once it has run, so a state you set from a `reset` listener on the form gets the same event, and your handler decides whether to drop it. A native reset of the form puts back the selection given by `default-value` or the options' `selected`, and leaves a controlled `value` to you. An `aria-invalid` attribute on the component is ignored: it neither sets the state nor reaches the input or the frame, so use `:validation-state="hasError ? 'invalid' : undefined"` instead.

## Disabled

Disable the component to prevent user interaction. A group given with `disabled: true` disables every option in it; a plain string option inside it reaches your slots and events as `{ label, value, disabled: true }`. A disabled option keeps the user out, not your code: `value`, `defaultValue` or an option marked `selected` still selects it, and a form reset brings it back.

```html
<template>
  <CAutocomplete
    disabled
    label="Framework"
    :options="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
    placeholder="Disabled autocomplete..."
    default-value="Vue.js"
  />
</template>

<script setup>
import { CAutocomplete } from '@coreui/vue-pro'
</script>
```

## Sizing

Choose from different sizes to match your design system and form layout:

```html
<template>
  <CAutocomplete
    :options="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
    placeholder="Small size..."
    size="sm"
  />
  <CAutocomplete
    :options="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
    placeholder="Default size..."
  />
  <CAutocomplete
    :options="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
    placeholder="Large size..."
    size="lg"
  />
</template>

<script setup>
import { CAutocomplete } from '@coreui/vue-pro'
</script>
```

## Cleaner functionality

Set `cleaner` for a button that empties the field, the selection and the text. It shows while an option is selected and, unless `allow-only-defined-options` is set, while the field holds text. It is not a Tab stop, so the field stays the only one, and a click leaves the focus in the field; from the keyboard, select the text and delete it. With a controlled `value`, the field empties once the page takes the cleared selection.

```html
<template>
  <CAutocomplete
    cleaner
    :options="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
    placeholder="With cleaner button..."
  />
</template>

<script setup>
import { CAutocomplete } from '@coreui/vue-pro'
</script>
```

## Custom templates

The CoreUI Vue Autocomplete Component provides the flexibility to personalize options and group labels by utilizing custom templates. You can easily customize the options using the `#options` scoped slot, and for groups, you can use `#options-groups`, as demonstrated in the examples below:

```html
<template>
  <CRow>
    <CCol md="6">
      <CAutocomplete label="Country" :options="countries" placeholder="Select country" show-hints>
        <template #options="{ option }">
          <div class="d-flex">
            <CIcon :icon="flags[option.value]" size="xl" class="me-4" />
            {{ option.label }}
          </div>
        </template>
      </CAutocomplete>
    </CCol>
    <CCol md="6">
      <CAutocomplete label="City" :options="cities" placeholder="Select city" show-hints>
        <template #options-groups="{ option }">
          <div class="d-flex align-items-center">
            <CIcon :icon="flags[option.code]" size="xl" class="me-4" />
            {{ option.label }}
          </div>
        </template>
      </CAutocomplete>
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol } from '@coreui/vue'
import { CAutocomplete } from '@coreui/vue-pro'
import CIcon from '@coreui/icons-vue'
import { cifPl, cifDe, cifUs, cifEs, cifGb } from '@coreui/icons'

const flags = {
  de: cifDe,
  es: cifEs,
  gb: cifGb,
  pl: cifPl,
  us: cifUs,
}

const countries = [
  { value: 'pl', label: 'Poland' },
  { value: 'de', label: 'Germany' },
  { value: 'us', label: 'United States' },
  { value: 'es', label: 'Spain' },
  { value: 'gb', label: 'United Kingdom' },
]

const cities = [
  {
    label: 'United States',
    code: 'us',
    options: [
      { value: 'au', label: 'Austin' },
      { value: 'ch', label: 'Chicago' },
      { value: 'la', label: 'Los Angeles' },
      { value: 'ny', label: 'New York' },
      { value: 'sa', label: 'San Jose' },
    ],
  },
  {
    label: 'United Kingdom',
    code: 'gb',
    options: [
      { value: 'li', label: 'Liverpool' },
      { value: 'lo', label: 'London' },
      { value: 'ma', label: 'Manchester' },
    ],
  },
]
</script>
```

```vue
<template>
  <CAutocomplete :options="options" placeholder="Search...">
    <template #options="{ option }">
      <div class="custom-option">
        <strong>{{ option.label }}</strong>
        <small class="fg-2">{{ option.description }}</small>
      </div>
    </template>

    <template #options-groups="{ option }">
      <div class="custom-group">
        <strong>{{ option.label }}</strong>
      </div>
    </template>
  </CAutocomplete>
</template>
```

## External Data

One of the most powerful features of the Vue Autocomplete component is its ability to work with external data sources, such as REST APIs, GraphQL endpoints, or server-side search services. This is essential when dealing with large datasets that shouldn't be loaded entirely into the client.

### Implementation example

Here's how to implement external data loading with proper debouncing to optimize API calls:

```html
<template>
  <CAutocomplete
    cleaner
    highlight-options-on-search
    label="Users"
    :loading="loading"
    :options="users"
    placeholder="Search users..."
    search="external"
    show-hints
    text="Please select your user."
    virtual-scroller
    @input="debouncedGetUsers"
    @show="getUsers"
  />
</template>

<script setup>
import { ref } from 'vue'
import { CAutocomplete, useDebouncedCallback } from '@coreui/vue-pro'

const loading = ref(false)
const users = ref([])

const getUsers = async (name = '') => {
  loading.value = true
  try {
    const response = await fetch(`https://apitest.coreui.io/demos/users?first_name=${name}`)
    const result = await response.json()

    users.value = result.records.map((record) => ({
      value: record.id,
      label: record.first_name,
    }))
  } catch (error) {
    console.error('Error fetching users:', error)
    users.value = [] // Optionally handle an error state
  } finally {
    loading.value = false
  }
}

// Using CoreUI's built-in debounced callback composable
const debouncedGetUsers = useDebouncedCallback((value) => {
  getUsers(value)
}, 300)
</script>
```

### Key features for external data

- **`useDebouncedCallback`**: Prevents excessive API calls during rapid typing
- **`search="external"`**: Disables internal filtering to rely on server-side search
- **`loading` prop**: Marks the list busy and shows a `loadingLabel` row below the options during API requests; the options stay usable
- **`virtual-scroller`**: Efficiently renders large result sets
- **`search-no-results-label`**: Provides user feedback when no results are found

### Required imports

```js
import { useDebouncedCallback } from '@coreui/vue-pro'
```

The `useDebouncedCallback` composable is a utility available in `@coreui/vue-pro` that delays function execution until after a specified timeout has elapsed since the last invocation. This prevents excessive API calls during rapid input changes and improves overall performance.

## Performance optimization

For large datasets, the Vue Autocomplete component includes several performance optimizations:

- **Virtual scrolling**: Use `virtual-scroller` to render only visible options
- **Debounced search**: Implement search debouncing to reduce API calls
- **External filtering**: Delegate filtering to the server with `search="external"`
- **Lazy loading**: Load data only when needed

## Floating labels

Set `floatingLabel` and the component renders the label itself — no wrapper markup needed — and the text also becomes the field's accessible name; the component's own `placeholder` is hidden while the label rests inside the field, so the two never overlap.

```html
<template>
  <CAutocomplete
    id="floatingAutocomplete"
    floating-label="Framework"
    :options="['Angular', 'Bootstrap', 'React.js', 'Vue.js']"
    placeholder="Search frameworks..."
  />
</template>
```

Set `floatingLabelAlways` to keep the label [always floating](https://coreui.io/vue/docs/forms/floating-labels/#always-floating) with the placeholder showing.

## Selection and panel

_Added in 6.0.0._

The selection, the text of the field and the dropdown panel are independent: each has its own starting value, its own way of handing control to the parent, and its own change event.

| | seeds the start | hands control to the parent | change event |
| --- | --- | --- | --- |
| Selection | `defaultValue` | `value` | `@change` |
| Text | `defaultInputValue`, `inputValue` | `v-model:input-value` | `@update:inputValue` |
| Panel | `show` | `v-model:show` | `@update:show` |

The events fire either way — `@change` with the selected option (or `null`), `@update:inputValue` with the new text, `@update:show` whenever the panel requests an open-state change (a dismiss gesture like Escape or an outside click, or any internal toggle) — so you can watch either state without taking it over. The deprecated `visible` prop keeps its old behavior and is ignored when `show` is set.

### Selection

`defaultValue` seeds the uncontrolled selection with the option whose value, compared as text, equals it, so `1` and `'1'` pick the same option. It waits for options that arrive later, until the user picks, types or clears a value first. The autocomplete manages the selection from there. The per-option `selected` flags are the same seed in another spelling: each flag is applied **once**, when its option first appears, and ignored entirely when `defaultValue` or `value` is set.

```vue
<template>
  <CAutocomplete default-value="react" :options="options" />
</template>
```

Pass `value` and the selection is fully controlled: it renders exactly what you pass, a pick only fires `@change`, and nothing moves until you feed the change back. `value` is matched against the option values like `defaultValue`, so feed back the option's `value` rather than its label (the label for an option without a value, the string for a plain string option), and `null` for no selection. A selected option that later leaves `options`, for example after an external search, keeps its label in the field. `resetSelectionOnOptionsChange` follows the same contract — in controlled mode it only requests the cleared selection through `@change` with `null`. Every request waits for the page the same way: the cleaner and `resetSelectionOnOptionsChange` empty the field only once the page takes the `null`, and with `allow-only-defined-options` leaving the field with text no option matches puts back the label of the `value` the page kept. Check **Ignore picks** below and click an option: the selection and the field stay as they are.

```html
<template>
  <CFormField class="mb-4">
    <CCheckbox
      id="autocompleteControlledValueIgnore"
      v-model="ignorePicks"
      label="Ignore picks (the selection stays)"
    />
  </CFormField>
  <CAutocomplete
    label="Framework"
    :options="options"
    placeholder="Search technologies..."
    :value="value"
    @change="handleChange"
  />
</template>

<script setup>
import { ref } from 'vue'
import { CCheckbox, CFormField } from '@coreui/vue'
import { CAutocomplete } from '@coreui/vue-pro'

const ignorePicks = ref(false)
const options = [
  { label: 'Angular', value: 'angular' },
  { label: 'Bootstrap', value: 'bootstrap' },
  { label: 'Next.js', value: 'next' },
  { label: 'React.js', value: 'react' },
  { label: 'Vue.js', value: 'vue' },
]
const value = ref('react')

const handleChange = (option) => {
  if (ignorePicks.value) {
    return
  }

  value.value =
    option === null || typeof option === 'string' ? option : (option.value ?? option.label)
}
</script>
```

### Text

The text of the field is a state of its own, next to the selection. Typing changes the text and clears the selection, and a pick writes the option's label once the selection takes it. Text the user types without a pick stays in the field and is posted with the form under `name`, with two exceptions: <kbd>Enter</kbd> with text that is the label of an option, letter case aside, picks that option, and so does leaving the field when only one option has that label; with `allow-only-defined-options`, leaving the field with text no option matches empties it. A selection that goes to none, from the cleaner, from new options or from your code, empties only the text that showed it; text the user typed stays. `@update:inputValue` reports every change of the text, and `@input` reports the search the options are filtered by: the typed text, until a pick or the cleaner empties it.

`defaultInputValue` starts the field with a text, for example one the user typed before, and a form reset brings it back. `:input-value` sets the text whenever it changes and leaves typing to the field; bind it with `v-model:input-value` to control the text: the field then shows it and nothing else, and typing, a pick or the cleaner only ask for a new text through `@update:inputValue`. A text you set that is not the selected option's label filters the options like typed text, but gets no hint; with `search="external"` you filter by the text you set. Nothing is emitted at mount, and a form reset asks a bound text for the label of the start selection or an empty text, and brings a one-way `:input-value` back. When you control both `value` and the text, a `value` you change leaves the text alone, so set both.

### Panel

Without a binding the autocomplete manages the panel itself. Pass `show` to seed it open on mount.

```vue
<template>
  <CAutocomplete show :options="options" />
</template>
```

Pass `show` and the panel renders what you pass — dismiss gestures only emit `@update:show`, so feed the change back, or nothing closes. That includes a pick: selecting an option, which would normally close the panel, only requests the close through `@update:show`. The `v-model:show` binding is that loop in one attribute. Here a checkbox pins the panel open, and a dismiss gesture unchecks it.

```html
<template>
  <CFormField class="mb-4">
    <CCheckbox id="autocompleteControlledShow" v-model="show" label="Keep the panel open" />
  </CFormField>
  <CAutocomplete
    v-model:show="show"
    label="Framework"
    :options="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
    placeholder="Search technologies..."
  />
</template>

<script setup>
import { ref } from 'vue'
import { CCheckbox, CFormField } from '@coreui/vue'
import { CAutocomplete } from '@coreui/vue-pro'

const show = ref(false)
</script>
```

Use it when the open state belongs to something else — a route, a tour step, or a control outside the autocomplete like the checkbox above.

## Accessibility

The Autocomplete component includes several accessibility features:

- **ARIA attributes**: Proper `role`, `aria-expanded`, `aria-haspopup`, and `aria-autocomplete` attributes
- **Screen reader support**: Descriptive labels and announcements for state changes
- **Keyboard navigation**: Full keyboard support with arrow keys, Enter, Escape, and Tab
- **Focus management**: Proper focus handling and visual focus indicators
- **Semantic markup**: Uses appropriate HTML elements and structure

The text field is the combobox, so it carries the accessible name: from `label` or `floatingLabel`, from a `<label>` pointing at its `id`, or from `aria-label` or `aria-labelledby` passed to `<CAutocomplete>`, which land on the field rather than on the frame around it. So do `aria-description`, `aria-details`, `aria-errormessage`, `aria-placeholder`, `aria-readonly` and `aria-required`; attributes that apply to the whole control, such as `aria-hidden`, stay on the frame.

### Keyboard shortcuts

| Key | Action |
| --- | --- |
| <kbd>Arrow Down</kbd> | Navigate to the next option or open dropdown |
| <kbd>Arrow Up</kbd> | Navigate to the previous option |
| <kbd>Home</kbd> | Move the caret to the start of the text |
| <kbd>End</kbd> | Move the caret to the end of the text |
| <kbd>Enter</kbd> | Select the highlighted option, or the option whose label is the typed text; with the list closed, also submit the form |
| <kbd>Escape</kbd> | Close the dropdown and clear focus |
| <kbd>Tab</kbd> | Accept hint completion (when hints are enabled) |
| <kbd>Backspace/Delete</kbd> | Clear input and trigger search |
| Any character, <kbd>Backspace</kbd>, <kbd>Delete</kbd> on the picker button or in the panel | Move the focus to the field and type there, unless `globalSearch` is `false` |

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CAutocomplete /&gt;](./api/#cautocomplete)
