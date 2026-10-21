# Bootstrap 6 Text Alignment

> Realign text with our responsive text alignment utilities.

## Text alignment

Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.

```html
<p class="text-start">Start aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-end">End aligned text on all viewport sizes.</p>

<p class="text-sm-end">End aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-end">End aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-end">End aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-end">End aligned text on viewports sized XL (extra large) or wider.</p>
<p class="text-2xl-end">End aligned text on viewports sized XXL (extra extra large) or wider.</p>
```

> Note that we don't provide utility classes for justified text. While, aesthetically, justified text might look more appealing, it does make word-spacing more random and therefore harder to read.

## Customizing

### Utilities API

Text alignment utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
"text-align": (
  responsive: true,
  property: text-align,
  class: text,
  values: (
    start: start,
    end: end,
    center: center,
  )
),
```
