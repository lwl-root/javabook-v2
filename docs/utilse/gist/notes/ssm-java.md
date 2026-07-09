---
title: SSM 整合（Java 代码配置版）
---

# SSM 整合（Java 代码配置版）

## 1. SpringDaoConfig 替代了 spring-dao.xml

```java
@Configuration
public class SpringDaoConfig {

    /*
    // Druid 数据库连接池利用上了 Spring IoC 的 initMethod 和 destroyMethod 机制。
    @Bean(name="dataSource", initMethod = "init", destroyMethod = "close")
    public DruidDataSource dataSource() {
        DruidDataSource ds = new DruidDataSource();
        ds.setDriverClassName("com.mysql.cj.jdbc.Driver");
        ds.setUrl("jdbc:mysql://localhost:3306/******?serverTimezone=UTC&useUnicode=true&characterEncoding=UTF8&useSSL=false");
        ds.setUsername("******");
        ds.setPassword("******");

        return ds;
    }
    */

    // Hikari 数据库连接池利用上了 Spring IoC 的 destroyMethod 机制。
    @Bean(destroyMethod = "close")
    public HikariDataSource dataSource() {
        HikariDataSource ds = new HikariDataSource();
        ds.setDriverClassName("com.mysql.cj.jdbc.Driver");
        ds.setJdbcUrl("jdbc:mysql://127.0.0.1:3306/******?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=UTC");
        ds.setUsername("******");
        ds.setPassword("******");
        return ds;
    }

    /**
     * 因为有它，Mybatis 核心配置文件中的内容被砍的剩不下点啥了。
     */
    @Bean
    public SqlSessionFactoryBean sqlSessionFactoryBean(DataSource ds) throws IOException {
        SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
        factoryBean.setDataSource(ds);
        factoryBean.setConfigLocation(new ClassPathResource("mybatis/mybatis-config.xml"));
        factoryBean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("mybatis/mapper/*.xml"));

        return factoryBean;
    }

    /**
     * 我们仍然需要『包扫描』，但是，不是原来『那样的包扫描』，而是现在『这样的包扫描』。
     * MapperScannerConfigurer 去做的包扫描工作干了两件事情：
     * 1. 它去动态实现 Mapper/Dao 接口的实现类，并创建对象。
     * 2. 将 Mapper/Dao 对象交给 Spring IoC 容器管理。
     */
    @Bean
    public MapperScannerConfigurer mapperScannerConfigurer() {
        MapperScannerConfigurer configurer = new MapperScannerConfigurer();
        configurer.setBasePackage("com.example.dao");
        return configurer;
    }
}
```

## 2. SpringServiceConfig 替代了 spring-service.xml

```java
@Configuration
@ComponentScan("com.example.service") // 包扫描
@EnableTransactionManagement(proxyTargetClass = true) // 开启事务支持。并强制指定使用 cglib 动态代理，对所有 AOP 都有影响。
public class SpringServiceConfig {

    /**
     * 需要注意。JPA 和 Mybatis 使用的事务管理器不一样。
     * - DataSourceTransactionManager for JDBC & Mybatis
     * - JpaTransactionManager for JPA
     */
    @Bean
    public DataSourceTransactionManager transactionManager(DataSource ds) {
        DataSourceTransactionManager manager = new DataSourceTransactionManager();
        manager.setDataSource(ds);
        return manager;
    }

}
```

## 3. SpringWebConfig 替代了 spring-web.xml

如前面所说，在 Java 代码配置形式下，Spring 的 *.xml* 配置文件会被等价的标注了 **@Configuration** 的配置类所取代。

和后续的 *SpringServiceConfig*（替代了 *spring-service.xml*）、*SpringDaoConfig*（替代了 *spring-dao.xml*） 配置类不同的是，它有个『额外』的要求：**它必须实现 \*WebMvcConfigurer\* 接口**（ 实际上Spring 之所以这么要求也是为了帮我们简化配置 ）。

```java
@Configuration
@EnableWebMvc 
@ComponentScan("xxx.yyy.zzz.web")
public class SpringWebConfig implements WebMvcConfigurer {

    @Bean
    public InternalResourceViewResolver viewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setPrefix("/WEB-INF/jsp/");
        viewResolver.setSuffix(".jsp");

        return viewResolver;
    }

    // 配置启用 DefaultServletHandler。解决『静态资源被拦截』的方案之一。
    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }

    /*
    // 另一种静态资源不拦截的配置。
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/**") // 过滤静态资源路径
                .addResourceLocations("/static/");// 定位资源
    }
    */

    /*
    // 配置 URL 路径的匹配规则。
    @Override
    public void configurePathMatch(PathMatchConfigurer configurer) {
        
        // 默认值是 true，这种情况下 SpringMVC 会忽略掉 URL 请求中的后缀。
        // 例如，URL hello.do 能触发 @RequestMapping("/hello")
        // xml 中配置为：
        // <mvc:annotation-driven>
        //    <mvc:path-matching suffix-pattern="false" />
        // </mvc:annotation-driven>

        configurer.setUseSuffixPatternMatch(false);
    }
    */
}
```

## 4. 有 web.xml 的方案

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app 
    xmlns="http://xmlns.jcp.org/xml/ns/javaee"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="
      http://xmlns.jcp.org/xml/ns/javaee
      http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
    version="3.1">

    <display-name>Archetype Created Web Application</display-name>

    <listener>
      <listener-class>
        org.springframework.web.context.ContextLoaderListener
      </listener-class>
    </listener>

    <context-param>
        <param-name>contextClass</param-name>
        <param-value><!-- 相较于 XML 配置，Java 代码配置『多』一个这个 -->
            org.springframework.web.context.support.AnnotationConfigWebApplicationContext
        </param-value>
    </context-param>
    <context-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>
            com.example.config.SpringServiceConfig,
            com.example.config.SpringDaoConfig
        </param-value>
    </context-param>

    <servlet>
      <servlet-name>HelloWeb</servlet-name>
        <servlet-class>
          org.springframework.web.servlet.DispatcherServlet
        </servlet-class>
        <init-param><!-- 这个是『多』出来的一个 -->
            <param-name>contextClass</param-name>
            <param-value>org.springframework.web.context.support.AnnotationConfigWebApplicationContext</param-value>
        </init-param>
        <init-param>
          <param-name>contextConfigLocation</param-name>
          <param-value>com.example.config.SpringWebConfig</param-value>
          </init-param>
      <load-on-startup>1</load-on-startup>
    </servlet>

    <servlet-mapping>
      <servlet-name>HelloWeb</servlet-name>
      <url-pattern>*.do</url-pattern>   <!--    后缀拦截 -->
    </servlet-mapping>                  <!-- /  默认/兜底拦截 -->
</web-app>                              <!-- /* 路径拦截，拦截所有请求-->
```

## 5. 无 web.xml 的方案：WebAppInitializer

为了支持脱离 *web.xml*，Servlet 定义了一个 **javax.servlet.ServletContainerInitializer** 的接口，并且要求在 Servlet 容器启动 web 项目时，在项目的的 jar 包中的 **META-INF/services** 去找一个名字是它的完全限定名的文件。

在 Spring MVC 项目中，spring-web 包下的 *META-INF/services* 目录下就存在这样一个 **javax.servlet.ServletContainerInitializer** 的文件。

按照约定，这个文件的内容可以放 *ServletContainerInitializer* 接口的实现类的完全限定名，在 Spring MVC 中这个实现了是 **org.springframework.web.SpringServletContainerInitializer** 。

Servlet 容器在启动时会创建这个文件中所记载的 *ServletContainerInitializer* 接口的实现类的对象，并调用它的 **onStartup** 。

在 **SpringServletContainerInitializer** 的 **onStartup** 方法中，它会去查找、调用 Spring MVC 项目中所有 **WebApplicationInitializer** 接口直接（或间接）实现类的 **onStartup** 方法。

所以，我们需要直接（或间接）实现 **WebApplicationInitializer**，并在 **onStartup** 方法中实现我们曾将在 *web.xml* 中所实现的内容。

```java
public class WebInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class<?>[] {
            SpringServiceConfig.class,
            SpringDaoConfig.class
        };
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class<?>[] {
            SpringWebConfig.class
        };
    }

    @Override
    protected String[] getServletMappings() {
        return new String[]{ "/" };
    }

    @Override
    protected Filter[] getServletFilters() {
        Filter encodingFilter = new CharacterEncodingFilter("UTF-8", true);

        return new Filter[]{ encodingFilter };
    }
}
```

## 配合 @PropertySource 使用的一个『坑』（了解、自学）

如果你想将数据库连接的相关属性移入一个 classpath 下的 .properties 文件中，让后再在上述配置类中结合 @PropertySource 和 @Value 来加载 .properties 配置文件，引入相关属性值，那么，你会发现一个问题，你的 @Value 读取到的属性值都是 **null** ！

造成这个现象的原因在在于，我们是使用的 MapperScannerConfigurer 进行的『包扫描』的工作，而 MapperScannerConfigurer 开始『干活』的时机要比 @PropertySource 早！这就导致了，当你去读取标注了 @Value 的属性的值时，@PropertySource 还没有为它们赋值。

解决办法是：将 **@Value** 属性（甚至包括数据库的单例配置）拆分出去，再通过 **@Import** 引入回来，变相强迫 Spring 在 **MapperScannerConfigurer** 进行包扫描前先处理它们。

- 被拆分出去的 **@Value** ：

  ```java
  @Data
  @Configuration
  @PropertySource("classpath:jdbc.properties")
  public class DataBaseProperties {
  
      @Value("${jdbc.driverClassName}")
      private String driverClassName;
  
      @Value("${jdbc.jdbcUrl}")
      private String jdbcUrl;
  
      @Value("${jdbc.username}")
      private String username;
  
      @Value("${jdbc.password}")
      private String password;
  }
  ```

- 再在 SpringDaoConfig 的配置中『引入』进来：

  ```java
  @Configuration
  @Import(DataBaseProperties.class)   // 看这里，看这里，看这里
  public class SpringDaoConfig {
  
      ...
  
      /*
      @Bean(initMethod = "init", destroyMethod = "close")
      public DruidDataSource dataSource(DataBaseProperties properties) {
          DruidDataSource ds = new DruidDataSource();
          ds.setDriverClassName(properties.getDriverClassName());
          ds.setUrl(properties.getJdbcUrl());
          ds.setUsername(properties.getUsername());
          ds.setPassword(properties.getPassword());
          return ds;
      }
      */
  
      @Bean(destroyMethod = "close")
      public HikariDataSource dataSource(DataBaseProperties properties) {
          HikariDataSource ds = new HikariDataSource();
          ds.setDriverClassName(properties.getDriverClassName());
          ds.setJdbcUrl(properties.getJdbcUrl());
          ds.setUsername(properties.getUsername());
          ds.setPassword(properties.getPassword());
          return ds;
      }
  
      ...
  
  }
  ```