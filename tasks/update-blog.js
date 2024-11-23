const fs = require('fs')
const path = require('path')

// 动态加载 ES Module
async function loadConfig (configPath) {
  const configUrl = pathToFileURL(configPath).href // 转换为 file:// URL
  const configModule = await import(configUrl)
  return configModule.default
}

// 引入 `pathToFileURL` 工具
const { pathToFileURL } = require('url')

// 更新 sidebar 的内容
async function updateSidebar (files, configPath) {
  const config = await loadConfig(configPath)

  const newSidebarItems = files.map(file => ({
    text: extractFirstH2Title(file), // 提取 H2 标题
    link: `/blog/${path.basename(file)}` // 生成相对路径
  }))

  if (config.themeConfig.sidebar['/blog/']) {
    config.themeConfig.sidebar['/blog/'].items = newSidebarItems
    console.log('sidebar 更新完成:', newSidebarItems)

    // 写回文件
    const updatedConfigContent = `export default ${JSON.stringify(
      config,
      null,
      2
    )};\n`
    fs.writeFileSync(configPath, updatedConfigContent, 'utf-8') // 覆写原文件
    console.log('config.js 更新完成')
  } else {
    console.log('未找到 /blog/ 的 sidebar 配置')
  }
}

// 提取 H2 标题
function extractFirstH2Title (filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const match = content.match(/^##\s+(.+)/m) // 匹配第一个 H2 标题
  return match ? match[1] : '无标题'
}

// 主函数
async function main () {
  const blogDir = path.resolve(__dirname, '../docs/blog')
  const configPath = path.resolve(__dirname, '../docs/.vitepress/config.js')

  const files = fs
    .readdirSync(blogDir)
    .filter(file => file.endsWith('.md') && file !== 'index.md')
    .map(file => path.resolve(blogDir, file))

  await updateSidebar(files, configPath)
}

main().catch(err => {
  console.error('执行失败:', err)
})
