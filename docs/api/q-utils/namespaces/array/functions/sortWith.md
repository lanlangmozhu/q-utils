[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / sortWith

# Function: sortWith()

> **sortWith**\<`T`\>(`arr`, `compareFn`): `T`[]

Defined in: [array/sort.ts:94](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/sort.ts#L94)

使用自定义比较函数对数组进行排序

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
sortWith([1, 2, 3, 4], (a, b) => b - a)
// 返回 [4, 3, 2, 1]
```
