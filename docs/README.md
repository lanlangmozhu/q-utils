# Q-Utils 文档网站

这是 Q-Utils 项目的文档网站，使用 VitePress 构建。

## 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 生成 API 文档
pnpm run generate-api

# 构建文档
pnpm run build

# 预览构建结果
pnpm run preview
```

## 目录结构

```
docs/
├── .vitepress/          # VitePress 配置
│   ├── config.mjs       # VitePress 配置文件
│   └── theme/           # 主题自定义
├── api/                 # API 文档（由 TypeDoc 生成）
├── guide/               # 使用指南
├── index.md             # 首页
├── package.json         # 文档项目配置
└── typedoc.json         # TypeDoc 配置
```

## 配置说明

- `package.json`: 文档项目的依赖和脚本
- `typedoc.json`: TypeDoc 配置，用于生成 API 文档
- `.vitepress/config.mjs`: VitePress 配置

## 从主项目运行

也可以从项目根目录运行：

```bash
# 从根目录运行（会自动切换到 docs 目录）
pnpm run docs:dev
pnpm run docs:build
pnpm run docs:generate
```
