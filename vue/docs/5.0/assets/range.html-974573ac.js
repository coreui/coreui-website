import{_ as c,r as o,o as l,c as d,a,b as t,d as e,e as n}from"./app-27e1995f.js";const u={},r=a("h2",{id:"overview",tabindex:"-1"},[e("Overview "),a("a",{class:"anchor-link",href:"#overview","aria-hidden":"true"},"#")],-1),i=a("p",null,[e("Create custom "),a("code",null,'<input type="range">'),e(" controls with "),a("code",null,"<CFormRange>"),e('. The track (the background) and thumb (the value) are both styled to appear the same across browsers. As only Edge Legacy and Firefox supports "filling" their track from the left or right of the thumb as a means to visually indicate progress, we do not currently support it.')],-1),h={class:"docs-example rounded-top p-4"},m=n(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormRange</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>customRange1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Example range<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="disabled" tabindex="-1">Disabled <a class="anchor-link" href="#disabled" aria-hidden="true">#</a></h2><p>Add the <code>disabled</code> boolean attribute on an input to give it a grayed out appearance and remove pointer events.</p>`,3),k={class:"docs-example rounded-top p-4"},g=n(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormRange</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>disabledRange<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Disabled range<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="min-and-max" tabindex="-1">Min and max <a class="anchor-link" href="#min-and-max" aria-hidden="true">#</a></h2><p>Range inputs have implicit values for <code>min</code> and <code>max</code>—<code>0</code> and <code>100</code>, respectively. You may specify new values for those using the <code>min</code> and <code>max</code> attributes.</p>`,3),v={class:"docs-example rounded-top p-4"},b=n(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormRange</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Example range<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>customRange2<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="steps" tabindex="-1">Steps <a class="anchor-link" href="#steps" aria-hidden="true">#</a></h2><p>By default, range inputs &quot;snap&quot; to integer values. To change this, you can specify a <code>step</code> value. In the example below, we double the number of steps by using <code>:step=&quot;0.5&quot;</code>.</p>`,3),q={class:"docs-example rounded-top p-4"},f=n(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormRange</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Example range<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:step</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0.5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>customRange3<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span> 
</code></pre></div><h2 id="customizing" tabindex="-1">Customizing <a class="anchor-link" href="#customizing" aria-hidden="true">#</a></h2><h3 id="sass-variables" tabindex="-1">SASS variables <a class="anchor-link" href="#sass-variables" aria-hidden="true">#</a></h3>`,3),x=n(`<h2 id="api" tabindex="-1">API <a class="anchor-link" href="#api" aria-hidden="true">#</a></h2><h3 id="cformrange" tabindex="-1">CFormRange <a class="anchor-link" href="#cformrange" aria-hidden="true">#</a></h3><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CFormRange <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue&#39;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> CFormRange <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue/src/components/form/CFormRange&#39;</span>
</code></pre></div><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>disabled</strong></td><td>Toggle the disabled state for the component.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>label</strong> <br><div class="badge bg-primary">4.3.0+</div></td><td>Add a caption for a component.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>max</strong></td><td>Specifies the maximum value for the component.</td><td>number</td><td>-</td><td>-</td></tr><tr><td><strong>min</strong></td><td>Specifies the minimum value for the component.</td><td>number</td><td>-</td><td>-</td></tr><tr><td><strong>model-value</strong></td><td>The default name for a value passed using v-model.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>readonly</strong></td><td>Toggle the readonly state for the component.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>steps</strong></td><td>Specifies the interval between legal numbers in the component.</td><td>number</td><td>-</td><td>-</td></tr><tr><td><strong>value</strong></td><td>The <code>value</code> attribute of component.<br><code>@controllable</code> onChange</td><td>number</td><td>-</td><td>-</td></tr></tbody></table><h4 id="events" tabindex="-1">Events <a class="anchor-link" href="#events" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Event name</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><strong>change</strong></td><td>Event occurs when the value has been changed.</td><td></td></tr><tr><td><strong>update:modelValue</strong></td><td>Emit the new value whenever there’s a change event.</td><td></td></tr></tbody></table>`,7);function _(y,R){const s=o("CFormRange"),p=o("ScssDocs");return l(),d("div",null,[r,i,a("div",h,[t(s,{id:"customRange1",label:"Example range"})]),m,a("div",k,[t(s,{id:"disabledRange",disabled:"",label:"Disabled range"})]),g,a("div",v,[t(s,{label:"Example range",min:0,max:5,value:3,id:"customRange2"})]),b,a("div",q,[t(s,{label:"Example range",min:0,max:5,step:.5,value:3,id:"customRange3"})]),f,t(p,{file:"_variables.scss",capture:"form-range-variables"}),x])}const C=c(u,[["render",_],["__file","range.html.vue"]]);export{C as default};
