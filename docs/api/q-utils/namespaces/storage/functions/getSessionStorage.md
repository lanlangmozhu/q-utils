[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [storage](../README.md) / getSessionStorage

# Function: getSessionStorage()

> **getSessionStorage**\<`T`\>(`key`, `defaultValue`): `T`

Defined in: [storage/sessionStorage.ts:46](https://github.com/lanlangmozhu/q-utils/blob/main/src/storage/sessionStorage.ts#L46)

从 sessionStorage 获取数据

## Type Parameters

### T

`T`

## Parameters

### key

`string`

存储的键名

### defaultValue

`T`

当键不存在时返回的默认值

## Returns

`T`

存储的值或默认值

## Example

```ts
// 获取一个简单值
const tabId = getSessionStorage('currentTabId', '1');

// 获取一个对象
const pageState = getSessionStorage('pageState', { scrollPos: 0 });
```
