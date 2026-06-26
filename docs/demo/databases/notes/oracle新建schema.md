# oracle数据库新建schema

::: tip schema简介
在oracle中，schema是数据库对象的集合；一个oracle用户对应一个schema，并且只能通过创建用户的方法创建schema，可以将schema称为user的别名，也就是schema名字同user名字对应并且相同。
:::
## schema简介
**官方文档：**
&gt; A schema is a collection of database objects (used by a user.).
&gt; 
&gt; Schema是数据库对象的集合（由用户使用）。
&gt; 
&gt; Schema objects are the logical structures that directly refer to the database’s data.
&gt; 
&gt; Schema对象是直接引用数据库数据的逻辑结构。
&gt; 
&gt; A user is a name defined in the database that can connect to and access objects.
&gt; 
&gt; 用户是在数据库中定义的可以连接和访问对象的名称。
&gt; 
&gt; Schemas and users help database administrators manage database security.
&gt; 
&gt; Schema和用户帮助数据库管理员管理数据库安全。

在oracle数据库中每个用户都有一个默认的schema，如果我们访问一个表时，没有指明该表属于哪一个schema中的，系统就会自动给我们在表上加上缺省的sheman名。在oracle中一个对象完整的名称应该是`schema.object`，并不是`user.object`.

这就像一个用户有一个缺省的表空间，但是该用户还可以使用其他的表空间，如果我们在创建对象时不指定表空间，则对象存储在缺省表空间中，要想让对象存储在其他表空间中，我们需要在创建对象时指定该对象的表空间。

```sql
SQL> Gruant dba to scott

SQL> create table test(name char(10));

Table created.

SQL> create table system.test(name char(10));

Table created.

SQL> insert into test values('scott'); 

1 row created.

SQL> insert into system.test values('system');

1 row created.

SQL> commit;

Commit complete.

SQL> conn system/manager

Connected.

SQL> select * from test;

NAME

----------

system

SQL> ALTER SESSION SET CURRENT_SCHEMA = scott; --改变用户缺省schema名

Session altered.

SQL> select * from test;

NAME

----------

scott

SQL> select owner ,table_name from dba_tables where table_name=upper('test');

OWNER TABLE_NAME

------------------------------ ------------------------------

SCOTT TEST

SYSTEM TEST
```
## schema创建
这里使用sql脚本配合.bat文件创建。
### 1、编写bat文件
```bat
@REM 如果您没有管理员权限，请使用管理员权限再次执行批处理。
:: @NET SESSION > NUL 2>&1
@IF NOT %ERRORLEVEL% == 0 (

	REM Use this if you do not need to wait for the batch to finish
	powershell.exe -Command Start-Process """%~dp0%~nx0""" -Verb Runas

	REM Use this to wait for the batch and its subprocesses to finish
	REM * If you receive the result as an environment variable, you can not get the result unless you execute the parent batch / process with administrator authority.
	REM powershell.exe -Command Start-Process """%~dp0%~nx0""" -Verb Runas -Wait

	EXIT /B 1
)
@cd /d %~dp0%
@REM 如果您没有管理员权限，请使用管理员权限再次执行批处理。

@echo on
title Create Database


REM ===========================================================================
REM Internal Environmant Values.
REM ===========================================================================
set ORACLE_SID=ORCL
set ORACLE_BASE=C:\ORACLE
set ORACLE_HOME=C:\oracle\product\12.2.0\dbhome_1

REM Add
%ORACLE_HOME%\bin\sqlplus system/manager @tablespace.sql

REM ============================================================================
REM Create User
REM ============================================================================
%ORACLE_HOME%\bin\sqlplus system/manager @user.sql

exit
```

### 2、编写sql脚本
1、创建表空间
```sql
set echo on
@environment_setting.sql
SPOOL &SQL_LOG_DIR\tablespace.log

connect / as sysdba


CREATE TABLESPACE LCD DATAFILE '&DBSMAIN\LCD_01.DBF' SIZE 250M REUSE
AUTOEXTEND ON NEXT 20M
EXTENT MANAGEMENT LOCAL UNIFORM SIZE 2M
SEGMENT SPACE MANAGEMENT AUTO;


SPOOL OFF
exit
```

2、创建用户
```sql
set echo on
@environment_setting.sql
SPOOL &SQL_LOG_DIR\user.log

CONNECT / AS SYSDBA;

/** LCD ************************************************/
DROP USER LCD CASCADE;
CREATE USER LCD
  IDENTIFIED BY LCD
  DEFAULT TABLESPACE LCD
  TEMPORARY TABLESPACE TEMP
  PROFILE DEFAULT
  ACCOUNT UNLOCK;
ALTER USER LCD DEFAULT ROLE ALL;
GRANT CONNECT, RESOURCE, SELECT ANY DICTIONARY TO LCD;
GRANT ALTER SESSION, CREATE SESSION, CREATE SEQUENCE, CREATE SYNONYM TO LCD;
GRANT CREATE DATABASE LINK, CREATE INDEXTYPE, CREATE PROCEDURE, CREATE TABLE TO LCD;
GRANT CREATE TRIGGER, CREATE TYPE, CREATE VIEW TO LCD;
GRANT EXECUTE ON DBMS_ALERT      TO LCD;
GRANT EXECUTE ON DBMS_PIPE       TO LCD;
GRANT EXECUTE ANY PROCEDURE      TO LCD;
GRANT SELECT  ON DBMS_ALERT_INFO TO LCD;
GRANT ALTER  SYSTEM              TO LCD;
GRANT DEBUG ANY PROCEDURE        TO LCD;
GRANT DEBUG CONNECT SESSION      TO LCD;
GRANT ANALYZE ANY DICTIONARY     TO LCD;
GRANT ANALYZE ANY                TO LCD;
GRANT SELECT ANY SEQUENCE TO LCD;
GRANT SELECT ANY TABLE, UPDATE ANY TABLE, DELETE ANY TABLE, INSERT ANY TABLE TO LCD;
GRANT CREATE ANY TRIGGER TO LCD;
GRANT UNLIMITED TABLESPACE TO LCD;

/**** PROFILE ******************************************/

ALTER PROFILE DEFAULT LIMIT PASSWORD_LIFE_TIME  UNLIMITED;
ALTER PROFILE DEFAULT LIMIT PASSWORD_LOCK_TIME  UNLIMITED;
ALTER PROFILE DEFAULT LIMIT PASSWORD_GRACE_TIME UNLIMITED;

SPOOL OFF
exit
```
3、数据库默认值创建
```sql
def ORACLE_SID  =ORCL        
def ORACLE_BASE =C:\ORACLE       
def ORACLE_HOME =C:\oracle\product\12.2.0\dbhome_1       
def DBSMAIN     =C:\ORACLE\ORADATA\ORCL           
def DBSSUB      =D:\ORACLE\ORADATA\dbssub\ORCL            
def SQL_LOG_DIR =C:\daifuku\logs\setup\ORCL       
def BACKUP_HOME =D:\ORACLEBACKUP\DATAPUMP       

```

完成之后运行bat文件即可创建名为lcd的schema