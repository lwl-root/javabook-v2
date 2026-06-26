

# docker搭建常用容器

## 1、docker搭建redis容器

首先拉取redis镜像：

```shell
docker pull redis
```

创建挂载文件夹与配置文件

::: warning 注意

配置文件映射，docker镜像redis 默认无配置文件。

:::

```shell
mkdir /home/redis/date //创建文件夹
touch /home/redis/redis.conf //创建redis配置文件
```

如图中结构：

&lt;img src="/images/docker_redis.png"&gt;

然后用镜像创建容器

```shell
docker run -p 6379:6379 --name redis -v /home/redis/redis.conf:/etc/redis/redis.conf -v /home/redis/data:/data -d redis redis-server /home/redis/redis.conf --appendonly yes
```

配置文件`redis.conf`从官网下载 &lt;a href="http://download.redis.io/redis-stable/redis.conf"&gt;地址&lt;/a&gt;

```tex
1. -p 6379:6379  容器redis 端口6379 映射 宿主机未6379

2. --name redis 容器 名字 为 redis

3. -v /home/redis/redis.conf:/etc/redis/redis.conf  容器 /etc/redis/redis.conf 配置文件 映射宿主机 /home/redis/redis.conf
   会将宿主机的配置文件复制到docker中。

4. -v /home/redis/date  容器 /data 映射到宿主机 /root/redis/redis01/data

5. -d redis  后台模式启动 redis 

6. redis-server /etc/redis/redis.conf   redis 将以 /etc/redis/redis.conf 为配置文件启动

7. --appendonly yes  开启redis 持久化
```

启动成功后进入redis容器

```shell
docker exec -it redis redis-cli
```



## 2、docker搭建mysql容器

首先拉去mysql镜像

```sh
docker pull mysql #默认拉取最新版本
```

创建挂载目录和文件

```shell
mkdir -p /usr/data/mysql/logs /usr/data/mysql/data /usr/data/mysql/conf
```

如图中结构：

&lt;img src="/images/docker_mysql.png"&gt;

::: warning 注意

如果不创建挂载目录，一旦容器重启，则数据会全部丢失。

:::

**创建my.cnf配置文件(可省略)**

```shell
cd /mysql/conf
touch my.cnf
然后使用vim编辑my.cnf文件，文件内容如下：
[mysqld]
user=mysql
character-set-server=utf8
default_authentication_plugin=mysql_native_password
secure_file_priv=/var/lib/mysql
expire_logs_days=7
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
max_connections=1000
 
[client]
default-character-set=utf8
 
[mysql]
default-character-set=utf8
```

用镜像创建容器

```sh
 docker run --restart=always \
 -p 3306:3306 \
--name mysql \
-v /mnt/mysql/log:/var/log/mysql \
-v /mnt/mysql/data:/var/lib/mysql  \
-v /mnt/mysql/conf:/etc/mysql/conf.d  \
-v /etc/localtime:/etc/localtime:ro \
-e MYSQL_ROOT_PASSWORD=123456 -d mysql:latest 
```

说明：
   - --restart=always：自动重启。
   - -v /etc/localtime:/etc/localtime:ro ：将宿主机的时间挂载到MySQL容器中，新版的MySQL时区不是东八区时区需要修改。
   - -e MYSQL_ROOT_PASSWORD=123456 :MySQL密码设置。

启动成功后进入mysql容器

```shell
docker exec -it mysql /bin/bash
```
### 小坑
**远程连接mysql：报异常 mysql-1044**

**一·问题描述：**

1. 在Linux中Docker中部署mysql 8.0容器

2. 远程连接工具可以成功连接，docker中数据库容器，但是只会显示一个数据库，其他的必要数据库无法显示出来：（mysql 8.0版本）

3. 无法使用远程连接工具创建数据库（Navicat）：一旦执行创建数据库，就报1044异常。

4. 进入docker中的mysql容器中，却可以正常创建数据库。

**二·问题原因：**
1. 根本原因：远程连接用户权限不足！
2. 直接原因：应该是创建远程连接用户 'root@%' 时，没有添加访问数据库的权限。

**三·解决办法：**

```sql
# 这里为刚才创建的root@% 用户授予所有数据库的所有表的所有操作访问权限
grant all privileges on *.* to 'root'@'%' with grant option;

# 刷新权限
flush privileges;
```

&lt;img src="/images/mysql1.png"&gt;

## 3、docker搭建rabbitMQ容器

首先拉取rabbitMQ镜像

```shell
docker pull rabbitmq //最新版
docker pull rabbitmq:3.7-management //其他版本
```

::: warning 注意

docker pull rabbitmq  注意这种方法拉取镜像默认拉取的是最新版的 tag默认为latest

tag为latest有一个问题，就是无法打开web管理页面

推荐下载其他版本:docker pull rabbitmq:3.7-management

:::

用镜像创建容器

```shell
docker run -d --name rabbitmq -p 1567:1567 -p 15672:15672 rabbitmq:3.7-management
```

&lt;font color="red"&gt;如果是外网服务器记得开启端口&lt;/font&gt;

然后就可以访问容器：IP地址:15672

默认账号密码为：guest

## 4、docker搭建minio文件管理容器

首先拉取镜像

```sh
docker search minio
# 查看minio所有版本信息
docker pull minio/minio
# 不带版本 默认拉取最新版本
```

在服务器创建两个文件夹，目录存放文件和配置文件

```sh
mkdir -p /home/data/minio/data # 将来上传的文件会放在这个文件夹里面
mkdir -p /home/data/minio/config
chmod 777 /home/data/minio/data # 权限打开
```

如图中结构：

&lt;img src="/images/docker_minio.png"&gt;

老版本minio创建容器

```sh
docker run -d --restart always \
   -p 9001:9000 --name minio \
   --network my-net \
   -e "MINIO_ACCESS_KEY=root" \  # 老版本是MINIO_ACCESS_KEY，如果是新版本改为MINIO_ROOT_USER
   -e "MINIO_SECRET_KEY=root123456" \  # 老版本是MINIO_SECRET_KEY，如果是新版本改为MINIO_ROOT_PASSWORD
   -v /home/data/minio/data -v /home/data/minio/config:/root/.minio minio/minio server /data

```

新版本

```sh
docker run -p 9000:9000 -p 9090:9090 \
     --name minio \
     -d --restart=always \
     -e "MINIO_ACCESS_KEY=lwl-root" \
     -e "MINIO_SECRET_KEY=l20001121" \
     -v /mnt/minio/data:/data \
     -v /mnt/minio/config:/root/.minio \
     minio/minio server \
     /data --console-address ":9090" -address ":9000"

```

::: warning 注意

1. 如果是最新版本：

   MINIO_ACCESS_KEY替换为MINIO_ROOT_USER
   MINIO_SECRET_KEY替换为MINIO_ROOT_PASSWORD

2. minio是动态端口会改变,需要在docker run 最后加上 --console-address ":9090" -address ":9000"   这句话

   如果不加 管理界面一直进不去 9090端口指的是minio的客户端端口

:::

## 5、docker搭建nginx容器

首先拉取镜像

```sh
docker pull nginx
```

先创建一个没有挂载的空白容器 

目的是借用容器内部的配置文件（如果你已经有配置文件可以忽略这一步）

```shell
docker run -d -p 80:80 nginx
```

首先，创建目录 nginx, 用于存放后面的相关东西

```
mkdir -p /opt/nginx/html /opt/nginx/logs /opt/nginx/conf /opt/nginx/ssl
```

如图中结构：

&lt;img src="/images/docker_nginx.png"&gt;

拷贝空白容器内 Nginx 默认配置文件和静态文件到本地创建的挂载目录，容器 ID 可以查看 docker ps 命令输入中的第一列：

```
docker cp 容器id:/etc/nginx/nginx.conf /mnt/nginx/conf    //把默认的配置文件也拷贝过来，方便直接使用
docker cp 容器id:/etc/nginx/conf.d/default.conf /mnt/nginx/conf/conf.d    //把默认的配置文件也拷贝过来，方便直接使用
docker cp 容器id:/usr/share/nginx/html/index.html /mnt/nginx/html //把默认的静态文件也拷贝过来，方便直接使用
docker cp 容器id:/usr/share/nginx/html/50x.html /mnt/nginx/html  //把默认的静态文件也拷贝过来，方便直接使用
```

- **html**: 目录将映射为 nginx 容器配置的虚拟目录。
- **logs**: 目录将映射为 nginx 容器的日志目录。
- **conf**: 目录里的配置文件将映射为 nginx 容器的配置文件。
- **ssl**: 目录为后面作https配置用，为可选项。

部署命令

```shell
docker run -d 
-p 80:80 
--name nginx 
-v /mnt/nginx/html:/usr/share/nginx/html 
-v /mnt/nginx/nginx.conf:/etc/nginx/nginx.conf 
-v /mnt/nginx/logs:/var/log/nginx 
-v /mnt/nginx/conf.d/conf:/etc/nginx/conf.d 
nginx
```

```shell
如果加上ssl配置(就是https)
docker run -d 
-p 80:80 
-p 443:443 
--name nginx 
-v /mnt/nginx/html:/usr/share/nginx/html 
-v /mnt/nginx/conf/nginx.conf:/etc/nginx/nginx.conf 
-v /mnt/nginx/logs:/var/log/nginx 
-v /mnt/nginx/conf/conf.d:/etc/nginx/conf.d 
-v /mnt/nginx/ssl:/etc/nginx/ssl 
nginx
```

- **-p 80:80** ：将容器的 80 端口映射到主机的 80 端口。
- **-p 443:443** ：将容器的 443 端口映射到主机的 443 端口。（可选项，配置https时加上）
- **--name nginx**：将容器命名为 nginx。
- **-v /mnt/nginx/html:/usr/share/nginx/html**：将我们自己创建的 html目录挂载到容器的 /usr/share/nginx/html。
- **-v /mnt/nginx/conf/nginx.conf:/etc/nginx/nginx.conf**：将我们自己创建的 nginx.conf 挂载到容器的 /etc/nginx/nginx.conf。
- **-v /mnt/nginx/logs:/var/log/nginx**：将我们自己创建的 logs 挂载到容器的 /var/log/nginx。
- **-v /mnt/nginx/conf/conf.d:/etc/nginx/conf.d** ：将conf.d目录挂载，后面进行二级域名反向代理映射端口时用，不配做这个后面配置不生效
- **-v /mnt/nginx/ssl:/etc/nginx/ssl**：将我们自己创建的 ssl目录 挂载到容器的 /etc/nginx/ssl，此项为可选项，要使用https证书时加上。

nginx默认配置文件：

```text
user  nginx;
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
 
```
## 6、docker搭建sqlServer容器(2019版本)
拉取镜像
```shell
docker pull mcr.microsoft.com/mssql/server:2019-latest
```

::: warning 注意
此处的权限授予不能漏，否则会导致挂在失败，容器启动失败（闪退）。
:::

创建挂载目录，用户授权
```shell
mkdir -p /hams/backup
chown 10001:root /hams/backup
```

容器创建
```shell
docker run --restart=unless-stopped -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=5w5w.5w5w" \
-p 1433:1433 --name 2mssql --hostname 2mssql \
-v /hams/backup:/var/opt/mssql/data \
-d mcr.microsoft.com/mssql/server:2019-latest
```

进入容器
```shell
docker exec -it 2mssql bash
```

## 最后说明

1、如果没有拉取镜像，直接运行

```shell
docker run -d --name xxx -p 80:80 mysql
```

docker会默认去下载最新版本的mysql镜像，如果你需要的是最新本版的镜像，就无需拉取镜像。

如果要使用指定版本的镜像来创建容器，需要提前拉取对应的镜像。

2、如果没有提前创建挂载文件夹，直接运行

```shell
docker run -d --name xxx -v /root/xxx:/root/xxx -p 80:80 mysql
```

docker会自己创建`/root/xxx`文件夹，如果文件夹没有配置文件之类的必要文件，则可以进行直接挂载。

如果有配置文件，还需自己根据需要编写配置文件，如：`nginx.conf`  、`redis.conf` 等文件。

