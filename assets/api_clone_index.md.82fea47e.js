import{_ as s,o as a,c as n,M as l}from"./chunks/framework.c5ca9a34.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/clone/index.md","filePath":"api/clone/index.md"}'),o={name:"api/clone/index.md"},p=l(`<h3 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">import</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">{</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">calendar</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">}</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">grantlibs</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">或</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">const</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">{</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">calendar</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">}</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">=</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">require</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">&#39;grantlibs&#39;</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h3 id="方法列表" tabindex="-1">方法列表 <a class="header-anchor" href="#方法列表" aria-label="Permalink to &quot;方法列表&quot;">​</a></h3><table><thead><tr><th>方法名</th><th>调用方式</th></tr></thead><tbody><tr><td>深度拷贝</td><td>clone.deep()</td></tr><tr><td>浅拷贝</td><td>clone.shallow()</td></tr></tbody></table><h3 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">d</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">e</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nested</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">f</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">6</span><span style="color:#BABED8;">] </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 深度拷贝 */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> deepObj </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> clone</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">deep</span><span style="color:#BABED8;">(obj)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 深度拷贝 */</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> shallowObj </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> clone</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">shallow</span><span style="color:#BABED8;">(obj)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,6),e=[p];function t(c,r,D,y,F,B){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{E as __pageData,d as default};
