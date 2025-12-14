# 类型检测工具函数

## 目录结构

```
src/type/
├── index.ts       // 导出所有功能
├── basic.ts       // 基础类型检测（getType, isType, isUndefined, isNull等）
├── object.ts      // 对象类型检测（isObject, isPlainObject, isArray等）
└── advanced.ts    // 高级类型检测（isMap, isSet, isIterable等）
```

## 功能描述

类型检测工具函数提供了一系列用于检测 JavaScript/TypeScript 中各种类型的工具函数，包括基本类型、对象类型、集合类型等。

### 通用类型检测

- `getType`: 获取值的类型
- `isType`: 检查值是否为指定类型

### 基本类型检测

- `isUndefined`: 检查值是否为 undefined
- `isNull`: 检查值是否为 null
- `isBoolean`: 检查值是否为布尔值
- `isNumber`: 检查值是否为数字
- `isInteger`: 检查值是否为整数
- `isFiniteNumber`: 检查值是否为有限数字
- `isNaN`: 检查值是否为 NaN
- `isString`: 检查值是否为字符串
- `isSymbol`: 检查值是否为 Symbol
- `isBigInt`: 检查值是否为 BigInt

### 对象类型检测

- `isObject`: 检查值是否为对象
- `isPlainObject`: 检查值是否为普通对象
- `isArray`: 检查值是否为数组
- `isFunction`: 检查值是否为函数
- `isDate`: 检查值是否为日期对象
- `isRegExp`: 检查值是否为正则表达式
- `isError`: 检查值是否为错误对象
- `isPromise`: 检查值是否为 Promise

### 集合类型检测

- `isMap`: 检查值是否为 Map
- `isSet`: 检查值是否为 Set
- `isWeakMap`: 检查值是否为 WeakMap
- `isWeakSet`: 检查值是否为 WeakSet
- `isIterable`: 检查值是否为可迭代对象
- `isAsyncIterable`: 检查值是否为异步可迭代对象

## 使用示例

```typescript
import { 
  getType,
  isType,
  isUndefined,
  isNull,
  isBoolean,
  isNumber,
  isInteger,
  isFiniteNumber,
  isNaN,
  isString,
  isSymbol,
  isBigInt,
  isObject,
  isPlainObject,
  isArray,
  isFunction,
  isDate,
  isRegExp,
  isError,
  isPromise,
  isMap,
  isSet,
  isWeakMap,
  isWeakSet,
  isIterable,
  isAsyncIterable
} from '@qh5-utils/type';

// 通用类型检测
getType(123); // 'number'
getType('abc'); // 'string'
getType(true); // 'boolean'
getType(null); // 'null'
getType(undefined); // 'undefined'
getType([]); // 'array'
getType({}); // 'object'
getType(new Date()); // 'date'
getType(/\d+/); // 'regexp'
getType(new Map()); // 'map'
getType(new Set()); // 'set'
getType(() => {}); // 'function'

isType(123, 'number'); // true
isType('abc', ['string', 'number']); // true
isType(undefined, ['null', 'undefined']); // true

// 基本类型检测
isUndefined(undefined); // true
isNull(null); // true
isBoolean(true); // true
isNumber(1); // true
isInteger(1); // true
isFiniteNumber(1.5); // true
isNaN(NaN); // true
isString('test'); // true
isSymbol(Symbol()); // true
isBigInt(BigInt(1)); // true

// 对象类型检测
isObject({}); // true
isObject([]); // true
isPlainObject({}); // true
isPlainObject(new Date()); // false
isArray([]); // true
isFunction(() => {}); // true
isDate(new Date()); // true
isRegExp(/test/); // true
isError(new Error()); // true
isPromise(Promise.resolve()); // true

// 集合类型检测
isMap(new Map()); // true
isSet(new Set()); // true
isWeakMap(new WeakMap()); // true
isWeakSet(new WeakSet()); // true
isIterable([]); // true
isIterable('test'); // true
isAsyncIterable({
  async *[Symbol.asyncIterator]() {}
}); // true
```

## 注意事项

1. `getType` 函数返回的类型字符串包括：
   - 基本类型：'number'、'string'、'boolean'、'symbol'、'bigint'
   - 特殊值：'null'、'undefined'
   - 对象类型：'object'、'array'、'date'、'regexp'、'map'、'set'、'weakmap'、'weakset'、'function'

2. `isType` 函数支持单个类型或类型数组的检查

3. 类型检查的严格程度：
   - `isNumber`: 检查是否为数字且不为 NaN
   - `isInteger`: 检查是否为整数
   - `isFiniteNumber`: 检查是否为有限数字
   - `isObject`: 检查是否为对象且不为 null
   - `isPlainObject`: 检查是否为普通对象（由 Object 构造函数创建或原型为 null）

4. 集合类型的检查：
   - `isIterable`: 检查是否实现了 Symbol.iterator 方法
   - `isAsyncIterable`: 检查是否实现了 Symbol.asyncIterator 方法

## 更新记录

- 2024-03-19: 初始版本
  - 添加通用类型检测函数
  - 添加基本类型检测函数
  - 添加对象类型检测函数
  - 添加集合类型检测函数 