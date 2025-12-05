# 命名空间导入

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

