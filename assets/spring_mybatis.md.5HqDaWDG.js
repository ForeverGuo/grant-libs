import{_ as a,c as i,o as t,a4 as e}from"./chunks/framework.BZPRC472.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"spring/mybatis.md","filePath":"spring/mybatis.md","lastUpdated":1728608537000}'),r={name:"spring/mybatis.md"},n=e('<h2 id="spring6-集成-mybatis" tabindex="-1">Spring6 集成 mybatis <a class="header-anchor" href="#spring6-集成-mybatis" aria-label="Permalink to &quot;Spring6 集成 mybatis&quot;">​</a></h2><h3 id="spring-context" tabindex="-1">spring-context <a class="header-anchor" href="#spring-context" aria-label="Permalink to &quot;spring-context&quot;">​</a></h3><p>Spring Context 是 Spring 框架中的一个核心组件，负责提供 Spring 应用的运行时环境。Context 表示“上下文”或“环境”，在 Spring 中，它不仅管理着应用中的对象（称为 Beans），还提供了许多其他关键服务，这些服务对于构建企业级应用至关重要。</p><ul><li>作用</li></ul><p>IoC 容器：作为控制反转（IoC）容器，Spring Context 负责创建、配置、组装和销毁 Beans。它通过依赖注入（DI）管理对象之间的依赖关系。</p><p>资源管理：提供对外部资源的访问，如数据库连接、文件、网络资源等。</p><p>事件机制：支持事件发布和监听机制，允许应用组件之间通过事件进行通信。</p><p>国际化：支持基于区域的资源文件管理，实现多语言国际化。</p><p>事务管理：提供声明式和编程式的事务管理，支持对事务的细粒度控制。</p><p>安全性：与 Spring Security 集成，提供认证和授权等安全功能。</p><p>数据访问：支持对各种数据访问技术的集成，如 JDBC、Hibernate、JPA 等。</p><p>模块化：支持模块化的应用程序设计，允许应用按模块进行组织和部署。</p><p>扩展点：提供多个扩展点，如 BeanFactoryPostProcessor 和 BeanPostProcessor，允许开发者自定义容器的行为。</p><p>上下文信息：提供关于 Bean 的上下文信息，如 Bean 的定义、作用域和生命周期。</p><h3 id="spring-jdbc" tabindex="-1">spring-jdbc <a class="header-anchor" href="#spring-jdbc" aria-label="Permalink to &quot;spring-jdbc&quot;">​</a></h3><ol><li>数据库连接管理 ‌：Spring JDBC 模块提供了一个连接池，管理数据库连接的创建和释放。通过连接池，可以减少连接的创建开销，更好地管理连接的复用，提高数据库的性能 ‌。</li><li>数据库事务管理 ‌：Spring JDBC 模块支持声明式事务管理。通过配置事务管理器，可以轻松实现事务的划分、提交和回滚操作，确保数据的一致性和完整性 ‌</li><li>SQL 操作封装 ‌：Spring JDBC 模块提供了一系列的 JdbcTemplate 和 NamedParameterJdbcTemplate 类，用于简化 SQL 操作。这些类封装了数据库访问的底层细节，提供了一组简洁而强大的 API，可以执行 SQL 查询、更新和批处理操作 ‌</li><li>参数绑定和结果映射 ‌：Spring JDBC 模块支持将 Java 对象与数据库表的字段进行映射。通过参数绑定和结果映射，方便地将 Java 对象的属性与数据库表的字段进行转换，简化了数据的传递和处理过程 ‌</li><li>异常处理 ‌：Spring JDBC 模块提供了统一的异常处理机制。它将底层数据库操作抛出的异常转换成通用的 Spring 异常，从而将数据库相关的错误与应用程序解耦 ‌</li></ol><h3 id="mysql-驱动" tabindex="-1">mysql 驱动 <a class="header-anchor" href="#mysql-驱动" aria-label="Permalink to &quot;mysql 驱动&quot;">​</a></h3><ol><li>提供数据库连接 ‌：MySQL 驱动的首要功能是提供数据库连接。它创建和管理数据库连接池，通过复用现有连接，应用程序可以更高效地执行数据库操作 ‌</li><li>‌ 执行 SQL 查询 ‌：MySQL 驱动提供了一组 API，使得开发人员可以通过编程方式发送 SQL 语句到数据库服务器，并获取执行结果。参数化查询是驱动提供的一个关键特性，允许开发人员以安全的方式传递参数，防止 SQL 注入攻击 ‌</li><li>处理结果集 ‌：执行 SQL 查询后，MySQL 驱动需要处理结果集。驱动提供了一系列方法用于遍历结果集、提取数据，并将其转换成应用程序能够处理的格式。结果集缓存是一个提高性能的技术，通过缓存部分或全部结果集，可以减少与数据库服务器的交互次数 ‌</li><li>事务管理 ‌：MySQL 驱动提供了事务管理功能。开发人员可以通过驱动提供的事务管理 API 开始、提交、回滚事务，确保数据操作的原子性和一致性 ‌</li></ol><h3 id="mybatis" tabindex="-1">mybatis <a class="header-anchor" href="#mybatis" aria-label="Permalink to &quot;mybatis&quot;">​</a></h3><p>MyBatis 是一个基于 Java 的持久层框架，旨在简化数据库访问操作，避免繁琐的 JDBC 代码和手动设置参数以及结果集的检索过程 ‌ <br></p><p>简化数据库访问操作，提高开发效率，并提供灵活的 SQL 定制</p><h3 id="mybatis-spring" tabindex="-1">mybatis-spring <a class="header-anchor" href="#mybatis-spring" aria-label="Permalink to &quot;mybatis-spring&quot;">​</a></h3><p>mybatis 提供的与 spring 框架集成的依赖</p><h3 id="德鲁伊连接池" tabindex="-1">德鲁伊连接池 <a class="header-anchor" href="#德鲁伊连接池" aria-label="Permalink to &quot;德鲁伊连接池&quot;">​</a></h3><p>连接池是在程序初始化的时候，预先创建好指定数量的数据库连接对象，存储与连接池中，需要用的时候就去取，用完还回来。数据库连接池就是为数据库的连接建立一个“缓冲区”，预先在“缓冲池”中放入一定数量的连接，当需要建立数据库连接时，只需从“缓冲区”中取出，使用完毕后再放回去，这样就不会有频繁的创建和销毁，从而节省系统的资源。 数据库连接池负责分配、管理和释放数据库连接，它允许应用程序重复使用一个现有的数据库连接，而不是重新建立一个。</p><h3 id="junit" tabindex="-1">junit <a class="header-anchor" href="#junit" aria-label="Permalink to &quot;junit&quot;">​</a></h3><p>单元测试功能</p>',27),s=[n];function p(l,o,c,d,h,m){return t(),i("div",null,s)}const S=a(r,[["render",p]]);export{g as __pageData,S as default};
