import{_ as p,r as e,o as c,c as u,a as s,b as a,e as t}from"./app-6965a302.js";const l={},i=t('<h2 id="approach" tabindex="-1">Approach <a class="anchor-link" href="#approach" aria-hidden="true">#</a></h2><p>Browser default radios are replaced with the help of <code>&lt;CFormCheck radio&gt;</code>. Radios are for selecting one option from many.</p><h2 id="radios" tabindex="-1">Radios <a class="anchor-link" href="#radios" aria-hidden="true">#</a></h2><p>Add the <code>disabled</code> attribute and the associated <code>&lt;label&gt;</code>s are automatically styled to match with a lighter color to help indicate the input&#39;s state.</p>',4),r={class:"docs-example rounded-top p-4"},d=t(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flexRadioDefault<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flexRadioDefault1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Default radio<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flexRadioDefault<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flexRadioDefault2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Checked radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">checked</span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h3 id="disabled" tabindex="-1">Disabled <a class="anchor-link" href="#disabled" aria-hidden="true">#</a></h3>`,2),k={class:"docs-example rounded-top p-4"},q=t(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flexRadioDisabled<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flexRadioDisabled<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Disabled radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flexRadioDisabled<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flexRadioCheckedDisabled<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Disabled checked radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">checked</span> <span class="token attr-name">disabled</span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="default-stacked" tabindex="-1">Default (stacked) <a class="anchor-link" href="#default-stacked" aria-hidden="true">#</a></h2><p>By default, any number of radios that are immediate sibling will be vertically stacked and appropriately spaced.</p>`,3),m={class:"docs-example rounded-top p-4"},v=t(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>exampleRadios<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>exampleRadios1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Default radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">checked</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>exampleRadios<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>exampleRadios2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Second default radio<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>exampleRadios<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>exampleRadios3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Disabled radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="inline" tabindex="-1">Inline <a class="anchor-link" href="#inline" aria-hidden="true">#</a></h2><p>Group radios on the same horizontal row by adding <code>inline</code> boolean property to any <code>&lt;CFormCheck&gt;</code>.</p>`,3),h={class:"docs-example rounded-top p-4"},b=t(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">inline</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inlineRadioOptions<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inlineCheckbox1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">inline</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inlineRadioOptions<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inlineCheckbox2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">inline</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inlineRadioOptions<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inlineCheckbox3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3 (disabled)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="reverse" tabindex="-1">Reverse <a class="anchor-link" href="#reverse" aria-hidden="true">#</a></h2><p>Put your radios on the opposite side by adding <code>reverse</code> boolean property.</p>`,3),g={class:"docs-example rounded-top p-4"},f=t(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">reverse</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>reverseOption1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Reverse radio<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">reverse</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>reverseOption2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Disabled reverse radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="without-labels" tabindex="-1">Without labels <a class="anchor-link" href="#without-labels" aria-hidden="true">#</a></h2><p>Remember to still provide some form of accessible name for assistive technologies (for instance, using <code>aria-label</code>).</p>`,3),y={class:"docs-example rounded-top p-4"},x=t(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radioNoLabel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radioNoLabel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="toggle-buttons" tabindex="-1">Toggle buttons <a class="anchor-link" href="#toggle-buttons" aria-hidden="true">#</a></h2><p>Create button-like radio buttons by using <code>button</code> boolean property on the <code>&lt;CFormCheck&gt;</code> component. These toggle buttons can further be grouped in a button group if needed.</p>`,3),C={class:"docs-example rounded-top p-4"},_=t(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">:button</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ color: &#39;secondary&#39; }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>off<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Checked<span class="token punctuation">&quot;</span></span> <span class="token attr-name">checked</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">:button</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ color: &#39;secondary&#39; }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>off<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Radio<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">:button</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ color: &#39;secondary&#39; }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>off<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">:button</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ color: &#39;secondary&#39; }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>off<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Radio<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h3 id="outlined-styles" tabindex="-1">Outlined styles <a class="anchor-link" href="#outlined-styles" aria-hidden="true">#</a></h3><p>Different variants of button, such at the various outlined styles, are supported.</p>`,3),R={class:"docs-example rounded-top p-4"},D=t(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">:button</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ color: &#39;success&#39;, variant: &#39;outline&#39; }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options-outlined<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success-outlined<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>off<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">checked</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CFormCheck</span> <span class="token attr-name">:button</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ color: &#39;danger&#39;, variant: &#39;outline&#39; }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options-outlined<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger-outlined<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>off<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Radio<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h2 id="customizing" tabindex="-1">Customizing <a class="anchor-link" href="#customizing" aria-hidden="true">#</a></h2><h3 id="sass-variables" tabindex="-1">SASS variables <a class="anchor-link" href="#sass-variables" aria-hidden="true">#</a></h3>`,3),F=t(`<h2 id="api" tabindex="-1">API <a class="anchor-link" href="#api" aria-hidden="true">#</a></h2><h3 id="cformcheck" tabindex="-1">CFormCheck <a class="anchor-link" href="#cformcheck" aria-hidden="true">#</a></h3><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CFormCheck <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue&#39;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> CFormCheck <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue/src/components/form/CFormCheck&#39;</span>
</code></pre></div><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>button</strong></td><td>Create button-like checkboxes and radio buttons.<br><code>@see</code> http://coreui.io/vue/docs/components/button.html</td><td>object</td><td>-</td><td>-</td></tr><tr><td><strong>feedback</strong> <br><div class="badge bg-primary">4.3.0+</div></td><td>Provide valuable, actionable feedback.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>feedback-invalid</strong> <br><div class="badge bg-primary">4.3.0+</div></td><td>Provide valuable, actionable feedback.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>feedback-valid</strong> <br><div class="badge bg-primary">4.3.0+</div></td><td>Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, <code>:invalid</code> and <code>:valid</code>.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>hit-area</strong></td><td>Sets hit area to the full area of the component.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>id</strong></td><td>The id global attribute defines an identifier (ID) that must be unique in the whole document.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>indeterminate</strong></td><td>Input Checkbox indeterminate Property</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>inline</strong></td><td>Group checkboxes or radios on the same horizontal row by adding.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>invalid</strong></td><td>Set component validation state to invalid.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>label</strong></td><td>The element represents a caption for a component.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>model-value</strong></td><td>The default name for a value passed using v-model.</td><td>boolean|string</td><td>-</td><td>-</td></tr><tr><td><strong>reverse</strong> <br><div class="badge bg-primary">4.8.0+</div></td><td>Put checkboxes or radios on the opposite side.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>tooltip-feedback</strong> <br><div class="badge bg-primary">4.3.0+</div></td><td>Display validation feedback in a styled tooltip.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>type</strong></td><td>Specifies the type of component.</td><td>string</td><td><code>&#39;checkbox&#39;</code>, <code>&#39;radio&#39;</code></td><td>&#39;checkbox&#39;</td></tr><tr><td><strong>valid</strong></td><td>Set component validation state to valid.</td><td>boolean</td><td>-</td><td>-</td></tr></tbody></table><h4 id="events" tabindex="-1">Events <a class="anchor-link" href="#events" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Event name</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><strong>change</strong></td><td>Event occurs when the checked value has been changed.</td><td></td></tr><tr><td><strong>update:modelValue</strong></td><td>Emit the new value whenever there’s a change event.</td><td></td></tr></tbody></table>`,7);function w(S,O){const n=e("CFormCheck"),o=e("ScssDocs");return c(),u("div",null,[i,s("div",r,[a(n,{type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",label:"Default radio"}),a(n,{type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",label:"Checked radio",checked:""})]),d,s("div",k,[a(n,{type:"radio",name:"flexRadioDisabled",id:"flexRadioDisabled",label:"Disabled radio",disabled:""}),a(n,{type:"radio",name:"flexRadioDisabled",id:"flexRadioCheckedDisabled",label:"Disabled checked radio",checked:"",disabled:""})]),q,s("div",m,[a(n,{type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"option1",label:"Default radio",checked:""}),a(n,{type:"radio",name:"exampleRadios",id:"exampleRadios2",value:"option2",label:"Second default radio"}),a(n,{type:"radio",name:"exampleRadios",id:"exampleRadios3",value:"option3",label:"Disabled radio",disabled:""})]),v,s("div",h,[a(n,{inline:"",type:"radio",name:"inlineRadioOptions",id:"inlineCheckbox1",value:"option1",label:"1"}),a(n,{inline:"",type:"radio",name:"inlineRadioOptions",id:"inlineCheckbox2",value:"option2",label:"2"}),a(n,{inline:"",type:"radio",name:"inlineRadioOptions",id:"inlineCheckbox3",value:"option3",label:"3 (disabled)",disabled:""})]),b,s("div",g,[a(n,{reverse:"",type:"radio",id:"reverseOption1",value:"option1",label:"Reverse radio"}),a(n,{reverse:"",type:"radio",id:"reverseOption2",value:"option2",label:"Disabled reverse radio",disabled:""})]),f,s("div",y,[a(n,{type:"radio",name:"radioNoLabel",id:"radioNoLabel",value:"","aria-label":"..."})]),x,s("div",C,[a(n,{button:{color:"secondary"},type:"radio",name:"options",id:"option1",autocomplete:"off",label:"Checked",checked:""}),a(n,{button:{color:"secondary"},type:"radio",name:"options",id:"option2",autocomplete:"off",label:"Radio"}),a(n,{button:{color:"secondary"},type:"radio",name:"options",id:"option3",autocomplete:"off",label:"Radio",disabled:""}),a(n,{button:{color:"secondary"},type:"radio",name:"options",id:"option4",autocomplete:"off",label:"Radio"})]),_,s("div",R,[a(n,{button:{color:"success",variant:"outline"},type:"radio",name:"options-outlined",id:"success-outlined",autocomplete:"off",label:"Radio",checked:""}),a(n,{button:{color:"danger",variant:"outline"},type:"radio",name:"options-outlined",id:"danger-outlined",autocomplete:"off",label:"Radio"})]),D,a(o,{file:"_variables.scss",capture:"form-check-variables"}),F])}const N=p(l,[["render",w],["__file","radio.html.vue"]]);export{N as default};
