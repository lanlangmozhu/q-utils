[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / chunkGroups

# Function: chunkGroups()

> **chunkGroups**\<`T`\>(`arr`, `size`): `T`[][]

Defined in: [array/group.ts:47](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/group.ts#L47)

按大小将数组分组

## Type Parameters

### T

`T`

## Parameters

### arr

要分组的数组

`T`[] | `null` | `undefined`

### size

`number`

每组的大小

## Returns

`T`[][]

分组后的数组

## Example

```typescript
chunk([1, 2, 3, 4, 5], 2)
// 返回 [[1, 2], [3, 4], [5]]
```
