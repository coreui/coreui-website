# Vue Range Component Styling

> Learn how to customize the Vue Range component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

`.form-range`, the wrapper `<CFormRange>` renders, carries the tokens; `class` and `style` land on it. The pseudo-elements that draw the thumb and the track cannot be reached from a stylesheet of your own in every engine, so a token on the wrapper is the way to restyle them:

```css
.form-range.brand {
  --cui-range-thumb-width: 1.5rem;
  --cui-range-track-height: .25rem;
  --cui-range-track-fill-bg: var(--cui-success-base);
}
```

`--cui-range-fill` is not a token: the component writes it from the value and the CSS reads it.

```scss
$form-range-tokens: defaults(
  (
    --cui-range-track-width: 100%,
    --cui-range-track-height: .5rem,
    --cui-range-track-cursor: pointer,
    --cui-range-track-bg: color-mix(in oklch, var(--cui-bg-2), var(--cui-bg-3)),
    --cui-range-track-border-radius: 1rem,
    --cui-range-track-box-shadow: var(--cui-box-shadow-inset),
    --cui-range-track-fill-bg: var(--cui-primary-base),
    --cui-range-track-disabled-bg: color-mix(in oklch, var(--cui-bg-4), var(--cui-fg-3)),
    --cui-range-thumb-width: 1rem,
    --cui-range-thumb-height: var(--cui-range-thumb-width),
    --cui-range-thumb-bg: var(--cui-primary-bg),
    --cui-range-thumb-border: 0,
    --cui-range-thumb-border-radius: 1rem,
    --cui-range-thumb-box-shadow: 0 .1rem .25rem color-mix(in oklch, var(--cui-black) 10%, transparent),
    --cui-range-thumb-active-bg: var(--cui-primary-bg-muted),
    --cui-range-thumb-disabled-bg: var(--cui-fg-3),
    --cui-range-thumb-transition-property: #{"background-color, border-color, box-shadow"},
    --cui-range-thumb-transition-duration: .15s,
    --cui-range-thumb-transition-timing: ease-in-out,
    --cui-range-thumb-focus-ring-width: var(--cui-focus-ring-width),
    --cui-range-tick-width: var(--cui-border-width),
    --cui-range-tick-height: .5rem,
    --cui-range-tick-minor-height: calc(var(--cui-range-tick-height) * .75),
    --cui-range-tick-bg: var(--cui-bg-4),
    --cui-range-tick-label-margin-top: .125rem,
    --cui-range-tick-label-font-size: var(--cui-font-size-sm),
    --cui-range-tick-label-color: var(--cui-fg-2),
  ),
  $form-range-tokens
);
```
