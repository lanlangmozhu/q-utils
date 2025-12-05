[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / uniqueBy

# Function: uniqueBy()

> **uniqueBy**\<`T`, `K`\>(`arr`, `keyOrFn`): `T`[]

Defined in: [array/basic.ts:164](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/basic.ts#L164)

根据指定条件去重

## Type Parameters

### T

`T`

### K

`K` *extends* `string` \| `number` \| `symbol`

## Parameters

### arr

`T`[]

要去重的数组

### keyOrFn

去重的键或比较函数

`K` | (`a`, `b`) => `boolean`

## Returns

`T`[]

去重后的数组

## Example

```typescript
uniqueBy([{ id: 1, value: 1 }, { id: 2, value: 1 }, { id: 3, value: 2 }], 'value')
// 返回 [{ id: 1, value: 1 }, { id: 3, value: 2 }]
```
