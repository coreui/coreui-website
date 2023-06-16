import{_ as r,o as s,c as n,a,b as o,w as p,F as t,d as c,e as i,r as u,f as d,t as h}from"./app.dde7107c.js";const k={},m=a("p",null,"Virtual scrollers work by only rendering the items that are currently visible on the screen, and as the user scrolls through the list, new items are dynamically loaded and added to the view. This helps to reduce the amount of data that needs to be loaded and processed at any given time, which can improve the performance and responsiveness of the UI.",-1),v=a("h2",{id:"virtual-scroll-10000-items",tabindex:"-1"},[c("Virtual scroll (10000 Items) "),a("a",{class:"anchor-link",href:"#virtual-scroll-10000-items","aria-hidden":"true"},"#")],-1),b={class:"docs-example border rounded-top p-4"},g=i(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CVirtualScroller</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>border<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:visibleItems</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in 10000<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Option {{ item }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CVirtualScroller</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="api" tabindex="-1">API <a class="anchor-link" href="#api" aria-hidden="true">#</a></h2><h3 id="cvirtualscroller" tabindex="-1">CVirtualScroller <a class="anchor-link" href="#cvirtualscroller" aria-hidden="true">#</a></h3><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CVirtualScroller <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue&#39;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> CVirtualScroller <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue/src/components/virtual-scroller/CVirtualScroller&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>visible-items</strong></td><td>Amount of visible items</td><td>number</td><td>-</td><td>10</td></tr></tbody></table>`,6);function _(f,x){const e=u("CVirtualScroller");return s(),n(t,null,[m,v,a("div",b,[o(e,{class:"border",visibleItems:20},{default:p(()=>[(s(),n(t,null,d(1e4,l=>a("div",null,"Option "+h(l),1)),64))]),_:1})]),g],64)}var y=r(k,[["render",_],["__file","virtual-scroller.html.vue"]]);export{y as default};
