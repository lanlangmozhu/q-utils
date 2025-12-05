[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / union

# Function: union()

> **union**\<`T`\>(`arr1`, `arr2`, `compareFn?`): `T`[]

Defined in: [array/compare.ts:72](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/compare.ts#L72)

计算数组并集

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

并集数组

## Example

```typescript
union([1, 2, 3], [2, 3, 4])
// 返回 [1, 2, 3, 4]
```
