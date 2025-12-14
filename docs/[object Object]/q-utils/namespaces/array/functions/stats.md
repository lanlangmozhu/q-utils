[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [array](../README.md) / stats

# Function: stats()

> **stats**(`arr`): `object`

Defined in: [array/basic.ts:215](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/array/basic.ts#L215)

计算数组的统计信息

## Parameters

### arr

要计算的数组

`number`[] | `null` | `undefined`

## Returns

`object`

统计信息对象

### sum

> **sum**: `number`

### avg

> **avg**: `number`

### min

> **min**: `number`

### max

> **max**: `number`

### length

> **length**: `number`

## Example

```typescript
stats([1, 2, 3, 4, 5])
// 返回 { sum: 15, avg: 3, min: 1, max: 5, length: 5 }
```
