## 项目简介
大屏管理页面，系统核心页面，用于进行大屏的【新增】、【编辑】、【复制】、【设计】、【预览】等功能，可根据左侧列表将大屏进行分组，分组可通过左下角【新建分组】按钮进行自定义。大屏是一种可视化展示的工具，通过将各种数据和信息以图表、表格、地图等形式进行展示，帮助用户更直观地理解和分析数据。
<img src="/images/swiot/首页.png" width="100%" height="100%" alt="大屏管理" align=center />

## 需求分析
假设我有一份本月商品销售额数据，我想用柱状图展示每类商品的销售额数据，数据如下

    [
        {
            "type": "家具家电",
            "sales": 19
        },
        {
            "type": "粮油副食",
            "sales": 29
        },
        {
            "type": "生鲜水果",
            "sales": 50
        },
        {
            "type": "美容洗护",
            "sales": 30
        },
        {
            "type": "母婴用品",
            "sales": 60
        },
        {
            "type": "进口食品",
            "sales": 28
        },
        {
            "type": "食品饮料",
            "sales": 70
        },
        {
            "type": "家庭清洁",
            "sales": 60
        }
    ]

● type:  表示商品的类型

● sales: 表示商品的销售额，单位：万元

## 数据准备
根据需求，我们先将数据导入到大屏设计器中，点击【数据集管理】，在页面右侧点击【新增】按钮

<img src="/images/swiot/新增数据集.png" width="100%" height="100%" alt="新增数据集" align=center />

在弹出的新增数据集对话框中，输入数据集名称，选择数据集类型为【JSON】，然后点击【上传】按钮，选择刚才准备好的JSON文件，点击【确定】按钮

<img src="/images/swiot/上传数据.png" width="100%" height="100%" alt="上传数据集" align=center />

点击【解析JSON】按钮，在右侧可以看到【输出字段】信息，在下面【数据预览】可以看到JSON数据以表格展示的信息

<img src="/images/swiot/解析JSON.png" width="100%" height="100%" alt="解析JSON" align=center />

点击【输出字段】右侧【配置】按钮，进行输出字段信息配置，type：类型，sales：销售额，点击【确定】按钮

<img src="/images/swiot/配置输出字段.png" width="100%" height="100%" alt="配置输出字段" align=center />

点击【保存】按钮即可完成JSON数据集的录入


## 选择数据
点击【新建大屏】，名称输入:  产品销售额分析，点击【确定】按钮
<img src="/images/swiot/新建大屏.png" width="100%" height="100%" alt="新建大屏" align=center />

## 选择图表
新建成功后即可跳转到大屏设计器页面，在设计器页面点击左侧【图表】Tab页面，在图表中找到【基础柱状图】并将拖拽到中间画布上。
<img src="/images/swiot/基础柱状图.png" width="100%" height="100%" alt="基础柱状图" align=center />

## 选择数据
在画布中的柱状图上右击，点击【配置】按钮，数据来源选择：数据集，数据集选择：本月产品销售额，维度选择：类型，指标选择：销售额，点击【更新】按钮，可以看到画布中的柱状图已经改变了。
<img src="/images/swiot/配置柱状图.png" width="100%" height="100%" alt="配置柱状图" align=center />

## 预览大屏
点击右上角【保存】按钮，保存当前大屏，点击右上角【预览】按钮，可以看到当前大屏的预览效果。
<img src="/images/swiot/预览大屏.png" width="100%" height="100%" alt="预览大屏" align=center />

**注意：**

根据 [G2Plot 官网](https://g2plot.antv.vision) 设定，图表的维度和指标需要遵守以下规范：

1. **维度和指标不要选择相同的字段**
2. **指标选择数字类型的字段，否则可能无法正常展示图表**



