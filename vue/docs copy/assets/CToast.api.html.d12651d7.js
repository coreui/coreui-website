import{_ as t,e}from"./app.dde7107c.js";const d={},o=e(`<h3 id="ctoast" tabindex="-1">CToast <a class="anchor-link" href="#ctoast" aria-hidden="true">#</a></h3><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CToast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue&#39;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> CToast <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue/src/components/toast/CToast&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>autohide</strong></td><td>Auto hide the toast.</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>color</strong></td><td>Sets the color context of the component to one of CoreUI\u2019s themed colors.</td><td>string</td><td><code>&#39;primary&#39;</code>, <code>&#39;secondary&#39;</code>, <code>&#39;success&#39;</code>, <code>&#39;danger&#39;</code>, <code>&#39;warning&#39;</code>, <code>&#39;info&#39;</code>, <code>&#39;dark&#39;</code>, <code>&#39;light&#39;</code>, <code>string</code></td><td>-</td></tr><tr><td><strong>delay</strong></td><td>Delay hiding the toast (ms).</td><td>number</td><td>-</td><td>5000</td></tr><tr><td><strong>dismissible</strong></td><td>Optionally add a close button to component and allow it to self dismiss.</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>index</strong></td><td>index of the component.</td><td>number</td><td>-</td><td>-</td></tr><tr><td><strong>title</strong></td><td>Title node for your component.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>visible</strong></td><td>Toggle the visibility of component.</td><td>boolean</td><td>-</td><td>-</td></tr></tbody></table><h4 id="events" tabindex="-1">Events <a class="anchor-link" href="#events" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Event name</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><strong>close</strong></td><td>Callback fired when the component requests to be closed.</td><td></td></tr><tr><td><strong>show</strong></td><td>Callback fired when the component requests to be shown.</td><td></td></tr></tbody></table>`,6);function s(n,a){return o}var c=t(d,[["render",s],["__file","CToast.api.html.vue"]]);export{c as default};
