"use strict";(self.webpackChunk_coreui_vue_pro=self.webpackChunk_coreui_vue_pro||[]).push([[2028],{793:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-d35ebbe8",path:"/components/collapse.html",title:"Vue Collapse Component",lang:"en-US",frontmatter:{title:"Vue Collapse Component",name:"Collapse",description:"Vue collapse component toggles the visibility of content across your project with a few classes and some scripts. Useful for a large amount of content."},excerpt:"",headers:[{level:2,title:"How it works",slug:"how-it-works",children:[]},{level:2,title:"Example",slug:"example",children:[]},{level:2,title:"Multiple targets",slug:"multiple-targets",children:[]},{level:2,title:"API",slug:"api",children:[{level:3,title:"CCollapse",slug:"ccollapse",children:[]}]}],filePathRelative:"components/collapse.md",git:{updatedTime:1630266473e3,contributors:[{name:"Łukasz Holeczek",email:"lukasz@holeczek.pl",commits:1}]}}},5865:(n,a,s)=>{s.r(a),s.d(a,{default:()=>h});var t=s(6252);const p=(0,t.uE)('<h2 id="how-it-works" tabindex="-1">How it works <a class="anchor-link" href="#how-it-works" aria-hidden="true">#</a></h2><p>The collapse component is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the <code>height</code> from its current value to <code>0</code>. Given how CSS handles animations, you cannot use <code>padding</code> on a <code>.collapse</code> element. Instead, use the class as an independent wrapping element.</p><h2 id="example" tabindex="-1">Example <a class="anchor-link" href="#example" aria-hidden="true">#</a></h2><p>You can use a link or a button component.</p>',4),e={class:"docs-example border rounded-top p-4"},l=(0,t.Uk)("Link"),o=(0,t.Uk)("Button"),c=(0,t.Uk)(" Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. "),u=(0,t.uE)('<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible = !visible<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible = !visible<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CCollapse</span> <span class="token attr-name">:visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CCard</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mt-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CCardBody</span><span class="token punctuation">&gt;</span></span>\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson\n        ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt\n        sapiente ea proident.\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CCardBody</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CCard</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CCollapse</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span> \n        visible<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="multiple-targets" tabindex="-1">Multiple targets <a class="anchor-link" href="#multiple-targets" aria-hidden="true">#</a></h2><p>A <code>&lt;CButton&gt;</code> can show and hide multiple elements.</p>',3),i={class:"docs-example border rounded-top p-4"},r=(0,t.Uk)("Toggle first element"),k=(0,t.Uk)("Toggle second element"),b=(0,t.Uk)(" Toggle both elements "),m=(0,t.Uk)(" Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. "),d=(0,t.Uk)(" Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. "),g=(0,t.uE)('<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visibleA = !visibleA<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Toggle first element<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visibleB = !visibleB<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Toggle second element<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CButton</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>() =&gt; {\n    visibleA = !visibleA\n    visibleB = !visibleB\n  }<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">&gt;</span></span>\n    Toggle both elements\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CButton</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CRow</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CCol</span> <span class="token attr-name">xs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CCollapse</span> <span class="token attr-name">:visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visibleA<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CCard</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mt-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CCardBody</span><span class="token punctuation">&gt;</span></span>\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n            richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson\n            cred nesciunt sapiente ea proident.\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CCardBody</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CCard</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CCollapse</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CCol</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CCol</span> <span class="token attr-name">xs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CCollapse</span> <span class="token attr-name">:visible</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visibleB<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CCard</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mt-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CCardBody</span><span class="token punctuation">&gt;</span></span>\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n            richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson\n            cred nesciunt sapiente ea proident.\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CCardBody</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CCard</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CCollapse</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CCol</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CRow</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>  \n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span> \n        visibleA<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        visibleB<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="api" tabindex="-1">API <a class="anchor-link" href="#api" aria-hidden="true">#</a></h2><h3 id="ccollapse" tabindex="-1">CCollapse <a class="anchor-link" href="#ccollapse" aria-hidden="true">#</a></h3><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><code>visible</code></td><td>Toggle the visibility of component.</td><td>boolean</td><td>-</td><td></td></tr></tbody></table><hr>',6),h={data:()=>({visible:!1,visibleA:!1,visibleB:!1}),render:function(n,a,s,h,v,C){const f=(0,t.up)("CButton"),q=(0,t.up)("CCardBody"),w=(0,t.up)("CCard"),y=(0,t.up)("CCollapse"),B=(0,t.up)("CCol"),_=(0,t.up)("CRow");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("div",e,[(0,t.Wm)(f,{color:"primary",href:"#",onClick:a[0]||(a[0]=n=>v.visible=!v.visible)},{default:(0,t.w5)((()=>[l])),_:1}),(0,t.Wm)(f,{color:"primary",onClick:a[1]||(a[1]=n=>v.visible=!v.visible)},{default:(0,t.w5)((()=>[o])),_:1}),(0,t.Wm)(y,{visible:v.visible},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{class:"mt-3"},{default:(0,t.w5)((()=>[(0,t.Wm)(q,null,{default:(0,t.w5)((()=>[c])),_:1})])),_:1})])),_:1},8,["visible"])]),u,(0,t._)("div",i,[(0,t.Wm)(f,{color:"primary",onClick:a[2]||(a[2]=n=>v.visibleA=!v.visibleA)},{default:(0,t.w5)((()=>[r])),_:1}),(0,t.Wm)(f,{color:"primary",onClick:a[3]||(a[3]=n=>v.visibleB=!v.visibleB)},{default:(0,t.w5)((()=>[k])),_:1}),(0,t.Wm)(f,{color:"primary",onClick:a[4]||(a[4]=()=>{v.visibleA=!v.visibleA,v.visibleB=!v.visibleB})},{default:(0,t.w5)((()=>[b])),_:1}),(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t.Wm)(B,{xs:"6"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{visible:v.visibleA},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{class:"mt-3"},{default:(0,t.w5)((()=>[(0,t.Wm)(q,null,{default:(0,t.w5)((()=>[m])),_:1})])),_:1})])),_:1},8,["visible"])])),_:1}),(0,t.Wm)(B,{xs:"6"},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{visible:v.visibleB},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{class:"mt-3"},{default:(0,t.w5)((()=>[(0,t.Wm)(q,null,{default:(0,t.w5)((()=>[d])),_:1})])),_:1})])),_:1},8,["visible"])])),_:1})])),_:1})]),g],64)}}}}]);