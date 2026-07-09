---
title: Spring 整合 JUnit5
---

# Spring 整合 JUnit5

## 1. 基本使用和 @ContextConfiguration 注解

```xml
<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-test</artifactId>
  <version>${spring.version}</version>
  <scope>test</scope>
</dependency>

<dependency><!-- 偷懒，一口气引入『一堆』junit5 相关依赖 -->
  <groupId>org.junit.jupiter</groupId>
  <artifactId>junit-jupiter</artifactId>
  <version>5.6.2</version>
  <scope>test</scope>
</dependency>
```

spring-text 并不是一个『新』的测试框架！它和 JUnit 的关系类似于 slf4j 和 logback，我们是直接使用 spring-text，间接使用 JUnit ，在整个测试工作中真正『干活』的仍然是 JUnit 。

之所以这么『绕』一下再使用 JUnit 是因为我们直接使用 JUnit 的话，我们至少有两件事情是需要亲自去干：

1. 手动加载 `.xml` 配置文件，构建 Spring IoC 容器。
2. 手动向 Spring『要』Spring IoC 容器中的单例对象。

例如：

```java
/**
 * 麻烦的写法
 */
public class Test1 {

  @Test
  public void demo() {
    ApplicationContext context = new ClassPathXmlApplicationContext("demo1.xml");

    DataSource ds = context.getBean(DataSource.class);
    ds.getConnection();
    ...
  }
}
```

如果我们是直接使用 spring-text，而间接使用 JUnit，那么至少上述两件事情我们就不用『手动』处理了。

```java
@ExtendWith(SpringExtension.class) // ①
@ContextConfiguration("classpath:demo1.xml")  // ②
public class Test2 {

  @Autowired // ③
  private DataSource ds;

  @Test
  public void demo() throws SQLException {
    ds.getConnection();
    ...
  }
}
```

上述 spring-test 代码有 3 处注解：

1. **@ExtendWith** 指定使用 Spring JUnit 的测试运行器，也就是『真正』干活的那个测试框架。上例中指定的是 JUnit 5，如果有特殊需要和偏好，你也可以指定为别的测试框架，例如 JUnit 4、TestNG 等。
2. **@ContextConfiguration** 注解指定测试用的 Spring 配置文件的位置。根据你的配置，spring-test 会去加载该文件构建 IoC 容器。
3. **@Autowired** 任何 Spring IoC 容器中有的，你所需要的对象，你都可以要求 spring-test 注入到你的测试类的属性中。

::: warning 注意

在 Maven 项目中，spring-test 代码加载的是 test 配套的资源文件，即，`项目 > src > test > resources` 下的配置文件。

:::

另外，上述代码还有一个可优化之处：使用 **@SpringJUnitConfig** 注解，一个顶俩。

```java
// @ExtendWith(SpringExtension.class)
// @ContextConfiguration("classpath:demo.xml")
@SpringJUnitConfig(locations = "classpath:demo.xml")
```

## 2. spring-test 利用事务避免污染数据库

如果涉及测试增删改的 DAO 方法，或者是测试涉及这些 DAO 的 Service 方法，每一个 Test 方法执行结束后都会对数据库造成影响，从而极大可能影响后续 Test 方法的执行。（因为对于第二个 Test 方法而言，数据库环境发生了变化，初始条件可能就已经不满足了）。

为此，spring-test 利用事务的回滚可以在 Test 方法执行结束后，撤销 Test 方法对数据库造成的影响。注意，你的 spring 配置文件中，必须有相关的事务（spring-tx）配置部分。即，必须引入 `spring-service.xml` 配置文件

- **@Transactional**：表示启用事务。
- **@Rollback**：表示本方法执行结束后事务回滚。

```java
@Test
@Transactional
@Rollback
public void demo2() {
    Department dept = departmentDao.selectByPrimaryKey(40);
    log.info("{}", dept);

    dept.setDname(dept.getDname() + ".");
    departmentDao.updateByPrimaryKey(dept);

    dept = departmentDao.selectByPrimaryKey(40);
    log.info("{}", dept);
}
```

@Transactional 和 @Rollback 还可以直接标注在类上，相当于对测试类下的所有的测试方法进行了统一设置。

```java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {
    "classpath:spring/spring-dao.xml", 
    "classpath:spring/spring-service.xml"
})
@Transactional
@Rollback
public class AppTest {
    ...
}
```

@Transactional 和 @Rollback 不仅对 Dao 测试的回滚有效，对 Service 方法的测试，甚至是 Web 方法的测试也都有效。

## 3. @Sql 注解

**@Sql** 注解可以执行 SQL 脚本，也可以执行 SQL 语句。它既可以加上类上面，也可以加在方法上面。

**@Sql** 有下面的属性：

| 属性           | 说明                                                         |
| :------------- | :----------------------------------------------------------- |
| config         | 与注解 @SqlConfig 作用一样，用来配置 `注释前缀`、`分隔符` 等。 |
| executionPhase | 决定 SQL 脚本或语句什么时候会执行，默认是 BEFORE_TEST_METHOD 。 |
| **statements** | 配置要一起执行的 SQL 语句。                                  |
| **scripts**    | 配置 SQL 脚本路径。                                          |
| value          | scripts 的别名，它不能和 scripts 同时配置，但 statements 可以。 |

默认情况下，方法上的 @Sql 注解会覆盖类上的 @Sql 注解。

例如：

```java
@Sql({"/drop_schema.sql", "/create_schema.sql"})
@Sql(scripts = "/insert_data1.sql", statements = "insert into student(id, name) values (100, 'Shiva')")
@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = AppConfig.class)
public class SqlTest {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Test
	public void fetchRows1() {
		List<Map<String, Object>> students = jdbcTemplate.queryForList("SELECT * FROM student");
		assertEquals(3, students.size());
	}

	@Sql("/insert_more_data1.sql")
	@Test
	public void fetchRows2() {
		List<Map<String, Object>> students = jdbcTemplate.queryForList("SELECT * FROM student");
		assertEquals(5, students.size());
	}
} 
```

## 4. mvn test 执行 Junit 5

直接或间接执行 maven 的 `mvn test` 命令时，JUnit 5 测试用例不会执行，因为现在（2021.07.16）并不能识别到 JUnit 5 测试用例。如果需要（像 JUnit 4 那样被 mvn test 命令直接执行），这需要在 maven 的 pom.xml 配置中指定 maven surefire 插件：

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>2.22.2</version>
</plugin>
```