import{_ as t,o as e,c as o,e as d}from"./app-6965a302.js";const r={},a=d(`<h3 id="ctable" tabindex="-1">CTable <a class="anchor-link" href="#ctable" aria-hidden="true">#</a></h3><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue&#39;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> CTable <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue/src/components/table/CTable&#39;</span>
</code></pre></div><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>align</strong></td><td>Set the vertical aligment.</td><td>string</td><td><code>&#39;bottom&#39;</code>, <code>&#39;middle&#39;</code>, <code>&#39;top&#39;</code></td><td>-</td></tr><tr><td><strong>border-color</strong></td><td>Sets the border color of the component to one of CoreUI’s themed colors.</td><td>string</td><td><code>&#39;primary&#39;</code>, <code>&#39;secondary&#39;</code>, <code>&#39;success&#39;</code>, <code>&#39;danger&#39;</code>, <code>&#39;warning&#39;</code>, <code>&#39;info&#39;</code>, <code>&#39;dark&#39;</code>, <code>&#39;light&#39;</code></td><td>-</td></tr><tr><td><strong>bordered</strong></td><td>Add borders on all sides of the table and cells.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>borderless</strong></td><td>Remove borders on all sides of the table and cells.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>caption</strong></td><td>Put the <code>&lt;caption&gt;</code> on the top of the table.</td><td>string</td><td><code>&#39;top&#39; | string</code></td><td>-</td></tr><tr><td><strong>caption-top</strong> <br><div class="badge bg-primary">4.5.0+</div></td><td>Set the text of the table caption and the caption on the top of the table.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>columns</strong> <br><div class="badge bg-primary">4.5.0+</div></td><td>Prop for table columns configuration. If prop is not defined, table will display columns based on the first item keys, omitting keys that begins with underscore (e.g. &#39;_props&#39;)<br><br>In columns prop each array item represents one column. Item might be specified in two ways:<br>String: each item define column name equal to item value.<br>Object: item is object with following keys available as column configuration:<br>- key (required)(String) - define column name equal to item key.<br>- label (String) - define visible label of column. If not defined, label will be generated automatically based on column name, by converting kebab-case and snake_case to individual words and capitalization of each word.<br>- _props (Object) - adds classes to all cels in column, ex. _props: { scope: &#39;col&#39;, className: &#39;custom-class&#39; },<br>- _style (Object) - adds styles to the column header (useful for defining widths)</td><td>(Column | string)[]</td><td>-</td><td>-</td></tr><tr><td><strong>color</strong></td><td>Sets the color context of the component to one of CoreUI’s themed colors.</td><td>string</td><td><code>&#39;primary&#39;</code>, <code>&#39;secondary&#39;</code>, <code>&#39;success&#39;</code>, <code>&#39;danger&#39;</code>, <code>&#39;warning&#39;</code>, <code>&#39;info&#39;</code>, <code>&#39;dark&#39;</code>, <code>&#39;light&#39;</code>, <code>string</code></td><td>-</td></tr><tr><td><strong>footer</strong> <br><div class="badge bg-primary">4.5.0+</div></td><td>Array of objects or strings, where each element represents one cell in the table footer.<br><br>Example items:<br>[&#39;FooterCell&#39;, &#39;FooterCell&#39;, &#39;FooterCell&#39;]<br>or<br>[{ label: &#39;FooterCell&#39;, _props: { color: &#39;success&#39; }, ...]</td><td>(FooterItem | string)[]</td><td>-</td><td>-</td></tr><tr><td><strong>hover</strong></td><td>Enable a hover state on table rows within a <code>&lt;CTableBody&gt;</code>.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>items</strong> <br><div class="badge bg-primary">4.5.0+</div></td><td>Array of objects, where each object represents one item - row in table. Additionally, you can add style classes to each row by passing them by &#39;_props&#39; key and to single cell by &#39;_cellProps&#39;.<br><br>Example item:<br>{ name: &#39;John&#39; , age: 12, _props: { color: &#39;success&#39; }, _cellProps: { age: { className: &#39;fw-bold&#39;}}}</td><td>Item[]</td><td>-</td><td>-</td></tr><tr><td><strong>small</strong></td><td>Make table more compact by cutting all cell <code>padding</code> in half.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>striped</strong></td><td>Add zebra-striping to any table row within the <code>&lt;CTableBody&gt;</code>.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>striped-columns</strong> <br><div class="badge bg-primary">4.4.0+</div></td><td>Add zebra-striping to any table column.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>table-foot-props</strong> <br><div class="badge bg-primary">4.5.0+</div></td><td>Properties that will be passed to the table footer component.<br><br>Properties to <a href="#ctablefoot">CTableFoot</a> component.</td><td>object</td><td>-</td><td>-</td></tr><tr><td><strong>table-head-props</strong> <br><div class="badge bg-primary">4.5.0+</div></td><td>Properties that will be passed to the table head component.<br><br> Properties to <a href="#ctablehead">CTableHead</a> component.</td><td>object</td><td>-</td><td>-</td></tr></tbody></table>`,4),s=[a];function n(c,l){return e(),o("div",null,s)}const b=t(r,[["render",n],["__file","CTable.api.html.vue"]]);export{b as default};
