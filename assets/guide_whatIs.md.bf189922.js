import{_ as a,o as s,c as l,M as n}from"./chunks/framework.c5ca9a34.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/whatIs.md","filePath":"guide/whatIs.md"}'),o={name:"guide/whatIs.md"},e=n(`<h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>grantlibs 基于 TypeScript 开发的轮子库, 适用于各种 Web 应用开发场景，让你的 vue/react 开发更加方便和高效。</p><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2><ul><li>全面支持 web 多端开语言</li><li>包含了常用的函数，如防抖、节流、深拷贝、日期格式化等</li><li>代码简洁、易读、易维护，遵循了 eslint 和 prettier 的规范</li><li>使用 jest 进行单元测试，覆盖率高达 90%</li><li>使用 vitepress 生成文档，方便查阅和学习</li></ul><h2 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h2><p>请通过<a href="/grantlibs/guide/install.html">快速上手</a>了解更详细的内容</p><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">npm install grantlibs </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">D</span></span>
<span class="line"><span style="color:#BABED8;"># or</span></span>
<span class="line"><span style="color:#BABED8;">yarn add grantlibs </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;">D</span></span></code></pre></div><h3 id="工具函数引用-按需引入" tabindex="-1">工具函数引用-按需引入 <a class="header-anchor" href="#工具函数引用-按需引入" aria-label="Permalink to &quot;工具函数引用-按需引入&quot;">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">clone</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">grantlibs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> deepObj </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> clone</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">deep</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> shallowObj </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> clone</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">shallow</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="文档" tabindex="-1">文档 <a class="header-anchor" href="#文档" aria-label="Permalink to &quot;文档&quot;">​</a></h3><p>你可以在<a href="https://foreverguo.github.io/grantlibs/" target="_blank" rel="noreferrer">这里</a>查看完整的文档，了解更多。</p><h3 id="贡献" tabindex="-1">贡献 <a class="header-anchor" href="#贡献" aria-label="Permalink to &quot;贡献&quot;">​</a></h3><p>如果你对本项目感兴趣，欢迎提出 issue 或 pull request.</p><h3 id="许可" tabindex="-1">许可 <a class="header-anchor" href="#许可" aria-label="Permalink to &quot;许可&quot;">​</a></h3><p>本项目遵循 MIT 协议，你可以自由地使用、修改和分发本项目。</p>`,17),t=[e];function p(r,c,i,D,y,h){return s(),l("div",null,t)}const B=a(o,[["render",p]]);export{d as __pageData,B as default};
