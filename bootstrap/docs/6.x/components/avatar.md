# Bootstrap 6 Avatar

> The Avatar component is used to display circular user profile pictures. Avatars can portray people or objects and support images, icons, or letters.

## Image avatars

Showcase avatars using images. These avatars are typically circular and can display user profile pictures.

```html
<div class="avatar">
  <img class="avatar-img" src="/assets/img/avatars/1.jpg" alt="user@email.com">
</div>
<div class="avatar">
  <img class="avatar-img" src="/assets/img/avatars/2.jpg" alt="user@email.com">
</div>
<div class="avatar">
  <img class="avatar-img" src="/assets/img/avatars/3.jpg" alt="user@email.com">
</div>
```

## Letter avatars

Use letters inside avatars to represent users or objects when images are not available. This can be useful for displaying initials.

An avatar without a `.theme-*` class stays neutral; with one, the background takes the theme color and the letters take the color that reads on it.

```html
<div class="avatar">CUI</div>
<div class="avatar theme-primary">CUI</div>
<div class="avatar theme-secondary">CUI</div>
<div class="avatar theme-warning">CUI</div>
```

## Subtle avatars

_Added in 6.0.0._

Add `.avatar-subtle` for a tinted avatar that keeps the theme color in the text rather than the background.

## Icons avatars

Incorporate icons within avatars, allowing for a visual representation using scalable vector graphics (SVG).

```html
<div class="avatar theme-info">
  <svg class="icon" viewBox="0 0 32 32">
    <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path><path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
  </svg>
</div>
<div class="avatar theme-success">
  <svg class="icon" viewBox="0 0 32 32">
    <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path><path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
  </svg>
</div>
<div class="avatar theme-danger">
  <svg class="icon" viewBox="0 0 32 32">
    <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path><path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
  </svg>
</div>
```

## Rounded avatars

Create avatars with rounded corners by adding the `.rounded` class. This gives a softer, less angular appearance.

```html
<div class="avatar rounded theme-primary">CUI</div>
<div class="avatar rounded theme-secondary">CUI</div>
<div class="avatar rounded theme-warning">CUI</div>
```

## Square avatars

Make avatars square by using the `.rounded-0` class, removing any rounded edges for a sharper look.

```html
<div class="avatar rounded-0 theme-primary">CUI</div>
<div class="avatar rounded-0 theme-secondary">CUI</div>
<div class="avatar rounded-0 theme-warning">CUI</div>
```

## Sizing

Adjust the size of avatars using the `.avatar-xs`, `.avatar-sm`, `.avatar-md`, `.avatar-lg`, and `.avatar-xl` classes for larger or smaller versions. The status indicator scales with the avatar, so it stays proportional at every size.
```html
<div class="avatar avatar-xl">CUI</div>
<div class="avatar avatar-lg">CUI</div>
<div class="avatar avatar-md">CUI</div>
<div class="avatar">CUI</div>
<div class="avatar avatar-sm">CUI</div>
<div class="avatar avatar-xs">CUI</div>
```

## Stacked avatars

Display multiple avatars in a stack to represent a group of users or items, with additional count if there are more avatars than can be displayed. Each avatar in a stack wears a ring in the page background colour, so overlapping photos stay separated in both colour schemes.

```html
<div class="avatar-stack">
  <div class="avatar">
    <img class="avatar-img" src="/assets/img/avatars/1.jpg" alt="user@email.com">
  </div>
  <div class="avatar">
    <img class="avatar-img" src="/assets/img/avatars/2.jpg" alt="user@email.com">
  </div>
  <div class="avatar">
    <img class="avatar-img" src="/assets/img/avatars/3.jpg" alt="user@email.com">
  </div>
  <div class="avatar">
    +2
  </div>
</div>
```

Size the whole stack at once with `.avatar-stack-sm` through `.avatar-stack-xl`, and tune the overlap with `--cui-avatar-stack-spacing` — the fraction of the avatar size each one is pulled over its neighbour:

```html
<div class="avatar-stack avatar-stack-lg" style="--cui-avatar-stack-spacing: -.25">
  <div class="avatar">
    <img class="avatar-img" src="/assets/img/avatars/1.jpg" alt="user@email.com">
  </div>
  <div class="avatar">
    <img class="avatar-img" src="/assets/img/avatars/2.jpg" alt="user@email.com">
  </div>
  <div class="avatar">
    <img class="avatar-img" src="/assets/img/avatars/3.jpg" alt="user@email.com">
  </div>
</div>
```

## Avatars with status

Add `.avatar-status` to show presence. The indicator takes its colour from a `theme-*` class and defaults to a neutral grey, so "offline" needs no class at all:

```html
<div class="d-flex gap-4">
  <div class="avatar">
    <img class="avatar-img" src="/assets/img/avatars/1.jpg" alt="user@email.com">
    <span class="avatar-status theme-success" role="img" aria-label="Online"></span>
  </div>
  <div class="avatar">
    CUI
    <span class="avatar-status theme-warning" role="img" aria-label="Away"></span>
  </div>
  <div class="avatar">
    CUI
    <span class="avatar-status theme-danger" role="img" aria-label="Busy"></span>
  </div>
  <div class="avatar">
    CUI
    <span class="avatar-status" role="img" aria-label="Offline"></span>
  </div>
</div>
```

The indicator is a few pixels of colour and nothing else, so colour is the only thing separating one state from another — not enough on its own, and at this size a different shape would not help either. Where the state means something rather than decorates, name it on the indicator:

```html
<span class="avatar-status theme-danger" role="img" aria-label="Busy"></span>
```

`role="img"` is what makes the name stick: `aria-label` on a bare `<span>` has no role to attach to, and assistive technology is free to ignore it.

The ring around the indicator follows the page background through `--cui-avatar-status-border-color`, so it stays correct in dark mode.

## Customizing

### CSS variables

Avatars use local CSS variables on `.avatar` for enhanced real-time customization.

```scss
$avatar-tokens: defaults(
  (
    --cui-avatar-size: 2rem,
    --cui-avatar-font-size: calc(var(--cui-avatar-size) * .4),
    --cui-avatar-color: inherit,
    --cui-avatar-bg: var(--cui-bg-2),
    --cui-avatar-border-radius: 50em,
    --cui-avatar-status-size: .5rem,
    --cui-avatar-status-bg: var(--cui-fg-4),
    --cui-avatar-status-border-radius: 50em,
    --cui-avatar-status-border-width: 1px,
    --cui-avatar-status-border-color: var(--cui-bg-body),
    --cui-avatar-transition: #{"transform .15s ease-in-out"},
  ),
  $avatar-tokens
);
```

Stacks carry their own variables on `.avatar-stack`:

```scss
$avatar-stack-tokens: defaults(
  (
    --cui-avatar-stack-spacing: -.4,
    --cui-avatar-stack-ring-width: 2px,
    --cui-avatar-stack-ring-color: var(--cui-bg-body),
    --cui-avatar-stack-hover-transform: translateY(-2px),
  ),
  $avatar-stack-tokens
);
```

### Sass maps

Each size carries its own dimensions, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$avatar-sizes: defaults(
  (
    xs: (size: 1.25rem, status-size: .35rem),
    sm: (size: 1.5rem, status-size: .4rem),
    md: (size: 2.5rem, status-size: .7rem),
    lg: (size: 3rem,   status-size: .8rem),
    xl: (size: 4rem,   status-size: 1rem),
  ),
  $avatar-sizes
);
```
