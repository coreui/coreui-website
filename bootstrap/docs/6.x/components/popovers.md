# Bootstrap 6 Popover

> Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.

## Overview

Things to know when using the popover plugin:

- Popovers rely on the 3rd party library [Floating UI](https://floating-ui.com/) for positioning. You must include [floating-ui.core.umd.min.js](https://cdn.jsdelivr.net/npm/@floating-ui/core@1.8.0/dist/floating-ui.core.umd.min.js) and [floating-ui.dom.umd.min.js](https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.8.0/dist/floating-ui.dom.umd.min.js) (in this order) before coreui.js or use `coreui.bundle.min.js` / `coreui.bundle.js` which contains Floating UI in order for popovers to work!
- Popovers require the [tooltip plugin](https://coreui.io/bootstrap/docs/components/tooltips/) as a dependency.
- Popovers are opt-in for performance reasons, so **you must initialize them yourself**.
- Zero-length `title` and `content` values will never show a popover.
- Specify `container: 'body'` to avoid rendering problems in more complex components (like our input groups, button groups, etc).
- Triggering popovers on hidden elements will not work.
- Popovers for `.disabled` or `disabled` elements must be triggered on a wrapper element.
- When triggered from anchors that wrap across multiple lines, popovers will be centered between the anchors' overall width. Use `.text-nowrap` on your `<a>`s to avoid this behavior.
- Popovers must be hidden before their corresponding elements have been removed from the DOM.
- Popovers can be triggered thanks to an element inside a shadow DOM.

> By default, this component utilizes the built-in content sanitizer, which removes any HTML elements that are not explicitly allowed. Refer to the [sanitizer section in our JavaScript documentation](https://coreui.io/bootstrap/docs/getting-started/javascript/#sanitizer) for more details.

> This component's animation effect relies on the `prefers-reduced-motion` media query. For more information, refer to the [reduced motion section of our accessibility documentation](https://coreui.io/bootstrap/docs/accessibility/reduced-motion/).

Keep reading to see how popovers work with some examples.

## Examples

### Enable popovers everywhere

One way to initialize all popovers on a page would be to select them by their `data-coreui-toggle` attribute:

```js
const popoverTriggerList = document.querySelectorAll('[data-coreui-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new coreui.Popover(popoverTriggerEl))
```
```js
document
  .querySelectorAll('[data-coreui-toggle="popover"]')
  .forEach(popover => {
    new coreui.Popover(popover)
  })
```

### Live demo

We use JavaScript similar to the snippet above to render the following live popover. Titles are set via `data-coreui-title` and body content is set via `data-coreui-content`.

> You can choose to use either `title` or `data-coreui-title` in your HTML. If you opt for `title,` the plugin will automatically change it to `data-coreui-title` upon rendering the element.

```html
<button type="button" class="btn-solid theme-danger btn-lg" data-coreui-toggle="popover" title="Popover title" data-coreui-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
```

### Four directions

Four options are available: `top`, `end`, `bottom` and `start`.

```html
<button type="button" class="btn-solid theme-secondary" data-coreui-container="body" data-coreui-toggle="popover" data-coreui-placement="top" data-coreui-content="Top popover">
  Popover on top
</button>
<button type="button" class="btn-solid theme-secondary" data-coreui-container="body" data-coreui-toggle="popover" data-coreui-placement="end" data-coreui-content="End popover">
  Popover at the end
</button>
<button type="button" class="btn-solid theme-secondary" data-coreui-container="body" data-coreui-toggle="popover" data-coreui-placement="bottom" data-coreui-content="Bottom popover">
  Popover on bottom
</button>
<button type="button" class="btn-solid theme-secondary" data-coreui-container="body" data-coreui-toggle="popover" data-coreui-placement="start" data-coreui-content="Start popover">
  Popover at the start
</button>
```

`start` and `end` are logical: they follow the reading direction, so `end` is the right side in LTR and the left side in RTL. The same names place a [menu](https://coreui.io/bootstrap/docs/components/menu/) and a [dropdown](https://coreui.io/bootstrap/docs/components/dropdowns/).

#### Deprecated physical names

_Deprecated in 6.0.0._

`left` and `right` still work and behave exactly like `start` and `end` — they have always mirrored in RTL, so `right` never meant "the right side" there either. The logical names say that plainly; the physical ones are removed in v7.

### Responsive placement

Change placement at different breakpoints using responsive prefixes. The syntax is `breakpoint:placement`, where breakpoint is one of `sm`, `md`, `lg`, `xl`, or `2xl`. Multiple breakpoints can be combined in a single attribute, space-separated — a bare placement with no prefix is the one below the smallest listed breakpoint.

```html
<button type="button" class="btn-solid theme-secondary" data-coreui-container="body" data-coreui-toggle="popover" data-coreui-placement="top md:right lg:bottom" data-coreui-content="Responsive popover">
  Top, then right, then bottom
</button>
```

### Using the `container` option

When you have some styles on a parent element that interfere with a popover, you'll want to specify a custom `container` so that the popover's HTML appears within that element instead.

```js
const popover = new coreui.Popover(document.querySelector('.example-popover'), {
  container: 'body'
})
```

### Custom popovers

_Added in 4.2.6._

You can customize the appearance of popovers using [CSS variables](#css-variables). We set a custom class with `data-coreui-custom-class="custom-popover"` to scope our custom appearance and use it to override some of the local CSS variables.
```scss
.custom-popover {
  --cui-popover-max-width: 200px;
  --cui-popover-border-color: var(--cui-primary);
  --cui-popover-header-bg: var(--cui-primary);
  --cui-popover-header-color: var(--cui-white);
  --cui-popover-body-padding-x: 1rem;
  --cui-popover-body-padding-y: .5rem;
}
```
```html
<button type="button" class="btn-solid theme-secondary"
        data-coreui-toggle="popover" data-coreui-placement="right"
        data-coreui-custom-class="custom-popover"
        data-coreui-title="Custom popover"
        data-coreui-content="This popover is themed via CSS variables.">
  Custom popover
</button>
```

### Dismiss on next click

Use the `focus` trigger to dismiss popovers on the user's next click of a different element than the toggle element. A press inside the popover itself does not dismiss it, so users can select its text or use the controls in it.

A shown popover can also be dismissed by pressing the <kbd>Escape</kbd> key. As with dropdown menus, a popover shown inside a dialog is dismissed on its own: the first <kbd>Escape</kbd> closes the popover and a subsequent one closes the dialog.

> #### Specific markup required for dismiss-on-next-click
> 
> For proper cross-browser and cross-platform behavior, you must use the `` tag, _not_ the `` tag, and you also must include a [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute.

```html
<a tabindex="0" class="btn-solid theme-danger btn-lg" role="button" data-coreui-toggle="popover" data-coreui-trigger="focus" title="Dismissible popover" data-coreui-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>
```

```js
const popover = new coreui.Popover(document.querySelector('.popover-dismiss'), {
  trigger: 'focus'
})
```

### Disabled elements

Elements with the `disabled` attribute aren't interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you'll want to trigger the popover from a wrapper `<div>` or `<span>`, ideally made keyboard-focusable using `tabindex="0"`.

For disabled popover triggers, you may also prefer `data-coreui-trigger="hover focus"` so that the popover appears as immediate visual feedback to your users as they may not expect to _click_ on a disabled element.

```html
<span class="d-inline-block" tabindex="0" data-coreui-toggle="popover" data-coreui-trigger="hover focus" data-coreui-content="Disabled popover">
  <button class="btn-solid theme-primary" type="button" disabled>Disabled button</button>
</span>
```

## Usage

Enable popovers via JavaScript:

```js
const exampleEl = document.getElementById('example')
const popover = new coreui.Popover(exampleEl, options)
```

> ### Making popovers work for keyboard and assistive technology users
> 
> To allow keyboard users to activate your popovers, you should only add them to HTML elements that are traditionally keyboard-focusable and interactive (such as links or form controls). Although arbitrary HTML elements (such as ``s) can be made focusable by adding the `tabindex="0"` attribute, this will add potentially annoying and confusing tab stops on non-interactive elements for keyboard users, and most assistive technologies currently do not announce the popover's content in this situation. Additionally, do not rely solely on `hover` as the trigger for your popovers, as this will make them impossible to trigger for keyboard users.
> 
> While you can insert rich, structured HTML in popovers with the `html` option, we strongly recommend that you avoid adding an excessive amount of content. The way popovers currently work is that, once displayed, their content is tied to the trigger element with the `aria-describedby` attribute. As a result, the entirety of the popover's content will be announced to assistive technology users as one long, uninterrupted stream.
> 
> Additionally, while it is possible to also include interactive controls (such as form elements or links) in your popover (by adding these elements to the `allowList` of allowed attributes and tags), be aware that currently the popover does not manage keyboard focus order. When a keyboard user opens a popover, focus remains on the triggering element, and as the popover usually does not immediately follow the trigger in the document's structure, there is no guarantee that moving forward/pressing TAB will move a keyboard user into the popover itself. In short, simply adding interactive controls to a popover is likely to make these controls unreachable/unusable for keyboard users and users of assistive technologies, or at the very least make for an illogical overall focus order. In these cases, consider using a modal dialog instead.

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-coreui-`, as in `data-coreui-animation=""`. Make sure to change the case type of the option name from camelCase to kebab-case when passing via data attributes. For example: instead of using `data-coreui-customClass="beautifier"`, use `data-coreui-custom-class="beautifier"`.

> Note that for security reasons the `sanitize`, `sanitizeFn`, and `allowList` options cannot be supplied using data attributes.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | [Default value](https://coreui.io/bootstrap/docs/getting-started/javascript/#sanitizer) | Object which contains allowed attributes and tags. |
| `animation` | boolean | `true` | Apply a CSS fade transition to the popover. The fade lives in the stylesheet: `false` renders `.popover-instant`, the same class you can put in a custom `template`. Retime it with `--cui-popover-transition-duration` and `--cui-popover-transition-timing`. |
| `boundary` | string, element | `'clippingParents'` | Overflow constraint boundary of the popover. By default, it's `'clippingParents'` and can accept an HTMLElement reference (via JavaScript only). For more information refer to Floating UI's [detectOverflow docs](https://floating-ui.com/docs/detectOverflow/#boundary). |
| `container` | string, element, false | `false` | Appends the popover to a specific element. Example: `container: 'body'`. This option is particularly useful in that it allows you to position the popover in the flow of the document near the triggering element - which will prevent the popover from floating away from the triggering element during a window resize. |
| `content` | string, element, function | `''` | Default content value if `data-coreui-content` attribute isn't present. If a function is given, it will be called with its `this` reference set to the element that the popover is attached to.
| `customClass` | string, function | `''` | Add classes to the popover when it is shown. Note that these classes will be added in addition to any classes specified in the template. To add multiple classes, separate them with spaces: `'class-1 class-2'`. You can also pass a function that should return a single string containing additional class names. |
| `delay` | number, object | `0` | Delay showing and hiding the popover (ms)—doesn't apply to manual trigger type. If a number is supplied, delay is applied to both hide/show. Object structure is: `delay: { "show": 500, "hide": 100 }`. |
| `fallbackPlacements` | string, array | `['top', 'right', 'bottom', 'left']` | Define fallback placements by providing a list of placements in array (in order of preference). For more information refer to Floating UI's [flip docs](https://floating-ui.com/docs/flip/#fallbackplacements). |
| `floatingConfig` | null, object, function | `null` | To change CoreUI's default Floating UI config, see Floating UI's [computePosition docs](https://floating-ui.com/docs/computePosition/#options). When a function is used to create the configuration, it's called with an object that contains the default configuration. It helps you use and merge the default with your own configuration. The function must return a configuration object for Floating UI.|
| `html` | boolean | `false` | Allow HTML in the popover. If true, HTML tags in the popover's `title` will be rendered in the popover. If false, `innerText` property will be used to insert content into the DOM. Use text if you're worried about XSS attacks. |
| `offset` | number, string, function | `[0, 8]` | Offset of the popover relative to its target. You can pass a string in data attributes with comma separated values like: `data-coreui-offset="10,20"`. When a function is used to determine the offset, it is called with an object containing the placement, the reference, and floating rects as its first argument. The triggering element DOM node is passed as the second argument. The function must return an array with two numbers: skidding (along the edge) and distance (away from it). For more information refer to Floating UI's [offset docs](https://floating-ui.com/docs/offset/#options). |
| `placement` | string, function | `'right'` | How to position the popover: `'auto'`, `'top'`, `'end'`, `'bottom'` or `'start'`, plus responsive variants such as `'top md:end'`. `'left'` and `'right'` are the deprecated spellings of `'start'` and `'end'`. When `auto` is specified, it will dynamically reorient the popover. When a function is used to determine the placement, it is called with the popover DOM node as its first argument and the triggering element DOM node as its second. The `this` context is set to the popover instance. |
| `sanitize` | boolean | `true` | Enable or disable the sanitization. If activated `'template'`, `'content'` and `'title'` options will be sanitized. |
| `sanitizeFn` | null, function | `null` | Here you can supply your own sanitize function. This can be useful if you prefer to use a dedicated library to perform sanitization. |
| `selector` | string, false | `false` | If a selector is provided, popover objects will be delegated to the specified targets. In practice, this is used to also apply popovers to dynamically added DOM elements (`jQuery.on` support). See [this issue](https://github.com/coreui/coreui/issues/4215) and [an informative example](https://codepen.io/Johann-S/pen/djJYPb). **Note**: `title` attribute must not be used as a selector. |
| `template` | string | `'<div class="popover" role="popover"><div class="popover-arrow"></div><div class="popover-body"></div></div>'` | Base HTML to use when creating the popover. The popover's `title` will be injected into the `.popover-body`. `.popover-arrow` will become the popover's arrow. The outermost wrapper element should have the `.popover` class and `role="popover"`. |
| `title` | string, element, function | `''` | Default title value if `title` attribute isn't present. If a function is given, it will be called with its `this` reference set to the element that the popover is attached to. |
| `trigger` | string | `'click'` | How popover is triggered: click, hover, focus, manual. You may pass multiple triggers; separate them with a space. `'manual'` indicates that the popover will be triggered programmatically via the `.popover('show')`, `.popover('hide')` and `.popover('toggle')` methods; this value cannot be combined with any other trigger. `'hover'` on its own will result in popovers that cannot be triggered via the keyboard, and should only be used if alternative methods for conveying the same information for keyboard users is present. |

> #### Data attributes for individual popovers
> 
> Options for individual popovers can alternatively be specified through the use of data attributes, as explained above.

#### Using function with `floatingConfig`

```js
const popover = new coreui.Popover(element, {
  floatingConfig(defaultConfig) {
    // const newConfig = {...}
    // use defaultConfig if needed...
    // return newConfig
  }
})
```

### Methods

> #### Promises and transitions
> 
> **Methods that show or hide a component return a promise.** The promise resolves when the transition ends, so `await` continues at the same moment a `shown.coreui.*` or `hidden.coreui.*` listener runs. The methods still return immediately and never block the caller. A call on a component that is already transitioning does nothing and resolves right away.
> 
> [Refer to our JavaScript documentation for further details](https://coreui.io/bootstrap/docs/getting-started/javascript/#promises-and-transitions).

| Method | Description |
| --- | --- |
| `disable` | Removes the ability for an element's popover to be shown. The popover will only be able to be shown if it is re-enabled. |
| `dispose` | Hides and destroys an element's popover (Removes stored data on the DOM element). Popovers that use delegation (which are created using [the `selector` option](#options)) cannot be individually destroyed on descendant trigger elements. |
| `enable` | Gives an element's popover the ability to be shown. **Popovers are enabled by default.** |
| `getInstance` | _Static_ method which allows you to get the popover instance associated with a DOM element. |
| `getOrCreateInstance` | *Static* method which allows you to get the popover instance associated with a DOM element, or create a new one in case it wasn't initialized |
| `hide` | Hides an element's popover. **Returns a promise that resolves after the popover is hidden** (i.e. after the `hidden.coreui.popover` event occurs). This is considered a "manual" triggering of the popover. |
| `setContent` | Gives a way to change the popover's content after its initialization. |
| `show` | Reveals an element's popover. **Returns a promise that resolves after the popover is shown** (i.e. after the `shown.coreui.popover` event occurs). This is considered a "manual" triggering of the popover. Popovers whose title and content are both zero-length are never displayed. |
| `toggle` | Toggles an element's popover. **Returns a promise that resolves after the popover is shown or hidden** (i.e. after the `shown.coreui.popover` or `hidden.coreui.popover` event occurs). This is considered a "manual" triggering of the popover. |
| `toggleEnabled` | Toggles the ability for an element's popover to be shown or hidden. |
| `update` | Updates the position of an element's popover. |

```js
// getOrCreateInstance example
const popover = coreui.Popover.getOrCreateInstance('#example') // Returns a Bootstrap popover instance

// setContent example
myPopover.setContent({
  '.popover-header': 'another title',
  '.popover-body': 'another content'
})

```

> The `setContent` method accepts an `object` argument, where each property-key is a valid `string` selector within the popover template, and each related property-value can be `string` | `element` | `function` | `null`

### Events

| Event | Description |
| --- | --- |
| `hidden.coreui.popover` | This event is fired when the popover has finished being hidden from the user (will wait for CSS transitions to complete). |
| `hide.coreui.popover` | This event is fired immediately when the `hide` instance method has been called. |
| `inserted.coreui.popover` | This event is fired after the `show.coreui.popover` event when the popover template has been added to the DOM. |
| `show.coreui.popover` | This event fires immediately when the `show` instance method is called. |
| `shown.coreui.popover` | This event is fired when the popover has been made visible to the user (will wait for CSS transitions to complete). |

```js
const myPopoverTrigger = document.getElementById('myPopover')
myPopoverTrigger.addEventListener('hidden.coreui.popover', () => {
  // do something...
})
```

## Customizing

### CSS variables

Popovers use local CSS variables on `.popover` for enhanced real-time customization.

```scss
$popover-tokens: defaults(
  (
    --cui-popover-zindex: var(--cui-z-popover),
    --cui-popover-max-width: 276px,
    --cui-popover-font-size: var(--cui-font-size-sm),
    --cui-popover-bg: var(--cui-bg-body),
    --cui-popover-border-width: var(--cui-border-width),
    --cui-popover-border-color: var(--cui-border-color-translucent),
    --cui-popover-border-radius: var(--cui-radius-7),
    --cui-popover-inner-border-radius: calc(var(--cui-popover-border-radius) - var(--cui-popover-border-width)),
    --cui-popover-box-shadow: var(--cui-box-shadow),
    --cui-popover-header-padding-x: var(--cui-spacer),
    --cui-popover-header-padding-y: .5rem,
    --cui-popover-header-font-size: var(--cui-body-font-size),
    --cui-popover-header-color: var(--cui-heading-color),
    --cui-popover-header-bg: var(--cui-bg-1),
    --cui-popover-body-padding-x: var(--cui-spacer),
    --cui-popover-body-padding-y: var(--cui-spacer),
    --cui-popover-body-color: var(--cui-fg-body),
    --cui-popover-arrow-width: 1rem,
    --cui-popover-arrow-height: .5rem,
    --cui-popover-arrow-border: var(--cui-popover-border-color),
    --cui-popover-transition-property: opacity,
    --cui-popover-transition-duration: .15s,
    --cui-popover-transition-timing: linear,
  ),
  $popover-tokens
);
```
