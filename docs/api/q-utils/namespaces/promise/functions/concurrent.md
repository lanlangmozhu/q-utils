[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [promise](../README.md) / concurrent

# Function: concurrent()

> **concurrent**\<`T`\>(`tasks`, `limit`): `Promise`\<`T`[]\>

Defined in: [promise/control.ts:76](https://github.com/lanlangmozhu/q-utils/blob/main/src/promise/control.ts#L76)

并发控制

## Type Parameters

### T

`T`

## Parameters

### tasks

() => `Promise`\<`T`\>[]

任务数组

### limit

`number`

并发限制

## Returns

`Promise`\<`T`[]\>

Promise

## Example

```ts
const tasks = [
  () => fetch('https://api1.example.com'),
  () => fetch('https://api2.example.com'),
  () => fetch('https://api3.example.com')
];
concurrent(tasks, 2).then(results => console.log(results))
```
