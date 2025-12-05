[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / randomItems

# Function: randomItems()

> **randomItems**\<`T`\>(`arr`, `count`): `T`[]

Defined in: [array/random.ts:34](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/random.ts#L34)

从数组中随机获取指定数量的元素

## Type Parameters

### T

`T`

## Parameters

### arr

`T`[]

源数组

### count

`number`

需要获取的元素数量

## Returns

`T`[]

随机获取的元素数组

## Example

```typescript
randomItems([1, 2, 3, 4, 5], 3)
// 可能返回 [1, 3, 5] 等任意三个元素的组合
```
