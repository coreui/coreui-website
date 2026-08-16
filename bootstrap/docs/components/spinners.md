# Bootstrap 5 Spinners

> Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.

## About

Bootstrap "spinners" can be used to show the loading state in your projects. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.

For accessibility purposes, each loader here includes `role="status"` and a nested `<span class="visually-hidden">Loading...</span>`.

> This component's animation effect relies on the `prefers-reduced-motion` media query. For more information, refer to the [reduced motion section of our accessibility documentation](https://coreui.io/bootstrap/docs/getting-started/accessibility/#reduced-motion).

## Border spinner

Use the border spinners for a lightweight loading indicator.

```html
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

### Colors

The border spinner uses `currentColor` for its `border-color`, meaning you can customize the color with [text color utilities][color]. You can use any of our text color utilities on the standard spinner.

> **Why not use `border-color` utilities?** Each border spinner specifies a `transparent` border for at least one side, so `.border-{color}` utilities would override that.

## Growing spinner

If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow!

```html
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

Once again, this spinner is built with `currentColor`, so you can easily change its appearance with [text color utilities][color]. Here it is in blue, along with the supported variants.

## Alignment

Spinners in Bootstrap are built with `rem`s, `currentColor`, and `display: inline-flex`. This means they can easily be resized, recolored, and quickly aligned.

### Margin

Use [margin utilities][margin] like `.m-5` for easy spacing.

```html
<div class="spinner-border m-5" role="status">
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

Add `.spinner-border-sm` and `.spinner-grow-sm` to make a smaller spinner that can quickly be used within other components.

```html
<div class="spinner-border spinner-border-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow spinner-grow-sm" role="status">
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

## Buttons

Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.

```html
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span class="visually-hidden" role="status">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>
```

```html
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
  <span class="visually-hidden" role="status">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>
```

## Customizing

### CSS variables

Spinners use local CSS variables on `.spinner-border` and `.spinner-grow` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

Border spinner variables:

```scss
--cui-spinner-width: #{$spinner-width};
--cui-spinner-height: #{$spinner-height};
--cui-spinner-vertical-align: #{$spinner-vertical-align};
--cui-spinner-border-width: #{$spinner-border-width};
--cui-spinner-animation-speed: #{$spinner-animation-speed};
--cui-spinner-animation-name: spinner-border;
```

Growing spinner variables:

```scss
--cui-spinner-width: #{$spinner-width};
--cui-spinner-height: #{$spinner-height};
--cui-spinner-vertical-align: #{$spinner-vertical-align};
--cui-spinner-animation-speed: #{$spinner-animation-speed};
--cui-spinner-animation-name: spinner-grow;
```

For both spinners, small spinner modifier classes are used to update the values of these CSS variables as needed. For example, the `.spinner-border-sm` class does the following:

```scss
--cui-spinner-width: #{$spinner-width-sm};
--cui-spinner-height: #{$spinner-height-sm};
--cui-spinner-border-width: #{$spinner-border-width-sm};
```

### SASS variables

```scss
$spinner-width:           2rem !default;
$spinner-height:          $spinner-width !default;
$spinner-vertical-align:  -.125em !default;
$spinner-border-width:    .25em !default;
$spinner-animation-speed: .75s !default;

$spinner-width-sm:        1rem !default;
$spinner-height-sm:       $spinner-width-sm !default;
$spinner-border-width-sm: .2em !default;
```

### Keyframes

Used for creating the CSS animations for our spinners. Included in `scss/_spinners.scss`.

```scss
@keyframes spinner-border {
  to { transform: rotate(360deg) #{"/* rtl:ignore */"}; }
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
[margin]:  /utilities/spacing/
[sizing]:  /utilities/sizing/
[text]:    /utilities/text/
