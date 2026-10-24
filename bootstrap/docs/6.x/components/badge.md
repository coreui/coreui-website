# Bootstrap 6 Badge

> Small components for indicating status and counts, or labelling items.

## Examples

Badges are tiny, static display components used for adding context to other elements. They can be used as part of navigation, buttons, and more to provide a counter or label. Badges scale to match the size of the immediate parent element by using relative font sizing and `em` units.

Badges come in three variants: solid (default), subtle, and outline. A badge without a `.theme-*` class stays neutral.

```html
<span class="badge">New</span>
<span class="badge theme-primary">New</span>
<span class="badge badge-subtle theme-primary">New</span>
<span class="badge badge-outline theme-primary">New</span>
```

### Headings

Badges adapt to the `font-size` of the parent element, down to a floor that keeps them legible.

```html
<h1>Example heading <span class="badge">New</span></h1>
<h2>Example heading <span class="badge">New</span></h2>
<h3>Example heading <span class="badge">New</span></h3>
<h4>Example heading <span class="badge">New</span></h4>
<h5>Example heading <span class="badge">New</span></h5>
<h6>Example heading <span class="badge">New</span></h6>
```

### Buttons

Badges can be used as part of links or buttons to provide a counter.

```html
<button type="button" class="btn-solid theme-primary">
  Notifications <span class="badge theme-danger">4</span>
</button>
```

Remark that depending on how you use them, badges may be complicated for users of screen readers and related assistive technologies. The styling gives sighted users a visual cue about the badge's purpose, but a screen reader announces only its content — so a badge can read as a stray word or number at the end of a sentence, link, or button.

Unless the context is clear — as in the Notifications example above, where the `4` is plainly a count — consider including additional context with a visually hidden piece of additional text.

### Positioned

_Added in 6.0.0._

`.badge-position-{block}-{inline}` pins a badge to a corner of its positioned parent, centred on that corner: `block` is `top` or `bottom`, `inline` is `start` or `end`, and the classes follow the writing direction.

```html
<button type="button" class="btn-solid theme-primary position-relative">
  Inbox
  <span class="badge badge-position-top-end rounded-pill border border-bg theme-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
```

Without a count, a `.badge-position-*` on any element makes a generic indicator — here a padded, rounded dot:

```html
<button type="button" class="btn-solid theme-primary position-relative">
  Profile
  <span class="badge-position-top-end p-3 bg-danger border border-bg rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
</button>
```

## Theme variants

Color a badge with a [`.theme-*` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants). Combine it with `.badge-subtle` or `.badge-outline` for the other two variants.

> ##### Conveying meaning to assistive technologies
> 
> Relying on color to convey meaning creates a visual cue that assistive technologies, like screen readers, cannot perceive. It's essential that any information represented by color is either apparent from the content itself (e.g., the visible text) or supplemented by alternative methods, such as extra text using the `.visually-hidden` class.

## Sizes

Add `.badge-sm` or `.badge-lg` to change the padding and the minimum height.

```html
<span class="badge badge-sm theme-primary">Small</span>
<span class="badge theme-primary">Default</span>
<span class="badge badge-lg theme-primary">Large</span>
```

## Pill badges

Apply the `.rounded-pill` modifier class to make badges rounded.

## Customizing

### CSS variables

Badges use local CSS variables on `.badge` for enhanced real-time customization.

```scss
$badge-tokens: defaults(
  (
    --cui-badge-gap: .375em,
    --cui-badge-min-height: 1.375rem,
    --cui-badge-padding-x: .625em,
    --cui-badge-padding-y: .25em,
    --cui-badge-font-size: clamp(#{$badge-font-size-floor}, .75em, .75em),
    --cui-badge-font-weight: var(--cui-font-weight-semibold),
    --cui-badge-color: inherit,
    --cui-badge-bg: var(--cui-bg-2),
    --cui-badge-border-width: var(--cui-border-width),
    --cui-badge-border-color: transparent,
    --cui-badge-border-radius: var(--cui-radius-7),
  ),
  $badge-tokens
);
```

### Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

```scss
$badge-font-size-floor:             12px !default;

$badge-font-size-sm:                .65em !default;

$badge-font-size-lg:                .875em !default;
```

### Sass maps

Each size is one entry, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$badge-sizes: defaults(
  (
    "sm": (min-height: 1.125rem, padding-y: .2em, padding-x: .5em, font-size: $badge-font-size-sm),
    "lg": (min-height: 1.75rem, padding-y: .375em, padding-x: .875em, font-size: $badge-font-size-lg),
  ),
  $badge-sizes
);
```

Each entry in the variants map names the theme role every token reads, so adding a variant takes a map entry rather than a new rule.

```scss
$badge-variants: defaults(
  (
    "subtle": (
      "color": "fg",
      "bg": "bg-subtle",
      "border-color": "transparent"
    ),
    "outline": (
      "color": "fg",
      "bg": "transparent",
      "border-color": "border"
    )
  ),
  $badge-variants
);
```
