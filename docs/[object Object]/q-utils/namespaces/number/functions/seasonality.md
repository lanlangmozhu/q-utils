[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [number](../README.md) / seasonality

# Function: seasonality()

> **seasonality**(`values`, `period`): `number`[]

Defined in: [number/analysis.ts:240](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/number/analysis.ts#L240)

计算季节性

## Parameters

### values

数值数组

`number`[] | `null` | `undefined`

### period

周期

`number` | `null` | `undefined`

## Returns

`number`[]

季节性因子数组

## Example

```ts
seasonality([1, 2, 1, 2, 1, 2], 2) // [0.5, 1.5]
```
