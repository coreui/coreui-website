# Bootstrap 6 Combobox

> A select-like control written as markup: a form-control toggle next to a popup list box. The plugin runs the open state, the selection, the keyboard and form submission, and leaves the content of every option to you.

## Overview

A combobox is a `<button class="form-control combobox-toggle">` followed by a `.popup` holding a [List box](https://coreui.io/bootstrap/docs/components/list-box/). The toggle shows the current value and the list holds the choices; the plugin keeps the two in step — it opens and closes the panel, positions it against the toggle, tracks the selection, runs the keyboard through `aria-activedescendant`, and submits the value through a hidden `<select>` the browser validates.

Everything inside the panel is List box markup, so an option is whatever you put in it: plain text, an icon, a two-line label with a description. The plugin never rewrites an option's content.

```html
<button class="form-control combobox-toggle" type="button"
    data-coreui-toggle="combobox"
    data-coreui-name="option"
    data-coreui-placeholder="Select an item…">
</button>
<div class="popup combobox-popup">
  <div class="list-box">
    <div class="list-box-options" role="listbox" aria-label="Item">
      <div class="list-box-option" data-coreui-value="1">Option one</div>
      <div class="list-box-option" data-coreui-value="2">Option two</div>
      <div class="list-box-option" data-coreui-value="3">Option three</div>
    </div>
  </div>
</div>
```

### When to use

<div class="table-responsive">

| Component | Use it for |
| --- | --- |
| Combobox | Picking from a list you wrote in HTML, with full control over what an option looks like. |
| [Autocomplete](https://coreui.io/bootstrap/docs/forms/autocomplete/) | Typing to narrow a list, with hints and a free-text value. |
| [Multi Select](https://coreui.io/bootstrap/docs/forms/multi-select/) | A native `<select>` enhanced in place, with chips, select-all and groups. |
| [List box](https://coreui.io/bootstrap/docs/components/list-box/) | The list on its own, without a toggle or a panel. |

</div>

## Example

The toggle carries `data-coreui-toggle="combobox"`; the panel is the `.popup` right after it. The plugin fills in the parts that are missing: `.combobox-value` for the text, the caret, `type="button"`, `aria-haspopup` and `aria-expanded`, and it takes the panel out of the document until the first open.

Every option carries its value in `data-coreui-value`, exactly as in a List box; an option without one is worth its text.

### Placeholders

`placeholder` is the text `.combobox-value` shows while nothing is selected. It carries `.combobox-placeholder` while it stands for an empty value, so it can be dimmed without being confused for a choice.

```html
<button class="form-control combobox-toggle" type="button"
    data-coreui-toggle="combobox"
    data-coreui-name="country"
    data-coreui-placeholder="Pick a country…">
</button>
<div class="popup combobox-popup">
  <div class="list-box">
    <div class="list-box-options" role="listbox" aria-label="Country">
      <div class="list-box-option" data-coreui-value="us">United States</div>
      <div class="list-box-option" data-coreui-value="uk">United Kingdom</div>
      <div class="list-box-option" data-coreui-value="ca">Canada</div>
    </div>
  </div>
</div>
```

### Pre-selected value

Set `value` — `data-coreui-value` on the toggle — and that option starts selected: the toggle reads its label from the moment the page loads. It takes an array in `multiple` mode. A `.selected` class on an option in the markup does not select it; the combobox writes that class from its value.

```html
<button class="form-control combobox-toggle" type="button"
    data-coreui-toggle="combobox"
    data-coreui-name="role"
    data-coreui-placeholder="Choose a role…"
    data-coreui-value="editor">
</button>
<div class="popup combobox-popup">
  <div class="list-box">
    <div class="list-box-options" role="listbox" aria-label="Role">
      <div class="list-box-option" data-coreui-value="admin">Admin</div>
      <div class="list-box-option" data-coreui-value="editor">Editor</div>
      <div class="list-box-option" data-coreui-value="viewer">Viewer</div>
    </div>
  </div>
</div>
```

### With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <label for="exampleCombobox" class="form-label">Country</label>
  <button class="form-control combobox-toggle" type="button" id="exampleCombobox"
      data-coreui-toggle="combobox"
      data-coreui-name="country"
      data-coreui-placeholder="Pick a country…">
  </button>
  <div class="popup combobox-popup">
    <div class="list-box">
      <div class="list-box-options" role="listbox" aria-label="Country">
        <div class="list-box-option" data-coreui-value="us">United States</div>
        <div class="list-box-option" data-coreui-value="uk">United Kingdom</div>
        <div class="list-box-option" data-coreui-value="ca">Canada</div>
      </div>
    </div>
  </div>
  <div class="form-text">We ship to these three for now.</div>
</div>
```

## Custom content

An option is an ordinary element, so it takes whatever markup belongs there. The toggle shows its text: `.list-box-option-label` when there is one, the option's own text otherwise — so an option with an icon and a description still reads as one word in the closed control.

### Icons

```html
<button class="form-control combobox-toggle" type="button"
    data-coreui-toggle="combobox"
    data-coreui-name="language"
    data-coreui-placeholder="Choose a language…">
</button>
<div class="popup combobox-popup">
  <div class="list-box">
    <div class="list-box-options" role="listbox" aria-label="Language">
      <div class="list-box-option" data-coreui-value="html">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true"><path d="M400 480H112a48.055 48.055 0 0 1-48-48V80a48.055 48.055 0 0 1 48-48h288a48.055 48.055 0 0 1 48 48v352a48.055 48.055 0 0 1-48 48ZM112 64a16.019 16.019 0 0 0-16 16v352a16.019 16.019 0 0 0 16 16h288a16.019 16.019 0 0 0 16-16V80a16.019 16.019 0 0 0-16-16Z"/></svg>
        <span class="list-box-option-label">HTML</span>
      </div>
      <div class="list-box-option" data-coreui-value="css">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true"><path d="M400 480H112a48.055 48.055 0 0 1-48-48V80a48.055 48.055 0 0 1 48-48h288a48.055 48.055 0 0 1 48 48v352a48.055 48.055 0 0 1-48 48ZM112 64a16.019 16.019 0 0 0-16 16v352a16.019 16.019 0 0 0 16 16h288a16.019 16.019 0 0 0 16-16V80a16.019 16.019 0 0 0-16-16Z"/></svg>
        <span class="list-box-option-label">CSS</span>
      </div>
      <div class="list-box-option" data-coreui-value="js">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true"><path d="M400 480H112a48.055 48.055 0 0 1-48-48V80a48.055 48.055 0 0 1 48-48h288a48.055 48.055 0 0 1 48 48v352a48.055 48.055 0 0 1-48 48ZM112 64a16.019 16.019 0 0 0-16 16v352a16.019 16.019 0 0 0 16 16h288a16.019 16.019 0 0 0 16-16V80a16.019 16.019 0 0 0-16-16Z"/></svg>
        <span class="list-box-option-label">JavaScript</span>
      </div>
    </div>
  </div>
</div>
```

### Descriptions

Wrap the name in `.list-box-option-label` and the second line in `.list-box-option-description`. The toggle shows the label alone.

```html
<button class="form-control combobox-toggle" type="button"
    data-coreui-toggle="combobox"
    data-coreui-name="plan"
    data-coreui-placeholder="Select a plan…">
</button>
<div class="popup combobox-popup">
  <div class="list-box">
    <div class="list-box-options" role="listbox" aria-label="Plan">
      <div class="list-box-option" data-coreui-value="free">
        <span class="list-box-option-label">Free</span>
        <span class="list-box-option-description">One project, community support</span>
      </div>
      <div class="list-box-option" data-coreui-value="team">
        <span class="list-box-option-label">Team</span>
        <span class="list-box-option-description">Unlimited projects, shared billing</span>
      </div>
      <div class="list-box-option" data-coreui-value="enterprise">
        <span class="list-box-option-label">Enterprise</span>
        <span class="list-box-option-description">SSO, audit log and a named contact</span>
      </div>
    </div>
  </div>
</div>
```

### Checkbox indicator

Nothing marks the selection on its own — `aria-selected` and the `.selected` background carry it. `indicator: "checkbox"` puts a checkbox in front of every option and keeps it in step with the selection. It is a decorative `<span>`, not an input, so it never takes the focus and never announces a second control per option.

```html
<button class="form-control combobox-toggle" type="button"
    data-coreui-toggle="combobox"
    data-coreui-name="status"
    data-coreui-indicator="checkbox"
    data-coreui-placeholder="Choose a status…"
    data-coreui-value="active">
</button>
<div class="popup combobox-popup">
  <div class="list-box">
    <div class="list-box-options" role="listbox" aria-label="Status">
      <div class="list-box-option" data-coreui-value="active">
        <span class="list-box-option-label">Active</span>
        <span class="list-box-option-description">Visible to users</span>
      </div>
      <div class="list-box-option" data-coreui-value="draft">
        <span class="list-box-option-label">Draft</span>
        <span class="list-box-option-description">Not yet published</span>
      </div>
      <div class="list-box-option" data-coreui-value="archived">
        <span class="list-box-option-label">Archived</span>
      </div>
    </div>
  </div>
</div>
```

### All together

```html
<button class="form-control combobox-toggle" type="button"
    data-coreui-toggle="combobox"
    data-coreui-name="priority"
    data-coreui-indicator="checkbox"
    data-coreui-placeholder="Set priority…">
</button>
<div class="popup combobox-popup">
  <div class="list-box">
    <div class="list-box-options" role="listbox" aria-label="Priority">
      <div class="list-box-option" data-coreui-value="low">
        <svg class="icon fg-success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true"><path d="M256 382.627 60.687 187.313l22.626-22.626L256 337.372l172.687-172.685 22.626 22.626z"/></svg>
        <span class="list-box-option-label">Low</span>
        <span class="list-box-option-description">Whenever there is room</span>
      </div>
      <div class="list-box-option" data-coreui-value="high">
        <svg class="icon fg-danger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true"><path d="M256 129.373 451.313 324.687l-22.626 22.626L256 174.628 83.313 347.313l-22.626-22.626z"/></svg>
        <span class="list-box-option-label">High</span>
        <span class="list-box-option-description">Next in the queue</span>
      </div>
    </div>
  </div>
</div>
```

## Search

`search` puts the List box's own search field at the top of the panel and hides what does not match. Because a hidden option leaves the navigation, everything downstream follows: the arrows skip it and the empty state appears when nothing is left. The focus moves into the field when the panel opens, and `aria-activedescendant` moves there with it, so typing and choosing happen in one place.

The field is a `.form-control.list-box-search` carrying `data-coreui-list-box-search`; put one in the panel yourself and it is used as it is, wherever you placed it. `searchPlaceholder` fills its placeholder and `ariaSearchLabel` its accessible name.

```html
<button class="form-control combobox-toggle" type="button"
    data-coreui-toggle="combobox"
    data-coreui-name="country"
    data-coreui-search="true"
    data-coreui-placeholder="Select a country…">
</button>
<div class="popup combobox-popup">
  <div class="list-box">
    <div class="list-box-options" role="listbox" aria-label="Country" style="max-height: 12rem; overflow-y: auto">
      <div class="list-box-option" data-coreui-value="us">United States</div>
      <div class="list-box-option" data-coreui-value="uk">United Kingdom</div>
      <div class="list-box-option" data-coreui-value="ca">Canada</div>
      <div class="list-box-option" data-coreui-value="au">Australia</div>
      <div class="list-box-option" data-coreui-value="de">Germany</div>
      <div class="list-box-option" data-coreui-value="fr">France</div>
      <div class="list-box-option" data-coreui-value="jp">Japan</div>
      <div class="list-box-option" data-coreui-value="br">Brazil</div>
      <div class="list-box-empty">No results found</div>
    </div>
  </div>
</div>
```

The panel is as tall as its content — cap it where you want a scroll container, with `max-height` and `overflow-y` on `.list-box-options`, as above.

### Matching past the accents

`searchNormalize` compares both sides without their diacritics, so `zoe` finds `Zoë` and `oe` finds both. It normalizes to `NFD` and drops the combining diacritics, which leaves the labels themselves untouched — only the comparison changes.

```html
<button class="form-control combobox-toggle" type="button"
    data-coreui-toggle="combobox"
    data-coreui-search="true"
    data-coreui-search-normalize="true"
    data-coreui-placeholder="Find a name…">
</button>
<div class="popup combobox-popup">
  <div class="list-box">
    <div class="list-box-options" role="listbox" aria-label="Name">
      <div class="list-box-option" data-coreui-value="zoe">Zoë</div>
      <div class="list-box-option" data-coreui-value="renee">Renée</div>
      <div class="list-box-option" data-coreui-value="joao">João</div>
      <div class="list-box-option" data-coreui-value="ana">Ana</div>
      <div class="list-box-empty">No results found</div>
    </div>
  </div>
</div>
```

### External search

`search: "external"` builds the same field and filters nothing. Every keystroke fires `search.coreui.combobox` with the `query`, and you answer with `setItems()` — the list shows what you hand it, so the query is yours to interpret. The value the user picked stays while the results change, and the toggle keeps its label when the next answer does not carry it.

## Groups

Group options in a `.list-box-section` and name it with a `.list-box-section-label`. The plugin adds `role="group"`; point `aria-labelledby` at the label so the group is announced with its name. A section whose options are all filtered out is hidden with its label.

```html
<button class="form-control combobox-toggle" type="button"
    data-coreui-toggle="combobox"
    data-coreui-name="language"
    data-coreui-placeholder="Select a language…">
</button>
<div class="popup combobox-popup">
  <div class="list-box">
    <div class="list-box-options" role="listbox" aria-label="Language">
      <div class="list-box-section" aria-labelledby="comboboxFrontend">
        <div class="list-box-section-label" id="comboboxFrontend">Frontend</div>
        <div class="list-box-option" data-coreui-value="html">HTML</div>
        <div class="list-box-option" data-coreui-value="css">CSS</div>
        <div class="list-box-option" data-coreui-value="js">JavaScript</div>
      </div>
      <div class="list-box-section" aria-labelledby="comboboxBackend">
        <div class="list-box-section-label" id="comboboxBackend">Backend</div>
        <div class="list-box-option" data-coreui-value="python">Python</div>
        <div class="list-box-option" data-coreui-value="ruby">Ruby</div>
        <div class="list-box-option" data-coreui-value="go">Go</div>
      </div>
    </div>
  </div>
</div>
```

## Multiple select

`multiple` toggles options instead of replacing the selection, and the panel stays open so several picks cost one opening. The toggle shows the one label while a single option is selected and `selectedLabel` past that — a function of the count and the number of options, or a string in which `{count}` and `{total}` are replaced. A selected value the list no longer carries, after an external search answer, counts in `{total}` as well, so the total never drops below the count. `selectionLimit` caps how many can be taken at once.

```html
<button class="form-control combobox-toggle" type="button"
    data-coreui-toggle="combobox"
    data-coreui-name="skills"
    data-coreui-multiple="true"
    data-coreui-indicator="checkbox"
    data-coreui-placeholder="Select skills…">
</button>
<div class="popup combobox-popup">
  <div class="list-box">
    <div class="list-box-options" role="listbox" aria-label="Skills">
      <div class="list-box-option" data-coreui-value="html">HTML</div>
      <div class="list-box-option" data-coreui-value="css">CSS</div>
      <div class="list-box-option" data-coreui-value="js">JavaScript</div>
      <div class="list-box-option" data-coreui-value="python">Python</div>
      <div class="list-box-option" data-coreui-value="ruby">Ruby</div>
    </div>
  </div>
</div>
```

## Sizing

The toggle carries `.form-control`, so `.form-control-sm` and `.form-control-lg` reach it unchanged and it stands exactly as tall as a text input of the same size.

```html
<button class="form-control form-control-sm combobox-toggle mb-4" type="button"
    data-coreui-toggle="combobox"
    data-coreui-placeholder="Small select…">
</button>
<div class="popup combobox-popup">
  <div class="list-box">
    <div class="list-box-options" role="listbox" aria-label="Small">
      <div class="list-box-option" data-coreui-value="1">Option one</div>
      <div class="list-box-option" data-coreui-value="2">Option two</div>
    </div>
  </div>
</div>

<button class="form-control combobox-toggle mb-4" type="button"
    data-coreui-toggle="combobox"
    data-coreui-placeholder="Default select…">
</button>
<div class="popup combobox-popup">
  <div class="list-box">
    <div class="list-box-options" role="listbox" aria-label="Default">
      <div class="list-box-option" data-coreui-value="1">Option one</div>
      <div class="list-box-option" data-coreui-value="2">Option two</div>
    </div>
  </div>
</div>

<button class="form-control form-control-lg combobox-toggle" type="button"
    data-coreui-toggle="combobox"
    data-coreui-placeholder="Large select…">
</button>
<div class="popup combobox-popup">
  <div class="list-box">
    <div class="list-box-options" role="listbox" aria-label="Large">
      <div class="list-box-option" data-coreui-value="1">Option one</div>
      <div class="list-box-option" data-coreui-value="2">Option two</div>
    </div>
  </div>
</div>
```

## Disabled

Set `data-coreui-disabled="true"` (or the `disabled` option) to turn the whole control off: the panel never opens, the list box is disabled with it, and a button toggle gets the `disabled` attribute. A single option opts out with `.disabled` and `aria-disabled="true"`, which takes it out of the keyboard order and out of every selection method.

```html
<button class="form-control combobox-toggle mb-4" type="button"
    data-coreui-toggle="combobox"
    data-coreui-placeholder="Cannot interact…" data-coreui-disabled="true">
</button>
<div class="popup combobox-popup">
  <div class="list-box">
    <div class="list-box-options" role="listbox" aria-label="Disabled">
      <div class="list-box-option" data-coreui-value="1">Option one</div>
      <div class="list-box-option" data-coreui-value="2">Option two</div>
    </div>
  </div>
</div>

<button class="form-control combobox-toggle" type="button"
    data-coreui-toggle="combobox"
    data-coreui-placeholder="Select an option…">
</button>
<div class="popup combobox-popup">
  <div class="list-box">
    <div class="list-box-options" role="listbox" aria-label="Availability">
      <div class="list-box-option" data-coreui-value="1">Available</div>
      <div class="list-box-option disabled" aria-disabled="true" data-coreui-value="2">Unavailable</div>
      <div class="list-box-option" data-coreui-value="3">Available</div>
    </div>
  </div>
</div>
```

## Form submission

The plugin inserts a hidden `<select class="combobox-select">` right after the toggle and keeps its selected options in step with the selection, so a combobox posts like a `<select>`, and like a `<select multiple>` in `multiple` mode: one key per value. Set `name` to submit it; without a name the combobox is not submitted with the form. The select carries `.input-group-ignore`, so a toggle in an [input group](https://coreui.io/bootstrap/docs/forms/input-group/) keeps its corners.

```html
<!-- What you write -->
<button class="form-control combobox-toggle" type="button"
        data-coreui-toggle="combobox"
        data-coreui-name="country">
</button>
<div class="popup combobox-popup">…</div>

<!-- What the plugin inserts after the toggle -->
<select class="combobox-select input-group-ignore" name="country" tabindex="-1" aria-hidden="true">
  <option value="us" selected>us</option>
</select>
```

In `multiple` mode three selections post `country=us&country=uk&country=ca`, so read them on the server as a list. With nothing selected a single combobox posts `country=`, as a native select with an empty first option does, and a `multiple` one posts nothing, as a `<select multiple>` does. A disabled combobox is not submitted, like any disabled field.

## Validation

The hidden `<select>` takes part in the browser's validation, so `required` blocks the submit while nothing is selected. When a validation reports it, the plugin lays it along the start of the toggle, so the browser shows its message under the combobox, and the focus it gets goes to the toggle. The state shows on the toggle as the `.is-*` class, and the message that follows the toggle is added to its `aria-describedby` while the state is `'invalid'`.

```html
<form class="row g-4" data-coreui-validate novalidate>
  <div class="col-md-6">
    <label for="cbValidationCountry" class="form-label">Country (required)</label>
    <button class="form-control combobox-toggle" type="button" id="cbValidationCountry"
        data-coreui-toggle="combobox"
        data-coreui-name="country"
        data-coreui-required="true"
        data-coreui-placeholder="Pick a country…">
    </button>
    <div class="popup combobox-popup">
      <div class="list-box">
        <div class="list-box-options" role="listbox" aria-label="Country">
          <div class="list-box-option" data-coreui-value="us">United States</div>
          <div class="list-box-option" data-coreui-value="uk">United Kingdom</div>
          <div class="list-box-option" data-coreui-value="ca">Canada</div>
        </div>
      </div>
    </div>
    <div class="invalid-feedback">Pick a country.</div>
  </div>
  <div class="col-md-6">
    <label for="cbValidationRole" class="form-label">Role</label>
    <button class="form-control combobox-toggle is-invalid" type="button" id="cbValidationRole"
        data-coreui-toggle="combobox"
        data-coreui-name="role"
        data-coreui-value="admin">
    </button>
    <div class="popup combobox-popup">
      <div class="list-box">
        <div class="list-box-options" role="listbox" aria-label="Role">
          <div class="list-box-option" data-coreui-value="admin">Admin</div>
          <div class="list-box-option" data-coreui-value="editor">Editor</div>
        </div>
      </div>
    </div>
    <div class="invalid-feedback">This project already has an admin.</div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit</button>
  </div>
</form>
```

The state comes from four places, in this order:

- The `validationState` option: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`.
- An `.is-invalid` or `.is-valid` class written on the toggle in the markup, for example by a server that has already checked the value. It is read once, when the component starts.
- A validation that reports the hidden select invalid: a submit, `checkValidity()` or `reportValidity()`, which the form plugin and the [stepper](https://coreui.io/bootstrap/docs/forms/stepper/) call as well. From then on the toggle shows it invalid whenever the value is invalid, until a native reset of the form.
- In a form with `data-coreui-validate`, the `:user-invalid` state of the hidden select, and with `data-coreui-validate="valid"` also its `:user-valid` state.

A state you give, with the option or with the class, is a verdict on the value it was given for, so the next change of the value the user makes in the list drops it; picking the option a single combobox already holds keeps it. What your code does in a `change.coreui.combobox`, `input` or `change` listener while the pick runs counts as your change, so a state you give there stays, and a change through `setValue()`, `clear()` or `setItems()` keeps the state. To set it again, call `setValidationState()`: it updates the state without rebuilding the combobox, replaces a class written on the toggle, so `setValidationState(null)` withdraws that class. While the given state is `'invalid'`, the select blocks the submit with the text of the linked message, or `Invalid value.` when there is none; a disabled combobox does not block. A native reset of the form puts back the value the combobox started with and drops a state given before it; a state you give from a `reset` listener on the form, or right after `form.reset()`, stays. A message placed where the stylesheet does not show it for the toggle can be named in `data-coreui-invalid-feedback` on the toggle.

The toggle is a `<button>`, a role that has neither an invalid nor a required state, so it carries neither `aria-invalid` nor `aria-required`: a screen reader learns what is wrong from the message in its description, and that the field is required only from its label, so say it there, as the first field above does.

## Usage

### Via data attributes

Add `data-coreui-toggle="combobox"` to the toggle and the plugin initializes it on page load — soon enough for its `value` to reach the toggle text and the hidden select before anything is submitted.

| Attribute | Description |
| --- | --- |
| `data-coreui-toggle="combobox"` | Initializes the combobox on the toggle button. |
| `data-coreui-value` (on an option) | The value the option stands for. Defaults to the option's text. |
| `data-coreui-value` (on the toggle) | The values that start selected. In `multiple` mode a comma separated list, since markup has no other way to name several, which also means a value of its own cannot contain a comma there; everywhere else one value, commas included. Configuration takes an array instead. |
| `data-coreui-name` | `name` of the hidden select the plugin inserts for form submission. In `multiple` mode it submits one key per value. |
| `data-coreui-placeholder` | Text shown in the toggle while nothing is selected. |
| `data-coreui-multiple="true"` | Toggles options instead of replacing the selection, and keeps the panel open. |
| `data-coreui-search="true"` | Builds the search field at the top of the panel. |
| `data-coreui-indicator="checkbox"` | Puts a checkbox in front of every option. |

```html
<button class="form-control combobox-toggle" type="button" data-coreui-toggle="combobox" data-coreui-name="country">
</button>
<div class="popup combobox-popup">
  <div class="list-box">
    <div class="list-box-options" role="listbox" aria-label="Country">
      <div class="list-box-option" data-coreui-value="us">United States</div>
      <div class="list-box-option" data-coreui-value="uk">United Kingdom</div>
    </div>
  </div>
</div>
```

### Via JavaScript

```js
const combobox = new coreui.Combobox('#myCombobox', {
  name: 'country',
  placeholder: 'Pick a country…',
  search: true
})
```

With no panel in the markup, `items` builds one — the same array a [List box](https://coreui.io/bootstrap/docs/components/list-box/) takes:

```js
const combobox = new coreui.Combobox('#myCombobox', {
  items: [
    { value: 'us', label: 'United States' },
    { label: 'Europe', items: [{ value: 'uk', label: 'United Kingdom' }] }
  ]
})
```

A combobox whose list depends on another field, such as the cities of the chosen country, sets `resetSelectionOnItemsChange: true`: `setItems()` with different values then drops the value and takes the item marked `selected`. Leave it off with `search: 'external'`, where every answer brings different values and would drop the pick.

### Options

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | [Default value](https://coreui.io/bootstrap/docs/getting-started/javascript/#sanitizer) | Object which contains allowed attributes and tags for the labels rendered from `items`. |
| `ariaSearchLabel` | string | `'Search options'` | Accessible name of the search field. An input with its own `aria-label` keeps it. |
| `caretIcon` | string | `'<svg …>'` | The caret drawn at the end of the toggle, as inline SVG, sanitized against the SVG allow list whatever `allowList` holds; its last element becomes the caret. Empty string, or a `.combobox-caret` already in the markup, and the plugin draws none. |
| `container` | string, element, boolean | `false` | Where the panel is mounted while open. `true` means `<body>`; leave it alone and the panel goes next to the toggle unless an ancestor would clip it. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `disabled` | boolean | `false` | Turns the control off: the panel never opens and the list box is disabled. The combobox sets the `.disabled` class and, on a button toggle, the `disabled` attribute from it. |
| `html` | boolean | `false` | Parses the labels rendered from `items` as HTML instead of inserting them as text. |
| `indicator` | string | `'none'` | `'checkbox'` puts a decorative checkbox in front of every option. |
| `items` | array | `[]` | The options to render: `{ value, label, description, disabled, selected }`, or `{ label, items, disabled }` for a section, where `disabled: true` disables every item in it. Replaces whatever the panel already holds. |
| `multiple` | boolean | `false` | Toggles options instead of replacing the selection, and keeps the panel open. |
| `name` | string, null | `null` | Name of the hidden select the value is submitted under, inserted right before the toggle. With `multiple` it posts one key per value, as a `<select multiple>` does: `tags=a&tags=b&tags=c`. Without a name the combobox is not submitted with the form. |
| `placeholder` | string | `''` | Text shown in the toggle while nothing is selected. |
| `required` | boolean | `false` | Makes the hidden select required, so an empty combobox blocks the submit. See [Validation](#validation). |
| `resetSelectionOnItemsChange` | boolean | `false` | Drops the value when `setItems()` brings items with different values, then takes the items marked `selected`. For a list that depends on another field. |
| `sanitize` | boolean | `true` | Enables the sanitization of the labels rendered from `items` with `html`, and of the `caretIcon`. |
| `sanitizeFn` | null, function | `null` | Sanitization function of your own, used instead of the built-in one. |
| `search` | boolean, string | `false` | Builds a search field at the top of the panel. `true` filters the list itself; `'external'` filters nothing and fires `search.coreui.combobox` instead. |
| `searchNormalize` | boolean | `false` | Compares both sides of the filter without their diacritics, so `zoe` matches `Zoë`. |
| `searchPlaceholder` | string | `'Search'` | Placeholder of the built search field. |
| `selectedLabel` | string, function | `` (count) => `${count} selected` `` | What the toggle shows past one selected option in `multiple` mode. A function `(count, total) => string`, or a string in which `{count}` and `{total}` are replaced. |
| `selectionLimit` | null, number | `null` | How many options can be selected at once in `multiple` mode. |
| `typeahead` | boolean | `true` | Move the highlight to the option matching what the user types. The buffer resets after 500 ms. |
| `validationState` | string, null | `null` | The state the combobox shows: `'valid'`, `'invalid'` or a state of `$form-validation-states`. `'invalid'` blocks the submit. The user's pick of a different value drops it. See [Validation](#validation). |
| `value` | string, array, null | `null` | Initially selected values. A string is one value, commas included; pass an array for several. A `.selected` class in the markup does not select an option. |

### Methods

| Method | Description |
| --- | --- |
| `clear()` | Empties the selection. |
| `dispose` | Destroys the combobox and removes what it created: the hidden select, the caret, the value element, the search field and the panel, or the parts of the panel your markup lacked. A panel from your markup goes back after the toggle, and a value element from your markup gets its content back. A combobox disposed while open is closed first. The other classes and attributes the combobox wrote on the toggle stay; a new instance writes them again from its options. |
| `getInstance` | Static method which allows you to get the combobox instance associated to a DOM element, you can use it like this: `coreui.Combobox.getInstance(element)`. |
| `getOrCreateInstance` | Static method which returns a combobox instance associated to a DOM element or creates a new one in case it wasn't initialized. You can use it like this: `coreui.Combobox.getOrCreateInstance(element)`. |
| `getValue()` | The selected value — an array in `multiple` mode, a string or `null` otherwise. |
| `hide` | Closes the panel. |
| `setValidationState(state)` | Gives the field a validation state (`'valid'`, `'invalid'` or a state added to `$form-validation-states`), or drops it with `null`. The value stays. See [Validation](#validation). |
| `setItems(items)` | Rebuilds the list from an `items` array. The value stays, also when the new items no longer carry it, and the toggle keeps the label it had; items marked `selected` join a multiple value, or a single one that is empty. With `resetSelectionOnItemsChange` new values drop the value first. |
| `setValue(value)` | Replaces the selection with `value` (a string, an array, or `null` to empty it), in the order given and up to `selectionLimit`. A value the list does not carry is skipped unless it is already selected. A disabled option and a disabled combobox take it, as a native select takes a value from a script; only the user is kept out. It fires no change event, since the code that calls it already holds the value. A number is taken as its string, as the `value` option takes it; a value of another type throws the `TypeError` the constructor throws. |
| `show` | Opens the panel. |
| `toggle` | Opens the panel, or closes it when it is open. |
| `update` | Re-reads the panel: new options get their roles and ids, an option that is now `hidden` or gone leaves the navigation, and the toggle text is read again. |

### Events

Events fire on the toggle button.

| Event type | Description |
| --- | --- |
| `change.coreui.combobox` | Fired after the value changed and the selection settled, from the list, `clear()` or a native form reset, along with the native `input` and `change` of the value field; `setValue()` does not fire it; `event.value` is what `getValue()` would return. A call that leaves the value as it was does not fire it. |
| `hidden.coreui.combobox` | Fired when the panel has been hidden. |
| `hide.coreui.combobox` | Fires immediately when `hide` is called. |
| `search.coreui.combobox` | Fired on every keystroke in the search field with `search: 'external'`; `event.query` is what was typed. Nothing is filtered — answer with `setItems()`. |
| `selectionLimit.coreui.combobox` | Fired when `selectionLimit` refuses a pick or an item `setItems()` marks selected; `setValue()` trims to the limit without it. `event.limit` is the limit and `event.value` the value that did not fit. |
| `show.coreui.combobox` | Fires immediately when `show` is called. |
| `shown.coreui.combobox` | Fired when the panel has been made visible. |

```js
const myCombobox = document.getElementById('myCombobox')
myCombobox.addEventListener('change.coreui.combobox', event => {
  console.log(event.value)
})
```

## Accessibility

The toggle is a real `<button>` carrying `aria-haspopup="listbox"` and `aria-expanded`; name it with a `<label for>` or an `aria-label`. The panel is a [List box](https://coreui.io/bootstrap/docs/components/list-box/), so `role="listbox"` sits on `.list-box-options` and `role="option"` on every option, with `aria-selected` kept in step with the selection — name the list itself with `aria-label` or `aria-labelledby` on `.list-box-options`.

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

Everything inside it — options, section labels and the checkbox indicator — is a [List box](https://coreui.io/bootstrap/docs/components/list-box/) and takes its `--cui-list-box-*` variables. `.list-box` declares them itself, so a value set on `.combobox-popup` or on `:root` does not reach it: set them with a rule on `.combobox-popup .list-box`, which covers the panels of Combobox, Autocomplete and Multi Select alike. The frame of the toggle is a [`.form-control`](https://coreui.io/bootstrap/docs/forms/form-control/) and takes the `--cui-control-*` properties.
