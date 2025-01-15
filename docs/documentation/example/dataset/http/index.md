## HTTP 数据集使用教程  
### 需求分析
假设我们有一份通过 HTTP 请求获取到的网站用户行为数据，我们希望用折线图展示不同时间段内用户的活跃数量变化情况。数据格式如下（示例）：  
```json
[
    {
        "timePeriod": "00:00-02:00",
        "activeUsers": 50
    },
    {
        "timePeriod": "02:00-04:00",
        "activeUsers": 30
    },
    {
        "timePeriod": "04:00-06:00",
        "activeUsers": 40
    },
    {
        "timePeriod": "06:00-08:00",
        "activeUsers": 60
    },
    {
        "timePeriod": "08:00-10:00",
        "activeUsers": 80
    },
    {
        "timePeriod": "10:00-12:00",
        "activeUsers": 100
    },
    {
        "timePeriod": "12:00-14:00",
        "activeUsers": 90
    },
    {
        "timePeriod": "14:00-16:00",
        "activeUsers": 70
    }
]
```  
- timePeriod：表示时间段。
- activeUsers：表示该时间段内的活跃用户数量。  

### 数据准备

这里我提供了一个公网接口返回这组模拟数据：  
> https://test.api.jinhuwl.top/user_activity_data  

你可以通过浏览器访问该链接，或者使用其他 HTTP 客户端工具（如 Postman）发送 GET 请求，获取到上述格式的数据。  

### 创建数据集

点击【数据集管理】，在页面右侧点击【新增】按钮。
![创建数据集](https://vip.123pan.cn/1842051082/ymjew503t0m000d5qaveml3ekmkg7299DIYxDqayDIa1Dpx0Dday.png)

在弹出的新增数据集对话框中，输入数据集名称（如 HTTP 用户行为数据），选择数据集类型为【HTTP】，然后点击【确定】按钮。
![新增](https://vip.123pan.cn/1842051082/yk6baz03t0n000d5qav0d987796m0pk3DIYxDqayDIa1Dpx0Dday.png)

### 配置数据集

点击刚才创建的 HTTP 数据集，进入数据集配置页面。

在【数据源】选项卡中，输入数据源地址（如 https://test.api.jinhuwl.top/user_activity_data），点击【测试】按钮，如果测试成功，则会显示数据预览信息。
![配置数据集](https://vip.123pan.cn/1842051082/ymjew503t0l000d5qave6q4akc4tv3g1DIYxDqayDIa1Dpx0Dday.png)




### 创建项目

点击【项目管理】，在页面右侧点击【新增】按钮。

在弹出的新增项目对话框中，输入项目名称（如 HTTP 数据集案例），选择数据集为刚才创建的 HTTP 数据集，然后点击【确定】按钮。
![创建一个项目](https://vip.123pan.cn/1842051082/yk6baz03t0m000d5qauzx4uuoekka686DIYxDqayDIa1Dpx0Dday.png)

### 配置项目
在左侧面板选中选择图表类型为【折线图】。
在【数据】选项卡中，选择数据集为刚才创建的 HTTP 数据集，然后点击【确定】按钮。

![alt text](https://vip.123pan.cn/1842051082/ymjew503t0l000d5qave6q4bgf4tx3k0DIYxDqayDIa1Dpx0Dday.png)

### 预览大屏
![alt text](https://vip.123pan.cn/1842051082/yk6baz03t0l000d5qauzem7vni4xy8ydDIYxDqayDIa1Dpx0Dday.png)


#### 注意：
根据相关可视化工具的设定（类似于 G2Plot 官网 的规范），图表的维度和指标需要遵守以下规范：   

维度和指标不要选择相同的字段
指标选择数字类型的字段，否则可能无法正常展示图表