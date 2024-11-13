const fs = require('fs');
const path = require('path');

// 获取当前日期，格式化为 YYYY-MM-DD
const date = new Date();
const formattedDate = date.toISOString().split('T')[0]; // 格式：YYYY-MM-DD

// 文件夹路径，存放博客文件
const blogFolderPath = path.join('E:', 'NodeJS_Projects', 'my-vitepress-blog', 'docs', 'blog');

// 检查博客文件夹是否存在
if (!fs.existsSync(blogFolderPath)) {
  console.log(`Error: The folder ${blogFolderPath} does not exist.`);
  process.exit(1);
}

// 获取该文件夹下所有的 .md 文件，并筛选出日期为今天的文件
const files = fs.readdirSync(blogFolderPath)
  .filter(file => file.endsWith('.md') && file.startsWith(formattedDate)); // 文件名以当天日期开头

// 计算当天的博客编号（即当天已有的 .md 文件数量）
const postNumber = files.length + 1;  // 当前已有的当天文件数就是下一个编号

// 生成新的文件名，格式为：YYYY-MM-DD-blog-post-X.md
const newFileName = `${formattedDate}-blog-post-${postNumber}.md`;

// 创建新文件的完整路径
const newFilePath = path.join(blogFolderPath, newFileName);

// 文件内容模板
const fileContent = `# Blog Post ${postNumber}\n\nCreated on ${formattedDate}\n\nYour content here...`;

// 创建新文件
fs.writeFile(newFilePath, fileContent, (err) => {
  if (err) {
    console.error('Error creating file:', err);
    return;
  }
  console.log(`New blog post created: ${newFileName}`);
});
