# 贡献指南

感谢你考虑为 qh5-utils 工具库做出贡献！以下是一些指导方针，希望能帮助你顺利地参与到项目中来。

## 开发环境设置

1. Fork 本仓库
2. 克隆你 fork 的仓库到本地
   ```bash
   git clone https://github.com/你的用户名/qh5-utils.git
   cd qh5-utils
   ```
3. 安装依赖
   ```bash
   pnpm install
   ```
4. 创建新的分支
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 开发规范

### 代码风格

我们使用 ESLint 和 Prettier 来保持代码风格一致。在提交代码前，请确保运行以下命令检查并修复代码样式问题：

```bash
# 检查代码样式
pnpm lint

# 自动修复代码样式
pnpm lint --fix
```

### TypeScript

所有的代码都应该使用 TypeScript 编写，并且提供完整的类型定义。

### 文档

- 为每个函数添加详细的 JSDoc 注释，包括参数说明、返回值和使用示例
- 使用中文编写注释，使文档更加易读

### 单元测试

所有新功能或修复都应该包含对应的单元测试。我们使用 Jest 作为测试框架。

```bash
# 运行所有测试
pnpm test

# 运行特定测试文件
pnpm test -t 文件名

# 监视模式
pnpm test:watch
```

## 提交规范

我们采用[约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/)规范，提交信息应该遵循以下格式：

```
类型(可选的作用域): 描述

[可选的正文]

[可选的脚注]
```

类型可以是：
- `feat`: 新功能
- `fix`: 修复
- `docs`: 文档更新
- `style`: 代码样式修改（不影响代码运行）
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

例如：
```
feat(array): 添加chunk函数

添加了一个新的数组工具函数，用于将数组分割成指定大小的块。

Closes #123
```

## 如何贡献新功能

1. 在适当的分类目录下创建新文件，如字符串相关函数放在 `src/string/` 目录下
2. 实现函数并添加完整的 JSDoc 注释
3. 在相应的 `index.ts` 文件中导出函数
4. 编写单元测试，放在 `test/` 目录对应的子目录中
5. 运行测试，确保所有测试通过
6. 提交代码并创建 Pull Request

## Pull Request 流程

1. 确保你的代码与最新的主分支同步
2. 运行所有测试并确保通过
3. 推送你的分支到 GitHub
   ```bash
   git push origin feature/your-feature-name
   ```
4. 创建一个 Pull Request，提供清晰的描述，说明你的更改内容和目的
5. 等待代码审查和反馈

## 报告问题

如果你发现了问题但没有时间修复，请创建一个 Issue，包含以下内容：

- 问题的简要描述
- 重现步骤
- 期望行为
- 实际行为
- 环境信息（如操作系统、浏览器版本等）
- 相关的截图（如适用）

## 许可证

通过贡献你的代码，你同意将其授权给本项目所使用的 MIT 许可证。 