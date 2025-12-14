[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [array](../README.md) / difference

# Function: difference()

> **difference**\<`T`\>(`arr1`, `arr2`, `compareFn?`): `T`[]

Defined in: [array/compare.ts:18](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/array/compare.ts#L18)

计算数组差集

## Type Parameters

### T

`T`

## Parameters

### arr1

第一个数组

`T`[] | `null` | `undefined`

### arr2

第二个数组

`T`[] | `null` | `undefined`

### compareFn?

(`a`, `b`) => `boolean`

可选的比较函数

## Returns

`T`[]

差集数组

## Example

```typescript
difference([1, 2, 3], [2, 3, 4])
// 返回 [1]
```
