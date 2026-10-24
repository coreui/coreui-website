# Bootstrap 6 Chip Input

> Bootstrap Chip Input component for CoreUI — create tag-like multi-value inputs for skills, categories, or recipients with keyboard support, selection, and form integration.

## Overview

The CoreUI **Bootstrap Chip Input component** lets users enter multiple values as chips inside a single field. Use it as a tag input, multi-value selector, or token field for skills, categories, email recipients, and more. The chip input component supports keyboard-friendly entry, chip removal, and optional selection for bulk actions.

- Type values and press `Enter` (or a separator) to create chips.
- Chips can be removable and selectable.
- The input stays inline and grows as you type.
- Full form integration through a hidden field with a configurable `name`, which the browser validates like any field.

The chip input is built on top of the [Chip set](https://coreui.io/bootstrap/docs/components/chip-set/) component, so it inherits the same roving focus and keyboard navigation between chips. Its public API and events are unchanged.

## When to use Chip Input

Use the Bootstrap Chip Input component when you need:

- A **tag input** or **token field** for free-form multi-value entry
- An **email or recipient input** where users add multiple addresses
- A **skills or category selector** in forms
- A **filterable multi-select** that integrates with standard HTML forms

## Basic example

Wrap chips and add `data-coreui-chip-input` to enable behavior.

```html
<div class="chip-input" data-coreui-chip-input data-coreui-name="chipInputBasicExample" data-coreui-placeholder="Add a skill...">
  <label class="chip-input-label" for="skillsInputBasic">Skills:</label>
  <span class="chip">JavaScript</span>
  <span class="chip">TypeScript</span>
  <span class="chip">Accessibility</span>
</div>
```

> **Note:** The `` is created automatically by the component when initialized. You can also add it manually in the markup if preferred. A hidden `` is generated alongside it to carry the chip values, separated by commas, and it takes its name from `data-coreui-name` (e.g. `data-coreui-name="chipInputBasicExample"`). Without that attribute the field has no name, so the chips are not submitted with the form.

```html
<div class="chip-input" data-coreui-chip-input data-coreui-name="chipInputBasicExample" data-coreui-placeholder="Add a skill...">
  <label class="chip-input-label" for="skillsInputBasic">Skills:</label>
  <span class="chip">JavaScript</span>
  <span class="chip">TypeScript</span>
  <span class="chip">Accessibility</span>
  <input type="text" id="skillsInputBasic" class="chip-input-field" placeholder="Add a skill...">
</div>
```

## Theme variants

Color a chip with a [`.theme-*` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) to represent categories, status, or priority.

```html
<div class="chip-input" data-coreui-chip-input data-coreui-name="issues" data-coreui-placeholder="Add label...">
  <span class="chip theme-primary">Feature</span>
  <span class="chip theme-success">Approved</span>
  <span class="chip theme-warning">Needs review</span>
  <span class="chip theme-danger">Blocking</span>
</div>
```

In the example below, the chip color is assigned dynamically based on the chip text using the `chipClassName` callback. Each value (e.g., `Feature` or `Blocking`) maps to a theme class, so chips remain visually consistent even when added programmatically.

```html
<div id="chipVariants" class="chip-input"></div>
```

The JavaScript below initializes the example:

```js
const chipInputElement = document.querySelector('#chipVariants')
const chipInput = new coreui.ChipInput(chipInputElement, {
  // Class is resolved dynamically from chip value.
  chipClassName(value) {
    const variants = {
      approved: 'theme-success',
      blocking: 'theme-danger',
      feature: 'theme-primary',
      'needs review': 'theme-warning'
    }

    return variants[value.trim().toLowerCase()] || 'theme-secondary'
  },
  placeholder: 'Add a bug...'
})

chipInput.add('Feature')
```

## Sizing

Use `chip-input-sm` and `chip-input-lg` to match surrounding form controls. Default size is provided by `.chip-input` without a size modifier.

```html
<div class="chip-input chip-input-sm mb-4" data-coreui-chip-input data-coreui-placeholder="Add small tag...">
  <label class="chip-input-label" for="skillsInputSm">Small</label>
  <span class="chip">HTML</span>
</div>

<div class="chip-input mb-4" data-coreui-chip-input data-coreui-placeholder="Add default tag...">
  <label class="chip-input-label" for="skillsInputMd">Default</label>
  <span class="chip">JavaScript</span>
</div>

<div class="chip-input chip-input-lg" data-coreui-chip-input data-coreui-placeholder="Add large tag...">
  <label class="chip-input-label" for="skillsInputLg">Large</label>
  <span class="chip">TypeScript</span>
</div>
```

## Empty state

Start with just the input and let users add chips as they type.

```html
<div class="chip-input" data-coreui-chip-input data-coreui-name="tags" data-coreui-placeholder="Start typing tags..."></div>
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place. The label goes inside the container as `.chip-input-label` — that is the one the component points at the text input it builds.

```html
<div class="form-field">
  <div class="chip-input" data-coreui-chip-input data-coreui-name="techStack" data-coreui-placeholder="Add package...">
    <label class="chip-input-label" for="techStackInput">Tech stack</label>
    <span class="chip">Vue</span>
    <span class="chip">Vite</span>
  </div>
  <div class="form-text">Press Enter or comma to add a value.</div>
</div>
```

## Validation

The chip input carries its chips in a hidden `<textarea>` the browser validates, so `required` blocks the submit of an empty field and the browser shows its message over the chip input. The state shows on the frame and on the text field, and the message that follows the frame is linked to the text field, the way the [form plugin](https://coreui.io/bootstrap/docs/forms/validation/) does for a native field.

```html
<form class="row g-4" data-coreui-validate novalidate>
  <div class="col-12">
    <div class="chip-input" data-coreui-chip-input data-coreui-name="topics" data-coreui-required="true" data-coreui-placeholder="Add a topic...">
      <label class="chip-input-label">Topics</label>
    </div>
    <div class="invalid-feedback">Add at least one topic.</div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit</button>
  </div>
</form>
```

The state comes from four places, in this order:

- The `validationState` option: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`.
- An `.is-invalid` or `.is-valid` class written on the chip input in the markup, for example by a server that has already checked the value. It is read once, when the component starts.
- A validation that reports the field invalid: a submit, `checkValidity()` or `reportValidity()`, which the form plugin and the [stepper](https://coreui.io/bootstrap/docs/forms/stepper/) call as well. From then on the chip input shows it invalid whenever its value is invalid, until a native reset of the form.
- In a form with `data-coreui-validate`, the `:user-invalid` state of the hidden field, and with `data-coreui-validate="valid"` also its `:user-valid` state.

A state you give, with the option or with the class, is a verdict on the chips it was given for, so the next change of the chips the user makes drops it: a value confirmed with <kbd>Enter</kbd>, a separator or by leaving the text field, a paste, or a chip removed with its button, <kbd>Backspace</kbd> or <kbd>Delete</kbd>. An action that changes nothing, such as entering a value the field already holds, keeps it. One action drops the state once, at its first change, so a state you give from a `change.coreui.chip-input`, `input` or `change` listener while the action runs stays. A change your own code makes with `add()`, `remove()` or `clear()` keeps it. To set it again, call `setValidationState()`: it updates the state without rebuilding the field, replaces a class written on the chip input, so `setValidationState(null)` withdraws that class. A message placed where the stylesheet does not show it for the chip input can be named in `data-coreui-invalid-feedback` on the chip input. While the given state is `'invalid'`, the field blocks the submit with the text of the linked message, or `Invalid value.` when there is none; a disabled or read-only chip input does not block. A native reset of the form puts back the chips the field started with, the same elements, and drops a state given before it; a state you give from a `reset` listener on the form, or right after `form.reset()`, stays.

```html
<div class="chip-input is-invalid" data-coreui-chip-input data-coreui-name="recipients">
  <label class="chip-input-label">Recipients</label>
  <span class="chip">ana@example.com</span>
  <span class="chip">bob@example</span>
</div>
<div class="invalid-feedback">bob@example is not a full address.</div>
```

In the controlled mode (`create: false`) there is no hidden field: a given state shows on the frame and the text field but does not block, and `required` is left to the component that owns the value.

## Disabled

Set disabled state on the component to make the input and managed chips non-interactive.
Use the `data-coreui-disabled="true"` option. A single chip is disabled with `data-coreui-disabled="true"` on the chip.
For disabled, non-removable chips, combine it with `data-coreui-removable="false"`.

```html
<div class="chip-input" data-coreui-chip-input data-coreui-disabled="true" data-coreui-removable="false" data-coreui-placeholder="Input disabled">
  <span class="chip">Read only</span>
  <span class="chip">Locked</span>
</div>
```

## Readonly

Use readonly state when chips should stay visible and focusable, but values must not change.
Set `data-coreui-readonly="true"` (or `readonly: true` in JavaScript) to block adding and removing chips.

```html
<div class="chip-input" data-coreui-chip-input data-coreui-readonly="true" data-coreui-placeholder="Read-only values">
  <span class="chip">JavaScript</span>
  <span class="chip">TypeScript</span>
</div>
```

## Selectable chips

Enable selection for chips managed by Chip Input.
In this example, `select.coreui.chip-input` updates a live list of selected values below the field.

```html
<div id="chipSelectable" class="chip-input">
  <span class="chip">Design</span>
  <span class="chip">Backend</span>
  <span class="chip" data-coreui-selected="true">QA</span>
  <span class="chip" data-coreui-selected="true">DevOps</span>
</div>
<p class="form-text mt-3 mb-0">Selected chips: <span id="chipSelectableOutput">None</span></p>
```

## Usage

Initialize the Bootstrap Chip Input component via data attributes or JavaScript. The component creates a hidden `<textarea>` for the chip values; give it a `name` and the chips are submitted with the form.

### Via data attributes

Add `data-coreui-chip-input` to initialize the chip input component. Options can be passed as `data-coreui-*` attributes.

```html
<div class="chip-input" data-coreui-chip-input data-coreui-name="skills" data-coreui-placeholder="Add tags..." data-coreui-separator=","></div>
```

When initialized, Chip Input creates a hidden `<textarea>` for the chip values. It is submitted only
once you give it a name through `name` (or `data-coreui-name`).

### Via JavaScript

```js
const chipInputElement = document.querySelector('.chip-input')
const chipInput = coreui.ChipInput.getOrCreateInstance(chipInputElement, {
  separator: ',',
  maxChips: 5
})
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-animation="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-custom-class="beautifier"` rather than `data-coreui-customClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaAddedAnnouncement` | string, function | `'added'` | Wording appended to the values of the added chips when their addition is announced. A function receives the added values and returns the whole message. |
| `ariaRemoveLabel` | string \| function | `'Remove'` | Names each chip's remove button with the chip's label: a string has `{label}` replaced by it, or gets it appended when there is no `{label}` (`Remove React`); a function receives the label and returns the whole name. |
| `ariaRemovedAnnouncement` | string, function | `'removed'` | Wording appended to the values of the removed chips when their removal is announced. A function receives the removed values and returns the whole message. |
| `chipClassName` | string \| function \| null | `null` | Adds classes to chips. Use a string for all chips or a function `(value) => className` for per-chip styling. |
| `create` | boolean | `true` | Turns typed text into chips. Set to `false` for the controlled mode: chips come only from `add()` — a host component's selection, say — typing never creates one, and no hidden field is rendered (the host owns the value). |
| `createOnBlur` | boolean | `true` | Create a chip from the input value when the input loses focus. |
| `disabled` | boolean | `false` | Disables the input and marks managed chips as non-interactive. |
| `filter` | boolean | `false` | Turns the chips into filter chips: a check icon is shown on the selected ones. Implies `selectable`. |
| `id` | string \| null | auto-generated | Custom id for the generated hidden field. |
| `maxChips` | number \| null | `null` | Maximum number of chips allowed. `null` for unlimited. |
| `name` | string \| null | `null` | Name for the generated hidden field, which is what carries the chips into a form submission. Without a name that field is not submitted. |
| `placeholder` | string | `''` | Placeholder text for dynamically created inputs. |
| `readonly` | boolean | `false` | Prevents adding and removing chips while keeping input focus behavior. |
| `removable` | boolean | `true` | Add remove buttons to created chips. |
| `removeIcon` | string | SVG | HTML string for the remove button icon. |
| `required` | boolean | `false` | Makes the hidden field required, so an empty chip input blocks the submit, and marks the text field `aria-required`. See [Validation](#validation). |
| `selectable` | boolean | `false` | Enables selection behavior for chips managed by Chip Input. |
| `selectedIcon` | string | SVG | HTML string used as the check icon on selected filter chips. |
| `selectionMode` | string | `'multiple'` | Selection behavior: `'multiple'` allows several active chips, `'single'` keeps at most one. |
| `separator` | string \| null | `','` | Character that triggers chip creation when typed. Set to `null` to disable. |
| `typeahead` | boolean | `true` | Moves focus to the chip whose value starts with the typed characters. |
| `unique` | boolean | `true` | Refuses a chip whose value the field already holds. A Chip Input turns this on, where a bare [Chip Set](https://coreui.io/bootstrap/docs/components/chip-set/) leaves it off. |
| `validationState` | string \| null | `null` | The state the chip input shows: `'valid'`, `'invalid'` or a state of `$form-validation-states`. `'invalid'` blocks the submit. The user's next change of the chips drops it. See [Validation](#validation). |

### Methods

| Method | Description |
| --- | --- |
| `add(value)` | Adds a chip with the given value. Returns the chip element or `null` if rejected. |
| `clear()` | Removes all chips. |
| `clearSelection()` | Deselects all chips without removing them. |
| `dispose()` | Destroys the component instance and the chip instances it created, and removes the fields it built. The chips stay in the document. |
| `focus()` | Focuses the ghost input. |
| `getInstance(element)` | Static method that returns the instance associated with a DOM element, or `null`. |
| `getOrCreateInstance(element, config)` | Static method that returns the instance associated with a DOM element, creating it when there is none. |
| `getSelectedValues()` | Returns an array of selected chip values. |
| `getValues()` | Returns an array of all chip values. |
| `remove(chipOrValue)` | Removes a chip by element reference or value string. When the chip had focus, focus moves to the next chip, else the previous one, else the text field. Returns `true` if removed. |
| `removeSelected()` | Removes all currently selected chips. |
| `setValidationState(state)` | Gives the field a validation state (`'valid'`, `'invalid'` or a state added to `$form-validation-states`), or drops it with `null`. The value stays. See [Validation](#validation). |
| `selectChip(chip)` | Selects a specific chip element. |

```js
const chipInputElement = document.querySelector('.chip-input')
const chipInput = coreui.ChipInput.getOrCreateInstance(chipInputElement)

chipInput.add('JavaScript')
chipInput.add('TypeScript')

// eslint-disable-next-line no-console
console.log(chipInput.getValues())

chipInput.remove('JavaScript')
chipInput.clear()
```

### Events

| Event | Description |
| --- | --- |
| `add.coreui.chip-input` | Fired before a chip is added. Call `event.preventDefault()` to cancel. |
| `change.coreui.chip-input` | Fired after any chip is added or removed; `event.value` is the array of chip values. `clear()` and `removeSelected()` fire it once, after the last chip is gone and only when the chips changed, and the value field sends one native `input` and `change` when its value changed, while `remove.coreui.chip-input` still fires for every chip. |
| `input.coreui.chip-input` | Fired when the inline input value changes; `event.value` is the typed text, not the chips. Contains `relatedTarget`. |
| `remove.coreui.chip-input` | Fired before a chip is removed. Call `event.preventDefault()` to cancel. |
| `select.coreui.chip-input` | Fired when chip selection changes. Contains `selected`. A removal fires it too, and `clear()` and `removeSelected()` fire it once, together with `change`. |

```js
const chipInputElement = document.querySelector('.chip-input')

chipInputElement.addEventListener('add.coreui.chip-input', event => {
  if (event.value.length < 2) {
    event.preventDefault()
  }
})

chipInputElement.addEventListener('input.coreui.chip-input', event => {
  // eslint-disable-next-line no-console
  console.log('Input value:', event.value)
})

chipInputElement.addEventListener('change.coreui.chip-input', event => {
  // eslint-disable-next-line no-console
  console.log('Current values:', event.value)
})
```

## Keyboard behavior

### When input is focused

| Key | Action |
| --- | --- |
| `Enter` | Create chip from current input value |
| `,` (or separator) | Create chip from current input value |
| `Backspace` / `Delete` | When input is empty, move focus to the last chip |
| `←` | When cursor is at start, move focus to the last chip |
| `Escape` | Clear selection, clear input, and blur |

### When a chip is focused

| Key | Action |
| --- | --- |
| `Enter` / `Space` | Toggle selection (selectable chips) |
| `Backspace` / `Delete` | Remove the chip and move focus to the next chip, else the previous one, else the text field (removable chips) |
| `←` | Move to previous chip |
| `→` | Move to next chip |
| `Home` | Move to first chip |
| `End` | Move to last chip |
| `Shift` + `←` / `→` | Move focus and add the chip it lands on to the selection (selectable chips, `selectionMode: 'multiple'`) |
| `Shift` + `Home` / `End` | Extend the selection to the first or last chip (selectable chips, `selectionMode: 'multiple'`) |
| `Ctrl` / `Cmd` + `A` | Select every chip (selectable chips, `selectionMode: 'multiple'`) |

## Accessibility

The Bootstrap Chip Input component follows WAI-ARIA patterns to ensure the chip input is fully usable with keyboards and assistive technologies.

- Associate a `<label>` with the ghost input for screen readers.
- Chips are focusable and keyboard navigable when initialized by the plugin.
- Each remove button the component creates is named with `ariaRemoveLabel` and the chip's label, `Remove <label>` by default.
- Adding and removing chips is announced through [`announce()`](https://coreui.io/bootstrap/docs/accessibility/screen-readers/#announcing-messages) in the live region of the page, or of the modal dialog around the set, one message per update: the values the set did not hold before, or else the values it no longer holds, joined with commas as in `Vue, Svelte added`, and nothing while the set is hidden; customize the wording with the `ariaAddedAnnouncement` and `ariaRemovedAnnouncement` options. A function in place of the word receives the values and returns the whole message, so a page can put the word first, agree it with the number of chips or give a count for a long list, as in `(values) => values.length > 3 ? values.length + ' chips added' : values.join(', ') + ' added'`.
- Use a descriptive `aria-label` or `<label>` on the chip input container to communicate its purpose (e.g., "Add skills" or "Recipients").
- An `aria-describedby` on the chip input element moves to the text field, after the field's own ids, and the element gets it back on dispose; while the state is `'invalid'` the error message follows it.

## Customizing

### CSS variables

A chip input is a `.form-control-group`, so it reads the group's `--cui-control-*` tokens; `.chip-input` only re-points the ones it sets differently — padding, border colour and radius, and the gap between chips. Override any group token on the element to restyle a single chip input.

```scss
$chip-input-tokens: () !default;
$chip-input-tokens: defaults(
  (
    --cui-control-padding-y: .25rem,
    --cui-control-padding-x: .75rem,
    --cui-control-border-color: var(--cui-border-color),
    --cui-control-border-radius: var(--cui-radius-4),
    --cui-control-group-gap: .375rem,
  ),
  $chip-input-tokens
);
```

### Sass maps

Each size is one entry, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$chip-input-sizes: defaults(
  (
    "sm": (
      padding-y:     .125rem,
      padding-x:     .5rem,
      border-radius: var(--cui-radius-3),
      gap:           .125rem,
    ),
    "lg": (
      padding-y:     .375rem,
      padding-x:     1rem,
      border-radius: var(--cui-radius-5),
      gap:           .5rem,
    ),
  ),
  $chip-input-sizes
);
```
