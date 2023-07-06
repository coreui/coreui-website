import{_ as t,o as e,c as d,e as o}from"./app-27e1995f.js";const r={},a=o(`<h3 id="cpopover" tabindex="-1">CPopover <a class="anchor-link" href="#cpopover" aria-hidden="true">#</a></h3><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CPopover <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue&#39;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> CPopover <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue/src/components/popover/CPopover&#39;</span>
</code></pre></div><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>animation</strong> <br><div class="badge bg-primary">4.9.0+</div></td><td>Apply a CSS fade transition to the popover.</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>content</strong></td><td>Content for your component. If you want to pass non-string value please use dedicated slot <code>&lt;template #content&gt;...&lt;/template&gt;</code></td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>delay</strong> <br><div class="badge bg-primary">4.9.0+</div></td><td>The delay for displaying and hiding the popover (in milliseconds). When a numerical value is provided, the delay applies to both the hide and show actions. The object structure for specifying the delay is as follows: delay: <code>{ &#39;show&#39;: 500, &#39;hide&#39;: 100 }</code>.</td><td>number | { show: number; hide: number }</td><td>-</td><td>0</td></tr><tr><td><strong>fallback-placements</strong> <br><div class="badge bg-primary">4.9.0+</div></td><td>Specify the desired order of fallback placements by providing a list of placements as an array. The placements should be prioritized based on preference.</td><td>Placements | Placements[]</td><td>-</td><td>() =&gt; [&#39;top&#39;, &#39;right&#39;, &#39;bottom&#39;, &#39;left&#39;]</td></tr><tr><td><strong>offset</strong></td><td>Offset of the popover relative to its target.</td><td>array</td><td>-</td><td>[0, 8]</td></tr><tr><td><strong>placement</strong></td><td>Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.</td><td>Placement</td><td>-</td><td>&#39;top&#39;</td></tr><tr><td><strong>title</strong></td><td>Title for your component. If you want to pass non-string value please use dedicated slot <code>&lt;template #title&gt;...&lt;/template&gt;</code></td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>trigger</strong></td><td>Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.</td><td>Triggers | Triggers[]</td><td><code>&#39;click&#39;</code>, <code>&#39;focus&#39;</code>, <code>&#39;hover&#39;</code></td><td>&#39;click&#39;</td></tr><tr><td><strong>visible</strong></td><td>Toggle the visibility of popover component.</td><td>boolean</td><td>-</td><td>-</td></tr></tbody></table><h4 id="events" tabindex="-1">Events <a class="anchor-link" href="#events" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Event name</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><strong>hide</strong></td><td>Callback fired when the component requests to be hidden.</td><td></td></tr><tr><td><strong>show</strong></td><td>Callback fired when the component requests to be shown.</td><td></td></tr></tbody></table>`,6),s=[a];function n(i,l){return e(),d("div",null,s)}const c=t(r,[["render",n],["__file","CPopover.api.html.vue"]]);export{c as default};
