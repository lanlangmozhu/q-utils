[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [array](../README.md) / splitIntoGroups

# Function: splitIntoGroups()

> **splitIntoGroups**\<`T`\>(`arr`, `count`, `options`): `T`[][]

Defined in: [array/group.ts:69](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/array/group.ts#L69)

按数量将数组分组

## Type Parameters

### T

`T`

## Parameters

### arr

要分组的数组

`T`[] | `null` | `undefined`

### count

`number`

分组数量

### options

配置选项

\{ `balanced?`: `boolean`; \} | `null` | `undefined`

## Returns

`T`[][]

分组后的数组

## Example

```typescript
splitIntoGroups([1, 2, 3, 4, 5, 6, 7], 3)
// 返回 [[1, 2, 3], [4, 5], [6, 7]]
```
