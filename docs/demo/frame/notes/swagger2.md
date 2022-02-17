# SpringBoot集成Swagger

## 1、添加pom依赖

```xml
<dependencies>
    <!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger-ui -->
    <dependency>
        <groupId>io.springfox</groupId>
        <artifactId>springfox-swagger-ui</artifactId>
        <version>2.9.2</version>
    </dependency>
 	<!-- https://mvnrepository.com/artifact/io.springfox/springfox-swagger2 -->
    <dependency>
       <groupId>io.springfox</groupId>
       <artifactId>springfox-swagger2</artifactId>
       <version>2.9.2</version>
    </dependency>
</dependencies>
```

## 2、创建Swagger2Configuration.java

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration  
@EnableSwagger2
public class Swagger2Configuration {

   //api接口包扫描路径controller
   public static final String SWAGGER_SCAN_BASE_PACKAGE = "com.XX.controller";
   //接口文档版本号
   public static final String VERSION = "1.0.0";

   @Bean
   public Docket createRestApi() {
       return new Docket(DocumentationType.SWAGGER_2)
                   .apiInfo(apiInfo())
                   .select()
				   .apis(RequestHandlerSelectors.basePackage(SWAGGER_SCAN_BASE_PACKAGE)) 
                   .paths(PathSelectors.any()) // 可以根据url路径设置哪些请求加入文档，忽略哪些请求
                   .build();
   }

   private ApiInfo apiInfo() {
       return new ApiInfoBuilder()
                   .title("XXX服务") //设置文档的标题
                   .description("XXX服务 API 接口文档") // 设置文档的描述
                   .version(VERSION) // 设置文档的版本信息-> 1.0.0 Version information
                   .termsOfServiceUrl("http://www.XXX.com") // 设置文档的License信息->1.3 License information
                   .build();
   }
}
```

**Swagger2Configuration.java** 配置类的内容不多，配置完成后也很少变化，简单了解即可。

如上代码所示，通过 `@Configuration` 注解，让 Spring 加载该配置类。再通过 `@EnableSwagger2` 注解来启用Swagger2。成员方法 `createRestApi` 函数创建 `Docket` 的Bean之后，`apiInfo()` 用来创建该 Api 的基本信息（这些基本信息会展现在文档页面中）。`select()` 函数返回一个 `ApiSelectorBuilder`实例用来控制哪些接口暴露给 Swagger 来展现，本例采用指定扫描的包路径来定义，Swagger 会扫描该包下所有 Controller 定义的 API，并产生文档内容（除了被 `@ApiIgnore` 指定的请求）。

## 3、API接口编写（Controller）

```java
@Api(description = "生产者进程API接口")
@RestController
@RequestMapping("/producer")
public class ActiveMQProducer {

    private static final Logger logger = LoggerFactory.getLogger(ActiveMQConsumer.class);

    @Value(value = "${mq.active.count-queue-name}")
    private String COUNT_QUEUE_NAME;
    
    @Value(value = "${mq.active.query-queue-name}")
    private String QUERY_QUEUE_NAME;
    
    @Autowired
    private ActiveMQManager mqManager;

    @ApiOperation(value="发送解析文本", notes="发送解析文本", produces="application/json")
    @RequestMapping(value="/sendText", produces={ MediaType.APPLICATION_JSON_UTF8_VALUE }, consumes={ MediaType.APPLICATION_JSON_UTF8_VALUE }, method=RequestMethod.POST)
    public String sendText(@RequestBody String text) {
        logger.info("发送的文本内容：{}", text);
        
        try {
            mqManager.sendMsg(COUNT_QUEUE_NAME, text);
        } catch (Exception e){
            e.printStackTrace();
            logger.error(e.getMessage());
        }
        
        return "SUCESS";
    }

    @ApiOperation(value="查询单词计数", notes="查询单词计数", produces="application/json")
    @ApiImplicitParam(name = "word", value = "单词", paramType = "query", required = true, dataType = "String")
    @RequestMapping(value="/queryWordCount", produces={ MediaType.APPLICATION_JSON_UTF8_VALUE }, consumes={ MediaType.APPLICATION_JSON_UTF8_VALUE }, method=RequestMethod.POST)
    public String queryWordCount(@RequestBody String word) {
        logger.info("查询单词计数：{}", word);
        
        try {
            mqManager.sendMsg(QUERY_QUEUE_NAME, word);
        } catch (Exception e){
            e.printStackTrace();
            logger.error(e.getMessage());
        }
        
        return "SUCESS";
    }
}
// 本接口示例了 @ApiOperation 和 @ApiImplicitParam 两个注解的使用。
```



Swagger 通过注解定制接口对外展示的信息，这些信息包括接口名、请求方法、参数、返回信息等。

更多注解类型：

- @Api：修饰整个类，描述Controller的作用
- @ApiOperation：描述一个类的一个方法，或者说一个接口
- @ApiParam：单个参数描述
- @ApiModel：用对象来接收参数
- @ApiProperty：用对象接收参数时，描述对象的一个字段
- @ApiResponse：HTTP响应其中1个描述
- @ApiResponses：HTTP响应整体描述
- @ApiIgnore：使用该注解忽略这个API
- @ApiError ：发生错误返回的信息
- @ApiImplicitParam：描述一个请求参数，可以配置参数的中文含义，还可以给参数设置默认值
- @ApiImplicitParams：描述由多个 @ApiImplicitParam 注解的参数组成的请求参数列表

## 4、启动SpringBoot应用

SpringBoot启动成功后，访问http://localhost:8080/swagger-ui.html

<img src="/images/swagger2.png">



## 5、对swgager文档的美化框架（2次封装）

### 5.1、依赖(只需要这一个依赖即可，里面包含有swagger的依赖)
```java
	<!--文档框架 knife4j 美化接口文档-->
	<dependency>
		<groupId>com.github.xiaoymin</groupId>
		<artifactId>knife4j-spring-boot-starter</artifactId>
		<version>3.0.3</version>
	</dependency>

```

### 5.2、配置

```java

@Configuration
@EnableKnife4j //看这
public class SwaggerConfig
{

    /** 系统基础配置-配置文件中的属性 */
    @Autowired
    private RuoYiConfig ruoyiConfig;

    /** 是否开启swagger */
    @Value("${swagger.enabled}")
    private boolean enabled;

    /** 设置请求的统一前缀 */
    @Value("${swagger.pathMapping}")
    private String pathMapping;

    @Bean
    public Docket defaultApi2() {
        Docket docket=new Docket(DocumentationType.SWAGGER_2)
                .enable(enabled)
                .apiInfo(apiInfo())
                .select()
                // 扫描所有有注解的api，用这种方式更灵活
                .apis(RequestHandlerSelectors.withMethodAnnotation(ApiOperation.class))
                .paths(PathSelectors.any())
                .build()
                /* 设置安全模式，swagger可以设置访问token */
                .securitySchemes(securitySchemes())
                .securityContexts(securityContexts())
                .pathMapping(pathMapping);
        return docket;
    }

    /**
     * 安全模式，这里指定token通过Authorization头请求头传递
     */
    private List<SecurityScheme> securitySchemes()
    {
        List<SecurityScheme> apiKeyList = new ArrayList<SecurityScheme>();
        apiKeyList.add(new ApiKey("Authorization", "Authorization", In.HEADER.toValue()));
        return apiKeyList;
    }

    /**
     * 安全上下文
     */
    private List<SecurityContext> securityContexts()
    {
        List<SecurityContext> securityContexts = new ArrayList<>();
        securityContexts.add(
                SecurityContext.builder()
                        .securityReferences(defaultAuth())
                        .operationSelector(o -> o.requestMappingPattern().matches("/.*"))
                        .build());
        return securityContexts;
    }

    /**
     * 默认的安全上引用
     */
    private List<SecurityReference> defaultAuth()
    {
        AuthorizationScope authorizationScope = new AuthorizationScope("global", "accessEverything");
        AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
        authorizationScopes[0] = authorizationScope;
        List<SecurityReference> securityReferences = new ArrayList<>();
        securityReferences.add(new SecurityReference("Authorization", authorizationScopes));
        return securityReferences;
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("xxx接口文档")
                .description("xxx说明")
                .termsOfServiceUrl("http://localhost:88888/")
                // 作者信息
                .contact("xxx", null, null))
                // 版本
                .version("版本号:" + ruoyiConfig.getVersion())
                .build();
    }
}
```

### 5.3、打开地址及页面效果

```java
http://ip:端口/doc.html
```

<img src="/images/接口文档.png">

