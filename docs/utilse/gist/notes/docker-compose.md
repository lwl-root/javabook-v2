# docker-compose.yml 模板

## mysql
::: code-tabs
@tab docker 命令版
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
@tab docker-compose 版

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
  启动命令：docker-compose up -d mysql-3306
@tab mysql.cnf
  ```sh
    mkdir -p ~/docker/3306/config && touch ~/docker/3306/config/mysql.cnf
  ```
  ```text
    [mysqld]
    character_set_server=utf8

    [mysql]
    default-character-set=utf8
  ```
## redis
::: code-tabs
@tab docker 命令版
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
@tab docker-compose 版
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
@tab redis.conf
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

::: danger 警告
虽然 dockerhub 上的官方文档说 nginx 启动后是在容器内的 `/usr/share/nginx/html` 目录下加载 .html 等静态资源，但是实际上不同的版本会有一些不同，有的版本是到容器内的 `/etc/nginx/html` 下找。
所以，当你映射了数据卷但又没找到 .html 时，留意一下 error.log ，看看错误信息中显示的是到哪里『找』文件。

::: code-tabs
@tab docker 命令版
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
@tab docker-compose 版
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
@tab nginx.conf
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
:::

## RabbitMQ
::: code-tabs
@tab docker 命令版
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
@tab docker-compose 版
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
:::
## Elastic Search
::: code-tabs
@tab docker 命令版
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
@tab docker-compose 版
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
:::

## Nacos
::: code-tabs
@tab docker 命令版
  ```bash
  暂无
  ```
@tab docker-compose 版
  ```yaml
  version: "3"
services:
  nacos-standalone:
    image: nacos/nacos-server:2.0.3
    container_name: nacos-8848
    network_mode: "bridge" # 默认值，可以缺省。
    mem_limit: 1024m # 限定 docker 容器内存
    environment:
      - PREFER_HOST_MODE=hostname # 如果支持主机名可以使用 'hostname'，否则使用 'ip' ，默认 'ip' 。
      - MODE=standalone
      - JVM_XMX=512m # jvm 最大内存
      - JVM_XMS=512m # jvm 启动（初始化）时占用内存
    volumes:
      - /etc/localtime:/etc/localtime:ro 
      - ~/docker/nacos/8848/logs/:/home/nacos/logs
      - ./config/custom.properties:/home/nacos/init.d/custom.properties
    ports:
      - "8848:8848"
      - "9848:9848"
  ```
@tab custom.properties
  ```properties
#spring.security.enabled=false
#management.security=false
#security.basic.enabled=false
#nacos.security.ignore.urls=/**
#management.metrics.export.elastic.host=http://localhost:9200
# metrics for prometheus
management.endpoints.web.exposure.include=*

# metrics for elastic search
#management.metrics.export.elastic.enabled=false
#management.metrics.export.elastic.host=http://localhost:9200

# metrics for influx
#management.metrics.export.influx.enabled=false
#management.metrics.export.influx.db=springboot
#management.metrics.export.influx.uri=http://localhost:8086
#management.metrics.export.influx.auto-create-db=true
#management.metrics.export.influx.consistency=one
#management.metrics.export.influx.compressed=true
  ```
@tab nacos-mysql.sql
```sql
/*
 * Copyright 1999-2018 Alibaba Group Holding Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/******************************************/
/*   数据库全名 = nacos_config   */
/*   表名称 = config_info   */
/******************************************/
CREATE TABLE `config_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `data_id` varchar(255) NOT NULL COMMENT 'data_id',
  `group_id` varchar(255) DEFAULT NULL,
  `content` longtext NOT NULL COMMENT 'content',
  `md5` varchar(32) DEFAULT NULL COMMENT 'md5',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `src_user` text COMMENT 'source user',
  `src_ip` varchar(50) DEFAULT NULL COMMENT 'source ip',
  `app_name` varchar(128) DEFAULT NULL,
  `tenant_id` varchar(128) DEFAULT '' COMMENT '租户字段',
  `c_desc` varchar(256) DEFAULT NULL,
  `c_use` varchar(64) DEFAULT NULL,
  `effect` varchar(64) DEFAULT NULL,
  `type` varchar(64) DEFAULT NULL,
  `c_schema` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_configinfo_datagrouptenant` (`data_id`,`group_id`,`tenant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_info';

/******************************************/
/*   数据库全名 = nacos_config   */
/*   表名称 = config_info_aggr   */
/******************************************/
CREATE TABLE `config_info_aggr` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `data_id` varchar(255) NOT NULL COMMENT 'data_id',
  `group_id` varchar(255) NOT NULL COMMENT 'group_id',
  `datum_id` varchar(255) NOT NULL COMMENT 'datum_id',
  `content` longtext NOT NULL COMMENT '内容',
  `gmt_modified` datetime NOT NULL COMMENT '修改时间',
  `app_name` varchar(128) DEFAULT NULL,
  `tenant_id` varchar(128) DEFAULT '' COMMENT '租户字段',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_configinfoaggr_datagrouptenantdatum` (`data_id`,`group_id`,`tenant_id`,`datum_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='增加租户字段';


/******************************************/
/*   数据库全名 = nacos_config   */
/*   表名称 = config_info_beta   */
/******************************************/
CREATE TABLE `config_info_beta` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `data_id` varchar(255) NOT NULL COMMENT 'data_id',
  `group_id` varchar(128) NOT NULL COMMENT 'group_id',
  `app_name` varchar(128) DEFAULT NULL COMMENT 'app_name',
  `content` longtext NOT NULL COMMENT 'content',
  `beta_ips` varchar(1024) DEFAULT NULL COMMENT 'betaIps',
  `md5` varchar(32) DEFAULT NULL COMMENT 'md5',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `src_user` text COMMENT 'source user',
  `src_ip` varchar(50) DEFAULT NULL COMMENT 'source ip',
  `tenant_id` varchar(128) DEFAULT '' COMMENT '租户字段',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_configinfobeta_datagrouptenant` (`data_id`,`group_id`,`tenant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_info_beta';

/******************************************/
/*   数据库全名 = nacos_config   */
/*   表名称 = config_info_tag   */
/******************************************/
CREATE TABLE `config_info_tag` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `data_id` varchar(255) NOT NULL COMMENT 'data_id',
  `group_id` varchar(128) NOT NULL COMMENT 'group_id',
  `tenant_id` varchar(128) DEFAULT '' COMMENT 'tenant_id',
  `tag_id` varchar(128) NOT NULL COMMENT 'tag_id',
  `app_name` varchar(128) DEFAULT NULL COMMENT 'app_name',
  `content` longtext NOT NULL COMMENT 'content',
  `md5` varchar(32) DEFAULT NULL COMMENT 'md5',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  `src_user` text COMMENT 'source user',
  `src_ip` varchar(50) DEFAULT NULL COMMENT 'source ip',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_configinfotag_datagrouptenanttag` (`data_id`,`group_id`,`tenant_id`,`tag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_info_tag';

/******************************************/
/*   数据库全名 = nacos_config   */
/*   表名称 = config_tags_relation   */
/******************************************/
CREATE TABLE `config_tags_relation` (
  `id` bigint(20) NOT NULL COMMENT 'id',
  `tag_name` varchar(128) NOT NULL COMMENT 'tag_name',
  `tag_type` varchar(64) DEFAULT NULL COMMENT 'tag_type',
  `data_id` varchar(255) NOT NULL COMMENT 'data_id',
  `group_id` varchar(128) NOT NULL COMMENT 'group_id',
  `tenant_id` varchar(128) DEFAULT '' COMMENT 'tenant_id',
  `nid` bigint(20) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`nid`),
  UNIQUE KEY `uk_configtagrelation_configidtag` (`id`,`tag_name`,`tag_type`),
  KEY `idx_tenant_id` (`tenant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='config_tag_relation';

/******************************************/
/*   数据库全名 = nacos_config   */
/*   表名称 = group_capacity   */
/******************************************/
CREATE TABLE `group_capacity` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `group_id` varchar(128) NOT NULL DEFAULT '' COMMENT 'Group ID，空字符表示整个集群',
  `quota` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '配额，0表示使用默认值',
  `usage` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '使用量',
  `max_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '单个配置大小上限，单位为字节，0表示使用默认值',
  `max_aggr_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '聚合子配置最大个数，，0表示使用默认值',
  `max_aggr_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '单个聚合数据的子配置大小上限，单位为字节，0表示使用默认值',
  `max_history_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '最大变更历史数量',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_group_id` (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='集群、各Group容量信息表';

/******************************************/
/*   数据库全名 = nacos_config   */
/*   表名称 = his_config_info   */
/******************************************/
CREATE TABLE `his_config_info` (
  `id` bigint(64) unsigned NOT NULL,
  `nid` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `data_id` varchar(255) NOT NULL,
  `group_id` varchar(128) NOT NULL,
  `app_name` varchar(128) DEFAULT NULL COMMENT 'app_name',
  `content` longtext NOT NULL,
  `md5` varchar(32) DEFAULT NULL,
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `src_user` text,
  `src_ip` varchar(50) DEFAULT NULL,
  `op_type` char(10) DEFAULT NULL,
  `tenant_id` varchar(128) DEFAULT '' COMMENT '租户字段',
  PRIMARY KEY (`nid`),
  KEY `idx_gmt_create` (`gmt_create`),
  KEY `idx_gmt_modified` (`gmt_modified`),
  KEY `idx_did` (`data_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='多租户改造';


/******************************************/
/*   数据库全名 = nacos_config   */
/*   表名称 = tenant_capacity   */
/******************************************/
CREATE TABLE `tenant_capacity` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `tenant_id` varchar(128) NOT NULL DEFAULT '' COMMENT 'Tenant ID',
  `quota` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '配额，0表示使用默认值',
  `usage` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '使用量',
  `max_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '单个配置大小上限，单位为字节，0表示使用默认值',
  `max_aggr_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '聚合子配置最大个数',
  `max_aggr_size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '单个聚合数据的子配置大小上限，单位为字节，0表示使用默认值',
  `max_history_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '最大变更历史数量',
  `gmt_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `gmt_modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_tenant_id` (`tenant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='租户容量信息表';


CREATE TABLE `tenant_info` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `kp` varchar(128) NOT NULL COMMENT 'kp',
  `tenant_id` varchar(128) default '' COMMENT 'tenant_id',
  `tenant_name` varchar(128) default '' COMMENT 'tenant_name',
  `tenant_desc` varchar(256) DEFAULT NULL COMMENT 'tenant_desc',
  `create_source` varchar(32) DEFAULT NULL COMMENT 'create_source',
  `gmt_create` bigint(20) NOT NULL COMMENT '创建时间',
  `gmt_modified` bigint(20) NOT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_tenant_info_kptenantid` (`kp`,`tenant_id`),
  KEY `idx_tenant_id` (`tenant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='tenant_info';

CREATE TABLE `users` (
	`username` varchar(50) NOT NULL PRIMARY KEY,
	`password` varchar(500) NOT NULL,
	`enabled` boolean NOT NULL
);

CREATE TABLE `roles` (
	`username` varchar(50) NOT NULL,
	`role` varchar(50) NOT NULL,
	UNIQUE INDEX `idx_user_role` (`username` ASC, `role` ASC) USING BTREE
);

CREATE TABLE `permissions` (
    `role` varchar(50) NOT NULL,
    `resource` varchar(255) NOT NULL,
    `action` varchar(8) NOT NULL,
    UNIQUE INDEX `uk_role_permission` (`role`,`resource`,`action`) USING BTREE
);

INSERT INTO users (username, password, enabled) VALUES ('nacos', '$2a$10$EuWPZHzz32dJN7jexM34MOeYirDdFAZm2kuWj7VEOJhhZkDrxfvUu', TRUE);

INSERT INTO roles (username, role) VALUES ('nacos', 'ROLE_ADMIN');
```
