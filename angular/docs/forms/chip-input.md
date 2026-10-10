# Angular Chip Input Component

> Angular Chip Input component lets users enter multiple values as chips in one field, with keyboard entry, removal, selection and Angular forms support.

_Added in 5.7.36._

## Overview

The CoreUI **Angular Chip Input component** lets users enter multiple values as chips inside a single field. Use it as a tag input, multi-value selector, or token field for skills, categories, email recipients, and more. It supports keyboard-friendly entry, chip removal, and optional selection.

- Type values and press `Enter` or the separator to create chips; pasted text is split the same way.
- Chips can be removable and selectable.
- The text field stays inline and grows as you type.
- The value is a `string[]`: bind `[(value)]`, or use `formControlName`, `ngModel` or `[formField]`.

## When to use Chip Input

Use the Angular Chip Input component when you need:

- A **tag input** or **token field** for free-form multi-value entry
- An **email or recipient input** where users add multiple addresses
- A **skills or category selector** in forms
- A **multi-value field** that works with Angular forms

## Basic example

Use `c-chip-input` to render a multi-value field with predefined chips and an inline text field. `label` renders an inline label inside the container; the `id` goes to the text field, so the label, or an external `<label for>`, names it.

## Variants

Use `chipClassName` to give chips contextual classes that represent categories, status, or priority.

In the example below, the chip color is assigned from the chip text by a `chipClassName` function, with a fallback class for any other value.

## Sizes

Use `size="sm"` and `size="lg"` to match surrounding form controls. The default size has no size modifier.

## Empty state

Start with just the text field and let users add chips as they type.

## With label

Use a standard form label for accessibility. Without a visible label, give the component an `aria-label`. `aria-label`, `aria-labelledby` and `aria-describedby` set on `c-chip-input` move to its text field, so a hint or a `c-form-feedback` can describe it; bind them as `[aria-describedby]`, not `[attr.aria-describedby]`, which does not reach the text field.

## Disabled

Set `disabled` to make the field and the chips non-interactive; the remove buttons are hidden.

## Readonly

Use `readonly` when chips should stay visible, but values must not change: chips cannot be added, removed or toggled.

## Selectable chips

Enable selection for the chips managed by Chip Input and bind `[(selected)]` to the selected values. Focusing the text field clears the selection, so Tab from the chips into the field clears it too.

## Forms

Chip Input works with reactive forms, template-driven forms and signal forms without a value accessor; the form value is a `string[]`. An error is shown once the control has been touched, that is after focus leaves the component, and `validationState` set by the page wins over the form. Place the message in a `c-form-feedback` right after the component and point `aria-describedby` at it. The field frame does not change color: the state is carried by the message and by `aria-invalid` on the text field.

### Reactive

### Template driven

Validator directives next to `ngModel` apply to the chips: `required` rejects an empty list and `minlength` sets the smallest number of chips.

### Signal forms

`required()` in signal forms does not treat an empty array as empty, so add `minLength(path, 1)` to reject a field with no chips; `required()` still adds `aria-required` to the text field.

## Keyboard behavior

### When the text field is focused

| Key | Action |
| --- | --- |
| `Enter` | Create chips from the text |
| `,` (or `separator`) | Create a chip from the text before it |
| `Backspace` / `Delete` | When the field is empty, move focus to the last chip |
| `ArrowLeft` | When the caret is at the start, move focus to the last chip (`ArrowRight` in right-to-left layouts) |
| `Escape` | Clear the text and leave the field |

### When a chip is focused

| Key | Action |
| --- | --- |
| `Enter` / `Space` | Toggle selection (selectable chips) |
| `Backspace` / `Delete` | Remove the chip (removable chips) |
| `ArrowLeft` / `ArrowRight` | Move to the previous / next chip; `ArrowRight` on the last chip returns to the field (mirrored in right-to-left layouts) |
| `Home` / `End` | Move to the first / last chip |
| Any character | Move focus to the text field and type it |

## Accessibility

- Name the text field with `label`, an external `<label for>` pointing at its `id`, or `aria-label`, which moves to the field like `aria-describedby`.
- Focusable chips and the text field are two tab stops: the last chip and the field. `Shift+Tab` from the field reaches the last chip; the arrow keys move between chips.
- Remove buttons are named after their chip, e.g. "Remove Angular"; `ariaRemoveLabel` sets the prefix.
- Selectable chips are toggle buttons with `aria-pressed`. In a `readonly` control they are marked `aria-disabled`.
- When the focused chip is removed, focus moves to a neighboring chip, or to the text field when no chip is left.
- Added and removed chips are announced with their value through a page live region, one message per update: "Angular added", "Angular removed". Change the wording with `ariaAddedAnnouncement` and `ariaRemovedAnnouncement`.
- With a form, `aria-required` and `aria-invalid` are set on the text field.

## Customizing

### CSS variables

Angular chip inputs use local CSS variables on `.chip-input` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-chip-input-min-height: #{$chip-input-min-height};
--cui-chip-input-padding-y: #{$chip-input-padding-y};
--cui-chip-input-padding-x: #{$chip-input-padding-x};
--cui-chip-input-font-size: #{$chip-input-font-size};
--cui-chip-input-bg: #{$chip-input-bg};
--cui-chip-input-color: #{$chip-input-color};
--cui-chip-input-border-width: #{$chip-input-border-width};
--cui-chip-input-border-color: #{$chip-input-border-color};
--cui-chip-input-border-radius: #{$chip-input-border-radius};
--cui-chip-input-gap: #{$chip-input-gap};
--cui-chip-input-transition: #{$chip-input-transition};
```

### Sass variables

```scss
$chip-input-min-height:        $input-height !default;
$chip-input-padding-y:         .25rem !default;
$chip-input-padding-x:         .75rem !default;
$chip-input-font-size:         $input-font-size !default;
$chip-input-bg:                var(--cui-body-bg) !default;
$chip-input-color:             var(--cui-body-color) !default;
$chip-input-border-width:      var(--cui-border-width) !default;
$chip-input-border-color:      var(--cui-border-color) !default;
$chip-input-border-radius:     var(--cui-border-radius) !default;
$chip-input-gap:               .375rem !default;
$chip-input-transition:        $input-transition !default;

$chip-input-min-height-sm:     $input-height-sm !default;
$chip-input-padding-y-sm:      .125rem !default;
$chip-input-padding-x-sm:      .5rem !default;
$chip-input-font-size-sm:      $input-font-size-sm !default;
$chip-input-border-radius-sm:  var(--cui-border-radius-sm) !default;
$chip-input-gap-sm:            .125rem !default;

$chip-input-min-height-lg:     $input-height-lg !default;
$chip-input-padding-y-lg:      .375rem !default;
$chip-input-padding-x-lg:      1rem !default;
$chip-input-font-size-lg:      $input-font-size-lg !default;
$chip-input-border-radius-lg:  var(--cui-border-radius-lg) !default;
$chip-input-gap-lg:            .5rem !default;
```

## API

### Chip Input Module

```ts
import { NgModule } from '@angular/core';
import { ChipInputModule } from '@coreui/angular';

@NgModule({
  imports: [ChipInputModule]
})
export class CustomAppModule {}
```

### Chip Input Standalone

```ts
import { Component, signal } from '@angular/core';
import { ChipInputComponent } from '@coreui/angular';

@Component({
  template: `<c-chip-input aria-label="Tags" placeholder="Add a tag..." [(value)]="tags" />`,
  imports: [ChipInputComponent]
})
export class CustomAppComponent {
  readonly tags = signal(['Angular']);
}
```

### c-chip-input
_component_

```jsx
import { ChipInputComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `aria-describedby` | `string` | `undefined` | Id of the element that describes the text field, e.g. a hint or a `c-form-feedback`. |
| `aria-label` | `string` | `undefined` | Accessible name of the text field when there is no visible label. |
| `aria-labelledby` | `string` | `undefined` | Id of the element that names the text field. |
| `ariaAddedAnnouncement` | `string` | `'added'` | Wording announced to screen readers after a chip is added; the chip value is prepended. |
| `ariaRemovedAnnouncement` | `string` | `'removed'` | Wording announced to screen readers after a chip is removed; the chip value is prepended. |
| `ariaRemoveLabel` | `string` | `'Remove'` | Label of the remove buttons; each chip appends its value, e.g. `'Remove Angular'`. |
| `chipClassName` | `string \| object` | `undefined` | Extra class for every chip, or a function that returns the class for a chip value. |
| `createOnBlur` | `boolean` | `true` | Turns the text left in the field into a chip when focus leaves the component. |
| `disabled` | `boolean` | `false` | Disables the field and every chip. |
| `filter` | `boolean` | `false` | Makes the chips filter chips: selectable, with a check icon while selected. |
| `id` | `string` | `generated` | Id of the text field, the target of an external `<label for>`. |
| `invalid` | `boolean` | `false` | Set by the form when the value is invalid; shown once the control is touched. |
| `label` | `string` | `undefined` | Renders an inline label inside the Angular Chip Input component container. |
| `maxChips` | `number \| null` | `null` | Maximum number of chips; `null` for no limit. |
| `placeholder` | `string` | `''` | Placeholder of the text field. |
| `readonly` | `boolean` | `false` | Keeps the chips visible but blocks adding, removing and selecting them. |
| `removable` | `boolean` | `true` | Shows remove buttons on the chips. |
| `required` | `boolean` | `false` | Set by the form when a value is required; adds `aria-required` to the text field. |
| `selectable` | `boolean` | `false` | Makes the chips selectable. |
| `selected` | `string[]` | `[]` | Values of the selected chips, two-way bindable with `[(selected)]`. |
| `selectionMode` | `'single' \| 'multiple'` | `'multiple'` | Sets how many chips can be selected at once. |
| `separator` | `string \| null` | `','` | Character that splits typed or pasted text into chips; `null` turns splitting off. |
| `size` | `'sm' \| 'lg'` | `undefined` | Size of the component. |
| `touched` | `boolean` | `false` | Set by the form once the control has been touched. |
| `validationState` | `'valid' \| 'invalid'` | `undefined` | Validation state set by the page; it wins over the state reported by the form. |
| `value` | `string[]` | `[]` | Chip values, two-way bindable with `[(value)]` or bound by a form. |

### Events

| Name | Description |
| --- | --- |
| `add` | Emits the value of a chip added by the user. |
| `inputChange` | Emits the text of the field when it changes. |
| `remove` | Emits the value of a chip removed by the user. |
| `selectedChange` | Emitted when `selected` changes. |
| `touch` | Emits when focus leaves the component. |
| `valueChange` | Emitted when `value` changes. |
