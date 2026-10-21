# Bootstrap 6 Progress

> Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.

## How it works

Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don't use [the HTML5 `<progress>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), ensuring you can stack progress bars, animate them, and place text labels over them.

- We use the `.progress` as a wrapper to indicate the max value of the progress bar.
- We use the inner `.progress-bar` to indicate the progress so far.
- The `.progress-bar` requires an inline style, utility class, or custom CSS to set their width.
- The `.progress-bar` also requires some `role` and `aria` attributes to make it accessible.

Put that all together, and you have the following examples.

```html
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

CoreUI provides a handful of [utilities for setting width](https://coreui.io/bootstrap/docs/utilities/width/). Depending on your needs, these may help with quickly configuring progress.

```html
<div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Labels

Add labels to your progress bars by placing text within the `.progress-bar`.

```html
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
```

### Long labels

A `.progress-bar` clips what does not fit — it is `overflow: hidden` with `white-space: nowrap` — so a label wider than the bar is cut off rather than wrapped. Add [`.overflow-visible`](https://coreui.io/bootstrap/docs/utilities/overflow/) to let it spill over the track instead.

```html
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 10%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">Filling in your details</div>
</div>

<div class="progress">
  <div class="progress-bar overflow-visible" role="progressbar" style="width: 10%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">Filling in your details</div>
</div>
```

Spilling over comes at a cost: the label then sits on two backgrounds at once, so its color has to contrast with both the bar and the track. Where it cannot, put the label outside the progress bar instead.

## Height

We only set a `height` value on the `.progress`, so if you change that value the inner `.progress-bar` will automatically resize accordingly.

```html
<div class="progress" style="height: 1px;">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress" style="height: 20px;">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Backgrounds

Colour a bar with a [`.theme-*` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants). The bar reads both the theme's fill and the contrast colour that reads on it, so a label stays legible whichever colour you pick.

```html
<div class="progress">
  <div class="progress-bar theme-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar theme-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar theme-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar theme-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

The class works one level up as well — put it on the `.progress` and every bar inside follows.

```html
<div class="progress theme-success">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
</div>
```

A [`.bg-*` utility](https://coreui.io/bootstrap/docs/utilities/background/) still paints a bar, but it sets the fill alone — the label keeps the default foreground colour rather than the one that reads on the fill.

## Gradients

_Added in 6.0.0._

Set `--cui-progress-bar-bg-image` to paint the bar with a gradient instead of a flat colour. The image is sized to the bar, so the whole gradient is visible at any width and the label keeps the colour set by the theme. Set it on the `.progress` to share one gradient between every bar inside, or on a single `.progress-bar`.

```html
<div class="progress mb-4" style="--cui-progress-bar-bg-image: linear-gradient(to right, #e6412c, #ffb400, #ffe25a)">
  <div class="progress-bar" role="progressbar" style="width: 45%" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress" style="--cui-progress-bar-bg-image: linear-gradient(to right, var(--cui-info-base), var(--cui-success-base))">
  <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
</div>
```

Stripes are a second layer over the gradient, so `.progress-bar-striped` and `.progress-bar-animated` combine with it. Change the stripe pattern itself with `--cui-progress-bar-stripes`, or just its colour with `--cui-progress-bar-stripe-color`.

```html
<div class="progress" style="--cui-progress-bar-bg-image: linear-gradient(to right, #e6412c, #ffb400, #ffe25a)">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Multiple bars

Include multiple progress bars in a progress component if you need.

```html
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar theme-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar theme-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Stacked

`.progress-bar`s inside one `.progress` share a single track. To give each segment its own track and rounded ends, wrap several `.progress` elements in a `.progress-stacked` — it is a flex row, and each child keeps the width you give it.

```html
<div class="progress-stacked">
  <div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%">
    <div class="progress-bar"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
    <div class="progress-bar theme-success"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
    <div class="progress-bar theme-info"></div>
  </div>
</div>
```

## Segmented

_Added in 6.0.0._

Add `.progress-segmented` to a `.progress` or `.progress-stacked` to cut the track into a row of rounded segments. It is a CSS mask over the whole component, so the bar underneath keeps its transition, theme, gradient and stripes; only the rendering changes. Segments are `--cui-progress-segment-min-width` wide (.25rem) and `--cui-progress-segment-gap` apart, as many as fit; set `--cui-progress-segments` instead and the track holds exactly that many, scaled to its width, with the gap staying put.

```html
<div class="progress progress-segmented mb-4" style="height: 3rem; --cui-progress-bar-bg-image: linear-gradient(to right, #e6412c, #ffb400, #ffe25a)">
  <div class="progress-bar" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-segmented mb-4">
  <div class="progress-bar theme-success" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-segmented mb-4" style="height: 1.5rem; --cui-progress-segments: 20; --cui-progress-segment-gap: .5rem">
  <div class="progress-bar theme-info" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-segmented" style="height: 1.5rem; --cui-progress-segment-min-width: 1rem">
  <div class="progress-bar theme-danger" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

The bars above carry no `width`. The Progress plugin picks up every `.progress-segmented` on page load, reads `aria-valuenow`, `aria-valuemin` and `aria-valuemax` from the bar, and sets `--cui-progress-segments-filled` to the number of whole segments the value covers, rounded down; the stylesheet turns that into the bar's width, so the fill always ends on a segment's edge. When a script changes `aria-valuenow`, `aria-valuemin` or `aria-valuemax`, call [`update()`](#methods) and the bar follows. The plugin also watches the track's width and writes the count that fits above `--cui-progress-segment-min-width` to `--cui-progress-segments-fit`, capped at `--cui-progress-segments` when that is set, and recounts the fill — so a narrow screen shows fewer segments rather than thinner ones, and the last segment is always whole. Without the plugin and without a count, the stylesheet tiles the minimum width and clips whatever is left at the end of the track. Without the plugin, set `--cui-progress-segments-filled` on the bar yourself, or give the bar a `width` as usual and accept a partly coloured segment on the boundary.

```html
<div class="progress progress-segmented mb-4" style="--cui-progress-segments: 10">
  <div class="progress-bar" style="--cui-progress-segments-filled: 4"></div>
</div>
<div class="progress progress-segmented" style="--cui-progress-segments: 10">
  <div class="progress-bar theme-warning" role="progressbar" style="width: 45%" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

The corners follow `--cui-progress-segment-border-radius`, `--cui-radius-2` by default — a full cap on a segment twice as wide as that, and the same corner on a wider one. The plugin caps it at half the segment and half the track height, as `border-radius` would; the stylesheet alone caps it at half the minimum width. Set it to `0px` for square segments, or anything in between. The value feeds the mask's `calc()`, so it has to be a length — a unitless `0` drops the whole mask.

```html
<div class="progress progress-segmented mb-4" style="height: 1.5rem; --cui-progress-segments: 10; --cui-progress-segment-border-radius: 0px">
  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-segmented" style="height: 1.5rem; --cui-progress-segments: 10; --cui-progress-segment-border-radius: var(--cui-radius-5)">
  <div class="progress-bar theme-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## On a colored surface

Add `.progress-white` to draw the bar in white and the track as translucent white. That way a progress bar sitting on a dark or brand-colored surface stays readable without a color of its own; the bar stays white even under a `.theme-*` class.

```html
<div class="progress progress-white">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Striped

Add `.progress-bar-striped` to any `.progress-bar` to apply a stripe via CSS gradient over the progress bar's background color.

```html
<div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped theme-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped theme-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped theme-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped theme-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Animated stripes

The striped gradient can also be animated. Add `.progress-bar-animated` to `.progress-bar` to animate the stripes right to left via CSS3 animations.

```html
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
```

The whole animation is one variable, so you can slow it down, ease it, or swap the keyframes without recompiling:

```html
<div class="progress" style="--cui-progress-bar-animation: progress-bar-stripes 4s ease-in-out infinite;">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
```

## Grouping bars

Related bars need no component of their own — [stacks](https://coreui.io/bootstrap/docs/helpers/stacks/) and [spacing utilities](https://coreui.io/bootstrap/docs/utilities/margin/) lay them out. Put a label column beside a `.vstack` of bars to compare several series against the same baseline:

```html
<div class="hstack gap-4 mb-5">
  <span class="fg-2 small flex-shrink-0" style="width: 100px">Title</span>
  <div class="vstack gap-1">
    <div class="progress" style="height: 4px">
      <div class="progress-bar theme-info" role="progressbar" style="width: 34%" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress" style="height: 4px">
      <div class="progress-bar theme-danger" role="progressbar" style="width: 78%" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</div>
<div class="hstack gap-4 mb-5">
  <span class="fg-2 small flex-shrink-0" style="width: 100px">Title</span>
  <div class="vstack gap-1">
    <div class="progress" style="height: 4px">
      <div class="progress-bar theme-info" role="progressbar" style="width: 56%" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress" style="height: 4px">
      <div class="progress-bar theme-danger" role="progressbar" style="width: 94%" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress" style="height: 4px">
      <div class="progress-bar theme-success" role="progressbar" style="width: 67%" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</div>
```

Or stack a header above the bar, with the value pushed to the end by `.ms-auto`:

```html
<div class="vstack gap-1">
  <div class="hstack">
    <i class="cil-user me-3"></i>
    <div>Male</div>
    <div class="ms-auto fw-bold">43%</div>
  </div>
  <div class="progress" style="height: 4px">
    <div class="progress-bar theme-warning" role="progressbar" style="width: 43%" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</div>
```

```html
<div class="vstack gap-1">
  <div class="hstack align-items-end">
    <i class="cil-globe-alt me-3"></i>
    <div>Organic Search</div>
    <div class="ms-auto fw-bold me-3">191.235</div>
    <div class="fg-2 small">(56%)</div>
  </div>
  <div class="progress" style="height: 4px">
    <div class="progress-bar theme-success" role="progressbar" style="width: 56%" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</div>
```

## Usage

_Added in 6.0.0._

The plugin only runs on `.progress-segmented`; a plain `.progress` is CSS only and never gets an instance.

### Via data attributes

Every `.progress-segmented` is initialized on page load — no toggle attribute needed. The bar's `aria-valuenow`, `aria-valuemin` and `aria-valuemax` are the value; leave `width` off the bar. `--cui-progress-segment-min-width` sets how many segments fit, and `--cui-progress-segments`, when set, caps that; both are read from the stylesheet, so set them on the element or on a parent.

```html
<div class="progress progress-segmented">
  <div class="progress-bar" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

### Via JavaScript

```js
const element = document.querySelector('.progress-segmented')
const progress = new coreui.Progress(element)
```

### Methods

| Method | Description |
| --- | --- |
| `dispose` | Destroys the instance and removes the variables it set. |
| `getInstance` | Static method which allows you to get the Progress instance associated to a DOM element, you can use it like this: `coreui.Progress.getInstance(element)` |
| `getOrCreateInstance` | Static method which returns a Progress instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `coreui.Progress.getOrCreateInstance(element)` |
| `update` | Recomputes the segment count and the filled segments. Call it after a script changes the bar's `aria-valuenow`, `aria-valuemin` or `aria-valuemax`, or the tokens; the plugin follows the track's width on its own. |

## Customizing

### CSS variables

Progress bars use local CSS variables on `.progress` for enhanced real-time customization.

```scss
$progress-tokens: defaults(
  (
    --cui-progress-height: 1rem,
    --cui-progress-font-size: var(--cui-font-size-sm),
    --cui-progress-bg: var(--cui-bg-2),
    --cui-progress-border-radius: var(--cui-radius-5),
    --cui-progress-box-shadow: var(--cui-box-shadow-inset),
    --cui-progress-bar-color: var(--cui-primary-contrast),
    --cui-progress-bar-bg: var(--cui-primary-bg),
    --cui-progress-bar-bg-image: none,
    --cui-progress-bar-stripes: linear-gradient(45deg, var(--cui-progress-bar-stripe-color) 25%, transparent 25%, transparent 50%, var(--cui-progress-bar-stripe-color) 50%, var(--cui-progress-bar-stripe-color) 75%, transparent 75%, transparent),
    --cui-progress-bar-stripe-color: color-mix(in oklch, var(--cui-white) 15%, transparent),
    --cui-progress-bar-transition: width .6s ease,
    --cui-progress-bar-animation: progress-bar-stripes 1s linear infinite,
  ),
  $progress-tokens
);
```

`.progress-segmented` adds the segment geometry:

```scss
$progress-segmented-tokens: defaults(
  (
    --cui-progress-segment-gap: .25rem,
    --cui-progress-segment-min-width: .25rem,
    --cui-progress-segment-border-radius: var(--cui-radius-2),
  ),
  $progress-segmented-tokens
);

// Unset by default: the plugin then packs as many segments as fit above the minimum width
@if $progress-segments != null {
  $progress-segmented-tokens: map.set($progress-segmented-tokens, --cui-progress-segments, $progress-segments);
}
```

### Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

```scss
$progress-segments:                    null !default;

$progress-contrast-track-opacity:      20% !default;
```

### Keyframes

Used for creating the CSS animations for `.progress-bar-animated`. Included in `scss/_progress-bar.scss`.

```scss
@if $enable-transitions {
  @keyframes progress-bar-stripes {
    0% { background-position-x: var(--cui-progress-height), 0; }
  }
}
```
