# Bootstrap 5 Link

> Link utilities are used to stylize your anchors to adjust their color, opacity, underline offset, underline color, and more.

## Link opacity

Change the alpha opacity of the link `rgba()` color value with utilities. Please be aware that changes to a color's opacity can lead to links with [*insufficient* contrast](https://coreui.io/bootstrap/docs/getting-started/accessibility/#color-contrast).

```html
<p><a class="link-opacity-10" href="#">Link opacity 10</a></p>
<p><a class="link-opacity-25" href="#">Link opacity 25</a></p>
<p><a class="link-opacity-50" href="#">Link opacity 50</a></p>
<p><a class="link-opacity-75" href="#">Link opacity 75</a></p>
<p><a class="link-opacity-100" href="#">Link opacity 100</a></p>
```

You can even change the opacity level on hover.

```html
<p><a class="link-opacity-10-hover" href="#">Link hover opacity 10</a></p>
<p><a class="link-opacity-25-hover" href="#">Link hover opacity 25</a></p>
<p><a class="link-opacity-50-hover" href="#">Link hover opacity 50</a></p>
<p><a class="link-opacity-75-hover" href="#">Link hover opacity 75</a></p>
<p><a class="link-opacity-100-hover" href="#">Link hover opacity 100</a></p>
```

## Link underlines

### Underline color

Change the underline's color independent of the link text color.

### Underline offset

Change the underline's distance from your text. Offset is set in `em` units to automatically scale with the element's current `font-size`.

```html
<p><a href="#">Default link</a></p>
<p><a class="link-offset-1" href="#">Offset 1 link</a></p>
<p><a class="link-offset-2" href="#">Offset 2 link</a></p>
<p><a class="link-offset-3" href="#">Offset 3 link</a></p>
```

### Underline opacity

Change the underline's opacity. Requires adding `.link-underline` to first set an `rgba()` color we use to then modify the alpha opacity.

```html
<p><a class="link-offset-2 link-underline link-underline-opacity-0" href="#">Underline opacity 0</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-10" href="#">Underline opacity 10</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-25" href="#">Underline opacity 25</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-50" href="#">Underline opacity 50</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-75" href="#">Underline opacity 75</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-100" href="#">Underline opacity 100</a></p>
```

### Hover variants

Just like the `.link-opacity-*-hover` utilities, `.link-offset` and `.link-underline-opacity` utilities include `:hover` variants by default. Mix and match to create unique link styles.

```html
<a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
  Underline opacity 0
</a>
```

## Colored links

[Colored link helpers](https://coreui.io/bootstrap/docs/helpers/colored-links/) have been updated to pair with our link utilities. Use the new utilities to modify the link opacity, underline opacity, and underline offset.

```html
<p><a href="#" class="link-${c.name} link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">${c.title} link</a></p>

<p><a href="#" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Emphasis link</a></p>
```

> ##### Conveying meaning to assistive technologies
> 
> Relying on color to convey meaning creates a visual cue that assistive technologies, like screen readers, cannot perceive. It's essential that any information represented by color is either apparent from the content itself (e.g., the visible text) or supplemented by alternative methods, such as extra text using the `.visually-hidden` class.

## Sass

In addition to the following Sass functionality, consider reading about our included [CSS custom properties](https://coreui.io/bootstrap/docs/customize/css-variables/) (aka CSS variables) for colors and more.

### Utilities API

Link utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
"link-opacity": (
  css-var: true,
  class: link-opacity,
  state: hover,
  values: (
    10: .1,
    25: .25,
    50: .5,
    75: .75,
    100: 1
  )
),
"link-offset": (
  property: text-underline-offset,
  class: link-offset,
  state: hover,
  values: (
    1: .125em,
    2: .25em,
    3: .375em,
  )
),
"link-underline": (
  property: text-decoration-color,
  class: link-underline,
  local-vars: (
    "link-underline-opacity": 1
  ),
  values: map.merge(
    $utilities-links-underline,
    (
      null: rgba(var(--cui-link-color-rgb), var(--cui-link-underline-opacity, 1)),
    )
  )
),
"link-underline-opacity": (
  css-var: true,
  class: link-underline-opacity,
  state: hover,
  values: (
    0: 0,
    10: .1,
    25: .25,
    50: .5,
    75: .75,
    100: 1
  ),
),
```
