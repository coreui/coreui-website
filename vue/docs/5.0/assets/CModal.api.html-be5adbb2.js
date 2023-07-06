import{_ as t,o as e,c as d,e as o}from"./app-27e1995f.js";const a={},n=o(`<h3 id="cmodal" tabindex="-1">CModal <a class="anchor-link" href="#cmodal" aria-hidden="true">#</a></h3><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CModal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue&#39;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> CModal <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue/src/components/modal/CModal&#39;</span>
</code></pre></div><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>alignment</strong></td><td>Align the modal in the center or top of the screen.</td><td>string</td><td><code>&#39;top&#39;</code>, <code>&#39;center&#39;</code></td><td>&#39;top&#39;</td></tr><tr><td><strong>backdrop</strong></td><td>Apply a backdrop on body while offcanvas is open.</td><td>boolean|string</td><td><code>boolean | &#39;static&#39;</code></td><td>true</td></tr><tr><td><strong>content-class-name</strong></td><td>A string of all className you want applied to the modal content component.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>fullscreen</strong></td><td>Set modal to covers the entire user viewport</td><td>boolean|string</td><td><code>boolean</code>, <code>&#39;sm&#39;</code>, <code>&#39;md&#39;</code>, <code>&#39;lg&#39;</code>, <code>&#39;xl&#39;</code>, <code>&#39;xxl&#39;</code></td><td>-</td></tr><tr><td><strong>keyboard</strong></td><td>Closes the modal when escape key is pressed.</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>scrollable</strong></td><td>Create a scrollable modal that allows scrolling the modal body.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>size</strong></td><td>Size the component small, large, or extra large.</td><td>string</td><td><code>&#39;sm&#39;</code>, <code>&#39;lg&#39;</code>, <code>&#39;xl&#39;</code></td><td>-</td></tr><tr><td><strong>transition</strong></td><td>Remove animation to create modal that simply appear rather than fade in to view.</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>unmount-on-close</strong></td><td>By default the component is unmounted after close animation, if you want to keep the component mounted set this property to false.</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>visible</strong></td><td>Toggle the visibility of alert component.</td><td>boolean</td><td>-</td><td>-</td></tr></tbody></table><h4 id="events" tabindex="-1">Events <a class="anchor-link" href="#events" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Event name</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><strong>close</strong></td><td>Callback fired when the component requests to be closed.</td><td></td></tr><tr><td><strong>close-prevented</strong></td><td>Callback fired when the component requests to be closed.</td><td></td></tr><tr><td><strong>show</strong></td><td>Callback fired when the modal is shown, its backdrop is static and a click outside the modal or an escape key press is performed with the keyboard option set to false.</td><td></td></tr></tbody></table>`,6),s=[n];function r(l,c){return e(),d("div",null,s)}const p=t(a,[["render",r],["__file","CModal.api.html.vue"]]);export{p as default};
