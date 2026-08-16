# Bootstrap 5 Progress

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

Bootstrap provides a handful of [utilities for setting width](https://coreui.io/bootstrap/docs/utilities/sizing/). Depending on your needs, these may help with quickly configuring progress.

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

Use background utility classes to change the appearance of individual progress bars.

```html
<div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Multiple bars

Include multiple progress bars in a progress component if you need.

```html
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Striped

Add `.progress-bar-striped` to any `.progress-bar` to apply a stripe via CSS gradient over the progress bar's background color.

```html
<div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Animated stripes

The striped gradient can also be animated. Add `.progress-bar-animated` to `.progress-bar` to animate the stripes right to left via CSS3 animations.

```html
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
```

## Progress group

```html
<div class="progress-group mb-4">
  <div class="progress-group-prepend">
    <span class="text-body-secondary small">
      Title
    </span>
  </div>
  <div class="progress-group-bars">
    <div class="progress progress-thin">
      <div class="progress-bar bg-info" role="progressbar" style="width: 34%" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress progress-thin">
      <div class="progress-bar bg-danger" role="progressbar" style="width: 78%" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</div>
<div class="progress-group mb-4">
  <div class="progress-group-prepend">
    <span class="text-body-secondary small">
      Title
    </span>
  </div>
  <div class="progress-group-bars">
    <div class="progress progress-thin">
      <div class="progress-bar bg-info" role="progressbar" style="width: 56%" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress progress-thin">
      <div class="progress-bar bg-danger" role="progressbar" style="width: 94%" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress progress-thin">
      <div class="progress-bar bg-success" role="progressbar" style="width: 67%" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</div>
<div class="progress-group mb-4">
  <div class="progress-group-prepend">
    <span class="text-body-secondary small">
      Title
    </span>
  </div>
  <div class="progress-group-bars">
    <div class="progress progress-thin">
      <div class="progress-bar bg-info" role="progressbar" style="width: 56%" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress progress-thin">
      <div class="progress-bar bg-danger" role="progressbar" style="width: 94%" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress progress-thin">
      <div class="progress-bar bg-success" role="progressbar" style="width: 67%" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress progress-thin">
      <div class="progress-bar bg-warning" role="progressbar" style="width: 17%" aria-valuenow="17" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</div>
```

```html
<div class="progress-group">
  <div class="progress-group-header">
    <i class="cil-user progress-group-icon me-2"></i>
    <div>Male</div>
    <div class="ms-auto font-weight-bold">43%</div>
  </div>
  <div class="progress-group-bars">
    <div class="progress progress-thin">
      <div class="progress-bar bg-warning" role="progressbar" style="width: 43%" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</div>
```

```html
<div class="progress-group">
  <div class="progress-group-header align-items-end">
    <i class="cil-globe-alt progress-group-icon me-2"></i>
    <div>Organic Search</div>
    <div class="ms-auto font-weight-bold me-2">191.235</div>
    <div class="text-muted small">(56%)</div>
  </div>
  <div class="progress-group-bars">
    <div class="progress progress-thin">
      <div class="progress-bar bg-success" role="progressbar" style="width: 56%" aria-valuenow="56" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</div>
```

## Customizing

### CSS variables

Progress bars use local CSS variables on `.progress` for enhanced real-time customization. Values for the CSS variables are set via SASS, so Sass customization is still supported, too.

```scss
--cui-progress-height: #{$progress-height};
@include rfs($progress-font-size, --cui-progress-font-size);
--cui-progress-bg: #{$progress-bg};
--cui-progress-border-radius: #{$progress-border-radius};
--cui-progress-box-shadow: #{$progress-box-shadow};
--cui-progress-bar-color: #{$progress-bar-color};
--cui-progress-bar-bg: #{$progress-bar-bg};
--cui-progress-bar-transition: #{$progress-bar-transition};
```

### SASS variables

```scss
$progress-height:                   1rem !default;
$progress-font-size:                $font-size-base * .75 !default;
$progress-bg:                       var(--cui-secondary-bg) !default;
$progress-border-radius:            var(--cui-border-radius) !default;
$progress-box-shadow:               var(--cui-box-shadow-inset) !default;
$progress-bar-color:                $white !default;
$progress-bar-bg:                   var(--cui-primary) !default;
$progress-bar-animation-timing:     1s linear infinite !default;
$progress-bar-transition:           width .6s ease !default;

// TODO: clean-up ???
$progress-group-margin-bottom:         $spacer !default;
$progress-group-header-margin-bottom:  $spacer * .25 !default;
```

### Keyframes

Used for creating the CSS animations for `.progress-bar-animated`. Included in `scss/_progress-bar.scss`.

```scss
@if $enable-transitions {
  @keyframes progress-bar-stripes {
    0% { background-position-x: var(--cui-progress-height); }
  }
}
```
