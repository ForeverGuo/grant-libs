import{_ as i,c as o,m as a,a as l,n as s,a4 as e,o as _}from"./chunks/framework.BZPRC472.js";const n="_special_text_3suau_2",r="_common_text_3suau_7",c="_red_text_3suau_12",d={special_text:n,common_text:r,red_text:c},V=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"spring/gof.md","filePath":"spring/gof.md","lastUpdated":1730167340000}'),h={name:"spring/gof.md"},u=e('<h2 id="代理模式的作用" tabindex="-1">代理模式的作用 <a class="header-anchor" href="#代理模式的作用" aria-label="Permalink to &quot;代理模式的作用&quot;">​</a></h2><ol><li>当一个对象需要受到保护的时候，可以考虑使用代理对象完成某个行为</li><li>需要给某个对象进行功能增强的时候，可以考虑找一个代理进行增强</li><li>在程序中，对象 A 和对象 B 无法直接交互时</li></ol><h2 id="代理模式三大角色" tabindex="-1">代理模式三大角色 <a class="header-anchor" href="#代理模式三大角色" aria-label="Permalink to &quot;代理模式三大角色&quot;">​</a></h2><ol><li>目标对象</li><li>代理对象</li><li>目标对象和代理对象的公共接口</li></ol><h2 id="代理模式代码实现形式" tabindex="-1">代理模式代码实现形式 <a class="header-anchor" href="#代理模式代码实现形式" aria-label="Permalink to &quot;代理模式代码实现形式&quot;">​</a></h2>',5),m=a("li",null,"静态代理 会造成类爆炸的问题",-1),p=a("li",null,"解决代理类的数量",-1),x=a("li",null,"解决代码复用",-1),f=e('<h3 id="实现动态代理的方式" tabindex="-1">实现动态代理的方式 <a class="header-anchor" href="#实现动态代理的方式" aria-label="Permalink to &quot;实现动态代理的方式&quot;">​</a></h3><ol><li>JDK 动态代理：只能代理接口</li><li>CGLIB 动态代理：既可以代理接口，又可以代理类（底层有个小而快的字节码处理框架 ASM）</li><li>javassist 动态代理</li></ol><h2 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h2><h3 id="类和类之间的关系" tabindex="-1">类和类之间的关系 <a class="header-anchor" href="#类和类之间的关系" aria-label="Permalink to &quot;类和类之间的关系&quot;">​</a></h3><ol><li>继承（耦合度较高）</li><li>关联（耦合度较低）</li><li>实现</li><li>依赖</li><li>组合</li><li>聚合</li></ol>',5);function T(t,q,P,S,g,k){return _(),o("div",null,[u,a("ol",null,[m,a("li",null,[l("动态代理 "),a("ul",null,[a("li",null,[l("动态代理模式还是代理模式，只不过添加了"),a("span",{class:s(t.$style.special_text)},"字节码生成技术",2),l("，可以在内存中为我们生成 class 字节码， 这个字节码就是代理类，在内存中动态的生成字节码代理的技术")]),p,x])])]),f])}const b={$style:d},C=i(h,[["render",T],["__cssModules",b]]);export{V as __pageData,C as default};
