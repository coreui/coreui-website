# Vue Border radius Utilities

> Round the corners of an element with our border-radius utilities, from a subtle radius to a full pill.

## Examples

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

## Sizes

Use the scaling classes for larger or smaller rounded corners. Sizes range from `0` to `9` — the stops of the `$radii` scale, `--cui-radius-0` through `--cui-radius-9` — plus `circle` and `pill`, and can be configured by modifying the utilities API. `.rounded` without a number is size `5`, the radius buttons and form controls use.

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

## Setting the size without applying it

_Added in 6.0.0._

`.rounded-size-*` writes the radius into `--cui-rounded-size` without setting `border-radius` itself. The unprefixed corner classes — `.rounded`, `.rounded-top`, `.rounded-end`, `.rounded-bottom`, `.rounded-start` — read that token, so one size class drives whichever corners you round.

Without a `.rounded-size-*` in scope the corner classes fall back to `--cui-radius-5`. A numbered `.rounded-{n}` also writes the token, so `.rounded-3 .rounded-top` keeps the top corners on size 3 while a side class with its own number (`.rounded-top-3`) sets that side directly and ignores the token.

## Customizing

### CSS variables

The radius scale is emitted on `:root` as `--cui-radius-0` through `--cui-radius-9`, plus `--cui-radius-pill`. Components read stops of the scale (`--cui-radius-5`, `--cui-radius-7`), so overriding a stop re-rounds everything that uses it without recompiling.

```scss
$root-token-defaults: map.set($root-token-defaults, --cui-radius, .5rem);
@each $key, $value in $radii {
  $root-token-defaults: map.set($root-token-defaults, --cui-radius-#{$key}, $value);
}
$root-token-defaults: map.set($root-token-defaults, --cui-radius-pill, 50rem);
```

### Sass maps

Each entry is one `--cui-radius-{step}` token as a multiple of `$radius` — override the map to add or retune a step:

```scss
$radii: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$radii: defaults(
  (
    0: 0,
    1: calc(var(--cui-radius) * .25),
    2: calc(var(--cui-radius) * .375),
    3: calc(var(--cui-radius) * .5),
    4: calc(var(--cui-radius) * .75),
    5: var(--cui-radius),
    6: calc(var(--cui-radius) * 1.25),
    7: calc(var(--cui-radius) * 1.5),
    8: calc(var(--cui-radius) * 1.75),
    9: calc(var(--cui-radius) * 2),
  ),
  $radii
);
```

### Sass mixins

```scss
@mixin border-radius($radius: var(--cui-radius-5), $fallback-border-radius: false) {
  @if $enable-rounded {
    border-radius: valid-radius($radius);
  }
  @else if $fallback-border-radius != false {
    border-radius: $fallback-border-radius;
  }
}

@mixin border-top-radius($radius: var(--cui-radius-5)) {
  @if $enable-rounded {
    border-top-left-radius: valid-radius($radius);
    border-top-right-radius: valid-radius($radius);
  }
}

@mixin border-end-radius($radius: var(--cui-radius-5)) {
  @if $enable-rounded {
    border-start-end-radius: valid-radius($radius);
    border-end-end-radius: valid-radius($radius);
  }
}

@mixin border-bottom-radius($radius: var(--cui-radius-5)) {
  @if $enable-rounded {
    border-bottom-right-radius: valid-radius($radius);
    border-bottom-left-radius: valid-radius($radius);
  }
}

@mixin border-start-radius($radius: var(--cui-radius-5)) {
  @if $enable-rounded {
    border-start-start-radius: valid-radius($radius);
    border-end-start-radius: valid-radius($radius);
  }
}

@mixin border-top-start-radius($radius: var(--cui-radius-5)) {
  @if $enable-rounded {
    border-start-start-radius: valid-radius($radius);
  }
}

@mixin border-top-end-radius($radius: var(--cui-radius-5)) {
  @if $enable-rounded {
    border-start-end-radius: valid-radius($radius);
  }
}

@mixin border-bottom-end-radius($radius: var(--cui-radius-5)) {
  @if $enable-rounded {
    border-end-end-radius: valid-radius($radius);
  }
}

@mixin border-bottom-start-radius($radius: var(--cui-radius-5)) {
  @if $enable-rounded {
    border-end-start-radius: valid-radius($radius);
  }
}
```

Border radius utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/vue/docs/utilities/api/#using-the-api)

```scss
"rounded": (
  property: (
    --cui-rounded-size: null,
    border-radius: var(--cui-rounded-size)
  ),
  class: rounded,
  values: map.merge(
    $utilities-radii,
    (
      null: var(--cui-radius-5),
      circle: 50%,
      pill: var(--cui-radius-pill)
    )
  )
),
"rounded-size": (
  property: --cui-rounded-size,
  class: rounded-size,
  values: map.merge(
    $utilities-radii,
    (
      null: var(--cui-radius-5),
      circle: 50%,
      pill: var(--cui-radius-pill)
    )
  )
),
"rounded-top": (
  property: border-start-start-radius border-start-end-radius,
  class: rounded-top,
  values: map.merge(
    $utilities-radii,
    (
      null: var(--cui-rounded-size, var(--cui-radius-5)),
      circle: 50%,
      pill: var(--cui-radius-pill)
    )
  )
),
"rounded-end": (
  property: border-start-end-radius border-end-end-radius,
  class: rounded-end,
  values: map.merge(
    $utilities-radii,
    (
      null: var(--cui-rounded-size, var(--cui-radius-5)),
      circle: 50%,
      pill: var(--cui-radius-pill)
    )
  )
),
"rounded-bottom": (
  property: border-end-start-radius border-end-end-radius,
  class: rounded-bottom,
  values: map.merge(
    $utilities-radii,
    (
      null: var(--cui-rounded-size, var(--cui-radius-5)),
      circle: 50%,
      pill: var(--cui-radius-pill)
    )
  )
),
"rounded-start": (
  property: border-start-start-radius border-end-start-radius,
  class: rounded-start,
  values: map.merge(
    $utilities-radii,
    (
      null: var(--cui-rounded-size, var(--cui-radius-5)),
      circle: 50%,
      pill: var(--cui-radius-pill)
    )
  )
),
```
