# React Position Utilities

> Use these shorthand utilities for quickly configuring the position of an element.

## Position values

Quick positioning classes are available, though they are not responsive.

```jsx
<div className="position-static">...</div>
<div className="position-relative">...</div>
<div className="position-absolute">...</div>
<div className="position-fixed">...</div>
<div className="position-sticky">...</div>
```

## Arrange elements

Arrange elements easily with the edge positioning utilities. The format is `{property}-{position}`.

Where *property* is one of:

- `top` - for the vertical `top` position
- `start` - for the horizontal `left` position (in LTR)
- `bottom` - for the vertical `bottom` position
- `end` - for the horizontal `right` position (in LTR)

Where *position* is one of:

- `0` - for `0` edge position
- `50` - for `50%` edge position
- `100` - for `100%` edge position

(You can add more position values by adding entries to the `$position-values` Sass map variable.)

```html
<div className="position-relative">
  <div className="position-absolute top-0 start-0"></div>
  <div className="position-absolute top-0 end-0"></div>
  <div className="position-absolute top-50 start-50"></div>
  <div className="position-absolute bottom-50 end-50"></div>
  <div className="position-absolute bottom-0 start-0"></div>
  <div className="position-absolute bottom-0 end-0"></div>
</div>
```

## Center elements

In addition, you can also center the elements with the transform utility class `.translate-middle`.

This class applies the transformations `translateX(-50%)` and `translateY(-50%)` to the element which, in combination with the edge positioning utilities, allows you to absolute center an element.

```html
<div className="position-relative">
  <div className="position-absolute top-0 start-0 translate-middle"></div>
  <div className="position-absolute top-0 start-50 translate-middle"></div>
  <div className="position-absolute top-0 start-100 translate-middle"></div>
  <div className="position-absolute top-50 start-0 translate-middle"></div>
  <div className="position-absolute top-50 start-50 translate-middle"></div>
  <div className="position-absolute top-50 start-100 translate-middle"></div>
  <div className="position-absolute top-100 start-0 translate-middle"></div>
  <div className="position-absolute top-100 start-50 translate-middle"></div>
  <div className="position-absolute top-100 start-100 translate-middle"></div>
</div>
```

By adding `.translate-middle-x` or `.translate-middle-y` classes, elements can be positioned only in horizontal or vertical direction.

```html
<div className="position-relative">
  <div className="position-absolute top-0 start-0"></div>
  <div className="position-absolute top-0 start-50 translate-middle-x"></div>
  <div className="position-absolute top-0 end-0"></div>
  <div className="position-absolute top-50 start-0 translate-middle-y"></div>
  <div className="position-absolute top-50 start-50 translate-middle"></div>
  <div className="position-absolute top-50 end-0 translate-middle-y"></div>
  <div className="position-absolute bottom-0 start-0"></div>
  <div className="position-absolute bottom-0 start-50 translate-middle-x"></div>
  <div className="position-absolute bottom-0 end-0"></div>
</div>
```

## Examples

Here are some real life examples of these classes:

```html
<CButton theme="primary" className="position-relative">
  Mails <CBadge theme="secondary" className="position-absolute top-0 start-100 translate-middle rounded-pill">+99 <span className="visually-hidden">unread messages</span></span>
</CButton>

<div className="position-relative py-3 px-5 text-bg-secondary border border-secondary rounded-pill">
  Marker <svg width="1em" height="1em" viewBox="0 0 16 16" className="position-absolute top-100 start-50 translate-middle mt-1" fill="var(--cui-secondary-base)" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
</div>

<CButton theme="primary" className="position-relative">
  Alerts <CBadge className="position-absolute top-0 start-100 translate-middle border border-secondary rounded-circle bg-danger p-3"><span className="visually-hidden">unread messages</span></CBadge>
</CButton>
```

You can use these classes with existing components to create new ones. Remember that you can extend its functionality by adding entries to the `$position-values` variable.

```html
<div className="position-relative m-5">
  <div className="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ height: '1px' }}>
    <div className="progress-bar" style={{ width: '50%' }}></div>
  </div>
  <CButton theme="primary" size="sm" className="position-absolute top-0 start-0 translate-middle rounded-pill" style={{ width: '2rem', height: '2rem' }}>1</CButton>
  <CButton theme="primary" size="sm" className="position-absolute top-0 start-50 translate-middle rounded-pill" style={{ width: '2rem', height: '2rem' }}>2</CButton>
  <CButton theme="secondary" size="sm" className="position-absolute top-0 start-100 translate-middle rounded-pill" style={{ width: '2rem', height: '2rem' }}>3</CButton>
</div>
```

## Customizing

### Sass maps

Default position utility values are declared in a Sass map, then used to generate our utilities.

```scss
$position-values: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$position-values: defaults(
  (
    0: 0,
    50: 50%,
    100: 100%
  ),
  $position-values
);
```

### Utilities API

Position utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/react/docs/utilities/api/#using-the-api)

```scss
"position": (
  property: position,
  values: static relative absolute fixed sticky
),
"top": (
  property: top,
  values: $position-values
),
"bottom": (
  property: bottom,
  values: $position-values
),
"start": (
  property: inset-inline-start,
  class: start,
  values: $position-values
),
"end": (
  property: inset-inline-end,
  class: end,
  values: $position-values
),
"translate-middle": (
  property: transform,
  class: translate-middle,
  values: (
    null: translate(-50%, -50%),
    x: translateX(-50%),
    y: translateY(-50%),
  )
),
```
