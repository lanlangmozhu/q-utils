# 空值检测工具函数

## 目录结构

```
src/empty/
├── index.ts       // 导出所有功能
├── basic.ts       // 基础空值检测（isNil, isEmpty）
├── specific.ts    // 特定类型空值检测（isEmptyString, isEmptyArray等）
├── collections.ts // 集合类型空值检测（isEmptyMap, isEmptySet等）
└── advanced.ts    // 高级空值检测（isEmptyOrFalsy系列）
```

## 功能描述

空值检测工具函数提供了一系列用于检测各种类型空值的工具函数，包括基本类型、集合类型、特殊对象等。

### 基本类型检测

- `isNil`: 检查值是否为 null 或 undefined
- `isEmpty`: 检查值是否为空（null、undefined、空字符串、空数组、空对象）
- `isEmptyString`: 检查字符串是否为空
- `isEmptyOrFalsy`: 检查值是否为空或假值
- `isEmptyOrFalsyStrict`: 检查值是否为空或假值（不包括空数组和空对象）
- `isEmptyOrFalsyLoose`: 检查值是否为空或假值（包括空数组和空对象）
- `isEmptyOrFalsyStrictest`: 检查值是否为空或假值（最严格模式）

### 集合类型检测

- `isEmptyArray`: 检查值是否为空数组
- `isEmptyMap`: 检查值是否为空 Map
- `isEmptySet`: 检查值是否为空 Set
- `isEmptyWeakMap`: 检查值是否为空 WeakMap
- `isEmptyWeakSet`: 检查值是否为空 WeakSet

### 特殊对象检测

- `isEmptyObject`: 检查对象是否为空
- `isEmptyDate`: 检查值是否为空 Date
- `isEmptyRegExp`: 检查值是否为空正则表达式
- `isEmptyError`: 检查值是否为空 Error
- `isEmptyPromise`: 检查 Promise 是否为空
- `isEmptyIterator`: 检查值是否为空迭代器
- `isEmptyAsyncIterator`: 检查值是否为空异步迭代器

## 使用示例

```typescript
import { 
  isNil,
  isEmpty,
  isEmptyString,
  isEmptyArray,
  isEmptyObject,
  isEmptyMap,
  isEmptySet,
  isEmptyWeakMap,
  isEmptyWeakSet,
  isEmptyDate,
  isEmptyRegExp,
  isEmptyError,
  isEmptyPromise,
  isEmptyIterator,
  isEmptyAsyncIterator,
  isEmptyOrFalsy,
  isEmptyOrFalsyStrict,
  isEmptyOrFalsyLoose,
  isEmptyOrFalsyStrictest
} from '@qh5-utils/empty';

// 基本类型检测
isNil(null); // true
isNil(undefined); // true
isNil(''); // false

isEmpty(null); // true
isEmpty(undefined); // true
isEmpty(''); // true
isEmpty([]); // true
isEmpty({}); // true
isEmpty(0); // false

isEmptyString(''); // true
isEmptyString('test'); // false

// 集合类型检测
isEmptyArray([]); // true
isEmptyArray([1, 2, 3]); // false

isEmptyMap(new Map()); // true
isEmptyMap(new Map([['key', 'value']])); // false

isEmptySet(new Set()); // true
isEmptySet(new Set([1, 2, 3])); // false

isEmptyWeakMap(new WeakMap()); // true
isEmptyWeakMap(new Map()); // false

isEmptyWeakSet(new WeakSet()); // true
isEmptyWeakSet(new Set()); // false

// 特殊对象检测
isEmptyObject({}); // true
isEmptyObject({ key: 'value' }); // false

isEmptyDate(new Date('')); // true
isEmptyDate(new Date()); // false

isEmptyRegExp(new RegExp('')); // true
isEmptyRegExp(/test/); // false

isEmptyError(new Error('')); // true
isEmptyError(new Error('test')); // false

isEmptyPromise(Promise.resolve(null)); // true
isEmptyPromise(Promise.resolve(1)); // false

isEmptyIterator([][Symbol.iterator]()); // true
isEmptyIterator([1, 2, 3][Symbol.iterator]()); // false

isEmptyAsyncIterator({
  async *[Symbol.asyncIterator]() {}
}[Symbol.asyncIterator]()); // true
isEmptyAsyncIterator({
  async *[Symbol.asyncIterator]() { yield 1; }
}[Symbol.asyncIterator]()); // false

// 空值或假值检测
isEmptyOrFalsy(null); // true
isEmptyOrFalsy(undefined); // true
isEmptyOrFalsy(''); // true
isEmptyOrFalsy(0); // true
isEmptyOrFalsy(false); // true
isEmptyOrFalsy('test'); // false
isEmptyOrFalsy(1); // false

isEmptyOrFalsyStrict(null); // true
isEmptyOrFalsyStrict(undefined); // true
isEmptyOrFalsyStrict(''); // true
isEmptyOrFalsyStrict(0); // true
isEmptyOrFalsyStrict(false); // true
isEmptyOrFalsyStrict([]); // false
isEmptyOrFalsyStrict({}); // false

isEmptyOrFalsyLoose(null); // true
isEmptyOrFalsyLoose(undefined); // true
isEmptyOrFalsyLoose(''); // true
isEmptyOrFalsyLoose(0); // true
isEmptyOrFalsyLoose(false); // true
isEmptyOrFalsyLoose([]); // true
isEmptyOrFalsyLoose({}); // true

isEmptyOrFalsyStrictest(null); // true
isEmptyOrFalsyStrictest(undefined); // true
isEmptyOrFalsyStrictest(''); // true
isEmptyOrFalsyStrictest(0); // true
isEmptyOrFalsyStrictest(false); // true
isEmptyOrFalsyStrictest([]); // false
isEmptyOrFalsyStrictest({}); // false
isEmptyOrFalsyStrictest(new Map()); // false
isEmptyOrFalsyStrictest(new Set()); // false
```

## 注意事项

1. `isNil` 只检查 null 和 undefined
2. `isEmpty` 检查所有类型的空值
3. `isEmptyOrFalsy` 系列函数有不同的严格程度：
   - `isEmptyOrFalsy`: 基本类型检查
   - `isEmptyOrFalsyStrict`: 不包括空数组和空对象
   - `isEmptyOrFalsyLoose`: 包括空数组和空对象
   - `isEmptyOrFalsyStrictest`: 最严格模式，包括所有集合类型
4. 特殊对象的空值判断标准：
   - Date: 无效日期
   - RegExp: 空模式
   - Error: 空消息
   - Promise: 空值或 null
   - Iterator: 无元素
   - AsyncIterator: 无元素

## 更新记录

- 2024-03-19: 初始版本
  - 添加基本类型检测函数
  - 添加集合类型检测函数
  - 添加特殊对象检测函数
  - 添加空值或假值检测函数 