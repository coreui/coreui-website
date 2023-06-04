import{_ as e,o as s,c as a,e as o}from"./app-eccc9a5e.js";const n={},t=o(`<h2 id="overview" tabindex="-1">Overview <a class="anchor-link" href="#overview" aria-hidden="true">#</a></h2><p>There are multiple ways to customize CoreUI for Vue. Your best path can depend on your project, the complexity of your build tools, the version of CoreUI for Vue you&#39;re using, browser support, and more.</p><p>Our two preferred methods are:</p><ol><li>You can extend our source files.</li><li>You can override CoreUI’s styles.</li></ol><h2 id="file-structure" tabindex="-1">File structure <a class="anchor-link" href="#file-structure" aria-hidden="true">#</a></h2><p>Utilize our source Sass files to take advantage of variables, maps, mixins, and functions to help you build faster and customize your project.</p><p>Whenever possible, avoid modifying CoreUI&#39;s core files. For Sass, that means creating your own stylesheet that imports CoreUI for Vue so you can modify and extend it. Assuming you&#39;re using a package manager like npm, you&#39;ll have a file structure that looks like this:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>your-project/
├── ...
├── node_modules/
│   ├── @coreui/coreui
│   │   ├── scss
│   │   └── ...
│   └── @coreui/vue
│       └── ...
├── src
│   └── scss
│       ├── _custom.scss
│       ├── ...
│       ├── _variables.scss
│       └── ...
└── ...
</code></pre></div><h2 id="variable-defaults" tabindex="-1">Variable defaults <a class="anchor-link" href="#variable-defaults" aria-hidden="true">#</a></h2><p>Every Sass variable in CoreUI for Vue includes the <code>!default</code> flag allowing you to override the variable&#39;s default value in your own Sass without modifying CoreUI&#39;s source code. Copy and paste variables as needed, modify their values, and remove the <code>!default</code> flag. If a variable has already been assigned, then it won&#39;t be re-assigned by the default values in CoreUI.</p><p>You will find the complete list of CoreUI&#39;s variables in <code>node_modules/@coreui/coreui/scss/_variables.scss</code>. Some variables are set to <code>null</code>, these variables don&#39;t output the property unless they are overridden in your configuration. You can also find a specific component variables list in <strong>Customizing</strong> section.</p><p>Here&#39;s an example that changes the <code>background-color</code> and <code>color</code> for the <code>&lt;body&gt;</code> when importing and compiling CoreUI for Vue via npm:</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// _variables.scss</span>

<span class="token comment">// Default variable overrides</span>
<span class="token property"><span class="token variable">$body-bg</span></span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$body-color</span></span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
</code></pre></div><h2 id="custom-styles-and-overrides" tabindex="-1">Custom styles and overrides <a class="anchor-link" href="#custom-styles-and-overrides" aria-hidden="true">#</a></h2><p>In your <code>custom.scss</code>, you can put custom code for CoreUI&#39;s components or your own styles.</p><div class="language-scss" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// _custom.scss</span>

<span class="token comment">// Additional custom code here</span>
<span class="token selector">.custom-component </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #222<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,16),r=[t];function c(i,l){return s(),a("div",null,r)}const d=e(n,[["render",c],["__file","customize.html.vue"]]);export{d as default};
