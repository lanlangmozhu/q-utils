# NPM 发布指南

## 发布前检查清单

### ✅ 已完成
- [x] 所有测试通过（37 个测试套件，477 个测试用例）
- [x] 构建成功（生成所有格式文件）
- [x] 打包预览成功（407.2 kB）
- [x] package.json 配置正确
- [x] .npmignore 配置正确

### 📦 打包内容
- LICENSE (1.1kB)
- README.md (6.4kB)
- dist/index.d.ts (213.8kB)
- dist/index.esm.js (64.6kB)
- dist/index.esm.js.map (400.6kB)
- dist/index.js (64.7kB)
- dist/index.js.map (400.6kB)
- dist/index.umd.js (64.8kB)
- dist/index.umd.js.map (400.6kB)
- package.json (3.3kB)

**总大小**: 407.2 kB (压缩后)
**解压后大小**: 1.6 MB

## 发布步骤

### 1. 登录 npm

```bash
npm login
```

输入你的 npm 用户名、密码和邮箱。

### 2. 检查登录状态

```bash
npm whoami
```

### 3. 检查包名是否可用

```bash
npm view q-utils
```

如果包已存在，需要更新版本号。

### 4. 更新版本号（如果需要）

```bash
# 补丁版本 (1.0.0 -> 1.0.1)
npm version patch

# 次版本 (1.0.0 -> 1.1.0)
npm version minor

# 主版本 (1.0.0 -> 2.0.0)
npm version major
```

### 5. 构建项目

```bash
pnpm build
```

### 6. 运行测试

```bash
pnpm test
```

### 7. 发布到 npm

```bash
npm publish --access public
```

或者使用 pnpm：

```bash
pnpm publish --access public
```

### 8. 验证发布

```bash
npm view q-utils
```

或者访问：https://www.npmjs.com/package/q-utils

## 发布后操作

### 1. 创建 Git Tag

```bash
git tag v1.0.0
git push origin v1.0.0
```

### 2. 更新 CHANGELOG.md

记录本次发布的变更内容。

### 3. 创建 GitHub Release

在 GitHub 上创建 Release，关联对应的 tag。

## 常见问题

### npm registry 500 错误

如果遇到 500 错误：
1. 检查网络连接
2. 等待几分钟后重试
3. 检查 npm registry 状态：https://status.npmjs.org/
4. 尝试使用其他 registry（如淘宝镜像）：
   ```bash
   npm config set registry https://registry.npmmirror.com
   ```

### 包名已被占用

如果包名已被占用：
1. 检查是否可以接管该包
2. 或者使用作用域包：`@your-org/q-utils`
3. 修改 package.json 中的 name 字段

### 发布权限问题

确保：
1. 已登录正确的 npm 账号
2. 包名未被其他人占用
3. 使用 `--access public` 发布公开包

## 当前状态

- **包名**: q-utils
- **版本**: 1.0.0
- **状态**: 已准备好发布
- **测试**: ✅ 全部通过
- **构建**: ✅ 成功
- **打包**: ✅ 预览成功

## 下一步

1. 等待 npm registry 服务恢复（如果遇到 500 错误）
2. 登录 npm：`npm login`
3. 发布：`npm publish --access public`

