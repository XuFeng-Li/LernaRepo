1、在 GitHub 上创建 LernaRepo 的仓库
2、将 远程仓库 clone 到本地
3、cd 到 仓库的根目录，执行 lerna init 初始化工程

remark:
此时项目中包含三个文件：
 packages 文件夹，以后项目都会在这个创建
 lerna.json 配置文件
 package.json 配置文件
 
4、创建项目
  4.1 cd 到package文件夹下
  4.2 创建项目文件并cd到根目录
  ```
  // 创建cxinfo文件夹并cd 到其根目录 
  mkdir cxinfo && $_
  ```
  4.3 创建项目
  ```
    npm init -y
  ```
  4.4 使用相同的操作创建cxutil
5、添加依赖
    方案一：
  cxinfo 的包 依赖 cxutil
   修改 cxinfo/package.json
   ```
        //添加如下内容
        "dependencies": {
            "cxutil":"^1.0.0"
        }
    ```
    然后运行 lerna bootstrap
    方案二
    添加 axios 开源库依赖
    lerna add axios --scope=cxinfo

6、发包 lerna publish

### npm 镜像地址
 查询当前镜像地址
 npm get registry
 修改镜像地址
 npm config set registry ${path}
 原始镜像地址
 https://registry.npmjs.org/
 淘宝镜像地址
 http://registry.npm.taobao.org/


### Question

1、初始创建时，包名中包含大写字符，执行 lerna publish 报错：E400 "" is invalid for new packages，改成小写
字符后发包成功。包名不能包含大写字符？


