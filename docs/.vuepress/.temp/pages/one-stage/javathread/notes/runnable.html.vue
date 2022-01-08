<template><h1 id="使用-runnable-接口创建线程" tabindex="-1"><a class="header-anchor" href="#使用-runnable-接口创建线程" aria-hidden="true">#</a> 使用 Runnable 接口创建线程</h1>
<p>由于 Java 只允许单继承，因此一旦一个类已有父类，那么就无法再继承 Thread 类，从而导致上述实现线程的方式无法使用。</p>
<p>使用 Runnable 接口创建线程能解决上述问题。</p>
<p>Runnable 接口声明了一个 <strong>Runnable#run</strong> 方法。任何一个类都可以通过实现 Runnable 接口并实现其 <strong>Runnable#run</strong> 方法来完成线程的所有活动。</p>
<p>使用实现 Runnable 接口的方式创建线程的实现步骤如下：</p>
<ol>
<li>定义 Xxx 类并实现 java.lang.Runnable 接口，并实现它所声明的 <strong>run</strong> 方法；</li>
<li>创建线程对象；</li>
<li>调用 <strong>start</strong> 方法启动线程。</li>
</ol>
</template>
