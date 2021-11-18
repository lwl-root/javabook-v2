# docker-compose.yml 模板

## mysql

- docker 命令版

  ```bash
  docker run \
      -d \
      --name mysql-3306 \
      -e MYSQL_ROOT_PASSWORD=123456 \
      -v /etc/localtime:/etc/localtime:ro \
      -v ~/docker/mysql/3306/data:/var/lib/mysql \
      -v ~/docker/mysql/3306/conf.d:/etc/mysql/conf.d \
      -v ~/docker/mysql/3306/mysql.conf.d:/etc/mysql/mysql.conf.d \
      -p 3306:3306 \
      mysql:8.0.16
  ```

- docker-compose 版

  启动命令：docker-compose up -d mysql-3306

  ```yaml
  version: '3'
  services:
    mysql-3306:
      image: mysql:8.0.16
      network_mode: "bridge" # 默认值，可以缺省。
      container_name: mysql-3306
      mem_limit: 512m # 限定 docker 容器内存大小
      environment:
        - MYSQL_ROOT_PASSWORD=123456
      volumes:
        - /etc/localtime:/etc/localtime:ro # 设置时区
        - ~/docker/mysql/3306/data:/var/lib/mysql # 数据目录
        - ~/docker/mysql/3306/conf.d:/etc/mysql/conf.d # 配置文件目录，一般动它
        - ~/docker/mysql/3306/mysql.conf.d:/etc/mysql/mysql.conf.d # 配置文件目录，一般不动它
      ports: # network_mode: "host" 无需端口映射
        - 3306:3306
  ```

- mysql.cnf

  ```text
  [mysqld]
  server-id = 1 
  character-set-server = utf8mb4
  skip-host-cache
  skip-name-resolve
  
  [mysqldump]
  quick
  quote-names
  max_allowed_packet	= 16M
  ```

## redis

- docker 命令版

  ```bash
  docker run \
      -d \
      --name redis-6379 \
      -v /etc/localtime:/etc/localtime:ro \
      -v ~/docker/redis/6379/data:/data \
      -v ~/docker/redis/6379/redis.conf:/usr/local/etc/redis/redis.conf \
      -p 6379:6379 \
      redis:5.0 \
      redis-server /usr/local/etc/redis/redis.conf --appendonly yes # 启动命令
  ```

- docker-compose.yml

  ```yaml
  version: '3'
  services:
    redis:
      image: redis:5.0
      container_name: redis-6379
      mem_limit: 512m
      volumes:
        - /etc/localtime:/etc/localtime:ro # 设置时区
        - ~/docker/redis/6379/data:/data # 数据目录
        - ~/docker/redis/6379/redis.conf:/usr/local/etc/redis/redis.conf # 配置文件
      ports:
        - 6379:6379
      command:
        redis-server /usr/local/etc/redis/redis.conf --appendonly yes # 启动命令
  ```

- redis.conf

  ```text
  bind 127.0.0.1
  protected-mode yes
  port 6379
  tcp-backlog 511
  timeout 0
  tcp-keepalive 300
  daemonize no
  supervised no
  pidfile /var/run/redis_6379.pid
  loglevel notice
  logfile ""
  databases 16
  always-show-logo yes
  save 900 1
  save 300 10
  save 60 10000
  stop-writes-on-bgsave-error yes
  rdbcompression yes
  rdbchecksum yes
  dbfilename dump.rdb
  dir ./
  replica-serve-stale-data yes
  replica-read-only yes
  repl-diskless-sync no
  repl-diskless-sync-delay 5
  repl-disable-tcp-nodelay no
  replica-priority 100
  lazyfree-lazy-eviction no
  lazyfree-lazy-expire no
  lazyfree-lazy-server-del no
  replica-lazy-flush no
  appendonly no
  appendfilename "appendonly.aof"
  appendfsync everysec
  no-appendfsync-on-rewrite no
  auto-aof-rewrite-percentage 100
  auto-aof-rewrite-min-size 64mb
  aof-load-truncated yes
  aof-use-rdb-preamble yes
  lua-time-limit 5000
  slowlog-log-slower-than 10000
  slowlog-max-len 128
  latency-monitor-threshold 0
  notify-keyspace-events ""
  hash-max-ziplist-entries 512
  hash-max-ziplist-value 64
  list-max-ziplist-size -2
  list-compress-depth 0
  set-max-intset-entries 512
  zset-max-ziplist-entries 128
  zset-max-ziplist-value 64
  hll-sparse-max-bytes 3000
  stream-node-max-bytes 4096
  stream-node-max-entries 100
  activerehashing yes
  client-output-buffer-limit normal 0 0 0
  client-output-buffer-limit replica 256mb 64mb 60
  client-output-buffer-limit pubsub 32mb 8mb 60
  hz 10
  dynamic-hz yes
  aof-rewrite-incremental-fsync yes
  rdb-save-incremental-fsync yes
  ```

## nginx

::: danger

注意

虽然 dockerhub 上的官方文档说 nginx 启动后是在容器内的 `/usr/share/nginx/html` 目录下加载 .html 等静态资源，但是实际上不同的版本会有一些不同，有的版本是到容器内的 `/etc/nginx/html` 下找。

:::

所以，当你映射了数据卷但又没找到 .html 时，留意一下 error.log ，看看错误信息中显示的是到哪里『找』文件。

- docker 命令版

  ```bash
  docker run \
      -d \
      --name nginx-80
      -v /etc/localtime:/etc/localtime:ro 
      -v ~/docker/nginx/80/html:/usr/share/nginx/html 
      -v ~/docker/nginx/80/logs:/var/log/nginx 
      -v ~/docker/nginx/80/nginx.conf:/etc/nginx/nginx.conf 
      -p 80:80
      nginx:stable
  ```

- docker-compose.yml

  ```yaml
  version: '3'
    services:
      nginx:
        image: nginx:stable
        container_name: nginx-80
        mem_limit: 512m
        volumes:
          - /etc/localtime:/etc/localtime:ro # 设置时区
          - ~/docker/nginx/80/html:/usr/share/nginx/html # 数据目录
          - ~/docker/nginx/80/logs:/var/log/nginx # 日志目录
          - ~/docker/nginx/80/nginx.conf:/etc/nginx/nginx.conf # 配置文件
        ports:
          - 80:80
  ```

- nginx.conf

  ```text
  user  nginx;
  worker_processes  auto;
  
  error_log  /var/log/nginx/error.log notice;
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
      server {
          listen       80;
          server_name  192.172.0.206;
  
          location = / {
              root   html;
              index  index.html;
          }
  
          location .*\.js$ {
              root    html/js;
              expires      30d;
          }
  
          location .*\.ico$ {
              root    html/png;
              expires      30d;
          }
  
  
          # location /api/ {
          #     proxy_pass http://192.172.0.206:8080/;
          # }
      }
  }
  ```

## RabbitMQ

- docker 命令版

  ```bash
  # 创建并运行容器
  docker run \
      -d \
      --name rabbitmq-5672 \
      --hostname rabbitmq-5672 \
      -v /etc/localtime:/etc/localtime:ro 
      -v ~/docker/rabbitmq/5672/data:/var/lib/rabbitmq/mnesia/rabbit@rabbitmq-5672 \
      -p 5672:5672 \
      -p 15672:15672 \
      rabbitmq:3.8.21-management
  ```

- docker-compose 配置文件版

  ```yaml
  services:
    rabbitmq:
      image: rabbitmq:3.8.21-management
      container_name: rabbitmq
      hostname: rabbitmq-5672
      environment:
        - RABBITMQ_DEFAULT_USER=root
        - RABBITMQ_DEFAULT_PASS=root
      volumes:
        - ~/docker/rabbitmq/5672/data:/var/lib/rabbitmq/mnesia/rabbit@rabbitmq-5672 
      ports:
        - "5672:5672"
        - "15672:15672"
  ```

## Elastic Search

- docker 命令版

  ```bash
  docker run \
      -d \
      --name es-9200 \
      -e "discovery.type=single-node" \
      -e ES_JAVA_OPTS="-Xms256m -Xmx256m" \
      -v /etc/localtime:/etc/localtime:ro 
      -v ~/docker/es/9200/data:/usr/share/elasticsearch/data \
      -v ~/docker/es/9200/plugins:/usr/share/elasticsearch/plugins \
      -v ~/docker/es/9200/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml \
      -p 9200:9200 \
      -p 9300:9300 \
      elasticsearch:7.10.1
  ```

- docker-compose 配置文件版

  ```yaml
  version: '3'
  
  services:
    elasticsearch:
      image: elasticsearch:7.10.1
      container_name: es
      environment:
        - discovery.type=single-node
        - ES_JAVA_OPTS="-Xms512m -Xmx512m"
      volumes:
        - /etc/localtime:/etc/localtime:ro 
        - ~/docker/es/9200/data:/usr/share/elasticsearch/data
        - ~/docker/es/9200/plugins:/usr/share/elasticsearch/plugins
        - ~/docker/es/9200/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml
      ports:
        - "9200:9200"
        - "9300:9300"
  ```