# Spring 中最常用的四个工具类

- ObjectUtils
- StringUtils
- CollectionUtils
- Assert

以下方法皆为 `static` 方法，故不再显示 `static` 关键字。

## 1. 写在前面的话

有观点认为，对于工具类的使用最好是使用专门的工具包（例如，apache 的 commons 工具箱或者 google 的 guava 库之类）。

有些框架或者库会有自带的工具类，例如上面这四个（还有其他)。这些工具类很有可能是框架或库的作者在编码过程中为简化某些重复性编码工作而编写的，也许它们最初的目标和使用场景仅限于解决这些特定场景下的特定问题。

其作者可能并未对更多的使用场景作足够的测试。简单而言，这些工具类是否具有普适性，有待于验证。当然，理论上来说，这些工具类的代码质量也不可能很糟糕 。

所以，如果你的项目直接（或间接）引入了专门的工具包，那么，**优先使用这些专业工具包**。其次，才是考虑使用框架『赠送』的工具类。

除非是一些极简的情况，很显然这些『赠送』的工具类足以应付时（为此专门引入专业工具包似乎不值得），才优先考虑使用『赠送』的工具类。

## 2. ObjectUtils

`org.springframework.util.ObjectUtils` 有很多处理 null object 的方法。如：

- nullSafeHashCode
- nullSafeEquals
- isArray
- containsElement
- addObjectToArray

### 获取对象基本信息

```java
/* 获取对象的类名。参数为 null 时，返回字符串："null" 。
 *
 *           10L -> "java.lang.Long"
 * "hello world" -> "java.lang.String"
 *           " " -> "java.lang.String"
 *            "" -> "java.lang.String"
 *          null -> "null"
 */
String nullSafeClassName(Object obj)
```

```java
/* 获取对象 HashCode（十六进制形式字符串）。参数为 null 时，返回 0 。
 * 
 *    null -> 0
 * "hello" -> 396e2f39
 *     " " -> 2de8284b
 *      "" -> 78ac1102
 */
String getIdentityHexString(Object obj)
```

```java
/* 获取对象的类名和 HashCode 。 参数为 null 时，返回字符串："" 。
 *  
 *    null -> ""
 * "hello" -> java.lang.String@396e2f39
 *     " " -> java.lang.String@2de8284b
 *      "" -> java.lang.String@78ac1102
 */
String identityToString(Object obj)
```

```java
/* 相当于 toString() 方法，但参数为 null 时，返回字符串：""
 *
 *    null -> ""
 * "hello" -> "hello"
 *     " " -> " "
 *      "" -> ""
 */
String getDisplayString(Object obj)
```

### 判断工具

```java
/* 判断数组是否为空。
 *
 * null -> true
 *   [] -> true
 *  [1] -> false
 */
boolean isEmpty(Object[] array)
```

```java
/* 判断参数对象是否是数组。
 *
 * null -> false
 *   "" -> false 
 *   [] -> true
 */
boolean isArray(Object obj)

// 判断数组中是否包含指定元素。
boolean containsElement(Object[] array, Object element)


/* 判断参数对象是否为空，判断标准为：
 *
    Optional: considered empty if Optional.empty()
       Array: considered empty if its length is zero
CharSequence: considered empty if its length is zero
  Collection: delegates to Collection.isEmpty()
         Map: delegates to Map.isEmpty()
 */
boolean isEmpty(Object obj)
```

### 用 NullSafe 替代 Object 原生方法

```java
// 相等，或同为 null时，返回 true
boolean nullSafeEquals(Object o1, Object o2)

// 参数为 null 时，返回 0
int nullSafeHashCode(Object object)

// 参数为 null 时，返回字符串："null"
String nullSafeToString(boolean[] array)
```

### 其他工具

```java
// 向参数数组的末尾追加新元素，并返回一个新数组。
<A, O extends A> A[] addObjectToArray(A[] array, O obj)

// 原生基础类型数组 --> 包装类数组
Object[] toObjectArray(Object source)
```

## 3. StringUtils

StringUtils 来自 *org.springframework.util* 包

### 判断 String

```java
/* 判断字符串是否为 null，或 "" 。注意，包含空白符的字符串为非空。
 *
 * "hello" -> false
 *     " " -> false
 *      "" -> true
 *    null -> true
 */
boolean isEmpty(Object str)
```

```java
/* 判断字符串是否是以指定内容结束。忽略大小写。
 *
 * ("hello.txt", ".txt") -> true
 * ("hello.txt", ".TXT") -> true
 * ("hello.TXT", ".txt") -> true
 *          ("", ".txt") -> false
 *        (null, ".txt") -> false
 */
boolean endsWithIgnoreCase(String str, String suffix)
```

```java
/* 判断字符串是否已指定内容开头。忽略大小写。
 *
 * ("hello.txt", "hello") -> true
 * ("hello.txt", "HELLO") -> true
 * ("HELLO.txt", "hello") -> true
 *          ("", "hello") -> false
 *        (null, "hello") -> false
 */
boolean startsWithIgnoreCase(String str, String prefix) 
```

```java
/* 是否包含空白符
 *
 *          null -> false
 *            "" -> false
 *  "helloworld" -> false
 *           " " -> true
 * "hello world" -> true
 * " helloworld" -> true
 * "helloworld " -> true
 */
boolean containsWhitespace(String str)
```

```java
/* 判断字符串非空且长度不为 0，即，Not Empty 。
 *
 *          null -> false
 *            "" -> false
 *           " " -> true
 * "hello world" -> true
 */
boolean hasLength(CharSequence str)
```

```java
/* 判断字符串是否包含实际内容，即非仅包含空白符，也就是 Not Blank 。
 * 
 *          null -> false
 *            "" -> false
 *           " " -> false
 * "hello world" -> true
 */
boolean hasText(CharSequence str)
```

```java
/* 判断字符串指定索引处是否包含一个子串。
 *
 * ("hello world", 6, "world") -> true
 * ("hello world", 5, "world") -> false
 * ("hello world", 7, "world") -> false
 *    ("hello world", 7, null) -> NullPointerException 
 *          (null, 7, "world") -> NullPointerException 
 *             (null, 7, null) -> NullPointerException 
 */
boolean substringMatch(CharSequence str, int index, CharSequence substring)
```

```java
/* 计算一个字符串中指定子串的出现次数。
 *
 * ("tom tommy", "om") -> 2
 *
 */
int countOccurrencesOf(String str, String sub)
```

### 操作 String[]

```java
/* 向参数字符串数组的末尾添加新的字符串，并返回新数组。
 *
 * (["hello", "world"], "goodbye") -> ["hello", "world", "goodbye"]
 */
String[] addStringToArray(String[] array, String str) 
```

```java
/* 将两个字符串数组合并成一个字符串数组。其中重复的元素会出现两次。
 *
 * (["hello", "world"], ["world", "goodbye"]) -> ["hello", "world", "world", "goodbye"]
 */
String[] concatenateStringArrays(String[] array1, String[] array2) 
```

```java
/* 被废弃，建议通过 LinkedHashSet 手动合并两个字符串。
 *
 * (["hello", "world"], ["world", "goodbye"]) -> ["hello", "world", "goodbye"]
 */
String[] mergeStringArrays(String[] array1, String[] array2) 
```

```java
/* 从给定的字符串数组中，移除重复的字符串，并返回新字符串数组。
 *
 * ["hello", "world", "world", "goodbye"] -> ["hello", "world", "goodbye"]
 */
String[] removeDuplicateStrings(String[] array)
```

```java
/* 对给定字符串数组进行排序，并返回排序后的新数组。
 *
 * ["hello", "world", "goodbye"] -> ["goodbye", "hello", "world"]
 */
String[] sortStringArray(String[] array) 
```

### 字符串与容器的互转

**容器 to 字符串**

```java
/* 拼接数组，生成字符串。以 “,” 作为分隔符。
 *
 * ["hello", "world", "goodbye"] -> hello,world,goodbye
 *     ["hello", " ", "goodbye"] -> hello, ,goodbye
 *      ["hello", "", "goodbye"] -> hello,,goodbye
 *    ["hello", null, "goodbye"] -> hello,null,goodbye
 */
String arrayToCommaDelimitedString(Object[] arr)
```

```java
/* 拼接数组，生成字符串。以第二个参数（delim）作为分隔符。
 * 
 * ["hello", "world", "goodbye"], ":" -> hello:world:goodbye
 *     ["hello", " ", "goodbye"], ":" -> hello: :goodbye
 *      ["hello", "", "goodbye"], ":" -> hello::goodbye
 *    ["hello", null, "goodbye"], ":" -> hello:null:goodbye
 */
String arrayToDelimitedString(Object[] arr, String delim)
```

```java
/* 拼接集合，生成字符串。以 “,” 作为分隔符。
 *
 * ["hello", "world", "goodbye"] -> hello,world,goodbye
 *     ["hello", " ", "goodbye"] -> hello, ,goodbye
 *      ["hello", "", "goodbye"] -> hello,,goodbye
 *    ["hello", null, "goodbye"] -> hello,null,goodbye
 */
String collectionToCommaDelimitedString(Collection<?> coll) 
```

```java
/* 拼接集合，生成字符串。以参数 delim 作为分隔符。
 * 
 * ["hello", "world", "goodbye"], ":" -> hello:world:goodbye
 *     ["hello", " ", "goodbye"], ":" -> hello: :goodbye
 *      ["hello", "", "goodbye"], ":" -> hello::goodbye
 *    ["hello", null, "goodbye"], ":" -> hello:null:goodbye
 */
String collectionToDelimitedString(Collection<?> coll, String delim) 
```

```java
// 拼接集合，生成字符串。以参数 delim 作为分隔符。每个组成部分还可以加上指定的前缀（prefix）和后缀（suffix）。
String collectionToDelimitedString(Collection<?> coll, String delim, String prefix, String suffix) 
```

**字符串 to 容器**

```java
// 切分字符串，生成数组。以指定分隔符切分成字符串。
// 注意，和下面的方法不同，这个方法最多只会把字符串切分成两份。即，返回值数组的 length 最大为 2 。
String[] split(String toSplit, String delimiter)

// 切分字符串，生成数组。以指定分隔符切分成字符串。分隔符可以指定多个。
String[] tokenizeToStringArray(String str, String delimiters)

// 切分字符串，生成数组。以 “,” 作为分隔符
String[] commaDelimitedListToStringArray(String str)

// 切分字符串，生成数组。以指定分隔符（delimiter）进行切割
String[] delimitedListToStringArray(String str, String delimiter)

// 切分字符串，生成数组。以指定分隔符（delimiter）进行切割，并且在切出的部分中删除指定字符（可以使多个）
String[] delimitedListToStringArray(String str, String delimiter, String charsToDelete) 

// 切分字符串，生成 Set。以 “,” 作为分隔符
Set<String> commaDelimitedListToSet(String str)
```

其他转换

```java
// 将字符串集合转变为字符串数组。
String[] toStringArray(Collection<String> collection) 
```

### 操作 String

```java
// 查找并替换指定子串
String replace(String inString, String oldPattern, String newPattern)

// 去除尾部的特定字符。
String trimTrailingCharacter(String str, char trailingCharacter) 

// 去除头部的特定字符。
String trimLeadingCharacter(String str, char leadingCharacter)

// 去除头部的空白符。
String trimLeadingWhitespace(String str)

// 去除头部的空白符。
String trimTrailingWhitespace(String str)

// 去除头部和尾部的空白符。
String trimWhitespace(String str)

// 删除开头、结尾和中间的空白符。
String trimAllWhitespace(String str)

// 删除指定子串
String delete(String inString, String pattern)

// 删除指定字符（可以是多个）
String deleteAny(String inString, String charsToDelete)

// 对数组的每一项执行 trim() 方法。
String[] trimArrayElements(String[] array)

// 将 URL 字符串进行解码
String uriDecode(String source, Charset charset)
```

### 截取 String

```java
// 以 “.” 作为分隔符，获取其最后一部分。
String unqualify(String qualifiedName)

// 以指定字符作为分隔符，获取其最后一部分。
String unqualify(String qualifiedName, char separator)
```

### 文件路径字符串操作

```java
// 解析路径字符串，优化其中的 “..” 。
String cleanPath(String path)

// 解析路径字符串，解析出文件名部分。
String getFilename(String path)

// 解析路径字符串，解析出文件后缀名。
String getFilenameExtension(String path)

// 比较两个两个字符串，判断是否是同一个路径。会自动处理路径中的 “..” 。
boolean pathEquals(String path1, String path2)

// 删除文件路径名中的后缀部分。
String stripFilenameExtension(String path) 
```

### 其他

```java
// 将字符串数组中的每一项，按照指定分隔符进行切分，并生成 Properties 对象。
// 字符串数组的内容类似于：new String[]{"key1,value1", "key2,value2", "key3,value3"}
Properties splitArrayElementsIntoProperties(String[] array, String delimiter)

Properties splitArrayElementsIntoProperties(String[] array, String delimiter, String charsToDelete)

// 通过解析时区字符串生成时区对象。
// 常见 TimeZone 字符串见最后。
TimeZone parseTimeZoneString(String timeZoneString)
```

## 4. CollectionUtils

CollectionUtils 类来自 *org.springframework.util* 包，它用于处理集合的工具。

### 判断工具

```java
// 判断 List/Set 是否为空。
boolean isEmpty(Collection<?> collection)

// 判断 Map 是否为空。
boolean isEmpty(Map<?,?> map)

// 判断 List/Set 中是否包含某个对象。
boolean containsInstance(Collection<?> collection, Object element)

// 以迭代器的方式，判断 List/Set 中是否包含某个对象。
boolean contains(Iterator<?> iterator, Object element)

// 判断 List/Set 是否包含某些对象中的任意一个。
boolean containsAny(Collection<?> source, Collection<?> candidates)

// 判断 List/Set 中的每个元素是否唯一。即 List/Set 中不存在重复元素。
boolean hasUniqueObject(Collection<?> collection)
```

### 向集合中添加

```java
// 将 Array 中的元素都添加到 List/Set 中。
<E> void mergeArrayIntoCollection(Object array, Collection<E> collection)  

// 将 Properties 中的键值对都添加到 Map 中。
<K,V> void mergePropertiesIntoMap(Properties props, Map<K,V> map)
```

### 在集合中查找

```java
// 返回 List 中最后一个元素。
<T> T lastElement(List<T> list)  

// 返回 Set 中最后一个元素。
<T> T lastElement(Set<T> set) 

// 返回参数 candidates 中第一个存在于参数 source 中的元素。
<E> E findFirstMatch(Collection<?> source, Collection<E> candidates)

// 返回 List/Set 中指定类型的元素。
<T> T findValueOfType(Collection<?> collection, Class<T> type)

// 返回 List/Set 中指定类型的元素。如果第一种类型未找到，则查找第二种类型，以此类推。
Object findValueOfType(Collection<?> collection, Class<?>[] types)

// 返回 List/Set 中元素的类型
Class<?> findCommonElementType(Collection<?> collection)
```

### MultiMap 相关

```java
// 将一个 Map<K, List<V>> 对象转换成一个 MultiValueMap<K, V> 对象。
<K, V> MultiValueMap<K,V> toMultiValueMap(Map<K, List<V>> map) 

// 返回 MultiValueMap 对象的一个不可变视图。
<K, V> MultiValueMap<K,V> unmodifiableMultiValueMap(MultiValueMap<? extends K,? extends V> map)
```

### 其他

```java
// 将 Array 转换成 List 。
List arrayToList(Object source)
```

## 5. Assert

Assert 断言工具类，通常用于数据合法性检查，在 JAVA 编程中，通常会编写如下代码：

```java
if (name == null || name.equls("")) {  
    throw new IllegalArgumentException("参数错误!");  
}
```

在所有方法中都使用手工检测合法性的方式并不是太好，因为这样影响了代码的可读性，若使用 Assert 工具类上面的代码可以简化为：

```java
Assert.hasText(name, "参数错误!");
```

这样可以大大增强代码的可读性。

> 断言相当于一个『拦路虎』，断言中的条件成立，程序才能继续『往下走』，否则，就抛出异常，返回。

Assert 类中的常用断言方法：

```java
// 要求参数 object 必须为非空（Not Null），否则抛出异常，不予『放行』。
// 参数 message 参数用于定制异常信息。
void notNull(Object object, String message)

// 要求参数必须空（Null），否则抛出异常，不予『放行』。
// 和 notNull() 方法断言规则相反
void isNull(Object object, String message)

// 要求参数必须为真（True），否则抛出异常，不予『放行』。
void isTrue(boolean expression, String message)

// 要求参数（List/Set）必须非空（Not Empty），否则抛出异常，不予『放行』。
void notEmpty(Collection collection, String message)

// 要求参数（String）必须有长度（即，Not Empty），否则抛出异常，不予『放行』。
void hasLength(String text, String message)

// 要求参数（String）必须有内容（即，Not Blank），否则抛出异常，不予『放行』。
void hasText(String text, String message)

// 要求参数是指定类型的实例，否则抛出异常，不予『放行』。
void isInstanceOf(Class type, Object obj, String message)

// 要求参数 `subType` 必须是参数 superType 的子类或实现类，否则抛出异常，不予『放行』。
void isAssignable(Class superType, Class subType, String message)
```

## 附：TimeZone String

| TimeZone                         | 地点                        |
| :------------------------------- | :-------------------------- |
| "Asia/Shanghai"                  | 中国标准时间 (北京)         |
| "Asia/Hong_Kong"                 | 香港时间 (香港)             |
| "Asia/Taipei"                    | 台北时间 (台北)             |
| "Asia/Seoul"                     | 首尔                        |
| "Asia/Tokyo"                     | 日本时间 (东京)             |
| "America/New_York"               | 美国东部时间 (纽约)         |
| "America/Denver"                 | 美国山区时间 (丹佛)         |
| "America/Costa_Rica"             | 美国中部时间 (哥斯达黎加)   |
| "America/Chicago"                | 美国中部时间 (芝加哥)       |
| "America/Mexico_City"            | 美国中部时间 (墨西哥城)     |
| "America/Regina"                 | 美国中部时间 (里贾纳)       |
| "America/Los_Angeles"            | 美国太平洋时间 (洛杉矶)     |
| "Pacific/Majuro"                 | 马朱罗                      |
| "Pacific/Midway"                 | 中途岛                      |
| "Pacific/Honolulu"               | 檀香山                      |
| "America/Anchorage"              | 安克雷奇                    |
| "America/Tijuana"                | 美国太平洋时间 (提华纳)     |
| "America/Phoenix"                | 美国山区时间 (凤凰城)       |
| "America/Chihuahua"              | 奇瓦瓦                      |
| "America/Bogota"                 | 哥伦比亚时间 (波哥大)       |
| "America/Caracas"                | 委内瑞拉时间 (加拉加斯)     |
| "America/Barbados"               | 大西洋时间 (巴巴多斯)       |
| "America/Manaus"                 | 亚马逊标准时间 (马瑙斯)     |
| "America/St_Johns"               | 纽芬兰时间 (圣约翰)         |
| "America/Santiago"               | 圣地亚哥                    |
| "America/Argentina/Buenos_Aires" | 布宜诺斯艾利斯              |
| "America/Godthab"                | 戈特霍布                    |
| "America/Montevideo"             | 乌拉圭时间 (蒙得维的亚)     |
| "America/Sao_Paulo"              | 圣保罗                      |
| "Atlantic/South_Georgia"         | 南乔治亚                    |
| "Atlantic/Azores"                | 亚述尔群岛                  |
| "Atlantic/Cape_Verde"            | 佛得角                      |
| "Africa/Casablanca"              | 卡萨布兰卡                  |
| "Europe/London"                  | 格林尼治标准时间 (伦敦)     |
| "Europe/Amsterdam"               | 中欧标准时间 (阿姆斯特丹)   |
| "Europe/Belgrade"                | 中欧标准时间 (贝尔格莱德)   |
| "Europe/Brussels"                | 中欧标准时间 (布鲁塞尔)     |
| "Europe/Sarajevo"                | 中欧标准时间 (萨拉热窝)     |
| "Africa/Brazzaville"             | 西部非洲标准时间 (布拉扎维) |
| "Africa/Windhoek"                | 温得和克                    |
| "Asia/Amman"                     | 东欧标准时间 (安曼)         |
| "Europe/Athens"                  | 东欧标准时间 (雅典)         |
| "Asia/Beirut"                    | 东欧标准时间 (贝鲁特)       |
| "Africa/Cairo"                   | 东欧标准时间 (开罗)         |
| "Europe/Helsinki"                | 东欧标准时间 (赫尔辛基)     |
| "Asia/Jerusalem"                 | 以色列时间 (耶路撒冷)       |
| "Africa/Harare"                  | 中部非洲标准时间 (哈拉雷)   |
| "Europe/Minsk"                   | 明斯克                      |
| "Asia/Baghdad"                   | 巴格达                      |
| "Europe/Moscow"                  | 莫斯科                      |
| "Asia/Kuwait"                    | 科威特                      |
| "Africa/Nairobi"                 | 东部非洲标准时间 (内罗毕)   |
| "Asia/Tehran"                    | 伊朗标准时间 (德黑兰)       |
| "Asia/Baku"                      | 巴库                        |
| "Asia/Tbilisi"                   | 第比利斯                    |
| "Asia/Yerevan"                   | 埃里温                      |
| "Asia/Dubai"                     | 迪拜                        |
| "Asia/Kabul"                     | 阿富汗时间 (喀布尔)         |
| "Asia/Karachi"                   | 卡拉奇                      |
| "Asia/Oral"                      | 乌拉尔                      |
| "Asia/Yekaterinburg"             | 叶卡捷林堡                  |
| "Asia/Calcutta"                  | 加尔各答                    |
| "Asia/Colombo"                   | 科伦坡                      |
| "Asia/Katmandu"                  | 尼泊尔时间 (加德满都)       |
| "Asia/Almaty"                    | 阿拉木图                    |
| "Asia/Rangoon"                   | 缅甸时间 (仰光)             |
| "Asia/Krasnoyarsk"               | 克拉斯诺亚尔斯克            |
| "Asia/Bangkok"                   | 曼谷                        |
| "Asia/Irkutsk"                   | 伊尔库茨克时间 (伊尔库茨克) |
| "Asia/Kuala_Lumpur"              | 吉隆坡                      |
| "Australia/Perth"                | 佩思                        |
| "Asia/Yakutsk"                   | 雅库茨克时间 (雅库茨克)     |
| "Australia/Darwin"               | 达尔文                      |
| "Australia/Brisbane"             | 布里斯班                    |
| "Asia/Vladivostok"               | 海参崴时间 (符拉迪沃斯托克) |
| "Pacific/Guam"                   | 关岛                        |
| "Australia/Adelaide"             | 阿德莱德                    |
| "Australia/Hobart"               | 霍巴特                      |
| "Australia/Sydney"               | 悉尼                        |
| "Asia/Magadan"                   | 马加丹时间 (马加丹)         |
| "Pacific/Auckland"               | 奥克兰                      |
| "Pacific/Fiji"                   | 斐济                        |
| "Pacific/Tongatapu"              | 东加塔布                    |