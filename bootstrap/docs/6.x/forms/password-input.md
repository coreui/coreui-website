# Bootstrap 6 Password Input

> Enhance your password input fields in Bootstrap with custom styles, sizing options, toggle visibility button, and more.

## Example

Add `data-coreui-password-input` to a password field. The component
wraps it in a [`form-control-group`](https://coreui.io/bootstrap/docs/forms/form-control-group/) and adds the
toggle — you write neither the frame, the button nor its icon.

```html
<div class="mb-4">
  <label for="examplePasswordInput1" class="form-label">Password</label>
  <input type="password" class="form-control" id="examplePasswordInput1" placeholder="Enter your password" data-coreui-password-input>
</div>
<div class="mb-4">
  <label for="examplePasswordInput2" class="form-label">Password with value</label>
  <input type="password" class="form-control" id="examplePasswordInput2" placeholder="Enter your password" value="Top secret" data-coreui-password-input>
</div>
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <label for="passwordInputField" class="form-label">Password</label>
  <input type="password" class="form-control" id="passwordInputField" placeholder="Enter your password" data-coreui-password-input>
  <div class="form-text">At least 12 characters.</div>
</div>
```

## Sizing variants

Bootstrap Password Input supports different sizes using Bootstrap's sizing utilities like `.form-control-lg` and `.form-control-sm`.

```html
<input type="password" class="form-control form-control-lg" placeholder="Large password input" data-coreui-password-input>
<input type="password" class="form-control" placeholder="Default password input" data-coreui-password-input>
<input type="password" class="form-control form-control-sm" placeholder="Small password input" data-coreui-password-input>
```

## Disabled

To make a Bootstrap Password Input non-interactive, add the `disabled` attribute to the `<input />`. The visibility toggle is disabled with it and leaves the tab order, so it can't change what a disabled field shows: a password revealed before stays visible, and can be hidden once the field is enabled again. A field you disable after init takes the toggle with it the first time the toggle is pressed or `toggle()` is called, which then changes nothing; a field you enable gives it back once the field takes focus. Inside a `<fieldset disabled>` the browser disables the toggle with the field.

```html
<input type="password" class="form-control" placeholder="Disabled password input" disabled data-coreui-password-input>
<input type="password" class="form-control" placeholder="Disabled and readonly input" disabled readonly data-coreui-password-input>
```

## Readonly state

Use the `readonly` attribute to make the input non-editable but still selectable. This is useful for displaying values without allowing user changes.

```html
<input type="password" class="form-control" placeholder="Readonly password input" value="Readonly input here..." readonly data-coreui-password-input>
```

## Floating labels

The password input supports [floating labels](https://coreui.io/bootstrap/docs/forms/floating-labels/). Wrap the control in `.form-floating` and put a `<label>` beside it — the toggle button rides along with the field, and the placeholder stays hidden until the label floats.

```html
<div class="form-floating">
  <label for="floatingPasswordInput">Password</label>
  <input class="form-control" type="password" placeholder=" " id="floatingPasswordInput" data-coreui-password-input>
</div>
```

Add `.form-floating-always` to the wrapper, or to any ancestor, to keep the label [always floating](https://coreui.io/bootstrap/docs/forms/floating-labels/#always-floating) with the placeholder showing.

## Usage

Add `data-coreui-password-input` to the field. The plugin initializes
on load, builds the frame and the toggle, and flips the input's type when the
button is pressed.

```html
<input type="password" class="form-control" placeholder="Enter your password" data-coreui-password-input>
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-aria-toggle-label="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes.

Please note that for security reasons, the `sanitize`, `sanitizeFn`, and `allowList` options cannot be supplied via data attributes.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | `SVGAllowlist` | Allowlist the icons are sanitized against. |
| `ariaToggleLabel` | string | `'Toggle password visibility'` | Accessible name of the show and hide button. The button carries no text, so this is the only name it has. |
| `hideIcon` | string | SVG | Icon markup shown while the password is visible, which is the button that hides it again. |
| `sanitize` | boolean | `true` | Sanitize the icon markup. |
| `sanitizeFn` | function \| null | `null` | Your own sanitizer, used instead of the built-in one. |
| `showIcon` | string | SVG | Icon markup shown while the password is hidden. |

### Methods

| Method | Description |
| --- | --- |
| `dispose()` | Destroys the component instance, removes the toggle button and releases the field, putting back the `type` from the markup. |
| `getInstance(element)` | Static method that returns the instance associated with a DOM element, or `null`. |
| `getOrCreateInstance(element, config)` | Static method that returns the instance associated with a DOM element, creating it when there is none. |
| `toggle()` | Flips the field between `password` and `text`, exactly as the button does; on a disabled field it changes nothing and disables the button. |

```js
const passwordInput = coreui.PasswordInput.getOrCreateInstance(document.querySelector('[data-coreui-password-input]'))

passwordInput.toggle()
```

## Customizing

A password field is an `<input>` and a toggle button inside a
[`form-control-group`](https://coreui.io/bootstrap/docs/forms/form-control-group/). Almost everything you would
want to change belongs to the group; what this component owns is the icon the
button shows.

### Icons

The plugin renders the icon and swaps it when the password becomes visible, as
inline SVG on `currentColor` — so it follows the button through hover, focus and
disabled without a colour of its own. Pass your own artwork to replace it:

```js
new coreui.PasswordInput('#myPasswordInput', {
  ariaToggleLabel: 'Show or hide the password',
  showIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">…</svg>',
  hideIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">…</svg>'
})
```

Both are sanitized before they reach the DOM. To pass markup the default
allowlist rejects, extend `allowList`, supply your own `sanitizeFn`, or turn
`sanitize` off for content you control.

An input already inside a `.form-control-group` is left where you put it, so a
password field can share a frame with other adornments; only a frame the
component built is removed on `dispose()`. Classes you write on the input other
than `.form-control` move onto that frame, because they describe the field and
the field is the frame — except state classes (`is-*`, `was-*`) and `js-*`
hooks, which stay on the input so validators and your own selectors keep
finding it; the frame reads the state from the input.

### CSS variables

The frame — padding, colours, border and the size of the toggle button,
including the icon inside it — is the group's, and it reads the shared
`--cui-control-*` properties. Set them on `.form-control-group` to restyle one
field, since a `style` attribute on the `<input>` does not reach the frame; the
group declares them itself, so a value on `:root` stops there — to
restyle every field at once, change the shared
[`--cui-btn-input-*` frame](https://coreui.io/bootstrap/docs/forms/overview/#css-variables). The focus ring is
the library's own, coloured by `--cui-focus-ring-color` or the theme:

```scss
$form-control-group-tokens: () !default;
$form-control-group-tokens: defaults(
  (
    --cui-control-group-gap: .5rem,
    --cui-control-group-icon-size: 1rem,
    --cui-control-group-icon-color: var(--cui-fg-3),
    --cui-control-group-text-color: var(--cui-fg-3),
    --cui-control-group-action-size: 1.5rem,
    --cui-control-group-action-color: var(--cui-fg-3),
    --cui-control-group-action-hover-color: var(--cui-fg-body),
    --cui-control-group-action-bg: transparent,
    --cui-control-group-action-hover-bg: var(--cui-bg-1),
    --cui-control-group-action-border-radius: var(--cui-btn-input-sm-border-radius),
    --cui-control-group-action-transition-property: #{var(--cui-btn-input-action-transition-property), transform},
    --cui-control-group-action-transition-duration: var(--cui-btn-input-transition-duration),
    --cui-control-group-action-transition-timing: var(--cui-btn-input-transition-timing),
    --cui-control-group-disabled-opacity: var(--cui-btn-input-disabled-opacity),
  ),
  $form-control-group-tokens
);
```
