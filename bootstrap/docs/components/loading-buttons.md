# Bootstrap 5 Loading Buttons

> Bootstrap loading buttons are interactive elements that provide visual feedback to users, indicating that an action is being processed. These buttons typically display a loading spinner or animation.

## Basic example

Create basic Bootstrap Loading Buttons with different styles: primary, outline, and ghost. These buttons show a loading state when clicked.

```html
<button type="button" class="btn btn-primary" data-coreui-timeout="2000" data-coreui-toggle="loading-button">Submit</button>
<button type="button" class="btn btn-outline-primary" data-coreui-toggle="loading-button">Submit</button>
<button type="button" class="btn btn-ghost-primary" data-coreui-toggle="loading-button">Submit</button>
```

## Spinners

### Border

The default option. Use loading buttons with a border spinner to indicate loading status.

```html
<button type="button" class="btn btn-info" data-coreui-toggle="loading-button">Submit</button>
<button type="button" class="btn btn-outline-success" data-coreui-toggle="loading-button">Submit</button>
<button type="button" class="btn btn-ghost-warning" data-coreui-toggle="loading-button">Submit</button>
```

### Grow

Switch to a grow spinner for Bootstrap loading buttons by adding `data-coreui-spinner-type="grow"`.

```html
<button type="button" class="btn btn-info" data-coreui-spinner-type="grow" data-coreui-toggle="loading-button">Submit</button>
<button type="button" class="btn btn-outline-success" data-coreui-spinner-type="grow" data-coreui-toggle="loading-button">Submit</button>
<button type="button" class="btn btn-ghost-warning" data-coreui-spinner-type="grow" data-coreui-toggle="loading-button">Submit</button>
```

## Usage

### Via data attributes

Add `data-coreui-toggle="loading-button"` to a `button` element.

```html
<button type="button" class="btn btn-primary" data-coreui-toggle="loading-button">Submit</button>
```

### Via JavaScript

Call the loading button via JavaScript:

```html
<div class="btn btn-primary btn-loading"></div>
```

```js
const loadingButtonElementList = Array.prototype.slice.call(document.querySelectorAll('.btn-loading'))
const loadingButtonList = loadingButtonElementList.map(loadingButtonEl => {
  return new coreui.LoadingButton(loadingButtonEl)
})
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-animation="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-custom-class="beautifier"` rather than `data-coreui-customClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `disabledOnLoading`| boolean | `false`| Makes button disabled when loading. |
| `spinnerType`| 'border', 'grow' | `'border'`| Sets type of spinner. |
| `timeout`| boolean, number | `false`| Automatically starts loading animation and stops after a determined amount of milliseconds. |

### Methods

| Method | Description |
| --- | --- |
| `start` | Starts loading. |
| `stop` | Stops loading. |
| `dispose` | Destroys an element's loading button. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the loading button instance associated with a DOM element. |

```js
const myBtnLoading = document.getElementById('btn-loading')
const myBtn = new coreui.LoadingButton(myBtnLoading)
myBtn.start()
```

### Events

Loading Button component exposes a few events for hooking into loading button functionality.

| Event | Description |
| --- | --- |
| `start.coreui.loading-button` | Fires immediately when the start method is called. |
| `stop.coreui.loading-button` | Fires immediately when the stop method is called. |

```js
const myBtnLoading = document.getElementById('myBtnLoading')
myBtnLoading.addEventListener('stop.coreui.loading-button', () => {
  // do something...
})
```
