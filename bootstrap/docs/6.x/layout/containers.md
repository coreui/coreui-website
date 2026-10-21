# Bootstrap 6 Containers

> Containers are a fundamental building block of CoreUI for Bootstrap that contain, pad, and align your content within a given device or viewport.

## How they work

Containers are the most basic layout element in CoreUI for Bootstrap and are **required when using our default grid system**. Containers are used to contain, pad, and (sometimes) center the content within them. While containers *can* be nested, most layouts do not require a nested container.

CoreUI for Bootstrap comes with three different containers:

- `.container`, which sets a `max-width` at each responsive breakpoint
- `.container-{breakpoint}`, which is `width: 100%` until the specified breakpoint
- `.container-fluid`, which is `width: 100%` at all breakpoints

The table below illustrates how each container's `max-width` compares to the original `.container` and `.container-fluid` across each breakpoint.

|  | Extra small<div class="fw-normal">&lt;576px</div> | Small<div class="fw-normal">&ge;576px</div> | Medium<div class="fw-normal">&ge;768px</div> | Large<div class="fw-normal">&ge;1024px</div> | X-Large<div class="fw-normal">&ge;1280px</div> | XX-Large<div class="fw-normal">&ge;1536px</div> |
| --- | --- | --- | --- | --- | --- | --- |
| `.container` | <span class="fg-2">100%</span> | 540px | 720px | 960px | 1200px | 1440px |
| `.container-sm` | <span class="fg-2">100%</span> | 540px | 720px | 960px | 1200px | 1440px |
| `.container-md` | <span class="fg-2">100%</span> | <span class="fg-2">100%</span> | 720px | 960px | 1200px | 1440px |
| `.container-lg` | <span class="fg-2">100%</span> | <span class="fg-2">100%</span> | <span class="fg-2">100%</span> | 960px | 1200px | 1440px |
| `.container-xl` | <span class="fg-2">100%</span> | <span class="fg-2">100%</span> | <span class="fg-2">100%</span> | <span class="fg-2">100%</span> | 1200px | 1440px |
| `.container-2xl` | <span class="fg-2">100%</span> | <span class="fg-2">100%</span> | <span class="fg-2">100%</span> | <span class="fg-2">100%</span> | <span class="fg-2">100%</span> | 1440px |
| `.container-fluid` | <span class="fg-2">100%</span> | <span class="fg-2">100%</span> | <span class="fg-2">100%</span> | <span class="fg-2">100%</span> | <span class="fg-2">100%</span> | <span class="fg-2">100%</span> |

## Default container

Our default `.container` class is a responsive, fixed-width container, meaning its `max-width` changes at each breakpoint.

```html
<div class="container">
  <!-- Content here -->
</div>
```

## Responsive containers

Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which we apply `max-width`s for each of the higher breakpoints. For example, `.container-sm` is 100% wide to start until the `sm` breakpoint is reached, where it will scale up with `md`, `lg`, `xl`, and `2xl`.

```html
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-2xl">100% wide until extra extra large breakpoint</div>
```

## Fluid containers

Use `.container-fluid` for a full width container, spanning the entire width of the viewport.

```html
<div class="container-fluid">
  ...
</div>
```

## Customizing

### Sass maps

As shown above, CoreUI for Bootstrap generates a series of predefined container classes to help you build the layouts you desire. You may customize these predefined container classes by modifying the Sass map (found in `_config.scss`) that powers them:

```scss
$container-max-widths: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$container-max-widths: defaults(
  (
    sm: 540px,
    md: 720px,
    lg: 960px,
    xl: 1200px,
    2xl: 1440px
  ),
  $container-max-widths
);
```

### Sass mixins

In addition to customizing the Sass, you can also create your own containers with our Sass mixin. The mixin declares the container's own `--cui-gutter-*` properties, so the padding follows a gutter override the same way the built-in containers do:

```scss
@mixin make-container($gutter: $container-padding-x) {
  --cui-gutter-x: #{$gutter};
  --cui-gutter-y: 0;
  width: 100%;
  padding-inline: calc(var(--cui-gutter-x) * .5);
  margin-inline: auto;
}
```

```scss
// Usage
.custom-container {
  @include make-container();
}
```

For more information and examples on how to modify our Sass maps and variables, please refer to [the Sass section of the Grid documentation](https://coreui.io/bootstrap/docs/layout/grid/#customizing).
