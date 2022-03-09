<template><h1 id="junit-vintage-engine和junit-jupiter-engine之间的区别" tabindex="-1"><a class="header-anchor" href="#junit-vintage-engine和junit-jupiter-engine之间的区别" aria-hidden="true">#</a> junit-vintage-engine和junit-jupiter-engine之间的区别</h1>
<p>通过Spring的Initializr生成的SpringBoot项目</p>
<p>spring-boot-starter-test 都会排除 junit-vintage-engine依赖</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.junit.vintage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>junit-vintage-engine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>一开始不明白为什么，直到踩了坑才知道这很有必要</p>
<table>
<thead>
<tr>
<th>artifactId</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>junit-vintage-engine</td>
<td>用于运行JUnit 4 引擎测试</td>
</tr>
<tr>
<td>junit-jupiter-engine</td>
<td>用于运行JUnit 5 引擎测试</td>
</tr>
</tbody>
</table>
<p>下面这段测试用例</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserMapperTest</span> <span class="token keyword">extends</span> <span class="token class-name">BaseTest</span> <span class="token punctuation">{</span>

<span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>

<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">countByExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">final</span> <span class="token keyword">long</span> count <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">countByExample</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Assertions</span><span class="token punctuation">.</span><span class="token function">assertTrue</span><span class="token punctuation">(</span>count<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>问题描述：</strong></p>
<p>运行的时候唯独这个测试用例一直报 userMapper 为null，但是其他的测试用例都是正常的。</p>
<p><strong>排查过程：</strong></p>
<p>各种关于spring依赖注入情况都排查了，就是没办法，直到把关注点放到了@Test这个注解。</p>
<p>如果spring-boot-starter-test 没有 排除 junit-vintage-engine依赖，那么会导致
org.junit.jupiter.api.Test 和 org.junit.Test 同时存在，如果不小心引入了org.junit.Test ，那么就会发生这个spring 属性注入为null的情况</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>结论：</p>
<p>1、Spring Boot项目推荐编写JUnit 5测试用例，所以不需要JUnit 4引擎。
2、开发者在引入包时，有两个选择，不小心导错包导致出现MockMvc和WebApplicationContext无法加载，间接导致出现属性为null的情况
综上所述，默认将依赖项排除在外。</p>
<p>附录BaseTest</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">DisplayName</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span>extension<span class="token punctuation">.</span></span><span class="token class-name">ExtendWith</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span></span><span class="token class-name">SpringExtension</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>test<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">MockMvc</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">WebApplicationContext</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@ExtendWith</span><span class="token punctuation">(</span><span class="token class-name">SpringExtension</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@SpringBootTest</span><span class="token punctuation">(</span>classes <span class="token operator">=</span> <span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@DisplayName</span><span class="token punctuation">(</span><span class="token string">"Base Test"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BaseTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">protected</span> <span class="token class-name">WebApplicationContext</span> wac<span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token class-name">MockMvc</span>               mockMvc<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@org.junit.jupiter.api.BeforeEach</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        mockMvc <span class="token operator">=</span> <span class="token function">webAppContextSetup</span><span class="token punctuation">(</span>wac<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></template>
