
# 1.3 注册自定义组件配置
在main.js中
```javascript
// file: main.js
import { registerConfig as registerConfigDataRoom } from '@gcpaas/data-room-ui'
// 这个是新增的
import customPlots from '@/customPlots/exports'

registerConfigDataRoom({
  // 这个是新增的
  customPlots
}, router)
```
