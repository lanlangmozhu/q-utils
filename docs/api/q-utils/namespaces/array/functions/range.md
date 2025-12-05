[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / range

# Function: range()

> **range**\<`T`\>(`arr`, `start`, `end`): `T`[]

Defined in: [array/basic.ts:66](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/basic.ts#L66)

获取数组指定范围的元素

## Type Parameters

### T

`T`

## Parameters

### arr

源数组

`T`[] | `null` | `undefined`

### start

`number`

起始索引

### end

`number`

结束索引

## Returns

`T`[]

指定范围的元素数组

## Example

```typescript
range([1, 2, 3, 4, 5], 1, 3)
// 返回 [2, 3]
```
