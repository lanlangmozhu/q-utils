[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [array](../README.md) / stableSort

# Function: stableSort()

> **stableSort**\<`T`\>(`arr`, `compareFn`): `T`[]

Defined in: [array/sort.ts:113](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/array/sort.ts#L113)

使用稳定排序算法对数组进行排序

## Type Parameters

### T

`T`

## Parameters

### arr

要排序的数组

`T`[] | `null` | `undefined`

### compareFn

(`a`, `b`) => `number`

比较函数

## Returns

`T`[]

排序后的数组

## Example

```typescript
stableSort([{ id: 1, value: 1 }, { id: 2, value: 1 }], (a, b) => a.value - b.value)
// 返回 [{ id: 1, value: 1 }, { id: 2, value: 1 }]，保持相等元素的原始顺序
```
