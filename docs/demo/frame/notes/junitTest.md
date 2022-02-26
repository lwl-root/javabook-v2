# junit-vintage-engine和junit-jupiter-engine之间的区别

通过Spring的Initializr生成的SpringBoot项目

spring-boot-starter-test 都会排除 junit-vintage-engine依赖

```xml
 <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
        <exclusions>
            <exclusion>
                <groupId>org.junit.vintage</groupId>
                <artifactId>junit-vintage-engine</artifactId>
            </exclusion>
        </exclusions>
    </dependency>
```

一开始不明白为什么，直到踩了坑才知道这很有必要

|artifactId| 作用                |
|-----|-------------------|
|junit-vintage-engine| 用于运行JUnit 4 引擎测试  |
|junit-jupiter-engine| 用于运行JUnit 5 引擎测试  |


下面这段测试用例
```java
public class UserMapperTest extends BaseTest {

@Autowired
private UserMapper userMapper;

@Test
public void countByExample() {
final long count = userMapper.countByExample(new UserExample());
Assertions.assertTrue(count>0);
}
}
```

**问题描述：**

运行的时候唯独这个测试用例一直报 userMapper 为null，但是其他的测试用例都是正常的。

**排查过程：**

各种关于spring依赖注入情况都排查了，就是没办法，直到把关注点放到了@Test这个注解。

如果spring-boot-starter-test 没有 排除 junit-vintage-engine依赖，那么会导致
org.junit.jupiter.api.Test 和 org.junit.Test 同时存在，如果不小心引入了org.junit.Test ，那么就会发生这个spring 属性注入为null的情况

```java
import org.junit.jupiter.api.Test;
import org.junit.Test;
```

结论：

1、Spring Boot项目推荐编写JUnit 5测试用例，所以不需要JUnit 4引擎。
2、开发者在引入包时，有两个选择，不小心导错包导致出现MockMvc和WebApplicationContext无法加载，间接导致出现属性为null的情况
综上所述，默认将依赖项排除在外。

附录BaseTest

```java
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;

@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = Application.class)
@DisplayName("Base Test")
public class BaseTest {

    @Autowired
    protected WebApplicationContext wac;
    protected MockMvc               mockMvc;

    @org.junit.jupiter.api.BeforeEach
    public void setUp() throws Exception {
        mockMvc = webAppContextSetup(wac).build();
    }

}
```