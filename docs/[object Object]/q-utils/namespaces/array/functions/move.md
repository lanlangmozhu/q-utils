[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / move

# Function: move()

> **move**\<`T`\>(`arr`, `fromIndex`, `toIndex`): `T`[]

Defined in: [array/operation.ts:24](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/operation.ts#L24)

移动数组元素到指定位置

## Type Parameters

### T

`T`

## Parameters

### arr

要操作的数组

`T`[] | `null` | `undefined`

### fromIndex

`number`

要移动的元素的索引

### toIndex

`number`

目标位置的索引

## Returns

`T`[]

移动后的数组

## Example

```typescript
move([1, 2, 3, 4], 1, 3)
// 返回 [1, 3, 4, 2]
```
