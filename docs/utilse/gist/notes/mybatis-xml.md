# Mybatis 相关

## 1. mybatis-generator-maven-plugin 插件

下面的配置片段位于 maven 的 pom.xml 文件的的 `<build>` 下的 `<plugins> `中，别放错地方了。

```xml
<plugin> 
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
        <!-- 具体的、更多的参数说明见官网 http://mybatis.org/generator/running/runningWithMaven.html -->
        <verbose>true</verbose> <!-- 允许移动生成的文件 -->
        <overwrite>true</overwrite> <!-- 是否覆盖 -->
        <!-- 自动生成的配置 -->
        <configurationFile>
            src/main/resources/mybatis/generator/mybatis-generator-config.xml
        </configurationFile>
    </configuration>
</plugin> 
```

::: warning 注意
上段配置中指定的 mybatis-generator 配置文件在 resources/mybatis/generator 下，且名为 mybatis-generator-config.xml ，所以务必保证你的 mybatis-generator 配置文件是在这里，且叫这个名字。如果不是，则改动配置或文件路径名，确保两者一致。
:::

## 2. generator.properties

为了简化配置，关注核心配置内容，我们将 mybatis-generator.xml 中有可能会变动、定制化的内容抽取出来放在了 **resources/mybatis/generator** 下的 **generator.properties** 配置文件中。

```properties
datasource.driver-class-name=com.mysql.cj.jdbc.Driver
datasource.url=jdbc:mysql://127.0.0.1:3306/scott\
    ?useUnicode=true\
    &characterEncoding=utf-8\
    &useSSL=false\
    &serverTimezone=Asia/Shanghai
datasource.username=root
datasource.password=123456

runtime=MyBatis3
dao.type= XMLMAPPER 或者是 ANNOTATEDMAPPER 
dao.package=xxx.yyy.zzz.dao
po.package=xxx.yyy.zzz.dao.po
xml.package=mybatis/mapper
```

## 3. mybatis-generator-config.xml 配置

由于我们将可能会变动、定制化的内容抽取出来放到了 resources/mybatis/generator/generator.properties 配置文件中，所以，mybatis-generator-config.xml 配置文件中的大部分内容我们都不会去动它们。

对于 mybatis-generator-config.xml 我们需要关注、添加、调整的内容是其中（在末尾处） 的 `<table> `部分：指定对哪个、哪些表生成相关代码、配置文件。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration
        PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
        "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">
<generatorConfiguration>
    <!-- for database connection. 路径是相较于 resources 的相对路径 -->
    <properties resource="mybatis/generator/generator.properties"/>

    <context id="scott" targetRuntime="${runtime}">

        <!-- 以前 mapper.xml 文件内容是在原文件上追加，而不是直接覆盖，导致了这个错误。1.3.7+ 提供了下述插件解决了这个问题。-->
        <plugin type="org.mybatis.generator.plugins.UnmergeableXmlMappersPlugin"/>
        <!-- 为模型生成序列化方法-->
        <plugin type="org.mybatis.generator.plugins.SerializablePlugin"/>

        <!--可以自定义生成 model 的代码注释-->
        <commentGenerator>
            <!-- 去掉注解中的生成日期 -->
            <property name="suppressDate" value="true"/>
            <!--关闭注释 -->
            <property name="suppressAllComments" value="true"/>
        </commentGenerator>

        <!--数据库链接地址账号密码-->
        <jdbcConnection driverClass="${datasource.driver-class-name}"
                        connectionURL="${datasource.url}"
                        userId="${datasource.username}"
                        password="${datasource.password}">
            <!-- 不同库中有同名表，会出现映射混乱 bug 。-->
            <property name="nullCatalogMeansCurrent" value="true" />
        </jdbcConnection>

        <javaTypeResolver>
            <!--
            true： 无论什么情况，都是使用 BigDecimal 对应 DECIMAL 和 NUMERIC 数据类型
            false： 默认值,
                scale>0;length>18：使用BigDecimal;
                scale=0;length[10,18]：使用Long；
                scale=0;length[5,9]：使用Integer；
                scale=0;length<5：使用Short；
            -->
            <property name="forceBigDecimals" value="true"/>
        </javaTypeResolver>

        <!-- PO 类的相关设置 -->
        <javaModelGenerator targetProject="src/main/java"
                            targetPackage="${po.package}">
            <!-- 在 targetPackage 的基础上，根据数据库的 schema 再生成一层 package，最终生成的类放在这个 package下，默认为false  -->
            <property name="enableSubPackages" value="false"/>
            <property name="trimStrings" value="true"/>
        </javaModelGenerator>

        <!-- Mapper.xml 配置文件的相关设置 -->
        <sqlMapGenerator targetProject="src/main/resources"
                         targetPackage="${xml.package}">
            <property name="enableSubPackages" value="false"/>
        </sqlMapGenerator>

        <!-- DAO 接口的相关设置-->
        <javaClientGenerator targetProject="src/main/java"
                             targetPackage="${dao.package}"
                             type="${dao.type}">
            <property name="enableSubPackages" value="false"/>
        </javaClientGenerator>

        <!--生成对应表及类名-->
        <table tableName="department" catalog="scott"
               domainObjectName="Department"
               mapperName="DepartmentDao"
               enableCountByExample="false"
               enableUpdateByExample="false"
               enableDeleteByExample="false"
               enableSelectByExample="false">
            <property name="ignoreQualifiersAtRuntime" value="true"/>
            <!-- 自增 ID 回填-->
            <generatedKey column="id" sqlStatement="MySql" identity="true"/>
        </table>

    </context>
</generatorConfiguration>
```

::: warning 注意
mybatis-generator 生成的是配置文件方案，还是注解方案，却决于 generator.properties 中的 `dao.type` 配置项的值是 **XMLAPPER** 还是 **ANNOTATEDMAPPER** 。
:::

## 4. 核心配置文件 for standalone

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration
  PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
  "http://mybatis.org/dtd/mybatis-3-config.dtd">

<configuration>

<!-- 别名。非必须。
  <typeAliases>
    <typeAlias alias="dept" type="xxx.yyy.zzz.bean.Department"/>
  </typeAliases>
-->
  <!-- 数据库环境。必须。-->
  <environments default="development">
    <environment id="development">
      <transactionManager type="JDBC" />
        <dataSource type="POOLED">
        <property name="driver" value="com.mysql.cj.jdbc.Driver" />
        <property name="url" value="jdbc:mysql://localhost:3306/数据库?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai"/>
        <property name="username" value="用户名" />
        <property name="password" value="密码" />
      </dataSource>
    </environment>
  </environments>

  <!-- 映射文件。必须。-->
  <mappers>
    <!--这是一个相对于 classpath 的路径名。另外，不需要使用 / 。 -->
    <mapper resource="mapper/DepartmentMapper.xml" />
  </mappers>

</configuration>
```

## 5. 核心配置文件 with Spring

SSM 整合时使用，开启 id 主键回填功能。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration
    PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <!-- 配置全局属性：对注解 SQL 生效；对 xml SQL 无效 -->
    <settings>
        <setting name="useGeneratedKeys" value="true"/> <!-- 使用 jdbc 的 getGeneratedKeys 获取数据库自增主键值 -->
    </settings>
</configuration>
```

## 6. 普通的结果集映射

```xml
<resultMap id="xxx" type="xxx.yyy.zzz.outlet.dao.po.Department">
  <id column="id" jdbcType="INTEGER" property="id" />
  <result column="name" jdbcType="VARCHAR" property="name" />
  <result column="location" jdbcType="VARCHAR" property="location" />
</resultMap>
```

## 7. 结果集一对多映射
::: code-tabs
@tab 联表查询式
  ```xml
  &lt;resultMap id="EmployeeResultMap" type="xxx.yyy.zzz.outlet.dao.po.Employee"&gt;
    &lt;id ... /&gt;
    &lt;result ... /&gt;
    &lt;result ... /&gt;
    ...
  
    &lt;association property="department" javaType="xxx.yyy.zzz.outlet.dao.po.Department"&gt;
      &lt;id column="did" property="id" jdbcType="INTEGER"/&gt;
      &lt;result column="dname" property="name" jdbcType="VARCHAR"/&gt;
      &lt;result column="location" property="location" jdbcType="VARCHAR"/&gt;
    &lt;/association&gt;
  &lt;/resultMap&gt;
  ```
@tab 独立调用式
  ```xml
  &lt;resultMap id="EmployeeResultMap" type="xxx.yyy.zzz.outlet.dao.po.Employee"&gt;
    &lt;id ... /&gt;
    &lt;result ... /&gt;
    &lt;result ... /&gt;
    ...
  
    &lt;association property="department" 
        column="department_id" 
        javaType="xxx.yyy.zzz.outlet.dao.po.Department"
        select="xxx.yyy.zzz.outlet.dao.DepartmentDao.selectByPK"&gt;
    &lt;/association &gt;
  &lt;/resultMap&gt;
  ```
:::
:::

## 8. 结果集多对一映射
::: code-tabs
@tab 联表查询式
  ```xml
  &lt;resultMap id="DepartmentResultMap" type="xxx.yyy.zzz.outlet.dao.po.Department"&gt;
    &lt;id .../&gt;
    &lt;result .../&gt;
    &lt;result .../&gt;
    ...
  
    &lt;collection property="employeeList" ofType="xxx.yyy.zzz.outlet.dao.po.Employee"&gt;
      &lt;id column="id" property="id"/&gt;
      &lt;result column="name" property="name"/&gt;
      &lt;result column="job" property="job"/&gt;
      &lt;result column="mgr" property="mgr"/&gt;
      &lt;result column="hiredate" property="hiredate"/&gt;
      &lt;result column="salary" property="salary"/&gt;
      &lt;result column="commission" property="commission"/&gt;
      &lt;result column="department_id" property="departmentId"/&gt;
    &lt;/collection&gt;
  &lt;/resultMap &gt;
  ```
@tab 独立调用式
  ```xml
  &lt;resultMap id="DepartmentResultMap" type="xxx.yyy.zzz.outlet.dao.po.Department"&gt;
    &lt;id ... /&gt;
    &lt;result ... /&gt;
    &lt;result ... /&gt;
    ...
  
    &lt;collection column="id" 
        javaType="java.util.List"
        ofType="xxx.yyy.zzz.outlet.dao.po.Employee" 
        property="employeeList"
        select="xxx.yyy.zzz.outlet.dao.EmployeeDao.selectByDepartmentId"&gt;
    &lt;/collection&gt;
  &lt;/resultMap &gt;
  ```
:::
:::

## 9. 注解映射

::: code-tabs
@tab 无关联关系映射
  ```java
  @Results(id = "department", value = {
      @Result(property = "id", column = "deptno"),
      @Result(property = "name", column = "name"),
      @Result(property = "location", column = "loc")
  })
  ```
@tab 多对一映射
  ```java
  @Results(id = "employee", value = {
        @Result(property = "empno", column = "empno"),
        @Result(property = "ename", column = "ename"),
        @Result(property = "job", column = "job"),
        @Result(property = "mgr", column = "mgr"),
        @Result(property = "hiredate", column = "hiredate"),
        @Result(property = "sal", column = "sal"),
        @Result(property = "comm", column = "comm"),
        @Result(property = "dept", column = "deptno", one = @One(select = "xxx.yyy.zzz.outlet.dao.DepartmentDao.selectByPK"))
  })
  ```
@tab 一对多映射

  ```java
  @Results(id = "department", value = {
        @Result(property = "id", column = "deptno"),
        @Result(property = "name", column = "deptno"),
        @Result(property = "location", column = "loc"),
        @Result(property = "employeeList", column = "deptno", many = @Many(select = "xxx.yyy.zzz.outlet.dao.EmployeeDao.selectByDepartmentId"))
  })
  ```
:::
:::