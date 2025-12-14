[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [promise](../README.md) / debounce

# Function: debounce()

> **debounce**\<`T`\>(`fn`, `ms`): (...`args`) => `void`

Defined in: [promise/transform.ts:17](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/promise/transform.ts#L17)

防抖

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

## Parameters

### fn

`T`

要执行的函数

### ms

`number`

延迟时间（毫秒）

## Returns

防抖后的函数

> (...`args`): `void`

### Parameters

#### args

...`Parameters`\<`T`\>

### Returns

`void`

## Example

```ts
const debouncedFn = debounce(() => console.log('执行'), 1000);
debouncedFn();
debouncedFn();
// 1秒后只执行一次
```
