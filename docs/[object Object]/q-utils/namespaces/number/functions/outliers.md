[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [number](../README.md) / outliers

# Function: outliers()

> **outliers**(`values`, `threshold`): `number`[]

Defined in: [number/analysis.ts:270](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/number/analysis.ts#L270)

计算异常值

## Parameters

### values

数值数组

`number`[] | `null` | `undefined`

### threshold

阈值（标准差的倍数）

`number` | `null` | `undefined`

## Returns

`number`[]

异常值数组

## Example

```ts
outliers([1, 2, 3, 100, 4, 5], 2) // [100]
```
