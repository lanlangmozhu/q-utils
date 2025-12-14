# qh5-utils

一个功能丰富的前端工具函数库，提供了日常开发中常用的各类实用工具函数。采用 TypeScript 开发，拥有完整的类型定义和详细的文档注释。

## ✨ 特性

- 🔍 **全面的功能**：包含字符串、数组、对象、日期、函数等多种常用工具函数
- 🧩 **模块化设计**：按功能分类，可按需引入
- 📦 **轻量级**：无外部依赖，体积小巧（64KB 压缩后）
- 🔒 **类型安全**：使用 TypeScript 开发，提供完整的类型定义
- 📝 **详细文档**：每个函数都有详细的注释和使用示例
- ✅ **单元测试**：使用 Jest 进行完整的单元测试（477 个测试用例）

## 📦 安装

```bash
# 使用 npm
npm install qh5-utils

# 使用 yarn
yarn add qh5-utils

# 使用 pnpm（推荐）
pnpm add qh5-utils
```

## 🚀 快速开始

### 命名空间导入（推荐）

```typescript
import { string, array, func, dom } from 'qh5-utils';

// 字符串操作
string.capitalize('hello'); // 'Hello'
string.camelize('background-color'); // 'backgroundColor'

// 数组操作
array.unique([1, 2, 2, 3]); // [1, 2, 3]
array.flatten([1, [2, 3]]); // [1, 2, 3]

// 函数工具
const debouncedFn = func.debounce(() => console.log('执行'), 300);
const throttledFn = func.throttle(() => console.log('执行'), 300);

// DOM 操作
dom.on(button, 'click', () => console.log('点击'));
```

### 按需导入

```typescript
import { capitalize, unique } from 'qh5-utils/string';
import { unique } from 'qh5-utils/array';

capitalize('hello'); // 'Hello'
unique([1, 2, 2, 3]); // [1, 2, 3]
```

### 解决同名函数问题

某些函数（如 `once`、`isEmpty`）在不同模块中都有实现，使用命名空间方式可以明确区分：

```typescript
import { func, dom, empty, object } from 'qh5-utils';

// 函数模块的 once（确保函数只执行一次）
const init = func.once(() => console.log('初始化'));

// DOM 模块的 once（一次性事件监听）
dom.once(button, 'click', () => console.log('点击'));

// 空值检测模块的 isEmpty（通用检查）
empty.isEmpty(''); // true

// 对象模块的 isEmpty（检查对象是否为空）
object.isEmpty({}); // true
```

## 📚 功能模块

### 核心基础模块

- **array** - 数组操作工具（50+ 函数）
- **string** - 字符串操作工具（65+ 函数）
- **number** - 数字处理工具（112+ 函数）
- **object** - 对象操作工具（20+ 函数）
- **date** - 日期时间工具（40+ 函数）
- **function** - 函数工具（10+ 函数）

### 类型检测和验证模块

- **type** - 类型检测工具（20+ 函数）
- **empty** - 空值检测工具（15+ 函数）
- **regexp** - 正则表达式工具（30+ 函数）

### 高级数据类型模块

- **boolean** - 布尔值工具（3 函数）
- **promise** - Promise 工具（10+ 函数）
- **error** - 错误处理工具（15+ 函数）
- **symbol** - Symbol 工具（12+ 函数）
- **bigint** - BigInt 工具（20+ 函数）

### 浏览器环境模块

- **dom** - DOM 操作工具（30+ 函数）
- **storage** - 存储管理工具（10+ 函数）
- **network** - 网络请求工具（10+ 函数）
- **browser** - 浏览器检测工具（10+ 函数）
- **file** - 文件操作工具（10+ 函数）
- **color** - 颜色处理工具（5+ 函数）

## 📖 详细文档

- **使用指南**：查看 [docs/USAGE.md](./docs/USAGE.md)
- **项目总结**：查看 [docs/SUMMARY.md](./docs/SUMMARY.md)
- **模块文档**：每个模块都有独立的 README.md 文档（位于 `src/[module]/README.md`）
- **使用示例**：查看 [examples/](./examples/) 目录下的模块示例文件

## 🎯 使用示例

每个模块都有独立的示例文件，可以直接在浏览器中运行和测试。

### 运行示例

**方式一：使用本地服务器（推荐）**

```bash
# 启动本地服务器
pnpm serve:examples

# 然后在浏览器中访问
# http://localhost:3000/examples/index.html
```

**方式二：直接打开 HTML 文件**

示例文件已使用 UMD 版本，可以直接在浏览器中打开：

```bash
# 直接打开文件
open examples/index.html
open examples/array.html
```

### 示例文件列表

- [综合示例](./examples/index.html) - 展示各个模块的主要功能
- [数组工具示例](./examples/array.html) - 数组操作相关函数
- [字符串工具示例](./examples/string.html) - 字符串操作相关函数（待创建）
- [数字工具示例](./examples/number.html) - 数字处理相关函数（待创建）
- [对象工具示例](./examples/object.html) - 对象操作相关函数（待创建）
- [日期工具示例](./examples/date.html) - 日期时间相关函数（待创建）
- [函数工具示例](./examples/function.html) - 函数工具相关函数（待创建）
- [类型检测示例](./examples/type.html) - 类型检测相关函数（待创建）
- [空值检测示例](./examples/empty.html) - 空值检测相关函数（待创建）
- [正则表达式示例](./examples/regexp.html) - 正则表达式相关函数（待创建）
- [Promise 工具示例](./examples/promise.html) - Promise 相关函数（待创建）
- [错误处理示例](./examples/error.html) - 错误处理相关函数（待创建）
- [Symbol 工具示例](./examples/symbol.html) - Symbol 相关函数（待创建）
- [BigInt 工具示例](./examples/bigint.html) - BigInt 相关函数（待创建）
- [DOM 操作示例](./examples/dom.html) - DOM 操作相关函数（待创建）
- [存储管理示例](./examples/storage.html) - 存储管理相关函数（待创建）
- [网络请求示例](./examples/network.html) - 网络请求相关函数（待创建）
- [浏览器检测示例](./examples/browser.html) - 浏览器检测相关函数（待创建）
- [文件操作示例](./examples/file.html) - 文件操作相关函数（待创建）
- [颜色处理示例](./examples/color.html) - 颜色处理相关函数（待创建）

> 注意：更多示例文件正在创建中。查看 [examples/README.md](./examples/README.md) 了解详情。

## 🛠️ 开发

```bash
# 安装依赖
pnpm install

# 运行测试
pnpm test

# 构建
pnpm build

# 代码检查
pnpm lint

# 代码格式化
pnpm format

# 生成文档
pnpm docs
```

## 📝 贡献

欢迎提交 Issue 和 Pull Request。请查看 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解贡献指南。

## 📄 许可证

MIT
