import{_ as o,r as d,o as i,c as r,a as t,b as n,e,d as s}from"./app-27e1995f.js";const c={},p=e('<h2 id="overview" tabindex="-1">Overview <a class="anchor-link" href="#overview" aria-hidden="true">#</a></h2><p>React smart pagination component consists of button-like styled links, that are arranged side by side in a horizontal list.</p><p>We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. SmartPagination is built with list HTML elements so screen readers can announce the number of available links. SmartPagination also use a wrapping <code>&lt;nav&gt;</code> element to identify it as a navigation section to screen readers and other assistive technologies.</p><p>In addition, as pages likely have more than one such navigation section, SmartPagination provide a descriptive <code>aria-label</code> for the <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code>aria-label=&quot;Search results pages&quot;</code>.???</p>',4),l={class:"docs-example rounded-top p-4"},u=e(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CSmartPagination</span>
  <span class="token attr-name">:activePage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:pages</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pages<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="sizing" tabindex="-1">Sizing <a class="anchor-link" href="#sizing" aria-hidden="true">#</a></h2><p>Fancy larger or smaller pagination? Add <code>size=&quot;lg&quot;</code> or <code>size=&quot;sm&quot;</code> for additional sizes.</p>`,3),g={class:"docs-example rounded-top p-4"},h=t("div",{class:"language-vue","data-ext":"vue"},[t("pre",{class:"language-vue"},[t("code",null,`<CSmartPagination
  :activePage="6"
  :pages="10"
  size="lg"
`)])],-1),k={class:"docs-example rounded-top p-4"},v=t("div",{class:"language-vue","data-ext":"vue"},[t("pre",{class:"language-vue"},[t("code",null,`<CSmartPagination
  :activePage="6"
  :pages="10"
  size="sm"
`)])],-1),m=t("h2",{id:"alignment",tabindex:"-1"},[s("Alignment "),t("a",{class:"anchor-link",href:"#alignment","aria-hidden":"true"},"#")],-1),b=t("p",null,[s("Change the alignment of pagination components with "),t("code",null,'align="start"'),s(", "),t("code",null,'align="center"'),s(" or "),t("code",null,'align="end"'),s(".")],-1),f={class:"docs-example rounded-top p-4"},_=e(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CSmartPagination</span>
  <span class="token attr-name">:activePage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:pages</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,1),q={class:"docs-example rounded-top p-4"},x=e(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CSmartPagination</span>
  <span class="token attr-name">:activePage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:pages</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>end<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="api" tabindex="-1">API <a class="anchor-link" href="#api" aria-hidden="true">#</a></h2><h3 id="csmartpagination" tabindex="-1">CSmartPagination <a class="anchor-link" href="#csmartpagination" aria-hidden="true">#</a></h3><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CSmartPagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue-pro&#39;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> CSmartPagination <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue-pro/src/components/pagination/CSmartPagination&#39;</span>
</code></pre></div><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>align</strong></td><td>Horizontall align<br><code>@default</code> &#39;start&#39;</td><td>string</td><td>-</td><td>&#39;start&#39;</td></tr><tr><td><strong>active-page</strong></td><td>Current page number<br><code>@default</code> 1</td><td>number</td><td>-</td><td>1</td></tr><tr><td><strong>arrows</strong></td><td>Show/hide arrows<br><code>@default</code> true</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>dots</strong></td><td>Show/hide dots<br><code>@default</code> true</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>double-arrows</strong></td><td>Show double arrows buttons<br><code>@default</code> true</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>first-button</strong></td><td>The content of &#39;firstButton&#39; button<br><code>@default</code> &#39;«&#39;</td><td>string</td><td>-</td><td>&#39;«&#39;</td></tr><tr><td><strong>last-button</strong></td><td>The content of &#39;lastButton&#39; button<br><code>@default</code> &#39;»&#39;</td><td>string</td><td>-</td><td>&#39;»&#39;</td></tr><tr><td><strong>limit</strong></td><td>Maximum items number<br><code>@default</code> 5</td><td>number</td><td>-</td><td>5</td></tr><tr><td><strong>next-button</strong></td><td>The content of &#39;nextButton&#39; button<br><code>@default</code> &#39;›&#39;</td><td>string</td><td>-</td><td>&#39;›&#39;</td></tr><tr><td><strong>pages</strong></td><td>Number of pages</td><td>number</td><td>-</td><td>1000</td></tr><tr><td><strong>previous-button</strong></td><td>The content of &#39;previousButton&#39; button<br><code>@default</code> &#39;‹&#39;</td><td>string</td><td>-</td><td>&#39;‹&#39;</td></tr><tr><td><strong>size</strong></td><td>Size of pagination, valid values: &#39;sm&#39;, &#39;lg&#39;</td><td>string</td><td>-</td><td>-</td></tr></tbody></table><h4 id="events" tabindex="-1">Events <a class="anchor-link" href="#events" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Event name</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><strong>active-page-change</strong></td><td>On active page change callback.</td><td></td></tr></tbody></table>`,8);function P(S,w){const a=d("CSmartPagination");return i(),r("div",null,[p,t("div",l,[n(a,{activePage:6,pages:10})]),u,t("div",g,[n(a,{activePage:6,pages:10,size:"lg"})]),h,t("div",k,[n(a,{activePage:6,pages:10,size:"sm"})]),v,m,b,t("div",f,[n(a,{activePage:6,pages:10,align:"center"})]),_,t("div",q,[n(a,{activePage:6,pages:10,align:"end"})]),x])}const z=o(c,[["render",P],["__file","smart-pagination.html.vue"]]);export{z as default};
