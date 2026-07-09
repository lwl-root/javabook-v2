---
title: SpringBoot 中使用 JUnit
---

# SpringBoot 中使用 JUnit

## 1. SpringBoot 所使用的 JUnit 版本

不同版本的 Spring Boot 依赖/使用了不同版本的 Junit。

- Spring Boot `2.1.x.RELEASE` 使用的是 JUnit 4 ；
- Spring Boot `2.2.x.RELEASE` 使用的是 JUnit 5 。

Junit 4 和 Junit 5 的不同导致了 Spring Boot 的 `2.1.x.RELEASE` 和 `2.2.1.RELEASE` 版本中的相关配置又有所不同。

JUnit4 与 JUnit 5 常用部分注解对比：

| JUnit4       | JUnit5      |
| :----------- | :---------- |
| @Test        | @Test       |
| @BeforeClass | @BeforeAll  |
| @AfterClass  | @AfterAll   |
| @Before      | @BeforeEach |
| @After       | @AfterEach  |
| @Ignore      | @Disabled   |
| @RunWith     | @ExtendWith |

- Junit 5 的测试类头部

  ```java
  import org.junit.jupiter.api.Test;
  import org.junit.jupiter.api.extension.ExtendWith;
  
  // @ExtendWith(SpringExtension.class)
  @SpringBootTest
  class DemoApplicationTests {
      ...
  }
  ```

  实际上，如果你使用的是 JUnit5，那么在 SpringBootTest 上没有必要添加 **@ExtendWith**，因为 @SpringBootTest 已经添加了 @ExtendWith 。

- Junit 4 的测试类头部

  ```java
  import org.junit.Test;
  import org.junit.runner.RunWith;
  
  @RunWith(SpringJUnit4ClassRunner.class)
  @SpringBootTest
  class DemoApplicationTests {
      ...
  }
  ```

## 2. 加载配置文件

为了隔离开发和测试环境，我们通常会提供不同的配置文件，在其中配置不同的配置项。例如，开发和测试使用不同的数据库环境。

为此，我们通常会提供一个 `application-test.properties` 或 `application-test.yml` 配置文件用于测试。

在测试时，我们会要求 SpringBoot 去加载测试环境的相关配置。

```java
@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("test") // 看这里，看这里，看这里
public class SpringBootTestExampleApplicationTests {

    @Value("${spring.datasource.url}")
    private String url; // 可通过这种方式来验证

    ...
}
```

如上例所示，在测试类的同上加上注解 `@ActiveProfiles("test")` 表示本测试类运行时启用 `application-test.properties` 或 `application-test.yml` 配置文件。

## 3. 使用事务锁定测试数据库中的数据

如果涉及测试增删改的 DAO 方法，或者是测试涉及这些 DAO 的 Service 方法，每一个 Test 方法执行结束后都会对数据库造成影响，从而极大可能影响后续 Test 方法的执行。

&gt; 因为对于第二个 Test 方法而言，数据库环境发生了变化，初始条件可能就已经不满足了。

spring-test 可以利用事务的回滚在测试方法结束后，撤销测试方法对数据库的影响。即，测试方法对数据库的写操作最终并未提交。

在测试方法，或测试类的头上加注 `@Transactional` 和 `@Rollback` 注解即可：

```java
@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("test")
@Transactional
@Rollback   // 默认，可省略，与之对应的是 @Commit 注解
public class SpringBootTestExampleApplicationTests {
    ...
}
```

再执行测试方法时，你在输出日志中会看到类似如下的 INFO 信息：

```text
Began transaction (1) for test context 
...
Rolled back transaction for test: 
```

`@Transactional` 和 `@Rollback` 不仅对 Dao 测试的回滚有效，对 Service 方法的测试，甚至是 Web 方法的测试也都有效。

## 4. 单独的测试配置

单独的测试配置的核心和目的就是：测试时，仅加载和本次测试相关的必要的配置，如果被测代码与其它代码有依赖关系，甚至可以通过 Mock 去伪造被倚赖代码。

&gt; 在这里，我们要重新捡起 SSM Java 代码配置那套东西。

所以，先编写一个 mybatis 的测试配置类：

```java
@Configuration 
@MapperScan(basePackages = "com.woniu.example.department.outlet.dao.mysql")
@Profile("PROFILE_UNIT_TEST")
public class MybatisTestConfig {

    @Bean(destroyMethod = "close")
    public HikariDataSource dataSource() {
        HikariDataSource ds = new HikariDataSource();
        ds.setDriverClassName("com.mysql.cj.jdbc.Driver");
        ds.setJdbcUrl("jdbc:mysql://127.0.0.1:3306/scott?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=UTC");
        ds.setUsername("root");
        ds.setPassword("123456");
        return ds;
    }

    @Bean
    public SqlSessionFactoryBean sqlSessionFactoryBean(DataSource ds) {
        SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
        factoryBean.setDataSource(ds);
        // factoryBean.setConfigLocation(new ClassPathResource("mybatis/mybatis-config.xml"));
        // factoryBean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("mybatis/mapper/*.xml"));
        return factoryBean;
    }

/*
    @Bean
    public MapperScannerConfigurer mapperScannerConfigurer() {
        MapperScannerConfigurer configurer = new MapperScannerConfigurer();
        configurer.setBasePackage("com.woniu.example.departmentservice.outlet.dao.mysql");
        return configurer;
    }
*/

    @Bean
    public DataSourceTransactionManager transactionManager(DataSource ds) {
        DataSourceTransactionManager manager = new DataSourceTransactionManager();
        manager.setDataSource(ds);
        return manager;
    }

}
```

接着还有其他的相关 bean 依赖以此类推来编写。

```java
@SpringJUnitConfig(classes = {MyBatisConfig.class})
@Transactional
class DepartmentDaoTest {

    @Autowired
    private DepartmentDao departmentDao;

    ...
}
```

- **@SpringJUnitConfig** = `@ExtendWith(SpringExtension.class)` + `@ContextConfiguration`

  @ExtendWith 用于指明使用哪个测试框架。

  @ContextConfiguration 用于指明加载哪些 @Bean 。

- **SpringJUnitWebConfig** = `@ExtendWith(SpringExtension.class)` + `@ContextConfiguration` + `@WebAppConfiguration`

  @ExtendWith 用于指明使用哪个测试框架。

  @ContextConfiguration 用于指明加载哪些 @Bean 。

  @WebAppConfiguration 用于加载 Web 环境所依赖的 Bean 。

## 5. @WebMvcTest 注解

**@WebMvcTest** 是 Spring Boot 1.4 引入的 4 个新的测试注释之一：

```text
       @JsonTest - for testing the JSON marshalling and unmarshalling
     @WebMvcTest - for testing the controller layer
    @DataJpaTest - for testing the repository layer
@RestClientTests - for testing REST clients
```

**@WebMvcTest** 声明来加载只包括了需要测试 web controller 的 bean 的应用上下文。

```text
i.e. @Controller, @ControllerAdvice, @JsonComponent, Converter/GenericConverter, Filter, WebMvcConfigurer and HandlerMethodArgumentResolver beans but not @Component, @Service or @Repository beans
```

另外，**@WebMvcTest** 还自动激活、配置了 Spring Security和 MockMvc 。

```text
By default, tests annotated with @WebMvcTest will also auto-configure Spring Security and MockMvc. 
```

## 6. 测试 Controller

最后这里是针对 Service 层（接口）的测试，对于 Controller 层的测试是缺失的。所以为了能快速测试 Controller，Spring 提供了 MockMvc 来『在不启动项目、tomcat 容器的情况下』向 Controller 发起请求。

由于使用不同的注解可以构造不同『大小』的环境（Spring IoC 容器），所以常见有下面几种组合：

| 注解组合                                               | 说明                                                   |
| :----------------------------------------------------- | :----------------------------------------------------- |
| @SpringBootTest @AutoConfigureMockMvc                  | 完整的环境，再加上 MockMvc                             |
| @AutoConfigureWebMvc @AutoConfigureMockMvc             | web 相关的环境，再加上 MockMvc                         |
| @WebMvcTest                                            | 上种情况的简写                                         |
| @WebMvcTest @WebAppConfiguration @ContextConfiguration | web 相关的环境，再加上 MockMvc，再加上自己指定的 @Bean |

如果你的测试环境（Spring IoC 容器）中有 MockMvc，那么在你的 JUnit 中，你就可以通过 @Autowired 得到它，继而使用它。

下面的 JUnit 测试代码会用到 MockMvc 的一些静态的工具类，它们大多来自：

```java
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
@RunWith(SpringRunner.class)
@SpringBootTest 
@AutoConfigureMockMvc 
@Transactional
@Rollback
public class UsersControllerBestTests extends CommonTestCode {

    @Autowired
    private MockMvc mockMvc;

    @Autowired // json 转换
    private ObjectMapper objectMapper;

    @Test
    @SneakyThrows
    @WithMockUser(
            username = "admin",
            password = "admin",
            authorities = "ROLE_ADMIN"
    )
    // @Commit
    @Sql("classpath:sql-script/users.sql")
    public void createUsersTest() {
        ObjectNode reqVo = objectMapper.createObjectNode();
        ObjectNode createOrEditUsersForm = reqVo.putObject("createOrEditUsersForm");

        createOrEditUsersForm.put("username", "jufeng98");
        createOrEditUsersForm.put("password", "admin");
        createOrEditUsersForm.put("email", "jufeng98@qq.com");
        createOrEditUsersForm.put("gender", "M");

        mockMvc.perform(post("/admin/users/createUsers")
                            .contentType(MediaType.APPLICATION_JSON_UTF8)
                            .content(objectMapper.writeValueAsString(reqVo))
                            .accept(MediaType.APPLICATION_JSON_UTF8))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath("$.data.username").value("jufeng98"));
    }
}
```

所以，掌握此类写法就能让单元测试高效运行，于此同时，我们也可利用单元测试来快速调试代码，这也大大提高了我们的开发效率，可谓一举两得。

另外，Spring 也提供了两个非常有用的测试注解：**@MockBean** 和 **@SpyBean**，还有一个辅助类：**MockRestServiceServer** 。

### @MockBean

@MockBean 注解会代理 bean 的所有方法，对于未 mock 的方法调用均是返回 null：

```java
@RunWith(SpringRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = {
        WebTestConfig.class,
        DatasourceTestConfig.class,
        SecurityTestConfig.class,
        UsersController.class
})
@AutoConfigureMockMvc
@AutoConfigureWebMvc
@ActiveProfiles("PROFILE_UNIT_TEST")
public class MockBeanTests extends CommonTestCode {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private UsersService usersService;

    @Test
    @SneakyThrows
    @WithMockUser(
            username = "admin",
            password = "admin",
            authorities = "ROLE_ADMIN"
    )
    public void createUsersTest() {
        Users users = new Users();
        users.setUsername("jufeng98");
        // @MockBean 注解会代理 bean 的所有方法,对于未 mock 的方法调用均是返回 null，这里的意思是针对调用 createUsers 方法的任意入参，均返回指定的结果
        given(usersService.createUsers(any(), any())).willReturn(users);

        ObjectNode reqVo = objectMapper.createObjectNode();
        ObjectNode createOrEditUsersForm = reqVo.putObject("createOrEditUsersForm");

        createOrEditUsersForm.put("username", "jufeng98");
        createOrEditUsersForm.put("password", "admin");
        createOrEditUsersForm.put("email", "jufeng98@qq.com");
        createOrEditUsersForm.put("gender", "M");

        mockMvc.perform(
            post("/admin/users/createUsers")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(objectMapper.writeValueAsString(reqVo))
                .accept(MediaType.APPLICATION_JSON_UTF8)
        )
        .andDo(print())
        .andExpect(status().isOk())
        .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
        .andExpect(jsonPath("$.data.username").value("jufeng98"));
    }
}
```

### @SpyBean

@SpyBean 可达到部分 mock 的效果，未被 mock 的方法会被真实调用

```java
@RunWith(SpringRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = { 
        MybatisTestConfig.class,
        WebTestConfig.class,
        DatasourceTestConfig.class,
        SecurityTestConfig.class,
        UsersController.class,
        UsersServiceImpl.class
})
@AutoConfigureMockMvc
@AutoConfigureWebMvc
@ActiveProfiles("PROFILE_UNIT_TEST")
public class SpyBeanTests extends CommonTestCode {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @SpyBean
    private UsersService usersService;

    @Test
    @SneakyThrows
    @WithMockUser(
            username = "admin",
            password = "admin",
            authorities = "ROLE_ADMIN"
    )
    public void createUsersTest() {
        Users users = new Users();
        users.setUsername("jufeng98");
        // @SpyBean可达到部分mock的效果,仅当 doReturn("").when(service).doSomething() 时，doSomething方法才被mock，
        // 其他的方法仍被真实调用。
        // 未发生实际调用
        doReturn(users).when(usersService).createUsers(any(), any());

        ObjectNode reqVo = objectMapper.createObjectNode();
        ObjectNode createOrEditUsersForm = reqVo.putObject("createOrEditUsersForm");

        createOrEditUsersForm.put("username", "jufeng98");
        createOrEditUsersForm.put("password", "admin");
        createOrEditUsersForm.put("email", "jufeng98@qq.com");
        createOrEditUsersForm.put("gender", "M");

        mockMvc.perform(
                post("/admin/users/createUsers")
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(objectMapper.writeValueAsString(reqVo))
                .accept(MediaType.APPLICATION_JSON_UTF8)
            )
            .andDo(print())
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
            .andExpect(jsonPath("$.data.username").value("jufeng98"));
    }
}
```

### MockRestServiceServer（了解、自学）

**MockRestServiceServer** 类用于 mock 使用 RestTemplate 调用 http 接口的返回，假设我们有个接口是这样的，使用了 RestTemplate 调用 http 接口获取信息：

```java
@Validated
@RestController
@RequestMapping("/admin/test")
public class TestController {

    @Autowired
    private TestService testService;
    
    @PostMapping("/getOrderPayType")
    public Result<String> getOrderPayType(@RequestBody JsonNode jsonNode) {
        return new Result<>(testService.getOrderPayType(jsonNode.get("orderCode").asText()));
    }
}

@Service
public class TestServiceImpl implements TestService {

    @Autowired
    private RestTemplate restTemplate;

    @Override
    public String getOrderPayType(String orderCode) {
        JsonNode jsonNode = restTemplate.getForObject("http://b2c-cloud-order-service/getOrderPayType?orderCode={1}", JsonNode.class, orderCode);
        return Objects.requireNonNull(jsonNode).get("payType").asText();
    }
}
```

那么单元测试就可以这样写：

```java
@RunWith(SpringRunner.class)
@ContextConfiguration(classes = {
        DatasourceTestConfig.class,
        SecurityTestConfig.class,
        WebTestConfig.class,
        TestController.class,
        TestServiceImpl.class
})
@AutoConfigureMockMvc
@AutoConfigureWebMvc
@WebAppConfiguration
@ActiveProfiles("PROFILE_UNIT_TEST")
public class MockRestServiceServerTests extends CommonTestCode {

    @Autowired
    protected MockMvc mockMvc;

    @Autowired
    private RestTemplate restTemplate;

    @Test
    @WithMockUser(
            username = "admin",
            password = "admin",
            authorities = "ROLE_ADMIN"
    )
    @SneakyThrows
    public void test() {
        MockRestServiceServer server = MockRestServiceServer.bindTo(restTemplate).build();
        // mock http接口的返回
        server
                .expect(requestTo("http://b2c-cloud-order-service/getOrderPayType?orderCode=C93847639357"))
                .andRespond(withSuccess("{\"orderCode\":\"C93847639357\",\"payType\":\"alipay\"}", MediaType.APPLICATION_JSON_UTF8));

        mockMvc
                .perform(
                        post("/admin/test/getOrderPayType")
                                .contentType(MediaType.APPLICATION_JSON_UTF8)
                                .content("{\"orderCode\":\"C93847639357\"}")
                                .accept(MediaType.APPLICATION_JSON_UTF8)
                )
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(jsonPath("$.data").value("alipay"));
    }

}
```

最后 SpringBoot 还提供了大量的各类辅助测试的注解例如 @JdbcTest、@DataRedisTest、@DataJpaTest 等等，大家有兴趣可以去研究。

附上 Spring Testing 和 SpringBoot Testing 的官方文档：

- [spring Testing(opens new window)](https://docs.spring.io/spring-framework/docs/current/reference/html/testing.html#testing)
- [spring-boot Testing](https://docs.spring.io/spring-boot/docs/2.1.6.RELEASE/reference/html/boot-features-testing.html)