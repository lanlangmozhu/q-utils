[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [func](../README.md) / once

# Function: once()

> **once**\<`T`\>(`func`): (...`args`) => `ReturnType`\<`T`\>

Defined in: [function/once.ts:21](https://github.com/lanlangmozhu/q-utils/blob/main/src/function/once.ts#L21)

创建一个只执行一次的函数
确保函数无论被调用多少次，只会执行一次，并返回第一次执行的结果

## Type Parameters

### T

`T` *extends* (...`args`) => `any`

## Parameters

### func

`T`

要执行一次的函数

## Returns

包装后的函数，只会执行一次

> (...`args`): `ReturnType`\<`T`\>

### Parameters

#### args

...`Parameters`\<`T`\>

### Returns

`ReturnType`\<`T`\>

## Example

```ts
// 基本用法
const initialize = once(() => {
  console.log('初始化操作，只会执行一次');
  return { initialized: true };
});

const result1 = initialize(); // 输出: '初始化操作，只会执行一次'
const result2 = initialize(); // 不会再次输出

console.log(result1 === result2); // true, 返回相同的结果
```
