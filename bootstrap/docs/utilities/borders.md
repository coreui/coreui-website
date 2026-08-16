# Bootstrap 5 Borders

> Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.

## Border

Use border utilities to add or remove an element's borders. Choose from all borders or one at a time.

### Additive

```html
<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>
```

### Subtractive

Or remove borders:

```html
<span class="border border-0"></span>
<span class="border border-top-0"></span>
<span class="border border-end-0"></span>
<span class="border border-bottom-0"></span>
<span class="border border-start-0"></span>
```

## Color

Change the border color using utilities built on our theme colors.

```html
<span class="border border-${c.name}"></span>
<span class="border border-${c.name}-subtle"></span>

<span class="border border-black"></span>
<span class="border border-white"></span>
```

Using utilities you can change the border on one side only, or you can change all borders to make them different colors.

```html
<span class="border-top border-top-primary"></span>
<span class="border-end border-end-primary"></span>
<span class="border-bottom border-bottom-primary"></span>
<span class="border-start border-start-primary"></span>
<span class="border-start border-start-primary border-end border-end-danger"></span>
<span class="border-top border-top-primary border-end border-end-danger border-bottom border-bottom-success"></span>
<span class="border border-top-primary border-end-danger border-bottom-success border-start-info"></span>
```

## Border-width
Or modify the default `border-color` of a component:

```html
<div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control border-success" id="exampleFormControlInput1" placeholder="name@example.com">
</div>

<div class="h4 pb-2 mb-4 text-danger border-bottom border-danger">
  Dangerous heading
</div>

<div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
  Changing border color and width
</div>
```

## Opacity

_Added in 4.2.6._

Bootstrap `border-{color}` utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.

### How it works

Consider our default `.border-success` utility.

```css
.border-success {
  --cui-border-opacity: 1;
  border-color: rgba(var(--cui-success-rgb), var(--cui-border-opacity)) !important;
}
```

We use an RGB version of our `--cui-success` (with the value of `25, 135, 84`) CSS variable and attached a second CSS variable, `--cui-border-opacity`, for the alpha transparency (with a default value `1` thanks to a local CSS variable). That means anytime you use `.border-success` now, your computed `color` value is `rgba(25, 135, 84, 1)`. The local CSS variable inside each `.border-*` class avoids inheritance issues so nested instances of the utilities don't automatically have a modified alpha transparency.

### Example

To change that opacity, override `--cui-border-opacity` via custom styles or inline styles.

```html
<div class="border border-success p-2 mb-2">This is default success border</div>
<div class="border border-success p-2" style="--cui-border-opacity: .5;">This is 50% opacity success border</div>
```

Or, choose from any of the `.border-opacity` utilities:

```html
<div class="border border-success p-2 mb-2">This is default success border</div>
<div class="border border-success p-2 mb-2 border-opacity-75">This is 75% opacity success border</div>
<div class="border border-success p-2 mb-2 border-opacity-50">This is 50% opacity success border</div>
<div class="border border-success p-2 mb-2 border-opacity-25">This is 25% opacity success border</div>
<div class="border border-success p-2 border-opacity-10">This is 10% opacity success border</div>
```

## Width

```html
<span class="border border-1"></span>
<span class="border border-2"></span>
<span class="border border-3"></span>
<span class="border border-4"></span>
<span class="border border-5"></span>

<span class="border border-1 border-info"></span>
<span class="border border-2 border-info"></span>
<span class="border border-3 border-info"></span>
<span class="border border-4 border-info"></span>
<span class="border border-5 border-info"></span>

<span class="border-start border-start-1"></span>
<span class="border-start border-start-2"></span>
<span class="border-start border-start-3"></span>
<span class="border-start border-start-4"></span>
<span class="border-start border-start-5"></span>

<span class="border-start border-start-1 border-start-info"></span>
<span class="border-start border-start-2 border-start-info"></span>
<span class="border-start border-start-3 border-start-info"></span>
<span class="border-start border-start-4 border-start-info"></span>
<span class="border-start border-start-5 border-start-info"></span>
```

## Radius

Add classes to an element to easily round its corners.

```html
<svg class="docs-placeholder-img rounded" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Example rounded image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Example rounded image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
<svg class="docs-placeholder-img rounded-top" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Example top rounded image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Example top rounded image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
<svg class="docs-placeholder-img rounded-end" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Example right rounded image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Example right rounded image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
<svg class="docs-placeholder-img rounded-bottom" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Example bottom rounded image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Example bottom rounded image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
<svg class="docs-placeholder-img rounded-start" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Example left rounded image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Example left rounded image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
```

```html
<svg class="docs-placeholder-img rounded-bottom-1" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Example small rounded image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Example small rounded image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
<svg class="docs-placeholder-img rounded-start-2" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Example default left rounded image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Example default left rounded image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
<svg class="docs-placeholder-img rounded-end-circle" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Example right completely round image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Example right completely round image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
<svg class="docs-placeholder-img rounded-start-pill" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Example left rounded pill image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Example left rounded pill image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
<svg class="docs-placeholder-img rounded-5 rounded-top-0" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Example extra large bottom rounded image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Example extra large bottom rounded image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
```

### Sizes

Use the scaling classes for larger or smaller rounded corners. Sizes range from `0` to `5` including `circle` and `pill`, and can be configured by modifying the utilities API.

```html
<svg class="docs-placeholder-img rounded-0" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Example non-rounded image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Example non-rounded image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
<svg class="docs-placeholder-img rounded-1" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Example small rounded image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Example small rounded image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
<svg class="docs-placeholder-img rounded-2" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Example default rounded image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Example default rounded image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
<svg class="docs-placeholder-img rounded-3" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Example large rounded image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Example large rounded image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
<svg class="docs-placeholder-img rounded-4" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Example larger rounded image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Example larger rounded image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
<svg class="docs-placeholder-img rounded-5" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Example extra large rounded image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Example extra large rounded image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
<svg class="docs-placeholder-img rounded-circle" width="75" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Completely round image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Completely round image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
<svg class="docs-placeholder-img rounded-pill" width="150" height="75" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rounded pill image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Rounded pill image</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text></svg>
```

## Customizing

### CSS variables

```scss
--cui-border-width: #{$border-width};
--cui-border-style: #{$border-style};
--cui-border-color: #{$border-color};
--cui-border-color-translucent: #{$border-color-translucent};

--cui-border-radius: #{$border-radius};
--cui-border-radius-sm: #{$border-radius-sm};
--cui-border-radius-lg: #{$border-radius-lg};
--cui-border-radius-xl: #{$border-radius-xl};
--cui-border-radius-xxl: #{$border-radius-xxl};
--cui-border-radius-2xl: var(--cui-border-radius-xxl); // Deprecated in v5.0.0 for consistency
--cui-border-radius-pill: #{$border-radius-pill};
```

### Sass variables

```scss
$border-width:                1px !default;
$border-widths: (
  1: 1px,
  2: 2px,
  3: 3px,
  4: 4px,
  5: 5px
) !default;

$border-style:                solid !default;
$border-color:                $gray-300 !default;
$border-color-translucent:    color-translucent($gray-300, .175) !default;
```

```scss
$border-radius:               .375rem !default;
$border-radius-sm:            .25rem !default;
$border-radius-lg:            .5rem !default;
$border-radius-xl:            1rem !default;
$border-radius-xxl:           2rem !default;
$border-radius-pill:          50rem !default;
```

### Sass mixins

```scss
@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {
  @if $enable-rounded {
    border-radius: valid-radius($radius);
  }
  @else if $fallback-border-radius != false {
    border-radius: $fallback-border-radius;
  }
}

@mixin border-top-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-top-left-radius: valid-radius($radius);
    border-top-right-radius: valid-radius($radius);
  }
}

@mixin border-end-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-start-end-radius: valid-radius($radius);
    border-end-end-radius: valid-radius($radius);
  }
}

@mixin border-bottom-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-bottom-right-radius: valid-radius($radius);
    border-bottom-left-radius: valid-radius($radius);
  }
}

@mixin border-start-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-start-start-radius: valid-radius($radius);
    border-end-start-radius: valid-radius($radius);
  }
}

@mixin border-top-start-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-start-start-radius: valid-radius($radius);
  }
}

@mixin border-top-end-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-start-end-radius: valid-radius($radius);
  }
}

@mixin border-bottom-end-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-end-end-radius: valid-radius($radius);
  }
}

@mixin border-bottom-start-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-end-start-radius: valid-radius($radius);
  }
}
```

### Utilities API

Border utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
"border": (
  property: border,
  values: (
    null: var(--cui-border-width) var(--cui-border-style) var(--cui-border-color),
    0: 0,
  ),
),
"border-top": (
  property: border-top,
  values: (
    null: var(--cui-border-width) var(--cui-border-style) var(--cui-border-color),
    0: 0,
  )
),
"border-end": (
  property: border-inline-end,
  class: border-end,
  values: (
    null: var(--cui-border-width) var(--cui-border-style) var(--cui-border-color),
    0: 0,
  ),
),
"border-bottom": (
  property: border-bottom,
  values: (
    null: var(--cui-border-width) var(--cui-border-style) var(--cui-border-color),
    0: 0,
  )
),
"border-start": (
  property: border-inline-start,
  class: border-start,
  values: (
    null: var(--cui-border-width) var(--cui-border-style) var(--cui-border-color),
    0: 0,
  ),
),
"border-color": (
  property: border-color,
  class: border,
  local-vars: (
    "border-opacity": 1
  ),
  values: $utilities-border-colors
),
"border-top-color": (
  property: border-top-color,
  class: border-top,
  values: map.merge($theme-colors, ("white": $white)),
  vars: true
),
"border-end-color": (
  property: border-inline-end-color,
  class: border-end,
  values: map.merge($theme-colors, ("white": $white)),
  vars: true,
),
"border-bottom-color": (
  property: border-bottom-color,
  class: border-bottom,
  values: map.merge($theme-colors, ("white": $white)),
  vars: true
),
"border-start-color": (
  property: border-inline-start-color,
  class: border-start,
  values: map.merge($theme-colors, ("white": $white)),
  vars: true,
),
"border-width": (
  property: border-width,
  class: border,
  values: $border-widths
),
"border-top-width": (
  property: border-top-width,
  class: border-top,
  values: $border-widths
),
"border-end-width": (
  property: border-inline-end-width,
  class: border-end,
  values: $border-widths,
),
"border-bottom-width": (
  property: border-bottom-width,
  class: border-bottom,
  values: $border-widths
),
"border-start-width": (
  property: border-inline-start-width,
  class: border-start,
  values: $border-widths,
),
"subtle-border-color": (
  property: border-color,
  class: border,
  values: $utilities-border-subtle
),
"border-opacity": (
  css-var: true,
  class: border-opacity,
  values: (
    10: .1,
    25: .25,
    50: .5,
    75: .75,
    100: 1
  )
),
```

```scss
"rounded": (
  property: border-radius,
  class: rounded,
  values: (
    null: var(--cui-border-radius),
    0: 0,
    1: var(--cui-border-radius-sm),
    2: var(--cui-border-radius),
    3: var(--cui-border-radius-lg),
    4: var(--cui-border-radius-xl),
    5: var(--cui-border-radius-xxl),
    circle: 50%,
    pill: var(--cui-border-radius-pill)
  )
),
"rounded-top": (
  property: border-top-left-radius border-top-right-radius,
  class: rounded-top,
  values: (
    null: var(--cui-border-radius),
    0: 0,
    1: var(--cui-border-radius-sm),
    2: var(--cui-border-radius),
    3: var(--cui-border-radius-lg),
    4: var(--cui-border-radius-xl),
    5: var(--cui-border-radius-xxl),
    circle: 50%,
    pill: var(--cui-border-radius-pill)
  )
),
"rounded-end": (
  property: border-start-end-radius border-end-end-radius,
  class: rounded-end,
  values: (
    null: var(--cui-border-radius),
    0: 0,
    1: var(--cui-border-radius-sm),
    2: var(--cui-border-radius),
    3: var(--cui-border-radius-lg),
    4: var(--cui-border-radius-xl),
    5: var(--cui-border-radius-xxl),
    circle: 50%,
    pill: var(--cui-border-radius-pill)
  )
),
"rounded-bottom": (
  property: border-bottom-right-radius border-bottom-left-radius,
  class: rounded-bottom,
  values: (
    null: var(--cui-border-radius),
    0: 0,
    1: var(--cui-border-radius-sm),
    2: var(--cui-border-radius),
    3: var(--cui-border-radius-lg),
    4: var(--cui-border-radius-xl),
    5: var(--cui-border-radius-xxl),
    circle: 50%,
    pill: var(--cui-border-radius-pill)
  )
),
"rounded-start": (
  property: border-end-start-radius border-start-start-radius,
  class: rounded-start,
  values: (
    null: var(--cui-border-radius),
    0: 0,
    1: var(--cui-border-radius-sm),
    2: var(--cui-border-radius),
    3: var(--cui-border-radius-lg),
    4: var(--cui-border-radius-xl),
    5: var(--cui-border-radius-xxl),
    circle: 50%,
    pill: var(--cui-border-radius-pill)
  )
),
```
