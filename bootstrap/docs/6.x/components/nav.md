# Bootstrap 6 Nav

> Documentation and examples for how to use CoreUI for Bootstrap's included navigation components.

## Base nav

Navigation available in CoreUI share general markup and styles, from the base `.nav` class to the active and disabled states. Swap modifier classes to switch between each style.

The base `.nav` component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling.

> The base `.nav` component does not include any `.active` state. The following examples include the class, mainly to demonstrate that this particular class does not trigger any special styling.
> 
> To convey the active state to assistive technologies, use the `aria-current` attribute — using the `page` value for current page, or `true` for the current item in a set.

```html
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

Classes are used throughout, so your markup can be super flexible. Use `<ul>`s like above, `<ol>` if the order of your items is important, or roll your own with a `<nav>` element. Because the `.nav` uses `display: flex`, the nav links behave the same as nav items would, but without the extra markup.

```html
<nav class="nav">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
```

## Available styles

Change the style of `.nav`s component with modifiers and utilities. Mix and match as needed, or build your own.

### Horizontal alignment

Change the horizontal alignment of your nav with [flexbox utilities](https://coreui.io/bootstrap/docs/utilities/justify-content/). By default, navs are left-aligned, but you can easily change them to center or right aligned.

Centered with `.justify-content-center`:

```html
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

Right-aligned with `.justify-content-end`:

```html
<ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

### Vertical

Stack your navigation by changing the flex item direction with the `.flex-column` utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., `.flex-sm-column`).

```html
<ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

As always, vertical navigation is possible without `<ul>`s, too.

```html
<nav class="nav flex-column">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
```

### Tabs

Takes the basic nav from above and adds the `.nav-tabs` class to generate a tabbed interface. Use them to create tabbable regions with our [tab plugin](https://coreui.io/bootstrap/docs/components/tab/).

```html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

### Pills

Take that same HTML, but use `.nav-pills` instead:

```html
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

### Underline

Take that same HTML, but use `.nav-underline` instead:

```html
<ul class="nav nav-underline">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

### Underline border

Take that same HTML, but use `.nav-underline-border` instead:

```html
<ul class="nav nav-underline-border">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

### Enclosed

Use the `.nav-enclosed` class to give your navigation items a subtle border and rounded styling.

```html
<ul class="nav nav-enclosed">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

### Enclosed pills

Combine `.nav-enclosed` with `.nav-enclosed-pills` to achieve a pill-style appearance for each nav item, using pill-shaped borders and smoother outlines.

```html
<ul class="nav nav-enclosed nav-enclosed-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

### Fill and justify

Force your `.nav`'s contents to extend the full available width one of two modifier classes. To proportionately fill all available space with your `.nav-item`s, use `.nav-fill`. Notice that all horizontal space is occupied, but not every nav item has the same width.

```html
<ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Much longer nav link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

When using a `<nav>`-based navigation, you can safely omit `.nav-item` as only `.nav-link` is required for styling `<a>` elements.

```html
<nav class="nav nav-pills nav-fill">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Much longer nav link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
```

For equal-width elements, use `.nav-justified`. All horizontal space will be occupied by nav links, but unlike the `.nav-fill` above, every nav item will be the same width.

```html
<ul class="nav nav-pills nav-justified">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Much longer nav link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

Similar to the `.nav-fill` example using a `<nav>`-based navigation.

```html
<nav class="nav nav-pills nav-justified">
  <a class="nav-link active" aria-current="page" href="#">Active</a>
  <a class="nav-link" href="#">Much longer nav link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
```

Either class also stretches an [enclosed nav](#enclosed), which otherwise stays as wide as its links.
## Theme variants

A [theme class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) recolors a nav. Every link reads the theme's foreground; what marks the active one follows the variant — a tint on the base nav, a solid fill on pills, the line on either underline.

```html
<ul class="nav theme-success">
  <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Active</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
</ul>
```

```html
<ul class="nav nav-pills theme-success">
  <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Active</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
</ul>
```

```html
<ul class="nav nav-underline theme-success">
  <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Active</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
</ul>
```

```html
<ul class="nav nav-underline-border theme-success">
  <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Active</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
</ul>
```

## Working with flex utilities

If you need responsive nav variations, consider using a series of [flexbox utilities](https://coreui.io/bootstrap/docs/utilities/flex/). While more verbose, these utilities offer greater customization across responsive breakpoints. In the example below, our nav will be stacked on the lowest breakpoint, then adapt to a horizontal layout that fills the available width starting from the small breakpoint.

```html
<nav class="nav nav-pills flex-column flex-sm-row">
  <a class="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">Active</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Longer nav link</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
  <a class="flex-sm-fill text-sm-center nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
```

## Regarding accessibility

If you're using navs to provide a navigation bar, be sure to add a `role="navigation"` to the most logical parent container of the `<ul>`, or wrap a `<nav>` element around the whole navigation. Do not add the role to the `<ul>` itself, as this would prevent it from being announced as an actual list by assistive technologies.

Note that navigation bars, even if visually styled as tabs with the `.nav-tabs` class, should **not** be given `role="tablist"`, `role="tab"` or `role="tabpanel"` attributes. These are only appropriate for dynamic tabbed interfaces, as described in the [ARIA Authoring Practices Guide tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/). See the [tab plugin](https://coreui.io/bootstrap/docs/components/tab/) for dynamic tabbed interfaces. The `aria-current` attribute is not necessary on dynamic tabbed interfaces since our JavaScript handles the selected state by adding `aria-selected="true"` on the active tab.

## Using menus

Add menus with a little extra HTML and the [menu JavaScript plugin](https://coreui.io/bootstrap/docs/components/menu/#usage).

### Tabs with menus

```html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" role="button" data-coreui-toggle="menu" aria-expanded="false">Menu</a>
    <div class="menu">
      <a class="menu-item" href="#">Action</a>
      <a class="menu-item" href="#">Another action</a>
      <a class="menu-item" href="#">Something else here</a>
      <hr class="menu-divider">
      <a class="menu-item" href="#">Separated link</a>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

### Pills with menus

```html
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" role="button" data-coreui-toggle="menu" aria-expanded="false">Menu</a>
    <div class="menu">
      <a class="menu-item" href="#">Action</a>
      <a class="menu-item" href="#">Another action</a>
      <a class="menu-item" href="#">Something else here</a>
      <hr class="menu-divider">
      <a class="menu-item" href="#">Separated link</a>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

## Customizing

### CSS variables

Navs use local CSS variables on `.nav`, `.nav-tabs`, `.nav-pills`, `.nav-underline`, `.nav-underline-border` and `.nav-enclosed` for enhanced real-time customization.

On the `.nav` base class:

```scss
$nav-tokens: defaults(
  (
    --cui-nav-gap: 0,
    --cui-nav-link-gap: .5rem,
    --cui-nav-link-align: center,
    --cui-nav-link-justify: center,
    --cui-nav-link-border-radius: var(--cui-radius-5),
    --cui-nav-link-padding-x: 1rem,
    --cui-nav-link-padding-y: #{$nav-link-padding-y},
    --cui-nav-link-font-size: inherit,
    --cui-nav-link-font-weight: inherit,
    --cui-nav-link-color: var(--cui-fg-2),
    --cui-nav-link-hover-color: var(--cui-fg-1),
    --cui-nav-link-hover-bg: var(--cui-bg-1),
    --cui-nav-link-active-color: var(--cui-fg-body),
    --cui-nav-link-active-bg: var(--cui-bg-2),
    --cui-nav-link-disabled-color: var(--cui-fg-4),
    --cui-nav-link-transition-property: #{color, background-color, border-color},
    --cui-nav-link-transition-duration: .15s,
    --cui-nav-link-transition-timing: ease-in-out,
  ),
  $nav-tokens
);
```

On the `.nav-tabs` modifier class:

```scss
$nav-tabs-tokens: defaults(
  (
    --cui-nav-tabs-border-width: var(--cui-border-width),
    --cui-nav-tabs-border-color: #{$nav-tabs-border-color},
    --cui-nav-tabs-border-radius: var(--cui-radius-5),
    --cui-nav-tabs-link-hover-border-color: #{var(--cui-border-subtle) var(--cui-border-subtle) $nav-tabs-border-color},
    --cui-nav-tabs-link-active-color: var(--cui-fg-body),
    --cui-nav-tabs-link-active-bg: #{$nav-tabs-link-active-bg},
    --cui-nav-tabs-link-active-border-color: #{var(--cui-border-color) var(--cui-border-color) $nav-tabs-link-active-bg},
  ),
  $nav-tabs-tokens
);
```

On the `.nav-pills` modifier class:

```scss
$nav-pills-tokens: defaults(
  (
    --cui-nav-pills-border-radius: 3rem,
    --cui-nav-pills-link-active-color: var(--cui-primary-contrast),
    --cui-nav-pills-link-active-bg: var(--cui-primary-bg),
  ),
  $nav-pills-tokens
);
```

_Added in 5.0.0._

On the `.nav-underline` modifier class:

```scss
$nav-underline-tokens: defaults(
  (
    --cui-nav-underline-gap: 1rem,
    --cui-nav-underline-border-width: .125rem,
    --cui-nav-underline-link-active-color: var(--cui-fg-body),
  ),
  $nav-underline-tokens
);
```

_Added in 5.0.0._

On the `.nav-underline-border` modifier class:

```scss
$nav-underline-border-tokens: defaults(
  (
    --cui-nav-underline-border-gap: .5rem,
    --cui-nav-underline-border-border-color: var(--cui-border-color),
    --cui-nav-underline-border-border-width: .125rem,
    --cui-nav-underline-border-link-padding-x: .5rem,
    --cui-nav-underline-border-link-padding-y: .5rem,
    --cui-nav-underline-border-link-color: var(--cui-fg-2),
    --cui-nav-underline-border-link-active-color: var(--cui-primary-base),
    --cui-nav-underline-border-link-disabled-color: var(--cui-fg-3),
  ),
  $nav-underline-border-tokens
);
```

On the `.nav-enclosed` modifier class, where `.nav-enclosed-pills` changes only `--cui-nav-enclosed-border-radius`:

```scss
$nav-enclosed-tokens: defaults(
  (
    --cui-nav-enclosed-padding-y: .125rem,
    --cui-nav-enclosed-padding-x: .125rem,
    --cui-nav-enclosed-bg: var(--cui-bg-3),
    --cui-nav-enclosed-border-radius: var(--cui-radius-5),
    --cui-nav-enclosed-link-padding-x: .875rem,
    --cui-nav-enclosed-link-padding-y: .375rem,
    --cui-nav-enclosed-link-color: var(--cui-fg-body),
    --cui-nav-enclosed-link-border-width: 1px,
    --cui-nav-enclosed-link-active-color: var(--cui-fg-body),
    --cui-nav-enclosed-link-active-bg: var(--cui-bg-body),
    --cui-nav-enclosed-link-active-border-color: var(--cui-border-color),
    --cui-nav-enclosed-link-hover-box-shadow: var(--cui-box-shadow-sm),
    --cui-nav-enclosed-link-disabled-color: var(--cui-fg-2),
  ),
  $nav-enclosed-tokens
);
```

Tab pane variables:

```scss
$tab-pane-tokens: defaults(
  (
    --cui-tab-pane-transition-property: opacity,
    --cui-tab-pane-transition-duration: .15s,
    --cui-tab-pane-transition-timing: linear,
  ),
  $tab-pane-tokens
);
```

### Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

```scss
$nav-link-padding-y:                .5rem !default;

$nav-tabs-border-color:             var(--cui-border-color) !default;
$nav-tabs-link-active-bg:           var(--cui-bg-body) !default;
```
