# Bootstrap 6 Typography

> Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.

## Global settings

CoreUI for Bootstrap sets basic global display, typography, and link styles. When more control is needed, check out the [textual utility classes](https://coreui.io/bootstrap/docs/utilities/font-size/).

- Use a [native font stack](https://coreui.io/bootstrap/docs/content/reboot/#native-font-stack) that selects the best `font-family` for each OS and device.
- For a more inclusive and accessible type scale, we use the browser's default root `font-size` (typically 16px) so visitors can customize their browser defaults as needed.
- Use the `--cui-body-font-family`, `--cui-body-font-size`, and `--cui-body-line-height` tokens as our typographic base applied to the `<body>`.
- Set the global link color via `--cui-link-color`; the underline and its distance from the text are the `--cui-link-decoration` and `--cui-link-underline-offset` tokens.
- Use `--cui-bg-body` to set a `background-color` on the `<body>` — `light-dark()` picks white or `--cui-gray-975`, so one value covers both color modes.

These styles can be found within `content/_reboot.scss`, and the tokens are declared on `:root` in `_root.scss`. Set `--cui-body-font-size` in `rem`.

### Using a custom font

The default is a [native font stack](https://coreui.io/bootstrap/docs/content/reboot/#native-font-stack), which needs no download and matches the host OS. To use a web font instead, load it and point the two font tokens at it — no Sass compilation involved.

Add the font to your `<head>`, before CoreUI's CSS:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
```

Then override the tokens, in a `<style>` tag or your own stylesheet:

```css
:root {
  --cui-font-sans-serif: "Inter", system-ui, sans-serif;
  --cui-font-mono: "JetBrains Mono", ui-monospace, monospace;
}
```

Keep the generic families at the end of each stack: they are what renders while the web font loads, and what renders if it fails.

`--cui-body-font-family` reads `--cui-font-sans-serif`, so setting the stack covers the body and everything inheriting from it. Set `--cui-body-font-family` directly only when you want the body to differ from the rest.

## Headings

All HTML headings, `<h1>` through `<h6>`, are available.

| Heading | Example |
| --- | --- |
| `<h1></h1>` | <span class="h1">h1. Bootstrap heading</span> |
| `<h2></h2>` | <span class="h2">h2. Bootstrap heading</span> |
| `<h3></h3>` | <span class="h3">h3. Bootstrap heading</span> |
| `<h4></h4>` | <span class="h4">h4. Bootstrap heading</span> |
| `<h5></h5>` | <span class="h5">h5. Bootstrap heading</span> |
| `<h6></h6>` | <span class="h6">h6. Bootstrap heading</span> |

```html
<h1>h1. CoreUI heading</h1>
<h2>h2. CoreUI heading</h2>
<h3>h3. CoreUI heading</h3>
<h4>h4. CoreUI heading</h4>
<h5>h5. CoreUI heading</h5>
<h6>h6. CoreUI heading</h6>
```

`.h1` through `.h6` classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.

```html
<p class="h1">h1. CoreUI heading</p>
<p class="h2">h2. CoreUI heading</p>
<p class="h3">h3. CoreUI heading</p>
<p class="h4">h4. CoreUI heading</p>
<p class="h5">h5. CoreUI heading</p>
<p class="h6">h6. CoreUI heading</p>
```

### Customizing headings

Use the included utility classes to recreate the small secondary heading text from CoreUI 3.

```html
<h3>
  Fancy display heading
  <small class="fg-2">With faded secondary text</small>
</h3>
```

## Display headings and lead text

`.display-1` … `.display-6` and `.lead` are gone. Both were fixed sizes and a fixed weight, so they are composed from the [font size](https://coreui.io/bootstrap/docs/utilities/font-size/), [font weight](https://coreui.io/bootstrap/docs/utilities/font-weight/) and [line height](https://coreui.io/bootstrap/docs/utilities/line-height/) utilities instead — `.fs-6xl` and `.fs-5xl` are the sizes the two largest display headings used, and a lead paragraph is `.fs-lg .fw-light`:

```html
<h1 class="fs-6xl fw-light lh-1">Display heading</h1>
<p class="fs-lg fw-light">This is a lead paragraph. It stands out from regular paragraphs.</p>
```

## Inline text elements

Styling for common inline HTML5 elements.

```html
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
```

Beware that those tags should be used for semantic purpose:

- `<mark>` represents text which is marked or highlighted for reference or notation purposes.
- `<small>` represents side-comments and small print, like copyright and legal text.
- `<s>` represents element that are no longer relevant or no longer accurate.
- `<u>` represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation.

If you want to style your text, you should use the following classes instead:

- `.mark` will apply the same styles as `<mark>`.
- `.small` will apply the same styles as `<small>`.
- `.text-decoration-underline` will apply the same styles as `<u>`.
- `.text-decoration-line-through` will apply the same styles as `<s>`.

While not shown above, feel free to use `<b>` and `<i>` in HTML5. `<b>` is meant to highlight words or phrases without conveying additional importance, while `<i>` is mostly for voice, technical terms, etc.

## Text utilities

Change text alignment, transform, style, weight, line-height, decoration and color with our [text utilities](https://coreui.io/bootstrap/docs/utilities/font-size/) and [color utilities](https://coreui.io/bootstrap/docs/utilities/colors/).

## Abbreviations

Stylized implementation of HTML's `<abbr>` element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.

Add `.initialism` to an abbreviation for a slightly smaller font-size.

```html
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
```

## Blockquotes

For quoting blocks of content from another source within your document. Wrap `<blockquote class="blockquote">` around any HTML as the quote.

```html
<blockquote class="blockquote">
  <p>A well-known quote, contained in a blockquote element.</p>
</blockquote>
```

### Naming a source

The HTML spec requires that blockquote attribution be placed outside the `<blockquote>`. When providing attribution, wrap your `<blockquote>` in a `<figure>` and use a `<figcaption>` or a block level element (e.g., `<p>`) with the `.blockquote-footer` class. Be sure to wrap the name of the source work in `<cite>` as well.

```html
<figure>
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
```

### Nested

A quote inside a quote keeps the same spacing, because the outer quote lays its children out with `--cui-blockquote-gap` rather than each child's own margin.

```html
<blockquote class="blockquote">
  <p>A well-known quote, contained in a blockquote element.</p>
  <blockquote class="blockquote">
    <p>A quote inside the quote above.</p>
  </blockquote>
</blockquote>
```

### Alignment

Use text utilities as needed to change the alignment of your blockquote.

```html
<figure class="text-center">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
```

```html
<figure class="text-end">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
```

## Lists

### Unstyled

Remove the default `list-style` and left margin on list items (immediate children only). **This only applies to immediate children list items**, meaning you will need to add the class for any nested lists as well.

```html
<ul class="list-unstyled">
  <li>This is a list.</li>
  <li>It appears completely unstyled.</li>
  <li>Structurally, it's still a list.</li>
  <li>However, this style only applies to immediate child elements.</li>
  <li>Nested lists:
    <ul>
      <li>are unaffected by this style</li>
      <li>will still show a bullet</li>
      <li>and have appropriate left margin</li>
    </ul>
  </li>
  <li>This may still come in handy in some situations.</li>
</ul>
```

### Inline

Remove a list's bullets and apply some light `margin` with a combination of two classes, `.list-inline` and `.list-inline-item`.

```html
<ul class="list-inline">
  <li class="list-inline-item">This is a list item.</li>
  <li class="list-inline-item">And another one.</li>
  <li class="list-inline-item">But they're displayed inline.</li>
</ul>
```

### Description list alignment

Align terms and descriptions horizontally by using our grid system's predefined classes (or semantic mixins). For longer terms, you can optionally add a `.text-truncate` class to truncate the text with an ellipsis.

```html
<dl class="row">
  <dt class="col-sm-3">Description lists</dt>
  <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

  <dt class="col-sm-3">Term</dt>
  <dd class="col-sm-9">
    <p>Definition for the term.</p>
    <p>And some more placeholder definition text.</p>
  </dd>

  <dt class="col-sm-3">Another term</dt>
  <dd class="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>

  <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
  <dd class="col-sm-9">This can be useful when space is tight. Adds an ellipsis at the end.</dd>

  <dt class="col-sm-3">Nesting</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
    </dl>
  </dd>
</dl>
```

## Responsive font sizes

Headings scale with the viewport: the larger sizes are written as `clamp()`, so they grow with the screen up to the size given as the ceiling and stop there.

The same sizes are on `:root` as `--cui-font-size-*` tokens, one per stop of the `$font-sizes` scale, and reachable as [font size utilities](https://coreui.io/bootstrap/docs/utilities/font-size/) — `.fs-xs` through `.fs-6xl`, or `.text-*` for the size plus the leading that belongs to it. Use them to give a non-heading element a heading's size without also giving it a heading's weight.

## Customizing

### CSS variables

Headings, paragraphs, lists and the rest of the type Reboot styles read their spacing and weight from `:root`, so a subtree can be retyped without touching a single class:

```scss
$reboot-tokens: defaults(
  (
    --cui-paragraph-margin-bottom: var(--cui-spacer),
    --cui-heading-margin-bottom: var(--cui-spacer-3),
    --cui-heading-font-family: inherit,
    --cui-heading-font-style: inherit,
    --cui-heading-font-weight: var(--cui-font-weight-medium),
    --cui-heading-line-height: 1.2,
    --cui-sub-sup-font-size: .75em,
    --cui-hr-margin-y: var(--cui-spacer),
    --cui-hr-color: inherit,
    --cui-hr-border-width: var(--cui-border-width),
    --cui-hr-opacity: .25,
    --cui-legend-margin-bottom: var(--cui-spacer-3),
    --cui-legend-font-size: clamp(1.275rem, 1.275rem + .3vw, 1.5rem),
    --cui-legend-font-weight: inherit,
    --cui-list-padding-x: 2rem,
    --cui-dt-font-weight: var(--cui-font-weight-bold),
    --cui-initialism-font-size: var(--cui-small-font-size),
    --cui-code-font-size: var(--cui-small-font-size),
    --cui-pre-color: inherit,
  ),
  $reboot-tokens
);
```

Blockquotes carry their spacing, size and source colour as CSS variables, on the quote and on its footer separately — the footer is a sibling of the quote, not a child, so it cannot read anything declared on it.

```scss
$blockquote-tokens: defaults(
  (
    --cui-blockquote-margin-y: var(--cui-spacer),
    --cui-blockquote-gap: var(--cui-spacer),
    --cui-blockquote-font-size: calc(var(--cui-body-font-size) * 1.25),
  ),
  $blockquote-tokens
);
```

```scss
$blockquote-footer-tokens: defaults(
  (
    --cui-blockquote-footer-margin-y: var(--cui-spacer),
    --cui-blockquote-footer-color: var(--cui-fg-3),
    --cui-blockquote-footer-font-size: var(--cui-small-font-size),
  ),
  $blockquote-footer-tokens
);
```

An inline list carries the gap between its items, declared on the list so one
value spaces the whole row:

```scss
$list-inline-tokens: defaults(
  (
    --cui-list-inline-padding: .5rem,
  ),
  $list-inline-tokens
);
```

### Sass mixins

There are no dedicated mixins for typography. Fluid sizes are plain `clamp()` values in the heading and display variables.
