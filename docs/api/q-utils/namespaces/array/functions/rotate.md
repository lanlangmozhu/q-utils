[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / rotate

# Function: rotate()

> **rotate**\<`T`\>(`arr`, `count`): `T`[]

Defined in: [array/operation.ts:45](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/operation.ts#L45)

旋转数组元素

## Type Parameters

### T

`T`

## Parameters

### arr

要操作的数组

`T`[] | `null` | `undefined`

### count

`number`

旋转的次数，正数向右旋转，负数向左旋转

## Returns

`T`[]

旋转后的数组

## Example

```typescript
rotate([1, 2, 3, 4], 1)
// 返回 [4, 1, 2, 3]
```
