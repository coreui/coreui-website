# React Autocomplete Component

> Build powerful React Autocomplete components with dynamic search, dropdown suggestions, and external data integration. The ultimate React Autocomplete solution for modern web applications.

## Overview

The React Autocomplete Component is a powerful, feature-rich autocomplete solution that enhances form usability by providing intelligent suggestions as user types. Whether you're building a React autocomplete with static array data, fetching data from APIs, or implementing complex search logic, this autocomplete component delivers a smooth, accessible user experience with extensive customization options.

Key features of this React Autocomplete include:
- Dynamic dropdown suggestions with real time filtering
- External data integration with API support
- Customizable templates and custom styles
- Advanced search capabilities
- Performance optimization with virtual scrolling
- Accessibility-first design

## Basic example

A straightforward demonstration of how to implement a basic autocomplete input field, highlighting essential attributes and configurations.

```html
import React from 'react'
import { CAutocomplete } from '@coreui/react-pro'

export const AutocompleteBasicExample = () => {
  return (
    <CAutocomplete
      cleaner
      highlightOptionsOnSearch
      indicator
      label="Framework"
      options={['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']}
      placeholder="Search technologies..."
      search="global"
      searchNoResultsLabel="No results found"
      showHints
      text="Start typing to search option or provide value"
      value="Bootstrap"
    />
  )
}
```

You can also use objects with `option` property for more structured data:

```html
import React from 'react'
import { CAutocomplete } from '@coreui/react-pro'

export const AutocompleteBasic2Example = () => {
  const options = [
    {
      label: 'Angular',
      value: 1,
    },
    {
      label: 'Bootstrap',
      value: 2,
    },
    {
      label: 'Next.js',
      value: 3,
    },
    {
      label: 'React.js',
      value: 4,
    },
    {
      label: 'Vue.js',
      value: 5,
    },
  ]

  return (
    <CAutocomplete
      cleaner
      highlightOptionsOnSearch
      indicator
      label="Framework"
      options={options}
      placeholder="Search technologies..."
      search="global"
      searchNoResultsLabel="No results found"
      showHints
      text="Start typing to search option or provide value"
      value={4}
    />
  )
}
```

For a minimal implementation without additional features:

```jsx
<CAutocomplete
  label="Framework"
  options={['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']}
  placeholder="Search technologies..."
  text="Start typing to search option or provide value"
/>
```

## Search functionality

Configure the search behavior to match your application's needs. The `search` prop determines how the component handles user input and filtering.

### Default search

By default, search operates only when the input field is focused and filters options internally:

```html
import React from 'react'
import { CAutocomplete } from '@coreui/react-pro'

export const AutocompleteSearchExample = () => {
  return (
    <CAutocomplete
      options={['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']}
      placeholder="Search technologies..."
    />
  )
}
```

### Global search

Enable global search functionality that allows users to start typing from anywhere within the component to begin searching:

```html
import React from 'react'
import { CAutocomplete } from '@coreui/react-pro'

export const AutocompleteSearchGlobalExample = () => {
  return (
    <CAutocomplete
      options={['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']}
      placeholder="Global search enabled..."
      search="global"
    />
  )
}
```

### External search

When external search is enabled (`search="external"`), the component delegates search operations to your custom logic or external API. This is perfect for server-side filtering, complex search algorithms, or third-party search services:

```jsx
<CAutocomplete 
  options={filteredOptions} 
  onInput={handleSearch} 
  search="external" 
/>
```

You can combine external search with global keyboard navigation:

```jsx
<CAutocomplete 
  options={filteredOptions} 
  onInput={handleSearch} 
  search={{ external: true, global: true }} 
/>
```

See the [External Data](#external-data) section for a complete working example.

## Restricted selection

Limit users to only select from the provided options by enabling `allowOnlyDefinedOptions`. This prevents custom value entry:

```html
import React from 'react'
import { CAutocomplete } from '@coreui/react-pro'

export const AutocompleteRestrictedSelectionExample = () => {
  return (
    <CAutocomplete
      allowOnlyDefinedOptions
      options={['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']}
      placeholder="Only predefined options allowed..."
    />
  )
}
```

## User experience enhancements

Enable intelligent hints and auto-completion features to improve user experience.

### Show hints

Display intelligent completion hints that preview the first matching option as user types:

```html
import React from 'react'
import { CAutocomplete } from '@coreui/react-pro'

export const AutocompleteShowHintsExample = () => {
  return (
    <CAutocomplete
      options={['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']}
      placeholder="Type to see hints..."
      showHints
    />
  )
}
```

### Highlight matching text

Enhance search visibility by highlighting matching portions of option labels when user hovers over suggestions:

```html
import React from 'react'
import { CAutocomplete } from '@coreui/react-pro'

export const AutocompleteHighlightOptionsExample = () => {
  return (
    <CAutocomplete
      highlightOptionsOnSearch
      options={['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']}
      placeholder="Search with highlighting..."
    />
  )
}
```

## Validation states

Apply validation styling to indicate input validity.

```html
import React from 'react'
import { CAutocomplete } from '@coreui/react-pro'

export const AutocompleteValidationExample = () => {
  return (
    <>
      <CAutocomplete
        options={['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']}
        placeholder="Valid autocomplete..."
        valid
      />
      <CAutocomplete
        invalid
        options={['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']}
        placeholder="Invalid autocomplete..."
      />
    </>
  )
}
```

## Disabled state

Disable the component to prevent user interaction:

```html
import React from 'react'
import { CAutocomplete } from '@coreui/react-pro'

export const AutocompleteDisabledExample = () => {
  return (
    <CAutocomplete
      disabled
      options={['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']}
      placeholder="Disabled autocomplete..."
    />
  )
}
```

## Sizing

Choose from different sizes to match your design system and form layout:

```html
import React from 'react'
import { CAutocomplete } from '@coreui/react-pro'

export const AutocompleteSizingExample = () => {
  return (
    <>
      <CAutocomplete
        cleaner
        indicator
        options={['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']}
        placeholder="Large autocomplete..."
        size="lg"
      />
      <CAutocomplete
        cleaner
        indicator
        options={['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']}
        placeholder="Default autocomplete..."
      />
      <CAutocomplete
        cleaner
        indicator
        options={['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']}
        placeholder="Small autocomplete..."
        size="sm"
      />
    </>
  )
}
```

## Cleaner functionality

Enable a cleaner button to quickly clear input element:

```html
import React from 'react'
import { CAutocomplete } from '@coreui/react-pro'

export const AutocompleteCleanerExample = () => {
  return (
    <CAutocomplete
      cleaner
      options={['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']}
      placeholder="With cleaner button..."
    />
  )
}
```

## Custom templates

The CoreUI React Autocomplete Component provides the flexibility to personalize options and group labels by utilizing custom templates. You can easily customize the options using the `optionsTemplate`, and for groups, you can use `optionsGroupsTemplate`, as demonstrated in the examples below:

```html
import React from 'react'
import { cifPl, cifDe, cifUs, cifEs, cifGb } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCol, CRow } from '@coreui/react'
import { CAutocomplete } from '@coreui/react-pro'

type FlagsMap = {
  [key: string]: string[]
}

export const AutocompleteCustomOptionsExample = () => {
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
        <CAutocomplete
          highlightOptionsOnSearch
          label="Country"
          options={countries}
          optionsTemplate={(option) => (
            <div className="d-flex">
              <CIcon className="me-3" icon={flags[option.value]} size="xl" /> {option.label}
            </div>
          )}
          placeholder="Select country"
          showHints
        />
      </CCol>
      <CCol md={6}>
        <CAutocomplete
          highlightOptionsOnSearch
          label="City"
          options={cities}
          optionsGroupsTemplate={(option) => (
            <div className="d-flex align-items-center">
              <CIcon className="me-3" icon={flags[option.code]} size="xl" /> {option.label}
            </div>
          )}
          placeholder="Select city"
          showHints
        />
      </CCol>
    </CRow>
  )
}
```

## External Data

One of the most powerful features of the React Autocomplete component is its ability to work with external data sources, such as REST APIs, GraphQL endpoints, or server-side search services. This is essential when dealing with large datasets that shouldn't be loaded entirely into the client.

### Implementation example

Here's how to implement external data loading with proper debouncing to optimize API calls:

```html
import React, { useState } from 'react'
import { CAutocomplete, useDebouncedCallback } from '@coreui/react-pro'
import type { Option } from '@coreui/react-pro/src/components/multi-select/types'

export const AutocompleteExternalDataExample = () => {
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
    <CAutocomplete
      cleaner
      highlightOptionsOnSearch
      indicator
      label="Users"
      loading={loading}
      onInput={debouncedGetUsers} // Debounce the actual API call
      // onInput={(value) => getUsers(value)} // API call without debounce
      onShow={getUsers} // Triggers the getUsers function when the dropdown is shown
      options={users}
      placeholder="Search users..."
      search={{
        external: true,
        global: true,
      }}
      showHints
      text="Please select your user."
      virtualScroller
    />
  )
}
```

### Key features for external data

- **`useDebouncedCallback`**: Prevents excessive API calls during rapid typing
- **`search="external"`**: Disables internal filtering to rely on server-side search
- **`loading` prop**: Shows loading indicators during API requests
- **`virtualScroller`**: Efficiently renders large result sets
- **`searchNoResultsLabel`**: Provides user feedback when no results are found

### Required imports

```jsx
import { useDebouncedCallback } from '@coreui/react-pro'
```

The `useDebouncedCallback` hook is a utility available in `@coreui/react-pro` that delays function execution until after a specified timeout has elapsed since the last invocation. This prevents excessive API calls during rapid input changes and improves overall performance.

## Performance optimization

For large datasets, the React Autocomplete component includes several performance optimizations:

- **Virtual scrolling**: Use `virtualScroller={true}` to render only visible options
- **Debounced search**: Implement search debouncing to reduce API calls
- **External filtering**: Delegate filtering to the server with `search="external"`
- **Lazy loading**: Load data only when needed

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
| <kbd>Backspace/Delete</kbd> | Clear input and trigger search |

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CAutocomplete /&gt;](./api/#cautocomplete)
