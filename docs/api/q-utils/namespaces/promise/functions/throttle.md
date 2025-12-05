[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [promise](../README.md) / throttle

# Function: throttle()

> **throttle**\<`T`\>(`fn`, `ms`): (...`args`) => `void`

Defined in: [promise/transform.ts:39](https://github.com/lanlangmozhu/q-utils/blob/main/src/promise/transform.ts#L39)

节流

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

## Parameters

### fn

`T`

要执行的函数

### ms

`number`

间隔时间（毫秒）

## Returns

节流后的函数

> (...`args`): `void`

### Parameters

#### args

...`Parameters`\<`T`\>

### Returns

`void`

## Example

```ts
const throttledFn = throttle(() => console.log('执行'), 1000);
throttledFn();
throttledFn();
// 1秒内只执行一次
```
