# Bootstrap 6 Select

> Customize the native `<select>`s with custom CSS that changes the element's initial appearance.

## Default

A `<select>` takes `.form-control`, the same class as every other form control — it draws its own chevron because `appearance: none` takes the native one away. Custom styles are limited to the `<select>`'s initial appearance and cannot modify the `<option>`s due to browser limitations.

```html
<select class="form-control" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <label for="selectField" class="form-label">Country</label>
  <select class="form-control" id="selectField">
    <option selected>Choose one…</option>
    <option value="1">United States</option>
    <option value="2">Canada</option>
    <option value="3">United Kingdom</option>
  </select>
  <div class="form-text">We ship to these three for now.</div>
</div>
```

## Sizing

`.form-control-sm` and `.form-control-lg` size a select exactly as they size a text input.

```html
<select class="form-control form-control-lg mb-4" aria-label=".form-control-lg example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<select class="form-control form-control-sm" aria-label=".form-control-sm example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

The `multiple` attribute is also supported:

```html
<select class="form-control" multiple aria-label="multiple select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

As is the `size` attribute:

```html
<select class="form-control" size="3" aria-label="size 3 select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

## Disabled

Add the `disabled` boolean attribute on a select to give it a grayed out appearance and remove pointer events.

```html
<select class="form-control" aria-label="Disabled select example" disabled>
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
```

## Styling the chevron

Everything else about a select — padding, colors, border, focus ring, sizes — comes from [`.form-control`](https://coreui.io/bootstrap/docs/forms/form-control/) and is customized there. What belongs to the select alone is the chevron, and it answers to four custom properties you can set on the element itself:

| Property | What it does |
| --- | --- |
| `--cui-control-select-bg-img` | the image. Any `url()` — an inline SVG, a data URI, or `none` to drop it |
| `--cui-control-select-bg-position` | where it sits. Mirrored automatically in RTL |
| `--cui-control-select-bg-size` | how big it is drawn |
| `--cui-control-select-padding-end` | the room the text leaves for it |

A different chevron is one declaration. The color lives inside the SVG, so recoloring means swapping the image:

```html
<select class="form-control" aria-label="Custom chevron"
  style="--cui-control-select-bg-img: url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%235856d6' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e&quot;)">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
</select>
```

A wider gap, or none at all:

```html
<select class="form-control mb-4" aria-label="Roomier chevron"
  style="--cui-control-select-bg-size: 20px 15px; --cui-control-select-padding-end: 3.5rem">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
</select>

<select class="form-control" aria-label="No chevron"
  style="--cui-control-select-bg-img: none; --cui-control-select-padding-end: .75rem">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
</select>
```

> The chevron is a background image, so its color is baked into the SVG and cannot follow a `currentColor` or a theme token. That is also why dark mode swaps the whole image rather than a color: the control carries `--cui-control-select-bg-img` and `--cui-control-select-bg-img-dark` side by side, and dark mode points the first at the second.

## The chevron on something that is not a select

`.form-control-caret` draws the same chevron on an element that is not a `<select>` — a button opening a listbox, for instance.

```html
<button class="form-control form-control-caret text-start" type="button">Open this menu</button>
```

## Deprecated markup

_Deprecated in 6.0.0._

`.form-select`, `.form-select-sm` and `.form-select-lg` still work — they are aliases of the `.form-control` classes rather than a second implementation — and are removed in v7.

```diff
- <select class="form-select form-select-lg">
+ <select class="form-control form-control-lg">
```

See the [v6 migration guide](https://coreui.io/bootstrap/docs/migration/v6/) for the full picture.

## Customizing

### CSS variables

A select takes its frame from the same `--cui-control-*` tokens as [`.form-control`](https://coreui.io/bootstrap/docs/forms/form-control/#css-variables), declared on `.form-select` itself. The arrow and the space it reserves have their own:

```scss
$form-control-select-tokens: defaults(
  (
    --cui-control-select-bg-img: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#00000080' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/></svg>"))},
    --cui-control-select-bg-img-dark: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#ffffff80' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/></svg>"))},
    --cui-control-select-bg-size: 16px 12px,
    --cui-control-select-padding-end: calc(var(--cui-control-padding-x) * 3),
  ),
  $form-control-select-tokens
);
```
