// docs/.vitepress/config.js
export default {
  // 站点级选项
  title: "晨光红茶的博客", // 网站标题
  description: "徐龙飞来写博客的地方", // 网站描述
  themeConfig: {
    nav: [
      {
        text: '导航',
        items: [
          { text: "html", link: "/bigFrontEnd/html/" },
          { text: "css", link: "/bigFrontEnd/css/" },
          { text: "js", link: "/bigFrontEnd/js/" },
        ]
      },
      { text: '关于', link: '/about' },
    ],
    head: [
      // 配置网站的图标（显示在浏览器的 tab 上）
      ["link", { rel: "icon", href: `/public/portfolio.ico` }],
    ],
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    sidebar: {
      "/bigFrontEnd/html/": {
        text: "html",
        items: [
          { text: "html", link: "/bigFrontEnd/html/" },
          { text: "html1", link: "/bigFrontEnd/html/html1" },
          { text: "html2", link: "bigFrontEnd/html/html2" },
        ],
      },
      "/bigFrontEnd/css/": {
        text: "css",
        items: [
          { text: "css1", link: "/bigFrontEnd/css/css1" },
          { text: "css2", link: "/bigFrontEnd/css/css2" },
        ],
      },
      "/bigFrontEnd/js/": {
        text: "js",
        items: [
          { text: "js1", link: "/bigFrontEnd/js/js1" },
          { text: "js2", link: "/bigFrontEnd/js/js2" },
        ],
      },
    },
  },
};

