[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [number](../README.md) / movingAverage

# Function: movingAverage()

> **movingAverage**(`values`, `windowSize`): `number`[]

Defined in: [number/analysis.ts:50](https://github.com/lanlangmozhu/q-utils/blob/main/src/number/analysis.ts#L50)

计算移动平均

## Parameters

### values

数值数组

`number`[] | `null` | `undefined`

### windowSize

窗口大小

`number` | `null` | `undefined`

## Returns

`number`[]

移动平均数组

## Example

```ts
movingAverage([1, 2, 3, 4, 5], 3) // [2, 3, 4]
```
