# 操作 JWT：nimbus-jose-jwt 库

nimbus-jose-jwt、jose4j、java-jwt 和 jjwt 是几个 Java 中常见的操作 JWT 的库。就使用细节而言，nimbus-jos-jwt（和jose4j）要好于 java-jwt 和 jjwt 。

[nimbus-jose-jwt 官网open in new window](https://connect2id.com/products/nimbus-jose-jwt)

```xml
<dependency>
    <groupId>com.nimbusds</groupId>
    <artifactId>nimbus-jose-jwt</artifactId>
    <version>9.11.1</version>
</dependency>
```

## 1. 相关概念

### JWT 和 JWS

这里我们需要了解下 JWT、JWS、JWE 三者之间的关系：

- JWT（JSON Web Token）指的是一种规范，这种规范允许我们使用 JWT 在两个组织之间传递安全可靠的信息。
- **JWS**（JSON Web Signature）和 JWE（JSON Web Encryption）是 JWT 规范的两种不同实现，我们平时最常使用的实现就是 JWS 。

简单来说，JWT 和 JWS、JWE 类似于接口与实现类。由于，**我们使用的是 JWS** ，所以，后续内容中，就直接列举 JWS 相关类，不再细分 JWS 和 JWE 了，numbus-jose-jwt 中的 JWE 相关类和接口我们也不会使用到。

### 加密算法

另外，还有一对可能会涉及的概念：对称加密和非对称加密：

- 『**对称加密**』指的是使用相同的秘钥来进行加密和解密，如果你的秘钥不想暴露给解密方，考虑使用非对称加密。在加密方和解密方是同一个人（或利益关系紧密）的情况下可以使用它。
- 『**非对称加密**』指的是使用公钥和私钥来进行加密解密操作。对于加密操作，公钥负责加密，私钥负责解密，对于签名操作，私钥负责签名，公钥负责验证。非对称加密在 JWT 中的使用显然属于签名操作。在加密方和解密方是不同人（或不同利益方）的情况下可以使用它。

nimbus-jose-jwt 支持的算法都在它的 **JWSAlgorithm** 和 JWEAlgorithm 类中有定义。

例如：`JWSAlgorithm algorithm = JWSAlgorithm.HS256`

## 2. 核心 API 介绍

### 加密过程

- 在 nimbus-jose-jwt 中，使用 Header 类代表 JWT 的头部，不过，Header 类是一个抽象类，我们使用的是它的子类 **JWSHeader** 。

  创建头部对象：

  ```java
  JWSHeader jwsHeader = 
        new JWSHeader.Builder(algorithm)       // 加密算法
                     .type(JOSEObjectType.JWT) // 静态常量
                     .build();
  ```

  另外，你可以通过 `.getParsedBase64URL()` 方法求得头部信息的 Base64 形式（这也是 JWT 中的实际头部信息）：

  ```java
  header.getParsedBase64URL();
  ```

- 使用 **Payload** 类的代表 JWT 的荷载部分，

  创建荷载部对象

  ```java
  Payload payload = new Payload("hello world"); // 这里还可以传 JSON 串，或 Map 。
  ```

  另外，你可以通过 `.toBase64URL()` 方法求得荷载部信息的 Base64 形式（这也是 JWT 中的实际荷载部信息）：

  ```java
  payload.toBase64URL();
  ```

- 签名部分没有专门的类表示，只有通用类 **Base64URL** ，而且签名部分并非你自己创建出来的，而是靠 `头部 + 荷载部 + 加密算法` 算出来的。

  在 nimbus-jose-jwt 中，签名算法由 **JWSAlgorithm** 表示。

  ::: warning

  在创建 JWSHeader 对象时就需要指定签名算法，因为在标准中，头部需要保存签名算法名字。

  :::

  用头部和荷载部分，再加上指定的签名算法和密钥来生成签名部分的过程，在 nimbus-jose-jwt 中被称为『**签名**（sign）』。

  nimbus-jose-jwt 专门提供了一个签名器 **JWSSigner** ，用来参与到签名过程中。密钥就是在创建签名器的时候指定的：

  ```java
  JWSSigner jwsSigner = new MACSigner(secret);
  ```

- 最终，整个 JWT 由一个 **JWSObject** 对象表示：

  ```java
  JWSObject jwsObject = new JWSObject(jwsHeader, payload);
  // 进行签名（根据前两部分生成第三部分）
  jwsObject.sign(jwsSigner);
  ```

  在 nimbus-jose-jwt 中 JWSObject 是有状态的：未签名、已签名和签名中。很显然，在执行外 `.sign()` 方法之后，JWSObject 对象就变成了已签名状态。

  当然，我们最终『要』的是 JWT 字符串，而不是对象，这里接着对代表 JWT 的 JWSObject 对象调用 `.serialize()` 方法即可：

  ```java
  String token = jwsObject.serialize();
  ```

### 解密

反向的解密和验证过程核心 API 就 2 个：JWSObject 的静态方法 **parse** 方法和验证其 JWSVerifier 对象。

`JWSObject.parse()` 方法是上面的 serialize 方法的反向操作，它可以通过一个 JWT 串生成 JWSObject 。有了 JWObject 之后，你就可以获得 header 和 payload 部分了。

如果你想直接验证 JWSObject 对象的合法性，你需要创建一个 **JWSVerifier** 对象。

```java
JWSVerifier jwsVerifier = new MACVerifier(secret);
```

然后直接调用 jwsObject 对象的 **verify** 方法：

```java
if (!jwsObject.verify(jwsVerifier)) {
    throw new RuntimeException("token 签名不合法！");
}
```

## 官网的 HS256 示例

```java
import java.security.SecureRandom;

import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.*;


// Generate random 256-bit (32-byte) shared secret
SecureRandom random = new SecureRandom();
byte[] sharedSecret = new byte[32];
random.nextBytes(sharedSecret);

// Create HMAC signer
JWSSigner signer = new MACSigner(sharedSecret);

// Prepare JWS object with "Hello, world!" payload
JWSObject jwsObject = new JWSObject(new JWSHeader(JWSAlgorithm.HS256), new Payload("Hello, world!"));

// Apply the HMAC
jwsObject.sign(signer);

// To serialize to compact form, produces something like
// eyJhbGciOiJIUzI1NiJ9.SGVsbG8sIHdvcmxkIQ.onO9Ihudz3WkiauDO2Uhyuz0Y18UASXlSc1eS0NkWyA
String s = jwsObject.serialize();

// To parse the JWS and verify it, e.g. on client-side
jwsObject = JWSObject.parse(s);

JWSVerifier verifier = new MACVerifier(sharedSecret);

assertTrue(jwsObject.verify(verifier));

assertEquals("Hello, world!", jwsObject.getPayload().toString());
```

## 在 Payload 中存对象

在上例（和官方示例中）payload 中存放的是简单的字符串，其实，更方便更有使用价值的是存入一个 json 串。所以，我们可以自定义专本用于存入 payload 中的 javabean，例如：

```java
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Claims {

    // "主题"
    private String sub;

    // "签发时间"
    private Long iat;

    // 过期时间
    private Long exp;

    // JWT的ID
    private String jti;

    // "用户名称"
    private String username;

    // "用户拥有的权限"
    //private List<String> authorities;
}
```

这样在创建 Payload 时，需要多一步转换操作：

```java
ObjectMapper mapper = new ObjectMapper();   // 这里使用的是 Jackson 库
// 将负载信息封装到Payload中
Payload payload = new Payload(mapper.writeValueAsString(claims));
```

反向的取出内容时，也是一样的道理。

## 非对称加密（RSA）

上面，我们使用的是对称加密算法。而非对称加密指的是分别使用『公钥』和『私钥』来进行加密、解密操作。私钥负责加密，负责生成 JWT 的签名部分；公钥负责解密，负责验证 JWT 是否是伪造的。

要使用 RSA ，我们需要生成一个『证书文件』，这里将使用 Java 自带的 `keytool` 工具来生成 **jks** 证书文件，该工具在 JDK 的 bin 目录下。

打开 CMD 命令界面，使用如下命令生成证书文件，设置别名为 jwt ，文件名为 `jwt.jks` ：

语法规则：

```bash
keytool -genkey -alias <证书别名> -keyalg <密钥算法> -keystore <证书库的位置和名称> -keysize <密钥长度> -validity <证书有效期（天数）>
```

例子：

```bash
keytool -genkey -alias jwt -keyalg RSA -keystore jwt.jks
```

3 点注意事项

1. 有可能你会遇到 `keytool 错误: java.io.FileNotFoundException: jwt.jks (拒绝访问。)` 问题。以防万一使用管理员身份启动 CMD 命令行。
2. 生成的 jwt.jks 文件在你命令行的当前目录下，请务必知道你自己在哪，别找不到生成的 jwt.jks 文件。
3. 在开发、演示过程中，生成 jwt.jks 时所使用的密码尽量简单易记，以免自己忘记了。

你会看到类似如下内容：

```text
D:&gt;keytool -genkey -alias jwt -keyalg RSA -keystore jwt.jks
输入密钥库口令:
再次输入新口令:
您的名字与姓氏是什么?
  [Unknown]:
您的组织单位名称是什么?
  [Unknown]:
您的组织名称是什么?
  [Unknown]:
您所在的城市或区域名称是什么?
  [Unknown]:
您所在的省/市/自治区名称是什么?
  [Unknown]:
该单位的双字母国家/地区代码是什么?
  [Unknown]:
CN=Unknown, OU=Unknown, O=Unknown, L=Unknown, ST=Unknown, C=Unknown是否正确?
  [否]:  y

输入 <jwt> 的密钥口令
        (如果和密钥库口令相同, 按回车):
再次输入新口令:

Warning:
JKS 密钥库使用专用格式。建议使用 "keytool -importkeystore -srckeystore jwt.jks -destkeystore jwt.jks -deststoretype pkcs12" 迁移到行业标准格式 PKCS12。
```

将证书文件 `jwt.jks` 复制到项目的 resource 目录下，然后需要从证书文件中读取 RSAKey ，这里我们需要在 pom.xml 中添加一个 Spring Security 的 RSA 依赖；

```xml
<!-- Spring Security RSA 含有相关工具类 -->
<dependency>
    <groupId>org.springframework.security</groupId>
    <artifactId>spring-security-rsa</artifactId>
    <!-- spring-cloud-commons-dependencies 已含有版本信息 -->
</dependency>
```

关于引入 spring-security-rsa 包

其实，我们引入 spring-security-rsa 是因为我们要用到它里面的一个名为 **KeyStoreKeyFactory** 的工具类。考虑到 KeyStoreKeyFactory 工具类也没有引来 spring-security-rsa 中的其它的任何东西，所以，我们也可以把 KeyStoreKeyFactory 单独地摘出来。

- 从 `jwt.jks` 文件生成 RSAKey 对象：

  ```java
  public RSAKey generateRsaKey() {
      // 从 classpath 下获取 RSA 秘钥对
      KeyStoreKeyFactory keyStoreKeyFactory = new KeyStoreKeyFactory(new ClassPathResource("jwt.jks"), "123456".toCharArray());
      KeyPair keyPair = keyStoreKeyFactory.getKeyPair("jwt", "123456".toCharArray());
      // 获取 RSA 公钥
      RSAPublicKey publicKey = (RSAPublicKey) keyPair.getPublic();
      // 获取 RSA 私钥
      RSAPrivateKey privateKey = (RSAPrivateKey) keyPair.getPrivate();
      RSAKey rsaKey = new RSAKey.Builder(publicKey).privateKey(privateKey).build();
  
      return rsaKey;
  }
  ```

- 根据 RSAKey 对象生成 JWT/JWS 字符串：

  ```java
  RSAKey rsaKey = generateRsaKey();
  
  // JWS 头
  JWSHeader jwsHeader = new JWSHeader
                .Builder(JWSAlgorithm.RS256)    // 指定 RSA 算法
                .type(JOSEObjectType.JWT)
                .build();
  // JWS 荷载
  Payload payload = new Payload("hello world");
  
  // JWS 签名
  JWSObject jwsObject = new JWSObject(jwsHeader, payload);
  JWSSigner jwsSigner = new RSASSASigner(rsaKey, true);   // rsaKey 生成签名器
  jwsObject.sign(jwsSigner);
  
  // JWT/JWS 字符串
  String jwt = jwsObject.serialize();
  System.out.println(jwt);
  ```

- 根据 RSAKey 对象（的公钥）解析 JWT/JWS 字符串：

  ```java
  // JWT/JWS 字符串转 JWSObject 对象
  String token = "...";
  JWSObject jwsObject = JWSObject.parse(token);
  
  
  // 根据公要生成验证器
  RSAKey rsaKey = generateRsaKey();
  RSAKey publicRsaKey = rsaKey.toPublicJWK();
  System.out.println(publicRsaKey);   // show 公钥
  JWSVerifier jwsVerifier = new RSASSAVerifier(publicRsaKey);
  
  // 使用校验器校验 JWSObject 对象的合法性
  if (!jwsObject.verify(jwsVerifier)) {
      throw new RuntimeException("token签名不合法！");
  }
  
  // 拆解 JWT/JWS，获得荷载中的内容
  String payload = jwsObject.getPayload().toString();
  System.out.println(payload);    // show 荷载
  ```