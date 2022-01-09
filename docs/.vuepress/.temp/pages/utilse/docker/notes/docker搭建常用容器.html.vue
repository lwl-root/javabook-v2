<template><h1 id="docker搭建常用容器" tabindex="-1"><a class="header-anchor" href="#docker搭建常用容器" aria-hidden="true">#</a> docker搭建常用容器</h1>
<h2 id="_1、docker搭建redis容器" tabindex="-1"><a class="header-anchor" href="#_1、docker搭建redis容器" aria-hidden="true">#</a> 1、docker搭建redis容器</h2>
<p>首先拉取redis镜像：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker pull redis
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>创建挂载文件夹与配置文件</p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>配置文件映射，docker镜像redis 默认无配置文件。</p>
</div>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> /home/redis/date //创建文件夹
<span class="token function">touch</span> /home/redis/redis.conf //创建redis配置文件
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如图中结构：</p>
<img src="/images/docker_redis.png">
<p>然后用镜像创建容器</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker run -p <span class="token number">6379</span>:6379 --name redis -v /home/redis/redis.conf:/etc/redis/redis.conf -v /home/redis/data:/data -d redis redis-server /home/redis/redis.conf --appendonly <span class="token function">yes</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>配置文件<code>redis.conf</code>从官网下载 <a href="http://download.redis.io/redis-stable/redis.conf">地址</a></p>
<div class="language-tex ext-tex line-numbers-mode"><pre v-pre class="language-tex"><code>1. -p 6379:6379  容器redis 端口6379 映射 宿主机未6379

2. --name redis 容器 名字 为 redis

3. -v /home/redis/redis.conf:/etc/redis/redis.conf  容器 /etc/redis/redis.conf 配置文件 映射宿主机 /home/redis/redis.conf
   会将宿主机的配置文件复制到docker中。

4. -v /home/redis/date  容器 /data 映射到宿主机 /root/redis/redis01/data

5. -d redis  后台模式启动 redis 

6. redis-server /etc/redis/redis.conf   redis 将以 /etc/redis/redis.conf 为配置文件启动

7. --appendonly yes  开启redis 持久化
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>启动成功后进入redis容器</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker <span class="token builtin class-name">exec</span> -it redis redis-cli
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_2、docker搭建mysql容器" tabindex="-1"><a class="header-anchor" href="#_2、docker搭建mysql容器" aria-hidden="true">#</a> 2、docker搭建mysql容器</h2>
<p>首先拉去mysql镜像</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker pull mysql <span class="token comment">#默认拉取最新版本</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>创建挂载目录和文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> -p /usr/data/mysql/logs /usr/data/mysql/data /usr/data/mysql/conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如图中结构：</p>
<img src="/images/docker_mysql.png">
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>如果不创建挂载目录，一旦容器重启，则数据会全部丢失。</p>
</div>
<p><strong>创建my.cnf配置文件</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /mysql/conf
<span class="token function">touch</span> my.cnf
然后使用vim编辑my.cnf文件，文件内容如下：
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
<span class="token assign-left variable">user</span><span class="token operator">=</span>mysql
character-set-server<span class="token operator">=</span>utf8
<span class="token assign-left variable">default_authentication_plugin</span><span class="token operator">=</span>mysql_native_password
<span class="token assign-left variable">secure_file_priv</span><span class="token operator">=</span>/var/lib/mysql
<span class="token assign-left variable">expire_logs_days</span><span class="token operator">=</span><span class="token number">7</span>
<span class="token assign-left variable">sql_mode</span><span class="token operator">=</span>STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
<span class="token assign-left variable">max_connections</span><span class="token operator">=</span><span class="token number">1000</span>
 
<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
default-character-set<span class="token operator">=</span>utf8
 
<span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
default-character-set<span class="token operator">=</span>utf8
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>用镜像创建容器</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker run 
--restart<span class="token operator">=</span>always 
-p <span class="token number">3306</span>:3306 
--name mysql 
-v /usr/data/mysql/conf:/etc/mysql  
-v /usr/data/mysql/logs:/var/log/mysql 
-v /usr/data/mysql/data:/var/lib/mysql 
-v /usr/data/mysql/conf/my.cnf:/etc/mysql/my.cnf 
-e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> 
-d 
mysql
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>启动成功后进入redis容器</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker <span class="token builtin class-name">exec</span> -it mysql /bin/bash
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_3、docker搭建rabbitmq容器" tabindex="-1"><a class="header-anchor" href="#_3、docker搭建rabbitmq容器" aria-hidden="true">#</a> 3、docker搭建rabbitMQ容器</h2>
<p>首先拉取rabbitMQ镜像</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker pull rabbitmq //最新版
docker pull rabbitmq:3.7-management //其他版本
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>docker pull rabbitmq  注意这种方法拉取镜像默认拉取的是最新版的 tag默认为latest</p>
<p>tag为latest有一个问题，就是无法打开web管理页面</p>
<p>推荐下载其他版本:docker pull rabbitmq:3.7-management</p>
</div>
<p>用镜像创建容器</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker run -d --name rabbitmq -p <span class="token number">1567</span>:1567 -p <span class="token number">15672</span>:15672 rabbitmq:3.7-management
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><font color="red">如果是外网服务器记得开启端口</font>
<p>然后就可以访问容器：IP地址:15672</p>
<p>默认账号密码为：guest</p>
<h2 id="_4、docker搭建minio文件管理容器" tabindex="-1"><a class="header-anchor" href="#_4、docker搭建minio文件管理容器" aria-hidden="true">#</a> 4、docker搭建minio文件管理容器</h2>
<p>首先拉取镜像</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker search minio
<span class="token comment"># 查看minio所有版本信息</span>
docker pull minio/minio
<span class="token comment"># 不带版本 默认拉取最新版本</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>在服务器创建两个文件夹，目录存放文件和配置文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> -p /home/data/minio/data <span class="token comment"># 将来上传的文件会放在这个文件夹里面</span>
<span class="token function">mkdir</span> -p /home/data/minio/config
<span class="token function">chmod</span> <span class="token number">777</span> /home/data/minio/data <span class="token comment"># 权限打开</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如图中结构：</p>
<img src="/images/docker_minio.png">
<p>老版本minio创建容器</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker run -d --restart always <span class="token punctuation">\</span>
   -p <span class="token number">9001</span>:9000 --name minio <span class="token punctuation">\</span>
   --network my-net <span class="token punctuation">\</span>
   -e <span class="token string">"MINIO_ACCESS_KEY=root"</span> <span class="token punctuation">\</span>  <span class="token comment"># 老版本是MINIO_ACCESS_KEY，如果是新版本改为MINIO_ROOT_USER</span>
   -e <span class="token string">"MINIO_SECRET_KEY=root123456"</span> <span class="token punctuation">\</span>  <span class="token comment"># 老版本是MINIO_SECRET_KEY，如果是新版本改为MINIO_ROOT_PASSWORD</span>
   -v /home/data/minio/data -v /home/data/minio/config:/root/.minio minio/minio server /data

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>新版本</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker run -d 
-p <span class="token number">9000</span>:9000 
--name<span class="token operator">=</span>minio 
--restart<span class="token operator">=</span>always 
-e <span class="token string">"MINIO_ROOT_USER=admin"</span>  <span class="token comment"># 登录账号</span>
-e <span class="token string">"MINIO_ROOT_PASSWORD=admin123456"</span>  <span class="token comment"># 登录密码</span>
-v /home/data:/data 
-v /home/config:/root/.minio  minio/minio server /data 
--console-address <span class="token string">":9000"</span> --address <span class="token string">":9090"</span> <span class="token comment"># 这个一定要加</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<ol>
<li>
<p>如果是最新版本：</p>
<p>MINIO_ACCESS_KEY替换为MINIO_ROOT_USER
MINIO_SECRET_KEY替换为MINIO_ROOT_PASSWORD</p>
</li>
<li>
<p>minio是动态端口会改变,需要在docker run 最后加上 --console-address &quot;:9000&quot; --address   这句话</p>
<p>如果不加 管理界面一直进不去</p>
</li>
</ol>
</div>
<h2 id="_5、docker搭建nginx容器" tabindex="-1"><a class="header-anchor" href="#_5、docker搭建nginx容器" aria-hidden="true">#</a> 5、docker搭建nginx容器</h2>
<p>首先拉取镜像</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker pull nginx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>先创建一个没有挂载的空白容器</p>
<p>目的是借用容器内部的配置文件（如果你已经有配置文件可以忽略这一步）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker run -d -p <span class="token number">80</span>:80 nginx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>首先，创建目录 nginx, 用于存放后面的相关东西</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir -p /opt/nginx/html /opt/nginx/logs /opt/nginx/conf /opt/nginx/ssl
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如图中结构：</p>
<img src="/images/docker_nginx.png">
<p>拷贝空白容器内 Nginx 默认配置文件和静态文件到本地创建的挂载目录，容器 ID 可以查看 docker ps 命令输入中的第一列：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>docker cp 容器id:/etc/nginx/nginx.conf /mnt/nginx/conf    //把默认的配置文件也拷贝过来，方便直接使用
docker cp 容器id:/etc/nginx/conf.d/default.conf /mnt/nginx/conf/conf.d    //把默认的配置文件也拷贝过来，方便直接使用
docker cp 容器id:/usr/share/nginx/html/index.html /mnt/nginx/html //把默认的静态文件也拷贝过来，方便直接使用
docker cp 容器id:/usr/share/nginx/html/50x.html /mnt/nginx/html  //把默认的静态文件也拷贝过来，方便直接使用
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li><strong>html</strong>: 目录将映射为 nginx 容器配置的虚拟目录。</li>
<li><strong>logs</strong>: 目录将映射为 nginx 容器的日志目录。</li>
<li><strong>conf</strong>: 目录里的配置文件将映射为 nginx 容器的配置文件。</li>
<li><strong>ssl:</strong> 目录为后面作https配置用，为可选项。</li>
</ul>
<p>部署命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker run -d 
-p <span class="token number">80</span>:80 
--name nginx 
-v /mnt/nginx/html:/usr/share/nginx/html 
-v /mnt/nginx/nginx.conf:/etc/nginx/nginx.conf 
-v /mnt/nginx/logs:/var/log/nginx 
-v /mnt/nginx/conf/conf:/etc/nginx/conf.d 
nginx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>如果加上ssl配置<span class="token punctuation">(</span>就是https<span class="token punctuation">)</span>
docker run -d 
-p <span class="token number">80</span>:80 
-p <span class="token number">443</span>:443 
--name nginx 
-v /mnt/nginx/html:/usr/share/nginx/html 
-v /mnt/nginx/conf/nginx.conf:/etc/nginx/nginx.conf 
-v /mnt/nginx/logs:/var/log/nginx 
-v /mnt/nginx/conf/conf.d:/etc/nginx/conf.d 
-v /mnt/nginx/ssl:/etc/nginx/ssl 
nginx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul>
<li><strong>-p 80:80</strong> ：将容器的 80 端口映射到主机的 80 端口。</li>
<li><strong>-p 443:443</strong> ：将容器的 443 端口映射到主机的 443 端口。（可选项，配置https时加上）</li>
<li><strong>--name nginx</strong>：将容器命名为 nginx。</li>
<li><strong>-v /mnt/nginx/html:/usr/share/nginx/html</strong>：将我们自己创建的 html目录挂载到容器的 /usr/share/nginx/html。</li>
<li><strong>-v /mnt/nginx/conf/nginx.conf:/etc/nginx/nginx.conf</strong>：将我们自己创建的 nginx.conf 挂载到容器的 /etc/nginx/nginx.conf。</li>
<li><strong>-v /mnt/nginx/logs:/var/log/nginx</strong>：将我们自己创建的 logs 挂载到容器的 /var/log/nginx。</li>
<li><strong>-v /mnt/nginx/conf/conf.d:/etc/nginx/conf.d</strong> ：将conf.d目录挂载，后面进行二级域名反向代理映射端口时用，不配做这个后面配置不生效</li>
<li><strong>-v /mnt/nginx/ssl:/etc/nginx/ssl</strong>：将我们自己创建的 ssl目录 挂载到容器的 /etc/nginx/ssl，此项为可选项，要使用https证书时加上。</li>
</ul>
<p>nginx默认配置文件：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>user  nginx;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events {
    worker_connections  1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}
 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="_6、最后说明" tabindex="-1"><a class="header-anchor" href="#_6、最后说明" aria-hidden="true">#</a> 6、最后说明</h2>
<p>1、如果没有拉取镜像，直接运行</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker run -d --name xxx -p <span class="token number">80</span>:80 mysql
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>docker会默认去下载最新版本的mysql镜像，如果你需要的是最新本版的镜像，就无需拉取镜像。</p>
<p>如果要使用指定版本的镜像来创建容器，需要提前拉取对应的镜像。</p>
<p>2、如果没有提前创建挂载文件夹，直接运行</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>docker run -d --name xxx -v /root/xxx:/root/xxx -p <span class="token number">80</span>:80 mysql
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>docker会自己创建<code>/root/xxx</code>文件夹，如果文件夹没有配置文件之类的必要文件，则可以进行直接挂载。</p>
<p>如果有配置文件，还需自己根据需要编写配置文件，如：<code>nginx.conf</code>  、<code>redis.conf</code> 等文件。</p>
</template>
