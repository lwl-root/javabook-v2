---
title: spring security
---
# spring security

## 1.图解

![](/images/security/spring security图解.png)

## 2.身份认证流程

![](/images/security/认证流程.png)

### 2.1  登录参数和配置

![](/images/security/登录属性和URL定义.png)

### 2.2 用户登录

![](/images/security/登录验证.png)

### 2.3  根据用户名查询

![](/images/security/查询用户.png)

::: warning 注意

用户实体类需实现 UserDetails 接口

:::

### 2.4 密码校验

![](/images/security/密码效验.png)

::: warning 注意

security推荐使用 BCryptPasswordEncoder 密码器

明文密码器：NoOpPasswordEncoder（过时的）

也可自定义密码器

:::

```java
   /**
     * 强散列哈希加密实现
     */
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder()
    {
        return new BCryptPasswordEncoder();
    }

   /**
     * 明文
     */
    @Bean
    public PasswordEncoder passwordEncoder(){
        return NoOpPasswordEncoder;
    } 

   /**
     * 自定义
     */
    @Bean
    public PasswordEncoder customPasswordEncoder(){
        return new CustomPasswordEncoder();
    }

/** 自定义明文密码
public class CustomPasswordEncoder implements PasswordEncoder {
    @Override
    public String encode(CharSequence charSequence) {
        return charSequence.toString();
    }

    @Override
    public boolean matches(CharSequence charSequence, String s) {
        if(s.equals(charSequence.toString())){
            return true;
        }
        return false;
    }
}
*/

    /**
     * 身份认证接口
     */
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception
    {
        auth.userDetailsService(userDetailsService).passwordEncoder(customPasswordEncoder());
    }
```

### 2.5 登录后请求，校验token

![](/images/security/token验证.png)

## 3.授权认证流程

![](/images/security/授权流程.png)

```java
    /**
     * anyRequest          |   匹配所有请求路径
     * access              |   SpringEl表达式结果为true时可以访问
     * anonymous           |   匿名可以访问
     * denyAll             |   用户不能访问
     * fullyAuthenticated  |   用户完全认证可以访问（非remember-me下自动登录）
     * hasAnyAuthority     |   如果有参数，参数表示权限，则其中任何一个权限可以访问
     * hasAnyRole          |   如果有参数，参数表示角色，则其中任何一个角色可以访问
     * hasAuthority        |   如果有参数，参数表示权限，则其权限可以访问
     * hasIpAddress        |   如果有参数，参数表示IP地址，如果用户IP和参数匹配，则可以访问
     * hasRole             |   如果有参数，参数表示角色，则其角色可以访问
     * permitAll           |   用户可以任意访问
     * rememberMe          |   允许通过remember-me登录的用户访问
     * authenticated       |   用户登录后可访问
     */
    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception
    {
        httpSecurity
                // CSRF禁用，因为不使用session
                .csrf().disable()
                // 认证失败处理类
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
                // 基于token，所以不需要session
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                // 过滤请求
                .authorizeRequests()
                //对于登录login验证码captchaImage允许匿名访问
                .antMatchers("/login", "/captchaImage", "/loginNoCode").anonymous()
                //放行静态资源
                .antMatchers(
                        HttpMethod.GET,
                        "/",
                        "/*.html",
                        "/**/*.html",
                        "/**/*.css",
                        "/**/*.js"
                ).permitAll()
                //可以匿名访问的请求
                .antMatchers("/monitor/**/export/**").anonymous()
                //配置文件中放行的请求
            .antMatchers(securityProperties.getAnonymous()).anonymous()
                .antMatchers(securityProperties.getPermitAll()).permitAll()
                // 除上面外的所有请求全部需要鉴权认证
                .anyRequest().authenticated()
                .and()
                .headers().frameOptions().disable();
       //退出及退出处理（注销，清缓存）
        httpSecurity.logout().logoutUrl(securityProperties.getLogoutUrl()).logoutSuccessHandler(logoutSuccessHandler);
        // 添加用户认证 filter：即选取（账号密码）何种验证方式
        httpSecurity.addFilterBefore(authenticationTokenFilter, UsernamePasswordAuthenticationFilter.class);
         // 添加JWT filter
        httpSecurity.addFilterBefore(corsFilter, JwtAuthenticationTokenFilter.class);
        // 添加CORS filter
        httpSecurity.addFilterBefore(corsFilter, LogoutFilter.class);
    }
```

## 4.核心组件

[核心组件介绍](https://www.jianshu.com/p/7b87ec108405?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation)

### 4.1 SecurityContextHolder

```js
SecurityContextHolder它持有的是安全上下文（security context）的信息。
当前操作的用户是谁，该用户是否已经被认证，他拥有哪些角色权等等，这些都被保存在SecurityContextHolder中。
SecurityContextHolder默认使用ThreadLocal 策略来存储认证信息。看到ThreadLocal 也就意味着，这是一种与线程绑定的策略。
在web环境下，Spring Security在用户登录时自动绑定认证信息到当前线程，在用户退出时，自动清除当前线程的认证信息。
例如获取用户信息。
```

### 4.2 SecurityContext

```js
安全上下文，主要持有Authentication对象，如果用户未鉴权，那Authentication对象将会是空的。
该示例可以通过SecurityContextHolder.getContext静态方法获取。
```

### 4.3 Authentication

```js
鉴权对象，该对象主要包含了用户的详细信息（UserDetails）和用户鉴权时所需要的信息，
如用户提交的用户名密码、Remember-me Token，或者digest hash值等，按不同鉴权方式使用不同的Authentication实现。
```

### 4.4 GrantedAuthority

```js
该接口表示了当前用户所拥有的权限（或者角色）信息。这些信息由授权负责对象AccessDecisionManager来使用，
并决定最终用户是否可以访问某资源（URL或方法调用或域对象）。鉴权时并不会使用到该对象。
```

### 4.5 UserDetails

```js
这个接口规范了用户详细信息所拥有的字段，譬如用户名、密码、账号是否过期、是否锁定等。在Spring Security中，
获取当前登录的用户的信息,一般情况是需要在这个接口上面进行扩展，用来对接自己系统的用户。
```

### 4.6 UserDetailsService

```js
这个接口只提供一个接口loadUserByUsername(String username)，通过扩展这个接口来显示获取我们的用户信息，
用户登陆时传递的用户名和密码也是通过这里这查找出来的用户名和密码进行校验，但是真正的校验不在这里，
而是由AuthenticationManager以及AuthenticationProvider负责的。
```

### 4.7 AuthenticationManager

```js
AuthenticationManager（接口）是认证相关的核心接口，也是发起认证的出发点，因为在实际需求中，
我们可能会允许用户使用用户名+密码登录，同时允许用户使用邮箱+密码，手机号码+密码登录，
所以说AuthenticationManager一般不直接认证，AuthenticationManager接口的常用实现类ProviderManager 内部会维护一个List<AuthenticationProvider>列表，存放多种认证方式，实际上这是委托者模式的应用（Delegate）。也就是说，核心的认证入口始终只有一个：AuthenticationManager，不同的认证方式：用户名+密码（UsernamePasswordAuthenticationToken），邮箱+密码，手机号码+密码登录则对应了三个AuthenticationProvider。其中有一个重要的实现类是ProviderManager。ProviderManager 有一个配置好的认证提供者列表(AuthenticationProvider), ProviderManager 会把收到的 UsernamePasswordAuthenticationToken 对象传递给列表中的每一个 AuthenticationProvider 进行认证.
```

### 4.8 DaoAuthenticationProvider

```js
AuthenticationProvider最常用的一个实现便是DaoAuthenticationProvider。
顾名思义，Dao正是数据访问层的缩写，也暗示了这个身份认证器的实现思路。
主要作用：它获取用户提交的用户名和密码，比对其正确性，如果正确，返回一个数据库中的用户信息。
```

## 5.相关注解

### 5.1 @EnableWebSecurity

```js
注解有两个作用,1: 加载了WebSecurityConfiguration配置类, 配置安全认证策略。2: 加载了AuthenticationConfiguration, 配置了认证信息。
在非Springboot的Spring Web MVC应用中，该注解@EnableWebSecurity需要开发人员自己引入以启用Web安全。而在基于Springboot的Spring Web MVC应用中,开发人员没有必要再次引用该注解，Springboot的自动配置机制WebSecurityEnablerConfiguration已经引入了该注解
```

### 5.2 @EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)

```js
1.Spring Security默认是禁用注解的，要想开启注解，需要在继承WebSecurityConfigurerAdapter的类上加@EnableGlobalMethodSecurity注解，并在该类中将AuthenticationManager定义为Bean。
2.prePostEnabled = true 会启用 @PreAuthorize 和 @PostAuthorize 两个注解。
	@PreAuthorize： 在方法执行前进行验证
	@PostAuthorize： 在方法执行后进行验证。
3. securedEnabled = true 会启用 @Secured 注解，判断登录用户是否具有角色，另外需要注意的是这个匹配的字符串需要添加前缀“ROLE_”;
```

### 5.3  表达式及注解说明

| 表达式                             | 描述                                                                                                                                 |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| permitAll()                     | 总是返回true，表示允许所有访问（认证不认证都可访问 URL或方法 ）                                                                                               |
| denyAll()                       | 总是返回false，表示拒绝所有访问（永远访问不到指定的 URL或方法 ）                                                                                              |
| Anonymous()                     | 当前用户是一个匿名用户（未登录用户）允许访问，返回true                                                                                                      |
| RememberMe()                    | 当前用户是通过Remember-Me自动登录的允许访问，返回true                                                                                                 |
| Authenticated()                 | 当前用户是已经登录认证成功的允许访问（包含了rememberMe自动 登录的），返回true                                                                                     |
| FullyAuthenticated()            | 如果当前用户既不是一个匿名用户，同时也不是通过Remember-Me自 动登录的，则允许访问（可以理解为通过页面输入帐户信息认证的）。                                                                |
| hasRole(String role)            | 当前用户拥有指定角色权限的允许访问，返回true。注意: 指定的角色 名(如： ADMIN ) SpringSecurity 底层会在前面拼接 ROLE_ 字符串，所 以在UserDetailsService实现类，数据库返回的角色名要有 ROLE_ADMIN |
| hasAnyRole(\[role1, role2])     | 多个角色以逗号分隔的字符串。如果当前用户拥有指定角色中的任意一 个则允许访问，返回true。                                                                                     |
| hasAuthority(String authority)  | 当前用户拥有指定权限标识的允许访问，返回true。注意：和 hasRole 区别是， hasAuthority 不会在前面拼接 ROLE_ 字符串, 。                                                       |
| hasAnyAuthority(\[auth1,auth2]) | 多个权限标识是以逗号分隔的字符串。如果当前用户拥有指定权限标识 中的任意一个则允许访问，返回true                                                                                 |
| hasIpAddress("192.168.1.1/29")  | 限制指定IP或指定范围内的IP才可以访问                                                                                                               |

### 表达式控制URL权限

#### 权限控制操作

1. 拥有 sys:user 权限的用户，可以访问任意请求方式的 /user

```java
antMatchers("/user").hasAuthority("sys:user")
```

2. 拥有 sys:role 权限的用户，可以访问 get 请求方式的 /role

```java
antMatchers(HttpMethod.GET, "/role").hasAuthority("sys:role")
```

3. 如果想同时满足多个表达式权限，要使用 access 方法来指定表达式
      如：拥有 sys:permission 权限或 ADMIN 角色，可以访问 get 请求方式的 /permission
   ::: warning 注意

**指定角色标识后，底层会自动加上前缀 ROLE_ ，所以在给用户授权角色时需要加上前缀**

:::

```JAVA
antMatchers(HttpMethod.GET, "/permission").access("hasAuthority('sys:permission') or  hasAnyRole('ADMIN')") //角色会加上前缀 ROLE_，即真实是 ROLE_ADMIN
```

| 注解                   | 描述                                                                                                 |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| @PreAuthorize(表 达式)  | 在方法调用前进行权限检查，表达式为 true 允许调用， 反之则无权限调用                                                              |
| @PostAuthorize(表 达式) | 在方法调用后进行权限检查，如果表达式计算结果为false，抛出异常403不允许访问. returnObject 代表方法的返回值， 可以使用 returnObject 对方法返回值进行验证     |
| @PreFilter(表达式)      | 允许方法调用，但必须在进入方法之前过滤方法参数值。移除使对应表达式的结果为false的元素                                                      |
| @PostFilter(表达 式)    | 允许方法调用，但必须按照表达式来过滤方法的返回值。 returnObject 代表方法的返回值， 可以使用 returnObject 对方法返回值进行验证。移除使对应表达式的结果为false的元素 |

### 5.3  @PreAuthorize  在方法执行前进行验证

```java
@GetMapping("/hello")
// @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')") //需要指定角色才能访问
@PreAuthorize("hasAnyAuthority('menu:system')") //需要有相应权限才能访问
public String hello() {
    return "hello";
}
```

### 5.4  @PostAuthorize  在方法执行后进行验证

```java
@PostAuthorize("returnObject.id%2==0")
public User find(int id) {undefined
    User user = new User();
    user.setId(id);
    return user;
}
```

这一段代码表示将在方法find()调用完成后进行权限检查，如果返回值的id是偶数则表示校验通过，否则表示校验失败，将抛出AccessDeniedException。

### 5.5  @PreFilter  对参数进行过滤

```java
// 测试：http://localhost/user/batch/-1,0,1,2 ，响应 {"code":200,"message":"OK","data":[1,2]}
// filterTarget 过滤集合属性名, filterObject集合中的元素,只接收id>0的数据
@PreFilter(filterTarget = "ids", value = "filterObject > 0")
@RequestMapping("/batch/{ids}")
public Result deleteByIds(@PathVariable List<Long> ids) {
    return Result.ok(ids);
}
```

### 5.6  @PostFilter  对返回值进行过滤

```java
//返回数据中过滤当前登录用户的用户名
@PostFilter("filterObject != authentication.principal.username")
@RequestMapping("/list")
public List<String> userName() {
    List<String> userList = Lists.newArrayList("dalianpai", "test", "admin");
    return userList;
}
```

### 5.7自定义权限处理

```java
/**
 * 自定义权限处理
 */
@Slf4j
@Configuration
public class MyPermissionEvaluator implements PermissionEvaluator {
    @Override
    public boolean hasPermission(Authentication authentication, Object targetDomainObject, Object permission) {
        SecurityUser principal = (SecurityUser) authentication.getPrincipal();//得到主体用户信息
        List<UserPermission> permissionList = principal.getPermissionList();//得到权限集合
        if (CollUtil.isNotEmpty(permissionList)) {
            return ...;
        }
        return false;
    }

    @Override
    public boolean hasPermission(Authentication authentication, Serializable targetId, String targetType, Object permission) {
        return false;
    }
}
```

```java
@GetMapping("/select")
@PreAuthorize("hasPermission('/sys/user/insert','userInsert')")
public void selectUser() {}
```
