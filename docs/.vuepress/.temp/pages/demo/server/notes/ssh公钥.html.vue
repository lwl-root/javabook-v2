<template><h1 id="gitee-添加了ssh公钥还是需要账户和密码" tabindex="-1"><a class="header-anchor" href="#gitee-添加了ssh公钥还是需要账户和密码" aria-hidden="true">#</a> Gitee 添加了ssh公钥还是需要账户和密码</h1>
<h2 id="gitee生成密钥" tabindex="-1"><a class="header-anchor" href="#gitee生成密钥" aria-hidden="true">#</a> Gitee生成密钥</h2>
<ul>
<li>每次提交和拉取需要账户密码，着实烦人。</li>
<li>在设置 -&gt; 安全设置 -&gt; SSH公钥里面可以输入自己电脑生成的密钥
<ul>
<li>密钥生成
<ul>
<li>window 在C:\User\当前登录用户名.ssh 文件夹里面使用命令</li>
<li>linux 在 ~.ssh 文件夹里面使用命令
<ul>
<li>命令 <code>ssh-keygen -t rsa</code></li>
<li>下面会询问一些信息直接三次回车搞定</li>
<li>生成两个文件,其中<code>id_rsa.pub</code> 就是公钥文件，把里面内容粘贴到码云ssh公钥粘贴位置就好，上面名称会自动生成(默认没有中文的话),没自动生成自己写一个就是了</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="小坑" tabindex="-1"><a class="header-anchor" href="#小坑" aria-hidden="true">#</a> 小坑</h2>
<ul>
<li>高高兴兴继续git却发现还是需要输入账户和密钥</li>
<li>使用命令
<ul>
<li>
<p>git -T git@gitee.com</p>
</li>
<li>
<p>如果出现</p>
<p><code>You've successfully authenticated, but GITEE.COM does not provide shell access.</code></p>
<p>说明密钥没问题</p>
</li>
<li>
<p>那么这个问题便是发生在我们在克隆仓库的时候采用的是https 的链接</p>
<p><code>git clone https://gitee.com/Name/project.git</code></p>
</li>
<li>
<p>解决办法就是使用ssh方式克隆</p>
<p><code>git clone git@gitee.com:Name/project.git</code></p>
</li>
<li>
<p>对于已经克隆的仓库修改 .git/config 文件中</p>
<p><code>url=https://gitee.com/Name/project.git 为 url=git@gitee.com:Name/project.git</code></p>
</li>
</ul>
</li>
</ul>
</template>
