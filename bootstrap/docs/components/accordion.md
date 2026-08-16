# Bootstrap 5 Accordion

> Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.

## How it works

The accordion uses [collapse](https://coreui.io/bootstrap/docs/components/collapse/) internally to make it collapsible.

> This component's animation effect relies on the `prefers-reduced-motion` media query. For more information, refer to the [reduced motion section of our accessibility documentation](https://coreui.io/bootstrap/docs/getting-started/accessibility/#reduced-motion).

Click the accordions below to expand/collapse the accordion content.

To render an accordion that's expanded by default:
- add the `.show` class on the `.accordion-collapse` element.
- drop the `.collapsed` class from the `.accordion-button` element and set its `aria-expanded` attribute to `true`.

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-coreui-toggle="collapse" data-coreui-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-coreui-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-coreui-toggle="collapse" data-coreui-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-coreui-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-coreui-toggle="collapse" data-coreui-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-coreui-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
```

### Flush

Add `.accordion-flush` to remove the default `background-color`, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.

```html
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-coreui-toggle="collapse" data-coreui-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-coreui-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-coreui-toggle="collapse" data-coreui-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-coreui-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-coreui-toggle="collapse" data-coreui-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-coreui-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
```

### Always open

Omit the `data-coreui-parent` attribute on each `.accordion-collapse` to make accordion items stay open when another item is opened.

```html
<div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-coreui-toggle="collapse" data-coreui-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-coreui-toggle="collapse" data-coreui-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-coreui-toggle="collapse" data-coreui-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
```

## Accessibility

Please read the [collapse accessibility section](https://coreui.io/bootstrap/docs/components/collapse/#accessibility) for more information.

## Customizing

### CSS variables

Accordions use local CSS variables on .accordion for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-accordion-color: #{$accordion-color};
--cui-accordion-bg: #{$accordion-bg};
--cui-accordion-transition: #{$accordion-transition};
--cui-accordion-border-color: #{$accordion-border-color};
--cui-accordion-border-width: #{$accordion-border-width};
--cui-accordion-border-radius: #{$accordion-border-radius};
--cui-accordion-inner-border-radius: #{$accordion-inner-border-radius};
--cui-accordion-btn-padding-x: #{$accordion-button-padding-x};
--cui-accordion-btn-padding-y: #{$accordion-button-padding-y};
--cui-accordion-btn-color: #{$accordion-button-color};
--cui-accordion-btn-bg: #{$accordion-button-bg};
--cui-accordion-btn-icon: #{escape-svg($accordion-button-icon)};
--cui-accordion-btn-icon-width: #{$accordion-icon-width};
--cui-accordion-btn-icon-transform: #{$accordion-icon-transform};
--cui-accordion-btn-icon-transition: #{$accordion-icon-transition};
--cui-accordion-btn-active-icon: #{escape-svg($accordion-button-active-icon)};
--cui-accordion-btn-focus-box-shadow: #{$accordion-button-focus-box-shadow};
--cui-accordion-body-padding-x: #{$accordion-body-padding-x};
--cui-accordion-body-padding-y: #{$accordion-body-padding-y};
--cui-accordion-active-color: #{$accordion-button-active-color};
--cui-accordion-active-bg: #{$accordion-button-active-bg};
```

### SASS variables

```scss
$accordion-padding-y:                     1rem !default;
$accordion-padding-x:                     1.25rem !default;
$accordion-color:                         var(--cui-body-color) !default;
$accordion-bg:                            var(--cui-body-bg) !default;
$accordion-border-width:                  var(--cui-border-width) !default;
$accordion-border-color:                  var(--cui-border-color) !default;
$accordion-border-radius:                 var(--cui-border-radius) !default;
$accordion-inner-border-radius:           subtract($accordion-border-radius, $accordion-border-width) !default;

$accordion-body-padding-y:                $accordion-padding-y !default;
$accordion-body-padding-x:                $accordion-padding-x !default;

$accordion-button-padding-y:              $accordion-padding-y !default;
$accordion-button-padding-x:              $accordion-padding-x !default;
$accordion-button-color:                  var(--cui-body-color) !default;
$accordion-button-bg:                     var(--cui-accordion-bg) !default;
$accordion-transition:                    $btn-transition, border-radius .15s ease !default;
$accordion-button-active-bg:              var(--cui-primary-bg-subtle) !default;
$accordion-button-active-color:           var(--cui-primary-text-emphasis) !default;

// fusv-disable
$accordion-button-focus-border-color:     $input-focus-border-color !default; // Deprecated in v5.0.0
// fusv-enable
$accordion-button-focus-box-shadow:       $btn-focus-box-shadow !default;

$accordion-icon-width:                    1.25rem !default;
$accordion-icon-color:                    $body-color !default;
$accordion-icon-active-color:             $primary-text-emphasis !default;
$accordion-icon-transition:               transform .2s ease-in-out !default;
$accordion-icon-transform:                rotate(-180deg) !default;

$accordion-button-icon:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='#{$accordion-icon-color}' stroke-linecap='round' stroke-linejoin='round'><path d='m2 5 6 6 6-6'/></svg>") !default;
$accordion-button-active-icon:  url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='#{$accordion-icon-active-color}' stroke-linecap='round' stroke-linejoin='round'><path d='m2 5 6 6 6-6'/></svg>") !default;
```
