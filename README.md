# MY-BLOG

这是一个使用 VitePress 构建的个人博客项目。

## 项目简介

本项目是一个基于 VitePress 的静态博客网站，旨在分享技术文章和个人见解。

## 目录结构

```py
my-vitepress-blog/
├── docs/                   # 博客内容
│   ├── .vitepress/         # VitePress 配置
│   │   └── config.js       # VitePress 配置文件
│   ├── about/              # 关于页面
│   │   └── cv.md           # 个人简历
│   ├── blog/               # 博客文章
│   │   └── index.md        # 博客目录 
│   ├── publications/       # 发表文章
│   │   └── index.md        # 发表文章目录
│   └── index.md            # 首页
├── .gitignore              # Git 忽略文件
├── .gitlab-ci.yml          # GitLab CI 配置文件
├── package.json            # 项目配置文件
└── README.md               # 项目说明文件
```

## 安装与使用

### 环境要求

- Node.js 18.x

### 安装依赖

```sh
npm install
```

### 本地开发

```sh
npm run dev
```

### 构建项目

```sh
npm run build
```

### 本地预览

```sh
npm run serve
```

### 自动化生成命名新笔记

```bash
Ctrl + Shift + P
run task
```

### 自动化部署到index

```bash
npm run build
```

## 部署

项目使用 GitLab CI 进行自动化部署，配置文件为 .gitlab-ci.yml。
