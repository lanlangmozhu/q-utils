[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [array](../README.md) / toString

# Function: toString()

> **toString**\<`T`\>(`arr`, `separator`): `string`

Defined in: [array/transform.ts:104](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/array/transform.ts#L104)

将数组转换为字符串

## Type Parameters

### T

`T`

## Parameters

### arr

源数组

`T`[] | `null` | `undefined`

### separator

`string` = `','`

分隔符

## Returns

`string`

转换后的字符串

## Example

```typescript
toString([1, 2, 3], '-')
// 返回 '1-2-3'
```
