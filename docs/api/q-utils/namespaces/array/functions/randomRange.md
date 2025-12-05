[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / randomRange

# Function: randomRange()

> **randomRange**\<`T`\>(`arr`, `start`, `end`): `T` \| `undefined`

Defined in: [array/random.ts:87](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/random.ts#L87)

随机获取指定范围内的元素

## Type Parameters

### T

`T`

## Parameters

### arr

`T`[]

源数组

### start

`number`

起始索引

### end

`number`

结束索引

## Returns

`T` \| `undefined`

指定范围内的随机元素

## Example

```typescript
randomRange([1, 2, 3, 4, 5], 1, 3)
// 可能返回 2, 3, 4 中的任意一个
```
