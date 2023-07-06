import{_ as c,r as o,o as l,c as u,a as n,b as a,d as e,e as s}from"./app-27e1995f.js";const i={},d=n("h2",{id:"approach",tabindex:"-1"},[e("Approach "),n("a",{class:"anchor-link",href:"#approach","aria-hidden":"true"},"#")],-1),r=n("p",null,[e("Browser default checkboxes are replaced with the help of "),n("code",null,"<CFormCheck>"),e(". Checkboxes are for selecting one or several options in a list.")],-1),k=n("h2",{id:"checks",tabindex:"-1"},[e("Checks "),n("a",{class:"anchor-link",href:"#checks","aria-hidden":"true"},"#")],-1),h={class:"docs-example rounded-top p-4"},b=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flexCheckDefault<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Default checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flexCheckChecked<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Checked checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">checked</span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="indeterminate" tabindex="-1">Indeterminate <a class="anchor-link" href="#indeterminate" aria-hidden="true">#</a></h2><p>Checkboxes can utilize the <code>:indeterminate</code> pseudo-class when manually set via <code>indeterminate</code> property.</p>`,3),v={class:"docs-example rounded-top p-4"},g=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flexCheckIndeterminate<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Indeterminate checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">indeterminate</span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h3 id="disabled" tabindex="-1">Disabled <a class="anchor-link" href="#disabled" aria-hidden="true">#</a></h3><p>Add the <code>disabled</code> attribute and the associated <code>&lt;label&gt;</code>s are automatically styled to match with a lighter color to help indicate the input&#39;s state.</p>`,3),m={class:"docs-example rounded-top p-4"},q=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Disabled checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Disabled checked checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">checked</span> <span class="token attr-name">disabled</span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="default-stacked" tabindex="-1">Default (stacked) <a class="anchor-link" href="#default-stacked" aria-hidden="true">#</a></h2><p>By default, any number of checkboxes that are immediate sibling will be vertically stacked and appropriately spaced.</p>`,3),f={class:"docs-example rounded-top p-4"},x=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>defaultCheck1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Default checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>defaultCheck2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Disabled checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="inline" tabindex="-1">Inline <a class="anchor-link" href="#inline" aria-hidden="true">#</a></h2><p>Group checkboxes on the same horizontal row by adding <code>inline</code> boolean property to any <code>&lt;CFormCheck&gt;</code>.</p>`,3),C={class:"docs-example rounded-top p-4"},_=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">inline</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inlineCheckbox1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">inline</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inlineCheckbox2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">inline</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inlineCheckbox3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3 (disabled)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="reverse" tabindex="-1">Reverse <a class="anchor-link" href="#reverse" aria-hidden="true">#</a></h2><p>Put your checkboxes on the opposite side by adding <code>reverse</code> boolean property.</p>`,3),y={class:"docs-example rounded-top p-4"},F=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">reverse</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>reverseCheckbox1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Reverse checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">reverse</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>reverseCheckbox2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Disabled reverse checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="without-labels" tabindex="-1">Without labels <a class="anchor-link" href="#without-labels" aria-hidden="true">#</a></h2><p>Remember to still provide some form of accessible name for assistive technologies (for instance, using <code>aria-label</code>).</p>`,3),D={class:"docs-example rounded-top p-4"},w=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkboxNoLabel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="toggle-buttons" tabindex="-1">Toggle buttons <a class="anchor-link" href="#toggle-buttons" aria-hidden="true">#</a></h2><p>Create button-like checkboxes buttons by using <code>button</code> boolean property on the <code>&lt;CFormCheck&gt;</code> component. These toggle buttons can further be grouped in a button group if needed.</p>`,3),S={class:"docs-example rounded-top p-4"},P=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">:button</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ color: &#39;primary&#39; }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn-check<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>off<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Single toggle<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,1),I={class:"docs-example rounded-top p-4"},T=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">:button</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ color: &#39;primary&#39; }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn-check-2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>off<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Checked<span class="token punctuation">&quot;</span></span> <span class="token attr-name">checked</span><span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,1),j={class:"docs-example rounded-top p-4"},z=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">:button</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ color: &#39;primary&#39; }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn-check-3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>off<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Disabled<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h3 id="outlined-styles" tabindex="-1">Outlined styles <a class="anchor-link" href="#outlined-styles" aria-hidden="true">#</a></h3><p>Different variants of button, such at the various outlined styles, are supported.</p>`,3),N={class:"docs-example rounded-top p-4"},V=s(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">:button</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ color: &#39;primary&#39;, variant: &#39;outline&#39; }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn-check-outlined<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>off<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Single toggle<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">:button</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ color: &#39;secondary&#39;, variant: &#39;outline&#39; }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn-check-2-outlined<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>off<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Checked<span class="token punctuation">&quot;</span></span> <span class="token attr-name">checked</span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="customizing" tabindex="-1">Customizing <a class="anchor-link" href="#customizing" aria-hidden="true">#</a></h2><h3 id="sass-variables" tabindex="-1">SASS variables <a class="anchor-link" href="#sass-variables" aria-hidden="true">#</a></h3>`,3),B=s(`<h2 id="api" tabindex="-1">API <a class="anchor-link" href="#api" aria-hidden="true">#</a></h2><h3 id="cformcheck" tabindex="-1">CFormCheck <a class="anchor-link" href="#cformcheck" aria-hidden="true">#</a></h3><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CFormCheck <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue&#39;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> CFormCheck <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue/src/components/form/CFormCheck&#39;</span>
</code></pre></div><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>button</strong></td><td>Create button-like checkboxes and radio buttons.<br><code>@see</code> http://coreui.io/vue/docs/components/button.html</td><td>object</td><td>-</td><td>-</td></tr><tr><td><strong>false-value</strong> <br><div class="badge bg-primary">4.9.0+</div></td><td>Use in conjunction with the v-model directive to specify the value that should be assigned to the bound variable when the checkbox is in the <code>false</code> state.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>feedback</strong> <br><div class="badge bg-primary">4.3.0+</div></td><td>Provide valuable, actionable feedback.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>feedback-invalid</strong> <br><div class="badge bg-primary">4.3.0+</div></td><td>Provide valuable, actionable feedback.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>feedback-valid</strong> <br><div class="badge bg-primary">4.3.0+</div></td><td>Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, <code>:invalid</code> and <code>:valid</code>.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>hit-area</strong></td><td>Sets hit area to the full area of the component.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>id</strong></td><td>The id global attribute defines an identifier (ID) that must be unique in the whole document.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>indeterminate</strong></td><td>Input Checkbox indeterminate Property</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>inline</strong></td><td>Group checkboxes or radios on the same horizontal row by adding.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>invalid</strong></td><td>Set component validation state to invalid.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>label</strong></td><td>The element represents a caption for a component.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>model-value</strong></td><td>The default name for a value passed using v-model.</td><td>array|boolean|string</td><td>-</td><td>-</td></tr><tr><td><strong>reverse</strong> <br><div class="badge bg-primary">4.8.0+</div></td><td>Put checkboxes or radios on the opposite side.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>tooltip-feedback</strong> <br><div class="badge bg-primary">4.3.0+</div></td><td>Display validation feedback in a styled tooltip.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>true-value</strong> <br><div class="badge bg-primary">4.9.0+</div></td><td>Use in conjunction with the v-model directive to specify the value that should be assigned to the bound variable when the checkbox is in the <code>true</code> state.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>type</strong></td><td>Specifies the type of component.</td><td>string</td><td><code>&#39;checkbox&#39;</code>, <code>&#39;radio&#39;</code></td><td>&#39;checkbox&#39;</td></tr><tr><td><strong>valid</strong></td><td>Set component validation state to valid.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>value</strong></td><td>The value attribute of component.</td><td>string</td><td>-</td><td>-</td></tr></tbody></table><h4 id="events" tabindex="-1">Events <a class="anchor-link" href="#events" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Event name</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><strong>change</strong></td><td>Event occurs when the checked value has been changed.</td><td></td></tr><tr><td><strong>update:modelValue</strong></td><td>Emit the new value whenever there’s a change event.</td><td></td></tr></tbody></table>`,7);function E(A,R){const t=o("CFormCheck"),p=o("ScssDocs");return l(),u("div",null,[d,r,k,n("div",h,[a(t,{id:"flexCheckDefault",label:"Default checkbox"}),a(t,{id:"flexCheckChecked",label:"Checked checkbox",checked:""})]),b,n("div",v,[a(t,{id:"flexCheckIndeterminate",label:"Indeterminate checkbox",indeterminate:""})]),g,n("div",m,[a(t,{label:"Disabled checkbox",disabled:""}),a(t,{label:"Disabled checked checkbox",checked:"",disabled:""})]),q,n("div",f,[a(t,{id:"defaultCheck1",label:"Default checkbox"}),a(t,{id:"defaultCheck2",label:"Disabled checkbox",disabled:""})]),x,n("div",C,[a(t,{inline:"",id:"inlineCheckbox1",value:"option1",label:"1"}),a(t,{inline:"",id:"inlineCheckbox2",value:"option2",label:"2"}),a(t,{inline:"",id:"inlineCheckbox3",value:"option3",label:"3 (disabled)",disabled:""})]),_,n("div",y,[a(t,{reverse:"",id:"reverseCheckbox1",value:"option1",label:"Reverse checkbox"}),a(t,{reverse:"",id:"reverseCheckbox2",value:"option2",label:"Disabled reverse checkbox",disabled:""})]),F,n("div",D,[a(t,{id:"checkboxNoLabel",value:"","aria-label":"..."})]),w,n("div",S,[a(t,{button:{color:"primary"},id:"btn-check",autocomplete:"off",label:"Single toggle"})]),P,n("div",I,[a(t,{button:{color:"primary"},id:"btn-check-2",autocomplete:"off",label:"Checked",checked:""})]),T,n("div",j,[a(t,{button:{color:"primary"},id:"btn-check-3",autocomplete:"off",label:"Disabled",disabled:""})]),z,n("div",N,[a(t,{button:{color:"primary",variant:"outline"},id:"btn-check-outlined",autocomplete:"off",label:"Single toggle"}),a(t,{button:{color:"secondary",variant:"outline"},id:"btn-check-2-outlined",autocomplete:"off",label:"Checked",checked:""})]),V,a(p,{file:"_variables.scss",capture:"form-check-variables"}),B])}const G=c(i,[["render",E],["__file","checkbox.html.vue"]]);export{G as default};
