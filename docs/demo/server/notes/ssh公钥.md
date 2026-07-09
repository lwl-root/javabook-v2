---
title: Gitee 添加了ssh公钥还是需要账户和密码
---
# Gitee 添加了ssh公钥还是需要账户和密码
 
## Gitee生成密钥
+ 每次提交和拉取需要账户密码，着实烦人。
+ 在设置 > 安全设置 > SSH公钥里面可以输入自己电脑生成的密钥
  + 密钥生成
    + window 在C:\User\当前登录用户名\.ssh 文件夹里面使用命令
    + linux 在 ~\.ssh 文件夹里面使用命令
      + 命令 `ssh-keygen -t rsa`
      + 下面会询问一些信息直接三次回车搞定
      + 生成两个文件,其中`id_rsa.pub` 就是公钥文件，把里面内容粘贴到码云ssh公钥粘贴位置就好，上面名称会自动生成(默认没有中文的话),没自动生成自己写一个就是了

## 小坑
+ 高高兴兴继续git却发现还是需要输入账户和密钥
+ 使用命令
  + git -T git@gitee.com
  + 如果出现
  
    `You've successfully authenticated, but GITEE.COM does not provide shell access.`
  
    说明密钥没问题
  + 那么这个问题便是发生在我们在克隆仓库的时候采用的是https 的链接 
  
    `git clone https://gitee.com/Name/project.git`
  + 解决办法就是使用ssh方式克隆 
  
    `git clone git@gitee.com:Name/project.git`
  + 对于已经克隆的仓库修改 .git/config 文件中 
  
    `url=https://gitee.com/Name/project.git 为 url=git@gitee.com:Name/project.git`
