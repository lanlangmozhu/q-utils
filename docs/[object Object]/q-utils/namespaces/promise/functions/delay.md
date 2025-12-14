[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [promise](../README.md) / delay

# Function: delay()

> **delay**(`ms`): `Promise`\<`void`\>

Defined in: [promise/control.ts:13](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/promise/control.ts#L13)

延迟执行

## Parameters

### ms

`number`

延迟时间（毫秒）

## Returns

`Promise`\<`void`\>

Promise

## Example

```ts
delay(1000).then(() => console.log('1秒后执行'))
```
