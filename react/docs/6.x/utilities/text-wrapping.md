# React Text wrapping Utilities

> Control how text wraps, overflows, and breaks inside its container.

## Wrapping

Wrap text with a `.text-wrap` class.

```html
<div className="badge text-bg-primary text-wrap" style={{ width: '6rem' }}>
  This text should wrap.
</div>
```

Prevent text from wrapping with a `.text-nowrap` class.

```html
<div className="text-nowrap bg-4 border" style={{ width: '8rem' }}>
  This text should overflow the parent.
</div>
```

## Balance and pretty

`.text-balance` evens out the line lengths of short runs of text — headings, teasers — so no line is left with a lone word. `.text-pretty` asks the browser for better-looking wrapping of body text, at some rendering cost.

```html
<h4 className="text-balance bg-4 border" style={{ width: '15rem' }}>A heading balanced across its lines</h4>
<p className="text-pretty bg-4 border" style={{ width: '15rem' }}>A longer run of body text the browser wraps with fewer awkward line endings than the default.</p>
```

## Word break

Prevent long strings of text from breaking your components' layout by using `.text-break` to set `word-wrap: break-word` and `word-break: break-word`. We use `word-wrap` instead of the more common `overflow-wrap` for wider browser support, and add the deprecated `word-break: break-word` to avoid issues with flex containers.

```html
<p className="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
```

> Note that [breaking words isn't possible in Arabic](https://rtlstyling.com/posts/rtl-styling#3.-line-break), which is the most used RTL language. Therefore `.text-break` is removed from our RTL compiled CSS.

## Customizing

### Sass variables

Text wrapping utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/react/docs/utilities/api/#using-the-api)

```scss
"white-space": (
  property: white-space,
  class: text,
  values: (
    wrap: normal,
    nowrap: nowrap,
  )
),
"word-wrap": (
  property: word-wrap word-break,
  class: text,
  values: (break: break-word),
),
"text-wrap": (
  property: text-wrap,
  class: text,
  values: balance pretty,
),
```
