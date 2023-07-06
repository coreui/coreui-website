import{_ as n,o as s,c as a,e as p}from"./app-27e1995f.js";const t={},o=p(`<p>CoreUI includes around two dozen <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener noreferrer">CSS custom properties (variables)</a> in its compiled CSS, with dozens more on the way for improved customization on a per-component basis. These provide easy access to commonly used values like our theme colors, breakpoints, and primary font stacks when working in your browser&#39;s inspector, a code sandbox, or general prototyping.</p><p><strong>All our custom properties are prefixed with <code>cui-</code></strong> to avoid conflicts with third party CSS.</p><h2 id="root-variables" tabindex="-1">Root variables <a class="anchor-link" href="#root-variables" aria-hidden="true">#</a></h2><p>Here are the variables we include (note that the <code>:root</code> is required) that can be accessed anywhere CoreUI&#39;s CSS is loaded. They&#39;re located in our <code>_root.scss</code> file and included in our compiled dist files.</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--cui-blue</span><span class="token punctuation">:</span> #0d6efd<span class="token punctuation">;</span>
  <span class="token property">--cui-indigo</span><span class="token punctuation">:</span> #6610f2<span class="token punctuation">;</span>
  <span class="token property">--cui-purple</span><span class="token punctuation">:</span> #6f42c1<span class="token punctuation">;</span>
  <span class="token property">--cui-pink</span><span class="token punctuation">:</span> #d63384<span class="token punctuation">;</span>
  <span class="token property">--cui-red</span><span class="token punctuation">:</span> #dc3545<span class="token punctuation">;</span>
  <span class="token property">--cui-orange</span><span class="token punctuation">:</span> #fd7e14<span class="token punctuation">;</span>
  <span class="token property">--cui-yellow</span><span class="token punctuation">:</span> #ffc107<span class="token punctuation">;</span>
  <span class="token property">--cui-green</span><span class="token punctuation">:</span> #198754<span class="token punctuation">;</span>
  <span class="token property">--cui-teal</span><span class="token punctuation">:</span> #20c997<span class="token punctuation">;</span>
  <span class="token property">--cui-cyan</span><span class="token punctuation">:</span> #0dcaf0<span class="token punctuation">;</span>
  <span class="token property">--cui-black</span><span class="token punctuation">:</span> #000015<span class="token punctuation">;</span>
  <span class="token property">--cui-white</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--cui-gray</span><span class="token punctuation">:</span> #8a93a2<span class="token punctuation">;</span>
  <span class="token property">--cui-gray-dark</span><span class="token punctuation">:</span> #636f83<span class="token punctuation">;</span>
  <span class="token property">--cui-gray-100</span><span class="token punctuation">:</span> #ebedef<span class="token punctuation">;</span>
  <span class="token property">--cui-gray-200</span><span class="token punctuation">:</span> #d8dbe0<span class="token punctuation">;</span>
  <span class="token property">--cui-gray-300</span><span class="token punctuation">:</span> #c4c9d0<span class="token punctuation">;</span>
  <span class="token property">--cui-gray-400</span><span class="token punctuation">:</span> #b1b7c1<span class="token punctuation">;</span>
  <span class="token property">--cui-gray-500</span><span class="token punctuation">:</span> #9da5b1<span class="token punctuation">;</span>
  <span class="token property">--cui-gray-600</span><span class="token punctuation">:</span> #8a93a2<span class="token punctuation">;</span>
  <span class="token property">--cui-gray-700</span><span class="token punctuation">:</span> #768192<span class="token punctuation">;</span>
  <span class="token property">--cui-gray-800</span><span class="token punctuation">:</span> #636f83<span class="token punctuation">;</span>
  <span class="token property">--cui-gray-900</span><span class="token punctuation">:</span> #4f5d73<span class="token punctuation">;</span>
  <span class="token property">--cui-primary</span><span class="token punctuation">:</span> #321fdb<span class="token punctuation">;</span>
  <span class="token property">--cui-secondary</span><span class="token punctuation">:</span> #9da5b1<span class="token punctuation">;</span>
  <span class="token property">--cui-success</span><span class="token punctuation">:</span> #2eb85c<span class="token punctuation">;</span>
  <span class="token property">--cui-info</span><span class="token punctuation">:</span> #39f<span class="token punctuation">;</span>
  <span class="token property">--cui-warning</span><span class="token punctuation">:</span> #f9b115<span class="token punctuation">;</span>
  <span class="token property">--cui-danger</span><span class="token punctuation">:</span> #e55353<span class="token punctuation">;</span>
  <span class="token property">--cui-light</span><span class="token punctuation">:</span> #ebedef<span class="token punctuation">;</span>
  <span class="token property">--cui-dark</span><span class="token punctuation">:</span> #4f5d73<span class="token punctuation">;</span>
  <span class="token property">--cui-primary-rgb</span><span class="token punctuation">:</span> 50<span class="token punctuation">,</span> 31<span class="token punctuation">,</span> 219<span class="token punctuation">;</span>
  <span class="token property">--cui-secondary-rgb</span><span class="token punctuation">:</span> 157<span class="token punctuation">,</span> 165<span class="token punctuation">,</span> 177<span class="token punctuation">;</span>
  <span class="token property">--cui-success-rgb</span><span class="token punctuation">:</span> 46<span class="token punctuation">,</span> 184<span class="token punctuation">,</span> 92<span class="token punctuation">;</span>
  <span class="token property">--cui-info-rgb</span><span class="token punctuation">:</span> 51<span class="token punctuation">,</span> 153<span class="token punctuation">,</span> 255<span class="token punctuation">;</span>
  <span class="token property">--cui-warning-rgb</span><span class="token punctuation">:</span> 249<span class="token punctuation">,</span> 177<span class="token punctuation">,</span> 21<span class="token punctuation">;</span>
  <span class="token property">--cui-danger-rgb</span><span class="token punctuation">:</span> 229<span class="token punctuation">,</span> 83<span class="token punctuation">,</span> 83<span class="token punctuation">;</span>
  <span class="token property">--cui-light-rgb</span><span class="token punctuation">:</span> 235<span class="token punctuation">,</span> 237<span class="token punctuation">,</span> 239<span class="token punctuation">;</span>
  <span class="token property">--cui-dark-rgb</span><span class="token punctuation">:</span> 79<span class="token punctuation">,</span> 93<span class="token punctuation">,</span> 115<span class="token punctuation">;</span>
  <span class="token property">--cui-white-rgb</span><span class="token punctuation">:</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">;</span>
  <span class="token property">--cui-black-rgb</span><span class="token punctuation">:</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 21<span class="token punctuation">;</span>
  <span class="token property">--cui-body-color-rgb</span><span class="token punctuation">:</span> 44<span class="token punctuation">,</span> 56<span class="token punctuation">,</span> 74<span class="token punctuation">;</span>
  <span class="token property">--cui-body-bg-rgb</span><span class="token punctuation">:</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">;</span>
  <span class="token property">--cui-font-sans-serif</span><span class="token punctuation">:</span> system-ui<span class="token punctuation">,</span> -apple-system<span class="token punctuation">,</span> <span class="token string">&quot;Segoe UI&quot;</span><span class="token punctuation">,</span> Roboto<span class="token punctuation">,</span> <span class="token string">&quot;Helvetica Neue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Noto Sans&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Liberation Sans&quot;</span><span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">,</span> <span class="token string">&quot;Apple Color Emoji&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Segoe UI Emoji&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Segoe UI Symbol&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Noto Color Emoji&quot;</span><span class="token punctuation">;</span>
  <span class="token property">--cui-font-monospace</span><span class="token punctuation">:</span> SFMono-Regular<span class="token punctuation">,</span> Menlo<span class="token punctuation">,</span> Monaco<span class="token punctuation">,</span> Consolas<span class="token punctuation">,</span> <span class="token string">&quot;Liberation Mono&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Courier New&quot;</span><span class="token punctuation">,</span> monospace<span class="token punctuation">;</span>
  <span class="token property">--cui-gradient</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>180deg<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--cui-body-font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--cui-font-sans-serif<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--cui-body-font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">--cui-body-font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
  <span class="token property">--cui-body-line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
  <span class="token property">--cui-body-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>44<span class="token punctuation">,</span> 56<span class="token punctuation">,</span> 74<span class="token punctuation">,</span> 0.95<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--cui-body-bg</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--cui-border-width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">--cui-border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">--cui-border-color</span><span class="token punctuation">:</span> #d8dbe0<span class="token punctuation">;</span>
  <span class="token property">--cui-border-color-translucent</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 21<span class="token punctuation">,</span> 0.175<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--cui-border-radius</span><span class="token punctuation">:</span> 0.375rem<span class="token punctuation">;</span>
  <span class="token property">--cui-border-radius-sm</span><span class="token punctuation">:</span> 0.25rem<span class="token punctuation">;</span>
  <span class="token property">--cui-border-radius-lg</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>
  <span class="token property">--cui-border-radius-xl</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">--cui-border-radius-2xl</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
  <span class="token property">--cui-border-radius-pill</span><span class="token punctuation">:</span> 50rem<span class="token punctuation">;</span>
  <span class="token property">--cui-heading-color</span><span class="token punctuation">:</span> unset<span class="token punctuation">;</span>
  <span class="token property">--cui-link-color</span><span class="token punctuation">:</span> #321fdb<span class="token punctuation">;</span>
  <span class="token property">--cui-link-hover-color</span><span class="token punctuation">:</span> #2819af<span class="token punctuation">;</span>
  <span class="token property">--cui-code-color</span><span class="token punctuation">:</span> #d63384<span class="token punctuation">;</span>
  <span class="token property">--cui-highlight-bg</span><span class="token punctuation">:</span> #fff3cd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="component-variables" tabindex="-1">Component variables <a class="anchor-link" href="#component-variables" aria-hidden="true">#</a></h2><p>CoreUI is increasingly making use of custom properties as local variables for various components. This way we reduce our compiled CSS, ensure styles aren&#39;t inherited in places like nested tables, and allow some basic restyling and extending of CoreUI components after Sass compilation.</p><p>Whenever possible, we&#39;ll assign CSS variables at the base component level (e.g., <code>.navbar</code> for navbar and its sub-components). This reduces guessing on where and how to customize, and allows for easy modifications by our team in future updates.</p><h2 id="prefix" tabindex="-1">Prefix <a class="anchor-link" href="#prefix" aria-hidden="true">#</a></h2><p>Most CSS variables use a prefix to avoid collisions with your own codebase. This prefix is in addition to the <code>--</code> that&#39;s required on every CSS variable.</p><p>Customize the prefix via the <code>$prefix</code> Sass variable. By default, it&#39;s set to <code>cui-</code> (note the trailing dash).</p><h2 id="examples" tabindex="-1">Examples <a class="anchor-link" href="#examples" aria-hidden="true">#</a></h2><p>CSS variables offer similar flexibility to Sass&#39;s variables, but without the need for compilation before being served to the browser. For example, here we&#39;re resetting our page&#39;s font and link styles with CSS variables.</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 1rem/1.5 <span class="token function">var</span><span class="token punctuation">(</span>--cui-font-sans-serif<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--cui-blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="grid-breakpoints" tabindex="-1">Grid breakpoints <a class="anchor-link" href="#grid-breakpoints" aria-hidden="true">#</a></h2><p>While we include our grid breakpoints as CSS variables (except for <code>xs</code>), be aware that <strong>CSS variables do not work in media queries</strong>. This is by design in the CSS spec for variables, but may change in coming years with support for <code>env()</code> variables. Check out <a href="https://stackoverflow.com/a/47212942" target="_blank" rel="noopener noreferrer">this Stack Overflow answer</a> for some helpful links. In the mean time, you can use these variables in other CSS situations, as well as in your JavaScript.</p>`,16),e=[o];function c(u,i){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","css-variables.html.vue"]]);export{r as default};
