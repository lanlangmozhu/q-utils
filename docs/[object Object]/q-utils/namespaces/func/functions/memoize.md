[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [func](../README.md) / memoize

# Function: memoize()

> **memoize**\<`T`\>(`func`, `resolver?`): (...`args`) => `ReturnType`\<`T`\>

Defined in: [function/memoize.ts:31](https://github.com/lanlangmozhu/q-utils/blob/main/src/function/memoize.ts#L31)

创建一个会缓存结果的函数
对于相同的参数，函数只会计算一次，后续调用直接从缓存返回结果

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

## Parameters

### func

`T`

要缓存结果的函数

### resolver?

(...`args`) => `string` \| `number`

可选的函数，用于计算缓存的键。默认使用第一个参数作为键

## Returns

缓存化后的函数

> (...`args`): `ReturnType`\<`T`\>

### Parameters

#### args

...`Parameters`\<`T`\>

### Returns

`ReturnType`\<`T`\>

## Example

```ts
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
