# 类型支持

Q-Utils 提供了完整的 TypeScript 类型定义，提供良好的开发体验。

## TypeScript 支持

Q-Utils 内置了完整的 TypeScript 类型定义，无需额外安装 `@types/q-utils`。

### 基本使用

```typescript
import { string, array } from 'q-utils';

// 类型自动推导
const capitalized: string = string.capitalize('hello');
const first: number | undefined = array.first([1, 2, 3]);
```

### 泛型支持

```typescript
import { array, object } from 'q-utils';

// 数组泛型
const numbers: number[] = array.filter([1, 2, 3], (n) => n > 1);
const strings: string[] = array.map([1, 2, 3], (n) => String(n));

// 对象泛型
interface User {
  name: string;
  age: number;
}

const user: User = { name: 'John', age: 30 };
const cloned: User = object.deepClone(user);
```

### 类型守卫

```typescript
import { type } from 'q-utils';

function processValue(value: unknown) {
  if (type.isString(value)) {
    // value 的类型被缩小为 string
    console.log(value.toUpperCase());
  }
  
  if (type.isArray(value)) {
    // value 的类型被缩小为 unknown[]
    console.log(value.length);
  }
}
```

## 类型定义位置

类型定义文件位于：

- 主入口: `node_modules/q-utils/dist/index.d.ts`
- 子模块: `node_modules/q-utils/dist/[module]/index.d.ts`

## IDE 支持

### VS Code

VS Code 会自动识别类型定义，提供：

- 自动补全
- 类型提示
- 参数提示
- 跳转到定义

### WebStorm

WebStorm 同样支持完整的类型提示和自动补全。

## 类型导出

所有类型都可以从主模块导入：

```typescript
import type { /* 类型 */ } from 'q-utils';
```

## 常见问题

### 类型错误

如果遇到类型错误，请确保：

1. 安装了最新版本的 Q-Utils
2. TypeScript 版本 >= 4.0
3. 正确导入了类型

### 类型不完整

如果发现类型定义不完整，请提交 Issue 或 PR。

