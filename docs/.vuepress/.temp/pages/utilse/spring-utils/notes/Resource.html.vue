<template><h1 id="资源-resource-及相关" tabindex="-1"><a class="header-anchor" href="#资源-resource-及相关" aria-hidden="true">#</a> 资源（Resource）及相关</h1>
<h2 id="uri-和-url" tabindex="-1"><a class="header-anchor" href="#uri-和-url" aria-hidden="true">#</a> URI 和 URL</h2>
<p>在原生 JDK 中，提供了 <strong>java.net.URI</strong> 和 <strong>java.net.URL</strong> 类，来标识资源的定位。</p>
<table>
<thead>
<tr>
<th style="text-align:center">#</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><strong>URI</strong></td>
<td style="text-align:left">统一资源标志符（Uniform Resource <strong>Identifier</strong>）</td>
</tr>
<tr>
<td style="text-align:center"><strong>URL</strong></td>
<td style="text-align:left">统一资源定位符（uniform Resource <strong>Location</strong>）</td>
</tr>
</tbody>
</table>
<ul>
<li><strong>相同点</strong>：它们都能定位资源的位置，代表这个资源的位置信息。就像经纬度一样可以表示你在世界的哪个角落。</li>
<li><strong>不同点</strong>：<strong>URI</strong> 更宽泛、更高级也更抽象，而 <strong>URL</strong> 则更具体。URI 是 URL 的超集，URL 是 URI 的子集。</li>
</ul>
<p>例如，数据库的 JDBC 连接是一个 URI 也是一个 URL：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>dbc:mysql://127.0.0.1:3306/scott?useSSL=false
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>但是也有一些标识资源的方式，它是 URI ，但不是 URL ，例如 <code>urn:isbn:0-486-27557-4</code>，这个是一本书的 ISBN ，可以唯一标识这本书，它是 URI 但不是 URL 。</p>
<h2 id="resource-及其实现类" tabindex="-1"><a class="header-anchor" href="#resource-及其实现类" aria-hidden="true">#</a> Resource 及其实现类</h2>
<p>在日常项目开发过程中，从 classpath 下加载一个配置文件（并从中读取配置信息）是一个常见需求。</p>
<p>Spring 提炼出 <strong>Resource</strong>（资源）的概念，并围绕它提供了一系列的工具类，能方便地实现上述功能（及其它功能）。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Resource
├── FileSystemResource
├── FileUrlResource
├── ClassPathResource
├── UrlResource
└── InputStreamResource
    └── EncodedResource
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><em><strong>InputStreamResource</strong></em> 是 Resource 接口的子接口，其实现类 <em><strong>EncodedResource</strong></em> 支持通过 InputStream 生成 Resource 对象，并且可以设置编码。（其他 Resource 都是使用 ISO-8859-1 编码）</p>
<p>Resource 接口定义了『资源』的概念，其中常用方法有：</p>
<table>
<thead>
<tr>
<th style="text-align:left">实例方法</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">boolean exists()</td>
<td style="text-align:left">判断资源是否存在</td>
</tr>
<tr>
<td style="text-align:left">File getFile()</td>
<td style="text-align:left">从资源中获得 File 对象</td>
</tr>
<tr>
<td style="text-align:left">URI getURI()</td>
<td style="text-align:left">从资源中获得 URI 对象</td>
</tr>
<tr>
<td style="text-align:left">URL getURL()</td>
<td style="text-align:left">从资源中获得 URI 对象</td>
</tr>
<tr>
<td style="text-align:left">InputStream getInputStream()</td>
<td style="text-align:left">获得资源的 InputStream</td>
</tr>
<tr>
<td style="text-align:left">String getDescription()</td>
<td style="text-align:left">获得资源的描述信息</td>
</tr>
</tbody>
</table>
<p>Resource 接口的各个实现类中除了上述方法外，还有自己的一些方法。</p>
<h2 id="resource-的-getfile-方法的一个问题" tabindex="-1"><a class="header-anchor" href="#resource-的-getfile-方法的一个问题" aria-hidden="true">#</a> Resource 的 getFile() 方法的一个问题</h2>
<p>Resource 的 <em>getFile()</em> 方法需要 Resource 对象所代表的那个文件 <strong>在文件系统中是独立存在的！</strong></p>
<p>因此，你在 Eclipse/Idea 源码运行中运行，或者是一个 <em>.war</em> 的项目在 tomcat 下运行，<em>.getFile()</em> 方法都是没有任何问题，能正常起作用：获得 File 对象。</p>
<p>但是，在 Spring Boot 中，<em>.getFile()</em> 方法无法获得 File 对象。因为，Spring Boot 的 <em>.jar</em> 包不像一般 Java Web 的 <em>.war</em> 那样会被 tomcat 解压开!</p>
<p>因此，Spring Boot 项目中的资源文件都是 <strong>内嵌</strong> 在 <em>.jar</em> 包中，而非独立存在的。不满足 <em>.getFile()</em> 的那个前提要求。</p>
<p>Spring Boot 的这种场景下，需要 <strong>使用 *.getInputStream()* 方法来替代 *.getFile()* 方法</strong> 。</p>
<p>简而言之，Resource 的 <em>.getInputStream()</em> 方法比 <em>.getFile()</em> 方法具有更好的普适性。</p>
<h2 id="resourceutils" tabindex="-1"><a class="header-anchor" href="#resourceutils" aria-hidden="true">#</a> ResourceUtils</h2>
<p>对于常见的 new Resource() 对象 + 操作 Resource 对象 的常见使用方式，Spring 提供了一个 <strong>ResourceUtils</strong> 类来简化这样的代码。</p>
<p><strong>ResourceUtils</strong> 类位于 <em>org.springframework.util</em> 包。它用于处理表达资源字符串前缀描述资源的工具. 如: <em>classpath:</em>、<em>file:</em> 等。</p>
<p>不过，ResourceUtils 类也有上面所说的那个 <em>.getFile()</em> 的问题。因此，如果是 Spring Boot 项目，还是少用/不用 ResourceUtils 的 <em>.getFile()</em> 方法。</p>
<p>ResourceUtils 的常用方法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 判断字符串是否是一个合法的 URL 字符串。</span>
<span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isUrl</span><span class="token punctuation">(</span><span class="token class-name">String</span> resourceLocation<span class="token punctuation">)</span> 
<span class="token keyword">static</span> <span class="token class-name">URL</span> <span class="token function">getURL</span><span class="token punctuation">(</span><span class="token class-name">String</span> resourceLocation<span class="token punctuation">)</span> 
<span class="token keyword">static</span> <span class="token class-name">File</span>	<span class="token function">getFile</span><span class="token punctuation">(</span><span class="token class-name">String</span> resourceLocation<span class="token punctuation">)</span>

<span class="token keyword">static</span> <span class="token class-name">URI</span> <span class="token function">toURI</span><span class="token punctuation">(</span><span class="token class-name">URL</span> url<span class="token punctuation">)</span> 
<span class="token keyword">static</span> <span class="token class-name">File</span>	<span class="token function">getFile</span><span class="token punctuation">(</span><span class="token class-name">URI</span> resourceUri<span class="token punctuation">)</span>
<span class="token keyword">static</span> <span class="token class-name">File</span>	<span class="token function">getFile</span><span class="token punctuation">(</span><span class="token class-name">URL</span> resourceUrl<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="propertiesloaderutils" tabindex="-1"><a class="header-anchor" href="#propertiesloaderutils" aria-hidden="true">#</a> PropertiesLoaderUtils</h2>
<p><em>.properties</em> 文件是最常见的资源文件。对此，Spring 框架提供了 <em><strong>PropertiesLoaderUtils</strong></em> 工具类来简化加载 <em>.properties</em> 配置类的工作。</p>
<p><em><strong>PropertiesLoaderUtils</strong></em> 位于 <em>org.springframework.core.io.support</em> 包下。</p>
<p>以下方法都是 <em>static</em> 方法</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 查找资源，并生成 Properties 对象。使用 ISO-8859-1 编码。</span>
<span class="token class-name">Properties</span> <span class="token function">loadProperties</span><span class="token punctuation">(</span><span class="token class-name">Resource</span> resource<span class="token punctuation">)</span> 

<span class="token comment">// 从 classpath 中查找资源，并生成 Properties 对象。使用 ISO-8859-1 编码。</span>
<span class="token class-name">Properties</span> <span class="token function">loadAllProperties</span><span class="token punctuation">(</span><span class="token class-name">String</span> resourceName<span class="token punctuation">)</span> 

<span class="token comment">// 查找资源，并生成 Properties 对象。</span>
<span class="token class-name">Properties</span> <span class="token function">loadProperties</span><span class="token punctuation">(</span><span class="token class-name">EncodedResource</span> resource<span class="token punctuation">)</span> 

<span class="token comment">// 查找资源，填充参数对象。</span>
<span class="token keyword">void</span> <span class="token function">fillProperties</span><span class="token punctuation">(</span><span class="token class-name">Properties</span> props<span class="token punctuation">,</span> <span class="token class-name">Resource</span> resource<span class="token punctuation">)</span>

<span class="token comment">// 查找资源，填充参数对象。</span>
<span class="token keyword">void</span> <span class="token function">fillProperties</span><span class="token punctuation">(</span><span class="token class-name">Properties</span> props<span class="token punctuation">,</span> <span class="token class-name">EncodedResource</span> resource<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></template>
