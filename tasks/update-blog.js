const fs = require('fs');
const path = require('path');

// 设置路径
const blogDir = path.resolve(__dirname, '../docs/blog');
const indexFile = path.resolve(blogDir, 'index.md');
const configFile = path.resolve(__dirname, '../docs/.vitepress/config.js');

// 获取 `blog` 目录中的所有 .md 文件
function getMarkdownFiles(dir) {
  return fs.readdirSync(dir)
    .filter(file => file.endsWith('.md') && file !== 'index.md')
    .map(file => path.join(dir, file));
}

// 从文件中提取第一个 H2 标题内容
function extractFirstH2Title(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/^##\s+(.+)/m);  // 匹配 H2 标题
  return match ? match[1] : '无标题';
}

// 更新 index.md 文件
function updateIndexFile(files) {
  const lines = ['# Blog 专题', '', '## 目录', ''];
  files.forEach(file => {
    const title = extractFirstH2Title(file);
    const relativePath = './' + path.basename(file);
    lines.push(`- [${title}](${relativePath})`);
  });
  fs.writeFileSync(indexFile, lines.join('\n'), 'utf-8');
  console.log('index.md 更新完成');
}

// 更新 config.js 中的 sidebar 部分
function updateConfigFile(files) {
  let configContent = fs.readFileSync(configFile, 'utf-8');

  // 生成 sidebar 内容
  const sidebarItems = files.map(file => {
    const title = extractFirstH2Title(file);
    const relativePath = '/blog/' + path.basename(file);
    return `          { text: "${title}", link: "${relativePath}" }`;
  }).join(',\n');

  // 使用正则匹配 sidebar 的 "/blog/" 部分，替换为新的内容
  configContent = configContent.replace(
    /\/blog\/:\s*\{[^}]+\}/,
    `/blog/: {\n        text: "blog",\n        items: [\n${sidebarItems}\n        ]\n      }`
  );

  fs.writeFileSync(configFile, configContent, 'utf-8');
  console.log('config.js 更新完成');
}

// 主函数
function main() {
  const files = getMarkdownFiles(blogDir);
  updateIndexFile(files);
  updateConfigFile(files);
}

// 运行主函数
main();
