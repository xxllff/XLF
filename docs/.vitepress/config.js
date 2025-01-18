export default {
  "title": "晨光红茶的博客",
  "description": "徐龙飞来写博客的地方",
  "base": "/XLF/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/portfolio.ico"
      }
    ]
  ],
  "themeConfig": {
    "nav": [
      {
        "text": "导航",
        "items": [
          {
            "text": "cv",
            "link": "/cv/cv.md"
          },
          {
            "text": "blog",
            "link": "/blog/"
          },
          {
            "text": "publications",
            "link": "/publications/"
          }
        ]
      },
      {
        "text": "关于",
        "link": "/about/experience.md"
      }
    ],
    "docFooter": {
      "prev": "上一篇",
      "next": "下一篇"
    },
    "sidebar": {
      "/blog/": {
        "text": "blog",
        "items": [
          {
            "text": "双面渲染问题",
            "link": "/blog/2024-03-25-blog-post-1.md"
          },
          {
            "text": "Bootstrap 自助采样",
            "link": "/blog/2024-03-27-blog-post-1.md"
          },
          {
            "text": "Diffusion学习心得",
            "link": "/blog/2024-03-27-blog-post-2.md"
          },
          {
            "text": "pytorch中nn.Embedding原理及使用",
            "link": "/blog/2024-04-02-blog-post-1.md"
          },
          {
            "text": "Git同步问题",
            "link": "/blog/2024-09-24-blog-post-1.md"
          },
          {
            "text": "阅读笔记：Discovering Conceptual Knowledge with Analytic Ontology Templates for Articulated Objects",
            "link": "/blog/2024-11-12-blog-post-1.md"
          },
          {
            "text": "阅读笔记：ConceptFactory: Facilitate 3D Object Knowledge Annotation with Object Conceptualization",
            "link": "/blog/2024-11-13-blog-post-1.md"
          },
          {
            "text": "在别人的repo中上传自己的branch",
            "link": "/blog/2024-11-23-blog-post-1.md"
          },
          {
            "text": "Navigation 专题 —— Intelligent mobile robot navigation in unknown and complex environment using reinforcement learning technique",
            "link": "/blog/2025-01-18-blog-post-1.md"
          }
        ]
      },
      "/publications/": {
        "text": "publications",
        "items": [
          {
            "text": "CVPR 2024",
            "link": "/publications/2024-02-17-paper-title-number-4.md"
          },
          {
            "text": "NeurlIPS 2024",
            "link": "https://apeirony.github.io/ConceptFactory/"
          }
        ]
      }
    }
  }
};
