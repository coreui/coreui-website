# Bootstrap 6 Breadcrumb

> Bootstrap breadcrumb navigation component which indicates the current location within a navigational hierarchy that automatically adds separators.

## Example

The breadcrumb navigation provides links back to each previous page the user navigated through and shows the current location in a website or an application. Separators are added for you, so the markup is a list of steps and nothing else.

Give each step a `.breadcrumb-link` for a padded, hoverable target. It works on an `<a>`, and on a `<button>` it looks exactly the same — which is what lets a step [open a menu](#collapsed-items).

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page"><span class="breadcrumb-link">Home</span></li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a class="breadcrumb-link" href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page"><span class="breadcrumb-link">Library</span></li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a class="breadcrumb-link" href="#">Home</a></li>
    <li class="breadcrumb-item"><a class="breadcrumb-link" href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page"><span class="breadcrumb-link">Data</span></li>
  </ol>
</nav>
```

### Plain links

A step without `.breadcrumb-link` renders as a plain text link. Markup written before v6 keeps working, and so does mixing the two.

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
```

## Dividers

A breadcrumb writes its separators for you. Put a `.breadcrumb-divider` in the markup when one separator needs its own content, or change them all at once with a variable.

Mark every divider element `aria-hidden="true"`: it is a list item like any other, and without it a screen reader counts the separators as steps in the trail.

### Default divider

_Added in 6.0.0._

Leave the `.breadcrumb-divider` empty to render the default separator. The automatic divider steps aside wherever you place an element, so the two never double up, and the spacing is the same either way.

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a class="breadcrumb-link" href="#">Home</a></li>
    <li class="breadcrumb-divider" aria-hidden="true"></li>
    <li class="breadcrumb-item active" aria-current="page"><span class="breadcrumb-link">Library</span></li>
  </ol>
</nav>
```

### Text dividers

Put the character straight into the element — no quoting, no variable.

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a class="breadcrumb-link" href="#">Home</a></li>
    <li class="breadcrumb-divider" aria-hidden="true">›</li>
    <li class="breadcrumb-item"><a class="breadcrumb-link" href="#">Library</a></li>
    <li class="breadcrumb-divider" aria-hidden="true">→</li>
    <li class="breadcrumb-item active" aria-current="page"><span class="breadcrumb-link">Data</span></li>
  </ol>
</nav>
```

### SVG dividers

Put an inline SVG inside the element. Nothing has to be URL escaped, and `currentColor` makes it follow the divider color, dark mode included.

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a class="breadcrumb-link" href="#">Home</a></li>
    <li class="breadcrumb-divider" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 2l4 6-4 6"/></svg>
    </li>
    <li class="breadcrumb-item active" aria-current="page"><span class="breadcrumb-link">Library</span></li>
  </ol>
</nav>
```

### Changing every divider

The separators a breadcrumb writes for itself come from [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content). Change them all at once with the `--cui-breadcrumb-divider` custom property. Set it on the `<ol class="breadcrumb">` itself — the token is declared there, so a value put on a wrapping element is overridden rather than inherited.

A right-to-left breadcrumb follows the same divider unless you give it its own. Reach for `--cui-breadcrumb-divider-flipped` when the separator points somewhere — `>` should become `<`, `→` should become `←` — and leave it alone for a symmetric one like `/`.

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb" style="--cui-breadcrumb-divider: '>';">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>
```

The value is `content`, so a text divider has to be quoted. Using `>` as the divider:

```css
.breadcrumb {
  --cui-breadcrumb-divider: ">";
}
```

### Embedded SVG

It's also possible to use an **embedded SVG icon**. Apply it via our CSS custom property, or use the Sass variable.

> ##### Using embedded SVG
> 
> Inlining SVG as data URI requires to URL escape a few characters, most notably `` and `#`. You need to URL escape your SVG yourself. Read [Kevin Weber's explanations on CodePen](https://codepen.io/kevinweber/pen/dXWoRw ) for detailed information on what to escape.

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb" style="--cui-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>
```

```css
.breadcrumb {
  --cui-breadcrumb-divider: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E");
}
```

You can also remove the divider by setting `--cui-breadcrumb-divider: '';` — an empty string counts as a value in a custom property.

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb" style="--cui-breadcrumb-divider: '';">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>
```

```scss
$breadcrumb-divider: none;
```

## Collapsed items

_Added in 6.0.0._

A long trail can keep its middle steps behind one item. Make that item a `.breadcrumb-link` button that toggles a [menu](https://coreui.io/bootstrap/docs/components/menu/) of the hidden steps — no new component, the two compose as they are.

Give the button an accessible name: `…` on its own tells a screen reader nothing.

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a class="breadcrumb-link" href="#">Home</a></li>
    <li class="breadcrumb-item">
      <button class="breadcrumb-link" type="button" data-coreui-toggle="menu" aria-expanded="false" aria-label="Show 3 hidden breadcrumb items">…</button>
      <ul class="menu">
        <li><a class="menu-item" href="#">Library</a></li>
        <li><a class="menu-item" href="#">Reports</a></li>
        <li><a class="menu-item" href="#">2026</a></li>
      </ul>
    </li>
    <li class="breadcrumb-item active" aria-current="page"><span class="breadcrumb-link">Data</span></li>
  </ol>
</nav>
```

> ##### Keep it a disclosure, not a menu
> 
> The hidden steps are navigation links, so leave them as links inside a plain list. Do not add `role="menu"` and `role="menuitem"`: those describe an application menu of commands, and applying them makes a screen reader announce a menu, expect arrow-key navigation, and stop presenting the steps as links. Our menu deliberately adds no `role` of its own, so the markup above is already a disclosure — the button carries `aria-expanded`, and that is what a user needs to hear.

## Accessibility

Since breadcrumbs provide navigation, it's useful to add a significant label such as `aria-label="breadcrumb"` to explain the type of navigation implemented in the `<nav>` element. You should also add an `aria-current="page"` to the last item of the set to show that it represents the current page.

For more information, see the [ARIA Authoring Practices Guide breadcrumb pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/).

## Customizing

### CSS variables

Breadcrumbs use local CSS variables on `.breadcrumb` for enhanced real-time customization.

```scss
$breadcrumb-tokens: defaults(
  (
    --cui-breadcrumb-padding-x: 0,
    --cui-breadcrumb-padding-y: 0,
    --cui-breadcrumb-bg: transparent,
    --cui-breadcrumb-border-radius: var(--cui-radius-5),
    --cui-breadcrumb-divider: #{meta.inspect(escape-svg(string.quote("/")))},
    --cui-breadcrumb-divider-color: var(--cui-fg-4),
    --cui-breadcrumb-divider-flipped: #{meta.inspect(escape-svg(var(--cui-breadcrumb-divider)))},
    --cui-breadcrumb-item-padding-x: .5rem,
    --cui-breadcrumb-item-active-color: var(--cui-fg-1),
    --cui-breadcrumb-link-padding-x: .5rem,
    --cui-breadcrumb-link-padding-y: .25rem,
    --cui-breadcrumb-link-color: var(--cui-fg-3),
    --cui-breadcrumb-link-hover-color: var(--cui-fg-2),
    --cui-breadcrumb-link-hover-bg: var(--cui-bg-1),
    --cui-breadcrumb-link-border-radius: var(--cui-radius-7),
    --cui-breadcrumb-font-size: inherit,
  ),
  $breadcrumb-tokens
);
```
