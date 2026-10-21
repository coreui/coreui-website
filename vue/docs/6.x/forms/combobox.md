# Vue Combobox Component

> A select-like control written as components: a form-control toggle next to a popup list box. CCombobox runs the open state, the selection, the keyboard and form submission, and leaves the content of every option to you.

## Overview

_Added in 6.0.0._

A combobox is a `.form-control` toggle button followed by a popup holding a [List box](https://coreui.io/vue/docs/components/list-box/). The toggle shows the current value and the list holds the choices; `<CCombobox>` keeps the two in step — it opens and closes the panel, positions it against the toggle, tracks the selection, runs the keyboard through `aria-activedescendant`, and submits the value through a hidden `<select>` the browser validates.

Everything inside the panel is List box markup, so an option is whatever you put in it: plain text, an icon, a two-line label with a description. The component never rewrites an option's content.

```html
<template>
  <CCombobox name="option" placeholder="Select an item…" style="max-width: 20rem">
    <CListBoxOption value="1">Option one</CListBoxOption>
    <CListBoxOption value="2">Option two</CListBoxOption>
    <CListBoxOption value="3">Option three</CListBoxOption>
  </CCombobox>
</template>

<script setup>
import { CCombobox, CListBoxOption } from '@coreui/vue-pro'
</script>
```

### When to use

<div class="table-responsive">

| Component | Use it for |
| --- | --- |
| Combobox | Picking from a list you wrote as components, with full control over what an option looks like. |
| [Autocomplete](https://coreui.io/vue/docs/forms/autocomplete/) | Typing to narrow a list, with hints and a free-text value. |
| [Multi Select](https://coreui.io/vue/docs/forms/multi-select/) | A native `<select>` enhanced in place, with chips, select-all and groups. |
| [List box](https://coreui.io/vue/docs/components/list-box/) | The list on its own, without a toggle or a panel. |

</div>

## Example

The options are `<CListBoxOption>` children, exactly as in a List box; every option carries its value in `value` and an option without one is worth its text. The component fills in the parts around them: the `.combobox-value` text, the caret, `type="button"`, `aria-haspopup` and `aria-expanded`.

### Placeholders

`placeholder` is the text the toggle shows while nothing is selected. It carries `.combobox-placeholder` while it stands for an empty value, so it can be dimmed without being confused for a choice.

```html
<template>
  <CCombobox name="country" placeholder="Pick a country…" style="max-width: 20rem">
    <CListBoxOption value="us">United States</CListBoxOption>
    <CListBoxOption value="uk">United Kingdom</CListBoxOption>
    <CListBoxOption value="ca">Canada</CListBoxOption>
  </CCombobox>
</template>

<script setup>
import { CCombobox, CListBoxOption } from '@coreui/vue-pro'
</script>
```

### Pre-selected value

`defaultValue` seeds the uncontrolled selection — the toggle reads its label from the first render. `value` does the same and keeps the selection yours: the component then renders what you pass and reports the user's picks through `change`, which `v-model:value` binds for you. Both take an array in `multiple` mode.

```html
<template>
  <CCombobox
    default-value="editor"
    name="role"
    placeholder="Choose a role…"
    style="max-width: 20rem"
  >
    <CListBoxOption value="admin">Admin</CListBoxOption>
    <CListBoxOption value="editor">Editor</CListBoxOption>
    <CListBoxOption value="viewer">Viewer</CListBoxOption>
  </CCombobox>
</template>

<script setup>
import { CCombobox, CListBoxOption } from '@coreui/vue-pro'
</script>
```

### Options from data

Pass `items` instead of children and every entry renders as a `<CListBoxOption>` showing its `label`. The default slot then becomes the option template, called once per entry with `item` and `index`.

```html
<template>
  <CCombobox :items="items" placeholder="Pick a country…" style="max-width: 20rem" />
</template>

<script setup>
import { CCombobox } from '@coreui/vue-pro'

const items = [
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Canada', value: 'ca' },
]
</script>
```

### With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description.

```html
<template>
  <CFormField style="max-width: 20rem">
    <CFormLabel for="exampleCombobox">Country</CFormLabel>
    <CCombobox id="exampleCombobox" name="country" placeholder="Pick a country…">
      <CListBoxOption value="us">United States</CListBoxOption>
      <CListBoxOption value="uk">United Kingdom</CListBoxOption>
      <CListBoxOption value="ca">Canada</CListBoxOption>
    </CCombobox>
    <CFormText>We ship to these three for now.</CFormText>
  </CFormField>
</template>

<script setup>
import { CCombobox, CFormField, CFormLabel, CFormText, CListBoxOption } from '@coreui/vue-pro'
</script>
```

## Custom content

An option is an ordinary element, so it takes whatever markup belongs there. The toggle shows its text: the `.list-box-option-label` when there is one, the option's own text otherwise — so an option with an icon and a description still reads as one word in the closed control.

### Icons

```html
<template>
  <CCombobox name="language" placeholder="Choose a language…" style="max-width: 20rem">
    <CListBoxOption v-for="language in languages" :key="language.value" :value="language.value">
      <CIcon :icon="language.icon" />
      <span class="list-box-option-label">{{ language.label }}</span>
    </CListBoxOption>
  </CCombobox>
</template>

<script setup>
import { cibJavascript, cibPython, cibRuby } from '@coreui/icons-pro'
import { CIcon } from '@coreui/icons-vue'
import { CCombobox, CListBoxOption } from '@coreui/vue-pro'

const languages = [
  { icon: cibJavascript, label: 'JavaScript', value: 'js' },
  { icon: cibPython, label: 'Python', value: 'python' },
  { icon: cibRuby, label: 'Ruby', value: 'ruby' },
]
</script>
```

### Descriptions

`description` puts a second line under the label. The toggle shows the label alone.

```html
<template>
  <CCombobox name="plan" placeholder="Choose a plan…" style="max-width: 20rem">
    <CListBoxOption description="Everything you need to start" value="starter">
      Starter
    </CListBoxOption>
    <CListBoxOption description="For growing teams" value="team">Team</CListBoxOption>
    <CListBoxOption description="Dedicated support and SLA" value="enterprise">
      Enterprise
    </CListBoxOption>
  </CCombobox>
</template>

<script setup>
import { CCombobox, CListBoxOption } from '@coreui/vue-pro'
</script>
```

### Checkbox indicator

`indicator="checkbox"` draws a decorative checkbox in front of every option, so a multiple selection reads as a list of checkboxes.

```html
<template>
  <CCombobox
    indicator="checkbox"
    multiple
    name="skills"
    placeholder="Select skills…"
    style="max-width: 20rem"
  >
    <CListBoxOption value="html">HTML</CListBoxOption>
    <CListBoxOption value="css">CSS</CListBoxOption>
    <CListBoxOption value="js">JavaScript</CListBoxOption>
  </CCombobox>
</template>

<script setup>
import { CCombobox, CListBoxOption } from '@coreui/vue-pro'
</script>
```

### All together

```html
<template>
  <CCombobox
    indicator="checkbox"
    multiple
    name="teammates"
    placeholder="Invite teammates…"
    style="max-width: 20rem"
  >
    <CListBoxOption
      v-for="member in members"
      :key="member.value"
      :description="member.description"
      :value="member.value"
    >
      <CIcon :icon="cilUser" />
      {{ member.label }}
    </CListBoxOption>
  </CCombobox>
</template>

<script setup>
import { cilUser } from '@coreui/icons-pro'
import { CIcon } from '@coreui/icons-vue'
import { CCombobox, CListBoxOption } from '@coreui/vue-pro'

const members = [
  { description: 'Design', label: 'Ada Lovelace', value: 'ada' },
  { description: 'Engineering', label: 'Alan Turing', value: 'alan' },
  { description: 'Support', label: 'Grace Hopper', value: 'grace' },
]
</script>
```

## Search

`search` puts the List box's own search field at the top of the panel and hides what does not match. Because a hidden option leaves the navigation, everything downstream follows: the arrows skip it and `<CListBoxEmpty>` takes over when nothing is left. The focus moves into the field when the panel opens, and `aria-activedescendant` moves there with it, so typing and choosing happen in one place.

`searchPlaceholder` fills the field's placeholder and `ariaSearchLabel` its accessible name.

```html
<template>
  <CCombobox name="country" placeholder="Select a country…" search style="max-width: 20rem">
    <CListBoxOption value="us">United States</CListBoxOption>
    <CListBoxOption value="uk">United Kingdom</CListBoxOption>
    <CListBoxOption value="ca">Canada</CListBoxOption>
    <CListBoxOption value="au">Australia</CListBoxOption>
    <CListBoxOption value="de">Germany</CListBoxOption>
    <CListBoxOption value="fr">France</CListBoxOption>
    <CListBoxOption value="jp">Japan</CListBoxOption>
    <CListBoxOption value="br">Brazil</CListBoxOption>
    <CListBoxEmpty>No results found</CListBoxEmpty>
  </CCombobox>
</template>

<script setup>
import { CCombobox, CListBoxEmpty, CListBoxOption } from '@coreui/vue-pro'
</script>
```

### Matching past the accents

`searchNormalize` compares both sides without their diacritics, so `zoe` finds `Zoë` and `oe` finds both. It normalizes to `NFD` and drops the combining diacritics, which leaves the labels themselves untouched — only the comparison changes.

```html
<template>
  <CCombobox placeholder="Find a name…" search search-normalize style="max-width: 20rem">
    <CListBoxOption value="zoe">Zoë</CListBoxOption>
    <CListBoxOption value="renee">Renée</CListBoxOption>
    <CListBoxOption value="joao">João</CListBoxOption>
    <CListBoxOption value="ana">Ana</CListBoxOption>
    <CListBoxEmpty>No results found</CListBoxEmpty>
  </CCombobox>
</template>

<script setup>
import { CCombobox, CListBoxEmpty, CListBoxOption } from '@coreui/vue-pro'
</script>
```

### External search

`search="external"` builds the same field and filters nothing. Every keystroke fires `search` with the query, and you answer with a new `items` array — the list shows what you hand it, so the query is yours to interpret.

```html
<template>
  <CCombobox
    :items="items"
    placeholder="Search users…"
    search="external"
    search-placeholder="Search users"
    style="max-width: 20rem"
    @search="onSearch"
  />
</template>

<script setup>
import { ref } from 'vue'
import { CCombobox } from '@coreui/vue-pro'

const items = ref([])

let timer

const loadUsers = async (query) => {
  const response = await fetch(`https://apitest.coreui.io/demos/users?first_name=${query}&limit=10`)
  const users = await response.json()

  items.value = users.records.map((user) => ({
    label: `${user.first_name} ${user.last_name}`,
    value: String(user.id),
  }))
}

const onSearch = (query) => {
  clearTimeout(timer)
  timer = setTimeout(() => loadUsers(query), 300)
}

loadUsers('')
</script>
```

## Groups

Group options in a `<CListBoxSection>` and name it with `label`. The section carries `role="group"` and is announced with its name. A section whose options are all filtered out is hidden with its label.

```html
<template>
  <CCombobox name="language" placeholder="Select a language…" style="max-width: 20rem">
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
</template>

<script setup>
import { CCombobox, CListBoxOption, CListBoxSection } from '@coreui/vue-pro'
</script>
```

## Multiple select

`multiple` toggles options instead of replacing the selection, and the panel stays open so several picks cost one opening. The toggle shows the one label while a single option is selected and `selectedLabel` past that — a function of the count and the number of options, or a string in which `{count}` and `{total}` are replaced. `selectionLimit` caps how many can be taken at once, and the `selectionLimit` event reports the limit together with the value it turned down.

```html
<template>
  <CCombobox
    indicator="checkbox"
    multiple
    name="skills"
    placeholder="Select skills…"
    selected-label="{count} selected"
    style="max-width: 20rem"
  >
    <CListBoxOption value="html">HTML</CListBoxOption>
    <CListBoxOption value="css">CSS</CListBoxOption>
    <CListBoxOption value="js">JavaScript</CListBoxOption>
    <CListBoxOption value="python">Python</CListBoxOption>
    <CListBoxOption value="ruby">Ruby</CListBoxOption>
  </CCombobox>
</template>

<script setup>
import { CCombobox, CListBoxOption } from '@coreui/vue-pro'
</script>
```

## Sizing

The toggle carries `.form-control`, so `size` reaches it unchanged and it stands exactly as tall as a text input of the same size.

```html
<template>
  <CCombobox class="mb-4" placeholder="Small select…" size="sm" style="max-width: 20rem">
    <CListBoxOption value="1">Option one</CListBoxOption>
    <CListBoxOption value="2">Option two</CListBoxOption>
  </CCombobox>
  <CCombobox class="mb-4" placeholder="Default select…" style="max-width: 20rem">
    <CListBoxOption value="1">Option one</CListBoxOption>
    <CListBoxOption value="2">Option two</CListBoxOption>
  </CCombobox>
  <CCombobox placeholder="Large select…" size="lg" style="max-width: 20rem">
    <CListBoxOption value="1">Option one</CListBoxOption>
    <CListBoxOption value="2">Option two</CListBoxOption>
  </CCombobox>
</template>

<script setup>
import { CCombobox, CListBoxOption } from '@coreui/vue-pro'
</script>
```

## Disabled

`disabled` turns the whole control off — the panel never opens and the list box is disabled with it. A single option opts out with `disabled` on `<CListBoxOption>`, which takes it out of the keyboard order and out of every selection the user makes, and `disabled` on `<CListBoxSection>` does that for every option in it. A `value` or `defaultValue` naming a disabled option still selects it, as a native select does.

```html
<template>
  <CCombobox class="mb-4" disabled placeholder="Cannot interact…" style="max-width: 20rem">
    <CListBoxOption value="1">Option one</CListBoxOption>
    <CListBoxOption value="2">Option two</CListBoxOption>
  </CCombobox>
  <CCombobox placeholder="Select an option…" style="max-width: 20rem">
    <CListBoxOption value="1">Available</CListBoxOption>
    <CListBoxOption disabled value="2">Unavailable</CListBoxOption>
    <CListBoxOption value="3">Available</CListBoxOption>
  </CCombobox>
</template>

<script setup>
import { CCombobox, CListBoxOption } from '@coreui/vue-pro'
</script>
```

## Controlled value

`v-model:value` hands the selection to you: the component renders what you pass and reports every pick through `change`. `v-model:show` does the same for the panel. A native reset of the form puts back the value the combobox started with; a controlled one asks for its first `value` through `change` and keeps showing your `value` until you take it.

```html
<template>
  <CCombobox v-model:value="value" placeholder="Pick a country…" style="max-width: 20rem">
    <CListBoxOption value="us">United States</CListBoxOption>
    <CListBoxOption value="uk">United Kingdom</CListBoxOption>
    <CListBoxOption value="ca">Canada</CListBoxOption>
  </CCombobox>
  <div class="mt-4">Selected: {{ value ?? 'nothing' }}</div>
</template>

<script setup>
import { ref } from 'vue'
import { CCombobox, CListBoxOption } from '@coreui/vue-pro'

const value = ref(null)
</script>
```

## Form submission

The component renders a hidden `<select class="combobox-select">` right after the toggle and keeps its selected options in step with the selection, so a combobox posts like a `<select>`, and like a `<select multiple>` in `multiple` mode: one key per value, `country=us&country=ca`. Set `name` to submit it; without a name the combobox is not submitted with the form. With nothing selected a single combobox posts `country=` and a `multiple` one posts nothing, as the native selects do. The select carries `.input-group-ignore`, so a toggle in an input group keeps its corners. A disabled combobox is not submitted, like any disabled field.

```html
<!-- What you write -->
<CCombobox name="country">…</CCombobox>

<!-- What the component renders after the toggle -->
<select class="combobox-select input-group-ignore" name="country" tabindex="-1" aria-hidden="true">
  <option value="us" selected>us</option>
</select>
```

## Validation

The hidden `<select>` takes part in the browser's validation, so `required` blocks the submit while nothing is selected. When a validation reports it, the component lays it along the start of the toggle, so the browser shows its message under the combobox, and the focus it gets goes to the toggle. The state shows on the toggle as the `.is-*` class, and the message after it is added to the toggle's `aria-describedby`. The messages come from the `feedback`, `feedback-invalid` and `feedback-valid` props, and the last two also from the slots of the same names.

```html
<template>
  <CForm class="row g-4" novalidate validate>
    <div class="col-md-6">
      <CFormLabel for="validationCountry">Country (required)</CFormLabel>
      <CCombobox
        id="validationCountry"
        feedback-invalid="Pick a country."
        name="country"
        placeholder="Pick a country…"
        required
      >
        <CListBoxOption value="us">United States</CListBoxOption>
        <CListBoxOption value="uk">United Kingdom</CListBoxOption>
        <CListBoxOption value="ca">Canada</CListBoxOption>
      </CCombobox>
    </div>
    <div class="col-md-6">
      <CFormLabel for="validationRole">Role</CFormLabel>
      <CCombobox
        id="validationRole"
        v-model:validation-state="roleState"
        default-value="admin"
        feedback="This project already has an admin."
        name="role"
      >
        <CListBoxOption value="admin">Admin</CListBoxOption>
        <CListBoxOption value="editor">Editor</CListBoxOption>
      </CCombobox>
    </div>
    <div class="col-12">
      <CButton color="primary" type="submit">Submit</CButton>
    </div>
  </CForm>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CCombobox, CForm, CFormLabel, CListBoxOption } from '@coreui/vue-pro'

const roleState = ref('invalid')
</script>
```

The state comes from three places, in this order:

- `validationState`: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`. While it is set, the component draws it instead of what the browser reports. While it is `'invalid'`, the hidden select blocks the submit with the text of the linked message, or `Invalid value.` when there is none, unless the component is `disabled`.
- A validation that reports the hidden select invalid: a submit, `checkValidity()` or `reportValidity()`, which [`CForm`](https://coreui.io/vue/docs/forms/validation/) and the stepper call as well. From then on the toggle shows it invalid whenever the value is invalid, until the form is reset, and the message after the toggle shows.
- In a form with `validate`, the `:user-invalid` state of the hidden select, and with `validate="valid"` also its `:user-valid` state.

A state you give is a verdict on the value it was given for. When the user picks a different value, or the form is reset, the component emits `update:validationState` with `undefined`; bind it with `v-model:validation-state` to drop the state, as the second field above does. A change your code makes through `v-model:value` keeps it, and so does picking the value the combobox already holds. A reset emits once it has run, so a state you set from a `reset` listener on the form gets the same event, and your handler decides whether to drop it. A native reset of the form puts back the value given by `default-value`, and leaves a bound `v-model:value` to you.

The toggle is a `<button>`, a role that has neither an invalid nor a required state, so it carries neither `aria-invalid` nor `aria-required`: a screen reader learns what is wrong from the message in its description, and that the field is required only from its label, so say it there, as the first field above does.

## Accessibility

The toggle is a real `<button>` carrying `aria-haspopup="listbox"` and `aria-expanded`; name it with a `<CFormLabel for>` or an `aria-label`. The panel is a [List box](https://coreui.io/vue/docs/components/list-box/), so `role="listbox"` sits on the options element and `role="option"` on every option, with `aria-selected` kept in step with the selection.

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

The toggle declares its own properties on `.combobox-toggle`:

```css
--cui-combobox-toggle-caret-color
--cui-combobox-toggle-caret-size
--cui-combobox-toggle-caret-transition-duration
--cui-combobox-toggle-caret-transition-timing
--cui-combobox-toggle-gap
--cui-combobox-toggle-placeholder-color
--cui-combobox-toggle-show-bg
```

The panel is the shared combobox surface, which only sizes itself:

```css
--cui-combobox-popup-min-width
```

Everything inside it — options, section labels and the checkbox indicator — is a [List box](https://coreui.io/vue/docs/components/list-box/) and takes its `--cui-list-box-*` variables. `.list-box` declares them itself, so a value set on `.combobox-popup` or on `:root` does not reach it: set them with a rule on `.combobox-popup .list-box`, which covers the panels of Combobox, Autocomplete and Multi Select alike. The frame of the toggle is a [`.form-control`](https://coreui.io/vue/docs/forms/form-control/) and takes the `--cui-control-*` properties.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CCombobox /&gt;](./api/#ccombobox)
- [&lt;CListBoxEmpty /&gt;](https://coreui.io/vue/docs/components/list-box/api/#clistboxempty)
- [&lt;CListBoxOption /&gt;](https://coreui.io/vue/docs/components/list-box/api/#clistboxoption)
- [&lt;CListBoxSection /&gt;](https://coreui.io/vue/docs/components/list-box/api/#clistboxsection)
