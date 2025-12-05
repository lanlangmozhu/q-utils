# 文档网站

这是 Q-Utils 的文档网站，使用 [VitePress](https://vitepress.dev/) 构建。

## 本地开发

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm docs:dev
```

文档将在 `http://localhost:5173` 启动。

### 构建文档

```bash
# 生成 API 文档（从 TypeDoc）
pnpm docs:generate

# 构建文档网站
pnpm docs:build
```

### 预览构建结果

```bash
pnpm docs:preview
```

## 文档结构

```
docs/
├── .vitepress/          # VitePress 配置
│   ├── config.ts        # 配置文件
│   └── theme/           # 主题自定义
├── guide/               # 使用指南
├── api/                 # API 文档（由 TypeDoc 自动生成）
└── index.md             # 首页
```

## 部署

文档通过 GitHub Actions 自动部署到 GitHub Pages。

### 手动部署

1. 生成 API 文档：
   ```bash
   pnpm docs:generate
   ```

2. 构建文档：
   ```bash
   pnpm docs:build
   ```

3. 部署到 GitHub Pages：
   - 推送到 `main` 分支会自动触发部署
   - 或手动触发 GitHub Actions workflow

## 配置说明

### VitePress 配置

配置文件位于 `docs/.vitepress/config.ts`，可以自定义：

- 网站标题和描述
- 导航栏和侧边栏
- 主题配置
- 搜索配置

### TypeDoc 配置

配置文件位于 `typedoc.json`，可以自定义：

- 入口文件
- 输出目录
- 插件配置
- 文档格式

## 贡献

欢迎提交 PR 来改进文档！

