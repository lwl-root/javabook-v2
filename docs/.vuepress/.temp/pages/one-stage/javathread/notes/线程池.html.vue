<template><h1 id="线程池" tabindex="-1"><a class="header-anchor" href="#线程池" aria-hidden="true">#</a> 线程池</h1>
<p>线程池（Thread Pool）：把一个或多个线程通过统一的方式进行调度和重复使用的技术，避免了因为线程过多而带来使用上的开销。</p>
<p>为什么要使用线程池？</p>
<ul>
<li>可重复使用已有线程，避免对象创建、消亡和过度切换的性能开销。</li>
<li>避免创建大量同类线程所导致的资源过度竞争和内存溢出的问题。</li>
<li>支持更多功能。比如，延迟任务线程池（newScheduledThreadPool）和缓存线程池（newCachedThreadPool）等。</li>
</ul>
<p>创建线程池有两种方式：<strong>ThreadPoolExecutor</strong> 和 Executors（后续讲解） 。</p>
</template>
