# React Form Validation Styling

> Learn how to customize the React form validation with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

CoreUI for React components use local CSS variables for validation for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-form-valid-color: #{$form-valid-color};
--cui-form-valid-border-color: #{$form-valid-border-color};
--cui-form-invalid-color: #{$form-invalid-color};
--cui-form-invalid-border-color: #{$form-invalid-border-color};
```

These variables are also color mode adaptive, meaning they change color while in dark mode.

### SASS variables

```scss
$form-feedback-margin-top:          $form-text-margin-top !default;
$form-feedback-font-size:           $form-text-font-size !default;
$form-feedback-font-style:          $form-text-font-style !default;
$form-feedback-valid-color:         $success !default;
$form-feedback-invalid-color:       $danger !default;

$form-feedback-icon-valid-color:    $form-feedback-valid-color !default;
$form-feedback-icon-valid:          url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/></svg>") !default;
$form-feedback-icon-invalid-color:  $form-feedback-invalid-color !default;
$form-feedback-icon-invalid:        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='#{$form-feedback-icon-invalid-color}'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='#{$form-feedback-icon-invalid-color}' stroke='none'/></svg>") !default;
```

```scss
$form-valid-color:                  $form-feedback-valid-color !default;
$form-valid-border-color:           $form-feedback-valid-color !default;
$form-invalid-color:                $form-feedback-invalid-color !default;
$form-invalid-border-color:         $form-feedback-invalid-color !default;
```

```scss
$form-valid-color-dark:             $green-300 !default;
$form-valid-border-color-dark:      $green-300 !default;
$form-invalid-color-dark:           $red-300 !default;
$form-invalid-border-color-dark:    $red-300 !default;
```
