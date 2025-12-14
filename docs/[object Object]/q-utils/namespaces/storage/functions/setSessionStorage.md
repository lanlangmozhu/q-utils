[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [storage](../README.md) / setSessionStorage

# Function: setSessionStorage()

> **setSessionStorage**\<`T`\>(`key`, `value`): `boolean`

Defined in: [storage/sessionStorage.ts:79](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/storage/sessionStorage.ts#L79)

将数据存储到 sessionStorage

## Type Parameters

### T

`T`

## Parameters

### key

`string`

存储的键名

### value

`T`

要存储的值

## Returns

`boolean`

存储是否成功

## Example

```ts
// 存储一个简单值
setSessionStorage('currentTabId', '2');

// 存储一个对象
setSessionStorage('pageState', { scrollPos: 250, activeSection: 'comments' });
```
