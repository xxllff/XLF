export default {
  title: "晨光红茶的博客",
  description: "徐龙飞来写博客的地方",
  base: '/XLF/',

  head: [
    ["link", { rel: "icon", href: `/portfolio.ico` }],
  ],

  themeConfig: {
    nav: [
      {
        text: '导航',
        items: [
          { text: "cv", link: "/cv/cv.md" },
          { text: "blog", link: "/blog/" },
          { text: "publications", link: "/publications/" },
        ]
      },
      { text: '关于', link: '/about/experience.md' },
    ],
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    sidebar: {
      "/blog/": {
        text: "blog",
        items: [
          { text: "双面渲染问题", link: "/blog/2024-03-25-blog-post-1.md" },
          { text: "Bootstrap自助采样", link: "/blog/2024-03-27-blog-post-1.md" },
          { text: "diffusion学习笔记", link: "/blog/2024-03-27-blog-post-2.md" },
          { text: "如何在代码层级使用词向量", link: "/blog/2024-04-02-blog-post-1.md" },
          { text: "git到github上出现的问题：本地仓库与远程仓库不同步，但希望在本地保留文件A", link: "/blog/2024-09-24-blog-post-1.md" },
          { text: "阅读笔记：Discovering Conceptual Knowledge with Analytic Ontology Templates for Articulated Objects", link: "/blog/2024-11-12-blog-post-1.md" },
        ],
      },
      "/publications/": {
        text: "publications",
        items: [
          { text: "CVPR 2024", link: "/publications/2024-02-17-paper-title-number-4.md" },
          { text: "NeurlIPS 2024", link: "https://apeirony.github.io/ConceptFactory/" },
        ],
      }
    },
  },
};
