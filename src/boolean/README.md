# 布尔值工具函数

## 目录结构

```
src/boolean/
├── index.ts
```

## 功能描述

布尔值工具函数提供了一系列用于处理布尔值的工具函数，包括类型转换、真值检查等功能。

### 类型转换

- `toBoolean`: 将值转换为布尔值

### 值检查

- `isTruthy`: 检查值是否为真值
- `isFalsy`: 检查值是否为假值

## 使用示例

```typescript
import { toBoolean, isTruthy, isFalsy } from '@qh5-utils/boolean';

// 类型转换
toBoolean('true'); // true
toBoolean('false'); // false
toBoolean(1); // true
toBoolean(0); // false
toBoolean(null); // false
toBoolean(undefined); // false

// 值检查
isTruthy(true); // true
isTruthy(1); // true
isTruthy('test'); // true
isTruthy([]); // true
isTruthy({}); // true
isTruthy(false); // false
isTruthy(0); // false
isTruthy(''); // false
isTruthy(null); // false
isTruthy(undefined); // false

isFalsy(false); // true
isFalsy(0); // true
isFalsy(''); // true
isFalsy(null); // true
isFalsy(undefined); // true
isFalsy(true); // false
isFalsy(1); // false
isFalsy('test'); // false
isFalsy([]); // false
isFalsy({}); // false
```

## 注意事项

1. `toBoolean` 函数支持将字符串、数字等类型转换为布尔值
2. `isTruthy` 函数检查值是否为真值，包括非空字符串、非零数字、非空数组、非空对象等
3. `isFalsy` 函数检查值是否为假值，包括空字符串、零、空数组、空对象、null、undefined 等
4. 字符串转换时忽略大小写和首尾空格

## 更新记录

- 2024-03-19: 初始版本
  - 添加类型转换函数
  - 添加值检查函数 