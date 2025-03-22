# Q-Utils 文档

欢迎使用 Q-Utils 文档！这里提供了完整的使用指南和 API 参考。

## 文档导航

### 核心内容
- [项目总结](./SUMMARY.md) - 项目概述、已实现功能和扩展方向
- [功能概览](./功能概览.md) - 所有工具函数的分类列表
- [使用指南](./usage.md) - 详细的使用说明和示例

### 开发相关
- [贡献指南](../CONTRIBUTING.md) - 如何参与项目开发
- [发布指南](../PUBLISHING.md) - 如何发布新版本

## 快速入门

### 安装

```bash
# 使用 npm
npm install q-utils

# 使用 yarn
yarn add q-utils

# 使用 pnpm
pnpm add q-utils
```

### 基础使用

```typescript
// 导入整个库
import * as qUtils from 'q-utils';

// 按需导入特定功能
import { capitalize } from 'q-utils/string';
import { unique } from 'q-utils/array';
import { isMobile } from 'q-utils/utils';

// 使用示例
capitalize('hello world');  // 'Hello world'
unique([1, 2, 2, 3]);      // [1, 2, 3]
if (isMobile()) {
  // 展示移动版内容
}
```

查看 [使用指南](./usage.md) 获取更多详细示例。 