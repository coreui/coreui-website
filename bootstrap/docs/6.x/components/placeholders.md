# Bootstrap 6 Placeholder

> Use loading placeholders for your components or pages to indicate something may still be loading.

## About

Bootstrap placeholders can enhance your application's user experience. They're built exclusively with HTML and CSS, so you don't need any JavaScript to create them. However, you'll require some custom JavaScript to toggle their visibility. Their appearance, color, and size can be easily customized using our utility classes.

## Example

In the example below, we use the Bootstrap card component and modify it with placeholders to form a "loading card." The size and proportions remain consistent between the two.

```html
<div class="card">
  <img src="..." class="card-img-top" alt="...">

  <div class="card-body">
    <h5 class="card-title">Bootstrap card title</h5>
    <p class="card-text">Some brief example text to expand on the card title and form most of the card's content.</p>
    <a href="#" class="btn-solid theme-primary">Go somewhere</a>
  </div>
</div>

<div class="card" aria-hidden="true">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title placeholder-wave">
      <span class="placeholder col-6"></span>
    </h5>
    <p class="card-text placeholder-wave">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
    <a class="btn-solid theme-primary disabled placeholder col-6" aria-disabled="true"></a>
  </div>
</div>
```

## How it works

Create placeholders using the `.placeholder` class along with a grid column class (e.g., `.col-6`) to define the `width`. These placeholders can either replace text inside an element or be added as a modifier class to an existing component, which then keeps its own height and corners. A placeholder in text stays a quarter em below the line height, so a heading or a paragraph keeps its height when the text arrives.

To ensure the `height` is maintained, we style `.btn`s with `::before`. This pattern can be expanded for other cases or a `&nbsp;` can be added inside the element to match the height when actual text appears.

```html
<p aria-hidden="true">
  <span class="placeholder col-6"></span>
</p>

<a class="btn-solid theme-primary disabled placeholder col-4" aria-disabled="true"></a>
```

> Using `aria-hidden="true"` simply tells screen readers to ignore the element. The actual *loading* behavior of the placeholder depends on how authors implement and style the placeholder, as well as how they update it. Some JavaScript may be necessary to *toggle* the placeholder's state and notify AT users of the change.

### Width

You can adjust the `width` using grid column classes, width utilities, or inline styles.

```html
<span class="placeholder col-6"></span>
<span class="placeholder w-75"></span>
<span class="placeholder" style="width: 25%;"></span>
```

### Color

By default, the `placeholder` uses `currentColor`, but this can be replaced with a custom color or utility class.

```html
<span class="placeholder col-12"></span>
<span class="placeholder col-12 bg-${c.name}"></span>
```

### Sizing

The size of `.placeholder`s depends on the typographic style of the parent element. Customize them with size modifiers: `.placeholder-lg`, `.placeholder-sm`, or `.placeholder-xs`.

```html
<span class="placeholder col-12 placeholder-lg"></span>
<span class="placeholder col-12"></span>
<span class="placeholder col-12 placeholder-sm"></span>
<span class="placeholder col-12 placeholder-xs"></span>
```

### Animation

Animate placeholders to suggest that content is _actively_ loading. Use `.placeholder-wave` for the default loading animation, a highlight that sweeps across the placeholders, and `.placeholder-pulse` for an opacity pulse. `.placeholder-glow` remains as an alias of `.placeholder-pulse`. Both stop when the user asks for reduced motion.

```html
<p class="placeholder-wave">
  <span class="placeholder col-12"></span>
</p>

<p class="placeholder-pulse">
  <span class="placeholder col-12"></span>
</p>
```

#### Text

`.placeholder-wave` masks whatever it sits on, so it animates text as well, for an inline status while something loads.

```html
<span class="placeholder-wave fg-3">Working on it…</span>
```

## Customizing

### CSS variables

Placeholders use local CSS variables on `.placeholder` and `.placeholder-wave` for real-time customization.

```scss
$placeholder-tokens: defaults(
  (
    --cui-placeholder-opacity-max: .18,
    --cui-placeholder-opacity-min: .1,
  ),
  $placeholder-tokens
);

$placeholder-wave-tokens: defaults(
  (
    --cui-placeholder-wave-opacity-max: 1,
    --cui-placeholder-wave-opacity-min: .4,
  ),
  $placeholder-wave-tokens
);
```

The pulse reads `--cui-placeholder-opacity-max` and `-min` on each `.placeholder`, and the wave reads `--cui-placeholder-wave-opacity-max` and `-min` on `.placeholder-wave`, the brightness of its highlight and of the rest of the placeholder. Lowering a minimum deepens the effect:

```html
<p class="placeholder-pulse">
  <span class="placeholder col-12" style="--cui-placeholder-opacity-min: 0"></span>
</p>
```
