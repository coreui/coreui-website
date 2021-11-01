"use strict";(self.webpackChunk_coreui_vue_docs=self.webpackChunk_coreui_vue_docs||[]).push([[7094],{49709:(t,a,n)=>{n.r(a),n.d(a,{default:()=>v});var s=n(27875);const e=(0,s.uE)('<h2 id="overview" tabindex="-1">Overview <a class="anchor-link" href="#overview" aria-hidden="true">#</a></h2><p>React smart pagination component consists of button-like styled links, that are arranged side by side in a horizontal list.</p><p>We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. SmartPagination is built with list HTML elements so screen readers can announce the number of available links. SmartPagination also use a wrapping <code>&lt;nav&gt;</code> element to identify it as a navigation section to screen readers and other assistive technologies.</p><p>In addition, as pages likely have more than one such navigation section, SmartPagination provide a descriptive <code>aria-label</code> for the <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code>aria-label=&quot;Search results pages&quot;</code>.???</p>',4),o={class:"docs-example border rounded-top p-4"},r=(0,s.uE)('<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CSmartPagination</span>\n  <span class="token attr-name">:activePage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:pages</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pages<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="sizing" tabindex="-1">Sizing <a class="anchor-link" href="#sizing" aria-hidden="true">#</a></h2><p>Fancy larger or smaller pagination? Add <code>size=&quot;lg&quot;</code> or <code>size=&quot;sm&quot;</code> for additional sizes.</p>',3),i={class:"docs-example border rounded-top p-4"},l=(0,s.uE)('<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;CSmartPagination\n  :activePage=&quot;6&quot;\n  :pages=&quot;10&quot;\n  size=&quot;lg&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',1),d={class:"docs-example border rounded-top p-4"},p=(0,s.uE)('<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;CSmartPagination\n  :activePage=&quot;6&quot;\n  :pages=&quot;10&quot;\n  size=&quot;sm&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="alignment" tabindex="-1">Alignment <a class="anchor-link" href="#alignment" aria-hidden="true">#</a></h2><p>Change the alignment of pagination components with <code>align=&quot;start&quot;</code>, <code>align=&quot;center&quot;</code> or <code>align=&quot;end&quot;</code>.</p>',3),c={class:"docs-example border rounded-top p-4"},u=(0,s.uE)('<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CSmartPagination</span>\n  <span class="token attr-name">:activePage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:pages</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',1),g={class:"docs-example border rounded-top p-4"},m=(0,s.uE)('<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CSmartPagination</span>\n  <span class="token attr-name">:activePage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:pages</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>end<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="api" tabindex="-1">API <a class="anchor-link" href="#api" aria-hidden="true">#</a></h2><h3 id="csmartpagination" tabindex="-1">CSmartPagination <a class="anchor-link" href="#csmartpagination" aria-hidden="true">#</a></h3><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CSmartPagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue-pro&#39;</span>\n<span class="token comment">// or</span>\n<span class="token keyword">import</span> CSmartPagination <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue-pro/src/components/pagination/CSmartPagination&#39;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>align</strong></td><td>Horizontall align<br><code>@default</code> &#39;start&#39;</td><td>string</td><td>-</td><td>&#39;start&#39;</td></tr><tr><td><strong>active-page</strong></td><td>Current page number<br><code>@default</code> 1</td><td>number</td><td>-</td><td>1</td></tr><tr><td><strong>arrows</strong></td><td>Show/hide arrows<br><code>@default</code> true</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>dots</strong></td><td>Show/hide dots<br><code>@default</code> true</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>double-arrows</strong></td><td>Show double arrows buttons<br><code>@default</code> true</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>first-button</strong></td><td>The content of &#39;firstButton&#39; button<br><code>@default</code> &#39;«&#39;</td><td>string</td><td>-</td><td>&#39;«&#39;</td></tr><tr><td><strong>last-button</strong></td><td>The content of &#39;lastButton&#39; button<br><code>@default</code> &#39;»&#39;</td><td>string</td><td>-</td><td>&#39;»&#39;</td></tr><tr><td><strong>limit</strong></td><td>Maximum items number<br><code>@default</code> 5</td><td>number</td><td>-</td><td>5</td></tr><tr><td><strong>next-button</strong></td><td>The content of &#39;nextButton&#39; button<br><code>@default</code> &#39;›&#39;</td><td>string</td><td>-</td><td>&#39;›&#39;</td></tr><tr><td><strong>pages</strong></td><td>Number of pages</td><td>number</td><td>-</td><td>1000</td></tr><tr><td><strong>previous-button</strong></td><td>The content of &#39;previousButton&#39; button<br><code>@default</code> &#39;‹&#39;</td><td>string</td><td>-</td><td>&#39;‹&#39;</td></tr><tr><td><strong>size</strong></td><td>Size of pagination, valid values: &#39;sm&#39;, &#39;lg&#39;</td><td>string</td><td>-</td><td>-</td></tr></tbody></table><h4 id="events" tabindex="-1">Events <a class="anchor-link" href="#events" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Event name</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><strong>active-page-change</strong></td><td>On active page change callback.</td><td></td></tr></tbody></table>',8),b={},v=(0,n(94407).Z)(b,[["render",function(t,a){const n=(0,s.up)("CSmartPagination");return(0,s.wg)(),(0,s.iD)(s.HY,null,[e,(0,s._)("div",o,[(0,s._)("p",null,[(0,s.Wm)(n,{activePage:6,pages:10})])]),r,(0,s._)("div",i,[(0,s._)("p",null,[(0,s.Wm)(n,{activePage:6,pages:10,size:"lg"})])]),l,(0,s._)("div",d,[(0,s._)("p",null,[(0,s.Wm)(n,{activePage:6,pages:10,size:"sm"})])]),p,(0,s._)("div",c,[(0,s._)("p",null,[(0,s.Wm)(n,{activePage:6,pages:10,align:"center"})])]),u,(0,s._)("div",g,[(0,s._)("p",null,[(0,s.Wm)(n,{activePage:6,pages:10,align:"end"})])]),m],64)}]])},54283:(t,a,n)=>{n.r(a),n.d(a,{data:()=>s});const s={key:"v-7941c38a",path:"/components/smart-pagination.html",title:"",lang:"en-US",frontmatter:{name:"Smart Pagination",description:"Documentation and examples for showing smart pagination to indicate a series of related content exists across multiple pages."},excerpt:"",headers:[{level:2,title:"Overview",slug:"overview",children:[]},{level:2,title:"Sizing",slug:"sizing",children:[]},{level:2,title:"Alignment",slug:"alignment",children:[]},{level:2,title:"API",slug:"api",children:[{level:3,title:"CSmartPagination",slug:"csmartpagination",children:[]}]}],filePathRelative:"components/smart-pagination.md",git:{updatedTime:1635345234e3,contributors:[{name:"Łukasz Holeczek",email:"lukasz@holeczek.pl",commits:1}]}}}}]);