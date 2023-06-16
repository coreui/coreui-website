import{_ as n,e as s}from"./app.dde7107c.js";const a={},e=s(`<h2 id="project-structure" tabindex="-1">Project structure <a class="anchor-link" href="#project-structure" aria-hidden="true">#</a></h2><p>Once downloaded, unzip the compressed folder and you&#39;ll see something like this:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>coreui-vue-admin-template/
\u251C\u2500\u2500 public/
\u251C\u2500\u2500 src/
\u2502   \u251C\u2500\u2500 assets/
\u2502   \u2502   \u251C\u2500\u2500 brand/
\u2502   \u2502   \u251C\u2500\u2500 icons/
\u2502   \u2502   \u2514\u2500\u2500 images/
\u2502   \u251C\u2500\u2500 components/
\u2502   \u251C\u2500\u2500 layout/
\u2502   \u251C\u2500\u2500 router/
\u2502   \u251C\u2500\u2500 styles/
\u2502   \u251C\u2500\u2500 views/
\u2502   \u2502   \u251C\u2500\u2500 base/
\u2502   \u2502   \u251C\u2500\u2500 buttons/
\u2502   \u2502   \u251C\u2500\u2500 css/
\u2502   \u2502   \u251C\u2500\u2500 icons/
\u2502   \u2502   \u2514\u2500\u2500 notifications/
\u2502   \u251C\u2500\u2500 App.vue
\u2502   \u251C\u2500\u2500 _nav.js
\u2502   \u2514\u2500\u2500 main.js
\u251C\u2500\u2500 tests/
\u251C\u2500\u2500 ...
\u251C\u2500\u2500 babel.config.js
\u251C\u2500\u2500 cypress.json
\u251C\u2500\u2500 jest.config.js
\u251C\u2500\u2500 jsconfig.json
\u251C\u2500\u2500 package.json
\u2514\u2500\u2500 vue.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p><strong>TypeScript based project</strong></p><p>TypeScript project is available only in PRO version.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>coreui-vue-admin-template/
\u251C\u2500\u2500 public/
\u251C\u2500\u2500 src/
\u2502   \u251C\u2500\u2500 assets/
\u2502   \u2502   \u251C\u2500\u2500 brand/
\u2502   \u2502   \u251C\u2500\u2500 icons/
\u2502   \u2502   \u2514\u2500\u2500 images/
\u2502   \u251C\u2500\u2500 components/
\u2502   \u251C\u2500\u2500 layout/
\u2502   \u251C\u2500\u2500 router/
\u2502   \u251C\u2500\u2500 styles/
\u2502   \u251C\u2500\u2500 views/
\u2502   \u2502   \u251C\u2500\u2500 base/
\u2502   \u2502   \u251C\u2500\u2500 buttons/
\u2502   \u2502   \u251C\u2500\u2500 css/
\u2502   \u2502   \u251C\u2500\u2500 icons/
\u2502   \u2502   \u2514\u2500\u2500 notifications/
\u2502   \u251C\u2500\u2500 App.vue
\u2502   \u251C\u2500\u2500 _nav.ts
\u2502   \u251C\u2500\u2500 main.ts
\u2502   \u2514\u2500\u2500 shims-vue.d.ts
\u251C\u2500\u2500 tests/
\u251C\u2500\u2500 ...
\u251C\u2500\u2500 babel.config.js
\u251C\u2500\u2500 cypress.json
\u251C\u2500\u2500 jest.config.js
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 tsconfig.json
\u2514\u2500\u2500 vue.config.js
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>This is the most basic form of CoreUI Vue Admin Templates.</p>`,7);function r(p,l){return e}var i=n(a,[["render",r],["__file","contents.html.vue"]]);export{i as default};
