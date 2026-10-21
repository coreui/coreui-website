# Bootstrap 6 Spinner

> Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.

## About

Bootstrap "spinners" can be used to show the loading state in your projects. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.

For accessibility purposes, each loader here includes `role="status"` and a nested `<span class="visually-hidden">Loading...</span>`. When a spinner sits next to text that says what is loading, as in the [buttons](#buttons) below, give the spinner `aria-hidden="true"` and put `role="status"` on that text instead, so a screen reader reads the message once.

> This component's animation effect relies on the `prefers-reduced-motion` media query. For more information, refer to the [reduced motion section of our accessibility documentation](https://coreui.io/bootstrap/docs/getting-started/accessibility/#reduced-motion).

## Border spinner

Use the border spinners for a lightweight loading indicator.

```html
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

## Growing spinner

If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow!

```html
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

## Variants

Both spinners use `currentColor` for their appearance, so any [text color utility][color] recolors them.

> **Why not use `border-color` utilities?** Each border spinner specifies a `transparent` border for at least one side, so `.border-{color}` utilities would override that.

## Alignment

Spinners in CoreUI are built with `em`s, `currentColor`, and `display: inline-flex`. This means they can easily be resized, recolored, and quickly aligned.

### Margin

Use [margin utilities][margin] like `.m-6` for easy spacing.

```html
<div class="spinner-border m-6" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

### Placement

Use [flexbox utilities][flex], [float utilities][float], or [text alignment][text] utilities to place spinners exactly where you need them in any situation.

#### Flex

```html
<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
```

```html
<div class="d-flex align-items-center">
  <strong role="status">Loading...</strong>
  <div class="spinner-border ms-auto" aria-hidden="true"></div>
</div>
```

#### Floats

```html
<div class="clearfix">
  <div class="spinner-border float-end" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
```

#### Text align

```html
<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
```

## Size

Both spinners are `1em` square, so they match the font size of whatever they sit in — drop one into a heading or a button and it scales along with the text.

```html
<h3>Heading <span class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></span></h3>
<p>Paragraph <span class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></span></p>
```

Add `.spinner-sm` to make a smaller spinner. It works on both types.

```html
<div class="spinner-border spinner-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow spinner-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

Or, use custom CSS or inline styles to change the dimensions as needed.

```html
<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

## Custom spinners

Add `.spinner-rotate` to any element to spin it at the same speed as `.spinner-border`. Use it when you want your own artwork instead of a bordered circle.

```html
<svg class="spinner-rotate" width="2rem" height="2rem" viewBox="0 0 16 16" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
  <path d="M8 1V4"/>
  <path opacity=".8" d="M3.05 3.05L5.17 5.17"/>
  <path opacity=".6" d="M4 8L1 8"/>
  <path opacity=".5" d="M5.17 10.83L3.05 12.95"/>
  <path opacity=".4" d="M8 12V15"/>
  <path opacity=".3" d="M10.83 10.83L12.95 12.95"/>
  <path opacity=".2" d="M15 8L12 8"/>
  <path opacity=".1" d="M12.95 3.05L10.83 5.17"/>
</svg>
```

## Buttons

Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.

```html
<button class="btn-solid theme-primary" type="button" disabled>
  <span class="spinner-border" aria-hidden="true"></span>
  <span class="visually-hidden" role="status">Loading...</span>
</button>
<button class="btn-solid theme-primary" type="button" disabled>
  <span class="spinner-border" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>
```

```html
<button class="btn-solid theme-primary" type="button" disabled>
  <span class="spinner-grow" aria-hidden="true"></span>
  <span class="visually-hidden" role="status">Loading...</span>
</button>
<button class="btn-solid theme-primary" type="button" disabled>
  <span class="spinner-grow" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>
```

## Customizing

### CSS variables

Spinners use local CSS variables on `.spinner-border` and `.spinner-grow` for enhanced real-time customization.

Border spinner variables:

```scss
$spinner-border-tokens: defaults(
  (
    --cui-spinner-width: 1em,
    --cui-spinner-height: 1em,
    --cui-spinner-border-width: .125em,
    --cui-spinner-animation-speed: #{$spinner-animation-speed},
    --cui-spinner-animation-timing-function: #{$spinner-animation-timing-function},
    --cui-spinner-animation-name: spinner-border,
  ),
  $spinner-border-tokens
);
```

Growing spinner variables:

```scss
$spinner-grow-tokens: defaults(
  (
    --cui-spinner-width: 1em,
    --cui-spinner-height: 1em,
    --cui-spinner-animation-speed: #{$spinner-animation-speed},
    --cui-spinner-animation-timing-function: ease-in-out,
    --cui-spinner-animation-name: spinner-grow,
  ),
  $spinner-grow-tokens
);
```

The `.spinner-sm` modifier updates the values of these CSS variables, so it applies to both spinners:

```scss
--cui-spinner-width: #{.75em};
--cui-spinner-height: #{.75em};
```

### Keyframes

Used for creating the CSS animations for our spinners. Included in `scss/_spinner.scss`.

```scss
@keyframes spinner-border {
  to { transform: rotate(360deg); }
}
```

```scss
@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
```

[color]:   /utilities/colors/
[display]: /utilities/display/
[flex]:    /utilities/flex/
[float]:   /utilities/float/
[margin]:  /utilities/margin/
[sizing]:  /utilities/width/
[text]:    /utilities/font-size/
