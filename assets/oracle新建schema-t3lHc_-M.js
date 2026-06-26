import{i as e,r as t,s as n,t as r}from"./app-BqBvIiBt.js";var i=JSON.parse(`{"path":"/demo/databases/notes/oracle%E6%96%B0%E5%BB%BAschema.html","title":"oracle数据库新建schema","lang":"zh-CN","frontmatter":{},"git":{"contributors":[{"name":"lwl-root","username":"lwl-root","email":"80236507+lwl-root@users.noreply.github.com","commits":1,"url":"https://github.com/lwl-root"}],"changelog":[{"hash":"065b4fca7a7ae8d65cdbc7ac125c3403d9df103c","time":1782461798000,"email":"80236507+lwl-root@users.noreply.github.com","author":"卢文龙","message":"Update deploy.yml"}]},"filePathRelative":"demo/databases/notes/oracle新建schema.md"}`),a={name:`oracle新建schema.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="oracle数据库新建schema" tabindex="-1"><a class="header-anchor" href="#oracle数据库新建schema"><span>oracle数据库新建schema</span></a></h1><div class="hint-container tip"><p class="hint-container-title">schema简介</p><p>在oracle中，schema是数据库对象的集合；一个oracle用户对应一个schema，并且只能通过创建用户的方法创建schema，可以将schema称为user的别名，也就是schema名字同user名字对应并且相同。</p></div><h2 id="schema简介" tabindex="-1"><a class="header-anchor" href="#schema简介"><span>schema简介</span></a></h2><p><strong>官方文档：</strong></p><blockquote><p>A schema is a collection of database objects (used by a user.).</p><p>Schema是数据库对象的集合（由用户使用）。</p><p>Schema objects are the logical structures that directly refer to the database’s data.</p><p>Schema对象是直接引用数据库数据的逻辑结构。</p><p>A user is a name defined in the database that can connect to and access objects.</p><p>用户是在数据库中定义的可以连接和访问对象的名称。</p><p>Schemas and users help database administrators manage database security.</p><p>Schema和用户帮助数据库管理员管理数据库安全。</p></blockquote><p>在oracle数据库中每个用户都有一个默认的schema，如果我们访问一个表时，没有指明该表属于哪一个schema中的，系统就会自动给我们在表上加上缺省的sheman名。在oracle中一个对象完整的名称应该是<code>schema.object</code>，并不是<code>user.object</code>.</p><p>这就像一个用户有一个缺省的表空间，但是该用户还可以使用其他的表空间，如果我们在创建对象时不指定表空间，则对象存储在缺省表空间中，要想让对象存储在其他表空间中，我们需要在创建对象时指定该对象的表空间。</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre><code class="language-sql"><span class="line"><span class="token keyword">SQL</span><span class="token operator">&gt;</span> Gruant dba <span class="token keyword">to</span> scott</span>
<span class="line"></span>
<span class="line"><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">create</span> <span class="token keyword">table</span> test<span class="token punctuation">(</span>name <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">Table</span> created<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">create</span> <span class="token keyword">table</span> system<span class="token punctuation">.</span>test<span class="token punctuation">(</span>name <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">Table</span> created<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> test <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">&#39;scott&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span>
<span class="line"><span class="token number">1</span> <span class="token keyword">row</span> created<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> system<span class="token punctuation">.</span>test <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">&#39;system&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1</span> <span class="token keyword">row</span> created<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">commit</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">Commit</span> complete<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">SQL</span><span class="token operator">&gt;</span> conn system<span class="token operator">/</span>manager</span>
<span class="line"></span>
<span class="line">Connected<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> test<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">NAME</span>
<span class="line"></span>
<span class="line"><span class="token comment">----------</span></span>
<span class="line"></span>
<span class="line">system</span>
<span class="line"></span>
<span class="line"><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">ALTER</span> <span class="token keyword">SESSION</span> <span class="token keyword">SET</span> CURRENT_SCHEMA <span class="token operator">=</span> scott<span class="token punctuation">;</span> <span class="token comment">--改变用户缺省schema名</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">Session</span> altered<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> test<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">NAME</span>
<span class="line"></span>
<span class="line"><span class="token comment">----------</span></span>
<span class="line"></span>
<span class="line">scott</span>
<span class="line"></span>
<span class="line"><span class="token keyword">SQL</span><span class="token operator">&gt;</span> <span class="token keyword">select</span> owner <span class="token punctuation">,</span>table_name <span class="token keyword">from</span> dba_tables <span class="token keyword">where</span> table_name<span class="token operator">=</span>upper<span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">OWNER TABLE_NAME</span>
<span class="line"></span>
<span class="line"><span class="token comment">------------------------------ ------------------------------</span></span>
<span class="line"></span>
<span class="line">SCOTT TEST</span>
<span class="line"></span>
<span class="line">SYSTEM TEST</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="schema创建" tabindex="-1"><a class="header-anchor" href="#schema创建"><span>schema创建</span></a></h2><p>这里使用sql脚本配合.bat文件创建。</p><h3 id="_1、编写bat文件" tabindex="-1"><a class="header-anchor" href="#_1、编写bat文件"><span>1、编写bat文件</span></a></h3><div class="language-bat line-numbers-mode" data-highlighter="prismjs" data-ext="bat"><pre><code class="language-bat"><span class="line">@REM 如果您没有管理员权限，请使用管理员权限再次执行批处理。</span>
<span class="line">:: @NET SESSION &gt; NUL 2&gt;&amp;1</span>
<span class="line">@IF NOT %ERRORLEVEL% == 0 (</span>
<span class="line"></span>
<span class="line">	REM Use this if you do not need to wait for the batch to finish</span>
<span class="line">	powershell.exe -Command Start-Process &quot;&quot;&quot;%~dp0%~nx0&quot;&quot;&quot; -Verb Runas</span>
<span class="line"></span>
<span class="line">	REM Use this to wait for the batch and its subprocesses to finish</span>
<span class="line">	REM * If you receive the result as an environment variable, you can not get the result unless you execute the parent batch / process with administrator authority.</span>
<span class="line">	REM powershell.exe -Command Start-Process &quot;&quot;&quot;%~dp0%~nx0&quot;&quot;&quot; -Verb Runas -Wait</span>
<span class="line"></span>
<span class="line">	EXIT /B 1</span>
<span class="line">)</span>
<span class="line">@cd /d %~dp0%</span>
<span class="line">@REM 如果您没有管理员权限，请使用管理员权限再次执行批处理。</span>
<span class="line"></span>
<span class="line">@echo on</span>
<span class="line">title Create Database</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">REM ===========================================================================</span>
<span class="line">REM Internal Environmant Values.</span>
<span class="line">REM ===========================================================================</span>
<span class="line">set ORACLE_SID=ORCL</span>
<span class="line">set ORACLE_BASE=C:\\ORACLE</span>
<span class="line">set ORACLE_HOME=C:\\oracle\\product\\12.2.0\\dbhome_1</span>
<span class="line"></span>
<span class="line">REM Add</span>
<span class="line">%ORACLE_HOME%\\bin\\sqlplus system/manager @tablespace.sql</span>
<span class="line"></span>
<span class="line">REM ============================================================================</span>
<span class="line">REM Create User</span>
<span class="line">REM ============================================================================</span>
<span class="line">%ORACLE_HOME%\\bin\\sqlplus system/manager @user.sql</span>
<span class="line"></span>
<span class="line">exit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、编写sql脚本" tabindex="-1"><a class="header-anchor" href="#_2、编写sql脚本"><span>2、编写sql脚本</span></a></h3><p>1、创建表空间</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre><code class="language-sql"><span class="line"><span class="token keyword">set</span> echo <span class="token keyword">on</span></span>
<span class="line"><span class="token variable">@environment_setting.sql</span></span>
<span class="line">SPOOL <span class="token operator">&amp;</span>SQL_LOG_DIR\\<span class="token keyword">tablespace</span><span class="token punctuation">.</span>log</span>
<span class="line"></span>
<span class="line"><span class="token keyword">connect</span> <span class="token operator">/</span> <span class="token keyword">as</span> sysdba</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TABLESPACE</span> LCD DATAFILE <span class="token string">&#39;&amp;DBSMAIN\\LCD_01.DBF&#39;</span> SIZE <span class="token number">250</span>M REUSE</span>
<span class="line">AUTOEXTEND <span class="token keyword">ON</span> <span class="token keyword">NEXT</span> <span class="token number">20</span>M</span>
<span class="line">EXTENT MANAGEMENT <span class="token keyword">LOCAL</span> UNIFORM SIZE <span class="token number">2</span>M</span>
<span class="line">SEGMENT SPACE MANAGEMENT AUTO<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">SPOOL <span class="token keyword">OFF</span></span>
<span class="line"><span class="token keyword">exit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、创建用户</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre><code class="language-sql"><span class="line"><span class="token keyword">set</span> echo <span class="token keyword">on</span></span>
<span class="line"><span class="token variable">@environment_setting.sql</span></span>
<span class="line">SPOOL <span class="token operator">&amp;</span>SQL_LOG_DIR\\<span class="token keyword">user</span><span class="token punctuation">.</span>log</span>
<span class="line"></span>
<span class="line"><span class="token keyword">CONNECT</span> <span class="token operator">/</span> <span class="token keyword">AS</span> SYSDBA<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/** LCD ************************************************/</span></span>
<span class="line"><span class="token keyword">DROP</span> <span class="token keyword">USER</span> LCD <span class="token keyword">CASCADE</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> LCD</span>
<span class="line">  IDENTIFIED <span class="token keyword">BY</span> LCD</span>
<span class="line">  <span class="token keyword">DEFAULT</span> <span class="token keyword">TABLESPACE</span> LCD</span>
<span class="line">  <span class="token keyword">TEMPORARY</span> <span class="token keyword">TABLESPACE</span> <span class="token keyword">TEMP</span></span>
<span class="line">  PROFILE <span class="token keyword">DEFAULT</span></span>
<span class="line">  ACCOUNT <span class="token keyword">UNLOCK</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">ALTER</span> <span class="token keyword">USER</span> LCD <span class="token keyword">DEFAULT</span> ROLE <span class="token keyword">ALL</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">CONNECT</span><span class="token punctuation">,</span> RESOURCE<span class="token punctuation">,</span> <span class="token keyword">SELECT</span> <span class="token keyword">ANY</span> DICTIONARY <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">ALTER</span> <span class="token keyword">SESSION</span><span class="token punctuation">,</span> <span class="token keyword">CREATE</span> <span class="token keyword">SESSION</span><span class="token punctuation">,</span> <span class="token keyword">CREATE</span> SEQUENCE<span class="token punctuation">,</span> <span class="token keyword">CREATE</span> SYNONYM <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> LINK<span class="token punctuation">,</span> <span class="token keyword">CREATE</span> INDEXTYPE<span class="token punctuation">,</span> <span class="token keyword">CREATE</span> <span class="token keyword">PROCEDURE</span><span class="token punctuation">,</span> <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span><span class="token punctuation">,</span> <span class="token keyword">CREATE</span> <span class="token keyword">TYPE</span><span class="token punctuation">,</span> <span class="token keyword">CREATE</span> <span class="token keyword">VIEW</span> <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">EXECUTE</span> <span class="token keyword">ON</span> DBMS_ALERT      <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">EXECUTE</span> <span class="token keyword">ON</span> DBMS_PIPE       <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">EXECUTE</span> <span class="token keyword">ANY</span> <span class="token keyword">PROCEDURE</span>      <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">SELECT</span>  <span class="token keyword">ON</span> DBMS_ALERT_INFO <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">ALTER</span>  SYSTEM              <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">GRANT</span> DEBUG <span class="token keyword">ANY</span> <span class="token keyword">PROCEDURE</span>        <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">GRANT</span> DEBUG <span class="token keyword">CONNECT</span> <span class="token keyword">SESSION</span>      <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">ANALYZE</span> <span class="token keyword">ANY</span> DICTIONARY     <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">ANALYZE</span> <span class="token keyword">ANY</span>                <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">SELECT</span> <span class="token keyword">ANY</span> SEQUENCE <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">SELECT</span> <span class="token keyword">ANY</span> <span class="token keyword">TABLE</span><span class="token punctuation">,</span> <span class="token keyword">UPDATE</span> <span class="token keyword">ANY</span> <span class="token keyword">TABLE</span><span class="token punctuation">,</span> <span class="token keyword">DELETE</span> <span class="token keyword">ANY</span> <span class="token keyword">TABLE</span><span class="token punctuation">,</span> <span class="token keyword">INSERT</span> <span class="token keyword">ANY</span> <span class="token keyword">TABLE</span> <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">GRANT</span> <span class="token keyword">CREATE</span> <span class="token keyword">ANY</span> <span class="token keyword">TRIGGER</span> <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">GRANT</span> UNLIMITED <span class="token keyword">TABLESPACE</span> <span class="token keyword">TO</span> LCD<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**** PROFILE ******************************************/</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">ALTER</span> PROFILE <span class="token keyword">DEFAULT</span> <span class="token keyword">LIMIT</span> PASSWORD_LIFE_TIME  UNLIMITED<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">ALTER</span> PROFILE <span class="token keyword">DEFAULT</span> <span class="token keyword">LIMIT</span> PASSWORD_LOCK_TIME  UNLIMITED<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">ALTER</span> PROFILE <span class="token keyword">DEFAULT</span> <span class="token keyword">LIMIT</span> PASSWORD_GRACE_TIME UNLIMITED<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">SPOOL <span class="token keyword">OFF</span></span>
<span class="line"><span class="token keyword">exit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、数据库默认值创建</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre><code class="language-sql"><span class="line">def ORACLE_SID  <span class="token operator">=</span>ORCL        </span>
<span class="line">def ORACLE_BASE <span class="token operator">=</span>C:\\ORACLE       </span>
<span class="line">def ORACLE_HOME <span class="token operator">=</span>C:\\oracle\\product\\<span class="token number">12.2</span><span class="token number">.0</span>\\dbhome_1       </span>
<span class="line">def DBSMAIN     <span class="token operator">=</span>C:\\ORACLE\\ORADATA\\ORCL           </span>
<span class="line">def DBSSUB      <span class="token operator">=</span>D:\\ORACLE\\ORADATA\\dbssub\\ORCL            </span>
<span class="line">def SQL_LOG_DIR <span class="token operator">=</span>C:\\daifuku\\logs\\setup\\ORCL       </span>
<span class="line">def BACKUP_HOME <span class="token operator">=</span>D:\\ORACLEBACKUP\\DATAPUMP       </span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成之后运行bat文件即可创建名为lcd的schema</p>`,20)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};