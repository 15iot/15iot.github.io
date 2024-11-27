# 环境部署

## 准备工作



```java
JDK >= 1.8 (推荐 1.8 版本)
Mysql >= 5.7.0 (推荐 5.7 版本)
Redis >= 3.0
Maven >= 3.0
Node >= 14
```
<blockquote style="border-left: 8px solid #42b983; background-color: #f9f9f9; padding: 10px; color: #666;">
    <h4>注意事项</h4>
    <p>前端安装完node后，最好设置下淘宝的镜像源，不建议使用cnpm（可能会出现奇怪的问题）</p>
</blockquote>

## 运行系统
前往Gitee下载页面 [Siwu-IoT-Views](https://gitee.com/jonehoo/Siwu-IoT-Views) 下载解压到工作目录


## 后端运行

- 1. 导入到 IntelliJ IDEA，菜单 File -> New -> Project from Existing Sources，然后选择 Maven 项目，点击 Next 按钮，选择工作目录，然后点击 Finish 按钮，即可成功导入。 IntelliJ IDEA 会自动加载 Maven 依赖包，初次加载可能会比较慢（根据自身网络情况而定）。<br/>
### 详细步骤：
  1. 在 IntelliJ IDEA 中，选择菜单栏的 File -> New -> Project from Existing Sources。
  2. 选择你的 Maven 项目的根目录。
  3. 选择 Import project from external model 选项，然后选择 Maven。
  4. 按照提示进行后续配置，通常 IDEA 会自动识别并设置好 Maven 环境。
  5. 点击 Finish 完成导入。
  6. IntelliJ IDEA 会自动开始加载 Maven 依赖，初次加载可能会因为下载依赖包而稍慢一些，取决于网络速度。
  7. 创建数据库siwu_iot_2并导入数据脚本siwu_iot_2.sql
  8. 打开项目运行com.swiot.SiWuApplication.java，出现如下图表示启动成功。

    "(♥◠‿◠)ﾉﾞ  application is running in http://localhost:8080   ლ(´ڡ`ლ)ﾞ"


<blockquote style="border-left: 8px solid #42b983; background-color: #f9f9f9; padding: 10px; color: #666;">
    <h4>注意事项</h4>
    <p>后端运行成功可以通过(http://localhost:8080 (opens new window))访问，但是不会出现静态页面，可以继续参考下面步骤部署frontend前端，然后通过前端地址来访问。</p>
</blockquote>

## 前端运行
```sh
# 进入项目目录
cd frontend

# 安装依赖
npm install

# 强烈建议不要用直接使用 cnpm 安装，会有各种诡异的 bug，可以通过重新指定 registry 来解决 npm 安装速度慢的问题。
npm install --registry=https://registry.npmmirror.com

# 本地开发 启动项目
npm run dev
```

4、打开浏览器，输入：(http://localhost:80 (opens new window)) 默认账户/密码 admin/admin123）
若能正确展示登录页面，并能成功登录，菜单及页面展示正常，则表明环境搭建成功

建议使用Git克隆，因为克隆的方式可以和项目随时保持更新同步。使用Git命令克隆
```sh
git clone https://gitee.com/jonehoo/Siwu-IoT-Views.git
```
<blockquote style="border-left: 8px solid #42b983; background-color: #f9f9f9; padding: 10px; color: #666;">
    <h4>注意事项</h4>
    <p>因为本项目是前后端完全分离的，所以需要前后端都单独启动好，才能进行访问。
前端安装完node后，最好设置下淘宝的镜像源，不建议使用cnpm（可能会出现奇怪的问题）</p>
</blockquote>

## 必要配置
- 修改数据库连接，编辑resources目录下的application-dev.yml
````yaml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/siwu_iot_2?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=UTC
    username: root
    password: 123456
````
- 修改服务器配置，编辑resources目录下的application.yml
````yaml
# 开发环境配置
server:
  # 服务器的HTTP端口，默认为80
  port: 端口
  servlet:
    # 应用的访问路径
    context-path: /应用路径
````
## 部署系统
- 打包工程文件
点击idea的maven项目，点击右上角的Maven Projects，点击Lifecycle，点击clean，点击package，等待打包完成。然后会在项目下生成target文件夹包含war或jar
<blockquote style="border-left: 8px solid #42b983; background-color: #f9f9f9; padding: 10px; color: #666;">
    <h4>注意事项</h4>
    <p>多模块版本会生成在swiot-admin模块下target文件夹</p>
</blockquote>

## 后端部署
- 上传jar包到服务器
将jar包上传到服务器的指定目录，如/opt/swiot/

- 配置启动脚本
编辑/etc/init.d/swiot，内容如下：
```sh
#!/bin/bash

    # chkconfig: 345 99 99
    # description: swiot

    # Source function library.
    . /etc/rc.d/init.d/functions

    # 启动脚本
    start() {
        echo "Starting swiot..."
        cd /opt/swiot
        nohup java -jar swiot-admin.jar > /dev/null 2>&1 &
        echo "swiot started!"
    }

    # 停止脚本
    stop() {
        echo "Stopping swiot..."
        pid=$(ps -ef | grep java | grep swiot-admin.jar | awk '{print $2}')
        kill -9 $pid
        echo "swiot stopped!"
    }

    # 重启脚本
    restart() {
        stop
        start
    }

    # 状态检查脚本
    status() {
        pid=$(ps -ef | grep java | grep swiot-admin.jar | awk '{print $2}')
        if [ -n "$pid" ]; then
            echo "swiot is running, pid is $pid"
        else
            echo "swiot is stopped"
        fi
    }    

    # 调用相应的函数
    case "$1" in
        start)
            start
            ;;
        stop)
            stop
            ;;
        restart)
            restart
            ;;
        status)
            status
            ;;
        *)
            echo "Usage: $0 {start|stop|restart|status}"
            exit 1
            ;;
    esac
    exit 0
```

- 设置权限
```sh
chmod +x /etc/init.d/swiot
```

- 启动服务
```sh
service swiot start
```

- 查看服务状态
```sh
service swiot status
```

## 前端部署
- 上传前端文件到服务器
将前端文件上传到服务器的指定目录，如/opt/swiot/

- 配置nginx
编辑nginx.conf文件，内容如下：
```sh
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;
        server_name  localhost;
		charset utf-8;

		location / {
            root   /home/ruoyi/projects/ruoyi-ui;
			try_files $uri $uri/ /index.html;
            index  index.html index.htm;
        }
		
		location /prod-api/ {
			proxy_set_header Host $http_host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header REMOTE-HOST $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_pass http://localhost:8080/;
		}

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```

- 启动nginx
```sh
nginx -c /opt/swiot/nginx.conf
```

- 访问系统
浏览器输入(http://服务器ip (opens new window))，若能正确展示登录页面，并能成功登录，菜单及页面展示正常，则表明环境搭建成功