# Angular Form Layout Component

> Give your forms some structure — from inline to horizontal to custom grid implementations — with our Angular form layout options.

## Forms

Every group of form fields should reside in a `form` element. CoreUI provides no default styling for the `form`
element, but there are some powerful browser features that are provided by default.

- New to browser forms? Consider reviewing the [MDN form
docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) for an overview and complete list of available
attributes.
- `cButton` within a `form` default to `type="submit"`, so strive to be specific and always include a type.
- You can disable every form element within a form with the `disabled` attribute on the `form`.

Since CoreUI applies `display: block` and `width: 100%` to almost all our form controls, forms will by default stack
vertically. Additional classes can be used to vary this layout on a per-form basis.

## Utilities

[Margin utilities](https://coreui.io/docs/utilities/spacing/) are the easiest way to add some structure to forms. They
provide basic grouping of labels, controls, optional form text, and form validation messaging. We recommend sticking
to `margin-bottom` utilities, and using a single direction throughout the form for consistency.

## Form grid

More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns,
varied widths, and additional alignment options.

## Gutters

By adding [gutter modifier classes](https://coreui.io/docs/layout/gutters/), you can have control over the gutter
width in as well the inline as block direction.

More complex layouts can also be created with the grid system.

## Horizontal form

Create horizontal forms with the grid by adding the `.row` class to form groups and using the `.col-*-*` classes to
specify the width of your labels and controls. Be sure to add `cLabel="col"` to your `label` as well so they're
vertically
centered with their associated form controls.

At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example,
we've removed the `padding-top` on our stacked radio inputs label to better align the text baseline.

## Horizontal form label sizing

Be sure to use `.col-form-label-sm` or `.col-form-label-lg` to your `cLabel` or `legend` to correctly follow the size
of `.form-control-lg` and `.form-control-sm`.

## Column sizing

As shown in the previous examples, our grid system allows you to place any number of `c-col` within a `c-row`. They'll
split the available width equally between them. You may also pick a subset of your columns to take up more or less
space, while the remaining cols equally split the rest, with specific column classes like `c-col [sm]="7"`.

## Auto-sizing

The example below uses a flexbox utility to vertically center the contents and changes to `c-col xs="auto"` so that
your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.

You can then remix that once again with size-specific column classes.

## Inline forms

Use the `c-col xs="auto"` to create horizontal layouts. By adding gutter modifier classes, we will have gutters in
horizontal and vertical directions. The `.align-items-center` aligns the form elements to the middle, making the
`c-form-check` align properly.
