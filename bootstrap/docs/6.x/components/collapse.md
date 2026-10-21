# Bootstrap 6 Collapse

> Bootstrap collapse component toggles the visibility of content across your project with a few classes and some scripts. Useful for a large amount of content.

## How it works

The collapse JavaScript plugin is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element animates its `height` between `0` and the natural size of the content — the browser interpolates the size itself through [`interpolate-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size), and where that is not supported JavaScript measures the two sizes and the stylesheet still times the move. Given how CSS handles animations, you cannot use `padding` on a `.collapse` element. Instead, use the class as an independent wrapping element.

> This component's animation effect relies on the `prefers-reduced-motion` media query. For more information, refer to the [reduced motion section of our accessibility documentation](https://coreui.io/bootstrap/docs/getting-started/accessibility/#reduced-motion).

## Example

Click the buttons below to show and hide another element via class changes:

- `.collapse` stays on the element at all times; without `.show` the content is hidden
- `.show` lands at the start of the opening transition and leaves at the start of the closing one
- `.collapsing` is applied while either transition runs

You can use a link with the `href` attribute, or a button with the `data-coreui-target` attribute. In both samples, the `data-coreui-toggle="collapse""` is required.

```html
<p class="d-inline-flex flex-wrap gap-1">
  <a class="btn-solid theme-primary" data-coreui-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn-solid theme-primary" type="button" data-coreui-toggle="collapse" data-coreui-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-coreui-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
```

## Horizontal

The collapse plugin also supports horizontal collapsing. Add the `.collapse-horizontal` modifier class to transition the `width` instead of `height` and set a `width` on the immediate child element. Feel free to write your own custom Sass, use inline styles, or use our [width utilities](https://coreui.io/bootstrap/docs/utilities/width/).

> Please note that while the example below has a `min-height` set to avoid excessive repaints in our docs, this is not explicitly required. **Only the `width` on the child element is required.**

```html
<p>
  <button class="btn-solid theme-primary" type="button" data-coreui-toggle="collapse" data-coreui-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Toggle width collapse
  </button>
</p>
<div style="min-height: 120px;">
  <div class="collapse collapse-horizontal" id="collapseWidthExample">
    <div class="card card-body" style="width: 300px;">
      This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
    </div>
  </div>
</div>
```

## Multiple toggles and targets

A `<button>` or `<a>` can show and hide multiple elements by referencing them with a selector in its `href` or `data-coreui-target` attribute.
Conversely, multiple `<button>` or `<a>` elements can show and hide the same element if they each reference it with their `href` or `data-coreui-target` attribute.

```html
<p class="d-inline-flex flex-wrap gap-1">
  <a class="btn-solid theme-primary" data-coreui-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
  <button class="btn-solid theme-primary" type="button" data-coreui-toggle="collapse" data-coreui-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
  <button class="btn-solid theme-primary" type="button" data-coreui-toggle="collapse" data-coreui-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
        Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
        Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
</div>
```

## Findable when collapsed

By default a collapsed area is removed from the layout, which also removes it from what the browser's find-in-page can search. Set `data-coreui-hidden-until-found="true"` on the collapsible element to hide it with [`hidden="until-found"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden) instead: the content stays laid out but invisible, so searching the page finds it, and the browser expands the area to show the match.

```html
<p>
  <button class="btn-solid theme-primary" type="button" data-coreui-toggle="collapse" data-coreui-target="#collapseFindable" aria-expanded="false" aria-controls="collapseFindable">
    Toggle findable content
  </button>
</p>
<div class="collapse" id="collapseFindable" data-coreui-hidden-until-found="true">
  <div class="card card-body">
    Search this page for <strong>capybara</strong> with your browser's find-in-page and this panel opens on its own.
  </div>
</div>
```

The component keeps up with the browser: when a match reveals the content, it adds `.show` and sets `aria-expanded` on the triggers, so the state the reader sees and the state the markup declares do not drift apart. The attribute goes back on once the area is collapsed again.

Requires Chrome 102, Firefox 148 or Safari 26.2. Below those the attribute hides the content the way `hidden` always did, which is what a collapsed area does anyway — the content is simply not findable, exactly as without the option.

## Accessibility

Be sure to add `aria-expanded` to the control component. This attribute explicitly sends the current state of the collapsible element connected to the control to screen readers and related assistive technologies. If the collapsible part is closed by default, the attribute on the control element should have a value of `aria-expanded="false"`. If you have set the collapsible element to be open by default using the `show` class, set `aria-expanded="true"` on the control alternatively. The plugin will automatically toggle this attribute on the control based on whether or not the collapsible element has been opened or closed (via JavaScript, or because the user triggered another control element also tied to the same collapsible element). If the control element's HTML element is not a button (e.g., an `<a>` or `<div>`), the attribute `role="button"` should be added to the element.

If your control element is targeting a single collapsible element – i.e., the `data-coreui-target` attribute is pointing to an `id` selector – you should attach the `aria-controls` attribute to the control part, including the `id` of the collapsible element. Modern screen readers and related assistive technologies address this attribute to provide users with extra shortcuts to navigate directly to the collapsible element itself.

Note that CoreUI for Bootstrap's current implementation does not cover the various *optional* keyboard interactions described in the [WAI-ARIA Authoring Practices 1.1 accordion pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) - you will need to include these yourself with custom JavaScript.
## Usage

The collapse plugin utilizes a few classes to handle the heavy lifting:

- `.collapse` marks the element and never leaves it; without `.show` the content is hidden
- `.collapse.show` shows the content — the class is added when the opening transition starts and removed when the closing one starts
- `.collapsing` is added when either transition starts, and removed when it finishes

These classes can be found in `_transitions.scss`.

### Via data attributes

Just add `data-coreui-toggle="collapse"` and a `data-coreui-target` to the element to automatically assign control of one or more collapsible elements. The `data-coreui-target` attribute accepts a CSS selector to apply the collapse to. Be sure to add the class `collapse` to the collapsible element. If you'd like it to default open, add the additional class `show`.

To add accordion-like group management to a collapsible area, add the data attribute `data-coreui-parent="#selector"`. Refer to the demo to see this in action.

### Via JavaScript

Enable manually with:

```js
const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new coreui.Collapse(collapseEl))
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-animation="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-custom-class="beautifier"` rather than `data-coreui-customClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
`hiddenUntilFound` | boolean | `false` | Hides the collapsed content with [`hidden="until-found"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden) instead of taking it out of the layout, so find-in-page can search it and reveal it. |
`parent` | selector, jQuery object, DOM element | `null` | If parent is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown. (similar to traditional accordion behavior - this is dependent on the `card` class). The attribute has to be set on the target collapsible area. |

### Methods

> #### Promises and transitions
> 
> **Methods that show or hide a component return a promise.** The promise resolves when the transition ends, so `await` continues at the same moment a `shown.coreui.*` or `hidden.coreui.*` listener runs. The methods still return immediately and never block the caller. A call on a component that is already transitioning does nothing and resolves right away.
> 
> [Refer to our JavaScript documentation for further details](https://coreui.io/bootstrap/docs/getting-started/javascript/#promises-and-transitions).

Activates your content as a collapsible element. Accepts an optional options `object`.

The constructor keeps the state that your markup declares. Add `.show` to open the element, and leave it off to keep the element closed. Call `show()`, `hide()` or `toggle()` to change the state.

```js
const bsCollapse = new coreui.Collapse('#myCollapse')
bsCollapse.show()
```

| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's collapse. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the collapse instance associated to a DOM element, you can use it like this: `coreui.Collapse.getInstance(element)` |
| `getOrCreateInstance` | Static method which returns a collapse instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `coreui.Collapse.getOrCreateInstance(element)` |
| `hide` | Hides a collapsible element. **Returns a promise that resolves after the collapsible element is hidden** (e.g., after the `hidden.coreui.collapse` event occurs). |
| `show` | Shows a collapsible element. **Returns a promise that resolves after the collapsible element is shown** (e.g., after the `shown.coreui.collapse` event occurs). |
| `toggle` | Toggles a collapsible element to shown or hidden. **Returns a promise that resolves after the collapsible element is shown or hidden** (i.e. after the `shown.coreui.collapse` or `hidden.coreui.collapse` event occurs). |

### Events

CoreUI for Bootstrap's collapse class exposes a few events for hooking into collapse functionality.

| Event type | Description |
| --- | --- |
| `hidden.coreui.collapse` | This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete). |
| `hide.coreui.collapse` | This event is fired immediately when the `hide` method has been called. |
| `show.coreui.collapse` | This event fires immediately when the `show` instance method is called. |
| `shown.coreui.collapse` | This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete). |

```js
const myCollapsible = document.getElementById('myCollapsible')
myCollapsible.addEventListener('hidden.coreui.collapse', event => {
  // do something...
})
```

## Customizing

### CSS variables

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

### Classes

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
