# Vue Progress Component

> Documentation and examples for using Vue progress bars featuring support for stacked bars, animated backgrounds, and text labels.

## Example

Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don't use [the HTML5 `<progress>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), ensuring you can stack progress bars, animate them, and place text labels over them.

## Basic usage

```html
<template>
  <CProgress :value="0" />
  <CProgress :value="25" />
  <CProgress :value="50" />
  <CProgress :value="75" />
  <CProgress :value="100" />
</template>

<script setup>
import { CProgress } from '@coreui/vue'
</script>
```

## Labels

Add labels to your progress bars by placing text within the `<CProgressBar>`.

```html
<template>
  <CProgress :value="25">25%</CProgress>
</template>

<script setup>
import { CProgress } from '@coreui/vue'
</script>
```

Please note that the default setting for the content within the `` is to be limited by the `overflow: hidden property`, preventing it from extending beyond the bar's boundaries. If the progress bar is shorter than its label, the content will be truncated and could be difficult to read. To modify this behavior, you can utilize the `.overflow-visible` class from the overflow utilities. However, it is important to specify a specific text color to ensure readability. It's worth noting that this approach currently does not consider color modes.

```html
<template>
  <CProgress :value="10" color="success">
    <CProgressBar class="overflow-visible fg-black px-3"
      >Long label text for the progress bar, set to a dark color</CProgressBar
    >
  </CProgress>
</template>

<script setup>
import { CProgress, CProgressBar } from '@coreui/vue'
</script>
```

Since **v5.0.0** you can also use the `progressBarClassName` property directly on the `` component to achieve the same.

```vue
<CProgress progressBarClassName="overflow-visible fg-black px-3" color="success" :value="10">Long label text for the progress bar, set to a dark color</CProgress>
```

### Long labels

A `<CProgressBar>` clips what does not fit — it is `overflow: hidden` with `white-space: nowrap` — so a label wider than the bar is cut off rather than wrapped. Add [`overflow-visible`](https://coreui.io/vue/docs/utilities/overflow/) to let it spill over the track instead.

```html
<template>
  <CProgress class="mb-4">
    <CProgressBar :value="10">Filling in your details</CProgressBar>
  </CProgress>
  <CProgress>
    <CProgressBar class="overflow-visible" :value="10">Filling in your details</CProgressBar>
  </CProgress>
</template>

<script setup>
import { CProgress, CProgressBar } from '@coreui/vue'
</script>
```

Spilling over comes at a cost: the label then sits on two backgrounds at once, so its color has to contrast with both the bar and the track. Where it cannot, put the label outside the progress bar instead.

## Height

We only set a `height` value on the `<CProgress>`, so if you change that value the inner `<CProgressBar>` will automatically resize accordingly.

```html
<template>
  <CProgress :height="1" :value="25" />
  <CProgress :height="20" :value="25" />
</template>

<script setup>
import { CProgress } from '@coreui/vue'
</script>
```

## Backgrounds

Use `color` prop to change the appearance of individual progress bars.

```html
<template>
  <CProgress color="success" :value="25" />
  <CProgress color="info" :value="50" />
  <CProgress color="warning" :value="75" />
  <CProgress color="danger" :value="100" />
</template>

<script setup>
import { CProgress } from '@coreui/vue'
</script>
```

Ensure that when you incorporate labels into progress bars featuring a custom background color, you also select an appropriate text color to ensure readability and maintain adequate contrast for the labels.

```html
<template>
  <CProgress color="success" :value="25">
    <CProgressBar>25%</CProgressBar>
  </CProgress>
  <CProgress color="info" :value="50">
    <CProgressBar class="fg-black">50%</CProgressBar>
  </CProgress>
  <CProgress color="warning" :value="75">
    <CProgressBar class="fg-black">75%</CProgressBar>
  </CProgress>
  <CProgress color="danger" :value="100">
    <CProgressBar>100%</CProgressBar>
  </CProgress>
</template>

<script setup>
import { CProgress, CProgressBar } from '@coreui/vue'
</script>
```

Since **v5.0.0** you can also use the `progressBarClassName` property directly on the `` component to achieve the same.

```vue
<CProgress color="success" :value="25">25%</CProgress>
<CProgress color="info" progressBarClassName="fg-black" :value="50">50%</CProgress>
<CProgress color="warning" progressBarClassName="fg-black" :value="75">75%</CProgress>
<CProgress color="danger" :value="100">100%</CProgress>
```

## Gradients

_Added in 6.0.0._

Set `--cui-progress-bar-bg-image` to paint the bar with a gradient instead of a flat colour. The image is sized to the bar, so the whole gradient is visible at any width and the label keeps the colour set by the theme. Set it in `style` on `<CProgress>`; the bar reads it from there.

```html
<template>
  <CProgress
    :value="45"
    style="--cui-progress-bar-bg-image: linear-gradient(to right, #e6412c, #ffb400, #ffe25a)"
  />
  <CProgress
    :value="70"
    style="
      --cui-progress-bar-bg-image: linear-gradient(
        to right,
        var(--cui-info-base),
        var(--cui-success-base)
      );
    "
  >
    70%
  </CProgress>
</template>

<script setup>
import { CProgress } from '@coreui/vue'
</script>
```

Stripes are a second layer over the gradient, so `variant="striped"` and `animated` combine with it. Change the stripe pattern itself with `--cui-progress-bar-stripes`, or just its colour with `--cui-progress-bar-stripe-color`.

```html
<template>
  <CProgress
    animated
    :value="65"
    variant="striped"
    style="--cui-progress-bar-bg-image: linear-gradient(to right, #e6412c, #ffb400, #ffe25a)"
  />
</template>

<script setup>
import { CProgress } from '@coreui/vue'
</script>
```

## Multiple bars

Include multiple progress bars in a progress component if you need.

> In version 5.0.0, we introduced a new &lt;CProgressStacked&gt; component to more logically wrap multiple progress bars into a single stacked progress bar. The previous structure will continue to work until the next major version.

**New markup**

```html
<template>
  <CProgressStacked>
    <CProgress :value="15" />
    <CProgress color="success" :value="30" />
    <CProgress color="info" :value="20" />
  </CProgressStacked>
</template>

<script setup>
import { CProgressStacked, CProgress } from '@coreui/vue'
</script>
```

**Previous markup**
```vue
<CProgress>
  <CProgressBar :value="15" />
  <CProgressBar theme="success" :value="30" />
  <CProgressBar theme="info" :value="20" />
</CProgress>
```

## Segmented

_Added in 6.0.0._

Add `segmented` to cut the track into a row of rounded segments. It is a CSS mask over the whole component, so the bar keeps its transition, theme, gradient and stripes; only the rendering changes. Segments are `--cui-progress-segment-min-width` wide (.25rem) and `--cui-progress-segment-gap` apart, as many as fit; set `segments` and the track holds at most that many, scaled to its width, with the gap staying put.

The component watches the track's width and fills whole segments only: `value` is turned into the number of segments it covers, rounded down, so the fill always ends on a segment's edge and a narrow screen shows fewer segments rather than thinner ones.

```html
<template>
  <CProgress
    :height="48"
    segmented
    :value="45"
    style="--cui-progress-bar-bg-image: linear-gradient(to right, #e6412c, #ffb400, #ffe25a)"
  />
  <CProgress segmented theme="success" :value="70" />
  <CProgress
    :height="24"
    segmented
    :segments="20"
    theme="info"
    :value="30"
    style="--cui-progress-segment-gap: 0.5rem"
  />
  <CProgress
    :height="24"
    segmented
    theme="danger"
    :value="30"
    style="--cui-progress-segment-min-width: 1rem"
  />
</template>

<script setup>
import { CProgress } from '@coreui/vue'
</script>
```

The corners follow `--cui-progress-segment-border-radius`, `--cui-radius-2` by default, capped at half the segment and half the track height as `border-radius` would. Set it to `0px` for square segments, or anything in between; the value feeds the mask's `calc()`, so it has to be a length.

```html
<template>
  <CProgress
    :height="24"
    segmented
    :segments="10"
    :value="60"
    style="--cui-progress-segment-border-radius: 0px"
  />
  <CProgress
    :height="24"
    segmented
    :segments="10"
    theme="warning"
    :value="60"
    style="--cui-progress-segment-border-radius: var(--cui-radius-5)"
  />
</template>

<script setup>
import { CProgress } from '@coreui/vue'
</script>
```

## On a colored surface

Add the `white` property to draw the bar in the current text color and the track as a faint tint of it. That way a progress bar sitting on a solid or brand-colored surface takes its colors from the text around it rather than needing a color of its own.

```html
<template>
  <CProgress white :value="50" />
</template>

<script setup>
import { CProgress } from '@coreui/vue'
</script>
```

## Striped

Add `variant="striped"` to any `<CProgressBar>` to apply a stripe via CSS gradient over the progress bar's background color.

```html
<template>
  <CProgress color="success" variant="striped" :value="25" />
  <CProgress color="info" variant="striped" :value="50" />
  <CProgress color="warning" variant="striped" :value="75" />
  <CProgress color="danger" variant="striped" :value="100" />
</template>

<script setup>
import { CProgress } from '@coreui/vue'
</script>
```

## Animated stripes

The striped gradient can also be animated. Add `animated` property to `<CProgressBar>` to animate the stripes right to left via CSS3 animations.

```html
<template>
  <CProgress color="success" variant="striped" animated :value="25" />
  <CProgress color="info" variant="striped" animated :value="50" />
  <CProgress color="warning" variant="striped" animated :value="75" />
  <CProgress color="danger" variant="striped" animated :value="100" />
</template>

<script setup>
import { CProgress } from '@coreui/vue'
</script>
```

## Grouping bars

Related bars need no component of their own — [stacks](https://coreui.io/vue/docs/helpers/stacks/) and [spacing utilities](https://coreui.io/vue/docs/utilities/margin/) lay them out. Put a label column beside a `vstack` of bars to compare several series against the same baseline.

```html
<template>
  <div class="hstack gap-4">
    <span class="fg-2 small flex-shrink-0" style="width: 100px">Title</span>
    <div class="vstack gap-1">
      <CProgress :height="4">
        <CProgressBar theme="info" :value="34" aria-label="First series" />
      </CProgress>
      <CProgress :height="4">
        <CProgressBar theme="danger" :value="78" aria-label="Second series" />
      </CProgress>
    </div>
  </div>
</template>

<script setup>
import { CProgress, CProgressBar } from '@coreui/vue'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CProgress /&gt;](./api/#cprogress)
- [&lt;CProgressBar /&gt;](./api/#cprogressbar)
