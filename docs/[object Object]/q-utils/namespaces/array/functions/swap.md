[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [array](../README.md) / swap

# Function: swap()

> **swap**\<`T`\>(`arr`, `index1`, `index2`): `T`[]

Defined in: [array/operation.ts:67](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/array/operation.ts#L67)

交换数组中的两个元素

## Type Parameters

### T

`T`

## Parameters

### arr

要操作的数组

`T`[] | `null` | `undefined`

### index1

`number`

第一个元素的索引

### index2

`number`

第二个元素的索引

## Returns

`T`[]

交换后的数组

## Example

```typescript
swap([1, 2, 3, 4], 0, 3)
// 返回 [4, 2, 3, 1]
```
