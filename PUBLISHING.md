# 发布指南

本文档介绍了如何将 qh5-utils 工具库发布到 npm。

## 准备工作

1. 确保你有一个 npm 账号，如果没有，请先注册：https://www.npmjs.com/signup
2. 在本地登录 npm 账号：
   ```bash
   npm login
   ```
3. 确保本地已经安装了所有依赖：
   ```bash
   pnpm install
   ```

## 版本管理

我们使用语义化版本（[Semantic Versioning](https://semver.org/lang/zh-CN/)）来管理版本号：

- **主版本号**：当你做了不兼容的 API 修改时增加
- **次版本号**：当你做了向下兼容的功能性新增时增加
- **修订号**：当你做了向下兼容的问题修正时增加

使用 npm 命令更新版本号：

```bash
# 补丁版本，例如 1.0.0 -> 1.0.1
npm version patch

# 次版本，例如 1.0.0 -> 1.1.0
npm version minor

# 主版本，例如 1.0.0 -> 2.0.0
npm version major
```

## 构建与测试

在发布之前，确保执行构建和测试：

```bash
# 运行单元测试
pnpm test

# 构建库
pnpm build
```

## 本地发布流程

在正式发布到 npm 之前，建议先在本地进行测试发布。

### 1. 打包测试

```bash
# 清理之前的构建文件
rm -rf dist

# 运行测试
pnpm test

# 构建库
pnpm build

# 检查构建输出
ls -la dist/
```

### 2. 本地链接测试

使用 `pnpm link` 在本地创建软链接进行测试：

```bash
# 在 qh5-utils 项目目录下
pnpm link --global

# 在测试项目目录下
pnpm link --global qh5-utils
```

### 3. 创建测试项目

```bash
# 创建测试目录
mkdir qh5-utils-test
cd qh5-utils-test

# 初始化项目
pnpm init
pnpm install typescript --save-dev

# 创建测试文件
echo 'import { string } from "qh5-utils";
console.log(string.capitalize("hello"));' > test.ts
```

### 4. 验证功能

```bash
# 编译并运行测试文件
pnpm tsc test.ts
node test.js
```

### 5. 解除链接

测试完成后，记得解除链接：

```bash
# 在测试项目目录下
pnpm unlink qh5-utils

# 在 qh5-utils 项目目录下
pnpm unlink --global
```

### 6. 预发布检查清单

- [ ] 所有测试用例通过
- [ ] 构建输出文件正确
- [ ] 类型定义文件生成正确
- [ ] 本地链接测试通过
- [ ] package.json 版本号已更新
- [ ] CHANGELOG.md 已更新
- [ ] README.md 文档已更新

## 发布到 npm

确保所有测试通过且构建成功后，执行以下命令发布到 npm：

```bash
# 发布
npm publish
```

如果是第一次发布，或者要发布公共包，使用：

```bash
npm publish --access public
```

## 发布到私有 npm 仓库

如果需要发布到公司内部的私有 npm 仓库，可以通过以下方式：

1. 配置 npm 仓库地址：
   
   在项目根目录创建或编辑 `.npmrc` 文件：
   ```
   registry=https://your-private-registry.com/
   ```

2. 然后正常发布：
   ```bash
   npm publish
   ```

## 发布标签（Tag）

可以使用标签来发布预发布版本：

```bash
# 发布 beta 版本
npm publish --tag beta

# 发布 alpha 版本
npm publish --tag alpha
```

用户可以通过指定标签来安装特定版本：

```bash
npm install qh5-utils@beta
```

## 发布后的验证

发布成功后，可以通过以下方式验证包是否可用：

1. 在临时目录中创建一个新项目
2. 安装刚发布的包：
   ```bash
   npm install qh5-utils
   ```
3. 尝试导入并使用包中的功能

## 撤销发布

如果发现发布的版本有严重问题，可以在发布后的24小时内撤销：

```bash
npm unpublish qh5-utils@1.0.0
```

注意：npm 不鼓励撤销已发布的包，因为这可能会破坏依赖链。一般情况下，应该发布新版本来修复问题。 