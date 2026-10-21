# Bootstrap 6 User Select

> Change the way in which the content is selected when the user interacts with it.

## Text selection

Change the way in which the content is selected when the user interacts with it.

```html
<p class="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
<p class="user-select-auto">This paragraph has default select behavior.</p>
<p class="user-select-text">This paragraph is selectable even where an ancestor disables selection.</p>
<p class="user-select-none">This paragraph will not be selectable when clicked by the user.</p>
```

`.user-select-none` hides the text from the selection, not from the accessibility tree — a screen reader still reads it, and it is still copied when the user selects a surrounding block in some browsers. Use it for decorative or duplicated text, not to protect content.

## Customizing

### Utilities API

User select utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
"user-select": (
  property: user-select,
  values: all auto text none
),
```
