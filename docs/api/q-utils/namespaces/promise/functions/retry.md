[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [promise](../README.md) / retry

# Function: retry()

> **retry**\<`T`\>(`fn`, `retries`, `delay`): `Promise`\<`T`\>

Defined in: [promise/control.ts:44](https://github.com/lanlangmozhu/q-utils/blob/main/src/promise/control.ts#L44)

重试执行

## Type Parameters

### T

`T`

## Parameters

### fn

() => `Promise`\<`T`\>

要执行的函数

### retries

`number`

重试次数

### delay

`number`

重试延迟（毫秒）

## Returns

`Promise`\<`T`\>

Promise

## Example

```ts
retry(() => fetch('https://api.example.com'), 3, 1000)
  .then(response => response.json())
  .catch(error => console.error('重试失败'))
```
