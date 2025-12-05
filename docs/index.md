---
layout: home

hero:
  name: Q-Utils
  text: 前端工具函数库
  tagline: 一个功能丰富的前端工具函数库，提供了日常开发中常用的各类实用工具函数
  image:
    src: /logo.png
    alt: Q-Utils
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 查看 API
      link: /api/
    - theme: alt
      text: GitHub
      link: https://github.com/lanlangmozhu/q-utils

features:
  - icon: 🚀
    title: 开箱即用
    details: 提供丰富的工具函数，覆盖日常开发中的各种场景，无需重复造轮子
  - icon: 📦
    title: 按需导入
    details: 支持命名空间导入和按需导入，支持 Tree Shaking，减小打包体积
  - icon: 🔒
    title: 类型安全
    details: 完整的 TypeScript 类型定义，提供良好的开发体验和类型提示
  - icon: ⚡
    title: 零依赖
    details: 不依赖任何第三方库，保持代码的独立性和可维护性
  - icon: 📚
    title: 文档完善
    details: 详细的 API 文档和使用示例，帮助快速上手
  - icon: ✅
    title: 测试覆盖
    details: 完整的单元测试覆盖，确保代码质量和稳定性
---

## 安装

```bash
# 使用 npm
npm install q-utils

# 使用 pnpm
pnpm add q-utils

# 使用 yarn
yarn add q-utils
```

## 快速开始

### 命名空间导入（推荐）

```typescript
import { string, array, object } from 'q-utils';

// 使用字符串工具
const capitalized = string.capitalize('hello world');
// 返回: 'Hello world'

// 使用数组工具
const first = array.first([1, 2, 3]);
// 返回: 1

// 使用对象工具
const cloned = object.deepClone({ a: 1, b: { c: 2 } });
// 返回: { a: 1, b: { c: 2 } }
```

### 按需导入

```typescript
import { capitalize } from 'q-utils/string';
import { first } from 'q-utils/array';
import { deepClone } from 'q-utils/object';

const capitalized = capitalize('hello world');
const firstItem = first([1, 2, 3]);
const cloned = deepClone({ a: 1 });
```

## 功能模块

Q-Utils 提供了以下功能模块：

- **数组 (Array)**: 数组操作、转换、分组、排序等
- **字符串 (String)**: 字符串处理、格式化、验证等
- **对象 (Object)**: 对象操作、深度克隆、合并等
- **数字 (Number)**: 数字处理、格式化、计算等
- **日期 (Date)**: 日期格式化、计算、时区处理等
- **函数 (Function)**: 防抖、节流、柯里化等
- **浏览器 (Browser)**: 浏览器检测、设备检测等
- **颜色 (Color)**: 颜色转换、调整等
- **DOM**: DOM 操作、事件处理等
- **文件 (File)**: 文件读取、转换等
- **网络 (Network)**: HTTP 请求、文件下载等
- **存储 (Storage)**: LocalStorage、SessionStorage、Cookie 等
- 以及更多...

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 许可证

[MIT](https://github.com/lanlangmozhu/q-utils/blob/main/LICENSE)
