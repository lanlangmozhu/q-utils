# 函数操作工具函数

## 目录结构

```
src/function/
├── index.ts          # 导出所有函数操作相关的工具函数
├── debounce.ts       # 防抖函数
├── throttle.ts       # 节流函数
├── once.ts          # 一次性函数
├── memoize.ts       # 函数结果缓存
├── curry.ts         # 函数柯里化
├── compose.ts       # 函数组合（从右到左）
├── pipe.ts          # 函数管道（从左到右）
└── sleep.ts         # 延迟执行
```

## 功能说明

### 函数执行控制

#### 防抖函数 (debounce)

创建一个防抖函数，该函数会在指定时间内只执行一次。

```typescript
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number = 300,
  immediate: boolean = false
): (...args: Parameters<T>) => void
```

参数说明：
- `func`: 要防抖的函数
- `wait`: 延迟时间（毫秒），默认300ms
- `immediate`: 是否在延迟开始时就执行，默认false

使用示例：
```typescript
import { debounce } from '@/function';

// 基本用法
const handleSearch = debounce((query: string) => {
  // 执行搜索
  console.log('搜索:', query);
}, 500);

// 输入时触发
searchInput.addEventListener('input', (e) => {
  handleSearch(e.target.value);
});

// 立即执行
const handleClick = debounce(() => {
  console.log('按钮被点击');
}, 1000, true);

// 取消防抖
const debouncedFn = debounce(() => {
  console.log('执行');
});
debouncedFn.cancel(); // 取消待执行的函数
```

#### 节流函数 (throttle)

创建一个节流函数，该函数在指定时间内最多执行一次。

```typescript
function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number = 300,
  options: {
    leading?: boolean;
    trailing?: boolean;
  } = {}
): (...args: Parameters<T>) => void
```

参数说明：
- `func`: 要节流的函数
- `wait`: 时间间隔（毫秒），默认300ms
- `options`: 配置选项
  - `leading`: 是否在开始时执行，默认true
  - `trailing`: 是否在结束时执行，默认true

使用示例：
```typescript
import { throttle } from '@/function';

// 基本用法
const handleScroll = throttle(() => {
  // 处理滚动事件
  console.log('滚动位置:', window.scrollY);
}, 200);

// 监听滚动事件
window.addEventListener('scroll', handleScroll);

// 自定义选项
const handleResize = throttle(() => {
  console.log('窗口大小改变');
}, 300, {
  leading: true,  // 开始时执行
  trailing: false // 结束时不执行
});

// 取消节流
const throttledFn = throttle(() => {
  console.log('执行');
});
throttledFn.cancel(); // 取消待执行的函数
```

#### 一次性函数 (once)

创建一个只能执行一次的函数。

```typescript
function once<T extends (...args: any[]) => any>(
  func: T
): (...args: Parameters<T>) => ReturnType<T>
```

参数说明：
- `func`: 要执行的函数

使用示例：
```typescript
import { once } from '@/function';

// 基本用法
const initialize = once(() => {
  console.log('初始化完成');
});

initialize(); // 输出: "初始化完成"
initialize(); // 不会执行
initialize(); // 不会执行
```

### 函数结果缓存

#### 函数结果缓存 (memoize)

创建一个会缓存结果的函数，对于相同的参数只会计算一次。

```typescript
function memoize<T extends (...args: any[]) => any>(
  func: T,
  resolver?: (...args: Parameters<T>) => string | number
): (...args: Parameters<T>) => ReturnType<T>
```

参数说明：
- `func`: 要缓存结果的函数
- `resolver`: 可选的函数，用于计算缓存的键

使用示例：
```typescript
import { memoize } from '@/function';

// 基本用法 - 缓存耗时计算
const fibonacci = memoize((n: number): number => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.time('first');
fibonacci(40); // 首次计算耗时较长
console.timeEnd('first');

console.time('second');
fibonacci(40); // 从缓存返回结果，几乎立即完成
console.timeEnd('second');

// 使用自定义键生成函数
const calculateArea = memoize(
  (width: number, height: number) => width * height,
  (width, height) => `${width}x${height}` // 自定义键
);
```

### 函数组合

#### 函数柯里化 (curry)

将接受多个参数的函数转换为接受单个参数的函数序列。

```typescript
function curry<T extends (...args: any[]) => any>(
  func: T,
  arity: number = func.length
): (...args: any[]) => any
```

参数说明：
- `func`: 要柯里化的函数
- `arity`: 可选的参数数量，默认为函数的参数长度

使用示例：
```typescript
import { curry } from '@/function';

// 基本用法
const add = (a: number, b: number, c: number) => a + b + c;
const curriedAdd = curry(add);

curriedAdd(1)(2)(3); // 返回 6
curriedAdd(1, 2)(3); // 也返回 6
curriedAdd(1)(2, 3); // 也返回 6
curriedAdd(1, 2, 3); // 也返回 6

// 指定参数数量
const multiply = (...args: number[]) => args.reduce((a, b) => a * b, 1);
const curriedMultiply = curry(multiply, 3);

curriedMultiply(2)(3)(4); // 返回 24
```

#### 函数组合 (compose)

从右到左组合多个函数。

```typescript
function compose<R>(
  ...funcs: Array<(arg: any) => any>
): (arg: any) => R
```

参数说明：
- `funcs`: 要组合的函数列表，从右到左执行

使用示例：
```typescript
import { compose } from '@/function';

// 基本用法
const add10 = (x: number) => x + 10;
const multiply2 = (x: number) => x * 2;
const toString = (x: number) => `结果是: ${x}`;

// 组合函数：toString(multiply2(add10(5)))
const calculate = compose(toString, multiply2, add10);

calculate(5); // 返回 "结果是: 30"

// 数据流向：5 -> add10 -> 15 -> multiply2 -> 30 -> toString -> "结果是: 30"
```

#### 函数管道 (pipe)

从左到右组合多个函数。

```typescript
function pipe<R>(
  ...funcs: Array<(arg: any) => any>
): (arg: any) => R
```

参数说明：
- `funcs`: 要组合的函数列表，从左到右执行

使用示例：
```typescript
import { pipe } from '@/function';

// 基本用法
const add10 = (x: number) => x + 10;
const multiply2 = (x: number) => x * 2;
const toString = (x: number) => `结果是: ${x}`;

// 组合函数：toString(multiply2(add10(5)))
const calculate = pipe(add10, multiply2, toString);

calculate(5); // 返回 "结果是: 30"

// 数据流向：5 -> add10 -> 15 -> multiply2 -> 30 -> toString -> "结果是: 30"
```

### 异步控制

#### 延迟执行 (sleep)

延迟指定时间后继续执行。

```typescript
function sleep(ms: number): Promise<void>
```

参数说明：
- `ms`: 延迟的毫秒数

使用示例：
```typescript
import { sleep } from '@/function';

// 基本用法
async function demo() {
  console.log('开始');
  await sleep(2000); // 暂停2秒
  console.log('2秒后继续执行');
}

// 在循环中使用
async function processItems(items: any[]) {
  for (const item of items) {
    processItem(item);
    await sleep(300); // 每次处理后暂停300毫秒
  }
}
```

## 注意事项

1. 防抖和节流函数：
   - 防抖函数适合处理输入事件、搜索等场景
   - 节流函数适合处理滚动、调整大小等频繁触发的事件
   - 可以通过 `cancel` 方法取消待执行的函数

2. 函数缓存：
   - 适合缓存计算结果，避免重复计算
   - 可以通过自定义 `resolver` 函数来控制缓存键的生成
   - 注意内存使用，不要缓存过大的结果

3. 函数组合：
   - `compose` 从右到左执行函数
   - `pipe` 从左到右执行函数
   - 适合处理数据转换和函数链式调用

4. 异步控制：
   - `sleep` 函数返回 Promise，需要使用 async/await 或 then 处理
   - 适合处理异步操作的延迟和间隔

## 更新记录

- 2024-03-21: 初始版本
  - 添加函数执行控制（防抖、节流、一次性函数）
  - 添加函数结果缓存
  - 添加函数组合（柯里化、组合、管道）
  - 添加异步控制（延迟执行） 