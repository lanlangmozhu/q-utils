# GitHub Actions 工作流说明

## 工作流列表

### 1. Auto Commit and Push (`auto-commit.yml`)

**功能**：自动提交代码更改并推送到 GitHub

**触发方式**：
- 手动触发（workflow_dispatch）
- 定时触发（每天 UTC 0:00）
- 代码推送时触发（特定文件变更）

**使用方法**：
1. 在 GitHub 仓库页面，点击 "Actions" 标签
2. 选择 "Auto Commit and Push" 工作流
3. 点击 "Run workflow"
4. 填写参数：
   - **提交信息**：提交的 commit message
   - **目标分支**：要推送的分支（默认：develop）
   - **要提交的文件**：空格分隔的文件路径（留空则提交所有更改）

**参数说明**：
- `commit_message`: 提交信息（必填，默认：chore: 自动提交更改）
- `branch`: 目标分支（必填，默认：develop）
- `files`: 要提交的文件（可选，留空则提交所有更改）

### 2. Build and Auto Commit (`build-and-commit.yml`)

**功能**：构建项目、运行测试、生成文档，然后自动提交并推送

**触发方式**：
- 手动触发（workflow_dispatch）
- 代码推送到 develop 分支时自动触发

**使用方法**：
1. 在 GitHub 仓库页面，点击 "Actions" 标签
2. 选择 "Build and Auto Commit" 工作流
3. 点击 "Run workflow"
4. 填写参数：
   - **提交信息**：提交的 commit message
   - **目标分支**：要推送的分支（默认：develop）
   - **跳过构建**：是否跳过构建步骤
   - **跳过测试**：是否跳过测试步骤

**参数说明**：
- `commit_message`: 提交信息（必填，默认：chore: 构建并自动提交）
- `branch`: 目标分支（必填，默认：develop）
- `skip_build`: 跳过构建（可选，默认：false）
- `skip_test`: 跳过测试（可选，默认：false）

**工作流程**：
1. 检出代码
2. 设置 Node.js 环境
3. 安装依赖（pnpm）
4. 运行测试（可选）
5. 代码检查（可选）
6. 构建项目（可选）
7. 生成文档（可选）
8. 提交更改
9. 推送到 GitHub

### 3. Docs Deployment (`docs.yml`)

**功能**：自动部署文档到 GitHub Pages

**触发方式**：
- 推送到 main 分支时自动触发
- 手动触发

## 权限配置

### 必需权限

工作流需要以下权限：
- `contents: write` - 写入仓库内容（提交代码）
- `pull-requests: write` - 创建 Pull Request（如果需要）

### 配置步骤

1. 进入仓库设置：Settings → Actions → General
2. 在 "Workflow permissions" 部分：
   - 选择 "Read and write permissions"
   - 勾选 "Allow GitHub Actions to create and approve pull requests"
3. 保存设置

## 使用示例

### 示例 1：手动提交所有更改

```yaml
触发: workflow_dispatch
提交信息: "chore: 更新文档和配置"
目标分支: "develop"
要提交的文件: (留空)
```

### 示例 2：只提交特定文件

```yaml
触发: workflow_dispatch
提交信息: "docs: 更新 README"
目标分支: "main"
要提交的文件: "README.md CHANGELOG.md"
```

### 示例 3：构建并提交

```yaml
触发: workflow_dispatch
提交信息: "chore: 构建并提交"
目标分支: "develop"
跳过构建: false
跳过测试: false
```

## 注意事项

1. **避免循环触发**：
   - 提交信息中包含 `[skip ci]` 可以避免触发其他工作流
   - 或者在工作流中设置 `paths-ignore` 来排除某些文件

2. **权限问题**：
   - 确保工作流有写入权限
   - 如果使用自定义 token，需要在 Secrets 中配置

3. **分支保护**：
   - 如果分支有保护规则，可能需要管理员权限
   - 或者使用 Personal Access Token (PAT)

4. **文件路径**：
   - 文件路径相对于仓库根目录
   - 使用空格分隔多个文件

## 故障排查

### 问题 1：工作流没有权限提交

**解决方案**：
- 检查仓库设置中的工作流权限
- 确保选择了 "Read and write permissions"

### 问题 2：提交失败

**解决方案**：
- 检查是否有未解决的冲突
- 检查分支保护规则
- 查看工作流日志获取详细错误信息

### 问题 3：循环触发

**解决方案**：
- 在提交信息中添加 `[skip ci]`
- 或者修改工作流的触发条件

## 相关链接

- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [工作流语法](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
- [权限配置](https://docs.github.com/en/actions/security-guides/automatic-token-authentication)
