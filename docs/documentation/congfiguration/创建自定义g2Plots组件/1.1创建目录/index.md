
# 自定义g2plots组件
当前端插件的内置g2Plots组件不满足用户要求的时候，我们可以根据以下的步骤拓展自定义的g2Plot组件

# 创建目录
比如我想创建散点图这个自定义的组件，在当前项目中的 src 下创建如下目录:<img src="/images/swiot/散点图.png" width="100%" height="100%" alt="预览大屏" align=center />
logos文件夹下是该组件的图片，用于在设计器左侧展示，plots文件夹下是该文件的配置，exports.js是将一个组件中的图片及配置转化为符合大屏设计器g2plot组件配置格式。

## 1.1 logos
该文件夹下存放散点图的图片，添加后可在设计面板的左侧展示。
## 1.2. exports.js
export.js文件内容是固定的，可以直接将下面的代码复制到上面目录示例中的export.js中 。

```javascript
// 遍历 当前文件夹下的所有文件，找到中文.js文件，然后导出
const files = require.context('./plots', true, /[\u4e00-\u9fa5]+.js$/)
const images = require.context('./logos', true, /.png$/)
console.log('images', images)
const customPlots = []

files?.keys()?.forEach(key => {
  console.log(123)
  // ./基础折线.js 取到 "基础折线"
  const title = key.split('/')[1].replace('.js', '')
  const url = './' + title + '.png'
  customPlots.push({
    title,
    ...files(key).default,
    img: images(url)
  })
})

export default customPlots
```
