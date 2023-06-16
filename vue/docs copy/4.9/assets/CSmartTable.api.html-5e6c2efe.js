import{_ as t,o as e,c as o,e as r}from"./app-6965a302.js";const a={},n=r(`<h3 id="csmarttable" tabindex="-1">CSmartTable <a class="anchor-link" href="#csmarttable" aria-hidden="true">#</a></h3><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CSmartTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue-pro&#39;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> CSmartTable <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue-pro/src/components/smart-table/CSmartTable&#39;</span>
</code></pre></div><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>active-page</strong></td><td>Sets active page. If &#39;pagination&#39; prop is enabled, activePage is set only initially.</td><td>number</td><td>-</td><td>1</td></tr><tr><td><strong>cleaner</strong></td><td>When set, displays table cleaner above table, next to the table filter (or in place of table filter if <code>tableFilter</code> prop is not set)<br>Cleaner resets <code>tableFilterValue</code>, <code>columnFilterValue</code>, <code>sorterValue</code>. If clean is possible it is clickable (<code>tabIndex=&quot;0&quot;</code> <code>role=&quot;button&quot;</code>, <code>color=&quot;danger&quot;</code>), otherwise it is not clickable and transparent. Cleaner can be customized through the <code>cleanerIcon</code> slot.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>clickable-rows</strong></td><td>Style table items as clickable.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>column-filter</strong></td><td>When set, displays additional filter row between table header and items, allowing filtering by specific column.<br>Column filter can be customized, by passing prop as object with additional options as keys. Available options:<br>- external (Boolean) - Disables automatic filtering inside component.<br>- lazy (Boolean) - Set to true to trigger filter updates only on change event.</td><td>boolean | ColumnFilter</td><td>-</td><td>-</td></tr><tr><td><strong>column-filter-value</strong></td><td>Value of table filter. To set pass object where keys are column names and values are filter strings e.g.:<br>{ user: &#39;John&#39;, age: 12 }</td><td>ColumnFilterValue</td><td>-</td><td>-</td></tr><tr><td><strong>columns</strong></td><td>Prop for table columns configuration. If prop is not defined, table will display columns based on the first item keys, omitting keys that begins with underscore (e.g. &#39;_props&#39;)<br><br>In columns prop each array item represents one column. Item might be specified in two ways:<br>String: each item define column name equal to item value.<br>Object: item is object with following keys available as column configuration:<br>- key (required)(String) - define column name equal to item key.<br>- filter (Boolean) - removes filter from column when set to false.<br>- label (String) - define visible label of column. If not defined, label will be generated automatically based on column name, by converting kebab-case and snake_case to individual words and capitalization of each word.<br>- sorter (Boolean) - disables sorting of the column when set to false<br>- <a href="https://coreui.io/vue/docs/components/table.html#ctableheadercell" target="_blank" rel="noopener noreferrer">_props</a> (String/Array/Object) - add props to <code>CTableHeaderCell</code>.<br>- _style (String/Array/Object) - adds styles to the column header (useful for defining widths)</td><td>(Column | string)[]</td><td>-</td><td>-</td></tr><tr><td><strong>column-sorter</strong></td><td>Enables table sorting by column value. Sorting will be performed corectly only if values in column are of one type: string (case insensitive) or number.<br><br>Sorter can be customized, by passing prop as object with additional options as keys. Available options:<br>- external (Boolean) - Disables automatic sorting inside component.<br>- resetable (Boolean) - If set to true clicking on sorter have three states: ascending, descending and null. That means that third click on sorter will reset sorting, and restore table to original order.</td><td>boolean | Sorter</td><td>-</td><td>-</td></tr><tr><td><strong>footer</strong></td><td>If <code>true</code> Displays table footer, which mirrors table header. (without column filter).<br>Or Array of objects or strings, where each element represents one cell in the table footer.<br><br>Example items:<br><code>[&#39;FooterCell&#39;, &#39;FooterCell&#39;, &#39;FooterCell&#39;]</code><br>or<br><code>[{ label: &#39;FooterCell&#39;, _props: { color: &#39;success&#39; }, ...]</code></td><td>boolean | (FooterItem | string)[]</td><td>-</td><td>-</td></tr><tr><td><strong>header</strong></td><td>Set to false to remove table header.</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>items</strong></td><td>Array of objects, where each object represents one item - row in table. Additionally, you can customize each row by passing them by <a href="http://coreui.io/vue/docs/components/table.html#ctablerow" target="_blank" rel="noopener noreferrer">_props</a> key and single cell by <a href="http://coreui.io/vue/docs/components/table.html#ctabledatacell" target="_blank" rel="noopener noreferrer">_cellProps</a>.<br><br>Examples:<br>- <code>_props: { color: &#39;primary&#39;, align: &#39;middle&#39;}</code><br>- <code>_cellProps: { all: { class: &#39;fw-semibold&#39;}, &#39;name&#39;: { color: &#39;info&#39; }}</code></td><td>Item[]</td><td>-</td><td>() =&gt; []</td></tr><tr><td><strong>items-number</strong> <br><div class="badge bg-primary">4.8.0+</div></td><td>The total number of items. Use if you pass a portion of data from an external source to let know component what is the total number of items.</td><td>number</td><td>-</td><td>-</td></tr><tr><td><strong>items-per-page</strong></td><td>Number of items per site, when pagination is enabled.</td><td>number</td><td>-</td><td>10</td></tr><tr><td><strong>items-per-page-label</strong></td><td>Label for items per page selector.</td><td>string</td><td>-</td><td>&#39;Items per page:&#39;</td></tr><tr><td><strong>items-per-page-options</strong></td><td>Items per page selector options.</td><td>number[]</td><td>-</td><td>() =&gt; [5, 10, 20, 50]</td></tr><tr><td><strong>items-per-page-select</strong></td><td>Adds select element over table, which is used for control items per page in pagination. If you want to customize this element, pass object with optional values:<br>- label (String) - replaces default label text<br>- values (Array) - custom array of pagination values<br>- external (Boolean) - disables automatic &#39;itemsPerPage&#39; change (use to change pages externaly by &#39;pagination-change&#39; event).</td><td>boolean | ItemsPerPageSelect</td><td>-</td><td>-</td></tr><tr><td><strong>loading</strong></td><td>When set, table will have loading style: loading spinner and reduced opacity. When &#39;small&#39; prop is enabled spinner will be also smaller.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>no-items-label</strong></td><td>ReactNode or string for passing custom noItemsLabel texts.</td><td>string</td><td>-</td><td>&#39;No items found&#39;</td></tr><tr><td><strong>pagination</strong></td><td>Enables default pagination. Set to true for default setup or pass an object with additional CPagination props. Default pagination will always have the computed number of pages that cannot be changed. The number of pages is generated based on the number of passed items and &#39;itemsPerPage&#39; prop. If this restriction is an obstacle, you can make external CPagination instead.</td><td>boolean | Pagination</td><td>-</td><td>-</td></tr><tr><td><strong>pagination-props</strong></td><td>Properties to <a href="https://coreui.io/vue/docs/components/smart-pagination#csmartpagination" target="_blank" rel="noopener noreferrer">CSmartPagination</a> component.</td><td>object</td><td>-</td><td>-</td></tr><tr><td><strong>selectable</strong></td><td>Add checkboxes to make table rows selectable.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>select-all</strong> <br><div class="badge bg-primary">4.8.0+</div></td><td>Enables select all checkbox displayed in the header of the table.<br><br>Can be customized, by passing prop as object with additional options as keys. Available options:<br>- external (Boolean) - Disables automatic selection inside the component.</td><td>boolean | { external?: boolean }</td><td>-</td><td>-</td></tr><tr><td><strong>selected</strong> <br><div class="badge bg-primary">4.8.0+</div></td><td>Array of selected objects, where each object represents one item - row in table.<br><br>Example item: <code>{ name: &#39;John&#39; , age: 12 }</code></td><td>Item[]</td><td>-</td><td>() =&gt; []</td></tr><tr><td><strong>sorter-value</strong></td><td>State of the sorter. Name key is column name, direction can be &#39;asc&#39; or &#39;desc&#39;. eg.:<br>{ column: &#39;status&#39;, state: &#39;asc&#39; }</td><td>SorterValue</td><td>-</td><td>-</td></tr><tr><td><strong>table-body-props</strong></td><td>Properties to <a href="https://coreui.io/vue/docs/components/table/#ctablebody" target="_blank" rel="noopener noreferrer">CTableBody</a> component.</td><td>object</td><td>-</td><td>-</td></tr><tr><td><strong>table-foot-props</strong></td><td>Properties to <a href="https://coreui.io/vue/docs/components/table/#ctablefoot" target="_blank" rel="noopener noreferrer">CTableFoot</a> component.</td><td>object</td><td>-</td><td>-</td></tr><tr><td><strong>table-filter</strong></td><td>When set, displays table filter above table, allowing filtering by specific column.<br><br>Column filter can be customized, by passing prop as object with additional options as keys. Available options:<br>- external (Boolean) - Disables automatic filtering inside component.<br>- lazy (Boolean) - Set to true to trigger filter updates only on change event.</td><td>boolean | TableFilter</td><td>-</td><td>-</td></tr><tr><td><strong>table-filter-label</strong></td><td>The element represents a caption for a component.</td><td>string</td><td>-</td><td>&#39;Filter:&#39;</td></tr><tr><td><strong>table-filter-placeholder</strong></td><td>Specifies a short hint that is visible in the search input.</td><td>string</td><td>-</td><td>&#39;type string...&#39;</td></tr><tr><td><strong>table-filter-value</strong></td><td>Value of table filter.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>table-head-props</strong></td><td>Properties to <a href="https://coreui.io/vue/docs/components/table/#ctablehead" target="_blank" rel="noopener noreferrer">CTableHead</a> component.</td><td>object</td><td>-</td><td>-</td></tr><tr><td><strong>table-props</strong></td><td>Properties to <a href="https://coreui.io/vue/docs/components/table/#ctable" target="_blank" rel="noopener noreferrer">CTable</a> component.</td><td>object</td><td>-</td><td>-</td></tr></tbody></table><h4 id="events" tabindex="-1">Events <a class="anchor-link" href="#events" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Event name</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><strong>active-page-change</strong></td><td>Page change callback.</td><td><strong>page</strong> <code>number</code> - active page number</td></tr><tr><td><strong>column-filter-change</strong></td><td>Column filter change callback.</td><td><strong>ColumnFilterValue</strong> <code>object</code> - {[key: string]: string | number}</td></tr><tr><td><strong>filtered-items-change</strong></td><td>Filtered items change callback.</td><td><strong>items</strong> <code>array</code> - undefined</td></tr><tr><td><strong>items-per-page-change</strong></td><td>Pagination change callback.</td><td><strong>itemsPerPageNumber</strong> <code>number</code> - items per page number</td></tr><tr><td><strong>row-click</strong></td><td>Row click callback.</td><td><strong>item</strong> <code>object</code> - undefined<br><strong>index</strong> <code>number</code> - undefined<br><strong>columnName</strong> <code>string</code> - undefined<br><strong>event</strong> <code>event</code> - undefined</td></tr><tr><td><strong>select-all</strong></td><td>Select all callback.</td><td></td></tr><tr><td><strong>selected-items-change</strong></td><td>Selected items change callback.</td><td><strong>items</strong> <code>array</code> - undefined</td></tr><tr><td><strong>sorter-change</strong></td><td>Sorter value change callback.</td><td><strong>SorterValue</strong> <code>object</code> - { column?: string, state?: number | string}</td></tr><tr><td><strong>table-filter-change</strong></td><td>Table filter change callback.</td><td><strong>tableFilterValue</strong> <code>string</code> - undefined</td></tr></tbody></table>`,6),d=[n];function s(l,i){return e(),o("div",null,d)}const b=t(a,[["render",s],["__file","CSmartTable.api.html.vue"]]);export{b as default};
