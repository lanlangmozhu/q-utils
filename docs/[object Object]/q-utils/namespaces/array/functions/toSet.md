[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [array](../README.md) / toSet

# Function: toSet()

> **toSet**\<`T`, `R`\>(`arr`, `transformFn?`): `Set`\<`R`\>

Defined in: [array/transform.ts:78](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/array/transform.ts#L78)

将数组转换为Set

## Type Parameters

### T

`T`

### R

`R` = `T`

## Parameters

### arr

源数组

`T`[] | `null` | `undefined`

### transformFn?

(`item`) => `R`

转换函数

## Returns

`Set`\<`R`\>

转换后的Set

## Example

```typescript
toSet([1, 2, 3, 3, 4, 4, 5])
// 返回 Set(5) { 1, 2, 3, 4, 5 }
```
