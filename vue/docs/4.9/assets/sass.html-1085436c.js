import{_ as s,o as n,c as a,e}from"./app-14b4f807.js";const o={},t=e(`<p>Utilize our source Sass files to take advantage of variables, maps, mixins, and more.</p><h2 id="file-structure" tabindex="-1">File structure <a class="anchor-link" href="#file-structure" aria-hidden="true">#</a></h2><p>Whenever possible, avoid modifying CoreUI&#39;s core files. For Sass, that means creating your own stylesheet that imports CoreUI for Bootstrap so you can modify and extend it. Assuming you&#39;re using a package manager like npm, you&#39;ll have a file structure that looks like this:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>your-project/
├── scss
│   └── custom.scss
└── node_modules/
    └── @coreui/coreui
        ├── js
        └── scss
</code></pre></div><p>If you&#39;ve downloaded our source files and aren&#39;t using a package manager, you&#39;ll want to manually create something similar to that structure, keeping CoreUI&#39;s source files separate from your own.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>your-project/
├── scss
│   └── custom.scss
└── @coreui/coreui/
    ├── js
    └── scss
</code></pre></div><h2 id="importing" tabindex="-1">Importing <a class="anchor-link" href="#importing" aria-hidden="true">#</a></h2><p>In your <code>custom.scss</code>, you&#39;ll import CoreUI&#39;s source Sass files. You have two options: include all of CoreUI, or pick the parts you need. We encourage the latter, though be aware there are some requirements and dependencies across our components. You also will need to include some JavaScript for our plugins.</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// Custom.scss</span>
<span class="token comment">// Option A: Include all of CoreUI</span>

<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/coreui&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Then add additional custom code here</span>
</code></pre></div><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// Custom.scss</span>
<span class="token comment">// Option B: Include parts of CoreUI</span>

<span class="token comment">// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/functions&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 2. Include any default variable overrides here</span>

<span class="token comment">// 3. Include remainder of required CoreUI stylesheets</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/variables&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 4. Include any default map overrides here</span>

<span class="token comment">// 5. Include remainder of required parts</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/maps&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/mixins&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/root&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 6. Optionally include any other parts as needed</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/utilities&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/reboot&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/type&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/images&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/containers&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/grid&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/helpers&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 7. Optionally include utilities API last to generate classes based on the Sass map in \`_utilities.scss\`</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/utilities/api&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 8. Add additional custom code here</span>
</code></pre></div><p>With that setup in place, you can begin to modify any of the Sass variables and maps in your <code>custom.scss</code>. You can also start to add parts of CoreUI for Bootstrap under the <code>// Optional</code> section as needed. We suggest using the full import stack from our <code>coreui.scss</code> file as your starting point.</p><h2 id="variable-defaults" tabindex="-1">Variable defaults <a class="anchor-link" href="#variable-defaults" aria-hidden="true">#</a></h2><p>Every Sass variable in CoreUI for Bootstrap includes the <code>!default</code> flag allowing you to override the variable&#39;s default value in your own Sass without modifying CoreUI&#39;s source code. Copy and paste variables as needed, modify their values, and remove the <code>!default</code> flag. If a variable has already been assigned, then it won&#39;t be re-assigned by the default values in Bootstrap.</p><p>You will find the complete list of CoreUI&#39;s variables in <code>@coreui/coreui/scss/_variables.scss</code>. Some variables are set to <code>null</code>, these variables don&#39;t output the property unless they are overridden in your configuration.</p><p>Variable overrides must come after our functions are imported, but before the rest of the imports.</p><p>Here&#39;s an example that changes the <code>background-color</code> and <code>color</code> for the <code>&lt;body&gt;</code> when importing and compiling CoreUI for Bootstrap via npm:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// Required</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/functions&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Default variable overrides</span>
<span class="token property"><span class="token variable">$body-bg</span></span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$body-color</span></span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>

<span class="token comment">// Required</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/variables&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/maps&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/mixins&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/root&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Optional CoreUI components here</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/reboot&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/type&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// etc</span>
</code></pre></div><p>Repeat as necessary for any variable in CoreUI, including the global options below.</p><h2 id="maps-and-loops" tabindex="-1">Maps and loops <a class="anchor-link" href="#maps-and-loops" aria-hidden="true">#</a></h2><p>CoreUI for Bootstrap includes a handful of Sass maps, key value pairs that make it easier to generate families of related CSS. We use Sass maps for our colors, grid breakpoints, and more. Just like Sass variables, all Sass maps include the <code>!default</code> flag and can be overridden and extended.</p><p>Some of our Sass maps are merged into empty ones by default. This is done to allow easy expansion of a given Sass map, but comes at the cost of making <em>removing</em> items from a map slightly more difficult.</p><h3 id="modify-map" tabindex="-1">Modify map <a class="anchor-link" href="#modify-map" aria-hidden="true">#</a></h3><p>All variables in the <code>$theme-colors</code> map are defined as standalone variables. To modify an existing color in our <code>$theme-colors</code> map, add the following to your custom Sass file:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$primary</span></span><span class="token punctuation">:</span> #0074d9<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$danger</span></span><span class="token punctuation">:</span> #ff4136<span class="token punctuation">;</span>
</code></pre></div><p>Later on, these variables are set in CoreUI&#39;s <code>$theme-colors</code> map:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;primary&quot;</span><span class="token punctuation">:</span> <span class="token variable">$primary</span><span class="token punctuation">,</span>
  <span class="token string">&quot;danger&quot;</span><span class="token punctuation">:</span> <span class="token variable">$danger</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="add-to-map" tabindex="-1">Add to map <a class="anchor-link" href="#add-to-map" aria-hidden="true">#</a></h3><p>Add new colors to <code>$theme-colors</code>, or any other map, by creating a new Sass map with your custom values and merging it with the original map. In this case, we&#39;ll create a new <code>$custom-colors</code> map and merge it with <code>$theme-colors</code>.</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// Create your own map</span>
<span class="token property"><span class="token variable">$custom-colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;custom-color&quot;</span><span class="token punctuation">:</span> #900
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Merge the maps</span>
<span class="token property"><span class="token variable">$theme-colors</span></span><span class="token punctuation">:</span> <span class="token function">map-merge</span><span class="token punctuation">(</span><span class="token variable">$theme-colors</span><span class="token punctuation">,</span> <span class="token variable">$custom-colors</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="remove-from-map" tabindex="-1">Remove from map <a class="anchor-link" href="#remove-from-map" aria-hidden="true">#</a></h3><p>To remove colors from <code>$theme-colors</code>, or any other map, use <code>map-remove</code>. Be aware you must insert it between our requirements and options:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// Required</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/functions&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/variables&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/maps&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/mixins&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/root&quot;</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$theme-colors</span></span><span class="token punctuation">:</span> <span class="token function">map-remove</span><span class="token punctuation">(</span><span class="token variable">$theme-colors</span><span class="token punctuation">,</span> <span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;light&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dark&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Optional</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/reboot&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;../node_modules/@coreui/coreui/scss/type&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// etc</span>
</code></pre></div><h2 id="required-keys" tabindex="-1">Required keys <a class="anchor-link" href="#required-keys" aria-hidden="true">#</a></h2><p>CoreUI for Bootstrap assumes the presence of some specific keys within Sass maps as we used and extend these ourselves. As you customize the included maps, you may encounter errors where a specific Sass map&#39;s key is being used.</p><p>For example, we use the <code>primary</code>, <code>success</code>, and <code>danger</code> keys from <code>$theme-colors</code> for links, buttons, and form states. Replacing the values of these keys should present no issues, but removing them may cause Sass compilation issues. In these instances, you&#39;ll need to modify the Sass code that makes use of those values.</p><h2 id="functions" tabindex="-1">Functions <a class="anchor-link" href="#functions" aria-hidden="true">#</a></h2><h3 id="colors" tabindex="-1">Colors <a class="anchor-link" href="#colors" aria-hidden="true">#</a></h3><p>Next to the <a href="https://coreui.io/docs/customize/color#color-sass-maps%22" target="_blank" rel="noopener noreferrer">Sass maps</a> we have, theme colors can also be used as standalone variables, like <code>$primary</code>.</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.custom-element </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$gray-100</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$dark</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>You can lighten or darken colors with CoreUI&#39;s <code>tint-color()</code> and <code>shade-color()</code> functions. These functions will mix colors with black or white, unlike Sass&#39; native <code>lighten()</code> and <code>darken()</code> functions which will change the lightness by a fixed amount, which often doesn&#39;t lead to the desired effect.</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// Tint a color: mix a color with white</span>
<span class="token keyword">@function</span> <span class="token function">tint-color</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$weight</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@return</span> <span class="token function">mix</span><span class="token punctuation">(</span>white<span class="token punctuation">,</span> <span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$weight</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Shade a color: mix a color with black</span>
<span class="token keyword">@function</span> <span class="token function">shade-color</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$weight</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@return</span> <span class="token function">mix</span><span class="token punctuation">(</span>black<span class="token punctuation">,</span> <span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$weight</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Shade the color if the weight is positive, else tint it</span>
<span class="token keyword">@function</span> <span class="token function">shift-color</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$weight</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@return</span> <span class="token function">if</span><span class="token punctuation">(</span><span class="token variable">$weight</span> <span class="token operator">&gt;</span> 0<span class="token punctuation">,</span> <span class="token function">shade-color</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$weight</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">tint-color</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> -<span class="token variable">$weight</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>In practice, you&#39;d call the function and pass in the color and weight parameters.</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.custom-element </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">tint-color</span><span class="token punctuation">(</span><span class="token variable">$primary</span><span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.custom-element-2 </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">shade-color</span><span class="token punctuation">(</span><span class="token variable">$danger</span><span class="token punctuation">,</span> 30%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="color-contrast" tabindex="-1">Color contrast <a class="anchor-link" href="#color-contrast" aria-hidden="true">#</a></h3><p>In order to meet the <a href="https://www.w3.org/TR/WCAG/" target="_blank" rel="noopener noreferrer">Web Content Accessibility Guidelines (WCAG)</a> contrast requirements, authors <strong>must</strong> provide a minimum <a href="https://www.w3.org/TR/WCAG/#contrast-minimum" target="_blank" rel="noopener noreferrer">text color contrast of 4.5:1</a> and a minimum <a href="https://www.w3.org/TR/WCAG/#non-text-contrast" target="_blank" rel="noopener noreferrer">non-text color contrast of 3:1</a>, with very few exceptions.</p><p>An additional function we include in CoreUI for Bootstrap is the color contrast function, <code>color-contrast</code>. It utilizes the <a href="https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests" target="_blank" rel="noopener noreferrer">WCAG 2.0 algorithm</a> for calculating contrast thresholds based on <a href="https://www.w3.org/WAI/GL/wiki/Relative_luminance" target="_blank" rel="noopener noreferrer">relative luminance</a> in a <code>sRGB</code> colorspace to automatically return a light (<code>#fff</code>), dark (<code>#212529</code>) or black (<code>#000</code>) contrast color based on the specified base color. This function is especially useful for mixins or loops where you&#39;re generating multiple classes.</p><p>For example, to generate color swatches from our <code>$theme-colors</code> map:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$color</span>, <span class="token variable">$value</span> in <span class="token variable">$theme-colors</span> </span><span class="token punctuation">{</span>
  <span class="token selector">.swatch-<span class="token variable">#{$color}</span> </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">color-contrast</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>It can also be used for one-off contrast needs:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.custom-element </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">color-contrast</span><span class="token punctuation">(</span>#000<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns \`color: #fff\`</span>
<span class="token punctuation">}</span>
</code></pre></div><p>You can also specify a base color with our color map functions:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.custom-element </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">color-contrast</span><span class="token punctuation">(</span><span class="token variable">$dark</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns \`color: #fff\`</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="escape-svg" tabindex="-1">Escape SVG <a class="anchor-link" href="#escape-svg" aria-hidden="true">#</a></h3><p>We use the <code>escape-svg</code> function to escape the <code>&lt;</code>, <code>&gt;</code> and <code>#</code> characters for SVG background images. When using the <code>escape-svg</code> function, data URIs must be quoted.</p><h3 id="add-and-subtract-functions" tabindex="-1">Add and Subtract functions <a class="anchor-link" href="#add-and-subtract-functions" aria-hidden="true">#</a></h3><p>We use the <code>add</code> and <code>subtract</code> functions to wrap the CSS <code>calc</code> function. The primary purpose of these functions is to avoid errors when a &quot;unitless&quot; <code>0</code> value is passed into a <code>calc</code> expression. Expressions like <code>calc(10px - 0)</code> will return an error in all browsers, despite being mathematically correct.</p><p>Example where the calc is valid:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$border-radius</span></span><span class="token punctuation">:</span> .25rem<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border-width</span></span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>

<span class="token selector">.element </span><span class="token punctuation">{</span>
  <span class="token comment">// Output calc(.25rem - 1px) is valid</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token variable">$border-radius</span> <span class="token operator">-</span> <span class="token variable">$border-width</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.element </span><span class="token punctuation">{</span>
  <span class="token comment">// Output the same calc(.25rem - 1px) as above</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token function">subtract</span><span class="token punctuation">(</span><span class="token variable">$border-radius</span><span class="token punctuation">,</span> <span class="token variable">$border-width</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Example where the calc is invalid:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$border-radius</span></span><span class="token punctuation">:</span> .25rem<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border-width</span></span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>

<span class="token selector">.element </span><span class="token punctuation">{</span>
  <span class="token comment">// Output calc(.25rem - 0) is invalid</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token variable">$border-radius</span> <span class="token operator">-</span> <span class="token variable">$border-width</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.element </span><span class="token punctuation">{</span>
  <span class="token comment">// Output .25rem</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token function">subtract</span><span class="token punctuation">(</span><span class="token variable">$border-radius</span><span class="token punctuation">,</span> <span class="token variable">$border-width</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="mixins" tabindex="-1">Mixins <a class="anchor-link" href="#mixins" aria-hidden="true">#</a></h2><p>Our <code>@coreui/coreui/scss/mixins/</code> directory has a ton of mixins that power parts of CoreUI and can also be used across your own project.</p><h3 id="color-schemes" tabindex="-1">Color schemes <a class="anchor-link" href="#color-schemes" aria-hidden="true">#</a></h3><p>A shorthand mixin for the <code>prefers-color-scheme</code> media query is available with support for <code>light</code>, <code>dark</code>, and custom color schemes.</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">color-scheme</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">prefers-color-scheme</span><span class="token punctuation">:</span> <span class="token variable">#{$name}</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">@content</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.custom-element </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">color-scheme</span><span class="token punctuation">(</span>dark<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Insert dark mode styles here</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">@include</span> <span class="token function">color-scheme</span><span class="token punctuation">(</span>custom-named-scheme<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Insert custom color scheme styles here</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,66),p=[t];function c(r,l){return n(),a("div",null,p)}const u=s(o,[["render",c],["__file","sass.html.vue"]]);export{u as default};
