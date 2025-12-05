[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / chunk

# Function: chunk()

> **chunk**\<`T`\>(`arr`, `size`): `T`[][]

Defined in: [array/basic.ts:105](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/basic.ts#L105)

将数组分割成指定大小的块

## Type Parameters

### T

`T`

## Parameters

### arr

要分割的数组

`T`[] | `null` | `undefined`

### size

`number`

每个块的大小

## Returns

`T`[][]

分割后的数组块

## Example

```typescript
chunk([1, 2, 3, 4, 5], 2)
// 返回 [[1, 2], [3, 4], [5]]
```
