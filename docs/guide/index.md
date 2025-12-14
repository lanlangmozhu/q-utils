# 指南

欢迎使用 qh5-utils！本指南将帮助你快速上手。

## 什么是 qh5-utils？

qh5-utils 是一个功能丰富的前端工具函数库，提供了日常开发中常用的各类实用工具函数。它按功能分类组织，支持按需导入，帮助开发者提高开发效率。

## 核心特性

- 🚀 **开箱即用**: 提供丰富的工具函数，覆盖日常开发中的各种场景，无需重复造轮子
- 📦 **按需导入**: 支持命名空间导入和按需导入，支持 Tree Shaking，减小打包体积
- 🔒 **类型安全**: 完整的 TypeScript 类型定义，提供良好的开发体验和类型提示
- ⚡ **零依赖**: 不依赖任何第三方库，保持代码的独立性和可维护性
- 📚 **文档完善**: 详细的 API 文档和使用示例，帮助快速上手
- ✅ **测试覆盖**: 完整的单元测试覆盖，确保代码质量和稳定性

## 功能模块

qh5-utils 提供了以下功能模块：

### 核心模块
- **数组 (Array)**: 数组操作、转换、分组、排序、去重等
- **字符串 (String)**: 字符串处理、格式化、验证、转换等
- **对象 (Object)**: 对象操作、深度克隆、合并、路径操作等
- **数字 (Number)**: 数字处理、格式化、计算、验证等
- **日期 (Date)**: 日期格式化、计算、时区处理、农历转换等

### 函数工具
- **函数 (Function)**: 防抖、节流、柯里化、组合、管道等
- **Promise**: Promise 工具函数、超时处理、重试等

### 浏览器和 DOM
- **浏览器 (Browser)**: 浏览器检测、设备检测、特性检测等
- **DOM**: DOM 操作、事件处理、元素查询等

### 数据处理
- **文件 (File)**: 文件读取、转换、Base64 处理等
- **网络 (Network)**: HTTP 请求、文件下载、URL 处理等
- **存储 (Storage)**: LocalStorage、SessionStorage、Cookie 操作等

### 类型和工具
- **类型检测 (Type)**: 各种类型检测函数
- **空值检测 (Empty)**: 空值检测函数
- **布尔值 (Boolean)**: 布尔值工具函数
- **正则表达式 (RegExp)**: 正则表达式工具
- **错误处理 (Error)**: 错误处理工具
- **Symbol**: Symbol 工具函数
- **BigInt**: BigInt 工具函数

### 其他
- **颜色 (Color)**: 颜色转换、调整等

## 快速开始

### 安装

```bash
# 使用 npm
npm install qh5-utils

# 使用 pnpm
pnpm add qh5-utils

# 使用 yarn
yarn add qh5-utils
```

### 基本使用

```typescript
import { string, array, object } from 'qh5-utils';

// 字符串操作
const capitalized = string.capitalize('hello world');
// 'Hello world'

// 数组操作
const unique = array.unique([1, 2, 2, 3]);
// [1, 2, 3]

// 对象操作
const cloned = object.deepClone({ a: 1, b: { c: 2 } });
// { a: 1, b: { c: 2 } }
```

## 学习路径

### 1. 新手入门
- [快速开始](./getting-started.md) - 了解如何安装和使用 qh5-utils
- [安装指南](./installation.md) - 详细的安装说明和不同环境的使用方式

### 2. 使用方式
- [命名空间导入](./namespace-import.md) - 推荐的使用方式，按模块导入
- [按需导入](./tree-shaking.md) - 支持 Tree Shaking 的导入方式
- [类型支持](./types.md) - TypeScript 类型定义和使用

### 3. 深入学习
- [API 文档](../api/) - 查看完整的 API 文档
- [使用示例](../examples/) - 查看实际使用示例

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 贡献

欢迎贡献代码、报告问题或提出建议！查看 [GitHub 仓库](https://github.com/lanlangmozhu/qh5-utils) 了解更多。

## 许可证

[MIT](https://github.com/lanlangmozhu/qh5-utils/blob/main/LICENSE)

