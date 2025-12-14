[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [number](../README.md) / percentile

# Function: percentile()

> **percentile**(`numbers`, `percentile`): `number`

Defined in: [number/statistics.ts:87](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/number/statistics.ts#L87)

计算百分位数

## Parameters

### numbers

`number`[]

数字数组

### percentile

`number`

百分位数 (0-100)

## Returns

`number`

百分位数对应的值

## Example

```ts
percentile([1, 2, 3, 4, 5], 50) // 3
```
