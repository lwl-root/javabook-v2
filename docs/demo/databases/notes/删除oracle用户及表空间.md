# 怎么删除oracle用户及表空间

::: tip 前言
在oracle中，可以使用“drop user 用户名称 cascade;”命令来删除指定用户，可以使用“DROP TABLESPACE 表空间名 INCLUDING CONTENTS AND DATAFILES;”命令来删除指定表空间。
:::


本教程操作环境：Windows10系统、Oracle 11g版。

## 删除oracle用户和表空间的方法:

删除用户

```sql
drop user 用户名称 cascade;
```


删除表空间

```sql
DROP TABLESPACE tablespace_name INCLUDING CONTENTS AND DATAFILES;
```

删除空的表空间，不包含物理文件

```sql
DROP TABLESPACE tablespace_name;
```
删除空表空间，包含物理文件

```sql
DROP TABLESPACE tablespace_name INCLUDING DATAFILES;
```
删除非空表空间，不包含物理文件

```sql
DROP TABLESPACE tablespace_name INCLUDING DATAFILES;
```
删除非空表空间，包含物理文件

```sql
DROP TABLESPACE tablespace_name INCLUDING CONTENTS AND DATAFILES;
```

以上就是怎么删除oracle用户及表空间的详细内容。