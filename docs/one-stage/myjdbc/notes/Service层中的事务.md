# Service 层中使用事务

## 前言

- DAO 层是『站在数据库的角度』考虑问题，其中的每一个方法对应的是一条 SQL 语句；
- Service 层是『站在人的角度』考虑问题，其中的每一个方法对应的是人的概念中的干一件事情；
- 人的概念中的干一件事情背后可能不止一条 SQL 语句。例如：转账。

因此，一个 Service 方法可能会调用 DAO 的多个方法，而我们（程序员）必须保证一个 Service 方法中的多个 DAO 方法（背后是执行多条 SQL 语句）要在同一个事务中。这样，才能保证这是『**干的一件事情**』。

例如转账业务的代码逻辑如下：

```java
// 转账。从 [from] 这里转 [meney] 这么多钱给 [to]
public void transfer(int fromId, int toId, double money) {
    try {
        Account from = accountDAO.select(fromId);
        Account to = accountDAO.select(toId);

        from.setMoney(from.getMoney() - money);
        to.setMoney(to.getMoney() + money);

        accountDAO.update(from); // 1
        accountDAO.update(to);   // 2
    } catch (SQLException e) {
        ...
    } finally {
        ...
    }
}
```

上述代码如果在 ① 处执行成功，但是在 ② 处执行错误，那么会造成 from 的钱扣了，但是 to 的钱没有增加的情况。

&gt; 关于 ② 的错误的原因不一定就是 DAO 方法写的有问题，例如，数据库 MySQL 所在的服务器断电、网络抖动导致客户端服务端连接断开等，因此，即便是你（程序员）的代码写的 100% 没问题，也不能保证 DAO/SQL 的执行就一定会成功。

**保证多个 DAO 方法是位于同一个事务中，关键在于：它们要使用同一个 Connection 对象 。**

实现让多个 DAO 方法使用同一个 Connection 对象的方式有两种途径。

## 通过参数传递

通过参数传递是最简单最直观的方式：Connection 对象的获得是由 Service 负责，Service 把 Connection 对象传给 DAO 方法。

只要 Service 保证传给多个 DAO 的是同一个 Connection 对象，那么这几个 DAO 方法自然使用的就是同一个 Connection 对象，自然也就在同一个事务之中。

为了关注核心重点问题，以下代码简化了部分与当前问题无关的部分异常处理逻辑

```java
public void transfer(int fromId, int toId, double money) throws SQLException {
    Connection connection = null;
    try {
        // 获得 Connection 对象，并关闭『事务的自动提交』功能。
        connection = dataSource.getConnection();
        connection.setAutoCommit(false);

        // 执行转账业务逻辑
        Account from = accountDAO.select(connection, fromId);
        Account to = accountDAO.select(connection, toId);
        from.setMoney(from.getMoney() - money);
        to.setMoney(to.getMoney() + money);
        accountDAO.update(connection, from);
        accountDAO.update(connection, to);

        // 提交事务
        connection.commit();
    } catch (SQLException e) {
        // 事务回滚，撤消已成功的操作
        connection.rollback();
    } finally {
        // 关闭连接
        if (connection != null && !connection.isClosed())
            connection.close();
    }
}
```

## 利用 ThreadLocal

Service 层的代码和 DAO 层的代码的执行是在同一个线程中的，既然是在同一个线程中，那么它们必定能『看到』同一个 ThreadLocal 变量。

自定义工具类，提供 ThreadLocal 变量提供给 Service 和 DAO 使用：

```java
public class JDBCUtils {

    public static ThreadLocal<Connection> threadLocal = new ThreadLocal<>();

    ...
}
```

Service 层在获得 Connection 对象之后，要将它放入到 ThreadLocal 中：

```java
public void transfer(int fromId, int toId, double money) throws SQLException {
    Connection connection = null;
    try {
        // 获得 Connection 对象，并关闭『事务的自动提交』功能。
        connection = dataSource.getConnection();
        connection.setAutoCommit(false);

        // 将 Connection 对象存入 ThreadLocal 中。 
        JDBCUtils.threadLocal.set(connection);

        // 执行转账业务逻辑
        Account from = accountDAO.select(fromId);
        Account to = accountDAO.select(toId);
        from.setMoney(from.getMoney() - money);
        to.setMoney(to.getMoney() + money);
        accountDAO.update(from);
        accountDAO.update(to);

        // 提交事务
        connection.commit();
    } catch (SQLException e) {
        // 事务回滚，撤消已成功的操作
        connection.rollback();
    } finally {
        // 关闭连接
        if (connection != null && !connection.isClosed())
            connection.close();
    }
}
```

那么各个 DAO 的方法就自己从 ThreadLocal 中去取：

```java
public void update(Account account) throws SQLException {
    Connection connection = JDBCUtils.threadLocal.get();
    ...
}

public Account select(int id) throws SQLException {
    Connection connection = JDBCUtils.threadLocal.get();
    ...
}
```