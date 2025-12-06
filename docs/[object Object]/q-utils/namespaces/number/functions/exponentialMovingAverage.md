[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [number](../README.md) / exponentialMovingAverage

# Function: exponentialMovingAverage()

> **exponentialMovingAverage**(`values`, `alpha`): `number`[]

Defined in: [number/analysis.ts:75](https://github.com/lanlangmozhu/q-utils/blob/main/src/number/analysis.ts#L75)

计算指数移动平均

## Parameters

### values

数值数组

`number`[] | `null` | `undefined`

### alpha

平滑因子

`number` | `null` | `undefined`

## Returns

`number`[]

指数移动平均数组

## Example

```ts
exponentialMovingAverage([1, 2, 3, 4, 5], 0.2) // [1, 1.2, 1.56, 2.048, 2.6384]
```
