# 快速开始

本指南将帮助你快速开始使用 qh5-utils。

## 安装

```bash
# 使用 npm
npm install qh5-utils

# 使用 pnpm
pnpm add qh5-utils

# 使用 yarn
yarn add qh5-utils
```

## 基本使用

### 命名空间导入（推荐）

```typescript
import { string, array, object } from 'qh5-utils';

// 字符串操作
const capitalized = string.capitalize('hello world');
console.log(capitalized); // 'Hello world'

const trimmed = string.trim('  hello  ');
console.log(trimmed); // 'hello'

// 数组操作
const first = array.first([1, 2, 3]);
console.log(first); // 1

const last = array.last([1, 2, 3]);
console.log(last); // 3

// 对象操作
const cloned = object.deepClone({ a: 1, b: { c: 2 } });
console.log(cloned); // { a: 1, b: { c: 2 } }
```

### 按需导入

```typescript
import { capitalize } from 'qh5-utils/string';
import { first } from 'qh5-utils/array';
import { deepClone } from 'qh5-utils/object';

const capitalized = capitalize('hello world');
const firstItem = first([1, 2, 3]);
const cloned = deepClone({ a: 1 });
```

### 默认导入

```typescript
import Qh5Utils from 'qh5-utils';

const capitalized = Qh5Utils.string.capitalize('hello world');
const first = Qh5Utils.array.first([1, 2, 3]);
```

## 在浏览器中使用

### 通过 CDN

```html
<script src="https://unpkg.com/qh5-utils/dist/index.umd.js"></script>
<script>
  // 使用全局变量 qh5-Utils
  const capitalized = qh5-Utils.string.capitalize('hello world');
  console.log(capitalized); // 'Hello world'
</script>
```

### 通过 ES Module

```html
<script type="module">
  import { string } from 'https://unpkg.com/qh5-utils/dist/index.esm.js';
  const capitalized = string.capitalize('hello world');
  console.log(capitalized); // 'Hello world'
</script>
```

## 更多示例

查看 [API 文档](../api/) 了解更多功能和使用示例。

