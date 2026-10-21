# React Collapse Component Styling

> Learn how to customize the React Collapse component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

React Collapse supports CSS variables for easy customization. These variables are set via Sass but allow direct overrides in your stylesheets or inline styles.

The three variables are declared on both `.collapse` and `.collapsing`, so overriding them on an ancestor retimes every collapse below it.

`--cui-transition-collapse-property` names what animates. Adding to the animation is one declaration instead of a whole new `transition` — that is how `.collapse-horizontal` switches from `height` to `width`, and how the findable option adds `content-visibility`. Keep `display` in the list: it is what holds the element in the layout until the closing transition ends.

```scss
$collapse-tokens: defaults(
  (
    --cui-transition-collapse-property: #{"block-size, display"},
    --cui-transition-collapse-duration: .35s,
    --cui-transition-collapse-timing: ease,
  ),
  $collapse-tokens
);
```

### How to use CSS variables

```jsx
const customVars = {
  '--cui-transition-collapse-duration': '.5s',
}

return <CCollapse style={customVars}>{/* Collapse content */}</CCollapse>
```

## Classes

Collapse transition classes can be found in `scss/_transitions.scss` as these are shared across multiple components (collapse and accordion).

```scss
// Both classes carry the tokens: `.collapsing` marks a running transition on
// either path, and find-in-page reveals the content with neither toggle
// happening.
.collapse,
.collapsing {
  @include tokens($collapse-tokens);
}

// As wide as its content, not as wide as its container: the open size is the
// animation's target, and a target of `auto` would spend most of the run
// growing an empty box past the content.
.collapse-horizontal {
  width: fit-content;
}

// The browser animates the size itself: `interpolate-size` lets the `0` of
// the closed state interpolate to the `auto` of the open one, and `display`
// transitions discretely, so the element stays laid out until the size
// reaches `0`.
@supports (interpolate-size: allow-keywords) {
  .collapse {
    interpolate-size: allow-keywords;
    @include transition-props(
      var(--cui-transition-collapse-property),
      var(--cui-transition-collapse-duration),
      var(--cui-transition-collapse-timing),
      allow-discrete
    );

    // `until-found` content is hidden by the browser instead, which keeps it
    // laid out so find-in-page can reach it. `display: none` would take it
    // back out of the layout and undo that.
    &:not(.show, [hidden="until-found"]) {
      display: none;
      height: 0;
    }

    // The box is clipped only while the move runs, so a dropdown inside an
    // open collapse can still spill out of it.
    &.collapsing {
      overflow: hidden;
    }

    // A hidden collapse is not rendered, so the opening side needs a start
    // value of its own — but only when JavaScript marks the run: a collapse
    // that loads already open must not play an entrance.
    &.show.collapsing {
      @starting-style {
        height: 0;
      }
    }

    &.collapse-horizontal {
      --cui-transition-collapse-property: width, display;

      &:not(.show, [hidden="until-found"]) {
        width: 0;
        height: auto;
      }

      &.show.collapsing {
        @starting-style {
          width: 0;
        }
      }
    }
  }
}

// Everywhere else JavaScript measures the two sizes and the stylesheet still
// times the move between them.
@supports not (interpolate-size: allow-keywords) {
  .collapse:not(.show, .collapsing, [hidden="until-found"]) {
    display: none;
  }

  .collapsing {
    height: 0;
    overflow: hidden;
    @include transition-props(
      var(--cui-transition-collapse-property),
      var(--cui-transition-collapse-duration),
      var(--cui-transition-collapse-timing)
    );

    &.collapse-horizontal {
      --cui-transition-collapse-property: width;

      width: 0;
      height: auto;
    }
  }
}
```
