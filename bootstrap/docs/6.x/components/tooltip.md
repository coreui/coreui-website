# Bootstrap 6 Tooltip

> Use Bootstrap Tooltips to add small, informative text boxes that appear when users hover or focus on an element. This feature enhances UX by providing contextual help without cluttering your interface.

## Overview

Things to keep in mind when using the Bootstrap tooltip plugin:

- Our tooltips depend on the third-party library [Floating UI](https://floating-ui.com/) for positioning. You need to include [floating-ui.core.umd.min.js](https://cdn.jsdelivr.net/npm/@floating-ui/core@1.8.0/dist/floating-ui.core.umd.min.js) and [floating-ui.dom.umd.min.js](https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.8.0/dist/floating-ui.dom.umd.min.js) (in this order) before `coreui.js` or use `coreui.bundle.min.js/coreui.bundle.js`, which includes Floating UI to ensure tooltips function correctly!
- Tooltips are optional for performance reasons, so you need to initialize them yourself.
- Bootstrap Tooltips with empty titles are never displayed.
- Specify `container: 'body'` to prevent rendering issues in more complex components (such as our input groups, button groups, etc.).
- Bootstrap tooltips cannot be triggered on hidden elements.
- Tooltips for elements that are `.disabled` or `disabled` need to be activated on a wrapper element.
- When triggered by hyperlinks that span multiple lines, tooltips will be centered. Use `white-space: nowrap;` on your `<a>` elements to avoid this behavior.
- Tooltips must be hidden before the related elements are removed from the DOM.
- Our Bootstrap tooltips can be triggered thanks to an element inside a shadow DOM.

Got all that? Awesome! Now, let's explore how they work through some examples.

> By default, this component utilizes the built-in content sanitizer, which removes any HTML elements that are not explicitly allowed. Refer to the [sanitizer section in our JavaScript documentation](https://coreui.io/bootstrap/docs/getting-started/javascript/#sanitizer) for more details.

> This component's animation effect relies on the `prefers-reduced-motion` media query. For more information, refer to the [reduced motion section of our accessibility documentation](https://coreui.io/bootstrap/docs/accessibility/reduced-motion/).

Got all that? Great, let's see how they work with some examples.

## Examples

### Enable Bootstrap tooltips

You can enable tooltips using JavaScript or data attributes. Here's how to initialize all tooltip elements on a page:

```js
const tooltipTriggerList = document.querySelectorAll('[data-coreui-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new coreui.Tooltip(tooltipTriggerEl))
```

### Tooltips on links

Hover your cursor over the links below to see tooltips:

> You can choose to use either `title` or `data-coreui-title` in your HTML. If you opt for `title,` the plugin will automatically change it to `data-coreui-title` upon rendering the element.

### Custom tooltips

_Added in 4.2.0._

Feel free to personalize the look of your tooltips with [CSS variables](#css-variables)! By setting a custom class using `data-coreui-custom-class="custom-tooltip"`, you can easily define your custom style and use it to adjust a local CSS variable.

```scss
.custom-tooltip {
  --cui-tooltip-bg: var(--cui-primary);
}
```

```html
<button type="button" class="btn-outline"
        data-coreui-toggle="tooltip" data-coreui-placement="top"
        data-coreui-custom-class="custom-tooltip"
        data-coreui-title="This top tooltip is themed via CSS variables.">
  Custom tooltip
</button>
```

### Theme variants

A tooltip reads the `.theme-{color}` slots, so a [theme class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) on the tip colors its surface and picks the contrasting text. The class lands on the tip through `data-coreui-custom-class`; without one the tip keeps its default look, the page's foreground color.

```html
<button type="button" class="btn-outline" data-coreui-toggle="tooltip" data-coreui-custom-class="theme-primary" data-coreui-title="Primary tooltip">Primary</button>
<button type="button" class="btn-outline" data-coreui-toggle="tooltip" data-coreui-custom-class="theme-secondary" data-coreui-title="Secondary tooltip">Secondary</button>
<button type="button" class="btn-outline" data-coreui-toggle="tooltip" data-coreui-custom-class="theme-success" data-coreui-title="Success tooltip">Success</button>
<button type="button" class="btn-outline" data-coreui-toggle="tooltip" data-coreui-custom-class="theme-danger" data-coreui-title="Danger tooltip">Danger</button>
```

### Positioning

Tooltips support four placements: `top`, `end`, `bottom` and `start`. The default is `top`. Set them with the `data-coreui-placement` attribute:

```html
<button type="button" class="btn-outline" data-coreui-toggle="tooltip" data-coreui-placement="top" title="Tooltip on top">Tooltip on top</button>
<button type="button" class="btn-outline" data-coreui-toggle="tooltip" data-coreui-placement="end" title="Tooltip at the end">Tooltip at the end</button>
<button type="button" class="btn-outline" data-coreui-toggle="tooltip" data-coreui-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
<button type="button" class="btn-outline" data-coreui-toggle="tooltip" data-coreui-placement="start" title="Tooltip at the start">Tooltip at the start</button>
```

`start` and `end` are logical: they follow the reading direction, so `end` is the right side in LTR and the left side in RTL. The same names place a [menu](https://coreui.io/bootstrap/docs/components/menu/) and a [dropdown](https://coreui.io/bootstrap/docs/components/dropdown/).

#### Deprecated physical names

_Deprecated in 6.0.0._

`left` and `right` still work and behave exactly like `start` and `end` — they have always mirrored in RTL, so `right` never meant "the right side" there either. The logical names say that plainly; the physical ones are removed in v7.

```html
<button type="button" class="btn-outline" data-coreui-toggle="tooltip" data-coreui-placement="right" title="Tooltip on right">Tooltip on right</button>
<button type="button" class="btn-outline" data-coreui-toggle="tooltip" data-coreui-placement="left" title="Tooltip on left">Tooltip on left</button>
```

### Responsive placement

Change placement at different breakpoints using responsive prefixes. The syntax is `breakpoint:placement`, where breakpoint is one of `sm`, `md`, `lg`, `xl`, or `2xl`. Multiple breakpoints can be combined in a single attribute, space-separated — a bare placement with no prefix is the one below the smallest listed breakpoint.

```html
<button type="button" class="btn-solid theme-secondary" data-coreui-toggle="tooltip" data-coreui-placement="top md:right lg:bottom" data-coreui-title="Responsive tooltip">
  Top, then right, then bottom
</button>
```

### Tooltips with HTML Content

Bootstrap Tooltips support HTML content, allowing you to insert styled elements like `<em>`, `<strong>`, or `<u>` directly inside the tooltip. This feature is useful when you want to emphasize certain words, add inline formatting, or even insert icons.

To enable this, set the `data-coreui-html="true"` attribute and include valid HTML in the title attribute. Be mindful of security when injecting dynamic content.

```html
<button type="button" class="btn-outline" data-coreui-toggle="tooltip" data-coreui-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>
```

This will render a styled tooltip that interprets the HTML tags instead of treating them as plain text. HTML tooltips are especially handy when you need richer formatting within a compact UI hint.

### Tooltips on SVG Elements

Applying Bootstrap Tooltips to SVG elements requires a different approach, since SVGs do not support the `title` attribute in the same way HTML elements do. To show tooltips on SVG icons or shapes, you must initialize them manually using JavaScript.

It’s recommended to set the container option to `'body'` to avoid positioning issues, especially when SVGs are nested inside complex layouts.

```html
<a href="#" class="d-inline-block" data-coreui-toggle="tooltip" title="Default tooltip">
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
    <rect width="100%" height="100%" fill="#563d7c"/>
    <circle cx="50" cy="50" r="30" fill="#007bff"/>
  </svg>
</a>
```

Using Bootstrap Tooltips with SVGs is a great way to enhance accessibility and interactivity for icon-based UIs or data visualizations without modifying the structure of your SVGs.

## Usage

The tooltip plugin creates content and markup as needed, and by default places tooltips following their trigger elements.

Trigger the tooltip via JavaScript:

```js
const exampleEl = document.getElementById('example')
const tooltip = new coreui.Tooltip(exampleEl, options)
```

> ##### Overflow `auto` and `scroll`
> 
> When a parent container has `overflow: auto` or `overflow: scroll`, such as with our `.table-responsive`, the tooltip position attempts to adjust automatically while maintaining its original placement. To fix this, set the `boundary` option to any HTMLElement to replace the default value, `'clippingParents'`, like `document.body`:
> 
> ```js
> const tooltip = new coreui.Tooltip('#example', {
> boundary: document.body // or document.querySelector('#boundary')
> })
> ```

### Markup

The markup needed for a tooltip consists solely of a `data` attribute and a `title` on the HTML element you want to display a tooltip. The markup generated for a tooltip is quite simple, although it does require a position, which is set to `top` by default in the plugin.

> ##### Making tooltips work for keyboard and assistive technology users
> 
> Only add tooltips to HTML elements that are inherently keyboard-focusable and interactive, like links or form controls. While it is possible to make arbitrary HTML elements like ``s focusable by using the `tabindex="0"` attribute, doing so may create confusing tab stops on non-interactive elements for keyboard users. Moreover, most assistive technologies typically do not announce tooltips in these cases. Additionally, avoid depending solely on `hover` to trigger your tooltips, as this approach renders them inaccessible for keyboard users.

A shown tooltip can be dismissed by pressing the <kbd>Escape</kbd> key, and a hover- or focus-triggered tooltip stays open while the pointer or focus is over the trigger or the tip itself — so users can reach interactive content inside it, such as a link. It hides when the pointer leaves both. A focus-triggered tooltip also stays open after a press inside it, for example to select its text, and hides on the next click outside or when focus moves elsewhere. Together these satisfy the [WCAG 1.4.13 "Content on Hover or Focus"](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html) success criterion (dismissable, hoverable, persistent).

```html
<!-- HTML to write -->
<a href="#" data-coreui-toggle="tooltip" title="Some tooltip text!">Hover over me</a>

<!-- Generated markup by the plugin -->
<div class="tooltip bs-tooltip-auto" role="tooltip">
  <div class="tooltip-arrow"></div>
  <div class="tooltip-inner">
    Some tooltip text!
  </div>
</div>
```

### Disabled elements

Elements that have the `disabled` attribute are non-interactive, which prevents users from focusing, hovering, or clicking on them to display a tooltip (or popover). To address this, consider triggering the tooltip from a surrounding `<div>` or `<span>`, preferably making it keyboard-focusable by using `tabindex="0"`.

```html
<span class="d-inline-block" tabindex="0" data-coreui-toggle="tooltip" title="Disabled tooltip">
  <button class="btn-solid theme-primary" type="button" disabled>Disabled button</button>
</span>
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-animation="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-custom-class="beautifier"` rather than `data-coreui-customClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

> Please note that for security reasons, the `sanitize`, `sanitizeFn`, and `allowList` options cannot be supplied via data attributes.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | [Default value](https://coreui.io/bootstrap/docs/getting-started/javascript/#sanitizer) | Defines the set of permitted HTML tags and attributes that can safely appear in the tooltip content when HTML rendering is enabled. This helps maintain control over the output and prevent injection of malicious code. |
| `animation` | boolean | `true` | Determines whether the tooltip should fade in and out using a CSS transition. Set to `false` for instant show/hide behavior, which may be preferable for performance-sensitive interfaces — it renders `.tooltip-instant`, the same class you can put in a custom `template`. Retime the fade with `--cui-tooltip-transition-duration` and `--cui-tooltip-transition-timing`. |
| `boundary` | string, element | `'clippingParents'` | Determines the boundary within which the tooltip must remain visible. Can be a specific element or the default `'clippingParents'`. This setting helps avoid unwanted clipping or overflow. For more information refer to Floating UI's [detectOverflow docs](https://floating-ui.com/docs/detectOverflow/#boundary). |
| `container` | string, element, false | `false` | Specifies the parent container in which the tooltip should be inserted. Commonly used value is `'body'`, which helps avoid layout or overflow issues by ensuring the tooltip isn't clipped by parent elements. |
| `customClass` | string, function | `''` | Allows adding one or more custom CSS classes to the tooltip when it's rendered. Accepts a string with class names or a callback function that returns the class string. Useful for styling variants (e.g. light vs dark). |
| `delay` | number, object | `0` | Defines how long (in milliseconds) to wait before showing or hiding the tooltip. A single number applies to both actions, or you can provide an object like `{ show: 500, hide: 200 }` for separate control over each. |
| `fallbackPlacements` | string, array | `['top', 'right', 'bottom', 'left']` | Specifies alternative placements for the tooltip if the preferred one isn't feasible (e.g., due to lack of space). The tooltip will try these placements in order until one fits. For more information refer to Floating UI's [flip docs](https://floating-ui.com/docs/flip/#fallbackplacements). |
| `floatingConfig` | null, object, function | `null` | Allows you to override or extend the default Floating UI configuration used by the tooltip. Can be an object or a function that receives the default config and returns a modified one, giving you full control over tooltip behavior and positioning logic. See Floating UI's [computePosition docs](https://floating-ui.com/docs/computePosition/#options).|
| `html` | boolean | `false` | Enables support for HTML content inside the tooltip. When set to `true`, the `title` attribute may include tags like `<strong>`, `<em>`, or even icons. Be cautious with untrusted content as it increases XSS risk. |
| `offset` | array, string, function | `[0, 6]` | Defines how far the tooltip should be offset from the target element. Use a string like `data-coreui-offset="10,20"` in attributes or pass a function to calculate the offset based on context. Floating UI's offset middleware is used under the hood. |
| `placement` | string, function | `'top'` | Sets the tooltip’s position relative to its target element: `'top'`, `'end'`, `'bottom'`, `'start'` or `'auto'`, plus responsive variants such as `'top md:end'`. `'left'` and `'right'` are the deprecated spellings of `'start'` and `'end'`. With `'auto'` the tooltip reorients itself. You can also pass a function for dynamic placement based on element size or context. |
| `sanitize` | boolean | `true` | Controls whether HTML content in the tooltip should be sanitized before rendering. Strongly recommended to leave enabled unless you’re fully managing the content and trust its source. |
| `sanitizeFn` | null, function | `null` | You can define your own custom sanitization logic by passing a function here. Ideal if you want to use a specialized HTML sanitizer or integrate with existing security tools. If activated `'template'`, `'content'` and `'title'` options will be sanitized. |
| `selector` | string, false | `false` | Used to delegate tooltip activation to child elements within a container. This is particularly useful when you’re dynamically adding elements to the DOM that require tooltips. Note: the `title` attribute itself should not be used as a selector. |
| `template` | string | `'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'` | Provides the HTML structure used to generate the tooltip. You can override it to include custom classes or elements. The `title` content is placed inside `.tooltip-inner`, and `.tooltip-arrow` is the visual pointer. |
| `title` | string, element, function | `''` | The content displayed inside the tooltip. If a value is not provided, the component will fall back to the `title` attribute on the element. You can also provide a function that returns the content dynamically.|
| `trigger` | string | `'hover focus'` | Determines which user interactions will cause the tooltip to show. Options include `click`, `hover`, `focus`, or `manual`. Multiple triggers can be combined using a space-separated string. Use `manual` for full programmatic control. |

> #### Data attributes for individual tooltips
> 
> Options for individual tooltips can alternatively be specified through the use of data attributes, as explained above.

#### Using function with `floatingConfig`

```js
const tooltip = new coreui.Tooltip(element, {
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
| `disable` | Disables the tooltip from being triggered. This includes both manual and automatic triggers until it's enabled again. |
| `dispose` | Completely removes the tooltip instance from the target element. It clears event listeners and internal data. Tooltips created using delegation (e.g., via `selector`) cannot be destroyed on individual children. |
| `enable` | Gives an element’s tooltip the ability to be shown. All tooltips are enabled by default unless manually disabled. |
| `getInstance` | *Static* method that retrieves the current tooltip instance tied to a specific element. Returns `null` if the tooltip has not been initialized. |
| `getOrCreateInstance` | *Static* method that either returns the existing tooltip instance or initializes a new one if none exists. Ensures consistent behavior in dynamic interfaces. |
| `hide` | Hides the tooltip from view when triggered programmatically. Similar to `show`, this method is asynchronous and returns before the hiding animation finishes. **Returns a promise that resolves after the tooltip is hidden** (i.e. after the `hidden.coreui.tooltip` event occurs). |
| `setContent` | Dynamically changes the content of an existing tooltip without reinitializing the instance. Useful for updating text based on user action or application state. |
| `show` | Manually displays the Bootstrap tooltip linked to an element. This method is non-blocking—it returns immediately, even though the tooltip will appear shortly after. If the tooltip’s title is empty, nothing will be shown. **Returns a promise that resolves after the tooltip is shown** (i.e. after the `shown.coreui.tooltip` event occurs) |
| `toggle` | Programmatically shows or hides a tooltip based on its current visibility state. Like `show` and `hide`, this method executes immediately and the visual change happens afterward. **Returns a promise that resolves after the tooltip is shown or hidden** (i.e. after the `shown.coreui.tooltip` or `hidden.coreui.tooltip` event occurs). |
| `toggleEnabled` | Switches the ability for an element’s tooltip to be shown or hidden. |
| `update` | Recalculates and repositions the tooltip, ensuring correct alignment if the DOM has changed (e.g., due to scroll, resize, or dynamic layout updates). |

```js
const tooltip = coreui.Tooltip.getInstance('#example') // Returns a Bootstrap tooltip instance

// setContent example
tooltip.setContent({ '.tooltip-inner': 'another title' })

```

> The `setContent` method accepts an `object` argument, where each property-key is a valid `string` selector within the popover template, and each related property-value can be `string` | `element` | `function` | `null`

### Events

| Event | Description |
| --- | --- |
| `hidden.coreui.tooltip` | Dispatched once the tooltip has been fully removed from view and CSS transitions (if any) have finished. Ideal for cleanup logic or analytics. |
| `hide.coreui.tooltip` | Emitted immediately when the `hide()` method is called. At this point, the tooltip is still visible but is beginning the process of being hidden. |
| `inserted.coreui.tooltip` | Occurs after the tooltip has been injected into the DOM but before it becomes visible. This event gives you access to the generated tooltip element for advanced DOM manipulation. |
| `show.coreui.tooltip` | Triggered right after the `show()` method is invoked. The tooltip is about to become visible, but hasn't been inserted into the DOM yet. You can use this event to perform actions before the tooltip is rendered. |
| `shown.coreui.tooltip` | Fired after the tooltip is fully visible and any CSS transitions (like fade) have completed. Useful for tracking when the user can actually see the Bootstrap tooltip. |

```js
const myTooltipEl = document.getElementById('myTooltip')
const tooltip = coreui.Tooltip.getOrCreateInstance(myTooltipEl)

myTooltipEl.addEventListener('hidden.coreui.tooltip', () => {
  // do something...
})

tooltip.hide()
```

## Customizing

### CSS variables

Bootstrap tooltips utilize local CSS variables on `.tooltip` for improved real-time customization. The values for the CSS variables are configured via Sass, ensuring that Sass customization is still supported as well.

```scss
$tooltip-tokens: defaults(
  (
    --cui-tooltip-zindex: var(--cui-z-tooltip),
    --cui-tooltip-max-width: 200px,
    --cui-tooltip-padding-x: calc(var(--cui-spacer) * .75),
    --cui-tooltip-padding-y: calc(var(--cui-spacer) * .375),
    --cui-tooltip-font-size: var(--cui-font-size-sm),
    --cui-tooltip-color: #{$tooltip-color},
    --cui-tooltip-bg: var(--cui-fg-body),
    --cui-tooltip-border-radius: var(--cui-radius-5),
    --cui-tooltip-opacity: .95,
    --cui-tooltip-arrow-width: .8rem,
    --cui-tooltip-arrow-height: .4rem,
    --cui-tooltip-transition-property: opacity,
    --cui-tooltip-transition-duration: .15s,
    --cui-tooltip-transition-timing: linear,
  ),
  $tooltip-tokens
);
```

### Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

```scss
$tooltip-color:                     var(--cui-bg-body) !default;
```
