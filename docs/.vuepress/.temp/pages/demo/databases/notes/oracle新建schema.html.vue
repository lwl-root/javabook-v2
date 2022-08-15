<template><h1 id="oracle数据库新建schema" tabindex="-1"><a class="header-anchor" href="#oracle数据库新建schema" aria-hidden="true">#</a> oracle数据库新建schema</h1>
<div class="custom-container tip"><p class="custom-container-title">schema简介</p>
<p>在oracle中，schema是数据库对象的集合；一个oracle用户对应一个schema，并且只能通过创建用户的方法创建schema，可以将schema称为user的别名，也就是schema名字同user名字对应并且相同。</p>
</div>
<h2 id="schema简介" tabindex="-1"><a class="header-anchor" href="#schema简介" aria-hidden="true">#</a> schema简介</h2>
<p><strong>官方文档：</strong></p>
<blockquote>
<p>A schema is a collection of database objects (used by a user.).
Schema是数据库对象的集合（由用户使用）。
Schema objects are the logical structures that directly refer to the database’s data.
Schema对象是直接引用数据库数据的逻辑结构。
A user is a name defined in the database that can connect to and access objects.
用户是在数据库中定义的可以连接和访问对象的名称。
Schemas and users help database administrators manage database security.
Schemas和用户帮助数据库管理员管理数据库安全。</p>
</blockquote>
<p>在oracle数据库中每个用户都有一个默认的schema，如果我们访问一个表时，没有指明该表属于哪一个schema中的，系统就会自动给我们在表上加上缺省的sheman名。在oracle中一个对象完整的名称应该是<code>schema.object</code>，并不是<code>user.object</code>.</p>
<p>这就像一个用户有一个缺省的表空间，但是该用户还可以使用其他的表空间，如果我们在创建对象时不指定表空间，则对象存储在缺省表空间中，要想让对象存储在其他表空间中，我们需要在创建对象时指定该对象的表空间。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SQL</span><span class="token operator">></span> Gruant dba <span class="token keyword">to</span> scott

<span class="token keyword">SQL</span><span class="token operator">></span> <span class="token keyword">create</span> <span class="token keyword">table</span> test<span class="token punctuation">(</span>name <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">Table</span> created<span class="token punctuation">.</span>

<span class="token keyword">SQL</span><span class="token operator">></span> <span class="token keyword">create</span> <span class="token keyword">table</span> system<span class="token punctuation">.</span>test<span class="token punctuation">(</span>name <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">Table</span> created<span class="token punctuation">.</span>

<span class="token keyword">SQL</span><span class="token operator">></span> <span class="token keyword">insert</span> <span class="token keyword">into</span> test <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'scott'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token number">1</span> <span class="token keyword">row</span> created<span class="token punctuation">.</span>

<span class="token keyword">SQL</span><span class="token operator">></span> <span class="token keyword">insert</span> <span class="token keyword">into</span> system<span class="token punctuation">.</span>test <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">'system'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">1</span> <span class="token keyword">row</span> created<span class="token punctuation">.</span>

<span class="token keyword">SQL</span><span class="token operator">></span> <span class="token keyword">commit</span><span class="token punctuation">;</span>

<span class="token keyword">Commit</span> complete<span class="token punctuation">.</span>

<span class="token keyword">SQL</span><span class="token operator">></span> conn system<span class="token operator">/</span>manager

Connected<span class="token punctuation">.</span>

<span class="token keyword">SQL</span><span class="token operator">></span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> test<span class="token punctuation">;</span>

NAME

<span class="token comment">----------</span>

system

<span class="token keyword">SQL</span><span class="token operator">></span> <span class="token keyword">ALTER</span> <span class="token keyword">SESSION</span> <span class="token keyword">SET</span> CURRENT_SCHEMA <span class="token operator">=</span> scott<span class="token punctuation">;</span> <span class="token comment">--改变用户缺省schema名</span>

<span class="token keyword">Session</span> altered<span class="token punctuation">.</span>

<span class="token keyword">SQL</span><span class="token operator">></span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> test<span class="token punctuation">;</span>

NAME

<span class="token comment">----------</span>

scott

<span class="token keyword">SQL</span><span class="token operator">></span> <span class="token keyword">select</span> owner <span class="token punctuation">,</span>table_name <span class="token keyword">from</span> dba_tables <span class="token keyword">where</span> table_name<span class="token operator">=</span>upper<span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

OWNER TABLE_NAME

<span class="token comment">------------------------------ ------------------------------</span>

SCOTT TEST

SYSTEM TEST
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h2 id="schema创建" tabindex="-1"><a class="header-anchor" href="#schema创建" aria-hidden="true">#</a> schema创建</h2>
<p>这里使用sql脚本配合.bat文件创建。</p>
<h3 id="_1、编写bat文件" tabindex="-1"><a class="header-anchor" href="#_1、编写bat文件" aria-hidden="true">#</a> 1、编写bat文件</h3>
<div class="language-bat ext-bat line-numbers-mode"><pre v-pre class="language-bat"><code>@REM 如果您没有管理员权限，请使用管理员权限再次执行批处理。
:: @NET SESSION &gt; NUL 2&gt;&amp;1
@IF NOT %ERRORLEVEL% == 0 (

	REM Use this if you do not need to wait for the batch to finish
	powershell.exe -Command Start-Process &quot;&quot;&quot;%~dp0%~nx0&quot;&quot;&quot; -Verb Runas

	REM Use this to wait for the batch and its subprocesses to finish
	REM * If you receive the result as an environment variable, you can not get the result unless you execute the parent batch / process with administrator authority.
	REM powershell.exe -Command Start-Process &quot;&quot;&quot;%~dp0%~nx0&quot;&quot;&quot; -Verb Runas -Wait

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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h3 id="_2、编写sql脚本" tabindex="-1"><a class="header-anchor" href="#_2、编写sql脚本" aria-hidden="true">#</a> 2、编写sql脚本</h3>
<p>1、创建表空间</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">set</span> echo <span class="token keyword">on</span>
<span class="token variable">@environment_setting.sql</span>
SPOOL <span class="token operator">&amp;</span>SQL_LOG_DIR\<span class="token keyword">tablespace</span><span class="token punctuation">.</span>log

<span class="token keyword">connect</span> <span class="token operator">/</span> <span class="token keyword">as</span> sysdba


<span class="token keyword">CREATE</span> <span class="token keyword">TABLESPACE</span> LCD DATAFILE <span class="token string">'&amp;DBSMAIN\LCD_01.DBF'</span> SIZE <span class="token number">250</span>M REUSE
AUTOEXTEND <span class="token keyword">ON</span> <span class="token keyword">NEXT</span> <span class="token number">20</span>M
EXTENT MANAGEMENT <span class="token keyword">LOCAL</span> UNIFORM SIZE <span class="token number">2</span>M
SEGMENT SPACE MANAGEMENT AUTO<span class="token punctuation">;</span>


SPOOL <span class="token keyword">OFF</span>
<span class="token keyword">exit</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>2、创建用户</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">set</span> echo <span class="token keyword">on</span>
<span class="token variable">@environment_setting.sql</span>
SPOOL <span class="token operator">&amp;</span>SQL_LOG_DIR\<span class="token keyword">user</span><span class="token punctuation">.</span>log

<span class="token keyword">CONNECT</span> <span class="token operator">/</span> <span class="token keyword">AS</span> SYSDBA<span class="token punctuation">;</span>

<span class="token comment">/** LCD ************************************************/</span>
<span class="token keyword">DROP</span> <span class="token keyword">USER</span> LCD <span class="token keyword">CASCADE</span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> LCD
  IDENTIFIED <span class="token keyword">BY</span> LCD
  <span class="token keyword">DEFAULT</span> <span class="token keyword">TABLESPACE</span> LCD
  <span class="token keyword">TEMPORARY</span> <span class="token keyword">TABLESPACE</span> <span class="token keyword">TEMP</span>
  PROFILE <span class="token keyword">DEFAULT</span>
  ACCOUNT <span class="token keyword">UNLOCK</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">USER</span> LCD <span class="token keyword">DEFAULT</span> ROLE <span class="token keyword">ALL</span><span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">CONNECT</span><span class="token punctuation">,</span> RESOURCE<span class="token punctuation">,</span> <span class="token keyword">SELECT</span> <span class="token keyword">ANY</span> DICTIONARY <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">ALTER</span> <span class="token keyword">SESSION</span><span class="token punctuation">,</span> <span class="token keyword">CREATE</span> <span class="token keyword">SESSION</span><span class="token punctuation">,</span> <span class="token keyword">CREATE</span> SEQUENCE<span class="token punctuation">,</span> <span class="token keyword">CREATE</span> SYNONYM <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> LINK<span class="token punctuation">,</span> <span class="token keyword">CREATE</span> INDEXTYPE<span class="token punctuation">,</span> <span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span><span class="token punctuation">,</span> <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span><span class="token punctuation">,</span> <span class="token keyword">CREATE</span> <span class="token keyword">TYPE</span><span class="token punctuation">,</span> <span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">EXECUTE</span> <span class="token keyword">ON</span> DBMS_ALERT      <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">EXECUTE</span> <span class="token keyword">ON</span> DBMS_PIPE       <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">EXECUTE</span> <span class="token keyword">ANY</span> <span class="token keyword">PROCEDURE</span>      <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">SELECT</span>  <span class="token keyword">ON</span> DBMS_ALERT_INFO <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">ALTER</span>  SYSTEM              <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> DEBUG <span class="token keyword">ANY</span> <span class="token keyword">PROCEDURE</span>        <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> DEBUG <span class="token keyword">CONNECT</span> <span class="token keyword">SESSION</span>      <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">ANALYZE</span> <span class="token keyword">ANY</span> DICTIONARY     <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">ANALYZE</span> <span class="token keyword">ANY</span>                <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">SELECT</span> <span class="token keyword">ANY</span> SEQUENCE <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">SELECT</span> <span class="token keyword">ANY</span> <span class="token keyword">TABLE</span><span class="token punctuation">,</span> <span class="token keyword">UPDATE</span> <span class="token keyword">ANY</span> <span class="token keyword">TABLE</span><span class="token punctuation">,</span> <span class="token keyword">DELETE</span> <span class="token keyword">ANY</span> <span class="token keyword">TABLE</span><span class="token punctuation">,</span> <span class="token keyword">INSERT</span> <span class="token keyword">ANY</span> <span class="token keyword">TABLE</span> <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> <span class="token keyword">CREATE</span> <span class="token keyword">ANY</span> <span class="token keyword">TRIGGER</span> <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span>
<span class="token keyword">GRANT</span> UNLIMITED <span class="token keyword">TABLESPACE</span> <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span>

<span class="token comment">/**** PROFILE ******************************************/</span>

<span class="token keyword">ALTER</span> PROFILE <span class="token keyword">DEFAULT</span> <span class="token keyword">LIMIT</span> PASSWORD_LIFE_TIME  UNLIMITED<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> PROFILE <span class="token keyword">DEFAULT</span> <span class="token keyword">LIMIT</span> PASSWORD_LOCK_TIME  UNLIMITED<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> PROFILE <span class="token keyword">DEFAULT</span> <span class="token keyword">LIMIT</span> PASSWORD_GRACE_TIME UNLIMITED<span class="token punctuation">;</span>

SPOOL <span class="token keyword">OFF</span>
<span class="token keyword">exit</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>3、数据库默认值创建</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>def ORACLE_SID  <span class="token operator">=</span>ORCL        
def ORACLE_BASE <span class="token operator">=</span>C:\ORACLE       
def ORACLE_HOME <span class="token operator">=</span>C:\oracle\product\<span class="token number">12.2</span><span class="token number">.0</span>\dbhome_1       
def DBSMAIN     <span class="token operator">=</span>C:\ORACLE\ORADATA\ORCL           
def DBSSUB      <span class="token operator">=</span>D:\ORACLE\ORADATA\dbssub\ORCL            
def SQL_LOG_DIR <span class="token operator">=</span>C:\daifuku\logs\setup\ORCL       
def BACKUP_HOME <span class="token operator">=</span>D:\ORACLEBACKUP\DATAPUMP       

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>完成之后运行bat文件即可创建名为lcd的schema</p>
</template>
