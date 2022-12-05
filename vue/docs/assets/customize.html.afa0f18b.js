import{_ as r,o,c as l,a as e,d as s,b as i,w as t,F as c,e as n,r as p}from"./app.86ede75a.js";const u={},d=n(`<h2 id="overview" tabindex="-1">Overview <a class="anchor-link" href="#overview" aria-hidden="true">#</a></h2><p>There are multiple ways to customize CoreUI for Vue. Your best path can depend on your project, the complexity of your build tools, the version of CoreUI for Vue you&#39;re using, browser support, and more.</p><p>Our two preferred methods are:</p><ol><li>You can extend our source files.</li><li>You can override CoreUI\u2019s styles.</li></ol><h2 id="file-structure" tabindex="-1">File structure <a class="anchor-link" href="#file-structure" aria-hidden="true">#</a></h2><p>Utilize our source Sass files to take advantage of variables, maps, mixins, and functions to help you build faster and customize your project.</p><p>Whenever possible, avoid modifying CoreUI&#39;s core files. For Sass, that means creating your own stylesheet that imports CoreUI for Vue so you can modify and extend it. Assuming you&#39;re using a package manager like npm, you&#39;ll have a file structure that looks like this:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>your-project/
\u251C\u2500\u2500 ...
\u251C\u2500\u2500 node_modules/
\u2502   \u251C\u2500\u2500 @coreui/coreui
\u2502   \u2502   \u251C\u2500\u2500 scss
\u2502   \u2502   \u2514\u2500\u2500 ...
\u2502   \u2514\u2500\u2500 @coreui/vue
\u2502       \u2514\u2500\u2500 ...
\u251C\u2500\u2500 src
\u2502   \u2514\u2500\u2500 scss
\u2502       \u251C\u2500\u2500 _custom.scss
\u2502       \u251C\u2500\u2500 ...
\u2502       \u251C\u2500\u2500 _variables.scss
\u2502       \u2514\u2500\u2500 ...
\u2514\u2500\u2500 ...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>If you use CoreUI PRO version.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>your-project/
\u251C\u2500\u2500 ...
\u251C\u2500\u2500 node_modules/
\u2502   \u251C\u2500\u2500 @coreui/coreui-pro 
\u2502   \u2502   \u251C\u2500\u2500 scss
\u2502   \u2502   \u2514\u2500\u2500 ...
\u2502   \u2514\u2500\u2500 @coreui/vue-pro
\u2502       \u2514\u2500\u2500 ...
\u251C\u2500\u2500 src
\u2502   \u2514\u2500\u2500 scss
\u2502       \u251C\u2500\u2500 _custom.scss
\u2502       \u251C\u2500\u2500 ...
\u2502       \u251C\u2500\u2500 _variables.scss
\u2502       \u2514\u2500\u2500 ...
\u2514\u2500\u2500 ...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="variable-defaults" tabindex="-1">Variable defaults <a class="anchor-link" href="#variable-defaults" aria-hidden="true">#</a></h2><p>Every Sass variable in CoreUI for Vue includes the <code>!default</code> flag allowing you to override the variable&#39;s default value in your own Sass without modifying CoreUI&#39;s source code. Copy and paste variables as needed, modify their values, and remove the <code>!default</code> flag. If a variable has already been assigned, then it won&#39;t be re-assigned by the default values in CoreUI.</p>`,12),b=e("code",null,"node_modules/@coreui/coreui/scss/_variables.scss",-1),m=e("code",null,"node_modules/@coreui/coreui-pro/scss/_variables.scss",-1),h=e("code",null,"null",-1),v=e("strong",null,"Customizing",-1),f=n(`<p>Here&#39;s an example that changes the <code>background-color</code> and <code>color</code> for the <code>&lt;body&gt;</code> when importing and compiling CoreUI for Vue via npm:</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// _variables.scss</span>

<span class="token comment">// Default variable overrides</span>
<span class="token property"><span class="token variable">$body-bg</span></span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$body-color</span></span><span class="token punctuation">:</span> #111<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="custom-styles-and-overrides" tabindex="-1">Custom styles and overrides <a class="anchor-link" href="#custom-styles-and-overrides" aria-hidden="true">#</a></h2><p>In your <code>custom.scss</code>, you can put custom code for CoreUI&#39;s components or your own styles.</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// _custom.scss</span>

<span class="token comment">// Additional custom code here</span>
<span class="token selector">.custom-component </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #222<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,5);function g(y,_){const a=p("RouterLink");return o(),l(c,null,[d,e("p",null,[s("You will find the complete list of CoreUI's variables in "),b,s(" or in "),m,s(". Some variables are set to "),h,s(", these variables don't output the property unless they are overridden in your configuration. You can also find a specific component variables list in "),v,s(" section ex. "),i(a,{to:"/components/alert.html#customizing"},{default:t(()=>[s("Alerts - Customizing")]),_:1})]),f],64)}var x=r(u,[["render",g],["__file","customize.html.vue"]]);export{x as default};
