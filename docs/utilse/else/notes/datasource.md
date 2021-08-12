# 数据库连接池

## 数据库连接池：Druid

Druid 阿里巴巴公司开源的一款数据库连接池。在功能、性能、扩展性方面，都超过它的先辈。

### 简单使用

- pom.xml

  ```xml
  <dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.17</version>
  </dependency>
  
  <dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid</artifactId>
    <version>1.1.20</version>
  </dependency>
  ```

- 简单示例：

  ```java
  Properties properties = new Properties();
  properties.setProperty("driver", "com.mysql.jdbc.Driver");
  properties.setProperty("url", "jdbc:mysql://127.0.0.1:3306/scott?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8&useSSL=false");
  properties.setProperty("username", "root");
  properties.setProperty("password", "123456");
  
  DataSource dataSource = DruidDataSourceFactory.createDataSource(properties);
  Connection connection = dataSource.getConnection();
  
  System.out.println(connection == null ? "not connected" : "connected");
  ```

### 结合配置文件使用

配置文件：

- jdbc.properties

  ```properties
  driver=com.mysql.cj.jdbc.Driver
  url=jdbc:mysql://127.0.0.1:3306/scott?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8&useSSL=false
  username=root
  password=123456
  ```

从配置文件中加载配置信息，并创建数据库连接池：

- 代码：

  ```java
  InputStream is = Thread.currentThread().getContextClassLoader().getResourceAsStream("jdbc.properties");
  
  Properties properties = new Properties();
  properties.load(is);
  
  DataSource dataSource = DruidDataSourceFactory.createDataSource(properties); // Druid
  Connection connection = dataSource.getConnection();
  
  System.out.println(connection == null ? "not connected" : "connected");
  ```

### Druid 中的工具类：JdbcUtils

Druid 的 *com.alibaba.druid.util* 包下有若干工具类，其中 **JdbcUtils** 中提供了我们常见 JDBC 操作的封装。

其中，

- 增删改 SQL 操作，可以使用 **JdbcUtils.executeUpdate()** 方法简化代码。
- 查询 SQL 操作，可以使用 **JdbcUtils.executeQuery()** 方法简化代码。

另外，**JdbcUtils.close()** 方法 **JdbcUtils.printResultSet()** 也很有实用价值。

## 数据库连接池：HikariCP

HikariCP 是几个常见数据库连接池中出现的最晚的一个。它口号是“快速、简单、可靠”，官方宣传是性能最快的数据库连接池（貌似也没有其它方对此表示异议）。

### 简单使用

- pom.xml

  ```xml
  <dependency>
    <groupId>com.zaxxer</groupId>
    <artifactId>HikariCP</artifactId>
    <version>3.3.1</version>
    </dependency>
  
  <dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.17</version>
  </dependency>
  ```

- 示例代码

  ```java
  Properties properties = new Properties();
  
  properties.setProperty("driverClassName", "com.mysql.cj.jdbc.Driver");
  properties.setProperty("jdbcUrl", "jdbc:mysql://127.0.0.1:3306/********?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8&useSSL=false");
  properties.setProperty("username", "********");
  properties.setProperty("password", "********");
  
  DataSource dataSource = new HikariDataSource(new HikariConfig(properties)); // Druid
  Connection connection = dataSource.getConnection();
  
  System.out.println(connection == null ? "not connected" : "connected");
  ```

这里需要注意的是，在配置数据库连接四大属性时，HikariCP 和其它数据库连接池用到了不同的单词。它使用到的是 ***driverClassName*** 和 ***jdbcUrl*** 。其它数据库连接池通常用的是 *driver* 和 *url* 。

### 配合配置文件使用

配置文件

- jdbc.properties

  ```properties
  driverClassName=com.mysql.cj.jdbc.Driver
  jdbcUrl=jdbc:mysql://127.0.0.1:3306/scott?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8&useSSL=false
  username=root
  password=123456
  ```

- 代码使用示例

  ```java
  InputStream is = Thread.currentThread().getContextClassLoader().getResourceAsStream("jdbc.properties");
  Properties properties = new Properties();
  properties.load(is);
  
  DataSource dataSource = new HikariDataSource(new HikariConfig(properties));
  Connection connection = dataSource.getConnection();
  
  System.out.println(connection == null ? "not connected" : "connected");
  ```