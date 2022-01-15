module.exports = {
  // 站点配置
  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    // logo: "https://vuejs.org/images/logo.png",
    logo: "/images/logo.png",
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: "Group",
        children: [
          {
            text: "SubGroup",
            children: ["/group/sub/foo.md", "/group/sub/bar.md"],
          },
        ],
      },
      // 控制元素何时被激活
      {
        text: "Group 2",
        children: [
          {
            text: "Always active",
            link: "/",
            // 该元素将一直处于激活状态
            activeMatch: "/",
          },
          {
            text: "Active on /foo/",
            link: "/not-foo/",
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: "^/foo/",
          },
        ],
      },
      // NavbarItem
      {
        text: "About",
        link: "/about",
      },
    ],
    sidebarDepth: 5,
    // sidebar: "auto",
    // 第一个空的代表默认的导航配置, 其实就是auto的 markdown的TOC, 其他是自己要加的比如home,比如about
    sidebar: ["", "about", "about1"],
  },
};
