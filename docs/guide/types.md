# 类型支持

qh5-utils 提供了完整的 TypeScript 类型定义，无需额外安装类型包。

## 内置类型定义

qh5-utils 内置了完整的 TypeScript 类型定义，所有函数都有详细的类型注解：

```typescript
import { string, array, object } from 'qh5-utils';

// 完整的类型提示
const result: string = string.capitalize('hello');
const first: number | undefined = array.first([1, 2, 3]);
const cloned: { a: number; b: { c: number } } = object.deepClone({ a: 1, b: { c: 2 } });
```

## 类型提示

### IDE 自动补全

现代 IDE（如 VS Code、WebStorm）会自动提供类型提示：

```typescript
import { string } from 'qh5-utils';

// 输入 string. 后，IDE 会显示所有可用的函数
string.capitalize('hello');  // ✅ 类型正确
string.capitalize(123);      // ❌ 类型错误
```

### 函数签名提示

将鼠标悬停在函数上，可以看到完整的函数签名：

```typescript
// 函数签名提示
string.capitalize(str: string): string
array.unique<T>(arr: T[]): T[]
object.deepClone<T>(obj: T): T
```

## 泛型支持

qh5-utils 的许多函数都支持泛型，提供类型安全：

```typescript
import { array, object } from 'qh5-utils';

// 数组泛型
const numbers: number[] = array.unique([1, 2, 2, 3]);
const strings: string[] = array.unique(['a', 'b', 'b', 'c']);

// 对象泛型
interface User {
  name: string;
  age: number;
}

const user: User = { name: 'John', age: 30 };
const cloned: User = object.deepClone(user);
```

## 类型推断

TypeScript 可以自动推断返回类型：

```typescript
import { string, array } from 'qh5-utils';

// TypeScript 自动推断类型
const capitalized = string.capitalize('hello');  // string
const first = array.first([1, 2, 3]);            // number | undefined
const unique = array.unique([1, 2, 2, 3]);       // number[]
```

## 类型守卫

某些函数提供类型守卫功能：

```typescript
import { type } from 'qh5-utils';

const value: unknown = getValue();

if (type.isString(value)) {
  // 在这个块中，value 的类型被缩小为 string
  value.toUpperCase();  // ✅ 类型安全
}
```

## 接口和类型定义

qh5-utils 导出了常用的接口和类型：

```typescript
import type { BrowserInfo } from 'qh5-utils';

const info: BrowserInfo = {
  name: 'Chrome',
  version: '120.0.0',
  engine: 'Blink',
};
```

## 在 JavaScript 中使用

即使不使用 TypeScript，类型定义也能提供更好的开发体验：

```javascript
// JavaScript 文件
import { string } from 'qh5-utils';

// VS Code 等 IDE 仍然可以提供类型提示
const result = string.capitalize('hello');
```

## 类型检查

### 严格模式

在 TypeScript 严格模式下，所有类型都会被严格检查：

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "strict": true
  }
}
```

### 类型错误示例

```typescript
import { string, array } from 'qh5-utils';

// ❌ 类型错误：参数类型不匹配
string.capitalize(123);  // 期望 string，得到 number

// ❌ 类型错误：返回值类型不匹配
const num: number = string.capitalize('hello');  // 期望 number，得到 string

// ✅ 类型正确
const str: string = string.capitalize('hello');
```

## 自定义类型

你可以结合 qh5-utils 的类型定义创建自定义类型：

```typescript
import { array } from 'qh5-utils';

interface User {
  id: number;
  name: string;
}

// 使用泛型
const users: User[] = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

// 类型安全
const uniqueUsers = array.uniqueBy(users, user => user.id);
```

## 最佳实践

1. **启用严格模式**: 在 `tsconfig.json` 中启用严格模式
2. **利用类型提示**: 充分利用 IDE 的类型提示功能
3. **使用泛型**: 利用泛型提供类型安全
4. **检查类型**: 定期运行 `tsc --noEmit` 检查类型错误

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

qh5-utils 提供了完整的 TypeScript 类型定义，提供良好的开发体验。

## TypeScript 支持

qh5-utils 内置了完整的 TypeScript 类型定义，无需额外安装 `@types/qh5-utils`。

### 基本使用

```typescript
import { string, array } from 'qh5-utils';

// 类型自动推导
const capitalized: string = string.capitalize('hello');
const first: number | undefined = array.first([1, 2, 3]);
```

### 泛型支持

```typescript
import { array, object } from 'qh5-utils';

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
import { type } from 'qh5-utils';

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

- 主入口: `node_modules/qh5-utils/dist/index.d.ts`
- 子模块: `node_modules/qh5-utils/dist/[module]/index.d.ts`

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
import type { /* 类型 */ } from 'qh5-utils';
```

## 常见问题

### 类型错误

如果遇到类型错误，请确保：

1. 安装了最新版本的 qh5-utils
2. TypeScript 版本 >= 4.0
3. 正确导入了类型

### 类型不完整

如果发现类型定义不完整，请提交 Issue 或 PR。

