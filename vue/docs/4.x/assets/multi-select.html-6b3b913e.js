import{_ as h,r as u,o as b,c as f,a as t,b as n,w as o,d as r,e as p,t as v}from"./app-408f5659.js";import{c as x,a as q,b as w,d as S,e as C}from"./cif-us-e9ee0dec.js";const _={data:()=>({cities:[{label:"United States",code:"us",options:[{value:"au",text:"Austin"},{value:"ch",text:"Chicago"},{value:"la",text:"Los Angeles"},{value:"ny",text:"New York"},{value:"sa",text:"San Jose"}]},{label:"United Kingdom",code:"gb",options:[{value:"li",text:"Liverpool"},{value:"lo",text:"London"},{value:"ma",text:"Manchester"}]}],countries:[{value:"pl",text:"Poland"},{value:"de",text:"Germany"},{value:"us",text:"United States"},{value:"es",text:"Spain"},{value:"gb",text:"United Kingdom"}],flags:{de:x,es:q,gb:w,pl:S,us:C},loading:!1,options:[{value:0,text:"Angular"},{value:1,text:"Bootstrap"},{value:2,text:"React.js"},{value:3,text:"Vue.js"},{label:"backend",options:[{value:4,text:"Django"},{value:5,text:"Laravel"},{value:6,text:"Node.js"}]}],options2:[{value:0,text:"Angular",selected:!0},{value:1,text:"Bootstrap",selected:!0,disabled:!0},{value:2,text:"React.js"},{value:3,text:"Vue.js"},{label:"backend",options:[{value:4,text:"Django"},{value:5,text:"Laravel",selected:!0},{value:6,text:"Node.js"}]}],users:[]}),methods:{async getUsers(s=""){this.setLoading(!0),fetch(`https://apitest.coreui.io/demos/users?first_name=${s}`).then(e=>e.json()).then(e=>{this.setLoading(!1),this.setUsers(e.records.map(i=>({value:i.id,text:i.first_name})))})},setLoading(s){this.loading=s},setUsers(s){this.users=s}}},j=t("h2",{id:"examples",tabindex:"-1"},[r("Examples "),t("a",{class:"anchor-link",href:"#examples","aria-hidden":"true"},"#")],-1),M={class:"docs-example rounded-top p-4"},T=p(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CMultiSelect</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Framework<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Please select your framework.<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Angular&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Bootstrap&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;React.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vue.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;backend&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Django&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Laravel&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Node.js&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),z={class:"docs-example rounded-top p-4"},U=p(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CMultiSelect</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options2<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">options2</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Angular&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Bootstrap&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;React.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vue.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;backend&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Django&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Laravel&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Node.js&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="modes" tabindex="-1">Modes <a class="anchor-link" href="#modes" aria-hidden="true">#</a></h2><h3 id="allow-create-options" tabindex="-1">Allow create options <a class="anchor-link" href="#allow-create-options" aria-hidden="true">#</a></h3><p>Users can create new options as well as choose from a list of pre-existing options by using the <code>allowCreateOptions</code> property in the Vue Multi Select component.</p><p>If this propety is set to <code>true</code>, the user can enter a new option in the multiselect component&#39;s search input field, and if it doesn&#39;t already exist in the list, it will be created and added there. This can be useful when the list of available options is not comprehensive or when the user needs to select an option that is not already available.</p>`,5),D={class:"docs-example rounded-top p-4"},V=p(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CMultiSelect</span> <span class="token attr-name">allowCreateOptions</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token operator">...</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="clear-search-on-select" tabindex="-1">Clear search on select <a class="anchor-link" href="#clear-search-on-select" aria-hidden="true">#</a></h3><p>The <code>clearSearchOnSelect</code> property is a Boolean attribute that can be used with the MultiSelect component in the CoreUI Vue library.</p><p>The MultiSelect component&#39;s search input field will be cleared as soon as the user chooses an item from the dropdown list if the property <code>clearSearchOnSelect</code> is set to <code>true</code>. This indicates that the user can instantly begin a fresh search after the search query is reset.</p><p>By default, the search input field will keep the user&#39;s search query even after an option has been picked because the value of the <code>clearSearchOnSelect</code> property is set to <code>false</code>. When a user must choose from a dropdown list several items that all match the same search term, this can be helpful.</p><p>You only need to specify the <code>clearSearchOnSelect</code> property to &#39;true&#39; or &#39;false&#39; as necessary in your code to use the MultiSelect component of the CoreUI Vue package. For example:</p>`,6),A={class:"docs-example rounded-top p-4"},L=p(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CMultiSelect</span> <span class="token attr-name">clearSearchOnSelect</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token operator">...</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>In this example, the <code>clearSearchOnSelect</code> property is set to <code>true</code>, which means that the search input field will be cleared as soon as the user selects an option from the dropdown list.</p><h2 id="selection-types" tabindex="-1">Selection types <a class="anchor-link" href="#selection-types" aria-hidden="true">#</a></h2><p>Users can present selected items in a variety of ways by using the Vue Multi Select component. Selected things can be shown to users as a counter, tags, or a list of values separated by commas.</p><p>Use the <code>selectionType</code> property to set the presentation type to alter how the selected items are displayed.</p><h3 id="counter" tabindex="-1">Counter <a class="anchor-link" href="#counter" aria-hidden="true">#</a></h3><p>The items from the list that are chosen for the example below are counted and shown as a counter. Set the <code>selectionType</code> property to &quot;counter&quot; in order to use this option.</p><p>The <code>selectionTypeCounterText</code> property lets you set the text that appears after the counter, allowing for even more customization of the counter.</p>`,8),I={class:"docs-example rounded-top p-4"},B=p(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CMultiSelect</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">selectionType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>counter<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Angular&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Bootstrap&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;React.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vue.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;backend&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Django&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Laravel&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Node.js&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="tags" tabindex="-1">Tags <a class="anchor-link" href="#tags" aria-hidden="true">#</a></h3><p>The <code>selectionType</code> property is set to &#39;tags&#39; by default, which causes the selected options to be shown as tags. The &quot;X&quot; button can be used to delete a selected option.</p>`,3),N={class:"docs-example rounded-top p-4"},P=p(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CMultiSelect</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">selectionType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tags<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Angular&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Bootstrap&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;React.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vue.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;backend&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Django&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Laravel&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Node.js&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="text" tabindex="-1">Text <a class="anchor-link" href="#text" aria-hidden="true">#</a></h3><p>Set the <code>selectionType</code> property to &#39;&quot;text&quot;&#39; to show the list of selected options as comma-separated text values.</p>`,3),R={class:"docs-example rounded-top p-4"},E=p(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CMultiSelect</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">selectionType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Angular&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Bootstrap&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;React.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vue.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;backend&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Django&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Laravel&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Node.js&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="single-selection" tabindex="-1">Single Selection <a class="anchor-link" href="#single-selection" aria-hidden="true">#</a></h2><p>Set the <code>multiple</code> boolean property to <code>false</code> and allow select only one element.</p>`,3),O={class:"docs-example rounded-top p-4"},G=p(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CMultiSelect</span> <span class="token attr-name">:multiple</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Angular&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Bootstrap&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;React.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vue.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;backend&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Django&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Laravel&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Node.js&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="custom-options-and-options-group-labels" tabindex="-1">Custom options and options group labels <a class="anchor-link" href="#custom-options-and-options-group-labels" aria-hidden="true">#</a></h2><p>The CoreUI Vue Multi Select component provides the flexibility to personalize options and group labels by utilizing custom templates. You can easily customize the options using the <code>&lt;template #options=&quot;{ option }&quot;&gt;...&lt;/template&gt;</code>, and for groups, you can use <code>&lt;template #options-groups=&quot;{ option }&quot;&gt;...&lt;/template&gt;</code>, as demonstrated in the examples below:</p><p>By using custom templates, the CoreUI Vue Multi Select component gives users the freedom to customize the options and group labels. The <code>&lt;template #options=&quot;{ option }&quot;&gt;...&lt;/template&gt;</code> allows for customization of options and <code>&lt;template #options-groups=&quot;{ option }&quot;&gt;...&lt;/template&gt;</code> for groups, as shown in the following examples:</p>`,4),Y={class:"docs-example rounded-top p-4"},F={class:"d-flex"},K={class:"d-flex align-items-center"},H=p(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CRow</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CCol</span> <span class="token attr-name">:md</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CMultiSelect</span> 
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Select country<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>countries<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">optionsStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ option }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CIcon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>me-3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flags[option.value]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xl<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span> {{option.text}}
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CMultiSelect</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CCol</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CCol</span> <span class="token attr-name">:md</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CMultiSelect</span> 
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Select city<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cities<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#options-groups</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ option }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-flex align-items-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CIcon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>me-3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flags[option.code]<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xl<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span> {{option.label}}
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CMultiSelect</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CCol</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CRow</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> cifPl<span class="token punctuation">,</span> cifDe<span class="token punctuation">,</span> cifUs<span class="token punctuation">,</span> cifEs<span class="token punctuation">,</span> cifGb <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/icons&#39;</span>
  <span class="token keyword">import</span> CIcon <span class="token keyword">from</span> <span class="token string">&#39;@coreui/icons-vue&#39;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">cities</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;United States&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;us&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;au&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Austin&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;ch&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Chicago&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;la&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Los Angeles&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;ny&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;New York&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;sa&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;San Jose&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;United Kingdom&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;gb&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;li&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Liverpool&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;lo&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;London&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;ma&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Manchester&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">countries</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;pl&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Poland&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;de&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Germany&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;us&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;United States&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;es&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Spain&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;gb&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;United Kingdom&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">flags</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">de</span><span class="token operator">:</span> cifDe<span class="token punctuation">,</span>
          <span class="token literal-property property">es</span><span class="token operator">:</span> cifEs<span class="token punctuation">,</span>
          <span class="token literal-property property">gb</span><span class="token operator">:</span> cifGb<span class="token punctuation">,</span>
          <span class="token literal-property property">pl</span><span class="token operator">:</span> cifPl<span class="token punctuation">,</span>
          <span class="token literal-property property">us</span><span class="token operator">:</span> cifUs
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="disabled" tabindex="-1">Disabled <a class="anchor-link" href="#disabled" aria-hidden="true">#</a></h2><p>Add the <code>disabled</code> boolean property to give it a grayed out appearance, remove pointer events, and prevent focusing.</p>`,3),W={class:"docs-example rounded-top p-4"},$=p(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CMultiSelect</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Angular&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Bootstrap&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;React.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vue.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;backend&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Django&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Laravel&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Node.js&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="sizing" tabindex="-1">Sizing <a class="anchor-link" href="#sizing" aria-hidden="true">#</a></h2><p>You may also choose from small and large multi selects to match our similarly sized text inputs.</p>`,3),J={class:"docs-example rounded-top p-4"},X=p(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CRow</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CCol</span> <span class="token attr-name">:md</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mb-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CMultiSelect</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">selectionType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>counter<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CCol</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CCol</span> <span class="token attr-name">:md</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mb-3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CMultiSelect</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CCol</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CCol</span> <span class="token attr-name">:md</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CMultiSelect</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">selectionType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>counter<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sm<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CCol</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CCol</span> <span class="token attr-name">:md</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CMultiSelect</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sm<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CCol</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CRow</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Angular&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Bootstrap&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;React.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Vue.js&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;backend&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Django&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Laravel&#39;</span><span class="token punctuation">,</span>
              <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
              <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Node.js&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="external-data" tabindex="-1">External Data <a class="anchor-link" href="#external-data" aria-hidden="true">#</a></h2>`,2),Q={class:"docs-example rounded-top p-4"},Z=p(`<div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CMultiSelect</span>
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Users<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>users<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Please select your user.<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">virtual-scroller</span>
    <span class="token attr-name">@show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>() =&gt; getUsers()<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@filter-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(value) =&gt; getUsers(value)<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="customizing" tabindex="-1">Customizing <a class="anchor-link" href="#customizing" aria-hidden="true">#</a></h2><h3 id="css-variables" tabindex="-1">CSS variables <a class="anchor-link" href="#css-variables" aria-hidden="true">#</a></h3><p>Vue multi selects use local CSS variables on <code>.form-multi-select</code> for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.</p>`,4),nn=p(`<h4 id="how-to-use-css-variables" tabindex="-1">How to use CSS variables <a class="anchor-link" href="#how-to-use-css-variables" aria-hidden="true">#</a></h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> vars <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;--my-css-var&#39;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;--my-another-css-var&#39;</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token operator">&lt;</span>CMultiSelect <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;vars&quot;</span><span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>CMultiSelect<span class="token operator">&gt;</span>
</code></pre></div><h3 id="sass-variables" tabindex="-1">SASS variables <a class="anchor-link" href="#sass-variables" aria-hidden="true">#</a></h3>`,3),sn=p(`<h2 id="api" tabindex="-1">API <a class="anchor-link" href="#api" aria-hidden="true">#</a></h2><h3 id="cmultiselect" tabindex="-1">CMultiSelect <a class="anchor-link" href="#cmultiselect" aria-hidden="true">#</a></h3><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CMultiSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue-pro&#39;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> CMultiSelect <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue-pro/src/components/multi-select/CMultiSelect&#39;</span>
</code></pre></div><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>allow-create-options</strong> <br><div class="badge bg-primary">4.9.0+</div></td><td>Allow users to create options if they are not in the list of options.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>cleaner</strong></td><td>Enables selection cleaner element.<br><code>@default</code> true</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>clear-search-on-select</strong> <br><div class="badge bg-primary">4.9.0+</div></td><td>Clear current search on selecting an item.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>disabled</strong></td><td>Toggle the disabled state for the component.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>feedback</strong> <br><div class="badge bg-primary">4.6.0+</div></td><td>Provide valuable, actionable feedback.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>feedback-invalid</strong> <br><div class="badge bg-primary">4.6.0+</div></td><td>Provide valuable, actionable feedback.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>feedback-valid</strong> <br><div class="badge bg-primary">4.6.0+</div></td><td>Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, <code>:invalid</code> and <code>:valid</code>.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>id</strong></td><td>The id global attribute defines an identifier (ID) that must be unique in the whole document.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>invalid</strong> <br><div class="badge bg-primary">4.6.0+</div></td><td>Set component validation state to invalid.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>label</strong> <br><div class="badge bg-primary">4.6.0+</div></td><td>Add a caption for a component.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>loading</strong> <br><div class="badge bg-primary">4.9.0+</div></td><td>When set, the options list will have a loading style: loading spinner and reduced opacity.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>multiple</strong></td><td>It specifies that multiple options can be selected at once.<br><code>@default</code> true</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>options</strong></td><td>List of option elements.</td><td>(Option | OptionsGroup)[]</td><td>-</td><td>() =&gt; []</td></tr><tr><td><strong>options-max-height</strong></td><td>Sets maxHeight of options list.<br><code>@default</code> &#39;auto&#39;</td><td>number|string</td><td>-</td><td>&#39;auto&#39;</td></tr><tr><td><strong>options-style</strong></td><td>Sets option style.<br><code>@default</code> &#39;checkbox&#39;</td><td>string</td><td><code>&#39;checkbox&#39;</code>, <code>&#39;text&#39;</code></td><td>&#39;checkbox&#39;</td></tr><tr><td><strong>placeholder</strong></td><td>Specifies a short hint that is visible in the search input.<br><code>@default</code> &#39;Select...&#39;&#39;</td><td>string</td><td>-</td><td>&#39;Select...&#39;</td></tr><tr><td><strong>required</strong></td><td>When it is present, it indicates that the user must choose a value before submitting the form.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>search</strong></td><td>Enables search input element.</td><td>boolean|string</td><td>-</td><td>true</td></tr><tr><td><strong>search-no-results-label</strong></td><td>Sets the label for no results when filtering.</td><td>string</td><td>-</td><td>&#39;no items&#39;</td></tr><tr><td><strong>select-all</strong></td><td>Enables select all button.<br><code>@default</code> true</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>select-all-label</strong></td><td>Sets the select all button label.<br><code>@default</code> &#39;Select all options&#39;</td><td>string</td><td>-</td><td>&#39;Select all options&#39;</td></tr><tr><td><strong>selection-type</strong></td><td>Sets the selection style.<br><code>@default</code> &#39;tags&#39;</td><td>string</td><td><code>&#39;counter&#39;</code>, <code>&#39;tags&#39;</code>, <code>&#39;text&#39;</code></td><td>&#39;tags&#39;</td></tr><tr><td><strong>selection-type-counter-text</strong></td><td>Sets the counter selection label.<br><code>@default</code> &#39;item(s) selected&#39;</td><td>string</td><td>-</td><td>&#39;item(s) selected&#39;</td></tr><tr><td><strong>size</strong></td><td>Size the component small or large.</td><td>string</td><td><code>&#39;sm&#39;</code>, <code>&#39;lg&#39;</code></td><td>-</td></tr><tr><td><strong>text</strong> <br><div class="badge bg-primary">4.6.0+</div></td><td>Add helper text to the component.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>tooltip-feedback</strong> <br><div class="badge bg-primary">4.6.0+</div></td><td>Display validation feedback in a styled tooltip.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>valid</strong> <br><div class="badge bg-primary">4.6.0+</div></td><td>Set component validation state to valid.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>virtual-scroller</strong> <br><div class="badge bg-primary">4.8.0+</div></td><td>Enable virtual scroller for the options list.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>visible</strong></td><td>Toggle the visibility of multi select dropdown.<br><code>@default</code> false</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>visible-items</strong> <br><div class="badge bg-primary">4.8.0+</div></td><td>Amount of visible items when virtualScroller is set to <code>true</code>.</td><td>number</td><td>-</td><td>10</td></tr></tbody></table><h4 id="events" tabindex="-1">Events <a class="anchor-link" href="#events" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Event name</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><strong>change</strong></td><td>Execute a function when a user changes the selected option. [docs]</td><td></td></tr><tr><td><strong>filter-change</strong></td><td>Execute a function when the filter value changed.</td><td></td></tr><tr><td><strong>hide</strong></td><td>The callback is fired when the Multi Select component requests to be hidden.</td><td></td></tr><tr><td><strong>show</strong></td><td>The callback is fired when the Multi Select component requests to be shown.</td><td></td></tr></tbody></table>`,7);function an(s,e,i,tn,pn,k){const a=u("CMultiSelect"),m=u("CCallout"),d=u("CIcon"),l=u("CCol"),g=u("CRow"),y=u("ScssDocs");return b(),f("div",null,[j,t("div",M,[n(a,{label:"Framework",options:s.options,text:"Please select your framework."},null,8,["options"])]),T,t("div",z,[n(a,{options:s.options2},null,8,["options"])]),U,n(m,{color:"info"},{default:o(()=>[r(" It's worth noting that this feature may not always be appropriate, depending on the specific use case of the multiselect component. In some cases, it may be preferable to restrict the user to selecting only pre-existing options, while in other cases, allowing for the creation of new options may be essential. It's important to consider the specific requirements of your application when deciding whether to enable this feature. ")]),_:1}),t("div",D,[n(a,{allowCreateOptions:"",options:s.options},null,8,["options"])]),V,t("div",A,[n(a,{clearSearchOnSelect:"",options:s.options},null,8,["options"])]),L,t("div",I,[n(a,{options:s.options2,selectionType:"counter"},null,8,["options"])]),B,t("div",N,[n(a,{options:s.options2,selectionType:"tags"},null,8,["options"])]),P,t("div",R,[n(a,{options:s.options2,selectionType:"text"},null,8,["options"])]),E,t("div",O,[n(a,{multiple:!1,options:s.options},null,8,["options"])]),G,t("div",Y,[n(g,null,{default:o(()=>[n(l,{md:6},{default:o(()=>[n(a,{label:"Select country",options:s.countries,optionsStyle:"text"},{options:o(({option:c})=>[t("div",F,[n(d,{class:"me-3",icon:s.flags[c.value],size:"xl"},null,8,["icon"]),r(" "+v(c.text),1)])]),_:1},8,["options"])]),_:1}),n(l,{md:6},{default:o(()=>[n(a,{label:"Select city",options:s.cities},{"options-groups":o(({option:c})=>[t("div",K,[n(d,{class:"me-3",icon:s.flags[c.code],size:"xl"},null,8,["icon"]),r(" "+v(c.label),1)])]),_:1},8,["options"])]),_:1})]),_:1})]),H,t("div",W,[n(a,{options:s.options2,disabled:""},null,8,["options"])]),$,t("div",J,[n(g,null,{default:o(()=>[n(l,{md:6,class:"mb-3"},{default:o(()=>[n(a,{options:s.options,selectionType:"counter",size:"lg"},null,8,["options"])]),_:1}),n(l,{md:6,class:"mb-3"},{default:o(()=>[n(a,{options:s.options,size:"lg"},null,8,["options"])]),_:1}),n(l,{md:6},{default:o(()=>[n(a,{options:s.options,selectionType:"counter",size:"sm"},null,8,["options"])]),_:1}),n(l,{md:6},{default:o(()=>[n(a,{options:s.options,size:"sm"},null,8,["options"])]),_:1})]),_:1})]),X,t("div",Q,[n(a,{label:"Users",loading:s.loading,options:s.users,text:"Please select your user.","virtual-scroller":"",onShow:e[0]||(e[0]=()=>k.getUsers()),onFilterChange:e[1]||(e[1]=c=>k.getUsers(c))},null,8,["loading","options"])]),Z,n(y,{file:"forms/_form-multi-select.scss",capture:"form-multi-select-css-vars"}),nn,n(y,{file:"_variables.scss",capture:"form-multi-select-variables"}),sn])}const cn=h(_,[["render",an],["__file","multi-select.html.vue"]]);export{cn as default};
