# 文档网站设置指南

## ✅ 已完成的工作

1. **VitePress 配置**
   - ✅ 创建了 `docs/.vitepress/config.ts` 配置文件
   - ✅ 配置了导航栏、侧边栏、搜索等功能
   - ✅ 创建了自定义主题

2. **文档结构**
   - ✅ 创建了首页 (`docs/index.md`)
   - ✅ 创建了使用指南 (`docs/guide/`)
   - ✅ 创建了 API 文档入口 (`docs/api/index.md`)

3. **TypeDoc 配置**
   - ✅ 创建了 `typedoc.json` 配置文件
   - ✅ 配置了 Markdown 输出格式

4. **GitHub Actions**
   - ✅ 创建了 `.github/workflows/docs.yml` 自动部署工作流

5. **npm 脚本**
   - ✅ 添加了文档相关的 npm 脚本

## 📋 待完成步骤

### 1. 安装依赖

当网络正常时，运行以下命令安装依赖：

```bash
pnpm add -D vitepress typedoc-plugin-markdown
```

### 2. 生成 API 文档

安装依赖后，运行：

```bash
# 生成 API 文档
pnpm docs:generate

# 或者使用脚本
node scripts/generate-api-docs.mjs
```

这会在 `docs/api/` 目录下生成 TypeDoc 生成的 Markdown 格式的 API 文档。

### 3. 本地开发

```bash
# 启动开发服务器
pnpm docs:dev
```

文档将在 `http://localhost:5173` 启动。

### 4. 构建文档

```bash
# 构建文档网站
pnpm docs:build
```

构建结果在 `docs/.vitepress/dist` 目录。

### 5. 配置 GitHub Pages

1. 进入 GitHub 仓库设置
2. 找到 "Pages" 设置
3. 选择 "GitHub Actions" 作为部署源
4. 保存设置

### 6. 部署

推送到 `main` 分支会自动触发 GitHub Actions 工作流，自动构建并部署文档到 GitHub Pages。

## 📁 文件结构

```
docs/
├── .vitepress/              # VitePress 配置
│   ├── config.ts            # 主配置文件
│   └── theme/               # 主题自定义
│       ├── index.ts
│       └── custom.css
├── guide/                   # 使用指南
│   ├── index.md
│   ├── getting-started.md
│   ├── installation.md
│   ├── namespace-import.md
│   ├── tree-shaking.md
│   └── types.md
├── api/                     # API 文档（由 TypeDoc 生成）
│   └── index.md
├── index.md                 # 首页
└── README.md                # 文档说明
```

## 🔧 配置说明

### VitePress 配置

- **base**: `/q-utils/` - GitHub Pages 的基础路径
- **lang**: `zh-CN` - 中文语言
- **search**: 本地搜索功能

### TypeDoc 配置

- **entryPoints**: `src/index.ts` - 入口文件
- **out**: `docs/api` - 输出目录
- **plugin**: `typedoc-plugin-markdown` - Markdown 插件

### GitHub Actions

工作流会在以下情况触发：
- 推送到 `main` 分支
- 手动触发 workflow

## 🚀 使用命令

```bash
# 开发
pnpm docs:dev

# 生成 API 文档
pnpm docs:generate

# 构建
pnpm docs:build

# 预览构建结果
pnpm docs:preview
```

## 📝 注意事项

1. **API 文档生成**: TypeDoc 生成的文档需要手动集成到 VitePress 的侧边栏中
2. **GitHub Pages 路径**: 确保 `base` 配置与仓库名称匹配
3. **依赖安装**: 需要网络正常时才能安装依赖

## 🎉 完成后的效果

- 访问 `https://[username].github.io/q-utils/` 查看在线文档
- 本地开发时访问 `http://localhost:5173`
- 自动从源代码生成 API 文档
- 支持搜索和导航

