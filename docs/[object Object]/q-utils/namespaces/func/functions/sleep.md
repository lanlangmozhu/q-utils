[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [func](../README.md) / sleep

# Function: sleep()

> **sleep**(`ms`): `Promise`\<`void`\>

Defined in: [function/sleep.ts:25](https://github.com/lanlangmozhu/q-utils/blob/main/src/function/sleep.ts#L25)

延迟指定时间
提供一个Promise，在指定的毫秒数后解析

## Parameters

### ms

`number`

延迟的毫秒数

## Returns

`Promise`\<`void`\>

返回一个Promise，在指定时间后解析

## Example

```ts
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
