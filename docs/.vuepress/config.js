module.exports = {
  lang: 'zh-CN',
  title: 'Siwu-IoT-View',
  description: '个人Siwu-IoT-View站点',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  //主题配置
  themeConfig: {
    // 相对于public 文件夹下的路径
    logo: '/images/logo.png',
    darkMode: true,
    sidebar: [
      {
        title: '介绍',
        path: '/introduction/',
        collapsable: false,

      },
      {
        title: '文档',
        path: '/documentation/',
        collapsable: false,
        children: [
          {
            title: '快速开始',
            path: '/documentation/quickStart/',
          },
          {
            title: '大屏设计器',
            path: '/documentation/bigScreen/',
          },
          {
            title: '组件库配置',
            path: '/documentation/congfiguration/',
            children: [
              {
                title: '创建自定义g2Plots组件',
                path: '/documentation/congfiguration/创建自定义g2Plots组件/',
                children: [
                  {
                    title: '1.1创建目录',
                    path: '/documentation/congfiguration/创建自定义g2Plots组件/1.1创建目录/',
                  },
                  {
                    title: '1.2配置组件',
                    path: '/documentation/congfiguration/创建自定义g2Plots组件/1.2配置组件/',
                  },
                  {
                    title: '1.3注册自定义组件',
                    path: '/documentation/congfiguration/创建自定义g2Plots组件/1.3注册组件/',
                  },
                  {
                    title: '1.4效果图',
                    path: '/documentation/congfiguration/创建自定义g2Plots组件/1.4效果图/',
                  },
               
        
                ]
              },
             
           
    
            ]
          },
          {
            title: '数据源配置',
            path: '/documentation/dataSource/',
          },
          {
            title: '数据集配置',
            path: '/documentation/dataflow/',
          },
          {
            title: '常用案例',
            path: '/documentation/example/',
            children: [
              {
                title: '数据集使用',
                path: '/documentation/example/dataset/',
                children: [
                  {
                    title: 'HTTP数据集',
                    path: '/documentation/example/dataset/http/',
                  },                 
                ]
              },
            ]
          },

        ]
      },

      {
        title: '关于',
        path: '/about/',
        collapsable: false,

      },
    ],
    nav: [
      { text: '首页', link: '/', icon: 'home' },
      { text: '文档', link: '/introduction/', icon: 'book' },
      { text: '关于', link: '/about/', icon: 'info-circle' },
      { text: '在线体验', link: 'https://sv.jinhuwl.top:5743/', icon: 'info-circle' },
      { text: 'Gitee', link: 'https://gitee.com/jonehoo/Siwu-IoT-Views', icon: 'info-circle' },
    ],
    lastUpdated: '上次更新',
    repo: 'https://github.com/jonehoo/Siwu-IoT-Views',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'docs',
    editLinks: false,
    editLinkText: '帮助我们改善此页面！',
  },
  markdown: {
    lineNumbers: true//代码显示行号
  }

}       