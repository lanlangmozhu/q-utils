# Symbol 工具函数

## 目录结构

```
src/symbol/
├── index.ts
```

## 功能描述

Symbol 工具函数提供了一系列用于处理 Symbol 类型的工具函数，包括创建、检查、转换等功能。

### 基础操作

- `createSymbol`: 创建唯一的 Symbol
- `createGlobalSymbol`: 创建全局唯一的 Symbol
- `getSymbolDescription`: 获取 Symbol 的描述
- `getSymbolKey`: 获取 Symbol 的键名
- `isSymbol`: 检查是否为 Symbol
- `isGlobalSymbol`: 检查是否为全局 Symbol

### 迭代器相关

- `createSymbolIterator`: 创建 Symbol 迭代器
- `createSymbolAsyncIterator`: 创建 Symbol 异步迭代器
- `createSymbolGenerator`: 创建 Symbol 生成器
- `createSymbolAsyncGenerator`: 创建 Symbol 异步生成器

### 集合操作

- `createSymbolArray`: 创建 Symbol 数组
- `createGlobalSymbolArray`: 创建全局 Symbol 数组
- `createSymbolMap`: 创建 Symbol 映射
- `createGlobalSymbolMap`: 创建全局 Symbol 映射

## 使用示例

```typescript
import { 
  createSymbol,
  createGlobalSymbol,
  getSymbolDescription,
  getSymbolKey,
  isSymbol,
  isGlobalSymbol,
  createSymbolIterator,
  createSymbolAsyncIterator,
  createSymbolGenerator,
  createSymbolAsyncGenerator,
  createSymbolArray,
  createGlobalSymbolArray,
  createSymbolMap,
  createGlobalSymbolMap
} from '@qh5-utils/symbol';

// 基础操作
const sym = createSymbol('test'); // Symbol('test')
const globalSym = createGlobalSymbol('test'); // Symbol.for('test')
getSymbolDescription(sym); // 'test'
getSymbolKey(globalSym); // 'test'
isSymbol(sym); // true
isGlobalSymbol(globalSym); // true

// 迭代器
const iterator = createSymbolIterator(sym);
const asyncIterator = createSymbolAsyncIterator(sym);
const generator = createSymbolGenerator(sym);
const asyncGenerator = createSymbolAsyncGenerator(sym);

// 集合操作
const symArray = createSymbolArray(['test1', 'test2']); // [Symbol('test1'), Symbol('test2')]
const globalSymArray = createGlobalSymbolArray(['test1', 'test2']); // [Symbol.for('test1'), Symbol.for('test2')]
const symMap = createSymbolMap(['test1', 'test2']); // { test1: Symbol('test1'), test2: Symbol('test2') }
const globalSymMap = createGlobalSymbolMap(['test1', 'test2']); // { test1: Symbol.for('test1'), test2: Symbol.for('test2') }
```

## 注意事项

1. Symbol 是唯一的，即使描述相同也是不同的 Symbol
2. 全局 Symbol 通过 Symbol.for() 创建，相同的键名会返回相同的 Symbol
3. Symbol 不能使用 new 关键字创建
4. Symbol 不能转换为字符串或数字
5. Symbol 不能使用 JSON.stringify() 序列化

## 更新记录

- 2024-03-18: 初始版本
  - 添加基础操作函数
  - 添加迭代器相关函数
  - 添加集合操作函数 