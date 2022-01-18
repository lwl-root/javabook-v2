<template><h1 id="guava-学习之-charmatcher" tabindex="-1"><a class="header-anchor" href="#guava-学习之-charmatcher" aria-hidden="true">#</a> Guava 学习之 CharMatcher</h1>
<h2 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h2>
<p>之前，Guava 中的 StringUtil 在无节制地增长，添加了越来越多的方法，如：</p>
<ul>
<li>allAscii</li>
<li>collapse</li>
<li>collapseControlChars</li>
<li>collapseWhitespace</li>
<li>lastIndexNotOf</li>
<li>numSharedChars</li>
<li>removeChars</li>
<li>removeCrLf</li>
<li>retainAllChars</li>
<li>strip</li>
<li>stripAndCollapse</li>
<li>stripNonDigits</li>
</ul>
<p>这些函数本质上是以下两个方面的乘积（M x N 种情况）：</p>
<ol>
<li>何如定义一个匹配规则来选中字符？ （M 种情况）</li>
<li>对于选中的字符进行何种的操作？ （N 种情况）</li>
</ol>
<p>为了解决这样的爆炸式增长，Guava 提供了 <strong><code>CharMatcher</code></strong>：</p>
<ul>
<li>一个 CharMacher 对象，就代表这一种选中规则，或者说，符合这种规则的所有字符串。</li>
<li>而 CharMacher 的各种实例方法，就代表着对这类字符所要进行的各种操作。</li>
</ul>
<p>我们就可以用最小化的 API 来处理字符匹配和字符操作，把 M × N 的复杂度下降到了 M + N 。</p>
<p>直观地说，你可以把 CharMatcher 看做是一些特别字符串的表示，例如：数字、空格等。而事实上，CharMatcher 只是一个针对字符串的布尔断言（它实现了 <strong><code>Predicate&lt;Character&gt;</code></strong>），但考虑到【空白字符串】、【小写单词】等相关需求是很普遍的，Guava 还是为字符串提供了专门的语法和 API。</p>
<p>CharMatcher 的功能主要在于对特定类或字符串执行这些操作：trimming、collapsing、removing、retaining 等。</p>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h2>
<h3 id="创建-charmatcher" tabindex="-1"><a class="header-anchor" href="#创建-charmatcher" aria-hidden="true">#</a> 创建 CharMatcher</h3>
<p>很多需求都可以被 CharMatcher 的工厂方法满足：</p>
<ul>
<li>any()</li>
<li>none()</li>
<li>whitespace()</li>
<li>breakingWhitespace()</li>
<li>invisible()</li>
<li>digit()</li>
<li>javaLetter()</li>
<li>javaDigit()</li>
<li>javaLetterOrDigit()</li>
<li>javaIsoControl()</li>
<li>javaLowerCase()</li>
<li>javaUpperCase()</li>
<li>ascii()</li>
<li>singleWidth()</li>
</ul>
<p>其它一些常用的获得一个 CharMatcher 的方法包括：</p>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">anyOf(CharSequence)</td>
<td style="text-align:left">表明你想匹配的所有字符，例如：<code>CharMatcher.anyOf(&quot;aeiou&quot;)</code> 可以匹配小写元音字母。</td>
</tr>
<tr>
<td style="text-align:left">is(char)</td>
<td style="text-align:left">表明你想匹配的一个确定的字符。</td>
</tr>
<tr>
<td style="text-align:left">inRange(char, char)</td>
<td style="text-align:left">表明你想匹配的一个字符范围，例如：<code>CharMatcher.inRange('a', 'z')</code>。</td>
</tr>
</tbody>
</table>
<p>此外，CharMatcher 还有这些方法：<code>negate()</code>、<code>and(CharMatcher)</code>、<code>or(CharMatcher)</code>。这些方法可以为 CharMatcher 提供方便的布尔运算。</p>
<h3 id="使用-charmatcher" tabindex="-1"><a class="header-anchor" href="#使用-charmatcher" aria-hidden="true">#</a> 使用 CharMatcher</h3>
<p>CharMatcher 提供了很多方法来对匹配的字符序列 CharSequence 进行操作。以下只是列出了一些常用方法。</p>
<table>
<thead>
<tr>
<th style="text-align:left">方法</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">collapseFrom(CharSequence, char)</td>
<td style="text-align:left">将一组连续匹配的字符串替换为一个指定的字符。例如：<code>WHITESPACE.collapseFrom(string, ' ')</code> 可以将连续的空字符串替换为单个字符。</td>
</tr>
<tr>
<td style="text-align:left">matchesAllOf(CharSequence)</td>
<td style="text-align:left">测试字符序列是否全部匹配。例如：ASCII.matchesAllOf(string) 可以测试字符是否全部是 ASCII。</td>
</tr>
<tr>
<td style="text-align:left">removeFrom(CharSequence)</td>
<td style="text-align:left">将匹配的字符序列移除</td>
</tr>
<tr>
<td style="text-align:left">retainFrom(CharSequence)</td>
<td style="text-align:left">将没有匹配的字符序列移除</td>
</tr>
<tr>
<td style="text-align:left">trimFrom(CharSequence)</td>
<td style="text-align:left">去除开头和结尾匹配的部分</td>
</tr>
<tr>
<td style="text-align:left">replaceFrom(CharSequence, CharSequence)</td>
<td style="text-align:left">将匹配的字符替换为给定的序列</td>
</tr>
</tbody>
</table>
<h2 id="方法分类" tabindex="-1"><a class="header-anchor" href="#方法分类" aria-hidden="true">#</a> 方法分类</h2>
<p>根据函数的返回值和名称将这些方法分为三类。</p>
<h3 id="第一类是判定型函数" tabindex="-1"><a class="header-anchor" href="#第一类是判定型函数" aria-hidden="true">#</a> 第一类是判定型函数</h3>
<p>用来判断 CharMacher 和入参字符串的匹配关系。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token char">'a'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">matchesAllOf</span><span class="token punctuation">(</span><span class="token string">"aaa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
<span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token char">'a'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">matchesAnyOf</span><span class="token punctuation">(</span><span class="token string">"aba"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
<span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token char">'a'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">matchesNoneOf</span><span class="token punctuation">(</span><span class="token string">"aba"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="第二类是计数型函数" tabindex="-1"><a class="header-anchor" href="#第二类是计数型函数" aria-hidden="true">#</a> 第二类是计数型函数</h3>
<p>查找入参字符串中第一次、最后一次出现目标字符的位置，或者目标字符出现的次数，比如 indexIn，lastIndexIn 和 countIn。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token char">'a'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">countIn</span><span class="token punctuation">(</span><span class="token string">"aaa"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 3</span>
<span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token char">'a'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexIn</span><span class="token punctuation">(</span><span class="token string">"java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="第三类就是对匹配字符的操作" tabindex="-1"><a class="header-anchor" href="#第三类就是对匹配字符的操作" aria-hidden="true">#</a> 第三类就是对匹配字符的操作</h3>
<p>包括 removeFrom、retainFrom、replaceFrom、trimFrom、collapseFrom 等。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token char">'a'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">retainFrom</span><span class="token punctuation">(</span><span class="token string">"bazaar"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "aaa"</span>
<span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token char">'a'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeFrom</span><span class="token punctuation">(</span><span class="token string">"bazaar"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "bzr"</span>
<span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">anyOf</span><span class="token punctuation">(</span><span class="token string">"ab"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trimFrom</span><span class="token punctuation">(</span><span class="token string">"abacatbab"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "cat"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 1.获取字符串中数字：12387</span>
<span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">"mahesh123ff87f"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> result1 <span class="token operator">=</span> <span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">digit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">retainFrom</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 2.把多个空格替换,并去掉首位的空格Mahesh Parashar</span>
<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string">"     Mahesh     Parashar  "</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> result2 <span class="token operator">=</span> <span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">whitespace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trimAndCollapseFrom</span><span class="token punctuation">(</span>str2<span class="token punctuation">,</span> <span class="token char">' '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 3.去掉转义字符(\t,\n,\b...)： abcdefg</span>
<span class="token class-name">String</span> str3 <span class="token operator">=</span> <span class="token string">" ab\tcd\nef\bg"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> result3 <span class="token operator">=</span> <span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">javaIsoControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeFrom</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 4.把所有的数字用"*"代替：***abc**dds</span>
<span class="token class-name">String</span> str4 <span class="token operator">=</span> <span class="token string">"124abc85dds"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> result4 <span class="token operator">=</span> <span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">javaDigit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replaceFrom</span><span class="token punctuation">(</span>str4<span class="token punctuation">,</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 5.获取所有的数字和小写字母 ：124abc85dds1sd</span>
<span class="token class-name">String</span> str5 <span class="token operator">=</span> <span class="token string">"124abc85ddsAF1HNsd"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> result5 <span class="token operator">=</span> <span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">javaDigit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">or</span><span class="token punctuation">(</span><span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">javaLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">retainFrom</span><span class="token punctuation">(</span>str5<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 6.获取所有的大写字母：AFHN</span>
<span class="token class-name">String</span> result6 <span class="token operator">=</span> <span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">javaUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">retainFrom</span><span class="token punctuation">(</span>str5<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 7.获取所有单字节长度的符号：,dg,123AH</span>
<span class="token class-name">String</span> str7 <span class="token operator">=</span> <span class="token string">",dg,123AH中国"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> result7 <span class="token operator">=</span> <span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">singleWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">retainFrom</span><span class="token punctuation">(</span>str7<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 8.获取字母：FirstNameLastName</span>
<span class="token class-name">String</span> str8 <span class="token operator">=</span> <span class="token string">"FirstName LastName +1 123 456 789 !@#$%^&amp;*()_+|}{:\"?>&lt;"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> result8 <span class="token operator">=</span> <span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">javaLetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">retainFrom</span><span class="token punctuation">(</span>str8<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 9.获取字母和数字：FirstNameLastName1123456789</span>
<span class="token class-name">String</span> result9 <span class="token operator">=</span> <span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">javaLetterOrDigit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">retainFrom</span><span class="token punctuation">(</span>str8<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 10.出现次数统计：54</span>
<span class="token class-name">Integer</span> count10 <span class="token operator">=</span> <span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">countIn</span><span class="token punctuation">(</span>str8<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 11.数字出现次数：10</span>
<span class="token class-name">Integer</span> count11 <span class="token operator">=</span> <span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">digit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">countIn</span><span class="token punctuation">(</span>str8<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 12.获得除大写字母外其他所有字符 ：FN LN +1 123 456 789 !@#$%^&amp;*()_+|}{:"?>&lt;</span>
<span class="token class-name">String</span> result12 <span class="token operator">=</span> <span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">javaLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">negate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">retainFrom</span><span class="token punctuation">(</span>str8<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>CharMatcher 本身提供了很多 CharMatcher 的实现类，如下:</p>
<ul>
<li>ANY: 匹配任何字符</li>
<li>ASCII: 匹配是否是ASCII字符</li>
<li>BREAKING_WHITESPACE: 匹配所有可换行的空白字符(不包括非换行空白字符,例如&quot;\u00a0&quot;)</li>
<li>DIGIT: 匹配ASCII数字</li>
<li>INVISIBLE: 匹配所有看不见的字符</li>
<li>JAVA_DIGIT: 匹配UNICODE数字, 使用 Character.isDigit() 实现</li>
<li>JAVA_ISO_CONTROL: 匹配ISO控制字符, 使用 Charater.isISOControl() 实现</li>
<li>JAVA_LETTER: 匹配字母, 使用 Charater.isLetter() 实现</li>
<li>JAVA_LETTER_OR_DIGET: 匹配数字或字母</li>
<li>JAVA_LOWER_CASE: 匹配小写</li>
<li>JAVA_UPPER_CASE: 匹配大写</li>
<li>NONE: 不匹配所有字符</li>
<li>SINGLE_WIDTH: 匹配单字宽字符, 如中文字就是双字宽</li>
<li>WHITESPACE: 匹配所有空白字符</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 会截取掉字符串末尾的空格，并将中间连续的空格合并成一个。</span>
<span class="token class-name">CharMatcher</span><span class="token punctuation">.</span>WHITESPACE<span class="token punctuation">.</span><span class="token function">trimAndCollapseFrom</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> <span class="token char">' '</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 将一个字符串中的 “alex” 去掉。</span>
<span class="token class-name">CharMatcher</span><span class="token punctuation">.</span><span class="token function">anyOf</span><span class="token punctuation">(</span><span class="token string">"alex"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">retainFrom</span><span class="token punctuation">(</span>someOtherString<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">CharMatcher</span> <span class="token function">is</span><span class="token punctuation">(</span><span class="token keyword">char</span> match<span class="token punctuation">)</span><span class="token operator">:</span> 返回匹配指定字符的 <span class="token class-name">Matcher</span>
<span class="token class-name">CharMatcher</span> <span class="token function">isNot</span><span class="token punctuation">(</span><span class="token keyword">char</span> match<span class="token punctuation">)</span><span class="token operator">:</span> 返回不匹配指定字符的 <span class="token class-name">Matcher</span>
<span class="token class-name">CharMatcher</span> <span class="token function">anyOf</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> sequence<span class="token punctuation">)</span><span class="token operator">:</span> 返回匹配 sequence 中任意字符的 <span class="token class-name">Matcher</span>
<span class="token class-name">CharMatcher</span> <span class="token function">noneOf</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> sequence<span class="token punctuation">)</span><span class="token operator">:</span> 返回不匹配 sequence 中任何一个字符的 <span class="token class-name">Matcher</span>
<span class="token class-name">CharMatcher</span> <span class="token function">inRange</span><span class="token punctuation">(</span><span class="token keyword">char</span> startInclusive<span class="token punctuation">,</span> <span class="token keyword">char</span> endIncludesive<span class="token punctuation">)</span><span class="token operator">:</span> 返回匹配范围内任意字符的 <span class="token class-name">Matcher</span>
<span class="token class-name">CharMatcher</span> <span class="token function">forPredicate</span><span class="token punctuation">(</span><span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">Charater</span><span class="token punctuation">></span></span> predicate<span class="token punctuation">)</span><span class="token operator">:</span> 返回使用 predicate的<span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 判断匹配的 <span class="token class-name">Matcher</span>
<span class="token class-name">CharMatcher</span> <span class="token function">negate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> 返回以当前 <span class="token class-name">Matcher</span> 判断规则相反的 <span class="token class-name">Matcher</span>
<span class="token class-name">CharMatcher</span> <span class="token function">and</span><span class="token punctuation">(</span><span class="token class-name">CharMatcher</span> other<span class="token punctuation">)</span><span class="token operator">:</span> 返回与 other 匹配条件组合做与来判断的 <span class="token class-name">Matcher</span>
<span class="token class-name">CharMatcher</span> <span class="token function">or</span><span class="token punctuation">(</span><span class="token class-name">CharMatcher</span> other<span class="token punctuation">)</span><span class="token operator">:</span> 返回与 other 匹配条件组合做或来判断的 <span class="token class-name">Matcher</span>
<span class="token keyword">boolean</span> <span class="token function">matchesAnyOf</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> sequence<span class="token punctuation">)</span><span class="token operator">:</span> 只要 sequence 中有任意字符能匹配 <span class="token class-name">Matcher</span>，返回 <span class="token boolean">true</span>
<span class="token keyword">boolean</span> <span class="token function">matchesAllOf</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> sequence<span class="token punctuation">)</span><span class="token operator">:</span> sequence中所有字符都能匹配<span class="token class-name">Matcher</span><span class="token punctuation">,</span>返回<span class="token boolean">true</span>
<span class="token keyword">boolean</span> <span class="token function">matchesNoneOf</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> sequence<span class="token punctuation">)</span><span class="token operator">:</span> sequence中所有字符都不能匹配<span class="token class-name">Matcher</span><span class="token punctuation">,</span>返回<span class="token boolean">true</span>
<span class="token keyword">int</span> <span class="token function">indexIn</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> sequence<span class="token punctuation">)</span><span class="token operator">:</span> 返回sequence中匹配到的第一个字符的坐标
<span class="token keyword">int</span> <span class="token function">indexIn</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> sequence<span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">)</span><span class="token operator">:</span> 返回从start开始<span class="token punctuation">,</span>在sequence中匹配到的第一个字符的坐标
<span class="token keyword">int</span> <span class="token function">lastIndexIn</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> sequence<span class="token punctuation">)</span><span class="token operator">:</span> 返回sequence中最后一次匹配到的字符的坐标
<span class="token keyword">int</span> <span class="token function">countIn</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> sequence<span class="token punctuation">)</span><span class="token operator">:</span> 返回sequence中匹配到的字符计数
<span class="token class-name">String</span> <span class="token function">removeFrom</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> sequence<span class="token punctuation">)</span><span class="token operator">:</span> 删除sequence中匹配到到的字符并返回
<span class="token class-name">String</span> <span class="token function">retainFrom</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> sequence<span class="token punctuation">)</span><span class="token operator">:</span> 保留sequence中匹配到的字符并返回
<span class="token class-name">String</span> <span class="token function">replaceFrom</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> sequence<span class="token punctuation">,</span> <span class="token keyword">char</span> replacement<span class="token punctuation">)</span><span class="token operator">:</span> 替换sequence中匹配到的字符并返回
<span class="token class-name">String</span> <span class="token function">trimFrom</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> sequence<span class="token punctuation">)</span><span class="token operator">:</span> 删除首尾匹配到的字符并返回
<span class="token class-name">String</span> <span class="token function">trimLeadingFrom</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> sequence<span class="token punctuation">)</span><span class="token operator">:</span> 删除首部匹配到的字符
<span class="token class-name">String</span> <span class="token function">trimTrailingFrom</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> sequence<span class="token punctuation">)</span><span class="token operator">:</span> 删除尾部匹配到的字符
<span class="token class-name">String</span> <span class="token function">collapseFrom</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> sequence<span class="token punctuation">,</span> <span class="token keyword">char</span> replacement<span class="token punctuation">)</span><span class="token operator">:</span> 将匹配到的组<span class="token punctuation">(</span>连续匹配的字符<span class="token punctuation">)</span>替换成replacement
<span class="token class-name">String</span> <span class="token function">trimAndCollapseFrom</span><span class="token punctuation">(</span><span class="token class-name">CharSequence</span> sequence<span class="token punctuation">,</span> <span class="token keyword">char</span> replacement<span class="token punctuation">)</span><span class="token operator">:</span> 先trim在replace
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></template>
