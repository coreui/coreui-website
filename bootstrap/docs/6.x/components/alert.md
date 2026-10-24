# Bootstrap 6 Alert

> Bootstrap alerts give contextual feedback information for common user operations. The alert component is delivered with a bunch of usable and adjustable alert messages.

## Default alert

Bootstrap alerts can accommodate text of any length and feature an optional close button. `.alert` on its own is a neutral alert — a bordered surface that inherits the text color of its surroundings. For inline dismissal, utilize the [alerts JavaScript plugin](#dismissing).

```html
<div class="alert" role="alert">
  A simple alert—check it out!
</div>
```

## Theme variants

The color comes from a [`.theme-*` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants), which may sit on the alert or on any element above it.

```html
<div class="alert theme-primary" role="alert">
  Here's a straightforward example of a primary alert—take a look!
</div>
<div class="alert theme-secondary" role="alert">
  Here's a straightforward example of a secondary alert—take a look!
</div>
<div class="alert theme-success" role="alert">
  Here's a straightforward example of a success alert—take a look!
</div>
<div class="alert theme-danger" role="alert">
  Here's a straightforward example of a danger alert—take a look!
</div>
<div class="alert theme-warning" role="alert">
  Here's a straightforward example of a warning alert—take a look!
</div>
<div class="alert theme-info" role="alert">
  Here's a straightforward example of an info alert—take a look!
</div>
```

> ##### Conveying meaning to assistive technologies
> 
> Relying on color to convey meaning creates a visual cue that assistive technologies, like screen readers, cannot perceive. It's essential that any information represented by color is either apparent from the content itself (e.g., the visible text) or supplemented by alternative methods, such as extra text using the `.visually-hidden` class.

## Solid

_Added in 6.0.0._

Add `.alert-solid` for a high-contrast alert. The background takes the theme color and the text takes the color that reads on it, so a yellow alert gets dark text and a dark one gets light text without you picking either.

## Live example

Click the button below to show an alert (initially hidden with inline styles), then dismiss (and destroy) it using the built-in close button.

```html
<div id="liveAlertPlaceholder"></div>
<button type="button" class="btn-solid theme-primary" id="liveAlertBtn">Show alert with message</button>
```

The JavaScript below initiates our live alert demo:

```js
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert theme-${type} fade show" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-coreui-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}
```

## Link color

Utilize the `.alert-link` utility class to instantly create matching colored links within any alert.
```html
<div class="alert theme-primary" role="alert">
  Here's a straightforward example of a primary alert with <a href="#" class="alert-link">an example link</a>. Take a look!
</div>
<div class="alert theme-secondary" role="alert">
  Here's a straightforward example of a secondary alert with <a href="#" class="alert-link">an example link</a>. Take a look!
</div>
<div class="alert theme-success" role="alert">
  Here's a straightforward example of a success alert with <a href="#" class="alert-link">an example link</a>. Take a look!
</div>
<div class="alert theme-danger" role="alert">
  Here's a straightforward example of a danger alert with <a href="#" class="alert-link">an example link</a>. Take a look!
</div>
<div class="alert theme-warning" role="alert">
  Here's a straightforward example of a warning alert with <a href="#" class="alert-link">an example link</a>. Take a look!
</div>
<div class="alert theme-info" role="alert">
  Here's a straightforward example of an info alert with <a href="#" class="alert-link">an example link</a>. Take a look!
</div>
```

## Additional content

Bootstrap alerts can also include additional HTML elements such as headings, paragraphs, and dividers. The alert lays its children out in a row, so wrap them in a [`.vstack`](https://coreui.io/bootstrap/docs/helpers/stacks/) to keep them stacked.

```html
<div class="alert theme-success" role="alert">
  <div class="vstack">
    <h4 class="alert-heading">Great job! </h4>
    <p>Awesome! You've successfully read this crucial alert message. This example text will be slightly longer to demonstrate how spacing in an alert interacts with this type of content.</p>
    <hr>
    <p class="mb-0">Whenever necessary, make sure to use margin utilities to keep everything organized and neat.</p>
  </div>
</div>
```

## Icons

Put an icon straight into the alert — it lays its children out in a row and spaces them with `--cui-alert-gap`, so no flexbox utilities are needed. Use [CoreUI Icons](https://coreui.io/icons/) or any inline SVG.

```html
<div class="alert theme-primary" role="alert">
  <svg class="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
    <rect width="32" height="176" x="240" y="176" fill="var(--ci-primary-color, currentColor)" class="ci-primary"/>
    <rect width="32" height="32" x="240" y="384" fill="var(--ci-primary-color, currentColor)" class="ci-primary"/>
    <path fill="var(--ci-primary-color, currentColor)" d="M274.014,16H237.986L16,445.174V496H496V445.174ZM464,464H48V452.959L256,50.826,464,452.959Z" class="ci-primary"/>
  </svg>
  <div>
    An example alert with an icon
  </div>
</div>
```

Different kinds of alert usually call for different icons. Put the matching SVG straight into each one. To reuse a single icon many times across a page, define it once as a symbol — see [Icons](https://coreui.io/bootstrap/docs/icons/).

```html
<div class="alert theme-primary" role="alert">
  <svg class="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" role="img" aria-label="Info:">
    <rect width="34.924" height="34.924" x="256" y="95.998" fill="var(--ci-primary-color, currentColor)" class="ci-primary"/>
    <path fill="var(--ci-primary-color, currentColor)" d="M16,496H496V16H16ZM48,48H464V464H48Z" class="ci-primary"/>
    <path fill="var(--ci-primary-color, currentColor)" d="M285.313,359.032a18.123,18.123,0,0,1-15.6,8.966,18.061,18.061,0,0,1-17.327-23.157l35.67-121.277A49.577,49.577,0,0,0,194.7,190.572l-11.718,28.234,29.557,12.266,11.718-28.235a17.577,17.577,0,0,1,33.1,11.7l-35.67,121.277A50.061,50.061,0,0,0,269.709,400a50.227,50.227,0,0,0,43.25-24.853l15.1-25.913-27.646-16.115Z" class="ci-primary"/>
  </svg>
  <div>
    A straightforward alert with an icon
  </div>
</div>
<div class="alert theme-success" role="alert">
  <svg class="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" role="img" aria-label="Success:">
    <path fill="var(--ci-primary-color, currentColor)" d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z" class="ci-primary"/>
    <polygon fill="var(--ci-primary-color, currentColor)" points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808" class="ci-primary"/>
  </svg>
  <div>
    A straightforward success alert with an icon
  </div>
</div>
<div class="alert theme-warning" role="alert">
  <svg class="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" role="img" aria-label="Warning:">
    <rect width="32" height="176" x="240" y="176" fill="var(--ci-primary-color, currentColor)" class="ci-primary"/>
    <rect width="32" height="32" x="240" y="384" fill="var(--ci-primary-color, currentColor)" class="ci-primary"/>
    <path fill="var(--ci-primary-color, currentColor)" d="M274.014,16H237.986L16,445.174V496H496V445.174ZM464,464H48V452.959L256,50.826,464,452.959Z" class="ci-primary"/>
  </svg>
  <div>
    A straightforward warning alert with an icon
  </div>
</div>
<div class="alert theme-danger" role="alert">
  <svg class="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" role="img" aria-label="Danger:">
    <rect width="32" height="176" x="240" y="176" fill="var(--ci-primary-color, currentColor)" class="ci-primary"/>
    <rect width="32" height="32" x="240" y="384" fill="var(--ci-primary-color, currentColor)" class="ci-primary"/>
    <path fill="var(--ci-primary-color, currentColor)" d="M274.014,16H237.986L16,445.174V496H496V445.174ZM464,464H48V452.959L256,50.826,464,452.959Z" class="ci-primary"/>
  </svg>
  <div>
    A straightforward danger alert with an icon
  </div>
</div>
```

## Dismissing

Using the JavaScript plugin, you can remove any alert.

- Ensure that you've loaded the Bootstrap alert plugin or the compiled CoreUI JavaScript.
- Add a [close button](https://coreui.io/bootstrap/docs/components/close-button/) as a child of the alert. It is pushed to the end of the alert on its own — the `.alert-dismissible` class is no longer required.
- `.alert-dismissible` no longer carries any styling. Markup that still has it renders the same, so there is nothing to remove, but the close button has to be a direct child of the alert to be pushed to its end — a button nested in a wrapper is laid out by that wrapper.
- On the close button, include the `data-coreui-dismiss="alert"` attribute, which triggers the JavaScript functionality. You must use the `<button>` element with it for proper behavior across all devices.
- Every alert fades out when dismissed — the JavaScript marks it with `.hiding` for the length of the transition, then removes it. Add `.alert-instant` to an alert that should go at once, or retime the fade with `--cui-alert-transition-duration` and `--cui-alert-transition-timing`.
- Add `.fade` and `.show` to an alert you insert into the page at runtime, and it fades **in** as well. An alert that is already in the markup does not need them.
- Add [`.transition-size`](https://coreui.io/bootstrap/docs/customize/transitions/#size-animations) and the alert animates its box, not only its opacity: it collapses as it is dismissed, so the content below rises into its place instead of jumping, and it grows from nothing when you insert it with `.fade` and `.show`. The class needs `interpolate-size`, so in a browser without it the alert fades in place as before, and it clips the alert's content for as long as it is on.

```html
<div class="alert theme-info transition-size" role="alert">
  Dismiss this one and the paragraph below rises into its place.
  <button type="button" class="btn-close" data-coreui-dismiss="alert" aria-label="Close"></button>
</div>
<p class="mb-0">Content below the alert.</p>
```

You can observe this in action with a live demonstration:

```html
<div class="alert theme-warning" role="alert">
  Wow, you might want to take a look at some of the fields listed below.
  <button type="button" class="btn-close" data-coreui-dismiss="alert" aria-label="Close"></button>
</div>
```

> When the Bootstrap alert is dismissed, it is fully removed from the page structure. If a keyboard user closes the alert using the close button, their focus may be unexpectedly lost, and depending on the browser, it might be reset to the beginning of the page or document. Therefore, we recommend implementing additional JavaScript that listens for the `closed.coreui.alert` event and programmatically sets `focus()` to the most suitable location on the page. If you plan to move focus to a typically non-interactive element, ensure you add `tabindex="-1"` to that element.

## JavaScript behavior

### Initialize

Set up elements as Bootstrap alerts

```js
const alertList = document.querySelectorAll('.alert')
const alerts = [...alertList].map(element => new coreui.Alert(element))
```

> To solely dismiss the Bootstrap alert, you do not need to manually initialize the component via the JS API. By using `data-coreui-dismiss="alert"`, the component will initialize automatically and dismiss properly.
> 
> See the [triggers](#triggers) section for more details.

### Triggers

Dismissal can be achieved with the `data` attribute on a button **within the alert** as demonstrated below:

```html
<button type="button" class="btn-close" data-coreui-dismiss="alert" aria-label="Close"></button>
```

**Note that closing an alert will remove it from the DOM.**

### Methods

You can create an alert instance using the alert constructor, for example:

```js
const cAlert = new coreui.Alert('#myAlert')
```

This sets up an alert to listen for click events on descendant elements that have the `data-coreui-dismiss="alert"` attribute. (Not necessary when using the data-api’s auto-initialization.)

| Method | Description |
| --- | --- |
| `close` | Closes an alert by removing it from the DOM. It fades out first unless the alert carries [`.alert-instant`](#dismissing). Returns a promise that resolves once the element is gone, so work that depends on the alert being removed can await it. |
| `dispose` | Destroys an element's alert and removes any stored data associated with the DOM element. |
| `getInstance` | A static method that allows you to retrieve the alert instance linked to a DOM element. For example: `coreui.Alert.getInstance(alert)`. |
| `getOrCreateInstance` | A static method that returns the alert instance associated with a DOM element or creates a new one if it hasn't been initialized. You can use it as follows: `coreui.Alert.getOrCreateInstance(element)`. |

Basic usage:

```js
const alert = coreui.Alert.getOrCreateInstance('#myAlert')
alert.close()
```

### Events

CoreUI for Bootstrap's alert plugin exposes a few events for hooking into alert functionality.

| Event | Description |
| --- | --- |
| `close.coreui.alert` | Triggers immediately when the `close` instance method is invoked. |
| `closed.coreui.alert` | Triggered when the alert has been closed and CSS transitions have finished. |

```js
const myAlert = document.getElementById('myAlert')
myAlert.addEventListener('closed.coreui.alert', event => {
  // do something, for instance, explicitly move focus to the most appropriate element,
  // so it doesn't get lost/reset to the start of the page
  // document.getElementById('...').focus()
})
```

## Deprecated markup

_Deprecated in 6.0.0._

The v5 spelling — `.alert` with a colour modifier — still works and renders identically. Each colour class is generated from the same theme map as the class it replaces, so `.alert-primary` *is* `.alert.theme-primary`. They are removed in v7.

```diff
- <div class="alert alert-success" role="alert">Saved</div>
+ <div class="alert theme-success" role="alert">Saved</div>
```

The rewrite buys two things the modifier cannot. A theme colour set on a wrapper reaches every alert inside it, and a colour of your own works the moment you define its theme tokens, with no Sass to compile.

See the [v6 migration guide](https://coreui.io/bootstrap/docs/migration/v6/) for the full picture.

## Customizing

### CSS variables

Our Bootstrap alerts utilize local CSS variables on `.alert` for improved real-time customization. The values for the CSS variables are set using Sass, ensuring that Sass customization remains supported as well.

```scss
$alert-tokens: defaults(
  (
    --cui-alert-bg: var(--cui-bg-1),
    --cui-alert-padding-x: var(--cui-spacer),
    --cui-alert-padding-y: var(--cui-spacer),
    --cui-alert-gap: var(--cui-spacer-3),
    --cui-alert-margin-bottom: 1rem,
    --cui-alert-color: inherit,
    --cui-alert-border-color: var(--cui-border-color),
    --cui-alert-border-width: var(--cui-border-width),
    --cui-alert-border-radius: var(--cui-radius-7),
    --cui-alert-link-color: inherit,
    --cui-alert-link-font-weight: var(--cui-font-weight-bold),
    --cui-alert-transition-property: opacity,
    --cui-alert-transition-duration: .15s,
    --cui-alert-transition-timing: linear,
    --cui-hr-border-color: var(--cui-theme-border, var(--cui-alert-border-color)),
  ),
  $alert-tokens
);
```

### Sass maps

Each entry in the variants map names the theme role every token reads, so adding a variant takes a map entry rather than a new rule.

```scss
$alert-variants: defaults(
  (
    "solid": (
      "color": "contrast",
      "bg": "bg",
      "border-color": "bg"
    )
  ),
  $alert-variants
);
```

### Sass loops

The loop that turns every entry of the variants map into a `.alert-{variant}` class, re-pointing the alert's tokens at the roles that variant names.

```scss
@each $variant, $properties in $alert-variants {
  .alert-#{$variant} {
    @each $property, $value in $properties {
      @if $value == "transparent" {
        --cui-alert-#{$property}: transparent;
      } @else {
        --cui-alert-#{$property}: var(--cui-theme-#{$value});
      }
    }

    --cui-hr-border-color: var(--cui-theme-border, currentcolor);

    @each $property, $value in $properties {
      @if $property == "bg" {
        background-color: var(--cui-alert-bg);
      } @else {
        #{$property}: var(--cui-alert-#{$property});
      }
    }
  }
}
```

#### Deprecated color classes

_Deprecated in 6.0.0._

The loop that generates the [deprecated color classes](#deprecated-markup), pointing each one at the matching theme color. It lives in the opt-in [`coreui-legacy.css`](https://coreui.io/bootstrap/docs/getting-started/install/#v5-compatibility-css), not in `coreui.css`.

```scss
@each $state in map.keys($theme-colors) {
  .alert-#{$state} {
    @include theme-tokens($state);
  }
}
```
