# Vue Container queries Utilities

> Turn an element into a query container so its descendants can respond to its size instead of the viewport.

Use the `.contains-*` utilities to set the `container-type` property, establishing an element as a [query container](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries). Once an element is a query container, its descendants can adapt their styles to the container's size rather than to the viewport.

Apply `.contains-inline` to query on inline size (width in horizontal writing modes), or `.contains-size` to query on both inline and block size.

```vue
<div class="contains-inline">
  <CCard>...</CCard>
</div>
```

```scss
// Classes
.contains-inline {
  container-type: inline-size;
}
.contains-size {
  container-type: size;
}
```

> `.contains-size` queries the container's block size as well, so the element needs an explicit height for `size` containment to resolve. When in doubt, reach for `.contains-inline`.

> **`container-type` implies layout containment.** A query container becomes the containing block for absolutely and fixed-positioned descendants, so a `position: fixed` element inside it is positioned against the container rather than the viewport. Keep fixed markup outside your query containers.

Our [CSS Grid](https://coreui.io/vue/docs/layout/css-grid/) uses this: every `.grid` is a query container, which is what makes `.g-col-md-*` respond to the width of the grid instead of the browser window.

Several components read a query container rather than the viewport, and need one on an ancestor to switch at all:

- [`.card-group`](https://coreui.io/vue/docs/components/card/#card-groups) attaches its cards from `sm` up
- [`.list-group-horizontal-*`](https://coreui.io/vue/docs/components/list-group/#horizontal) turns horizontal from its breakpoint up
- [`.hstack-*` and `.vstack-*`](https://coreui.io/vue/docs/helpers/stacks/) switch direction at their breakpoint
- [`.table-responsive*`](https://coreui.io/vue/docs/components/table/#responsive-tables) is itself a query container, so content inside it can respond to its width

## Customizing

### Sass mixins

Write your own container queries with the same breakpoint names the rest of the framework uses. Each mixin takes an optional container name, so you can target one specific container.

```scss
.sidebar {
  @include set-container(); // container-type: inline-size

  .card {
    @include container-breakpoint-up(md) {
      display: flex;
    }
  }
}
```

```scss
// Name a container, then query it by name from anywhere inside it
.layout {
  @include set-container(inline-size, layout);
}

.widget {
  @include container-breakpoint-between(sm, lg, layout) {
    flex-direction: column;
  }
}
```

```scss
// Set an element as a query container.
//
//    @include set-container();                     // container-type: inline-size
//    @include set-container(size);                 // container-type: size
//    @include set-container(inline-size, sidebar); // container: sidebar / inline-size
@mixin set-container($type: inline-size, $name: null) {
  @if $name {
    container: #{$name} / #{$type};
  } @else {
    container-type: #{$type};
  }
}

// Container of at least the minimum breakpoint width. No query for the smallest breakpoint.
// Makes the @content apply to the given breakpoint and wider.
@mixin container-breakpoint-up($name, $container-name: null, $breakpoints: $breakpoints) {
  $min: breakpoint-min($name, $breakpoints);
  @if $min {
    @if $container-name {
      @container #{$container-name} (width >= #{$min}) {
        @content;
      }
    } @else {
      @container (width >= #{$min}) {
        @content;
      }
    }
  } @else {
    @content;
  }
}

// Container of at most the maximum breakpoint width. No query for the largest breakpoint.
// Makes the @content apply to the given breakpoint and narrower.
@mixin container-breakpoint-down($name, $container-name: null, $breakpoints: $breakpoints) {
  $max: breakpoint-max($name, $breakpoints);
  @if $max {
    @if $container-name {
      @container #{$container-name} (width < #{$max}) {
        @content;
      }
    } @else {
      @container (width < #{$max}) {
        @content;
      }
    }
  } @else {
    @content;
  }
}

// Container that spans multiple breakpoint widths.
// Makes the @content apply between the min and max breakpoints.
@mixin container-breakpoint-between($lower, $upper, $container-name: null, $breakpoints: $breakpoints) {
  $min: breakpoint-min($lower, $breakpoints);
  $max: breakpoint-max($upper, $breakpoints);

  @if $min != null and $max != null {
    @if $container-name {
      @container #{$container-name} (width >= #{$min}) and (width < #{$max}) {
        @content;
      }
    } @else {
      @container (width >= #{$min}) and (width < #{$max}) {
        @content;
      }
    }
  } @else if $max == null {
    @include container-breakpoint-up($lower, $container-name, $breakpoints) {
      @content;
    }
  } @else if $min == null {
    @include container-breakpoint-down($upper, $container-name, $breakpoints) {
      @content;
    }
  }
}

// Container between the breakpoint's minimum and maximum widths.
// No minimum for the smallest breakpoint, and no maximum for the largest one.
@mixin container-breakpoint-only($name, $container-name: null, $breakpoints: $breakpoints) {
  $min: breakpoint-min($name, $breakpoints);
  $next: breakpoint-next($name, $breakpoints);
  $max: breakpoint-max($next, $breakpoints);

  @if $min != null and $max != null {
    @if $container-name {
      @container #{$container-name} (width >= #{$min}) and (width < #{$max}) {
        @content;
      }
    } @else {
      @container (width >= #{$min}) and (width < #{$max}) {
        @content;
      }
    }
  } @else if $max == null {
    @include container-breakpoint-up($name, $container-name, $breakpoints) {
      @content;
    }
  } @else if $min == null {
    @include container-breakpoint-down($next, $container-name, $breakpoints) {
      @content;
    }
  }
}
```

### Utilities API

Container utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/vue/docs/utilities/api/#using-the-api)

```scss
"container": (
  property: container-type,
  class: contains,
  values: (
    "inline": inline-size,
    "size": size,
  )
),
```
