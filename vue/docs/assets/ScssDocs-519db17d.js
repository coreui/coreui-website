import{Y as Q,_ as nn,o as en,c as rn,a as on}from"./app-77034e43.js";const tn=`//
// Base styles
//

.accordion {
  // scss-docs-start accordion-css-vars
  --#{$prefix}accordion-color: #{$accordion-color};
  --#{$prefix}accordion-bg: #{$accordion-bg};
  --#{$prefix}accordion-transition: #{$accordion-transition};
  --#{$prefix}accordion-border-color: #{$accordion-border-color};
  --#{$prefix}accordion-border-width: #{$accordion-border-width};
  --#{$prefix}accordion-border-radius: #{$accordion-border-radius};
  --#{$prefix}accordion-inner-border-radius: #{$accordion-inner-border-radius};
  --#{$prefix}accordion-btn-padding-x: #{$accordion-button-padding-x};
  --#{$prefix}accordion-btn-padding-y: #{$accordion-button-padding-y};
  --#{$prefix}accordion-btn-color: #{$accordion-color};
  --#{$prefix}accordion-btn-color: #{$accordion-button-color};
  --#{$prefix}accordion-btn-bg: #{$accordion-button-bg};
  --#{$prefix}accordion-btn-icon: #{escape-svg($accordion-button-icon)};
  --#{$prefix}accordion-btn-icon-width: #{$accordion-icon-width};
  --#{$prefix}accordion-btn-icon-transform: #{$accordion-icon-transform};
  --#{$prefix}accordion-btn-icon-transition: #{$accordion-icon-transition};
  --#{$prefix}accordion-btn-active-icon: #{escape-svg($accordion-button-active-icon)};
  --#{$prefix}accordion-btn-focus-border-color: #{$accordion-button-focus-border-color};
  --#{$prefix}accordion-btn-focus-box-shadow: #{$accordion-button-focus-box-shadow};
  --#{$prefix}accordion-body-padding-x: #{$accordion-body-padding-x};
  --#{$prefix}accordion-body-padding-y: #{$accordion-body-padding-y};
  --#{$prefix}accordion-active-color: #{$accordion-button-active-color};
  --#{$prefix}accordion-active-bg: #{$accordion-button-active-bg};
  // scss-docs-end accordion-css-vars
}

.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--#{$prefix}accordion-btn-padding-y) var(--#{$prefix}accordion-btn-padding-x);
  @include font-size($font-size-base);
  color: var(--#{$prefix}accordion-btn-color);
  text-align: left; // Reset button style
  background-color: var(--#{$prefix}accordion-btn-bg);
  border: 0;
  @include border-radius(0);
  overflow-anchor: none;
  @include transition(var(--#{$prefix}accordion-transition));

  &:not(.collapsed) {
    color: var(--#{$prefix}accordion-active-color);
    background-color: var(--#{$prefix}accordion-active-bg);
    box-shadow: inset 0 calc(-1 * var(--#{$prefix}accordion-border-width)) 0 var(--#{$prefix}accordion-border-color); // stylelint-disable-line function-disallowed-list

    &::after {
      background-image: var(--#{$prefix}accordion-btn-active-icon);
      transform: var(--#{$prefix}accordion-btn-icon-transform);
    }
  }

  // Accordion icon
  &::after {
    flex-shrink: 0;
    width: var(--#{$prefix}accordion-btn-icon-width);
    height: var(--#{$prefix}accordion-btn-icon-width);
    margin-left: auto;
    content: "";
    background-image: var(--#{$prefix}accordion-btn-icon);
    background-repeat: no-repeat;
    background-size: var(--#{$prefix}accordion-btn-icon-width);
    @include transition(var(--#{$prefix}accordion-btn-icon-transition));
  }

  &:hover {
    z-index: 2;
  }

  &:focus {
    z-index: 3;
    border-color: var(--#{$prefix}accordion-btn-focus-border-color);
    outline: 0;
    box-shadow: var(--#{$prefix}accordion-btn-focus-box-shadow);
  }
}

.accordion-header {
  margin-bottom: 0;
}

.accordion-item {
  color: var(--#{$prefix}accordion-color);
  background-color: var(--#{$prefix}accordion-bg);
  border: var(--#{$prefix}accordion-border-width) solid var(--#{$prefix}accordion-border-color);

  &:first-of-type {
    @include border-top-radius(var(--#{$prefix}accordion-border-radius));

    .accordion-button {
      @include border-top-radius(var(--#{$prefix}accordion-inner-border-radius));
    }
  }

  &:not(:first-of-type) {
    border-top: 0;
  }

  // Only set a border-radius on the last item if the accordion is collapsed
  &:last-of-type {
    @include border-bottom-radius(var(--#{$prefix}accordion-border-radius));

    .accordion-button {
      &.collapsed {
        @include border-bottom-radius(var(--#{$prefix}accordion-inner-border-radius));
      }
    }

    .accordion-collapse {
      @include border-bottom-radius(var(--#{$prefix}accordion-border-radius));
    }
  }
}

.accordion-body {
  padding: var(--#{$prefix}accordion-body-padding-y) var(--#{$prefix}accordion-body-padding-x);
}


// Flush accordion items
//
// Remove borders and border-radius to keep accordion items edge-to-edge.

.accordion-flush {
  .accordion-collapse {
    border-width: 0;
  }

  .accordion-item {
    border-right: 0;
    border-left: 0;
    @include border-radius(0);

    &:first-child { border-top: 0; }
    &:last-child { border-bottom: 0; }

    .accordion-button {
      &,
      &.collapsed {
        @include border-radius(0);
      }
    }
  }
}
`,an=`//
// Base styles
//

.alert {
  // scss-docs-start alert-css-vars
  --#{$prefix}alert-bg: transparent;
  --#{$prefix}alert-padding-x: #{$alert-padding-x};
  --#{$prefix}alert-padding-y: #{$alert-padding-y};
  --#{$prefix}alert-margin-bottom: #{$alert-margin-bottom};
  --#{$prefix}alert-color: inherit;
  --#{$prefix}alert-border-color: transparent;
  --#{$prefix}alert-border: #{$alert-border-width} solid var(--#{$prefix}alert-border-color);
  --#{$prefix}alert-border-radius: #{$alert-border-radius};
  // scss-docs-end alert-css-vars

  position: relative;
  padding: var(--#{$prefix}alert-padding-y) var(--#{$prefix}alert-padding-x);
  margin-bottom: var(--#{$prefix}alert-margin-bottom);
  color: var(--#{$prefix}alert-color);
  background-color: var(--#{$prefix}alert-bg);
  border: var(--#{$prefix}alert-border);
  @include border-radius(var(--#{$prefix}alert-border-radius));
}

// Headings for larger alerts
.alert-heading {
  // Specified to prevent conflicts of changing $headings-color
  color: inherit;
}

// Provide class for links that match alerts
.alert-link {
  font-weight: $alert-link-font-weight;
  color: var(--#{$prefix}alert-link-color);
}


// Dismissible alerts
//
// Expand the right padding and account for the close button's positioning.

.alert-dismissible {
  @include ltr-rtl("padding-right", $alert-dismissible-padding-r);

  // Adjust close link position
  .btn-close {
    position: absolute;
    top: 0;
    @include ltr-rtl("right", 0);
    z-index: $stretched-link-z-index + 1;
    padding: $alert-padding-y * 1.25 $alert-padding-x;
  }
}


// scss-docs-start alert-modifiers
// Generate contextual modifier classes for colorizing the alert.

@each $state, $value in $alert-variants {
  $alert-background: map-get($value, "alert-bg");
  $alert-border: map-get($value, "alert-border");
  $alert-color: map-get($value, "alert-color");

  @if (contrast-ratio($alert-background, $alert-color) < $min-contrast-ratio) {
    $alert-color: mix(map-get($value, "base-color"), color-contrast($alert-background), abs($alert-color-scale));
  }
  .alert-#{$state} {
    @include alert-variant($alert-background, $alert-border, $alert-color);
  }
}
// scss-docs-end alert-modifiers
`,ln=`.avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  @include border-radius(50em);
  @include transition($avatar-transition);
  @include avatar($avatar-width);
}

.avatar-img {
  width: 100%;
  height: auto;
  @include border-radius(50em);
}

.avatar-status {
  position: absolute;
  @include ltr-rtl("right", 0);
  bottom: 0;
  display: block;
  border: 1px solid $white;
  @include border-radius(50em);
}

@each $width, $value in $avatar-widths {
  .avatar-#{$width} {
    @include avatar($value);
  }
}

.avatars-stack {
  display: flex;

  .avatar {
    @include ltr-rtl("margin-right", - ($avatar-width * .4));

    &:hover {
      @include ltr-rtl("margin-right", 0);
    }
  }

  @each $width, $value in $avatar-widths {
    .avatar-#{$width} {
      @include ltr-rtl("margin-right", - ($value * .4));
    }
  }
}
`,dn=`// Base class
//
// Requires one of the contextual, color modifier classes for \`color\` and
// \`background-color\`.

.badge {
  // scss-docs-start badge-css-vars
  --#{$prefix}badge-padding-x: #{$badge-padding-x};
  --#{$prefix}badge-padding-y: #{$badge-padding-y};
  @include rfs($badge-font-size, --#{$prefix}badge-font-size);
  --#{$prefix}badge-font-weight: #{$badge-font-weight};
  --#{$prefix}badge-color: #{$badge-color};
  --#{$prefix}badge-border-radius: #{$badge-border-radius};
  // scss-docs-end badge-css-vars

  display: inline-block;
  padding: var(--#{$prefix}badge-padding-y) var(--#{$prefix}badge-padding-x);
  @include font-size(var(--#{$prefix}badge-font-size));
  font-weight: var(--#{$prefix}badge-font-weight);
  line-height: 1;
  color: var(--#{$prefix}badge-color);
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: var(--#{$prefix}badge-border-radius, 0); // stylelint-disable-line property-disallowed-list
  @include gradient-bg();

  // Empty badges collapse automatically
  &:empty {
    display: none;
  }
}

// Quick fix for badges in buttons
.btn .badge {
  position: relative;
  top: -1px;
}

//
// Badge Sizes
//

.badge-sm {
  padding: $badge-padding-y-sm $badge-padding-x-sm;
  @include font-size($badge-font-size-sm);
}
`,sn=`.breadcrumb {
  // scss-docs-start breadcrumb-css-vars
  --#{$prefix}breadcrumb-padding-x: #{$breadcrumb-padding-x};
  --#{$prefix}breadcrumb-padding-y: #{$breadcrumb-padding-y};
  --#{$prefix}breadcrumb-margin-bottom: #{$breadcrumb-margin-bottom};
  @include rfs($breadcrumb-font-size, --#{$prefix}breadcrumb-font-size);
  --#{$prefix}breadcrumb-bg: #{$breadcrumb-bg};
  --#{$prefix}breadcrumb-border-radius: #{$breadcrumb-border-radius};
  --#{$prefix}breadcrumb-divider-color: #{$breadcrumb-divider-color};
  --#{$prefix}breadcrumb-item-padding-x: #{$breadcrumb-item-padding-x};
  --#{$prefix}breadcrumb-item-active-color: #{$breadcrumb-active-color};
  // scss-docs-end breadcrumb-css-vars

  display: flex;
  flex-wrap: wrap;
  padding: var(--#{$prefix}breadcrumb-padding-y) var(--#{$prefix}breadcrumb-padding-x);
  margin-bottom: var(--#{$prefix}breadcrumb-margin-bottom);
  @include font-size(var(--#{$prefix}breadcrumb-font-size));
  list-style: none;
  background-color: var(--#{$prefix}breadcrumb-bg);
  @include border-radius(var(--#{$prefix}breadcrumb-border-radius));
}

.breadcrumb-item {
  // The separator between breadcrumbs (by default, a forward-slash: "/")
  + .breadcrumb-item {
    @include ltr-rtl("padding-left",  var(--#{$prefix}breadcrumb-item-padding-x));

    &::before {
      @include ltr-rtl("float", left); // Suppress inline spacings and underlining of the separator
      @include ltr-rtl("padding-right", var(--#{$prefix}breadcrumb-item-padding-x));
      color: var(--#{$prefix}breadcrumb-divider-color);
      @include ltr-rtl(
        "content",
        var(--#{$prefix}breadcrumb-divider, escape-svg($breadcrumb-divider)),
        null,
        var(--#{$prefix}breadcrumb-divider-flipped, escape-svg($breadcrumb-divider-flipped))
      );
    }
  }

  &.active {
    color: var(--#{$prefix}breadcrumb-item-active-color);
  }
}
`,cn=`// Make the div behave like a button
.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle; // match .btn alignment given font-size hack above

  > .btn {
    position: relative;
    flex: 1 1 auto;
  }

  // Bring the hover, focused, and "active" buttons to the front to overlay
  // the borders properly
  > .btn-check:checked + .btn,
  > .btn-check:focus + .btn,
  > .btn:hover,
  > .btn:focus,
  > .btn:active,
  > .btn.active {
    z-index: 1;
  }
}

// Optional: Group multiple button groups together for a toolbar
.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .input-group {
    width: auto;
  }
}

.btn-group {
  @include border-radius($btn-border-radius);

  // Prevent double borders when buttons are next to each other
  > :not(.btn-check:first-child) + .btn,
  > .btn-group:not(:first-child) {
    @include ltr-rtl("margin-left", -$btn-border-width);
  }

  // Reset rounded corners
  > .btn:not(:last-child):not(.dropdown-toggle),
  > .btn.dropdown-toggle-split:first-child,
  > .btn-group:not(:last-child) > .btn {
    @include border-end-radius(0);
  }

  // The left radius should be 0 if the button is:
  // - the "third or more" child
  // - the second child and the previous element isn't \`.btn-check\` (making it the first child visually)
  // - part of a btn-group which isn't the first child
  > .btn:nth-child(n + 3),
  > :not(.btn-check) + .btn,
  > .btn-group:not(:first-child) > .btn {
    @include border-start-radius(0);
  }
}

// Sizing
//
// Remix the default button sizing classes into new ones for easier manipulation.

.btn-group-sm > .btn { @extend .btn-sm; }
.btn-group-lg > .btn { @extend .btn-lg; }


//
// Split button dropdowns
//

.dropdown-toggle-split {
  padding-right: $btn-padding-x * .75;
  padding-left: $btn-padding-x * .75;

  &::after,
  .dropup &::after,
  .dropend &::after {
    @include ltr-rtl("margin-left", 0);
  }

  .dropstart &::before {
    @include ltr-rtl("margin-right", 0);
  }
}

.btn-sm + .dropdown-toggle-split {
  padding-right: $btn-padding-x-sm * .75;
  padding-left: $btn-padding-x-sm * .75;
}

.btn-lg + .dropdown-toggle-split {
  padding-right: $btn-padding-x-lg * .75;
  padding-left: $btn-padding-x-lg * .75;
}


// The clickable button for toggling the menu
// Set the same inset shadow as the :active state
.btn-group.show .dropdown-toggle {
  @include box-shadow($btn-active-box-shadow);

  // Show no shadow for \`.btn-link\` since it has no other button styles.
  &.btn-link {
    @include box-shadow(none);
  }
}


//
// Vertical button groups
//

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > .btn,
  > .btn-group {
    width: 100%;
  }

  > .btn:not(:first-child),
  > .btn-group:not(:first-child) {
    margin-top: -$btn-border-width;
  }

  // Reset rounded corners
  > .btn:not(:last-child):not(.dropdown-toggle),
  > .btn-group:not(:last-child) > .btn {
    @include border-bottom-radius(0);
  }

  > .btn ~ .btn,
  > .btn-group:not(:first-child) > .btn {
    @include border-top-radius(0);
  }
}
`,pn=`//
// Base styles
//

.btn {
  // scss-docs-start btn-css-vars
  --#{$prefix}btn-padding-x: #{$btn-padding-x};
  --#{$prefix}btn-padding-y: #{$btn-padding-y};
  --#{$prefix}btn-font-family: #{$btn-font-family};
  @include rfs($btn-font-size, --#{$prefix}btn-font-size);
  --#{$prefix}btn-font-weight: #{$btn-font-weight};
  --#{$prefix}btn-line-height: #{$btn-line-height};
  --#{$prefix}btn-color: #{$body-color};
  --#{$prefix}btn-bg: transparent;
  --#{$prefix}btn-border-width: #{$btn-border-width};
  --#{$prefix}btn-border-color: transparent;
  --#{$prefix}btn-border-radius: #{$btn-border-radius};
  --#{$prefix}btn-hover-border-color: transparent;
  --#{$prefix}btn-box-shadow: #{$btn-box-shadow};
  --#{$prefix}btn-disabled-opacity: #{$btn-disabled-opacity};
  --#{$prefix}btn-focus-box-shadow: 0 0 0 #{$btn-focus-width} rgba(var(--#{$prefix}btn-focus-shadow-rgb), .5);
  // scss-docs-end btn-css-vars

  display: inline-block;
  padding: var(--#{$prefix}btn-padding-y) var(--#{$prefix}btn-padding-x);
  font-family: var(--#{$prefix}btn-font-family);
  @include font-size(var(--#{$prefix}btn-font-size));
  font-weight: var(--#{$prefix}btn-font-weight);
  line-height: var(--#{$prefix}btn-line-height);
  color: var(--#{$prefix}btn-color);
  text-align: center;
  text-decoration: if($link-decoration == none, null, none);
  white-space: $btn-white-space;
  vertical-align: middle;
  cursor: if($enable-button-pointers, pointer, null);
  user-select: none;
  border: var(--#{$prefix}btn-border-width) solid var(--#{$prefix}btn-border-color);
  @include border-radius(var(--#{$prefix}btn-border-radius));
  @include gradient-bg(var(--#{$prefix}btn-bg));
  @include box-shadow(var(--#{$prefix}btn-box-shadow));
  @include transition($btn-transition);
  @include elevation(1, ("[class*='link']", "[class*='outline']", "[class*='ghost']", "[class*='transparent']", "[class*='close']"));

  &:hover {
    color: var(--#{$prefix}btn-hover-color);
    text-decoration: if($link-hover-decoration == underline, none, null);
    background-color: var(--#{$prefix}btn-hover-bg);
    border-color: var(--#{$prefix}btn-hover-border-color);
    @include elevation(2, ("[class*='link']", "[class*='outline']", "[class*='ghost']", "[class*='transparent']", "[class*='close']"));
  }

  .btn-check + &:hover {
    // override for the checkbox/radio buttons
    color: var(--#{$prefix}btn-color);
    background-color: var(--#{$prefix}btn-bg);
    border-color: var(--#{$prefix}btn-border-color);
  }

  &:focus-visible {
    color: var(--#{$prefix}btn-hover-color);
    @include gradient-bg(var(--#{$prefix}btn-hover-bg));
    border-color: var(--#{$prefix}btn-hover-border-color);
    outline: 0;
    // Avoid using mixin so we can pass custom focus shadow properly
    @if $enable-shadows {
      box-shadow: var(--#{$prefix}btn-box-shadow), var(--#{$prefix}btn-focus-box-shadow);
    } @else {
      box-shadow: var(--#{$prefix}btn-focus-box-shadow);
    }
  }

  .btn-check:focus-visible + & {
    border-color: var(--#{$prefix}btn-hover-border-color);
    outline: 0;
    // Avoid using mixin so we can pass custom focus shadow properly
    @if $enable-shadows {
      box-shadow: var(--#{$prefix}btn-box-shadow), var(--#{$prefix}btn-focus-box-shadow);
    } @else {
      box-shadow: var(--#{$prefix}btn-focus-box-shadow);
    }
  }

  .btn-check:checked + &,
  :not(.btn-check) + &:active,
  &:first-child:active,
  &.active,
  &.show {
    color: var(--#{$prefix}btn-active-color);
    background-color: var(--#{$prefix}btn-active-bg);
    // Remove CSS gradients if they're enabled
    background-image: if($enable-gradients, none, null);
    border-color: var(--#{$prefix}btn-active-border-color);
    @include box-shadow(var(--#{$prefix}btn-active-shadow));

    &:focus-visible {
      // Avoid using mixin so we can pass custom focus shadow properly
      @if $enable-shadows {
        box-shadow: var(--#{$prefix}btn-active-shadow), var(--#{$prefix}btn-focus-box-shadow);
      } @else {
        box-shadow: var(--#{$prefix}btn-focus-box-shadow);
      }
    }
  }

  &:disabled,
  &.disabled,
  fieldset:disabled & {
    color: var(--#{$prefix}btn-disabled-color);
    pointer-events: none;
    background-color: var(--#{$prefix}btn-disabled-bg);
    background-image: if($enable-gradients, none, null);
    border-color: var(--#{$prefix}btn-disabled-border-color);
    opacity: var(--#{$prefix}btn-disabled-opacity);
    @include box-shadow(none);
  }
}


//
// Alternate buttons
//

// scss-docs-start btn-variant-loops
@each $state, $variant in $button-variants {
  .btn-#{$state} {
    @include button-variant($variant);
  }
}

@each $state, $variant in $button-outline-ghost-variants {
  .btn-outline-#{$state} {
    @include button-outline-variant($variant);
  }
}

@each $state, $variant in $button-outline-ghost-variants {
  .btn-ghost-#{$state} {
    @include button-ghost-variant($variant);
  }
}
// scss-docs-end btn-variant-loops

.btn-transparent {
  --#{$prefix}btn-active-border-color: transparent;
  --#{$prefix}btn-disabled-border-color: transparent;
  --#{$prefix}btn-hover-border-color: transparent;
  --#{$prefix}btn-box-shadow: none;
  --#{$prefix}btn-focus-shadow-rgb: #{to-rgb(mix(color-contrast($primary), $primary, 15%))};

  @if $enable-gradients {
    background-image: none;
  }
}

//
// Link buttons
//

// Make a button look and behave like a link
.btn-link {
  --#{$prefix}btn-font-weight: #{$font-weight-normal};
  --#{$prefix}btn-color: #{$btn-link-color};
  --#{$prefix}btn-bg: transparent;
  --#{$prefix}btn-border-color: transparent;
  --#{$prefix}btn-hover-color: #{$btn-link-hover-color};
  --#{$prefix}btn-hover-border-color: transparent;
  --#{$prefix}btn-active-border-color: transparent;
  --#{$prefix}btn-disabled-color: #{$btn-link-disabled-color};
  --#{$prefix}btn-disabled-border-color: transparent;
  --#{$prefix}btn-box-shadow: none;
  --#{$prefix}btn-focus-shadow-rgb: #{to-rgb(mix(color-contrast($primary), $primary, 15%))};

  text-decoration: $link-decoration;
  @if $enable-gradients {
    background-image: none;
  }

  &:hover,
  &:focus-visible {
    text-decoration: $link-hover-decoration;
  }

  &:focus-visible {
    color: var(--#{$prefix}btn-color);
  }

  // No need for an active state here
}


//
// Button Sizes
//

.btn-lg {
  @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-border-radius-lg);
}

.btn-sm {
  @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-border-radius-sm);
}
`,un=`.calendar {
  // scss-docs-start calendar-css-vars
  --#{$prefix}calendar-table-margin: #{$calendar-table-margin};
  --#{$prefix}calendar-table-cell-size: #{$calendar-table-cell-size};
  --#{$prefix}calendar-nav-padding: #{$calendar-nav-padding};
  --#{$prefix}calendar-nav-border: #{$calendar-nav-border-width} solid #{$calendar-nav-border-color};
  --#{$prefix}calendar-nav-date-color: #{$calendar-nav-date-color};
  --#{$prefix}calendar-nav-date-hover-color: #{$calendar-nav-date-hover-color};
  --#{$prefix}calendar-nav-icon-width: #{$calendar-nav-icon-width};
  --#{$prefix}calendar-nav-icon-height: #{$calendar-nav-icon-height};
  --#{$prefix}calendar-cell-header-inner-color: #{$calendar-cell-header-inner-color};
  --#{$prefix}calendar-cell-hover-bg: #{$calendar-cell-hover-bg};
  --#{$prefix}calendar-cell-disabled-color: #{$calendar-cell-disabled-color};
  --#{$prefix}calendar-cell-selected-color: #{$calendar-cell-selected-color};
  --#{$prefix}calendar-cell-selected-bg: #{$calendar-cell-selected-bg};
  --#{$prefix}calendar-cell-range-bg: #{$calendar-cell-range-bg};
  --#{$prefix}calendar-cell-range-hover-bg: #{$calendar-cell-range-hover-bg};
  --#{$prefix}calendar-cell-range-hover-border-color: #{$calendar-cell-range-hover-border-color};
  --#{$prefix}calendar-cell-today-color: #{$calendar-cell-today-color};
  // scss-docs-end calendar-css-vars

  font-weight: initial;

  table {
    width: calc(var(--#{$prefix}calendar-table-cell-size) * 7); // stylelint-disable-line function-disallowed-list
    margin: var(--#{$prefix}calendar-table-margin);

    th,
    td {
      width: var(--#{$prefix}calendar-table-cell-size);
    }
  }

  &.months ~ .time-picker,
  &.years ~ .time-picker {
    display: none;
  }
}

.calendars {
  display: flex;
}

.calendar-nav {
  display: flex;
  align-items: baseline;
  padding: var(--#{$prefix}calendar-nav-padding);
  border-bottom: var(--#{$prefix}calendar-nav-border);
}

.calendar-nav-date {
  flex: 1;
  text-align: center;

  .btn {
    font-weight: 600;
    color: var(--#{$prefix}calendar-nav-date-color);

    &:hover {
      color: var(--#{$prefix}calendar-nav-date-hover-color);
    }
  }
}

.calendar-nav-icon {
  display: block;
  width: var(--#{$prefix}calendar-nav-icon-width);
  height: var(--#{$prefix}calendar-nav-icon-height);
  @include transition(background-image .15s ease-in-out);
}

.calendar-nav-icon-double-next {
  @include ltr-rtl-value-only("background-image", escape-svg($calendar-nav-icon-double-next), escape-svg($calendar-nav-icon-double-prev));
  &:hover {
    @include ltr-rtl-value-only("background-image", escape-svg($calendar-nav-icon-double-next-hover), escape-svg($calendar-nav-icon-double-prev-hover));
  }
}

.calendar-nav-icon-double-prev {
  @include ltr-rtl-value-only("background-image", escape-svg($calendar-nav-icon-double-prev), escape-svg($calendar-nav-icon-double-next));
  &:hover {
    @include ltr-rtl-value-only("background-image", escape-svg($calendar-nav-icon-double-prev-hover), escape-svg($calendar-nav-icon-double-next-hover));
  }
}

.calendar-nav-icon-next {
  @include ltr-rtl-value-only("background-image", escape-svg($calendar-nav-icon-next), escape-svg($calendar-nav-icon-prev));
  &:hover {
    @include ltr-rtl-value-only("background-image", escape-svg($calendar-nav-icon-next-hover), escape-svg($calendar-nav-icon-prev-hover));
  }
}

.calendar-nav-icon-prev {
  @include ltr-rtl-value-only("background-image", escape-svg($calendar-nav-icon-prev), escape-svg($calendar-nav-icon-next));
  &:hover {
    @include ltr-rtl-value-only("background-image", escape-svg($calendar-nav-icon-prev-hover), escape-svg($calendar-nav-icon-next-hover));
  }
}

.calendar-header-cell-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--#{$prefix}calendar-table-cell-size);
  font-weight: 600;
  color: var(--#{$prefix}calendar-cell-header-inner-color);
}

.calendar-cell {
  padding: 1px 0;
  text-align: center;

  &:not(.disabled):not(.next):not(.previous):hover .calendar-cell-inner,
  &.clickable:hover .calendar-cell-inner {
    cursor: pointer;
    background-color: var(--#{$prefix}calendar-cell-hover-bg);
  }

  &.today .calendar-cell-inner {
    color: var(--#{$prefix}calendar-cell-today-color);
  }

  &.disabled,
  &.next,
  &.previous .calendar-cell-inner {
    color: var(--#{$prefix}calendar-cell-disabled-color);
  }

  &.disabled .calendar-cell-inner {
    cursor: not-allowed;
  }

  &.range:not(.selected) .calendar-cell-inner {
    background: var(--#{$prefix}calendar-cell-range-bg);
    @include border-radius(0);
  }

  &.range:not(.selected):hover .calendar-cell-inner {
    position: relative;
    &::after {
      position: absolute;
      width: 100%;
      height: 100%;
      content: "";
      background: var(--#{$prefix}calendar-cell-range-hover-bg);
      @include border-radius($border-radius);
    }
  }

  &.range:not(.selected):first-child .calendar-cell-inner,
  &:not(.range) + .range .calendar-cell-inner {
    @include border-start-radius($border-radius);
  }

  &.range:not(.selected):last-child .calendar-cell-inner,
  &.range:not(.selected).last .calendar-cell-inner {
    @include border-end-radius($border-radius);
  }

  &.range-hover .calendar-cell-inner {
    position: relative;
    &::before {
      position: absolute;
      width: 100%;
      height: 100%;
      content: "";
    }
  }

  &.range-hover .calendar-cell-inner,
  &.range-hover.selected .calendar-cell-inner {
    &::before {
      border-top: 1px dashed var(--#{$prefix}calendar-cell-selected-bg);
      border-bottom: 1px dashed var(--#{$prefix}calendar-cell-selected-bg);
      @include border-radius(0);
    }
  }

  &.range-hover:first-child .calendar-cell-inner,
  &:not(.range-hover) + .range-hover .calendar-cell-inner {
    &::before {
      border-left: 1px dashed var(--#{$prefix}calendar-cell-selected-bg);
      @include border-start-radius($border-radius);
    }
  }

  &.range-hover:last-child .calendar-cell-inner,
  &.range-hover.last .calendar-cell-inner,
  &.range-hover + .range-hover:hover .calendar-cell-inner,
  &.range-hover:first-child:hover .calendar-cell-inner {
    &::before {
      border-right: 1px dashed var(--#{$prefix}calendar-cell-selected-bg);
      @include border-end-radius($border-radius);
    }
  }

  &.range-hover.selected:hover .calendar-cell-inner {
    &::before {
      border: 0;
    }
  }

  &.selected:not(.previous):not(.next) .calendar-cell-inner,
  &.selected:not(.previous):not(.next).start .calendar-cell-inner,
  &.selected:not(.previous):not(.next).end .calendar-cell-inner {
    position: relative;
    color: var(--#{$prefix}calendar-cell-selected-color);
    background: var(--#{$prefix}calendar-cell-selected-bg);
  }

  &.selected:not(.previous):not(.next).start .calendar-cell-inner,
  &.selected:not(.previous):not(.next).end .calendar-cell-inner {
    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      content: "";
      background: var(--#{$prefix}calendar-cell-range-bg);
    }
  }

  &.selected:not(.previous):not(.next).start .calendar-cell-inner::before {
    @include border-start-radius($border-radius);
    @include border-end-radius(0);
  }
  &.selected:not(.previous):not(.next).end .calendar-cell-inner::before {
    @include border-start-radius(0);
    @include border-end-radius($border-radius);
  }
}

.calendar-cell-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--#{$prefix}calendar-table-cell-size);
  @include border-radius($border-radius);
}
`,$n=`.callout {
  // scss-docs-start callout-css-vars
  --#{$prefix}callout-padding-x: #{$callout-padding-x};
  --#{$prefix}callout-padding-y: #{$callout-padding-y};
  --#{$prefix}callout-margin-x: #{$callout-margin-x};
  --#{$prefix}callout-margin-y: #{$callout-margin-y};
  --#{$prefix}callout-border-width: #{$callout-border-width};
  --#{$prefix}callout-border-color: #{$callout-border-color};
  --#{$prefix}callout-border-left-width: #{$callout-border-left-width};
  --#{$prefix}callout-border-radius: #{$callout-border-radius};
  // scss-docs-end callout-css-vars

  padding: var(--#{$prefix}callout-padding-y) var(--#{$prefix}callout-padding-x);
  margin: var(--#{$prefix}callout-margin-y) var(--#{$prefix}callout-margin-x);
  border: var(--#{$prefix}callout-border-width) solid var(--#{$prefix}callout-border-color);
  @include ltr-rtl("border-left-width", var(--#{$prefix}callout-border-left-width));
  @include ltr-rtl("border-left-color", var(--#{$prefix}callout-border-left-color));
  @include border-radius(var(--#{$prefix}callout-border-radius));
}

// scss-docs-start callout-modifiers
// Generate contextual modifier classes for colorizing the collor.
@each $state, $value in $callout-variants {
  .callout-#{$state} {
    --#{$prefix}callout-border-left-color: #{$value};
  }
}
// scss-docs-end callout-modifiers
`,bn=`//
// Base styles
//

.card {
  // scss-docs-start card-css-vars
  --#{$prefix}card-spacer-y: #{$card-spacer-y};
  --#{$prefix}card-spacer-x: #{$card-spacer-x};
  --#{$prefix}card-title-spacer-y: #{$card-title-spacer-y};
  --#{$prefix}card-border-width: #{$card-border-width};
  --#{$prefix}card-border-color: #{$card-border-color};
  --#{$prefix}card-border-radius: #{$card-border-radius};
  --#{$prefix}card-box-shadow: #{$card-box-shadow};
  --#{$prefix}card-inner-border-radius: #{$card-inner-border-radius};
  --#{$prefix}card-cap-padding-y: #{$card-cap-padding-y};
  --#{$prefix}card-cap-padding-x: #{$card-cap-padding-x};
  --#{$prefix}card-cap-bg: #{$card-cap-bg};
  --#{$prefix}card-cap-color: #{$card-cap-color};
  --#{$prefix}card-height: #{$card-height};
  --#{$prefix}card-color: #{$card-color};
  --#{$prefix}card-bg: #{$card-bg};
  --#{$prefix}card-img-overlay-padding: #{$card-img-overlay-padding};
  --#{$prefix}card-group-margin: #{$card-group-margin};
  // scss-docs-end card-css-vars

  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0; // See https://github.com/twbs/bootstrap/pull/22740#issuecomment-305868106
  height: var(--#{$prefix}card-height);
  word-wrap: break-word;
  background-color: var(--#{$prefix}card-bg);
  background-clip: border-box;
  border: var(--#{$prefix}card-border-width) solid var(--#{$prefix}card-border-color);
  @include border-radius(var(--#{$prefix}card-border-radius));
  @include box-shadow(var(--#{$prefix}card-box-shadow));
  @include elevation(1);

  > hr {
    margin-right: 0;
    margin-left: 0;
  }

  > .list-group {
    border-top: inherit;
    border-bottom: inherit;

    &:first-child {
      border-top-width: 0;
      @include border-top-radius(var(--#{$prefix}card-inner-border-radius));
    }

    &:last-child  {
      border-bottom-width: 0;
      @include border-bottom-radius(var(--#{$prefix}card-inner-border-radius));
    }
  }

  // Due to specificity of the above selector (\`.card > .list-group\`), we must
  // use a child selector here to prevent double borders.
  > .card-header + .list-group,
  > .list-group + .card-footer {
    border-top: 0;
  }
}

.card-body {
  // Enable \`flex-grow: 1\` for decks and groups so that card blocks take up
  // as much space as possible, ensuring footers are aligned to the bottom.
  flex: 1 1 auto;
  padding: var(--#{$prefix}card-spacer-y) var(--#{$prefix}card-spacer-x);
  color: var(--#{$prefix}card-color);
}

.card-title {
  margin-bottom: var(--#{$prefix}card-title-spacer-y);
}

.card-subtitle {
  margin-top: calc(-.5 * var(--#{$prefix}card-title-spacer-y)); // stylelint-disable-line function-disallowed-list
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link {
  &:hover {
    text-decoration: if($link-hover-decoration == underline, none, null);
  }

  + .card-link {
    @include ltr-rtl("margin-left", var(--#{$prefix}card-spacer-x));
  }
}

//
// Optional textual caps
//

.card-header {
  padding: var(--#{$prefix}card-cap-padding-y) var(--#{$prefix}card-cap-padding-x);
  margin-bottom: 0; // Removes the default margin-bottom of <hN>
  color: var(--#{$prefix}card-cap-color);
  background-color: var(--#{$prefix}card-cap-bg);
  border-bottom: var(--#{$prefix}card-border-width) solid var(--#{$prefix}card-border-color);

  &:first-child {
    @include border-radius(var(--#{$prefix}card-inner-border-radius) var(--#{$prefix}card-inner-border-radius) 0 0);
  }
}

.card-footer {
  padding: var(--#{$prefix}card-cap-padding-y) var(--#{$prefix}card-cap-padding-x);
  color: var(--#{$prefix}card-cap-color);
  background-color: var(--#{$prefix}card-cap-bg);
  border-top: var(--#{$prefix}card-border-width) solid var(--#{$prefix}card-border-color);

  &:last-child {
    @include border-radius(0 0 var(--#{$prefix}card-inner-border-radius) var(--#{$prefix}card-inner-border-radius));
  }
}


//
// Header navs
//

.card-header-tabs {
  margin-right: calc(-.5 * var(--#{$prefix}card-cap-padding-x)); // stylelint-disable-line function-disallowed-list
  margin-bottom: calc(-1 * var(--#{$prefix}card-cap-padding-y)); // stylelint-disable-line function-disallowed-list
  margin-left: calc(-.5 * var(--#{$prefix}card-cap-padding-x)); // stylelint-disable-line function-disallowed-list
  border-bottom: 0;

  .nav-link.active {
    background-color: var(--#{$prefix}card-bg);
    border-bottom-color: var(--#{$prefix}card-bg);
  }
}

.card-header-pills {
  margin-right: calc(-.5 * var(--#{$prefix}card-cap-padding-x)); // stylelint-disable-line function-disallowed-list
  margin-left: calc(-.5 * var(--#{$prefix}card-cap-padding-x)); // stylelint-disable-line function-disallowed-list
}

// Card image
.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: var(--#{$prefix}card-img-overlay-padding);
  @include border-radius(var(--#{$prefix}card-inner-border-radius));
}

.card-img,
.card-img-top,
.card-img-bottom {
  width: 100%; // Required because we use flexbox and this inherently applies align-self: stretch
}

.card-img,
.card-img-top {
  @include border-top-radius(var(--#{$prefix}card-inner-border-radius));
}

.card-img,
.card-img-bottom {
  @include border-bottom-radius(var(--#{$prefix}card-inner-border-radius));
}


//
// Card groups
//

.card-group {
  // The child selector allows nested \`.card\` within \`.card-group\`
  // to display properly.
  > .card {
    margin-bottom: var(--#{$prefix}card-group-margin);
  }

  @include media-breakpoint-up(sm) {
    display: flex;
    flex-flow: row wrap;
    // The child selector allows nested \`.card\` within \`.card-group\`
    // to display properly.
    > .card {
      // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4
      flex: 1 0 0%;
      margin-bottom: 0;

      + .card {
        @include ltr-rtl("margin-left", 0);
        @include ltr-rtl("border-left", 0);
      }

      // Handle rounded corners
      @if $enable-rounded {
        &:not(:last-child) {
          @include border-end-radius(0);

          .card-img-top,
          .card-header {
            // stylelint-disable-next-line property-disallowed-list
            border-top-right-radius: 0;
          }
          .card-img-bottom,
          .card-footer {
            // stylelint-disable-next-line property-disallowed-list
            border-bottom-right-radius: 0;
          }
        }

        &:not(:first-child) {
          @include border-start-radius(0);

          .card-img-top,
          .card-header {
            // stylelint-disable-next-line property-disallowed-list
            border-top-left-radius: 0;
          }
          .card-img-bottom,
          .card-footer {
            // stylelint-disable-next-line property-disallowed-list
            border-bottom-left-radius: 0;
          }
        }
      }
    }
  }
}
`,fn=`// Notes on the classes:
//
// 1. .carousel.pointer-event should ideally be pan-y (to allow for users to scroll vertically)
//    even when their scroll action started on a carousel, but for compatibility (with Firefox)
//    we're preventing all actions instead
// 2. The .carousel-item-start and .carousel-item-end is used to indicate where
//    the active slide is heading.
// 3. .active.carousel-item is the current slide.
// 4. .active.carousel-item-start and .active.carousel-item-end is the current
//    slide in its in-transition state. Only one of these occurs at a time.
// 5. .carousel-item-next.carousel-item-start and .carousel-item-prev.carousel-item-end
//    is the upcoming slide in transition.

.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
  @include clearfix();
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
  @include transition($carousel-transition);
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

.carousel-item-next:not(.carousel-item-start),
.active.carousel-item-end {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-end),
.active.carousel-item-start {
  transform: translateX(-100%);
}


//
// Alternate transitions
//

.carousel-fade {
  .carousel-item {
    opacity: 0;
    transition-property: opacity;
    transform: none;
  }

  .carousel-item.active,
  .carousel-item-next.carousel-item-start,
  .carousel-item-prev.carousel-item-end {
    z-index: 1;
    opacity: 1;
  }

  .active.carousel-item-start,
  .active.carousel-item-end {
    z-index: 0;
    opacity: 0;
    @include transition(opacity 0s $carousel-transition-duration);
  }
}


//
// Left/right controls for nav
//

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  // Use flex for alignment (1-3)
  display: flex; // 1. allow flex styles
  align-items: center; // 2. vertically center contents
  justify-content: center; // 3. horizontally center contents
  width: $carousel-control-width;
  padding: 0;
  color: var(--#{$prefix}carousel-control-color, $carousel-control-color);
  text-align: center;
  background: none;
  border: 0;
  opacity: $carousel-control-opacity;
  @include transition($carousel-control-transition);

  // Hover/focus state
  &:hover,
  &:focus {
    color: var(--#{$prefix}carousel-control-color, $carousel-control-color);
    text-decoration: none;
    outline: 0;
    opacity: $carousel-control-hover-opacity;
  }
}
.carousel-control-prev {
  left: 0;
  background-image: if($enable-gradients, linear-gradient(90deg, rgba($black, .25), rgba($black, .001)), null);
}
.carousel-control-next {
  right: 0;
  background-image: if($enable-gradients, linear-gradient(270deg, rgba($black, .25), rgba($black, .001)), null);
}

// Icons for within
.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: $carousel-control-icon-width;
  height: $carousel-control-icon-width;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}

/* rtl:options: {
  "autoRename": true,
  "stringMap":[ {
    "name"    : "prev-next",
    "search"  : "prev",
    "replace" : "next"
  } ]
} */
.carousel-control-prev-icon {
  background-image: escape-svg($carousel-control-prev-icon-bg);
}
.carousel-control-next-icon {
  background-image: escape-svg($carousel-control-next-icon-bg);
}

// Optional indicator pips/controls
//
// Add a container (such as a list) with the following class and add an item (ideally a focusable control,
// like a button) with data-coreui-target for each slide your carousel holds.

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 0;
  // Use the .carousel-control's width as margin so we don't overlay those
  margin-right: $carousel-control-width;
  margin-bottom: 1rem;
  margin-left: $carousel-control-width;
  list-style: none;

  [data-coreui-target] {
    box-sizing: content-box;
    flex: 0 1 auto;
    width: $carousel-indicator-width;
    height: $carousel-indicator-height;
    padding: 0;
    margin-right: $carousel-indicator-spacer;
    margin-left: $carousel-indicator-spacer;
    text-indent: -999px;
    cursor: pointer;
    background-color: var(--#{$prefix}carousel-indicator-active-bg, $carousel-indicator-active-bg);
    background-clip: padding-box;
    border: 0;
    // Use transparent borders to increase the hit area by 10px on top and bottom.
    border-top: $carousel-indicator-hit-area-height solid transparent;
    border-bottom: $carousel-indicator-hit-area-height solid transparent;
    opacity: $carousel-indicator-opacity;
    @include transition($carousel-indicator-transition);
  }

  .active {
    opacity: $carousel-indicator-active-opacity;
  }
}


// Optional captions
//
//

.carousel-caption {
  position: absolute;
  right: (100% - $carousel-caption-width) * .5;
  bottom: $carousel-caption-spacer;
  left: (100% - $carousel-caption-width) * .5;
  padding-top: $carousel-caption-padding-y;
  padding-bottom: $carousel-caption-padding-y;
  color: var(--#{$prefix}carousel-caption-color, $carousel-caption-color);
  text-align: center;
}

// Dark mode carousel

.carousel-dark {
  --#{$prefix}carousel-indicator-active-bg: #{$carousel-dark-indicator-active-bg};
  --#{$prefix}carousel-caption-color: #{$carousel-dark-caption-color};
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    filter: $carousel-dark-control-icon-filter;
  }

  .carousel-indicators [data-coreui-target] {
    background-color: $carousel-dark-indicator-active-bg;
  }

  .carousel-caption {
    color: $carousel-dark-caption-color;
  }
}
`,gn=`// Transparent background and border properties included for button version.
// iOS requires the button element instead of an anchor tag.
// If you want the anchor version, it requires \`href="#"\`.
// See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile

.btn-close {
  box-sizing: content-box;
  width: $btn-close-width;
  height: $btn-close-height;
  padding: $btn-close-padding-y $btn-close-padding-x;
  color: var(--#{$prefix}btn-close-color, $btn-close-color);
  background: transparent var(--#{$prefix}btn-close-bg, escape-svg($btn-close-bg)) center / $btn-close-width auto no-repeat; // include transparent for button elements
  border: 0; // for button elements
  @include border-radius();
  opacity: $btn-close-opacity;

  // Override <a>'s hover style
  &:hover {
    color: var(--#{$prefix}btn-close-color, $btn-close-color);
    text-decoration: none;
    opacity: $btn-close-hover-opacity;
  }

  &:focus {
    outline: 0;
    box-shadow: $btn-close-focus-shadow;
    opacity: $btn-close-focus-opacity;
  }

  &:disabled,
  &.disabled {
    pointer-events: none;
    user-select: none;
    opacity: $btn-close-disabled-opacity;
  }
}

.btn-close-white {
  filter: $btn-close-white-filter;
}
`,mn=`// Container widths
//
// Set the container width, and override it for fixed navbars in media queries.

@if $enable-container-classes {
  // Single container class with breakpoint max-widths
  .container,
  // 100% wide container at all breakpoints
  .container-fluid {
    @include make-container();
  }

  // Responsive containers that are 100% wide until a breakpoint
  @each $breakpoint, $container-max-width in $container-max-widths {
    .container-#{$breakpoint} {
      @extend .container-fluid;
    }

    @include media-breakpoint-up($breakpoint, $grid-breakpoints) {
      %responsive-container-#{$breakpoint} {
        max-width: $container-max-width;
      }

      // Extend each breakpoint which is smaller or equal to the current breakpoint
      $extend-breakpoint: true;

      @each $name, $width in $grid-breakpoints {
        @if ($extend-breakpoint) {
          .container#{breakpoint-infix($name, $grid-breakpoints)} {
            @extend %responsive-container-#{$breakpoint};
          }

          // Once the current breakpoint is reached, stop extending
          @if ($breakpoint == $name) {
            $extend-breakpoint: false;
          }
        }
      }
    }
  }
}
`,hn=`.date-picker {
  // scss-docs-start date-picker-css-vars
  --#{$prefix}date-picker-ranges-width: #{$date-picker-ranges-width};
  --#{$prefix}date-picker-ranges-padding: #{$date-picker-ranges-padding};
  --#{$prefix}date-picker-ranges-border: #{$date-picker-ranges-border-width} solid #{$date-picker-ranges-border-color};
  --#{$prefix}date-picker-timepicker-width: #{$date-picker-timepicker-width};
  --#{$prefix}date-picker-timepicker-border-top: #{$date-picker-timepicker-border-width} solid #{$date-picker-timepicker-border-color};
  // scss-docs-end date-picker-css-vars

  .dropdown-menu {
    width: min-content;
  }

  &.is-invalid  {
    .form-control {
      --#{$prefix}input-border-color: #{$form-feedback-invalid-color};
    }

    .input-group-text {
      --#{$prefix}input-group-addon-border-color: #{$form-feedback-invalid-color};
    }

    .picker-input-group-indicator {
      --#{$prefix}input-group-addon-color: #{$form-feedback-invalid-color};
    }

    .date-picker-input-icon {
      background-image: escape-svg($date-picker-invalid-icon);
    }
  }

  &.is-valid  {
    .form-control {
      --#{$prefix}input-border-color: #{$form-feedback-valid-color};
    }

    .input-group-text {
      --#{$prefix}input-group-addon-border-color: #{$form-feedback-valid-color};
    }

    .picker-input-group-indicator {
      --#{$prefix}input-group-addon-color: #{$form-feedback-valid-color};
    }

    .date-picker-input-icon {
      background-image: escape-svg($date-picker-valid-icon);
    }
  }
}

.date-picker-body {
  display: grid;
  grid-template-areas:
    "ranges calendars"
    "ranges timepickers";
  grid-template-rows: auto;
  grid-template-columns: auto auto;

}

.date-picker-ranges {
  grid-area: ranges;
  width: var(--#{$prefix}date-picker-ranges-width);
  padding: var(--#{$prefix}date-picker-ranges-padding);
  border-right: var(--#{$prefix}date-picker-ranges-border);
}

.date-picker-calendars {
  display: flex;
  grid-area: calendars;

  .date-picker-calendar {
    &:not(:last-child) {
      .calendar-navigation-next {
        visibility: hidden;
      }
    }
    &:not(:first-child) {
      .calendar-navigation-prev {
        visibility: hidden;
      }
    }
  }
}

.date-picker-arrow-icon {
  @include ltr-rtl-value-only("background-image", escape-svg($date-picker-separator-icon), escape-svg($date-picker-separator-icon-rtl));
}

.date-picker-cleaner-icon {
  background-image: escape-svg($date-picker-cleaner-icon);

  &:hover {
    background-image: escape-svg($date-picker-cleaner-icon-hover);
  }
}

.date-picker-input-icon {
  background-image: escape-svg($date-picker-default-icon);
}

.date-picker-timepickers {
  display: flex;
  flex-wrap: wrap;
  grid-area: timepickers;
  justify-content: space-between;
  border-top: var(--#{$prefix}date-picker-timepicker-border-top);

  .time-picker {
    width: var(--#{$prefix}date-picker-timepicker-width);

    .form-select {
      width: initial;
      padding-right: .25rem !important; // stylelint-disable-line declaration-no-important
      padding-left: .25rem !important; // stylelint-disable-line declaration-no-important
      text-align: right;
      background-image: none !important; // stylelint-disable-line declaration-no-important
      border: 0;

      &:disabled {
        color: $text-disabled;
        background-color: transparent;
      }
    }
  }

  @include media-breakpoint-down(md) {
    display: block;

    .time-picker {
      width: 100%;

      + .time-picker {
        border-top: var(--#{$prefix}date-picker-timepicker-border-top);
      }
    }
  }
}
`,vn=`// The dropdown wrapper (\`<div>\`)
.dropup,
.dropend,
.dropdown,
.dropstart,
.dropup-center,
.dropdown-center {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;

  // Generate the caret automatically
  @include caret();
}

// The dropdown menu
.dropdown-menu {
  // scss-docs-start dropdown-css-vars
  --#{$prefix}dropdown-zindex: #{$zindex-dropdown};
  --#{$prefix}dropdown-min-width: #{$dropdown-min-width};
  --#{$prefix}dropdown-padding-x: #{$dropdown-padding-x};
  --#{$prefix}dropdown-padding-y: #{$dropdown-padding-y};
  --#{$prefix}dropdown-spacer: #{$dropdown-spacer};
  @include rfs($dropdown-font-size, --#{$prefix}dropdown-font-size);
  --#{$prefix}dropdown-color: #{$dropdown-color};
  --#{$prefix}dropdown-bg: #{$dropdown-bg};
  --#{$prefix}dropdown-border-color: #{$dropdown-border-color};
  --#{$prefix}dropdown-border-radius: #{$dropdown-border-radius};
  --#{$prefix}dropdown-border-width: #{$dropdown-border-width};
  --#{$prefix}dropdown-inner-border-radius: #{$dropdown-inner-border-radius};
  --#{$prefix}dropdown-divider-bg: #{$dropdown-divider-bg};
  --#{$prefix}dropdown-divider-margin-y: #{$dropdown-divider-margin-y};
  --#{$prefix}dropdown-box-shadow: #{$dropdown-box-shadow};
  --#{$prefix}dropdown-link-color: #{$dropdown-link-color};
  --#{$prefix}dropdown-link-hover-color: #{$dropdown-link-hover-color};
  --#{$prefix}dropdown-link-hover-bg: #{$dropdown-link-hover-bg};
  --#{$prefix}dropdown-link-active-color: #{$dropdown-link-active-color};
  --#{$prefix}dropdown-link-active-bg: #{$dropdown-link-active-bg};
  --#{$prefix}dropdown-link-disabled-color: #{$dropdown-link-disabled-color};
  --#{$prefix}dropdown-item-padding-x: #{$dropdown-item-padding-x};
  --#{$prefix}dropdown-item-padding-y: #{$dropdown-item-padding-y};
  --#{$prefix}dropdown-header-color: #{$dropdown-header-color};
  --#{$prefix}dropdown-header-padding-x: #{$dropdown-header-padding-x};
  --#{$prefix}dropdown-header-padding-y: #{$dropdown-header-padding-y};
  // scss-docs-end dropdown-css-vars

  position: absolute;
  z-index: var(--#{$prefix}dropdown-zindex);
  display: none; // none by default, but block on "open" of the menu
  min-width: var(--#{$prefix}dropdown-min-width);
  padding: var(--#{$prefix}dropdown-padding-y) var(--#{$prefix}dropdown-padding-x);
  margin: 0; // Override default margin of ul
  @include font-size(var(--#{$prefix}dropdown-font-size));
  color: var(--#{$prefix}dropdown-color);
  text-align: left; // Ensures proper alignment if parent has it changed (e.g., modal footer)
  list-style: none;
  background-color: var(--#{$prefix}dropdown-bg);
  background-clip: padding-box;
  border: var(--#{$prefix}dropdown-border-width) solid var(--#{$prefix}dropdown-border-color);
  @include border-radius(var(--#{$prefix}dropdown-border-radius));
  @include box-shadow(var(--#{$prefix}dropdown-box-shadow));
  @include elevation(4);

  &[data-coreui-popper] {
    top: 100%;
    @include ltr-rtl("left", 0);
    margin-top: var(--#{$prefix}dropdown-spacer);
  }

  @if $dropdown-padding-y == 0 {
    > .dropdown-item:first-child,
    > li:first-child .dropdown-item {
      @include border-top-radius(var(--#{$prefix}dropdown-inner-border-radius));
    }
    > .dropdown-item:last-child,
    > li:last-child .dropdown-item {
      @include border-bottom-radius(var(--#{$prefix}dropdown-inner-border-radius));
    }

  }
}

// scss-docs-start responsive-breakpoints
// We deliberately hardcode the \`cui-\` prefix because we check
// this custom property in JS to determine Popper's positioning

@each $breakpoint in map-keys($grid-breakpoints) {
  @include media-breakpoint-up($breakpoint) {
    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

    .dropdown-menu#{$infix}-start {
      --#{$prefix}position: start;

      &[data-coreui-popper] {
        right: auto;
        left: 0;
      }
    }

    .dropdown-menu#{$infix}-end {
      --#{$prefix}position: end;

      &[data-coreui-popper] {
        right: 0;
        left: auto;
      }
    }
  }
}
// scss-docs-end responsive-breakpoints

// Allow for dropdowns to go bottom up (aka, dropup-menu)
// Just add .dropup after the standard .dropdown class and you're set.
.dropup {
  .dropdown-menu[data-coreui-popper] {
    top: auto;
    bottom: 100%;
    margin-top: 0;
    margin-bottom: var(--#{$prefix}dropdown-spacer);
  }

  .dropdown-toggle {
    @include caret(up);
  }
}

.dropend {
  .dropdown-menu[data-coreui-popper] {
    top: 0;
    @include ltr-rtl("right", auto);
    @include ltr-rtl("left", 100%);
    margin-top: 0;
    @include ltr-rtl("margin-left", var(--#{$prefix}dropdown-spacer));
  }

  .dropdown-toggle {
    @include caret(end);
    &::after {
      vertical-align: 0;
    }
  }
}

.dropstart {
  .dropdown-menu[data-coreui-popper] {
    top: 0;

    @include ltr-rtl("right", 100%);
    @include ltr-rtl("left", auto);
    margin-top: 0;
    @include ltr-rtl("margin-right", var(--#{$prefix}dropdown-spacer));
  }

  .dropdown-toggle {
    @include caret(start);
    &::before {
      vertical-align: 0;
    }
  }
}


// Dividers (basically an \`<hr>\`) within the dropdown
.dropdown-divider {
  height: 0;
  margin: var(--#{$prefix}dropdown-divider-margin-y) 0;
  overflow: hidden;
  border-top: 1px solid var(--#{$prefix}dropdown-divider-bg);
  opacity: 1; // Revisit in v6 to de-dupe styles that conflict with <hr> element
}

// Links, buttons, and more within the dropdown menu
//
// \`<button>\`-specific styles are denoted with \`// For <button>s\`
.dropdown-item {
  display: block;
  width: 100%; // For \`<button>\`s
  padding: var(--#{$prefix}dropdown-item-padding-y) var(--#{$prefix}dropdown-item-padding-x);
  clear: both;
  font-weight: $font-weight-normal;
  color: var(--#{$prefix}dropdown-link-color);
  text-align: inherit; // For \`<button>\`s
  text-decoration: if($link-decoration == none, null, none);
  white-space: nowrap; // prevent links from randomly breaking onto new lines
  background-color: transparent; // For \`<button>\`s
  border: 0; // For \`<button>\`s

  &:hover,
  &:focus {
    color: var(--#{$prefix}dropdown-link-hover-color);
    text-decoration: if($link-hover-decoration == underline, none, null);
    @include gradient-bg(var(--#{$prefix}dropdown-link-hover-bg));
  }

  &.active,
  &:active {
    color: var(--#{$prefix}dropdown-link-active-color);
    text-decoration: none;
    @include gradient-bg(var(--#{$prefix}dropdown-link-active-bg));
  }

  &.disabled,
  &:disabled {
    color: var(--#{$prefix}dropdown-link-disabled-color);
    pointer-events: none;
    background-color: transparent;
    // Remove CSS gradients if they're enabled
    background-image: if($enable-gradients, none, null);
  }
}

.dropdown-menu.show {
  display: block;
}

// Dropdown section headers
.dropdown-header {
  display: block;
  padding: var(--#{$prefix}dropdown-header-padding-y) var(--#{$prefix}dropdown-header-padding-x);
  margin-bottom: 0; // for use with heading elements
  @include font-size($font-size-sm);
  color: var(--#{$prefix}dropdown-header-color);
  white-space: nowrap; // as with > li > a
}

// Dropdown text
.dropdown-item-text {
  display: block;
  padding: var(--#{$prefix}dropdown-item-padding-y) var(--#{$prefix}dropdown-item-padding-x);
  color: var(--#{$prefix}dropdown-link-color);
}

// Dark dropdowns
.dropdown-menu-dark {
  // scss-docs-start dropdown-dark-css-vars
  --#{$prefix}dropdown-color: #{$dropdown-dark-color};
  --#{$prefix}dropdown-bg: #{$dropdown-dark-bg};
  --#{$prefix}dropdown-border-color: #{$dropdown-dark-border-color};
  --#{$prefix}dropdown-box-shadow: #{$dropdown-dark-box-shadow};
  --#{$prefix}dropdown-link-color: #{$dropdown-dark-link-color};
  --#{$prefix}dropdown-link-hover-color: #{$dropdown-dark-link-hover-color};
  --#{$prefix}dropdown-divider-bg: #{$dropdown-dark-divider-bg};
  --#{$prefix}dropdown-link-hover-bg: #{$dropdown-dark-link-hover-bg};
  --#{$prefix}dropdown-link-active-color: #{$dropdown-dark-link-active-color};
  --#{$prefix}dropdown-link-active-bg: #{$dropdown-dark-link-active-bg};
  --#{$prefix}dropdown-link-disabled-color: #{$dropdown-dark-link-disabled-color};
  --#{$prefix}dropdown-header-color: #{$dropdown-dark-header-color};
  // scss-docs-end dropdown-dark-css-vars
}
`,xn=`.footer {
  // scss-docs-start footer-css-vars
  --#{$prefix}footer-min-height: #{$footer-min-height};
  --#{$prefix}footer-padding-x: #{$footer-padding-x};
  --#{$prefix}footer-padding-y: #{$footer-padding-y};
  --#{$prefix}footer-color: #{$footer-color};
  --#{$prefix}footer-bg: #{$footer-bg};
  --#{$prefix}footer-border-color: #{$footer-border-color};
  --#{$prefix}footer-border: #{$footer-border-width} solid var(--#{$prefix}footer-border-color);
  // scss-docs-end footer-css-vars

  display: flex;
  flex-wrap: wrap; // allow us to do the line break for collapsing content
  align-items: center;
  justify-content: space-between;
  min-height: var(--#{$prefix}footer-min-height);
  padding: var(--#{$prefix}footer-padding-y) var(--#{$prefix}footer-padding-x);
  color: var(--#{$prefix}footer-color);
  background: var(--#{$prefix}footer-bg);
  border-top: var(--#{$prefix}footer-border);
}

.footer-sticky {
  position: sticky;
  bottom: 0;
  z-index: $zindex-fixed;
  @include elevation(2, "top");
}
`,wn=`@import "forms/labels";
@import "forms/form-text";
@import "forms/form-control";
@import "forms/form-select";
@import "forms/form-multi-select";
@import "forms/form-check";
@import "forms/form-range";
@import "forms/floating-labels";
@import "forms/input-group";
@import "forms/validation";
`,kn=`// Bootstrap functions
//
// Utility mixins and functions for evaluating source code across our variables, maps, and mixins.

// Ascending
// Used to evaluate Sass maps like our grid breakpoints.
@mixin _assert-ascending($map, $map-name) {
  $prev-key: null;
  $prev-num: null;
  @each $key, $num in $map {
    @if $prev-num == null or unit($num) == "%" or unit($prev-num) == "%" {
      // Do nothing
    } @else if not comparable($prev-num, $num) {
      @warn "Potentially invalid value for #{$map-name}: This map must be in ascending order, but key '#{$key}' has value #{$num} whose unit makes it incomparable to #{$prev-num}, the value of the previous key '#{$prev-key}' !";
    } @else if $prev-num >= $num {
      @warn "Invalid value for #{$map-name}: This map must be in ascending order, but key '#{$key}' has value #{$num} which isn't greater than #{$prev-num}, the value of the previous key '#{$prev-key}' !";
    }
    $prev-key: $key;
    $prev-num: $num;
  }
}

// Starts at zero
// Used to ensure the min-width of the lowest breakpoint starts at 0.
@mixin _assert-starts-at-zero($map, $map-name: "$grid-breakpoints") {
  @if length($map) > 0 {
    $values: map-values($map);
    $first-value: nth($values, 1);
    @if $first-value != 0 {
      @warn "First breakpoint in #{$map-name} must start at 0, but starts at #{$first-value}.";
    }
  }
}

// Colors
@function to-rgb($value) {
  @return red($value), green($value), blue($value);
}

// stylelint-disable scss/dollar-variable-pattern
@function rgba-css-var($identifier, $target) {
  @if $identifier == "body" and $target == "bg" {
    @return rgba(var(--#{$prefix}#{$identifier}-bg-rgb), var(--#{$prefix}#{$target}-opacity));
  } @if $identifier == "body" and $target == "text" {
    @return rgba(var(--#{$prefix}#{$identifier}-color-rgb), var(--#{$prefix}#{$target}-opacity));
  } @else {
    @return rgba(var(--#{$prefix}#{$identifier}-rgb), var(--#{$prefix}#{$target}-opacity));
  }
}

@function map-loop($map, $func, $args...) {
  $_map: ();

  @each $key, $value in $map {
    // allow to pass the $key and $value of the map as an function argument
    $_args: ();
    @each $arg in $args {
      $_args: append($_args, if($arg == "$key", $key, if($arg == "$value", $value, $arg)));
    }

    $_map: map-merge($_map, ($key: call(get-function($func), $_args...)));
  }

  @return $_map;
}
// stylelint-enable scss/dollar-variable-pattern

@function varify($list) {
  $result: null;
  @each $entry in $list {
    $result: append($result, var(--#{$prefix}#{$entry}), space);
  }
  @return $result;
}

// Internal Bootstrap function to turn maps into its negative variant.
// It prefixes the keys with \`n\` and makes the value negative.
@function negativify-map($map) {
  $result: ();
  @each $key, $value in $map {
    @if $key != 0 {
      $result: map-merge($result, ("n" + $key: (-$value)));
    }
  }
  @return $result;
}

// Get multiple keys from a sass map
@function map-get-multiple($map, $values) {
  $result: ();
  @each $key, $value in $map {
    @if (index($values, $key) != null) {
      $result: map-merge($result, ($key: $value));
    }
  }
  @return $result;
}

// Merge multiple maps
@function map-merge-multiple($maps...) {
  $merged-maps: ();

  @each $map in $maps {
    $merged-maps: map-merge($merged-maps, $map);
  }
  @return $merged-maps;
}

// Replace \`$search\` with \`$replace\` in \`$string\`
// Used on our SVG icon backgrounds for custom forms.
//
// @author Kitty Giraudel
// @param {String} $string - Initial string
// @param {String} $search - Substring to replace
// @param {String} $replace ('') - New value
// @return {String} - Updated string
@function str-replace($string, $search, $replace: "") {
  $index: str-index($string, $search);

  @if $index {
    @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);
  }

  @return $string;
}

// See https://codepen.io/kevinweber/pen/dXWoRw
//
// Requires the use of quotes around data URIs.

@function escape-svg($string) {
  @if str-index($string, "data:image/svg+xml") {
    @each $char, $encoded in $escaped-characters {
      // Do not escape the url brackets
      @if str-index($string, "url(") == 1 {
        $string: url("#{str-replace(str-slice($string, 6, -3), $char, $encoded)}");
      } @else {
        $string: str-replace($string, $char, $encoded);
      }
    }
  }

  @return $string;
}

// Color contrast
// See https://github.com/twbs/bootstrap/pull/30168

// A list of pre-calculated numbers of pow(divide((divide($value, 255) + .055), 1.055), 2.4). (from 0 to 255)
// stylelint-disable-next-line scss/dollar-variable-default, scss/dollar-variable-pattern
$_luminance-list: .0008 .001 .0011 .0013 .0015 .0017 .002 .0022 .0025 .0027 .003 .0033 .0037 .004 .0044 .0048 .0052 .0056 .006 .0065 .007 .0075 .008 .0086 .0091 .0097 .0103 .011 .0116 .0123 .013 .0137 .0144 .0152 .016 .0168 .0176 .0185 .0194 .0203 .0212 .0222 .0232 .0242 .0252 .0262 .0273 .0284 .0296 .0307 .0319 .0331 .0343 .0356 .0369 .0382 .0395 .0409 .0423 .0437 .0452 .0467 .0482 .0497 .0513 .0529 .0545 .0561 .0578 .0595 .0612 .063 .0648 .0666 .0685 .0704 .0723 .0742 .0762 .0782 .0802 .0823 .0844 .0865 .0887 .0908 .0931 .0953 .0976 .0999 .1022 .1046 .107 .1095 .1119 .1144 .117 .1195 .1221 .1248 .1274 .1301 .1329 .1356 .1384 .1413 .1441 .147 .15 .1529 .1559 .159 .162 .1651 .1683 .1714 .1746 .1779 .1812 .1845 .1878 .1912 .1946 .1981 .2016 .2051 .2086 .2122 .2159 .2195 .2232 .227 .2307 .2346 .2384 .2423 .2462 .2502 .2542 .2582 .2623 .2664 .2705 .2747 .2789 .2831 .2874 .2918 .2961 .3005 .305 .3095 .314 .3185 .3231 .3278 .3325 .3372 .3419 .3467 .3515 .3564 .3613 .3663 .3712 .3763 .3813 .3864 .3916 .3968 .402 .4072 .4125 .4179 .4233 .4287 .4342 .4397 .4452 .4508 .4564 .4621 .4678 .4735 .4793 .4851 .491 .4969 .5029 .5089 .5149 .521 .5271 .5333 .5395 .5457 .552 .5583 .5647 .5711 .5776 .5841 .5906 .5972 .6038 .6105 .6172 .624 .6308 .6376 .6445 .6514 .6584 .6654 .6724 .6795 .6867 .6939 .7011 .7084 .7157 .7231 .7305 .7379 .7454 .7529 .7605 .7682 .7758 .7835 .7913 .7991 .807 .8148 .8228 .8308 .8388 .8469 .855 .8632 .8714 .8796 .8879 .8963 .9047 .9131 .9216 .9301 .9387 .9473 .956 .9647 .9734 .9823 .9911 1;

@function color-contrast($background, $color-contrast-dark: $color-contrast-dark, $color-contrast-light: $color-contrast-light, $min-contrast-ratio: $min-contrast-ratio) {
  $foregrounds: $color-contrast-light, $color-contrast-dark, $white, $black;
  $max-ratio: 0;
  $max-ratio-color: null;

  @each $color in $foregrounds {
    $contrast-ratio: contrast-ratio($background, $color);
    @if $contrast-ratio > $min-contrast-ratio {
      @return $color;
    } @else if $contrast-ratio > $max-ratio {
      $max-ratio: $contrast-ratio;
      $max-ratio-color: $color;
    }
  }

  @warn "Found no color leading to #{$min-contrast-ratio}:1 contrast ratio against #{$background}...";

  @return $max-ratio-color;
}

@function contrast-ratio($background, $foreground: $color-contrast-light) {
  $l1: luminance($background);
  $l2: luminance(opaque($background, $foreground));

  @return if($l1 > $l2, divide($l1 + .05, $l2 + .05), divide($l2 + .05, $l1 + .05));
}

// Return WCAG2.1 relative luminance
// See https://www.w3.org/TR/WCAG/#dfn-relative-luminance
// See https://www.w3.org/TR/WCAG/#dfn-contrast-ratio
@function luminance($color) {
  $rgb: (
    "r": red($color),
    "g": green($color),
    "b": blue($color)
  );

  @each $name, $value in $rgb {
    $value: if(divide($value, 255) < .03928, divide(divide($value, 255), 12.92), nth($_luminance-list, $value + 1));
    $rgb: map-merge($rgb, ($name: $value));
  }

  @return (map-get($rgb, "r") * .2126) + (map-get($rgb, "g") * .7152) + (map-get($rgb, "b") * .0722);
}

// Return opaque color
// opaque(#fff, rgba(0, 0, 0, .5)) => #808080
@function opaque($background, $foreground) {
  @return mix(rgba($foreground, 1), $background, opacity($foreground) * 100%);
}

// scss-docs-start color-functions
// Tint a color: mix a color with white
@function tint-color($color, $weight) {
  @return mix(white, $color, $weight);
}

// Shade a color: mix a color with black
@function shade-color($color, $weight) {
  @return mix(black, $color, $weight);
}

// Shade the color if the weight is positive, else tint it
@function shift-color($color, $weight) {
  @return if($weight > 0, shade-color($color, $weight), tint-color($color, -$weight));
}
// scss-docs-end color-functions

// scss-docs-start alert-color-functions
@function alert-color-map($color) {
  @return (
    "alert-bg": shift-color($color, $alert-bg-scale),
    "alert-border": shift-color($color, $alert-border-scale),
    "alert-color": shift-color($color, $alert-color-scale),
    "base-color": $color
  );
}
// scss-docs-end alert-color-functions

// scss-docs-start button-color-functions
@function btn-color($color, $shade, $tint) {
  @return if(color-contrast($color) == $color-contrast-light, shade-color($color, $shade), tint-color($color, $tint));
}

@function btn-color-map($background, $border-color) {
  @return (
    "bg": $background,
    "border-color": $border-color,
    "color": color-contrast($background),
    "hover-bg": btn-color($background, $btn-hover-bg-shade-amount, $btn-hover-bg-tint-amount),
    "hover-border-color": btn-color($border-color, $btn-hover-border-shade-amount, $btn-hover-border-tint-amount),
    "hover-color": color-contrast(btn-color($background, $btn-hover-bg-shade-amount, $btn-hover-bg-tint-amount)),
    "active-bg": btn-color($background, $btn-active-bg-shade-amount, $btn-active-bg-tint-amount),
    "active-border-color": btn-color($border-color, $btn-active-border-shade-amount, $btn-active-border-tint-amount),
    "active-color": color-contrast(btn-color($border-color, $btn-active-border-shade-amount, $btn-active-border-tint-amount)),
    "disabled-bg": $background,
    "disabled-border-color": $border-color,
    "disabled-color": color-contrast($background),
    "shadow": rgba(mix($background, $border-color, 15%), .5)
  );
}

@function btn-outline-color-map($background) {
  @return (
    "color": $background,
    "hover-bg": btn-color($background, $btn-hover-bg-shade-amount, $btn-hover-bg-tint-amount),
    "hover-border-color": btn-color($background, $btn-hover-border-shade-amount, $btn-hover-border-tint-amount),
    "hover-color": color-contrast(btn-color($background, $btn-hover-bg-shade-amount, $btn-hover-bg-tint-amount)),
    "active-bg": btn-color($background, $btn-active-bg-shade-amount, $btn-active-bg-tint-amount),
    "active-border-color": btn-color($background, $btn-active-border-shade-amount, $btn-active-border-tint-amount),
    "active-color": color-contrast(btn-color($background, $btn-active-border-shade-amount, $btn-active-border-tint-amount)),
    "disabled-color": $background,
    "shadow": rgba(mix($background, $background, 15%), .5)
  );
}
// scss-docs-end button-color-functions

// scss-docs-start list-group-color-functions
@function list-group-color-map($color) {
  @return (
    "bg": shift-color($color, $list-group-item-bg-scale),
    "bg-hover": shade-color($color, 10%),
    "color": shift-color($color, $list-group-item-color-scale)
  );
}
// scss-docs-end list-group-color-functions

// scss-docs-start table-color-functions
@function table-color-map($background, $body-bg: $body-bg) {
  $color: color-contrast(opaque($body-bg, $background));
  $striped-bg: mix($color, $background, percentage($table-striped-bg-factor));
  $active-bg: mix($color, $background, percentage($table-active-bg-factor));
  $hover-bg: mix($color, $background, percentage($table-hover-bg-factor));

  @return (
    "bg": $background,
    "color": $color,
    "border-color": mix($color, $background, percentage($table-border-factor)),
    "striped-bg": $striped-bg,
    "striped-color": color-contrast($striped-bg),
    "active-bg": $active-bg,
    "active-color": color-contrast($active-bg),
    "hover-bg": $hover-bg,
    "hover-color": color-contrast($hover-bg)
  );
}
// scss-docs-end table-color-functions

// Return valid calc
@function add($value1, $value2, $return-calc: true) {
  @if $value1 == null {
    @return $value2;
  }

  @if $value2 == null {
    @return $value1;
  }

  @if type-of($value1) == number and type-of($value2) == number and comparable($value1, $value2) {
    @return $value1 + $value2;
  }

  @return if($return-calc == true, calc(#{$value1} + #{$value2}), $value1 + unquote(" + ") + $value2);
}

@function subtract($value1, $value2, $return-calc: true) {
  @if $value1 == null and $value2 == null {
    @return null;
  }

  @if $value1 == null {
    @return -$value2;
  }

  @if $value2 == null {
    @return $value1;
  }

  @if type-of($value1) == number and type-of($value2) == number and comparable($value1, $value2) {
    @return $value1 - $value2;
  }

  @if type-of($value2) != number {
    $value2: unquote("(") + $value2 + unquote(")");
  }

  @return if($return-calc == true, calc(#{$value1} - #{$value2}), $value1 + unquote(" - ") + $value2);
}

// Generate selectors for theme variants
@function theme-prefix($selector) {
  @return #{"." + $theme-prefix + "\\\\:" + $selector + ", " + "." + $selector + ":not([class*='#{$theme-prefix}:'])"};
}

@function divide($dividend, $divisor, $precision: 10) {
  $sign: if($dividend > 0 and $divisor > 0 or $dividend < 0 and $divisor < 0, 1, -1);
  $dividend: abs($dividend);
  $divisor: abs($divisor);
  @if $dividend == 0 {
    @return 0;
  }
  @if $divisor == 0 {
    @error "Cannot divide by 0";
  }
  $remainder: $dividend;
  $result: 0;
  $factor: 10;
  @while ($remainder > 0 and $precision >= 0) {
    $quotient: 0;
    @while ($remainder >= $divisor) {
      $remainder: $remainder - $divisor;
      $quotient: $quotient + 1;
    }
    $result: $result * 10 + $quotient;
    $factor: $factor * .1;
    $remainder: $remainder * 10;
    $precision: $precision - 1;
    @if ($precision < 0 and $remainder >= $divisor * 5) {
      $result: $result + 1;
    }
  }
  $result: $result * $factor * $sign;
  $dividend-unit: unit($dividend);
  $divisor-unit: unit($divisor);
  $unit-map: (
    "px": 1px,
    "rem": 1rem,
    "em": 1em,
    "%": 1%
  );
  @if ($dividend-unit != $divisor-unit and map-has-key($unit-map, $dividend-unit)) {
    $result: $result * map-get($unit-map, $dividend-unit);
  }
  @return $result;
}
`,yn=`// Row
//
// Rows contain your columns.

@if $enable-grid-classes {
  .row {
    @include make-row();

    > * {
      @include make-col-ready();
    }
  }
}

@if $enable-cssgrid {
  .grid {
    display: grid;
    grid-template-rows: repeat(var(--#{$prefix}rows, 1), 1fr);
    grid-template-columns: repeat(var(--#{$prefix}columns, #{$grid-columns}), 1fr);
    gap: var(--#{$prefix}gap, #{$grid-gutter-width});

    @include make-cssgrid();
  }
}


// Columns
//
// Common styles for small and large grid columns

@if $enable-grid-classes {
  @include make-grid-columns();
}
`,_n=`.header {
  // scss-docs-start header-css-vars
  --#{$prefix}header-min-height: #{$header-min-height};
  --#{$prefix}header-padding-x: #{$header-padding-x};
  --#{$prefix}header-padding-y: #{$header-padding-y};
  --#{$prefix}header-bg: #{$header-bg};
  --#{$prefix}header-color: #{$header-color};
  --#{$prefix}header-border-color: #{$header-border-color};
  --#{$prefix}header-border: #{$header-border-width} solid var(--#{$prefix}header-border-color);
  --#{$prefix}header-hover-color: #{$header-hover-color};
  --#{$prefix}header-disabled-color: #{$header-disabled-color};
  --#{$prefix}header-active-color: #{$header-active-color};
  --#{$prefix}header-brand-padding-y: #{$header-brand-padding-y};
  --#{$prefix}header-brand-color: #{$header-brand-color};
  --#{$prefix}header-brand-hover-color: #{$header-brand-hover-color};
  --#{$prefix}header-toggler-padding-x: #{$header-toggler-padding-x};
  --#{$prefix}header-toggler-padding-y: #{$header-toggler-padding-y};
  --#{$prefix}header-toggler-bg: #{$header-toggler-bg};
  --#{$prefix}header-toggler-color: #{$header-toggler-color};
  --#{$prefix}header-toggler-border-radius: #{$header-toggler-border-radius};
  --#{$prefix}header-toggler-hover-color: #{$header-toggler-hover-color};
  --#{$prefix}header-toggler-icon-bg: #{escape-svg($header-toggler-icon-bg)};
  --#{$prefix}header-toggler-hover-icon-bg: #{escape-svg($header-toggler-hover-icon-bg)};
  --#{$prefix}header-nav-link-padding-x: #{$header-nav-link-padding-x};
  --#{$prefix}header-nav-link-padding-y: #{$header-nav-link-padding-y};
  --#{$prefix}header-divider-border-color: #{$header-divider-border-color};
  --#{$prefix}header-divider-border: #{$header-divider-border-width} solid var(--#{$prefix}header-divider-border-color);
  --#{$prefix}subheader-min-height: #{$subheader-min-height};
  // scss-docs-end header-css-vars

  position: relative;
  display: flex;
  flex-wrap: wrap; // allow us to do the line break for collapsing content
  align-items: center;
  justify-content: space-between; // space out brand from logo
  min-height: var(--#{$prefix}header-min-height);
  padding: var(--#{$prefix}header-padding-y) var(--#{$prefix}header-padding-x);
  background: var(--#{$prefix}header-bg);
  border-bottom: var(--#{$prefix}header-border);

  // Because flex properties aren't inherited, we need to redeclare these first
  // few properties so that content nested within behave properly.
  // The \`flex-wrap\` property is inherited to simplify the expanded navbars
  %container-flex-properties {
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
  }

  > .container,
  > .container-fluid {
    @extend %container-flex-properties;
  }

  @each $breakpoint, $container-max-width in $container-max-widths {
    > .container#{breakpoint-infix($breakpoint, $container-max-widths)} {
      @extend %container-flex-properties;
    }
  }

  .container:first-child,
  .container-fluid:first-child {
    min-height: calc(var(--#{$prefix}header-min-height) - (2 * var(--#{$prefix}header-padding-y))); // stylelint-disable-line function-disallowed-list
  }

  .container:nth-child(n+2),
  .container-fluid:nth-child(n+2) {
    min-height: calc(var(--#{$prefix}subheader-min-height) - (2 * var(--#{$prefix}header-padding-y))); // stylelint-disable-line function-disallowed-list
  }

  &.header-sticky {
    position: sticky;
    top: 0;
    z-index: $zindex-fixed - 1;
    @include elevation(2);
  }
}

.header-divider {
  flex-basis: calc(100% + (2 * var(--#{$prefix}header-padding-x))); // stylelint-disable-line function-disallowed-list
  height: 0;
  margin: var(--#{$prefix}header-padding-y) calc(var(--#{$prefix}header-padding-x) * -1); // stylelint-disable-line function-disallowed-list
  border-top: var(--#{$prefix}header-divider-border);
}

// Header brand
//
// Used for brand, project, or site names.

.header-brand {
  padding-top: var(--#{$prefix}header-brand-padding-y);
  padding-bottom: var(--#{$prefix}header-brand-padding-y);
  @include ltr-rtl("margin-right", $header-brand-margin-end);
  @include font-size($header-brand-font-size);
  color: var(--#{$prefix}header-brand-color);
  text-decoration: if($link-decoration == none, null, none);
  white-space: nowrap;

  &:hover,
  &:focus {
    color: var(--#{$prefix}header-brand-hover-color);
    text-decoration: if($link-hover-decoration == underline, none, null);
  }
}

// Header nav
//
// Custom navbar navigation (doesn't require \`.nav\`, but does make use of \`.nav-link\`).

.header-nav {
  display: flex;
  flex-direction: row; // cannot use \`inherit\` to get the \`.header\`s value
  @include ltr-rtl("padding-left", 0);
  margin-bottom: 0;
  list-style: none;

  .nav-link {
    padding: var(--#{$prefix}header-nav-link-padding-y) var(--#{$prefix}header-nav-link-padding-x);
    color: var(--#{$prefix}header-color);

    &:hover,
    &:focus {
      color: var(--#{$prefix}header-hover-color);
    }

    &.disabled {
      color: var(--#{$prefix}header-disabled-color);
    }
  }

  .show > .nav-link,
  .nav-link.active {
    color: var(--#{$prefix}header-active-color);
  }

  .dropdown-menu {
    position: absolute;
  }
}


// Header text
//
//

.header-text {
  padding-top: var(--#{$prefix}header-nav-link-padding-y);
  padding-bottom: var(--#{$prefix}header-nav-link-padding-y);
  color: var(--#{$prefix}header-color);

  a {
    color: var(--#{$prefix}header-active-color);

    &:hover,
    &:focus {
      color: var(--#{$prefix}header-active-color);
    }
  }
}

.header-toggler {
  padding: var(--#{$prefix}header-toggler-padding-y) var(--#{$prefix}header-toggler-padding-x);
  @include font-size($header-toggler-font-size);
  color: var(--#{$prefix}header-toggler-color);
  background-color: var(--#{$prefix}header-toggler-bg);
  border: 0; // remove default button style
  @include border-radius(var(--#{$prefix}header-toggler-border-radius));

  &:hover {
    color: var(--#{$prefix}header-toggler-hover-color);
    text-decoration: none;
  }

  &:focus {
    outline: 0;
  }

  // Opinionated: add "hand" cursor to non-disabled .navbar-toggler elements
  &:not(:disabled) {
    cursor: pointer;
  }

  &.prevent-hide {
    display: block !important; // stylelint-disable-line declaration-no-important
  }
}

.header-toggler-icon {
  display: block;
  height: $header-toggler-font-size * 1.25;
  background-image: var(--#{$prefix}header-toggler-icon-bg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;

  &:hover {
    background-image: var(--#{$prefix}header-toggler-hover-icon-bg);
  }
}
`,zn=`@import "helpers/clearfix";
@import "helpers/color-bg";
@import "helpers/colored-links";
@import "helpers/ratio";
@import "helpers/position";
@import "helpers/stacks";
@import "helpers/visually-hidden";
@import "helpers/stretched-link";
@import "helpers/text-truncation";
@import "helpers/vr";
`,Sn=`.icon {
  display: inline-block;
  color: inherit;
  text-align: center;
  vertical-align: -.125rem; // Fix the position of icon
  fill: currentcolor;
  &:not(.icon-c-s):not(.icon-custom-size) {
    @include icon-size($icon-size-base);

    &.icon-xxl {
      @include icon-size($icon-size-xxl);
    }

    &.icon-xl {
      @include icon-size($icon-size-xl);
    }

    &.icon-lg {
      @include icon-size($icon-size-lg);
    }

    &.icon-sm {
      @include icon-size($icon-size-sm);
    }

    @for $i from 3 through 9 {
      &.icon-#{$i}xl {
        @include icon-size($i * $icon-size-base);
      }
    }
  }
}
`,Cn=`// Responsive images (ensure images don't scale beyond their parents)
//
// This is purposefully opt-in via an explicit class rather than being the default for all \`<img>\`s.
// We previously tried the "images are responsive by default" approach in Bootstrap v2,
// and abandoned it in Bootstrap v3 because it breaks lots of third-party widgets (including Google Maps)
// which weren't expecting the images within themselves to be involuntarily resized.
// See also https://github.com/twbs/bootstrap/issues/18178
.img-fluid {
  @include img-fluid();
}


// Image thumbnails
.img-thumbnail {
  padding: $thumbnail-padding;
  background-color: var(--#{$prefix}thumbnail-bg, $thumbnail-bg);
  border: $thumbnail-border-width solid var(--#{$prefix}thumbnail-border-color, $thumbnail-border-color);
  @include border-radius($thumbnail-border-radius);
  @include box-shadow($thumbnail-box-shadow);

  // Keep them at most 100% wide
  @include img-fluid();
}

//
// Figures
//

.figure {
  // Ensures the caption's text aligns with the image.
  display: inline-block;
}

.figure-img {
  margin-bottom: $spacer * .5;
  line-height: 1;
}

.figure-caption {
  @include font-size($figure-caption-font-size);
  color: var(--#{$prefix}figure-caption-color, $figure-caption-color);
}
`,An=`// Base class
//
// Easily usable on <ul>, <ol>, or <div>.

.list-group {
  // scss-docs-start list-group-css-vars
  --#{$prefix}list-group-color: #{$list-group-color};
  --#{$prefix}list-group-bg: #{$list-group-bg};
  --#{$prefix}list-group-border-color: #{$list-group-border-color};
  --#{$prefix}list-group-border-width: #{$list-group-border-width};
  --#{$prefix}list-group-border-radius: #{$list-group-border-radius};
  --#{$prefix}list-group-item-padding-x: #{$list-group-item-padding-x};
  --#{$prefix}list-group-item-padding-y: #{$list-group-item-padding-y};
  --#{$prefix}list-group-action-color: #{$list-group-action-color};
  --#{$prefix}list-group-action-hover-color: #{$list-group-action-hover-color};
  --#{$prefix}list-group-action-hover-bg: #{$list-group-hover-bg};
  --#{$prefix}list-group-action-active-color: #{$list-group-action-active-color};
  --#{$prefix}list-group-action-active-bg: #{$list-group-action-active-bg};
  --#{$prefix}list-group-disabled-color: #{$list-group-disabled-color};
  --#{$prefix}list-group-disabled-bg: #{$list-group-disabled-bg};
  --#{$prefix}list-group-active-color: #{$list-group-active-color};
  --#{$prefix}list-group-active-bg: #{$list-group-active-bg};
  --#{$prefix}list-group-active-border-color: #{$list-group-active-border-color};
  // scss-docs-end list-group-css-vars

  display: flex;
  flex-direction: column;

  // No need to set list-style: none; since .list-group-item is block level
  @include ltr-rtl("padding-left", 0); // reset padding because ul and ol
  margin-bottom: 0;
  @include border-radius(var(--#{$prefix}list-group-border-radius));
}

.list-group-numbered {
  list-style-type: none;
  counter-reset: section;

  > .list-group-item::before {
    // Increments only this instance of the section counter
    content: counters(section, ".") ". ";
    counter-increment: section;
  }
}

// Interactive list items
//
// Use anchor or button elements instead of \`li\`s or \`div\`s to create interactive
// list items. Includes an extra \`.active\` modifier class for selected items.

.list-group-item-action {
  width: 100%; // For \`<button>\`s (anchors become 100% by default though)
  color: var(--#{$prefix}list-group-action-color);
  text-align: inherit; // For \`<button>\`s (anchors inherit)

  // Hover state
  &:hover,
  &:focus {
    z-index: 1; // Place hover/focus items above their siblings for proper border styling
    color: var(--#{$prefix}list-group-action-hover-color);
    text-decoration: none;
    background-color: var(--#{$prefix}list-group-action-hover-bg);
  }

  &:active {
    color: var(--#{$prefix}list-group-action-active-color);
    background-color: var(--#{$prefix}list-group-action-active-bg);
  }
}

// Individual list items
//
// Use on \`li\`s or \`div\`s within the \`.list-group\` parent.

.list-group-item {
  position: relative;
  display: block;
  padding: var(--#{$prefix}list-group-item-padding-y) var(--#{$prefix}list-group-item-padding-x);
  color: var(--#{$prefix}list-group-color);
  text-decoration: if($link-decoration == none, null, none);
  background-color: var(--#{$prefix}list-group-bg);
  border: var(--#{$prefix}list-group-border-width) solid var(--#{$prefix}list-group-border-color);

  &:first-child {
    @include border-top-radius(inherit);
  }

  &:last-child {
    @include border-bottom-radius(inherit);
  }

  &.disabled,
  &:disabled {
    color: var(--#{$prefix}list-group-disabled-color);
    pointer-events: none;
    background-color: var(--#{$prefix}list-group-disabled-bg);
  }

  // Include both here for \`<a>\`s and \`<button>\`s
  &.active {
    z-index: 2; // Place active items above their siblings for proper border styling
    color: var(--#{$prefix}list-group-active-color);
    background-color: var(--#{$prefix}list-group-active-bg);
    border-color: var(--#{$prefix}list-group-active-border-color);
  }

  // stylelint-disable-next-line scss/selector-no-redundant-nesting-selector
  & + .list-group-item {
    border-top-width: 0;

    &.active {
      margin-top: calc(-1 * var(--#{$prefix}list-group-border-width)); // stylelint-disable-line function-disallowed-list
      border-top-width: var(--#{$prefix}list-group-border-width);
    }
  }
}

// Horizontal
//
// Change the layout of list group items from vertical (default) to horizontal.

@each $breakpoint in map-keys($grid-breakpoints) {
  @include media-breakpoint-up($breakpoint) {
    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

    .list-group-horizontal#{$infix} {
      flex-direction: row;

      > .list-group-item {
        &:first-child:not(:last-child) {
          @include border-bottom-start-radius(var(--#{$prefix}list-group-border-radius));
          @include border-top-end-radius(0);
        }

        &:last-child:not(:first-child) {
          @include border-top-end-radius(var(--#{$prefix}list-group-border-radius));
          @include border-bottom-start-radius(0);
        }

        &.active {
          margin-top: 0;
        }

        + .list-group-item {
          border-top-width: var(--#{$prefix}list-group-border-width);
          @include ltr-rtl("border-left-width", 0);

          &.active {
            @include ltr-rtl("margin-left", calc(-1 * var(--#{$prefix}list-group-border-width)));
            @include ltr-rtl("border-left-width", var(--#{$prefix}list-group-border-width));
          }
        }
      }
    }
  }
}


// Flush list items
//
// Remove borders and border-radius to keep list group items edge-to-edge. Most
// useful within other components (e.g., cards).

.list-group-flush {
  @include border-radius(0);

  > .list-group-item {
    border-width: 0 0 var(--#{$prefix}list-group-border-width);

    &:last-child {
      border-bottom-width: 0;
    }
  }
}


// scss-docs-start list-group-modifiers
// List group contextual variants
//
// Add modifier classes to change text and background color on individual items.
// Organizationally, this must come after the \`:hover\` states.

@each $state, $variant in $list-group-variants {
  .list-group-item-#{$state} {
    @include list-group-item-variant($state, $variant);
  }
}
// scss-docs-end list-group-modifiers
`,Fn=`//
// Loading button
//

.btn-loading {
  position: relative;
  overflow: hidden;
}

.btn-loading-spinner {
  @include ltr-rtl("margin-right", $spacer);
  @include ltr-rtl("margin-left", ($spacer * -2));
  opacity: 0;
  @include transition(margin .15s, opacity .15s, border .15s);
}

.btn-loading.is-loading {
  .btn-loading-spinner {
    width: 1rem;
    @include ltr-rtl("margin-left", 0);
    opacity: 1;
  }
}
`,qn=`// Re-assigned maps
//
// Placed here so that others can override the default Sass maps and see automatic updates to utilities and more.

// scss-docs-start theme-colors-rgb
$theme-colors-rgb: map-loop($theme-colors, to-rgb, "$value") !default;
// scss-docs-end theme-colors-rgb

// Utilities maps
//
// Extends the default \`$theme-colors\` maps to help create our utilities.

// Come v6, we'll de-dupe these variables. Until then, for backward compatibility, we keep them to reassign.
// scss-docs-start utilities-colors
$utilities-colors: $theme-colors-rgb !default;
// scss-docs-end utilities-colors

// scss-docs-start utilities-text-colors
$utilities-text: map-merge(
  $utilities-colors,
  (
    "black": to-rgb($black),
    "white": to-rgb($white),
    "body": to-rgb($body-color)
  )
) !default;
$utilities-text-colors: map-loop($utilities-text, rgba-css-var, "$key", "text") !default;
// scss-docs-end utilities-text-colors

// scss-docs-start utilities-bg-colors
$utilities-bg: map-merge(
  $utilities-colors,
  (
    "black": to-rgb($black),
    "white": to-rgb($white),
    "body": to-rgb($body-bg)
  )
) !default;
$utilities-bg-colors: map-loop($utilities-bg, rgba-css-var, "$key", "bg") !default;
// scss-docs-end utilities-bg-colors

// scss-docs-start utilities-border-colors
$utilities-border: map-merge(
  $utilities-colors,
  (
    "white": to-rgb($white)
  )
) !default;
$utilities-border-colors: map-loop($utilities-border, rgba-css-var, "$key", "border") !default;
// scss-docs-end utilities-border-colors

$negative-spacers: if($enable-negative-margins, negativify-map($spacers), null) !default;

$gutters: $spacers !default;
`,Ln=`// Toggles
//
// Used in conjunction with global variables to enable certain theme features.

// LTR & RTL
@import "mixins/ltr-rtl";

// Vendor
@import "vendor/rfs";

// Deprecate
@import "mixins/deprecate";

// Helpers
@import "mixins/breakpoints";
@import "mixins/color-scheme";
@import "mixins/image";
@import "mixins/resize";
@import "mixins/visually-hidden";
@import "mixins/reset-text";
@import "mixins/text-truncate";

// Utilities
@import "mixins/utilities";

// Components
@import "mixins/alert";
@import "mixins/avatar";
@import "mixins/backdrop";
@import "mixins/buttons";
@import "mixins/caret";
@import "mixins/pagination";
@import "mixins/lists";
@import "mixins/list-group";
@import "mixins/forms";
@import "mixins/table-variants";
@import "mixins/icon";

// Skins
@import "mixins/border-radius";
@import "mixins/box-shadow";
@import "mixins/elevation";
@import "mixins/gradients";
@import "mixins/transition";

// Layout
@import "mixins/clearfix";
@import "mixins/container";
@import "mixins/grid";

// CSS Variables
@import "mixins/css-vars";

// Themes
@import "mixins/theme";
`,Bn=`// stylelint-disable function-disallowed-list

// .modal-open      - body class for killing the scroll
// .modal           - container to scroll within
// .modal-dialog    - positioning shell for the actual modal
// .modal-content   - actual modal w/ bg and corners and stuff


// Container that the modal scrolls within
.modal {
  // scss-docs-start modal-css-vars
  --#{$prefix}modal-zindex: #{$zindex-modal};
  --#{$prefix}modal-width: #{$modal-md};
  --#{$prefix}modal-padding: #{$modal-inner-padding};
  --#{$prefix}modal-margin: #{$modal-dialog-margin};
  --#{$prefix}modal-color: #{$modal-content-color};
  --#{$prefix}modal-bg: #{$modal-content-bg};
  --#{$prefix}modal-border-color: #{$modal-content-border-color};
  --#{$prefix}modal-border-width: #{$modal-content-border-width};
  --#{$prefix}modal-border-radius: #{$modal-content-border-radius};
  --#{$prefix}modal-box-shadow: #{$modal-content-box-shadow-xs};
  --#{$prefix}modal-inner-border-radius: #{$modal-content-inner-border-radius};
  --#{$prefix}modal-header-padding-x: #{$modal-header-padding-x};
  --#{$prefix}modal-header-padding-y: #{$modal-header-padding-y};
  --#{$prefix}modal-header-padding: #{$modal-header-padding}; // Todo in v6: Split this padding into x and y
  --#{$prefix}modal-header-border-color: #{$modal-header-border-color};
  --#{$prefix}modal-header-border-width: #{$modal-header-border-width};
  --#{$prefix}modal-title-line-height: #{$modal-title-line-height};
  --#{$prefix}modal-footer-gap: #{$modal-footer-margin-between};
  --#{$prefix}modal-footer-bg: #{$modal-footer-bg};
  --#{$prefix}modal-footer-border-color: #{$modal-footer-border-color};
  --#{$prefix}modal-footer-border-width: #{$modal-footer-border-width};
  // scss-docs-end modal-css-vars

  position: fixed;
  top: 0;
  @include ltr-rtl("left", 0);
  z-index: var(--#{$prefix}modal-zindex);
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  // Prevent Chrome on Windows from adding a focus outline. For details, see
  // https://github.com/twbs/bootstrap/pull/10951.
  outline: 0;
  // We deliberately don't use \`-webkit-overflow-scrolling: touch;\` due to a
  // gnarly iOS Safari bug: https://bugs.webkit.org/show_bug.cgi?id=158342
  // See also https://github.com/twbs/bootstrap/issues/17695
}

// Shell div to position the modal with bottom padding
.modal-dialog {
  position: relative;
  width: auto;
  margin: var(--#{$prefix}modal-margin);
  // allow clicks to pass through for custom click handling to close modal
  pointer-events: none;

  // When fading in the modal, animate it to slide down
  .modal.fade & {
    @include transition($modal-transition);
    transform: $modal-fade-transform;
  }
  .modal.show & {
    transform: $modal-show-transform;
  }

  // When trying to close, animate focus to scale
  .modal.modal-static & {
    transform: $modal-scale-transform;
  }
}

.modal-dialog-scrollable {
  height: calc(100% - var(--#{$prefix}modal-margin) * 2);

  .modal-content {
    max-height: 100%;
    overflow: hidden;
  }

  .modal-body {
    overflow-y: auto;
  }
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - var(--#{$prefix}modal-margin) * 2);
}

// Actual modal
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%; // Ensure \`.modal-content\` extends the full width of the parent \`.modal-dialog\`
  // counteract the pointer-events: none; in the .modal-dialog
  color: var(--#{$prefix}modal-color);
  pointer-events: auto;
  background-color: var(--#{$prefix}modal-bg);
  background-clip: padding-box;
  border: var(--#{$prefix}modal-border-width) solid var(--#{$prefix}modal-border-color);
  @include border-radius(var(--#{$prefix}modal-border-radius));
  @include box-shadow(var(--#{$prefix}modal-box-shadow));
  // Remove focus outline from opened modal
  outline: 0;
  @include elevation(24);
}

// Modal background
.modal-backdrop {
  // scss-docs-start modal-backdrop-css-vars
  --#{$prefix}backdrop-zindex: #{$zindex-modal-backdrop};
  --#{$prefix}backdrop-bg: #{$modal-backdrop-bg};
  --#{$prefix}backdrop-opacity: #{$modal-backdrop-opacity};
  // scss-docs-end modal-backdrop-css-vars

  @include overlay-backdrop(var(--#{$prefix}backdrop-zindex), var(--#{$prefix}backdrop-bg), var(--#{$prefix}backdrop-opacity));
}

// Modal header
// Top section of the modal w/ title and dismiss
.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between; // Put modal header elements (title and dismiss) on opposite ends
  padding: var(--#{$prefix}modal-header-padding);
  border-bottom: var(--#{$prefix}modal-header-border-width) solid var(--#{$prefix}modal-header-border-color);
  @include border-top-radius(var(--#{$prefix}modal-inner-border-radius));

  .btn-close {
    padding: calc(var(--#{$prefix}modal-header-padding-y) * .5) calc(var(--#{$prefix}modal-header-padding-x) * .5);
    @include ltr-rtl-value-only("margin", calc(-.5 * var(--#{$prefix}modal-header-padding-y)) calc(-.5 * var(--#{$prefix}modal-header-padding-x)) calc(-.5 * var(--#{$prefix}modal-header-padding-y)) auto, calc(-.5 * var(--#{$prefix}modal-header-padding-y)) auto calc(-.5 * var(--#{$prefix}modal-header-padding-y)) calc(-.5 * var(--#{$prefix}modal-header-padding-x)));
  }
}

// Title text within header
.modal-title {
  margin-bottom: 0;
  line-height: var(--#{$prefix}modal-title-line-height);
}

// Modal body
// Where all modal content resides (sibling of .modal-header and .modal-footer)
.modal-body {
  position: relative;
  // Enable \`flex-grow: 1\` so that the body take up as much space as possible
  // when there should be a fixed height on \`.modal-dialog\`.
  flex: 1 1 auto;
  padding: var(--#{$prefix}modal-padding);
}

// Footer (for actions)
.modal-footer {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center; // vertically center
  justify-content: flex-end; // Right align buttons with flex property because text-align doesn't work on flex items
  padding: calc(var(--#{$prefix}modal-padding) - var(--#{$prefix}modal-footer-gap) * .5);
  background-color: var(--#{$prefix}modal-footer-bg);
  border-top: var(--#{$prefix}modal-footer-border-width) solid var(--#{$prefix}modal-footer-border-color);
  @include border-bottom-radius(var(--#{$prefix}modal-inner-border-radius));

  // Place margin between footer elements
  // This solution is far from ideal because of the universal selector usage,
  // but is needed to fix https://github.com/twbs/bootstrap/issues/24800
  > * {
    margin: calc(var(--#{$prefix}modal-footer-gap) * .5); // Todo in v6: replace with gap on parent class
  }
}

// Scale up the modal
@include media-breakpoint-up(sm) {
  .modal {
    --#{$prefix}modal-margin: #{$modal-dialog-margin-y-sm-up};
    --#{$prefix}modal-box-shadow: #{$modal-content-box-shadow-sm-up};
  }

  // Automatically set modal's width for larger viewports
  .modal-dialog {
    max-width: var(--#{$prefix}modal-width);
    margin-right: auto;
    margin-left: auto;
  }

  .modal-sm {
    --#{$prefix}modal-width: #{$modal-sm};
  }
}

@include media-breakpoint-up(lg) {
  .modal-lg,
  .modal-xl {
    --#{$prefix}modal-width: #{$modal-lg};
  }
}

@include media-breakpoint-up(xl) {
  .modal-xl {
    --#{$prefix}modal-width: #{$modal-xl};
  }
}

// scss-docs-start modal-fullscreen-loop
@each $breakpoint in map-keys($grid-breakpoints) {
  $infix: breakpoint-infix($breakpoint, $grid-breakpoints);
  $postfix: if($infix != "", $infix + "-down", "");

  @include media-breakpoint-down($breakpoint) {
    .modal-fullscreen#{$postfix} {
      width: 100vw;
      max-width: none;
      height: 100%;
      margin: 0;

      .modal-content {
        height: 100%;
        border: 0;
        @include border-radius(0);
      }

      .modal-header,
      .modal-footer {
        @include border-radius(0);
      }

      .modal-body {
        overflow-y: auto;
      }
    }
  }
}
// scss-docs-end modal-fullscreen-loop
`,Mn=`// Base class
//
// Kickstart any navigation component with a set of style resets. Works with
// \`<nav>\`s, \`<ul>\`s or \`<ol>\`s.

.nav {
  // scss-docs-start nav-css-vars
  --#{$prefix}nav-link-padding-x: #{$nav-link-padding-x};
  --#{$prefix}nav-link-padding-y: #{$nav-link-padding-y};
  @include rfs($nav-link-font-size, --#{$prefix}nav-link-font-size);
  --#{$prefix}nav-link-font-weight: #{$nav-link-font-weight};
  --#{$prefix}nav-link-color: #{$nav-link-color};
  --#{$prefix}nav-link-hover-color: #{$nav-link-hover-color};
  --#{$prefix}nav-link-disabled-color: #{$nav-link-disabled-color};
  // scss-docs-end nav-css-vars

  display: flex;
  flex-wrap: wrap;
  @include ltr-rtl("padding-left", 0);
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: var(--#{$prefix}nav-link-padding-y) var(--#{$prefix}nav-link-padding-x);
  @include font-size(var(--#{$prefix}nav-link-font-size));
  font-weight: var(--#{$prefix}nav-link-font-weight);
  color: var(--#{$prefix}nav-link-color);
  text-decoration: if($link-decoration == none, null, none);
  @include transition($nav-link-transition);

  &:hover,
  &:focus {
    color: var(--#{$prefix}nav-link-hover-color);
    text-decoration: if($link-hover-decoration == underline, none, null);
  }

  // Disabled state lightens text
  &.disabled {
    color: var(--#{$prefix}nav-link-disabled-color);
    pointer-events: none;
    cursor: default;
  }
}

//
// Tabs
//

.nav-tabs {
  // scss-docs-start nav-tabs-css-vars
  --#{$prefix}nav-tabs-border-width: #{$nav-tabs-border-width};
  --#{$prefix}nav-tabs-border-color: #{$nav-tabs-border-color};
  --#{$prefix}nav-tabs-border-radius: #{$nav-tabs-border-radius};
  --#{$prefix}nav-tabs-link-hover-border-color: #{$nav-tabs-link-hover-border-color};
  --#{$prefix}nav-tabs-link-active-color: #{$nav-tabs-link-active-color};
  --#{$prefix}nav-tabs-link-active-bg: #{$nav-tabs-link-active-bg};
  --#{$prefix}nav-tabs-link-active-border-color: #{$nav-tabs-link-active-border-color};
  // scss-docs-end nav-tabs-css-vars

  border-bottom: var(--#{$prefix}nav-tabs-border-width) solid var(--#{$prefix}nav-tabs-border-color);

  .nav-link {
    margin-bottom: calc(-1 * var(--#{$prefix}nav-tabs-border-width)); // stylelint-disable-line function-disallowed-list
    background: none;
    border: var(--#{$prefix}nav-tabs-border-width) solid transparent;
    @include border-top-radius(var(--#{$prefix}nav-tabs-border-radius));

    &:hover,
    &:focus {
      // Prevents active .nav-link tab overlapping focus outline of previous/next .nav-link
      isolation: isolate;
      border-color: var(--#{$prefix}nav-tabs-link-hover-border-color);
    }

    &.disabled,
    &:disabled {
      color: var(--#{$prefix}nav-link-disabled-color);
      background-color: transparent;
      border-color: transparent;
    }
  }

  .nav-link.active,
  .nav-item.show .nav-link {
    color: var(--#{$prefix}nav-tabs-link-active-color);
    background-color: var(--#{$prefix}nav-tabs-link-active-bg);
    border-color: var(--#{$prefix}nav-tabs-link-active-border-color);
  }

  .dropdown-menu {
    // Make dropdown border overlap tab border
    margin-top: calc(-1 * var(--#{$prefix}nav-tabs-border-width)); // stylelint-disable-line function-disallowed-list
    // Remove the top rounded corners here since there is a hard edge above the menu
    @include border-top-radius(0);
  }
}


//
// Pills
//

.nav-pills {
  // scss-docs-start nav-pills-css-vars
  --#{$prefix}nav-pills-border-radius: #{$nav-pills-border-radius};
  --#{$prefix}nav-pills-link-active-color: #{$nav-pills-link-active-color};
  --#{$prefix}nav-pills-link-active-bg: #{$nav-pills-link-active-bg};
  // scss-docs-end nav-pills-css-vars

  .nav-link {
    background: none;
    border: 0;
    @include border-radius(var(--#{$prefix}nav-pills-border-radius));

    &:disabled {
      color: var(--#{$prefix}nav-link-disabled-color);
      background-color: transparent;
      border-color: transparent;
    }
  }

  .nav-link.active,
  .show > .nav-link {
    color: var(--#{$prefix}nav-pills-link-active-color);
    @include gradient-bg(var(--#{$prefix}nav-pills-link-active-bg));
  }
}

//
// Underline
//

.nav-underline {
  border-bottom: $nav-underline-border-width solid var(--#{$prefix}nav-underline-border-color, $nav-underline-border-color);

  .nav-item {
    margin-bottom: $nav-underline-border-width * -1;
  }

  .nav-link {
    color: var(--#{$prefix}nav-underline-link-color, $nav-underline-link-color);
    border-bottom: $nav-underline-border-width solid transparent;

    &:hover,
    &:focus {
      border-color: var(--#{$prefix}nav-underline-link-active-border-color, $nav-underline-link-active-border-color);
    }
  }

  .nav-link.active,
  .show > .nav-link {
    color: var(--#{$prefix}nav-underline-link-active-color, $nav-underline-link-active-color);
    background: transparent;
    border-color: var(--#{$prefix}nav-underline-link-active-border-color, $nav-underline-link-active-border-color);
  }
}

//
// Justified variants
//

.nav-fill {
  > .nav-link,
  .nav-item {
    flex: 1 1 auto;
    text-align: center;
  }
}

.nav-justified {
  > .nav-link,
  .nav-item {
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
  }
}

.nav-fill,
.nav-justified {
  .nav-item .nav-link {
    width: 100%; // Make sure button will grow
  }
}


// Tabbable tabs
//
// Hide tabbable panes to start, show them when \`.active\`

.tab-content {
  > .tab-pane {
    display: none;
  }
  > .active {
    display: block;
  }
}
`,Tn=`// Navbar
//
// Provide a static navbar from which we expand to create full-width, fixed, and
// other navbar variations.

.navbar {
  // scss-docs-start navbar-css-vars
  --#{$prefix}navbar-padding-x: #{if($navbar-padding-x == null, 0, $navbar-padding-x)};
  --#{$prefix}navbar-padding-y: #{$navbar-padding-y};
  --#{$prefix}navbar-color: #{$navbar-light-color};
  --#{$prefix}navbar-hover-color: #{$navbar-light-hover-color};
  --#{$prefix}navbar-disabled-color: #{$navbar-light-disabled-color};
  --#{$prefix}navbar-active-color: #{$navbar-light-active-color};
  --#{$prefix}navbar-brand-padding-y: #{$navbar-brand-padding-y};
  --#{$prefix}navbar-brand-margin-end: #{$navbar-brand-margin-end};
  --#{$prefix}navbar-brand-font-size: #{$navbar-brand-font-size};
  --#{$prefix}navbar-brand-color: #{$navbar-light-brand-color};
  --#{$prefix}navbar-brand-hover-color: #{$navbar-light-brand-hover-color};
  --#{$prefix}navbar-nav-link-padding-x: #{$navbar-nav-link-padding-x};
  --#{$prefix}navbar-toggler-padding-y: #{$navbar-toggler-padding-y};
  --#{$prefix}navbar-toggler-padding-x: #{$navbar-toggler-padding-x};
  --#{$prefix}navbar-toggler-font-size: #{$navbar-toggler-font-size};
  --#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-light-toggler-icon-bg)};
  --#{$prefix}navbar-toggler-border-color: #{$navbar-light-toggler-border-color};
  --#{$prefix}navbar-toggler-border-radius: #{$navbar-toggler-border-radius};
  --#{$prefix}navbar-toggler-focus-width: #{$navbar-toggler-focus-width};
  --#{$prefix}navbar-toggler-transition: #{$navbar-toggler-transition};
  // scss-docs-end navbar-css-vars

  position: relative;
  display: flex;
  flex-wrap: wrap; // allow us to do the line break for collapsing content
  align-items: center;
  justify-content: space-between; // space out brand from logo
  padding: var(--#{$prefix}navbar-padding-y) var(--#{$prefix}navbar-padding-x);
  @include gradient-bg();

  // Because flex properties aren't inherited, we need to redeclare these first
  // few properties so that content nested within behave properly.
  // The \`flex-wrap\` property is inherited to simplify the expanded navbars
  %container-flex-properties {
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
  }

  > .container,
  > .container-fluid {
    @extend %container-flex-properties;
  }

  @each $breakpoint, $container-max-width in $container-max-widths {
    > .container#{breakpoint-infix($breakpoint, $container-max-widths)} {
      @extend %container-flex-properties;
    }
  }
}


// Navbar brand
//
// Used for brand, project, or site names.

.navbar-brand {
  padding-top: var(--#{$prefix}navbar-brand-padding-y);
  padding-bottom: var(--#{$prefix}navbar-brand-padding-y);
  @include ltr-rtl("margin-right", var(--#{$prefix}navbar-brand-margin-end));
  @include font-size(var(--#{$prefix}navbar-brand-font-size));
  color: var(--#{$prefix}navbar-brand-color);
  text-decoration: if($link-decoration == none, null, none);
  white-space: nowrap;

  &:hover,
  &:focus {
    color: var(--#{$prefix}navbar-brand-hover-color);
    text-decoration: if($link-hover-decoration == underline, none, null);
  }
}


// Navbar nav
//
// Custom navbar navigation (doesn't require \`.nav\`, but does make use of \`.nav-link\`).

.navbar-nav {
  // scss-docs-start navbar-nav-css-vars
  --#{$prefix}nav-link-padding-x: 0;
  --#{$prefix}nav-link-padding-y: #{$nav-link-padding-y};
  --#{$prefix}nav-link-color: var(--#{$prefix}navbar-color);
  --#{$prefix}nav-link-hover-color: var(--#{$prefix}navbar-hover-color);
  --#{$prefix}nav-link-disabled-color: var(--#{$prefix}navbar-disabled-color);
  // scss-docs-end navbar-nav-css-vars

  display: flex;
  flex-direction: column; // cannot use \`inherit\` to get the \`.navbar\`s value
  @include ltr-rtl("padding-left", 0);
  margin-bottom: 0;
  list-style: none;

  .show > .nav-link,
  .nav-link.active {
    color: var(--#{$prefix}navbar-active-color);
  }

  .dropdown-menu {
    position: static;
  }
}

// Navbar text
//
//

.navbar-text {
  padding-top: $nav-link-padding-y;
  padding-bottom: $nav-link-padding-y;
  color: var(--#{$prefix}navbar-color);

  a,
  a:hover,
  a:focus  {
    color: var(--#{$prefix}navbar-active-color);
  }
}


// Responsive navbar
//
// Custom styles for responsive collapsing and toggling of navbar contents.
// Powered by the collapse Bootstrap JavaScript plugin.

// When collapsed, prevent the toggleable navbar contents from appearing in
// the default flexbox row orientation. Requires the use of \`flex-wrap: wrap\`
// on the \`.navbar\` parent.
.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  // For always expanded or extra full navbars, ensure content aligns itself
  // properly vertically. Can be easily overridden with flex utilities.
  align-items: center;
}

// Button for toggling the navbar when in its collapsed state
.navbar-toggler {
  padding: var(--#{$prefix}navbar-toggler-padding-y) var(--#{$prefix}navbar-toggler-padding-x);
  @include font-size(var(--#{$prefix}navbar-toggler-font-size));
  line-height: 1;
  color: var(--#{$prefix}navbar-color);
  background-color: transparent; // remove default button style
  border: var(--#{$prefix}border-width) solid var(--#{$prefix}navbar-toggler-border-color); // remove default button style
  @include border-radius(var(--#{$prefix}navbar-toggler-border-radius));
  @include transition(var(--#{$prefix}navbar-toggler-transition));

  &:hover {
    text-decoration: none;
  }

  &:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: 0 0 0 var(--#{$prefix}navbar-toggler-focus-width);
  }
}

// Keep as a separate element so folks can easily override it with another icon
// or image file as needed.
.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-image: var(--#{$prefix}navbar-toggler-icon-bg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.navbar-nav-scroll {
  max-height: var(--#{$prefix}scroll-height, 75vh);
  overflow-y: auto;
}

// scss-docs-start navbar-expand-loop
// Generate series of \`.navbar-expand-*\` responsive classes for configuring
// where your navbar collapses.
.navbar-expand {
  @each $breakpoint in map-keys($grid-breakpoints) {
    $next: breakpoint-next($breakpoint, $grid-breakpoints);
    $infix: breakpoint-infix($next, $grid-breakpoints);

    // stylelint-disable-next-line scss/selector-no-union-class-name
    &#{$infix} {
      @include media-breakpoint-up($next) {
        flex-wrap: nowrap;
        justify-content: flex-start;

        .navbar-nav {
          flex-direction: row;

          .dropdown-menu {
            position: absolute;
          }

          .nav-link {
            padding-right: var(--#{$prefix}navbar-nav-link-padding-x);
            padding-left: var(--#{$prefix}navbar-nav-link-padding-x);
          }
        }

        .navbar-nav-scroll {
          overflow: visible;
        }

        .navbar-collapse {
          display: flex !important; // stylelint-disable-line declaration-no-important
          flex-basis: auto;
        }

        .navbar-toggler {
          display: none;
        }

        .offcanvas {
          // stylelint-disable declaration-no-important
          position: static;
          z-index: auto;
          flex-grow: 1;
          width: auto !important;
          height: auto !important;
          visibility: visible !important;
          background-color: transparent !important;
          border: 0 !important;
          transform: none !important;
          @include box-shadow(none);
          @include transition(none);
          // stylelint-enable declaration-no-important

          .offcanvas-header {
            display: none;
          }

          .offcanvas-body {
            display: flex;
            flex-grow: 0;
            padding: 0;
            overflow-y: visible;
          }
        }
      }
    }
  }
}
// scss-docs-end navbar-expand-loop

// Navbar themes
//
// Styles for switching between navbars with light or dark background.

.navbar-light {
  @include deprecate("\`.navbar-light\`", "v4.2.6", "v6.0.0", true);
}

.navbar-dark {
  // scss-docs-start navbar-dark-css-vars
  --#{$prefix}navbar-color: #{$navbar-dark-color};
  --#{$prefix}navbar-hover-color: #{$navbar-dark-hover-color};
  --#{$prefix}navbar-disabled-color: #{$navbar-dark-disabled-color};
  --#{$prefix}navbar-active-color: #{$navbar-dark-active-color};
  --#{$prefix}navbar-brand-color: #{$navbar-dark-brand-color};
  --#{$prefix}navbar-brand-hover-color: #{$navbar-dark-brand-hover-color};
  --#{$prefix}navbar-toggler-border-color: #{$navbar-dark-toggler-border-color};
  --#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-dark-toggler-icon-bg)};
  // scss-docs-end navbar-dark-css-vars
}
`,Rn=`// stylelint-disable function-disallowed-list

%offcanvas-css-vars {
  // scss-docs-start offcanvas-css-vars
  --#{$prefix}offcanvas-zindex: #{$zindex-offcanvas};
  --#{$prefix}offcanvas-width: #{$offcanvas-horizontal-width};
  --#{$prefix}offcanvas-height: #{$offcanvas-vertical-height};
  --#{$prefix}offcanvas-padding-x: #{$offcanvas-padding-x};
  --#{$prefix}offcanvas-padding-y: #{$offcanvas-padding-y};
  --#{$prefix}offcanvas-color: #{$offcanvas-color};
  --#{$prefix}offcanvas-bg: #{$offcanvas-bg-color};
  --#{$prefix}offcanvas-border-width: #{$offcanvas-border-width};
  --#{$prefix}offcanvas-border-color: #{$offcanvas-border-color};
  --#{$prefix}offcanvas-box-shadow: #{$offcanvas-box-shadow};
  // scss-docs-end offcanvas-css-vars
}

@each $breakpoint in map-keys($grid-breakpoints) {
  $next: breakpoint-next($breakpoint, $grid-breakpoints);
  $infix: breakpoint-infix($next, $grid-breakpoints);

  .offcanvas#{$infix} {
    @extend %offcanvas-css-vars;
  }
}

@each $breakpoint in map-keys($grid-breakpoints) {
  $next: breakpoint-next($breakpoint, $grid-breakpoints);
  $infix: breakpoint-infix($next, $grid-breakpoints);

  .offcanvas#{$infix} {
    @include media-breakpoint-down($next) {
      position: fixed;
      bottom: 0;
      z-index: var(--#{$prefix}offcanvas-zindex);
      display: flex;
      flex-direction: column;
      max-width: 100%;
      color: var(--#{$prefix}offcanvas-color);
      visibility: hidden;
      background-color: var(--#{$prefix}offcanvas-bg);
      background-clip: padding-box;
      outline: 0;
      @include box-shadow(var(--#{$prefix}offcanvas-box-shadow));
      @include transition(transform $offcanvas-transition-duration ease-in-out);

      &.offcanvas-start {
        top: 0;
        @include ltr-rtl("left", 0);
        width: var(--#{$prefix}offcanvas-width);
        @include ltr-rtl("border-right", var(--#{$prefix}offcanvas-border-width) solid var(--#{$prefix}offcanvas-border-color));
        @include ltr-rtl-value-only("transform", translateX(-100%), translateX(100%));
      }

      &.offcanvas-end {
        top: 0;
        @include ltr-rtl("right", 0);
        width: var(--#{$prefix}offcanvas-width);
        @include ltr-rtl("border-left", var(--#{$prefix}offcanvas-border-width) solid var(--#{$prefix}offcanvas-border-color));
        transform: translateX(100%);
      }

      &.offcanvas-top {
        top: 0;
        right: 0;
        left: 0;
        height: var(--#{$prefix}offcanvas-height);
        max-height: 100%;
        border-bottom: var(--#{$prefix}offcanvas-border-width) solid var(--#{$prefix}offcanvas-border-color);
        transform: translateY(-100%);
      }

      &.offcanvas-bottom {
        right: 0;
        left: 0;
        height: var(--#{$prefix}offcanvas-height);
        max-height: 100%;
        border-top: var(--#{$prefix}offcanvas-border-width) solid var(--#{$prefix}offcanvas-border-color);
        transform: translateY(100%);
      }

      &.showing,
      &.show:not(.hiding) {
        transform: none !important; // stylelint-disable-line declaration-no-important
      }

      &.showing,
      &.hiding,
      &.show {
        visibility: visible;
      }
    }

    @if not ($infix == "") {
      @include media-breakpoint-up($next) {
        --#{$prefix}offcanvas-height: auto;
        --#{$prefix}offcanvas-border-width: 0;
        background-color: transparent !important; // stylelint-disable-line declaration-no-important

        .offcanvas-header {
          display: none;
        }

        .offcanvas-body {
          display: flex;
          flex-grow: 0;
          padding: 0;
          overflow-y: visible;
          // Reset \`background-color\` in case \`.bg-*\` classes are used in offcanvas
          background-color: transparent !important; // stylelint-disable-line declaration-no-important
        }
      }
    }
  }
}

.offcanvas-backdrop {
  @include overlay-backdrop($zindex-offcanvas-backdrop, var(--#{$prefix}offcanvas-backdrop-bg, $offcanvas-backdrop-bg), $offcanvas-backdrop-opacity);
}

.offcanvas-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--#{$prefix}offcanvas-padding-y) var(--#{$prefix}offcanvas-padding-x);

  .btn-close {
    padding: calc(var(--#{$prefix}offcanvas-padding-y) * .5) calc(var(--#{$prefix}offcanvas-padding-x) * .5);
    margin-top: calc(-.5 * var(--#{$prefix}offcanvas-padding-y));
    @include ltr-rtl("margin-right", calc(-.5 * var(--#{$prefix}offcanvas-padding-x)));
    margin-bottom: calc(-.5 * var(--#{$prefix}offcanvas-padding-y));
  }
}

.offcanvas-title {
  margin-bottom: 0;
  line-height: $offcanvas-title-line-height;
}

.offcanvas-body {
  flex-grow: 1;
  padding: var(--#{$prefix}offcanvas-padding-y) var(--#{$prefix}offcanvas-padding-x);
  overflow-y: auto;
}
`,En=`.pagination {
  // scss-docs-start pagination-css-vars
  --#{$prefix}pagination-padding-x: #{$pagination-padding-x};
  --#{$prefix}pagination-padding-y: #{$pagination-padding-y};
  @include rfs($pagination-font-size, --#{$prefix}pagination-font-size);
  --#{$prefix}pagination-color: #{$pagination-color};
  --#{$prefix}pagination-bg: #{$pagination-bg};
  --#{$prefix}pagination-border-width: #{$pagination-border-width};
  --#{$prefix}pagination-border-color: #{$pagination-border-color};
  --#{$prefix}pagination-border-radius: #{$pagination-border-radius};
  --#{$prefix}pagination-hover-color: #{$pagination-hover-color};
  --#{$prefix}pagination-hover-bg: #{$pagination-hover-bg};
  --#{$prefix}pagination-hover-border-color: #{$pagination-hover-border-color};
  --#{$prefix}pagination-focus-color: #{$pagination-focus-color};
  --#{$prefix}pagination-focus-bg: #{$pagination-focus-bg};
  --#{$prefix}pagination-focus-box-shadow: #{$pagination-focus-box-shadow};
  --#{$prefix}pagination-active-color: #{$pagination-active-color};
  --#{$prefix}pagination-active-bg: #{$pagination-active-bg};
  --#{$prefix}pagination-active-border-color: #{$pagination-active-border-color};
  --#{$prefix}pagination-disabled-color: #{$pagination-disabled-color};
  --#{$prefix}pagination-disabled-bg: #{$pagination-disabled-bg};
  --#{$prefix}pagination-disabled-border-color: #{$pagination-disabled-border-color};
  // scss-docs-end pagination-css-vars

  display: flex;
  @include list-unstyled();
}

.page-link {
  position: relative;
  display: block;
  padding: var(--#{$prefix}pagination-padding-y) var(--#{$prefix}pagination-padding-x);
  @include font-size(var(--#{$prefix}pagination-font-size));
  color: var(--#{$prefix}pagination-color);
  text-decoration: if($link-decoration == none, null, none);
  background-color: var(--#{$prefix}pagination-bg);
  border: var(--#{$prefix}pagination-border-width) solid var(--#{$prefix}pagination-border-color);
  @include transition($pagination-transition);

  &:hover {
    z-index: 2;
    color: var(--#{$prefix}pagination-hover-color);
    text-decoration: if($link-hover-decoration == underline, none, null);
    background-color: var(--#{$prefix}pagination-hover-bg);
    border-color: var(--#{$prefix}pagination-hover-border-color);
  }

  &:focus {
    z-index: 3;
    color: var(--#{$prefix}pagination-focus-color);
    background-color: var(--#{$prefix}pagination-focus-bg);
    outline: $pagination-focus-outline;
    box-shadow: var(--#{$prefix}pagination-focus-box-shadow);
  }

  &.active,
  .active > & {
    z-index: 3;
    color: var(--#{$prefix}pagination-active-color);
    @include gradient-bg(var(--#{$prefix}pagination-active-bg));
    border-color: var(--#{$prefix}pagination-active-border-color);
  }

  &.disabled,
  .disabled > & {
    color: var(--#{$prefix}pagination-disabled-color);
    pointer-events: none;
    background-color: var(--#{$prefix}pagination-disabled-bg);
    border-color: var(--#{$prefix}pagination-disabled-border-color);
  }
}

.page-item {
  &:not(:first-child) .page-link {
    @include ltr-rtl("margin-left", $pagination-margin-start);
  }

  @if $pagination-margin-start == ($pagination-border-width * -1) {
    &:first-child {
      .page-link {
        @include border-start-radius(var(--#{$prefix}pagination-border-radius));
      }
    }

    &:last-child {
      .page-link {
        @include border-end-radius(var(--#{$prefix}pagination-border-radius));
      }
    }
  } @else {
    // Add border-radius to all pageLinks in case they have left margin
    .page-link {
      @include border-radius(var(--#{$prefix}pagination-border-radius));
    }
  }
}


//
// Sizing
//

.pagination-lg {
  @include pagination-size($pagination-padding-y-lg, $pagination-padding-x-lg, $font-size-lg, $pagination-border-radius-lg);
}

.pagination-sm {
  @include pagination-size($pagination-padding-y-sm, $pagination-padding-x-sm, $font-size-sm, $pagination-border-radius-sm);
}
`,Hn=`.picker {
  // scss-docs-start picker-css-vars
  --#{$prefix}picker-footer-border-top: #{$picker-footer-border-width} solid #{$picker-footer-border-color};
  --#{$prefix}picker-footer-padding: #{$picker-footer-padding};
  // scss-docs-end picker-css-vars

  .dropdown-menu {
    padding: 0;
  }

  &.show {
    .input-group {
      color: var(--#{$prefix}input-focus-color, $input-focus-color);
      background-color: var(--#{$prefix}input-focus-bg, $input-focus-bg);
      border-color: var(--#{$prefix}input-focus-border-color, $input-focus-border-color);
      outline: 0;
      @if $enable-shadows {
        @include box-shadow($input-box-shadow, $input-focus-box-shadow);
      } @else {
        // Avoid using mixin so we can pass custom focus shadow properly
        box-shadow: $input-focus-box-shadow;
      }
    }
  }
}

.picker-input-group {
  &:hover {
    .form-control:not(:placeholder-shown) ~ .input-group-text {
      .picker-input-group-indicator:not(:last-child) {
        display: none;
      }
      .picker-input-group-cleaner {
        display: initial;
      }
    }
  }

  .form-control {
    &.hover {
      color: var(--cui-gray-500);
    }

    &:focus {
      border-color: var(--#{$prefix}input-border-color, $input-border-color);
      outline: 0;
      box-shadow: none;
    }

    &:not(:first-child) {
      @include ltr-rtl("border-left", 0);
    }

    &:not(:last-child) {
      @include ltr-rtl("border-right", 0);
    }

    &[readonly] {
      background-color: var(--#{$prefix}input-bg, $input-bg);
    }

    &.form-control:disabled + .input-group-text {
      background-color: var(--#{$prefix}input-disabled-bg, $input-disabled-bg);
    }
  }

  &.input-group {
    @include border-radius($input-border-radius, 0);
  }

  &.input-group-lg {
    @include border-radius($input-border-radius-lg, 0);

    .picker-input-group-icon {
      width: 1.25rem;
      height: 1.25rem;
      font-size: 1.25rem;
    }
  }

  &.input-group-sm {
    @include border-radius($input-border-radius-sm, 0);

    .picker-input-group-icon {
      width: .875rem;
      height: .875rem;
      font-size: .875rem;
    }
  }

  .input-group-text {
    color: var(--cui-gray-400);
    background-color: var(--#{$prefix}input-bg, $input-bg);
  }
}

.picker-input-group-cleaner {
  display: none;
}

.picker-input-group-icon {
  display: block;
  width: 1rem;
  height: 1rem;
  font-size: 1rem;
  @include transition(background-image .15s ease-in-out);
}

.picker-footer {
  display: flex;
  justify-content: flex-end;
  padding: var(--#{$prefix}picker-footer-padding);
  border-top: var(--#{$prefix}picker-footer-border-top);

  .btn + .btn {
    @include ltr-rtl("margin-left", .5rem);
  }
}
`,Pn=`.placeholder {
  display: inline-block;
  min-height: 1em;
  vertical-align: middle;
  cursor: wait;
  background-color: currentcolor;
  opacity: $placeholder-opacity-max;

  &.btn::before {
    display: inline-block;
    content: "";
  }
}

// Sizing
.placeholder-xs {
  min-height: .6em;
}

.placeholder-sm {
  min-height: .8em;
}

.placeholder-lg {
  min-height: 1.2em;
}

// Animation
.placeholder-glow {
  .placeholder {
    animation: placeholder-glow 2s ease-in-out infinite;
  }
}

@keyframes placeholder-glow {
  50% {
    opacity: $placeholder-opacity-min;
  }
}

.placeholder-wave {
  mask-image: linear-gradient(130deg, $black 55%, rgba(0, 0, 0, (1 - $placeholder-opacity-min)) 75%, $black 95%);
  mask-size: 200% 100%;
  animation: placeholder-wave 2s linear infinite;
}

@keyframes placeholder-wave {
  100% {
    mask-position: -200% 0%;
  }
}
`,In=`.popover {
  // scss-docs-start popover-css-vars
  --#{$prefix}popover-zindex: #{$zindex-popover};
  --#{$prefix}popover-max-width: #{$popover-max-width};
  @include rfs($popover-font-size, --#{$prefix}popover-font-size);
  --#{$prefix}popover-bg: #{$popover-bg};
  --#{$prefix}popover-border-width: #{$popover-border-width};
  --#{$prefix}popover-border-color: #{$popover-border-color};
  --#{$prefix}popover-border-radius: #{$popover-border-radius};
  --#{$prefix}popover-inner-border-radius: #{$popover-inner-border-radius};
  --#{$prefix}popover-box-shadow: #{$popover-box-shadow};
  --#{$prefix}popover-header-padding-x: #{$popover-header-padding-x};
  --#{$prefix}popover-header-padding-y: #{$popover-header-padding-y};
  @include rfs($popover-header-font-size, --#{$prefix}popover-header-font-size);
  --#{$prefix}popover-header-color: #{$popover-header-color};
  --#{$prefix}popover-header-bg: #{$popover-header-bg};
  --#{$prefix}popover-body-padding-x: #{$popover-body-padding-x};
  --#{$prefix}popover-body-padding-y: #{$popover-body-padding-y};
  --#{$prefix}popover-body-color: #{$popover-body-color};
  --#{$prefix}popover-arrow-width: #{$popover-arrow-width};
  --#{$prefix}popover-arrow-height: #{$popover-arrow-height};
  --#{$prefix}popover-arrow-border: var(--#{$prefix}popover-border-color);
  // scss-docs-end popover-css-vars

  z-index: var(--#{$prefix}popover-zindex);
  display: block;
  max-width: var(--#{$prefix}popover-max-width);
  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.
  // So reset our font and text properties to avoid inheriting weird values.
  @include reset-text();
  @include font-size(var(--#{$prefix}popover-font-size));
  // Allow breaking very long words so they don't overflow the popover's bounds
  word-wrap: break-word;
  background-color: var(--#{$prefix}popover-bg);
  background-clip: padding-box;
  border: var(--#{$prefix}popover-border-width) solid var(--#{$prefix}popover-border-color);
  @include border-radius(var(--#{$prefix}popover-border-radius));
  @include box-shadow(var(--#{$prefix}popover-box-shadow));

  .popover-arrow {
    display: block;
    width: var(--#{$prefix}popover-arrow-width);
    height: var(--#{$prefix}popover-arrow-height);

    &::before,
    &::after {
      position: absolute;
      display: block;
      content: "";
      border-color: transparent;
      border-style: solid;
      border-width: 0;
    }
  }
}

.bs-popover-top {
  > .popover-arrow {
    bottom: calc(-1 * (var(--#{$prefix}popover-arrow-height)) - var(--#{$prefix}popover-border-width)); // stylelint-disable-line function-disallowed-list

    &::before,
    &::after {
      border-width: var(--#{$prefix}popover-arrow-height) calc(var(--#{$prefix}popover-arrow-width) * .5) 0; // stylelint-disable-line function-disallowed-list
    }

    &::before {
      bottom: 0;
      border-top-color: var(--#{$prefix}popover-arrow-border);
    }

    &::after {
      bottom: var(--#{$prefix}popover-border-width);
      border-top-color: var(--#{$prefix}popover-bg);
    }
  }
}

/* rtl:begin:ignore */
.bs-popover-end {
  > .popover-arrow {
    left: calc(-1 * (var(--#{$prefix}popover-arrow-height)) - var(--#{$prefix}popover-border-width)); // stylelint-disable-line function-disallowed-list
    width: var(--#{$prefix}popover-arrow-height);
    height: var(--#{$prefix}popover-arrow-width);

    &::before,
    &::after {
      border-width: calc(var(--#{$prefix}popover-arrow-width) * .5) var(--#{$prefix}popover-arrow-height) calc(var(--#{$prefix}popover-arrow-width) * .5) 0; // stylelint-disable-line function-disallowed-list
    }

    &::before {
      left: 0;
      border-right-color: var(--#{$prefix}popover-arrow-border);
    }

    &::after {
      left: var(--#{$prefix}popover-border-width);
      border-right-color: var(--#{$prefix}popover-bg);
    }
  }
}

/* rtl:end:ignore */

.bs-popover-bottom {
  > .popover-arrow {
    top: calc(-1 * (var(--#{$prefix}popover-arrow-height)) - var(--#{$prefix}popover-border-width)); // stylelint-disable-line function-disallowed-list

    &::before,
    &::after {
      border-width: 0 calc(var(--#{$prefix}popover-arrow-width) * .5) var(--#{$prefix}popover-arrow-height); // stylelint-disable-line function-disallowed-list
    }

    &::before {
      top: 0;
      border-bottom-color: var(--#{$prefix}popover-arrow-border);
    }

    &::after {
      top: var(--#{$prefix}popover-border-width);
      border-bottom-color: var(--#{$prefix}popover-bg);
    }
  }

  // This will remove the popover-header's border just below the arrow
  .popover-header::before {
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: var(--#{$prefix}popover-arrow-width);
    margin-left: calc(-.5 * var(--#{$prefix}popover-arrow-width)); // stylelint-disable-line function-disallowed-list
    content: "";
    border-bottom: var(--#{$prefix}popover-border-width) solid var(--#{$prefix}popover-header-bg);
  }
}

/* rtl:begin:ignore */
.bs-popover-start {
  > .popover-arrow {
    right: calc(-1 * (var(--#{$prefix}popover-arrow-height)) - var(--#{$prefix}popover-border-width)); // stylelint-disable-line function-disallowed-list
    width: var(--#{$prefix}popover-arrow-height);
    height: var(--#{$prefix}popover-arrow-width);

    &::before,
    &::after {
      border-width: calc(var(--#{$prefix}popover-arrow-width) * .5) 0 calc(var(--#{$prefix}popover-arrow-width) * .5) var(--#{$prefix}popover-arrow-height); // stylelint-disable-line function-disallowed-list
    }

    &::before {
      right: 0;
      border-left-color: var(--#{$prefix}popover-arrow-border);
    }

    &::after {
      right: var(--#{$prefix}popover-border-width);
      border-left-color: var(--#{$prefix}popover-bg);
    }
  }
}

/* rtl:end:ignore */

.bs-popover-auto {
  &[data-popper-placement^="top"] {
    @extend .bs-popover-top;
  }
  &[data-popper-placement^="right"] {
    @extend .bs-popover-end;
  }
  &[data-popper-placement^="bottom"] {
    @extend .bs-popover-bottom;
  }
  &[data-popper-placement^="left"] {
    @extend .bs-popover-start;
  }
}

// Offset the popover to account for the popover arrow
.popover-header {
  padding: var(--#{$prefix}popover-header-padding-y) var(--#{$prefix}popover-header-padding-x);
  margin-bottom: 0; // Reset the default from Reboot
  @include font-size(var(--#{$prefix}popover-header-font-size));
  color: var(--#{$prefix}popover-header-color);
  background-color: var(--#{$prefix}popover-header-bg);
  border-bottom: var(--#{$prefix}popover-border-width) solid var(--#{$prefix}popover-border-color);
  @include border-top-radius(var(--#{$prefix}popover-inner-border-radius));

  &:empty {
    display: none;
  }
}

.popover-body {
  padding: var(--#{$prefix}popover-body-padding-y) var(--#{$prefix}popover-body-padding-x);
  color: var(--#{$prefix}popover-body-color);
}
`,On=`// Disable animation if transitions are disabled

// scss-docs-start progress-keyframes
@if $enable-transitions {
  @keyframes progress-bar-stripes {
    0% { background-position-x: $progress-height; }
  }
}
// scss-docs-end progress-keyframes

.progress {
  // scss-docs-start progress-css-vars
  --#{$prefix}progress-height: #{$progress-height};
  @include rfs($progress-font-size, --#{$prefix}progress-font-size);
  --#{$prefix}progress-bg: #{$progress-bg};
  --#{$prefix}progress-border-radius: #{$progress-border-radius};
  --#{$prefix}progress-box-shadow: #{$progress-box-shadow};
  --#{$prefix}progress-bar-color: #{$progress-bar-color};
  --#{$prefix}progress-bar-bg: #{$progress-bar-bg};
  --#{$prefix}progress-bar-transition: #{$progress-bar-transition};
  // scss-docs-end progress-css-vars

  display: flex;
  height: var(--#{$prefix}progress-height);
  overflow: hidden; // force rounded corners by cropping it
  @include font-size(var(--#{$prefix}progress-font-size));
  background-color: var(--#{$prefix}progress-bg);
  @include border-radius(var(--#{$prefix}progress-border-radius));
  @include box-shadow(var(--#{$prefix}progress-box-shadow));
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: var(--#{$prefix}progress-bar-color);
  text-align: center;
  white-space: nowrap;
  background-color: var(--#{$prefix}progress-bar-bg);
  @include transition(var(--#{$prefix}progress-bar-transition));
}

.progress-bar-striped {
  @include gradient-striped();
  background-size: var(--#{$prefix}progress-height) var(--#{$prefix}progress-height);
}

@if $enable-transitions {
  .progress-bar-animated {
    animation: $progress-bar-animation-timing progress-bar-stripes;

    @if $enable-reduced-motion {
      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    }
  }
}

.progress-thin {
  height: 4px;
}

// White progress bar
.progress.progress-white {
  background-color: rgba(255, 255, 255, .2);
  .progress-bar {
    background-color: $white;
  }
}

.progress-group {
  display: flex;
  flex-flow: row wrap;
  margin-bottom: $progress-group-margin-bottom;
}

.progress-group-prepend {
  flex: 0 0 100px;
  align-self: center;
}

.progress-group-header {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  margin-bottom: $progress-group-header-margin-bottom;
}

.progress-group-bars {
  flex-grow: 1;
  align-self: center;

  .progress:not(:last-child) {
    margin-bottom: 2px;
  }
}

.progress-group-header + .progress-group-bars {
  flex-basis: 100%;
}
`,Dn=`// stylelint-disable declaration-no-important, selector-no-qualifying-type, property-no-vendor-prefix


// Reboot
//
// Normalization of HTML elements, manually forked from Normalize.css to remove
// styles targeting irrelevant browsers while applying new styles.
//
// Normalize is licensed MIT. https://github.com/necolas/normalize.css


// Document
//
// Change from \`box-sizing: content-box\` so that \`width\` is not affected by \`padding\` or \`border\`.

*,
*::before,
*::after {
  box-sizing: border-box;
}


// Root
//
// Ability to the value of the root font sizes, affecting the value of \`rem\`.
// null by default, thus nothing is generated.

:root {
  @if $font-size-root != null {
    @include font-size(var(--#{$prefix}root-font-size));
  }

  @if $enable-smooth-scroll {
    @media (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }
  }
}


// Body
//
// 1. Remove the margin in all browsers.
// 2. As a best practice, apply a default \`background-color\`.
// 3. Prevent adjustments of font size after orientation changes in iOS.
// 4. Change the default tap highlight to be completely transparent in iOS.

// scss-docs-start reboot-body-rules
body {
  margin: 0; // 1
  font-family: var(--#{$prefix}body-font-family);
  @include font-size(var(--#{$prefix}body-font-size));
  font-weight: var(--#{$prefix}body-font-weight);
  line-height: var(--#{$prefix}body-line-height);
  color: var(--#{$prefix}body-color);
  text-align: var(--#{$prefix}body-text-align);
  background-color: var(--#{$prefix}body-bg); // 2
  -webkit-text-size-adjust: 100%; // 3
  -webkit-tap-highlight-color: rgba($black, 0); // 4
}
// scss-docs-end reboot-body-rules


// Content grouping
//
// 1. Reset Firefox's gray color

hr {
  margin: $hr-margin-y 0;
  color: $hr-color; // 1
  border: 0;
  border-top: $hr-border-width solid $hr-border-color;
  opacity: $hr-opacity;
}


// Typography
//
// 1. Remove top margins from headings
//    By default, \`<h1>\`-\`<h6>\` all receive top and bottom margins. We nuke the top
//    margin for easier control within type scales as it avoids margin collapsing.

%heading {
  margin-top: 0; // 1
  margin-bottom: $headings-margin-bottom;
  font-family: $headings-font-family;
  font-style: $headings-font-style;
  font-weight: $headings-font-weight;
  line-height: $headings-line-height;
  color: var(--#{$prefix}heading-color);
}

h1 {
  @extend %heading;
  @include font-size($h1-font-size);
}

h2 {
  @extend %heading;
  @include font-size($h2-font-size);
}

h3 {
  @extend %heading;
  @include font-size($h3-font-size);
}

h4 {
  @extend %heading;
  @include font-size($h4-font-size);
}

h5 {
  @extend %heading;
  @include font-size($h5-font-size);
}

h6 {
  @extend %heading;
  @include font-size($h6-font-size);
}


// Reset margins on paragraphs
//
// Similarly, the top margin on \`<p>\`s get reset. However, we also reset the
// bottom margin to use \`rem\` units instead of \`em\`.

p {
  margin-top: 0;
  margin-bottom: $paragraph-margin-bottom;
}


// Abbreviations
//
// 1. Add the correct text decoration in Chrome, Edge, Opera, and Safari.
// 2. Add explicit cursor to indicate changed behavior.
// 3. Prevent the text-decoration to be skipped.

abbr[title] {
  text-decoration: underline dotted; // 1
  cursor: help; // 2
  text-decoration-skip-ink: none; // 3
}


// Address

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}


// Lists

// ol,
// ul {
//   @include ltr-rtl("padding-left", 2rem); // TODO: find solution
// }

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: $dt-font-weight;
}

// 1. Undo browser default

dd {
  margin-bottom: .5rem;
  @include ltr-rtl("margin-left", 0); // 1
}


// Blockquote

blockquote {
  margin: 0 0 1rem;
}


// Strong
//
// Add the correct font weight in Chrome, Edge, and Safari

b,
strong {
  font-weight: $font-weight-bolder;
}


// Small
//
// Add the correct font size in all browsers

small {
  @include font-size($small-font-size);
}


// Mark

mark {
  padding: $mark-padding;
  background-color: var(--#{$prefix}highlight-bg);
}


// Sub and Sup
//
// Prevent \`sub\` and \`sup\` elements from affecting the line height in
// all browsers.

sub,
sup {
  position: relative;
  @include font-size($sub-sup-font-size);
  line-height: 0;
  vertical-align: baseline;
}

sub { bottom: -.25em; }
sup { top: -.5em; }


// Links

a {
  color: var(--#{$prefix}link-color);
  text-decoration: $link-decoration;

  &:hover {
    color: var(--#{$prefix}link-hover-color);
    text-decoration: $link-hover-decoration;
  }
}

// And undo these styles for placeholder links/named anchors (without href).
// It would be more straightforward to just use a[href] in previous block, but that
// causes specificity issues in many other styles that are too complex to fix.
// See https://github.com/twbs/bootstrap/issues/19402

a:not([href]):not([class]) {
  &,
  &:hover {
    color: inherit;
    text-decoration: none;
  }
}


// Code

pre,
code,
kbd,
samp {
  font-family: $font-family-code;
  @include font-size(1em); // Correct the odd \`em\` font sizing in all browsers.
}

// 1. Remove browser default top margin
// 2. Reset browser default of \`1em\` to use \`rem\`s
// 3. Don't allow content to break outside

pre {
  display: block;
  margin-top: 0; // 1
  margin-bottom: 1rem; // 2
  overflow: auto; // 3
  @include font-size($code-font-size);
  color: var(--#{$prefix}pre-color, $pre-color);

  // Account for some code outputs that place code tags in pre tags
  code {
    @include font-size(inherit);
    color: inherit;
    word-break: normal;
  }
}

code {
  @include font-size($code-font-size);
  color: var(--#{$prefix}code-color);
  word-wrap: break-word;

  // Streamline the style when inside anchors to avoid broken underline and more
  a > & {
    color: inherit;
  }
}

kbd {
  padding: $kbd-padding-y $kbd-padding-x;
  @include font-size($kbd-font-size);
  color: var(--#{$prefix}kbd-color, $kbd-color);
  background-color: var(--#{$prefix}kbd-bg, $kbd-bg);
  @include border-radius($border-radius-sm);

  kbd {
    padding: 0;
    @include font-size(1em);
    font-weight: $nested-kbd-font-weight;
  }
}


// Figures
//
// Apply a consistent margin strategy (matches our type styles).

figure {
  margin: 0 0 1rem;
}


// Images and content

img,
svg {
  vertical-align: middle;
}


// Tables
//
// Prevent double borders

table {
  caption-side: bottom;
  border-collapse: collapse;
}

caption {
  padding-top: $table-cell-padding-y;
  padding-bottom: $table-cell-padding-y;
  color: var(--#{$prefix}table-caption-color, $table-caption-color);
  text-align: left;
}

// 1. Removes font-weight bold by inheriting
// 2. Matches default \`<td>\` alignment by inheriting \`text-align\`.
// 3. Fix alignment for Safari

th {
  font-weight: $table-th-font-weight; // 1
  text-align: inherit; // 2
  text-align: -webkit-match-parent; // 3
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}


// Forms
//
// 1. Allow labels to use \`margin\` for spacing.

label {
  display: inline-block; // 1
}

// Remove the default \`border-radius\` that macOS Chrome adds.
// See https://github.com/twbs/bootstrap/issues/24093

button {
  // stylelint-disable-next-line property-disallowed-list
  border-radius: 0;
}

// Explicitly remove focus outline in Chromium when it shouldn't be
// visible (e.g. as result of mouse click or touch tap). It already
// should be doing this automatically, but seems to currently be
// confused and applies its very visible two-tone outline anyway.

button:focus:not(:focus-visible) {
  outline: 0;
}

// 1. Remove the margin in Firefox and Safari

input,
button,
select,
optgroup,
textarea {
  margin: 0; // 1
  font-family: inherit;
  @include font-size(inherit);
  line-height: inherit;
}

// Remove the inheritance of text transform in Firefox
button,
select {
  text-transform: none;
}
// Set the cursor for non-\`<button>\` buttons
//
// Details at https://github.com/twbs/bootstrap/pull/30562
[role="button"] {
  cursor: pointer;
}

select {
  // Remove the inheritance of word-wrap in Safari.
  // See https://github.com/twbs/bootstrap/issues/24990
  word-wrap: normal;

  // Undo the opacity change from Chrome
  &:disabled {
    opacity: 1;
  }
}

// Remove the dropdown arrow only from text type inputs built with datalists in Chrome.
// See https://stackoverflow.com/a/54997118

[list]:not([type="date"]):not([type="datetime-local"]):not([type="month"]):not([type="week"]):not([type="time"])::-webkit-calendar-picker-indicator {
  display: none !important;
}

// 1. Prevent a WebKit bug where (2) destroys native \`audio\` and \`video\`
//    controls in Android 4.
// 2. Correct the inability to style clickable types in iOS and Safari.
// 3. Opinionated: add "hand" cursor to non-disabled button elements.

button,
[type="button"], // 1
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; // 2

  @if $enable-button-pointers {
    &:not(:disabled) {
      cursor: pointer; // 3
    }
  }
}

// Remove inner border and padding from Firefox, but don't restore the outline like Normalize.

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

// 1. Textareas should really only resize vertically so they don't break their (horizontal) containers.

textarea {
  resize: vertical; // 1
}

// 1. Browsers set a default \`min-width: min-content;\` on fieldsets,
//    unlike e.g. \`<div>\`s, which have \`min-width: 0;\` by default.
//    So we reset that to ensure fieldsets behave more like a standard block element.
//    See https://github.com/twbs/bootstrap/issues/12359
//    and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements
// 2. Reset the default outline behavior of fieldsets so they don't affect page layout.

fieldset {
  min-width: 0; // 1
  padding: 0; // 2
  margin: 0; // 2
  border: 0; // 2
}

// 1. By using \`float: left\`, the legend will behave like a block element.
//    This way the border of a fieldset wraps around the legend if present.
// 2. Fix wrapping bug.
//    See https://github.com/twbs/bootstrap/issues/29712

legend {
  @include ltr-rtl("float", left); // 1
  width: 100%;
  padding: 0;
  margin-bottom: $legend-margin-bottom;
  @include font-size($legend-font-size);
  font-weight: $legend-font-weight;
  line-height: inherit;

  + * {
    clear: left; // 2
  }
}

// Fix height of inputs with a type of datetime-local, date, month, week, or time
// See https://github.com/twbs/bootstrap/issues/18842

::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}

::-webkit-inner-spin-button {
  height: auto;
}

// 1. Correct the outline style in Safari.
// 2. This overrides the extra rounded corners on search inputs in iOS so that our
//    \`.form-control\` class can properly style them. Note that this cannot simply
//    be added to \`.form-control\` as it's not specific enough. For details, see
//    https://github.com/twbs/bootstrap/issues/11586.

[type="search"] {
  outline-offset: -2px; // 1
  -webkit-appearance: textfield; // 2
}

// 1. A few input types should stay LTR
// See https://rtlstyling.com/posts/rtl-styling#form-inputs

*[dir="rtl"] {
  [type="tel"],
  [type="url"],
  [type="email"],
  [type="number"] {
    direction: ltr;
  }
}


// Remove the inner padding in Chrome and Safari on macOS.

::-webkit-search-decoration {
  -webkit-appearance: none;
}

// Remove padding around color pickers in webkit browsers

::-webkit-color-swatch-wrapper {
  padding: 0;
}


// 1. Inherit font family and line height for file input buttons
// 2. Correct the inability to style clickable types in iOS and Safari.

::file-selector-button {
  font: inherit; // 1
  -webkit-appearance: button; // 2
}

// Correct element displays

output {
  display: inline-block;
}

// Remove border from iframe

iframe {
  border: 0;
}

// Summary
//
// 1. Add the correct display in all browsers

summary {
  display: list-item; // 1
  cursor: pointer;
}


// Progress
//
// Add the correct vertical alignment in Chrome, Firefox, and Opera.

progress {
  vertical-align: baseline;
}


// Hidden attribute
//
// Always hide an element with the \`hidden\` HTML attribute.

[hidden] {
  display: none !important;
}
`,Un=`:root {
  // Note: Custom variable values only support SassScript inside \`#{}\`.

  // Colors
  //
  // Generate palettes for full colors, grays, and theme colors.

  @each $color, $value in $colors {
    --#{$prefix}#{$color}: #{$value};
  }

  @each $color, $value in $grays {
    --#{$prefix}gray-#{$color}: #{$value};
  }

  @each $color, $value in $theme-colors {
    --#{$prefix}#{$color}: #{$value};
  }

  @each $color, $value in $theme-colors-rgb {
    --#{$prefix}#{$color}-rgb: #{$value};
  }

  --#{$prefix}white-rgb: #{to-rgb($white)};
  --#{$prefix}black-rgb: #{to-rgb($black)};
  --#{$prefix}body-color-rgb: #{to-rgb($body-color)};
  --#{$prefix}body-bg-rgb: #{to-rgb($body-bg)};

  // Fonts

  // Note: Use \`inspect\` for lists so that quoted items keep the quotes.
  // See https://github.com/sass/sass/issues/2383#issuecomment-336349172
  --#{$prefix}font-sans-serif: #{inspect($font-family-sans-serif)};
  --#{$prefix}font-monospace: #{inspect($font-family-monospace)};
  --#{$prefix}gradient: #{$gradient};

  // Root and body
  // scss-docs-start root-body-variables
  @if $font-size-root != null {
    --#{$prefix}root-font-size: #{$font-size-root};
  }
  --#{$prefix}body-font-family: #{$font-family-base};
  @include rfs($font-size-base, --#{$prefix}body-font-size);
  --#{$prefix}body-font-weight: #{$font-weight-base};
  --#{$prefix}body-line-height: #{$line-height-base};
  --#{$prefix}body-color: #{$body-color};
  @if $body-text-align != null {
    --#{$prefix}body-text-align: #{$body-text-align};
  }
  --#{$prefix}body-bg: #{$body-bg};
  // scss-docs-end root-body-variables

  // scss-docs-start root-border-var
  --#{$prefix}border-width: #{$border-width};
  --#{$prefix}border-style: #{$border-style};
  --#{$prefix}border-color: #{$border-color};
  --#{$prefix}border-color-translucent: #{$border-color-translucent};

  --#{$prefix}border-radius: #{$border-radius};
  --#{$prefix}border-radius-sm: #{$border-radius-sm};
  --#{$prefix}border-radius-lg: #{$border-radius-lg};
  --#{$prefix}border-radius-xl: #{$border-radius-xl};
  --#{$prefix}border-radius-2xl: #{$border-radius-2xl};
  --#{$prefix}border-radius-pill: #{$border-radius-pill};
  // scss-docs-end root-border-var

  --#{$prefix}heading-color: #{$headings-color};
  --#{$prefix}link-color: #{$link-color};
  --#{$prefix}link-hover-color: #{$link-hover-color};

  --#{$prefix}code-color: #{$code-color};

  --#{$prefix}highlight-bg: #{$mark-bg};

  @each $name, $value in $grid-breakpoints {
    --#{$prefix}breakpoint-#{$name}: #{$value};
  }

  --#{$prefix}mobile-breakpoint: #{$mobile-breakpoint};
}
`,jn=`@import "sidebar/sidebar";
@import "sidebar/sidebar-nav";
@import "sidebar/sidebar-narrow";
`,Vn=`//
// Rotating border
//

.spinner-grow,
.spinner-border {
  display: inline-block;
  width: var(--#{$prefix}spinner-width);
  height: var(--#{$prefix}spinner-height);
  vertical-align: var(--#{$prefix}spinner-vertical-align);
  // stylelint-disable-next-line property-disallowed-list
  border-radius: 50%;
  animation: var(--#{$prefix}spinner-animation-speed) linear infinite var(--#{$prefix}spinner-animation-name);
}

// scss-docs-start spinner-border-keyframes
@keyframes spinner-border {
  to { transform: rotate(360deg) #{"/* rtl:ignore */"}; }
}
// scss-docs-end spinner-border-keyframes

.spinner-border {
  // scss-docs-start spinner-border-css-vars
  --#{$prefix}spinner-width: #{$spinner-width};
  --#{$prefix}spinner-height: #{$spinner-height};
  --#{$prefix}spinner-vertical-align: #{$spinner-vertical-align};
  --#{$prefix}spinner-border-width: #{$spinner-border-width};
  --#{$prefix}spinner-animation-speed: #{$spinner-animation-speed};
  --#{$prefix}spinner-animation-name: spinner-border;
  // scss-docs-end spinner-border-css-vars

  border: var(--#{$prefix}spinner-border-width) solid currentcolor;
  border-right-color: transparent;
}

.spinner-border-sm {
  // scss-docs-start spinner-border-sm-css-vars
  --#{$prefix}spinner-width: #{$spinner-width-sm};
  --#{$prefix}spinner-height: #{$spinner-height-sm};
  --#{$prefix}spinner-border-width: #{$spinner-border-width-sm};
  // scss-docs-end spinner-border-sm-css-vars
}

//
// Growing circle
//

// scss-docs-start spinner-grow-keyframes
@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
// scss-docs-end spinner-grow-keyframes

.spinner-grow {
  // scss-docs-start spinner-grow-css-vars
  --#{$prefix}spinner-width: #{$spinner-width};
  --#{$prefix}spinner-height: #{$spinner-height};
  --#{$prefix}spinner-vertical-align: #{$spinner-vertical-align};
  --#{$prefix}spinner-animation-speed: #{$spinner-animation-speed};
  --#{$prefix}spinner-animation-name: spinner-grow;
  // scss-docs-end spinner-grow-css-vars

  background-color: currentcolor;
  opacity: 0;
}

.spinner-grow-sm {
  --#{$prefix}spinner-width: #{$spinner-width-sm};
  --#{$prefix}spinner-height: #{$spinner-height-sm};
}

@if $enable-reduced-motion {
  @media (prefers-reduced-motion: reduce) {
    .spinner-border,
    .spinner-grow {
      --#{$prefix}spinner-animation-speed: #{$spinner-animation-speed * 2};
    }
  }
}
`,Gn=`.subheader {
  position: relative;
  display: flex;
  flex-wrap: wrap; // allow us to do the line break for collapsing content
  align-items: center;
  justify-content: space-between; // space out brand from logo
  min-height: $subheader-min-height;
  padding: $subheader-padding-y $subheader-padding-x;
  background: var(--#{$prefix}subheader-bg, $subheader-bg);
  border-bottom: var(--#{$prefix}subheader-border-width, $subheader-border-width) solid var(--#{$prefix}subheader-border-color, $subheader-border-color);
}

.subheader-sticky {
  position: sticky;
  top: 0;
  z-index: $zindex-fixed - 1;
  @include elevation(2);
}

// Subheader nav
//
// Custom navbar navigation (doesn't require \`.nav\`, but does make use of \`.nav-link\`).

.subheader-nav {
  display: flex;
  flex-direction: row; // cannot use \`inherit\` to get the \`.header\`s value
  @include ltr-rtl("padding-left", 0);
  margin-bottom: 0;
  list-style: none;

  .nav-link {
    padding-right: $subheader-nav-link-padding-x;
    padding-left: $subheader-nav-link-padding-x;
    color: var(--#{$prefix}subheader-color, $subheader-color);

    &:hover,
    &:focus {
      color: var(--#{$prefix}subheader-hover-color, $subheader-hover-color);
    }

    &.disabled {
      color: var(--#{$prefix}subheader-disabled-color, $subheader-disabled-color);
    }
  }

  .show > .nav-link,
  .nav-link.active {
    color: var(--#{$prefix}subheader-active-color, $subheader-active-color);
  }

  .dropdown-menu {
    position: absolute;
  }
}

// Subheader text
//
//

.subheader-text {
  padding-top: $nav-link-padding-y;
  padding-bottom: $nav-link-padding-y;
  color: var(--#{$prefix}subheader-color, $subheader-color);

  a {
    color: var(--#{$prefix}subheader-active-color, $subheader-active-color);

    &:hover,
    &:focus {
      color: var(--#{$prefix}subheader-active-color, $subheader-active-color);
    }
  }
}
`,Nn=`//
// Basic Bootstrap table
//

.table {
  --#{$prefix}table-color: #{$table-color};
  --#{$prefix}table-bg: #{$table-bg};
  --#{$prefix}table-border-color: #{$table-border-color};
  --#{$prefix}table-accent-bg: #{$table-accent-bg};
  --#{$prefix}table-striped-color: #{$table-striped-color};
  --#{$prefix}table-striped-bg: #{$table-striped-bg};
  --#{$prefix}table-active-color: #{$table-active-color};
  --#{$prefix}table-active-bg: #{$table-active-bg};
  --#{$prefix}table-hover-color: #{$table-hover-color};
  --#{$prefix}table-hover-bg: #{$table-hover-bg};

  width: 100%;
  margin-bottom: $spacer;
  color: var(--#{$prefix}table-color);
  vertical-align: $table-cell-vertical-align;
  border-color: var(--#{$prefix}table-border-color);

  // Target th & td
  // We need the child combinator to prevent styles leaking to nested tables which doesn't have a \`.table\` class.
  // We use the universal selectors here to simplify the selector (else we would need 6 different selectors).
  // Another advantage is that this generates less code and makes the selector less specific making it easier to override.
  // stylelint-disable-next-line selector-max-universal
  > :not(caption) > * > * {
    padding: $table-cell-padding-y $table-cell-padding-x;
    background-color: var(--#{$prefix}table-bg);
    border-bottom-width: $table-border-width;
    box-shadow: inset 0 0 0 9999px var(--#{$prefix}table-accent-bg);
  }

  > tbody {
    vertical-align: inherit;
  }

  > thead {
    vertical-align: bottom;
  }
}

.table-group-divider {
  border-top: ($table-border-width * 2) solid $table-group-separator-color;
}

//
// Change placement of captions with a class
//

.caption-top {
  caption-side: top;
}


//
// Condensed table w/ half padding
//

.table-sm {
  // stylelint-disable-next-line selector-max-universal
  > :not(caption) > * > * {
    padding: $table-cell-padding-y-sm $table-cell-padding-x-sm;
  }
}


// Border versions
//
// Add or remove borders all around the table and between all the columns.
//
// When borders are added on all sides of the cells, the corners can render odd when
// these borders do not have the same color or if they are semi-transparent.
// Therefor we add top and border bottoms to the \`tr\`s and left and right borders
// to the \`td\`s or \`th\`s

.table-bordered {
  > :not(caption) > * {
    border-width: $table-border-width 0;

    // stylelint-disable-next-line selector-max-universal
    > * {
      border-width: 0 $table-border-width;
    }
  }
}

.table-borderless {
  // stylelint-disable-next-line selector-max-universal
  > :not(caption) > * > * {
    border-bottom-width: 0;
  }

  > :not(:first-child) {
    border-top-width: 0;
  }
}

// Zebra-striping
//
// Default zebra-stripe styles (alternating gray and transparent backgrounds)

// For rows
.table-striped {
  > tbody > tr:nth-of-type(#{$table-striped-order}) > * {
    --#{$prefix}table-accent-bg: var(--#{$prefix}table-striped-bg);
    color: var(--#{$prefix}table-striped-color);
  }
}

// For columns
.table-striped-columns {
  > :not(caption) > tr > :nth-child(#{$table-striped-columns-order}) {
    --#{$prefix}table-accent-bg: var(--#{$prefix}table-striped-bg);
    color: var(--#{$prefix}table-striped-color);
  }
}

// Active table
//
// The \`.table-active\` class can be added to highlight rows or cells

.table-active {
  --#{$prefix}table-accent-bg: var(--#{$prefix}table-active-bg);
  color: var(--#{$prefix}table-active-color);
}

// Hover effect
//
// Placed here since it has to come after the potential zebra striping

.table-hover {
  > tbody > tr:hover > * {
    --#{$prefix}table-accent-bg: var(--#{$prefix}table-hover-bg);
    color: var(--#{$prefix}table-hover-color);
  }
}


// Table variants
//
// Table variants set the table cell backgrounds, border colors
// and the colors of the striped, hovered & active tables

// @each $color, $value in $table-variants {
//   @include table-variant($color, $value);
// }

@each $color, $value in $table-variants {
  @include table-variant($color, $value);
}

// Responsive tables
//
// Generate series of \`.table-responsive-*\` classes for configuring the screen
// size of where your table will overflow.

@each $breakpoint in map-keys($grid-breakpoints) {
  $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

  @include media-breakpoint-down($breakpoint) {
    .table-responsive#{$infix} {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
}
`,Wn=`.time-picker {
  // scss-docs-start time-picker-css-vars
  --#{$prefix}time-picker-body-padding: #{$time-picker-body-padding};
  --#{$prefix}time-picker-roll-col-border: #{$time-picker-roll-col-border-width} solid #{$time-picker-roll-col-border-color};
  // scss-docs-end time-picker-css-vars

  &.is-invalid  {
    .form-control {
      --#{$prefix}input-border-color: #{$form-feedback-invalid-color};
    }

    .input-group-text {
      --#{$prefix}input-group-addon-border-color: #{$form-feedback-invalid-color};
    }

    .picker-input-group-indicator {
      --#{$prefix}input-group-addon-color: #{$form-feedback-invalid-color};
    }

    .time-picker-input-icon {
      background-image: escape-svg($time-picker-invalid-icon);
    }
  }

  &.is-valid  {
    .form-control {
      --#{$prefix}input-border-color: #{$form-feedback-valid-color};
    }

    .input-group-text {
      --#{$prefix}input-group-addon-border-color: #{$form-feedback-valid-color};
    }

    .picker-input-group-indicator {
      --#{$prefix}input-group-addon-color: #{$form-feedback-valid-color};
    }

    .time-picker-input-icon {
      background-image: escape-svg($time-picker-valid-icon);
    }
  }
}

.time-picker-body {
  display: flex;
  align-items: center;
  padding: var(--#{$prefix}time-picker-body-padding);

  .form-select {
    padding-right: 1.25rem;
    background-position: right .5rem center;

    + .form-select {
      margin-left: $spacer * .5;
    }

    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
      width: 10px;
    }
  }

  .time-picker-inline-icon {
    display: block;
    width: 40px;
    height: 1.25rem;
    background-image: escape-svg($time-picker-default-icon);
    background-repeat: no-repeat;
    background-position: center;
  }
}

.time-picker-cleaner-icon {
  background-image: escape-svg($time-picker-cleaner-icon);

  &:hover {
    background-image: escape-svg($time-picker-cleaner-icon-hover);
  }
}

.time-picker-input-icon {
  background-image: escape-svg($time-picker-default-icon);
}

.time-picker-roll {
  padding: 0;
  overflow: hidden;
  border-radius: inherit; // stylelint-disable-line
}

.time-picker-roll-col {
  height: calc(8 * 32px); // stylelint-disable-line
  overflow: scroll;
  border-right: var(--#{$prefix}time-picker-roll-col-border);

  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */

  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
}

.time-picker-roll-cell {
  width: 50px;
  height: 32px;
  padding: 0 $spacer 0 $spacer * .5;
  line-height: 32px;

  &.selected {
    color: var(--cui-white);
    background: var(--cui-primary);
  }

  &:last-child::after {
    display: block;
    height: calc(7 * 32px); // stylelint-disable-line
    content: "";
  }
}
`,Zn=`.toast {
  // scss-docs-start toast-css-vars
  --#{$prefix}toast-zindex: #{$zindex-toast};
  --#{$prefix}toast-padding-x: #{$toast-padding-x};
  --#{$prefix}toast-padding-y: #{$toast-padding-y};
  --#{$prefix}toast-spacing: #{$toast-spacing};
  --#{$prefix}toast-max-width: #{$toast-max-width};
  @include rfs($toast-font-size, --#{$prefix}toast-font-size);
  --#{$prefix}toast-color: #{$toast-color};
  --#{$prefix}toast-bg: #{$toast-background-color};
  --#{$prefix}toast-border-width: #{$toast-border-width};
  --#{$prefix}toast-border-color: #{$toast-border-color};
  --#{$prefix}toast-border-radius: #{$toast-border-radius};
  --#{$prefix}toast-box-shadow: #{$toast-box-shadow};
  --#{$prefix}toast-header-color: #{$toast-header-color};
  --#{$prefix}toast-header-bg: #{$toast-header-background-color};
  --#{$prefix}toast-header-border-color: #{$toast-header-border-color};
  // scss-docs-end toast-css-vars

  width: var(--#{$prefix}toast-max-width);
  max-width: 100%;
  @include font-size(var(--#{$prefix}toast-font-size));
  color: var(--#{$prefix}toast-color);
  pointer-events: auto;
  background-color: var(--#{$prefix}toast-bg);
  background-clip: padding-box;
  border: var(--#{$prefix}toast-border-width) solid var(--#{$prefix}toast-border-color);
  box-shadow: var(--#{$prefix}toast-box-shadow);
  @include border-radius(var(--#{$prefix}toast-border-radius));

  &.showing {
    opacity: 0;
  }

  &:not(.show) {
    display: none;
  }
}

.toast-container {
  --#{$prefix}toast-zindex: #{$zindex-toast};

  position: absolute;
  z-index: var(--#{$prefix}toast-zindex);
  width: max-content;
  max-width: 100%;
  pointer-events: none;

  > :not(:last-child) {
    margin-bottom: var(--#{$prefix}toast-spacing);
  }
}

.toast-header {
  display: flex;
  align-items: center;
  padding: var(--#{$prefix}toast-padding-y) var(--#{$prefix}toast-padding-x);
  color: var(--#{$prefix}toast-header-color);
  background-color: var(--#{$prefix}toast-header-bg);
  background-clip: padding-box;
  border-bottom: var(--#{$prefix}toast-border-width) solid var(--#{$prefix}toast-header-border-color);
  @include border-top-radius(calc(var(--#{$prefix}toast-border-radius) - var(--#{$prefix}toast-border-width)));

  .btn-close {
    @include ltr-rtl("margin-right", calc(-.5 * var(--#{$prefix}toast-padding-x)));
    @include ltr-rtl("margin-left", var(--#{$prefix}toast-padding-x));
  }
}

.toast-body {
  padding: var(--#{$prefix}toast-padding-x);
  word-wrap: break-word;
}
`,Jn=`// Base class
.tooltip {
  // scss-docs-start tooltip-css-vars
  --#{$prefix}tooltip-zindex: #{$zindex-tooltip};
  --#{$prefix}tooltip-max-width: #{$tooltip-max-width};
  --#{$prefix}tooltip-padding-x: #{$tooltip-padding-x};
  --#{$prefix}tooltip-padding-y: #{$tooltip-padding-y};
  --#{$prefix}tooltip-margin: #{$tooltip-margin};
  @include rfs($tooltip-font-size, --#{$prefix}tooltip-font-size);
  --#{$prefix}tooltip-color: #{$tooltip-color};
  --#{$prefix}tooltip-bg: #{$tooltip-bg};
  --#{$prefix}tooltip-border-radius: #{$tooltip-border-radius};
  --#{$prefix}tooltip-opacity: #{$tooltip-opacity};
  --#{$prefix}tooltip-arrow-width: #{$tooltip-arrow-width};
  --#{$prefix}tooltip-arrow-height: #{$tooltip-arrow-height};
  // scss-docs-end tooltip-css-vars

  z-index: var(--#{$prefix}tooltip-zindex);
  display: block;
  padding: var(--#{$prefix}tooltip-arrow-height);
  margin: var(--#{$prefix}tooltip-margin);
  @include deprecate("\`$tooltip-margin\`", "v5", "v5.x", true);
  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.
  // So reset our font and text properties to avoid inheriting weird values.
  @include reset-text();
  @include font-size(var(--#{$prefix}tooltip-font-size));
  // Allow breaking very long words so they don't overflow the tooltip's bounds
  word-wrap: break-word;
  opacity: 0;

  &.show { opacity: var(--#{$prefix}tooltip-opacity); }

  .tooltip-arrow {
    display: block;
    width: var(--#{$prefix}tooltip-arrow-width);
    height: var(--#{$prefix}tooltip-arrow-height);

    &::before {
      position: absolute;
      content: "";
      border-color: transparent;
      border-style: solid;
    }
  }
}

.bs-tooltip-top .tooltip-arrow {
  bottom: 0;

  &::before {
    top: -1px;
    border-width: var(--#{$prefix}tooltip-arrow-height) calc(var(--#{$prefix}tooltip-arrow-width) * .5) 0; // stylelint-disable-line function-disallowed-list
    border-top-color: var(--#{$prefix}tooltip-bg);
  }
}

/* rtl:begin:ignore */
.bs-tooltip-end .tooltip-arrow {
  left: 0;
  width: var(--#{$prefix}tooltip-arrow-height);
  height: var(--#{$prefix}tooltip-arrow-width);

  &::before {
    right: -1px;
    border-width: calc(var(--#{$prefix}tooltip-arrow-width) * .5) var(--#{$prefix}tooltip-arrow-height) calc(var(--#{$prefix}tooltip-arrow-width) * .5) 0; // stylelint-disable-line function-disallowed-list
    border-right-color: var(--#{$prefix}tooltip-bg);
  }
}

/* rtl:end:ignore */

.bs-tooltip-bottom .tooltip-arrow {
  top: 0;

  &::before {
    bottom: -1px;
    border-width: 0 calc(var(--#{$prefix}tooltip-arrow-width) * .5) var(--#{$prefix}tooltip-arrow-height); // stylelint-disable-line function-disallowed-list
    border-bottom-color: var(--#{$prefix}tooltip-bg);
  }
}

/* rtl:begin:ignore */
.bs-tooltip-start .tooltip-arrow {
  right: 0;
  width: var(--#{$prefix}tooltip-arrow-height);
  height: var(--#{$prefix}tooltip-arrow-width);

  &::before {
    left: -1px;
    border-width: calc(var(--#{$prefix}tooltip-arrow-width) * .5) 0 calc(var(--#{$prefix}tooltip-arrow-width) * .5) var(--#{$prefix}tooltip-arrow-height); // stylelint-disable-line function-disallowed-list
    border-left-color: var(--#{$prefix}tooltip-bg);
  }
}

/* rtl:end:ignore */

.bs-tooltip-auto {
  &[data-popper-placement^="top"] {
    @extend .bs-tooltip-top;
  }
  &[data-popper-placement^="right"] {
    @extend .bs-tooltip-end;
  }
  &[data-popper-placement^="bottom"] {
    @extend .bs-tooltip-bottom;
  }
  &[data-popper-placement^="left"] {
    @extend .bs-tooltip-start;
  }
}

// Wrapper for the tooltip content
.tooltip-inner {
  max-width: var(--#{$prefix}tooltip-max-width);
  padding: var(--#{$prefix}tooltip-padding-y) var(--#{$prefix}tooltip-padding-x);
  color: var(--#{$prefix}tooltip-color);
  text-align: center;
  background-color: var(--#{$prefix}tooltip-bg);
  border-radius: var(--#{$prefix}tooltip-border-radius, 0); // stylelint-disable-line property-disallowed-list
}
`,Xn=`.fade {
  @include transition($transition-fade);

  &:not(.show) {
    opacity: 0;
  }
}

// scss-docs-start collapse-classes
.collapse {
  &:not(.show) {
    display: none;
  }
}

.collapsing {
  height: 0;
  overflow: hidden;
  @include transition($transition-collapse);

  &.collapse-horizontal {
    width: 0;
    height: auto;
    @include transition($transition-collapse-width);
  }
}
// scss-docs-end collapse-classes
`,Yn=`//
// Headings
//
.h1 {
  @extend h1;
}

.h2 {
  @extend h2;
}

.h3 {
  @extend h3;
}

.h4 {
  @extend h4;
}

.h5 {
  @extend h5;
}

.h6 {
  @extend h6;
}


.lead {
  @include font-size($lead-font-size);
  font-weight: $lead-font-weight;
}

// Type display classes
@each $display, $font-size in $display-font-sizes {
  .display-#{$display} {
    @include font-size($font-size);
    font-weight: $display-font-weight;
    line-height: $display-line-height;
  }
}

//
// Emphasis
//
.small {
  @extend small;
}

.mark {
  @extend mark;
}

//
// Lists
//

.list-unstyled {
  @include list-unstyled();
}

// Inline turns list items into inline-block
.list-inline {
  @include list-unstyled();
}
.list-inline-item {
  display: inline-block;

  &:not(:last-child) {
    @include ltr-rtl("margin-right", $list-inline-padding);
  }
}


//
// Misc
//

// Builds on \`abbr\`
.initialism {
  @include font-size($initialism-font-size);
  text-transform: uppercase;
}

// Blockquotes
.blockquote {
  margin-bottom: $blockquote-margin-y;
  @include font-size($blockquote-font-size);

  > :last-child {
    margin-bottom: 0;
  }
}

.blockquote-footer {
  margin-top: -$blockquote-margin-y;
  margin-bottom: $blockquote-margin-y;
  @include font-size($blockquote-footer-font-size);
  color: $blockquote-footer-color;

  &::before {
    content: "\\2014\\00A0"; // em dash, nbsp
  }
}
`,Kn=`// Utilities

$utilities: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$utilities: map-merge(
  (
    // scss-docs-start utils-vertical-align
    "align": (
      property: vertical-align,
      class: align,
      values: baseline top middle bottom text-bottom text-top
    ),
    // scss-docs-end utils-vertical-align
    // scss-docs-start utils-float
    "float": (
      responsive: true,
      property: float,
      values: (
        start: left,
        end: right,
        none: none,
      ),
      rtl: true
    ),
    // scss-docs-end utils-float
    // Opacity utilities
    // scss-docs-start utils-opacity
    "opacity": (
      property: opacity,
      values: (
        0: 0,
        25: .25,
        50: .5,
        75: .75,
        100: 1,
      )
    ),
    // scss-docs-end utils-opacity
    // scss-docs-start utils-overflow
    "overflow": (
      property: overflow,
      values: auto hidden visible scroll,
    ),
    // scss-docs-end utils-overflow
    // scss-docs-start utils-display
    "display": (
      responsive: true,
      print: true,
      property: display,
      class: d,
      values: inline inline-block block grid table table-row table-cell flex inline-flex none
    ),
    // scss-docs-end utils-display
    // scss-docs-start utils-shadow
    "shadow": (
      property: box-shadow,
      class: shadow,
      values: (
        null: $box-shadow,
        sm: $box-shadow-sm,
        lg: $box-shadow-lg,
        none: none,
      )
    ),
    // scss-docs-end utils-shadow
    "elevation": (
      property: box-shadow,
      class: elevation,
      values: $elevations
    ),
    // scss-docs-start utils-position
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
      property: left,
      class: start,
      values: $position-values
    ),
    "end": (
      property: right,
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
    // scss-docs-end utils-position
    // scss-docs-start utils-borders
    "border": (
      property: border,
      values: (
        null: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),
        0: 0,
      ),
    ),
    "border-top": (
      property: border-top,
      values: (
        null: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),
        0: 0,
      )
    ),
    "border-end": (
      property: border-right,
      class: border-end,
      values: (
        null: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),
        0: 0,
      ),
      rtl: true
    ),
    "border-bottom": (
      property: border-bottom,
      values: (
        null: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),
        0: 0,
      )
    ),
    "border-start": (
      property: border-left,
      class: border-start,
      values: (
        null: var(--#{$prefix}border-width) var(--#{$prefix}border-style) var(--#{$prefix}border-color),
        0: 0,
      ),
      rtl: true
    ),
    "border-color": (
      property: border-color,
      class: border,
      local-vars: (
        "border-opacity": 1
      ),
      values: $utilities-border-colors
    ),
    "border-top-color": (
      property: border-top-color,
      class: border-top,
      values: map-merge($theme-colors, ("white": $white)),
      vars: true
    ),
    "border-end-color": (
      property: border-right-color,
      class: border-end,
      values: map-merge($theme-colors, ("white": $white)),
      vars: true,
      rtl: true
    ),
    "border-bottom-color": (
      property: border-bottom-color,
      class: border-bottom,
      values: map-merge($theme-colors, ("white": $white)),
      vars: true
    ),
    "border-start-color": (
      property: border-left-color,
      class: border-start,
      values: map-merge($theme-colors, ("white": $white)),
      vars: true,
      rtl: true
    ),
    "border-width": (
      css-var: true,
      css-variable-name: border-width,
      class: border,
      values: $border-widths
    ),
    "border-top-width": (
      property: border-top-width,
      class: border-top,
      values: $border-widths
    ),
    "border-end-width": (
      property: border-right-width,
      class: border-end,
      values: $border-widths,
      rtl: true
    ),
    "border-bottom-width": (
      property: border-bottom-width,
      class: border-bottom,
      values: $border-widths
    ),
    "border-start-width": (
      property: border-left-width,
      class: border-start,
      values: $border-widths,
      rtl: true
    ),
    "border-opacity": (
      css-var: true,
      class: border-opacity,
      values: (
        10: .1,
        25: .25,
        50: .5,
        75: .75,
        100: 1
      )
    ),
    // scss-docs-end utils-borders
    // Sizing utilities
    // scss-docs-start utils-sizing
    "width": (
      property: width,
      class: w,
      values: (
        25: 25%,
        50: 50%,
        75: 75%,
        100: 100%,
        auto: auto
      )
    ),
    "max-width": (
      property: max-width,
      class: mw,
      values: (100: 100%)
    ),
    "viewport-width": (
      property: width,
      class: vw,
      values: (100: 100vw)
    ),
    "min-viewport-width": (
      property: min-width,
      class: min-vw,
      values: (100: 100vw)
    ),
    "height": (
      property: height,
      class: h,
      values: (
        25: 25%,
        50: 50%,
        75: 75%,
        100: 100%,
        auto: auto
      )
    ),
    "max-height": (
      property: max-height,
      class: mh,
      values: (100: 100%)
    ),
    "viewport-height": (
      property: height,
      class: vh,
      values: (100: 100vh)
    ),
    "min-viewport-height": (
      property: min-height,
      class: min-vh,
      values: (100: 100vh)
    ),
    // scss-docs-end utils-sizing
    // Flex utilities
    // scss-docs-start utils-flex
    "flex": (
      responsive: true,
      property: flex,
      values: (fill: 1 1 auto)
    ),
    "flex-direction": (
      responsive: true,
      property: flex-direction,
      class: flex,
      values: row column row-reverse column-reverse
    ),
    "flex-grow": (
      responsive: true,
      property: flex-grow,
      class: flex,
      values: (
        grow-0: 0,
        grow-1: 1,
      )
    ),
    "flex-shrink": (
      responsive: true,
      property: flex-shrink,
      class: flex,
      values: (
        shrink-0: 0,
        shrink-1: 1,
      )
    ),
    "flex-wrap": (
      responsive: true,
      property: flex-wrap,
      class: flex,
      values: wrap nowrap wrap-reverse
    ),
    "justify-content": (
      responsive: true,
      property: justify-content,
      values: (
        start: flex-start,
        end: flex-end,
        center: center,
        between: space-between,
        around: space-around,
        evenly: space-evenly,
      )
    ),
    "align-items": (
      responsive: true,
      property: align-items,
      values: (
        start: flex-start,
        end: flex-end,
        center: center,
        baseline: baseline,
        stretch: stretch,
      )
    ),
    "align-content": (
      responsive: true,
      property: align-content,
      values: (
        start: flex-start,
        end: flex-end,
        center: center,
        between: space-between,
        around: space-around,
        stretch: stretch,
      )
    ),
    "align-self": (
      responsive: true,
      property: align-self,
      values: (
        auto: auto,
        start: flex-start,
        end: flex-end,
        center: center,
        baseline: baseline,
        stretch: stretch,
      )
    ),
    "order": (
      responsive: true,
      property: order,
      values: (
        first: -1,
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        last: 6,
      ),
    ),
    // scss-docs-end utils-flex
    // Margin utilities
    // scss-docs-start utils-spacing
    "margin": (
      responsive: true,
      property: margin,
      class: m,
      values: map-merge($spacers, (auto: auto)),
    ),
    "margin-x": (
      responsive: true,
      property: margin-right margin-left,
      class: mx,
      values: map-merge($spacers, (auto: auto))
    ),
    "margin-y": (
      responsive: true,
      property: margin-top margin-bottom,
      class: my,
      values: map-merge($spacers, (auto: auto))
    ),
    "margin-top": (
      responsive: true,
      property: margin-top,
      class: mt,
      values: map-merge($spacers, (auto: auto))
    ),
    "margin-end": (
      responsive: true,
      property: margin-right,
      class: me,
      values: map-merge($spacers, (auto: auto)),
      rtl: true
    ),
    "margin-bottom": (
      responsive: true,
      property: margin-bottom,
      class: mb,
      values: map-merge($spacers, (auto: auto))
    ),
    "margin-start": (
      responsive: true,
      property: margin-left,
      class: ms,
      values: map-merge($spacers, (auto: auto)),
      rtl: true
    ),
    // Negative margin utilities
    "negative-margin": (
      responsive: true,
      property: margin,
      class: m,
      values: $negative-spacers
    ),
    "negative-margin-x": (
      responsive: true,
      property: margin-right margin-left,
      class: mx,
      values: $negative-spacers
    ),
    "negative-margin-y": (
      responsive: true,
      property: margin-top margin-bottom,
      class: my,
      values: $negative-spacers
    ),
    "negative-margin-top": (
      responsive: true,
      property: margin-top,
      class: mt,
      values: $negative-spacers
    ),
    "negative-margin-end": (
      responsive: true,
      property: margin-right,
      class: me,
      values: $negative-spacers,
      rtl: true
    ),
    "negative-margin-bottom": (
      responsive: true,
      property: margin-bottom,
      class: mb,
      values: $negative-spacers
    ),
    "negative-margin-start": (
      responsive: true,
      property: margin-left,
      class: ms,
      values: $negative-spacers,
      rtl: true
    ),
    // Padding utilities
    "padding": (
      responsive: true,
      property: padding,
      class: p,
      values: $spacers
    ),
    "padding-x": (
      responsive: true,
      property: padding-right padding-left,
      class: px,
      values: $spacers
    ),
    "padding-y": (
      responsive: true,
      property: padding-top padding-bottom,
      class: py,
      values: $spacers
    ),
    "padding-top": (
      responsive: true,
      property: padding-top,
      class: pt,
      values: $spacers
    ),
    "padding-end": (
      responsive: true,
      property: padding-right,
      class: pe,
      values: $spacers,
      rtl: true
    ),
    "padding-bottom": (
      responsive: true,
      property: padding-bottom,
      class: pb,
      values: $spacers
    ),
    "padding-start": (
      responsive: true,
      property: padding-left,
      class: ps,
      values: $spacers,
      rtl: true
    ),
    // Gap utility
    "gap": (
      responsive: true,
      property: gap,
      class: gap,
      values: $spacers
    ),
    // scss-docs-end utils-spacing
    // Text
    // scss-docs-start utils-text
    "font-family": (
      property: font-family,
      class: font,
      values: (monospace: var(--#{$prefix}font-monospace))
    ),
    "font-size": (
      rfs: true,
      property: font-size,
      class: fs,
      values: $font-sizes
    ),
    "font-style": (
      property: font-style,
      class: fst,
      values: italic normal
    ),
    "font-weight": (
      property: font-weight,
      class: fw,
      values: (
        light: $font-weight-light,
        lighter: $font-weight-lighter,
        normal: $font-weight-normal,
        medium: $font-weight-medium,
        semibold: $font-weight-semibold,
        bold: $font-weight-bold,
        bolder: $font-weight-bolder
      )
    ),
    "line-height": (
      property: line-height,
      class: lh,
      values: (
        1: 1,
        sm: $line-height-sm,
        base: $line-height-base,
        lg: $line-height-lg,
      )
    ),
    "text-align": (
      responsive: true,
      property: text-align,
      class: text,
      values: (
        start: left,
        end: right,
        center: center,
      ),
      rtl: true
    ),
    "text-decoration": (
      property: text-decoration,
      values: none underline line-through
    ),
    "text-transform": (
      property: text-transform,
      class: text,
      values: lowercase uppercase capitalize
    ),
    "white-space": (
      property: white-space,
      class: text,
      values: (
        wrap: normal,
        nowrap: nowrap,
      )
    ),
    "word-wrap": (
      property: word-wrap word-break,
      class: text,
      values: (break: break-word),
      rtl: false
    ),
    // scss-docs-end utils-text
    // scss-docs-start utils-color
    "color": (
      property: color,
      class: text,
      local-vars: (
        "text-opacity": 1
      ),
      values: map-merge(
        $utilities-text-colors,
        (
          "muted": $text-muted,
          "black-50": rgba($black, .5), // deprecated
          "white-50": rgba($white, .5), // deprecated
          "reset": inherit,
          "high-emphasis-inverse": $text-high-emphasis-inverse,
          "medium-emphasis-inverse": $text-medium-emphasis-inverse,
          "disabled-inverse": $text-disabled-inverse,
          "high-emphasis": $text-high-emphasis,
          "medium-emphasis": $text-medium-emphasis,
          "disabled": $text-disabled
        )
      ),
      vars: true
    ),
    "text-opacity": (
      css-var: true,
      class: text-opacity,
      values: (
        25: .25,
        50: .5,
        75: .75,
        100: 1
      )
    ),
    // scss-docs-end utils-color
    // scss-docs-start utils-bg-color
    "background-color": (
      property: background-color,
      class: bg,
      local-vars: (
        "bg-opacity": 1
      ),
      values: map-merge(
        $utilities-bg-colors,
        (
          "transparent": transparent
        )
      ),
      vars: true
    ),
    "bg-opacity": (
      css-var: true,
      class: bg-opacity,
      values: (
        10: .1,
        15: .15,
        25: .25,
        50: .5,
        75: .75,
        100: 1
      )
    ),
    // scss-docs-end utils-bg-color
    "gradient": (
      property: background-image,
      class: bg,
      values: (gradient: var(--#{$prefix}gradient))
    ),
    // scss-docs-start utils-interaction
    "user-select": (
      property: user-select,
      values: all auto none
    ),
    "pointer-events": (
      property: pointer-events,
      class: pe,
      values: none auto,
    ),
    // scss-docs-end utils-interaction
    // scss-docs-start utils-border-radius
    "rounded": (
      property: border-radius,
      class: rounded,
      values: (
        null: var(--#{$prefix}border-radius),
        0: 0,
        1: var(--#{$prefix}border-radius-sm),
        2: var(--#{$prefix}border-radius),
        3: var(--#{$prefix}border-radius-lg),
        4: var(--#{$prefix}border-radius-xl),
        5: var(--#{$prefix}border-radius-2xl),
        circle: 50%,
        pill: var(--#{$prefix}border-radius-pill)
      )
    ),
    "rounded-top": (
      property: border-top-left-radius border-top-right-radius,
      class: rounded-top,
      values: (null: var(--#{$prefix}border-radius))
    ),
    "rounded-end": (
      property: border-top-right-radius border-bottom-right-radius,
      class: rounded-end,
      values: (null: var(--#{$prefix}border-radius)),
      rtl: true
    ),
    "rounded-bottom": (
      property: border-bottom-right-radius border-bottom-left-radius,
      class: rounded-bottom,
      values: (null: var(--#{$prefix}border-radius))
    ),
    "rounded-start": (
      property: border-bottom-left-radius border-top-left-radius,
      class: rounded-start,
      values: (null: var(--#{$prefix}border-radius)),
      rtl: true
    ),
    // scss-docs-end utils-border-radius
    // scss-docs-start utils-visibility
    "visibility": (
      property: visibility,
      class: null,
      values: (
        visible: visible,
        invisible: hidden,
      )
    )
    // scss-docs-end utils-visibility
  ),
  $utilities
);
`,Qn=`// Variables
//
// Variables should follow the \`$component-state-property-size\` formula for
// consistent naming. Ex: $nav-link-disabled-color and $modal-content-box-shadow-xs.

// Color system

// scss-docs-start gray-color-variables
$white:     #fff !default;
$gray-base: #3c4b64 !default;
$gray-100:  #ebedef !default;
$gray-200:  #d8dbe0 !default;
$gray-300:  #c4c9d0 !default;
$gray-400:  #b1b7c1 !default;
$gray-500:  #9da5b1 !default;
$gray-600:  #8a93a2 !default;
$gray-700:  #768192 !default;
$gray-800:  #636f83 !default;
$gray-900:  #4f5d73 !default;
$black:     #000015 !default;
// scss-docs-end gray-color-variables

// fusv-disable
// scss-docs-start gray-colors-map
$grays: (
  "100": $gray-100,
  "200": $gray-200,
  "300": $gray-300,
  "400": $gray-400,
  "500": $gray-500,
  "600": $gray-600,
  "700": $gray-700,
  "800": $gray-800,
  "900": $gray-900
) !default;
// scss-docs-end gray-colors-map
// fusv-enable

$high-emphasis:            rgba(shift-color($gray-base, +26%), .95) !default;
$medium-emphasis:          rgba(shift-color($gray-base, +26%), .681) !default;
$disabled:                 rgba(shift-color($gray-base, +26%), .38) !default;

$high-emphasis-inverse:    rgba($white, .87) !default;
$medium-emphasis-inverse:  rgba($white, .6) !default;
$disabled-inverse:         rgba($white, .38) !default;

// scss-docs-start color-variables
$blue:    #0d6efd !default;
$indigo:  #6610f2 !default;
$purple:  #6f42c1 !default;
$pink:    #d63384 !default;
$red:     #dc3545 !default;
$orange:  #fd7e14 !default;
$yellow:  #ffc107 !default;
$green:   #198754 !default;
$teal:    #20c997 !default;
$cyan:    #0dcaf0 !default;
// scss-docs-end color-variables

// scss-docs-start colors-map
$colors: (
  "blue":       $blue,
  "indigo":     $indigo,
  "purple":     $purple,
  "pink":       $pink,
  "red":        $red,
  "orange":     $orange,
  "yellow":     $yellow,
  "green":      $green,
  "teal":       $teal,
  "cyan":       $cyan,
  "black":      $black,
  "white":      $white,
  "gray":       $gray-600,
  "gray-dark":  $gray-800
) !default;
// scss-docs-end colors-map

// fusv-disable
$primary-dark:  #1f1498 !default;
$primary-base:  #321fdb !default;
$primary-50:    #988fed !default;
$primary-25:    #ccc7f6 !default;

$secondary-dark:  #212233 !default;
$secondary-base:  #9da5b1 !default;
$secondary-50:    #9da5b1 !default;
$secondary-25:    #ced2d8 !default;

$success-dark:  #1b9e3e !default;
$success-base:  #2eb85c !default;
$success-50:    #96dbad !default;
$success-25:    #cbedd6 !default;

$info-dark:  #2982cc !default;
$info-base:  #39f !default;
$info-50:    #80c6ff !default;
$info-25:    #c0e6ff !default;

$warning-dark:  #f6960b !default;
$warning-base:  #f9b115 !default;
$warning-50:    #fcd88a !default;
$warning-25:    #feecc5 !default;

$danger-dark:  #d93737 !default;
$danger-base:  #e55353 !default;
$danger-50:    #f2a9a9 !default;
$danger-25:    #f9d4d4 !default;

$light-dark:     $gray-100 !default;
$light-base:     $gray-100 !default;
$light-50:       shift-color($light-base, -70%) !default;
$light-25:       shift-color($light-base, -80%) !default;

$dark-dark:      $gray-900 !default;
$dark-base:      $gray-900 !default;
$dark-50:        shift-color($dark-base, -70%) !default;
$dark-25:        shift-color($dark-base, -80%) !default;
// fusv-enable

// scss-docs-start theme-color-variables
$primary:       $primary-base !default;
$secondary:     $secondary-base !default;
$success:       $success-base !default;
$info:          $info-base !default;
$warning:       $warning-base !default;
$danger:        $danger-base !default;
$light:         $light-base !default;
$dark:          $dark-base !default;
// scss-docs-end theme-color-variables

// scss-docs-start theme-colors-map
$theme-colors: (
  "primary":    $primary,
  "secondary":  $secondary,
  "success":    $success,
  "info":       $info,
  "warning":    $warning,
  "danger":     $danger,
  "light":      $light,
  "dark":       $dark
) !default;
// scss-docs-end theme-colors-map

// Gradients

// scss-docs-start theme-gradients
$primary-gradient: (
  "start":  #321fdb,
  "stop":   #1f1498
) !default;

$secondary-gradient: (
  "start":  #c8d2dc,
  "stop":    $white
) !default;

$light-gradient: (
  "start":  #e3e8ed,
  "stop":    $white
) !default;

$dark-gradient: (
  "start":  #3c4b64,
  "stop":   #212333
) !default;

$danger-gradient: (
  "start":  #e55353,
  "stop":   #d93737
) !default;

$warning-gradient: (
  "start":  #f9b115,
  "stop":   #f6960b
) !default;

$success-gradient: (
  "start":  #2eb85c,
  "stop":   #1b9e3e
) !default;

$info-gradient: (
  "start":  #39f,
  "stop":   #2982cc
) !default;

$theme-gradients: (
  "primary":    $primary-gradient,
  "secondary":  $secondary-gradient,
  "success":    $success-gradient,
  "info":       $info-gradient,
  "warning":    $warning-gradient,
  "danger":     $danger-gradient,
  "light":      $light-gradient,
  "dark":       $dark-gradient
) !default;
// scss-docs-end theme-gradients

// scss-docs-start theme-colors-rgb
$theme-colors-rgb: map-loop($theme-colors, to-rgb, "$value") !default;
// scss-docs-end theme-colors-rgb

// The contrast ratio to reach against white, to determine if color changes from "light" to "dark". Acceptable values for WCAG 2.0 are 3, 4.5 and 7.
// See https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast
$min-contrast-ratio:   4.5 !default;

// Customize the light and dark text colors for use in our color contrast function.
$color-contrast-dark:      $high-emphasis-inverse !default;
$color-contrast-light:     $high-emphasis !default;

// fusv-disable
$blue-100: tint-color($blue, 80%) !default;
$blue-200: tint-color($blue, 60%) !default;
$blue-300: tint-color($blue, 40%) !default;
$blue-400: tint-color($blue, 20%) !default;
$blue-500: $blue !default;
$blue-600: shade-color($blue, 20%) !default;
$blue-700: shade-color($blue, 40%) !default;
$blue-800: shade-color($blue, 60%) !default;
$blue-900: shade-color($blue, 80%) !default;

$indigo-100: tint-color($indigo, 80%) !default;
$indigo-200: tint-color($indigo, 60%) !default;
$indigo-300: tint-color($indigo, 40%) !default;
$indigo-400: tint-color($indigo, 20%) !default;
$indigo-500: $indigo !default;
$indigo-600: shade-color($indigo, 20%) !default;
$indigo-700: shade-color($indigo, 40%) !default;
$indigo-800: shade-color($indigo, 60%) !default;
$indigo-900: shade-color($indigo, 80%) !default;

$purple-100: tint-color($purple, 80%) !default;
$purple-200: tint-color($purple, 60%) !default;
$purple-300: tint-color($purple, 40%) !default;
$purple-400: tint-color($purple, 20%) !default;
$purple-500: $purple !default;
$purple-600: shade-color($purple, 20%) !default;
$purple-700: shade-color($purple, 40%) !default;
$purple-800: shade-color($purple, 60%) !default;
$purple-900: shade-color($purple, 80%) !default;

$pink-100: tint-color($pink, 80%) !default;
$pink-200: tint-color($pink, 60%) !default;
$pink-300: tint-color($pink, 40%) !default;
$pink-400: tint-color($pink, 20%) !default;
$pink-500: $pink !default;
$pink-600: shade-color($pink, 20%) !default;
$pink-700: shade-color($pink, 40%) !default;
$pink-800: shade-color($pink, 60%) !default;
$pink-900: shade-color($pink, 80%) !default;

$red-100: tint-color($red, 80%) !default;
$red-200: tint-color($red, 60%) !default;
$red-300: tint-color($red, 40%) !default;
$red-400: tint-color($red, 20%) !default;
$red-500: $red !default;
$red-600: shade-color($red, 20%) !default;
$red-700: shade-color($red, 40%) !default;
$red-800: shade-color($red, 60%) !default;
$red-900: shade-color($red, 80%) !default;

$orange-100: tint-color($orange, 80%) !default;
$orange-200: tint-color($orange, 60%) !default;
$orange-300: tint-color($orange, 40%) !default;
$orange-400: tint-color($orange, 20%) !default;
$orange-500: $orange !default;
$orange-600: shade-color($orange, 20%) !default;
$orange-700: shade-color($orange, 40%) !default;
$orange-800: shade-color($orange, 60%) !default;
$orange-900: shade-color($orange, 80%) !default;

$yellow-100: tint-color($yellow, 80%) !default;
$yellow-200: tint-color($yellow, 60%) !default;
$yellow-300: tint-color($yellow, 40%) !default;
$yellow-400: tint-color($yellow, 20%) !default;
$yellow-500: $yellow !default;
$yellow-600: shade-color($yellow, 20%) !default;
$yellow-700: shade-color($yellow, 40%) !default;
$yellow-800: shade-color($yellow, 60%) !default;
$yellow-900: shade-color($yellow, 80%) !default;

$green-100: tint-color($green, 80%) !default;
$green-200: tint-color($green, 60%) !default;
$green-300: tint-color($green, 40%) !default;
$green-400: tint-color($green, 20%) !default;
$green-500: $green !default;
$green-600: shade-color($green, 20%) !default;
$green-700: shade-color($green, 40%) !default;
$green-800: shade-color($green, 60%) !default;
$green-900: shade-color($green, 80%) !default;

$teal-100: tint-color($teal, 80%) !default;
$teal-200: tint-color($teal, 60%) !default;
$teal-300: tint-color($teal, 40%) !default;
$teal-400: tint-color($teal, 20%) !default;
$teal-500: $teal !default;
$teal-600: shade-color($teal, 20%) !default;
$teal-700: shade-color($teal, 40%) !default;
$teal-800: shade-color($teal, 60%) !default;
$teal-900: shade-color($teal, 80%) !default;

$cyan-100: tint-color($cyan, 80%) !default;
$cyan-200: tint-color($cyan, 60%) !default;
$cyan-300: tint-color($cyan, 40%) !default;
$cyan-400: tint-color($cyan, 20%) !default;
$cyan-500: $cyan !default;
$cyan-600: shade-color($cyan, 20%) !default;
$cyan-700: shade-color($cyan, 40%) !default;
$cyan-800: shade-color($cyan, 60%) !default;
$cyan-900: shade-color($cyan, 80%) !default;

$blues: (
  "blue-100": $blue-100,
  "blue-200": $blue-200,
  "blue-300": $blue-300,
  "blue-400": $blue-400,
  "blue-500": $blue-500,
  "blue-600": $blue-600,
  "blue-700": $blue-700,
  "blue-800": $blue-800,
  "blue-900": $blue-900
) !default;

$indigos: (
  "indigo-100": $indigo-100,
  "indigo-200": $indigo-200,
  "indigo-300": $indigo-300,
  "indigo-400": $indigo-400,
  "indigo-500": $indigo-500,
  "indigo-600": $indigo-600,
  "indigo-700": $indigo-700,
  "indigo-800": $indigo-800,
  "indigo-900": $indigo-900
) !default;

$purples: (
  "purple-100": $purple-100,
  "purple-200": $purple-200,
  "purple-300": $purple-300,
  "purple-400": $purple-400,
  "purple-500": $purple-500,
  "purple-600": $purple-600,
  "purple-700": $purple-700,
  "purple-800": $purple-800,
  "purple-900": $purple-900
) !default;

$pinks: (
  "pink-100": $pink-100,
  "pink-200": $pink-200,
  "pink-300": $pink-300,
  "pink-400": $pink-400,
  "pink-500": $pink-500,
  "pink-600": $pink-600,
  "pink-700": $pink-700,
  "pink-800": $pink-800,
  "pink-900": $pink-900
) !default;

$reds: (
  "red-100": $red-100,
  "red-200": $red-200,
  "red-300": $red-300,
  "red-400": $red-400,
  "red-500": $red-500,
  "red-600": $red-600,
  "red-700": $red-700,
  "red-800": $red-800,
  "red-900": $red-900
) !default;

$oranges: (
  "orange-100": $orange-100,
  "orange-200": $orange-200,
  "orange-300": $orange-300,
  "orange-400": $orange-400,
  "orange-500": $orange-500,
  "orange-600": $orange-600,
  "orange-700": $orange-700,
  "orange-800": $orange-800,
  "orange-900": $orange-900
) !default;

$yellows: (
  "yellow-100": $yellow-100,
  "yellow-200": $yellow-200,
  "yellow-300": $yellow-300,
  "yellow-400": $yellow-400,
  "yellow-500": $yellow-500,
  "yellow-600": $yellow-600,
  "yellow-700": $yellow-700,
  "yellow-800": $yellow-800,
  "yellow-900": $yellow-900
) !default;

$greens: (
  "green-100": $green-100,
  "green-200": $green-200,
  "green-300": $green-300,
  "green-400": $green-400,
  "green-500": $green-500,
  "green-600": $green-600,
  "green-700": $green-700,
  "green-800": $green-800,
  "green-900": $green-900
) !default;

$teals: (
  "teal-100": $teal-100,
  "teal-200": $teal-200,
  "teal-300": $teal-300,
  "teal-400": $teal-400,
  "teal-500": $teal-500,
  "teal-600": $teal-600,
  "teal-700": $teal-700,
  "teal-800": $teal-800,
  "teal-900": $teal-900
) !default;

$cyans: (
  "cyan-100": $cyan-100,
  "cyan-200": $cyan-200,
  "cyan-300": $cyan-300,
  "cyan-400": $cyan-400,
  "cyan-500": $cyan-500,
  "cyan-600": $cyan-600,
  "cyan-700": $cyan-700,
  "cyan-800": $cyan-800,
  "cyan-900": $cyan-900
) !default;
// fusv-enable

// scss-docs-start theme-color-variables
$primary:       $blue !default;
$secondary:     $gray-600 !default;
$success:       $green !default;
$info:          $cyan !default;
$warning:       $yellow !default;
$danger:        $red !default;
$light:         $gray-100 !default;
$dark:          $gray-900 !default;
// scss-docs-end theme-color-variables

// scss-docs-start theme-colors-map
$theme-colors: (
  "primary":    $primary,
  "secondary":  $secondary,
  "success":    $success,
  "info":       $info,
  "warning":    $warning,
  "danger":     $danger,
  "light":      $light,
  "dark":       $dark
) !default;
// scss-docs-end theme-colors-map

// Characters which are escaped by the escape-svg function
$escaped-characters: (
  ("<", "%3c"),
  (">", "%3e"),
  ("#", "%23"),
  ("(", "%28"),
  (")", "%29"),
) !default;

// Options
//
// Quickly modify global styling by enabling or disabling optional features.

$enable-caret:                true !default;
$enable-rounded:              true !default;
$enable-shadows:              false !default;
$enable-gradients:            false !default;
$enable-transitions:          true !default;
$enable-reduced-motion:       true !default;
$enable-smooth-scroll:        true !default;
$enable-grid-classes:         true !default;
$enable-container-classes:    true !default;
$enable-cssgrid:              false !default;
$enable-button-pointers:      true !default;
$enable-rfs:                  true !default;
$enable-validation-icons:     true !default;
$enable-negative-margins:     false !default;
$enable-deprecation-messages: true !default;
$enable-important-utilities:  true !default;
$enable-elevations:           true !default;
$enable-ltr:                  true !default;
$enable-rtl:                  false !default;

// Prefix for :root CSS variables

$variable-prefix:             cui- !default; // Deprecated in v4.2.6 for the shorter \`$prefix\`
$prefix:                      $variable-prefix !default;

// Set mobile breakpoint

$mobile-breakpoint:           md !default;

// Gradient
//
// The gradient which is added to components if \`$enable-gradients\` is \`true\`
// This gradient is also added to elements with \`.bg-gradient\`
// scss-docs-start variable-gradient
$gradient: linear-gradient(180deg, rgba($white, .15), rgba($white, 0)) !default;
// scss-docs-end variable-gradient

// Spacing
//
// Control the default styling of most Bootstrap elements by modifying these
// variables. Mostly focused on spacing.
// You can add more entries to the $spacers map, should you need more variation.

// scss-docs-start spacer-variables-maps
$spacer: 1rem !default;
$spacers: (
  0: 0,
  1: $spacer * .25,
  2: $spacer * .5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3,
) !default;
// scss-docs-end spacer-variables-maps

// Position
//
// Define the edge positioning anchors of the position utilities.

// scss-docs-start position-map
$position-values: (
  0: 0,
  50: 50%,
  100: 100%
) !default;
// scss-docs-end position-map

// Elevation
//
// Define common box shadows
$elevation-base-color: 60, 75, 100 !default; //#3c4b64

$elevations: (
  0: unquote("none"),
  1: unquote("0 1px 1px 0 rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .14), 0 2px 1px -1px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .12), 0 1px 3px 0 rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .20)"),
  2: unquote("0 2px 2px 0 rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .14), 0 3px 1px -2px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .12), 0 1px 5px 0 rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .20)"),
  3: unquote("0 3px 4px 0 rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .14), 0 3px 3px -2px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .12), 0 1px 8px 0 rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .20)"),
  4: unquote("0 4px 5px 0 rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .14), 0 1px 10px 0 rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .12), 0 2px 4px -1px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .20)"),
  6: unquote("0 6px 10px 0 rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .14), 0 1px 18px 0 rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .12), 0 3px 5px -1px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .20)"),
  8: unquote("0 8px 10px 1px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .14), 0 3px 14px 2px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .12), 0 5px 5px -3px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .20)"),
  9: unquote("0 9px 12px 1px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .14), 0 3px 16px 2px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .12), 0 5px 6px -3px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .20)"),
  12: unquote("0 12px 17px 2px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .14), 0 5px 22px 4px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .12), 0 7px 8px -4px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .20)"),
  16: unquote("0 16px 24px 2px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .14), 0 6px 30px 5px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .12), 0 8px 10px -5px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .20)"),
  24: unquote("0 24px 38px 3px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .14), 0 9px 46px 8px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .12), 0 11px 15px -7px rgba(var(--#{$prefix}elevation-base-color, #{$elevation-base-color}), .20)")
) !default;

// Body
//
// Settings for the \`<body>\` element.

$body-bg:                   $white !default;
$body-color:                $high-emphasis !default;
$body-text-align:           null !default;

// Links
//
// Style anchor elements.

$link-color:                              $primary !default;
$link-decoration:                         underline !default;
$link-shade-percentage:                   20% !default;
$link-hover-color:                        shift-color($link-color, $link-shade-percentage) !default;
$link-hover-decoration:                   null !default;

$stretched-link-pseudo-element:           after !default;
$stretched-link-z-index:                  1 !default;

// Paragraphs
//
// Style p element.

$paragraph-margin-bottom:   1rem !default;


// Grid breakpoints
//
// Define the minimum dimensions at which your layout will change,
// adapting to different screen sizes, for use in media queries.

// scss-docs-start grid-breakpoints
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
) !default;
// scss-docs-end grid-breakpoints

@include _assert-ascending($grid-breakpoints, "$grid-breakpoints");
@include _assert-starts-at-zero($grid-breakpoints, "$grid-breakpoints");


// Grid containers
//
// Define the maximum width of \`.container\` for different screen sizes.

// scss-docs-start container-max-widths
$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
  xxl: 1320px
) !default;
// scss-docs-end container-max-widths

@include _assert-ascending($container-max-widths, "$container-max-widths");


// Grid columns
//
// Set the number of columns and specify the width of the gutters.

$grid-columns:                12 !default;
$grid-gutter-width:           1.5rem !default;
$grid-row-columns:            6 !default;

// Container padding

$container-padding-x: $grid-gutter-width !default;


// Components
//
// Define common padding and border radius sizes and more.

// scss-docs-start border-variables
$border-width:                1px !default;
$border-widths: (
  1: 1px,
  2: 2px,
  3: 3px,
  4: 4px,
  5: 5px
) !default;

$border-style:                solid !default;
$border-color:                $gray-200 !default;
$border-color-translucent:    rgba($black, .175) !default;
// scss-docs-end border-variables

// scss-docs-start border-radius-variables
$border-radius:               .375rem !default;
$border-radius-sm:            .25rem !default;
$border-radius-lg:            .5rem !default;
$border-radius-xl:            1rem !default;
$border-radius-2xl:           2rem !default;
$border-radius-pill:          50rem !default;
// scss-docs-end border-radius-variables

// scss-docs-start box-shadow-variables
$box-shadow:                  0 .5rem 1rem rgba($black, .15) !default;
$box-shadow-sm:               0 .125rem .25rem rgba($black, .075) !default;
$box-shadow-lg:               0 1rem 3rem rgba($black, .175) !default;
$box-shadow-inset:            inset 0 1px 2px rgba($black, .075) !default;
// scss-docs-end box-shadow-variables

$component-active-color:      $high-emphasis-inverse !default;
$component-active-bg:         $primary !default;

// scss-docs-start caret-variables
$caret-width:                 .3em !default;
$caret-vertical-align:        $caret-width * .85 !default;
$caret-spacing:               $caret-width * .85 !default;
// scss-docs-end caret-variables

$transition-base:             all .2s ease-in-out !default;
$transition-fade:             opacity .15s linear !default;
// scss-docs-start collapse-transition
$transition-collapse:         height .35s ease !default;
$transition-collapse-width:   width .35s ease !default;
// scss-docs-end collapse-transition

// stylelint-disable function-disallowed-list
// scss-docs-start aspect-ratios
$aspect-ratios: (
  "1x1": 100%,
  "4x3": calc(3 / 4 * 100%),
  "16x9": calc(9 / 16 * 100%),
  "21x9": calc(9 / 21 * 100%)
) !default;
// scss-docs-end aspect-ratios
// stylelint-enable function-disallowed-list

// Typography
//
// Font, line-height, and color for body text, headings, and more.

// scss-docs-start font-variables
// stylelint-disable value-keyword-case
$font-family-sans-serif:      system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !default;
// stylelint-enable value-keyword-case
$font-family-base:            var(--#{$prefix}font-sans-serif) !default;
$font-family-code:            var(--#{$prefix}font-monospace) !default;

// $font-size-root affects the value of \`rem\`, which is used for as well font sizes, paddings, and margins
// $font-size-base affects the font size of the body text
$font-size-root:              null !default;
$font-size-base:              1rem !default; // Assumes the browser default, typically \`16px\`
$font-size-sm:                $font-size-base * .875 !default;
$font-size-lg:                $font-size-base * 1.25 !default;

$font-weight-lighter:         lighter !default;
$font-weight-light:           300 !default;
$font-weight-normal:          400 !default;
$font-weight-medium:          500 !default;
$font-weight-semibold:        600 !default;
$font-weight-bold:            700 !default;
$font-weight-bolder:          bolder !default;

$font-weight-base:            $font-weight-normal !default;

$line-height-base:            1.5 !default;
$line-height-sm:              1.25 !default;
$line-height-lg:              2 !default;

$h1-font-size:                $font-size-base * 2.5 !default;
$h2-font-size:                $font-size-base * 2 !default;
$h3-font-size:                $font-size-base * 1.75 !default;
$h4-font-size:                $font-size-base * 1.5 !default;
$h5-font-size:                $font-size-base * 1.25 !default;
$h6-font-size:                $font-size-base !default;
// scss-docs-end font-variables

// scss-docs-start font-sizes
$font-sizes: (
  1: $h1-font-size,
  2: $h2-font-size,
  3: $h3-font-size,
  4: $h4-font-size,
  5: $h5-font-size,
  6: $h6-font-size
) !default;
// scss-docs-end font-sizes

// scss-docs-start headings-variables
$headings-margin-bottom:      $spacer * .5 !default;
$headings-font-family:        null !default;
$headings-font-style:         null !default;
$headings-font-weight:        500 !default;
$headings-line-height:        1.2 !default;
$headings-color:              unset !default;
// scss-docs-end headings-variables

// scss-docs-start display-headings
$display-font-sizes: (
  1: 5rem,
  2: 4.5rem,
  3: 4rem,
  4: 3.5rem,
  5: 3rem,
  6: 2.5rem
) !default;

$display-font-weight: 300 !default;
$display-line-height: $headings-line-height !default;
// scss-docs-end display-headings

// scss-docs-start type-variables
$lead-font-size:                $font-size-base * 1.25 !default;
$lead-font-weight:              300 !default;

$small-font-size:               .875em !default;

$sub-sup-font-size:             .75em !default;

$text-high-emphasis:            $high-emphasis !default;
$text-medium-emphasis:          $medium-emphasis !default;
$text-disabled:                 $disabled !default;
$text-muted:                    $disabled !default;

$text-high-emphasis-inverse:    $high-emphasis-inverse !default;
$text-medium-emphasis-inverse:  $medium-emphasis-inverse !default;
$text-disabled-inverse:         $disabled-inverse !default;

$initialism-font-size:          $small-font-size !default;

$blockquote-margin-y:           $spacer !default;
$blockquote-font-size:          $font-size-base * 1.25 !default;
$blockquote-footer-color:       $gray-600 !default;
$blockquote-footer-font-size:   $small-font-size !default;

$hr-margin-y:                 $spacer !default;
$hr-color:                    inherit !default;

// fusv-disable
$hr-bg-color:                 null !default; // Deprecated in v4.2.6
$hr-height:                   null !default; // Deprecated in v4.2.6
// fusv-enable

$hr-border-color:             null !default; // Allows for inherited colors
$hr-border-width:             $border-width !default;
$hr-opacity:                  .25 !default;

$legend-margin-bottom:        .5rem !default;
$legend-font-size:            1.5rem !default;
$legend-font-weight:          null !default;

$dt-font-weight:              $font-weight-bold !default;

$list-inline-padding:         .5rem !default;

$mark-padding:                .1875em !default;
$mark-bg:                     $yellow-100 !default;
// scss-docs-end type-variables

// Icons
$icon-size-base:  1rem !default;
$icon-size-sm:    $icon-size-base * .875 !default;
$icon-size-lg:    $icon-size-base * 1.25 !default;
$icon-size-xl:    $icon-size-base * 1.5 !default;
$icon-size-xxl:   $icon-size-base * 2 !default;


// Tables
//
// Customizes the \`.table\` component with basic values, each used across all table variations.

// scss-docs-start table-variables
$table-cell-padding-y:        .5rem !default;
$table-cell-padding-x:        .5rem !default;
$table-cell-padding-y-sm:     .25rem !default;
$table-cell-padding-x-sm:     .25rem !default;

$table-cell-vertical-align:   top !default;

$table-color:                 var(--#{$prefix}body-color) !default;
$table-bg:                    transparent !default;
$table-accent-bg:             transparent !default;

$table-th-font-weight:        600 !default;

$table-striped-color:         $table-color !default;
$table-striped-bg-factor:     .05 !default;
$table-striped-bg:            rgba($black, $table-striped-bg-factor) !default;

$table-active-color:          $table-color !default;
$table-active-bg-factor:      .1 !default;
$table-active-bg:             rgba($black, $table-active-bg-factor) !default;

$table-hover-color:           $table-color !default;
$table-hover-bg-factor:       .075 !default;
$table-hover-bg:              rgba($black, $table-hover-bg-factor) !default;

$table-border-factor:         .1 !default;
$table-border-width:          $border-width !default;
$table-border-color:          var(--#{$prefix}border-color) !default;

$table-striped-order:         odd !default;
$table-striped-columns-order: even !default;

$table-group-separator-color: currentcolor !default;

$table-caption-color:         $text-muted !default;

$table-bg-scale:              -80% !default;
// scss-docs-end table-variables

// scss-docs-start table-loop
$table-variants: (
  "primary":    shift-color($primary, $table-bg-scale),
  "secondary":  shift-color($secondary, $table-bg-scale),
  "success":    shift-color($success, $table-bg-scale),
  "info":       shift-color($info, $table-bg-scale),
  "warning":    shift-color($warning, $table-bg-scale),
  "danger":     shift-color($danger, $table-bg-scale),
  "light":      $light,
  "dark":       $dark,
) !default;
// scss-docs-end table-loop


// Buttons + Forms
//
// Shared variables that are reassigned to \`$input-\` and \`$btn-\` specific variables.

// scss-docs-start input-btn-variables
$input-btn-padding-y:         .375rem !default;
$input-btn-padding-x:         .75rem !default;
$input-btn-font-family:       null !default;
$input-btn-font-size:         $font-size-base !default;
$input-btn-line-height:       $line-height-base !default;

$input-btn-focus-width:         .25rem !default;
$input-btn-focus-color-opacity: .25 !default;
$input-btn-focus-color:         rgba($component-active-bg, $input-btn-focus-color-opacity) !default;
$input-btn-focus-blur:          0 !default;
$input-btn-focus-box-shadow:    0 0 $input-btn-focus-blur $input-btn-focus-width $input-btn-focus-color !default;

$input-btn-padding-y-sm:      .25rem !default;
$input-btn-padding-x-sm:      .5rem !default;
$input-btn-font-size-sm:      $font-size-sm !default;

$input-btn-padding-y-lg:      .5rem !default;
$input-btn-padding-x-lg:      1rem !default;
$input-btn-font-size-lg:      $font-size-lg !default;

$input-btn-border-width:      $border-width !default;
// scss-docs-end input-btn-variables


// Buttons
//
// For each of Bootstrap's buttons, define text, background, and border color.

// scss-docs-start btn-variables
$btn-padding-y:               $input-btn-padding-y !default;
$btn-padding-x:               $input-btn-padding-x !default;
$btn-font-family:             $input-btn-font-family !default;
$btn-font-size:               $input-btn-font-size !default;
$btn-line-height:             $input-btn-line-height !default;
$btn-white-space:             null !default; // Set to \`nowrap\` to prevent text wrapping

$btn-padding-y-sm:            $input-btn-padding-y-sm !default;
$btn-padding-x-sm:            $input-btn-padding-x-sm !default;
$btn-font-size-sm:            $input-btn-font-size-sm !default;

$btn-padding-y-lg:            $input-btn-padding-y-lg !default;
$btn-padding-x-lg:            $input-btn-padding-x-lg !default;
$btn-font-size-lg:            $input-btn-font-size-lg !default;

$btn-border-width:            $input-btn-border-width !default;

$btn-font-weight:             $font-weight-normal !default;
$btn-box-shadow:              inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075) !default;
$btn-focus-width:             $input-btn-focus-width !default;
$btn-focus-box-shadow:        $input-btn-focus-box-shadow !default;
$btn-disabled-opacity:        .65 !default;
$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125) !default;

$btn-link-color:              var(--#{$prefix}link-color) !default;
$btn-link-hover-color:        var(--#{$prefix}link-hover-color) !default;
$btn-link-disabled-color:     $gray-600 !default;

// Allows for customizing button radius independently from global border radius
$btn-border-radius:           $border-radius !default;
$btn-border-radius-sm:        $border-radius-sm !default;
$btn-border-radius-lg:        $border-radius-lg !default;

$btn-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;

$btn-hover-bg-shade-amount:       15% !default;
$btn-hover-bg-tint-amount:        15% !default;
$btn-hover-border-shade-amount:   20% !default;
$btn-hover-border-tint-amount:    10% !default;
$btn-active-bg-shade-amount:      20% !default;
$btn-active-bg-tint-amount:       20% !default;
$btn-active-border-shade-amount:  25% !default;
$btn-active-border-tint-amount:   10% !default;

// scss-docs-start button-variants
$button-variants: (
  "primary": btn-color-map($primary, $primary),
  "secondary": btn-color-map($secondary, $secondary),
  "success": btn-color-map($success, $success),
  "danger": btn-color-map($danger, $danger),
  "warning": btn-color-map($warning, $warning),
  "info": btn-color-map($info, $info),
  "light": btn-color-map($light, $light),
  "dark": btn-color-map($dark, $dark)
) !default;

$button-outline-ghost-variants: (
  "primary": btn-outline-color-map($primary),
  "secondary": btn-outline-color-map($secondary),
  "success": btn-outline-color-map($success),
  "danger": btn-outline-color-map($danger),
  "warning": btn-outline-color-map($warning),
  "info": btn-outline-color-map($info),
  "light": btn-outline-color-map($light),
  "dark": btn-outline-color-map($dark)
) !default;
// scss-docs-end button-variants
// scss-docs-end btn-variables


// Forms
// scss-docs-start form-variables
// scss-docs-start form-text-variables
$form-text-margin-top:                  .25rem !default;
$form-text-font-size:                   $small-font-size !default;
$form-text-font-style:                  null !default;
$form-text-font-weight:                 null !default;
$form-text-color:                       $text-muted !default;
// scss-docs-end form-text-variables

// scss-docs-start form-label-variables
$form-label-margin-bottom:              .5rem !default;
$form-label-font-size:                  null !default;
$form-label-font-style:                 null !default;
$form-label-font-weight:                null !default;
$form-label-color:                      null !default;
// scss-docs-end form-label-variables

// scss-docs-start form-input-variables
$input-padding-y:                       $input-btn-padding-y !default;
$input-padding-x:                       $input-btn-padding-x !default;
$input-font-family:                     $input-btn-font-family !default;
$input-font-size:                       $input-btn-font-size !default;
$input-font-weight:                     $font-weight-base !default;
$input-line-height:                     $input-btn-line-height !default;

$input-padding-y-sm:                    $input-btn-padding-y-sm !default;
$input-padding-x-sm:                    $input-btn-padding-x-sm !default;
$input-font-size-sm:                    $input-btn-font-size-sm !default;

$input-padding-y-lg:                    $input-btn-padding-y-lg !default;
$input-padding-x-lg:                    $input-btn-padding-x-lg !default;
$input-font-size-lg:                    $input-btn-font-size-lg !default;

$input-bg:                              $body-bg !default;
$input-disabled-color:                  null !default;
$input-disabled-bg:                     $gray-200 !default;
$input-disabled-border-color:           $gray-400 !default;

$input-color:                           $body-color !default;
$input-border-color:                    $gray-400 !default;
$input-border-width:                    $input-btn-border-width !default;
$input-box-shadow:                      $box-shadow-inset !default;

$input-border-radius:                   $border-radius !default;
$input-border-radius-sm:                $border-radius-sm !default;
$input-border-radius-lg:                $border-radius-lg !default;

$input-focus-bg:                        $input-bg !default;
$input-focus-border-color:              tint-color($component-active-bg, 50%) !default;
$input-focus-color:                     $input-color !default;
$input-focus-width:                     $input-btn-focus-width !default;
$input-focus-box-shadow:                $input-btn-focus-box-shadow !default;

$input-placeholder-color:               $gray-600 !default;
$input-plaintext-color:                 $body-color !default;

$input-height-border:                   $input-border-width * 2 !default;

$input-height-inner:                    add($input-line-height * 1em, $input-padding-y * 2) !default;
$input-height-inner-half:               add($input-line-height * .5em, $input-padding-y) !default;
$input-height-inner-quarter:            add($input-line-height * .25em, $input-padding-y * .5) !default;

$input-height:                          add($input-line-height * 1em, add($input-padding-y * 2, $input-height-border, false)) !default;
$input-height-sm:                       add($input-line-height * 1em, add($input-padding-y-sm * 2, $input-height-border, false)) !default;
$input-height-lg:                       add($input-line-height * 1em, add($input-padding-y-lg * 2, $input-height-border, false)) !default;

$input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;

$form-color-width:                      3rem !default;
// scss-docs-end form-input-variables

// scss-docs-start form-check-variables
$form-check-input-width:                  1em !default;
$form-check-min-height:                   $font-size-base * $line-height-base !default;
$form-check-padding-start:                $form-check-input-width + .5em !default;
$form-check-margin-bottom:                .125rem !default;
$form-check-label-color:                  unset !default;
$form-check-label-cursor:                 null !default;
$form-check-transition:                   null !default;

$form-check-input-active-filter:          brightness(90%) !default;

$form-check-input-bg:                     $input-bg !default;
$form-check-input-border:                 1px solid rgba($black, .25) !default;
$form-check-input-border-radius:          .25em !default;
$form-check-radio-border-radius:          50% !default;
$form-check-input-focus-border:           $input-focus-border-color !default;
$form-check-input-focus-box-shadow:       $input-btn-focus-box-shadow !default;

$form-check-input-checked-color:          $component-active-color !default;
$form-check-input-checked-bg-color:       $component-active-bg !default;
$form-check-input-checked-border-color:   $form-check-input-checked-bg-color !default;
$form-check-input-checked-bg-image:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-checked-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/></svg>") !default;
$form-check-radio-checked-bg-image:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='#{$form-check-input-checked-color}'/></svg>") !default;

$form-check-input-indeterminate-color:          $component-active-color !default;
$form-check-input-indeterminate-bg-color:       $component-active-bg !default;
$form-check-input-indeterminate-border-color:   $form-check-input-indeterminate-bg-color !default;
$form-check-input-indeterminate-bg-image:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-indeterminate-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>") !default;

$form-check-input-disabled-opacity:        .5 !default;
$form-check-label-disabled-opacity:        $form-check-input-disabled-opacity !default;
$form-check-btn-check-disabled-opacity:    $btn-disabled-opacity !default;

$form-check-inline-margin-end:    1rem !default;
// scss-docs-end form-check-variables

// scss-docs-start form-switch-variables
$form-switch-color:               rgba($black, .25) !default;
$form-switch-width:               2em !default;
$form-switch-padding-start:       $form-switch-width + .5em !default;
$form-switch-bg-image:            url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-color}'/></svg>") !default;
$form-switch-border-radius:       $form-switch-width !default;
$form-switch-transition:          background-position .15s ease-in-out !default;

$form-switch-focus-color:         $input-focus-border-color !default;
$form-switch-focus-bg-image:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-focus-color}'/></svg>") !default;

$form-switch-checked-color:       $component-active-color !default;
$form-switch-checked-bg-image:    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-checked-color}'/></svg>") !default;
$form-switch-checked-bg-position: right center !default;

$form-switch-widths: (
  lg: (
    width: 1.75em,
    height: 1.25em
  ),
  xl: (
    width: 2em,
    height: 1.5em
  )
) !default;
// scss-docs-end form-switch-variables

$form-check-inline-margin-end:    1rem !default;

// scss-docs-start input-group-variables
$input-group-addon-padding-y:           $input-padding-y !default;
$input-group-addon-padding-x:           $input-padding-x !default;
$input-group-addon-font-weight:         $input-font-weight !default;
$input-group-addon-color:               $input-color !default;
$input-group-addon-bg:                  $gray-200 !default;
$input-group-addon-border-color:        $input-border-color !default;
// scss-docs-end input-group-variables

// scss-docs-start form-select-variables
$form-select-padding-y:             $input-padding-y !default;
$form-select-padding-x:             $input-padding-x !default;
$form-select-font-family:           $input-font-family !default;
$form-select-font-size:             $input-font-size !default;
$form-select-indicator-padding:     $form-select-padding-x * 3 !default; // Extra padding for background-image
$form-select-font-weight:           $input-font-weight !default;
$form-select-line-height:           $input-line-height !default;
$form-select-color:                 $input-color !default;
$form-select-bg:                    $input-bg !default;
$form-select-disabled-color:        null !default;
$form-select-disabled-bg:           $gray-200 !default;
$form-select-disabled-border-color: $input-disabled-border-color !default;
$form-select-bg-position:           right $form-select-padding-x center !default;
$form-select-bg-size:               16px 12px !default; // In pixels because image dimensions
$form-select-indicator-color:       $gray-800 !default;
$form-select-indicator:             url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$form-select-indicator-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/></svg>") !default;

$form-select-feedback-icon-padding-end: $form-select-padding-x * 2.5 + $form-select-indicator-padding !default;
$form-select-feedback-icon-position:    center right $form-select-indicator-padding !default;
$form-select-feedback-icon-size:        $input-height-inner-half $input-height-inner-half !default;

$form-select-border-width:        $input-border-width !default;
$form-select-border-color:        $input-border-color !default;
$form-select-border-radius:       $input-border-radius !default;
$form-select-box-shadow:          $box-shadow-inset !default;

$form-select-focus-border-color:  $input-focus-border-color !default;
$form-select-focus-width:         $input-focus-width !default;
$form-select-focus-box-shadow:    0 0 0 $form-select-focus-width $input-btn-focus-color !default;

$form-select-padding-y-sm:        $input-padding-y-sm !default;
$form-select-padding-x-sm:        $input-padding-x-sm !default;
$form-select-font-size-sm:        $input-font-size-sm !default;
$form-select-border-radius-sm:    $input-border-radius-sm !default;

$form-select-padding-y-lg:        $input-padding-y-lg !default;
$form-select-padding-x-lg:        $input-padding-x-lg !default;
$form-select-font-size-lg:        $input-font-size-lg !default;
$form-select-border-radius-lg:    $input-border-radius-lg !default;

$form-select-transition:          $input-transition !default;
// scss-docs-end form-select-variables

// scss-docs-start form-multi-select-variables
$form-multi-select-padding-y:               $input-padding-y !default;
$form-multi-select-padding-x:               $input-padding-x !default;
$form-multi-select-font-family:             $input-font-family !default;
$form-multi-select-font-size:               $input-font-size !default;
$form-multi-select-font-weight:             $input-font-weight !default;
$form-multi-select-line-height:             $input-line-height !default;
$form-multi-select-color:                   $input-color !default;
$form-multi-select-disabled-color:          $gray-600 !default;
$form-multi-select-bg:                      $input-bg !default;

$form-multi-select-bg-position:             right $form-multi-select-padding-x center !default;
$form-multi-select-bg-size:                 16px 12px !default; // In pixels because image dimensions
$form-multi-select-disabled-bg:             $gray-200 !default;
$form-multi-select-indicator-padding:       $form-multi-select-padding-x * 3 !default; // Extra padding to account for the presence of the background-image based indicator
$form-multi-select-indicator-color:         $gray-800 !default;
$form-multi-select-indicator:               url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$form-multi-select-indicator-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/></svg>") !default;

$form-multi-select-border-width:            $input-border-width !default;
$form-multi-select-border-color:            $input-border-color !default;
$form-multi-select-border-radius:           $border-radius !default;
$form-multi-select-border-radius-sm:        $border-radius-sm !default;
$form-multi-select-border-radius-lg:        $border-radius-lg !default;
$form-multi-select-box-shadow:              inset 0 1px 2px rgba($black, .075) !default;

$form-multi-select-focus-width:             $input-focus-width !default;
$form-multi-select-focus-color:             $input-color !default;
$form-multi-select-focus-bg:                $input-bg !default;
$form-multi-select-focus-border-color:      shift-color($component-active-bg, -25%) !default;
$form-multi-select-focus-box-shadow:        0 0 0 $form-multi-select-focus-width $input-btn-focus-color !default;

$form-multi-select-selection-tags-padding-y:  .125rem !default;
$form-multi-select-selection-tags-padding-x:  .125rem !default;

$form-multi-select-tag-bg:                $light !default;
$form-multi-select-tag-border-width:      $border-width !default;
$form-multi-select-tag-border-color:      $border-color !default;
$form-multi-select-tag-border-radius:     .25rem !default;
$form-multi-select-tag-border-radius-sm:  .125rem !default;
$form-multi-select-tag-border-radius-lg:  .375rem !default;
$form-multi-select-tag-margin-y:          .125rem !default;
$form-multi-select-tag-margin-x:          .125rem !default;
$form-multi-select-tag-padding-y:         subtract(($form-multi-select-padding-y - $form-multi-select-selection-tags-padding-y - $form-multi-select-tag-margin-y), $form-multi-select-tag-border-width) !default;
$form-multi-select-tag-padding-x:         .5rem !default;

$form-multi-select-search-color:          $input-color !default;
$form-multi-select-search-bg:             $input-bg !default;
$form-multi-select-search-border-radius:  $border-radius !default;

$form-multi-select-cleaner-width:         .75rem !default;
$form-multi-select-cleaner-height:        .75rem !default;
$form-multi-select-cleaner-padding-x:     .75rem !default;
$form-multi-select-cleaner-padding-y:     .5rem !default;
$form-multi-select-cleaner-color:         $medium-emphasis !default;
$form-multi-select-cleaner-bg:            url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$form-multi-select-cleaner-color}'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>") !default;
$form-multi-select-cleaner-hover-color:   $high-emphasis !default;
$form-multi-select-cleaner-hover-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$form-multi-select-cleaner-hover-color}'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>") !default;
$form-multi-select-cleaner-focus-color:   $high-emphasis !default;
$form-multi-select-cleaner-focus-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$form-multi-select-cleaner-focus-color}'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>") !default;
$form-multi-select-cleaner-border-color:  $input-border-color !default;

$form-multi-select-select-all-padding-y:     .5rem !default;
$form-multi-select-select-all-padding-x:     .75rem !default;
$form-multi-select-select-all-color:         $medium-emphasis !default;
$form-multi-select-select-all-bg:            transparent !default;
$form-multi-select-select-all-hover-color:   $high-emphasis !default;
$form-multi-select-select-all-hover-bg:      transparent !default;
$form-multi-select-select-all-border-width:  $input-border-width !default;
$form-multi-select-select-all-border-color:  $input-border-color !default;

$form-multi-select-options-padding-y:      .5rem !default;
$form-multi-select-options-padding-x:      .75rem !default;
$form-multi-select-options-margin-top:     .625rem !default;
$form-multi-select-options-font-size:      $font-size-base !default;
$form-multi-select-options-color:          $body-color !default;
$form-multi-select-options-bg:             $white !default;
$form-multi-select-options-border-color:   $border-color !default;
$form-multi-select-options-border-width:   $border-width !default;
$form-multi-select-options-border-radius:  $border-radius !default;

$form-multi-select-optgroup-label-font-weight:  $font-weight-bold !default;
$form-multi-select-optgroup-label-color:        $disabled !default;

$form-multi-select-option-padding-y:        .5rem !default;
$form-multi-select-option-padding-x:        1.25rem !default;
$form-multi-select-option-border-radius:    $border-radius !default;

$form-multi-select-option-hover-color:     shift-color($gray-900, +5%) !default;
$form-multi-select-option-hover-bg:        rgba($gray-100, .5) !default;

$form-multi-select-option-indicator-width:          1em !default;
$form-multi-select-option-indicator-bg:             $form-check-input-bg !default;
$form-multi-select-option-indicator-border:         $form-check-input-border !default;
$form-multi-select-option-indicator-border-radius:  .25em !default;

$form-multi-select-option-selected-bg:                      $light !default;
$form-multi-select-option-selected-indicator-bg:            $form-check-input-checked-bg-color !default;
$form-multi-select-option-selected-indicator-bg-image:      $form-check-input-checked-bg-image !default;
$form-multi-select-option-selected-indicator-border-color:  $form-multi-select-option-selected-indicator-bg !default;

$form-multi-select-option-disabled-color:  $gray-600 !default;

$form-multi-select-padding-y-lg:                 $input-padding-y-lg !default;
$form-multi-select-padding-x-lg:                 $input-padding-x-lg !default;
$form-multi-select-font-size-lg:                 $input-font-size-lg !default;
$form-multi-select-selection-tags-padding-y-lg:  .125rem !default;
$form-multi-select-selection-tags-padding-x-lg:  .125rem !default;
$form-multi-select-tag-margin-y-lg:              .125rem !default;
$form-multi-select-tag-margin-x-lg:              .125rem !default;
$form-multi-select-tag-padding-y-lg:             subtract(($form-multi-select-padding-y-lg - $form-multi-select-selection-tags-padding-y-lg - $form-multi-select-tag-margin-y-lg), $form-multi-select-tag-border-width) !default;
$form-multi-select-tag-padding-x-lg:             .5rem !default;

$form-multi-select-padding-y-sm:                 $input-padding-y-sm !default;
$form-multi-select-padding-x-sm:                 $input-padding-x-sm !default;
$form-multi-select-font-size-sm:                 $input-font-size-sm !default;
$form-multi-select-selection-tags-padding-y-sm:  .0675rem !default;
$form-multi-select-selection-tags-padding-x-sm:  .125rem !default;
$form-multi-select-tag-margin-y-sm:              .0675rem !default;
$form-multi-select-tag-margin-x-sm:              .0675rem !default;
$form-multi-select-tag-padding-y-sm:             0 !default;
$form-multi-select-tag-padding-x-sm:             .5rem !default;
// scss-docs-end form-multi-select-variables

// scss-docs-start form-range-variables
$form-range-track-width:          100% !default;
$form-range-track-height:         .5rem !default;
$form-range-track-cursor:         pointer !default;
$form-range-track-bg:             $gray-300 !default;
$form-range-track-border-radius:  1rem !default;
$form-range-track-box-shadow:     $box-shadow-inset !default;

$form-range-thumb-width:                   1rem !default;
$form-range-thumb-height:                  $form-range-thumb-width !default;
$form-range-thumb-bg:                      $component-active-bg !default;
$form-range-thumb-border:                  0 !default;
$form-range-thumb-border-radius:           1rem !default;
$form-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1) !default;
$form-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow !default;
$form-range-thumb-focus-box-shadow-width:  $input-focus-width !default; // For focus box shadow issue in Edge
$form-range-thumb-active-bg:               tint-color($component-active-bg, 70%) !default;
$form-range-thumb-disabled-bg:             $gray-500 !default;
$form-range-thumb-transition:              background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;
// scss-docs-end form-range-variables

// scss-docs-start form-file-variables
$form-file-button-color:          $input-color !default;
$form-file-button-bg:             $input-group-addon-bg !default;
$form-file-button-hover-bg:       shade-color($form-file-button-bg, 5%) !default;
// scss-docs-end form-file-variables

// scss-docs-start form-floating-variables
$form-floating-height:            add(3.5rem, $input-height-border) !default;
$form-floating-line-height:       1.25 !default;
$form-floating-padding-x:         $input-padding-x !default;
$form-floating-padding-y:         1rem !default;
$form-floating-input-padding-t:   1.625rem !default;
$form-floating-input-padding-b:   .625rem !default;
$form-floating-label-opacity:     .65 !default;
$form-floating-label-transform:   scale(.85) translateY(-.5rem) translateX(.15rem) !default;
$form-floating-transition:        opacity .1s ease-in-out, transform .1s ease-in-out !default;
// scss-docs-end form-floating-variables

// Form validation

// scss-docs-start form-feedback-variables
$form-feedback-margin-top:          $form-text-margin-top !default;
$form-feedback-font-size:           $form-text-font-size !default;
$form-feedback-font-style:          $form-text-font-style !default;
$form-feedback-valid-color:         $success !default;
$form-feedback-invalid-color:       $danger !default;

$form-feedback-icon-valid-color:    $form-feedback-valid-color !default;
$form-feedback-icon-valid:          url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>") !default;
$form-feedback-icon-invalid-color:  $form-feedback-invalid-color !default;
$form-feedback-icon-invalid:        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='#{$form-feedback-icon-invalid-color}'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='#{$form-feedback-icon-invalid-color}' stroke='none'/></svg>") !default;
// scss-docs-end form-feedback-variables

// scss-docs-start form-validation-states
$form-validation-states: (
  "valid": (
    "color": $form-feedback-valid-color,
    "icon": $form-feedback-icon-valid
  ),
  "invalid": (
    "color": $form-feedback-invalid-color,
    "icon": $form-feedback-icon-invalid
  )
) !default;
// scss-docs-end form-validation-states
// scss-docs-end form-variables
// Z-index master list
//
// Warning: Avoid customizing these values. They're used for a bird's eye view
// of components dependent on the z-axis and are designed to all work together.

// scss-docs-start zindex-stack
$zindex-dropdown:                   1000 !default;
$zindex-sticky:                     1020 !default;
$zindex-fixed:                      1030 !default;
$zindex-sidebar-backdrop:           1030 !default;
$zindex-offcanvas-backdrop:         1040 !default;
$zindex-offcanvas:                  1045 !default;
$zindex-modal-backdrop:             1050 !default;
$zindex-modal:                      1055 !default;
$zindex-popover:                    1070 !default;
$zindex-tooltip:                    1080 !default;
$zindex-toast:                      1090 !default;
// scss-docs-end zindex-stack


// Navs
// scss-docs-start nav-variables
$nav-link-padding-y:                .5rem !default;
$nav-link-padding-x:                1rem !default;
$nav-link-font-size:                null !default;
$nav-link-font-weight:              null !default;
$nav-link-color:                    var(--#{$prefix}link-color) !default;
$nav-link-hover-color:              var(--#{$prefix}link-hover-color) !default;
$nav-link-transition:               color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out !default;
$nav-link-disabled-color:           $gray-600 !default;

$nav-tabs-border-color:             $gray-300 !default;
$nav-tabs-border-width:             $border-width !default;
$nav-tabs-border-radius:            $border-radius !default;
$nav-tabs-link-hover-border-color:  $gray-200 $gray-200 $nav-tabs-border-color !default;
$nav-tabs-link-active-color:        $gray-700 !default;
$nav-tabs-link-active-bg:           $body-bg !default;
$nav-tabs-link-active-border-color: $gray-300 $gray-300 $nav-tabs-link-active-bg !default;

$nav-pills-border-radius:           $border-radius !default;
$nav-pills-link-active-color:       $component-active-color !default;
$nav-pills-link-active-bg:          $component-active-bg !default;

$nav-underline-border-color:              $gray-300 !default;
$nav-underline-border-width:              $border-width * 2 !default;
$nav-underline-link-color:                $gray-700 !default;
$nav-underline-link-active-color:         $primary !default;
$nav-underline-link-active-border-color:  $primary !default;
// scss-docs-end nav-variables


// Navbar

// scss-docs-start navbar-variables
$navbar-padding-y:                  $spacer * .5 !default;
$navbar-padding-x:                  null !default;

$navbar-nav-link-padding-x:         .5rem !default;

$navbar-brand-font-size:            $font-size-lg !default;
// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link
$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2 !default;
$navbar-brand-height:               $navbar-brand-font-size * $line-height-base !default;
$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) * .5 !default;
$navbar-brand-margin-end:           1rem !default;

$navbar-toggler-padding-y:          .25rem !default;
$navbar-toggler-padding-x:          .75rem !default;
$navbar-toggler-font-size:          $font-size-lg !default;
$navbar-toggler-border-radius:      $btn-border-radius !default;
$navbar-toggler-focus-width:        $btn-focus-width !default;
$navbar-toggler-transition:         box-shadow .15s ease-in-out !default;
// scss-docs-end navbar-variables

// scss-docs-start navbar-theme-variables
$navbar-dark-color:                 $medium-emphasis-inverse !default;
$navbar-dark-hover-color:           $high-emphasis-inverse !default;
$navbar-dark-active-color:          $high-emphasis-inverse !default;
$navbar-dark-disabled-color:        $disabled-inverse !default;
$navbar-dark-toggler-icon-bg:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-dark-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>") !default;
$navbar-dark-toggler-border-color:  rgba($white, .1) !default;

$navbar-light-color:                $medium-emphasis !default;
$navbar-light-hover-color:          $high-emphasis !default;
$navbar-light-active-color:         $high-emphasis !default;
$navbar-light-disabled-color:       $disabled !default;
$navbar-light-toggler-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-light-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>") !default;
$navbar-light-toggler-border-color: rgba($black, .1) !default;

$navbar-light-brand-color:                $navbar-light-active-color !default;
$navbar-light-brand-hover-color:          $navbar-light-active-color !default;
$navbar-dark-brand-color:                 $navbar-dark-active-color !default;
$navbar-dark-brand-hover-color:           $navbar-dark-active-color !default;
// scss-docs-end navbar-theme-variables


// Dropdowns
//
// Dropdown menu container and contents.
// scss-docs-start dropdown-variables
$dropdown-min-width:                10rem !default;
$dropdown-padding-x:                0 !default;
$dropdown-padding-y:                .5rem !default;
$dropdown-spacer:                   .125rem !default;
$dropdown-font-size:                $font-size-base !default;
$dropdown-color:                    $body-color !default;
$dropdown-bg:                       $white !default;
$dropdown-border-color:             var(--#{$prefix}border-color-translucent) !default;
$dropdown-border-radius:            $border-radius !default;
$dropdown-border-width:             $border-width !default;
$dropdown-inner-border-radius:      subtract($dropdown-border-radius, $dropdown-border-width) !default;
$dropdown-divider-bg:               $dropdown-border-color !default;
$dropdown-divider-margin-y:         $spacer * .5 !default;
$dropdown-box-shadow:               $box-shadow !default;

$dropdown-link-color:               $gray-900 !default;
$dropdown-link-hover-color:         shade-color($dropdown-link-color, 10%) !default;
$dropdown-link-hover-bg:            $gray-200 !default;

$dropdown-link-active-color:        $component-active-color !default;
$dropdown-link-active-bg:           $component-active-bg !default;

$dropdown-link-disabled-color:      $gray-500 !default;

$dropdown-item-padding-y:           $spacer * .25 !default;
$dropdown-item-padding-x:           $spacer !default;

$dropdown-header-color:             $gray-600 !default;
$dropdown-header-padding-x:         $dropdown-item-padding-x !default;
$dropdown-header-padding-y:         $dropdown-padding-y !default;
// fusv-disable
$dropdown-header-padding:           $dropdown-header-padding-y $dropdown-header-padding-x !default; // Deprecated in v4.2.6
// fusv-enable
// scss-docs-end dropdown-variables

// scss-docs-start dropdown-dark-variables
$dropdown-dark-color:               $gray-300 !default;
$dropdown-dark-bg:                  $gray-800 !default;
$dropdown-dark-border-color:        $dropdown-border-color !default;
$dropdown-dark-divider-bg:          $dropdown-divider-bg !default;
$dropdown-dark-box-shadow:          null !default;
$dropdown-dark-link-color:          $dropdown-dark-color !default;
$dropdown-dark-link-hover-color:    $high-emphasis-inverse !default;
$dropdown-dark-link-hover-bg:       rgba($white, .15) !default;
$dropdown-dark-link-active-color:   $dropdown-link-active-color !default;
$dropdown-dark-link-active-bg:      $dropdown-link-active-bg !default;
$dropdown-dark-link-disabled-color: $gray-500 !default;
$dropdown-dark-header-color:        $gray-500 !default;
// scss-docs-end dropdown-dark-variables


// Pagination

// scss-docs-start pagination-variables
$pagination-padding-y:              .375rem !default;
$pagination-padding-x:              .75rem !default;
$pagination-padding-y-sm:           .25rem !default;
$pagination-padding-x-sm:           .5rem !default;
$pagination-padding-y-lg:           .75rem !default;
$pagination-padding-x-lg:           1.5rem !default;

$pagination-font-size:              $font-size-base !default;

$pagination-color:                  var(--#{$prefix}link-color) !default;
$pagination-bg:                     $white !default;
$pagination-border-radius:          $border-radius !default;
$pagination-border-width:           $border-width !default;
$pagination-margin-start:           calc($pagination-border-width * -1) !default; // stylelint-disable-line function-disallowed-list
$pagination-border-color:           $gray-300 !default;

$pagination-focus-color:            var(--#{$prefix}link-hover-color) !default;
$pagination-focus-bg:               $gray-200 !default;
$pagination-focus-box-shadow:       $input-btn-focus-box-shadow !default;
$pagination-focus-outline:          0 !default;

$pagination-hover-color:            var(--#{$prefix}link-hover-color) !default;
$pagination-hover-bg:               $gray-200 !default;
$pagination-hover-border-color:     $gray-300 !default;

$pagination-active-color:           $component-active-color !default;
$pagination-active-bg:              $component-active-bg !default;
$pagination-active-border-color:    $pagination-active-bg !default;

$pagination-disabled-color:         $gray-600 !default;
$pagination-disabled-bg:            $white !default;
$pagination-disabled-border-color:  $gray-300 !default;

$pagination-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;

$pagination-border-radius-sm:       $border-radius-sm !default;
$pagination-border-radius-lg:       $border-radius-lg !default;
// scss-docs-end pagination-variables


// Placeholders

// scss-docs-start placeholders
$placeholder-opacity-max:           .5 !default;
$placeholder-opacity-min:           .2 !default;
// scss-docs-end placeholders

// Cards
// scss-docs-start card-variables
$card-spacer-y:                     $spacer !default;
$card-spacer-x:                     $spacer !default;
$card-title-spacer-y:               $spacer * .5 !default;
$card-border-width:                 $border-width !default;
$card-border-color:                 var(--#{$prefix}border-color-translucent) !default;
$card-border-radius:                $border-radius !default;
$card-box-shadow:                   null !default;
$card-inner-border-radius:          subtract($card-border-radius, $card-border-width) !default;
$card-cap-padding-y:                $card-spacer-y * .5 !default;
$card-cap-padding-x:                $card-spacer-x !default;
$card-cap-bg:                       rgba($black, .03) !default;
$card-cap-color:                    unset !default;
$card-height:                       null !default;
$card-color:                        unset !default;
$card-bg:                           $white !default;
$card-img-overlay-padding:          $spacer !default;
$card-group-margin:                 $grid-gutter-width * .5 !default;
// scss-docs-end card-variables

// Accordion
// scss-docs-start accordion-variables
$accordion-padding-y:                     1rem !default;
$accordion-padding-x:                     1.25rem !default;
$accordion-color:                         $body-color !default; // Sass variable because of $accordion-button-icon
$accordion-bg:                            $body-bg !default;
$accordion-border-width:                  $border-width !default;
$accordion-border-color:                  var(--#{$prefix}border-color) !default;
$accordion-border-radius:                 $border-radius !default;
$accordion-inner-border-radius:           subtract($accordion-border-radius, $accordion-border-width) !default;

$accordion-body-padding-y:                $accordion-padding-y !default;
$accordion-body-padding-x:                $accordion-padding-x !default;

$accordion-button-padding-y:              $accordion-padding-y !default;
$accordion-button-padding-x:              $accordion-padding-x !default;
$accordion-button-color:                  $accordion-color !default;
$accordion-button-bg:                     var(--#{$prefix}accordion-bg) !default;
$accordion-transition:                    $btn-transition, border-radius .15s ease !default;
$accordion-button-active-bg:              tint-color($component-active-bg, 90%) !default;
$accordion-button-active-color:           shade-color($primary, 10%) !default;

$accordion-button-focus-border-color:     $input-focus-border-color !default;
$accordion-button-focus-box-shadow:       $btn-focus-box-shadow !default;

$accordion-icon-width:                    1.25rem !default;
$accordion-icon-color:                    $accordion-button-color !default;
$accordion-icon-active-color:             $accordion-button-active-color !default;
$accordion-icon-transition:               transform .2s ease-in-out !default;
$accordion-icon-transform:                rotate(-180deg) !default;

$accordion-button-icon:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !default;
$accordion-button-active-icon:  url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-active-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !default;
// scss-docs-end accordion-variables

// Tooltips

// scss-docs-start tooltip-variables
$tooltip-font-size:                 $font-size-sm !default;
$tooltip-max-width:                 200px !default;
$tooltip-color:                     $high-emphasis-inverse !default;
$tooltip-bg:                        $black !default;
$tooltip-border-radius:             $border-radius !default;
$tooltip-opacity:                   .9 !default;
$tooltip-padding-y:                 $spacer * .25 !default;
$tooltip-padding-x:                 $spacer * .5 !default;
$tooltip-margin:                    null !default; // TODO: remove this in v6

$tooltip-arrow-width:               .8rem !default;
$tooltip-arrow-height:              .4rem !default;
// fusv-disable
$tooltip-arrow-color:               null !default; // Deprecated in Bootstrap 5.2.0 for CSS variables
// fusv-enable
// scss-docs-end tooltip-variables

// Form tooltips must come after regular tooltips
// scss-docs-start tooltip-feedback-variables
$form-feedback-tooltip-padding-y:     $tooltip-padding-y !default;
$form-feedback-tooltip-padding-x:     $tooltip-padding-x !default;
$form-feedback-tooltip-font-size:     $tooltip-font-size !default;
$form-feedback-tooltip-line-height:   null !default;
$form-feedback-tooltip-opacity:       $tooltip-opacity !default;
$form-feedback-tooltip-border-radius: $tooltip-border-radius !default;
// scss-docs-end tooltip-feedback-variables


// Popovers
// scss-docs-start popover-variables
$popover-font-size:                 $font-size-sm !default;
$popover-bg:                        $white !default;
$popover-max-width:                 276px !default;
$popover-border-width:              $border-width !default;
$popover-border-color:              var(--#{$prefix}border-color-translucent) !default;
$popover-border-radius:             $border-radius-lg !default;
$popover-inner-border-radius:       subtract($popover-border-radius, $popover-border-width) !default;
$popover-box-shadow:                $box-shadow !default;

$popover-header-font-size:          $font-size-base !default;
$popover-header-bg:                 shade-color($popover-bg, 6%) !default;
$popover-header-color:              $headings-color !default;
$popover-header-padding-y:          .5rem !default;
$popover-header-padding-x:          $spacer !default;

$popover-body-color:                $body-color !default;
$popover-body-padding-y:            $spacer !default;
$popover-body-padding-x:            $spacer !default;

$popover-arrow-width:               1rem !default;
$popover-arrow-height:              .5rem !default;
// scss-docs-end popover-variables

// fusv-disable
// Deprecated in Bootstrap 5.2.0 for CSS variables
$popover-arrow-color:               $popover-bg !default;
$popover-arrow-outer-color:         var(--#{$prefix}border-color-translucent) !default;
// fusv-enable


// Toasts
// scss-docs-start toast-variables
$toast-max-width:                   350px !default;
$toast-padding-x:                   .75rem !default;
$toast-padding-y:                   .5rem !default;
$toast-font-size:                   .875rem !default;
$toast-color:                       unset !default;
$toast-background-color:            rgba($white, .85) !default;
$toast-border-width:                $border-width !default;
$toast-border-color:                var(--#{$prefix}border-color-translucent) !default;
$toast-border-radius:               $border-radius !default;
$toast-box-shadow:                  $box-shadow !default;
$toast-spacing:                     $container-padding-x !default;

$toast-header-color:                $gray-600 !default;
$toast-header-background-color:     rgba($white, .85) !default;
$toast-header-border-color:         rgba($black, .05) !default;
// scss-docs-end toast-variables


// Badges
// scss-docs-start badge-variables
$badge-font-size:                   .75em !default;
$badge-font-weight:                 $font-weight-bold !default;
$badge-color:                       $high-emphasis-inverse !default;
$badge-padding-y:                   .35em !default;
$badge-padding-x:                   .65em !default;
$badge-border-radius:               $border-radius !default;
// scss-docs-end badge-variables

$badge-font-size-sm:                .65em !default;
$badge-padding-y-sm:                .3em !default;
$badge-padding-x-sm:                .5em !default;
// scss-docs-end badge-variables


// Modals

// scss-docs-start modal-variables
$modal-inner-padding:               $spacer !default;

$modal-footer-margin-between:       .5rem !default;

$modal-dialog-margin:               .5rem !default;
$modal-dialog-margin-y-sm-up:       1.75rem !default;

$modal-title-line-height:           $line-height-base !default;

$modal-content-color:               unset !default;
$modal-content-bg:                  $white !default;
$modal-content-border-color:        var(--#{$prefix}border-color-translucent) !default;
$modal-content-border-width:        $border-width !default;
$modal-content-border-radius:       $border-radius-lg !default;
$modal-content-inner-border-radius: subtract($modal-content-border-radius, $modal-content-border-width) !default;
$modal-content-box-shadow-xs:       $box-shadow-sm !default;
$modal-content-box-shadow-sm-up:    $box-shadow !default;

$modal-backdrop-bg:                 $black !default;
$modal-backdrop-opacity:            .5 !default;

$modal-header-border-color:         var(--#{$prefix}border-color) !default;
$modal-header-border-width:         $modal-content-border-width !default;
$modal-header-padding-y:            $modal-inner-padding !default;
$modal-header-padding-x:            $modal-inner-padding !default;
$modal-header-padding:              $modal-header-padding-y $modal-header-padding-x !default; // Keep this for backwards compatibility

$modal-footer-bg:                   null !default;
$modal-footer-border-color:         $modal-header-border-color !default;
$modal-footer-border-width:         $modal-header-border-width !default;

$modal-sm:                          300px !default;
$modal-md:                          500px !default;
$modal-lg:                          800px !default;
$modal-xl:                          1140px !default;

$modal-fade-transform:              translate(0, -50px) !default;
$modal-show-transform:              none !default;
$modal-transition:                  transform .3s ease-out !default;
$modal-scale-transform:             scale(1.02) !default;
// scss-docs-end modal-variables


// Avatars
// scss-docs-start avatar-variables
$avatar-width:  2rem !default;

$avatar-widths: (
  sm: 1.5rem,
  md: 2.5rem,
  lg: 3rem,
  xl: 4rem
) !default;

$avatar-transition: margin .15s !default;
// scss-docs-end avatar-variables

// Alerts
//
// Define alert colors, border radius, and padding.

// scss-docs-start alert-variables
$alert-padding-y:               $spacer !default;
$alert-padding-x:               $spacer !default;
$alert-margin-bottom:           1rem !default;
$alert-border-radius:           $border-radius !default;
$alert-link-font-weight:        $font-weight-bold !default;
$alert-border-width:            $border-width !default;
$alert-bg-scale:                -80% !default;
$alert-border-scale:            -70% !default;
$alert-color-scale:             40% !default;
$alert-dismissible-padding-r:   $alert-padding-x * 3 !default; // 3x covers width of x plus default padding on either side
// scss-docs-end alert-variables

// scss-docs-start alert-variants
$alert-variants: () !default;
@each $state, $value in $theme-colors {
  $map: ();
  $alert-variants: map-merge($alert-variants, map-merge($map, ($state: alert-color-map($value))));
}
// $alert-variants: (
//   "primary": alert-color-map($primary),
//   "secondary": alert-color-map($secondary),
//   "success": alert-color-map($success),
//   "danger": alert-color-map($danger),
//   "warning": alert-color-map($warning),
//   "info": alert-color-map($info),
//   "light": alert-color-map($light),
//   "dark": alert-color-map($dark)
// ) !default;
// scss-docs-end alert-variants

// Callouts
// scss-docs-start callout-variables
$callout-padding-y:                 $spacer !default;
$callout-padding-x:                 $spacer !default;
$callout-margin-y:                  $spacer !default;
$callout-margin-x:                  0 !default;
$callout-border-radius:             $border-radius !default;
$callout-border-width:              $border-width !default;
$callout-border-color:              $border-color !default;
$callout-border-left-width:         (4 * $callout-border-width) !default;

$callout-variants: (
  "primary":    $primary,
  "secondary":  $secondary,
  "success":    $success,
  "danger":     $danger,
  "warning":    $warning,
  "info":       $info,
  "light":      $light,
  "dark":       $dark
) !default;
// scss-docs-end callout-variables


// Progress bars

// scss-docs-start progress-variables
$progress-height:                   1rem !default;
$progress-font-size:                $font-size-base * .75 !default;
$progress-bg:                       $gray-200 !default;
$progress-border-radius:            $border-radius !default;
$progress-box-shadow:               $box-shadow-inset !default;
$progress-bar-color:                $high-emphasis-inverse !default;
$progress-bar-bg:                   $primary !default;
$progress-bar-animation-timing:     1s linear infinite !default;
$progress-bar-transition:           width .6s ease !default;

$progress-group-margin-bottom:         $spacer !default;
$progress-group-header-margin-bottom:  $spacer * .25 !default;
// scss-docs-end progress-variables

// List group
// scss-docs-start list-group-variables
$list-group-color:                  unset !default;
$list-group-bg:                     $white !default;
$list-group-border-color:           rgba($black, .125) !default;
$list-group-border-width:           $border-width !default;
$list-group-border-radius:          $border-radius !default;

$list-group-item-padding-y:         $spacer * .5 !default;
$list-group-item-padding-x:         $spacer !default;
$list-group-item-bg-scale:          -80% !default;
$list-group-item-color-scale:       40% !default;

$list-group-hover-bg:               $gray-100 !default;
$list-group-active-color:           $component-active-color !default;
$list-group-active-bg:              $component-active-bg !default;
$list-group-active-border-color:    $list-group-active-bg !default;

$list-group-disabled-color:         $gray-600 !default;
$list-group-disabled-bg:            $list-group-bg !default;

$list-group-action-color:           $gray-700 !default;
$list-group-action-hover-color:     $list-group-action-color !default;

$list-group-action-active-color:    $body-color !default;
$list-group-action-active-bg:       $gray-200 !default;
// scss-docs-end list-group-variables

$list-group-variants: (
  "primary": list-group-color-map($primary),
  "secondary": list-group-color-map($secondary),
  "success": list-group-color-map($success),
  "danger": list-group-color-map($danger),
  "warning": list-group-color-map($warning),
  "info": list-group-color-map($info),
  "light": list-group-color-map($light),
  "dark": list-group-color-map($dark)
) !default;
// scss-docs-end list-group-variables


// Header
// scss-docs-start header-variables
$header-min-height:             4rem !default;
$header-padding-y:              $spacer * .5 !default;
$header-padding-x:              $spacer * .5 !default;
$header-brand-font-size:        $font-size-lg !default;
$header-color:                  $medium-emphasis !default;
$header-bg:                     $white !default;
$header-border-color:           $border-color !default;
$header-border-width:           1px !default;
$header-hover-color:            $high-emphasis !default;
$header-active-color:           $high-emphasis !default;
$header-disabled-color:         $disabled !default;

// Compute the header-brand padding-y so the header-brand will have the same height as header-text and nav-link
$nav-link-height:               $font-size-base * $line-height-base + $nav-link-padding-y * 2 !default;
$header-brand-height:           $header-brand-font-size * $line-height-base !default;
$header-brand-padding-y:        ($nav-link-height - $header-brand-height) * .5 !default;
$header-brand-margin-end:       1rem !default;
$header-brand-font-size:        $font-size-lg !default;
$header-brand-color:            $gray-900 !default;
$header-brand-hover-color:      shade-color($gray-900, 10%) !default;

$header-toggler-padding-y:      .25rem !default;
$header-toggler-padding-x:      .75rem !default;
$header-toggler-font-size:      $font-size-lg !default;
$header-toggler-color:          $header-color !default;
$header-toggler-bg:             transparent !default;
$header-toggler-border-radius:  $btn-border-radius !default;
$header-toggler-hover-color:    $header-active-color !default;

$header-toggler-icon-bg:        url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$header-color}' stroke-width='2.25' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") !default;
$header-toggler-hover-icon-bg:  url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$header-hover-color}' stroke-width='2.25' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") !default;

$header-nav-link-padding-x:     .5rem !default;
$header-nav-link-padding-y:     .5rem !default;

$header-divider-border-width:   1px !default;
$header-divider-border-color:   $header-border-color !default;
// scss-docs-end header-variables

// Subheader
// scss-docs-start subheader-variables
$subheader-min-height:           3rem !default;
$subheader-padding-y:            $spacer * .5 !default;
$subheader-padding-x:            $spacer !default;
$subheader-border-color:         $border-color !default;
$subheader-border-width:         1px !default;

$subheader-nav-link-padding-x:  .5rem !default;
// scss-docs-end subheader-variables

// Default theme
// scss-docs-start subheader-default-themes
$subheader-bg:                     $white !default;
$subheader-color:                  $medium-emphasis !default;
$subheader-hover-color:            $high-emphasis !default;
$subheader-active-color:           $high-emphasis !default;
$subheader-disabled-color:         $disabled !default;
// scss-docs-end subheader-default-themes


// Image thumbnails

// scss-docs-start thumbnail-variables
$thumbnail-padding:                 .25rem !default;
$thumbnail-bg:                      $body-bg !default;
$thumbnail-border-width:            $border-width !default;
$thumbnail-border-color:            var(--#{$prefix}border-color) !default;
$thumbnail-border-radius:           $border-radius !default;
$thumbnail-box-shadow:              $box-shadow-sm !default;
// scss-docs-end thumbnail-variables


// Figures

// scss-docs-start figure-variables
$figure-caption-font-size:          $small-font-size !default;
$figure-caption-color:              $gray-600 !default;
// scss-docs-end figure-variables


// Breadcrumbs
// scss-docs-start breadcrumb-variables
$breadcrumb-font-size:              null !default;
$breadcrumb-padding-y:              0 !default;
$breadcrumb-padding-x:              0 !default;
$breadcrumb-item-padding-x:         .5rem !default;
$breadcrumb-margin-bottom:          1rem !default;
$breadcrumb-bg:                     unset !default;
$breadcrumb-divider-color:          $gray-600 !default;
$breadcrumb-active-color:           $gray-600 !default;
$breadcrumb-divider:                quote("/") !default;
$breadcrumb-divider-flipped:        $breadcrumb-divider !default;
$breadcrumb-border-radius:          null !default;
// scss-docs-end breadcrumb-variables

// Carousel
// scss-docs-start carousel-variables
$carousel-control-color:             $high-emphasis-inverse !default;
$carousel-control-width:             15% !default;
$carousel-control-opacity:           .5 !default;
$carousel-control-hover-opacity:     .9 !default;
$carousel-control-transition:        opacity .15s ease !default;

$carousel-indicator-width:           30px !default;
$carousel-indicator-height:          3px !default;
$carousel-indicator-hit-area-height: 10px !default;
$carousel-indicator-spacer:          3px !default;
$carousel-indicator-opacity:         .5 !default;
$carousel-indicator-active-bg:       $white !default;
$carousel-indicator-active-opacity:  1 !default;
$carousel-indicator-transition:      opacity .6s ease !default;

$carousel-caption-width:             70% !default;
$carousel-caption-color:             $high-emphasis-inverse !default;
$carousel-caption-padding-y:         1.25rem !default;
$carousel-caption-spacer:            1.25rem !default;

$carousel-control-icon-width:        2rem !default;

$carousel-control-prev-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/></svg>") !default;
$carousel-control-next-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg>") !default;

$carousel-transition-duration:       .6s !default;
$carousel-transition:                transform $carousel-transition-duration ease-in-out !default; // Define transform transition first if using multiple transitions (e.g., \`transform 2s ease, opacity .5s ease-out\`)
// scss-docs-end carousel-variables

// scss-docs-start carousel-dark-variables
$carousel-dark-indicator-active-bg:  $black !default;
$carousel-dark-caption-color:        $high-emphasis !default;
$carousel-dark-control-icon-filter:  invert(1) grayscale(100) !default;
// scss-docs-end carousel-dark-variables

// scss-docs-start sidebar-variables
$sidebar-width:                            16rem !default;
$sidebar-widths: (
  sm: 12rem,
  lg: 20rem,
  xl: 24rem
) !default;
$sidebar-padding-y:                        0 !default;
$sidebar-padding-x:                        0 !default;
$sidebar-color:                            $high-emphasis-inverse !default;
$sidebar-bg:                               $gray-base !default;
$sidebar-border-width:                     0 !default;
$sidebar-border-color:                     transparent !default;
$sidebar-transition:                       margin-left .15s, margin-right .15s, box-shadow .075s, transform .15s, width .15s, z-index 0s ease .15s !default;

$sidebar-close-button-width:               2rem !default;
$sidebar-close-button-height:              4rem !default;

$sidebar-brand-height:                     4rem !default;
$sidebar-brand-color:                      $high-emphasis-inverse !default;
$sidebar-brand-bg:                         rgba($black, .2) !default;

$sidebar-header-height:                    4rem !default;
$sidebar-header-padding-y:                 .75rem !default;
$sidebar-header-padding-x:                 1rem !default;
$sidebar-header-bg:                        rgba($black, .2) !default;
$sidebar-header-height-transition:         height .15s, padding .15s !default;

$sidebar-narrow-width:                     4rem !default;

$sidebar-backdrop-bg:                      $black !default;
$sidebar-backdrop-opacity:                 .5 !default;

$sidebar-nav-title-padding-y:              .75rem !default;
$sidebar-nav-title-padding-x:              1rem !default;
$sidebar-nav-title-margin-top:             1rem !default;
$sidebar-nav-title-color:                  $medium-emphasis-inverse !default;
$sidebar-nav-title-transition:             height .15s, margin .15s !default;

$sidebar-nav-link-padding-y:               .8445rem !default;
$sidebar-nav-link-padding-x:               1rem !default;
$sidebar-nav-link-color:                   $medium-emphasis-inverse !default;
$sidebar-nav-link-bg:                      transparent !default;
$sidebar-nav-link-border-width:            0 !default;
$sidebar-nav-link-border-color:            transparent !default;
$sidebar-nav-link-border-radius:           0 !default;
$sidebar-nav-link-transition:              background .15s ease, color .15s ease !default;
$sidebar-nav-link-icon-color:              $medium-emphasis-inverse !default;

$sidebar-nav-link-hover-color:             $high-emphasis-inverse !default;
$sidebar-nav-link-hover-bg:                rgba($white, .05) !default;
$sidebar-nav-link-hover-icon-color:        $high-emphasis-inverse !default;

$sidebar-nav-link-active-color:            $high-emphasis-inverse !default;
$sidebar-nav-link-active-bg:               rgba($white, .05) !default;
$sidebar-nav-link-active-icon-color:       $high-emphasis-inverse !default;

$sidebar-nav-link-disabled-color:          $disabled-inverse !default;
$sidebar-nav-link-disabled-icon-color:     $sidebar-nav-link-icon-color !default;

$sidebar-nav-icon-width:                   4rem !default;
$sidebar-nav-icon-height:                  1.25rem !default;
$sidebar-nav-icon-font-size:               $sidebar-nav-icon-height !default;

$sidebar-nav-group-bg:                     rgba(0, 0, 0, .2) !default;
$sidebar-nav-group-transition:             background .15s ease-in-out !default;
$sidebar-nav-group-toggle-show-color:      $sidebar-nav-link-color !default;

$sidebar-nav-group-items-padding-y:        0 !default;
$sidebar-nav-group-items-padding-x:        0 !default;
$sidebar-nav-group-items-transition:       height .15s ease !default;

$sidebar-nav-group-indicator-color:        $medium-emphasis-inverse !default;
$sidebar-nav-group-indicator-icon:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$sidebar-nav-group-indicator-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !default;
$sidebar-nav-group-indicator-hover-color:  $sidebar-nav-link-hover-color !default;
$sidebar-nav-group-indicator-hover-icon:   url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$sidebar-nav-group-indicator-hover-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !default;
$sidebar-nav-group-indicator-transition:   transform .15s !default;

$sidebar-footer-height:                    auto !default;
$sidebar-footer-padding-y:                 .75rem !default;
$sidebar-footer-padding-x:                 1rem !default;
$sidebar-footer-bg:                        rgba($black, .2) !default;
$sidebar-footer-height-transition:         height .15s, padding .15s !default;

$sidebar-toggler-height:                   3rem !default;
$sidebar-toggler-bg:                       rgba($black, .2) !default;
$sidebar-toggler-transition:               transform .15s !default;

$sidebar-toggler-indicator-width:          4rem !default;
$sidebar-toggler-indicator-height:         3rem !default;
$sidebar-toggler-indicator-color:          $gray-600 !default;
$sidebar-toggler-indicator-icon:           url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'%3E%3Cpath fill='#{$sidebar-toggler-indicator-color}' d='M9.148 2.352l-4.148 4.148 4.148 4.148q0.148 0.148 0.148 0.352t-0.148 0.352l-1.297 1.297q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.797q-0.148-0.148-0.148-0.352t0.148-0.352l5.797-5.797q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.297q0.148 0.148 0.148 0.352t-0.148 0.352z'/%3E%3C/svg%3E") !default;
$sidebar-toggler-hover-bg:                 rgba(0, 0, 0, .3) !default;

$sidebar-toggler-indicator-hover-color:    $sidebar-nav-link-hover-color !default;
$sidebar-toggler-indicator-hover-icon:     url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'%3E%3Cpath fill='#{$sidebar-toggler-indicator-hover-color}' d='M9.148 2.352l-4.148 4.148 4.148 4.148q0.148 0.148 0.148 0.352t-0.148 0.352l-1.297 1.297q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.797q-0.148-0.148-0.148-0.352t0.148-0.352l5.797-5.797q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.297q0.148 0.148 0.148 0.352t-0.148 0.352z'/%3E%3C/svg%3E") !default;

$sidebar-light-color:    $body-color !default;
$sidebar-light-bg:       $white !default;
$sidebar-light-border-width:                     0 !default;
$sidebar-light-border-color:                     transparent !default;

$sidebar-light-brand-color:  $white !default;
$sidebar-light-brand-bg:     $primary !default;

$sidebar-light-header-bg: rgba($black, .2) !default;

$sidebar-light-nav-title-color:                  $medium-emphasis !default;

$sidebar-light-nav-link-color:                   $medium-emphasis !default;
$sidebar-light-nav-link-bg:                      transparent !default;
$sidebar-light-nav-link-icon-color:              $medium-emphasis !default;

$sidebar-light-nav-link-hover-color:             $high-emphasis !default;
$sidebar-light-nav-link-hover-bg:                theme-color("primary") !default;
$sidebar-light-nav-link-hover-icon-color:        $high-emphasis !default;

$sidebar-light-nav-link-active-color:            $high-emphasis !default;
$sidebar-light-nav-link-active-bg:               rgba($white, .05) !default;
$sidebar-light-nav-link-active-icon-color:       $high-emphasis !default;

$sidebar-light-nav-link-disabled-color:          $disabled !default;
$sidebar-light-nav-link-disabled-icon-color:     $sidebar-light-nav-link-icon-color !default;

$sidebar-light-nav-group-bg:                     rgba(0, 0, 0, .05) !default;
$sidebar-light-nav-group-toggle-show-color:      $sidebar-light-nav-link-color !default;

$sidebar-light-nav-group-indicator-color:        $medium-emphasis !default;
$sidebar-light-nav-group-indicator-icon:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$sidebar-light-nav-group-indicator-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !default;
$sidebar-light-nav-group-indicator-hover-color:  $sidebar-light-nav-link-hover-color !default;
$sidebar-light-nav-group-indicator-hover-icon:   url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$sidebar-light-nav-group-indicator-hover-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !default;

$sidebar-light-footer-bg:                        rgba($black, .1) !default;

$sidebar-light-toggler-bg:                       rgba($black, .1) !default;
$sidebar-light-toggler-hover-bg:                 rgba(0, 0, 0, .2) !default;
$sidebar-light-toggler-indicator-color:          $medium-emphasis !default;
$sidebar-light-toggler-indicator-icon:           url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'%3E%3Cpath fill='#{$sidebar-light-toggler-indicator-color}' d='M9.148 2.352l-4.148 4.148 4.148 4.148q0.148 0.148 0.148 0.352t-0.148 0.352l-1.297 1.297q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.797q-0.148-0.148-0.148-0.352t0.148-0.352l5.797-5.797q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.297q0.148 0.148 0.148 0.352t-0.148 0.352z'/%3E%3C/svg%3E") !default;
$sidebar-light-toggler-indicator-hover-color:    $sidebar-light-nav-link-hover-color !default;
$sidebar-light-toggler-indicator-hover-icon:     url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'%3E%3Cpath fill='#{$sidebar-light-toggler-indicator-hover-color}' d='M9.148 2.352l-4.148 4.148 4.148 4.148q0.148 0.148 0.148 0.352t-0.148 0.352l-1.297 1.297q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.797q-0.148-0.148-0.148-0.352t0.148-0.352l5.797-5.797q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.297q0.148 0.148 0.148 0.352t-0.148 0.352z'/%3E%3C/svg%3E") !default;
// scss-docs-end sidebar-variables

// Footer
// scss-docs-start footer-variables
$footer-min-height:    3rem !default;
$footer-padding-y:     $spacer * .5 !default;
$footer-padding-x:     $spacer !default;
$footer-bg:            $gray-100 !default;
$footer-color:         $body-color !default;
$footer-border-width:  1px !default;
$footer-border-color:  $border-color !default;
// scss-docs-end footer-variables

// Spinners
// scss-docs-start spinner-variables
$spinner-width:           2rem !default;
$spinner-height:          $spinner-width !default;
$spinner-vertical-align:  -.125em !default;
$spinner-border-width:    .25em !default;
$spinner-animation-speed: .75s !default;

$spinner-width-sm:        1rem !default;
$spinner-height-sm:       $spinner-width-sm !default;
$spinner-border-width-sm: .2em !default;
// scss-docs-end spinner-variables


// Close
// scss-docs-start close-variables
$btn-close-width:            1em !default;
$btn-close-height:           $btn-close-width !default;
$btn-close-padding-x:        .25em !default;
$btn-close-padding-y:        $btn-close-padding-x !default;
$btn-close-color:            $high-emphasis !default;
$btn-close-bg:               url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$btn-close-color}'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/></svg>") !default;
$btn-close-focus-shadow:     $input-btn-focus-box-shadow !default;
$btn-close-opacity:          .5 !default;
$btn-close-hover-opacity:    .75 !default;
$btn-close-focus-opacity:    1 !default;
$btn-close-disabled-opacity: .25 !default;
$btn-close-white-filter:     invert(1) grayscale(100%) brightness(200%) !default;
// scss-docs-end close-variables


// Offcanvas

// scss-docs-start offcanvas-variables
$offcanvas-padding-y:               $modal-inner-padding !default;
$offcanvas-padding-x:               $modal-inner-padding !default;
$offcanvas-horizontal-width:        400px !default;
$offcanvas-vertical-height:         30vh !default;
$offcanvas-transition-duration:     .3s !default;
$offcanvas-border-color:            $modal-content-border-color !default;
$offcanvas-border-width:            $modal-content-border-width !default;
$offcanvas-title-line-height:       $modal-title-line-height !default;
$offcanvas-bg-color:                $modal-content-bg !default;
$offcanvas-color:                   $modal-content-color !default;
$offcanvas-box-shadow:              $modal-content-box-shadow-xs !default;
$offcanvas-backdrop-bg:             $modal-backdrop-bg !default;
$offcanvas-backdrop-opacity:        $modal-backdrop-opacity !default;
// scss-docs-end offcanvas-variables

// Code

$code-font-size:                    $small-font-size !default;
$code-color:                        $pink !default;

$kbd-padding-y:                     .1875rem !default;
$kbd-padding-x:                     .375rem !default;
$kbd-font-size:                     $code-font-size !default;
$kbd-color:                         var(--#{$prefix}body-bg) !default;
$kbd-bg:                            var(--#{$prefix}body-color) !default;
$nested-kbd-font-weight:            null !default; // Deprecated in v4.2.6, removing in v6

$pre-color:                         unset !default;

// Calendar & Date & Time Pickers

// Calendar
// scss-docs-start calendar-variables
$calendar-table-margin:                     .5rem !default;
$calendar-table-cell-size:                  2.75rem !default;

$calendar-nav-padding:                      .5rem !default;
$calendar-nav-border-width:                 1px !default;
$calendar-nav-border-color:                 $border-color !default;
$calendar-nav-date-color:                   $body-color !default;
$calendar-nav-date-hover-color:             $primary !default;
$calendar-nav-icon-width:                   1rem !default;
$calendar-nav-icon-height:                  1rem !default;

$calendar-nav-icon-double-next-color:       $gray-600 !default;
$calendar-nav-icon-double-next:             url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#{$calendar-nav-icon-double-next-color}' points='95.314 447.313 72.686 424.687 245.373 252 72.686 79.313 95.314 56.687 290.627 252 95.314 447.313'></polygon><polygon fill='#{$calendar-nav-icon-double-next-color}' points='255.314 447.313 232.686 424.687 405.373 252 232.686 79.313 255.314 56.687 450.627 252 255.314 447.313'></polygon></svg>") !default;
$calendar-nav-icon-double-next-hover-color: $body-color !default;
$calendar-nav-icon-double-next-hover:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#{$calendar-nav-icon-double-next-hover-color}' points='95.314 447.313 72.686 424.687 245.373 252 72.686 79.313 95.314 56.687 290.627 252 95.314 447.313'></polygon><polygon fill='#{$calendar-nav-icon-double-next-hover-color}' points='255.314 447.313 232.686 424.687 405.373 252 232.686 79.313 255.314 56.687 450.627 252 255.314 447.313'></polygon></svg>") !default;

$calendar-nav-icon-double-prev-color:       $gray-600 !default;
$calendar-nav-icon-double-prev:             url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#{$calendar-nav-icon-double-prev-color}' points='416.686 447.313 221.373 252 416.686 56.687 439.314 79.313 266.627 252 439.314 424.687 416.686 447.313'></polygon><polygon fill='#{$calendar-nav-icon-double-prev-color}' points='256.686 447.313 61.373 252 256.686 56.687 279.314 79.313 106.627 252 279.314 424.687 256.686 447.313'></polygon></svg>") !default;
$calendar-nav-icon-double-prev-hover-color: $body-color !default;
$calendar-nav-icon-double-prev-hover:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#{$calendar-nav-icon-double-prev-hover-color}' points='416.686 447.313 221.373 252 416.686 56.687 439.314 79.313 266.627 252 439.314 424.687 416.686 447.313'></polygon><polygon fill='#{$calendar-nav-icon-double-prev-hover-color}' points='256.686 447.313 61.373 252 256.686 56.687 279.314 79.313 106.627 252 279.314 424.687 256.686 447.313'></polygon></svg>") !default;

$calendar-nav-icon-next-color:              $gray-600 !default;
$calendar-nav-icon-next:                    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#{$calendar-nav-icon-next-color}' points='179.313 451.313 156.687 428.687 329.372 256 156.687 83.313 179.313 60.687 374.627 256 179.313 451.313'></polygon></svg>") !default;
$calendar-nav-icon-next-hover-color:        $body-color !default;
$calendar-nav-icon-next-hover:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#{$calendar-nav-icon-next-hover-color}' points='179.313 451.313 156.687 428.687 329.372 256 156.687 83.313 179.313 60.687 374.627 256 179.313 451.313'></polygon></svg>") !default;

$calendar-nav-icon-prev-color:              $gray-600 !default;
$calendar-nav-icon-prev:                    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#{$calendar-nav-icon-prev-color}' points='324.687 451.313 129.373 256 324.687 60.687 347.313 83.313 174.628 256 347.313 428.687 324.687 451.313'></polygon></svg>") !default;
$calendar-nav-icon-prev-hover-color:        $body-color !default;
$calendar-nav-icon-prev-hover:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#{$calendar-nav-icon-prev-hover-color}' points='324.687 451.313 129.373 256 324.687 60.687 347.313 83.313 174.628 256 347.313 428.687 324.687 451.313'></polygon></svg>") !default;

$calendar-cell-header-inner-color:          $text-medium-emphasis !default;

$calendar-cell-hover-bg:                    $gray-200 !default;
$calendar-cell-disabled-color:              $text-disabled !default;

$calendar-cell-selected-color:              $white !default;
$calendar-cell-selected-bg:                 $primary !default;

$calendar-cell-range-bg:                    rgba($primary, .125) !default;
$calendar-cell-range-hover-bg:              rgba($primary, .25) !default;
$calendar-cell-range-hover-border-color:    $primary !default;

$calendar-cell-today-color:                 $danger !default;
// scss-docs-end calendar-variables

// Picker
$picker-footer-border-width:  1px !default;
$picker-footer-border-color:  $border-color !default;
$picker-footer-padding:       .5rem !default;

// Date Picker
// scss-docs-start date-picker-variables
$date-picker-default-icon-color:       $gray-600 !default;
$date-picker-default-icon:             url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><path fill='#{$date-picker-default-icon-color}' d='M472,96H384V40H352V96H160V40H128V96H40a24.028,24.028,0,0,0-24,24V456a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V120A24.028,24.028,0,0,0,472,96Zm-8,352H48V128h80v40h32V128H352v40h32V128h80Z'></path><rect width='32' height='32' x='112' y='224' fill='#{$date-picker-default-icon-color}'></rect><rect width='32' height='32' x='200' y='224' fill='#{$date-picker-default-icon-color}'></rect><rect width='32' height='32' x='280' y='224' fill='#{$date-picker-default-icon-color}'></rect><rect width='32' height='32' x='368' y='224' fill='#{$date-picker-default-icon-color}'></rect><rect width='32' height='32' x='112' y='296' fill='#{$date-picker-default-icon-color}'></rect><rect width='32' height='32' x='200' y='296' fill='#{$date-picker-default-icon-color}'></rect><rect width='32' height='32' x='280' y='296' fill='#{$date-picker-default-icon-color}'></rect><rect width='32' height='32' x='368' y='296' fill='#{$date-picker-default-icon-color}'></rect><rect width='32' height='32' x='112' y='368' fill='#{$date-picker-default-icon-color}'></rect><rect width='32' height='32' x='200' y='368' fill='#{$date-picker-default-icon-color}'></rect><rect width='32' height='32' x='280' y='368' fill='#{$date-picker-default-icon-color}'></rect><rect width='32' height='32' x='368' y='368' fill='#{$date-picker-default-icon-color}'></rect></svg>") !default;
$date-picker-invalid-icon:             url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><path fill='#{$form-feedback-invalid-color}' d='M472,96H384V40H352V96H160V40H128V96H40a24.028,24.028,0,0,0-24,24V456a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V120A24.028,24.028,0,0,0,472,96Zm-8,352H48V128h80v40h32V128H352v40h32V128h80Z'></path><rect width='32' height='32' x='112' y='224' fill='#{$form-feedback-invalid-color}'></rect><rect width='32' height='32' x='200' y='224' fill='#{$form-feedback-invalid-color}'></rect><rect width='32' height='32' x='280' y='224' fill='#{$form-feedback-invalid-color}'></rect><rect width='32' height='32' x='368' y='224' fill='#{$form-feedback-invalid-color}'></rect><rect width='32' height='32' x='112' y='296' fill='#{$form-feedback-invalid-color}'></rect><rect width='32' height='32' x='200' y='296' fill='#{$form-feedback-invalid-color}'></rect><rect width='32' height='32' x='280' y='296' fill='#{$form-feedback-invalid-color}'></rect><rect width='32' height='32' x='368' y='296' fill='#{$form-feedback-invalid-color}'></rect><rect width='32' height='32' x='112' y='368' fill='#{$form-feedback-invalid-color}'></rect><rect width='32' height='32' x='200' y='368' fill='#{$form-feedback-invalid-color}'></rect><rect width='32' height='32' x='280' y='368' fill='#{$form-feedback-invalid-color}'></rect><rect width='32' height='32' x='368' y='368' fill='#{$form-feedback-invalid-color}'></rect></svg>") !default;
$date-picker-valid-icon:               url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><path fill='#{$form-feedback-valid-color}' d='M472,96H384V40H352V96H160V40H128V96H40a24.028,24.028,0,0,0-24,24V456a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V120A24.028,24.028,0,0,0,472,96Zm-8,352H48V128h80v40h32V128H352v40h32V128h80Z'></path><rect width='32' height='32' x='112' y='224' fill='#{$form-feedback-valid-color}'></rect><rect width='32' height='32' x='200' y='224' fill='#{$form-feedback-valid-color}'></rect><rect width='32' height='32' x='280' y='224' fill='#{$form-feedback-valid-color}'></rect><rect width='32' height='32' x='368' y='224' fill='#{$form-feedback-valid-color}'></rect><rect width='32' height='32' x='112' y='296' fill='#{$form-feedback-valid-color}'></rect><rect width='32' height='32' x='200' y='296' fill='#{$form-feedback-valid-color}'></rect><rect width='32' height='32' x='280' y='296' fill='#{$form-feedback-valid-color}'></rect><rect width='32' height='32' x='368' y='296' fill='#{$form-feedback-valid-color}'></rect><rect width='32' height='32' x='112' y='368' fill='#{$form-feedback-valid-color}'></rect><rect width='32' height='32' x='200' y='368' fill='#{$form-feedback-valid-color}'></rect><rect width='32' height='32' x='280' y='368' fill='#{$form-feedback-valid-color}'></rect><rect width='32' height='32' x='368' y='368' fill='#{$form-feedback-valid-color}'></rect></svg>") !default;

$date-picker-cleaner-icon-color:       $gray-600 !default;
$date-picker-cleaner-icon:             url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#{$date-picker-cleaner-icon-color}' points='306.912 214.461 256 265.373 205.088 214.461 182.461 237.088 233.373 288 182.461 338.912 205.088 361.539 256 310.627 306.912 361.539 329.539 338.912 278.627 288 329.539 237.088 306.912 214.461'></polygon><path fill='#{$date-picker-cleaner-icon-color}' d='M472,96H384V40H352V96H160V40H128V96H40a24.028,24.028,0,0,0-24,24V456a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V120A24.028,24.028,0,0,0,472,96Zm-8,352H48V128h80v40h32V128H352v40h32V128h80Z'></path></svg>") !default;
$date-picker-cleaner-icon-hover-color: $body-color !default;
$date-picker-cleaner-icon-hover:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#{$date-picker-cleaner-icon-hover-color}' points='306.912 214.461 256 265.373 205.088 214.461 182.461 237.088 233.373 288 182.461 338.912 205.088 361.539 256 310.627 306.912 361.539 329.539 338.912 278.627 288 329.539 237.088 306.912 214.461'></polygon><path fill='#{$date-picker-cleaner-icon-hover-color})' d='M472,96H384V40H352V96H160V40H128V96H40a24.028,24.028,0,0,0-24,24V456a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V120A24.028,24.028,0,0,0,472,96Zm-8,352H48V128h80v40h32V128H352v40h32V128h80Z'></path></svg>") !default;

$date-picker-separator-icon-color:     $gray-600 !default;
$date-picker-separator-icon:           url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#{$date-picker-separator-icon-color}' points='359.873 121.377 337.246 144.004 433.243 240.001 16 240.001 16 240.002 16 272.001 16 272.002 433.24 272.002 337.246 367.996 359.873 390.623 494.498 256 359.873 121.377'></polygon></svg>") !default;
$date-picker-separator-icon-rtl:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#{$date-picker-separator-icon-color}' points='497.333 239.999 80.092 239.999 176.087 144.004 153.46 121.377 18.837 256 153.46 390.623 176.087 367.996 80.09 271.999 497.333 271.999 497.333 239.999'></polygon></svg>") !default;

$date-picker-ranges-width:             10rem !default;
$date-picker-ranges-padding:           $spacer * .5 !default;
$date-picker-ranges-border-width:      1px !default;
$date-picker-ranges-border-color:      $border-color !default;

$date-picker-timepicker-width:         (7 * $calendar-table-cell-size) + (2 * $calendar-table-margin) !default;
$date-picker-timepicker-border-width:  1px !default;
$date-picker-timepicker-border-color:  $border-color !default;
// scss-docs-end date-picker-variables

// Time Picker
// scss-docs-start time-picker-variables
$time-picker-default-icon-color:       $gray-600 !default;
$time-picker-default-icon:             url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#{$time-picker-default-icon-color}' points='271.514 95.5 239.514 95.5 239.514 273.611 355.127 328.559 368.864 299.657 271.514 253.389 271.514 95.5' class='ci-primary'></polygon><path fill='#{$time-picker-default-icon-color}' d='M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16Zm0,448C141.125,464,48,370.875,48,256S141.125,48,256,48s208,93.125,208,208S370.875,464,256,464Z' class='ci-primary'></path></svg>") !default;
$time-picker-invalid-icon:             url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#{$form-feedback-invalid-color}' points='271.514 95.5 239.514 95.5 239.514 273.611 355.127 328.559 368.864 299.657 271.514 253.389 271.514 95.5' class='ci-primary'></polygon><path fill='#{$form-feedback-invalid-color}' d='M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16Zm0,448C141.125,464,48,370.875,48,256S141.125,48,256,48s208,93.125,208,208S370.875,464,256,464Z' class='ci-primary'></path></svg>") !default;
$time-picker-valid-icon:             url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#{$form-feedback-valid-color}' points='271.514 95.5 239.514 95.5 239.514 273.611 355.127 328.559 368.864 299.657 271.514 253.389 271.514 95.5' class='ci-primary'></polygon><path fill='#{$form-feedback-valid-color}' d='M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16Zm0,448C141.125,464,48,370.875,48,256S141.125,48,256,48s208,93.125,208,208S370.875,464,256,464Z' class='ci-primary'></path></svg>") !default;

$time-picker-cleaner-icon-color:       $gray-600 !default;
$time-picker-cleaner-icon:             url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#{$time-picker-cleaner-icon-color}' points='348.071 141.302 260.308 229.065 172.545 141.302 149.917 163.929 237.681 251.692 149.917 339.456 172.545 362.083 260.308 274.32 348.071 362.083 370.699 339.456 282.935 251.692 370.699 163.929 348.071 141.302' class='ci-primary'></polygon><path fill='#{$time-picker-cleaner-icon-color}' d='M425.706,86.294A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294ZM256,464C141.309,464,48,370.691,48,256S141.309,48,256,48s208,93.309,208,208S370.691,464,256,464Z' class='ci-primary'></path></svg>") !default;
$time-picker-cleaner-icon-hover-color: $body-color !default;
$time-picker-cleaner-icon-hover:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#{$time-picker-cleaner-icon-hover-color}' points='348.071 141.302 260.308 229.065 172.545 141.302 149.917 163.929 237.681 251.692 149.917 339.456 172.545 362.083 260.308 274.32 348.071 362.083 370.699 339.456 282.935 251.692 370.699 163.929 348.071 141.302' class='ci-primary'></polygon><path fill='#{$time-picker-cleaner-icon-hover-color}' d='M425.706,86.294A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294ZM256,464C141.309,464,48,370.691,48,256S141.309,48,256,48s208,93.309,208,208S370.691,464,256,464Z' class='ci-primary'></path></svg>") !default;

$time-picker-body-padding:             $spacer * .5 !default;
$time-picker-roll-col-border-width:    1px !default;
$time-picker-roll-col-border-color:    $border-color !default;
// scss-docs-end time-picker-variables
`,ne=`/*!
 * CoreUI PRO - HTML, CSS, and JavaScript UI Components Library
 * @version v4.5.0
 * @link https://coreui.io/pro/
 * Copyright (c) 2021 creativeLabs Łukasz Holeczek
 * License (https://coreui.io/pro/license/)
*/

$enable-ltr: false !default;
$enable-rtl: true !default;

@import "coreui-grid";
`,ee=`/*!
 * CoreUI PRO - HTML, CSS, and JavaScript UI Components Library
 * @version v4.5.0
 * @link https://coreui.io/pro/
 * Copyright (c) 2021 creativeLabs Łukasz Holeczek
 * License (https://coreui.io/pro/license/)
*/

$include-column-box-sizing: true !default;

@import "functions";
@import "variables";
@import "maps";

@import "mixins/ltr-rtl";
@import "mixins/lists";
@import "mixins/breakpoints";
@import "mixins/container";
@import "mixins/grid";
@import "mixins/utilities";

@import "vendor/rfs";

@import "root";

@import "containers";
@import "grid";

@import "utilities";
// Only use the utilities we need
// stylelint-disable-next-line scss/dollar-variable-default
$utilities: map-get-multiple(
  $utilities,
  (
    "display",
    "order",
    "flex",
    "flex-direction",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "justify-content",
    "align-items",
    "align-content",
    "align-self",
    "margin",
    "margin-x",
    "margin-y",
    "margin-top",
    "margin-end",
    "margin-bottom",
    "margin-start",
    "negative-margin",
    "negative-margin-x",
    "negative-margin-y",
    "negative-margin-top",
    "negative-margin-end",
    "negative-margin-bottom",
    "negative-margin-start",
    "padding",
    "padding-x",
    "padding-y",
    "padding-top",
    "padding-end",
    "padding-bottom",
    "padding-start",
  )
);

@import "utilities/api";
`,re=`/*!
 * CoreUI PRO - HTML, CSS, and JavaScript UI Components Library
 * @version v4.5.0
 * @link https://coreui.io/pro/
 * Copyright (c) 2021 creativeLabs Łukasz Holeczek
 * License (https://coreui.io/pro/license/)
*/

$enable-ltr: false !default;
$enable-rtl: true !default;

@import "coreui-reboot";
`,oe=`/*!
 * CoreUI PRO - HTML, CSS, and JavaScript UI Components Library
 * @version v4.5.0
 * @link https://coreui.io/pro/
 * Copyright (c) 2021 creativeLabs Łukasz Holeczek
 * License (https://coreui.io/pro/license/)
 */

@import "functions";
@import "variables";
@import "mixins";
@import "root";
@import "reboot";
`,te=`/*!
 * CoreUI PRO - HTML, CSS, and JavaScript UI Components Library
 * @version v4.5.0
 * @link https://coreui.io/pro/
 * Copyright (c) 2021 creativeLabs Łukasz Holeczek
 * License (https://coreui.io/pro/license/)
*/

$enable-ltr: false !default;
$enable-rtl: true !default;

@import "coreui-utilities";
`,ie=`/*!
 * CoreUI PRO - HTML, CSS, and JavaScript UI Components Library
 * @version v4.5.0
 * @link https://coreui.io/pro/
 * Copyright (c) 2021 creativeLabs Łukasz Holeczek
 * License (https://coreui.io/pro/license/)
 */

// Configuration
@import "functions";
@import "variables";
@import "maps";
@import "mixins";
@import "utilities";

// Layout & components
@import "root";

// Helpers
@import "helpers";

// Utilities
@import "utilities/api";
`,ae=`/*!
 * CoreUI PRO - HTML, CSS, and JavaScript UI Components Library
 * @version v4.5.0
 * @link https://coreui.io/pro/
 * Copyright (c) 2021 creativeLabs Łukasz Holeczek
 * License (https://coreui.io/pro/license/)
*/

$enable-ltr: false !default;
$enable-rtl: true !default;

@import "coreui";
`,le=`/*!
 * CoreUI PRO - HTML, CSS, and JavaScript UI Components Library
 * @version v4.5.0
 * @link https://coreui.io/pro/
 * Copyright (c) 2021 creativeLabs Łukasz Holeczek
 * License (https://coreui.io/pro/license/)
 */

// scss-docs-start import-stack
// Configuration
@import "functions";
@import "variables";
@import "maps";
@import "mixins";
@import "utilities";

// Layout & components
@import "root";
@import "reboot";
@import "type";
@import "images";
@import "containers";
@import "grid";
@import "tables";
@import "forms";
@import "buttons";
@import "loading-button";
@import "transitions";
@import "dropdown";
@import "button-group";
@import "nav";
@import "navbar";
@import "card";
@import "accordion";
@import "breadcrumb";
@import "pagination";
@import "badge";
@import "alert";
@import "progress";
@import "list-group";
@import "close";
@import "toasts";
@import "modal";
@import "tooltip";
@import "popover";
@import "carousel";
@import "spinners";
@import "offcanvas";
@import "placeholders";

@import "avatar";
@import "calendar";
@import "callout";
@import "picker";
@import "date-picker";
@import "time-picker";
@import "footer";
@import "header";
@import "icon";
@import "sidebar";
@import "subheader";

// Helpers
@import "helpers";

// Utilities
@import "utilities/api";
@import "utilities/bg-gradients";
// scss-docs-end import-stack
`,de=`.form-floating {
  position: relative;

  > .form-control,
  > .form-control-plaintext,
  > .form-select {
    height: $form-floating-height;
    line-height: $form-floating-line-height;
  }

  > label {
    position: absolute;
    top: 0;
    @include ltr-rtl("left", 0);
    width: 100%;
    height: 100%; // allow textareas
    padding: $form-floating-padding-y $form-floating-padding-x;
    overflow: hidden;
    text-align: start;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
    border: $input-border-width solid transparent; // Required for aligning label's text with the input as it affects inner box model
    transform-origin: 0 0;
    @include transition($form-floating-transition);
  }

  > .form-control,
  > .form-control-plaintext {
    padding: $form-floating-padding-y $form-floating-padding-x;

    &::placeholder {
      color: transparent;
    }

    &:focus,
    &:not(:placeholder-shown) {
      padding-top: $form-floating-input-padding-t;
      padding-bottom: $form-floating-input-padding-b;
    }
    // Duplicated because \`:-webkit-autofill\` invalidates other selectors when grouped
    &:-webkit-autofill {
      padding-top: $form-floating-input-padding-t;
      padding-bottom: $form-floating-input-padding-b;
    }
  }

  > .form-select {
    padding-top: $form-floating-input-padding-t;
    padding-bottom: $form-floating-input-padding-b;
  }

  > .form-control:focus,
  > .form-control:not(:placeholder-shown),
  > .form-control-plaintext,
  > .form-select {
    ~ label {
      opacity: $form-floating-label-opacity;
      transform: $form-floating-label-transform;
    }
  }
  // Duplicated because \`:-webkit-autofill\` invalidates other selectors when grouped
  > .form-control:-webkit-autofill {
    ~ label {
      opacity: $form-floating-label-opacity;
      transform: $form-floating-label-transform;
    }
  }

  > .form-control-plaintext {
    ~ label {
      border-width: $input-border-width 0; // Required to properly position label text - as explained above
    }
  }
}
`,se=`//
// Check/radio
//

.form-check {
  display: block;
  min-height: $form-check-min-height;
  @include ltr-rtl("padding-left", $form-check-padding-start);
  margin-bottom: $form-check-margin-bottom;

  .form-check-input {
    // float: left;
    // margin-left: $form-check-padding-start * -1;
    @include ltr-rtl("float", left);
    @include ltr-rtl("margin-left", $form-check-padding-start * -1);
  }
}

.form-check-reverse {
  padding-right: $form-check-padding-start;
  padding-left: 0;
  text-align: right;

  .form-check-input {
    float: right;
    margin-right: $form-check-padding-start * -1;
    margin-left: 0;
  }
}

.form-check-input {
  width: $form-check-input-width;
  height: $form-check-input-width;
  margin-top: ($line-height-base - $form-check-input-width) * .5; // line-height minus check height
  vertical-align: top;
  background-color: var(--#{$prefix}form-check-input-bg, $form-check-input-bg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: $form-check-input-border;
  appearance: none;
  print-color-adjust: exact; // Keep themed appearance for print
  @include transition($form-check-transition);

  &[type="checkbox"] {
    @include border-radius($form-check-input-border-radius);
  }

  &[type="radio"] {
    // stylelint-disable-next-line property-disallowed-list
    border-radius: $form-check-radio-border-radius;
  }

  &:active {
    filter: $form-check-input-active-filter;
  }

  &:focus {
    border-color: $form-check-input-focus-border;
    outline: 0;
    box-shadow: $form-check-input-focus-box-shadow;
  }

  &:checked {
    background-color: var(--#{$prefix}form-check-input-checked-bg-color, $form-check-input-checked-bg-color);
    border-color: var(--#{$prefix}form-check-input-checked-border-color, $form-check-input-checked-border-color);

    &[type="checkbox"] {
      @if $enable-gradients {
        background-image: escape-svg($form-check-input-checked-bg-image), var(--#{$prefix}gradient);
      } @else {
        background-image: var(--#{$prefix}form-check-input-checked-bg-image, escape-svg($form-check-input-checked-bg-image));
      }
    }

    &[type="radio"] {
      @if $enable-gradients {
        background-image: escape-svg($form-check-radio-checked-bg-image), var(--#{$prefix}gradient);
      } @else {
        background-image: var(--#{$prefix}form-check-radio-checked-bg-image, escape-svg($form-check-radio-checked-bg-image));
      }
    }
  }

  &[type="checkbox"]:indeterminate {
    background-color: $form-check-input-indeterminate-bg-color;
    border-color: $form-check-input-indeterminate-border-color;

    @if $enable-gradients {
      background-image: escape-svg($form-check-input-indeterminate-bg-image), var(--#{$prefix}gradient);
    } @else {
      background-image: var(--#{$prefix}form-check-input-indeterminate-bg-image, escape-svg($form-check-input-indeterminate-bg-image));
    }
  }

  &:disabled {
    pointer-events: none;
    filter: none;
    opacity: $form-check-input-disabled-opacity;
  }

  // Use disabled attribute in addition of :disabled pseudo-class
  // See: https://github.com/twbs/bootstrap/issues/28247
  &[disabled],
  &:disabled {
    ~ .form-check-label {
      cursor: default;
      opacity: $form-check-label-disabled-opacity;
    }
  }
}

.form-check-label {
  color: var(--#{$prefix}form-check-label-color, $form-check-label-color);
  cursor: $form-check-label-cursor;
}

//
// Switch
//

.form-switch {
  @include ltr-rtl("padding-left", $form-switch-padding-start);

  .form-check-input {
    width: $form-switch-width;
    @include ltr-rtl("margin-left", $form-switch-padding-start * -1);
    background-image: var(--#{$prefix}form-switch-bg-image, escape-svg($form-switch-bg-image));
    background-position: left center;
    @include border-radius($form-switch-border-radius);
    @include transition($form-switch-transition);

    &:focus {
      background-image: var(--#{$prefix}form-switch-focus-bg-image, escape-svg($form-switch-focus-bg-image));
    }

    &:checked {
      background-position: $form-switch-checked-bg-position;

      @if $enable-gradients {
        background-image: escape-svg($form-switch-checked-bg-image), var(--#{$prefix}gradient);
      } @else {
        background-image: var(--#{$prefix}form-switch-checked-bg-image, escape-svg($form-switch-checked-bg-image));
      }
    }
  }

  &.form-check-reverse {
    padding-right: $form-switch-padding-start;
    padding-left: 0;

    .form-check-input {
      margin-right: $form-switch-padding-start * -1;
      margin-left: 0;
    }
  }
}

@each $size, $map in $form-switch-widths {
  $width: map-get($map, "width");
  $height: map-get($map, "height");

  .form-switch-#{$size} {
    min-height: $height;
    @include ltr-rtl("padding-left", $width + .5em);

    .form-check-input {
      width: $width;
      height: $height;
      @include ltr-rtl("margin-left", ($width + .5em) * -1);
    }

    .form-check-label {
      // stylelint-disable-next-line function-disallowed-list
      padding-top: calc((#{$height} - #{$font-size-base}) / 2);
    }
  }
}

.form-check-inline {
  display: inline-block;
  @include ltr-rtl("margin-right", $form-check-inline-margin-end);
}

.btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;

  &[disabled],
  &:disabled {
    + .btn {
      pointer-events: none;
      filter: none;
      opacity: $form-check-btn-check-disabled-opacity;
    }
  }
}

//
// Alternate form checks
//

@each $state, $color in $theme-colors {
  .form-check-#{$state} {
    --#{$prefix}form-check-input-checked-bg-color: #{$color};
    --#{$prefix}form-check-input-checked-border-color: #{$color};
    --#{$prefix}form-check-input-indeterminate-bg-color: #{$color};
    --#{$prefix}form-check-input-indeterminate-border-color: #{$color};
  }
}
`,ce=`//
// General form controls (plus a few specific high-level interventions)
//

.form-control {
  display: block;
  width: 100%;
  padding: $input-padding-y $input-padding-x;
  font-family: $input-font-family;
  @include font-size($input-font-size);
  font-weight: $input-font-weight;
  line-height: $input-line-height;
  color: var(--#{$prefix}input-color, $input-color);
  background-color: var(--#{$prefix}input-bg, $input-bg);
  background-clip: padding-box;
  border: $input-border-width solid var(--#{$prefix}input-border-color, $input-border-color);
  appearance: none; // Fix appearance for date inputs in Safari

  // Note: This has no effect on <select>s in some browsers, due to the limited stylability of \`<select>\`s in CSS.
  @include border-radius($input-border-radius, 0);

  @include box-shadow($input-box-shadow);
  @include transition($input-transition);

  &[type="file"] {
    overflow: hidden; // prevent pseudo element button overlap

    &:not(:disabled):not([readonly]) {
      cursor: pointer;
    }
  }

  // Customize the \`:focus\` state to imitate native WebKit styles.
  &:focus {
    color: var(--#{$prefix}input-focus-color, $input-focus-color);
    background-color: var(--#{$prefix}input-focus-bg, $input-focus-bg);
    border-color: var(--#{$prefix}input-focus-border-color, $input-focus-border-color);
    outline: 0;
    @if $enable-shadows {
      @include box-shadow($input-box-shadow, $input-focus-box-shadow);
    } @else {
      // Avoid using mixin so we can pass custom focus shadow properly
      box-shadow: $input-focus-box-shadow;
    }
  }

  // Add some height to date inputs on iOS
  // https://github.com/twbs/bootstrap/issues/23307
  // TODO: we can remove this workaround once https://bugs.webkit.org/show_bug.cgi?id=198959 is resolved
  &::-webkit-date-and-time-value {
    // Multiply line-height by 1em if it has no unit
    height: if(unit($input-line-height) == "", $input-line-height * 1em, $input-line-height);
  }

  // Placeholder
  &::placeholder {
    color: var(--#{$prefix}input-placeholder-color, $input-placeholder-color);
    // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
    opacity: 1;
  }

  // Disabled inputs
  //
  // HTML5 says that controls under a fieldset > legend:first-child won't be
  // disabled if the fieldset is disabled. Due to implementation difficulty, we
  // don't honor that edge case; we style them as disabled anyway.
  &:disabled {
    color: $input-disabled-color;
    background-color: $input-disabled-bg;
    border-color: $input-disabled-border-color;
    // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655.
    opacity: 1;
  }

  // File input buttons theming
  &::file-selector-button {
    padding: $input-padding-y $input-padding-x;
    margin: (-$input-padding-y) (-$input-padding-x);
    margin-inline-end: $input-padding-x;
    color: var(--#{$prefix}form-file-button-color, $form-file-button-color);
    @include gradient-bg(var(--#{$prefix}form-file-button-bg, $form-file-button-bg));
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: $input-border-width;
    border-radius: 0; // stylelint-disable-line property-disallowed-list
    @include transition($btn-transition);
  }

  &:hover:not(:disabled):not([readonly])::file-selector-button {
    background-color: var(--#{$prefix}form-file-button-hover-bg, $form-file-button-hover-bg);
  }
}

// Readonly controls as plain text
//
// Apply class to a readonly input to make it appear like regular plain
// text (without any border, background color, focus indicator)

.form-control-plaintext {
  display: block;
  width: 100%;
  padding: $input-padding-y 0;
  margin-bottom: 0; // match inputs if this class comes on inputs with default margins
  line-height: $input-line-height;
  color: var(--#{$prefix}input-plaintext-color, $input-plaintext-color);
  background-color: transparent;
  border: solid transparent;
  border-width: $input-border-width 0;

  &:focus {
    outline: 0;
  }

  &.form-control-sm,
  &.form-control-lg {
    padding-right: 0;
    padding-left: 0;
  }
}

// Form control sizing
//
// Build on \`.form-control\` with modifier classes to decrease or increase the
// height and font-size of form controls.
//
// Repeated in \`_input_group.scss\` to avoid Sass extend issues.

.form-control-sm {
  min-height: $input-height-sm;
  padding: $input-padding-y-sm $input-padding-x-sm;
  @include font-size($input-font-size-sm);
  @include border-radius($input-border-radius-sm);

  &::file-selector-button {
    padding: $input-padding-y-sm $input-padding-x-sm;
    margin: (-$input-padding-y-sm) (-$input-padding-x-sm);
    margin-inline-end: $input-padding-x-sm;
  }
}

.form-control-lg {
  min-height: $input-height-lg;
  padding: $input-padding-y-lg $input-padding-x-lg;
  @include font-size($input-font-size-lg);
  @include border-radius($input-border-radius-lg);

  &::file-selector-button {
    padding: $input-padding-y-lg $input-padding-x-lg;
    margin: (-$input-padding-y-lg) (-$input-padding-x-lg);
    margin-inline-end: $input-padding-x-lg;
  }
}

// Make sure textareas don't shrink too much when resized
// https://github.com/twbs/bootstrap/pull/29124
// stylelint-disable selector-no-qualifying-type
textarea {
  &.form-control {
    min-height: $input-height;
  }

  &.form-control-sm {
    min-height: $input-height-sm;
  }

  &.form-control-lg {
    min-height: $input-height-lg;
  }
}
// stylelint-enable selector-no-qualifying-type

.form-control-color {
  width: $form-color-width;
  height: $input-height;
  padding: $input-padding-y;

  &:not(:disabled):not([readonly]) {
    cursor: pointer;
  }

  &::-moz-color-swatch {
    border: 0 !important; // stylelint-disable-line declaration-no-important
    @include border-radius($input-border-radius);
  }

  &::-webkit-color-swatch {
    @include border-radius($input-border-radius);
  }

  &.form-control-sm { height: $input-height-sm; }
  &.form-control-lg { height: $input-height-lg; }
}
`,pe=`.form-multi-select {
  // scss-docs-start form-multi-select-css-vars
  --#{$prefix}form-multi-select-padding-y: #{$form-multi-select-padding-y};
  --#{$prefix}form-multi-select-padding-x: #{$form-multi-select-padding-x};
  --#{$prefix}form-multi-select-font-family: #{$form-multi-select-font-family};
  --#{$prefix}form-multi-select-font-size: #{$form-multi-select-font-size};
  --#{$prefix}form-multi-select-font-weight: #{$form-multi-select-font-weight};
  --#{$prefix}form-multi-select-line-height: #{$form-multi-select-line-height};
  --#{$prefix}form-multi-select-color: #{$form-multi-select-color};
  --#{$prefix}form-multi-select-bg: #{$form-multi-select-bg};
  --#{$prefix}form-multi-select-bg-position: #{$form-multi-select-bg-position};
  --#{$prefix}form-multi-select-bg-size: #{$form-multi-select-bg-size};
  --#{$prefix}form-multi-select-border-color: #{$form-multi-select-border-color};
  --#{$prefix}form-multi-select-border: #{$form-multi-select-border-width} solid var(--#{$prefix}form-multi-select-border-color);
  --#{$prefix}form-multi-select-border-radius: #{$form-multi-select-border-radius};
  --#{$prefix}form-multi-select-disabled-color: #{$form-multi-select-disabled-color};
  --#{$prefix}form-multi-select-disabled-bg: #{$form-multi-select-disabled-bg};
  --#{$prefix}form-multi-select-focus-color: #{$form-multi-select-focus-color};
  --#{$prefix}form-multi-select-focus-bg: #{$form-multi-select-focus-bg};
  --#{$prefix}form-multi-select-focus-border-color: #{$form-multi-select-focus-border-color};
  --#{$prefix}form-multi-select-selection-tags-padding-y: #{$form-multi-select-selection-tags-padding-y};
  --#{$prefix}form-multi-select-selection-tags-padding-x: #{$form-multi-select-selection-tags-padding-x};

  --#{$prefix}form-multi-select-indicator: #{escape-svg($form-multi-select-indicator)};
  --#{$prefix}form-multi-select-indicator-padding: #{$form-multi-select-indicator-padding};

  --#{$prefix}form-multi-select-cleaner-width: #{$form-multi-select-cleaner-width};
  --#{$prefix}form-multi-select-cleaner-height: #{$form-multi-select-cleaner-height};
  --#{$prefix}form-multi-select-cleaner-padding-y: #{$form-multi-select-cleaner-padding-y};
  --#{$prefix}form-multi-select-cleaner-padding-x: #{$form-multi-select-cleaner-padding-x};
  --#{$prefix}form-multi-select-cleaner-bg: #{escape-svg($form-multi-select-cleaner-bg)};
  --#{$prefix}form-multi-select-cleaner-hover-bg: #{escape-svg($form-multi-select-cleaner-hover-bg)};
  --#{$prefix}form-multi-select-cleaner-focus-bg: #{escape-svg($form-multi-select-cleaner-focus-bg)};

  --#{$prefix}form-multi-select-search-color: #{$form-multi-select-search-color};
  --#{$prefix}form-multi-select-search-bg: #{$form-multi-select-search-bg};
  --#{$prefix}form-multi-select-search-border-radius: #{$form-multi-select-search-border-radius};

  --#{$prefix}form-multi-select-select-all-padding-y: #{$form-multi-select-select-all-padding-y};
  --#{$prefix}form-multi-select-select-all-padding-x: #{$form-multi-select-select-all-padding-x};
  --#{$prefix}form-multi-select-select-all-color: #{$form-multi-select-select-all-color};
  --#{$prefix}form-multi-select-select-all-bg: #{$form-multi-select-select-all-bg};
  --#{$prefix}form-multi-select-select-all-border-color: #{$form-multi-select-select-all-border-color};
  --#{$prefix}form-multi-select-select-all-border: #{$form-multi-select-select-all-border-width} solid var(--#{$prefix}form-multi-select-select-all-border-color);
  --#{$prefix}form-multi-select-select-all-hover-color: #{$form-multi-select-select-all-hover-color};
  --#{$prefix}form-multi-select-select-all-hover-bg: #{$form-multi-select-select-all-hover-bg};

  --#{$prefix}form-multi-select-options-margin-top: #{$form-multi-select-options-margin-top};
  --#{$prefix}form-multi-select-options-bg: #{$form-multi-select-options-bg};
  --#{$prefix}form-multi-select-options-border-color: #{$form-multi-select-options-border-color};
  --#{$prefix}form-multi-select-options-border: #{$form-multi-select-options-border-width} solid var(--#{$prefix}form-multi-select-options-border-color);
  --#{$prefix}form-multi-select-options-border-radius: #{$form-multi-select-options-border-radius};

  --#{$prefix}form-multi-select-options-padding-y: #{$form-multi-select-options-padding-y};
  --#{$prefix}form-multi-select-options-padding-x: #{$form-multi-select-options-padding-x};
  --#{$prefix}form-multi-select-options-color: #{$form-multi-select-options-color};

  --#{$prefix}form-multi-select-option-padding-y: #{$form-multi-select-option-padding-y};
  --#{$prefix}form-multi-select-option-padding-x: #{$form-multi-select-option-padding-x};
  --#{$prefix}form-multi-select-option-border-radius: #{$form-multi-select-option-border-radius};
  --#{$prefix}form-multi-select-option-hover-color: #{$form-multi-select-option-hover-color};
  --#{$prefix}form-multi-select-option-hover-bg: #{$form-multi-select-option-hover-bg};
  --#{$prefix}form-multi-select-option-disabled-color: #{$form-multi-select-option-disabled-color};
  --#{$prefix}form-multi-select-option-indicator-width: #{$form-multi-select-option-indicator-width};
  --#{$prefix}form-multi-select-option-indicator-bg: #{$form-multi-select-option-indicator-bg};
  --#{$prefix}form-multi-select-option-indicator-border: #{$form-multi-select-option-indicator-border};
  --#{$prefix}form-multi-select-option-indicator-border-radius: #{$form-multi-select-option-indicator-border-radius};
  --#{$prefix}form-multi-select-option-selected-bg: #{$form-multi-select-option-selected-bg};
  --#{$prefix}form-multi-select-option-selected-indicator-bg: #{$form-multi-select-option-selected-indicator-bg};
  --#{$prefix}form-multi-select-option-selected-indicator-bg-image: #{escape-svg($form-multi-select-option-selected-indicator-bg-image)};
  --#{$prefix}form-multi-select-option-selected-indicator-border-color: #{$form-multi-select-option-selected-indicator-border-color};

  --#{$prefix}form-multi-select-tag-padding-y: #{$form-multi-select-tag-padding-y};
  --#{$prefix}form-multi-select-tag-padding-x: #{$form-multi-select-tag-padding-x};
  --#{$prefix}form-multi-select-tag-margin-y: #{$form-multi-select-tag-margin-y};
  --#{$prefix}form-multi-select-tag-margin-x: #{$form-multi-select-tag-margin-x};
  --#{$prefix}form-multi-select-tag-bg: #{$form-multi-select-tag-bg};
  --#{$prefix}form-multi-select-tag-border-color: #{$form-multi-select-tag-border-color};
  --#{$prefix}form-multi-select-tag-border: #{$form-multi-select-tag-border-width} solid var(--#{$prefix}form-multi-select-tag-border-color);
  --#{$prefix}form-multi-select-tag-border-radius: #{$form-multi-select-tag-border-radius};
  // scss-docs-end form-multi-select-css-vars

  position: relative;
  display: block;
  width: 100%;
  padding: var(--#{$prefix}form-multi-select-padding-y) var(--#{$prefix}form-multi-select-padding-x);
  @include ltr-rtl("padding-right", (var(--#{$prefix}form-multi-select-indicator-padding)));
  font-family: var(--#{$prefix}form-multi-select-font-family);
  @include font-size(var(--#{$prefix}form-multi-select-font-size));
  font-weight: var(--#{$prefix}form-multi-select-font-weight);
  line-height: var(--#{$prefix}form-multi-select-line-height);
  color: var(--#{$prefix}form-multi-select-color);
  background-color: var(--#{$prefix}form-multi-select-bg);
  background-image: var(--#{$prefix}form-multi-select-indicator);
  background-repeat: no-repeat;
  @include ltr-rtl-value-only("background-position", var(--#{$prefix}form-multi-select-bg-position));
  background-size: var(--#{$prefix}form-multi-select-bg-size);
  border: var(--#{$prefix}form-multi-select-border);
  @include border-radius(var(--#{$prefix}form-multi-select-border-radius), 0);
  appearance: none;

  &:disabled,
  &.disabled {
    color: var(--#{$prefix}form-multi-select-disabled-color);
    background-color: var(--#{$prefix}form-multi-select-disabled-bg);

    .form-multi-select-search {
      background: transparent;
    }
  }

  &.form-multi-select-with-cleaner {
    @include ltr-rtl("padding-right", ($form-multi-select-indicator-padding + $form-multi-select-cleaner-width + 2 * $form-multi-select-cleaner-padding-x));
  }

  &.is-invalid  {
    --#{$prefix}form-multi-select-border-color: #{$form-feedback-invalid-color};
  }

  &.is-valid  {
    --#{$prefix}form-multi-select-border-color: #{$form-feedback-valid-color};
  }

  // temporary fix for React.js & Vue.js versions
  > div:not([class]):first-of-type::before {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 100%;
    content: "";
  }
}

.form-multi-select-selection-tags {
  min-height: add(($form-multi-select-padding-y * 2), ($form-multi-select-font-size * $form-multi-select-line-height), ($form-multi-select-border-width * 2));
  padding: var(--#{$prefix}form-multi-select-selection-tags-padding-y) var(--#{$prefix}form-multi-select-selection-tags-padding-x);
  @include ltr-rtl("padding-right", var(--#{$prefix}form-multi-select-indicator-padding));

  .form-multi-select-search {
    height: ($form-multi-select-padding-y - $form-multi-select-selection-tags-padding-y) * 2 + ($form-multi-select-font-size * $form-multi-select-line-height);
    @include ltr-rtl("margin-left", var(--#{$prefix}form-multi-select-padding-x));
  }
}

.form-multi-select-selection {
  display: inline;
  padding: 0;
}

.form-multi-select-selection-cleaner {
  position: absolute;
  top: 50%;
  @include ltr-rtl("right", var(--#{$prefix}form-multi-select-indicator-padding));
  box-sizing: content-box;
  width: var(--#{$prefix}form-multi-select-cleaner-width);
  height: var(--#{$prefix}form-multi-select-cleaner-height);
  padding: var(--#{$prefix}form-multi-select-cleaner-padding-y) var(--#{$prefix}form-multi-select-cleaner-padding-x);
  background-color: transparent;
  background-image: var(--#{$prefix}form-multi-select-cleaner-bg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: var(--#{$prefix}form-multi-select-cleaner-width) auto;
  border: 0; // for button elements
  @include ltr-rtl("border-right", 1px solid var(--#{$prefix}form-multi-select-cleaner-border-color, $form-multi-select-cleaner-border-color));
  transform: translateY(-50%);

  &:hover {
    background-image: var(--#{$prefix}form-multi-select-cleaner-hover-bg);
  }

  &:focus {
    background-image: var(--#{$prefix}form-multi-select-cleaner-focus-bg);
    outline: 0;
  }
}

.form-multi-select-search {
  width: auto;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: var(--#{$prefix}form-multi-select-search-color);
  background-color: var(--#{$prefix}form-multi-select-search-bg);
  border: 0;
  appearance: none;
  @include border-radius(var(--#{$prefix}form-multi-select-search-border-radius), 0);

  &:focus {
    outline: 0;
  }

  &[size] {
    display: none;
    @include ltr-rtl("margin-left", var(--#{$prefix}form-multi-select-padding-x));
  }

  &:placeholder-shown {
    width: 100%;
  }
}

.form-multi-select-all {
  display: block;
  width: 100%;
  padding: var(--#{$prefix}form-multi-select-select-all-padding-y) var(--#{$prefix}form-multi-select-select-all-padding-x);
  color: var(--#{$prefix}form-multi-select-select-all-color);
  text-align: start;
  background-color: var(--#{$prefix}form-multi-select-select-all-bg);
  border: 0;
  border-bottom: var(--#{$prefix}form-multi-select-select-all-border);

  &:hover {
    color: var(--#{$prefix}form-multi-select-select-all-hover-color);
    background-color: var(--#{$prefix}form-multi-select-select-all-hover-bg);
  }
}

.form-multi-select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  display: none; // none by default, but block on "open" of the menu
  width: 100%;
  margin-top: var(--#{$prefix}form-multi-select-options-margin-top);
  background-color: var(--#{$prefix}form-multi-select-options-bg);
  background-clip: padding-box;
  border: var(--#{$prefix}form-multi-select-options-border);
  @include border-radius(var(--#{$prefix}form-multi-select-options-border-radius));
  @include elevation(4);
}

.form-multi-select-options {
  padding: var(--#{$prefix}form-multi-select-options-padding-y) var(--#{$prefix}form-multi-select-options-padding-x);
  font-size: $form-multi-select-options-font-size;
  color: var(--#{$prefix}form-multi-select-options-color);
}

.form-multi-select-option {
  position: relative;
  padding: var(--#{$prefix}form-multi-select-option-padding-y) var(--#{$prefix}form-multi-select-option-padding-x);
  margin-bottom: 2px;
  vertical-align: top;
  cursor: pointer;
  @include border-radius(var(--#{$prefix}form-multi-select-option-border-radius), 0);

  &:hover,
  &:focus {
    color: var(--#{$prefix}form-multi-select-option-hover-color);
    text-decoration: none;
    background-color: var(--#{$prefix}form-multi-select-option-hover-bg);
  }

  &.disabled,
  &:disabled {
    color: var(--#{$prefix}form-multi-select-option-disabled-color);
    pointer-events: none;
    background-color: transparent;
  }

  &.form-multi-select-option-with-checkbox {
    padding: $form-multi-select-option-padding-y $form-multi-select-option-padding-x;
    @include ltr-rtl("padding-left", calc(var(--#{$prefix}form-multi-select-option-padding-x) + var(--#{$prefix}form-multi-select-option-indicator-width)));
    &::before {
      position: absolute;
      top: .7rem;
      @include ltr-rtl("left",  calc(var(--#{$prefix}form-multi-select-option-padding-x) * .5));
      display: block;
      width: var(--#{$prefix}form-multi-select-option-indicator-width);
      height: var(--#{$prefix}form-multi-select-option-indicator-width);
      pointer-events: none;
      content: "";
      background-color: var(--#{$prefix}form-multi-select-option-indicator-bg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      border: var(--#{$prefix}form-multi-select-option-indicator-border);
      @include border-radius(var(--#{$prefix}form-multi-select-option-indicator-border-radius));
    }
  }


  &.form-multi-selected {
    background-color: var(--#{$prefix}form-multi-select-option-selected-bg);

    &::before {
      background-color: var(--#{$prefix}form-multi-select-option-selected-indicator-bg);
      background-image: var(--#{$prefix}form-multi-select-option-selected-indicator-bg-image);
      border-color: var(--#{$prefix}form-multi-select-option-selected-indicator-border-color);
    }
  }
}

.form-multi-select-optgroup-label {
  padding: ($form-multi-select-option-padding-y * 1.5) ($form-multi-select-option-padding-x * .5) $form-multi-select-option-padding-y ($form-multi-select-option-padding-x * .5);
  font-size: 80%;
  font-weight: $form-multi-select-optgroup-label-font-weight;
  color: $form-multi-select-optgroup-label-color;
  text-transform: uppercase;
}

.form-multi-select-options-empty {
  padding: var(--#{$prefix}form-multi-select-option-padding-y) var(--#{$prefix}form-multi-select-option-padding-x);
}


.form-multi-select-tag {
  display: inline-block;
  padding: var(--#{$prefix}form-multi-select-tag-padding-y) var(--#{$prefix}form-multi-select-tag-padding-x);
  margin: var(--#{$prefix}form-multi-select-tag-margin-y) var(--#{$prefix}form-multi-select-tag-margin-x);
  background-color: var(--#{$prefix}form-multi-select-tag-bg);
  border: var(--#{$prefix}form-multi-select-tag-border);
  @include border-radius(var(--#{$prefix}form-multi-select-tag-border-radius));
}

.form-multi-select-tag-delete {
  padding: 0;
  @include ltr-rtl("margin-left", $spacer * .5);
  background-color: transparent;
  border: 0;
}

.form-multi-select.show {
  color: var(--#{$prefix}form-multi-select-focus-color);
  background-color: var(--#{$prefix}form-multi-select-focus-bg);
  border-color: var(--#{$prefix}form-multi-select-focus-border-color);

  @if $enable-shadows {
    @include box-shadow($form-multi-select-box-shadow, $form-multi-select-focus-box-shadow);
  } @else {
    // Avoid using mixin so we can pass custom focus shadow properly
    box-shadow: $form-multi-select-focus-box-shadow;
  }

  .form-multi-select-search[size] {
    display: inline;
  }

  .form-multi-select-dropdown {
    z-index: $zindex-dropdown;
    display: initial;
  }
}

.form-multi-select-sm {
  --#{$prefix}form-multi-select-padding-y: #{$form-multi-select-padding-y-sm};
  --#{$prefix}form-multi-select-padding-x: #{$form-multi-select-padding-x-sm};
  --#{$prefix}form-multi-select-font-size: #{$form-multi-select-font-size-sm};
  --#{$prefix}form-multi-select-border-radius: #{$form-multi-select-border-radius-sm};
  --#{$prefix}form-multi-select-selection-tags-padding-x: #{$form-multi-select-selection-tags-padding-x-sm};
  --#{$prefix}form-multi-select-tag-padding-y: #{$form-multi-select-tag-padding-y-sm};
  --#{$prefix}form-multi-select-tag-padding-x: #{$form-multi-select-tag-padding-x-sm};
  --#{$prefix}form-multi-select-tag-margin-y: #{$form-multi-select-tag-margin-y-sm};
  --#{$prefix}form-multi-select-tag-margin-x: #{$form-multi-select-tag-margin-x-sm};
  --#{$prefix}form-multi-select-tag-border-radius: #{$form-multi-select-tag-border-radius-sm};

  &.form-multi-select-selection-tags {
    min-height: add(($form-multi-select-padding-y-sm * 2), ($form-multi-select-font-size-sm * $form-multi-select-line-height), ($form-multi-select-border-width * 2));

    .form-multi-select-search {
      height: subtract(($form-multi-select-padding-y-sm - $form-multi-select-selection-tags-padding-y-sm) * 2 + ($form-multi-select-font-size-sm * $form-multi-select-line-height), ($form-multi-select-border-width * 2));
    }
  }
}

.form-multi-select-lg {
  --#{$prefix}form-multi-select-padding-y: #{$form-multi-select-padding-y-lg};
  --#{$prefix}form-multi-select-padding-x: #{$form-multi-select-padding-x-lg};
  --#{$prefix}form-multi-select-font-size: #{$form-multi-select-font-size-lg};
  --#{$prefix}form-multi-select-border-radius: #{$form-multi-select-border-radius-lg};
  --#{$prefix}form-multi-select-selection-tags-padding-x: #{$form-multi-select-selection-tags-padding-x-lg};
  --#{$prefix}form-multi-select-tag-padding-y: #{$form-multi-select-tag-padding-y-lg};
  --#{$prefix}form-multi-select-tag-padding-x: #{$form-multi-select-tag-padding-x-lg};
  --#{$prefix}form-multi-select-tag-margin-y: #{$form-multi-select-tag-margin-y-lg};
  --#{$prefix}form-multi-select-tag-margin-x: #{$form-multi-select-tag-margin-x-lg};
  --#{$prefix}form-multi-select-tag-border-radius: #{$form-multi-select-tag-border-radius-lg};

  &.form-multi-select-selection-tags {
    min-height: add(($form-multi-select-padding-y-lg * 2) + ($form-multi-select-font-size-lg * $form-multi-select-line-height), ($form-multi-select-border-width * 2));

    .form-multi-select-search {
      height: ($form-multi-select-padding-y-lg - $form-multi-select-selection-tags-padding-y-lg) * 2 + ($form-multi-select-font-size-lg * $form-multi-select-line-height);
    }
  }
}
`,ue=`// Range
//
// Style range inputs the same across browsers. Vendor-specific rules for pseudo
// elements cannot be mixed. As such, there are no shared styles for focus or
// active states on prefixed selectors.

.form-range {
  width: 100%;
  height: add($form-range-thumb-height, $form-range-thumb-focus-box-shadow-width * 2);
  padding: 0; // Need to reset padding
  background-color: transparent;
  appearance: none;

  &:focus {
    outline: 0;

    // Pseudo-elements must be split across multiple rulesets to have an effect.
    // No box-shadow() mixin for focus accessibility.
    &::-webkit-slider-thumb { box-shadow: $form-range-thumb-focus-box-shadow; }
    &::-moz-range-thumb     { box-shadow: $form-range-thumb-focus-box-shadow; }
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    width: $form-range-thumb-width;
    height: $form-range-thumb-height;
    margin-top: ($form-range-track-height - $form-range-thumb-height) * .5; // Webkit specific
    @include gradient-bg(var(--#{$prefix}form-range-thumb-bg, $form-range-thumb-bg));
    border: $form-range-thumb-border;
    @include border-radius($form-range-thumb-border-radius);
    @include box-shadow($form-range-thumb-box-shadow);
    @include transition($form-range-thumb-transition);
    appearance: none;

    &:active {
      @include gradient-bg(var(--#{$prefix}form-range-thumb-active-bg, $form-range-thumb-active-bg));
    }
  }

  &::-webkit-slider-runnable-track {
    width: $form-range-track-width;
    height: $form-range-track-height;
    color: transparent; // Why?
    cursor: $form-range-track-cursor;
    background-color: var(--#{$prefix}form-range-track-bg, $form-range-track-bg);
    border-color: transparent;
    @include border-radius($form-range-track-border-radius);
    @include box-shadow($form-range-track-box-shadow);
  }

  &::-moz-range-thumb {
    width: $form-range-thumb-width;
    height: $form-range-thumb-height;
    @include gradient-bg(var(--#{$prefix}form-range-thumb-bg, $form-range-thumb-bg));
    border: $form-range-thumb-border;
    @include border-radius($form-range-thumb-border-radius);
    @include box-shadow($form-range-thumb-box-shadow);
    @include transition($form-range-thumb-transition);
    appearance: none;

    &:active {
      @include gradient-bg(var(--#{$prefix}form-range-thumb-active-bg, $form-range-thumb-active-bg));
    }
  }

  &::-moz-range-track {
    width: $form-range-track-width;
    height: $form-range-track-height;
    color: transparent;
    cursor: $form-range-track-cursor;
    background-color: var(--#{$prefix}form-range-track-bg, $form-range-track-bg);
    border-color: transparent; // Firefox specific?
    @include border-radius($form-range-track-border-radius);
    @include box-shadow($form-range-track-box-shadow);
  }

  &:disabled {
    pointer-events: none;

    &::-webkit-slider-thumb {
      background-color: var(--#{$prefix}form-range-thumb-disabled-bg, $form-range-thumb-disabled-bg);
    }

    &::-moz-range-thumb {
      background-color: var(--#{$prefix}form-range-thumb-disabled-bg, $form-range-thumb-disabled-bg);
    }
  }
}
`,$e=`// Select
//
// Replaces the browser default select with a custom one, mostly pulled from
// https://primer.github.io/.

.form-select {
  display: block;
  width: 100%;
  @include ltr-rtl-value-only("padding", $form-select-padding-y $form-select-indicator-padding $form-select-padding-y $form-select-padding-x, $form-select-padding-y $form-select-padding-x $form-select-padding-y $form-select-indicator-padding);
  -moz-padding-start: subtract($form-select-padding-x, 3px); // See https://github.com/twbs/bootstrap/issues/32636
  font-family: $form-select-font-family;
  @include font-size($form-select-font-size);
  font-weight: $form-select-font-weight;
  line-height: $form-select-line-height;
  color: var(--#{$prefix}form-select-color, $form-select-color);
  background-color: var(--#{$prefix}form-select-bg, $form-select-bg);
  background-image: escape-svg($form-select-indicator);
  background-repeat: no-repeat;
  @include ltr-rtl-value-only("background-position", $form-select-bg-position);
  background-size: $form-select-bg-size;
  border: $form-select-border-width solid var(--#{$prefix}form-select-border-color, $form-select-border-color);
  @include border-radius($form-select-border-radius, 0);
  @include box-shadow($form-select-box-shadow);
  @include transition($form-select-transition);
  appearance: none;

  &:focus {
    border-color: var(--#{$prefix}form-select-focus-border-color, $form-select-focus-border-color);
    outline: 0;
    @if $enable-shadows {
      @include box-shadow($form-select-box-shadow, $form-select-focus-box-shadow);
    } @else {
      // Avoid using mixin so we can pass custom focus shadow properly
      box-shadow: $form-select-focus-box-shadow;
    }
  }

  &[multiple],
  &[size]:not([size="1"]) {
    @include ltr-rtl("padding-right", $form-select-padding-x);
    background-image: none;
  }

  &:disabled {
    color: var(--#{$prefix}form-select-disabled-color, $form-select-disabled-color);
    background-color: var(--#{$prefix}form-select-disabled-bg, $form-select-disabled-bg);
    border-color: var(--#{$prefix}form-select-disabled-border-color, $form-select-disabled-border-color);
  }

  // Remove outline from select box in FF
  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 var(--#{$prefix}form-select-color, $form-select-color);
  }
}

.form-select-sm {
  padding-top: $form-select-padding-y-sm;
  padding-bottom: $form-select-padding-y-sm;
  @include ltr-rtl("padding-left", $form-select-padding-x-sm);
  @include font-size($form-select-font-size-sm);
  @include border-radius($form-select-border-radius-sm);
}

.form-select-lg {
  padding-top: $form-select-padding-y-lg;
  padding-bottom: $form-select-padding-y-lg;
  @include ltr-rtl("padding-left", $form-select-padding-x-lg);
  @include font-size($form-select-font-size-lg);
  @include border-radius($form-select-border-radius-lg);
}

//temp fix for dark-theme select options
.dark-theme .form-select > option {
  background-color: #44454e;
}
`,be=`//
// Form text
//

.form-text {
  margin-top: $form-text-margin-top;
  @include font-size($form-text-font-size);
  font-style: $form-text-font-style;
  font-weight: $form-text-font-weight;
  color: var(--#{$prefix}form-text-color, $form-text-color);
}
`,fe=`//
// Base styles
//

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap; // For form validation feedback
  align-items: stretch;
  width: 100%;

  > .form-control,
  > .form-select,
  > .form-floating {
    position: relative; // For focus state's z-index
    flex: 1 1 auto;
    width: 1%;
    min-width: 0; // https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size
  }

  // Bring the "active" form control to the top of surrounding elements
  > .form-control:focus,
  > .form-select:focus,
  > .form-floating:focus-within {
    z-index: 5;
  }

  // Ensure buttons are always above inputs for more visually pleasing borders.
  // This isn't needed for \`.input-group-text\` since it shares the same border-color
  // as our inputs.
  .btn {
    position: relative;
    z-index: 2;

    &:focus {
      z-index: 5;
    }
  }
}


// Textual addons
//
// Serves as a catch-all element for any text or radio/checkbox input you wish
// to prepend or append to an input.

.input-group-text {
  display: flex;
  align-items: center;
  padding: $input-group-addon-padding-y $input-group-addon-padding-x;
  @include font-size($input-font-size); // Match inputs
  font-weight: $input-group-addon-font-weight;
  line-height: $input-line-height;
  color: var(--#{$prefix}input-group-addon-color, $input-group-addon-color);
  text-align: center;
  white-space: nowrap;
  background-color: var(--#{$prefix}input-group-addon-bg, $input-group-addon-bg);
  border: $input-border-width solid var(--#{$prefix}input-group-addon-border-color, $input-group-addon-border-color);
  @include border-radius($input-border-radius);
}


// Sizing
//
// Remix the default form control sizing classes into new ones for easier
// manipulation.

.input-group-lg > .form-control,
.input-group-lg > .form-select,
.input-group-lg > .input-group-text,
.input-group-lg > .btn {
  padding: $input-padding-y-lg $input-padding-x-lg;
  @include font-size($input-font-size-lg);
  @include border-radius($input-border-radius-lg);
}

.input-group-sm > .form-control,
.input-group-sm > .form-select,
.input-group-sm > .input-group-text,
.input-group-sm > .btn {
  padding: $input-padding-y-sm $input-padding-x-sm;
  @include font-size($input-font-size-sm);
  @include border-radius($input-border-radius-sm);
}

.input-group-lg > .form-select,
.input-group-sm > .form-select {
  @include ltr-rtl("padding-right", $form-select-padding-x + $form-select-indicator-padding);
}


// Rounded corners
//
// These rulesets must come after the sizing ones to properly override sm and lg
// border-radius values when extending. They're more specific than we'd like
// with the \`.input-group >\` part, but without it, we cannot override the sizing.

// stylelint-disable-next-line no-duplicate-selectors
.input-group {
  &:not(.has-validation) {
    > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
    > .dropdown-toggle:nth-last-child(n + 3),
    > .form-floating:not(:last-child) > .form-control,
    > .form-floating:not(:last-child) > .form-select {
      @include border-end-radius(0);
    }
  }

  &.has-validation {
    > :nth-last-child(n + 3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
    > .dropdown-toggle:nth-last-child(n + 4),
    > .form-floating:nth-last-child(n + 3) > .form-control,
    > .form-floating:nth-last-child(n + 3) > .form-select {
      @include border-end-radius(0);
    }
  }

  $validation-messages: "";
  @each $state in map-keys($form-validation-states) {
    $validation-messages: $validation-messages + ":not(." + unquote($state) + "-tooltip)" + ":not(." + unquote($state) + "-feedback)";
  }

  > :not(:first-child):not(.dropdown-menu)#{$validation-messages} {
    @include ltr-rtl("margin-left", -$input-border-width);
    @include border-start-radius(0);
  }

  > .form-floating:not(:first-child) > .form-control,
  > .form-floating:not(:first-child) > .form-select {
    @include border-start-radius(0);
  }
}
`,ge=`//
// Labels
//

.form-label {
  margin-bottom: $form-label-margin-bottom;
  @include font-size($form-label-font-size);
  font-style: $form-label-font-style;
  font-weight: $form-label-font-weight;
  color: var(--#{$prefix}form-label-color, $form-label-color);
}

// For use with horizontal and inline forms, when you need the label (or legend)
// text to align with the form controls.
.col-form-label {
  padding-top: add($input-padding-y, $input-border-width);
  padding-bottom: add($input-padding-y, $input-border-width);
  margin-bottom: 0; // Override the \`<legend>\` default
  @include font-size(inherit); // Override the \`<legend>\` default
  font-style: $form-label-font-style;
  font-weight: $form-label-font-weight;
  line-height: $input-line-height;
  color: var(--#{$prefix}form-label-color, $form-label-color);
}

.col-form-label-lg {
  padding-top: add($input-padding-y-lg, $input-border-width);
  padding-bottom: add($input-padding-y-lg, $input-border-width);
  @include font-size($input-font-size-lg);
}

.col-form-label-sm {
  padding-top: add($input-padding-y-sm, $input-border-width);
  padding-bottom: add($input-padding-y-sm, $input-border-width);
  @include font-size($input-font-size-sm);
}
`,me=`// Form validation
//
// Provide feedback to users when form field values are valid or invalid. Works
// primarily for client-side validation via scoped \`:invalid\` and \`:valid\`
// pseudo-classes but also includes \`.is-invalid\` and \`.is-valid\` classes for
// server-side validation.

// scss-docs-start form-validation-states-loop
@each $state, $data in $form-validation-states {
  @include form-validation-state($state, $data...);
}
// scss-docs-end form-validation-states-loop
`,he=`.clearfix {
  @include clearfix();
}
`,ve=`// stylelint-disable function-name-case

// All-caps \`RGBA()\` function used because of this Sass bug: https://github.com/sass/node-sass/issues/2251
@each $color, $value in $theme-colors {
  $color-rgb: to-rgb($value);
  .text-bg-#{$color} {
    color: color-contrast($value) if($enable-important-utilities, !important, null);
    background-color: RGBA($color-rgb, var(--#{$prefix}bg-opacity, 1)) if($enable-important-utilities, !important, null);
  }
}
`,xe=`@each $color, $value in $theme-colors {
  .link-#{$color} {
    color: $value !important; // stylelint-disable-line declaration-no-important

    @if $link-shade-percentage != 0 {
      &:hover,
      &:focus {
        color: if(color-contrast($value) == $color-contrast-light, shade-color($value, $link-shade-percentage), tint-color($value, $link-shade-percentage)) !important; // stylelint-disable-line declaration-no-important
      }
    }
  }
}
`,we=`// Shorthand

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: $zindex-fixed;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: $zindex-fixed;
}

// Responsive sticky top and bottom
@each $breakpoint in map-keys($grid-breakpoints) {
  @include media-breakpoint-up($breakpoint) {
    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

    .sticky#{$infix}-top {
      position: sticky;
      top: 0;
      z-index: $zindex-sticky;
    }

    .sticky#{$infix}-bottom {
      position: sticky;
      bottom: 0;
      z-index: $zindex-sticky;
    }
  }
}
`,ke=`// Credit: Nicolas Gallagher and SUIT CSS.

.ratio {
  position: relative;
  width: 100%;

  &::before {
    display: block;
    padding-top: var(--#{$prefix}aspect-ratio);
    content: "";
  }

  > * {
    position: absolute;
    top: 0;
    @include ltr-rtl("left", 0);
    width: 100%;
    height: 100%;
  }
}

@each $key, $ratio in $aspect-ratios {
  .ratio-#{$key} {
    --#{$prefix}aspect-ratio: #{$ratio};
  }
}
`,ye=`// scss-docs-start stacks
.hstack {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
}

.vstack {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-self: stretch;
}
// scss-docs-end stacks
`,_e=`//
// Stretched link
//

.stretched-link {
  &::#{$stretched-link-pseudo-element} {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $stretched-link-z-index;
    content: "";
  }
}
`,ze=`//
// Text truncation
//

.text-truncate {
  @include text-truncate();
}
`,Se=`//
// Visually hidden
//

.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
  @include visually-hidden();
}
`,Ce=`.vr {
  display: inline-block;
  align-self: stretch;
  width: 1px;
  min-height: 1em;
  padding: 0;
  background-color: currentcolor;
  opacity: $hr-opacity;
}
`,Ae=`// scss-docs-start alert-variant-mixin
@mixin alert-variant($background, $border, $color) {
  --#{$prefix}alert-color: #{$color};
  --#{$prefix}alert-bg: #{$background};
  --#{$prefix}alert-border-color: #{$border};

  @if $enable-gradients {
    background-image: var(--#{$prefix}gradient);
  }

  .alert-link {
    color: shade-color($color, 20%);
  }
}
// scss-docs-end alert-variant-mixin
`,Fe=`@mixin avatar($width) {
  width: $width;
  height: $width;
  font-size: $width * .4;

  .avatar-status {
    width: divide($width, 3.75);
    height: divide($width, 3.75);
  }
}
`,qe=`// Shared between modals and offcanvases
@mixin overlay-backdrop($zindex, $backdrop-bg, $backdrop-opacity) {
  position: fixed;
  top: 0;
  left: 0;
  z-index: $zindex;
  width: 100vw;
  height: 100vh;
  background-color: $backdrop-bg;

  // Fade for backdrop
  &.fade { opacity: 0; }
  &.show { opacity: $backdrop-opacity; }
}
`,Le=`// stylelint-disable property-disallowed-list
// Single side border-radius

// Helper function to replace negative values with 0
@function valid-radius($radius) {
  $return: ();
  @each $value in $radius {
    @if type-of($value) == number {
      $return: append($return, max($value, 0));
    } @else {
      $return: append($return, $value);
    }
  }
  @return $return;
}

// scss-docs-start border-radius-mixins
@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {
  @if $enable-rounded {
    border-radius: valid-radius($radius);
  }
  @else if $fallback-border-radius != false {
    border-radius: $fallback-border-radius;
  }
}

@mixin border-top-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-top-left-radius: valid-radius($radius);
    border-top-right-radius: valid-radius($radius);
  }
}

@mixin border-end-radius($radius: $border-radius) {
  @if $enable-rounded {
    @include ltr-rtl("border-top-right-radius", valid-radius($radius));
    @include ltr-rtl("border-bottom-right-radius", valid-radius($radius));
  }
}

@mixin border-bottom-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-bottom-right-radius: valid-radius($radius);
    border-bottom-left-radius: valid-radius($radius);
  }
}

@mixin border-start-radius($radius: $border-radius) {
  @if $enable-rounded {
    @include ltr-rtl("border-top-left-radius", valid-radius($radius));
    @include ltr-rtl("border-bottom-left-radius", valid-radius($radius));
  }
}

@mixin border-top-start-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-top-left-radius: valid-radius($radius);
  }
}

@mixin border-top-end-radius($radius: $border-radius) {
  @if $enable-rounded {
    @include ltr-rtl("border-top-right-radius", valid-radius($radius));
  }
}

@mixin border-bottom-end-radius($radius: $border-radius) {
  @if $enable-rounded {
    @include ltr-rtl("border-bottom-right-radius", valid-radius($radius));
  }
}

@mixin border-bottom-start-radius($radius: $border-radius) {
  @if $enable-rounded {
    @include ltr-rtl("border-bottom-left-radius", valid-radius($radius));
  }
}
// scss-docs-end border-radius-mixins
`,Be=`@mixin box-shadow($shadow...) {
  @if $enable-shadows {
    $result: ();

    @each $value in $shadow {
      @if $value != null {
        $result: append($result, $value, "comma");
      }
      @if $value == none and length($shadow) > 1 {
        @warn "The keyword 'none' must be used as a single argument.";
      }
    }

    @if (length($result) > 0) {
      box-shadow: $result;
    }
  }
}
`,Me=`// Breakpoint viewport sizes and media queries.
//
// Breakpoints are defined as a map of (name: minimum width), order from small to large:
//
//    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px)
//
// The map defined in the \`$grid-breakpoints\` global variable is used as the \`$breakpoints\` argument by default.

// Name of the next breakpoint, or null for the last breakpoint.
//
//    >> breakpoint-next(sm)
//    md
//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px))
//    md
//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl xxl))
//    md
@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {
  $n: index($breakpoint-names, $name);
  @if not $n {
    @error "breakpoint \`#{$name}\` not found in \`#{$breakpoints}\`";
  }
  @return if($n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);
}

// Name of the previous breakpoint, or null for the first breakpoint.
//
//    >> breakpoint-before(lg)
//    md
//    >> breakpoint-next(lg, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
//    md
//    >> breakpoint-next(lg, $breakpoint-names: (xs sm md lg xl))
//    md
@function breakpoint-before($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {
  $n: index($breakpoint-names, $name);
  @return if($n != null and $n < length($breakpoint-names), nth($breakpoint-names, $n - 1), null);
}

// Minimum breakpoint width. Null for the smallest (first) breakpoint.
//
//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px))
//    576px
@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {
  $min: map-get($breakpoints, $name);
  @return if($min != 0, $min, null);
}

// Maximum breakpoint width.
// The maximum value is reduced by 0.02px to work around the limitations of
// \`min-\` and \`max-\` prefixes and viewports with fractional widths.
// See https://www.w3.org/TR/mediaqueries-4/#mq-min-max
// Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.
// See https://bugs.webkit.org/show_bug.cgi?id=178261
//
//    >> breakpoint-max(md, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px))
//    767.98px
@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {
  $max: map-get($breakpoints, $name);
  @return if($max and $max > 0, $max - .02, null);
}

// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.
// Useful for making responsive utilities.
//
//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px))
//    ""  (Returns a blank string)
//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px))
//    "-sm"
@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {
  @return if(breakpoint-min($name, $breakpoints) == null, "", "-#{$name}");
}

// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.
// Makes the @content apply to the given breakpoint and wider.
@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {
  $min: breakpoint-min($name, $breakpoints);
  @if $min {
    @media (min-width: $min) {
      @content;
    }
  } @else {
    @content;
  }
}

// Media of at most the maximum breakpoint width. No query for the largest breakpoint.
// Makes the @content apply to the given breakpoint and narrower.
@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {
  $max: breakpoint-max($name, $breakpoints);
  @if $max {
    @media (max-width: $max) {
      @content;
    }
  } @else {
    @content;
  }
}

// Media that spans multiple breakpoint widths.
// Makes the @content apply between the min and max breakpoints
@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {
  $min: breakpoint-min($lower, $breakpoints);
  $max: breakpoint-max($upper, $breakpoints);

  @if $min != null and $max != null {
    @media (min-width: $min) and (max-width: $max) {
      @content;
    }
  } @else if $max == null {
    @include media-breakpoint-up($lower, $breakpoints) {
      @content;
    }
  } @else if $min == null {
    @include media-breakpoint-down($upper, $breakpoints) {
      @content;
    }
  }
}

// Media between the breakpoint's minimum and maximum widths.
// No minimum for the smallest breakpoint, and no maximum for the largest one.
// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.
@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {
  $min:  breakpoint-min($name, $breakpoints);
  $next: breakpoint-next($name, $breakpoints);
  $max:  breakpoint-max($next, $breakpoints);

  @if $min != null and $max != null {
    @media (min-width: $min) and (max-width: $max) {
      @content;
    }
  } @else if $max == null {
    @include media-breakpoint-up($name, $breakpoints) {
      @content;
    }
  } @else if $min == null {
    @include media-breakpoint-down($next, $breakpoints) {
      @content;
    }
  }
}
`,Te=`// Button variants
//
// Easily pump out default styles, as well as :hover, :focus, :active,
// and disabled options for all buttons

// scss-docs-start btn-variant-mixin
@mixin button-variant($variant) {
  $background: map-get($variant, "bg");
  $border-color: map-get($variant, "border-color");
  $color: map-get($variant, "color");
  $hover-background: map-get($variant, "hover-bg");
  $hover-border-color: map-get($variant, "hover-border-color");
  $hover-color: map-get($variant, "hover-color");
  $active-background: map-get($variant, "active-bg");
  $active-border-color: map-get($variant, "active-border-color");
  $active-color: map-get($variant, "active-color");
  $disabled-background: map-get($variant, "disabled-bg");
  $disabled-border-color: map-get($variant, "disabled-border-color");
  $disabled-color: map-get($variant, "disabled-color");
  $shadow: map-get($variant, "shadow");

  --#{$prefix}btn-color: #{$color};
  --#{$prefix}btn-bg: #{$background};
  --#{$prefix}btn-border-color: #{$border-color};
  --#{$prefix}btn-hover-color: #{$hover-color};
  --#{$prefix}btn-hover-bg: #{$hover-background};
  --#{$prefix}btn-hover-border-color: #{$hover-border-color};
  --#{$prefix}btn-focus-shadow-rgb: #{to-rgb(mix($color, $border-color, 15%))};
  --#{$prefix}btn-active-color: #{$active-color};
  --#{$prefix}btn-active-bg: #{$active-background};
  --#{$prefix}btn-active-border-color: #{$active-border-color};
  --#{$prefix}btn-active-shadow: #{$btn-active-box-shadow};
  --#{$prefix}btn-disabled-color: #{$disabled-color};
  --#{$prefix}btn-disabled-bg: #{$disabled-background};
  --#{$prefix}btn-disabled-border-color: #{$disabled-border-color};
}
// scss-docs-end btn-variant-mixin

// scss-docs-start btn-outline-variant-mixin
@mixin button-outline-variant($variant) {
  $color: map-get($variant, "color");
  $hover-background: map-get($variant, "hover-bg");
  $hover-border-color: map-get($variant, "hover-border-color");
  $hover-color: map-get($variant, "hover-color");
  $active-background: map-get($variant, "active-bg");
  $active-border-color: map-get($variant, "active-border-color");
  $active-color: map-get($variant, "active-color");
  $disabled-color: map-get($variant, "disabled-color");
  $shadow: map-get($variant, "shadow");

  --#{$prefix}btn-color: #{$color};
  --#{$prefix}btn-border-color: #{$color};
  --#{$prefix}btn-hover-color: #{$hover-color};
  --#{$prefix}btn-hover-bg: #{$active-background};
  --#{$prefix}btn-hover-border-color: #{$active-border-color};
  --#{$prefix}btn-focus-shadow-rgb: #{to-rgb($color)};
  --#{$prefix}btn-active-color: #{$active-color};
  --#{$prefix}btn-active-bg: #{$active-background};
  --#{$prefix}btn-active-border-color: #{$active-border-color};
  --#{$prefix}btn-active-shadow: #{$btn-active-box-shadow};
  --#{$prefix}btn-disabled-color: #{$color};
  --#{$prefix}btn-disabled-bg: transparent;
  --#{$prefix}gradient: none;
}
// scss-docs-end btn-outline-variant-mixin

// scss-docs-start btn-ghost-variant-mixin
@mixin button-ghost-variant($variant) {
  $color: map-get($variant, "color");
  $hover-background: map-get($variant, "hover-bg");
  $hover-border-color: map-get($variant, "hover-border-color");
  $hover-color: map-get($variant, "hover-color");
  $active-background: map-get($variant, "active-bg");
  $active-border-color: map-get($variant, "active-border-color");
  $active-color: map-get($variant, "active-color");
  $disabled-color: map-get($variant, "disabled-color");
  $shadow: map-get($variant, "shadow");

  --#{$prefix}btn-color: #{$color};
  --#{$prefix}btn-hover-bg: #{$hover-background};
  --#{$prefix}btn-hover-border-color: #{$hover-border-color};
  --#{$prefix}btn-hover-color: #{$hover-color};
  --#{$prefix}btn-active-bg: #{$active-background};
  --#{$prefix}btn-active-border-color: #{$active-border-color};
  --#{$prefix}btn-active-color: #{$active-color};
  --#{$prefix}btn-disabled-color: #{$disabled-color};
  --#{$prefix}btn-shadow: #{$shadow};
}
// scss-docs-end btn-ghost-variant-mixin

// Button sizes
// scss-docs-start btn-size-mixin
@mixin button-size($padding-y, $padding-x, $font-size, $border-radius) {
  --#{$prefix}btn-padding-y: #{$padding-y};
  --#{$prefix}btn-padding-x: #{$padding-x};
  @include rfs($font-size, --#{$prefix}btn-font-size);
  --#{$prefix}btn-border-radius: #{$border-radius};
}
// scss-docs-end btn-size-mixin
`,Re=`// scss-docs-start caret-mixins
@mixin caret-down {
  border-top: $caret-width solid;
  border-right: $caret-width solid transparent;
  border-bottom: 0;
  border-left: $caret-width solid transparent;
}

@mixin caret-up {
  border-top: 0;
  border-right: $caret-width solid transparent;
  border-bottom: $caret-width solid;
  border-left: $caret-width solid transparent;
}

@mixin caret-end {
  border-top: $caret-width solid transparent;
  border-right: 0;
  border-bottom: $caret-width solid transparent;
  border-left: $caret-width solid;
}

@mixin caret-start {
  border-top: $caret-width solid transparent;
  border-right: $caret-width solid;
  border-bottom: $caret-width solid transparent;
}

@mixin caret($direction: down) {
  @if $enable-caret {
    &::after {
      display: inline-block;
      @include ltr-rtl("margin-left", $caret-spacing);
      vertical-align: $caret-vertical-align;
      content: "";
      @if $direction == down {
        @include caret-down();
      } @else if $direction == up {
        @include caret-up();
      } @else if $direction == end {
        @include caret-end();
      }
    }

    @if $direction == start {
      &::after {
        display: none;
      }

      &::before {
        display: inline-block;
        @include ltr-rtl("margin-right", $caret-spacing);
        vertical-align: $caret-vertical-align;
        content: "";
        @include caret-start();
      }
    }

    &:empty::after {
      @include ltr-rtl("margin-left", 0);
    }
  }
}
// scss-docs-end caret-mixins
`,Ee=`// scss-docs-start clearfix
@mixin clearfix() {
  &::after {
    display: block;
    clear: both;
    content: "";
  }
}
// scss-docs-end clearfix
`,He=`// scss-docs-start mixin-color-scheme
@mixin color-scheme($name) {
  @media (prefers-color-scheme: #{$name}) {
    @content;
  }
}
// scss-docs-end mixin-color-scheme
`,Pe=`// Container mixins

@mixin make-container($gutter: $container-padding-x) {
  --#{$prefix}gutter-x: #{$gutter};
  --#{$prefix}gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--#{$prefix}gutter-x) * .5); // stylelint-disable-line function-disallowed-list
  padding-left: calc(var(--#{$prefix}gutter-x) * .5); // stylelint-disable-line function-disallowed-list
  margin-right: auto;
  margin-left: auto;
}
`,Ie=`@mixin css-vars() {
  .accordion {
    @if variable-exists("accordion-button-bg") {
      --#{$prefix}accordion-button-bg: #{$accordion-button-bg};
    }
    @if variable-exists("accordion-button-color") {
      --#{$prefix}accordion-button-color: #{$accordion-button-color};
    }
    @if variable-exists("accordion-border-color") {
      --#{$prefix}accordion-border-color: #{$accordion-border-color};
    }
    @if variable-exists("accordion-button-active-color") {
      --#{$prefix}accordion-button-active-color: #{$accordion-button-active-color};
    }
    @if variable-exists("accordion-button-active-bg") {
      --#{$prefix}accordion-button-active-bg: #{$accordion-button-active-bg};
    }
    @if variable-exists("accordion-button-focus-border-color") {
      --#{$prefix}accordion-button-focus-border-color: #{$accordion-button-focus-border-color};
    }
  }

  .badge {
    @if variable-exists("badge-color") {
      --#{$prefix}badge-color: #{$badge-color};
    }
  }


  // // Accordion
  // --#{$prefix}accordion-border-color: #{$accordion-border-color};
  // --#{$prefix}accordion-button-active-color: #{$accordion-button-active-color};
  // --#{$prefix}accordion-button-active-bg: #{$accordion-button-active-bg};
  // --#{$prefix}accordion-button-focus-border-color: #{$accordion-button-focus-border-color};

  // // Badge
  // --#{$prefix}badge-color: #{$badge-color};

  // // Breadcrumb
  // --#{$prefix}breadcrumb-bg: #{$breadcrumb-bg};
  // --#{$prefix}breadcrumb-active-color: #{$breadcrumb-active-color};
  // --#{$prefix}breadcrumb-divider-color: #{$breadcrumb-divider-color};

  // // Card
  // --#{$prefix}card-bg: #{$card-bg};
  // --#{$prefix}card-border-color: #{$card-border-color};
  // --#{$prefix}card-color: #{$card-color};
  // --#{$prefix}card-cap-color: #{$card-cap-color};
  // --#{$prefix}card-cap-bg: #{$card-cap-bg};

  // // Close
  // --#{$prefix}btn-close-color: #{$btn-close-color};
  // --#{$prefix}btn-close-bg: #{escape-svg($btn-close-bg)};

  // // Dropdown
  // --#{$prefix}dropdown-color: #{$dropdown-color};
  // --#{$prefix}dropdown-bg: #{$dropdown-bg};
  // --#{$prefix}dropdown-border-color: #{$dropdown-border-color};
  // --#{$prefix}dropdown-divider-bg: #{$dropdown-divider-bg};
  // --#{$prefix}dropdown-link-color: #{$dropdown-link-color};
  // --#{$prefix}dropdown-link-hover-color: #{$dropdown-link-hover-color};
  // --#{$prefix}dropdown-link-active-color: #{$dropdown-link-active-color};
  // --#{$prefix}dropdown-link-disabled-color: #{$dropdown-link-disabled-color};
  // --#{$prefix}dropdown-header-color: #{$dropdown-header-color};

  // // Images
  // --#{$prefix}thumbnail-bg: #{$thumbnail-bg};
  // --#{$prefix}thumbnail-border-color: #{$thumbnail-border-color};

  // // Images / Figure
  // --#{$prefix}figure-caption-color: $figure-caption-color;

  // // List Group
  // --#{$prefix}list-group-action-color: #{$list-group-action-color};
  // --#{$prefix}list-group-action-hover-color: #{$list-group-action-hover-color};
  // --#{$prefix}list-group-hover-bg: #{$list-group-hover-bg};
  // --#{$prefix}list-group-action-active-color: #{$list-group-action-active-color};
  // --#{$prefix}list-group-action-active-bg: #{$list-group-action-active-bg};
  // --#{$prefix}list-group-color: #{$list-group-color};
  // --#{$prefix}list-group-bg: #{$list-group-bg};
  // --#{$prefix}list-group-border-color: #{$list-group-border-color};
  // --#{$prefix}list-group-disabled-color: #{$list-group-disabled-color};
  // --#{$prefix}list-group-disabled-bg: #{$list-group-disabled-bg};
  // --#{$prefix}list-group-active-color: #{$list-group-active-color};
  // --#{$prefix}list-group-active-bg: #{$list-group-active-bg};
  // --#{$prefix}list-group-active-border-color: #{$list-group-active-border-color};
}
`,Oe=`// Deprecate mixin
//
// This mixin can be used to deprecate mixins or functions.
// \`$enable-deprecation-messages\` is a global variable, \`$ignore-warning\` is a variable that can be passed to
// some deprecated mixins to suppress the warning (for example if the mixin is still be used in the current version of Bootstrap)
@mixin deprecate($name, $deprecate-version, $remove-version, $ignore-warning: false) {
  @if ($enable-deprecation-messages != false and $ignore-warning != true) {
    @warn "#{$name} has been deprecated as of #{$deprecate-version}. It will be removed entirely in #{$remove-version}.";
  }
}
`,De=`@mixin elevation($value, $exclude: null) {
  @if $enable-elevations {
    @if $exclude == null {
      &:not([class*="border"]) {
        border: 0;
      }
      box-shadow: map-get($elevations, $value);
    }
    @else {
      $selector: ":not(.placeholder)";
      @each $element in $exclude {
        $selector: selector-append($selector, ":not(#{$element})");
      }
      @if ($selector != ":not(.aaa") {
        &#{$selector} {
          border-color: transparent;
          box-shadow: map-get($elevations, $value);
        }
      }
    }
  }
}
`,Ue=`// This mixin uses an \`if()\` technique to be compatible with Dart Sass
// See https://github.com/sass/sass/issues/1873#issuecomment-152293725 for more details

// scss-docs-start form-validation-mixins
@mixin form-validation-state-selector($state) {
  @if ($state == "valid" or $state == "invalid") {
    .was-validated #{if(&, "&", "")}:#{$state},
    #{if(&, "&", "")}.is-#{$state} {
      @content;
    }
  } @else {
    #{if(&, "&", "")}.is-#{$state} {
      @content;
    }
  }
}

@mixin form-validation-state(
  $state,
  $color,
  $icon,
  $tooltip-color: color-contrast($color),
  $tooltip-bg-color: rgba($color, $form-feedback-tooltip-opacity),
  $focus-box-shadow: 0 0 $input-btn-focus-blur $input-focus-width rgba($color, $input-btn-focus-color-opacity)
) {
  .#{$state}-feedback {
    display: none;
    width: 100%;
    margin-top: $form-feedback-margin-top;
    @include font-size($form-feedback-font-size);
    font-style: $form-feedback-font-style;
    color: $color;
  }

  .#{$state}-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%; // Contain to parent when possible
    padding: $form-feedback-tooltip-padding-y $form-feedback-tooltip-padding-x;
    margin-top: .1rem;
    @include font-size($form-feedback-tooltip-font-size);
    line-height: $form-feedback-tooltip-line-height;
    color: $tooltip-color;
    background-color: $tooltip-bg-color;
    @include border-radius($form-feedback-tooltip-border-radius);
  }

  @include form-validation-state-selector($state) {
    ~ .#{$state}-feedback,
    ~ .#{$state}-tooltip {
      display: block;
    }
  }

  .form-control {
    @include form-validation-state-selector($state) {
      border-color: $color;

      @if $enable-validation-icons {
        @include ltr-rtl("padding-right", $input-height-inner);
        background-image: escape-svg($icon);
        background-repeat: no-repeat;
        @include ltr-rtl-value-only("background-position", right $input-height-inner-quarter center, left $input-height-inner-quarter center);
        background-size: $input-height-inner-half $input-height-inner-half;
      }

      &:focus {
        border-color: $color;
        box-shadow: $focus-box-shadow;
      }
    }
  }

  // stylelint-disable-next-line selector-no-qualifying-type
  textarea.form-control {
    @include form-validation-state-selector($state) {
      @if $enable-validation-icons {
        @include ltr-rtl("padding-right", $input-height-inner);
        @include ltr-rtl-value-only("background-position", top $input-height-inner-quarter right $input-height-inner-quarter, top $input-height-inner-quarter left $input-height-inner-quarter);
      }
    }
  }

  .form-select {
    @include form-validation-state-selector($state) {
      border-color: $color;

      @if $enable-validation-icons {
        &:not([multiple]):not([size]),
        &:not([multiple])[size="1"] {
          @include ltr-rtl("padding-right", $form-select-feedback-icon-padding-end);
          background-image: escape-svg($form-select-indicator), escape-svg($icon);
          @include ltr-rtl-value-only("background-position", #{$form-select-bg-position, $form-select-feedback-icon-position});
          background-size: $form-select-bg-size, $form-select-feedback-icon-size;
        }
      }

      &:focus {
        border-color: $color;
        box-shadow: $focus-box-shadow;
      }
    }
  }

  .form-control-color {
    @include form-validation-state-selector($state) {
      @if $enable-validation-icons {
        width: add($form-color-width, $input-height-inner);
      }
    }
  }

  .form-check-input {
    @include form-validation-state-selector($state) {
      border-color: $color;

      &:checked {
        background-color: $color;
      }

      &:focus {
        box-shadow: $focus-box-shadow;
      }

      ~ .form-check-label {
        color: $color;
      }
    }
  }
  .form-check-inline .form-check-input {
    ~ .#{$state}-feedback {
      @include ltr-rtl("margin-left", .5em);
    }
  }

  .input-group {
    > .form-control:not(:focus),
    > .form-select:not(:focus),
    > .form-floating:not(:focus-within) {
      @include form-validation-state-selector($state) {
        @if $state == "valid" {
          z-index: 3;
        } @else if $state == "invalid" {
          z-index: 4;
        }
      }
    }
  }
}
// scss-docs-end form-validation-mixins
`,je=`// Gradients

// scss-docs-start gradient-bg-mixin
@mixin gradient-bg($color: null) {
  background-color: $color;

  @if $enable-gradients {
    background-image: var(--#{$prefix}gradient);
  }
}
// scss-docs-end gradient-bg-mixin

// scss-docs-start gradient-mixins
// Horizontal gradient, from left to right
//
// Creates two color stops, start and end, by specifying a color and position for each color stop.
@mixin gradient-x($start-color: $gray-700, $end-color: $gray-800, $start-percent: 0%, $end-percent: 100%) {
  background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent);
}

// Vertical gradient, from top to bottom
//
// Creates two color stops, start and end, by specifying a color and position for each color stop.
@mixin gradient-y($start-color: $gray-700, $end-color: $gray-800, $start-percent: null, $end-percent: null) {
  background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent);
}

@mixin gradient-directional($start-color: $gray-700, $end-color: $gray-800, $deg: 45deg) {
  background-image: linear-gradient($deg, $start-color, $end-color);
}

@mixin gradient-x-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {
  background-image: linear-gradient(to right, $start-color, $mid-color $color-stop, $end-color);
}

@mixin gradient-y-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {
  background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);
}

@mixin gradient-radial($inner-color: $gray-700, $outer-color: $gray-800) {
  background-image: radial-gradient(circle, $inner-color, $outer-color);
}

@mixin gradient-striped($color: rgba($white, .15), $angle: 45deg) {
  background-image: linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);
}

@mixin gradient($color, $value) {
  background-color: var(--#{$prefix}#{$color}, map-get($value, "stop"));
  background-image: linear-gradient(45deg, var(--#{$prefix}#{$color}-start, map-get($value, "start")) 0%, var(--#{$prefix}#{$color}-stop, map-get($value, "stop") 100%));
}
// scss-docs-end gradient-mixins
`,Ve=`// Grid system
//
// Generate semantic grid columns with these mixins.

@mixin make-row($gutter: $grid-gutter-width) {
  --#{$prefix}gutter-x: #{$gutter};
  --#{$prefix}gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  // TODO: Revisit calc order after https://github.com/react-bootstrap/react-bootstrap/issues/6039 is fixed
  margin-top: calc(-1 * var(--#{$prefix}gutter-y)); // stylelint-disable-line function-disallowed-list
  margin-right: calc(-.5 * var(--#{$prefix}gutter-x)); // stylelint-disable-line function-disallowed-list
  margin-left: calc(-.5 * var(--#{$prefix}gutter-x)); // stylelint-disable-line function-disallowed-list
}

@mixin make-col-ready() {
  // Add box sizing if only the grid is loaded
  box-sizing: if(variable-exists(include-column-box-sizing) and $include-column-box-sizing, border-box, null);
  // Prevent columns from becoming too narrow when at smaller grid tiers by
  // always setting \`width: 100%;\`. This works because we set the width
  // later on to override this initial width.
  flex-shrink: 0;
  width: 100%;
  max-width: 100%; // Prevent \`.col-auto\`, \`.col\` (& responsive variants) from breaking out the grid
  padding-right: calc(var(--#{$prefix}gutter-x) * .5); // stylelint-disable-line function-disallowed-list
  padding-left: calc(var(--#{$prefix}gutter-x) * .5); // stylelint-disable-line function-disallowed-list
  margin-top: var(--#{$prefix}gutter-y);
}

@mixin make-col($size: false, $columns: $grid-columns) {
  @if $size {
    flex: 0 0 auto;
    width: percentage(divide($size, $columns));

  } @else {
    flex: 1 1 0;
    max-width: 100%;
  }
}

@mixin make-col-auto() {
  flex: 0 0 auto;
  width: auto;
}

@mixin make-col-offset($size, $columns: $grid-columns) {
  $num: divide($size, $columns);
  @include ltr-rtl("margin-left", if($num == 0, 0, percentage($num)));
}

// Row columns
//
// Specify on a parent element(e.g., .row) to force immediate children into NN
// numberof columns. Supports wrapping to new lines, but does not do a Masonry
// style grid.
@mixin row-cols($count) {
  > * {
    flex: 0 0 auto;
    width: divide(100%, $count);
  }
}

// Framework grid generation
//
// Used only by Bootstrap to generate the correct number of grid classes given
// any value of \`$grid-columns\`.

@mixin make-grid-columns($columns: $grid-columns, $gutter: $grid-gutter-width, $breakpoints: $grid-breakpoints) {
  @each $breakpoint in map-keys($breakpoints) {
    $infix: breakpoint-infix($breakpoint, $breakpoints);

    @include media-breakpoint-up($breakpoint, $breakpoints) {
      // Provide basic \`.col-{bp}\` classes for equal-width flexbox columns
      .col#{$infix} {
        flex: 1 0 0%; // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4
      }

      .row-cols#{$infix}-auto > * {
        @include make-col-auto();
      }

      @if $grid-row-columns > 0 {
        @for $i from 1 through $grid-row-columns {
          .row-cols#{$infix}-#{$i} {
            @include row-cols($i);
          }
        }
      }

      .col#{$infix}-auto {
        @include make-col-auto();
      }

      @if $columns > 0 {
        @for $i from 1 through $columns {
          .col#{$infix}-#{$i} {
            @include make-col($i, $columns);
          }
        }

        // \`$columns - 1\` because offsetting by the width of an entire row isn't possible
        @for $i from 0 through ($columns - 1) {
          @if not ($infix == "" and $i == 0) { // Avoid emitting useless .offset-0
            .offset#{$infix}-#{$i} {
              @include make-col-offset($i, $columns);
            }
          }
        }
      }

      // Gutters
      //
      // Make use of \`.g-*\`, \`.gx-*\` or \`.gy-*\` utilities to change spacing between the columns.
      @each $key, $value in $gutters {
        .g#{$infix}-#{$key},
        .gx#{$infix}-#{$key} {
          --#{$prefix}gutter-x: #{$value};
        }

        .g#{$infix}-#{$key},
        .gy#{$infix}-#{$key} {
          --#{$prefix}gutter-y: #{$value};
        }
      }
    }
  }
}

@mixin make-cssgrid($columns: $grid-columns, $breakpoints: $grid-breakpoints) {
  @each $breakpoint in map-keys($breakpoints) {
    $infix: breakpoint-infix($breakpoint, $breakpoints);

    @include media-breakpoint-up($breakpoint, $breakpoints) {
      @if $columns > 0 {
        @for $i from 1 through $columns {
          .g-col#{$infix}-#{$i} {
            grid-column: auto / span $i;
          }
        }

        // Start with \`1\` because \`0\` is and invalid value.
        // Ends with \`$columns - 1\` because offsetting by the width of an entire row isn't possible.
        @for $i from 1 through ($columns - 1) {
          .g-start#{$infix}-#{$i} {
            grid-column-start: $i;
          }
        }
      }
    }
  }
}
`,Ge=`// Icon sizes
@mixin icon-size($icon-size) {
  width: $icon-size;
  height: $icon-size;
  font-size: $icon-size;
}
`,Ne=`// Image Mixins
// - Responsive image
// - Retina image


// Responsive image
//
// Keep images from scaling beyond the width of their parents.

@mixin img-fluid {
  // Part 1: Set a maximum relative to the parent
  max-width: 100%;
  // Part 2: Override the height to auto, otherwise images will be stretched
  // when setting a width and height attribute on the img element.
  height: auto;
}
`,We=`// List Groups
// scss-docs-start list-group-mixin
@mixin list-group-item-variant($state, $variant) {
  $background: map-get($variant, "bg");
  $background-hover: map-get($variant, "bg-hover");
  $color: contrast-ratio-correction(map-get($variant, "color"), map-get($variant, "bg"), abs($alert-color-scale), $state);

  --#{$prefix}list-group-color: #{$color};
  --#{$prefix}list-group-bg: #{$background};
  --#{$prefix}list-group-hover-bg: #{$background-hover};
  --#{$prefix}list-group-action-hover-color: #{$color};
  --#{$prefix}list-group-action-active-color: #{$white};
  --#{$prefix}list-group-action-active-bg: #{$color};
  --#{$prefix}list-group-action-active-border-color: #{$color};
}
// scss-docs-end list-group-mixin
`,Ze=`// Lists

// Unstyled keeps list items block level, just removes default browser padding and list-style
@mixin list-unstyled {
  @include ltr-rtl("padding-left", 0);
  list-style: none;
}
`,Je=`@mixin ltr {
  @if $enable-ltr {
    html:not([dir="rtl"]) & {
      @content;
    }
  }
}

@mixin rtl {
  @if $enable-rtl {
    *[dir="rtl"] & {
      @content;
    }
  }
}

@function reflect($element) {
  $string: #{$element};
  @if str-index($string, "left") {
    @return str-replace($string, "left", "right");
  }
  @if str-index($string, "right") {
    @return str-replace($string, "right", "left");
  }

  @return unquote($string);
}

@mixin ltr-rtl($property, $value, $property-rtl: null, $value-rtl: null, $important: null) {
  $property-reflected: reflect($property);
  $value-reflected: reflect($value);

  @if $enable-ltr and $enable-rtl {
    @include ltr() {
      #{$property}: $value $important;
    }
    @include rtl() {
      @if $value-rtl {
        #{$property-reflected}: $value-rtl $important;
      }
      @else {
        #{$property-reflected}: $value-reflected $important;
      }
    }
  }
  @else {
    @if $enable-rtl {
      @if $value-rtl {
        #{$property-reflected}: $value-rtl $important;
      }
      @else {
        #{$property-reflected}: $value-reflected $important;
      }
    }
    @else {
      #{$property}: $value $important;
    }
  }
}

@mixin ltr-rtl-value-only($property, $value, $value-rtl: null, $important: null) {
  $value-reflected: reflect($value);

  @if $enable-ltr and $enable-rtl {
    @include ltr() {
      #{$property}: $value $important;
    }
    @include rtl() {
      @if $value-rtl {
        #{$property}: $value-rtl $important;
      } @else {
        #{$property}: $value-reflected $important;
      }
    }
  }
  @else {
    @if $enable-rtl {
      @if $value-rtl {
        #{$property}: $value-rtl $important;
      } @else {
        #{$property}: $value-reflected $important;
      }
    } @else {
      #{$property}: $value $important;
    }
  }
}
`,Xe=`// Pagination

// scss-docs-start pagination-mixin
@mixin pagination-size($padding-y, $padding-x, $font-size, $border-radius) {
  --#{$prefix}pagination-padding-x: #{$padding-x};
  --#{$prefix}pagination-padding-y: #{$padding-y};
  @include rfs($font-size, --#{$prefix}pagination-font-size);
  --#{$prefix}pagination-border-radius: #{$border-radius};
}
// scss-docs-end pagination-mixin
`,Ye=`@mixin reset-text {
  font-family: $font-family-base;
  // We deliberately do NOT reset font-size or overflow-wrap / word-wrap.
  font-style: normal;
  font-weight: $font-weight-normal;
  line-height: $line-height-base;
  text-align: left; // Fallback for where \`start\` is not supported
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  white-space: normal;
  word-spacing: normal;
  line-break: auto;
}
`,Ke="// Resize anything\n\n@mixin resizable($direction) {\n  overflow: auto; // Per CSS3 UI, `resize` only applies when `overflow` isn't `visible`\n  resize: $direction; // Options: horizontal, vertical, both\n}\n",Qe=`// scss-docs-start table-variant
@mixin table-variant($state, $background) {
  .table-#{$state} {
    $color: color-contrast(opaque($body-bg, $background));
    $hover-bg: mix($color, $background, percentage($table-hover-bg-factor));
    $striped-bg: mix($color, $background, percentage($table-striped-bg-factor));
    $active-bg: mix($color, $background, percentage($table-active-bg-factor));
    $table-border-color: mix($color, $background, percentage($table-border-factor));

    --#{$prefix}table-color: #{$color};
    --#{$prefix}table-bg: #{$background};
    --#{$prefix}table-border-color: #{$table-border-color};
    --#{$prefix}table-striped-bg: #{$striped-bg};
    --#{$prefix}table-striped-color: #{color-contrast($striped-bg)};
    --#{$prefix}table-active-bg: #{$active-bg};
    --#{$prefix}table-active-color: #{color-contrast($active-bg)};
    --#{$prefix}table-hover-bg: #{$hover-bg};
    --#{$prefix}table-hover-color: #{color-contrast($hover-bg)};

    color: var(--#{$prefix}table-color);
    border-color: var(--#{$prefix}table-border-color);
  }
}
// scss-docs-end table-variant
`,nr=`// Text truncate
// Requires inline-block or block for proper styling

@mixin text-truncate() {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
`,er=`@mixin theme-variants($map, $state, $component) {
  $selector: &;
  $selector-with-prefix: selector-replace($selector, ".#{$component}", ".#{$theme-prefix}\\\\:#{$component}");
  @at-root #{$selector-with-prefix}-#{$state}, &-#{$state}:not([class*="#{$theme-prefix}:"]) {
    @each $name, $value in $map {
      @if $value != null {
        // TODO: find solution
        @if $name == "border" {
          $name: "border-color";
        }

        --#{$prefix}#{$component}-#{$name}: #{$value};
      }
    }
  }
}

@mixin theme-colors($map, $class) {
  @each $name, $value in $map {
    --#{$prefix}#{$class}-#{$name}: #{$value};
  }
}

@mixin theme-components($map, $component: null) {
  @each $name, $value in $map {
    @if $value != null {
      @if type-of($value) != "map" {
        --#{$prefix}#{$name}: #{$value};
      }
      @else {
        @include theme-variants($value, $name, $component);
      }
    }
  }
}

@mixin theme($map) {
  @each $name, $value in $map {
    @if $name == "root" {
      @include theme-components($value, $name);
    }
    @else if $name == "utilities" {
      @each $class, $variants in $value {
        @include theme-colors($variants, $class);
      }
    } @else {
      .#{$name} {
        @include theme-components($value, $name);
      }
    }
  }
}
`,rr=`// stylelint-disable property-disallowed-list
@mixin transition($transition...) {
  @if length($transition) == 0 {
    $transition: $transition-base;
  }

  @if length($transition) > 1 {
    @each $value in $transition {
      @if $value == null or $value == none {
        @warn "The keyword 'none' or 'null' must be used as a single argument.";
      }
    }
  }

  @if $enable-transitions {
    @if nth($transition, 1) != null {
      transition: $transition;
    }

    @if $enable-reduced-motion and nth($transition, 1) != null and nth($transition, 1) != none {
      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    }
  }
}
`,or=`// Utility generator
// Used to generate utilities & print utilities
@mixin generate-utility($utility, $infix, $is-rfs-media-query: false) {
  $values: map-get($utility, values);

  // If the values are a list or string, convert it into a map
  @if type-of($values) == "string" or type-of(nth($values, 1)) != "list" {
    $values: zip($values, $values);
  }

  @each $key, $value in $values {
    $properties: map-get($utility, property);

    // Multiple properties are possible, for example with vertical or horizontal margins or paddings
    @if type-of($properties) == "string" {
      $properties: append((), $properties);
    }

    // Use custom class if present
    $property-class: if(map-has-key($utility, class), map-get($utility, class), nth($properties, 1));
    $property-class: if($property-class == null, "", $property-class);

    // Use custom CSS variable name if present, otherwise default to \`class\`
    $css-variable-name: if(map-has-key($utility, css-variable-name), map-get($utility, css-variable-name), map-get($utility, class));

    // State params to generate pseudo-classes
    $state: if(map-has-key($utility, state), map-get($utility, state), ());

    $infix: if($property-class == "" and str-slice($infix, 1, 1) == "-", str-slice($infix, 2), $infix);

    // Don't prefix if value key is null (e.g. with shadow class)
    $property-class-modifier: if($key, if($property-class == "" and $infix == "", "", "-") + $key, "");

    // Add theme prefix
    $theme-prefix: if(map-has-key($utility, theme-prefix), map-get($utility, theme-prefix), false);

    // Generate RTL version
    $generate-rtl: if(map-has-key($utility, rtl), map-get($utility, rtl), false);

    @if map-get($utility, rfs) {
      // Inside the media query
      @if $is-rfs-media-query {
        $val: rfs-value($value);

        // Do not render anything if fluid and non fluid values are the same
        $value: if($val == rfs-fluid-value($value), null, $val);
      }
      @else {
        $value: rfs-fluid-value($value);
      }
    }

    $is-css-var: map-get($utility, css-var);
    $is-local-vars: map-get($utility, local-vars);
    $is-rtl: map-get($utility, rtl);

    @if $value != null {
      @if $is-rtl == false {
        /* rtl:begin:remove */
      }

      @if $is-css-var {
        #{if($theme-prefix, theme-prefix("#{$property-class + $infix + $property-class-modifier}"), ".#{$property-class + $infix + $property-class-modifier}")} {
          --#{$prefix}#{$css-variable-name}: #{$value};
        }

        @each $pseudo in $state {
          .#{$property-class + $infix + $property-class-modifier}-#{$pseudo}:#{$pseudo} {
            --#{$prefix}#{$css-variable-name}: #{$value};
          }
        }
      } @else {
        #{if($theme-prefix, theme-prefix("#{$property-class + $infix + $property-class-modifier}"), ".#{$property-class + $infix + $property-class-modifier}")} {
          @each $property in $properties {
            @if $is-local-vars {
              @each $local-var, $variable in $is-local-vars {
                --#{$prefix}#{$local-var}: #{$variable};
              }
            }
            @if $generate-rtl == true {
              @include ltr-rtl($property, $value, null, null, if($enable-important-utilities, !important, null));
            } @else {
              #{$property}: $value if($enable-important-utilities, !important, null);
            }
          }
        }

        @each $pseudo in $state {
          .#{$property-class + $infix + $property-class-modifier}-#{$pseudo}:#{$pseudo} {
            @each $property in $properties {
              @if $is-local-vars {
                @each $local-var, $variable in $is-local-vars {
                  --#{$prefix}#{$local-var}: #{$variable};
                }
              }
              #{$property}: $value if($enable-important-utilities, !important, null);
            }
          }
        }
      }

      @if $is-rtl == false {
        /* rtl:end:remove */
      }
    }
  }
}
`,tr=`// stylelint-disable declaration-no-important

// Hide content visually while keeping it accessible to assistive technologies
//
// See: https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/
// See: https://kittygiraudel.com/2016/10/13/css-hide-and-seek/

@mixin visually-hidden() {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important; // Fix for https://github.com/twbs/bootstrap/issues/25686
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

// Use to only display content when it's focused, or one of its child elements is focused
// (i.e. when focus is within the element/container that the class was applied to)
//
// Useful for "Skip to main content" links; see https://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1

@mixin visually-hidden-focusable() {
  &:not(:focus):not(:focus-within) {
    @include visually-hidden();
  }
}
`,ir=`%sidebar-narrow {
  @include media-breakpoint-up($mobile-breakpoint) {
    z-index: $zindex-fixed + 1;
    flex: 0 0 var(--#{$prefix}sidebar-narrow-width);
    width: var(--#{$prefix}sidebar-narrow-width);
    padding-bottom: var(--#{$prefix}sidebar-toggler-height);
    overflow: visible;

    &.sidebar-fixed {
      z-index: $zindex-fixed + 1;
      width: var(--#{$prefix}sidebar-narrow-width);
    }

    .sidebar-brand-full {
      display: none;
    }

    .sidebar-brand-narrow {
      display: block;
    }

    .d-narrow-none,
    .nav-label,
    .nav-title,
    .nav-group-items,
    .nav-group.show .nav-group-items,
    .sidebar-footer,
    .sidebar-form,
    .sidebar-header {
      height: 0 !important; // stylelint-disable-line declaration-no-important
      padding: 0;
      margin: 0;
      visibility: hidden;
      opacity: 0;
    }

    .sidebar-toggler {
      position: fixed;
      bottom: 0;

      &::before {
        @include ltr-rtl("transform", rotate(-180deg), null, rotate(0deg));
      }
    }

    &.sidebar-end .sidebar-toggler::before {
      transform: rotate(0deg);
    }
  }
}

.sidebar-narrow {
  @extend %sidebar-narrow;
  &:not(.sidebar-end) ~ * {
    --#{$prefix}sidebar-occupy-start: #{$sidebar-narrow-width};
  }
  &.sidebar-end ~ * {
    --#{$prefix}sidebar-occupy-end: #{$sidebar-narrow-width};
  }
}

.sidebar-narrow-unfoldable {
  position: fixed;
  z-index: $zindex-fixed + 1;

  &:not(.sidebar-end) ~ * {
    --#{$prefix}sidebar-occupy-start: #{$sidebar-narrow-width};
  }
  &.sidebar-end ~ * {
    --#{$prefix}sidebar-occupy-end: #{$sidebar-narrow-width};
  }

  &:not(:hover) {
    @extend %sidebar-narrow;
  }

  &:hover {
    .sidebar-toggler {
      &::before {
        @include ltr-rtl("transform", rotate(-180deg), null, rotate(0deg));
      }
    }

    &.sidebar-end .sidebar-toggler::before {
      transform: rotate(0deg);
    }
  }
}

// Responsive behavior
@each $breakpoint in map-keys($grid-breakpoints) {
  @include media-breakpoint-down($breakpoint) {
    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);
    .sidebar:not(.show).sidebar-self-hiding#{$infix} {
      &.sidebar-narrow,
      &.sidebar-narrow-unfoldable {
        &:not(.sidebar-end) {
          @include ltr-rtl("margin-left", calc(var(--#{$prefix}sidebar-narrow-width) * -1));
        }
        &.sidebar-end {
          @include ltr-rtl("margin-right", calc(var(--#{$prefix}sidebar-narrow-width) * -1));
        }
      }
    }
  }
}
`,ar=`// Sidebar navigation

.sidebar-nav {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0;
  margin-bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  list-style: none;

  .nav-title {
    padding: var(--#{$prefix}sidebar-nav-title-padding-y) var(--#{$prefix}sidebar-nav-title-padding-x);
    margin-top: var(--#{$prefix}sidebar-nav-title-margin-top);
    font-size: 80%;
    font-weight: 700;
    color: var(--#{$prefix}sidebar-nav-title-color);
    text-transform: uppercase;
    @include transition($sidebar-nav-title-transition);
  }

  .nav-link {
    display: flex;
    flex: 1;
    align-items: center;
    padding: var(--#{$prefix}sidebar-nav-link-padding-y) var(--#{$prefix}sidebar-nav-link-padding-x);
    color: var(--#{$prefix}sidebar-nav-link-color);
    text-decoration: none;
    white-space: nowrap;
    background: var(--#{$prefix}sidebar-nav-link-bg);
    border: var(--#{$prefix}sidebar-nav-link-border);
    @include border-radius(var(--#{$prefix}sidebar-nav-link-border-radius));
    @include transition($sidebar-nav-link-transition);

    &.active {
      color: var(--#{$prefix}sidebar-nav-link-active-color);
      background: var(--#{$prefix}sidebar-nav-link-active-bg);

      .nav-icon {
        color: var(--#{$prefix}sidebar-nav-link-active-icon-color);
      }
    }

    &.disabled {
      color: var(--#{$prefix}sidebar-nav-link-disabled-color);
      pointer-events: none;
      cursor: not-allowed;
      background: transparent;

      .nav-icon {
        color: var(--#{$prefix}sidebar-nav-link-disabled-icon-color);
      }

      &:hover {
        color: var(--#{$prefix}sidebar-nav-link-disabled-color);

        .nav-icon {
          color: var(--#{$prefix}sidebar-nav-link-disabled-icon-color);
        }

        &.nav-dropdown-toggle::after {
          background-image: var(--#{$prefix}sidebar-nav-group-indicator-hover);
        }
      }
    }

    @media (hover: hover), (-ms-high-contrast: none) {
      &:hover {
        color: var(--#{$prefix}sidebar-nav-link-hover-color);
        text-decoration: none;
        background: var(--#{$prefix}sidebar-nav-link-hover-bg);

        .nav-icon {
          color: var(--#{$prefix}sidebar-nav-link-hover-icon-color);
        }

        &.nav-group-toggle::after {
          background-image: var(--#{$prefix}sidebar-nav-group-indicator-hover);
        }
      }
    }
  }

  .nav-icon {
    flex: 0 0 var(--#{$prefix}sidebar-nav-icon-width);
    height: var(--#{$prefix}sidebar-nav-icon-height);
    font-size: var(--#{$prefix}sidebar-nav-icon-font-size);
    color: var(--#{$prefix}sidebar-nav-link-icon-color);
    text-align: center;
    pointer-events: none;
    fill: currentcolor;
    @include transition(inherit);

    &:first-child {
      @include ltr-rtl("margin-left", calc(var(--#{$prefix}sidebar-nav-link-padding-x) * -1));
    }
  }
  // stylelint-disable-next-line selector-no-qualifying-type
  svg.nav-icon {
    overflow: hidden; // fix chrome 105+ width issue
  }

  .nav-group {
    position: relative;
    @include transition($sidebar-nav-group-transition);

    .nav-group-items {
      padding: var(--#{$prefix}sidebar-nav-group-items-padding-y) var(--#{$prefix}sidebar-nav-group-items-padding-x);
      overflow: hidden;
      @include transition($sidebar-nav-group-items-transition);
    }

    &:not(.show) .nav-group-items {
      display: none;
    }

    &.show {
      background: var(--#{$prefix}sidebar-nav-group-bg);

      .nav-group-toggle {
        color: var(--#{$prefix}sidebar-nav-group-toggle-show-color);
      }

      > .nav-group-toggle::after {
        transform: rotate(180deg);
      }

      + .show {
        margin-top: 1px;
      }
    }
  }

  .nav-group-toggle {
    cursor: pointer;

    &::after {
      display: block;
      flex: 0 12px;
      height: 12px;
      @include ltr-rtl("margin-left", auto);
      content: "";
      background-image: var(--#{$prefix}sidebar-nav-group-indicator);
      background-repeat: no-repeat;
      background-position: center;
      @include transition($sidebar-nav-group-indicator-transition);
    }
  }

  .nav-group-items {
    padding: 0;
    list-style: none;

    .nav-link {
      @include ltr-rtl("padding-left", var(--#{$prefix}sidebar-nav-icon-width));

      .nav-icon {
        @include ltr-rtl("margin-left", calc(var(--#{$prefix}sidebar-nav-icon-width) * -1));
      }
    }
  }

  &.compact,
  .compact {
    .nav-link {
      padding-top: calc(var(--#{$prefix}sidebar-nav-link-padding-y) * .5); // stylelint-disable-line function-disallowed-list
      padding-bottom: calc(var(--#{$prefix}sidebar-nav-link-padding-y) * .5); // stylelint-disable-line function-disallowed-list
    }
  }
}
`,lr=`.sidebar {
  // scss-docs-start sidebar-css-vars
  --#{$prefix}sidebar-width: #{$sidebar-width};
  --#{$prefix}sidebar-bg: #{$sidebar-bg};
  --#{$prefix}sidebar-padding-x: #{$sidebar-padding-x};
  --#{$prefix}sidebar-padding-y: #{$sidebar-padding-y};
  --#{$prefix}sidebar-color: #{$sidebar-color};
  --#{$prefix}sidebar-border-width: #{$sidebar-border-width};
  --#{$prefix}sidebar-border-color: #{$sidebar-border-color};
  --#{$prefix}sidebar-brand-color: #{$sidebar-brand-color};
  --#{$prefix}sidebar-brand-height: #{$sidebar-brand-height};
  --#{$prefix}sidebar-brand-bg: #{$sidebar-brand-bg};
  --#{$prefix}sidebar-close-button-width: #{$sidebar-close-button-width};
  --#{$prefix}sidebar-close-button-height: #{$sidebar-close-button-height};
  --#{$prefix}sidebar-header-height: #{$sidebar-header-height};
  --#{$prefix}sidebar-header-bg: #{$sidebar-header-bg};
  --#{$prefix}sidebar-header-padding-x: #{$sidebar-header-padding-x};
  --#{$prefix}sidebar-header-padding-y: #{$sidebar-header-padding-y};
  --#{$prefix}sidebar-footer-bg: #{$sidebar-footer-bg};
  --#{$prefix}sidebar-footer-height: #{$sidebar-footer-height};
  --#{$prefix}sidebar-footer-padding-x: #{$sidebar-footer-padding-x};
  --#{$prefix}sidebar-footer-padding-y: #{$sidebar-footer-padding-y};
  --#{$prefix}sidebar-toggler-bg: #{$sidebar-toggler-bg};
  --#{$prefix}sidebar-toggler-height: #{$sidebar-toggler-height};
  --#{$prefix}sidebar-toggler-indicator: #{escape-svg($sidebar-toggler-indicator-icon)};
  --#{$prefix}sidebar-toggler-indicator-width: #{$sidebar-toggler-indicator-width};
  --#{$prefix}sidebar-toggler-indicator-height: #{$sidebar-toggler-indicator-height};
  --#{$prefix}sidebar-toggler-hover-bg: #{$sidebar-toggler-hover-bg};
  --#{$prefix}sidebar-toggler-indicator-hover: #{escape-svg($sidebar-toggler-indicator-hover-icon)};

  --#{$prefix}sidebar-narrow-width: #{$sidebar-narrow-width};

  --#{$prefix}sidebar-nav-title-padding-x: #{$sidebar-nav-title-padding-x};
  --#{$prefix}sidebar-nav-title-padding-y: #{$sidebar-nav-title-padding-y};
  --#{$prefix}sidebar-nav-title-margin-top: #{$sidebar-nav-title-margin-top};
  --#{$prefix}sidebar-nav-title-color: #{$sidebar-nav-title-color};
  --#{$prefix}sidebar-nav-link-padding-x: #{$sidebar-nav-link-padding-x};
  --#{$prefix}sidebar-nav-link-padding-y: #{$sidebar-nav-link-padding-y};
  --#{$prefix}sidebar-nav-link-color: #{$sidebar-nav-link-color};
  --#{$prefix}sidebar-nav-link-bg: #{$sidebar-nav-link-bg};
  --#{$prefix}sidebar-nav-link-border-color: #{$sidebar-nav-link-border-color};
  --#{$prefix}sidebar-nav-link-border: #{$sidebar-nav-link-border-width} solid var(--#{$prefix}sidebar-nav-link-border-color);
  --#{$prefix}sidebar-nav-link-border-radius: #{$sidebar-nav-link-border-radius};
  --#{$prefix}sidebar-nav-link-active-color: #{$sidebar-nav-link-active-color};
  --#{$prefix}sidebar-nav-link-active-bg: #{$sidebar-nav-link-active-bg};
  --#{$prefix}sidebar-nav-link-active-icon-color: #{$sidebar-nav-link-active-icon-color};
  --#{$prefix}sidebar-nav-link-disabled-color: #{$sidebar-nav-link-disabled-color};
  --#{$prefix}sidebar-nav-link-disabled-icon-color: #{$sidebar-nav-link-disabled-icon-color};
  --#{$prefix}sidebar-nav-link-hover-color: #{$sidebar-nav-link-hover-color};
  --#{$prefix}sidebar-nav-link-hover-bg: #{$sidebar-nav-link-hover-bg};
  --#{$prefix}sidebar-nav-link-hover-icon-color: #{$sidebar-nav-link-hover-icon-color};
  --#{$prefix}sidebar-nav-icon-width: #{$sidebar-nav-icon-width};
  --#{$prefix}sidebar-nav-icon-height: #{$sidebar-nav-icon-height};
  --#{$prefix}sidebar-nav-icon-font-size: #{$sidebar-nav-icon-font-size};
  --#{$prefix}sidebar-nav-link-icon-color: #{$sidebar-nav-link-icon-color};
  --#{$prefix}sidebar-nav-group-bg: #{$sidebar-nav-group-bg};
  --#{$prefix}sidebar-nav-group-items-padding-y: #{$sidebar-nav-group-items-padding-y};
  --#{$prefix}sidebar-nav-group-items-padding-x: #{$sidebar-nav-group-items-padding-x};
  --#{$prefix}sidebar-nav-group-indicator: #{escape-svg($sidebar-nav-group-indicator-icon)};
  --#{$prefix}sidebar-nav-group-indicator-hover: #{escape-svg($sidebar-nav-group-indicator-hover-icon)};
  --#{$prefix}sidebar-nav-group-toggle-show-color: #{$sidebar-nav-group-toggle-show-color};
  // scss-docs-end sidebar-css-vars

  position: relative;
  display: flex;
  // $sidebar-width is the width of the columns
  flex: 0 0 var(--#{$prefix}sidebar-width);
  flex-direction: column;
  // put the nav on the left
  order: -1;
  width: var(--#{$prefix}sidebar-width);
  padding: var(--#{$prefix}sidebar-padding-y) var(--#{$prefix}sidebar-padding-x);
  color: var(--#{$prefix}sidebar-color);
  background: var(--#{$prefix}sidebar-bg);
  @include ltr-rtl("border-right", var(--#{$prefix}sidebar-border-width) solid var(--#{$prefix}sidebar-border-color));
  box-shadow: none;
  @include transition($sidebar-transition);

  &:not(.sidebar-end){
    @include ltr-rtl("margin-left", 0);
    ~ * {
      --#{$prefix}sidebar-occupy-start: #{$sidebar-width};
    }
  }

  &.sidebar-end {
    order: 99;
    @include ltr-rtl("margin-right", 0);
    ~ * {
      --#{$prefix}sidebar-occupy-end: #{$sidebar-width};
    }
  }

  &[class*="bg-"]  {
    border-color: rgba($black, .1);
  }

  @each $width, $value in $sidebar-widths {
    &.sidebar-#{$width} {
      --#{$prefix}sidebar-width: #{$value};
      @include media-breakpoint-up($mobile-breakpoint) {
        &:not(.sidebar-end):not(.hide) {
          ~ * {
            --#{$prefix}sidebar-occupy-start: #{$value};
          }
        }
        &.sidebar-end:not(.hide) {
          ~ * {
            --#{$prefix}sidebar-occupy-end: #{$value};
          }
        }
      }
    }
  }

  @include media-breakpoint-up($mobile-breakpoint) {
    &.hide {
      &:not(.sidebar-end){
        @include ltr-rtl("margin-left", calc(-1 * var(--#{$prefix}sidebar-width)));
        ~ * {
          --#{$prefix}sidebar-occupy-start: 0;
        }
      }
      &.sidebar-end {
        @include ltr-rtl("margin-right", calc(-1 * var(--#{$prefix}sidebar-width)));
        ~ * {
          --#{$prefix}sidebar-occupy-end: 0;
        }
      }
    }
  }

  &.sidebar-fixed {
    @include media-breakpoint-up($mobile-breakpoint) {
      position: fixed;
      top: 0;
      bottom: 0;
      z-index: $zindex-fixed;
      @include elevation(2);

      &:not(.sidebar-end) {
        @include ltr-rtl("left", 0);
      }

      &.sidebar-end {
        @include ltr-rtl("right", 0);
      }
    }
  }

  &.sidebar-sticky {
    @include media-breakpoint-up($mobile-breakpoint) {
      position: sticky;
      top: 0;
      height: 100vh;
    }
  }

  &.sidebar-overlaid {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: $zindex-fixed + 2;

    &:not(.hide) {
      @include elevation(3);
    }

    &:not(.sidebar-end) {
      @include ltr-rtl("left", 0);
      ~ * {
        --#{$prefix}sidebar-occupy-start: 0 !important;  // stylelint-disable-line
      }
    }

    &.sidebar-end {
      @include ltr-rtl("right", 0);
      ~ * {
        --#{$prefix}sidebar-occupy-end: 0  !important; // stylelint-disable-line
      }
    }
  }

  @include media-breakpoint-down($mobile-breakpoint) {
    // Some of our components use this property to detect if the sidebar has mobile behavior.
    --#{$prefix}is-mobile: true;
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: $zindex-fixed + 1;

    &:not(.sidebar-end) {
      @include ltr-rtl("left", 0);
      ~ * {
        --#{$prefix}sidebar-occupy-start: 0 !important; // stylelint-disable-line
      }

      &:not(.show) {
        @include ltr-rtl("margin-left", calc(-1 * var(--#{$prefix}sidebar-width)));
      }
    }
    &.sidebar-end {
      @include ltr-rtl("right", 0);
      ~ * {
        --#{$prefix}sidebar-occupy-end: 0 !important; // stylelint-disable-line
      }

      &:not(.show) {
        @include ltr-rtl("margin-right", calc(-1 * var(--#{$prefix}sidebar-width)));
      }
    }
  }
}

.sidebar-close {
  position: absolute;
  top: 0;
  @include ltr-rtl("right", 0);
  width: var(--#{$prefix}sidebar-close-button-width);
  height: var(--#{$prefix}sidebar-close-button-height);
  color: var(--#{$prefix}sidebar-color);
  background: transparent;
  border: 0;

  &:hover {
    text-decoration: none;
  }

  &:focus {
    outline: 0;
  }
}

.sidebar-brand {
  display: flex;
  flex: 0 0 var(--#{$prefix}sidebar-brand-height);
  align-items: center;
  justify-content: center;
  color: var(--#{$prefix}sidebar-brand-color);
  background: var(--#{$prefix}sidebar-brand-bg);

  .sidebar-brand-narrow {
    display: none;
  }
}

.sidebar-header {
  flex: 0 0 var(--#{$prefix}sidebar-header-height);
  padding: var(--#{$prefix}sidebar-header-padding-y) var(--#{$prefix}sidebar-header-padding-x);
  text-align: center;
  background: var(--#{$prefix}sidebar-header-bg);
  @include transition($sidebar-header-height-transition);

  .nav-link {
    display: flex;
    align-items: center;
    min-height: var(--#{$prefix}sidebar-header-height);
  }
}

.sidebar-footer {
  flex: 0 0 var(--#{$prefix}sidebar-footer-height);
  padding: var(--#{$prefix}sidebar-footer-padding-y) var(--#{$prefix}sidebar-footer-padding-x);
  background: var(--#{$prefix}sidebar-footer-bg);
  @include transition($sidebar-footer-height-transition);
}

.sidebar-toggler {
  display: flex;
  flex: 0 0 var(--#{$prefix}sidebar-toggler-height);
  justify-content: flex-end;
  width: inherit;
  padding: 0;
  cursor: pointer;
  background-color: var(--#{$prefix}sidebar-toggler-bg);
  border: 0;

  @include media-breakpoint-down($mobile-breakpoint) {
    display: none;
  }

  &::before {
    display: block;
    width: var(--#{$prefix}sidebar-toggler-indicator-width);
    height: var(--#{$prefix}sidebar-toggler-indicator-height);
    content: "";
    background-image: var(--#{$prefix}sidebar-toggler-indicator);
    background-repeat: no-repeat;
    background-position: center;
    background-size: calc(var(--#{$prefix}sidebar-toggler-indicator-height) * .25); // stylelint-disable-line function-disallowed-list
    @include transition($sidebar-toggler-transition);
    @include rtl() {
      transform: rotate(-180deg);
    }
  }

  &:focus {
    outline: 0;
  }

  &:hover {
    background-color: var(--#{$prefix}sidebar-toggler-hover-bg);
    &::before {
      background-image: var(--#{$prefix}sidebar-toggler-indicator-hover);
    }
  }

  .sidebar-end & {
    justify-content: flex-start;
    &::before {
      transform: rotate(-180deg);
    }
  }
}

// Backdrop background

.sidebar-backdrop {
  // scss-docs-start sidebar-backdrop-css-vars
  --#{$prefix}backdrop-zindex: #{$zindex-sidebar-backdrop};
  --#{$prefix}backdrop-bg: #{$sidebar-backdrop-bg};
  --#{$prefix}backdrop-opacity: #{$sidebar-backdrop-opacity};
  // scss-docs-end sidebar-backdrop-css-vars

  @include media-breakpoint-down($mobile-breakpoint) {
    @include overlay-backdrop(var(--#{$prefix}backdrop-zindex), var(--#{$prefix}backdrop-bg), var(--#{$prefix}backdrop-opacity));
  }
}
//
// Sidebar themes
//

.sidebar-light {
  --#{$prefix}sidebar-color: #{$sidebar-light-color};
  --#{$prefix}sidebar-bg: #{$sidebar-light-bg};
  --#{$prefix}sidebar-border-width: #{$sidebar-light-border-width};
  --#{$prefix}sidebar-border-color: #{$sidebar-light-border-color};
  --#{$prefix}sidebar-brand-color: #{$sidebar-light-brand-color};
  --#{$prefix}sidebar-brand-bg: #{$sidebar-light-brand-bg};
  --#{$prefix}sidebar-header-bg: #{$sidebar-light-header-bg};
  --#{$prefix}sidebar-nav-title-color: #{$sidebar-light-nav-title-color};
  --#{$prefix}sidebar-nav-link-color: #{$sidebar-light-nav-link-color};
  --#{$prefix}sidebar-nav-link-bg: #{$sidebar-light-nav-link-bg};
  --#{$prefix}sidebar-nav-link-icon-color: #{$sidebar-light-nav-link-icon-color};
  --#{$prefix}sidebar-nav-link-hover-color: #{$sidebar-light-nav-link-hover-color};
  --#{$prefix}sidebar-nav-link-hover-bg: #{$sidebar-light-nav-link-hover-bg};
  --#{$prefix}sidebar-nav-link-hover-icon-color: #{$sidebar-light-nav-link-hover-icon-color};
  --#{$prefix}sidebar-nav-link-active-color: #{$sidebar-light-nav-link-active-color};
  --#{$prefix}sidebar-nav-link-active-bg: #{$sidebar-light-nav-link-active-bg};
  --#{$prefix}sidebar-nav-link-active-icon-color: #{$sidebar-light-nav-link-active-icon-color};
  --#{$prefix}sidebar-nav-link-disabled-color: #{$sidebar-light-nav-link-disabled-color};
  --#{$prefix}sidebar-nav-link-disabled-icon-color: #{$sidebar-light-nav-link-disabled-icon-color};
  --#{$prefix}sidebar-nav-group-bg: #{$sidebar-light-nav-group-bg};
  --#{$prefix}sidebar-nav-group-toggle-show-color: #{$sidebar-light-nav-group-toggle-show-color};
  --#{$prefix}sidebar-nav-group-indicator: #{$sidebar-light-nav-group-indicator-icon};
  --#{$prefix}sidebar-nav-group-indicator-hover: #{$sidebar-light-nav-group-indicator-hover-icon};
  --#{$prefix}sidebar-footer-bg: #{$sidebar-light-footer-bg};
  --#{$prefix}sidebar-toggler-bg: #{$sidebar-light-toggler-bg};
  --#{$prefix}sidebar-toggler-hover-bg: #{$sidebar-light-toggler-hover-bg};
  --#{$prefix}sidebar-toggler-indicator: #{$sidebar-light-toggler-indicator-icon};
  --#{$prefix}sidebar-toggler-indicator-hover: #{$sidebar-light-toggler-indicator-hover-icon};
}
`,dr=`@import "./../functions";
@import "./../variables";
@import "./../maps";
@import "./../mixins";
@import "./../utilities";

$theme-name: "dark-theme" !default;
$theme-prefix: "dark" !default;

.#{$theme-name} {
  @import "dark/variables";
  @import "dark/utilities";
  @import "dark/root";

  @include theme($theme-map);

  // Alert variants
  @each $state, $value in $alert-variants-dt {
    $alert-background: map-get($value, "alert-bg");
    $alert-border: map-get($value, "alert-border");
    $alert-color: map-get($value, "alert-color");

    @if (contrast-ratio($alert-background, $alert-color) < $min-contrast-ratio) {
      $alert-color: mix(map-get($value, "base-color"), color-contrast($alert-background), abs($alert-color-scale));
    }
    .alert-#{$state} {
      @include alert-variant($alert-background, $alert-border, $alert-color);
    }
  }

  // Button variants
  @each $state, $variant in $button-variants-dt {
    .btn-#{$state} {
      @include button-variant($variant);
    }
  }

  @each $state, $variant in $button-outline-ghost-variants-dt {
    .btn-outline-#{$state} {
      @include button-outline-variant($variant);
    }
  }

  @each $state, $variant in $button-outline-ghost-variants-dt {
    .btn-ghost-#{$state} {
      @include button-ghost-variant($variant);
    }
  }

  // List group variants
  @each $state, $variant in $list-group-variants-dt {
    .list-group-item-#{$state} {
      @include list-group-item-variant($state, $variant);
    }
  }

  // Fix Firefox option color
  @-moz-document url-prefix("") {
    select:not([multiple]) option,
    select optgroup {
      color: initial;
    }
  }

  // Utilities
  @import "./../utilities/api";
}
`,sr=`// stylelint-disable scss/selector-no-redundant-nesting-selector
& {
  @each $color, $value in $theme-colors-dt {
    --#{$prefix}#{$color}: #{$value};
  }

  @each $color, $value in $theme-colors-rgb-dt {
    --#{$prefix}#{$color}-rgb: #{$value};
  }

  --#{$prefix}body-color-rgb: #{to-rgb($body-color-dt)};
  --#{$prefix}body-bg-rgb: #{to-rgb($body-bg-dt)};

  // Gradients
  @each $color, $map in $theme-gradients-dt {
    --#{$prefix}#{$color}-start: #{map-get($map, "start")};
    --#{$prefix}#{$color}-stop: #{map-get($map, "stop")};
  }
}
`,cr=`// Utilities maps

$utilities-colors-dt: $theme-colors-rgb-dt !default;
$utilities-text-dt: map-merge(
  $utilities-colors,
  (
    "black": to-rgb($black),
    "white": to-rgb($white),
    "body": to-rgb($body-color-dt),
    "high-emphasis": to-rgb($high-emphasis-dt),
    "medium-emphasis": to-rgb($medium-emphasis-dt),
    "disabled": to-rgb($disabled-dt)
  )
) !default;
$utilities-text-colors-dt: map-loop($utilities-text-dt, rgba-css-var, "$key", "text") !default;
$utilities-bg-dt: map-merge(
  $utilities-colors-dt,
  (
    "black": to-rgb($black),
    "white": to-rgb($white),
    "body": to-rgb($body-bg-dt)
  )
) !default;
$utilities-bg-colors-dt: map-loop($utilities-bg-dt, rgba-css-var, "$key", "bg") !default;

// stylelint-disable-next-line scss/dollar-variable-default
$utilities: ();
// stylelint-disable-next-line scss/dollar-variable-default
$utilities: map-merge(
  (
    "color": (
      property: color,
      class: text,
      values: map-merge(
        $utilities-text-colors-dt,
        (
          "reset": inherit
        )
      ),
      only-vars: true,
      theme-prefix: true,
    ),
    "background-color": (
      property: background-color,
      class: bg,
      local-vars: (
        "bg-opacity": 1
      ),
      values: map-merge(
        $utilities-bg-colors-dt,
        (
          "transparent": transparent
        )
      ),
      vars: true,
      theme-prefix: true
    ),
    "bg-opacity": (
      css-var: true,
      class: bg-opacity,
      values: (
        10: .1,
        25: .25,
        50: .5,
        75: .75,
        100: 1
      ),
      // only-vars: true,
      theme-prefix: true,
    ),
  ),
  $utilities
);

`,pr=`// Color system

// fusv-disable
$bg-elevation-0: #181924 !default;
$bg-elevation-1:   rgba(mix(rgba(255, 255, 255, .1), $bg-elevation-0), 1) !default;
$bg-elevation-2:   rgba(mix(rgba(255, 255, 255, .14), $bg-elevation-0), 1) !default;
$bg-elevation-3:   rgba(mix(rgba(255, 255, 255, .16), $bg-elevation-0), 1) !default;
$bg-elevation-4:   rgba(mix(rgba(255, 255, 255, .18), $bg-elevation-0), 1) !default;
$bg-elevation-6:   rgba(mix(rgba(255, 255, 255, .22), $bg-elevation-0), 1) !default;
$bg-elevation-8:   rgba(mix(rgba(255, 255, 255, .24), $bg-elevation-0), 1) !default;
$bg-elevation-12:  rgba(mix(rgba(255, 255, 255, .28), $bg-elevation-0), 1) !default;
$bg-elevation-16:  rgba(mix(rgba(255, 255, 255, .3), $bg-elevation-0), 1) !default;
$bg-elevation-24:  rgba(mix(rgba(255, 255, 255, .32), $bg-elevation-0), 1) !default;
// fusv-enable

$high-emphasis-dt:    rgba($white, .87) !default;
$medium-emphasis-dt:  rgba($white, .6) !default;
$disabled-dt:         rgba($white, .38) !default;

$primary-dt:    tint-color(desaturate($primary, 30%), 30%) !default;
$secondary-dt:  desaturate($secondary, 30%) !default;
$success-dt:    desaturate($success, 30%) !default;
$info-dt:       desaturate($info, 30%) !default;
$warning-dt:    desaturate($warning, 30%) !default;
$danger-dt:     desaturate($danger, 30%) !default;
$light-dt:      rgba($white, .1) !default;
$dark-dt:       rgba($black, .1) !default;

// fusv-disable
$theme-colors-dt: (
  "primary":    $primary-dt,
  "secondary":  $secondary-dt,
  "success":    $success-dt,
  "info":       $info-dt,
  "warning":    $warning-dt,
  "danger":     $danger-dt,
  "light":      $light-dt,
  "dark":       $dark-dt
) !default;
// fusv-enable

$theme-colors-rgb-dt: map-loop($theme-colors-dt, to-rgb, "$value") !default;

// Gradients

// scss-docs-start theme-gradients
$primary-gradient-dt: (
  "start":  desaturate(#321fdb, 20%),
  "stop":   desaturate(#1f1498, 20%)
) !default;

$secondary-gradient-dt: (
  "start":  desaturate(#c8d2dc, 20%),
  "stop":    desaturate($white, 20%)
) !default;

$light-gradient-dt: (
  "start":  desaturate(#e3e8ed, 20%),
  "stop":    desaturate($white, 20%)
) !default;

$dark-gradient-dt: (
  "start":  desaturate(#3c4b64, 20%),
  "stop":   desaturate(#212333, 20%)
) !default;

$danger-gradient-dt: (
  "start":  desaturate(#e55353, 20%),
  "stop":   desaturate(#d93737, 20%)
) !default;

$warning-gradient-dt: (
  "start":  desaturate(#f9b115, 20%),
  "stop":   desaturate(#f6960b, 20%)
) !default;

$success-gradient-dt: (
  "start":  desaturate(#2eb85c, 20%),
  "stop":   desaturate(#1b9e3e, 20%)
) !default;

$info-gradient-dt: (
  "start":  desaturate(#39f, 20%),
  "stop":   desaturate(#2982cc, 20%)
) !default;

$theme-gradients-dt: (
  "primary":    $primary-gradient-dt,
  "secondary":  $secondary-gradient-dt,
  "success":    $success-gradient-dt,
  "info":       $info-gradient-dt,
  "warning":    $warning-gradient-dt,
  "danger":     $danger-gradient-dt,
  "light":      $light-gradient-dt,
  "dark":       $dark-gradient-dt
) !default;
// scss-docs-end theme-gradients

// Body
//
// Settings for the \`<body>\` element.

$body-bg-dt:                   $bg-elevation-0 !default;
$body-color-dt:                $high-emphasis-dt !default;
$elevation-base-color-dt:      0, 0, 0 !default;

// Components
//
// Define common padding and border radius sizes and more.

$border-color-dt:   rgba(255, 255, 255, .075) !default;

$theme-root-dt: (
  "body-bg":               $body-bg-dt,
  "body-color":            $body-color-dt,
  "elevation-base-color":  $elevation-base-color-dt,
  "high-emphasis":         $high-emphasis-dt,
  "medium-emphasis":       $medium-emphasis-dt,
  "disabled":              $disabled-dt,
  "border-color":          $border-color-dt
) !default;

// $component-color-dt:  $body-color-dt !default;
// $component-bg-dt:     $gray-800-dt !default;

$component-active-color-dt:  $white !default;
$component-active-bg-dt:     $primary-dt !default;

// Accordion

$accordion-button-color-dt:               $body-color-dt !default;
$accordion-button-bg-dt:                  transparent !default;
$accordion-border-color-dt:               rgba($white, .125) !default;
$accordion-color-dt:                      $high-emphasis-dt !default;
$accordion-bg-dt:                         transparent !default;

$accordion-button-color-dt:               $body-color-dt !default;
$accordion-button-bg-dt:                  transparent !default;
$accordion-border-color-dt:               rgba($white, .125) !default;

$accordion-button-active-bg-dt:           tint-color(rgba($component-active-bg-dt, .5), 5%) !default;
$accordion-button-active-color-dt:        shade-color($component-active-color-dt, 10%) !default;

$accordion-button-focus-border-color-dt:  rgba($white, .2) !default;

$accordion-icon-color-dt:                 $body-color-dt !default;
$accordion-icon-active-color-dt:          $body-color-dt !default;

$accordion-button-icon-dt:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-color-dt}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !default;
$accordion-button-active-icon-dt:  url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-active-color-dt}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !default;


$accordion-theme-map: (
  "accordion-button-color":               $accordion-button-color-dt,
  "accordion-button-bg":                  $accordion-button-bg-dt,
  "accordion-bg":                         $accordion-bg-dt,
  "accordion-color":                      $accordion-color-dt,
  "accordion-border-color":               $accordion-border-color-dt,
  "accordion-button-active-bg":           $accordion-button-active-bg-dt,
  "accordion-button-active-color":        $accordion-button-active-color-dt,
  "accordion-button-focus-border-color":  $accordion-button-focus-border-color-dt,
  "accordion-button-icon":                $accordion-button-icon-dt,
  "accordion-button-active-icon":         $accordion-button-active-icon-dt
) !default;

// Alert

$alert-variants-dt: (
  "primary":    alert-color-map($primary),
  "secondary":  alert-color-map($secondary),
  "success":    alert-color-map($success),
  "danger":     alert-color-map($danger),
  "warning":    alert-color-map($warning),
  "info":       alert-color-map($info)
) !default;

// Breadcrumb

$breadcrumb-bg-dt:             null !default;
$breadcrumb-divider-color-dt:  $body-color-dt !default;
$breadcrumb-active-color-dt:   $medium-emphasis-dt !default;

$breadcrumb-theme-map: (
  "breadcrumb-bg":             $breadcrumb-bg-dt,
  "breadcrumb-divider-color":  $breadcrumb-divider-color-dt,
  "breadcrumb-active-color":   $breadcrumb-active-color-dt
) !default;

// Buttons

$button-variants-dt: (
  "primary":    btn-color-map($primary-dt, $primary-dt),
  "secondary":  btn-color-map($secondary-dt, $secondary-dt),
  "success":    btn-color-map($success-dt, $success-dt),
  "danger":     btn-color-map($danger-dt, $danger-dt),
  "warning":    btn-color-map($warning-dt, $warning-dt),
  "info":       btn-color-map($info-dt, $info-dt)
) !default;

$button-outline-ghost-variants-dt: (
  "primary":    btn-outline-color-map($primary-dt),
  "secondary":  btn-outline-color-map($secondary-dt),
  "success":    btn-outline-color-map($success-dt),
  "danger":     btn-outline-color-map($danger-dt),
  "warning":    btn-outline-color-map($warning-dt),
  "info":       btn-outline-color-map($info-dt)
) !default;

// Cards

// scss-docs-start card-variables
$card-bg-dt:            $bg-elevation-1 !default;
$card-color-dt:         null !default;
$card-border-color-dt:  $border-color-dt !default;
$card-cap-bg-dt:        $bg-elevation-2 !default;
$card-cap-color-dt:     null !default;

$card-theme-map: (
  "card-bg":            $card-bg-dt,
  "card-color":         $card-color-dt,
  "card-border-color":  $card-border-color-dt,
  "card-cap-bg":        $card-cap-bg-dt,
  "card-cap-color":     $card-cap-color-dt
) !default;
// scss-docs-end card-variables

// Close button

$btn-close-color-dt:  $high-emphasis-dt !default;
$btn-close-bg-dt:     url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$btn-close-color-dt}'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>") !default;

$close-theme-map: (
  "btn-close-color":  $btn-close-color-dt,
  "btn-close-bg":     $btn-close-bg-dt
) !default;

// Dropdown

$dropdown-color-dt:                $body-color-dt !default;
$dropdown-bg-dt:                   $bg-elevation-8 !default;
$dropdown-border-color-dt:         $border-color-dt !default;
$dropdown-divider-bg-dt:           $border-color-dt !default;
$dropdown-link-color-dt:           $body-color-dt !default;
$dropdown-link-hover-color-dt:     $body-color-dt !default;
$dropdown-link-hover-bg-dt:        $bg-elevation-16 !default;
$dropdown-link-active-color-dt:    $component-active-color-dt !default;
$dropdown-link-active-bg-dt:       $component-active-bg-dt !default;
$dropdown-link-disabled-color-dt:  rgba($body-color-dt, .6) !default;
$dropdown-header-color-dt:         $body-color-dt !default;

$dropdown-theme-map: (
  "dropdown-color":                $dropdown-color-dt,
  "dropdown-border-color":         $dropdown-border-color-dt,
  "dropdown-bg":                   $dropdown-bg-dt,
  "dropdown-divider-bg":           $dropdown-divider-bg-dt,
  "dropdown-link-color":           $dropdown-link-color-dt,
  "dropdown-link-hover-color":     $dropdown-link-hover-color-dt,
  "dropdown-link-hover-bg":        $dropdown-link-hover-bg-dt,
  "dropdown-link-active-color":    $dropdown-link-active-color-dt,
  "dropdown-link-active-bg":       $dropdown-link-active-bg-dt,
  "dropdown-link-disabled-color":  $dropdown-link-disabled-color-dt,
  "dropdown-header-color":         $dropdown-header-color-dt
) !default;

// Footer

$footer-dark-bg-dt:            $bg-elevation-3 !default;
$footer-dark-color-dt:         $body-color-dt !default;
$footer-dark-border-width-dt:  0 !default;
$footer-dark-border-color-dt:  transparent !default;

$footer-theme-map: (
  "footer-bg":            $footer-dark-bg-dt,
  "footer-color":         $footer-dark-color-dt,
  "footer-border-width":  $footer-dark-border-width-dt,
  "footer-border-color":  $footer-dark-border-color-dt
) !default;

// Forms


// Buttons + Forms
//
// Shared variables that are reassigned to \`$input-\` and \`$btn-\` specific variables.

$input-color-dt:                     $body-color-dt !default;
$input-bg-dt:                        rgba($white, .05) !default;
$input-border-color-dt:              rgba($white, .09) !default;
$input-focus-color-dt:               $body-color-dt !default;
$input-focus-bg-dt:                  rgba($white, .05) !default;
$input-focus-border-color-dt:        rgba($white, .2) !default;
$input-disabled-bg-dt:               rgba($black, .1) !default;
$input-placeholder-color-dt:         $medium-emphasis-dt !default;
$input-plaintext-color-dt:           $body-color-dt !default;

$form-text-color-dt:                 $medium-emphasis-dt !default;

$input-group-addon-color-dt:         $body-color-dt !default;
$input-group-addon-bg-dt:            rgba($white, .09) !default;
$input-group-addon-border-color-dt:  rgba($white, .09) !default;

$form-select-color-dt:               $input-color-dt !default;
$form-select-bg-dt:                  $input-bg-dt !default;
$form-select-border-color-dt:        $input-border-color-dt !default;
$form-select-focus-border-color-dt:        $input-focus-border-color-dt !default;
// $form-select-disabled-color-dt:         $input-disabled-color-dt !default;
$form-select-disabled-bg-dt:            $input-disabled-bg-dt !default;
// $form-select-disabled-border-color-dt:  $input-disabled-border-color-dt !default;

$form-check-input-checked-color-dt:          $component-active-color-dt !default;
$form-check-input-checked-bg-color-dt:       $component-active-bg-dt !default;
$form-check-input-checked-border-color-dt:   $form-check-input-checked-bg-color-dt !default;

$form-control-theme-map: (
  "input-color":                            $input-color-dt,
  "input-bg":                               $input-bg-dt,
  "input-border-color":                     $input-border-color-dt,
  "input-focus-color":                      $input-focus-color-dt,
  "input-focus-bg":                         $input-focus-bg-dt,
  "input-focus-border-color":               $input-focus-border-color-dt,
  "input-disabled-bg":                      $input-disabled-bg-dt,
  "input-placeholder-color":                $input-placeholder-color-dt,
  "input-plaintext-color":                  $input-plaintext-color-dt,
  "form-text-color":                        $form-text-color-dt,
) !default;

$input-group-theme-map: (
  "input-group-addon-color":         $input-group-addon-color-dt,
  "input-group-addon-bg":            $input-group-addon-bg-dt,
  "input-group-addon-border-color":  $input-group-addon-border-color-dt
) !default;

$form-check-theme-map: (
  "form-check-input-checked-color":         $form-check-input-checked-color-dt,
  "form-check-input-checked-bg-color":      $form-check-input-checked-bg-color-dt,
  "form-check-input-checked-border-color":  $form-check-input-checked-border-color-dt
) !default;

$form-select-theme-map: (
  "form-select-color":                  $form-select-color-dt,
  "form-select-bg":                     $form-select-bg-dt,
  "form-select-border-color":           $form-select-border-color-dt,
  "form-select-focus-border-color":     $form-select-focus-border-color-dt,
  // "form-select-disabled-color":         $form-select-disabled-color-dt,
  "form-select-disabled-bg":            $form-select-disabled-bg-dt,
  // "form-select-disabled-border-color":  $form-select-disabled-border-color-dt,
) !default;

$form-multi-select-color-dt:               $input-color-dt !default;
$form-multi-select-bg-dt:                  $input-bg-dt !default;
$form-multi-select-border-color-dt:        $input-border-color-dt !default;

$form-multi-select-focus-color-dt:         $input-focus-color-dt !default;
$form-multi-select-focus-bg-dt:            $input-focus-bg-dt !default;
$form-multi-select-focus-border-color-dt:  $input-focus-border-color-dt !default;

$form-multi-select-disabled-color-dt:      $disabled-dt !default;
$form-multi-select-disabled-bg-dt:         $input-disabled-bg-dt !default;

$form-multi-select-tag-bg-dt:               $light-dt !default;
$form-multi-select-tag-border-color-dt:     $input-border-color-dt !default;

$form-multi-select-search-color-dt:         $input-color-dt !default;
$form-multi-select-search-bg-dt:            transparent !default;
$form-multi-select-search-border-color-dt:  $input-border-color-dt !default;

$form-multi-select-cleaner-color-dt:         $medium-emphasis-dt !default;
$form-multi-select-cleaner-bg-dt:            url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$form-multi-select-cleaner-color-dt}'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>") !default;
$form-multi-select-cleaner-hover-color-dt:   $high-emphasis-dt !default;
$form-multi-select-cleaner-hover-bg-dt:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$form-multi-select-cleaner-hover-color-dt}'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>") !default;
$form-multi-select-cleaner-focus-color-dt:   $high-emphasis-dt !default;
$form-multi-select-cleaner-focus-bg-dt:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$form-multi-select-cleaner-focus-color-dt}'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>") !default;
$form-multi-select-cleaner-border-color-dt:  $input-border-color-dt !default;

$form-multi-select-select-all-color-dt:         $medium-emphasis-dt !default;
$form-multi-select-select-all-bg-dt:            transparent !default;
$form-multi-select-select-all-hover-color-dt:   $high-emphasis-dt !default;
$form-multi-select-select-all-hover-bg-dt:      transparent !default;
$form-multi-select-select-all-border-color-dt:  $input-border-color-dt !default;

$form-multi-select-options-color-dt:         $body-color-dt !default;
$form-multi-select-options-bg-dt:            $bg-elevation-8 !default;
$form-multi-select-options-border-color-dt:  $input-border-color-dt !default;

$form-multi-select-option-hover-color-dt:    $body-color-dt !default;
$form-multi-select-option-hover-bg-dt:       $light-dt !default;

$form-multi-select-option-selected-bg-dt:    $light-dt !default;

$form-multi-select-theme-map: (
  "form-multi-select-color":                    $form-multi-select-color-dt,
  "form-multi-select-bg":                       $form-multi-select-bg-dt,
  "form-multi-select-border-color":             $form-multi-select-border-color-dt,
  "form-multi-select-disabled-color":           $form-multi-select-disabled-color-dt,
  "form-multi-select-disabled-bg":              $form-multi-select-disabled-bg-dt,
  "form-multi-select-focus-color":              $form-multi-select-focus-color-dt,
  "form-multi-select-focus-bg":                 $form-multi-select-focus-bg-dt,
  "form-multi-select-focus-border-color":       $form-multi-select-focus-border-color-dt,
  "form-multi-select-tag-bg":                   $form-multi-select-tag-bg-dt,
  "form-multi-select-tag-border-color":         $form-multi-select-tag-border-color-dt,
  "form-multi-select-search-color":             $form-multi-select-search-color-dt,
  "form-multi-select-search-bg":                $form-multi-select-search-bg-dt,
  "form-multi-select-search-border-color":      $form-multi-select-search-border-color-dt,
  "form-multi-select-cleaner-bg":               $form-multi-select-cleaner-bg-dt,
  "form-multi-select-cleaner-hover-bg":         $form-multi-select-cleaner-hover-bg-dt,
  "form-multi-select-cleaner-focus-bg":         $form-multi-select-cleaner-focus-bg-dt,
  "form-multi-select-cleaner-border-color":     $form-multi-select-cleaner-border-color-dt,
  "form-multi-select-select-all-color":         $form-multi-select-select-all-color-dt,
  "form-multi-select-select-all-bg":            $form-multi-select-select-all-bg-dt,
  "form-multi-select-select-all-hover-color":   $form-multi-select-select-all-hover-color-dt,
  "form-multi-select-select-all-hover-bg":      $form-multi-select-select-all-hover-bg-dt,
  "form-multi-select-select-all-border-color":  $form-multi-select-select-all-border-color-dt,
  "form-multi-select-options-color":            $form-multi-select-options-color-dt,
  "form-multi-select-options-bg":               $form-multi-select-options-bg-dt,
  "form-multi-select-options-border-color":     $form-multi-select-options-border-color-dt,
  "form-multi-select-option-hover-color":       $form-multi-select-option-hover-color-dt,
  "form-multi-select-option-hover-bg":          $form-multi-select-option-hover-bg-dt,
  "form-multi-select-option-selected-bg":       $form-multi-select-option-selected-bg-dt,
) !default;

// Header

$header-bg-dt:                     $bg-elevation-3 !default;
$header-color-dt:                  rgba($white, .75) !default;
$header-border-dt:                 ( bottom: 0 ) !default;
$header-hover-color-dt:            rgba($white, .9) !default;
$header-active-color-dt:           $white !default;
$header-disabled-color-dt:         rgba($white, .25) !default;
$header-brand-color-dt:            $header-active-color-dt !default;
$header-brand-hover-color-dt:      $header-active-color-dt !default;
$header-toggler-color-dt:          rgba($white, .75) !default;
$header-toggler-hover-color-dt:    $white !default;
$header-toggler-icon-bg-dt:        str-replace(url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$header-color-dt}' stroke-width='2.25' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E"), "#", "%23") !default;
$header-toggler-hover-icon-bg-dt:  str-replace(url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$header-hover-color-dt}' stroke-width='2.25' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E"), "#", "%23") !default;
$header-toggler-border-color-dt:   rgba($white, .1) !default;
$header-divider-border-color-dt:   rgba($white, .1) !default;

$header-theme-map: (
  "header-bg":                     $header-bg-dt,
  "header-color":                  $header-color-dt,
  "header-border":                 $header-border-dt,
  "header-hover-color":            $header-hover-color-dt,
  "header-active-color":           $header-active-color-dt,
  "header-disabled-color":         $header-disabled-color-dt,
  "header-brand-color":            $header-brand-color-dt,
  "header-brand-hover-color":      $header-brand-hover-color-dt,
  "header-toggler-color":          $header-toggler-color-dt,
  "header-toggler-hover-color":    $header-toggler-hover-color-dt,
  "header-toggler-icon-bg":        $header-toggler-icon-bg-dt,
  "header-toggler-hover-icon-bg":  $header-toggler-hover-icon-bg-dt,
  "header-toggler-border-color":   $header-toggler-border-color-dt,
  "header-divider-border-color":   $header-divider-border-color-dt
) !default;

// Links

$link-color-dt:                    shift-color($primary-dt, -12%) !default;
$link-hover-color-dt:              shift-color($link-color-dt, -20%) !default;

$link-theme-map: (
  "link-color":        $link-color-dt,
  "link-hover-color":  $link-hover-color-dt
) !default;

// Btn link

$btn-link-color-dt:           $link-color-dt !default;
$btn-link-hover-color-dt:     $link-hover-color-dt !default;
$btn-link-disabled-color-dt:  $disabled-dt !default;

$btn-link-theme-map: (
  "btn-link-color":           $btn-link-color-dt,
  "btn-link-hover-color":     $btn-link-hover-color-dt,
  "btn-link-disabled-color":  $btn-link-disabled-color-dt
) !default;

// List group

// scss-docs-start list-group-dark-theme
$list-group-color-dt:                $body-color-dt !default;
$list-group-bg-dt:                   transparent !default;
$list-group-border-color-dt:         $border-color-dt !default;
$list-group-hover-bg-dt:             rgba($white, .1) !default;
$list-group-active-color-dt:         $component-active-color-dt !default;
$list-group-active-bg-dt:            $component-active-bg-dt !default;
$list-group-active-border-color-dt:  $list-group-active-bg-dt !default;
$list-group-disabled-color-dt:       rgba($body-color-dt, .5) !default;
$list-group-disabled-bg-dt:          rgba($border-color-dt, .8) !default;
$list-group-action-color-dt:         $body-color-dt !default;
$list-group-action-hover-color-dt:   $body-color-dt !default;
$list-group-action-active-color-dt:  $body-color-dt !default;
$list-group-action-active-bg-dt:     $gray-900 !default;
// scss-docs-end list-group-dark-theme

$list-group-theme-map: (
  "list-group-color":                $list-group-color-dt,
  "list-group-bg":                   $list-group-bg-dt,
  "list-group-border-color":         $list-group-border-color-dt,
  "list-group-hover-bg":             $list-group-hover-bg-dt,
  "list-group-active-color":         $list-group-active-color-dt,
  "list-group-active-bg":            $list-group-active-bg-dt,
  "list-group-active-border-color":  $list-group-active-border-color-dt,
  "list-group-disabled-color":       $list-group-disabled-color-dt,
  "list-group-disabled-bg":          $list-group-disabled-bg-dt,
  "list-group-action-color":         $list-group-action-color-dt,
  "list-group-action-hover-color":   $list-group-action-hover-color-dt,
  "list-group-action-active-color":  $list-group-action-active-color-dt,
  "list-group-action-active-bg":     $list-group-action-active-bg-dt
) !default;

$list-group-variants-dt: (
  "primary":    list-group-color-map($primary-dt),
  "secondary":  list-group-color-map($secondary-dt),
  "success":    list-group-color-map($success-dt),
  "danger":     list-group-color-map($danger-dt),
  "warning":    list-group-color-map($warning-dt),
  "info":       list-group-color-map($info-dt)
) !default;

// Modals

// scss-docs-start modal-dark-theme
$modal-color-dt:         null !default;
$modal-bg-dt:            $bg-elevation-24 !default;
$modal-border-color-dt:  rgba(0, 0, 0, .2) !default;
$modal-header-border-color-dt:   rgba(0, 0, 0, .2) !default;
$modal-footer-border-color-dt:   rgba(0, 0, 0, .2) !default;
// scss-docs-end modal-dark-theme

$modal-theme-map: (
  "modal-color":                $modal-color-dt,
  "modal-bg":                   $modal-bg-dt,
  "modal-border-color":         $modal-border-color-dt,
  "modal-header-border-color":  $modal-header-border-color-dt,
  "modal-footer-border-color":  $modal-footer-border-color-dt
) !default;


// Navs

$nav-link-color-dt:                          null !default;
$nav-link-disabled-color-dt:                 $disabled-dt !default;
$nav-link-hover-color-dt:                    null !default;
$nav-pills-link-active-bg-dt:                $component-active-bg-dt !default;
$nav-pills-link-active-color-dt:             $component-active-color-dt !default;
$nav-tabs-border-color-dt:                   $border-color-dt !default;
$nav-tabs-link-active-bg-dt:                 $border-color-dt !default;
$nav-tabs-link-active-color-dt:              $body-color-dt !default;
$nav-tabs-link-active-border-color-dt:       transparent !default;
$nav-tabs-link-hover-border-color-dt:        $border-color-dt $border-color-dt $border-color-dt !default;

$nav-underline-border-color-dt:              $border-color-dt !default;
$nav-underline-link-color-dt:                $medium-emphasis-dt !default;
$nav-underline-link-active-color-dt:         $component-active-bg-dt !default;
$nav-underline-link-active-border-color-dt:  $component-active-bg-dt !default;


$nav-theme-map: (
  "nav-link-color":                          $nav-link-color-dt,
  "nav-link-disabled-color":                 $nav-link-disabled-color-dt,
  "nav-link-hover-color":                    $nav-link-hover-color-dt,
  "nav-pills-link-active-bg":                $nav-pills-link-active-bg-dt,
  "nav-pills-link-active-color":             $nav-pills-link-active-color-dt,
  "nav-tabs-border-color":                   $nav-tabs-border-color-dt,
  "nav-tabs-link-active-bg":                 $nav-tabs-link-active-bg-dt,
  "nav-tabs-link-active-color":              $nav-tabs-link-active-color-dt,
  "nav-tabs-link-active-border-color":       $nav-tabs-link-active-border-color-dt,
  "nav-tabs-link-hover-border-color":        $nav-tabs-link-hover-border-color-dt,
  "nav-underline-border-color":              $nav-underline-border-color-dt,
  "nav-underline-link-color":                $nav-underline-link-color-dt,
  "nav-underline-link-active-color":         $nav-underline-link-active-color-dt,
  "nav-underline-link-active-border-color":  $nav-underline-link-active-border-color-dt
) !default;

// Offcanvas

// scss-docs-start offcanvas-dark-theme
$offcanvas-color-dt:         null !default;
$offcanvas-bg-color-dt:      $bg-elevation-12 !default;
$offcanvas-border-color-dt:  transparent !default;
// scss-docs-end offcanvas-dark-theme

$offcanvas-theme-map: (
  "offcanvas-color":         $offcanvas-color-dt,
  "offcanvas-bg-color":      $offcanvas-bg-color-dt,
  "offcanvas-border-color":  $offcanvas-border-color-dt
) !default;


// Pagination

// scss-docs-start pagination-variables
$pagination-color-dt:                  $link-color-dt !default;
$pagination-bg-dt:                     transparent !default;
$pagination-border-color-dt:           $border-color-dt !default;

$pagination-focus-color-dt:            $link-hover-color-dt !default;
$pagination-focus-bg-dt:               $border-color-dt !default;

$pagination-hover-color-dt:            $link-hover-color-dt !default;
$pagination-hover-bg-dt:               $border-color-dt !default;
$pagination-hover-border-color-dt:     $border-color-dt !default;

$pagination-active-color-dt:           $component-active-color-dt !default;
$pagination-active-bg-dt:              $component-active-bg-dt !default;
$pagination-active-border-color-dt:    $pagination-active-bg-dt !default;

$pagination-disabled-color-dt:         $disabled-dt !default;
$pagination-disabled-bg-dt:            transparent !default;
$pagination-disabled-border-color-dt:  $border-color-dt !default;

$pagination-theme-map: (
  "pagination-color":                  $pagination-color-dt,
  "pagination-bg":                     $pagination-bg-dt,
  "pagination-border-color":           $pagination-border-color-dt,
  "pagination-focus-color":            $pagination-focus-color-dt,
  "pagination-focus-bg":               $pagination-focus-bg-dt,
  "pagination-hover-color":            $pagination-hover-color-dt,
  "pagination-hover-bg":               $pagination-hover-bg-dt,
  "pagination-hover-border-color":     $pagination-hover-border-color-dt,
  "pagination-active-color":           $pagination-active-color-dt,
  "pagination-active-bg-dt":           $pagination-active-bg-dt,
  "pagination-active-border-color":    $pagination-active-border-color-dt,
  "pagination-disabled-color":         $pagination-disabled-color-dt,
  "pagination-disabled-bg":            $pagination-disabled-bg-dt,
  "pagination-disabled-border-color":  $pagination-disabled-border-color-dt
) !default;


// Popovers

// scss-docs-start popover-dark-theme
$popover-bg-dt:                 $bg-elevation-16 !default;
$popover-border-color-dt:       $border-color-dt !default;
$popover-header-bg-dt:          $bg-elevation-16 !default;
$popover-header-color-dt:       $body-color-dt !default;
$popover-body-color-dt:         $body-color-dt !default;
$popover-arrow-color-dt:        $popover-bg-dt !default;
$popover-arrow-outer-color-dt:  fade-in($popover-border-color-dt, .05) !default;
// scss-docs-end popover-dark-theme

$popover-theme-map: (
  "popover-bg":                 $popover-bg-dt,
  "popover-border-color":       $popover-border-color-dt,
  "popover-header-bg":          $popover-header-bg-dt,
  "popover-header-color":       $popover-header-color-dt,
  "popover-body-color":         $popover-body-color-dt,
  "popover-arrow-color":        $popover-arrow-color-dt,
  "popover-arrow-outer-color":  $popover-arrow-outer-color-dt
) !default;


// Progress

$progress-bg-dt:         rgba($white, .2) !default;
$progress-bar-color-dt:  $white !default;
$progress-bar-bg-dt:     $primary-dt !default;

$progress-theme-map: (
  "progress-bg":         $progress-bg-dt,
  "progress-bar-bg":     $progress-bar-bg-dt,
  "progress-bar-color":  $progress-bar-color-dt
) !default;

// Sidebar

$sidebar-color-dt:                    $body-color-dt !default;
$sidebar-bg-dt:                       $bg-elevation-3 !default;
$sidebar-border-width-dt:             0 !default;
$sidebar-border-color-dt:             transparent !default;
$sidebar-brand-color-dt:              inherit !default;
$sidebar-brand-bg-dt:                 rgba($black, .2) !default;
$sidebar-footer-bg-dt:                rgba($black, .2) !default;
$sidebar-header-bg-dt:                rgba($black, .2) !default;
$sidebar-toggler-bg-dt:               rgba($black, .2) !default;
$sidebar-toggler-hover-bg-dt:         rgba($black, .3) !default;
$sidebar-nav-title-color-dt:                 $medium-emphasis-dt !default;
$sidebar-nav-link-color-dt:                  $medium-emphasis-dt !default;
$sidebar-nav-link-bg-dt:                     transparent !default;
$sidebar-nav-link-icon-color-dt:             $medium-emphasis-dt !default;
$sidebar-nav-link-hover-color-dt:            $high-emphasis-dt !default;
$sidebar-nav-link-hover-bg-dt:               rgba($white, .05) !default;
$sidebar-nav-link-hover-icon-color-dt:       $high-emphasis-dt !default;

$sidebar-nav-link-active-color-dt:           $high-emphasis-dt !default;
$sidebar-nav-link-active-bg-dt:              rgba($white, .05) !default;
$sidebar-nav-link-active-icon-color-dt:      $high-emphasis-dt !default;

$sidebar-nav-link-disabled-color-dt:         $disabled-dt !default;
$sidebar-nav-link-disabled-icon-color-dt:    $sidebar-nav-link-icon-color-dt !default;

$sidebar-nav-group-bg-dt:                    rgba(0, 0, 0, .2) !default;
$sidebar-nav-group-toggle-show-color-dt:     $sidebar-nav-link-color-dt !default;

$sidebar-nav-group-indicator-color-dt:        $medium-emphasis-dt !default;
$sidebar-nav-group-indicator-icon-dt:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$sidebar-nav-group-indicator-color-dt}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !default;
$sidebar-nav-group-indicator-hover-color-dt:  $sidebar-nav-link-hover-color-dt !default;
$sidebar-nav-group-indicator-hover-icon-dt:   url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$sidebar-nav-group-indicator-hover-color-dt}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !default;

$sidebar-theme-map: (
  "sidebar-color":                            $sidebar-color-dt,
  "sidebar-bg":                               $sidebar-bg-dt,
  "sidebar-border-width":                     $sidebar-border-width-dt,
  "sidebar-border-color":                     $sidebar-border-color-dt,
  "sidebar-brand-color":                      $sidebar-brand-color-dt,
  "sidebar-brand-bg":                         $sidebar-brand-bg-dt,
  "sidebar-footer-bg":                        $sidebar-footer-bg-dt,
  "sidebar-header-bg":                        $sidebar-header-bg-dt,
  "sidebar-toggler-bg":                       $sidebar-toggler-bg-dt,
  "sidebar-toggler-hover-bg":                 $sidebar-toggler-hover-bg-dt,
  "sidebar-nav-title-color":                  $sidebar-nav-title-color-dt,
  "sidebar-nav-link-color":                   $sidebar-nav-link-color-dt,
  "sidebar-nav-link-bg":                      $sidebar-nav-link-bg-dt,
  "sidebar-nav-link-icon-color":              $sidebar-nav-link-icon-color-dt,
  "sidebar-nav-link-hover-color":             $sidebar-nav-link-hover-color-dt,
  "sidebar-nav-link-hover-bg":                $sidebar-nav-link-hover-bg-dt,
  "sidebar-nav-link-hover-icon-color":        $sidebar-nav-link-hover-icon-color-dt,
  "sidebar-nav-link-active-color":            $sidebar-nav-link-active-color-dt,
  "sidebar-nav-link-active-bg":               $sidebar-nav-link-active-bg-dt,
  "sidebar-nav-link-active-icon-color":       $sidebar-nav-link-active-icon-color-dt,
  "sidebar-nav-link-disabled-color":          $sidebar-nav-link-disabled-color-dt,
  "sidebar-nav-link-disabled-icon-color":     $sidebar-nav-link-disabled-icon-color-dt,
  "sidebar-nav-group-bg":                     $sidebar-nav-group-bg-dt,
  "sidebar-nav-group-toggle-show-color":      $sidebar-nav-group-toggle-show-color-dt,
  "sidebar-nav-group-indicator-color":        $sidebar-nav-group-indicator-color-dt,
  "sidebar-nav-group-indicator-icon":         $sidebar-nav-group-indicator-icon-dt,
  "sidebar-nav-group-indicator-hover-color":  $sidebar-nav-group-indicator-hover-color-dt,
  "sidebar-nav-group-indicator-hover-icon":   $sidebar-nav-group-indicator-hover-icon-dt,
) !default;

$table-color-dt:              $body-color-dt !default;
$table-bg-dt:                 transparent !default;
$table-border-color-dt:       $border-color-dt !default;

$table-striped-color-dt:      $table-color-dt !default;
$table-striped-bg-factor-dt:  .05 !default;
$table-striped-bg-dt:         rgba($white, $table-striped-bg-factor-dt) !default;

$table-active-color-dt:       $table-color-dt !default;
$table-active-bg-factor-dt:   .1 !default;
$table-active-bg-dt:          rgba($black, $table-active-bg-factor-dt) !default;

$table-hover-color-dt:        $table-color-dt !default;
$table-hover-bg-factor-dt:    .075 !default;
$table-hover-bg-dt:           rgba($black, $table-hover-bg-factor-dt) !default;

$table-theme-map: (
  "table-color":          $table-color-dt,
  "table-bg":             $table-bg-dt,
  "table-border-color":   $table-border-color-dt,
  "table-striped-color":  $table-striped-color-dt,
  "table-striped-bg":     $table-striped-bg-dt,
  "table-active-color":   $table-active-color-dt,
  "table-active-bg":      $table-active-bg-dt,
  "table-hover-color":    $table-hover-color-dt,
  "table-hover-bg":       $table-hover-bg-dt
) !default;

$table-variants-dt: (
  "primary":    table-color-map(shift-color($primary-dt, $table-bg-scale)),
  "secondary":  table-color-map(shift-color($secondary-dt, $table-bg-scale)),
  "success":    table-color-map(shift-color($success-dt, $table-bg-scale)),
  "info":       table-color-map(shift-color($info-dt, $table-bg-scale)),
  "warning":    table-color-map(shift-color($warning-dt, $table-bg-scale)),
  "danger":     table-color-map(shift-color($danger-dt, $table-bg-scale)),
  "light":      table-color-map($light-dt, $body-bg-dt),
  "dark":       table-color-map($dark-dt, $body-bg-dt)
) !default;

// Toast

$toast-bg-dt:                   $bg-elevation-16 !default;
$toast-color-dt:                $body-color-dt !default;
$toast-border-color-dt:         transparent !default;

$toast-header-color-dt:         $body-color-dt !default;
$toast-header-bg-dt:            $bg-elevation-24 !default;
$toast-header-border-color-dt:  rgba($black, .2) !default;

$toast-theme-map: (
  "toast-bg":                   $toast-bg-dt,
  "toast-color":                $toast-color-dt,
  "toast-border-color":         $toast-border-color-dt,
  "toast-header-color":         $toast-header-color-dt,
  "toast-header-bg":            $toast-header-bg-dt,
  "toast-header-border-color":  $toast-header-border-color-dt
) !default;

// Calendar & Date & Time Pickers

$calendar-nav-border-color-dt:               $border-color-dt !default;
$calendar-nav-date-color-dt:                 $body-color-dt !default;
$calendar-nav-date-hover-color-dt:           $primary-dt !default;
$calendar-cell-header-inner-color-dt:        $medium-emphasis-dt !default;
$calendar-cell-hover-bg-dt:                  rgba($black, .25) !default;
$calendar-cell-disabled-color-dt:            $disabled-dt !default;
$calendar-cell-selected-bg-dt:               $primary-dt !default;
$calendar-cell-range-bg-dt:                  tint-color($primary-dt, 25%) !default;
$calendar-cell-range-hover-bg-dt:            tint-color($primary-dt, 12.5%) !default;
$calendar-cell-range-hover-border-color-dt:  $primary-dt !default;

$calendar-theme-map: (
  "calendar-nav-border":                     $calendar-nav-border-width solid $calendar-nav-border-color-dt,
  "calendar-nav-date-color":                 $calendar-nav-date-color-dt,
  "calendar-nav-date-hover-color":           $calendar-nav-date-hover-color-dt,
  "calendar-cell-header-inner-color":        $calendar-cell-header-inner-color-dt,
  "calendar-cell-hover-bg":                  $calendar-cell-hover-bg-dt,
  "calendar-cell-disabled-color":            $calendar-cell-disabled-color-dt,
  "calendar-cell-selected-bg":               $calendar-cell-selected-bg-dt,
  "calendar-cell-range-bg":                  $calendar-cell-range-bg-dt,
  "calendar-cell-range-hover-bg":            $calendar-cell-range-hover-bg-dt,
  "calendar-cell-range-hover-border-color":  $calendar-cell-range-hover-border-color-dt
) !default;

$date-picker-timepicker-border-color-dt:  $border-color-dt !default;

$date-picker-theme-map: (
  "date-picker-timepicker-border-top":  $date-picker-timepicker-border-width solid $date-picker-timepicker-border-color-dt
) !default;

$picker-footer-border-color-dt:  $border-color-dt !default;

$picker-theme-map: (
  "input-bg":                        $input-bg-dt,
  "input-group-addon-border-color":  transparent,
  "picker-footer-border-top":        $picker-footer-border-width solid $picker-footer-border-color-dt
) !default;

$time-picker-roll-col-color-dt:     $border-color-dt !default;

$time-picker-theme-map: (
  "time-picker-roll-col-border":  $time-picker-roll-col-border-width solid $time-picker-roll-col-color-dt
) !default;

$theme-map: (
  "root":               map-merge($theme-root-dt, $link-theme-map),
  "utilities": (
    "bg":               $theme-colors-dt,
    "text":             $theme-colors-dt
  ),
  "accordion":          $accordion-theme-map,
  "breadcrumb":         $breadcrumb-theme-map,
  "btn-close":          $close-theme-map,
  "btn-link":           $btn-link-theme-map,
  "calendar":           $calendar-theme-map,
  "date-picker":        $date-picker-theme-map,
  "card":               $card-theme-map,
  "dropdown-menu":      $dropdown-theme-map,
  "footer":             $footer-theme-map,
  "form-control":       $form-control-theme-map,
  "form-check":         $form-check-theme-map,
  "form-select":        $form-select-theme-map,
  "form-multi-select":  $form-multi-select-theme-map,
  "header":             $header-theme-map,
  "input-group":        $input-group-theme-map,
  "list-group":         $list-group-theme-map,
  "modal":              $modal-theme-map,
  "nav":                $nav-theme-map,
  "offcanvas":          $offcanvas-theme-map,
  "pagination":         $pagination-theme-map,
  "picker":             $picker-theme-map,
  "popover":            $popover-theme-map,
  "progress":           $progress-theme-map,
  "sidebar":            $sidebar-theme-map,
  "table":              map-merge($table-theme-map, $table-variants-dt),
  "time-picker":        $time-picker-theme-map,
  "toast":              $toast-theme-map
) !default;
`,ur=`// Loop over each breakpoint
@each $breakpoint in map-keys($grid-breakpoints) {

  // Generate media query if needed
  @include media-breakpoint-up($breakpoint) {
    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

    // Loop over each utility property
    @each $key, $utility in $utilities {
      // The utility can be disabled with \`false\`, thus check if the utility is a map first
      // Only proceed if responsive media queries are enabled or if it's the base media query
      @if type-of($utility) == "map" and (map-get($utility, responsive) or $infix == "") {
        @include generate-utility($utility, $infix);
      }
    }
  }
}

// RFS rescaling
@media (min-width: $rfs-mq-value) {
  @each $breakpoint in map-keys($grid-breakpoints) {
    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);

    @if (map-get($grid-breakpoints, $breakpoint) < $rfs-breakpoint) {
      // Loop over each utility property
      @each $key, $utility in $utilities {
        // The utility can be disabled with \`false\`, thus check if the utility is a map first
        // Only proceed if responsive media queries are enabled or if it's the base media query
        @if type-of($utility) == "map" and map-get($utility, rfs) and (map-get($utility, responsive) or $infix == "") {
          @include generate-utility($utility, $infix, true);
        }
      }
    }
  }
}


// Print utilities
@media print {
  @each $key, $utility in $utilities {
    // The utility can be disabled with \`false\`, thus check if the utility is a map first
    // Then check if the utility needs print styles
    @if type-of($utility) == "map" and map-get($utility, print) == true {
      @include generate-utility($utility, "-print");
    }
  }
}
`,$r=`@each $color, $value in $theme-gradients {
  .bg-#{$color}-gradient {
    @include gradient($color, $value);
  }
}
`,br=`// stylelint-disable property-blacklist, scss/dollar-variable-default

// SCSS RFS mixin
//
// Automated responsive values for font sizes, paddings, margins and much more
//
// Licensed under MIT (https://github.com/twbs/rfs/blob/main/LICENSE)

// Configuration

// Base value
$rfs-base-value: 1.25rem !default;
$rfs-unit: rem !default;

@if $rfs-unit != rem and $rfs-unit != px {
  @error "\`#{$rfs-unit}\` is not a valid unit for $rfs-unit. Use \`px\` or \`rem\`.";
}

// Breakpoint at where values start decreasing if screen width is smaller
$rfs-breakpoint: 1200px !default;
$rfs-breakpoint-unit: px !default;

@if $rfs-breakpoint-unit != px and $rfs-breakpoint-unit != em and $rfs-breakpoint-unit != rem {
  @error "\`#{$rfs-breakpoint-unit}\` is not a valid unit for $rfs-breakpoint-unit. Use \`px\`, \`em\` or \`rem\`.";
}

// Resize values based on screen height and width
$rfs-two-dimensional: false !default;

// Factor of decrease
$rfs-factor: 10 !default;

@if type-of($rfs-factor) != number or $rfs-factor <= 1 {
  @error "\`#{$rfs-factor}\` is not a valid  $rfs-factor, it must be greater than 1.";
}

// Mode. Possibilities: "min-media-query", "max-media-query"
$rfs-mode: min-media-query !default;

// Generate enable or disable classes. Possibilities: false, "enable" or "disable"
$rfs-class: false !default;

// 1 rem = $rfs-rem-value px
$rfs-rem-value: 16 !default;

// Safari iframe resize bug: https://github.com/twbs/rfs/issues/14
$rfs-safari-iframe-resize-bug-fix: false !default;

// Disable RFS by setting $enable-rfs to false
$enable-rfs: true !default;

// Cache $rfs-base-value unit
$rfs-base-value-unit: unit($rfs-base-value);

@function divide($dividend, $divisor, $precision: 10) {
  $sign: if($dividend > 0 and $divisor > 0 or $dividend < 0 and $divisor < 0, 1, -1);
  $dividend: abs($dividend);
  $divisor: abs($divisor);
  @if $dividend == 0 {
    @return 0;
  }
  @if $divisor == 0 {
    @error "Cannot divide by 0";
  }
  $remainder: $dividend;
  $result: 0;
  $factor: 10;
  @while ($remainder > 0 and $precision >= 0) {
    $quotient: 0;
    @while ($remainder >= $divisor) {
      $remainder: $remainder - $divisor;
      $quotient: $quotient + 1;
    }
    $result: $result * 10 + $quotient;
    $factor: $factor * .1;
    $remainder: $remainder * 10;
    $precision: $precision - 1;
    @if ($precision < 0 and $remainder >= $divisor * 5) {
      $result: $result + 1;
    }
  }
  $result: $result * $factor * $sign;
  $dividend-unit: unit($dividend);
  $divisor-unit: unit($divisor);
  $unit-map: (
    "px": 1px,
    "rem": 1rem,
    "em": 1em,
    "%": 1%
  );
  @if ($dividend-unit != $divisor-unit and map-has-key($unit-map, $dividend-unit)) {
    $result: $result * map-get($unit-map, $dividend-unit);
  }
  @return $result;
}

// Remove px-unit from $rfs-base-value for calculations
@if $rfs-base-value-unit == px {
  $rfs-base-value: divide($rfs-base-value, $rfs-base-value * 0 + 1);
}
@else if $rfs-base-value-unit == rem {
  $rfs-base-value: divide($rfs-base-value, divide($rfs-base-value * 0 + 1, $rfs-rem-value));
}

// Cache $rfs-breakpoint unit to prevent multiple calls
$rfs-breakpoint-unit-cache: unit($rfs-breakpoint);

// Remove unit from $rfs-breakpoint for calculations
@if $rfs-breakpoint-unit-cache == px {
  $rfs-breakpoint: divide($rfs-breakpoint, $rfs-breakpoint * 0 + 1);
}
@else if $rfs-breakpoint-unit-cache == rem or $rfs-breakpoint-unit-cache == "em" {
  $rfs-breakpoint: divide($rfs-breakpoint, divide($rfs-breakpoint * 0 + 1, $rfs-rem-value));
}

// Calculate the media query value
$rfs-mq-value: if($rfs-breakpoint-unit == px, #{$rfs-breakpoint}px, #{divide($rfs-breakpoint, $rfs-rem-value)}#{$rfs-breakpoint-unit});
$rfs-mq-property-width: if($rfs-mode == max-media-query, max-width, min-width);
$rfs-mq-property-height: if($rfs-mode == max-media-query, max-height, min-height);

// Internal mixin used to determine which media query needs to be used
@mixin _rfs-media-query {
  @if $rfs-two-dimensional {
    @if $rfs-mode == max-media-query {
      @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}), (#{$rfs-mq-property-height}: #{$rfs-mq-value}) {
        @content;
      }
    }
    @else {
      @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}) and (#{$rfs-mq-property-height}: #{$rfs-mq-value}) {
        @content;
      }
    }
  }
  @else {
    @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}) {
      @content;
    }
  }
}

// Internal mixin that adds disable classes to the selector if needed.
@mixin _rfs-rule {
  @if $rfs-class == disable and $rfs-mode == max-media-query {
    // Adding an extra class increases specificity, which prevents the media query to override the property
    &,
    .disable-rfs &,
    &.disable-rfs {
      @content;
    }
  }
  @else if $rfs-class == enable and $rfs-mode == min-media-query {
    .enable-rfs &,
    &.enable-rfs {
      @content;
    }
  }
  @else {
    @content;
  }
}

// Internal mixin that adds enable classes to the selector if needed.
@mixin _rfs-media-query-rule {

  @if $rfs-class == enable {
    @if $rfs-mode == min-media-query {
      @content;
    }

    @include _rfs-media-query {
      .enable-rfs &,
      &.enable-rfs {
        @content;
      }
    }
  }
  @else {
    @if $rfs-class == disable and $rfs-mode == min-media-query {
      .disable-rfs &,
      &.disable-rfs {
        @content;
      }
    }
    @include _rfs-media-query {
      @content;
    }
  }
}

// Helper function to get the formatted non-responsive value
@function rfs-value($values) {
  // Convert to list
  $values: if(type-of($values) != list, ($values,), $values);

  $val: '';

  // Loop over each value and calculate value
  @each $value in $values {
    @if $value == 0 {
      $val: $val + ' 0';
    }
    @else {
      // Cache $value unit
      $unit: if(type-of($value) == "number", unit($value), false);

      @if $unit == px {
        // Convert to rem if needed
        $val: $val + ' ' + if($rfs-unit == rem, #{divide($value, $value * 0 + $rfs-rem-value)}rem, $value);
      }
      @else if $unit == rem {
        // Convert to px if needed
        $val: $val + ' ' + if($rfs-unit == px, #{divide($value, $value * 0 + 1) * $rfs-rem-value}px, $value);
      }
      @else {
        // If $value isn't a number (like inherit) or $value has a unit (not px or rem, like 1.5em) or $ is 0, just print the value
        $val: $val + ' ' + $value;
      }
    }
  }

  // Remove first space
  @return unquote(str-slice($val, 2));
}

// Helper function to get the responsive value calculated by RFS
@function rfs-fluid-value($values) {
  // Convert to list
  $values: if(type-of($values) != list, ($values,), $values);

  $val: '';

  // Loop over each value and calculate value
  @each $value in $values {
    @if $value == 0 {
      $val: $val + ' 0';
    }

    @else {
      // Cache $value unit
      $unit: if(type-of($value) == "number", unit($value), false);

      // If $value isn't a number (like inherit) or $value has a unit (not px or rem, like 1.5em) or $ is 0, just print the value
      @if not $unit or $unit != px and $unit != rem {
        $val: $val + ' ' + $value;
      }

      @else {
        // Remove unit from $value for calculations
        $value: divide($value, $value * 0 + if($unit == px, 1, divide(1, $rfs-rem-value)));

        // Only add the media query if the value is greater than the minimum value
        @if abs($value) <= $rfs-base-value or not $enable-rfs {
          $val: $val + ' ' +  if($rfs-unit == rem, #{divide($value, $rfs-rem-value)}rem, #{$value}px);
        }
        @else {
          // Calculate the minimum value
          $value-min: $rfs-base-value + divide(abs($value) - $rfs-base-value, $rfs-factor);

          // Calculate difference between $value and the minimum value
          $value-diff: abs($value) - $value-min;

          // Base value formatting
          $min-width: if($rfs-unit == rem, #{divide($value-min, $rfs-rem-value)}rem, #{$value-min}px);

          // Use negative value if needed
          $min-width: if($value < 0, -$min-width, $min-width);

          // Use \`vmin\` if two-dimensional is enabled
          $variable-unit: if($rfs-two-dimensional, vmin, vw);

          // Calculate the variable width between 0 and $rfs-breakpoint
          $variable-width: #{divide($value-diff * 100, $rfs-breakpoint)}#{$variable-unit};

          // Return the calculated value
          $val: $val + ' calc(' + $min-width + if($value < 0, ' - ', ' + ') + $variable-width + ')';
        }
      }
    }
  }

  // Remove first space
  @return unquote(str-slice($val, 2));
}

// RFS mixin
@mixin rfs($values, $property: font-size) {
  @if $values != null {
    $val: rfs-value($values);
    $fluidVal: rfs-fluid-value($values);

    // Do not print the media query if responsive & non-responsive values are the same
    @if $val == $fluidVal {
      #{$property}: $val;
    }
    @else {
      @include _rfs-rule {
        #{$property}: if($rfs-mode == max-media-query, $val, $fluidVal);

        // Include safari iframe resize fix if needed
        min-width: if($rfs-safari-iframe-resize-bug-fix, (0 * 1vw), null);
      }

      @include _rfs-media-query-rule {
        #{$property}: if($rfs-mode == max-media-query, $fluidVal, $val);
      }
    }
  }
}

// Shorthand helper mixins
@mixin font-size($value) {
  @include rfs($value);
}

@mixin padding($value) {
  @include rfs($value, padding);
}

@mixin padding-top($value) {
  @include rfs($value, padding-top);
}

@mixin padding-right($value) {
  @include rfs($value, padding-right);
}

@mixin padding-bottom($value) {
  @include rfs($value, padding-bottom);
}

@mixin padding-left($value) {
  @include rfs($value, padding-left);
}

@mixin margin($value) {
  @include rfs($value, margin);
}

@mixin margin-top($value) {
  @include rfs($value, margin-top);
}

@mixin margin-right($value) {
  @include rfs($value, margin-right);
}

@mixin margin-bottom($value) {
  @include rfs($value, margin-bottom);
}

@mixin margin-left($value) {
  @include rfs($value, margin-left);
}
`;var N=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fr(v){return v&&v.__esModule&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v}var Z={exports:{}};(function(v){var H=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var i=function(c){var $=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,x=0,w={},a={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof g?new g(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++x}),e.__id},clone:function e(n,r){r=r||{};var o,t;switch(a.util.type(n)){case"Object":if(t=a.util.objId(n),r[t])return r[t];o={},r[t]=o;for(var d in n)n.hasOwnProperty(d)&&(o[d]=e(n[d],r));return o;case"Array":return t=a.util.objId(n),r[t]?r[t]:(o=[],r[t]=o,n.forEach(function(s,l){o[l]=e(s,r)}),o);default:return n}},getLanguage:function(e){for(;e;){var n=$.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,n){e.className=e.className.replace(RegExp($,"gi"),""),e.classList.add("language-"+n)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(o){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(o.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var r in n)if(n[r].src==e)return n[r]}return null}},isActive:function(e,n,r){for(var o="no-"+n;e;){var t=e.classList;if(t.contains(n))return!0;if(t.contains(o))return!1;e=e.parentElement}return!!r}},languages:{plain:w,plaintext:w,text:w,txt:w,extend:function(e,n){var r=a.util.clone(a.languages[e]);for(var o in n)r[o]=n[o];return r},insertBefore:function(e,n,r,o){o=o||a.languages;var t=o[e],d={};for(var s in t)if(t.hasOwnProperty(s)){if(s==n)for(var l in r)r.hasOwnProperty(l)&&(d[l]=r[l]);r.hasOwnProperty(s)||(d[s]=t[s])}var u=o[e];return o[e]=d,a.languages.DFS(a.languages,function(m,_){_===u&&m!=e&&(this[m]=d)}),d},DFS:function e(n,r,o,t){t=t||{};var d=a.util.objId;for(var s in n)if(n.hasOwnProperty(s)){r.call(n,s,n[s],o||s);var l=n[s],u=a.util.type(l);u==="Object"&&!t[d(l)]?(t[d(l)]=!0,e(l,r,null,t)):u==="Array"&&!t[d(l)]&&(t[d(l)]=!0,e(l,r,s,t))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,r){var o={callback:r,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",o),o.elements=Array.prototype.slice.apply(o.container.querySelectorAll(o.selector)),a.hooks.run("before-all-elements-highlight",o);for(var t=0,d;d=o.elements[t++];)a.highlightElement(d,n===!0,o.callback)},highlightElement:function(e,n,r){var o=a.util.getLanguage(e),t=a.languages[o];a.util.setLanguage(e,o);var d=e.parentElement;d&&d.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(d,o);var s=e.textContent,l={element:e,language:o,grammar:t,code:s};function u(_){l.highlightedCode=_,a.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,a.hooks.run("after-highlight",l),a.hooks.run("complete",l),r&&r.call(l.element)}if(a.hooks.run("before-sanity-check",l),d=l.element.parentElement,d&&d.nodeName.toLowerCase()==="pre"&&!d.hasAttribute("tabindex")&&d.setAttribute("tabindex","0"),!l.code){a.hooks.run("complete",l),r&&r.call(l.element);return}if(a.hooks.run("before-highlight",l),!l.grammar){u(a.util.encode(l.code));return}if(n&&c.Worker){var m=new Worker(a.filename);m.onmessage=function(_){u(_.data)},m.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else u(a.highlight(l.code,l.grammar,l.language))},highlight:function(e,n,r){var o={code:e,grammar:n,language:r};if(a.hooks.run("before-tokenize",o),!o.grammar)throw new Error('The language "'+o.language+'" has no grammar.');return o.tokens=a.tokenize(o.code,o.grammar),a.hooks.run("after-tokenize",o),g.stringify(a.util.encode(o.tokens),o.language)},tokenize:function(e,n){var r=n.rest;if(r){for(var o in r)n[o]=r[o];delete n.rest}var t=new F;return S(t,t.head,e),L(e,t,n,t.head,0),B(t)},hooks:{all:{},add:function(e,n){var r=a.hooks.all;r[e]=r[e]||[],r[e].push(n)},run:function(e,n){var r=a.hooks.all[e];if(!(!r||!r.length))for(var o=0,t;t=r[o++];)t(n)}},Token:g};c.Prism=a;function g(e,n,r,o){this.type=e,this.content=n,this.alias=r,this.length=(o||"").length|0}g.stringify=function e(n,r){if(typeof n=="string")return n;if(Array.isArray(n)){var o="";return n.forEach(function(u){o+=e(u,r)}),o}var t={type:n.type,content:e(n.content,r),tag:"span",classes:["token",n.type],attributes:{},language:r},d=n.alias;d&&(Array.isArray(d)?Array.prototype.push.apply(t.classes,d):t.classes.push(d)),a.hooks.run("wrap",t);var s="";for(var l in t.attributes)s+=" "+l+'="'+(t.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+t.tag+' class="'+t.classes.join(" ")+'"'+s+">"+t.content+"</"+t.tag+">"};function A(e,n,r,o){e.lastIndex=n;var t=e.exec(r);if(t&&o&&t[1]){var d=t[1].length;t.index+=d,t[0]=t[0].slice(d)}return t}function L(e,n,r,o,t,d){for(var s in r)if(!(!r.hasOwnProperty(s)||!r[s])){var l=r[s];l=Array.isArray(l)?l:[l];for(var u=0;u<l.length;++u){if(d&&d.cause==s+","+u)return;var m=l[u],_=m.inside,U=!!m.lookbehind,j=!!m.greedy,J=m.alias;if(j&&!m.pattern.global){var X=m.pattern.toString().match(/[imsuy]*$/)[0];m.pattern=RegExp(m.pattern.source,X+"g")}for(var V=m.pattern||m,h=o.next,y=t;h!==n.tail&&!(d&&y>=d.reach);y+=h.value.length,h=h.next){var C=h.value;if(n.length>e.length)return;if(!(C instanceof g)){var M=1,k;if(j){if(k=A(V,y,e,U),!k||k.index>=e.length)break;var T=k.index,Y=k.index+k[0].length,z=y;for(z+=h.value.length;T>=z;)h=h.next,z+=h.value.length;if(z-=h.value.length,y=z,h.value instanceof g)continue;for(var q=h;q!==n.tail&&(z<Y||typeof q.value=="string");q=q.next)M++,z+=q.value.length;M--,C=e.slice(y,z),k.index-=y}else if(k=A(V,0,C,U),!k)continue;var T=k.index,R=k[0],I=C.slice(0,T),G=C.slice(T+R.length),O=y+C.length;d&&O>d.reach&&(d.reach=O);var E=h.prev;I&&(E=S(n,E,I),y+=I.length),P(n,E,M);var K=new g(s,_?a.tokenize(R,_):R,J,R);if(h=S(n,E,K),G&&S(n,h,G),M>1){var D={cause:s+","+u,reach:O};L(e,n,r,h.prev,y,D),d&&D.reach>d.reach&&(d.reach=D.reach)}}}}}}function F(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function S(e,n,r){var o=n.next,t={value:r,prev:n,next:o};return n.next=t,o.prev=t,e.length++,t}function P(e,n,r){for(var o=n.next,t=0;t<r&&o!==e.tail;t++)o=o.next;n.next=o,o.prev=n,e.length-=t}function B(e){for(var n=[],r=e.head.next;r!==e.tail;)n.push(r.value),r=r.next;return n}if(!c.document)return c.addEventListener&&(a.disableWorkerMessageHandler||c.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,o=n.code,t=n.immediateClose;c.postMessage(a.highlight(o,a.languages[r],r)),t&&c.close()},!1)),a;var b=a.util.currentScript();b&&(a.filename=b.src,b.hasAttribute("data-manual")&&(a.manual=!0));function p(){a.manual||a.highlightAll()}if(!a.manual){var f=document.readyState;f==="loading"||f==="interactive"&&b&&b.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return a}(H);v.exports&&(v.exports=i),typeof N<"u"&&(N.Prism=i),i.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},i.languages.markup.tag.inside["attr-value"].inside.entity=i.languages.markup.entity,i.languages.markup.doctype.inside["internal-subset"].inside=i.languages.markup,i.hooks.add("wrap",function(c){c.type==="entity"&&(c.attributes.title=c.content.replace(/&amp;/,"&"))}),Object.defineProperty(i.languages.markup.tag,"addInlined",{value:function($,x){var w={};w["language-"+x]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:i.languages[x]},w.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:w}};a["language-"+x]={pattern:/[\s\S]+/,inside:i.languages[x]};var g={};g[$]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return $}),"i"),lookbehind:!0,greedy:!0,inside:a},i.languages.insertBefore("markup","cdata",g)}}),Object.defineProperty(i.languages.markup.tag,"addAttribute",{value:function(c,$){i.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+c+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[$,"language-"+$],inside:i.languages[$]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.xml=i.languages.extend("markup",{}),i.languages.ssml=i.languages.xml,i.languages.atom=i.languages.xml,i.languages.rss=i.languages.xml,function(c){var $=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;c.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+$.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+$.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+$.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+$.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:$,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},c.languages.css.atrule.inside.rest=c.languages.css;var x=c.languages.markup;x&&(x.tag.addInlined("style","css"),x.tag.addAttribute("style","css"))}(i),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{"class-name":[i.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),i.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,i.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:i.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:i.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:i.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:i.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:i.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),i.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),i.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),i.languages.markup&&(i.languages.markup.tag.addInlined("script","javascript"),i.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),i.languages.js=i.languages.javascript,function(){if(typeof i>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var c="Loading…",$=function(b,p){return"✖ Error "+b+" while fetching file: "+p},x="✖ Error: File does not exist or is empty",w={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",g="loading",A="loaded",L="failed",F="pre[data-src]:not(["+a+'="'+A+'"]):not(['+a+'="'+g+'"])';function S(b,p,f){var e=new XMLHttpRequest;e.open("GET",b,!0),e.onreadystatechange=function(){e.readyState==4&&(e.status<400&&e.responseText?p(e.responseText):e.status>=400?f($(e.status,e.statusText)):f(x))},e.send(null)}function P(b){var p=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b||"");if(p){var f=Number(p[1]),e=p[2],n=p[3];return e?n?[f,Number(n)]:[f,void 0]:[f,f]}}i.hooks.add("before-highlightall",function(b){b.selector+=", "+F}),i.hooks.add("before-sanity-check",function(b){var p=b.element;if(p.matches(F)){b.code="",p.setAttribute(a,g);var f=p.appendChild(document.createElement("CODE"));f.textContent=c;var e=p.getAttribute("data-src"),n=b.language;if(n==="none"){var r=(/\.(\w+)$/.exec(e)||[,"none"])[1];n=w[r]||r}i.util.setLanguage(f,n),i.util.setLanguage(p,n);var o=i.plugins.autoloader;o&&o.loadLanguages(n),S(e,function(t){p.setAttribute(a,A);var d=P(p.getAttribute("data-range"));if(d){var s=t.split(/\r\n?|\n/g),l=d[0],u=d[1]==null?s.length:d[1];l<0&&(l+=s.length),l=Math.max(0,Math.min(l-1,s.length)),u<0&&(u+=s.length),u=Math.max(0,Math.min(u,s.length)),t=s.slice(l,u).join(`
`),p.hasAttribute("data-start")||p.setAttribute("data-start",String(l+1))}f.textContent=t,i.highlightElement(f)},function(t){p.setAttribute(a,L),f.textContent=t})}}),i.plugins.fileHighlight={highlight:function(p){for(var f=(p||document).querySelectorAll(F),e=0,n;n=f[e++];)i.highlightElement(n)}};var B=!1;i.fileHighlight=function(){B||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),B=!0),i.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Z);var gr=Z.exports;const W=fr(gr);Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}});Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]});Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/});Prism.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}});Prism.languages.scss.atrule.inside.rest=Prism.languages.scss;const mr=Q({name:"ScssDocs",props:{capture:String,file:String},setup(v){typeof window<"u"&&(window.Prism=window.Prism||{},window.Prism.manual=!0);const i=Object.assign({"../../../../../../../node_modules/@coreui/coreui-pro/scss/_accordion.scss":tn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_alert.scss":an,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_avatar.scss":ln,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_badge.scss":dn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_breadcrumb.scss":sn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_button-group.scss":cn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_buttons.scss":pn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_calendar.scss":un,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_callout.scss":$n,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_card.scss":bn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_carousel.scss":fn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_close.scss":gn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_containers.scss":mn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_date-picker.scss":hn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_dropdown.scss":vn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_footer.scss":xn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_forms.scss":wn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_functions.scss":kn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_grid.scss":yn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_header.scss":_n,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_helpers.scss":zn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_icon.scss":Sn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_images.scss":Cn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_list-group.scss":An,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_loading-button.scss":Fn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_maps.scss":qn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_mixins.scss":Ln,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_modal.scss":Bn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_nav.scss":Mn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_navbar.scss":Tn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_offcanvas.scss":Rn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_pagination.scss":En,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_picker.scss":Hn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_placeholders.scss":Pn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_popover.scss":In,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_progress.scss":On,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_reboot.scss":Dn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_root.scss":Un,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_sidebar.scss":jn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_spinners.scss":Vn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_subheader.scss":Gn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_tables.scss":Nn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_time-picker.scss":Wn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_toasts.scss":Zn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_tooltip.scss":Jn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_transitions.scss":Xn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_type.scss":Yn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_utilities.scss":Kn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/_variables.scss":Qn,"../../../../../../../node_modules/@coreui/coreui-pro/scss/coreui-grid.rtl.scss":ne,"../../../../../../../node_modules/@coreui/coreui-pro/scss/coreui-grid.scss":ee,"../../../../../../../node_modules/@coreui/coreui-pro/scss/coreui-reboot.rtl.scss":re,"../../../../../../../node_modules/@coreui/coreui-pro/scss/coreui-reboot.scss":oe,"../../../../../../../node_modules/@coreui/coreui-pro/scss/coreui-utilities.rtl.scss":te,"../../../../../../../node_modules/@coreui/coreui-pro/scss/coreui-utilities.scss":ie,"../../../../../../../node_modules/@coreui/coreui-pro/scss/coreui.rtl.scss":ae,"../../../../../../../node_modules/@coreui/coreui-pro/scss/coreui.scss":le,"../../../../../../../node_modules/@coreui/coreui-pro/scss/forms/_floating-labels.scss":de,"../../../../../../../node_modules/@coreui/coreui-pro/scss/forms/_form-check.scss":se,"../../../../../../../node_modules/@coreui/coreui-pro/scss/forms/_form-control.scss":ce,"../../../../../../../node_modules/@coreui/coreui-pro/scss/forms/_form-multi-select.scss":pe,"../../../../../../../node_modules/@coreui/coreui-pro/scss/forms/_form-range.scss":ue,"../../../../../../../node_modules/@coreui/coreui-pro/scss/forms/_form-select.scss":$e,"../../../../../../../node_modules/@coreui/coreui-pro/scss/forms/_form-text.scss":be,"../../../../../../../node_modules/@coreui/coreui-pro/scss/forms/_input-group.scss":fe,"../../../../../../../node_modules/@coreui/coreui-pro/scss/forms/_labels.scss":ge,"../../../../../../../node_modules/@coreui/coreui-pro/scss/forms/_validation.scss":me,"../../../../../../../node_modules/@coreui/coreui-pro/scss/helpers/_clearfix.scss":he,"../../../../../../../node_modules/@coreui/coreui-pro/scss/helpers/_color-bg.scss":ve,"../../../../../../../node_modules/@coreui/coreui-pro/scss/helpers/_colored-links.scss":xe,"../../../../../../../node_modules/@coreui/coreui-pro/scss/helpers/_position.scss":we,"../../../../../../../node_modules/@coreui/coreui-pro/scss/helpers/_ratio.scss":ke,"../../../../../../../node_modules/@coreui/coreui-pro/scss/helpers/_stacks.scss":ye,"../../../../../../../node_modules/@coreui/coreui-pro/scss/helpers/_stretched-link.scss":_e,"../../../../../../../node_modules/@coreui/coreui-pro/scss/helpers/_text-truncation.scss":ze,"../../../../../../../node_modules/@coreui/coreui-pro/scss/helpers/_visually-hidden.scss":Se,"../../../../../../../node_modules/@coreui/coreui-pro/scss/helpers/_vr.scss":Ce,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_alert.scss":Ae,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_avatar.scss":Fe,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_backdrop.scss":qe,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_border-radius.scss":Le,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_box-shadow.scss":Be,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_breakpoints.scss":Me,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_buttons.scss":Te,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_caret.scss":Re,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_clearfix.scss":Ee,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_color-scheme.scss":He,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_container.scss":Pe,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_css-vars.scss":Ie,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_deprecate.scss":Oe,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_elevation.scss":De,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_forms.scss":Ue,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_gradients.scss":je,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_grid.scss":Ve,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_icon.scss":Ge,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_image.scss":Ne,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_list-group.scss":We,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_lists.scss":Ze,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_ltr-rtl.scss":Je,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_pagination.scss":Xe,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_reset-text.scss":Ye,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_resize.scss":Ke,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_table-variants.scss":Qe,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_text-truncate.scss":nr,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_theme.scss":er,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_transition.scss":rr,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_utilities.scss":or,"../../../../../../../node_modules/@coreui/coreui-pro/scss/mixins/_visually-hidden.scss":tr,"../../../../../../../node_modules/@coreui/coreui-pro/scss/sidebar/_sidebar-narrow.scss":ir,"../../../../../../../node_modules/@coreui/coreui-pro/scss/sidebar/_sidebar-nav.scss":ar,"../../../../../../../node_modules/@coreui/coreui-pro/scss/sidebar/_sidebar.scss":lr,"../../../../../../../node_modules/@coreui/coreui-pro/scss/themes/dark.scss":dr,"../../../../../../../node_modules/@coreui/coreui-pro/scss/themes/dark/_root.scss":sr,"../../../../../../../node_modules/@coreui/coreui-pro/scss/themes/dark/_utilities.scss":cr,"../../../../../../../node_modules/@coreui/coreui-pro/scss/themes/dark/_variables.scss":pr,"../../../../../../../node_modules/@coreui/coreui-pro/scss/utilities/_api.scss":ur,"../../../../../../../node_modules/@coreui/coreui-pro/scss/utilities/_bg-gradients.scss":$r,"../../../../../../../node_modules/@coreui/coreui-pro/scss/vendor/_rfs.scss":br})[`../../../../../../../node_modules/@coreui/coreui-pro/scss/${v.file}`],c=`// scss-docs-start ${v.capture}`,$=`// scss-docs-end ${v.capture}`,w=new RegExp(`${c}((?:.|
)*)${$}`).exec(i),a=w&&w[1].trim(),g=a?W.highlight(a.replaceAll("--#{$prefix}","--cui-").replaceAll(`
  -`,`
-`).replaceAll(`
  @`,`
@`),W.languages.scss,"scss"):null;return g===null&&console.error(`Can't find "${v.capture}"`),{code:g}}}),hr={class:"highlight"},vr=["innerHTML"];function xr(v,H,i,c,$,x){return en(),rn("div",hr,[on("pre",{class:"prism-code language-scss",innerHTML:v.code},null,8,vr)])}const kr=nn(mr,[["render",xr],["__file","ScssDocs.vue"]]);export{kr as default};
