---
title: Oracle中的子查询
---
# Oracle中的子查询
在平时的工作中mysql的子查询十分常见，下面就子查询的注意事项进行总结。

## 子查询使用场景
一般在不能一步求解的时候用到子查询

**子查询的语法：**
```sql
SELECT select_list
FROM table
WHERE expr operator
    (SELECT select_list
    FROM  table)
```

::: tip 提示

子查询有常见的十个问题，弄清楚这十个问题是了解子查询的关键。

:::

## 问题一：子查询语法中的小括号
子查询语句必须使用小括号嵌套起来，否则执行报错

::: code-tabs
@tab 正确写法
```sql
-- 查询年龄比jack大的用户
select * from `user`
where `age` = (select `age` form 
               `user` where `name` = 'jack');
```
@tab 错误写法
```sql
-- 查询年龄比jack大的用户
select * from `user`
where `age` = select `age` form 
               `user` where `name` = 'jack';
```
:::
:::

## 问题二：子查询的书写风格
一个好的sql语句书写习惯可以规避很多没有必要出现的小问题，提高开发的效率。

书写风格规范的sql在出现错误的时候可以清晰的查询到初五出现的位置，方便阅读，提高开发效率。

## 问题三：可以使用子查询的位置
子查询可以使用的位置： `where`、`select`、`having`、`from`
::: code-tabs
@tab where 使用
```sql
-- 查询年龄比jack大的用户
select * from `user`
where `age` = (select `age` form 
               `user` where `name` = 'jack');
```
::: warning 注意
where条件后面的子查询只能是单行子查询（只能返回一条数据）
:::
@tab select 使用
```sql
-- 查询学生的信息以及对应的班级名称
select `name`,`age`,`class_no`,
    (select `class_name` 
    from `class` 
    where class_no = 1) //这里的班级号暂时写死，后面相关子查询有详细介绍
from `student`;
```
::: warning 注意
select后面的子查询只能是单行子查询（只能返回一条数据）
:::
@tab having 使用
```sql
-- 平均分比一班最高分高的班级号
select class_no,AVG(score)
from student
group by class_no
having AVG(score)>=(select MAX(score) from student where class_no=1);
```
::: warning 注意
having后面的子查询只能是单行子查询（只能返回一条数据）
:::
@tab from 使用
```sql
-- 下面的sql语句中子查询返回的数据被当作一张表放在主查询中使用
SELECT
	* 
FROM
	( SELECT age FROM student ) AS a
```
::: warning 注意
在使用子查询作为表的时候推荐使用别名，在mysql中from后面使用子查询需要给子查询返回的数据取别名，否则会报错，但在oracle中可以不取别名。
&gt; 1248 - Every derived table must have its own alias

:::
:::
:::

## 问题四：不可以使用子查询的位置
在**oracle**中group by分组语句是不可以使用子查询的，但是在mysql中是可以的
::: code-tabs
@tab oracle中
```sql
select item_name
  from item
 group by (select item_name
             from item
            where item_code = 'item_code_0_0_0_10');
```
::: warning 警告
在oracle中group by后面出现子查询语句会报错
&gt; ORA-&gt;22818:这里不允许出现子查询表达式
:::

@tab mysql中
```sql
select AVG(score)
  from student
 GROUP BY (select class_no from student where id = 1);
```
::: tip 提示
在mysql中group by后面出现子查询语句会正常执行
:::
:::
::: 

## 问题五：FROM 后面的子查询
在平时的工作中在from后面出现的子查询十分的常见，我们可以将from后的子查询看成一张新的表。
```sql
-- 查询员工的姓名，月薪，年薪=(月薪*12)
select * 
from (select `name`,`sal`,sal*12 as 年薪 from emp);
```
::: tip 提示
我们在使用from后面的子查询时可以在已有的列上加更多的列，然后在主查询中对这些列添加条件从而得到想要的数据。
:::

## 问题六：子查询和主查询使用的表
主查询和子查询使用的表可以是同一张表，也可以不是同一张表。对我们自己来说只要子查询返回的结果主查询可以使用就可以了

::: code-tabs
@tab 使用不同表的子查询
```sql
select `name`,`age`,`class_no`,
    (select `class_name` 
    from `class` 
    where class_no = 1) //这里的班级号暂时写死，后面相关子查询有详细介绍
from `student`;
```
@tab 使用相同表的子查询
```sql
-- 查询每个班级的平均年龄
select avg(age),`class_no`,
from `student`
order by (select `class_no` from `class`);
-- 在mysql中可以在group by后面使用子查询，在oracle中是不可以的
```
:::
:::

## 问题七：子查询中的排序
一般不在子查询中使用排序，应该大部分情况下子查询中的结果只是拿来使用，排序与不排序都不影响我们使用，所以意义不大。但是在Top-N分析问题中，必须对子查询进行排序。
::: tip Top-N解释
例子：找到员工表中工资最高的前三名 这时N=3

| ROWNUM | EMPNO | ENAME | SAL  |
|--------|-------|-------|------|
| 1      | 0001  | JACK  | 5000 |
| 2      | 0002  | TOM   | 3000 |
| 3      | 0003  | ABC   | 3000 |

在oracle数据库中为我们提供了很多伪列，比如：rownum（行号）
- 行号永远按照默认的顺序生成，即使你对查询的数据进行了排序，行号也是不会改变的。
- 并且行号只能使用`<`或者`<=`，不能使用`>`或者`>=`。
::: code-tabs
@tab 错误写法
```sql
-- 找到员工表中工资最高的前三名，使用行号取降序排列后的前三个
select rownum,empon,ename,sal
from emp
where rownum<=3
order by sal desc
```
sql执行之后发现结果并不是我们想要的，这是因为行号是默认生成的，并不会因为排序而改变。
@tab 正确写法
```sql
-- 找到员工表中工资最高的前三名,在子查询中进行排序之后在取行号
select rownum,empon,ename,sal
from (select * form emp oreder by sal desc)
where rownum<=3
```
这时发现结果是我们想要的效果，这是因为from后面的子查询被看作是一张新的表，他是已经根据工资降序排列好的，所以他的行号前三对应的数据就是我们想要的数据。
:::
:::

## 问题八：子查询的执行顺序
一般先执行主查询在执行子查询，但相关子查询例外。
::: code-tabs
@tab 相关子查询
```text
相关子查询的执行依赖于外部查询。多数情况下是子查询的WHERE子句中引用了外部查询的表。
执行过程：
    1. 从外层查询中取出一个元组，将元组相关列的值传给内层查询。
    2. 执行内层查询，得到子查询操作的值。
    3. 外查询根据子查询返回的结果或结果集得到满足条件的行。
    4. 然后外层查询取出下一个元组重复做步骤1-3，直到外层的元组全部处理完毕。
```
1.返回单值：查询所有价格高于平均价格的图书名，作者，出版社和价格。
```sql
SElECT 图书名，作者，出版社，价格
FROM Books
WHERE 价格 >
(
SELECT AVG(价格)
FROM Books
)
```
2.返回值列表–查询所有借阅图书的读者信息
```sql
SElECT *
FROM Readers
WHERE 读者编号 IN
(
SELECT 读者编号
FROM [Borrow History]
)
```
@tab 非相关子查询
```text
非相关子查询的执行不依赖与外部的查询。
执行过程：
    1. 执行子查询，其结果不被显示，而是传递给外部查询，作为外部查询的条件使用。
    2. 执行外部查询，并显示整个结果。　　
非相关子查询一般可以分为：返回单值的子查询和返回一个列表的子查询
```
查询Booka表中大于该类图书价格平均值的图书信息SElECT 图书名,出版社,类编号,价格
```sql
SELECT FROM Books As a
WHERE 价格 >
(
SELECT AVG(价格)
FROM Books AS b
WHERE a.类编号=b.类编号
)
```
:::
:::
::: tip 总结
- 非相关子查询是独立于外部查询的子查询，子查询总共执行一次，执行完毕后将值传递给外部查询。
- 相关子查询的执行依赖于外部查询的数据，外部查询执行一行，子查询就执行一次。
- 故非相关子查询比相关子查询效率高。
:::
## 问题九：单行子查询与多行子查询的区别
见名知意，单行子查询就是只返回一条数据的子查询，多行子查询就是返回多行数据的子查询。
::: warning 注意
在单行子查询中使用单行运算符，在多行子查询中用多行运算符。
- 单行运算符：子查询结果只有一个：&lt; &gt; = &lt;= &gt;= !=
- 多行子查询：子查询结果是单列多行：in ， any，all
- 多列子查询：子查询为多列，一定要在FROM后作为表，且一定要取别名，否则无法访问这张表中的字段。
:::

## 问题十：子查询中的null值问题
x为外部查询结果 a b c ..... null 是子查询中结果

1. in 子查询的逻辑关系

&gt;X == a  or  X == b  or  x == c .....  or  x == null

任何值和null比较结果NULL, 由于是OR语句只要一个为真结果就为真， 所以只看前半部分 null值忽略

2. not in 子查询的逻辑关系

&gt;X != a  and  X != b  and  x != c .....  and  x != null

同理任何值和null比较结果NULL, 由于是and语句短路原理，只要一个为假结果为假， 所以结果必为 NULL/FALSE

::: tip 结论
由此可见在in 子查询结果列表中含有null值时,不影响正常比较。

而在not in 子查询结果列表中 含有null值时,必然返回空,就算有项目符合前面所有结果。
:::