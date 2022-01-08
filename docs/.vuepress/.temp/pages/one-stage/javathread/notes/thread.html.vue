<template><h1 id="使用-thread-类创建线程" tabindex="-1"><a class="header-anchor" href="#使用-thread-类创建线程" aria-hidden="true">#</a> 使用 Thread 类创建线程</h1>
<p>Java 提供了 java.lang.Thread 类支持多线程编程，该类提供了大量的方法来控制和操作线程。</p>
<table>
<thead>
<tr>
<th style="text-align:left">#</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">run 方法</td>
<td style="text-align:left">直接调用线程的执行函数</td>
</tr>
<tr>
<td style="text-align:left">start 方法</td>
<td style="text-align:left">启动线程</td>
</tr>
<tr>
<td style="text-align:left">sleep 方法</td>
<td style="text-align:left">让线程休眠（即让出 CPU）指定 <strong>毫秒</strong> 数</td>
</tr>
<tr>
<td style="text-align:left">getName 方法</td>
<td style="text-align:left">返回该线程的名称</td>
</tr>
<tr>
<td style="text-align:left">getPriority 方法</td>
<td style="text-align:left">返回线程的优先级</td>
</tr>
<tr>
<td style="text-align:left">setPriority 方法</td>
<td style="text-align:left">更改线程的优先级</td>
</tr>
<tr>
<td style="text-align:left">getState 方法</td>
<td style="text-align:left">返回该线程的状态</td>
</tr>
<tr>
<td style="text-align:left">isAlive 方法</td>
<td style="text-align:left">测试线程是否处于活动状态</td>
</tr>
<tr>
<td style="text-align:left">join 方法</td>
<td style="text-align:left">等待该线程终止</td>
</tr>
<tr>
<td style="text-align:left">interrupt 方法</td>
<td style="text-align:left">中断线程</td>
</tr>
<tr>
<td style="text-align:left">yield 方法</td>
<td style="text-align:left">暂停正在执行的线程，并执行其他线程</td>
</tr>
</tbody>
</table>
<p>使用继承 Thread 类的方式创建线程的实现步骤如下：</p>
<ol>
<li>定义一个类去继承 Thread 类，重写 <strong>Thread#run</strong> 方法，在 <strong>Thread#run</strong> 方法中实现代码逻辑；</li>
<li>创建线程对象;</li>
<li>调用 <strong>Thread#start</strong> 方法启动线程。</li>
</ol>
</template>
