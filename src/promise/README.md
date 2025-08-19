# Promise 工具函数

## 目录结构

```
src/promise/
├── index.ts
```

## 功能描述

Promise 工具函数提供了一系列用于处理异步操作的工具函数，包括延迟执行、超时处理、重试机制、并发控制等功能。

### 基础操作

- `delay`: 延迟执行
- `timeout`: 超时处理
- `retry`: 重试执行
- `concurrent`: 并发控制

### 性能优化

- `debounce`: 防抖
- `throttle`: 节流

### 错误处理

- `wrap`: 包装 Promise
- `wrapAsync`: 包装异步函数

### 可取消操作

- `cancellable`: 创建可取消的 Promise
- `cancellableAsync`: 创建可取消的异步函数

## 使用示例

```typescript
import { 
  delay,
  timeout,
  retry,
  concurrent,
  debounce,
  throttle,
  wrap,
  wrapAsync,
  cancellable,
  cancellableAsync
} from '@q-utils/promise';

// 基础操作
delay(1000).then(() => console.log('1秒后执行'));

timeout(fetch('https://api.example.com'), 5000)
  .then(response => response.json())
  .catch(error => console.error('请求超时'));

retry(() => fetch('https://api.example.com'), 3, 1000)
  .then(response => response.json())
  .catch(error => console.error('重试失败'));

const tasks = [
  () => fetch('https://api1.example.com'),
  () => fetch('https://api2.example.com'),
  () => fetch('https://api3.example.com')
];
concurrent(tasks, 2).then(results => console.log(results));

// 性能优化
const debouncedFn = debounce(() => console.log('执行'), 1000);
debouncedFn();
debouncedFn();
// 1秒后只执行一次

const throttledFn = throttle(() => console.log('执行'), 1000);
throttledFn();
throttledFn();
// 1秒内只执行一次

// 错误处理
wrap(Promise.resolve(1))
  .then(([error, result]) => {
    if (error) console.error(error);
    else console.log(result);
  });

const wrappedFn = wrapAsync(async () => {
  const response = await fetch('https://api.example.com');
  return response.json();
});
const [error, result] = await wrappedFn();

// 可取消操作
const [promise, cancel] = cancellable();
promise.then(() => console.log('完成'));
cancel();

const cancellableFetch = cancellableAsync(async () => {
  const response = await fetch('https://api.example.com');
  return response.json();
});
const [promise, cancel] = cancellableFetch();
promise.then(result => console.log(result));
cancel();
```

## 注意事项

1. `delay` 函数用于创建延迟执行的 Promise
2. `timeout` 函数用于为 Promise 添加超时限制
3. `retry` 函数用于在失败时重试异步操作
4. `concurrent` 函数用于控制并发请求数量
5. `debounce` 和 `throttle` 用于优化频繁触发的操作
6. `wrap` 和 `wrapAsync` 用于统一处理错误
7. `cancellable` 和 `cancellableAsync` 用于创建可取消的异步操作

## 更新记录

- 2024-03-19: 初始版本
  - 添加基础操作函数
  - 添加性能优化函数
  - 添加错误处理函数
  - 添加可取消操作函数 