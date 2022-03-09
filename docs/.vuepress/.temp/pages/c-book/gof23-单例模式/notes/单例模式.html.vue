<template><h1 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h1>
<h2 id="饿汉式与懒汉式" tabindex="-1"><a class="header-anchor" href="#饿汉式与懒汉式" aria-hidden="true">#</a> 饿汉式与懒汉式</h2>
<h3 id="_1-饿汉式单例" tabindex="-1"><a class="header-anchor" href="#_1-饿汉式单例" aria-hidden="true">#</a> 1.饿汉式单例</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 单利模式-饿汉式
 * 缺点：可能浪费内存
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hungry</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Hungry</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">Hungry</span> HUNGRY <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hungry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Hungry</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> HUNGRY<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_2-懒汉式" tabindex="-1"><a class="header-anchor" href="#_2-懒汉式" aria-hidden="true">#</a> 2.懒汉式</h3>
<blockquote>
<p>懒汉式大致说明：</p>
<p>采用 双重检测锁模式（DCL懒汉式） 以及 volatile 来修饰对象，防止指令重排，保证正常操作下的对象是单例的，但可以通过反射机制来破坏单例，使用反射破坏如下所示，可以采取构造时判断当前对象是否存在，也可以采取红绿灯（自定义标志+加密，除非反编译+解密）来保证单例，最好的解决方案是采用枚举。</p>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>gof<span class="token punctuation">.</span>single</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Constructor</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Field</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 单例模式-懒汉式
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LazyMan</span> <span class="token punctuation">{</span>

    <span class="token comment">//两个反射解决方式，添加标志</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> xxx <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">LazyMan</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">LazyMan</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

           <span class="token comment">/* //第一个正常，第二个反射
           if (lazyMan != null) {
                throw new RuntimeException("不能使用反射");
            }*/</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>xxx <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                xxx <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">"不能使用反射"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//private static LazyMan lazyMan;</span>

    <span class="token comment">//3.防止指令重排</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token class-name">LazyMan</span> lazyMan<span class="token punctuation">;</span>

   <span class="token comment">/* 1.
   public static LazyMan getInstance(){
        if(lazyMan==null){
            lazyMan=new LazyMan();
        }
        return lazyMan;
    }*/</span>


    <span class="token comment">//2.双重检测锁模式，又称 DCL懒汉式</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">LazyMan</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>lazyMan <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">LazyMan</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>lazyMan <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    lazyMan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LazyMan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token doc-comment comment">/**
                     * 问题所在：new LazyMan();不是一个原子性操作
                     * 分三步：
                     * 1.分配内存空间
                     * 2.执行构造方法，初始化对象
                     * 3.把这个对象指向这个空间
                     *
                     * 正常：1》2》3
                     * A调用：1》3》2 没问题，这样是可以的
                     * B调用：在A3的时候调用，发现有这个对象，直接返回，但这个对象是没有初始化的，那么再调用这个对象属性的时候就会报错
                     */</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> lazyMan<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 通过反射破坏单例（就是破坏私有的构造器）
         */</span>
        <span class="token comment">/*//正常得到对象
        LazyMan lazyMan1 = LazyMan.getInstance();*/</span>
        <span class="token doc-comment comment">/**
         * 假设通过反编译一些手段得到属性名
         */</span>
        <span class="token class-name">Field</span> xxx <span class="token operator">=</span> <span class="token class-name">LazyMan</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">"xxx"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        xxx<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取构造器</span>
        <span class="token class-name">Constructor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">LazyMan</span><span class="token punctuation">></span></span> declaredConstructor <span class="token operator">=</span> <span class="token class-name">LazyMan</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredConstructor</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//设置成可访问的，即破坏了private属性</span>
        declaredConstructor<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//两个都是反射得到</span>
        <span class="token class-name">LazyMan</span> lazyMan1 <span class="token operator">=</span> declaredConstructor<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//改回原值,那么就能得到对象</span>
        xxx<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>lazyMan1<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">LazyMan</span> lazyMan2 <span class="token operator">=</span> declaredConstructor<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>lazyMan1 <span class="token operator">==</span> lazyMan2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>

        <span class="token doc-comment comment">/**
         * 解决正常、反射得到的
         * 但这种是需要第一个对象是正常得到的才行，如果两个对象都是反射得到的就不行
         * 如果第一个是反射得到的，第二个是正常的，还是能得到
         *  private LazyMan() <span class="token punctuation">{</span>
         *         synchronized (LazyMan.class) <span class="token punctuation">{</span>
         *             if (lazyMan != null) <span class="token punctuation">{</span>
         *                 throw new RuntimeException("不能使用反射");
         *             <span class="token punctuation">}</span>
         *         <span class="token punctuation">}</span>
         *   <span class="token punctuation">}</span>
         *
         */</span>

        <span class="token doc-comment comment">/**
         * 解决都是反射得到的：通过自定义一个标志解决，但是如果反编译之后，是可以得到自定义的字段名的，那么也是可以得到对象的
         *
         * 通过源码 newInstance 得知，（1.5之后更新了枚举类，枚举就是单例）不能通过反射破坏枚举，即可通过枚举来解决
         *
         * 枚举类使用反射时不是无参构造，是有参构造
         *
         * 枚举类.class.getDeclaredConstructor(String.class,int.class);
         *
         * 此时反射得到对象就会报错，不允许反射破坏枚举
         *
         *
         */</span>

        <span class="token comment">/*for (int i = 0; i &lt;10; i++) {
            new Thread(
                    LazyMan::getInstance
            ).start();
        }*/</span>
        <span class="token doc-comment comment">/**
         * 1.多线程环境下，不能保证单例
         * Thread-0---ok
         * Thread-4---ok
         * Thread-3---ok
         * Thread-1---ok
         * Thread-2---ok
         *
         * 2.双重检测锁模式，又称 DCL懒汉式 会有指令重排的问题
         * Thread-0---ok
         *
         * 3.加 volatile 防止指令重排
         *
         */</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br></div></div><blockquote>
<p>newInstance 源码</p>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token class-name">Object</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> initargs<span class="token punctuation">)</span>
        <span class="token keyword">throws</span> <span class="token class-name">InstantiationException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalAccessException</span><span class="token punctuation">,</span>
               <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">,</span> <span class="token class-name">InvocationTargetException</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>override<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">Reflection</span><span class="token punctuation">.</span><span class="token function">quickCheckMemberAccess</span><span class="token punctuation">(</span>clazz<span class="token punctuation">,</span> modifiers<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> caller <span class="token operator">=</span> <span class="token class-name">Reflection</span><span class="token punctuation">.</span><span class="token function">getCallerClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">checkAccess</span><span class="token punctuation">(</span>caller<span class="token punctuation">,</span> clazz<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> modifiers<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
		<span class="token comment">//无法以反射方式创建枚举对象</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>clazz<span class="token punctuation">.</span><span class="token function">getModifiers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token class-name">Modifier</span><span class="token punctuation">.</span>ENUM<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">"Cannot reflectively create enum objects"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ConstructorAccessor</span> ca <span class="token operator">=</span> constructorAccessor<span class="token punctuation">;</span>   <span class="token comment">// read volatile</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ca <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ca <span class="token operator">=</span> <span class="token function">acquireConstructorAccessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>
        <span class="token class-name">T</span> inst <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> ca<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span>initargs<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> inst<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2>
<blockquote>
<p>对于 <a href="http://c.biancheng.net/java/" target="_blank" rel="noopener noreferrer">Java<ExternalLinkIcon/></a> 来说，单例模式可以保证在一个 JVM 中只存在单一实例。单例模式的应用场景主要有以下几个方面。</p>
<ul>
<li>需要频繁创建的一些类，使用单例可以降低系统的内存压力，减少 GC。</li>
<li>某类只要求生成一个对象的时候，如一个班中的班长、每个人的身份证号等。</li>
<li>某些类创建实例时占用资源较多，或实例化耗时较长，且经常使用。</li>
<li>某类需要频繁实例化，而创建的对象又频繁被销毁的时候，如多线程的线程池、网络连接池等。</li>
<li>频繁访问数据库或文件的对象。</li>
<li>对于一些控制硬件级别的操作，或者从系统上来讲应当是单一控制逻辑的操作，如果有多个实例，则系统会完全乱套。</li>
<li>当对象需要被共享的场合。由于单例模式只允许创建一个对象，共享该对象可以节省内存，并加快对象访问速度。如 Web 中的配置对象、数据库的连接池等</li>
</ul>
</blockquote>
</template>
