<template><h1 id="配置-frp-实现内网穿透" tabindex="-1"><a class="header-anchor" href="#配置-frp-实现内网穿透" aria-hidden="true">#</a> 配置 FRP 实现内网穿透</h1>
<h2 id="_1-frp-的作用" tabindex="-1"><a class="header-anchor" href="#_1-frp-的作用" aria-hidden="true">#</a> 1. FRP 的作用</h2>
<p>利用处于内网或防火墙后的机器，对外网环境提供 http 或 https 服务。</p>
<p>对于 http, https 服务支持基于域名的虚拟主机，支持自定义域名绑定，使多个域名可以共用一个 80 端口。</p>
<p>利用处于内网或防火墙后的机器，对外网环境提供 tcp 和 udp 服务，例如在家里通过 ssh 访问处于公司内网环境内的主机。</p>
<h2 id="_2-配置说明" tabindex="-1"><a class="header-anchor" href="#_2-配置说明" aria-hidden="true">#</a> 2. 配置说明</h2>
<h3 id="_2-1-实现功能" tabindex="-1"><a class="header-anchor" href="#_2-1-实现功能" aria-hidden="true">#</a> 2.1 实现功能</h3>
<p>1、外网通过ssh访问内网机器</p>
<p>2、自定义绑定域名访问内网 web 服务</p>
<h3 id="_2-2-配置前准备" tabindex="-1"><a class="header-anchor" href="#_2-2-配置前准备" aria-hidden="true">#</a> 2.2 配置前准备</h3>
<p>1、公网服务器 1 台。公网服务器是内网服务器的代理，所有的请求都先走到它这里，然后被它转到内网服务器，从而实现外网间接访问内网服务器的功能。它扮演的是 FRP Server 的角色。</p>
<p>2、内网服务器 1 台。内网服务器是逻辑上的真正的被访问服务， 它扮演的是 FRP client 的角色。</p>
<p>3、内网服务器部署一个 web 服务，可以用 tomcat 模拟，这里就不演示了。</p>
<h2 id="_3-安装-frp" tabindex="-1"><a class="header-anchor" href="#_3-安装-frp" aria-hidden="true">#</a> 3. 安装 FRP</h2>
<p>公网服务器与内网服务器都需要下载 FRP 进行安装，公网服务器通过配置，扮演 FRP Server 角色；内网服务器通过配置，扮演 FRP Client 角色。</p>
<p>从 github 上下载：<a href="https://github.com/fatedier/frp/releases/" target="_blank" rel="noopener noreferrer">下载地址<ExternalLinkIcon/></a> 。</p>
<p>将下载的压缩包解压，例如:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">tar</span> xzvf frp_0.15.1_linux_amd64.tar.gz -C /usr/share/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这里主要关注 4 个文件：</p>
<table>
<thead>
<tr>
<th style="text-align:left">角色</th>
<th style="text-align:left">关注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">服务端（公网服务器）</td>
<td style="text-align:left">frps、frps.ini</td>
</tr>
<tr>
<td style="text-align:left">客户端（内网服务器）</td>
<td style="text-align:left">frpc、frpc.ini</td>
</tr>
</tbody>
</table>
<h2 id="_4-配置" tabindex="-1"><a class="header-anchor" href="#_4-配置" aria-hidden="true">#</a> 4. 配置</h2>
<h3 id="_4-1-服务端配置" tabindex="-1"><a class="header-anchor" href="#_4-1-服务端配置" aria-hidden="true">#</a> 4.1 服务端配置</h3>
<p>FRP 服务端要运行在公网服务器上（因为它有公网 IP），它是内网服务器的代理。</p>
<p>配置服务端（公网服务器）时，可以先删掉 frpc 和 frpc.ini 这两个客户端配置文件（以免后续有混淆），然后再进行配置。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vi</span> ./frps.ini
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>配置内容：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>common<span class="token punctuation">]</span>
bind_port <span class="token operator">=</span> <span class="token number">7000</span>             <span class="token comment"># 与客户端绑定的进行通信的端口</span>
vhost_http_port <span class="token operator">=</span> <span class="token number">8081</span>     <span class="token comment"># 访问客户端 web 服务自定义的端口号</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>以下是新一点的版本
<span class="token punctuation">[</span>common<span class="token punctuation">]</span>
bind_addr <span class="token operator">=</span> <span class="token number">0.0</span>.0.0

<span class="token comment">#服务器代理端口</span>
bind_port <span class="token operator">=</span> <span class="token number">9527</span>

<span class="token comment">#与客户端进行校验的令牌</span>
token <span class="token operator">=</span> <span class="token number">123456789</span>

<span class="token comment">#控制面板的账号</span>
dashboard_user <span class="token operator">=</span> admin

<span class="token comment">#控制面板的密码</span>
dashboard_pwd <span class="token operator">=</span> admin123

<span class="token comment">#控制面板端口号</span>
dashboard_port <span class="token operator">=</span> <span class="token number">7500</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>保存然后启动服务</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./frps -c ./frps.ini
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>这是前台启动，后台启动命令为</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">nohup</span> ./frps -c ./frps.ini <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>新版本自带了管理控制台，启动成功后可以登录管理控制台查看，在浏览器输入<code>ip:port</code>。</p>
<img src="/images/frp.png">
<h3 id="_4-2-客户端配置" tabindex="-1"><a class="header-anchor" href="#_4-2-客户端配置" aria-hidden="true">#</a> 4.2 客户端配置</h3>
<p>运行 FRP 的客户端的服务器是逻辑上的受访服务器，它才是用户真正所要访问、操作的对象。</p>
<p>配置客户端（内网服务器）时，可以先删掉 frps 和 frps.ini 两个服务端配置文件，以免混淆，然后再进行配置。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vi</span> ./frpc.ini
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>配置内容：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>common<span class="token punctuation">]</span>
server_addr <span class="token operator">=</span> <span class="token number">120.56</span>.37.48   <span class="token comment"># 公网服务器ip</span>
server_port <span class="token operator">=</span> <span class="token number">7000</span>                <span class="token comment"># 与服务端 bind_port一致</span>

<span class="token comment"># 公网通过ssh访问内部服务器（未验证）</span>

<span class="token punctuation">[</span>ssh<span class="token punctuation">]</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> tcp              <span class="token comment">#连接协议</span>
local_ip <span class="token operator">=</span> <span class="token number">192.168</span>.3.48 <span class="token comment">#内网服务器ip</span>
local_port <span class="token operator">=</span> <span class="token number">22</span>         <span class="token comment">#ssh默认端口号</span>
remote_port <span class="token operator">=</span> <span class="token number">6000</span>      <span class="token comment">#自定义的访问内部ssh端口号</span>

<span class="token comment"># 公网访问内部web服务器以http方式</span>

<span class="token punctuation">[</span>web<span class="token punctuation">]</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> http         <span class="token comment">#访问协议</span>
local_port <span class="token operator">=</span> <span class="token number">8081</span>   <span class="token comment">#内网web服务的端口号</span>
custom_domains <span class="token operator">=</span> repo.iwi.com   <span class="token comment"># 所绑定的公网服务器域名或IP</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>以下是新一点的版本
<span class="token punctuation">[</span>common<span class="token punctuation">]</span>

<span class="token comment"># 配置服务器IP地址</span>
server_addr <span class="token operator">=</span> <span class="token number">121.43</span>.157.666

<span class="token comment">#配置服务端监听的端口，与服务端的bind_port端口保持一致</span>
server_port <span class="token operator">=</span> <span class="token number">7000</span>

<span class="token comment">#服务端配置token，将服务端配置的token复制到此处</span>
token <span class="token operator">=</span> <span class="token number">123456789</span>
pool_count <span class="token operator">=</span> <span class="token number">5</span>

<span class="token punctuation">[</span>smb<span class="token punctuation">]</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> tcp
local_ip <span class="token operator">=</span> <span class="token number">127.0</span>.0.1
local_port <span class="token operator">=</span> <span class="token number">3389</span>
remote_port <span class="token operator">=</span> <span class="token number">3389</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>保存然后启动服务</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./frpc -c ./frpc.ini
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
