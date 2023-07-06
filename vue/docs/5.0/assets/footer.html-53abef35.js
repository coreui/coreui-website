import{_ as r,r as n,o as i,c as u,a as s,b as a,w as t,d as o,e}from"./app-27e1995f.js";const k={},d=s("h2",{id:"examples",tabindex:"-1"},[o("Examples "),s("a",{class:"anchor-link",href:"#examples","aria-hidden":"true"},"#")],-1),h={class:"docs-example rounded-top p-4"},g=s("span",null,"© 2021 creativeLabs.",-1),v=s("span",null,"Powered by",-1),f=e(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFooter</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CLink</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://coreui.io<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>CoreUI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CLink</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token entity named-entity" title="©">&amp;copy;</span> 2021 creativeLabs.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Powered by<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CLink</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://coreui.io<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>CoreUI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CLink</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CFooter</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="customizing" tabindex="-1">Customizing <a class="anchor-link" href="#customizing" aria-hidden="true">#</a></h2><h3 id="css-variables" tabindex="-1">CSS variables <a class="anchor-link" href="#css-variables" aria-hidden="true">#</a></h3><p>Vue footers use local CSS variables on <code>.footer</code> for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.</p>`,4),_=e(`<h4 id="how-to-use-css-variables" tabindex="-1">How to use CSS variables <a class="anchor-link" href="#how-to-use-css-variables" aria-hidden="true">#</a></h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> vars <span class="token operator">=</span> <span class="token punctuation">{</span> 
  <span class="token string-property property">&#39;--my-css-var&#39;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;--my-another-css-var&#39;</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span> 
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token operator">&lt;</span>CFooter <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;vars&quot;</span><span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>CFooter<span class="token operator">&gt;</span>
</code></pre></div><h3 id="sass-variables" tabindex="-1">SASS variables <a class="anchor-link" href="#sass-variables" aria-hidden="true">#</a></h3>`,3),m=e(`<h2 id="api" tabindex="-1">API <a class="anchor-link" href="#api" aria-hidden="true">#</a></h2><h3 id="cfooter" tabindex="-1">CFooter <a class="anchor-link" href="#cfooter" aria-hidden="true">#</a></h3><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CFooter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue&#39;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> CFooter <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue/src/components/footer/CFooter&#39;</span>
</code></pre></div><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>position</strong></td><td>Place footer in non-static positions.</td><td>string</td><td><code>&#39;fixed&#39;</code>, <code>&#39;sticky&#39;</code></td><td>-</td></tr></tbody></table>`,5);function b(C,x){const p=n("CLink"),l=n("CFooter"),c=n("ScssDocs");return i(),u("div",null,[d,s("div",h,[a(l,null,{default:t(()=>[s("div",null,[a(p,{href:"https://coreui.io"},{default:t(()=>[o("CoreUI")]),_:1}),g]),s("div",null,[v,a(p,{href:"https://coreui.io"},{default:t(()=>[o("CoreUI")]),_:1})])]),_:1})]),f,a(c,{file:"_footer.scss",capture:"footer-css-vars"}),_,a(c,{file:"_variables.scss",capture:"footer-variables"}),m])}const S=r(k,[["render",b],["__file","footer.html.vue"]]);export{S as default};
