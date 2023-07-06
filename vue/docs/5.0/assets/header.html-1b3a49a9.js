import{_ as w,r as s,o as x,c as H,a as D,b as a,w as n,e,d as t}from"./app-27e1995f.js";const N={data(){return{visible:!0}}},S=e('<h2 id="example" tabindex="-1">Example <a class="anchor-link" href="#example" aria-hidden="true">#</a></h2><p>Here&#39;s what you need to know before getting started with the header:</p><ul><li>Headers require a wrapping <code>.header</code> with <code>.header-expand{-sm|-md|-lg|-xl|-xxl}</code> for responsive collapsing and <a href="#color-schemes">color scheme</a> classes.</li><li>Headers and their contents are fluid by default. Change the <a href="#containers">container</a> to limit their horizontal width in different ways.</li><li>Use our <a href="https://coreui.io/docs/utilities/spacing%22" target="_blank" rel="noopener noreferrer">spacing</a> and <a href="https://coreui.io/docs/4.0/utilities/flex" target="_blank" rel="noopener noreferrer">flex</a> utility classes for controlling spacing and alignment within headers.</li><li>Headers are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.</li><li>Ensure accessibility by using a <code>&lt;nav&gt;</code> element or, if using a more generic element such as a <code>&lt;div&gt;</code>, add a <code>role=&quot;navigation&quot;</code> to every header to explicitly identify it as a landmark region for users of assistive technologies.</li><li>Indicate the current item by using <code>aria-current=&quot;page&quot;</code> for the current page or <code>aria-current=&quot;true&quot;</code> for the current item in a set.</li></ul><h2 id="supported-content" tabindex="-1">Supported content <a class="anchor-link" href="#supported-content" aria-hidden="true">#</a></h2><p>Headers come with built-in support for a handful of sub-components. Choose from the following as needed:</p><ul><li><code>&lt;CHeaderBrand&gt;</code> for your company, product, or project name.</li><li><code>&lt;CHeaderNav&gt;</code> for a full-height and lightweight navigation (including support for dropdowns).</li><li><code>&lt;CHeaderToggler&gt;</code> for use with our collapse plugin and other <a href="#responsive-behaviors">navigation toggling</a> behaviors.</li><li>Flex and spacing utilities for any form controls and actions.</li><li><code>&lt;CHeaderText&gt;</code> for adding vertically centered strings of text.</li><li><code>&lt;CCollapse class=&quot;header-collapse&quot;&gt;</code> for grouping and hiding header contents by a parent breakpoint.</li></ul><p>Here&#39;s an example of all the sub-components included in a responsive light-themed header that automatically collapses at the <code>lg</code> (large) breakpoint.</p>',7),I={class:"docs-example rounded-top p-4"},j=e(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CHeader</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CContainer</span> <span class="token attr-name">fluid</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CHeaderBrand</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CHeaderBrand</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CHeaderToggler</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible = !visible<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CCollapse</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header-collapse<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CHeaderNav</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CNavItem</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CNavLink</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">active</span><span class="token punctuation">&gt;</span></span>
            Home
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CNavLink</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CNavItem</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CNavItem</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CNavLink</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CNavLink</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CNavItem</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CDropdown</span> <span class="token attr-name">togglerText</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Dropdown<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CDropdownItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Action<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CDropdownItem</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CDropdownItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Another action<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CDropdownItem</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CDropdownItem</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Something else here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CDropdownItem</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CDropdown</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CNavItem</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CNavLink</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>
            Disabled
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CNavLink</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CNavItem</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CHeaderNav</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- &lt;form class=&quot;d-flex&quot;&gt;
        &lt;input class=&quot;form-control me-2&quot; type=&quot;search&quot; placeholder=&quot;Search&quot;&gt;
        &lt;button class=&quot;btn btn-outline-success&quot; type=&quot;submit&quot;&gt;Search&lt;/button&gt;
      &lt;/form&gt; --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CCollapse</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CContainer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CHeader</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> 
        <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="customizing" tabindex="-1">Customizing <a class="anchor-link" href="#customizing" aria-hidden="true">#</a></h2><h3 id="css-variables" tabindex="-1">CSS variables <a class="anchor-link" href="#css-variables" aria-hidden="true">#</a></h3><p>Vue headers use local CSS variables on <code>.header</code> for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.</p>`,4),B=e(`<h4 id="how-to-use-css-variables" tabindex="-1">How to use CSS variables <a class="anchor-link" href="#how-to-use-css-variables" aria-hidden="true">#</a></h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> vars <span class="token operator">=</span> <span class="token punctuation">{</span> 
  <span class="token string-property property">&#39;--my-css-var&#39;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;--my-another-css-var&#39;</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span> 
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token operator">&lt;</span>CHeader <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;vars&quot;</span><span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>CHeader<span class="token operator">&gt;</span>
</code></pre></div><h3 id="sass-variables" tabindex="-1">SASS variables <a class="anchor-link" href="#sass-variables" aria-hidden="true">#</a></h3>`,3),T=e(`<h2 id="api" tabindex="-1">API <a class="anchor-link" href="#api" aria-hidden="true">#</a></h2><h3 id="cheader" tabindex="-1">CHeader <a class="anchor-link" href="#cheader" aria-hidden="true">#</a></h3><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CHeader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue&#39;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> CHeader <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue/src/components/header/CHeader&#39;</span>
</code></pre></div><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>container</strong></td><td>Defines optional container wrapping children elements.</td><td>boolean|string</td><td><code>boolean</code>, <code>&#39;sm&#39;</code>, <code>&#39;md&#39;</code>, <code>&#39;lg&#39;</code>, <code>&#39;xl&#39;</code>, <code>&#39;xxl&#39;</code>, <code>&#39;fluid&#39;</code></td><td>-</td></tr><tr><td><strong>position</strong></td><td>Place header in non-static positions.</td><td>string</td><td><code>&#39;fixed&#39;</code>, <code>&#39;sticky&#39;</code></td><td>-</td></tr></tbody></table><h3 id="cheaderbrand" tabindex="-1">CHeaderBrand <a class="anchor-link" href="#cheaderbrand" aria-hidden="true">#</a></h3><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CHeaderBrand <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue&#39;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> CHeaderBrand <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue/src/components/header/CHeaderBrand&#39;</span>
</code></pre></div><h4 id="props-1" tabindex="-1">Props <a class="anchor-link" href="#props-1" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>component</strong></td><td>Component used for the root node. Either a string to use a HTML element or a component.</td><td>string</td><td>-</td><td>&#39;a&#39;</td></tr></tbody></table><h3 id="cheadernav" tabindex="-1">CHeaderNav <a class="anchor-link" href="#cheadernav" aria-hidden="true">#</a></h3><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CHeaderNav <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue&#39;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> CHeaderNav <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue/src/components/header/CHeaderNav&#39;</span>
</code></pre></div><h4 id="props-2" tabindex="-1">Props <a class="anchor-link" href="#props-2" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>component</strong></td><td>Component used for the root node. Either a string to use a HTML element or a component.</td><td>string</td><td>-</td><td>&#39;ul&#39;</td></tr></tbody></table>`,13);function L(V,r,P,z,o,A){const u=s("CHeaderBrand"),d=s("CHeaderToggler"),p=s("CNavLink"),c=s("CNavItem"),k=s("CDropdownToggle"),l=s("CDropdownItem"),g=s("CDropdownDivider"),h=s("CDropdownMenu"),m=s("CDropdown"),v=s("CHeaderNav"),f=s("CFormInput"),C=s("CButton"),b=s("CForm"),_=s("CCollapse"),q=s("CContainer"),y=s("CHeader"),i=s("ScssDocs");return x(),H("div",null,[S,D("div",I,[a(y,null,{default:n(()=>[a(q,{fluid:""},{default:n(()=>[a(u,{href:"#"},{default:n(()=>[t("Header")]),_:1}),a(d,{onClick:r[0]||(r[0]=E=>o.visible=!o.visible)}),a(_,{class:"header-collapse",visible:o.visible},{default:n(()=>[a(v,null,{default:n(()=>[a(c,null,{default:n(()=>[a(p,{href:"#",active:""},{default:n(()=>[t(" Home ")]),_:1})]),_:1}),a(c,null,{default:n(()=>[a(p,{href:"#"},{default:n(()=>[t("Link")]),_:1})]),_:1}),a(m,{variant:"nav-item"},{default:n(()=>[a(k,{color:"secondary"},{default:n(()=>[t("Dropdown button")]),_:1}),a(h,null,{default:n(()=>[a(l,{href:"#"},{default:n(()=>[t("Action")]),_:1}),a(l,{href:"#"},{default:n(()=>[t("Another action")]),_:1}),a(g),a(l,{href:"#"},{default:n(()=>[t("Something else here")]),_:1})]),_:1})]),_:1}),a(c,null,{default:n(()=>[a(p,{href:"#",disabled:""},{default:n(()=>[t(" Disabled ")]),_:1})]),_:1})]),_:1}),a(b,{class:"d-flex"},{default:n(()=>[a(f,{class:"me-2",type:"search",placeholder:"Search"}),a(C,{type:"submit",color:"success",variant:"outline"},{default:n(()=>[t("Search")]),_:1})]),_:1})]),_:1},8,["visible"])]),_:1})]),_:1})]),j,a(i,{file:"_header.scss",capture:"header-css-vars"}),B,a(i,{file:"_variables.scss",capture:"header-variables"}),T])}const M=w(N,[["render",L],["__file","header.html.vue"]]);export{M as default};
