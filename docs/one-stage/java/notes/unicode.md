# Unicode 编码

## 1. .java 文件和 .class 文件的字符编码

java 源文件（.java）和编译后的 .class 文件的编码并不一样。

源文件 .java 可以采用多种编码格式，如

- UTF-8（unix linux 平台默认）。或者
- GBK（windows 平台默认）。

之所以有（可以有）多种编码格式，是因为源文件毕竟是给『**人**』看的，不是给 jvm 看的，它用什么编码格式 jvm 根本就不关心。

当将源码用 `javac` 编译的时候，默认是 `javac` 按照系统默认的编码格式读取 java 源文件，然后以 **utf-8** 的格式输出到 .class 文件中。

换句话说，在默认情况下

- unix 平台，`javac` 用 utf-8 格式读取 java 源文件 然后以 utf-8 格式写 .class；
- 在默认情况下 windows 平台，`javac` 用 gbk 格式读取 java 源文件然后以 utf-8 格式写 .class 。

所以，中文字符乱码的根本原因在于，你（有意或无意）没有使用默认编码规则存储 .java 文件，而 javac 却又是按照默认规则去读 .java 文件，这就出现了乱码。

例如， 在 windows 平台下用 utf-8 格式保存 java 源文件， 那么你在执行 javac 命令编译源文件时，你需要『告诉』javac 命令，你要编译的源文件的编码格式。否则，会有乱码问题。

## 2. Java 中字符串的长度

在 Java 中一个字符串的长度并『**不能**』简单地、想当然的想象成是其中所有字符数的累加和！

以下内容来自 stackoverflow 中的总结和解释

- A Java char takes always 16 bits.
- A Unicode character, when encoded as UTF-16, takes “almost always” (not always) 16 bits: that’s because there are more than 64K unicode characters. Hence, a Java char is NOT a Unicode character (though “almost always” is).
- “Almost always”, above, means the 64K first code points of Unicode, range 0x0000 to 0xFFF (BMP), which take 16 bits in the UTF-16 encoding.
- A non-BMP (“rare”) Unicode character is represented as two Java chars (surrogate representation). This applies also to the literal representation as a string: For example, the character U+20000 is written as “\uD840\uDC00”.
- Corolary: string.length() returns the number of java chars, not of Unicode chars. A string that has just one “rare” unicode character (eg U+20000) would return length() = 2 . Same consideration applies to any method that deals with char-sequences.
- Java has little intelligence for dealing with non-BMP unicode characters as a whole. There are some utility methods that treat characters as code-points, represented as ints eg: Character.isLetter(int ch). Those are the real fully-Unicode methods.

```java
String str1 = "\uD840\uDC00";
String str2 = "𠀀";

System.out.println(str2.length());
System.out.println(Character.isLetter(str2.charAt(0)));
```

## 3. 中日韩文的 UniCode 码点

https://codepoints.net/planes

CJK 的意思是 *`Chinese，Japanese，Korea`* 的简写 ，实际上就是指中日韩三国文字（象形文字）的 Unicode 编码。

| 字符集           | Unicode 编码    | 标识                                    |
| :--------------- | :-------------- | :-------------------------------------- |
| 部首扩展         | 2E80 - 2EFF     | CJK Radicals Supplement                 |
| 康熙部首         | 2F00 - 2FDF     | Kangxi Radicals                         |
| 汉字结构         | 2FF0 - 2FFF     | Ideographic Description Characters      |
| **汉语标点符号** | **3000 - 303F** | **CJK Symbols and Punctuation**         |
| 日语注音         | 3100-3120       | Bopomofo                                |
| 注音扩展         | 31A0-31BA       | Bopomofo Extended                       |
| 汉字笔画         | 31C0-31EF       | CJK Strokes                             |
| 扩展 A           | 3400 - 4DBF     | CJK Unified Ideographs Extension A      |
| **基本汉字**     | **4E00 - 9FFF** | **CJK Unified Ideographs**              |
| 兼容汉字         | F900- FAD9      | CJK Compatibility Ideographs            |
| 全角半角字母符号 | FF00 - FFEF     | Halfwidth and Fullwidth Forms           |
| 扩展 B           | 20000-2A6DF     | CJK Unified Ideographs Extension B      |
| 扩展 C           | 2A700-2B73F     | CJK Unified Ideographs Extension C      |
| 扩展 D           | 2B740-2B81F     | CJK Unified Ideographs Extension D      |
| 兼容扩展         | 2F800-2FA1F     | CJK Compatibility Ideographs Supplement |

## 4. Java 完美判断中文字符的方案

方案/思路是 ok 的，细节可以再调整。

```java
// 根据 Unicode 编码完美的判断中文汉字和符号 
private static boolean isChinese(char c) { 
    Character.UnicodeBlock ub = Character.UnicodeBlock.of(c); 
    if (ub == Character.UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS 
            || ub == Character.UnicodeBlock.CJK_COMPATIBILITY_IDEOGRAPHS 
            || ub == Character.UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_A 
            || ub == Character.UnicodeBlock.CJK_UNIFIED_IDEOGRAPHS_EXTENSION_B 
            || ub == Character.UnicodeBlock.CJK_SYMBOLS_AND_PUNCTUATION 
            || ub == Character.UnicodeBlock.HALFWIDTH_AND_FULLWIDTH_FORMS 
            || ub == Character.UnicodeBlock.GENERAL_PUNCTUATION) { 
        return true; 
    } 
    return false; 
} 
```

## 5. 三种空格

| 空格                 | Unicode 码 | 说明                                                         |
| :------------------- | :--------- | :----------------------------------------------------------- |
| 不间断空格           | `\u00A0`   | 主要用在 office 中，让一个单词在结尾处不会换行显示，快捷键 ctrl+shift+space |
| 半角空格（英文符号） | `\u0020`   | 代码中常用的                                                 |
| 全角空格（中文符号） | `\u3000`   | 中文文章中使用                                               |