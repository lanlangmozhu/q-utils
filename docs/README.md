# 文档网站

这是 Q-Utils 的 VitePress 文档网站。

## 目录结构

```
docs/
├── .vitepress/          # VitePress 配置
│   ├── config.ts        # 主配置文件
│   └── theme/           # 主题自定义
├── guide/               # 使用指南
├── api/                 # API 文档（由 TypeDoc 自动生成）
└── index.md             # 首页
```

## 开发

```bash
# 启动开发服务器
pnpm docs:dev

# 生成 API 文档
pnpm docs:generate

# 构建文档
pnpm docs:build

# 预览构建结果
pnpm docs:preview
```

## 部署

文档通过 GitHub Actions 自动部署到 GitHub Pages。

