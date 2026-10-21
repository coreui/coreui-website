# React Date Picker Component Styling

> Learn how to customize the React Date Picker component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

The field is a [`.form-control-group`](https://coreui.io/react/docs/forms/form-control-group/styling/#css-variables) on the element `CDatePicker` renders, so its frame, the cleaner and the toggle read the `--cui-control-*` and `--cui-control-group-*` tokens. Pass them through `style` to restyle one field.

The picker declares its local CSS variables on its panel, `.date-picker-popup`, and the calendar inside it declares its own on `.calendar`. Values are set via Sass, so Sass customization is supported too.

```scss
$date-picker-tokens: defaults(
  (
    --cui-date-picker-ranges-padding-y: .5rem,
    --cui-date-picker-ranges-padding-x: .5rem,
    --cui-date-picker-ranges-gap: .25rem,
    --cui-date-picker-ranges-border-width: var(--cui-border-width),
    --cui-date-picker-ranges-border-color: var(--cui-border-color),
    --cui-date-picker-timepickers-border-width: var(--cui-border-width),
    --cui-date-picker-timepickers-border-color: var(--cui-border-color),
    --cui-date-picker-footer-padding-y: .5rem,
    --cui-date-picker-footer-padding-x: .5rem,
    --cui-date-picker-footer-gap: .5rem,
    --cui-date-picker-footer-border-width: var(--cui-border-width),
    --cui-date-picker-footer-border-color: var(--cui-border-color),
  ),
  $date-picker-tokens
);
```

The time half declares its own on `.date-picker-time-body`, so it can be restyled without touching the panel around it.

```scss
$date-picker-time-tokens: defaults(
  (
    --cui-date-picker-time-body-padding-y: var(--cui-spacer-3),
    --cui-date-picker-time-body-padding-x: var(--cui-spacer-3),
    --cui-date-picker-time-icon-width: 2.5rem,
    --cui-date-picker-time-icon-size: 1rem,
    --cui-date-picker-time-icon-color: var(--cui-fg-3),
    --cui-date-picker-time-select-border-radius: var(--cui-radius-4),
    --cui-date-picker-time-select-font-size: var(--cui-btn-input-sm-font-size),
    --cui-date-picker-time-select-color: var(--cui-btn-input-fg),
    --cui-date-picker-time-select-padding-y: var(--cui-btn-input-sm-padding-y),
    --cui-date-picker-time-select-padding-x: var(--cui-btn-input-sm-padding-x),
    --cui-date-picker-time-select-disabled-color: var(--cui-fg-body),
  ),
  $date-picker-time-tokens
);
```

```scss
$calendar-tokens: defaults(
  (
    --cui-calendar-table-margin: .5rem,
    --cui-calendar-table-cell-size: 2.75rem,
    --cui-calendar-nav-padding-y: .5rem,
    --cui-calendar-nav-padding-x: .5rem,
    --cui-calendar-nav-border-color: var(--cui-border-color),
    --cui-calendar-nav-border: var(--cui-border-width) solid var(--cui-calendar-nav-border-color),
    --cui-calendar-nav-btn-padding-x: .5rem,
    --cui-calendar-nav-btn-padding-y: .25rem,
    --cui-calendar-nav-btn-font-size: var(--cui-font-size-sm),
    --cui-calendar-nav-btn-bg: transparent,
    --cui-calendar-nav-btn-border-width: 1px,
    --cui-calendar-nav-btn-border-color: transparent,
    --cui-calendar-nav-btn-border-radius: var(--cui-radius-4),
    --cui-calendar-nav-btn-hover-bg: transparent,
    --cui-calendar-nav-btn-hover-border-color: transparent,
    --cui-calendar-nav-btn-focus-border-color: transparent,
    --cui-calendar-nav-date-font-weight: 600,
    --cui-calendar-nav-date-color: var(--cui-fg-body),
    --cui-calendar-nav-date-hover-color: var(--cui-primary-base),
    --cui-calendar-nav-icon-width: 1rem,
    --cui-calendar-nav-icon-height: 1rem,
    --cui-calendar-nav-icon-color: var(--cui-fg-3),
    --cui-calendar-nav-icon-hover-color: var(--cui-fg-body),
    --cui-calendar-cell-header-inner-font-weight: 600,
    --cui-calendar-cell-header-inner-color: var(--cui-fg-3),
    --cui-calendar-cell-week-number-font-weight: 600,
    --cui-calendar-cell-week-number-color: var(--cui-fg-2),
    --cui-calendar-cell-border-radius: var(--cui-radius-4),
    --cui-calendar-cell-hover-color: var(--cui-fg-body),
    --cui-calendar-cell-hover-bg: var(--cui-bg-2),
    --cui-calendar-cell-disabled-color: var(--cui-fg-4),
    --cui-calendar-cell-selected-color: var(--cui-primary-contrast),
    --cui-calendar-cell-selected-bg: var(--cui-primary-base),
    --cui-calendar-cell-selected-hover-color: var(--cui-calendar-cell-selected-color),
    --cui-calendar-cell-selected-hover-bg: oklch(from var(--cui-calendar-cell-selected-bg) calc(l * var(--cui-theme-hover-lightness)) calc(c * var(--cui-theme-hover-chroma)) h),
    --cui-calendar-cell-selected-adjacent-color: var(--cui-primary-fg-emphasis),
    --cui-calendar-cell-selected-adjacent-bg: var(--cui-primary-bg-subtle),
    --cui-calendar-cell-selected-adjacent-hover-color: var(--cui-calendar-cell-selected-adjacent-color),
    --cui-calendar-cell-selected-adjacent-hover-bg: var(--cui-primary-bg-muted),
    --cui-calendar-cell-range-bg: var(--cui-primary-bg-subtle),
    --cui-calendar-cell-range-hover-border-color: var(--cui-primary-base),
    --cui-calendar-cell-today-color: var(--cui-danger-base),
  ),
  $calendar-tokens
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

Each part of the panel declares its tokens itself, and the panel is rendered into `document.body` unless `portal` is `false`, so a variable set on `CDatePicker` through `style` styles the field but reaches none of them. Set them with a rule on the part that declares them:

```css
.date-picker-popup {
  --cui-popup-bg: #f8f9fa;
}

.date-picker-popup .calendar {
  --cui-calendar-cell-hover-bg: #e9ecef;
}
```
