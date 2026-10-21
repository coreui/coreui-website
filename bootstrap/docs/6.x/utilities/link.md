# Bootstrap 6 Link

> Link utilities are used to stylize your anchors to adjust their color, opacity, underline offset, underline color, and more.

## Link opacity

Change the alpha opacity of the link colour with `.link-{percentage}` utilities — `color-mix()` fades `--cui-link-color` towards `transparent`. Please be aware that changes to a color's opacity can lead to links with [*insufficient* contrast](https://coreui.io/bootstrap/docs/getting-started/accessibility/#color-contrast).

```html
<p><a class="link-10" href="#">Link opacity 10</a></p>
<p><a class="link-20" href="#">Link opacity 20</a></p>
<p><a class="link-30" href="#">Link opacity 30</a></p>
<p><a class="link-40" href="#">Link opacity 40</a></p>
<p><a class="link-50" href="#">Link opacity 50</a></p>
<p><a class="link-60" href="#">Link opacity 60</a></p>
<p><a class="link-70" href="#">Link opacity 70</a></p>
<p><a class="link-80" href="#">Link opacity 80</a></p>
<p><a class="link-90" href="#">Link opacity 90</a></p>
<p><a class="link-100" href="#">Link opacity 100</a></p>
```

You can even change the opacity level on hover.

```html
<p><a class="link-10-hover" href="#">Link hover opacity 10</a></p>
<p><a class="link-20-hover" href="#">Link hover opacity 20</a></p>
<p><a class="link-30-hover" href="#">Link hover opacity 30</a></p>
<p><a class="link-40-hover" href="#">Link hover opacity 40</a></p>
<p><a class="link-50-hover" href="#">Link hover opacity 50</a></p>
<p><a class="link-60-hover" href="#">Link hover opacity 60</a></p>
<p><a class="link-70-hover" href="#">Link hover opacity 70</a></p>
<p><a class="link-80-hover" href="#">Link hover opacity 80</a></p>
<p><a class="link-90-hover" href="#">Link hover opacity 90</a></p>
<p><a class="link-100-hover" href="#">Link hover opacity 100</a></p>
```

`.link-opacity-{10|25|50|75|100}` and their `-hover` variants are the deprecated v5 spellings; they still render and are removed in v7.

## Link underlines

### Underline color

Change the underline's color independent of the link text color.

### Underline offset

Change the underline's distance from your text. Offset is set in `em` units to automatically scale with the element's current `font-size`. Every link already sits on a `.2em` offset from the global `--cui-link-underline-offset` token; these utilities override it per link.

```html
<p><a href="#">Default link</a></p>
<p><a class="underline-offset-1" href="#">Offset 1 link</a></p>
<p><a class="underline-offset-2" href="#">Offset 2 link</a></p>
<p><a class="underline-offset-3" href="#">Offset 3 link</a></p>
```

### Underline thickness

Change how heavy the underline is drawn, on links or any underlined text. Hover variants are included.

```html
<p><a class="underline-thickness-1" href="#">Thickness 1 link</a></p>
<p><a class="underline-thickness-2" href="#">Thickness 2 link</a></p>
<p><a class="underline-thickness-3" href="#">Thickness 3 link</a></p>
<p><a class="underline-thickness-1 underline-thickness-3-hover" href="#">Thicker on hover</a></p>
```

### Underline opacity

Change the underline's opacity with `.underline-{percentage}`. The underline colour comes from `--cui-underline`, which `.underline` sets to `currentColor` and `.underline-{color}` to a theme colour; without either class the opacity utility fades `currentColor`.

```html
<p><a class="underline-offset-2 underline underline-10" href="#">Underline opacity 10</a></p>
<p><a class="underline-offset-2 underline underline-30" href="#">Underline opacity 30</a></p>
<p><a class="underline-offset-2 underline underline-50" href="#">Underline opacity 50</a></p>
<p><a class="underline-offset-2 underline underline-70" href="#">Underline opacity 70</a></p>
<p><a class="underline-offset-2 underline underline-100" href="#">Underline opacity 100</a></p>
```

`.underline-opacity-{0|10|25|50|75|100}` are the deprecated v5 spellings; they still render and are removed in v7.

### Hover variants

Just like the `.link-{percentage}-hover` utilities, `.underline-offset` and `.underline-{percentage}` utilities include `:hover` variants by default. Mix and match to create unique link styles.

```html
<a class="underline-offset-2 underline-offset-3-hover underline underline-20 underline-100-hover" href="#">
  Underline opacity 20, 100 on hover
</a>
```

## Coloring links

Give a link a theme colour with a [`.theme-*`](https://coreui.io/bootstrap/docs/customize/theme/) class. Reboot resolves a link's colour from `--cui-theme-fg`, which every theme class sets, so the link follows the theme rather than needing a class of its own.

```html
<p><a href="#" class="theme-${c.name} underline-offset-2 underline underline-20 underline-100-hover">${c.title} link</a></p>

<p><a href="#" class="text-body-emphasis underline-offset-2 underline underline-30 underline-70-hover">Emphasis link</a></p>
```

`.underline` here carries the underline colour, which defaults to `currentColor` — so it follows the theme too, and the `.underline-{percentage}` utilities have something to fade. Name a colour with `.underline-{color}` to break that pairing deliberately.

The theme slot is a tone picked for text, not the raw brand colour: it darkens on a light background and lightens on a dark one, which is why the same class reads on both.

> ##### Conveying meaning to assistive technologies
> 
> Relying on color to convey meaning creates a visual cue that assistive technologies, like screen readers, cannot perceive. It's essential that any information represented by color is either apparent from the content itself (e.g., the visible text) or supplemented by alternative methods, such as extra text using the `.visually-hidden` class.

## Customizing

In addition to the following Sass functionality, consider reading about our included [CSS custom properties](https://coreui.io/bootstrap/docs/customize/css-variables/) (aka CSS variables) for colors and more.

### Utilities API

Link utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
"link": (
  class: link,
  property: color,
  state: hover,
  values: theme-opacity-values(--cui-link-color)
),
// deprecated
"link-opacity": (
  class: link-opacity,
  property: color,
  state: hover,
  values: theme-opacity-values(--cui-link-color, null, (10: .1, 25: .25, 50: .5, 75: .75, 100: 1))
),
"underline-offset": (
  property: text-underline-offset,
  class: underline-offset,
  state: hover,
  values: (
    1: .125em,
    2: .25em,
    3: .375em,
  )
),
"underline-thickness": (
  property: text-decoration-thickness,
  class: underline-thickness,
  state: hover,
  values: (
    1: 1px,
    2: 2px,
    3: 3px,
    4: 4px,
    5: 5px,
  )
),
"underline-color": (
  property: (
    --cui-underline: null,
    text-decoration-color: var(--cui-underline),
  ),
  class: underline,
  values: map.merge(
    $utilities-links-underline,
    (
      // currentColor, so a themed link underlines in its own colour rather than
      // the global link blue. Name a colour explicitly to break that pairing.
      null: currentcolor,
    )
  )
),
"underline-opacity": (
  class: underline,
  property: text-decoration-color,
  state: hover,
  values: theme-opacity-values(--cui-underline, currentcolor)
),
// deprecated
"underline-opacity-legacy": (
  class: underline-opacity,
  property: text-decoration-color,
  state: hover,
  values: theme-opacity-values(--cui-underline, currentcolor, (0: 0, 10: .1, 25: .25, 50: .5, 75: .75, 100: 1))
),
```
