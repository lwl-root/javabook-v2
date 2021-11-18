# Maven 相关模板

## 1. maven 的 settings.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>

<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
    http://maven.apache.org/xsd/settings-1.0.0.xsd">

    <mirrors>
        <mirror>
            <id>nexus-aliyun</id>
            <name>Nexus aliyun</name>
            <mirrorOf>central</mirrorOf>
            <url>http://maven.aliyun.com/nexus/content/groups/public</url>
        </mirror>
    </mirrors>

    <!-- 写法一 
    <repository>
        <id>nexus-aliyun</id>
        <name>Nexus aliyun</name>
        <url>https://maven.aliyun.com/repository/public</url>
    </repository>
    -->

    <!-- 写法二
    <profiles>
        <profile>
            <id>hello</id>
            <repositories>
                <repository>
                    <id>aliyun</id>
                    <url>https://maven.aliyun.com/repository/public</url>
                </repository>
            </repositories>
            <pluginRepositories>
                <pluginRepository>
                    <id>alfresco</id>
                    <url>https://artifacts.alfresco.com/nexus/content/repositories/public/</url>
                </pluginRepository>
            </pluginRepositories>
        </profile>
    </profiles>
    <activeProfiles>
        <activeProfile>hello</activeProfile>
    </activeProfiles>
    -->
</settings>
```

## 2. cleanLastUpdated.bat

- Windows 版本：

  ```bash
  @echo off
  rem create by NettQun
  
  rem 这里写你的仓库路径，利用了系统变量 HOMEPATH ，避免写死。
  set REPOSITORY_PATH=C:%HOMEPATH%\.m2\repository
  rem 正在搜索...
  for /f "delims=" %%i in ('dir /b /s "%REPOSITORY_PATH%\*lastUpdated*"') do (
      echo %%i
      del /s /q "%%i"
  )
  rem 搜索完毕
  pause
  ```

- Linux 版本：

  ```bash
  #!/bin/bash
  
  # 这里写你的仓库路径 
  REPOSITORY_PATH=~/.m2/repository
  echo 正在搜索... 
  find $REPOSITORY_PATH -name "*lastUpdated*" | xargs rm -fr
  echo 搜索完 
  ```

## 3. maven 的 pom.xml

版本信息来源说明：

以下的版本信息截取自 spring-boot-starter 2.1.16 和 mybatis-spring-boot 2.0.1，选择这两个版本的原因在于：

- spring-boot-starter ***2.1.16.RELEASE*** 是 spring clould Greenwich.SR6 使用的版本 。
- spring-boot-starter ***2.1.16.RELEASE*** 最终使用到的 spring 的版本是 ***5.1.17.RELEASE*** 。
- mybatis-spring-boot-starter ***2.0.1*** 最低支持的 spring 版本刚好最低到 ***5.1.16.RELEASE*** 。

所依赖的包有：

- guava + slf4j + logback
- SSM
- jackson + hikaricp + pagehelper
- junit
- tomcat7 插件

```xml
<properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
    <java.version>1.8</java.version>
    <lombok.version>1.18.12</lombok.version>
    <logback.version>1.2.3</logback.version>
    <guava.version>28.2-jre</guava.version>
    <spring.version>5.1.17.RELEASE</spring.version>
    <aspectj.version>1.9.6</aspectj.version>
    <servlet-api.version>3.1.0</servlet-api.version>
    <jsp-api.version>2.2</jsp-api.version>
    <jstl.version>1.2</jstl.version>
    <jackson.version>2.9.10</jackson.version>
    <mysql.version>8.0.21</mysql.version>
    <hikaricp.version>3.2.0</hikaricp.version>
    <mybatis.version>3.5.1</mybatis.version>
    <mybatis-spring.version>2.0.1</mybatis-spring.version>
    <pagehelper.version>5.1.8</pagehelper.version> <!-- 单独指定 -->
    <junit.version>4.12</junit.version>
</properties>

<dependencies>
  <dependency><!-- lombok 工具 -->
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>${lombok.version}</version>
    <scope>provided</scope>
  </dependency>
  <dependency><!-- guava 工具库 -->
    <groupId>com.google.guava</groupId>
    <artifactId>guava</artifactId>
    <version>${guava.version}</version>
  </dependency>
  <dependency> <!-- logback 日志包 -->
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>${logback.version}</version>
  </dependency>
  <dependency> <!-- spring aop 的 aspectj 功能 -->
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjweaver</artifactId>
    <version>${aspectj.version}</version>
  </dependency>
  <dependency> <!-- jackson: 处理 json 的库 -->
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>${jackson.version}</version>
  </dependency>
  <dependency> <!-- spring mvc：spring-web 被依赖，自动导入 -->
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>${spring.version}</version>
  </dependency>
  <dependency> <!-- servlet 接口声明 -->
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <version>${servlet-api.version}</version>
    <scope>provided</scope>
  </dependency>
  <dependency> <!-- jsp 接口声明 -->
    <groupId>javax.servlet.jsp</groupId>
    <artifactId>jsp-api</artifactId>
    <version>${jsp-api.version}</version>
    <scope>provided</scope>
  </dependency>
  <dependency><!-- jsp 标签库 -->
    <groupId>javax.servlet</groupId>
    <artifactId>jstl</artifactId>
    <version>${jstl.version}</version>
  </dependency>
  <dependency> <!-- Spring 整合 Dao 需要 -->
    <groupId>org.springframework</groupId>
    <artifactId>spring-jdbc</artifactId>
    <version>${spring.version}</version>
  </dependency>
  <dependency>
    <groupId>com.zaxxer</groupId>
    <artifactId>HikariCP</artifactId>
    <version>${hikaricp.version}</version>
  </dependency>
  <dependency> <!-- mysql 数据库驱动 -->
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>${mysql.version}</version>
  </dependency>
  <dependency> <!-- mybatis -->
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>${mybatis.version}</version>
  </dependency>
  <dependency> <!-- mybatis 分页插件 -->
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper</artifactId>
    <version>${pagehelper.version}</version>
  </dependency>
  <dependency> <!-- spring 整合 mybatis -->
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis-spring</artifactId>
    <version>${mybatis-spring.version}</version>
  </dependency>
  <dependency> <!-- sprint test -->
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>${spring.version}</version>
    <scope>test</scope>
  </dependency>
  <dependency> <!-- junit -->
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>${junit.version}</version>
    <scope>test</scope>
  </dependency>
</dependencies>

<build>
  <finalName>${project.artifactId}</finalName>
  <plugins>
    <plugin> <!-- tomcat 7 插件-->
      <groupId>org.apache.tomcat.maven</groupId>
      <artifactId>tomcat7-maven-plugin</artifactId>
      <version>2.2</version>
      <configuration>
        <port>8080</port>
        <path>/${project.artifactId}</path>
        <uriEncoding>UTF-8</uriEncoding>
      </configuration>
    </plugin> <!-- tomcat 7 插件 end -->
    <plugin> <!-- mybatis.generator 插件 begin-->
      <groupId>org.mybatis.generator</groupId>
      <artifactId>mybatis-generator-maven-plugin</artifactId>
      <version>1.4.0</version> <!-- 不要低于 1.3.7 版本 -->
      <dependencies>
        <dependency>
          <groupId>mysql</groupId>
          <artifactId>mysql-connector-java</artifactId>
          <version>8.0.22</version>
        </dependency>
        <dependency>
          <groupId>org.mybatis.generator</groupId>
          <artifactId>mybatis-generator-core</artifactId>
          <version>1.4.0</version> <!-- 不要低于 1.3.7 版本 -->
        </dependency>
      </dependencies>
      <configuration>
        <verbose>true</verbose> <!-- 允许移动生成的文件 -->
        <overwrite>true</overwrite> <!-- 是否覆盖 -->
        <!-- 自动生成的配置 -->
        <configurationFile>
          src/main/resources/mybatis/generator/mybatis-generator-config.xml
        </configurationFile>
      </configuration>
    </plugin> <!-- mybatis.generator 插件 end-->
  </plugins>
</build>
```

## 4. mybatis-generator-maven-plugin 插件配置

见 mybatis 模板部分。

## 5. tomcat8-magen-plugin 配置

```xml
<plugins>
  ... 

    <plugin> <!-- tomcat 8 插件 -->
      <groupId>org.apache.tomcat.maven</groupId>
      <artifactId>tomcat8-maven-plugin</artifactId>
      <version>3.0-r1655215</version>
      <configuration>
        <port>8080</port>
        <path>/${project.artifactId}</path>
        <uriEncoding>UTF-8</uriEncoding>
      </configuration>
    </plugin>

  ...
</plugins>

<pluginRepositories>
  <pluginRepository>
    <id>alfresco</id>
    <url>https://artifacts.alfresco.com/nexus/content/repositories/public/</url>
    <snapshots>
      <enabled>false</enabled>
    </snapshots>
    <releases>
      <enabled>true</enabled>
    </releases>
  </pluginRepository>
</pluginRepositories>
```