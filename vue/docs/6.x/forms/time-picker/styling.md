# Vue Time Picker Component Styling

> Learn how to customize the Vue Time Picker component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

The field is a [`.form-control-group`](https://coreui.io/vue/docs/forms/form-control-group/styling/#css-variables) on the picker element itself, so its frame, the cleaner and the toggle read the `--cui-control-*` and `--cui-control-group-*` tokens. `class` and `style` on `<CTimePicker>` land on that element; set the tokens there to restyle one field.

The picker declares its local CSS variables on its panel, `.time-picker-popup`. Values are set via Sass, so Sass customization is supported too.

```scss
$time-picker-tokens: defaults(
  (
    --cui-time-picker-footer-border-width: var(--cui-border-width),
    --cui-time-picker-footer-border-color: var(--cui-border-color),
    --cui-time-picker-footer-padding-y: .5rem,
    --cui-time-picker-footer-padding-x: .5rem,
    --cui-time-picker-footer-gap: .5rem,
    --cui-time-picker-col-border-width: var(--cui-border-width),
    --cui-time-picker-col-border-color: var(--cui-border-color),
    --cui-time-picker-cell-width: 3rem,
    --cui-time-picker-cell-padding-x: .5rem,
    --cui-time-picker-cell-height: 2rem,
    --cui-time-picker-cell-hover-color: var(--cui-fg-body),
    --cui-time-picker-cell-hover-bg: var(--cui-bg-2),
    --cui-time-picker-cell-disabled-color: var(--cui-fg-4),
    --cui-time-picker-cell-selected-color: var(--cui-primary-contrast),
    --cui-time-picker-cell-selected-bg: var(--cui-primary-base),
    --cui-time-picker-cell-selected-hover-color: var(--cui-primary-contrast),
    --cui-time-picker-cell-selected-hover-bg: oklch(from var(--cui-primary-base) calc(l * var(--cui-theme-hover-lightness)) calc(c * var(--cui-theme-hover-chroma)) h),
  ),
  $time-picker-tokens
);
```

The panel is a `.popup`: its surface, border, shadow, stacking and fade come from the tokens every popup panel shares with the other pickers, the combobox, autocomplete and multi select.

```scss
$popup-tokens: () !default;
$popup-tokens: defaults(
  (
    --cui-popup-zindex: var(--cui-z-dropdown),
    --cui-popup-bg: var(--cui-bg-body),
    --cui-popup-border-width: var(--cui-border-width),
    --cui-popup-border-color: var(--cui-border-color),
    --cui-popup-border-radius: var(--cui-radius-7),
    --cui-popup-box-shadow: var(--cui-box-shadow),
    --cui-popup-transition-duration: .15s,
    --cui-popup-transition-timing: var(--cui-transition-timing-overlay),
  ),
  $popup-tokens
);
```

#### How to use CSS variables

Each part of the panel declares its tokens itself, and the panel is rendered into `document.body` unless `portal` is `false`, so a variable set on `CTimePicker` through `style` styles the field but reaches none of them. Set them with a rule on the part that declares them:

```css
.time-picker-popup {
  --cui-popup-bg: #f8f9fa;
  --cui-time-picker-col-border-color: #dee2e6;
}
```
