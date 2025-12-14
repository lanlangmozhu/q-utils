[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [promise](../README.md) / timeout

# Function: timeout()

> **timeout**\<`T`\>(`promise`, `ms`): `Promise`\<`T`\>

Defined in: [promise/control.ts:26](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/promise/control.ts#L26)

超时处理

## Type Parameters

### T

`T`

## Parameters

### promise

`Promise`\<`T`\>

Promise 对象

### ms

`number`

超时时间（毫秒）

## Returns

`Promise`\<`T`\>

Promise

## Example

```ts
timeout(fetch('https://api.example.com'), 5000)
  .then(response => response.json())
  .catch(error => console.error('请求超时'))
```
