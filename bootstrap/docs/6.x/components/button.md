# Bootstrap 6 Button

> Bootstrap button component for actions in tables, forms, cards, and more. CoreUI for Bootstrap provides various styles, states, and size. Ready to use and easy to customize.

## Base class

The `.btn` class sets up the shape of a button — size, spacing, radius, the focus ring — and paints it in the neutral surface colour, so it is a usable button on its own.

```html
<button type="button" class="btn">Base class</button>
```

## Theme variants

A button is a **shape plus a color**. The shape is the variant — how much ink the button uses — and the color comes from a theme:

| Variant | Shape |
| --- | --- |
| `.btn-solid` | Filled with the theme color. The default weight for the primary action on a screen. |
| `.btn-outline` | Border and text in the theme color, no fill until hover. |
| `.btn-subtle` | Filled with the theme's tinted background, text in the theme's foreground. |
| `.btn-ghost` | Text only; the fill appears on hover. |

```html
<button type="button" class="btn-solid theme-primary">Solid</button>
<button type="button" class="btn-outline theme-primary">Outline</button>
<button type="button" class="btn-subtle theme-primary">Subtle</button>
<button type="button" class="btn-ghost theme-primary">Ghost</button>
```

The color is a [`.theme-*` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants), which may sit on the button or on any element above it — theme a toolbar and every button inside follows. Without one, the variant renders in the neutral surface colors.

```html
<button type="button" class="btn-solid">Solid</button>
<button type="button" class="btn-outline">Outline</button>
<button type="button" class="btn-subtle">Subtle</button>
<button type="button" class="btn-ghost">Ghost</button>
```

Pair the variant with any theme color. `.btn-link` is the exception — it is a link that behaves like a button, so it takes its color from the link color rather than from a theme.

```html
<button type="button" class="btn-solid theme-${c.name}">${c.title}</button>

<button type="button" class="btn-link">Link</button>
```

The v5 spelling — `.btn` with a `.btn-{color}` modifier — still works and renders identically; see [Deprecated markup](#deprecated-markup).

> ##### Conveying meaning to assistive technologies
> 
> Relying on color to convey meaning creates a visual cue that assistive technologies, like screen readers, cannot perceive. It's essential that any information represented by color is either apparent from the content itself (e.g., the visible text) or supplemented by alternative methods, such as extra text using the `.visually-hidden` class.

### With icons

You can combine button with our [CoreUI Icons](https://coreui.io/icons/). The button lays its content out in a row and separates the parts with `--cui-btn-gap`, so the icon keeps its distance from the label whether or not there is whitespace between them in your markup.

```html
<button type="button" class="btn-solid theme-${c.name}"><span class="cil-contrast"></span> ${c.title}</button>

<button type="button" class="btn-link">Link</button>
```

### Icon only

_Added in 6.0.0._

Add `.btn-icon` for a button that holds nothing but an icon. It drops the padding and takes its width from its height, so the result is square at every size.

```html
<button type="button" class="btn-solid theme-primary btn-icon btn-sm"><span class="cil-contrast"></span></button>
<button type="button" class="btn-solid theme-primary btn-icon"><span class="cil-contrast"></span></button>
<button type="button" class="btn-solid theme-primary btn-icon btn-lg"><span class="cil-contrast"></span></button>
```

## Disable text wrapping

If you don't want the button text to wrap, you can add the `.text-nowrap` class to the button, or set `--cui-btn-white-space: nowrap` on it. In Sass, `$btn-white-space: nowrap` disables text wrapping for every button.

## Button tags

The `.btn` classes are designed for `<button>` ,  `<a>`  or  `<input />` elements (though some browsers may apply a slightly different rendering).

If you're using `.btn` classes on `<a>` elements that are used to trigger functionality ex. collapsing content,  these links should be given a `role="button"` to adequately communicate their meaning to assistive technologies such as screen readers.

```html
<a class="btn-solid theme-primary" href="#" role="button">Link</a>
<button class="btn-solid theme-primary" type="submit">Button</button>
<input class="btn-solid theme-primary" type="button" value="Input">
<input class="btn-solid theme-primary" type="submit" value="Submit">
<input class="btn-solid theme-primary" type="reset" value="Reset">
```

## Outline buttons

### Base outline style: `.btn-outline`

The `.btn-outline` class provides a neutral outline button style without any color modifiers. It’s useful as a foundation for minimal buttons without background color or strong visual emphasis.

```html
<button type="button" class="btn-outline">Base outline button</button>
<button type="button" class="btn-outline active">Active state</button>
<button type="button" class="btn-outline" disabled>Disabled state</button>
```

These buttons use a transparent background, subtle border, and inherit text color from the parent context. They’re best suited for minimalist UI elements like modals, toolbars, or secondary actions.

### Themed outline buttons

Add a theme colour and the border, the text and the hover fill all follow it.

These buttons keep a transparent background until they are hovered or focused, which makes them the natural pairing for a secondary action next to a solid one.

> Some of the button styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast.

## Ghost buttons

### Base ghost style: `.btn-ghost`

Use the `.btn-ghost` class to create ultra-minimalist buttons with no borders and a fully transparent background. These buttons rely solely on text color for visibility and apply a subtle background highlight on hover or active states.

They’re perfect for interfaces where you want buttons to be present but visually unobtrusive—such as action buttons in modals, cards, or toolbars.

```html
<button type="button" class="btn-ghost">Base ghost button</button>
<button type="button" class="btn-ghost active">Active state</button>
<button type="button" class="btn-ghost" disabled>Disabled state</button>
```

### Themed ghost buttons

With a theme colour the text takes it, and the fill that appears on hover takes it too.

## Subtle buttons

_Added in 6.0.0._

`.btn-subtle` fills the button with the theme's tinted background instead of the colour itself, so it carries the meaning of the colour without the weight of a solid button. Use it where a solid button would shout: a secondary action next to a primary one, or a row of actions that all matter equally.

```html
<button type="button" class="btn-subtle">Base subtle button</button>
<button type="button" class="btn-subtle active">Active state</button>
<button type="button" class="btn-subtle" disabled>Disabled state</button>
```

## Sizing

Larger or smaller buttons? Add `.btn-xs`, `.btn-sm` or `.btn-lg` for additional sizes.

```html
<button type="button" class="btn-solid theme-primary btn-lg">Large button</button>
<button type="button" class="btn-solid theme-secondary btn-lg">Large button</button>
```

```html
<button type="button" class="btn-solid theme-primary btn-sm">Small button</button>
<button type="button" class="btn-solid theme-secondary btn-sm">Small button</button>
```

```html
<button type="button" class="btn-solid theme-primary btn-xs">Extra small button</button>
<button type="button" class="btn-solid theme-secondary btn-xs">Extra small button</button>
```

Each size points the button's tokens at the matching `--cui-btn-input-{size}-*` set, the same one the form controls read, so a button and a field of the same size line up.

You can even roll your own custom sizing with CSS variables:

```html
<button type="button" class="btn-solid theme-primary"
        style="--cui-btn-padding-y: .25rem; --cui-btn-padding-x: .5rem; --cui-btn-font-size: .75rem;">
  Custom button
</button>
```

## Shapes

### Pill buttons

<div class="pro-component"></div>

### Square buttons

## Disabled

Add the `disabled` boolean attribute to any `<button>` element to make buttons look inactive. Disabled button has `pointer-events: none` applied to, disabling hover and active states from triggering.

```html
<button type="button" class="btn-solid theme-primary btn-lg" disabled>Primary button</button>
<button type="button" class="btn-solid theme-secondary btn-lg" disabled>Button</button>
```

Disabled buttons using the `<a>` element act a little different:

`<a>`s don't support the `disabled` attribute, so you have to add `.disabled` class to make buttons look inactive. The disabled bootstrap button must have the `aria-disabled="true"` attribute to show the state of the element to assistive technologies.

```html
<a href="#" class="btn-solid theme-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
<a href="#" class="btn-solid theme-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
```

### Link functionality caveat

To cover cases where you have to keep the `href` attribute on a disabled link, the `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s. Note that this CSS property is not yet standardized for HTML, but all modern browsers support it. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, in addition to `aria-disabled="true"`, also include a `tabindex="-1"` attribute on these links to prevent them from receiving keyboard focus, and use custom JavaScript to disable their functionality altogether.

```html
<a href="#" class="btn-solid theme-primary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
<a href="#" class="btn-solid theme-secondary btn-lg disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>
```

## Block buttons

Create buttons that span the full width of a parent—by using utilities.

```html
<div class="d-grid gap-3">
  <button class="btn-solid theme-primary" type="button">Button</button>
  <button class="btn-solid theme-primary" type="button">Button</button>
</div>
```

Here we create a responsive variation, starting with vertically stacked buttons until the `md` breakpoint, where `.d-md-block` replaces the `.d-grid` class, thus nullifying the `gap-3` utility. Resize your browser to see them change.

```html
<div class="d-grid gap-3 d-md-block">
  <button class="btn-solid theme-primary" type="button">Button</button>
  <button class="btn-solid theme-primary" type="button">Button</button>
</div>
```

You can adjust the width of your block buttons with grid column width classes. For example, for a half-width "block button", use `.col-6`. Center it horizontally with `.mx-auto`, too.

```html
<div class="d-grid gap-3 col-6 mx-auto">
  <button class="btn-solid theme-primary" type="button">Button</button>
  <button class="btn-solid theme-primary" type="button">Button</button>
</div>
```

Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we've taken our previous responsive example and added some flex utilities and a margin utility on the button to right align the buttons when they're no longer stacked.

```html
<div class="d-grid gap-3 d-md-flex justify-content-md-end">
  <button class="btn-solid theme-primary me-md-3" type="button">Button</button>
  <button class="btn-solid theme-primary" type="button">Button</button>
</div>
```

## Button plugin

The button plugin allows you to create simple on/off toggle buttons.

> Visually, these toggle buttons are identical to the [checkbox toggle buttons](https://coreui.io/bootstrap/docs/forms/checkbox/#toggle-buttons). However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as "checked"/"not checked" (since, despite their appearance, they are fundamentally still checkboxes), whereas these toggle buttons will be announced as "button"/"button pressed". The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button.

### Toggle states

Add `data-coreui-toggle="button"` to toggle a button's `active` state. Also add `aria-pressed` so assistive technologies announce the control as a toggle button. Use `aria-pressed="false"` for the default state. If you're pre-toggling a button, add the `.active` class **and** `aria-pressed="true"`.

```html
<div class="d-flex flex-wrap gap-1 mb-4">
  <button type="button" class="btn" data-coreui-toggle="button" aria-pressed="false">Toggle button</button>
  <button type="button" class="btn active" data-coreui-toggle="button" aria-pressed="true">Active toggle button</button>
  <button type="button" class="btn" disabled data-coreui-toggle="button" aria-pressed="false">Disabled toggle button</button>
</div>
<div class="d-flex flex-wrap gap-1">
  <button type="button" class="btn-solid theme-primary" data-coreui-toggle="button" aria-pressed="false">Toggle button</button>
  <button type="button" class="btn-solid theme-primary active" data-coreui-toggle="button" aria-pressed="true">Active toggle button</button>
  <button type="button" class="btn-solid theme-primary" disabled data-coreui-toggle="button" aria-pressed="false">Disabled toggle button</button>
</div>
```

```html
<div class="d-flex flex-wrap gap-1 mb-4">
  <a href="#" class="btn" role="button" data-coreui-toggle="button" aria-pressed="false">Toggle link</a>
  <a href="#" class="btn active" role="button" data-coreui-toggle="button" aria-pressed="true">Active toggle link</a>
  <a class="btn disabled" aria-disabled="true" role="button" data-coreui-toggle="button" aria-pressed="false">Disabled toggle link</a>
</div>
<div class="d-flex flex-wrap gap-1">
  <a href="#" class="btn-solid theme-primary" role="button" data-coreui-toggle="button" aria-pressed="false">Toggle link</a>
  <a href="#" class="btn-solid theme-primary active" role="button" data-coreui-toggle="button" aria-pressed="true">Active toggle link</a>
  <a class="btn-solid theme-primary disabled" aria-disabled="true" role="button" data-coreui-toggle="button" aria-pressed="false">Disabled toggle link</a>
</div>
```

> `aria-pressed` has no default value. A button without it is announced as a plain button, not as a toggle. As a safety net, CoreUI adds the missing attribute to every `[data-coreui-toggle="button"]` on `DOMContentLoaded`, using the `.active` class to pick the value. Write it in your markup anyway, so the state is correct before our JavaScript runs.

### Methods

You can create a button instance with the button constructor, for example:

```js
const bsButton = new coreui.Button('#myButton')
```

| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's button. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the button instance associated to a DOM element, you can use it like this: `coreui.Button.getInstance(element)`|
| `getOrCreateInstance` | Static method which returns a button instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `coreui.Button.getOrCreateInstance(element)` |
| `toggle` | Toggles push state. Gives the button the appearance that it has been activated. |

For example, to toggle all buttons

```js
document.querySelectorAll('.btn').forEach(buttonElement => {
  const button = coreui.Button.getOrCreateInstance(buttonElement)
  button.toggle()
})
```

## Deprecated markup

_Deprecated in 6.0.0._

The v5 spelling — `.btn` with a colour modifier — still works and renders identically. Each colour class is generated from the same variants map as the class it replaces, so `.btn-primary` *is* `.btn-solid.theme-primary`, `.btn-outline-primary` is `.btn-outline.theme-primary`, and `.btn-ghost-primary` is `.btn-ghost.theme-primary`. They are removed in v7.

```html
<button type="button" class="btn btn-${c.name}">${c.title}</button>
```

```diff
- <button class="btn btn-primary">Save</button>
+ <button class="btn-solid theme-primary">Save</button>

- <button class="btn btn-outline-danger">Delete</button>
+ <button class="btn-outline theme-danger">Delete</button>
```

Two things are worth the rewrite rather than the alias. A theme colour reaches a whole toolbar from one class on the wrapper, which no `.btn-{color}` can do; and a colour of your own works with every variant the moment you define its theme tokens, with no Sass to compile.

The v5 toggle button — `.btn-check` on the input, with a sibling `.btn` label tied to it by `id`/`for` — is deprecated the same way and renders identically. The current spelling puts `.btn-check` on the `<label>` with the input nested inside it, so the pair cannot fall out of sync.

```diff
- <input type="checkbox" class="btn-check" id="t" autocomplete="off">
- <label class="btn btn-primary" for="t">Toggle</label>
+ <label class="btn-solid theme-primary btn-check">
+   <input type="checkbox" autocomplete="off">
+   Toggle
+ </label>
```

See the [v6 migration guide](https://coreui.io/bootstrap/docs/migration/v6/) for the full picture.

## Customizing

### CSS variables

Buttons use local CSS variables on `.btn` for enhanced real-time customization.

```scss
$button-tokens: defaults(
  (
    --cui-btn-gap: var(--cui-btn-input-gap),
    --cui-btn-min-height: var(--cui-btn-input-min-height),
    --cui-btn-padding-y: var(--cui-btn-input-padding-y),
    --cui-btn-padding-x: var(--cui-btn-input-padding-x),
    --cui-btn-font-size: var(--cui-btn-input-font-size),
    --cui-btn-font-weight: var(--cui-btn-input-font-weight),
    --cui-btn-line-height: var(--cui-btn-input-line-height),
    --cui-btn-white-space: nowrap,
    --cui-btn-color: #{$btn-color},
    --cui-btn-bg: #{$btn-bg},
    --cui-btn-border-width: var(--cui-btn-input-border-width),
    --cui-btn-border-color: transparent,
    --cui-btn-border-radius: var(--cui-btn-input-border-radius),
    --cui-btn-hover-color: #{$btn-color},
    --cui-btn-hover-bg: #{$btn-hover-bg},
    --cui-btn-hover-border-color: transparent,
    --cui-btn-active-color: #{$btn-color},
    --cui-btn-active-bg: #{$btn-hover-bg},
    --cui-btn-active-border-color: transparent,
    --cui-btn-disabled-color: #{$btn-color},
    --cui-btn-disabled-bg: #{$btn-bg},
    --cui-btn-disabled-border-color: transparent,
    --cui-btn-active-shadow: inset 0 3px 5px color-mix(in oklch, var(--cui-black) 12.5%, transparent),
    --cui-btn-disabled-opacity: var(--cui-btn-input-disabled-opacity),
    --cui-btn-transition-property: var(--cui-btn-input-action-transition-property),
    --cui-btn-transition-duration: var(--cui-btn-input-transition-duration),
    --cui-btn-transition-timing: var(--cui-btn-input-transition-timing)
  ),
  $button-tokens
);
```

`.btn-link` rewrites the ones that make it read as a link:

```scss
$button-link-tokens: defaults(
  (
    --cui-btn-font-weight: var(--cui-font-weight-normal),
    --cui-btn-color: var(--cui-link-color),
    --cui-btn-bg: transparent,
    --cui-btn-border-color: transparent,
    --cui-btn-hover-color: var(--cui-link-hover-color),
    --cui-btn-hover-bg: transparent,
    --cui-btn-hover-border-color: transparent,
    --cui-btn-active-color: var(--cui-link-hover-color),
    --cui-btn-active-bg: transparent,
    --cui-btn-active-border-color: transparent,
    --cui-btn-disabled-color: var(--cui-fg-3),
    --cui-btn-disabled-bg: transparent,
    --cui-btn-disabled-border-color: transparent
  ),
  $button-link-tokens
);
```

Each variant class rewrites those variables from the theme tokens, falling back to a neutral value, which is why one set of rules serves every colour — including a theme colour you add yourself, with no Sass to compile.

A brand colour of your own is a theme, not a button: set the theme tokens anywhere above the buttons and every variant follows, in plain CSS. The tokens inherit, so one ancestor themes the whole subtree.

```html
<div style="--cui-theme-bg: #6f42c1; --cui-theme-contrast: #fff; --cui-theme-hover: #6134ae; --cui-theme-active: #56309b; --cui-theme-bg-subtle: #e9e0f7; --cui-theme-fg: #59359a; --cui-theme-fg-emphasis: #432a72;">
  <button type="button" class="btn-solid">Solid</button>
  <button type="button" class="btn-outline">Outline</button>
  <button type="button" class="btn-subtle">Subtle</button>
  <button type="button" class="btn-ghost">Ghost</button>
</div>
```

In your own stylesheet that is a class, and the buttons carry it the way they carry `.theme-primary`:

```css
.theme-brand {
  --cui-theme-bg: #6f42c1;
  --cui-theme-contrast: #fff;
  --cui-theme-hover: #6134ae;
  --cui-theme-active: #56309b;
  --cui-theme-bg-subtle: #e9e0f7;
  --cui-theme-fg: #59359a;
  --cui-theme-fg-emphasis: #432a72;
}
```

### Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

The variables below are the neutral fallbacks — what a variant renders as when no theme colour reaches it.

```scss
$btn-color:                   var(--cui-fg-body) !default;
$btn-bg:                      var(--cui-bg-2) !default;
$btn-hover-bg:                var(--cui-bg-3) !default;

$btn-outline-color:           var(--cui-fg-2) !default;
$btn-outline-border-color:    var(--cui-border-color) !default;
$btn-outline-hover-color:     var(--cui-fg-body) !default;
$btn-outline-hover-bg:        var(--cui-bg-3) !default;

$btn-subtle-color:            var(--cui-fg-body) !default;
$btn-subtle-bg:               var(--cui-bg-2) !default;
$btn-subtle-hover-bg:         var(--cui-bg-3) !default;

$btn-ghost-color:             var(--cui-fg-2) !default;
$btn-ghost-hover-color:       var(--cui-fg-body) !default;
$btn-ghost-hover-bg:          var(--cui-bg-1) !default;
```

### Sass maps

`$button-sizes` lists the sizes that get a class. Each name generates `.btn-{size}` — plus the matching `.btn-group-{size}` selector — pointing the button's variables at the shared `--cui-btn-input-{size}-*` scale, so adding a name is enough once that scale defines it. Buttons inside an input group follow the group's own sizes, `$input-group-sizes`.

```scss
$button-sizes: defaults(
  ("xs", "sm", "lg"),
  $button-sizes
);
```

`$button-variants` holds every variant. Each entry names, per state, the theme token a button variable reads and the neutral value behind it; `disabled` repeats `base`. Add an entry and both spellings of the new variant are generated — the variant class and the `.btn-{variant}-{color}` class.

```scss
// Each entry names the theme token a button variable reads and the neutral
// value behind it, so the variant class alone is a grey button and any theme
// colour — from `.theme-*`, from a `.btn-*-{color}` class or from an ancestor —
// colours the whole set. `disabled` repeats `base`.
$button-variants: () !default;
$button-variants: defaults(
  (
    "solid": (
      "base": (
        "color": ("contrast", $btn-color),
        "bg": ("bg", $btn-bg),
        "border-color": ("bg", $btn-bg)
      ),
      "hover": (
        "color": ("contrast", $btn-color),
        "bg": ("hover", $btn-hover-bg),
        "border-color": ("hover", $btn-hover-bg)
      ),
      "active": (
        "color": ("contrast", $btn-color),
        "bg": ("active", $btn-hover-bg),
        "border-color": ("active", $btn-hover-bg)
      )
    ),
    "outline": (
      "base": (
        "color": ("fg", $btn-outline-color),
        "bg": "transparent",
        "border-color": ("border", $btn-outline-border-color)
      ),
      "hover": (
        "color": ("contrast", $btn-outline-hover-color),
        "bg": ("hover", $btn-outline-hover-bg),
        "border-color": ("hover", $btn-outline-border-color)
      ),
      "active": (
        "color": ("contrast", $btn-outline-hover-color),
        "bg": ("active", $btn-outline-hover-bg),
        "border-color": ("active", $btn-outline-border-color)
      )
    ),
    "subtle": (
      "base": (
        "color": ("fg", $btn-subtle-color),
        "bg": ("bg-subtle", $btn-subtle-bg),
        "border-color": "transparent"
      ),
      "hover": (
        "color": ("fg-emphasis", $btn-subtle-color),
        "bg": ("bg-muted", $btn-subtle-hover-bg),
        "border-color": "transparent"
      ),
      "active": (
        "color": ("fg-emphasis", $btn-subtle-color),
        "bg": ("bg-muted", $btn-subtle-hover-bg),
        "border-color": "transparent"
      )
    ),
    "ghost": (
      "base": (
        "color": ("fg", $btn-ghost-color),
        "bg": "transparent",
        "border-color": "transparent"
      ),
      "hover": (
        "color": ("contrast", $btn-ghost-hover-color),
        "bg": ("hover", $btn-ghost-hover-bg),
        "border-color": ("hover", $btn-ghost-hover-bg)
      ),
      "active": (
        "color": ("contrast", $btn-ghost-hover-color),
        "bg": ("active", $btn-ghost-hover-bg),
        "border-color": ("active", $btn-ghost-hover-bg)
      )
    )
  ),
  $button-variants
);
```

### Sass mixins

`button-variant()` turns one entry of that map into the button's variables.

```scss
@function btn-variant-value($value) {
  @if $value == "transparent" {
    @return transparent;
  }

  @if meta.type-of($value) == "list" {
    @return var(--cui-theme-#{list.nth($value, 1)}, #{list.nth($value, 2)});
  }

  @return var(--cui-theme-#{$value});
}

@mixin button-variant($variant) {
  $config: map.get($button-variants, $variant);

  @each $property, $value in map.get($config, "base") {
    --cui-btn-#{$property}: #{btn-variant-value($value)};
    --cui-btn-disabled-#{$property}: #{btn-variant-value($value)};
  }

  @each $state in ("hover", "active") {
    @each $property, $value in map.get($config, $state) {
      --cui-btn-#{$state}-#{$property}: #{btn-variant-value($value)};
    }
  }
}
```

### Sass loops

```scss
@each $variant, $config in $button-variants {
  .btn-#{$variant} {
    @include button-variant($variant);
  }
}
```

```scss
@each $size, $_ in $button-sizes {
  .btn-#{$size},
  .btn-group-#{$size} > :is(#{$btn-variant-selectors}) {
    --cui-btn-gap: var(--cui-btn-input-#{$size}-gap);
    --cui-btn-min-height: var(--cui-btn-input-#{$size}-min-height);
    --cui-btn-padding-y: var(--cui-btn-input-#{$size}-padding-y);
    --cui-btn-padding-x: var(--cui-btn-input-#{$size}-padding-x);
    --cui-btn-font-size: var(--cui-btn-input-#{$size}-font-size);
    --cui-btn-line-height: var(--cui-btn-input-#{$size}-line-height);
    --cui-btn-border-radius: var(--cui-btn-input-#{$size}-border-radius);
  }
}
```

#### Deprecated color classes

_Deprecated in 6.0.0._

The loop that generates the [deprecated color classes](#deprecated-markup), pointing each one at the matching theme color. It lives in the opt-in [`coreui-legacy.css`](https://coreui.io/bootstrap/docs/getting-started/install/#v5-compatibility-css), not in `coreui.css`.

```scss
@each $color in map.keys($theme-colors) {
  $selectors: (string.unquote(".btn-#{$color}"));

  @each $variant, $_ in $button-variants {
    @if $variant != "solid" {
      $selectors: list.append($selectors, string.unquote(".btn-#{$variant}-#{$color}"), comma);
    }
  }

  #{$selectors} {
    @include theme-tokens($color);
  }
}
```
