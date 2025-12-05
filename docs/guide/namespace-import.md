# 命名空间导入

命名空间导入是 Q-Utils 推荐的使用方式，它提供了清晰的模块组织和良好的代码可读性。

## 基本用法

```typescript
import { string, array, object } from 'q-utils';

// 使用字符串工具
const capitalized = string.capitalize('hello world');
const trimmed = string.trim('  hello  ');
const uuid = string.uuid();

// 使用数组工具
const first = array.first([1, 2, 3]);
const unique = array.unique([1, 2, 2, 3]);
const shuffled = array.shuffle([1, 2, 3, 4, 5]);

// 使用对象工具
const cloned = object.deepClone({ a: 1, b: { c: 2 } });
const merged = object.deepMerge({ a: 1 }, { b: 2 });
```

## 优势

### 1. 清晰的模块组织

每个功能模块都有独立的命名空间，代码组织清晰：

```typescript
import { string, array, object, date, number } from 'q-utils';

// 字符串操作
string.capitalize('hello');
string.camelize('background-color');

// 数组操作
array.unique([1, 2, 2, 3]);
array.flatten([1, [2, 3]]);

// 对象操作
object.deepClone({ a: 1 });
object.pick({ a: 1, b: 2 }, ['a']);

// 日期操作
date.formatDate(new Date(), 'YYYY-MM-DD');
date.isToday(new Date());

// 数字操作
number.clamp(100, 0, 50);
number.random(1, 10);
```

### 2. 良好的代码提示

TypeScript 和现代 IDE 可以提供完整的代码提示：

```typescript
import { string } from 'q-utils';

// 输入 string. 后，IDE 会显示所有可用的字符串函数
string.capitalize
string.camelize
string.kebabCase
// ... 更多函数
```

### 3. 避免命名冲突

命名空间可以避免不同模块之间的函数名冲突：

```typescript
import { array, object } from 'q-utils';

// 不同模块可能有同名函数，但通过命名空间区分
array.get([1, 2, 3], 0);        // 数组的 get
object.get({ a: 1 }, 'a');     // 对象的 get
```

## 导入所有模块

```typescript
import * as qUtils from 'q-utils';

// 使用
qUtils.string.capitalize('hello');
qUtils.array.unique([1, 2, 2, 3]);
qUtils.object.deepClone({ a: 1 });
```

## 默认导入

```typescript
import qUtils from 'q-utils';

// 使用
qUtils.string.capitalize('hello');
qUtils.array.unique([1, 2, 2, 3]);
```

## 与按需导入结合

命名空间导入也支持 Tree Shaking，未使用的模块会被自动移除：

```typescript
// 只导入需要的模块
import { string, array } from 'q-utils';

// 未使用的 object 模块不会被打包
// const cloned = object.deepClone({ a: 1 }); // 未使用
```

## 最佳实践

1. **按需导入模块**: 只导入你需要的模块，减少打包体积
2. **使用命名空间**: 保持代码清晰，避免命名冲突
3. **利用类型提示**: 充分利用 TypeScript 的类型提示功能

```typescript
// ✅ 推荐：只导入需要的模块
import { string, array } from 'q-utils';

// ❌ 不推荐：导入所有模块（如果不需要）
import * as qUtils from 'q-utils';
```

命名空间导入是 Q-Utils 推荐的导入方式，它提供了清晰的模块组织和良好的代码提示。

## 基本用法

```typescript
import { string, array, object, date } from 'q-utils';

// 字符串操作
const capitalized = string.capitalize('hello world');
const trimmed = string.trim('  hello  ');

// 数组操作
const first = array.first([1, 2, 3]);
const last = array.last([1, 2, 3]);

// 对象操作
const cloned = object.deepClone({ a: 1 });
const merged = object.deepMerge({ a: 1 }, { b: 2 });

// 日期操作
const formatted = date.format(new Date(), 'YYYY-MM-DD');
const tomorrow = date.addDays(new Date(), 1);
```

## 优势

1. **清晰的模块组织**: 通过命名空间可以清楚地知道函数属于哪个模块
2. **良好的代码提示**: IDE 可以提供更好的自动补全和类型提示
3. **避免命名冲突**: 不同模块的同名函数不会冲突
4. **易于理解**: 代码可读性更好，一眼就能看出函数的功能分类

## 导入所有模块

```typescript
import * as qUtils from 'q-utils';

// 或者使用默认导入
import qUtils from 'q-utils';

// 使用
const result = qUtils.string.capitalize('hello');
```

## 按需导入模块

```typescript
// 只导入需要的模块
import { string, array } from 'q-utils';

// 使用
const capitalized = string.capitalize('hello');
const first = array.first([1, 2, 3]);
```

