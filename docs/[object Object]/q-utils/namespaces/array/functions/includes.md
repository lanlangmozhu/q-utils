[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / includes

# Function: includes()

> **includes**\<`T`\>(`arr`, `subArr`, `compareFn?`): `boolean`

Defined in: [array/compare.ts:103](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/compare.ts#L103)

检查数组是否包含子数组

## Type Parameters

### T

`T`

## Parameters

### arr

主数组

`T`[] | `null` | `undefined`

### subArr

子数组

`T`[] | `null` | `undefined`

### compareFn?

(`a`, `b`) => `boolean`

可选的比较函数

## Returns

`boolean`

是否包含

## Example

```typescript
includes([1, 2, 3, 4], [2, 3])
// 返回 true
```
