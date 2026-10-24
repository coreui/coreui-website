# Bootstrap 6 Callout

> Callouts provide presentation of content in a visually distinct manner. Includes a heading, icon and typically text-based content.

## Default callout

Callouts accommodate text of any length, along with optional elements like icons and headings. `.callout` on its own is a neutral callout — a bordered surface with a thicker leading edge, inheriting the text color of its surroundings.

```html
<div class="callout">
  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.
</div>
```

## Theme variants

The color comes from a [`.theme-*` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants), which may sit on the callout or on any element above it. It colors the leading edge and tints the border.

> ##### Conveying meaning to assistive technologies
> 
> Relying on color to convey meaning creates a visual cue that assistive technologies, like screen readers, cannot perceive. It's essential that any information represented by color is either apparent from the content itself (e.g., the visible text) or supplemented by alternative methods, such as extra text using the `.visually-hidden` class.

## Tinted callout

Because the theme class exposes every slot, the background utilities read from it too. Add `.theme-subtle` for a filled callout without naming a color twice.

## Deprecated markup

_Deprecated in 6.0.0._

The v5 spelling — `.callout` with a colour modifier — still works. Each colour class is generated from the same theme map as the class it replaces, so `.callout-primary` *is* `.callout.theme-primary`. They are removed in v7.

```diff
- <div class="callout callout-success">Saved</div>
+ <div class="callout theme-success">Saved</div>
```

## Customizing

### CSS variables

Callouts use local CSS variables on `.callout` for enhanced real-time customization.

```scss
$callout-tokens: defaults(
  (
    --cui-callout-padding-x: var(--cui-spacer),
    --cui-callout-padding-y: var(--cui-spacer),
    --cui-callout-margin-x: 0,
    --cui-callout-margin-y: var(--cui-spacer),
    --cui-callout-border-width: var(--cui-border-width),
    --cui-callout-border-color: var(--cui-border-color),
    --cui-callout-border-left-width: calc(var(--cui-border-width) * 4),
    --cui-callout-border-left-color: var(--cui-callout-border-color),
    --cui-callout-border-radius: var(--cui-radius-5),
  ),
  $callout-tokens
);
```

### Sass loops

_Deprecated in 6.0.0._

The loop that creates the [deprecated color classes](#deprecated-markup), pointing each one at the matching theme color. It lives in the opt-in [`coreui-legacy.css`](https://coreui.io/bootstrap/docs/getting-started/install/#v5-compatibility-css), not in `coreui.css`.

```scss
@each $state in map.keys($theme-colors) {
  .callout-#{$state} {
    @include theme-tokens($state);
  }
}
```
