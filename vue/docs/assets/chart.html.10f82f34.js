import{_ as d,o as b,c as h,a,b as s,F as m,e as n,r as t}from"./app.a130b6fe.js";const g={},k=n(`<h2 id="installation" tabindex="-1">Installation <a class="anchor-link" href="#installation" aria-hidden="true">#</a></h2><p>If you want to use our Chart.js Vue wrapper you have to install an additional package.</p><h3 id="npm" tabindex="-1">Npm <a class="anchor-link" href="#npm" aria-hidden="true">#</a></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @coreui/vue-chartjs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="yarn" tabindex="-1">Yarn <a class="anchor-link" href="#yarn" aria-hidden="true">#</a></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @coreui/vue-chartjs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="chart-types" tabindex="-1">Chart Types <a class="anchor-link" href="#chart-types" aria-hidden="true">#</a></h2><h3 id="line-chart" tabindex="-1">Line Chart <a class="anchor-link" href="#line-chart" aria-hidden="true">#</a></h3><p>A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets. <a href="https://www.chartjs.org/docs/latest/charts/line.html#dataset-properties" target="_blank" rel="noopener noreferrer">Line Chart properties</a></p>`,9),C={class:"docs-example border rounded-top p-4"},v=n(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- use &lt;CChart type=&quot;line&quot;&gt; or &lt;CChartLine&gt; component --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CChart</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>line<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:wrapper</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
    labels: [&#39;January&#39;, &#39;February&#39;, &#39;March&#39;, &#39;April&#39;, &#39;May&#39;, &#39;June&#39;, &#39;July&#39;],
    datasets: [
      {
        label: &#39;My First dataset&#39;,
        backgroundColor: &#39;rgba(220, 220, 220, 0.2)&#39;,
        borderColor: &#39;rgba(220, 220, 220, 1)&#39;,
        pointBackgroundColor: &#39;rgba(220, 220, 220, 1)&#39;,
        pointBorderColor: &#39;#fff&#39;,
        data: [40, 20, 12, 39, 10, 40, 39]
      },
      {
        label: &#39;My Second dataset&#39;,
        backgroundColor: &#39;rgba(151, 187, 205, 0.2)&#39;,
        borderColor: &#39;rgba(151, 187, 205, 1)&#39;,
        pointBackgroundColor: &#39;rgba(151, 187, 205, 1)&#39;,
        pointBorderColor: &#39;#fff&#39;,
        data: [50, 12, 28, 29, 7, 25, 12]
      }
    ]
  }<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="bar-chart" tabindex="-1">Bar Chart <a class="anchor-link" href="#bar-chart" aria-hidden="true">#</a></h3><p>A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side. <a href="https://www.chartjs.org/docs/latest/charts/bar.html#dataset-properties" target="_blank" rel="noopener noreferrer">Bar Chart properties</a></p>`,3),f={class:"docs-example border rounded-top p-4"},y=n(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- use &lt;CChart type=&quot;bar&quot;&gt; or &lt;CChartBar&gt; component --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CChart</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bar<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
    labels: [&#39;January&#39;, &#39;February&#39;, &#39;March&#39;, &#39;April&#39;, &#39;May&#39;, &#39;June&#39;, &#39;July&#39;],
    datasets: [
      {
        label: &#39;GitHub Commits&#39;,
        backgroundColor: &#39;#f87979&#39;,
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
      },
    ],
  }<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">labels</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>months<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="radar-chart" tabindex="-1">Radar Chart <a class="anchor-link" href="#radar-chart" aria-hidden="true">#</a></h3><p>A radar chart is a way of showing multiple data points and the variation between them. They are often useful for comparing the points of two or more different data sets. <a href="https://www.chartjs.org/docs/latest/charts/radar.html#dataset-properties" target="_blank" rel="noopener noreferrer">Radar Chart properties</a></p>`,3),q={class:"docs-example border rounded-top p-4"},_=n(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- use &lt;CChart type=&quot;radar&quot;&gt; or &lt;CChartRadar&gt; component --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CChartRadar</span>
  <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
    labels: [
      &#39;Eating&#39;,
      &#39;Drinking&#39;,
      &#39;Sleeping&#39;,
      &#39;Designing&#39;,
      &#39;Coding&#39;,
      &#39;Cycling&#39;,
      &#39;Running&#39;,
    ],
    datasets: [
      {
        label: &#39;My First dataset&#39;,
        backgroundColor: &#39;rgba(220, 220, 220, 0.2)&#39;,
        borderColor: &#39;rgba(220, 220, 220, 1)&#39;,
        pointBackgroundColor: &#39;rgba(220, 220, 220, 1)&#39;,
        pointBorderColor: &#39;#fff&#39;,
        pointHighlightFill: &#39;#fff&#39;,
        pointHighlightStroke: &#39;rgba(220, 220, 220, 1)&#39;,
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: &#39;My Second dataset&#39;,
        backgroundColor: &#39;rgba(151, 187, 205, 0.2)&#39;,
        borderColor: &#39;rgba(151, 187, 205, 1)&#39;,
        pointBackgroundColor: &#39;rgba(151, 187, 205, 1)&#39;,
        pointBorderColor: &#39;#fff&#39;,
        pointHighlightFill: &#39;#fff&#39;,
        pointHighlightStroke: &#39;rgba(151, 187, 205, 1)&#39;,
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  }<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h3 id="doughnut-and-pie-charts" tabindex="-1">Doughnut and Pie Charts <a class="anchor-link" href="#doughnut-and-pie-charts" aria-hidden="true">#</a></h3><p>Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data. <a href="https://www.chartjs.org/docs/latest/charts/doughnut.html#dataset-properties" target="_blank" rel="noopener noreferrer">Doughnut and Pie Charts properties</a></p>`,3),w={class:"docs-example border rounded-top p-4"},x=n(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- use &lt;CChart type=&quot;doughnut&quot;&gt; or &lt;CChartDoughnut&gt; component --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CChart</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doughnut<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
    labels: [&#39;VueJs&#39;, &#39;EmberJs&#39;, &#39;ReactJs&#39;, &#39;AngularJs&#39;],
    datasets: [
      {
        backgroundColor: [&#39;#41B883&#39;, &#39;#E46651&#39;, &#39;#00D8FF&#39;, &#39;#DD1B16&#39;],
        data: [40, 20, 80, 10],
      },
    ],
  }<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,1),B={class:"docs-example border rounded-top p-4"},D=n(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- use &lt;CChart type=&quot;pie&quot;&gt; or &lt;CChartPie&gt; component --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CChart</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pie<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
    labels: [&#39;VueJs&#39;, &#39;EmberJs&#39;, &#39;ReactJs&#39;, &#39;AngularJs&#39;],
    datasets: [
      {
        backgroundColor: [&#39;#41B883&#39;, &#39;#E46651&#39;, &#39;#00D8FF&#39;, &#39;#DD1B16&#39;],
        data: [40, 20, 80, 10],
      },
    ],
  }<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="polar-area-chart" tabindex="-1">Polar Area Chart <a class="anchor-link" href="#polar-area-chart" aria-hidden="true">#</a></h3><p>Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value. <a href="https://www.chartjs.org/docs/latest/charts/polar.html#dataset-properties" target="_blank" rel="noopener noreferrer">Polar Area Chart properties</a></p>`,3),F={class:"docs-example border rounded-top p-4"},E=n(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- use &lt;CChart type=&quot;polarArea&quot;&gt; or &lt;CChartPolarArea&gt; component --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CChart</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>polarArea<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
    labels: [&#39;Red&#39;, &#39;Green&#39;, &#39;Yellow&#39;, &#39;Grey&#39;, &#39;Blue&#39;],
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: [&#39;#FF6384&#39;, &#39;#4BC0C0&#39;, &#39;#FFCE56&#39;, &#39;#E7E9ED&#39;, &#39;#36A2EB&#39;],
      },
    ],
  }<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="bubble-chart" tabindex="-1">Bubble Chart <a class="anchor-link" href="#bubble-chart" aria-hidden="true">#</a></h3><p>A bubble chart is used to display three dimensions of data at the same time. The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented by the size of the individual bubbles. <a href="https://www.chartjs.org/docs/latest/charts/bubble.html#dataset-properties" target="_blank" rel="noopener noreferrer">Bubble Chart properties</a></p>`,3),J={class:"docs-example border rounded-top p-4"},A=n(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- use &lt;CChart type=&quot;bubble&quot;&gt; or &lt;CChartBubble&gt; component --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CChart</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bubble<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
    datasets: [{
      label: &#39;First Dataset&#39;,
      data: [{
        x: 20,
        y: 30,
        r: 15
      }, {
        x: 40,
        y: 10,
        r: 10
      }],
      backgroundColor: &#39;rgb(255, 99, 132)&#39;
    }]
  }<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="scatter-chart" tabindex="-1">Scatter Chart <a class="anchor-link" href="#scatter-chart" aria-hidden="true">#</a></h3><p>A bubble chart is used to display three dimensions of data at the same time. The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented by the size of the individual bubbles. <a href="https://www.chartjs.org/docs/latest/charts/scatter.html#dataset-properties" target="_blank" rel="noopener noreferrer">Scatter Chart properties</a></p>`,3),j={class:"docs-example border rounded-top p-4"},P=n(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- use &lt;CChart type=&quot;scatter&quot;&gt; or &lt;CChartScatter&gt; component --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CChart</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scatter<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
    datasets: [{
      label: &#39;Scatter Dataset&#39;,
      data: [{
        x: -10,
        y: 0
      }, {
        x: 0,
        y: 10
      }, {
        x: 10,
        y: 5
      }, {
        x: 0.5,
        y: 5.5
      }],
      backgroundColor: &#39;rgb(255, 99, 132)&#39;
    }],
  }<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
    scales: {
      x: {
        type: &#39;linear&#39;,
        position: &#39;bottom&#39;
      }
    }
  }<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="api" tabindex="-1">API <a class="anchor-link" href="#api" aria-hidden="true">#</a></h2><h3 id="cchart" tabindex="-1">CChart <a class="anchor-link" href="#cchart" aria-hidden="true">#</a></h3><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> CChart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue-chartjs&#39;</span>
<span class="token comment">// or</span>
<span class="token keyword">import</span> CChart <span class="token keyword">from</span> <span class="token string">&#39;@coreui/vue-chartjs/src/CChart&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="props" tabindex="-1">Props <a class="anchor-link" href="#props" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong>custom-tooltips</strong></td><td>Enables custom html based tooltips instead of standard tooltips.<br><code>@default</code> true</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td><strong>data</strong></td><td>The data object that is passed into the Chart.js chart (more info).</td><td>ChartData | ((canvas: HTMLCanvasElement) =&gt; ChartData)</td><td>-</td><td></td></tr><tr><td><strong>height</strong></td><td>Height attribute applied to the rendered canvas.<br><code>@default</code> 150</td><td>number</td><td>-</td><td>150</td></tr><tr><td><strong>id</strong></td><td>ID attribute applied to the rendered canvas.</td><td>string</td><td>-</td><td>-</td></tr><tr><td><strong>options</strong></td><td>The options object that is passed into the Chart.js chart.<br><br>{@link https://www.chartjs.org/docs/latest/general/options.html More Info}</td><td>ChartOptions</td><td>-</td><td>-</td></tr><tr><td><strong>plugins</strong></td><td>The plugins array that is passed into the Chart.js chart (more info)<br><br>{@link https://www.chartjs.org/docs/latest/developers/plugins.html More Info}</td><td>Plugin[]</td><td>-</td><td>-</td></tr><tr><td><strong>redraw</strong></td><td>If true, will tear down and redraw chart on all updates.</td><td>boolean</td><td>-</td><td></td></tr><tr><td><strong>type</strong></td><td>Chart.js chart type.<br><code>@type</code> &#39;line&#39; | &#39;bar&#39; | &#39;radar&#39; | &#39;doughnut&#39; | &#39;polarArea&#39; | &#39;bubble&#39; | &#39;pie&#39; | &#39;scatter&#39;</td><td>ChartType</td><td>-</td><td>&#39;bar&#39;</td></tr><tr><td><strong>width</strong></td><td>Width attribute applied to the rendered canvas.<br><code>@default</code> 300</td><td>number</td><td>-</td><td>300</td></tr><tr><td><strong>wrapper</strong></td><td>Put the chart into the wrapper div element.<br><code>@default</code> true</td><td>boolean</td><td>-</td><td>true</td></tr></tbody></table><h4 id="events" tabindex="-1">Events <a class="anchor-link" href="#events" aria-hidden="true">#</a></h4><table class="table table-striped table-api"><thead><tr><th>Event name</th><th>Description</th><th>Properties</th></tr></thead><tbody><tr><td><strong>get-dataset-at-event</strong></td><td>Proxy for Chart.js getDatasetAtEvent. Calls with dataset and triggering event.</td><td></td></tr><tr><td><strong>get-element-at-event</strong></td><td>Proxy for Chart.js getElementAtEvent. Calls with single element array and triggering event.</td><td></td></tr><tr><td><strong>get-elements-at-event</strong></td><td>Proxy for Chart.js getElementsAtEvent. Calls with element array and triggering event.</td><td></td></tr></tbody></table>`,8);function M(S,T){const e=t("CChartLine"),r=t("CChartBar"),l=t("CChart"),p=t("CChartDoughnut"),o=t("CChartPie"),c=t("CChartPolarArea"),i=t("CChartBubble"),u=t("CChartScatter");return b(),h(m,null,[k,a("div",C,[a("p",null,[s(e,{wrapper:!1,data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(220, 220, 220, 0.2)",borderColor:"rgba(220, 220, 220, 1)",pointBackgroundColor:"rgba(220, 220, 220, 1)",pointBorderColor:"#fff",data:[40,20,12,39,10,40,39]},{label:"My Second dataset",backgroundColor:"rgba(151, 187, 205, 0.2)",borderColor:"rgba(151, 187, 205, 1)",pointBackgroundColor:"rgba(151, 187, 205, 1)",pointBorderColor:"#fff",data:[50,12,28,29,7,25,12]}]}},null,8,["data"])])]),v,a("div",f,[a("p",null,[s(r,{data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"GitHub Commits",backgroundColor:"#f87979",data:[40,20,12,39,10,40,39,80,40]}]},labels:"months"})])]),y,a("div",q,[a("p",null,[s(l,{type:"radar",data:{labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(220, 220, 220, 0.2)",borderColor:"rgba(220, 220, 220, 1)",pointBackgroundColor:"rgba(220, 220, 220, 1)",pointBorderColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(220, 220, 220, 1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(151, 187, 205, 0.2)",borderColor:"rgba(151, 187, 205, 1)",pointBackgroundColor:"rgba(151, 187, 205, 1)",pointBorderColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(151, 187, 205, 1)",data:[28,48,40,19,96,27,100]}]}},null,8,["data"])])]),_,a("div",w,[a("p",null,[s(p,{type:"doughnut",data:{labels:["VueJs","EmberJs","ReactJs","AngularJs"],datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]}})])]),x,a("div",B,[a("p",null,[s(o,{type:"pie",data:{labels:["VueJs","EmberJs","ReactJs","AngularJs"],datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]}})])]),D,a("div",F,[a("p",null,[s(c,{data:{labels:["Red","Green","Yellow","Grey","Blue"],datasets:[{data:[11,16,7,3,14],backgroundColor:["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB"]}]}})])]),E,a("div",J,[a("p",null,[s(i,{data:{datasets:[{label:"First Dataset",data:[{x:20,y:30,r:15},{x:40,y:10,r:10}],backgroundColor:"rgb(255, 99, 132)"}]}},null,8,["data"])])]),A,a("div",j,[a("p",null,[s(u,{data:{datasets:[{label:"Scatter Dataset",data:[{x:-10,y:0},{x:0,y:10},{x:10,y:5},{x:.5,y:5.5}],backgroundColor:"rgb(255, 99, 132)"}]},options:{scales:{x:{type:"linear",position:"bottom"}}}},null,8,["data"])])]),P],64)}var R=d(g,[["render",M],["__file","chart.html.vue"]]);export{R as default};
