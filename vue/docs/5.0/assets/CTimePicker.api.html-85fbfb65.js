import{_ as t,o as d,c as e,e as o}from"./app-27e1995f.js";const r={},n=o(`<h3 id="ctimepicker" tabindex="-1">CTimePicker <a class="anchor-link" href="#ctimepicker" aria-hidden="true">#</a></h3><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CTimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue-pro&#39;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> CTimePicker <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue-pro/src/components/time-picker/CTimePicker&#39;</span>
</code></pre></div><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>ampm</strong> <br><div class="badge bg-primary">4.7.0+</div></td><td>Set if the component should use the 12/24 hour format. If <code>true</code> forces the interface to a 12-hour format. If <code>false</code> forces the interface into a 24-hour format. If <code>auto</code> the current locale will determine the 12 or 24-hour interface by default locales.</td><td>boolean|string</td><td>-</td><td>&#39;auto&#39;</td></tr><tr><td><strong>cancel-button</strong></td><td>Toggle visibility or set the content of cancel button.</td><td>boolean|string</td><td>-</td><td>&#39;Cancel&#39;</td></tr><tr><td><strong>cancel-button-color</strong></td><td>Sets the color context of the cancel button to one of CoreUI’s themed colors.</td><td>string</td><td><code>&#39;primary&#39;</code>, <code>&#39;secondary&#39;</code>, <code>&#39;success&#39;</code>, <code>&#39;danger&#39;</code>, <code>&#39;warning&#39;</code>, <code>&#39;info&#39;</code>, <code>&#39;dark&#39;</code>, <code>&#39;light&#39;</code></td><td>&#39;primary&#39;</td></tr><tr><td><strong>cancel-button-size</strong></td><td>Size the cancel button small or large.</td><td>string</td><td><code>&#39;sm&#39;</code>, <code>&#39;lg&#39;</code></td><td>&#39;sm&#39;</td></tr><tr><td><strong>cancel-button-variant</strong></td><td>Set the cancel button variant to an outlined button or a ghost button.</td><td>string</td><td><code>&#39;ghost&#39;</code>, <code>&#39;outline&#39;</code></td><td>&#39;ghost&#39;</td></tr><tr><td><strong>cleaner</strong></td><td>Toggle visibility of the cleaner button.</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>confirm-button</strong></td><td>Toggle visibility or set the content of confirm button.</td><td>boolean|string</td><td>-</td><td>&#39;OK&#39;</td></tr><tr><td><strong>confirm-button-color</strong></td><td>Sets the color context of the confirm button to one of CoreUI’s themed colors.</td><td>string</td><td><code>&#39;primary&#39;</code>, <code>&#39;secondary&#39;</code>, <code>&#39;success&#39;</code>, <code>&#39;danger&#39;</code>, <code>&#39;warning&#39;</code>, <code>&#39;info&#39;</code>, <code>&#39;dark&#39;</code>, <code>&#39;light&#39;</code></td><td>&#39;primary&#39;</td></tr><tr><td><strong>confirm-button-size</strong></td><td>Size the confirm button small or large.</td><td>string</td><td><code>&#39;sm&#39;</code>, <code>&#39;lg&#39;</code></td><td>&#39;sm&#39;</td></tr><tr><td><strong>confirm-button-variant</strong></td><td>Set the confirm button variant to an outlined button or a ghost button.</td><td>string</td><td><code>&#39;ghost&#39;</code>, <code>&#39;outline&#39;</code></td><td>-</td></tr><tr><td><strong>feedback</strong> <br><div class="badge bg-primary">4.6.0+</div></td><td>Provide valuable, actionable feedback.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>feedback-invalid</strong> <br><div class="badge bg-primary">4.6.0+</div></td><td>Provide valuable, actionable feedback.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>feedback-valid</strong> <br><div class="badge bg-primary">4.6.0+</div></td><td>Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, <code>:invalid</code> and <code>:valid</code>.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>id</strong></td><td>The id global attribute defines an identifier (ID) that must be unique in the whole document.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>indicator</strong></td><td>Toggle visibility or set the content of the input indicator.</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>input-read-only</strong></td><td>Toggle the readonly state for the component.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>invalid</strong> <br><div class="badge bg-primary">4.6.0+</div></td><td>Set component validation state to invalid.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>label</strong> <br><div class="badge bg-primary">4.6.0+</div></td><td>Add a caption for a component.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>locale</strong></td><td>Sets the default locale for components. If not set, it is inherited from the navigator.language.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>placeholder</strong></td><td>Specifies a short hint that is visible in the input.</td><td>string</td><td>-</td><td>&#39;Select time&#39;</td></tr><tr><td><strong>required</strong> <br><div class="badge bg-primary">4.9.0+</div></td><td>When present, it specifies that must be filled out before submitting the form.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>seconds</strong> <br><div class="badge bg-primary">4.7.0+</div></td><td>Show seconds.</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>size</strong></td><td>Size the component small or large.</td><td>string</td><td><code>&#39;sm&#39;</code>, <code>&#39;lg&#39;</code></td><td>-</td></tr><tr><td><strong>text</strong> <br><div class="badge bg-primary">4.6.0+</div></td><td>Add helper text to the component.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>time</strong></td><td>Initial selected time.</td><td>date|string</td><td>-</td><td>-</td></tr><tr><td><strong>tooltip-feedback</strong> <br><div class="badge bg-primary">4.6.0+</div></td><td>Display validation feedback in a styled tooltip.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>valid</strong> <br><div class="badge bg-primary">4.6.0+</div></td><td>Set component validation state to valid.</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td><strong>variant</strong></td><td>Set the time picker variant to a roll or select.</td><td>string</td><td><code>&#39;roll&#39;</code>, <code>&#39;select&#39;</code></td><td>&#39;roll&#39;</td></tr><tr><td><strong>visible</strong></td><td>Toggle the visibility of the component.</td><td>boolean</td><td>-</td><td>-</td></tr></tbody></table><h4 id="events" tabindex="-1">Events <a class="anchor-link" href="#events" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Event name</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><strong>change</strong></td><td>Callback fired when the time changed.</td><td></td></tr><tr><td><strong>hide</strong></td><td>Callback fired when the component requests to be hidden.</td><td></td></tr><tr><td><strong>show</strong></td><td>Callback fired when the component requests to be shown.</td><td></td></tr><tr><td><strong>update:time</strong></td><td>Callback fired when the time changed.</td><td></td></tr></tbody></table>`,6),a=[n];function s(i,c){return d(),e("div",null,a)}const g=t(r,[["render",s],["__file","CTimePicker.api.html.vue"]]);export{g as default};
