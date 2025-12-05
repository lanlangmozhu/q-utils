[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [array](../README.md) / groupBy

# Function: groupBy()

> **groupBy**\<`T`, `K`\>(`arr`, `keyOrFn`): `Record`\<`string`, `T`[]\>

Defined in: [array/group.ts:17](https://github.com/lanlangmozhu/q-utils/blob/main/src/array/group.ts#L17)

按指定条件将数组元素分组

## Type Parameters

### T

`T`

### K

`K` *extends* `string` \| `number` \| `symbol`

## Parameters

### arr

要分组的数组

`T`[] | `null` | `undefined`

### keyOrFn

分组的键或转换函数

`K` | (`item`) => `string` \| `number`

## Returns

`Record`\<`string`, `T`[]\>

分组后的对象

## Example

```typescript
groupBy([1, 2, 3, 4, 5, 6], n => n % 2 === 0 ? '偶数' : '奇数')
// 返回 { '偶数': [2, 4, 6], '奇数': [1, 3, 5] }
```
