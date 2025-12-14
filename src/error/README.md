# 错误处理工具函数

## 目录结构

```
src/error/
├── index.ts       // 导出所有功能
├── create.ts      // 创建错误（CustomError, createValidationError等）
├── check.ts       // 错误检查（isCustomError, isValidationError等）
└── utils.ts       // 工具函数（getErrorStack, getErrorMessage等）
```

## 功能描述

错误处理工具函数提供了一系列用于创建、检查和提取错误信息的工具函数。

### 创建错误 (create.ts)

- `CustomError`: 自定义错误类
- `createValidationError`: 创建验证错误
- `createBusinessError`: 创建业务错误
- `createNetworkError`: 创建网络错误
- `createPermissionError`: 创建权限错误
- `createResourceError`: 创建资源错误

### 错误检查 (check.ts)

- `isCustomError`: 检查是否为自定义错误
- `isValidationError`: 检查是否为验证错误
- `isBusinessError`: 检查是否为业务错误
- `isNetworkError`: 检查是否为网络错误
- `isPermissionError`: 检查是否为权限错误
- `isResourceError`: 检查是否为资源错误

### 工具函数 (utils.ts)

- `getErrorStack`: 获取错误堆栈信息
- `getErrorMessage`: 获取错误消息
- `getErrorCode`: 获取错误代码
- `getErrorName`: 获取错误名称

## 使用示例

```typescript
import { createValidationError, isValidationError, getErrorMessage } from 'qh5-utils/error';

// 创建错误
const error = createValidationError('Invalid input', 'E001');

// 检查错误类型
if (isValidationError(error)) {
  console.log('这是一个验证错误');
}

// 获取错误信息
const message = getErrorMessage(error);
```
