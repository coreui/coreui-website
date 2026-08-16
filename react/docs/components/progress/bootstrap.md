# React Bootstrap Progress Component

> Learn how to use the React Bootstrap Progress component from CoreUI to create progress bars with labels, stripes, animation, stacked sections, and custom colors.

## React Bootstrap Progress Component

The React Bootstrap Progress component helps you visually represent progress or completion rates in tasks, processes, or downloads. These bars are fully customizable with colors, labels, sizes, and animations.

## Basic usage

Create a simple React Bootstrap progress bar using `<CProgress>` and `<CProgressBar>`.

```html
import React from 'react'
import { CProgress } from '@coreui/react'

export const ProgressExample = () => {
  return (
    <>
      <CProgress value={0} />
      <CProgress value={25} />
      <CProgress value={50} />
      <CProgress value={75} />
      <CProgress value={100} />
    </>
  )
}
```

## Labels inside progress bars

Add text labels to your progress bar by inserting content inside the `<CProgressBar>` element.

```html
import React from 'react'
import { CProgress } from '@coreui/react'

export const ProgressLabelsExample = () => {
  return <CProgress value={25}>25%</CProgress>
}
```

When using long labels, ensure they are visible by applying `.overflow-visible` and setting a readable text color.

```html
import React from 'react'
import { CProgress, CProgressBar } from '@coreui/react'

export const ProgressLabels2Example = () => {
  return (
    <CProgress value={10}>
      <CProgressBar className="overflow-visible text-dark px-2" color="success">
        Long label text for the progress bar, set to a dark color
      </CProgressBar>
    </CProgress>
  )
}
```

Or use the `progressBarClassName` prop directly on `<CProgress>`:

```jsx
<CProgress progressBarClassName="overflow-visible text-dark px-2" color="success" value={10}>
  Long label text for the progress bar
</CProgress>
```

## Adjusting height

Change the height of the React Bootstrap Progress component with utility classes or inline styles.

```html
import React from 'react'
import { CProgress } from '@coreui/react'

export const ProgressHeightExample = () => {
  return (
    <>
      <CProgress height={1} value={25} />
      <CProgress height={20} value={25} />
    </>
  )
}
```
```html
import React from 'react'
import { CProgress, CProgressBar } from '@coreui/react'

export const ProgressHeight2Example = () => {
  return (
    <>
      <CProgress height={1}>
        <CProgressBar value={25}></CProgressBar>
      </CProgress>
      <CProgress height={20}>
        <CProgressBar value={25}></CProgressBar>
      </CProgress>
    </>
  )
}
```

## Custom backgrounds

Use the `color` prop to set background colors for progress bars.

```html
import React from 'react'
import { CProgress } from '@coreui/react'

export const ProgressBackgroundsExample = () => {
  return (
    <>
      <CProgress color="success" value={25} />
      <CProgress color="info" value={50} />
      <CProgress color="warning" value={75} />
      <CProgress color="danger" value={100} />
    </>
  )
}
```

If using labels, apply an appropriate text color for contrast:

```html
import React from 'react'
import { CProgress, CProgressBar } from '@coreui/react'

export const ProgressBackgrounds2Example = () => {
  return (
    <>
      <CProgress color="success" value={25}>
        <CProgressBar>25%</CProgressBar>
      </CProgress>
      <CProgress color="info" value={50}>
        <CProgressBar className="text-dark">50%</CProgressBar>
      </CProgress>
      <CProgress color="warning" value={75}>
        <CProgressBar className="text-dark">75%</CProgressBar>
      </CProgress>
      <CProgress color="danger" value={100}>
        <CProgressBar>100%</CProgressBar>
      </CProgress>
    </>
  )
}
```

Or use the `progressBarClassName` prop:

```jsx
<CProgress color="success" value={25}>25%</CProgress>
<CProgress color="info" progressBarClassName="text-dark" value={50}>50%</CProgress>
<CProgress color="warning" progressBarClassName="text-dark" value={75}>75%</CProgress>
<CProgress color="danger" value={100}>100%</CProgress>
```

## Stacked progress bars

React Bootstrap Progress supports multiple stacked bars inside a single `<CProgress>` or using the newer `<CProgressStacked>`.

> Use the `` component introduced in v4.9.0 for stacked progress bars. Older syntax remains supported for now.

```html
import React from 'react'
import { CProgress, CProgressStacked } from '@coreui/react'

export const ProgressMultipleBarsExample = () => {
  return (
    <CProgressStacked>
      <CProgress value={15} />
      <CProgress color="success" value={30} />
      <CProgress color="info" value={20} />
    </CProgressStacked>
  )
}
```

Previous structure:

```jsx
<CProgress>
  <CProgressBar value={15} />
  <CProgressBar color="success" value={30} />
  <CProgressBar color="info" value={20} />
</CProgress>
```

## Striped variant

Add stripes to any progress bar using `variant="striped"`.

```html
import React from 'react'
import { CProgress } from '@coreui/react'

export const ProgressStripedExample = () => {
  return (
    <>
      <CProgress color="success" variant="striped" value={25} />
      <CProgress color="info" variant="striped" value={50} />
      <CProgress color="warning" variant="striped" value={75} />
      <CProgress color="danger" variant="striped" value={100} />
    </>
  )
}
```

## Animated stripes

Make stripes animated using the `animated` prop.

```html
import React from 'react'
import { CProgress } from '@coreui/react'

export const ProgressAnimatedStripedExample = () => {
  return (
    <>
      <CProgress color="success" variant="striped" animated value={25} />
      <CProgress color="info" variant="striped" animated value={50} />
      <CProgress color="warning" variant="striped" animated value={75} />
      <CProgress color="danger" variant="striped" animated value={100} />
    </>
  )
}
```

## API reference

Explore the full API for the React Bootstrap Progress component:

- [&lt;CProgress /&gt;](../api/#cprogress)
- [&lt;CProgressBar /&gt;](../api/#cprogressbar)
