[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / sortBy

# Function: sortBy()

> **sortBy**\<`T`, `K`\>(`arr`, `keyOrFn`, `order`): `T`[]

Defined in: [array/sort.ts:18](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/sort.ts#L18)

根据指定条件对数组元素进行排序

## Type Parameters

### T

`T`

### K

`K` *extends* `string` \| `number` \| `symbol`

## Parameters

### arr

要排序的数组

`T`[] | `null` | `undefined`

### keyOrFn

排序的键或比较函数

`K` | (`a`, `b`) => `number`

### order

排序顺序，'asc' 或 'desc'，默认为 'asc'

`"asc"` | `"desc"`

## Returns

`T`[]

排序后的数组

## Example

```typescript
sortBy([{ id: 1, value: 3 }, { id: 2, value: 1 }, { id: 3, value: 2 }], 'value')
// 返回 [{ id: 2, value: 1 }, { id: 3, value: 2 }, { id: 1, value: 3 }]
```
