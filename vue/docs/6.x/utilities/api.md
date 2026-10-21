# Vue Utilities API

> The utility API is a Sass-based tool to generate utility classes.

CoreUI for Vue utilities are generated with our utility API and can be used to modify or extend our default set of utility classes via Sass. Our utility API is based on a series of Sass maps and functions for generating families of classes with various options. If you're unfamiliar with Sass maps, read up on the [official Sass docs](https://sass-lang.com/documentation/values/maps/) to get started.

The `$utilities` map contains all our utilities and is later merged with your custom `$utilities` map, if present. The utility map contains a keyed list of utility groups which accept the following options:

| Option | Type | Default&nbsp;value | Description |
| --- | --- | --- | --- |
| [`property`](#property) | **Required** | – | Name of the property, a space-separated list of them, or a [map](#property-map) spelling out every declaration the rule writes. |
| [`values`](#values) | **Required** | – | List of values, or a map if you don't want the class name to be the same as the value. If `null` is used as map key, `class` is not prepended to the class name. |
| [`class`](#class) | Optional | null | Name of the generated class. If not provided and `property` is an array of strings, `class` will default to the first element of the `property` array. If not provided and `property` is a string, the `values` keys are used for the `class` names. |
| [`child-selector`](#child-selector) | Optional | null | Selector for the children to style instead of the element itself, wrapped in `:where()`. |
| [`selector`](#selector-type) | Optional | `class` | `class`, `attr-starts` or `attr-includes` — whether the rule is written as a class or as an attribute selector. |
| [`state`](#states) | Optional | null | List of pseudo-class variants (e.g., `:hover` or `:focus`) to generate. |
| [`responsive`](#responsive) | Optional | `false` | Boolean indicating if responsive classes should be generated. |
| [`print`](#print) | Optional | `false` | Boolean indicating if print classes need to be generated. |
| `at-property` | Optional | `true` | Set to `false` to keep the utility's custom properties inheriting (see [property map](#property-map)). |
| [`enabled`](#remove-utilities) | Optional | `true` | Set to `false` to skip the utility without removing its definition. |

Every key is checked while the utility is generated: `property` and `values` are required, a boolean option given a non-boolean errors, and a key outside this table is reported as a warning rather than ignored — a misspelled `responsiv` used to cost you the responsive classes with nothing said about it.

## API explained

All utility variables are added to the `$utilities` variable within our `_utilities.scss` stylesheet. Each group of utilities looks something like this:

```scss
$utilities: (
  "opacity": (
    property: opacity,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

Which outputs the following:

```css
.opacity-0 { opacity: 0; }
.opacity-25 { opacity: .25; }
.opacity-50 { opacity: .5; }
.opacity-75 { opacity: .75; }
.opacity-100 { opacity: 1; }
```

### Property

The required `property` key must be set for any utility, and it must contain a valid CSS property. This property is used in the generated utility's ruleset. When the `class` key is omitted, it also serves as the default class name. Consider the `text-decoration` utility:

```scss
$utilities: (
  "text-decoration": (
    property: text-decoration,
    values: none underline line-through
  )
);
```

Output:

```css
.text-decoration-none { text-decoration: none; }
.text-decoration-underline { text-decoration: underline; }
.text-decoration-line-through { text-decoration: line-through; }
```

### Values

Use the `values` key to specify which values for the specified `property` should be used in the generated class names and rules. Can be a list or map (set in the utilities or in a Sass variable).

As a list, like with [`text-decoration` utilities](https://coreui.io/vue/docs/utilities/text-decoration/):

```scss
values: none underline line-through
```

As a map, like with [`opacity` utilities](https://coreui.io/vue/docs/utilities/opacity/):

```scss
values: (
  0: 0,
  25: .25,
  50: .5,
  75: .75,
  100: 1,
)
```

As a Sass variable that sets the list or map, as in our [`position` utilities](https://coreui.io/vue/docs/utilities/position/):

```scss
values: $position-values
```

### Class

Use the `class` option to change the class prefix used in the compiled CSS. For example, to change from `.opacity-*` to `.o-*`:

```scss
$utilities: (
  "opacity": (
    property: opacity,
    class: o,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

Output:

```css
.o-0 { opacity: 0; }
.o-25 { opacity: .25; }
.o-50 { opacity: .5; }
.o-75 { opacity: .75; }
.o-100 { opacity: 1; }
```

If `class: null`, generates classes for each of the `values` keys:

```scss
$utilities: (
  "visibility": (
    property: visibility,
    class: null,
    values: (
      visible: visible,
      invisible: hidden,
    )
  )
);
```

Output:

```css
.visible { visibility: visible; }
.invisible { visibility: hidden; }
```

### Child selector

Some utilities describe the relationship between an element's children rather
than the element itself — spacing *between* items, or a divider *between* them.
Give such a utility a `child-selector`, and the generated rule targets the
children:

```scss
$utilities: (
  "space-x": (
    property: margin-inline-end,
    class: space-x,
    child-selector: "> :not(:last-child)",
    values: $spacers
  )
);
```

Output:

```css
:where(.space-x-5 > :not(:last-child)) { margin-inline-end: 1rem; }
```

The rule is wrapped in `:where()`, which contributes **no specificity**. That is
deliberate: a child that carries a margin utility of its own, or a component
with its own spacing, keeps winning without needing `!important` or a longer
selector.

### Selector type

By default a utility writes a class selector. Set `selector` to `attr-starts` or
`attr-includes` and it writes an attribute selector instead, so a single rule
serves a whole family of classes — useful when the class only has to set a
custom property that one shared rule then reads:

```scss
$utilities: (
  "aspect-ratio": (
    property: --#{$prefix}ratio,
    class: ratio,
    values: (1x1: 1, 16x9: calc(16 / 9))
  ),
  "aspect-ratio-attr": (
    property: aspect-ratio,
    class: "ratio-",
    selector: "attr-includes",
    values: var(--#{$prefix}ratio)
  )
);
```

Output:

```css
.ratio-1x1 { --cui-ratio: 1; }
.ratio-16x9 { --cui-ratio: calc(16 / 9); }
[class*="ratio-"] { aspect-ratio: var(--cui-ratio); }
```

`attr-starts` matches `[class^="…"]` (the class begins with the name),
`attr-includes` matches `[class*="…"]` (it appears anywhere in the attribute, so
it also works when the utility is not the first class). Both require a `class`
key — that is the string they match on.

### Property map

`property` is usually one property name, or a space-separated list of them. It
can also be a **map**, which spells out exactly what the rule writes and in what
order. An entry whose value is `null` receives the utility's value; every other
entry is written as declared:

```scss
$utilities: (
  "bg-color": (
    property: (
      --#{$prefix}bg: null,
      background-color: var(--#{$prefix}bg),
    ),
    class: bg,
    values: $utilities-bg-colors
  )
);
```

Output:

```css
.bg-primary {
  --cui-bg: var(--cui-primary-bg);
  background-color: var(--cui-bg);
}
```

This is what lets a utility **store its value in a custom property and consume
it in the same rule**. The colour lives in `--cui-bg`, so anything that reads
the token sees the colour the class chose. A companion utility then reads it
back through an expression of its own:

```scss
$utilities: (
  "bg-opacity": (
    class: bg,
    property: background-color,
    values: theme-opacity-values(--#{$prefix}bg)
  )
);
```

```css
.bg-50 { background-color: color-mix(in oklch, var(--cui-bg) 50%, transparent); }
```

The two rules write the same property, so the order of the map decides: the
opacity family is declared after the colour family, and `.bg-primary.bg-50`
mixes the primary colour whichever order the classes appear in the attribute.
On its own, `.bg-50` reads a token nobody set, so the declaration is invalid at
computed-value time and the background stays as it was.

> Every custom property a utility assigns to is registered with
> `@property { inherits: false }`, so the value applies to the element that
> carries the class and does not leak into its descendants. A utility that
> deliberately writes an inheriting token — `.focus-ring-*` sets the global
> `--cui-focus-ring-color` — opts out with `at-property: false`.

### States

Use the `state` option to generate pseudo-class variations. Example pseudo-classes are `:hover` and `:focus`. When a list of states are provided, classnames are created for that pseudo-class. For example, to change opacity on hover, add `state: hover` and you'll get `.opacity-hover:hover` in your compiled CSS.

Need multiple pseudo-classes? Use a space-separated list of states: `state: hover focus`.

```scss
$utilities: (
  "opacity": (
    property: opacity,
    class: opacity,
    state: hover,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

Output:

```css
.opacity-0-hover:hover { opacity: 0; }
.opacity-25-hover:hover { opacity: .25; }
.opacity-50-hover:hover { opacity: .5; }
.opacity-75-hover:hover { opacity: .75; }
.opacity-100-hover:hover { opacity: 1; }
```

### Responsive

Add the `responsive` boolean to generate responsive utilities (e.g., `.opacity-md-25`) across [all breakpoints](https://coreui.io/vue/docs/layout/breakpoints/).

```scss
$utilities: (
  "opacity": (
    property: opacity,
    responsive: true,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

Output:

```css
.opacity-0 { opacity: 0; }
.opacity-25 { opacity: .25; }
.opacity-50 { opacity: .5; }
.opacity-75 { opacity: .75; }
.opacity-100 { opacity: 1; }

@media (min-width: 576px) {
  .opacity-sm-0 { opacity: 0; }
  .opacity-sm-25 { opacity: .25; }
  .opacity-sm-50 { opacity: .5; }
  .opacity-sm-75 { opacity: .75; }
  .opacity-sm-100 { opacity: 1; }
}

@media (min-width: 768px) {
  .opacity-md-0 { opacity: 0; }
  .opacity-md-25 { opacity: .25; }
  .opacity-md-50 { opacity: .5; }
  .opacity-md-75 { opacity: .75; }
  .opacity-md-100 { opacity: 1; }
}

@media (min-width: 1024px) {
  .opacity-lg-0 { opacity: 0; }
  .opacity-lg-25 { opacity: .25; }
  .opacity-lg-50 { opacity: .5; }
  .opacity-lg-75 { opacity: .75; }
  .opacity-lg-100 { opacity: 1; }
}

@media (min-width: 1280px) {
  .opacity-xl-0 { opacity: 0; }
  .opacity-xl-25 { opacity: .25; }
  .opacity-xl-50 { opacity: .5; }
  .opacity-xl-75 { opacity: .75; }
  .opacity-xl-100 { opacity: 1; }
}

@media (min-width: 1536px) {
  .opacity-2xl-0 { opacity: 0; }
  .opacity-2xl-25 { opacity: .25; }
  .opacity-2xl-50 { opacity: .5; }
  .opacity-2xl-75 { opacity: .75; }
  .opacity-2xl-100 { opacity: 1; }
}
```

### Print

Enabling the `print` option will **also** generate utility classes for print, which are only applied within the `@media print { ... }` media query.

```scss
$utilities: (
  "opacity": (
    property: opacity,
    print: true,
    values: (
      0: 0,
      25: .25,
      50: .5,
      75: .75,
      100: 1,
    )
  )
);
```

Output:

```css
.opacity-0 { opacity: 0; }
.opacity-25 { opacity: .25; }
.opacity-50 { opacity: .5; }
.opacity-75 { opacity: .75; }
.opacity-100 { opacity: 1; }

@media print {
  .opacity-print-0 { opacity: 0; }
  .opacity-print-25 { opacity: .25; }
  .opacity-print-50 { opacity: .5; }
  .opacity-print-75 { opacity: .75; }
  .opacity-print-100 { opacity: 1; }
}
```

## Importance

Utilities carry no `!important`. They do not need it: the API emits them into the
`utilities` cascade layer, which is declared last, so every utility already wins
against every component and modifier class regardless of selector specificity.
See [cascade layers](https://coreui.io/bootstrap/docs/migration/v6/#cascade-layers) for the full order.

One case the suffix did cover is CSS of your own written **outside** any layer:
unlayered styles beat every layer, so a plain `.card-title { text-align: left }`
loaded after CoreUI wins over `.text-center`. Move that CSS into `@layer custom`
— the slot reserved for it, between components and helpers — and utilities win
again. There is no switch that brings the suffix back: the layer is the mechanism.
## Using the API

Now that you're familiar with how the utilities API works, learn how to add your own custom classes and modify our default utilities.

`$utilities` is a configurable variable of the `scss/utilities` module, so you change it with `@use ... with ()` rather than by reassigning it after an import. Two patterns cover every case:

- **One file** — configure `$utilities` where you load `@coreui/coreui/scss/coreui`. Use this to add a utility, replace one, or remove one.
- **Two files** — put the change in a partial that loads `@coreui/coreui/scss/utilities`, then load that partial before CoreUI. Use this when your change has to *read* the default definition: a new value on an existing group, a renamed class, or responsive variants on a group you keep.

Sass cannot read a module and configure the same module in one file, which is the whole reason the second pattern exists. In the partial, load the module with `as *` so `$utilities` needs no namespace prefix; assigning to it writes back into the module, and CoreUI picks the new map up when it loads.

```scss
// my-coreui.scss
@use "@coreui/coreui/scss/coreui" with (
  $utilities: (
    // Your utility groups go here
  )
);
```

Your map is merged over the defaults, and the merge is shallow: a group you supply replaces the whole default group under that key. Include `property` and `values` in every group that emits CSS.

For a utilities-only build, load the utilities module and then the API module, which emits the classes and nothing else:

```scss
// my-coreui-utilities.scss
@use "@coreui/coreui/scss/utilities" with (
  $utilities: (
    // Your utility groups go here
  )
);
@use "@coreui/coreui/scss/utilities/api";
```

### Override utilities

Override an existing utility by reusing its key. For example, to make the overflow utilities responsive and change their values:

```scss
// my-coreui.scss
@use "@coreui/coreui/scss/coreui" with (
  $utilities: (
    "overflow": (
      property: overflow,
      responsive: true,
      values: visible hidden scroll auto,
    ),
  )
);
```

Your group replaces the default one, so keep the `property` key or the build stops with an error.

### Add utilities

Add a new utility the same way — supply only what is new:

```scss
// my-coreui.scss
@use "@coreui/coreui/scss/coreui" with (
  $utilities: (
    "cursor": (
      property: cursor,
      class: cursor,
      responsive: true,
      values: auto pointer grab,
    ),
  )
);
```

### Modify utilities

Modifying a utility means reading its default definition first, so this needs the two-file pattern. Below we add another value to the `width` utilities:

```scss
// _my-utilities.scss
@use "sass:map";
// `as *` so `$utilities` needs no prefix, and assigning to it writes back
@use "@coreui/coreui/scss/utilities" as *;

$utilities: map.merge(
  $utilities,
  (
    "width": map.merge(
      map.get($utilities, "width"),
      (
        values: map.merge(
          map.get(map.get($utilities, "width"), "values"),
          (10: 10%),
        ),
      ),
    ),
  )
);
```

Load your partial first, then CoreUI:

```scss
// my-coreui.scss
@use "my-utilities";
@use "@coreui/coreui/scss/coreui";
```

#### Enable responsive

You can turn on responsive classes for a group that isn't responsive by default. This keeps the rest of the definition, so it takes the two-file pattern:

```scss
// _my-utilities.scss
@use "sass:map";
@use "@coreui/coreui/scss/utilities" as *;

$utilities: map.merge(
  $utilities,
  (
    "border": map.merge(
      map.get($utilities, "border"),
      (responsive: true),
    ),
  )
);
```

This will now generate responsive variations of `.border` and `.border-0` for each breakpoint. Your generated CSS will look like this:

```css
.border { ... }
.border-0 { ... }

@media (min-width: 576px) {
  .border-sm { ... }
  .border-sm-0 { ... }
}

@media (min-width: 768px) {
  .border-md { ... }
  .border-md-0 { ... }
}

@media (min-width: 1024px) {
  .border-lg { ... }
  .border-lg-0 { ... }
}

@media (min-width: 1280px) {
  .border-xl { ... }
  .border-xl-0 { ... }
}

@media (min-width: 1536px) {
  .border-2xl { ... }
  .border-2xl-0 { ... }
}
```

#### Rename utilities

Missing v4 utilities, or used to another naming convention? The utilities API can override the resulting `class` of a given utility — for example, to rename `.ms-*` back to `.ml-*`. It reads the default definition, so it takes the two-file pattern:

```scss
// _my-utilities.scss
@use "sass:map";
@use "@coreui/coreui/scss/utilities" as *;

$utilities: map.merge(
  $utilities,
  (
    "margin-start": map.merge(
      map.get($utilities, "margin-start"),
      (class: ml),
    ),
  )
);
```

### Remove utilities

Set a group to `null` to drop it:

```scss
// my-coreui.scss
@use "@coreui/coreui/scss/coreui" with (
  $utilities: (
    "width": null,
  )
);
```

To switch one off while keeping its definition around — so you can read it, or turn it back on later — set `enabled: false` instead. That reads the default definition, so it takes the two-file pattern:

```scss
// _my-utilities.scss
@use "sass:map";
@use "@coreui/coreui/scss/utilities" as *;

$utilities: map.merge(
  $utilities,
  (
    "width": map.merge(map.get($utilities, "width"), (enabled: false)),
  )
);
```

### Add, remove, modify

Anything that only adds or removes goes in one file:

```scss
// my-coreui.scss
@use "@coreui/coreui/scss/coreui" with (
  $utilities: (
    // Remove the `width` utility
    "width": null,

    // Add a new one
    "cursor": (
      property: cursor,
      class: cursor,
      responsive: true,
      values: auto pointer grab,
    ),
  )
);
```

As soon as one change has to read a default — making `border` responsive, say — the whole set moves into the partial:

```scss
// _my-utilities.scss
@use "sass:map";
@use "@coreui/coreui/scss/utilities" as *;

$utilities: map.merge(
  $utilities,
  (
    // Remove the `width` utility
    "width": null,

    // Make an existing utility responsive
    "border": map.merge(
      map.get($utilities, "border"),
      (responsive: true),
    ),

    // Add new utilities
    "cursor": (
      property: cursor,
      class: cursor,
      responsive: true,
      values: auto pointer grab,
    ),
  )
);
```
