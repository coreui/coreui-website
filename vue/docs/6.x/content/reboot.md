# Reboot

> Reboot, a collection of element-specific CSS changes in a single file, kickstart CoreUI for Vue to provide an elegant, consistent, and simple baseline to build upon.

## Approach

Reboot builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, we reboot some `<table>` styles for a simpler baseline and later provide `.table`, `.table-bordered`, and more.

Here are our guidelines and reasons for choosing what to override in Reboot:

- Update some browser default values to use `rem`s instead of `em`s for scalable component spacing.
- Avoid `margin-top`. Vertical margins can collapse, yielding unexpected results. More importantly though, a single direction of `margin` is a simpler mental model.
- For easier scaling across device sizes, block elements should use `rem`s for `margin`s.
- Keep declarations of `font`-related properties to a minimum, using `inherit` whenever possible.

## CSS variables

_Added in 4.1.0._

With v4.1.0, we standardized our required `@import`s across all our CSS bundles (including `coreui.css`, `coreui-reboot.css`, and `coreui-grid.css` to include `_root.scss` . This adds `:root` level CSS variables to all bundles, regardless of how many of them are used in that bundle. Ultimately CoreUI will continue to see more CSS variables added over time.

Reboot styles bare HTML, so its variables live on `:root` rather than on a class — set any of them there, or on a subtree, to restyle the elements underneath:

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

`<kbd>` carries its own, on the element:

```scss
$reboot-kbd-tokens: defaults(
  (
    --cui-kbd-padding-y: .1875rem,
    --cui-kbd-padding-x: .375rem,
    --cui-kbd-font-size: var(--cui-small-font-size),
    --cui-kbd-color: var(--cui-bg-body),
    --cui-kbd-bg: var(--cui-fg-2),
    --cui-kbd-border-radius: var(--cui-radius-3),
  ),
  $reboot-kbd-tokens
);
```

The `<body>` rules show how a variable is consumed:

```scss
body {
  margin: 0; // 1
  font-family: var(--cui-body-font-family);
  font-size: var(--cui-body-font-size);
  font-weight: var(--cui-body-font-weight);
  line-height: var(--cui-body-line-height);
  color: var(--cui-fg-body);
  background-color: var(--cui-bg-body); // 2
  -webkit-text-size-adjust: 100%; // 3
  -webkit-tap-highlight-color: transparent; // 4
}
```

Which means the page can be restyled from the markup, with no recompile:

```html
<body style="--cui-body-color: #333; --cui-paragraph-margin-bottom: 1.5rem;">
  <!-- ... -->
</body>
```

## Page defaults

The `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:

- The `box-sizing` is globally set on every element—including `*::before` and `*::after`, to `border-box`. This ensures that the declared width of element is never exceeded due to padding or border.
  - No base `font-size` is declared on the `<html>`, but `16px` is assumed (the browser default). `font-size: 1rem` is applied on the `<body>` for easy responsive type-scaling via media queries while respecting user preferences and ensuring a more accessible approach. This browser default can be overridden by modifying the `$font-size-root` variable.
- The `<body>` also sets a global `font-family`, `font-weight`, `line-height`, and `color`. This is inherited later by some form elements to prevent font inconsistencies.
- For safety, the `<body>` has a declared `background-color`, defaulting to `#fff`.
- `accent-color` is set to `--cui-primary` on the root, so native controls that we do not restyle — a bare checkbox, radio, range or `<progress>` — are drawn in your brand color instead of the browser's blue.

## Links

Links take `--cui-link-color` and switch to `--cui-link-hover-color` on hover. Inside anything that sets a theme, both follow it: the link reads `--cui-theme-fg` and hovers to `--cui-theme-fg-emphasis`, so a link on a colored surface stays part of that surface. The underline sits `.2em` below the text through `--cui-link-underline-offset`, clearing descenders; the [`.underline-offset-*` utilities](https://coreui.io/vue/docs/utilities/link/#underline-offset) adjust it per link, and setting the token to `auto` restores the browser default.

Placeholder links — an `<a>` with neither `href` nor a class — keep the surrounding text color and get no underline, so an anchor waiting for its URL doesn't read as a working link.

```html
<p><a href="#">This is a link</a></p>
<p><a>This is a placeholder link</a></p>
```

## Native font stack

CoreUI for Vue utilizes a "native font stack" or "system font stack" for optimum text rendering on every device and OS. These system fonts have been designed specifically with today's devices in mind, with improved rendering on screens, variable font support, and more. Read more about [native font stacks in this *Smashing Magazine* article](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/).

```scss
$font-family-sans-serif:
  // Cross-platform generic font family (default user interface font)
  system-ui,
  // Safari for macOS and iOS (San Francisco)
  -apple-system,
  // Windows
  "Segoe UI",
  // Android
  Roboto,
  // older macOS and iOS
  "Helvetica Neue"
  // Linux
  "Noto Sans",
  "Liberation Sans",
  // Basic web fallback
  Arial,
  // Sans serif fallback
  sans-serif,
  // Emoji fonts
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
```

Note that because the font stack includes emoji fonts, many common symbol/dingbat unicode characters will be rendered as multi-colored pictographs. Their appearance will vary, depending on the style used in the browser/platform's native emoji font, and they won't be affected by any CSS `color` styles.

This `font-family` is applied to the `<body>` and automatically inherited globally throughout Bootstrap. To switch the global `font-family`, update `$font-family-base` and recompile Bootstrap.

## Headings and paragraphs

All heading elements—e.g., `<h1>`—and `<p>` are reset to have their `margin-top` removed. Headings have `margin-bottom: .5rem` added and paragraphs `margin-bottom: 1rem` for easy spacing.

| Heading | Example |
| --- | --- |
| `<h1></h1>` | <span class="h1">h1. Bootstrap heading</span> |
| `<h2></h2>` | <span class="h2">h2. Bootstrap heading</span> |
| `<h3></h3>` | <span class="h3">h3. Bootstrap heading</span> |
| `<h4></h4>` | <span class="h4">h4. Bootstrap heading</span> |
| `<h5></h5>` | <span class="h5">h5. Bootstrap heading</span> |
| `<h6></h6>` | <span class="h6">h6. Bootstrap heading</span> |

## Horizontal rules

The `<hr />` element has been simplified. Similar to browser defaults, `<hr />`s are styled via `border-top`, have a default `opacity: .25`, and automatically inherit their `border-color` via `color`, including when `color` is set via the parent. They can be modified with text, border, and opacity utilities.

```html
<hr>

<div class="fg-success">
  <hr>
</div>

<hr class="border border-danger border-2 opacity-50">
<hr class="border border-primary border-3 opacity-75">
```

## Lists

All lists—`<ul>`, `<ol>`, and `<dl>`—have their `margin-top` removed and a `margin-bottom: 1rem`. Nested lists have no `margin-bottom`. We've also reset the `padding-left` on `<ul>` and `<ol>` elements.

For simpler styling, clear hierarchy, and better spacing, description lists have updated `margin`s. `<dd>`s reset `margin-left` to `0` and add `margin-bottom: .5rem`. `<dt>`s are **bolded**.

## Inline code

Wrap inline snippets of code with `<code>`. Be sure to escape HTML angle brackets.

```html
For example, <code>&lt;section&gt;</code> should be wrapped as inline.
```

## Code blocks

Use `<pre>`s for multiple lines of code. Once again, be sure to escape any angle brackets in the code for proper rendering. The `<pre>` element is reset to remove its `margin-top` and use `rem` units for its `margin-bottom`.

```html
<pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
</code></pre>
```

## Variables

For indicating variables use the `<var>` tag.

```html
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
```

## User input

Use the `<kbd>` to indicate input that is typically entered via keyboard.

```html
To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
```

## Sample output

For indicating sample output from a program use the `<samp>` tag.

```html
<samp>This text is meant to be treated as sample output from a computer program.</samp>
```

## Tables

Tables are slightly adjusted to style `<caption>`s, collapse borders, and ensure consistent `text-align` throughout. Additional changes for borders, padding, and more come with [the `.table` class](https://coreui.io/vue/docs/components/table/).

```html
<table>
  <caption>
    This is an example table, and this is its caption to describe the contents.
  </caption>
  <thead>
    <tr>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
      <th>Table heading</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
</table>
```

## Forms

Various form elements have been rebooted for simpler base styles. Here are some of the most notable changes:

- `<fieldset>`s have no borders, padding, or margin so they can be easily used as wrappers for individual inputs or groups of inputs.
- `<legend>`s, like fieldsets, have also been restyled to be displayed as a heading of sorts.
- `<label>`s are set to `display: inline-block` to allow `margin` to be applied.
- `<input />`s, `<select>`s, `<textarea>`s, and `<button>`s are mostly addressed by Normalize, but Reboot removes their `margin` and sets `line-height: inherit`, too.
- `<textarea>`s are modified to only be resizable vertically as horizontal resizing often "breaks" page layout.
- `<button>`s and `<input />` button elements have `cursor: pointer` when `:not(:disabled)`.

These changes, and more, are demonstrated below.

> ##### Date & color input support
> 
> Keep in mind date inputs are [not fully supported](https://caniuse.com/input-datetime) by all browsers, namely Safari.

Two more form resets worth knowing about:

- Every segment of a date or time input — including seconds, milliseconds, the week number and the AM/PM field — has its browser padding removed, so a `<input type="time" step="1">` is the same height as a text input.
- `tel`, `url`, `email` and `number` inputs stay left-to-right whatever the document direction is, because their content is not language text.

### Pointers on buttons

Reboot includes an enhancement for `role="button"` to change the default cursor to `pointer`. Add this attribute to elements to help indicate elements are interactive. This role isn't necessary for `<button>` elements, which get their own `cursor` change.

```html
<span role="button" tabindex="0">Non-button element button</span>
```

## Misc elements

### Address

The `<address>` element is updated to reset the browser default `font-style` from `italic` to `normal`. `line-height` is also now inherited, and `margin-bottom: 1rem` has been added. `<address>`s are for presenting contact information for the nearest ancestor (or an entire body of work). Preserve formatting by ending lines with `<br />`.

### Blockquote

The default `margin` on blockquotes is `1em 40px`, so we reset that to `0 0 1rem` for something more consistent with other elements.

### Inline elements

The `<abbr>` element receives basic styling to make it stand out amongst paragraph text.

### Summary

The default `cursor` on summary is `text`, so we reset that to `pointer` to convey that the element can be interacted with by clicking on it.

## HTML5 `[hidden]` attribute

HTML5 adds [a new global attribute named `[hidden]`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden), which is styled as `display: none` by default. Borrowing an idea from [PureCSS](https://purecss.io/), we improve upon this default by making `[hidden] { display: none !important; }` to help prevent its `display` from getting accidentally overridden.

```html
<input type="text" hidden>
```

> ##### jQuery incompatibility
> 
> `[hidden]` is not compatible with jQuery's `$(...).hide()` and `$(...).show()` methods. Therefore, we don't currently especially endorse `[hidden]` over other techniques for managing the `display` of elements.

To merely toggle the visibility of an element, meaning its `display` is not modified and the element can still affect the flow of the document, use [the `.invisible` class](https://coreui.io/vue/docs/utilities/visibility/) instead.

## iframe color-scheme

`<iframe>` is set to `color-scheme: light dark`, and its border is removed.

The reason is a browser safeguard rather than a style preference. When an embedded document's color scheme differs from the iframe element's, the browser paints an opaque canvas behind the frame — on a dark page, a white box. An embedded document cannot see your `data-coreui-theme` attribute; it follows the system preference. Pinning the iframe to the system preference too keeps the embed transparent, including on a page where you force a theme.

```html
<div data-coreui-theme="dark" class="bg-body fg-body p-4">
  <iframe class="w-100 border-0" style="color-scheme: unset" title="Default iframe" src="data:text/html,%3C!DOCTYPE%20html%3E%3Chtml%3E%3Cmeta%20name='color-scheme'%20content='light%20dark'%3E%3Cbody%20style='background-color:transparent;color:gray;'%3E%3Ch4%3EDefault%20iframe%3C/h4%3E%3C/body%3E%3C/html%3E"></iframe>
  <iframe class="w-100 border-0" title="iframe with color-scheme" src="data:text/html,%3C!DOCTYPE%20html%3E%3Chtml%3E%3Cmeta%20name='color-scheme'%20content='light%20dark'%3E%3Cbody%20style='background-color:transparent;color:gray;'%3E%3Ch4%3Eiframe%20with%20color-scheme:%20light%20dark%3C/h4%3E%3C/body%3E%3C/html%3E"></iframe>
  <iframe class="w-100 border-0" title="Embed that declares no color scheme" src="data:text/html,%3C!DOCTYPE%20html%3E%3Chtml%3E%3Cbody%20style='background-color:transparent;color:gray;'%3E%3Ch4%3EEmbed%20that%20declares%20no%20color%20scheme%3C/h4%3E%3C/body%3E%3C/html%3E"></iframe>
</div>
```

The first two embeds declare `<meta name="color-scheme" content="light dark">`, so they follow the system preference and stay transparent. The third declares nothing, which is what most third-party embeds do — set your system to dark mode and the browser paints a white box behind it.

### Third-party embeds with no dark mode

Payment buttons, comment widgets and review widgets often ship light-only. The white background the browser paints behind them in dark mode is deliberate: it keeps the embed's own light content readable, and no stylesheet of ours can remove it.

Pin that one frame to light instead, so the browser has no mismatch to guard against:

```html
<iframe style="color-scheme: light" src="..."></iframe>
```

> Use this only for an embed that has no dark mode. Safari and Firefox pass the value into the embedded document, so an embed that *does* have a dark mode will be forced into its light one.
