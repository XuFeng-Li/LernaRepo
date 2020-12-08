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
  // 创建CXInfo文件夹并cd 到其根目录 
  mkdir CXInfo && $_
  ```
  4.3 创建项目
  ```
    npm init -y
  ```
  4.4 使用相同的操作创建CXUtil
5、添加依赖
    方案一：
  CXInfo 的包 依赖 CXUtil
   修改 CXInfo/package.json
   ```
        //添加如下内容
        "dependencies": {
            "CXUtil":"^1.0.0"
        }
    ```
    然后运行 lerna bootstrap
    方案二
    添加 axios 开源库依赖
    lerna add axios --scope=CXInfo
