[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [array](../README.md) / intersection

# Function: intersection()

> **intersection**\<`T`\>(`arr1`, `arr2`, `compareFn?`): `T`[]

Defined in: [array/compare.ts:45](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/array/compare.ts#L45)

计算数组交集

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

交集数组

## Example

```typescript
intersection([1, 2, 3], [2, 3, 4])
// 返回 [2, 3]
```
