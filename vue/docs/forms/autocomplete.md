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
    indicator
    label="Framework"
    :options="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
    placeholder="Search technologies..."
    search="global"
    search-no-results-label="No results found"
    show-hints
    text="Start typing to search option or provide value"
    value="Bootstrap"
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
    indicator
    label="Framework"
    :options="options"
    placeholder="Search technologies..."
    search="global"
    search-no-results-label="No results found"
    show-hints
    text="Start typing to search option or provide value"
    :value="1"
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

## Component v-model support

The Vue Autocomplete component supports Vue 3's v-model directive for two-way data binding. When using string arrays, v-model binds to the string value. When using object arrays, v-model binds to the `value` property of the selected option.

```html
<template>
  <CRow>
    <CCol md="6">
      <CAutocomplete
        v-model="selectedFramework"
        label="Framework (v-model)"
        :options="frameworks"
        placeholder="Select framework..."
        text="Using v-model with string array"
      />
      <p class="mt-2">Selected: {{ selectedFramework || 'None' }}</p>
    </CCol>
    <CCol md="6">
      <CAutocomplete
        v-model="selectedCountry"
        label="Country (v-model)"
        :options="countries"
        placeholder="Select country..."
        text="Using v-model with object array"
      />
      <p class="mt-2">Selected value: {{ selectedCountry || 'None' }}</p>
    </CCol>
  </CRow>
</template>

<script setup>
import { ref } from 'vue'
import { CRow, CCol } from '@coreui/vue'
import { CAutocomplete } from '@coreui/vue-pro'

const selectedFramework = ref('Vue.js')
const selectedCountry = ref('us')

const frameworks = ['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']

const countries = [
  { value: 'pl', label: 'Poland' },
  { value: 'de', label: 'Germany' },
  { value: 'us', label: 'United States' },
  { value: 'es', label: 'Spain' },
  { value: 'gb', label: 'United Kingdom' },
]
</script>
```

## Search functionality

Configure the search behavior to match your application's needs. The `search` prop determines how the component handles user input and filtering.

### Default search

By default, search operates only when the input field is focused and filters options internally:

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

### Global search

Enable global search functionality that allows users to start typing from anywhere within the component to begin searching:

```html
<template>
  <CAutocomplete
    :options="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
    placeholder="Search technologies..."
    search="global"
    text="Click on component and start typing"
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

You can combine external search with global keyboard navigation:

```vue
<template>
  <CAutocomplete 
    :options="filteredOptions" 
    :search="{ external: true, global: true }" 
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

## Blur behavior

The autocomplete component includes intelligent blur handling that improves user experience by automatically selecting matching options when the user leaves the input field.

### Auto-selection on exact match

When a user types a value that exactly matches one option (case-insensitive) and then blurs the input field, the component automatically selects that option:

**Example scenario:**
- Available options: "Apple", "Banana", "Cherry"
- User types "apple" (lowercase) and clicks outside the field
- Result: "Apple" is automatically selected

```html
<template>
  <CAutocomplete
    label="Fruit"
    :options="['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']"
    placeholder="Type apple (lowercase) and click outside..."
    text="The component will auto-select Apple when you blur with an exact match"
  />
</template>

<script setup>
import { CAutocomplete } from '@coreui/vue-pro'
</script>
```

### Strict mode behavior

When `allow-only-defined-options` is enabled, the blur behavior enforces strict validation:

- **Exact match found:** The matching option is automatically selected
- **No exact match:** The input field is cleared to prevent invalid values

```html
<template>
  <CAutocomplete
    allow-only-defined-options
    label="Fruit"
    :options="['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']"
    placeholder="Try typing orange and blur..."
    text="In strict mode, invalid values are cleared on blur"
  />
</template>

<script setup>
import { CAutocomplete } from '@coreui/vue-pro'
</script>
```

### Non-strict mode behavior (default)

Without `allow-only-defined-options`, the component allows custom values:

- **Exact match found:** The matching option is automatically selected
- **No exact match:** The custom value is accepted and emitted via the `change` event
- **Partial match:** No auto-selection occurs; the input value remains

This is useful when users should be able to enter values not in the predefined list:

```html
<template>
  <CAutocomplete
    v-model="selectedValue"
    label="Fruit"
    :options="['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']"
    placeholder="Type any value and blur..."
    text="Custom values are accepted when allowOnlyDefinedOptions is false"
    @change="handleChange"
  />
  <div v-if="customValue" class="mt-3">
    <strong>Custom value entered:</strong> {{ customValue }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CAutocomplete } from '@coreui/vue-pro'

const selectedValue = ref(null)
const customValue = ref('')

const handleChange = (value) => {
  if (typeof value === 'string') {
    customValue.value = value
  }
}
</script>
```

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

Enhance search visibility by highlighting matching portions of option labels when users hover over suggestions:

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

## Validation states

Apply validation styling to indicate input validity.

```html
<template>
  <CRow>
    <CCol :md="6">
      <CAutocomplete
        invalid
        feedback-invalid="Please select a valid option"
        label="Invalid state"
        :options="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
        placeholder="Invalid autocomplete..."
      />
    </CCol>
    <CCol :md="6">
      <CAutocomplete
        valid
        feedback-valid="Looks good!"
        label="Valid state"
        :options="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
        placeholder="Valid autocomplete..."
        value="Vue.js"
      />
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol } from '@coreui/vue'
import { CAutocomplete } from '@coreui/vue-pro'
</script>
```

## Disabled state

Disable the component to prevent user interaction:

```html
<template>
  <CAutocomplete
    disabled
    label="Framework"
    :options="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
    placeholder="Disabled autocomplete..."
    value="Vue.js"
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

Enable a cleaner button to quickly clear the input element:

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

The CoreUI Vue Autocomplete Component provides the flexibility to personalize options and group labels by utilizing custom templates. You can easily customize the options using scoped slots:

- **`#options="{ option }"`** - For customizing individual option rendering
- **`#options-groups="{ option }"`** - For customizing option group headers

```html
<template>
  <CRow>
    <CCol md="6">
      <CAutocomplete label="Country" :options="countries" placeholder="Select country" show-hints>
        <template #options="{ option }">
          <div class="d-flex">
            <CIcon :icon="flags[option.value]" size="xl" class="me-3" />
            {{ option.label }}
          </div>
        </template>
      </CAutocomplete>
    </CCol>
    <CCol md="6">
      <CAutocomplete label="City" :options="cities" placeholder="Select city" show-hints>
        <template #options-groups="{ option }">
          <div class="d-flex align-items-center">
            <CIcon :icon="flags[option.code]" size="xl" class="me-3" />
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

### Basic slot usage

```vue
<template>
  <CAutocomplete :options="options" placeholder="Search...">
    <template #options="{ option }">
      <div class="custom-option">
        <strong>{{ option.label }}</strong>
        <small class="text-muted">{{ option.description }}</small>
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
    indicator
    label="Users"
    :loading="loading"
    :options="users"
    placeholder="Search users..."
    :search="{ external: true, global: true }"
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

- **Debounced search**: Prevents excessive API calls during rapid typing
- **`search="external"`**: Disables internal filtering to rely on server-side search
- **`loading` prop**: Shows loading indicators during API requests
- **`virtual-scroller`**: Efficiently renders large result sets
- **`search-no-results-label`**: Provides user feedback when no results are found

### Debouncing implementation

You can implement debouncing using a simple timeout mechanism as shown in the example above, or use CoreUI's built-in `useDebouncedCallback` composable:

```vue
<template>
  <CAutocomplete
    :options="options"
    :loading="loading"
    :search="{ external: true }"
    @input="debouncedSearch"
  />
</template>

<script setup>
import { ref } from 'vue'
import { CAutocomplete, useDebouncedCallback } from '@coreui/vue-pro'

const options = ref([])
const loading = ref(false)

const fetchOptions = async (query) => {
  loading.value = true
  const response = await fetch(`https://apitest.coreui.io/demos/users?first_name=${query}`)
  options.value = await response.json()
  loading.value = false
}

// Debounce the request so it runs at most once every 300ms
const debouncedSearch = useDebouncedCallback((value) => {
  fetchOptions(value)
}, 300)
</script>
```

Alternatively, you can use `@vueuse/core`'s `refDebounced` to derive a debounced ref:

```vue
<template>
  <CAutocomplete
    :options="options"
    :search="{ external: true }"
    @input="query = $event"
  />
</template>

<script setup>
import { ref, watch } from 'vue'
import { refDebounced } from '@vueuse/core'
import { CAutocomplete } from '@coreui/vue-pro'

const options = ref([])
const query = ref('')
const debouncedQuery = refDebounced(query, 300)

watch(debouncedQuery, async (value) => {
  const response = await fetch(`https://apitest.coreui.io/demos/users?first_name=${value}`)
  options.value = await response.json()
})
</script>
```

## Performance optimization

For large datasets, the Vue Autocomplete component includes several performance optimizations:

- **Virtual scrolling**: Use `virtual-scroller` to render only visible options
- **Debounced search**: Implement search debouncing to reduce API calls
- **External filtering**: Delegate filtering to the server with `search="external"`
- **Lazy loading**: Load data only when needed

## Events

The Vue Autocomplete component emits the following events:

- **`@change`**: Fired when the selected option changes. Receives `(option: Option | null)`
- **`@input`**: Fired when the search input value changes. Receives `(value: string)`
- **`@show`**: Fired when the dropdown opens
- **`@hide`**: Fired when the dropdown closes
- **`@update:modelValue`**: Fired when the model value changes (for v-model support). Receives `(value: number | string | null)`

```vue
<template>
  <CAutocomplete
    v-model="selectedValue"
    :options="options"
    @change="handleChange"
    @input="handleInput"
    @show="handleShow"
    @hide="handleHide"
  />
</template>

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
| <kbd>Enter</kbd> | Select the highlighted option |
| <kbd>Escape</kbd> | Close the dropdown and clear focus |
| <kbd>Tab</kbd> | Accept hint completion (when hints are enabled) |
| <kbd>Backspace/Delete</kbd> | Clear input and trigger search |

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CAutocomplete /&gt;](./api/#cautocomplete)
