[**q-utils v1.0.0**](../../../../README.md)

***

[q-utils](../../../../README.md) / [number](../README.md) / compound

# Function: compound()

> **compound**(`principal`, `rate`, `time`, `frequency`): `number`

Defined in: [number/finance.ts:17](https://github.com/lanlangmozhu/q-utils/blob/main/src/number/finance.ts#L17)

计算复利

## Parameters

### principal

`number`

本金

### rate

`number`

年利率

### time

`number`

时间（年）

### frequency

`number` = `1`

复利频率（每年复利次数），默认为1

## Returns

`number`

最终金额

## Example

```ts
compound(1000, 0.05, 1) // 1050
compound(1000, 0.05, 1, 12) // 1051.16
```
