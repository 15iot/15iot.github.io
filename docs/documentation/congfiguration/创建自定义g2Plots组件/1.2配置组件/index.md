
# 1.2. 配置散点图.js
## 1.2.1. 基本配置格式
散点图.js的内容包括散点图的图表配置和右侧设置面板的配置项。
下面是一个g2plot组件的基本配置，其中option为图表配置，setting为右侧面板设置项。
```javascript
// file: 散点图.js

// 配置版本号
const version = ''
// 分类
const category = ''
// 标题
const title = ''
// 类别，与g2plot官网上的图表的类型保持一致
const chartType = ''
// 用于标识，唯一，和文件夹名称一致
const name = ''

// 右侧配置项
const setting = []

// 模拟数据
const data = []
// 配置处理脚本
const optionHandler = ''
// 数据处理脚本
const dataHandler = ''

// 图表配置 new Line('domName', option)
const option = {}
// 导出内容
export default {
  version,
  category,
  title,
  chartType,
  name,
  option,
  setting,
  dataHandler,
  optionHandler
}
```
## 1.2.2.  version
version是当前配置项的版本号，如果修改了散点图.js里面的配置项内容，希望能同步到之前旧的图表中，只需修改当前版本号，版本号格式建议以日期为主，这样方便代码追溯，比如：'2023071301'。
## 1.2.3. category
分类字段，主要用于区分是哪一类图表，可与chartType字段相同（下方有说明），比如可设置为：'Scatter'。
## 1.2.4. title
标题，用于左侧图表组件的标题展示和右侧设置面板的标题展示,比如设置为：'散点图'。
<blockquote style="border-left: 8px solid #42b983; background-color: #f9f9f9; padding: 10px; color: #666;">
    <h4>注意事项</h4>
    <p>title的内容必须跟logos文件夹内的图片文件名保持一致</p>
</blockquote>

## 1.2.5. chartType
chartType是在渲染图表时所需要的，必须与g2plot官网上的图表的类型保持一致，g2plot官网散点图示例中给出：import { Scatter } from '@antv/g2plot';，其中Scatter便是我们所设置的chartType的值。
## 1.2.6. name
name是用于图表标识。
<blockquote style="border-left: 8px solid #42b983; background-color: #f9f9f9; padding: 10px; color: #666;">
    <h4>注意事项</h4>
    <p>name的内容为图表的文件名的中文拼音，并且首字母大写，在此案例中为'SanDianTu'</p>
</blockquote>

## 1.2.7. setting
setting中的每一项代表图表的一个属性配置，比如通过g2plot官网散点图示例可以直观地看到散点图的部分属性及其展示效果，如果需要配置更多的属性，可以参考g2plot官网——API——散点图中的说明。
## 1.2.7.1. 配置项中的属性说明：

<table border="0">
    <tr>
        <th><strong>字段</strong></th>
        <th><strong>描述</strong></th>
        <th><strong>可选值</strong></th>
        <th><strong>备注</strong></th>
    </tr>
    <tr>
        <td>label</td>
        <td>配置项的描述</td>
        <td></td>
        <td>如：维度</td>
    </tr>
    <tr>
        <td>type</td>
        <td>配置项的组件类型</td>
        <td>参考1.2.7.2中type的可选值</td>
        <td>如：input，表示该配置项为输入框</td>
    </tr>
    <tr>
        <td>field</td>
        <td>字段</td>
        <td></td>
        <td>该字段与optionField字段对应。若optionField为多个层级时，需要将"."替换为"_"，如：pointStyle_fillOpacity</td>
    </tr>
    <tr>
        <td>optionField</td>
        <td>字段</td>
        <td></td>
        <td>对应图表的option中的字段，如：pointStyle.fillOpacity</td>
    </tr>
    <tr>
        <td>multiple</td>
        <td>是否多选</td>
        <td></td>
        <td>当type为select时，决定当前下拉选择是否允许多选</td>
    </tr>
    <tr>
        <td>value</td>
        <td>配置项的值</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>tabName</td>
        <td>配置类别</td>
        <td>data：数据配置，custom：样式配置</td>
        <td>决定当前配置是属于数据配置还是样式配置</td>
    </tr>
    <tr>
        <td>groupName</td>
        <td>样式配置中的类别</td>
        <td>参考1.2.7.3中groupName的可选值</td>
        <td>如：legend，表示该配置属于图例中的配置</td>
    </tr>
</table>



<blockquote style="border-left: 8px solid #42b983; background-color: #f9f9f9; padding: 10px; color: #666;">
    <h4>注意事项</h4>
    <p>关于维度和指标的配置，需要结合g2plot官网散点图示例来配置，比如图表的数据是由option中的xField、yField决定（基础柱状图），则需要配置维度和指标两个字段。散点图的数据需要xField、yField、colorField三个属性，那么就需要配置维度、指标、颜色分组字段，如下所示：</p>
</blockquote>

```javascript
{
  label: '维度',
  type: 'select', // 设置组件类型
  field: 'size', // 字段
  optionField: 'size', // 对应options中的字段
  // 是否多选
  multiple: false,
  value: '',
  tabName: 'data'
},
{
  label: '指标',
  type: 'select', // 设置组件类型
  field: 'sets', // 字段
  optionField: 'sets', // 对应options中的字段
  // 是否多选
  multiple: false,
  value: '',
  tabName: 'data'
},
{
  label: '颜色分组',
  type: 'select', // 设置组件类型
  field: 'colorField', // 字段
  optionField: 'colorField', // 对应options中的字段
  // 是否多选
  multiple: false,
  value: '',
  tabName: 'data'
}
```

<table>
  <tr>
    <th>type</th>
    <th>对应的组件</th>
    <th>备注</th>
  </tr>
  <tr>
    <td>input</td>
    <td>el - input</td>
    <td></td>
  </tr>
  <tr>
    <td>select</td>
    <td>el - select</td>
    <td>select的选项可以通过在配置项中定义一个option来实现</td>
  </tr>
  <tr>
    <td>colorPicker</td>
    <td>el - color - picker</td>
    <td></td>
  </tr>
  <tr>
    <td>inputNumber</td>
    <td>el - input - number</td>
    <td></td>
  </tr>
  <tr>
    <td>radio</td>
    <td>el - radio - group</td>
    <td></td>
  </tr>
  <tr>
    <td>switch</td>
    <td>el - switch</td>
    <td>active、inactive对应组件中的active - value、inactive - value</td>
  </tr>
  <tr>
    <td>slider</td>
    <td>el - slider</td>
    <td></td>
  </tr>
  <tr>
    <td>colorSelect</td>
    <td>封装的多颜色选择组件</td>
    <td><img src="/images/swiot/散点图配置1.png" width="100%" height="100%" alt="预览大屏" align=center /></td>
  </tr>
  <tr>
    <td>gradual</td>
    <td>封装的渐变色选择组件</td>
    <td><img src="/images/swiot/散点图配置2.png" width="100%" height="100%" alt="预览大屏" align=center /></td>
  </tr>
  <tr>
    <td>padding</td>
    <td>封装的图表边距设置组件</td>
    <td><img src="/images/swiot/散点图配置3.png" width="100%" height="100%" alt="预览大屏" align=center /></td>
  </tr>
</table>

按照上面的配置说明，我们可以给散点图透明度pointStyle.fillOpacity属性添加如下配置：
```javascript
  {
    label: '透明度',
    type: 'inputNumber', // 设置组件类型
    field: 'pointStyle_fillOpacity', // 字段
    optionField: 'pointStyle.fillOpacity', // 对应options中的字段
    value: 0.8,
    tabName: 'custom',
    groupName: 'graph'
  }
```

<blockquote style="border-left: 8px solid #42b983; background-color: #f9f9f9; padding: 10px; color: #666;">
    <h4>注意事项</h4>
    <p>如果当前配置项的组件类型不满足业务需求，可以按照上面给出的格式添加配置项，定义好配置项的type，并在大屏设计器的源码中找到packages/BigScreenDesign/RightSetting/G2CustomSetting.vue文件，在对应位置添加配置。比如同样是switch，但是某些绑定的是布尔值，某些是数值，这个时候我们可以添加一个active、inactive字段，在G2CustomSetting.vue文件内具体实现时，传入这两个字段，如下所示：</p>
</blockquote>

```html
G2CustomSetting.vue文件
<el-switch
  v-else-if="setting.type === 'switch'"
  v-model="setting.value"
  :active-value="setting.active"
  :inactive-value="setting.inactive"
  />
```
## 1.2.7.3. groupName可选值
<table width="100%" border="0">
  <tr>
    <th>groupName</th>
    <th>对应分类</th>
    <th>备注</th>
  </tr>
  <tr>
    <td>graph</td>
    <td>图表</td>
    <td>
     <img src="/images/swiot/groupName1.png" width="100%" height="100%" alt="预览大屏" align=center />
    </td>
  </tr>
  <tr>
    <td>grid</td>
    <td>网格线</td>
    <td>
     <img src="/images/swiot/groupName2.png" width="100%" height="100%" alt="预览大屏" align=center />
    </td>
  </tr>
  <tr>
    <td>legend</td>
    <td>图例</td>
    <td>
      <img src="/images/swiot/groupName3.png" width="100%" height="100%" alt="预览大屏" align=center />
    </td>
  </tr>
  <tr>
    <td>xAxis</td>
    <td>X轴</td>
    <td>
      <img src="/images/swiot/groupName4.png" width="100%" height="100%" alt="预览大屏" align=center />
    </td>
  </tr>
  <tr>
    <td>yAxis</td>
    <td>Y轴</td>
    <td>
            <img src="/images/swiot/groupName5.png" width="100%" height="100%" alt="预览大屏" align=center />
    </td>
  </tr>
  <tr>
    <td>padding</td>
    <td>边距</td>
    <td>
      <img src="/images/swiot/groupName6.png" width="100%" height="100%" alt="预览大屏" align=center />
    </td>
  </tr>
</table>

<blockquote style="border-left: 8px solid #42b983; background-color: #f9f9f9; padding: 10px; color: #666;">
    <h4>注意事项</h4>
    <p>样式中的标题、位置和基础设置是固定的，其他字段可通过自定义添加。</p>
</blockquote>

## 1.2.8. optionHandler
有些图表的组件可能无法通过一个属性值可以配置，这个时候可以在optionHandler进行处理，比如想给图表添加网格线的虚线设置，由于虚线设置的值是一个数组，不能通过一个值进行设置，则可以设置为：
```javascript
optionHandler = 'option.yAxis.grid.line.style.lineDash = [4,setting.find(settingItem=>settingItem.field === \'yAxis_grid_line_style_lineDash\').value]'
```

## 1.2.9. dataHandler
大部分的图表的数据都是一个对象数组，但是有些图表的数据类型比较特殊，比如迷你折线图，是一个一维数组，里面每一个元素都是一个数字，那么我们可以在dataHandler中进行处理：
```javascript
const dataHandler = '// 取出所有指标的值 \ndata = data.map(item => item[setting.filter(i => i.field === "yField")[0].value])'
```
## 1.2.10. option
option的配置可以参考g2plot官网散点图示例，下面便是官网给出的示例，我们只需复制下面标记的花括号中的内容。
```javascript
import { Scatter } from '@antv/g2plot';

fetch('https://gw.alipayobjects.com/os/antfincdn/aao6XnO5pW/IMDB.json')
  .then((res) => res.json())
  .then((data) => {
    const scatterPlot = new Scatter('container', { // -----复制开始
      appendPadding: 10,
      data,
      xField: 'Revenue (Millions)',
      yField: 'Rating',
      shape: 'circle',
      colorField: 'Genre',
      size: 4,
      yAxis: {
        nice: true,
        line: {
          style: {
            stroke: '#aaa',
          },
        },
      },
      xAxis: {
        min: -100,
        grid: {
          line: {
            style: {
              stroke: '#eee',
            },
          },
        },
        line: {
          style: {
            stroke: '#aaa',
          },
        },
      },
    } // -----复制结束
  	);
    scatterPlot.render();
  });
```
<blockquote style="border-left: 8px solid #42b983; background-color: #f9f9f9; padding: 10px; color: #666;">
    <h4>注意事项</h4>
    <p>1、如果想添加其他配置，可以参考g2plot官网——API——散点图中的说明。</p>
 <p>2、在setting中配置的属性一定要加入到option中，比如在setting中对color进行设置，那么在option中也要加入color。</p>
</blockquote>

下面给出一个完整的散点图.js示例：
```javascript

// 配置版本号
const version = '2024050601'
// 分类
const category = '散点图'
// 标题
const title = '散点图'
// 类别， new Line()
const chartType = 'Scatter'
// 用于标识，唯一，和文件夹名称一致
const name = 'SanDianTu'

// 右侧配置项
const setting = [
  {
    label: '维度',
    type: 'select', // 设置组件类型
    field: 'xField', // 字段
    optionField: 'xField', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: '',
    tabName: 'data'
  },
  {
    label: '指标',
    type: 'select', // 设置组件类型
    field: 'yField', // 字段
    optionField: 'yField', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: '',
    tabName: 'data'
  },
  {
    label: '颜色',
    type: 'select', // 设置组件类型
    field: 'colorField', // 字段
    optionField: 'colorField', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: '',
    tabName: 'data'
  },
  {
    label: '颜色配置',
    // 设置组件类型
    type: 'colorSelect',
    // 字段
    field: 'color',
    // 对应options中的字段
    optionField: 'color',
    value: ['#6b74e4', '#4391f4', '#38bbe5', '#69d6fd', '#36c6a0'],
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '数据点形状',
    type: 'select', // 设置组件类型
    field: 'shape', // 字段
    optionField: 'shape', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: 'circle',
    tabName: 'custom',
    options: [
      {
        label: '无',
        value: false
      },
      {
        label: '空心圆',
        value: 'hollow-circle'
      },
      {
        label: '圆形',
        value: 'circle'
      },
      {
        label: '正方形',
        value: 'square'
      },
      {
        label: '菱形',
        value: 'diamond'
      },
      {
        label: '三角形',
        value: 'triangle'
      },
      {
        label: '六边形',
        value: 'hexagon'
      },
      {
        label: '菱形交叉',
        value: 'bowtie'
      },
      {
        label: '十字形',
        value: 'cross'
      },
      {
        label: 'I形',
        value: 'tick'
      },
      {
        label: '加号',
        value: 'plus'
      },
      {
        label: '连字号',
        value: 'hyphen'
      }
    ],
    groupName: 'graph'
  },
  {
    label: '透明度',
    type: 'inputNumber', // 设置组件类型
    field: 'pointStyle_fillOpacity', // 字段
    optionField: 'pointStyle.fillOpacity', // 对应options中的字段
    value: 0.8,
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '图表边距',
    type: 'padding', // 设置组件类型
    field: 'appendPadding', //
    optionField: 'appendPadding', // 对应options中的字段
    value: [20, 20, 20, 20],
    tabName: 'custom',
    groupName: 'padding'
  }
]

// 模拟数据
const data = [
  {
    Title: 'Guardians of the Galaxy',
    Genre: 'Action',
    'Revenue (Millions)': 333.13,
    Rating: 8.1
  },
  {
    Title: 'Prometheus',
    Genre: 'Adventure',
    'Revenue (Millions)': 126.46,
    Rating: 7
  },
  {
    Title: 'Split',
    Genre: 'Horror',
    'Revenue (Millions)': 138.12,
    Rating: 7.3
  },
  {
    Title: 'Sing',
    Genre: 'Animation',
    'Revenue (Millions)': 270.32,
    Rating: 7.2
  },
  {
    Title: 'Suicide Squad',
    Genre: 'Action',
    'Revenue (Millions)': 325.02,
    Rating: 6.2
  },
  {
    Title: 'The Great Wall',
    Genre: 'Action',
    'Revenue (Millions)': 45.13,
    Rating: 6.1
  },
  {
    Title: 'La La Land',
    Genre: 'Comedy',
    'Revenue (Millions)': 151.06,
    Rating: 8.3
  },
  {
    Title: 'Mindhorn',
    Genre: 'Comedy',
    'Revenue (Millions)': null,
    Rating: 6.4
  },
  {
    Title: 'The Lost City of Z',
    Genre: 'Action',
    'Revenue (Millions)': 8.01,
    Rating: 7.1
  },
  {
    Title: 'Passengers',
    Genre: 'Adventure',
    'Revenue (Millions)': 100.01,
    Rating: 7
  },
  {
    Title: 'Fantastic Beasts and Where to Find Them',
    Genre: 'Adventure',
    'Revenue (Millions)': 234.02,
    Rating: 7.5
  },
  {
    Title: 'Hidden Figures',
    Genre: 'Other',
    'Revenue (Millions)': 169.27,
    Rating: 7.8
  },
  {
    Title: 'Rogue One',
    Genre: 'Action',
    'Revenue (Millions)': 532.17,
    Rating: 7.9
  },
  {
    Title: 'Moana',
    Genre: 'Animation',
    'Revenue (Millions)': 248.75,
    Rating: 7.7
  },
  {
    Title: 'Colossal',
    Genre: 'Action',
    'Revenue (Millions)': 2.87,
    Rating: 6.4
  },
  {
    Title: 'The Secret Life of Pets',
    Genre: 'Animation',
    'Revenue (Millions)': 368.31,
    Rating: 6.6
  },
  {
    Title: 'Hacksaw Ridge',
    Genre: 'Other',
    'Revenue (Millions)': 67.12,
    Rating: 8.2
  },
  {
    Title: 'Jason Bourne',
    Genre: 'Action',
    'Revenue (Millions)': 162.16,
    Rating: 6.7
  },
  {
    Title: 'Lion',
    Genre: 'Other',
    'Revenue (Millions)': 51.69,
    Rating: 8.1
  },
  {
    Title: 'Gold',
    Genre: 'Adventure',
    'Revenue (Millions)': 7.22,
    Rating: 6.7
  }
]
// 配置处理脚本
const optionHandler = ''

// 数据处理脚本
const dataHandler = ''

// 图表配置 new Line('domName', option)
const option = {
  appendPadding: 10,
  data,
  xField: 'Revenue (Millions)',
  yField: 'Rating',
  colorField: 'Genre',
  shape: 'diamond',
  pointStyle: {
    fillOpacity: 0.8
  },
  color: ['#6b74e4', '#4391f4', '#38bbe5', '#69d6fd', '#36c6a0'],
  size: 4,
  yAxis: {
    nice: true,
    line: {
      style: {
        stroke: '#aaa'
      }
    }
  },
  xAxis: {
    min: -100,
    grid: {
      line: {
        style: {
          stroke: '#eee'
        }
      }
    },
    line: {
      style: {
        stroke: '#aaa'
      }
    }
  }
}
export default {
  version,
  category,
  title,
  chartType,
  name,
  option,
  setting,
  optionHandler,
  dataHandler
}
```
