[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [storage](../README.md) / removeSessionStorage

# Function: removeSessionStorage()

> **removeSessionStorage**(`key`): `boolean`

Defined in: [storage/sessionStorage.ts:104](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/storage/sessionStorage.ts#L104)

从 sessionStorage 中移除数据

## Parameters

### key

`string`

要移除的键名

## Returns

`boolean`

移除是否成功

## Example

```ts
// 移除一个存储项
removeSessionStorage('pageState');
```
