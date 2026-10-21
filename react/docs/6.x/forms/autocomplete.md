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
      defaultValue="Bootstrap"
      label="Framework"
      options={['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']}
      placeholder="Search technologies..."
      searchNoResultsLabel="No results found"
      showHints
      text="Start typing to search option or provide value"
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
      defaultValue={4}
      label="Framework"
      options={options}
      placeholder="Search technologies..."
      searchNoResultsLabel="No results found"
      showHints
      text="Start typing to search option or provide value"
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

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/react/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
import React from 'react'
import { CFormField, CFormLabel, CFormText } from '@coreui/react'
import { CAutocomplete } from '@coreui/react-pro'

export const AutocompleteFormFieldExample = () => {
  return (
    <CFormField>
      <CFormLabel htmlFor="autocompleteField">Framework</CFormLabel>
      <CAutocomplete
        id="autocompleteField"
        name="framework"
        options={['Angular', 'Bootstrap', 'React.js', 'Vue.js']}
        placeholder="Search frameworks..."
      />
      <CFormText>Start typing to filter the list.</CFormText>
    </CFormField>
  )
}
```

Inside a `<form>`, <kbd>Enter</kbd> with the list closed submits the form. A form reset brings an uncontrolled autocomplete back to its `defaultValue` or the first option marked `selected`, or to the text of `defaultInputValue` (an empty field without it), and reports a changed selection through `onChange`. A controlled autocomplete asks for the `value` it started with through `onChange` and shows the label of its current `value` until you take it, or the text of `defaultInputValue` when `value` selects nothing. A reset that a listener cancels changes nothing.

## Search functionality

The field filters the options as the user types.

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

### Where typing goes

Typing reaches the field from anywhere in the component — the picker button, the options panel — so a keystroke never depends on where the focus happens to be. The space bar and keyboard shortcuts stay with whatever has the focus.

Set `globalSearch={false}` to keep typing local: a keystroke then counts only while the field has the focus.

```html
import React from 'react'
import { CAutocomplete } from '@coreui/react-pro'

export const AutocompleteSearchLocalExample = () => {
  return (
    <CAutocomplete
      globalSearch={false}
      options={['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']}
      pickerIcon
      placeholder="Typing stays local..."
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

Text that names no option a user can select is cleared when the field loses focus, unless it is the label of the current selection, and <kbd>Enter</kbd> does not submit the form while the field holds it.

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

Highlight matching portions of suggestions during search:

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

## Floating labels

Set `floatingLabel` and the component renders the label itself — no wrapper markup needed — and the text also becomes the field's accessible name; the component's own `placeholder` is hidden while the label rests inside the field, so the two never overlap.

```html
import React from 'react'
import { CAutocomplete } from '@coreui/react-pro'

export const AutocompleteFloatingLabelExample = () => (
  <CAutocomplete
    floatingLabel="Framework"
    id="floatingAutocomplete"
    options={['Angular', 'Bootstrap', 'React.js', 'Vue.js']}
    placeholder="Search frameworks..."
  />
)
```

Set `floatingLabelAlways` to keep the label [always floating](https://coreui.io/react/docs/forms/floating-labels/#always-floating) with the placeholder showing.

## Validation

The text input carries the value, so `required` blocks the submit of an empty field and the browser shows its message over the input. The state shows on the frame as the `.is-*` class, and while it is `'invalid'` the input carries `aria-invalid="true"` and is described by the message after the frame.

```html
import React, { useState } from 'react'
import { CAutocomplete, CButton, CForm } from '@coreui/react-pro'

export const AutocompleteValidationExample = () => {
  const [countryState, setCountryState] = useState<string | undefined>('invalid')

  return (
    <CForm className="row g-4" noValidate validate>
      <div className="col-md-6">
        <CAutocomplete
          allowOnlyDefinedOptions
          feedbackInvalid="Pick a framework from the list."
          id="validationFramework"
          label="Framework"
          name="framework"
          options={['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']}
          placeholder="Search frameworks..."
          required
        />
      </div>
      <div className="col-md-6">
        <CAutocomplete
          defaultValue="Spain"
          feedback="We do not ship to Spain yet."
          id="validationCountry"
          label="Shipping country"
          name="country"
          onValidationStateChange={setCountryState}
          options={['Germany', 'Poland', 'Spain']}
          validationState={countryState}
        />
      </div>
      <div className="col-12">
        <CButton color="primary" type="submit">
          Submit
        </CButton>
      </div>
    </CForm>
  )
}
```

The state comes from three places, in this order:

- `validationState`: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`. The `invalid` and `valid` props still work as deprecated aliases; `invalid` wins when both are set, and both are ignored once `validationState` is set. While it is set, the component draws it instead of what the browser reports. While it is `'invalid'`, the input blocks the submit with the text of the linked message, or `Invalid value.` when there is none, unless the component is `disabled` or `readOnly`.
- A validation that reports the input invalid: a submit, `checkValidity()` or `reportValidity()`, which [`CForm`](https://coreui.io/react/docs/forms/validation/) and the stepper call as well. From then on the frame and the input show it invalid whenever the value is invalid, until the form is reset, and the message after the frame shows.
- In a form with `validate`, the `:user-invalid` state of the input, and with `validate="valid"` also its `:user-valid` state.

A state you give is a verdict on the value it was given for. When the user changes the text, or the form is reset, the component calls `onValidationStateChange(undefined)`; pass your state setter there to drop the state, as the second field above does. The text changes by typing, by a pick of an option whose label differs from the text, letter case included, by the cleaner, by <kbd>Backspace</kbd> or <kbd>Delete</kbd> that removes text from the selected option, and with `allowOnlyDefinedOptions` by leaving the field with text no option matches. One action asks once, before `onChange`, so a state you set from `onChange` while the action runs stays. A change your code makes through `value` or `options` keeps the state, and so does an action that leaves the text as it was, such as picking an option whose label is exactly the text or <kbd>Enter</kbd> on text that names no option. While the field is invalid, the input is also described by an `.invalid-feedback` you render after it yourself. A reset asks once it has run, so a state you set from a `reset` listener on the form gets the same call, and your handler decides whether to drop it. A native reset of the form puts back the selection given by `defaultValue` or the options' `selected`, and leaves a controlled `value` to you. An `aria-invalid` passed to the component is ignored: set `validationState` instead.

## Disabled

Disable the component to prevent user interaction. A group given with `disabled: true` disables every option in it; a plain string option inside it reaches your templates and callbacks as `{ label, value, disabled: true }`. A disabled option keeps the user out, not your code: `value`, `defaultValue` or an option marked `selected` still selects it, and a form reset brings it back.

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

Set `cleaner` for a button that empties the field, the selection and the text. It shows while an option is selected and, unless `allowOnlyDefinedOptions` is set, while the field holds text. It is not a Tab stop, so the field stays the only one, and a click leaves the focus in the field; from the keyboard, select the text and delete it. With a controlled `value`, the field empties once the page takes the cleared selection.

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
              <CIcon className="me-4" icon={flags[option.value]} size="xl" /> {option.label}
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
              <CIcon className="me-4" icon={flags[option.code]} size="xl" /> {option.label}
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
      search="external"
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
- **`loading` prop**: Marks the list busy and shows a `loadingLabel` row below the options during API requests; the options stay usable
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

## Controlled and uncontrolled

_Added in 6.0.0._

The selection, the text of the field and the dropdown panel each work either way, and the prop you reach for is what picks the mode, independently for each of them.

| | uncontrolled seed | controlled prop | change callback |
| --- | --- | --- | --- |
| Selection | `defaultValue` | `value` | `onChange` |
| Text | `defaultInputValue` | `inputValue` | `onInputChange` |
| Panel | `defaultShow` | `show` | `onShowChange` |

The callbacks fire in **both** modes — `onChange` with the selected option (or `null`), `onInputChange` with the new text, `onShowChange` whenever the panel requests an open-state change (a dismiss gesture like Escape or an outside click, or, in uncontrolled mode, any internal toggle) — so you can watch either state without taking it over. The deprecated `visible` prop keeps its old behavior and is ignored when `defaultShow` or `show` is set.

### Selection

`defaultValue` seeds the uncontrolled selection with the option whose value, compared as text, equals it, so `1` and `'1'` pick the same option. It waits for options that arrive later, until the user picks, types or clears a value first. The autocomplete manages the selection from there. The per-option `selected` flags are the same seed in another spelling: each flag is applied **once**, when its option first appears, and ignored entirely when `defaultValue` or `value` is set.

```jsx
<CAutocomplete defaultValue="react" options={options} />
```

Pass `value` and the selection is fully controlled: it renders exactly what you pass, a pick only fires `onChange`, and nothing moves until you feed the change back. `value` is matched against the option values like `defaultValue`, so feed back the option's `value` rather than its label (the label for an option without a value, the string for a plain string option), and `null` for no selection. A selected option that later leaves `options`, for example after an external search, keeps its label in the field. `resetSelectionOnOptionsChange` follows the same contract — in controlled mode it only requests the cleared selection through `onChange(null)`. Every request waits for the page the same way: the cleaner and `resetSelectionOnOptionsChange` empty the field only once the page takes the `null`, and with `allowOnlyDefinedOptions` leaving the field with text no option matches puts back the label of the `value` the page kept. Check **Ignore picks** below and click an option: the selection and the field stay as they are.

```html
import React, { useState } from 'react'
import { CCheckbox, CFormField } from '@coreui/react'
import { CAutocomplete } from '@coreui/react-pro'
import type { Option } from '@coreui/react-pro/src/components/autocomplete/types'

export const AutocompleteControlledValueExample = () => {
  const [ignorePicks, setIgnorePicks] = useState(false)
  const [value, setValue] = useState<string | number | null>('react')

  return (
    <>
      <CFormField className="mb-4">
        <CCheckbox
          checked={ignorePicks}
          id="autocompleteControlledValueIgnore"
          label="Ignore picks (the selection stays)"
          onChange={(event) => setIgnorePicks(event.target.checked)}
        />
      </CFormField>
      <CAutocomplete
        label="Framework"
        onChange={(option: Option | null) => {
          if (ignorePicks) {
            return
          }

          setValue(
            option === null || typeof option === 'string' ? option : (option.value ?? option.label)
          )
        }}
        options={[
          { label: 'Angular', value: 'angular' },
          { label: 'Bootstrap', value: 'bootstrap' },
          { label: 'Next.js', value: 'next' },
          { label: 'React.js', value: 'react' },
          { label: 'Vue.js', value: 'vue' },
        ]}
        placeholder="Search technologies..."
        value={value}
      />
    </>
  )
}
```

### Text

The text of the field is a state of its own, next to the selection. Typing changes the text and clears the selection, and a pick writes the option's label once the selection takes it. Text the user types without a pick stays in the field and is posted with the form under `name`, with two exceptions: <kbd>Enter</kbd> with text that is the label of an option, letter case aside, picks that option, and so does leaving the field when only one option has that label; with `allowOnlyDefinedOptions`, leaving the field with text no option matches empties it. A selection that goes to none, from the cleaner, from new options or from your code, empties only the text that showed it; text the user typed stays. `onInputChange` reports every change of the text, and `onInput` reports the search the options are filtered by: the typed text, until a pick or the cleaner empties it.

`defaultInputValue` starts the field with a text, for example one the user typed before, and a form reset brings it back. Pass `inputValue` to control the text: the field shows it and nothing else, and typing, a pick or the cleaner only ask for a new text through `onInputChange`. A text you set that is not the selected option's label filters the options like typed text, but gets no hint; with `search="external"` you filter by the text you set. Nothing is reported at mount, and a form reset asks a controlled text for the label of the start selection or an empty text. When you control both `value` and `inputValue`, a `value` you change leaves the text alone, so set both.

### Panel

Every example above leaves the panel uncontrolled — the autocomplete manages it itself. `defaultShow` seeds it open on mount.

```jsx
<CAutocomplete defaultShow options={options} />
```

Pass `show` and the panel renders what you pass — dismiss gestures only call `onShowChange`, so feed the change back, or nothing closes. That includes a pick: selecting an option, which would normally close the panel, only requests the close through `onShowChange`. Here a checkbox pins the panel open, and a dismiss gesture unchecks it.

```html
import React, { useState } from 'react'
import { CCheckbox, CFormField } from '@coreui/react'
import { CAutocomplete } from '@coreui/react-pro'

export const AutocompleteControlledExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CFormField className="mb-4">
        <CCheckbox
          checked={show}
          id="autocompleteControlledShow"
          label="Keep the panel open"
          onChange={(event) => setShow(event.target.checked)}
        />
      </CFormField>
      <CAutocomplete
        label="Framework"
        onShowChange={setShow}
        options={['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']}
        placeholder="Search technologies..."
        show={show}
      />
    </>
  )
}
```

Use it when the open state belongs to something else — a route, a tour step, or a control outside the autocomplete like the checkbox above.

## Accessibility

The Autocomplete component includes several accessibility features:

- **ARIA attributes**: Proper `role`, `aria-expanded`, `aria-haspopup`, and `aria-autocomplete` attributes
- **Screen reader support**: Descriptive labels and announcements for state changes
- **Keyboard navigation**: Full keyboard support with arrow keys, Enter, Escape, and Tab
- **Focus management**: Proper focus handling and visual focus indicators
- **Semantic markup**: Uses appropriate HTML elements and structure

The text field is the combobox, so it carries the accessible name: from `label` or `floatingLabel`, from a `<label>` pointing at its `id`, or from `aria-label` or `aria-labelledby` passed to `CAutocomplete`, which land on the field rather than on the frame around it. So do `aria-description`, `aria-details`, `aria-errormessage`, `aria-placeholder`, `aria-readonly` and `aria-required`; attributes that apply to the whole control, such as `aria-hidden`, stay on the frame.

### Keyboard shortcuts

| Key | Action |
| --- | --- |
| <kbd>Arrow Down</kbd> | Navigate to the next option or open dropdown |
| <kbd>Arrow Up</kbd> | Navigate to the previous option |
| <kbd>Home</kbd> | Move the caret to the start of the text |
| <kbd>End</kbd> | Move the caret to the end of the text |
| <kbd>Enter</kbd> | Select the highlighted option, or the option whose label is the typed text; with the list closed, also submit the form |
| <kbd>Escape</kbd> | Close the dropdown; the input keeps focus and the highlighted option clears |
| <kbd>Tab</kbd> | Accept hint completion (when hints are enabled) |
| <kbd>Backspace/Delete</kbd> | Delete one character and clear a held selection |
| Any character, <kbd>Backspace</kbd>, <kbd>Delete</kbd> on the picker button or in the panel | Move the focus to the field and type there, unless `globalSearch` is `false` |

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CAutocomplete /&gt;](./api/#cautocomplete)
