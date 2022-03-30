<template><h1 id="mybatis-generator" tabindex="-1"><a class="header-anchor" href="#mybatis-generator" aria-hidden="true">#</a> Mybatis Generator</h1>
<p>mybatis 属于『<strong>半自动 ORM 框架</strong>』，在使用这个框架中，工作量最大的就是书写 mapper 的映射文件，由于手动书写很容易出错，为此 mybatis 官方提供了 <strong>mybatis-generator</strong> 来帮我们自动生成文件。</p>
<p>早期的 mybatis-generator 的使用十分原始，使用起来非常麻烦。在开源社区的努力下，现在有多种方案能简化我们对 myBatis-generator 的使用：</p>
<ol>
<li>使用图形化工具，例如：<a href="https://github.com/zouzg/mybatis-generator-gui" target="_blank" rel="noopener noreferrer">mybatis-generator-gui(opens new window)<ExternalLinkIcon/></a></li>
<li>如果使用的是 Jetbrains IDEA 开发工具，那么可以使用 <strong>Free Mybatis plugin</strong> 插件来进行图形化操作。</li>
<li>使用 maven 的 mybatis-generator 插件，通过命令直接生成映射文件等内容。</li>
</ol>
<p><strong>这里推荐第三种方案：使用 maven 的 myabtis-generator 插件。</strong></p>
<hr>
<p>在 Maven 中，有一个名为 <strong>mybatis-generator-maven-plugin</strong> 的第三方插件，它能够将 mybatis-genetrator 的功能纳入到 Maven 体系中，允许你通过一条 maven 命令去生成相关的 JaveBean、DAO 接口和 Mapper 映射文件，以简化对 mytabis-generator 的使用。</p>
<h2 id="pom-xml-配置" tabindex="-1"><a class="header-anchor" href="#pom-xml-配置" aria-hidden="true">#</a> pom.xml 配置</h2>
<p><RouterLink to="/utilse/gist/notes/mybatis-xml.html" title="具体配置见模板">具体配置模板</RouterLink></p>
<p>mybatis-generator-maven-plugin 依赖于两个包：</p>
<ul>
<li>
<p>mybatis-generator-core</p>
<p>mybatis-generator-core 是『自动生成』功能的实现者和提供者，mybatis-generator-maven-plugin 是在『利用』它的这个功能。</p>
</li>
<li>
<p>mysql-connector-java</p>
<p>本质上是因为 mybatis-generator-core 在『自动生成』JavaBean 时，需要去数据库中查询表的相关信息，去『求』表的列名并以此为依据命名你的 JavaBean 的属性。很显然因为需要连接数据库，所以这里需要有数据库驱动包。</p>
</li>
</ul>
<p>mybatis-generator 要能正常工作，需要你提供一个配置文件。在这个配置文件中，你去『告诉』mybatis-generator 去『自动生成』时的相关细节。</p>
<h2 id="mybatis-generator-config-xml-配置" tabindex="-1"><a class="header-anchor" href="#mybatis-generator-config-xml-配置" aria-hidden="true">#</a> mybatis-generator-config.xml 配置</h2>
<p>具体配置内容见<RouterLink to="/utilse/gist/notes/mybatis-xml.html#_3-mybatis-generator-config-xml-%E9%85%8D%E7%BD%AE">模板</RouterLink></p>
</template>
