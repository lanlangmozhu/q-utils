[**qh5-utils v1.0.0**](../../../../README.md)

***

[qh5-utils](../../../../README.md) / [number](../README.md) / trend

# Function: trend()

> **trend**(`values`): `number`

Defined in: [number/analysis.ts:99](https://github.com/lanlangmozhu/qh5-utils/blob/main/src/number/analysis.ts#L99)

计算趋势

## Parameters

### values

数值数组

`number`[] | `null` | `undefined`

## Returns

`number`

趋势（1: 上升, -1: 下降, 0: 平稳）

## Example

```ts
trend([1, 2, 3, 4, 5]) // 1
trend([5, 4, 3, 2, 1]) // -1
```
