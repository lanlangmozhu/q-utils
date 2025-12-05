[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [number](../README.md) / forecast

# Function: forecast()

> **forecast**(`values`, `periods`): `number`[]

Defined in: [number/analysis.ts:199](https://github.com/lanlangmozhu/q-utils/blob/main/src/number/analysis.ts#L199)

计算预测值

## Parameters

### values

数值数组

`number`[] | `null` | `undefined`

### periods

预测期数

`number` | `null` | `undefined`

## Returns

`number`[]

预测值数组

## Example

```ts
forecast([1, 2, 3, 4, 5], 2) // [6, 7]
```
