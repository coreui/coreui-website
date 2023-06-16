import{_ as h,r as d,T as q,o as r,c as b,a as o,b as n,w as a,U as k,R as g,V as f,d as s,e,W as u,X as l}from"./app-6965a302.js";const y={data(){return{customPopoverStyle:{"--cui-popover-max-width":"200px","--cui-popover-border-color":"var(--cui-primary)","--cui-popover-header-bg":"var(--cui-primary)","--cui-popover-header-color":"var(--cui-white)","--cui-popover-body-padding-x":"1rem","--cui-popover-body-padding-y":".5rem"}}}},C=o("h2",{id:"example",tabindex:"-1"},[s("Example "),o("a",{class:"anchor-link",href:"#example","aria-hidden":"true"},"#")],-1),_=o("h3",{id:"component",tabindex:"-1"},[s("Component "),o("a",{class:"anchor-link",href:"#component","aria-hidden":"true"},"#")],-1),x={class:"docs-example rounded-top p-4"},P=e(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CPopover</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Popover title<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>And here\\’s some amazing content. It’s very engaging. Right?<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#toggler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ on }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Click to toggle popover<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CPopover</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="directive" tabindex="-1">Directive <a class="anchor-link" href="#directive" aria-hidden="true">#</a></h3>`,2),w={class:"docs-example rounded-top p-4"},B=e(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-c-popover</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{header: &#39;Popover title&#39;, content: &#39;And here\\’s some amazing content. It’s very engaging. Right?&#39;, placement: &#39;right&#39;}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Click to toggle popover<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="four-directions" tabindex="-1">Four directions <a class="anchor-link" href="#four-directions" aria-hidden="true">#</a></h3><p>Four options are available: top, right, bottom, and left aligned. Directions are mirrored when using CoreUI for Vue in RTL.</p><h4 id="component-1" tabindex="-1">Component <a class="anchor-link" href="#component-1" aria-hidden="true">#</a></h4>`,4),S={class:"docs-example rounded-top p-4"},V=e(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CPopover</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#toggler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ on }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Popover on top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CPopover</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CPopover</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#toggler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ on }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Popover on right<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CPopover</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CPopover</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#toggler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ on }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Popover on bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CPopover</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CPopover</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#toggler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ on }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Popover on left<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CPopover</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="directive-1" tabindex="-1">Directive <a class="anchor-link" href="#directive-1" aria-hidden="true">#</a></h4>`,2),D={class:"docs-example rounded-top p-4"},z=e(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-c-popover</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{content: &#39;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#39;, placement: &#39;top&#39;}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Popover on top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-c-popover</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{content: &#39;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#39;, placement: &#39;right&#39;}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Popover on right<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-c-popover</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{content: &#39;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#39;, placement: &#39;bottom&#39;}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Popover on bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-c-popover</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{content: &#39;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#39;, placement: &#39;left&#39;}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Popover on left<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="custom-popovers" tabindex="-1">Custom popovers <a class="anchor-link" href="#custom-popovers" aria-hidden="true">#</a></h3><p>You can customize the appearance of popovers using <a href="#css-variables">CSS variables</a>. We set a custom <code>style</code> to scope our custom appearance and use it to override some of the local CSS variables.</p>`,3),j={class:"docs-example rounded-top p-4"},I=e(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CPopover</span>
    <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>This popover is themed via CSS variables.<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Custom popover<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>customPopoverStyle<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#toggler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ on }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Custom popover<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CPopover</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> 
       <span class="token literal-property property">customPopoverStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;--cui-popover-max-width&#39;</span><span class="token operator">:</span> <span class="token string">&#39;200px&#39;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&#39;--cui-popover-border-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;var(--cui-primary)&#39;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&#39;--cui-popover-header-bg&#39;</span><span class="token operator">:</span> <span class="token string">&#39;var(--cui-primary)&#39;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&#39;--cui-popover-header-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;var(--cui-white)&#39;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&#39;--cui-popover-body-padding-x&#39;</span><span class="token operator">:</span> <span class="token string">&#39;1rem&#39;</span><span class="token punctuation">,</span>
          <span class="token string-property property">&#39;--cui-popover-body-padding-y&#39;</span><span class="token operator">:</span> <span class="token string">&#39;.5rem&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="anchor-link" href="#usage" aria-hidden="true">#</a></h2><h3 id="disabled-elements" tabindex="-1">Disabled elements <a class="anchor-link" href="#disabled-elements" aria-hidden="true">#</a></h3><p>Elements with the disabled attribute aren&#39;t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you&#39;ll want to trigger the popover from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>, ideally made keyboard-focusable using <code>tabindex=&quot;0&quot;</code>.</p><p>For disabled popover triggers, you may also prefer <code>:trigger=&quot;[&#39;hover&#39;, &#39;focus&#39;]&quot;</code> so that the popover appears as immediate visual feedback to your users as they may not expect to click on a disabled element.</p>`,5),T={class:"docs-example rounded-top p-4"},A=e(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CPopover</span>
  <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Disabled popover<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;hover&#39;, &#39;focus&#39;]<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#toggler</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ on }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-inline-block<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>Disabled button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CPopover</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="customizing" tabindex="-1">Customizing <a class="anchor-link" href="#customizing" aria-hidden="true">#</a></h2><h3 id="css-variables" tabindex="-1">CSS variables <a class="anchor-link" href="#css-variables" aria-hidden="true">#</a></h3><p>Vue popovers use local CSS variables on <code>.popover</code> for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.</p>`,4),R=e(`<h4 id="how-to-use-css-variables" tabindex="-1">How to use CSS variables <a class="anchor-link" href="#how-to-use-css-variables" aria-hidden="true">#</a></h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> vars <span class="token operator">=</span> <span class="token punctuation">{</span> 
  <span class="token string-property property">&#39;--my-css-var&#39;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;--my-another-css-var&#39;</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span> 
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token operator">&lt;</span>CPopover <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;vars&quot;</span><span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>CPopover<span class="token operator">&gt;</span>
</code></pre></div><h3 id="sass-variables" tabindex="-1">SASS variables <a class="anchor-link" href="#sass-variables" aria-hidden="true">#</a></h3>`,3),E=e(`<h2 id="api" tabindex="-1">API <a class="anchor-link" href="#api" aria-hidden="true">#</a></h2><h3 id="cpopover" tabindex="-1">CPopover <a class="anchor-link" href="#cpopover" aria-hidden="true">#</a></h3><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CPopover <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue&#39;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> CPopover <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue/src/components/popover/CPopover&#39;</span>
</code></pre></div><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>content</strong></td><td>Content for your component. If you want to pass non-string value please use dedicated slot <code>&lt;template #content&gt;...&lt;/template&gt;</code></td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>offset</strong></td><td>Offset of the popover relative to its target.</td><td>array</td><td>-</td><td>[0, 8]</td></tr><tr><td><strong>placement</strong></td><td>Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.</td><td>Placement</td><td>-</td><td>&#39;top&#39;</td></tr><tr><td><strong>title</strong></td><td>Title for your component. If you want to pass non-string value please use dedicated slot <code>&lt;template #title&gt;...&lt;/template&gt;</code></td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>trigger</strong></td><td>Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.</td><td>string | string[]</td><td><code>&#39;click&#39;</code>, <code>&#39;focus&#39;</code>, <code>&#39;hover&#39;</code></td><td>&#39;click&#39;</td></tr><tr><td><strong>visible</strong></td><td>Toggle the visibility of popover component.</td><td>boolean</td><td>-</td><td>-</td></tr></tbody></table><h4 id="events" tabindex="-1">Events <a class="anchor-link" href="#events" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Event name</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><strong>hide</strong></td><td>Callback fired when the component requests to be hidden.</td><td></td></tr><tr><td><strong>show</strong></td><td>Callback fired when the component requests to be shown.</td><td></td></tr></tbody></table>`,7);function N(F,U,$,H,m,W){const p=d("CButton"),c=d("CPopover"),v=d("ScssDocs"),i=q("c-popover");return r(),b("div",null,[C,_,o("div",x,[n(c,{title:"Popover title",content:"And here\\’s some amazing content. It’s very engaging. Right?",placement:"right"},{toggler:a(({on:t})=>[n(p,u({color:"danger",size:"lg"},l(t)),{default:a(()=>[s("Click to toggle popover")]),_:2},1040)]),_:1})]),P,o("div",w,[k((r(),g(p,{color:"danger",size:"lg"},{default:a(()=>[s("Click to toggle popover")]),_:1})),[[i,{header:"Popover title",content:"And here’s some amazing content. It’s very engaging. Right?",placement:"right"}]])]),B,o("div",S,[n(c,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus",placement:"top"},{toggler:a(({on:t})=>[n(p,u({color:"secondary"},l(t)),{default:a(()=>[s("Popover on top")]),_:2},1040)]),_:1}),n(c,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus",placement:"right"},{toggler:a(({on:t})=>[n(p,u({color:"secondary"},l(t)),{default:a(()=>[s("Popover on right")]),_:2},1040)]),_:1}),n(c,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus",placement:"bottom"},{toggler:a(({on:t})=>[n(p,u({color:"secondary"},l(t)),{default:a(()=>[s("Popover on bottom")]),_:2},1040)]),_:1}),n(c,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus",placement:"left"},{toggler:a(({on:t})=>[n(p,u({color:"secondary"},l(t)),{default:a(()=>[s("Popover on left")]),_:2},1040)]),_:1})]),V,o("div",D,[k((r(),g(p,{color:"secondary"},{default:a(()=>[s("Popover on top")]),_:1})),[[i,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",placement:"top"}]]),k((r(),g(p,{color:"secondary"},{default:a(()=>[s("Popover on right")]),_:1})),[[i,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",placement:"right"}]]),k((r(),g(p,{color:"secondary"},{default:a(()=>[s("Popover on bottom")]),_:1})),[[i,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",placement:"bottom"}]]),k((r(),g(p,{color:"secondary"},{default:a(()=>[s("Popover on left")]),_:1})),[[i,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",placement:"left"}]])]),z,o("div",j,[n(c,{content:"This popover is themed via CSS variables.",placement:"right",title:"Custom popover",style:f(m.customPopoverStyle)},{toggler:a(({on:t})=>[n(p,u({color:"secondary"},l(t)),{default:a(()=>[s("Custom popover")]),_:2},1040)]),_:1},8,["style"])]),I,o("div",T,[n(c,{content:"Disabled popover",placement:"right",trigger:["hover","focus"]},{toggler:a(({on:t})=>[o("span",u({class:"d-inline-block",tabindex:0},l(t,!0)),[n(p,{color:"primary",disabled:""},{default:a(()=>[s("Disabled button")]),_:1})],16)]),_:1})]),A,n(v,{file:"_popover.scss",capture:"popover-css-vars"}),R,n(v,{file:"_variables.scss",capture:"popover-variables"}),E])}const L=h(y,[["render",N],["__file","popover.html.vue"]]);export{L as default};
