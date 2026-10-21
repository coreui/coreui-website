# React Overflow Utilities

> Use these shorthand utilities for quickly configuring how content overflows an element.

Adjust the `overflow` property on the fly with four default values and classes. These classes are not responsive by default.

```jsx
<div className="overflow-auto">...</div>
<div className="overflow-hidden">...</div>
<div className="overflow-visible">...</div>
<div className="overflow-scroll">...</div>
```

## Overflow on one axis

The same four values are generated per axis as `.overflow-x-*` and `.overflow-y-*`, which set `overflow-x` and `overflow-y` on their own. Use them when only one direction should scroll or clip.

```jsx
<div className="overflow-x-auto">...</div>
<div className="overflow-x-hidden">...</div>
<div className="overflow-x-visible">...</div>
<div className="overflow-x-scroll">...</div>

<div className="overflow-y-auto">...</div>
<div className="overflow-y-hidden">...</div>
<div className="overflow-y-visible">...</div>
<div className="overflow-y-scroll">...</div>
```

Using Sass variables, you may customize the overflow utilities by changing the `$overflows` variable in `_utilities.scss`.

## Customizing

### Utilities API

Overflow utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/react/docs/utilities/api/#using-the-api)

```scss
"overflow": (
  property: overflow,
  values: auto hidden visible scroll,
),
"overflow-x": (
  property: overflow-x,
  values: auto hidden visible scroll,
),
"overflow-y": (
  property: overflow-y,
  values: auto hidden visible scroll,
),
```
