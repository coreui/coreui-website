# React Combobox Component

> A select-like control written as components: a form-control toggle next to a popup list box. CCombobox runs the open state, the selection, the keyboard and form submission, and leaves the content of every option to you.

## Overview

_Added in 6.0.0._

`CCombobox` is a `.form-control` toggle followed by a `.popup` holding a [List box](https://coreui.io/react/docs/components/list-box/). The toggle shows the current value and the list holds the choices; the component keeps the two in step — it opens and closes the panel, positions it against the toggle, tracks the selection, runs the keyboard through `aria-activedescendant`, and submits the value through a hidden `<select>` the browser validates.

Everything inside the panel is List box markup, so an option is whatever you put in it: plain text, an icon, a two-line label with a description. `CCombobox` never rewrites an option's content.

```html
import React from 'react'
import { CCombobox, CListBoxOption } from '@coreui/react-pro'

export const ComboboxExample = () => (
  <CCombobox ariaLabel="Item" placeholder="Select an item…" style={{ maxWidth: '20rem' }}>
    <CListBoxOption value="1">Option one</CListBoxOption>
    <CListBoxOption value="2">Option two</CListBoxOption>
    <CListBoxOption value="3">Option three</CListBoxOption>
  </CCombobox>
)
```

### When to use

<div class="table-responsive">

| Component | Use it for |
| --- | --- |
| Combobox | Picking from a list you wrote as components, with full control over what an option looks like. |
| [Autocomplete](https://coreui.io/react/docs/forms/autocomplete/) | Typing to narrow a list, with hints and a free-text value. |
| [Multi Select](https://coreui.io/react/docs/forms/multi-select/) | A native `<select>` enhanced in place, with chips, select-all and groups. |
| [List box](https://coreui.io/react/docs/components/list-box/) | The list on its own, without a toggle or a panel. |

</div>

### Options from data

Pass `items` to render the options from data instead of children. Each entry takes the `CListBoxOption` shape — `value`, `label`, `description`, `disabled` — so the list keeps the order, the navigation and the ids.

```html
import React from 'react'
import { CCombobox } from '@coreui/react-pro'

const items = [
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Canada', value: 'ca' },
]

export const ComboboxItemsExample = () => (
  <CCombobox
    ariaLabel="Country"
    items={items}
    placeholder="Pick a country…"
    style={{ maxWidth: '20rem' }}
  />
)
```

## Example

The options are `CListBoxOption` children, exactly as in a List box; an option without a `value` is worth its text. `CCombobox` fills in the rest: `.combobox-value` for the text, the caret, `type="button"`, `aria-haspopup` and `aria-expanded`, and it keeps the panel out of the document until the first open.

### Placeholders

`placeholder` is the text `.combobox-value` shows while nothing is selected. It carries `.combobox-placeholder` while it stands for an empty value, so it can be dimmed without being confused for a choice.

```html
import React from 'react'
import { CCombobox, CListBoxOption } from '@coreui/react-pro'

export const ComboboxPlaceholderExample = () => (
  <CCombobox ariaLabel="Country" placeholder="Pick a country…" style={{ maxWidth: '20rem' }}>
    <CListBoxOption value="us">United States</CListBoxOption>
    <CListBoxOption value="uk">United Kingdom</CListBoxOption>
    <CListBoxOption value="ca">Canada</CListBoxOption>
  </CCombobox>
)
```

### Pre-selected value

`defaultValue` seeds the uncontrolled selection and `value` drives a controlled one — pair the latter with `onChange`. Both take an array in `multiple` mode. A native reset of the form puts back the value the combobox started with; a controlled one asks for its first `value` through `onChange` and keeps showing your `value` until you take it.

```html
import React from 'react'
import { CCombobox, CListBoxOption } from '@coreui/react-pro'

export const ComboboxPreselectedExample = () => (
  <CCombobox
    ariaLabel="Role"
    defaultValue="editor"
    placeholder="Choose a role…"
    style={{ maxWidth: '20rem' }}
  >
    <CListBoxOption value="admin">Admin</CListBoxOption>
    <CListBoxOption value="editor">Editor</CListBoxOption>
    <CListBoxOption value="viewer">Viewer</CListBoxOption>
  </CCombobox>
)
```

### With form field

`label`, `text` and the feedback props lay the control out with its label and description, and put validation feedback in the right place — the same [form field](https://coreui.io/react/docs/forms/field/) the other controls use.

```html
import React from 'react'
import { CCombobox, CListBoxOption } from '@coreui/react-pro'

export const ComboboxFieldExample = () => (
  <CCombobox
    label="Country"
    placeholder="Pick a country…"
    style={{ maxWidth: '20rem' }}
    text="We ship to these three for now."
  >
    <CListBoxOption value="us">United States</CListBoxOption>
    <CListBoxOption value="uk">United Kingdom</CListBoxOption>
    <CListBoxOption value="ca">Canada</CListBoxOption>
  </CCombobox>
)
```

## Custom content

An option is an ordinary element, so it takes whatever markup belongs there. The toggle shows its text: the label alone when the option has a `description`, the option's own text otherwise — so an option with an icon and a description still reads as one word in the closed control.

### Icons

```html
import React from 'react'
import { CCombobox, CListBoxOption } from '@coreui/react-pro'

import CIcon from '@coreui/icons-react'
import { cibCss3, cibHtml5, cibJavascript } from '@coreui/icons'

export const ComboboxIconsExample = () => (
  <CCombobox ariaLabel="Language" placeholder="Choose a language…" style={{ maxWidth: '20rem' }}>
    <CListBoxOption value="html">
      <CIcon icon={cibHtml5} /> HTML
    </CListBoxOption>
    <CListBoxOption value="css">
      <CIcon icon={cibCss3} /> CSS
    </CListBoxOption>
    <CListBoxOption value="js">
      <CIcon icon={cibJavascript} /> JavaScript
    </CListBoxOption>
  </CCombobox>
)
```

### Descriptions

`description` adds a second line under the option's name. The toggle shows the name alone.

```html
import React from 'react'
import { CCombobox, CListBoxOption } from '@coreui/react-pro'

export const ComboboxDescriptionsExample = () => (
  <CCombobox ariaLabel="Plan" placeholder="Choose a plan…" style={{ maxWidth: '20rem' }}>
    <CListBoxOption description="Everything you need to start" value="starter">
      Starter
    </CListBoxOption>
    <CListBoxOption description="For a growing team" value="team">
      Team
    </CListBoxOption>
    <CListBoxOption description="Single sign-on and audit logs" value="enterprise">
      Enterprise
    </CListBoxOption>
  </CCombobox>
)
```

### Checkbox indicator

`indicator="checkbox"` puts the check the multi-value pickers use in front of every option. The option keeps its `role="option"` and its `aria-selected`, and the mark is hidden from assistive technology.

```html
import React from 'react'
import { CCombobox, CListBoxOption } from '@coreui/react-pro'

export const ComboboxCheckboxIndicatorExample = () => (
  <CCombobox
    ariaLabel="Skills"
    indicator="checkbox"
    multiple
    placeholder="Select skills…"
    style={{ maxWidth: '20rem' }}
  >
    <CListBoxOption value="html">HTML</CListBoxOption>
    <CListBoxOption value="css">CSS</CListBoxOption>
    <CListBoxOption value="js">JavaScript</CListBoxOption>
  </CCombobox>
)
```

### All together

```html
import React from 'react'
import { CCombobox, CListBoxOption } from '@coreui/react-pro'

import CIcon from '@coreui/icons-react'
import { cilBriefcase, cilHome, cilPaperPlane } from '@coreui/icons'

export const ComboboxCustomContentExample = () => (
  <CCombobox
    ariaLabel="Address"
    indicator="checkbox"
    placeholder="Where should we ship it?"
    style={{ maxWidth: '20rem' }}
  >
    <CListBoxOption description="Weekdays after 6 pm" value="home">
      <CIcon icon={cilHome} /> Home
    </CListBoxOption>
    <CListBoxOption description="Weekdays, 9 am to 5 pm" value="office">
      <CIcon icon={cilBriefcase} /> Office
    </CListBoxOption>
    <CListBoxOption description="Any time, with a code" value="locker">
      <CIcon icon={cilPaperPlane} /> Parcel locker
    </CListBoxOption>
  </CCombobox>
)
```

## Search

`search` puts the List box's own search field at the top of the panel and hides what does not match. Because a hidden option leaves the navigation, everything downstream follows: the arrows skip it and the empty state appears when nothing is left. The focus moves into the field when the panel opens, and `aria-activedescendant` moves there with it, so typing and choosing happen in one place.

`searchPlaceholder` fills the field's placeholder and `ariaSearchLabel` its accessible name. Add a `CListBoxEmpty` child for the message shown when nothing matches.

```html
import React from 'react'
import { CCombobox, CListBoxEmpty, CListBoxOption } from '@coreui/react-pro'

const countries = [
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Canada', value: 'ca' },
  { label: 'Australia', value: 'au' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
  { label: 'Japan', value: 'jp' },
  { label: 'Brazil', value: 'br' },
]

export const ComboboxSearchExample = () => (
  <CCombobox
    ariaLabel="Country"
    placeholder="Select a country…"
    search
    style={{ maxWidth: '20rem' }}
  >
    {countries.map((country) => (
      <CListBoxOption key={country.value} value={country.value}>
        {country.label}
      </CListBoxOption>
    ))}
    <CListBoxEmpty>No results found</CListBoxEmpty>
  </CCombobox>
)
```

The panel is as tall as its content — cap it where you want a scroll container, with `max-height` and `overflow-y` on `.list-box-options`.

### Matching past the accents

`searchNormalize` compares both sides without their diacritics, so `zoe` finds `Zoë` and `oe` finds both. It normalizes to `NFD` and drops the combining diacritics, which leaves the labels themselves untouched — only the comparison changes.

```html
import React from 'react'
import { CCombobox, CListBoxEmpty, CListBoxOption } from '@coreui/react-pro'

export const ComboboxSearchNormalizeExample = () => (
  <CCombobox
    ariaLabel="Name"
    placeholder="Find a name…"
    search
    searchNormalize
    style={{ maxWidth: '20rem' }}
  >
    <CListBoxOption value="zoe">Zoë</CListBoxOption>
    <CListBoxOption value="renee">Renée</CListBoxOption>
    <CListBoxOption value="joao">João</CListBoxOption>
    <CListBoxOption value="ana">Ana</CListBoxOption>
    <CListBoxEmpty>No results found</CListBoxEmpty>
  </CCombobox>
)
```

### External search

`search="external"` builds the same field and filters nothing. Every keystroke calls `onSearch` with the query, and you answer with `items` — the list shows what you hand it, so the query is yours to interpret.

```html
import React, { useState } from 'react'
import { CCombobox } from '@coreui/react-pro'

const countries = [
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Canada', value: 'ca' },
  { label: 'Australia', value: 'au' },
  { label: 'Germany', value: 'de' },
]

export const ComboboxExternalSearchExample = () => {
  const [items, setItems] = useState(countries)

  return (
    <CCombobox
      ariaLabel="Country"
      items={items}
      onSearch={(query) =>
        setItems(
          countries.filter((country) =>
            country.label.toLowerCase().startsWith(query.trim().toLowerCase())
          )
        )
      }
      placeholder="Select a country…"
      search="external"
      style={{ maxWidth: '20rem' }}
    />
  )
}
```

## Groups

Group options in a `CListBoxSection` and name it with `label`. The section carries `role="group"` and is announced with its name. A section whose options are all filtered out is hidden with its label.

```html
import React from 'react'
import { CCombobox, CListBoxOption, CListBoxSection } from '@coreui/react-pro'

export const ComboboxGroupsExample = () => (
  <CCombobox ariaLabel="Language" placeholder="Select a language…" style={{ maxWidth: '20rem' }}>
    <CListBoxSection label="Frontend">
      <CListBoxOption value="html">HTML</CListBoxOption>
      <CListBoxOption value="css">CSS</CListBoxOption>
      <CListBoxOption value="js">JavaScript</CListBoxOption>
    </CListBoxSection>
    <CListBoxSection label="Backend">
      <CListBoxOption value="python">Python</CListBoxOption>
      <CListBoxOption value="ruby">Ruby</CListBoxOption>
      <CListBoxOption value="go">Go</CListBoxOption>
    </CListBoxSection>
  </CCombobox>
)
```

## Multiple select

`multiple` toggles options instead of replacing the selection, and the panel stays open so several picks cost one opening. The toggle shows the one label while a single option is selected and `selectedLabel` past that — a function of the count and the number of options, or a string in which `{count}` and `{total}` are replaced. `selectionLimit` caps how many can be taken at once, and `onSelectionLimit` reports the limit together with the value it turned down.

```html
import React from 'react'
import { CCombobox, CListBoxOption } from '@coreui/react-pro'

export const ComboboxMultipleExample = () => (
  <CCombobox
    ariaLabel="Skills"
    indicator="checkbox"
    multiple
    placeholder="Select skills…"
    selectedLabel={(count) => `${count} skills`}
    style={{ maxWidth: '20rem' }}
  >
    <CListBoxOption value="html">HTML</CListBoxOption>
    <CListBoxOption value="css">CSS</CListBoxOption>
    <CListBoxOption value="js">JavaScript</CListBoxOption>
    <CListBoxOption value="python">Python</CListBoxOption>
    <CListBoxOption value="ruby">Ruby</CListBoxOption>
  </CCombobox>
)
```

## Sizing

The toggle carries `.form-control`, so `size` reaches it unchanged and it stands exactly as tall as a text input of the same size.

```html
import React from 'react'
import { CCombobox, CListBoxOption } from '@coreui/react-pro'

const options = ['Option one', 'Option two', 'Option three']

export const ComboboxSizingExample = () => (
  <>
    <CCombobox
      ariaLabel="Small"
      className="mb-4"
      placeholder="Small select…"
      size="sm"
      style={{ maxWidth: '20rem' }}
    >
      {options.map((option) => (
        <CListBoxOption key={option} value={option}>
          {option}
        </CListBoxOption>
      ))}
    </CCombobox>
    <CCombobox
      ariaLabel="Large"
      placeholder="Large select…"
      size="lg"
      style={{ maxWidth: '20rem' }}
    >
      {options.map((option) => (
        <CListBoxOption key={option} value={option}>
          {option}
        </CListBoxOption>
      ))}
    </CCombobox>
  </>
)
```

## Disabled

`disabled` on the combobox turns the toggle off, so the panel cannot be opened. `disabled` on a single `CListBoxOption` takes that option out of the keyboard order and out of every selection the user makes, and `disabled` on a `CListBoxSection` does that for every option in it. A `value` or `defaultValue` naming a disabled option still selects it, as a native select does.

```html
import React from 'react'
import { CCombobox, CListBoxOption } from '@coreui/react-pro'

export const ComboboxDisabledExample = () => (
  <>
    <CCombobox
      ariaLabel="Disabled"
      className="mb-4"
      disabled
      placeholder="Nothing to pick here"
      style={{ maxWidth: '20rem' }}
    >
      <CListBoxOption value="1">Option one</CListBoxOption>
      <CListBoxOption value="2">Option two</CListBoxOption>
    </CCombobox>
    <CCombobox ariaLabel="Availability" placeholder="Pick a slot…" style={{ maxWidth: '20rem' }}>
      <CListBoxOption value="1">Available</CListBoxOption>
      <CListBoxOption disabled value="2">
        Unavailable
      </CListBoxOption>
      <CListBoxOption value="3">Available</CListBoxOption>
    </CCombobox>
  </>
)
```

## Form submission

`CCombobox` renders a hidden `<select class="combobox-select">` right after the toggle and keeps its selected options in step with the selection, so a combobox posts like a `<select>`, and like a `<select multiple>` in `multiple` mode: one key per value, `country=us&country=ca`. Set `name` to submit it; without a name the combobox is not submitted with the form. With nothing selected a single combobox posts `country=` and a `multiple` one posts nothing, as the native selects do. The select carries `.input-group-ignore`, so a toggle in an input group keeps its corners. A disabled combobox is not submitted, like any disabled field.

```html
import React from 'react'
import { CButton, CCombobox, CListBoxOption } from '@coreui/react-pro'

export const ComboboxFormSubmissionExample = () => (
  <form className="d-flex gap-4 align-items-end" onSubmit={(event) => event.preventDefault()}>
    <CCombobox
      label="Country"
      name="country"
      placeholder="Pick a country…"
      style={{ maxWidth: '20rem' }}
    >
      <CListBoxOption value="us">United States</CListBoxOption>
      <CListBoxOption value="uk">United Kingdom</CListBoxOption>
      <CListBoxOption value="ca">Canada</CListBoxOption>
    </CCombobox>
    <CButton type="submit">Submit</CButton>
  </form>
)
```

## Validation

The hidden `<select>` takes part in the browser's validation, so `required` blocks the submit while nothing is selected. When a validation reports it, the component lays it along the start of the toggle, so the browser shows its message under the combobox, and the focus it gets goes to the toggle. The state shows on the toggle as the `.is-*` class, and the message after it is added to the toggle's `aria-describedby`.

```html
import React, { useState } from 'react'
import { CButton, CCombobox, CForm, CListBoxOption } from '@coreui/react-pro'

export const ComboboxValidationExample = () => {
  const [roleState, setRoleState] = useState<string | undefined>('invalid')

  return (
    <CForm className="row g-4" noValidate validate>
      <div className="col-md-6">
        <CCombobox
          feedbackInvalid="Pick a country."
          label="Country (required)"
          name="country"
          placeholder="Pick a country…"
          required
        >
          <CListBoxOption value="us">United States</CListBoxOption>
          <CListBoxOption value="uk">United Kingdom</CListBoxOption>
          <CListBoxOption value="ca">Canada</CListBoxOption>
        </CCombobox>
      </div>
      <div className="col-md-6">
        <CCombobox
          defaultValue="admin"
          feedback="This project already has an admin."
          label="Role"
          name="role"
          onValidationStateChange={setRoleState}
          validationState={roleState}
        >
          <CListBoxOption value="admin">Admin</CListBoxOption>
          <CListBoxOption value="editor">Editor</CListBoxOption>
        </CCombobox>
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

- `validationState`: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`. While it is set, the component draws it instead of what the browser reports. While it is `'invalid'`, the hidden select blocks the submit with the text of the linked message, or `Invalid value.` when there is none, unless the component is `disabled`.
- A validation that reports the hidden select invalid: a submit, `checkValidity()` or `reportValidity()`, which [`CForm`](https://coreui.io/react/docs/forms/validation/) and the stepper call as well. From then on the toggle shows it invalid whenever the value is invalid, until the form is reset, and the message after the toggle shows.
- In a form with `validate`, the `:user-invalid` state of the hidden select, and with `validate="valid"` also its `:user-valid` state.

A state you give is a verdict on the value it was given for. When the user picks a different value, or the form is reset, the component calls `onValidationStateChange(undefined)`; pass your state setter there to drop the state, as the second field above does. A change your code makes through `value` keeps it, and so does picking the value the combobox already holds. A reset asks once it has run, so a state you set from a `reset` listener on the form gets the same call, and your handler decides whether to drop it. A native reset of the form puts back the value given by `defaultValue`, and leaves a controlled `value` to you.

The toggle is a `<button>`, a role that has neither an invalid nor a required state, so it carries neither `aria-invalid` nor `aria-required`: a screen reader learns what is wrong from the message in its description, and that the field is required only from its label, so say it there, as the first field above does.

## Accessibility

The toggle is a real `<button>` carrying `aria-haspopup="listbox"` and `aria-expanded`; name it with `label` or an `aria-label`. The panel is a [List box](https://coreui.io/react/docs/components/list-box/), so `role="listbox"` sits on `.list-box-options` and `role="option"` on every option, with `aria-selected` kept in step with the selection — name the list itself with `ariaLabel`.

The focus never enters the list. It stays on the toggle, or on the search field when there is one, and the highlighted option is reported through `aria-activedescendant` on whichever of the two holds it.

| Key | Action |
| --- | --- |
| `↓` / `↑` | Open the panel; once it is open, move the highlight to the next/previous option |
| `Enter` / `Space` | Open the panel; once it is open, select the highlighted option |
| `Home` / `End` | Move the highlight to the first/last option; the search field keeps them for the caret |
| `A` – `Z` | Move the highlight to the next option whose label starts with what you typed |
| `Escape` | Close the panel and return the focus to the toggle |
| `Tab` | Close the panel and move on |

## Customizing

### CSS variables

The toggle declares its own properties:

```scss
$combobox-toggle-tokens: defaults(
  (
    --cui-combobox-toggle-gap: .5rem,
    --cui-combobox-toggle-show-bg: var(--cui-bg-1),
    --cui-combobox-toggle-placeholder-color: var(--cui-control-placeholder-color),
    --cui-combobox-toggle-caret-color: var(--cui-fg-3),
    --cui-combobox-toggle-caret-size: .75em,
    --cui-combobox-toggle-caret-transition-duration: .2s,
    --cui-combobox-toggle-caret-transition-timing: var(--cui-btn-input-transition-timing),
  ),
  $combobox-toggle-tokens
);
```

The panel is the shared combobox surface, which only sizes itself:

```scss
$combobox-tokens: defaults(
  (
    --cui-combobox-popup-min-width: 100%,
  ),
  $combobox-tokens
);
```

Everything inside it — options, section labels and the checkbox indicator — is a [List box](https://coreui.io/react/docs/components/list-box/) and takes its `--cui-list-box-*` variables. `.list-box` declares them itself, so a value set on `.combobox-popup` or on `:root` does not reach it: set them with a rule on `.combobox-popup .list-box`, which covers the panels of Combobox, Autocomplete and Multi Select alike. The frame of the toggle is a [`.form-control`](https://coreui.io/react/docs/forms/input/styling/#css-variables) and takes the `--cui-control-*` properties.
