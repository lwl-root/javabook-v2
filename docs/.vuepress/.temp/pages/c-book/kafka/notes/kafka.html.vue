<template><h1 id="消息队列的流派" tabindex="-1"><a class="header-anchor" href="#消息队列的流派" aria-hidden="true">#</a> 消息队列的流派</h1>
<h4 id="什么是-mq" tabindex="-1"><a class="header-anchor" href="#什么是-mq" aria-hidden="true">#</a> 什么是 MQ</h4>
<blockquote>
<p>Message Queue（MQ），消息队列中间件。很多人都说：MQ 通过将消息的发送和接收分离来实现应用程序的异步和解偶，这个给人的直觉是——MQ 是异步的，用来解耦的，但是这个只是 MQ 的效果而不是目的。MQ 真正的目的是为了通讯，屏蔽底层复杂的通讯协议，定义了一套应用层的、更加简单的通讯协议。一个分布式系统中两个模块之间通讯要么是HTTP，要么是自己开发的（rpc） TCP，但是这两种协议其实都是原始的协议。HTTP 协议很难实现两端通讯——模块 A 可以调用 B，B 也可以主动调用 A，如果要做到这个两端都要背上WebServer，而且还不支持⻓连接（HTTP 2.0 的库根本找不到）。TCP 就更加原始了，粘包、心跳、私有的协议，想一想头皮就发麻。MQ 所要做的就是在这些协议之上构建一个简单的“协议”——生产者/消费者模型。MQ 带给我的“协议”不是具体的通讯协议，而是更高层次通讯模型。它定义了两个对象——发送数据的叫生产者；接收数据的叫消费者， 提供一个SDK 让我们可以定义自己的生产者和消费者实现消息通讯而无视底层通讯协议</p>
</blockquote>
<h4 id="有-broker-的-mq" tabindex="-1"><a class="header-anchor" href="#有-broker-的-mq" aria-hidden="true">#</a> 有 Broker 的 MQ</h4>
<blockquote>
<p>这个流派通常有一台服务器作为 Broker，所有的消息都通过它中转。生产者把消息发送给它就结束自己的任务了，Broker 则把消息主动推送给消费者（或者消费者主动轮询）</p>
</blockquote>
<h4 id="重-topic" tabindex="-1"><a class="header-anchor" href="#重-topic" aria-hidden="true">#</a> 重 Topic</h4>
<blockquote>
<p>kafka、JMS（ActiveMQ）就属于这个流派，生产者会发送 key 和数据到 Broker，由 Broker比较 key 之后决定给哪个消费者。这种模式是我们最常⻅的模式，是我们对 MQ 最多的印象。在这种模式下一个 topic 往往是一个比较大的概念，甚至一个系统中就可能只有一个topic，topic 某种意义上就是 queue，生产者发送 key 相当于说：“hi，把数据放到 key 的队列中”</p>
</blockquote>
<blockquote>
<p>如上图所示，Broker 定义了三个队列，key1，key2，key3，生产者发送数据的时候会发送key1 和 data，Broker 在推送数据的时候则推送 data（也可能把 key 带上）。</p>
</blockquote>
<blockquote>
<p>虽然架构一样但是 kafka 的性能要比 jms 的性能不知道高到多少倍，所以基本这种类型的MQ 只有 kafka 一种备选方案。如果你需要一条暴力的数据流（在乎性能而非灵活性）那么kafka 是最好的选择</p>
</blockquote>
<h4 id="轻-topic" tabindex="-1"><a class="header-anchor" href="#轻-topic" aria-hidden="true">#</a> 轻 Topic</h4>
<blockquote>
<p>这种的代表是 RabbitMQ（或者说是 AMQP）。生产者发送 key 和数据，消费者定义订阅的队列，Broker 收到数据之后会通过一定的逻辑计算出 key 对应的队列，然后把数据交给队列</p>
</blockquote>
<blockquote>
<p>这种模式下解耦了 key 和 queue，在这种架构中 queue 是非常轻量级的（在 RabbitMQ 中它的上限取决于你的内存），消费者关心的只是自己的 queue；生产者不必关心数据最终给谁只要指定 key 就行了，中间的那层映射在 AMQP 中叫 exchange（交换机）。</p>
</blockquote>
<p>AMQP 中有四种 exchange</p>
<ul>
<li>Direct exchange：key 就等于 queue</li>
<li>Fanout exchange：无视 key，给所有的 queue 都来一份</li>
<li>Topic exchange：key 可以用“宽字符”模糊匹配 queue</li>
<li>Headers exchange：无视 key，通过查看消息的头部元数据来决定发给那个</li>
<li>queue（AMQP 头部元数据非常丰富而且可以自定义）</li>
</ul>
<p>这种结构的架构给通讯带来了很大的灵活性，我们能想到的通讯方式都可以用这四种exchange 表达出来。如果你需要一个企业数据总线（在乎灵活性）那么 RabbitMQ 绝对的值得一用</p>
<h4 id="无-broker-的-mq" tabindex="-1"><a class="header-anchor" href="#无-broker-的-mq" aria-hidden="true">#</a> 无 Broker 的 MQ</h4>
<blockquote>
<p>无 Broker 的 MQ 的代表是 ZeroMQ。该作者非常睿智，他非常敏锐的意识到——MQ 是更高级的 Socket，它是解决通讯问题的。所以 ZeroMQ 被设计成了一个“库”而不是一个中间件，这种实现也可以达到——没有 Broker 的目的</p>
</blockquote>
<blockquote>
<p>节点之间通讯的消息都是发送到彼此的队列中，每个节点都既是生产者又是消费者。ZeroMQ做的事情就是封装出一套类似于 Socket 的 API 可以完成发送数据，读取数据</p>
</blockquote>
<blockquote>
<p>ZeroMQ 其实就是一个跨语言的、重量级的 Actor 模型邮箱库。你可以把自己的程序想象成一个 Actor，ZeroMQ 就是提供邮箱功能的库；ZeroMQ 可以实现同一台机器的 RPC 通讯也可以实现不同机器的 TCP、UDP 通讯，如果你需要一个强大的、灵活、野蛮的通讯能力，别犹豫 ZeroMQ</p>
</blockquote>
<h2 id="一、kafka介绍" tabindex="-1"><a class="header-anchor" href="#一、kafka介绍" aria-hidden="true">#</a> 一、Kafka介绍</h2>
<blockquote>
<p>Kafka是最初由Linkedin公司开发，是一个分布式、支持分区的（partition）、多副本的
（replica），基于zookeeper协调的分布式消息系统，它的最大的特性就是可以实时的处理
大量数据以满足各种需求场景：比如基于hadoop的批处理系统、低延迟的实时系统、
Storm/Spark流式处理引擎，web/nginx日志、访问日志，消息服务等等，用scala语言编
写，Linkedin于 2010 年贡献给了Apache基金会并成为顶级开源 项目。</p>
</blockquote>
<h3 id="_1-kafka的使用场景" tabindex="-1"><a class="header-anchor" href="#_1-kafka的使用场景" aria-hidden="true">#</a> 1.Kafka的使用场景</h3>
<blockquote>
<p>日志收集：一个公司可以用Kafka收集各种服务的log，通过kafka以统一接口服务的方式
开放给各种consumer，例如hadoop、Hbase、Solr等。
消息系统：解耦和生产者和消费者、缓存消息等。
用户活动跟踪：Kafka经常被用来记录web用户或者app用户的各种活动，如浏览网⻚、
搜索、点击等活动，这些活动信息被各个服务器发布到kafka的topic中，然后订阅者通过
订阅这些topic来做实时的监控分析，或者装载到hadoop、数据仓库中做离线分析和挖
掘。
运营指标：Kafka也经常用来记录运营监控数据。包括收集各种分布式应用的数据，生产
各种操作的集中反馈，比如报警和报告。</p>
</blockquote>
<h3 id="_2-kafka基本概念" tabindex="-1"><a class="header-anchor" href="#_2-kafka基本概念" aria-hidden="true">#</a> 2.Kafka基本概念</h3>
<blockquote>
<p>kafka是一个分布式的，分区的消息(官方称之为commit log)服务。它提供一个消息系统应该
具备的功能，但是确有着独特的设计。可以这样来说，Kafka借鉴了JMS规范的思想，但是确
并 <code>没有完全遵循JMS规范。</code></p>
</blockquote>
<p>首先，让我们来看一下基础的消息(Message)相关术语：</p>
<table>
<thead>
<tr>
<th>名称</th>
<th style="text-align:center">解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>Broker</td>
<td style="text-align:center">消息中间件处理节点，⼀个Kafka节点就是⼀个broker，⼀个或者多个Broker可以组成⼀个Kafka集群</td>
</tr>
<tr>
<td>Topic</td>
<td style="text-align:center">Kafka根据topic对消息进⾏归类，发布到Kafka集群的每条消息都需要指定⼀个topic</td>
</tr>
<tr>
<td>Producer</td>
<td style="text-align:center">消息⽣产者，向Broker发送消息的客户端</td>
</tr>
<tr>
<td>Consumer</td>
<td style="text-align:center">消息消费者，从Broker读取消息的客户端</td>
</tr>
<tr>
<td>ConsumerGroup</td>
<td style="text-align:center">每个Consumer属于⼀个特定的Consumer Group，⼀条消息可以被多个不同的Consumer Group消费，但是⼀个Consumer Group中只能有⼀个Consumer能够消费该消息</td>
</tr>
<tr>
<td>Partition</td>
<td style="text-align:center">物理上的概念，⼀个topic可以分为多个partition，每个partition内部消息是有序的</td>
</tr>
</tbody>
</table>
<p>因此，从一个较高的层面上来看，producer通过网络发送消息到Kafka集群，然后consumer
来进行消费，如下图：
<img src="@source/c-book/kafka/notes/images/QQ截图20220110112502.png" alt="输入图片说明" title="QQ截图20201229183512.png"></p>
<p>服务端(brokers)和客户端(producer、consumer)之间通信通过 <strong>TCP协议</strong> 来完成。</p>
<h2 id="二、kafka基本使用" tabindex="-1"><a class="header-anchor" href="#二、kafka基本使用" aria-hidden="true">#</a> 二、kafka基本使用</h2>
<h3 id="_1-安装前的环境准备" tabindex="-1"><a class="header-anchor" href="#_1-安装前的环境准备" aria-hidden="true">#</a> 1.安装前的环境准备</h3>
<ul>
<li>安装jdk</li>
<li>安装zk</li>
<li>官网下载kafka的压缩包:http://kafka.apache.org/downloads</li>
<li>解压缩至如下路径</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>/usr/local/kafka/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>修改配置文件：/usr/local/kafka/kafka2.11-2.4/config/server.properties</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#broker.id属性在kafka集群中必须要是唯一</span>
broker.id<span class="token operator">=</span> <span class="token number">0</span>
<span class="token comment">#kafka部署的机器ip和提供服务的端口号</span>
<span class="token assign-left variable">listeners</span><span class="token operator">=</span>PLAINTEXT://192.168.65.60:9092
<span class="token comment">#kafka的消息存储文件</span>
log.dir<span class="token operator">=</span>/usr/local/data/kafka-logs
<span class="token comment">#kafka连接zookeeper的地址</span>
zookeeper.connect<span class="token operator">=</span> <span class="token number">192.168</span>.65.60:2181
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_2-启动kafka服务器" tabindex="-1"><a class="header-anchor" href="#_2-启动kafka服务器" aria-hidden="true">#</a> 2.启动kafka服务器</h3>
<p>进入到bin目录下。使用命令来启动</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./kafka-server-start.sh -daemon<span class="token punctuation">..</span>/config/server.properties
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>验证是否启动成功：</p>
<p>进入到zk中的节点看id是 0 的broker有没有存在（上线）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ls</span> /brokers/ids/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>server.properties核心配置详解：</strong></p>
<table>
<thead>
<tr>
<th>Property</th>
<th style="text-align:left">Default</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>broker.id</td>
<td style="text-align:left">0</td>
<td style="text-align:left">每个broker都可以⽤⼀个唯⼀的⾮负整数id进⾏标识；这个id可以作为broker的“名字”，你可以选择任意你喜欢的数字作为id，只要id是唯⼀的即可。</td>
</tr>
<tr>
<td>log.dirs</td>
<td style="text-align:left">/tmp/kafka-logs</td>
<td style="text-align:left">kafka存放数据的路径。这个路径并不是唯⼀的，可以是多个，路径之间只需要使⽤逗号分隔即可；每当创建新partition时，都会选择在包含最少partitions的路径下进⾏。</td>
</tr>
<tr>
<td>listeners</td>
<td style="text-align:left">PLAINTEXT://192.168.65.60:9092</td>
<td style="text-align:left">server接受客户端连接的端⼝，ip配置kafka本机ip即可</td>
</tr>
<tr>
<td>zookeeper.connect</td>
<td style="text-align:left">localhost:2181</td>
<td style="text-align:left">zooKeeper连接字符串的格式为：hostname:port，此处hostname和port分别是ZooKeeper集群中某个节点的host和port；zookeeper如果是集群，连接⽅式为hostname1:port1, hostname2:port2,hostname3:port3</td>
</tr>
<tr>
<td>log.retention.hours</td>
<td style="text-align:left">168</td>
<td style="text-align:left">每个⽇志⽂件删除之前保存的时间。默认数据保存时间对所有topic都⼀样。</td>
</tr>
<tr>
<td>num.partitions</td>
<td style="text-align:left">1</td>
<td style="text-align:left">创建topic的默认分区数</td>
</tr>
<tr>
<td>default.replication.factor</td>
<td style="text-align:left">1</td>
<td style="text-align:left">⾃动创建topic的默认副本数量，建议设置为⼤于等于2</td>
</tr>
<tr>
<td>min.insync.replicas</td>
<td style="text-align:left">1</td>
<td style="text-align:left">当producer设置acks为-1时，min.insync.replicas指定replicas的最⼩数⽬（必须确认每⼀个repica的写数据都是成功的），如果这个数⽬没有达到，producer发送消息会产⽣异常</td>
</tr>
<tr>
<td>delete.topic.enable</td>
<td style="text-align:left">false</td>
<td style="text-align:left">是否允许删除主题</td>
</tr>
</tbody>
</table>
<h3 id="_3-创建主题topic" tabindex="-1"><a class="header-anchor" href="#_3-创建主题topic" aria-hidden="true">#</a> 3.创建主题topic</h3>
<blockquote>
<p>topic是什么概念？topic可以实现消息的分类，不同消费者订阅不同的topic。</p>
</blockquote>
<p><img src="@source/c-book/kafka/notes/images/QQ截图20220110122844.png" alt="输入图片说明" title="QQ截图20201229183512.png"></p>
<p>执行以下命令创建名为“test”的topic，这个topic只有一个partition，并且备份因子也设置为1</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./kafka-topics.sh --create --zookeeper <span class="token number">172.16</span>.253.35:2181 --replication-factor <span class="token number">1</span> --partitions <span class="token number">1</span> --topic <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>查看当前kafka内有哪些topic</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./kafka-topics.sh --list --zookeeper <span class="token number">172.16</span>.253.35:2181
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_4-发送消息" tabindex="-1"><a class="header-anchor" href="#_4-发送消息" aria-hidden="true">#</a> 4.发送消息</h3>
<blockquote>
<p>kafka自带了一个producer命令客户端，可以从本地文件中读取内容，或者我们也可以以命令行中直接输入内容，并将这些内容以消息的形式发送到kafka集群中。在默认情况下，每一个行会被当做成一个独立的消息。使用kafka的发送消息的客户端，指定发送到的kafka服务器地址和topic</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./kafka-console-producer.sh --broker-list <span class="token number">172.16</span>.253.38:9092 --topic <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_5-消费消息" tabindex="-1"><a class="header-anchor" href="#_5-消费消息" aria-hidden="true">#</a> 5.消费消息</h3>
<p>对于consumer，kafka同样也携带了一个命令行客户端，会将获取到内容在命令中进行输
出， <strong>默认是消费最新的消息</strong> 。使用kafka的消费者消息的客户端，从指定kafka服务器的指定
topic中消费消息</p>
<p>方式一：从最后一条消息的偏移量+1开始消费</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./kafka-console-consumer.sh --bootstrap-server <span class="token number">172.16</span>.253.38:9092 --topic <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>方式二：从头开始消费</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./kafka-console-consumer.sh --bootstrap-server <span class="token number">172.16</span>.253.38:9092 --from-beginning --topic <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="几个注意点" tabindex="-1"><a class="header-anchor" href="#几个注意点" aria-hidden="true">#</a> 几个注意点：</h4>
<ul>
<li>消息会被存储</li>
<li>消息是顺序存储</li>
<li>消息是有偏移量的</li>
<li>消费时可以指明偏移量进行消费</li>
</ul>
<h2 id="三、kafka中的关键细节" tabindex="-1"><a class="header-anchor" href="#三、kafka中的关键细节" aria-hidden="true">#</a> 三、Kafka中的关键细节</h2>
<h3 id="_1-消息的顺序存储" tabindex="-1"><a class="header-anchor" href="#_1-消息的顺序存储" aria-hidden="true">#</a> 1.消息的顺序存储</h3>
<blockquote>
<p>消息的发送方会把消息发送到broker中，broker会存储消息，消息是按照发送的顺序进行存储。因此消费者在消费消息时可以指明主题中消息的偏移量。默认情况下，是从最后一个消息的下一个偏移量开始消费。</p>
</blockquote>
<h3 id="_2-单播消息的实现" tabindex="-1"><a class="header-anchor" href="#_2-单播消息的实现" aria-hidden="true">#</a> 2. 单播消息的实现</h3>
<blockquote>
<p>单播消息：一个消费组里 只会有一个消费者能消费到某一个topic中的消息。于是可以创建多个消费者，这些消费者在同一个消费组中。</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./kafka-console-consumer.sh --bootstrap-server <span class="token number">10.31</span>.167.10:9092 --consumer-property group.id<span class="token operator">=</span>testGroup --topic <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_3-多播消息的实现" tabindex="-1"><a class="header-anchor" href="#_3-多播消息的实现" aria-hidden="true">#</a> 3.多播消息的实现</h3>
<h3 id="在一些业务场景中需要让一条消息被多个消费者消费-那么就可以使用多播模式。" tabindex="-1"><a class="header-anchor" href="#在一些业务场景中需要让一条消息被多个消费者消费-那么就可以使用多播模式。" aria-hidden="true">#</a> 在一些业务场景中需要让一条消息被多个消费者消费，那么就可以使用多播模式。</h3>
<p>kafka实现多播，只需要让不同的消费者处于不同的消费组即可。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./kafka-console-consumer.sh --bootstrap-server <span class="token number">10.31</span>.167.10:9092 --consumer-property group.id<span class="token operator">=</span>testGroup1 --topic <span class="token builtin class-name">test</span>

./kafka-console-consumer.sh --bootstrap-server <span class="token number">10.31</span>.167.10:9092 --consumer-property group.id<span class="token operator">=</span>testGroup2 --topic <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_4-查看消费组及信息" tabindex="-1"><a class="header-anchor" href="#_4-查看消费组及信息" aria-hidden="true">#</a> 4.查看消费组及信息</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 查看当前主题下有哪些消费组</span>
./kafka-consumer-groups.sh --bootstrap-server <span class="token number">10.31</span>.167.10:9092 --list
<span class="token comment"># 查看消费组中的具体信息：比如当前偏移量、最后一条消息的偏移量、堆积的消息数量</span>
./kafka-consumer-groups.sh --bootstrap-server <span class="token number">172.16</span>.253.38:9092 --describe --group testGroup
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="@source/c-book/kafka/notes/images/QQ截图20220110125233.png" alt="输入图片说明" title="QQ截图20201229183512.png"></p>
<ul>
<li>Currennt-offset: 当前消费组的已消费偏移量</li>
<li>Log-end-offset: 主题对应分区消息的结束偏移量(HW)</li>
<li>Lag: 当前消费组未消费的消息数</li>
</ul>
<h2 id="四、主题、分区的概念" tabindex="-1"><a class="header-anchor" href="#四、主题、分区的概念" aria-hidden="true">#</a> 四、主题、分区的概念</h2>
<h3 id="_1-主题topic" tabindex="-1"><a class="header-anchor" href="#_1-主题topic" aria-hidden="true">#</a> 1.主题Topic</h3>
<p>?主题Topic可以理解成是一个类别的名称。</p>
<h3 id="_2-partition分区" tabindex="-1"><a class="header-anchor" href="#_2-partition分区" aria-hidden="true">#</a> 2.partition分区</h3>
<p><img src="@source/c-book/kafka/notes/images/QQ截图20220110125413.png" alt="输入图片说明" title="QQ截图20201229183512.png"></p>
<blockquote>
<p>一个主题中的消息量是非常大的，因此可以通过分区的设置，来分布式存储这些消息。比如一个topic创建了 3 个分区。那么topic中的消息就会分别存放在这三个分区中。</p>
</blockquote>
<h3 id="为一个主题创建多个分区" tabindex="-1"><a class="header-anchor" href="#为一个主题创建多个分区" aria-hidden="true">#</a> 为一个主题创建多个分区</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./kafka-topics.sh --create --zookeeper localhost:2181 --partitions <span class="token number">2</span> --topic test1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>可以通过这样的命令查看topic的分区信息</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./kafka-topics.sh --describe --zookeeper localhost:2181 --topic test1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="分区的作用" tabindex="-1"><a class="header-anchor" href="#分区的作用" aria-hidden="true">#</a> 分区的作用：</h4>
<ul>
<li>可以分布式存储</li>
<li>可以并行写</li>
</ul>
<p>实际上是存在data/kafka-logs/test-0 和 test-1中的0000000.log文件中</p>
<p>小细节：</p>
<blockquote>
<p>定期将自己消费分区的offset提交给kafka内部topic：__consumer_offsets，提交过去的
时候，key是consumerGroupId+topic+分区号，value就是当前offset的值，kafka会定
期清理topic里的消息，最后就保留最新的那条数据
因为__consumer_offsets可能会接收高并发的请求，kafka默认给其分配 50 个分区(可以
通过offsets.topic.num.partitions设置)，这样可以通过加机器的方式抗大并发。
通过如下公式可以选出consumer消费的offset要提交到__consumer_offsets的哪个分区
公式：hash(consumerGroupId) % __consumer_offsets主题的分区数</p>
</blockquote>
<h2 id="五、kafka集群及副本的概念" tabindex="-1"><a class="header-anchor" href="#五、kafka集群及副本的概念" aria-hidden="true">#</a> 五、Kafka集群及副本的概念</h2>
<h3 id="_1-搭建kafka集群-3-个broker" tabindex="-1"><a class="header-anchor" href="#_1-搭建kafka集群-3-个broker" aria-hidden="true">#</a> 1.搭建kafka集群， 3 个broker</h3>
<p>准备 3 个server.properties文件</p>
<p>每个文件中的这些内容要调整</p>
<ul>
<li>server.properties</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>broker.id<span class="token operator">=</span> <span class="token number">0</span>
<span class="token assign-left variable">listeners</span><span class="token operator">=</span>PLAINTEXT://192.168.65.60:
log.dir<span class="token operator">=</span>/usr/local/data/kafka-logs
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>server1.properties</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>broker.id<span class="token operator">=</span> <span class="token number">1</span>
<span class="token assign-left variable">listeners</span><span class="token operator">=</span>PLAINTEXT://192.168.65.60:
log.dir<span class="token operator">=</span>/usr/local/data/kafka-logs-
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>server2.properties</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>broker.id<span class="token operator">=</span> <span class="token number">2</span>
<span class="token assign-left variable">listeners</span><span class="token operator">=</span>PLAINTEXT://192.168.65.60:
log.dir<span class="token operator">=</span>/usr/local/data/kafka-logs-
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="使用如下命令来启动-3-台服务器" tabindex="-1"><a class="header-anchor" href="#使用如下命令来启动-3-台服务器" aria-hidden="true">#</a> 使用如下命令来启动 3 台服务器</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./kafka-server-start.sh -daemon<span class="token punctuation">..</span>/config/server0.properties
./kafka-server-start.sh -daemon<span class="token punctuation">..</span>/config/server1.properties
./kafka-server-start.sh -daemon<span class="token punctuation">..</span>/config/server2.properties
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>搭建完后通过查看zk中的/brokers/ids 看是否启动成功</p>
<h3 id="_2-副本的概念" tabindex="-1"><a class="header-anchor" href="#_2-副本的概念" aria-hidden="true">#</a> 2.副本的概念</h3>
<blockquote>
<p>副本是对分区的备份。在集群中，不同的副本会被部署在不同的broker上。下面例子：创建 1个主题， 2 个分区、 3 个副本。</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./kafka-topics.sh --create --zookeeper <span class="token number">172.16</span>.253.35:2181 --replication-factor <span class="token number">3</span> --partitions <span class="token number">2</span> --topic my-replicated-topic
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="@source/c-book/kafka/notes/images/QQ截图20220110133849.png" alt="输入图片说明" title="QQ截图20201229183512.png"></p>
<p>通过查看主题信息，其中的关键数据：</p>
<ul>
<li>replicas：当前副本存在的broker节点</li>
<li>leader：副本里的概念
<ul>
<li>每个partition都有一个broker作为leader。</li>
<li>消息发送方要把消息发给哪个broker？就看副本的leader是在哪个broker上面。副本里的leader专⻔用来接收消息。</li>
<li>接收到消息，其他follower通过poll的方式来同步数据。</li>
</ul>
</li>
<li>follower：leader处理所有针对这个partition的读写请求，而follower被动复制leader，不提供读写（主要是为了保证多副本数据与消费的一致性），如果leader所在的broker挂掉，那么就会进行新leader的选举，至于怎么选，在之后的controller的概念中介绍。</li>
</ul>
<p>通过kill掉leader后再查看主题情况</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># kill掉leader</span>
<span class="token function">ps</span> -aux <span class="token operator">|</span> <span class="token function">grep</span> server.properties
<span class="token function">kill</span> <span class="token number">17631</span>
<span class="token comment"># 查看topic情况</span>
./kafka-topics.sh --describe --zookeeper <span class="token number">172.16</span>.253.35:2181 --topic my-replicated-topic
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>isr：
可以同步的broker节点和已同步的broker节点，存放在isr集合中。</p>
<h3 id="_3-broker、主题、分区、副本" tabindex="-1"><a class="header-anchor" href="#_3-broker、主题、分区、副本" aria-hidden="true">#</a> 3.broker、主题、分区、副本</h3>
<ul>
<li>kafka集群中由多个broker组成</li>
<li>一个broker中存放一个topic的不同partition——副本</li>
</ul>
<p><img src="@source/c-book/kafka/notes/images/QQ截图20220110134554.png" alt="输入图片说明" title="QQ截图20201229183512.png"></p>
<h3 id="_4-kafka集群消息的发送" tabindex="-1"><a class="header-anchor" href="#_4-kafka集群消息的发送" aria-hidden="true">#</a> 4.kafka集群消息的发送</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./kafka-console-producer.sh --broker-list <span class="token number">172.16</span>.253.38:9092,172.16.253.38:9093,172.16.253.38:9094 --topic my-replicated-topic
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_5-kafka集群消息的消费" tabindex="-1"><a class="header-anchor" href="#_5-kafka集群消息的消费" aria-hidden="true">#</a> 5.kafka集群消息的消费</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./kafka-console-consumer.sh --bootstrap-server <span class="token number">172.16</span>.253.38:9092,172.16.253.38:9093,172.16.253.38:9094 --from-beginning --topic my-replicated-topic
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_6-关于分区消费组消费者的细节" tabindex="-1"><a class="header-anchor" href="#_6-关于分区消费组消费者的细节" aria-hidden="true">#</a> 6.关于分区消费组消费者的细节</h3>
<p><img src="@source/c-book/kafka/notes/images/QQ截图20220110134734.png" alt="输入图片说明" title="QQ截图20201229183512.png"></p>
<blockquote>
<p>图中Kafka集群有两个broker，每个broker中有多个partition。一个partition只能被一个消费组里的某一个消费者消费，从而保证消费顺序。Kafka只在partition的范围内保证消息消费的局部顺序性，不能在同一个topic中的多个partition中保证总的消费顺序性。一个消费者可以消费多个partition。</p>
</blockquote>
<p><code>消费组中消费者的数量不能比一个topic中的partition数量多，否则多出来的消费者消费不到消息。</code></p>
<h2 id="六、kafka的java客户端-生产者" tabindex="-1"><a class="header-anchor" href="#六、kafka的java客户端-生产者" aria-hidden="true">#</a> 六、Kafka的Java客户端-生产者</h2>
<h3 id="_1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_1-引入依赖" aria-hidden="true">#</a> 1.引入依赖</h3>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.kafka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>kafka-clients<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.4.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_2-生产者发送消息的基本实现" tabindex="-1"><a class="header-anchor" href="#_2-生产者发送消息的基本实现" aria-hidden="true">#</a> 2.生产者发送消息的基本实现</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>#### <span class="token comment">//消息的发送方</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyProducer</span> <span class="token punctuation">{</span>

<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">String</span> TOPIC_NAME <span class="token operator">=</span> <span class="token string">"my-replicated-topic"</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ExecutionException</span><span class="token punctuation">,</span><span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
<span class="token class-name">Properties</span> props <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">ProducerConfig</span><span class="token punctuation">.</span>BOOTSTRAP_SERVERS_CONFIG<span class="token punctuation">,</span><span class="token string">"10.31.167.10:9092,10.31.167.10:9093,10.31.167.10:9094"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//把发送的key从字符串序列化为字节数组</span>
props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">ProducerConfig</span><span class="token punctuation">.</span>KEY_SERIALIZER_CLASS_CONFIG<span class="token punctuation">,</span><span class="token class-name">StringSerializer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//把发送消息value从字符串序列化为字节数组</span>
props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">ProducerConfig</span><span class="token punctuation">.</span>VALUE_SERIALIZER_CLASS_CONFIG<span class="token punctuation">,</span><span class="token class-name">StringSerializer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Producer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> producer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KafkaProducer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Order</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> i<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ProducerRecord</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> producerRecord <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProducerRecord</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>TOPIC_NAME<span class="token punctuation">,</span> order<span class="token punctuation">.</span><span class="token function">getOrderId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> JSON<span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">RecordMetadata</span> metadata <span class="token operator">=</span> producer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>producerRecord<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//=====阻塞=======</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"同步方式发送消息结果："</span> <span class="token operator">+</span> <span class="token string">"topic-"</span> <span class="token operator">+</span>metadata<span class="token punctuation">.</span><span class="token function">topic</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"|partition-"</span><span class="token operator">+</span> metadata<span class="token punctuation">.</span><span class="token function">partition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"|offset-"</span> <span class="token operator">+</span>metadata<span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="_3-发送消息到指定分区上" tabindex="-1"><a class="header-anchor" href="#_3-发送消息到指定分区上" aria-hidden="true">#</a> 3.发送消息到指定分区上</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ProducerRecord</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> producerRecord <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProducerRecord</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>TOPIC_NAME<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">,</span> order<span class="token punctuation">.</span><span class="token function">getOrderId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> JSON<span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_4-未指定分区-则会通过业务key的hash运算-算出消息往哪个分区上发" tabindex="-1"><a class="header-anchor" href="#_4-未指定分区-则会通过业务key的hash运算-算出消息往哪个分区上发" aria-hidden="true">#</a> 4.未指定分区，则会通过业务key的hash运算，算出消息往哪个分区上发</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//未指定发送分区，具体发送的分区计算公式：hash(key)%partitionNum</span>
<span class="token class-name">ProducerRecord</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> producerRecord <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProducerRecord</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>TOPIC_NAME<span class="token punctuation">,</span> order<span class="token punctuation">.</span><span class="token function">getOrderId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> JSON<span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_5-同步发送" tabindex="-1"><a class="header-anchor" href="#_5-同步发送" aria-hidden="true">#</a> 5.同步发送</h3>
<p>生产者同步发消息，在收到kafka的ack告知发送成功之前一直处于阻塞状态</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//等待消息发送成功的同步阻塞方法</span>
<span class="token class-name">RecordMetadata</span> metadata <span class="token operator">=</span> producer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>producerRecord<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"同步方式发送消息结果："</span> <span class="token operator">+</span> <span class="token string">"topic-"</span> <span class="token operator">+</span>metadata<span class="token punctuation">.</span><span class="token function">topic</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"|partition-"</span><span class="token operator">+</span> metadata<span class="token punctuation">.</span><span class="token function">partition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"|offset-"</span> <span class="token operator">+</span>metadata<span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="@source/c-book/kafka/notes/images/QQ截图20220110142708.png" alt="输入图片说明" title="QQ截图20201229183512.png"></p>
<h3 id="_6-异步发消息" tabindex="-1"><a class="header-anchor" href="#_6-异步发消息" aria-hidden="true">#</a> 6.异步发消息</h3>
<h4 id="生产者发消息-发送完后不用等待broker给回复-直接执行下面的业务逻辑。可以提供callback-让broker异步的调用callback-告知生产者-消息发送的结果" tabindex="-1"><a class="header-anchor" href="#生产者发消息-发送完后不用等待broker给回复-直接执行下面的业务逻辑。可以提供callback-让broker异步的调用callback-告知生产者-消息发送的结果" aria-hidden="true">#</a> 生产者发消息，发送完后不用等待broker给回复，直接执行下面的业务逻辑。可以提供callback，让broker异步的调用callback，告知生产者，消息发送的结果</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//要发送 5 条消息</span>
<span class="token class-name">Order</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> i<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//指定发送分区</span>
<span class="token class-name">ProducerRecord</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> producerRecord <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProducerRecord</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>TOPIC_NAME<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">,</span> order<span class="token punctuation">.</span><span class="token function">getOrderId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>JSON<span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//异步回调方式发送消息</span>
producer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>producerRecord<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onCompletion</span><span class="token punctuation">(</span><span class="token class-name">RecordMetadata</span> metadata<span class="token punctuation">,</span> <span class="token class-name">Exception</span> exception<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>exception <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"发送消息失败："</span> <span class="token operator">+</span>
    exception<span class="token punctuation">.</span><span class="token function">getStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>metadata <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"异步方式发送消息结果："</span> <span class="token operator">+</span> <span class="token string">"topic-"</span> <span class="token operator">+</span>metadata<span class="token punctuation">.</span><span class="token function">topic</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"|partition-"</span><span class="token operator">+</span> metadata<span class="token punctuation">.</span><span class="token function">partition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"|offset-"</span> <span class="token operator">+</span> metadata<span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_7-关于生产者的ack参数配置" tabindex="-1"><a class="header-anchor" href="#_7-关于生产者的ack参数配置" aria-hidden="true">#</a> 7.关于生产者的ack参数配置</h3>
<h4 id="在同步发消息的场景下-生产者发动broker上后-ack会有-3-种不同的选择" tabindex="-1"><a class="header-anchor" href="#在同步发消息的场景下-生产者发动broker上后-ack会有-3-种不同的选择" aria-hidden="true">#</a> 在同步发消息的场景下：生产者发动broker上后，ack会有 3 种不同的选择：</h4>
<ul>
<li>（ 1 ）acks=0： 表示producer不需要等待任何broker确认收到消息的回复，就可以继续发送下一条消息。性能最高，但是最容易丢消息。</li>
<li>（ 2 ）acks=1： 至少要等待leader已经成功将数据写入本地log，但是不需要等待所有follower是否成功写入。就可以继续发送下一条消息。这种情况下，如果follower没有成功备份数据，而此时leader又挂掉，则消息会丢失。</li>
<li>（ 3 ）acks=-1或all： 需要等待 min.insync.replicas(默认为 1 ，推荐配置大于等于2) 这个参数配置的副本个数都成功写入日志，这种策略会保证只要有一个备份存活就不会丢失数据。这是最强的数据保证。一般除非是金融级别，或跟钱打交道的场景才会使用这种配置。</li>
</ul>
<h4 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> code:</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">ProducerConfig</span><span class="token punctuation">.</span>ACKS_CONFIG<span class="token punctuation">,</span> <span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_8-其他一些细节" tabindex="-1"><a class="header-anchor" href="#_8-其他一些细节" aria-hidden="true">#</a> 8.其他一些细节</h3>
<ul>
<li>发送会默认会重试 3 次，每次间隔100ms</li>
<li>发送的消息会先进入到本地缓冲区（32mb），kakfa会跑一个线程，该线程去缓冲区中取16k的数据，发送到kafka，如果到 10 毫秒数据没取满16k，也会发送一次。</li>
</ul>
<h2 id="七、消费者" tabindex="-1"><a class="header-anchor" href="#七、消费者" aria-hidden="true">#</a> 七、消费者</h2>
<h3 id="_1-消费者消费消息的基本实现" tabindex="-1"><a class="header-anchor" href="#_1-消费者消费消息的基本实现" aria-hidden="true">#</a> 1.消费者消费消息的基本实现</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyConsumer</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">String</span> TOPIC_NAME <span class="token operator">=</span> <span class="token string">"my-replicated-topic"</span><span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">String</span> CONSUMER_GROUP_NAME <span class="token operator">=</span> <span class="token string">"testGroup"</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token class-name">Properties</span> props <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">ConsumerConfig</span><span class="token punctuation">.</span>BOOTSTRAP_SERVERS_CONFIG<span class="token punctuation">,</span><span class="token string">"10.31.167.10:9092,10.31.167.10:9093,10.31.167.10:9094"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 消费分组名</span>
props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">ConsumerConfig</span><span class="token punctuation">.</span>GROUP_ID_CONFIG<span class="token punctuation">,</span> CONSUMER_GROUP_NAME<span class="token punctuation">)</span><span class="token punctuation">;</span>
props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">ConsumerConfig</span><span class="token punctuation">.</span>KEY_DESERIALIZER_CLASS_CONFIG<span class="token punctuation">,</span><span class="token class-name">StringDeserializer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">ConsumerConfig</span><span class="token punctuation">.</span>VALUE_DESERIALIZER_CLASS_CONFIG<span class="token punctuation">,</span><span class="token class-name">StringDeserializer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建一个消费者的客户端</span>
<span class="token class-name">KafkaConsumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> consumer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KafkaConsumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 消费者订阅主题列表</span>
consumer<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>TOPIC_NAME<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">/*
* poll() API 是拉取消息的⻓轮询
*/</span>
<span class="token class-name">ConsumerRecords</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> records <span class="token operator">=</span>consumer<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofMillis</span><span class="token punctuation">(</span> <span class="token number">1000</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">ConsumerRecord</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token keyword">record</span> <span class="token operator">:</span> records<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"收到消息：partition = %d,offset = %d, key =%s, value = %s%n"</span><span class="token punctuation">,</span> <span class="token keyword">record</span><span class="token punctuation">.</span><span class="token function">partition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">record</span><span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">record</span><span class="token punctuation">.</span><span class="token function">key</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">record</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="_2-自动提交offset" tabindex="-1"><a class="header-anchor" href="#_2-自动提交offset" aria-hidden="true">#</a> 2.自动提交offset</h3>
<ul>
<li>设置自动提交参数 - 默认</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 是否自动提交offset，默认就是true</span>
props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">ConsumerConfig</span><span class="token punctuation">.</span>ENABLE_AUTO_COMMIT_CONFIG<span class="token punctuation">,</span> <span class="token string">"true"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 自动提交offset的间隔时间</span>
props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">ConsumerConfig</span><span class="token punctuation">.</span>AUTO_COMMIT_INTERVAL_MS_CONFIG<span class="token punctuation">,</span> <span class="token string">"1000"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>消费者poll到消息后默认情况下，会自动向broker的_consumer_offsets主题提交当前主题-分区消费的偏移量。</p>
<p>自动提交会丢消息： 因为如果消费者还没消费完poll下来的消息就自动提交了偏移量，那么此 时消费者挂了，于是下一个消费者会从已提交的offset的下一个位置开始消费消息。之前未被消费的消息就丢失掉了。</p>
<h3 id="_3-手动提交offset" tabindex="-1"><a class="header-anchor" href="#_3-手动提交offset" aria-hidden="true">#</a> 3.手动提交offset</h3>
<ul>
<li>设置手动提交参数</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">ConsumerConfig</span><span class="token punctuation">.</span>ENABLE_AUTO_COMMIT_CONFIG<span class="token punctuation">,</span> <span class="token string">"false"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="在消费完消息后进行手动提交" tabindex="-1"><a class="header-anchor" href="#在消费完消息后进行手动提交" aria-hidden="true">#</a> 在消费完消息后进行手动提交</h4>
<ul>
<li>手动同步提交</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>records<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 手动同步提交offset，当前线程会阻塞直到offset提交成功</span>
<span class="token comment">// 一般使用同步提交，因为提交之后一般也没有什么逻辑代码了</span>
consumer<span class="token punctuation">.</span><span class="token function">commitSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>手动异步提交</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>records<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 手动异步提交offset，当前线程提交offset不会阻塞，可以继续处理后面的程序逻辑</span>
consumer<span class="token punctuation">.</span><span class="token function">commitAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">OffsetCommitCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onComplete</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TopicPartition</span><span class="token punctuation">,</span> <span class="token class-name">OffsetAndMetadata</span><span class="token punctuation">></span></span>offsets<span class="token punctuation">,</span> <span class="token class-name">Exception</span> exception<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>exception <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Commit failed for "</span> <span class="token operator">+</span> offsets<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Commit failed exception: "</span> <span class="token operator">+</span>exception<span class="token punctuation">.</span><span class="token function">getStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
         <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_4-消费者poll消息的过程" tabindex="-1"><a class="header-anchor" href="#_4-消费者poll消息的过程" aria-hidden="true">#</a> 4.消费者poll消息的过程</h3>
<ul>
<li>消费者建立了与broker之间的⻓连接，开始poll消息。</li>
<li>默认一次poll 500条消息</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">ConsumerConfig</span><span class="token punctuation">.</span>MAX_POLL_RECORDS_CONFIG<span class="token punctuation">,</span> <span class="token number">500</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>可以根据消费速度的快慢来设置，因为如果两次poll的时间如果超出了30s的时间间隔，kafka会认为其消费能力过弱，将其踢出消费组。将分区分配给其他消费者。</p>
<p>可以通过这个值进行设置：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">ConsumerConfig</span><span class="token punctuation">.</span>MAX_POLL_INTERVAL_MS_CONFIG<span class="token punctuation">,</span> <span class="token number">30</span> <span class="token operator">*</span> <span class="token number">1000</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果每隔1s内没有poll到任何消息，则继续去poll消息，循环往复，直到poll到消息。如果超出了1s，则此次⻓轮询结束。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ConsumerRecords</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> records <span class="token operator">=</span>consumer<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofMillis</span><span class="token punctuation">(</span> <span class="token number">1000</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>消费者发送心跳的时间间隔</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">ConsumerConfig</span><span class="token punctuation">.</span>HEARTBEAT_INTERVAL_MS_CONFIG<span class="token punctuation">,</span> <span class="token number">1000</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>kafka如果超过 10 秒没有收到消费者的心跳，则会把消费者踢出消费组，进行rebalance，把分区分配给其他消费者。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">ConsumerConfig</span><span class="token punctuation">.</span>SESSION_TIMEOUT_MS_CONFIG<span class="token punctuation">,</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1000</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_5-指定分区消费" tabindex="-1"><a class="header-anchor" href="#_5-指定分区消费" aria-hidden="true">#</a> 5.指定分区消费</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>consumer<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TopicPartition</span><span class="token punctuation">(</span>TOPIC_NAME<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_6-消息回溯消费" tabindex="-1"><a class="header-anchor" href="#_6-消息回溯消费" aria-hidden="true">#</a> 6.消息回溯消费</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>consumer<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TopicPartition</span><span class="token punctuation">(</span>TOPIC_NAME<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
consumer<span class="token punctuation">.</span><span class="token function">seekToBeginning</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TopicPartition</span><span class="token punctuation">(</span>TOPIC_NAME<span class="token punctuation">,</span><span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_7-指定offset消费" tabindex="-1"><a class="header-anchor" href="#_7-指定offset消费" aria-hidden="true">#</a> 7.指定offset消费</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>consumer<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TopicPartition</span><span class="token punctuation">(</span>TOPIC_NAME<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
consumer<span class="token punctuation">.</span><span class="token function">seek</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TopicPartition</span><span class="token punctuation">(</span>TOPIC_NAME<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">10</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_8-从指定时间点消费" tabindex="-1"><a class="header-anchor" href="#_8-从指定时间点消费" aria-hidden="true">#</a> 8.从指定时间点消费</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PartitionInfo</span><span class="token punctuation">></span></span> topicPartitions <span class="token operator">=</span>consumer<span class="token punctuation">.</span><span class="token function">partitionsFor</span><span class="token punctuation">(</span>TOPIC_NAME<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//从 1 小时前开始消费</span>
<span class="token keyword">long</span> fetchDataTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token punctuation">;</span>
<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TopicPartition</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">></span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">PartitionInfo</span> par <span class="token operator">:</span> topicPartitions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TopicPartition</span><span class="token punctuation">(</span>TOPIC_NAME<span class="token punctuation">,</span> par<span class="token punctuation">.</span><span class="token function">partition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>fetchDataTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TopicPartition</span><span class="token punctuation">,</span> <span class="token class-name">OffsetAndTimestamp</span><span class="token punctuation">></span></span> parMap <span class="token operator">=</span>consumer<span class="token punctuation">.</span><span class="token function">offsetsForTimes</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TopicPartition</span><span class="token punctuation">,</span> <span class="token class-name">OffsetAndTimestamp</span><span class="token punctuation">></span></span> entry <span class="token operator">:</span>parMap<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">TopicPartition</span> key <span class="token operator">=</span> entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">OffsetAndTimestamp</span> value <span class="token operator">=</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> value <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token class-name">Long</span> offset <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"partition-"</span> <span class="token operator">+</span> key<span class="token punctuation">.</span><span class="token function">partition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span><span class="token string">"|offset-"</span> <span class="token operator">+</span> offset<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//根据消费里的timestamp确定offset</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        consumer<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        consumer<span class="token punctuation">.</span><span class="token function">seek</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> offset<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="_9-新消费组的消费偏移量" tabindex="-1"><a class="header-anchor" href="#_9-新消费组的消费偏移量" aria-hidden="true">#</a> 9.新消费组的消费偏移量</h3>
<blockquote>
<p>当消费主题的是一个新的消费组，或者指定offset的消费方式，offset不存在，那么应该如何消费?</p>
</blockquote>
<ul>
<li>latest(默认) ：只消费自己启动之后发送到主题的消息</li>
<li>earliest：第一次从头开始消费，以后按照消费offset记录继续消费，这个需要区别于consumer.seekToBeginning(每次都从头开始消费)</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>props.put<span class="token punctuation">(</span>ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, <span class="token string">"earliest"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="八-、springboot中使用kafka" tabindex="-1"><a class="header-anchor" href="#八-、springboot中使用kafka" aria-hidden="true">#</a> 八 、Springboot中使用Kafka</h2>
<h3 id="_1-引入依赖-1" tabindex="-1"><a class="header-anchor" href="#_1-引入依赖-1" aria-hidden="true">#</a> 1.引入依赖</h3>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.kafka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-kafka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_2-配置文件" tabindex="-1"><a class="header-anchor" href="#_2-配置文件" aria-hidden="true">#</a> 2.配置文件</h3>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
    <span class="token key atrule">kafka</span><span class="token punctuation">:</span>
        <span class="token key atrule">bootstrap-servers</span><span class="token punctuation">:</span> <span class="token key atrule">172.16.253.21</span><span class="token punctuation">:</span> <span class="token number">9093</span>
        <span class="token key atrule">producer</span><span class="token punctuation">:</span> <span class="token comment"># 生产者</span>
            <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">3</span> <span class="token comment"># 设置大于 0 的值，则客户端会将发送失败的记录重新发送</span>
            <span class="token key atrule">batch-size</span><span class="token punctuation">:</span> <span class="token number">16384</span>
            <span class="token key atrule">buffer-memory</span><span class="token punctuation">:</span> <span class="token number">33554432</span>
            <span class="token key atrule">acks</span><span class="token punctuation">:</span> <span class="token number">1</span>
            <span class="token comment"># 指定消息key和消息体的编解码方式</span>
            <span class="token key atrule">key-serializer</span><span class="token punctuation">:</span> org.apache.kafka.common.serialization.StringSerializer
            <span class="token key atrule">value-serializer</span><span class="token punctuation">:</span> org.apache.kafka.common.serialization.StringSerializer
        <span class="token key atrule">consumer</span><span class="token punctuation">:</span>
            <span class="token key atrule">group-id</span><span class="token punctuation">:</span> default<span class="token punctuation">-</span>group
            <span class="token key atrule">enable-auto-commit</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
            <span class="token key atrule">auto-offset-reset</span><span class="token punctuation">:</span> earliest
            <span class="token key atrule">key-deserializer</span><span class="token punctuation">:</span> org.apache.kafka.common.serialization.StringDeserializer
            <span class="token key atrule">value-deserializer</span><span class="token punctuation">:</span> org.apache.kafka.common.serialization.StringDeserializer
            <span class="token key atrule">max-poll-records</span><span class="token punctuation">:</span> <span class="token number">500</span>
        <span class="token key atrule">listener</span><span class="token punctuation">:</span>
        <span class="token comment"># 当每一条记录被消费者监听器（ListenerConsumer）处理之后提交</span>
        <span class="token comment"># RECORD</span>
        <span class="token comment"># 当每一批poll()的数据被消费者监听器（ListenerConsumer）处理之后提交</span>
        <span class="token comment"># BATCH</span>
        <span class="token comment"># 当每一批poll()的数据被消费者监听器（ListenerConsumer）处理之后，距离上次提交时间大于TIME时提交</span>
        <span class="token comment"># TIME</span>
        <span class="token comment"># 当每一批poll()的数据被消费者监听器（ListenerConsumer）处理之后，被处理record数量大于等于COUNT时提交</span>
        <span class="token comment"># COUNT</span>
        <span class="token comment"># TIME | COUNT　有一个条件满足时提交</span>
        <span class="token comment"># COUNT_TIME</span>
        <span class="token comment"># 当每一批poll()的数据被消费者监听器（ListenerConsumer）处理之后, 手动调用Acknowledgment.acknowledge()后提交</span>
        <span class="token comment"># MANUAL</span>
        <span class="token comment"># 手动调用Acknowledgment.acknowledge()后立即提交，一般使用这种</span>
        <span class="token comment"># MANUAL_IMMEDIATE</span>
            <span class="token key atrule">ack-mode</span><span class="token punctuation">:</span> MANUAL_IMMEDIATE
    <span class="token key atrule">redis</span><span class="token punctuation">:</span>
        <span class="token key atrule">host</span><span class="token punctuation">:</span> 172.16.253.21
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h3 id="_3-消息生产者" tabindex="-1"><a class="header-anchor" href="#_3-消息生产者" aria-hidden="true">#</a> 3.消息生产者</h3>
<ul>
<li>发送消息到指定topic</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">KafkaController</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">String</span> TOPIC_NAME <span class="token operator">=</span> <span class="token string">"my-replicated-topic"</span><span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">KafkaTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> kafkaTemplate<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/send"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        kafkaTemplate<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>TOPIC_NAME<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">,</span> <span class="token string">"key"</span><span class="token punctuation">,</span> <span class="token string">"this is a msg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_4-消息消费者" tabindex="-1"><a class="header-anchor" href="#_4-消息消费者" aria-hidden="true">#</a> 4.消息消费者</h3>
<ul>
<li>设置消费组，消费指定topic</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@KafkaListener</span><span class="token punctuation">(</span>topics <span class="token operator">=</span> <span class="token string">"my-replicated-topic"</span><span class="token punctuation">,</span>groupId <span class="token operator">=</span> <span class="token string">"MyGroup1"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">listenGroup</span><span class="token punctuation">(</span><span class="token class-name">ConsumerRecord</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token keyword">record</span><span class="token punctuation">,</span><span class="token class-name">Acknowledgment</span> ack<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> value <span class="token operator">=</span> <span class="token keyword">record</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">record</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//手动提交offset</span>
    ack<span class="token punctuation">.</span><span class="token function">acknowledge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>设置消费组、多topic、指定分区、指定偏移量消费及设置消费者个数。</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@KafkaListener</span><span class="token punctuation">(</span>groupId <span class="token operator">=</span> <span class="token string">"testGroup"</span><span class="token punctuation">,</span> topicPartitions <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token annotation punctuation">@TopicPartition</span><span class="token punctuation">(</span>topic <span class="token operator">=</span> <span class="token string">"topic1"</span><span class="token punctuation">,</span> partitions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"0"</span><span class="token punctuation">,</span> <span class="token string">"1"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token annotation punctuation">@TopicPartition</span><span class="token punctuation">(</span>topic <span class="token operator">=</span> <span class="token string">"topic2"</span><span class="token punctuation">,</span> partitions <span class="token operator">=</span> <span class="token string">"0"</span><span class="token punctuation">,</span>partitionOffsets <span class="token operator">=</span> <span class="token annotation punctuation">@PartitionOffset</span><span class="token punctuation">(</span>partition <span class="token operator">=</span> <span class="token string">"1"</span><span class="token punctuation">,</span>initialOffset <span class="token operator">=</span> <span class="token string">"100"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">,</span>concurrency <span class="token operator">=</span> <span class="token string">"3"</span><span class="token punctuation">)</span><span class="token comment">//concurrency就是同组下的消费者个数，就是并发消费数，建议小于等于分区总数</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">listenGroup</span><span class="token punctuation">(</span><span class="token class-name">ConsumerRecord</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token keyword">record</span><span class="token punctuation">,</span><span class="token class-name">Acknowledgment</span> ack<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> value <span class="token operator">=</span> <span class="token keyword">record</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">record</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//手动提交offset</span>
    ack<span class="token punctuation">.</span><span class="token function">acknowledge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="九、kafka集群controller、rebalance和hw" tabindex="-1"><a class="header-anchor" href="#九、kafka集群controller、rebalance和hw" aria-hidden="true">#</a> 九、Kafka集群Controller、Rebalance和HW</h2>
<h3 id="_1-controller" tabindex="-1"><a class="header-anchor" href="#_1-controller" aria-hidden="true">#</a> 1.Controller</h3>
<ul>
<li>Kafka集群中的broker在zk中创建临时序号节点，序号最小的节点（最先创建的节点）将作为集群的controller，负责管理整个集群中的所有分区和副本的状态：
<ul>
<li>当某个分区的leader副本出现故障时，由控制器负责为该分区选举新的leader副本。</li>
<li>当检测到某个分区的ISR集合发生变化时，由控制器负责通知所有broker更新其元数据信息。</li>
<li>当使用kafka-topics.sh脚本为某个topic增加分区数量时，同样还是由控制器负责让新分区被其他节点感知到。</li>
</ul>
</li>
</ul>
<h3 id="_2-rebalance机制" tabindex="-1"><a class="header-anchor" href="#_2-rebalance机制" aria-hidden="true">#</a> 2.Rebalance机制</h3>
<p>前提是：消费者没有指明分区消费。当消费组里消费者和分区的关系发生变化，那么就会触发rebalance机制。</p>
<p>这个机制会重新调整消费者消费哪个分区。</p>
<p>在触发rebalance机制之前，消费者消费哪个分区有三种策略：</p>
<ul>
<li>range：通过公示来计算某个消费者消费哪个分区</li>
<li>轮询：大家轮着消费</li>
<li>sticky：在触发了rebalance后，在消费者消费的原分区不变的基础上进行调整。</li>
</ul>
<h3 id="_3-hw和leo" tabindex="-1"><a class="header-anchor" href="#_3-hw和leo" aria-hidden="true">#</a> 3.HW和LEO</h3>
<blockquote>
<p>HW俗称高水位，HighWatermark的缩写，取一个partition对应的ISR中最小的LEO(log-end-offset)作为HW，consumer最多只能消费到HW所在的位置。另外每个replica都有HW,leader和follower各自负责更新自己的HW的状态。对于leader新写入的消息，consumer不能立刻消费，leader会等待该消息被所有ISR中的replicas同步后更新HW，此时消息才能被consumer消费。这样就保证了如果leader所在的broker失效，该消息仍然可以从新选举的leader中获取。</p>
</blockquote>
<h2 id="十、kafka线上问题优化" tabindex="-1"><a class="header-anchor" href="#十、kafka线上问题优化" aria-hidden="true">#</a> 十、Kafka线上问题优化</h2>
<h3 id="_1-如何防止消息丢失" tabindex="-1"><a class="header-anchor" href="#_1-如何防止消息丢失" aria-hidden="true">#</a> 1.如何防止消息丢失</h3>
<ul>
<li>发送方： ack是 1 或者-1/all 可以防止消息丢失，如果要做到99.9999%，ack设成all，把min.insync.replicas配置成分区备份数</li>
<li>消费方：把自动提交改为手动提交。</li>
</ul>
<h3 id="_2-如何防止消息的重复消费" tabindex="-1"><a class="header-anchor" href="#_2-如何防止消息的重复消费" aria-hidden="true">#</a> 2.如何防止消息的重复消费</h3>
<blockquote>
<p>一条消息被消费者消费多次。如果为了消息的不重复消费，而把生产端的重试机制关闭、消费端的手动提交改成自动提交，这样反而会出现消息丢失，那么可以直接在防治消息丢失的手段上再加上消费消息时的幂等性保证，就能解决消息的重复消费问题。</p>
</blockquote>
<h3 id="幂等性如何保证" tabindex="-1"><a class="header-anchor" href="#幂等性如何保证" aria-hidden="true">#</a> 幂等性如何保证：</h3>
<ul>
<li>mysql 插入业务id作为主键，主键是唯一的，所以一次只能插入一条</li>
<li>使用redis或zk的分布式锁（主流的方案）</li>
</ul>
<h3 id="_3-如何做到顺序消费rocketmq" tabindex="-1"><a class="header-anchor" href="#_3-如何做到顺序消费rocketmq" aria-hidden="true">#</a> 3.如何做到顺序消费RocketMQ</h3>
<ul>
<li>发送方：在发送时将ack不能设置 0 ，关闭重试，使用同步发送，等到发送成功再发送下一条。确保消息是顺序发送的。</li>
<li>接收方：消息是发送到一个分区中，只能有一个消费组的消费者来接收消息。因此，kafka的顺序消费会牺牲掉性能。</li>
</ul>
<h3 id="_4-解决消息积压问题" tabindex="-1"><a class="header-anchor" href="#_4-解决消息积压问题" aria-hidden="true">#</a> 4.解决消息积压问题</h3>
<blockquote>
<p>消息积压会导致很多问题，比如磁盘被打满、生产端发消息导致kafka性能过慢，就容易出现服务雪崩，就需要有相应的手段：</p>
</blockquote>
<ul>
<li>方案一：在一个消费者中启动多个线程，让多个线程同时消费。——提升一个消费者的消费能力（增加分区增加消费者）。</li>
<li>方案二：如果方案一还不够的话，这个时候可以启动多个消费者，多个消费者部署在不同的服务器上。其实多个消费者部署在同一服务器上也可以提高消费能力——充分利用服务器的cpu资源。</li>
<li>方案三：让一个消费者去把收到的消息往另外一个topic上发，另一个topic设置多个分区和多个消费者 ，进行具体的业务消费。</li>
</ul>
<h3 id="_5-延迟队列" tabindex="-1"><a class="header-anchor" href="#_5-延迟队列" aria-hidden="true">#</a> 5.延迟队列</h3>
<p>延迟队列的应用场景：在订单创建成功后如果超过 30 分钟没有付款，则需要取消订单，此时可用延时队列来实现</p>
<ul>
<li>
<p>创建多个topic，每个topic表示延时的间隔</p>
<ul>
<li>topic_5s: 延时5s执行的队列</li>
<li>topic_1m: 延时 1 分钟执行的队列</li>
<li>topic_30m: 延时 30 分钟执行的队列</li>
</ul>
</li>
<li>
<p>消息发送者发送消息到相应的topic，并带上消息的发送时间</p>
</li>
<li>
<p>消费者订阅相应的topic，消费时轮询消费整个topic中的消息</p>
<ul>
<li>如果消息的发送时间，和消费的当前时间超过预设的值，比如 30 分钟</li>
<li>如果消息的发送时间，和消费的当前时间没有超过预设的值，则不消费当前的offset及之后的offset的所有消息都消费</li>
<li>下次继续消费该offset处的消息，判断时间是否已满足预设值</li>
</ul>
</li>
</ul>
<h2 id="十一、kafka-eagle监控平台" tabindex="-1"><a class="header-anchor" href="#十一、kafka-eagle监控平台" aria-hidden="true">#</a> 十一、Kafka-eagle监控平台</h2>
<h3 id="安装kafka-eagle" tabindex="-1"><a class="header-anchor" href="#安装kafka-eagle" aria-hidden="true">#</a> 安装Kafka-eagle</h3>
<h4 id="官网下载压缩包" tabindex="-1"><a class="header-anchor" href="#官网下载压缩包" aria-hidden="true">#</a> 官网下载压缩包</h4>
<p>http://www.kafka-eagle.org/</p>
<ul>
<li>安装jdk</li>
<li>解压缩后修改配置文件 system-config.properties</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 配置zk  去掉cluster2</span>
efak.zk.cluster.alias<span class="token operator">=</span>cluster1
cluster1.zk.list<span class="token operator">=</span><span class="token number">172.16</span>.253.35:2181
<span class="token comment"># cluster2.zk.list=xdn10:2181,xdn11:2181,xdn12:2181</span>

<span class="token comment"># 配置mysql</span>
kafka.eagle.driver<span class="token operator">=</span>com.mysql.cj.jdbc.Driver
kafka.eagle.url<span class="token operator">=</span>jdbc:mysql://172.16.253.22:3306/ke?useUnicode<span class="token operator">=</span>true<span class="token operator">&amp;</span><span class="token assign-left variable">characterEncoding</span><span class="token operator">=</span>UTF-8<span class="token operator">&amp;</span><span class="token assign-left variable">zeroDateTimeBehavior</span><span class="token operator">=</span>convertToNull
kafka.eagle.username<span class="token operator">=</span>root
kafka.eagle.password<span class="token operator">=</span> <span class="token number">123456</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul>
<li>修改/etc/profile</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>export  JAVA_HOME=/usr/local/jdk/jdk1.8.0_191
CLASSPATH=.:$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar
export KE_HOME=/home/aisys/efak-web-2.0.9
export PATH=$PATH:$KE_HOME/bin:$JAVA_HOME/bin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>刷新配置</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>source /etc/profile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>进入到bin目录，为ke.sh增加可执行的权限</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> +x ke.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>启动kafka-eagle</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>./ke.sh start
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
